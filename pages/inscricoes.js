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

  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();
  const [loading, setloading] = useState(false);
  const [membros, setmembros] = useState([]);
  const [Info, setinfo] = useState({});

  var toaststate;
  var pagesarray = [];
  const router = useRouter();

  const Getusuarios = async () => {
    var filter = Info;
    filter.tipo = "membro";
    filter.conta = "pendente";

    const res = await fetch("/api/usuarios/allusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        page: page,
        info: filter,
      }),
    });
    const data = await res.json();
    setmembros(data.usuarios);
    setnopages(data.pages);
    for (let index = 0; index < data.pages; index++) {
      var number = Number(index) + 1;
      pagesarray.push({ page: number });
    }
    setpages(pagesarray);
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
  }, [page, Info]);

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
        render: data.message,
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      const data = await res.json();
      toast.update(toaststate, {
        render: data.message,
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
            <h3 className="mt-3 mb-3">Inscrições de novo membros</h3>
          </div>

          {membros &&
            membros.map((membro) => (
              <div className="col-md-4">
                <Card
                  //   key={i}
                  class="callout-danger"
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
                  <li className={`page-item  ${page == 1 ? "disabled" : ""}`}>
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        Prev(page);
                      }}
                    >
                      Anterior
                    </a>
                  </li>

                  {pages &&
                    pages.map((n) => (
                      <li
                        className={`page-item  ${
                          page == n.page ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() => {
                            setpage(n.page);
                          }}
                          href="#"
                        >
                          {n.page}
                        </a>
                      </li>
                    ))}

                  <li
                    className={`page-item  ${
                      page == nopages ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        Next(page);
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
