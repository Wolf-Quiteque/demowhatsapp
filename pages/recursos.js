import Head from "next/head";
import Link from "next/link";

import makeid from "../lib/random";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getDecryptedCookie, setEncryptedCookie } from "../lib/session";

export default function Home() {
  const [usuario, setusuario] = useState();
  const [folders, setfolders] = useState([]);
  const [titulo, settitulo] = useState("");
  const [file, setfile] = useState(null);
  const [assets, setassets] = useState([]);

  const [loading, setloading] = useState(false);
  var toaststate;

  const [nome_categoria, setnome_categoria] = useState("");

  const getsesh = async () => {
    const response = await getDecryptedCookie("authsesh");
    setusuario(response);
  };

  const selectfolder = async (colecao) => {
    try {
      const res = await fetch("/api/assets/allassets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "recursos",
          colecao: colecao,
        }),
      });
      const response = await res.json();

      setassets(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getColecoes = async () => {
    try {
      const res = await fetch("/api/colecao/allcolecao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();

      setfolders(response);
    } catch (error) {
      console.log(error);
    }
  };

  const carregar = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());

    const res = await fetch("/api/assets/novo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: result.secure_url,
        tipo: "recursos",
        colecao: titulo,
        titulo: file.name,
      }),
    });
    selectfolder(titulo);
    if (res.status == 200) {
      toast.update(toaststate, {
        render: "ficheiro carregado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } else {
      toast.update(toaststate, {
        render: "Tenta Novamente",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }

    setfile(null);
    $("#upload").modal("hide");
  };

  const NovaCategoria = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    setloading(true);
    try {
      const res = await fetch("/api/colecao/novo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome_categoria,
        }),
      });

      const response = await res.json();

      if (response.message == "success") {
        toast.update(toaststate, {
          render: "Criado com successo",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: true,
        });
        getColecoes();
      } else {
        toast.update(toaststate, {
          render: response.message,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: true,
        });
      }
    } catch (error) {
      toast.update(toaststate, {
        render: "houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: true,
      });
    }
    setloading(false);
    $("#novo").modal("hide");
  };

  useEffect(() => {
    if (!usuario) {
      getsesh();
    }
  }, []);

  useEffect(() => {
    if (titulo) {
      selectfolder(titulo);
    }
  }, [titulo]);

  useEffect(() => {
    getColecoes();
  }, []);
  return (
    <div className="">
      <Head>
        <title>ANJE - Recursos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
        <div className="row">
          <div
            className="col-md-12"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <h1>{titulo ? titulo : "Recursos"}</h1>
            {titulo && (
              <a
                className="backbutton  float-right"
                onClick={() => {
                  settitulo("");
                  setassets(null);
                }}
              >
                <i className="fa fa-arrow-left"></i>
              </a>
            )}
            <>
              {usuario &&
                usuario.tipo == "administrador" &&
                (titulo ? (
                  <>
                    {" "}
                    <a
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#upload"
                      onClick={() => {}}
                    >
                      Carregar ficheiros
                    </a>
                  </>
                ) : (
                  <button
                    className="btn btn-success btn-sm float-right"
                    data-toggle="modal"
                    data-target="#novo"
                  >
                    Nova Coleção <i className="fas fa-plus"></i>
                  </button>
                ))}
            </>
          </div>
          <div className="row">
            {titulo ? (
              <>
                {assets &&
                  assets.map((asset, index) => (
                    <div
                      key={index}
                      className="col-xs-4 col-sm-3 col-md-6 col-4"
                    >
                      <a href={asset.file} target="_blank" className="folder">
                        <i className="bi bi-file-earmark-pdf placeholders"></i>
                        <div className="folder-name">{asset.titulo}</div>
                      </a>
                    </div>
                  ))}
              </>
            ) : (
              folders &&
              folders.map((folder, index) => (
                <div key={index} className="col-xs-4 col-sm-3 col-md-6 col-4">
                  <a
                    className="folder"
                    onClick={async () => {
                      await new Promise((resolve) => setTimeout(resolve, 300));
                      settitulo(folder.nome);
                    }}
                  >
                    <i className="fa fa-folder"></i>
                    <div className="folder-name">{folder.nome}</div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <div
        className="modal fade"
        id="novo"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Criar Nova Coleção
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    onChange={(e) => {
                      setnome_categoria(e.target.value);
                    }}
                    placeholder="Cria uma Nova Coleção"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              {loading ? (
                <button type="button" className="btn btn-primary">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Aguarde...</span>
                  </div>
                </button>
              ) : nome_categoria ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    NovaCategoria();
                  }}
                >
                  Cadastrar
                </button>
              ) : (
                <button type="button" className="btn btn-primary" disabled>
                  Cadastrar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="upload"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Carregar ficheiro
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <label htmlFor="file">
                <div className="mb-3">
                  <a className="upload-icon">
                    <i
                      style={{ fontSize: "60px" }}
                      className="fa fa-upload"
                    ></i>
                    {file && (
                      <div>
                        <span class="badge bg-warning text-white float-right mt-2">
                          {file.name}
                        </span>
                      </div>
                    )}
                  </a>
                </div>

                <input
                  type="file"
                  id="file"
                  accept=".pdf"
                  onChange={(e) => setfile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </label>
              <div>
                {" "}
                {file &&
                  (loading ? (
                    <>
                      {" "}
                      <a className="btn btn-sm btn-success disabled mr-2">
                        carregar
                      </a>
                      <a className="btn btn-sm btn-warning disabled">
                        cancelar
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <a
                        className="btn btn-sm btn-success mr-2"
                        onClick={carregar}
                      >
                        carregar
                      </a>
                      <a
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          setfile(null);
                        }}
                      >
                        cancelar
                      </a>
                    </>
                  ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
