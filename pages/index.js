import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getDecryptedCookie, setEncryptedCookie } from "../lib/session";

import makeid from "../lib/random";
import TimeAgoComponent from "../lib/TimeAgoComponent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [usuario, setusuario] = useState();
  const [file, setFile] = useState(null);
  const [imgselected, setimgselected] = useState(null);
  const [descricao, setdescricao] = useState("");
  const [posts, setposts] = useState([]);

  const [loading, setloading] = useState(false);
  var toaststate;

  const getposts = async () => {
    try {
      const res = await fetch("/api/posts/allposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();

      setposts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminar = async (id) => {
    try {
      const res = await fetch("/api/posts/eliminar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      getposts();
    } catch (error) {
      console.log(error);
    }
  };
  const publicar = async () => {
    var postdata = {};
    const now = new Date();
    postdata.createdAt = new Date(now.getTime() + 1);

    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    if (file) {
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
      postdata.imgurl = result.secure_url;
    }

    if (descricao) {
      postdata.descricao = descricao;
    }

    const res = await fetch("/api/posts/novo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postdata),
    });

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
    getposts();
    setloading(false);
    setimgselected(null);
    setFile(null);
  };

  const getsesh = async () => {
    const response = await getDecryptedCookie("authsesh");
    setusuario(response);
  };

  useEffect(() => {
    const changeimg = () => {
      if (file) {
        setimgselected(URL.createObjectURL(file));
      }
    };
    changeimg();
  }, [file]);

  useEffect(() => {
    getposts();
    getsesh();
  }, []);
  return (
    <>
      <div className="">
        <Head>
          <title>ANJE - Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <ToastContainer />
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "30px" }}>
              {posts &&
                posts.map((post) => (
                  <div className="col-md-6 mx-auto">
                    <div className="card card-widget">
                      <div className="card-header">
                        <div className="user-block">
                          <span className="username">
                            <a href="#">ANJE - ANGOLA</a>
                          </span>
                          <span className="description">
                            <TimeAgoComponent timestamp={post.createdAt} />
                          </span>
                        </div>
                        <div className="card-tools">
                          {usuario && usuario.tipo == "administrador" && (
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="remove"
                              onClick={() => {
                                eliminar(post._id);
                              }}
                            >
                              <i className="text-danger fas fa-trash  fa-x3"></i>
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="card-body">
                        {post.imgurl && (
                          <img
                            className="img-fluid pad"
                            src={post.imgurl}
                            alt="Photo"
                          />
                        )}

                        {post.descricao && (
                          <p style={{ marginTop: "10px" }}>{post.descricao}</p>
                        )}
                      </div>
                      <div className="card-footer card-comments"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>

        {usuario && usuario.tipo == "administrador" && (
          <button
            href="#"
            className="btn btn-primary back-to-top"
            data-toggle="modal"
            data-target="#upload"
          >
            <i className="fas fa-pencil-alt"></i> Novo Post
          </button>
        )}
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
                Nova Publicação
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
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="file">
                    <a>
                      {" "}
                      <i
                        className="bi bi-camera-fill"
                        style={{ fontSize: "50px" }}
                      >
                        {" "}
                        +
                      </i>
                    </a>
                    <input
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                {imgselected && (
                  <div className="col-md-6">
                    <div className="float-right">
                      <a
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          setimgselected(null);
                          setFile(null);
                        }}
                      >
                        <i className="bi bi-x"></i>
                      </a>
                    </div>
                    <img className="img-fluid" src={imgselected} />
                  </div>
                )}

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    placeholder="Informação...."
                    onChange={(e) => {
                      setdescricao(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {loading ? (
                <>
                  {" "}
                  <button type="button" className="btn btn-secondary disabled">
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-success disabled">
                    Publicar
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  {file || descricao ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={publicar}
                      data-dismiss="modal"
                    >
                      Publicar
                    </button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
