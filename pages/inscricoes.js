import Head from "next/head";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { getDecryptedCookie, setEncryptedCookie } from "../lib/session";

import "react-toastify/dist/ReactToastify.css";
import makeid from "../lib/random";
import Card from "../lib/Card";

export default function GestaoUsuarios() {
  const [usuarios, setusuarios] = useState();
  const [usuario, setusuario] = useState();
  const [filter, setfilter] = useState(false);

  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();
  const [loading, setloading] = useState(false);
  const [membros, setmembros] = useState([]);
  const [Info, setinfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  var toaststate;
  var pagesarray = [];
  const router = useRouter();

  const Getusuarios = async () => {
    var filter = Info;
    filter.conta = "pendente";

    const res = await fetch("/api/usuarios/allusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: currentPage,
        info: filter,
      }),
    });
    const data = await res.json();
    setmembros(data.usuarios);
    setTotalPages(data.pages);
  };

  const getsesh = async () => {
    const response = await getDecryptedCookie("authsesh");
    if (response) {
      if (response.tipo == "administrador") {
        setusuario(response);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  };

  useEffect(() => {
    setusuarios(null);
    Getusuarios();
  }, [page, Info, currentPage]);

  useEffect(() => {
    if (!usuario) {
      getsesh();
    }
  }, []);

  const Prev = () => {
    if (page == 1) {
      return false;
    }
    setpage(Number(page) - 1);
  };

  const Next = () => {
    if (page == pages) {
      return false;
    }
    setpage(Number(page) + 1);
  };

  const reprovar = async (membro) => {
    try {
      toaststate = toast.loading("aguarde...", { closeOnClick: true });

      const res = await fetch("/api/usuarios/eliminate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: membro._id,
        }),
      });
      const data = await res.json();
      Getusuarios();
      toast.update(toaststate, {
        render: "enviado com sucesso",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      const data = await res.json();
      toast.update(toaststate, {
        render: "houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }
    setloading(false);

    $("#eliminar").modal("hide");
  };

  const aprovar = async (membro) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    try {
      const res = await fetch("/api/usuarios/aprovarmembro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(membro),
      });
      Getusuarios();
      setloading(false);
      toast.update(toaststate, {
        render: "aprovado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      Getusuarios();
      toast.update(toaststate, {
        render: data.message,
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setloading(false);

      $("#novo").modal("hide");
    }

    toast.update(toaststate, {
      render: data.message,
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
  };

  return (
    <div className="container">
      <Head>
        <title>ANJE - Gestão do Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            {/* <h3 className="mt-3 mb-3">Inscrições de novo membros</h3> */}
            <div className="row mb-3">
              <div className="col-md-6 mt-4">
                <button
                  onClick={(e) => {
                    setinfo({
                      comprovativo: {
                        $regex: ".*" + "https://res.cloudinary.com" + ".*",
                        $options: "i",
                      },
                    });
                  }}
                  className="btn btn-sm btn-warning mr-1"
                >
                  <i className="fa fa-coins"></i> pendentes
                </button>
                <button
                  onClick={() => {
                    setfilter(!filter);
                  }}
                  className="btn btn-sm btn-primary"
                >
                  <i className="fa fa-filter"></i> filtros
                </button>
              </div>
            </div>
          </div>

          {filter && (
            <>
              {" "}
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  placeholder="Classe"
                  onChange={(e) => {
                    setinfo({
                      classe: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  placeholder="Nome"
                  onChange={(e) => {
                    setinfo({
                      nome: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setinfo({
                      contacto: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                  placeholder="Telefone"
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setinfo({
                      classe: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                  placeholder="Email"
                >
                  <option value="">Classe</option>

                  <option value="Platina">Diamante - 35.000,00 kz</option>
                  <option value="Diamante">Platina - 20.000,00 kz</option>
                  <option value="Ouro">Ouro - 10.000,00 kz</option>
                  <option value="Prata">Prata - 5.000,00 kz</option>
                  <option value="Bronze">Bronze - 1.000,00 kz</option>
                </select>
              </div>
            </>
          )}

          {membros &&
            membros.map((membro) => (
              <div className="col-md-4">
                <Card
                  //   key={i}
                  class={
                    membro.comprovativo ? "callout-info" : "callout-danger"
                  }
                  membro={membro}
                  onClick={(cliente) => {
                    setclienteinfo(cliente);
                    setcriarproposta(false);
                  }}
                  onApprove={aprovar}
                  onReject={reprovar}
                  loading={loading}
                />
              </div>
            ))}

          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-body table-responsive p-0"></div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li
                    className={`page-item  ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                      }}
                    >
                      Anterior
                    </a>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (n) => (
                      <li
                        key={n}
                        className={`page-item  ${
                          currentPage === n ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() => {
                            setCurrentPage(n);
                          }}
                          href="#"
                        >
                          {n}
                        </a>
                      </li>
                    )
                  )}

                  <li
                    className={`page-item  ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        );
                      }}
                    >
                      Proximo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="eliminar"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="fas fa-trash text-danger fa-2x"></i>
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
                <h3>
                  <p> Reprovar {usuario && usuario.nome} ?</p>
                </h3>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancela
                </button>

                {loading ? (
                  <button type="button" className="btn btn-danger">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Aguarde...</span>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      EliminarUsuario();
                    }}
                  >
                    Elimina
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
