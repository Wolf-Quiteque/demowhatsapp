import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

import { getDecryptedCookie, setEncryptedCookie } from "../lib/session";
import axios from "axios";
import { verifyPassword, hashPassword } from "../lib/auth";

const Profile = ({ user }) => {
  var toaststate;
  const { data: session, status } = useSession();

  const [usuario, setusuario] = useState(getDecryptedCookie("authsesh"));

  const [file, setFile] = useState(null);

  const [isEditMode, setEditMode] = useState(false);
  const [senhaAntiga, setsenhaAntiga] = useState("");
  const [senhaAntigaconfirmar, setsenhaAntigaconfirmar] = useState(false);

  const [senhaNova, setsenhaNova] = useState("");
  const [senhaConfirmar, setsenhaConfirmar] = useState("");
  const [loading, setloading] = useState(false);

  const [education, setEducation] = useState(usuario ? usuario.educacao : "");
  const [classe, setclasse] = useState(usuario ? usuario.classe : "");
  const [tipoconta, settipoconta] = useState(usuario ? usuario.tipo : "");

  const [skills, setSkills] = useState(usuario ? usuario.habilidades : "");
  const [notes, setNotes] = useState(usuario ? usuario.motivacao : "");

  const addcomprovativo = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

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

    try {
      await fetch("/api/usuarios/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario.email,
          tipo: tipoconta,
          classe: classe,
          comprovativo: result.secure_url,
        }),
      });

      Getuser();
    } catch (error) {
      console.log(error);
    }

    toast.update(toaststate, {
      render: "enviado com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    // ... Your existing code for Cloudinary upload

    // Simulate form submission
    setTimeout(() => {
      // ... Your existing code for form submission
    }, 2000);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const verificarsenha = async () => {
    const isValid = await verifyPassword(senhaAntiga, usuario.password);
    console.log(isValid);
    setsenhaAntigaconfirmar(isValid);
  };

  const ataulizarUsuario = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    infoUsuario.email = usuario.email;

    try {
      await fetch("/api/usuarios/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoUsuario),
      });
      Getuser();
    } catch (error) {
      console.log(error);
    }
    toast.update(toaststate, {
      render: "alterado com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
  };

  const Mudarsenha = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    const newpassword = await hashPassword(o);
    try {
      await fetch("/api/usuarios/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario.email,
          password: newpassword,
        }),
      });
      Getuser();
    } catch (error) {
      console.log(error);
    }
    toast.update(toaststate, {
      render: "alterado com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    // Add logic to save changes, e.g., send to the server
  };

  const handleAboutmeSaveClick = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    try {
      await fetch("/api/usuarios/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario.email,
          educacao: education,
          habilidades: skills,
          motivacao: notes,
        }),
      });
      Getuser();
    } catch (error) {
      console.log(error);
    }
    setEditMode(false);
    toast.update(toaststate, {
      render: "alterado com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    // Add logic to save changes, e.g., send to the server
  };

  const [infoUsuario, setInfoUsuario] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoUsuario((infoAnterior) => ({ ...infoAnterior, [name]: value }));
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    aoSalvar(infoUsuario);
  };

  const Getuser = async () => {
    try {
      const res = await fetch("/api/usuarios/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
        }),
      });

      const response = await res.json();

      setusuario(response);
      setEncryptedCookie("authsesh", response);
    } catch (error) {
      console.log(error);
    }
  };
  const provincesList = [
    "Bengo",
    "Benguela",
    "Bié",
    "Cabinda",
    "Cuando Cubango",
    "Cuanza Norte",
    "Cuanza Sul",
    "Cunene",
    "Huambo",
    "Huíla",
    "Luanda",
    "Lunda Norte",
    "Lunda Sul",
    "Malanje",
    "Moxico",
    "Namibe",
    "Uíge",
    "Zaire",
  ];
  useEffect(() => {
    Getuser();
  }, []);

  useEffect(() => {
    verificarsenha();
  }, [senhaAntiga]);

  return (
    <section className="content">
      <ToastContainer />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img
                    className="profile-user-img img-fluid img-circle"
                    src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
                    alt="User profile picture"
                  />
                </div>

                {usuario && usuario.estado ? (
                  <div className="text-center text-success">
                    {" "}
                    <small>
                      <i className="fa fa-circle"></i> activo
                    </small>{" "}
                  </div>
                ) : (
                  <div className="text-center text-danger">
                    {" "}
                    <small>
                      <i className="fa fa-circle"></i> Inactivo
                    </small>{" "}
                  </div>
                )}
                <h3 className="x profile-username text-center">
                  {usuario &&
                    usuario.nome.slice(0, 8) +
                      " " +
                      usuario.ultimonome.slice(0, 8)}
                </h3>
                <p className="text-muted text-center">
                  {usuario && usuario.classe}
                </p>
                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Parceiros</b>{" "}
                    <a className="float-right">
                      {usuario && usuario.parceiro ? usuario.parceiro : 0}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Seguidores</b>{" "}
                    <a className="float-right">
                      {usuario && usuario.seguidores ? usuario.seguidores : 0}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Sobre mim</h3>
              </div>

              <div className="card-body">
                {isEditMode ? (
                  <>
                    <strong>
                      <i className="fas fa-book mr-1"></i> Educação
                    </strong>
                    <textarea
                      className="form-control"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                    <hr />

                    <strong>
                      <i className="fas fa-pencil-alt mr-1"></i> Habilidades
                    </strong>
                    <textarea
                      className="form-control"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                    <hr />
                    <strong>
                      <i className="far fa-file-alt mr-1"></i> Motivação
                    </strong>
                    <textarea
                      className="form-control"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <hr />
                    <button
                      className="btn btn-success"
                      onClick={handleAboutmeSaveClick}
                    >
                      Salvar
                    </button>
                  </>
                ) : (
                  <>
                    <strong>
                      <i className="fas fa-book mr-1"></i> Educação
                    </strong>
                    <p className="text-muted">{education}</p>
                    <hr />

                    <strong>
                      <i className="fas fa-pencil-alt mr-1"></i> Habilidades
                    </strong>
                    <p className="text-muted">{skills}</p>
                    <hr />
                    <strong>
                      <i className="far fa-file-alt mr-1"></i> Motivação
                    </strong>
                    <p className="text-muted">{notes}</p>
                    <hr />
                    <button
                      className="btn btn-primary"
                      onClick={handleEditClick}
                    >
                      Editar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#activity"
                      data-toggle="tab"
                    >
                      Actividade
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#timeline" data-toggle="tab">
                      Pagamentos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#settings" data-toggle="tab">
                      Definições
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="active tab-pane" id="activity">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h5 className="text-successs">
                          {usuario && usuario.estado
                            ? "Acesso aberto para membros Activos"
                            : ""}
                        </h5>
                      </div>
                      <div className="col-md-4 text-center">
                        <h6>16 de Março de 2024</h6>
                        <h6>08H | Centro de conferência de Belas (CCB)</h6>
                        <img
                          src="img/conferencia.jpg"
                          className="img-thumbnail img-fluid"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane" id="timeline">
                    <div>
                      <div className="row">
                        <div className="col-md-6 text-center">
                          {usuario && usuario.comprovativo ? (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <small>Comprovativo pendente</small>
                              </div>
                              <i
                                className="fa fa-file-pdf text-warning fa-x2"
                                style={{ fontSize: "50px" }}
                              ></i>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <small>
                                  {file && file.name
                                    ? file.name
                                    : "sem comprovativos pendentes"}
                                </small>
                              </div>
                              <i
                                className="fa fa-file-pdf text-danger fa-x2"
                                style={{ fontSize: "50px" }}
                              ></i>
                            </>
                          )}

                          {usuario && !usuario.comprovativo && (
                            <div className="mt-3">
                              <label htmlFor="video">
                                <a className="btn btn-primary btn-sm">
                                  {" Carregar documento/imagem"}
                                </a>
                                <input
                                  type="file"
                                  id="video"
                                  accept=".png, .jpeg, .jpg, .pdf"
                                  onChange={(e) => setFile(e.target.files[0])}
                                  style={{ display: "none" }}
                                  key={file && file.name}
                                />
                              </label>
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <div className="mb-1">
                              <h5>
                                {" "}
                                Coordenadas báncarias:
                                <br />
                                AO06006600000676366110127
                                <br />
                                ANJE ANGOLA ASS N P C J EMPRESARIOS
                              </h5>
                            </div>
                            <select
                              className="form-control"
                              onChange={(e) => {
                                settipoconta(e.target.value);
                              }}
                              required
                            >
                              <option value="">Tipo de Conta</option>
                              <option value="Membro">Membro</option>
                              <option value="Parceiro">Parceiro</option>
                            </select>
                          </div>
                          {tipoconta != "" && (
                            <>
                              <div className="mb-3">
                                <select
                                  className="form-control"
                                  onChange={(e) => {
                                    setclasse(e.target.value);
                                  }}
                                  required
                                >
                                  <option value="">Selecione um classe</option>
                                  {tipoconta == "Membro" && (
                                    <>
                                      {" "}
                                      <option value="Diamante">
                                        Diamante - 35.000,00 kz
                                      </option>
                                      <option value="Platina">
                                        Platina - 20.000,00 kz
                                      </option>
                                      <option value="Ouro">
                                        Ouro - 10.000,00 kz
                                      </option>
                                      <option value="Prata">
                                        Prata - 5.000,00 kz
                                      </option>
                                      <option value="Bronze">
                                        Bronze - 1.000,00 kz
                                      </option>
                                    </>
                                  )}

                                  {tipoconta == "Parceiro" && (
                                    <>
                                      {" "}
                                      <option value="Diamante">
                                        Diamante - 100.000,00 kz
                                      </option>
                                      <option value="Platina">
                                        Platina - 75.000,00 kz
                                      </option>
                                      <option value="Ouro">
                                        Ouro - 50.000,00 kz
                                      </option>
                                      <option value="Prata">
                                        Prata - 35.000,00 kz
                                      </option>
                                    </>
                                  )}
                                </select>
                              </div>
                              {classe && tipoconta && file ? (
                                <>
                                  {loading ? (
                                    <button className="btn btn-info disabled">
                                      Enviar
                                    </button>
                                  ) : (
                                    <button
                                      className="btn btn-info"
                                      onClick={() => {
                                        addcomprovativo();
                                      }}
                                    >
                                      Enviar
                                    </button>
                                  )}
                                </>
                              ) : (
                                <button className="btn btn-info disabled">
                                  Enviar
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nome</label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="nome"
                            defaultValue={usuario && usuario.nome}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Sobrenome
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="ultimonome"
                            defaultValue={usuario && usuario.ultimonome}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">BI</label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="bi"
                            defaultValue={usuario && usuario.bi}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Data de Nascimento
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="date"
                            className="form-control"
                            name="dataNascimento"
                            defaultValue={usuario && usuario.dataNascimento}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Província
                        </label>
                        <div className="col-sm-10">
                          <select
                            id="provincia"
                            name="provincia"
                            className="form-control"
                            onChange={handleChange}
                            required
                            value={usuario && usuario.provincia}
                          >
                            <option onChange={handleChange}>
                              Selecione a Província
                            </option>
                            {provincesList.map((province) => (
                              <option key={province} value={province}>
                                {province}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Município
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="municipio"
                            defaultValue={usuario && usuario.municipio}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <buton
                            className="btn btn-success"
                            onClick={() => {
                              ataulizarUsuario();
                            }}
                          >
                            Guardar
                          </buton>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group row mt-5">
                        <label className="col-sm-2 col-form-label">
                          Senha antiga
                        </label>
                        <div className="col-sm-10">
                          <div>
                            <small className="text-danger">
                              {" "}
                              {!senhaAntigaconfirmar && "senha errada"}
                            </small>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={(e) => {
                              setsenhaAntiga(e.target.value);
                            }}
                            placeholder="digite senha"
                          />
                        </div>
                      </div>
                      <div className="form-group row mt-1">
                        <label className="col-sm-2 col-form-label">
                          Nova senha
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="nova senha"
                            onChange={(e) => {
                              setsenhaNova(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row mt-1">
                        <label className="col-sm-2 col-form-label">
                          confirmar
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={(e) => {
                              setsenhaConfirmar(e.target.value);
                            }}
                            placeholder="confirma nova senha"
                          />
                        </div>
                        <small className="text-danger">
                          {" "}
                          {senhaConfirmar != senhaNova &&
                            "Senha não corresponde"}
                        </small>
                        <small className="text-danger">
                          {" "}
                          {senhaConfirmar.length < 6 && "7 Caraters minimo"}
                        </small>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          {senhaConfirmar == senhaNova &&
                          senhaAntigaconfirmar &&
                          senhaConfirmar.length > 6 ? (
                            <button
                              onClick={() => {
                                Mudarsenha();
                              }}
                              className="btn btn-warning btn-sm"
                            >
                              mudar senha
                            </button>
                          ) : (
                            <button className="btn btn-warning btn-sm disabled">
                              Mudar Senha
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
