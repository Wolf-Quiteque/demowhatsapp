import Head from "next/head";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDecryptedCookie } from "../lib/session";
import Star from "./components/star";

const Dummy = () => {
  // Sample data for social media posts

  var toaststate;

  const [modalComment, setModalComment] = useState(null);
  const [newPostCaption, setNewPostCaption] = useState("");
  const [file, setfile] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likes, setlikes] = useState([]);

  const [commentario, setcommentario] = useState("");
  const [commentarios, setcommentarios] = useState([]);

  const [imgselected, setimgselected] = useState(false);
  const [activePostId, setactivePostId] = useState(false);

  const [showtModalPost, setModalPostsetModalPost] = useState(null);

  const [posts, setPosts] = useState([]);
  const [user, setuser] = useState(false);

  var postArray = [];
  // Function to handle star click
  const handleStarClick = (postId) => {
    // Logic to handle star click
    console.log("Star clicked for post with ID:", postId);
  };

  const getuser = async () => {
    const response = await getDecryptedCookie("authsesh");
    setuser(response);
    return response;
  };

  // Function to load more posts (infinite scroll)
  const loadMorePosts = () => {
    // Logic to load more posts
    console.log("Loading more posts...");
  };

  // useEffect to mimic infinite scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMorePosts();
    }
  };
  const handleCommentClick = (imageUrl) => {
    setModalComment(imageUrl);
  };

  const allposts = async () => {
    const res = await fetch("/api/posts/allposts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resul = await res.json();

    setPosts(resul);
  };

  // const allcoments = async () => {
  //   const res = await fetch("/api/posts/allcoments", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: activePostId }),
  //   });

  //   const resul = await res.json();
  //   setcommentarios(resul);
  // };

  const EvniarComentario = async () => {
    const timestamp = new Date();
    var comment = {
      id: activePostId,
      nome: user.nome,
      classe: user.classe,
      timestamp: timestamp,
      commentario: commentario,
      newtimestamp: timestamp,
    };

    if (commentarios) {
      setcommentarios([...commentarios, comment]);
    } else setcommentarios([comment]);
    postArray = posts;
    let post = postArray.find((post) => post._id === activePostId);
    if (post) {
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(comment);
    }

    const res = await fetch("/api/posts/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    setcommentario("");
    // allcoments();
  };

  const handleNewPost = async () => {
    setModalPostsetModalPost(null);
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    const user = await getuser();

    var post = {
      email: user.email,
      timestamp: new Date(),
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      data.append("upload_preset", "rvtitoz5");

      const result = await fetch(
        "https://api.cloudinary.com/v1_1/dup24qnij/image/upload",
        {
          method: "Post",
          body: data,
        }
      ).then((r) => r.json());

      post.imageUrl = result.secure_url;
    }

    if (newPostCaption) {
      post.content = newPostCaption;
    }

    try {
      const res = await fetch("/api/posts/novo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      allposts();
      toast.update(toaststate, {
        render: "postado!",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1000,
      });

      setimgselected(false);
    } catch (err) {
      toast.update(toaststate, {
        render: "Houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    allposts();
    if (!user) {
      getuser();
    }
    postArray = posts;
  }, [posts]);

  return (
    <div className="container">
      <Head>
        <title>Communidade - Anje-Angola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          {user && user.pago ? (
            <button
              className="btn btn-primary"
              onClick={() => setModalPostsetModalPost(true)}
            >
              Novo Post
            </button>
          ) : (
            <button className="btn btn-primary " disabled>
              Activa Conta <br />
              para Publicar
            </button>
          )}
        </div>
        <div
          className={`modal ${showtModalPost ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showtModalPost ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo Post</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalPostsetModalPost(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div
                className="modal-body"
                style={{ maxHeight: "75vh", overflowY: "auto" }}
              >
                {/* Form for adding a new post */}
                <div className="row">
                  <div className="col-md-12"></div>
                </div>
                <div className="col-md-12">
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
                      onChange={(e) => {
                        setfile(e.target.files[0]);
                        setimgselected(URL.createObjectURL(e.target.files[0]));
                      }}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                {imgselected && (
                  <div className="col-md-12">
                    <div className="float-right">
                      <a
                        className="btn btn-sm btn-danger mb-2"
                        onClick={() => {
                          setimgselected(false);
                        }}
                      >
                        <i className="bi bi-x"></i>
                      </a>
                    </div>
                    <img className="img-fluid" src={imgselected} />
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="postCaption" className="form-label">
                    Escrever <i className="fa fa-pencil-alt"></i>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows={4}
                    id="postCaption"
                    value={newPostCaption}
                    onChange={(e) => setNewPostCaption(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNewPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <div
            className={`modal ${modalComment ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: modalComment ? "block" : "none" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Comentarios</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setModalComment(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{ maxHeight: "75vh", overflowY: "auto" }}
                >
                  <div className="card card-widget">
                    <div className="card-footer card-comments">
                      {commentarios &&
                        commentarios.map((c) => (
                          <div className="card-comment">
                            <div className="comment-text">
                              <span className="username">
                                {c.nome}
                                {c.classe === "diamante" && (
                                  <span className="badge float-right bg-primary ml-3">
                                    Diamante
                                  </span>
                                )}
                                {c.classe === "ouro" && (
                                  <span className="badge float-right bg-warning ml-3">
                                    Ouro
                                  </span>
                                )}
                                {c.classe === "platina" && (
                                  <span
                                    className="badge float-right bg-silver ml-3"
                                    style={{ backgroundColor: "#424242" }}
                                  >
                                    Platina
                                  </span>
                                )}

                                {c.classe === "prata" && (
                                  <span
                                    className="badge float-right bg-silverlight ml-3"
                                    style={{ backgroundColor: "#424242" }}
                                  >
                                    Prata
                                  </span>
                                )}

                                {c.classe === "bronze" && (
                                  <span
                                    className="badge float-right bg-brown ml-3"
                                    style={{ backgroundColor: "#8b4513" }}
                                  >
                                    Bronze
                                  </span>
                                )}

                                {c.classe === "Diamante" && (
                                  <span className="badge float-right bg-primary ml-3">
                                    Diamante
                                  </span>
                                )}
                                {c.classe === "Ouro" && (
                                  <span className="badge float-right bg-warning ml-3">
                                    Ouro
                                  </span>
                                )}
                                {c.classe === "Platina" && (
                                  <span
                                    className="badge float-right bg-silver ml-3"
                                    style={{ backgroundColor: "#424242" }}
                                  >
                                    Platina
                                  </span>
                                )}

                                {c.classe === "Prata" && (
                                  <span
                                    className="badge float-right bg-silverlight ml-3"
                                    style={{ backgroundColor: "#424242" }}
                                  >
                                    Prata
                                  </span>
                                )}

                                {c.classe === "Bronze" && (
                                  <span
                                    className="badge float-right bg-brown ml-3"
                                    style={{ backgroundColor: "#8b4513" }}
                                  >
                                    Bronze
                                  </span>
                                )}
                              </span>
                              {c.commentario}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-md-10 ">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="tens algo a dizer?"
                        value={commentario}
                        onChange={(e) => {
                          setcommentario(e.target.value);
                        }}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-2">
                      {user.pago ? (
                        <button
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                          onClick={() => {
                            EvniarComentario();
                          }}
                        >
                          enviar
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          disabled
                          style={{ width: "100%" }}
                        >
                          enviar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {posts.map((post) => (
            <>
              <div className="col-md-4"></div>
              <div key={post.id} className="col-sm-12 col-md-4 mb-4">
                <div className="card">
                  <div className="card-header">
                    <img
                      className="direct-chat-img mr-3"
                      style={{ height: "30px", width: "30px" }}
                      src={
                        post.avatar
                          ? post.avatar
                          : "https://picsum.photos/200/300"
                      }
                      alt="foto"
                    />
                    {post.user.name}
                    {post.user.membership === "diamante" && (
                      <span className="badge bg-primary ml-3">Diamante</span>
                    )}
                    {post.user.membership === "ouro" && (
                      <span className="badge bg-warning ml-3">Ouro</span>
                    )}
                    {post.user.membership === "platina" && (
                      <span
                        className="badge bg-silver ml-3"
                        style={{ backgroundColor: "#424242" }}
                      >
                        Platina
                      </span>
                    )}

                    {post.user.membership === "prata" && (
                      <span
                        className="badge bg-silverlight ml-3"
                        style={{ backgroundColor: "#424242" }}
                      >
                        Prata
                      </span>
                    )}

                    {post.user.membership === "bronze" && (
                      <span
                        className="badge bg-brown ml-3"
                        style={{ backgroundColor: "#8b4513" }}
                      >
                        Bronze
                      </span>
                    )}

                    {post.user.membership === "Diamante" && (
                      <span className="badge bg-primary ml-3">Diamante</span>
                    )}
                    {post.user.membership === "Ouro" && (
                      <span className="badge bg-warning ml-3">Ouro</span>
                    )}
                    {post.user.membership === "Platina" && (
                      <span
                        className="badge bg-silver ml-3"
                        style={{ backgroundColor: "#424242" }}
                      >
                        Platina
                      </span>
                    )}

                    {post.user.membership === "Prata" && (
                      <span
                        className="badge bg-silverlight ml-3"
                        style={{ backgroundColor: "#424242" }}
                      >
                        Prata
                      </span>
                    )}

                    {post.user.membership === "Bronze" && (
                      <span
                        className="badge bg-brown ml-3"
                        style={{ backgroundColor: "#8b4513" }}
                      >
                        Bronze
                      </span>
                    )}
                  </div>
                  {post && post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      className="card-img-top"
                      style={{ cursor: "pointer" }}
                      alt="Post"
                    />
                  )}
                  <div className="card-body">
                    <p className="card-text">
                      {post && post.content && post.content}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <small className="mr-1">
                          {post && post.comments && post.comments.length}
                        </small>
                        <i
                          className="fa fa-comment mr-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleCommentClick(post.imageUrl);
                            setactivePostId(post._id);
                            setcommentarios(post.comments);
                          }}
                        ></i>{" "}
                        <small className="mr-1">
                          {post && post.likes && post.likes.length}
                        </small>
                        <Star
                          user={user}
                          likes={post.likes}
                          id={post._id}
                          posts={posts}
                          postArray={postArray}
                        />
                      </div>
                      <small className="text-muted">
                        {new Date(post.timestamp).toLocaleDateString("pt-PT", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </small>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-md-4"></div>
            </>
          ))}
          {/* Modal for full-size image */}
        </div>
      </main>
    </div>
  );
};

export default Dummy;
