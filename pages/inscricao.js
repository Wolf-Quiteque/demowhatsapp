import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  var user = {};
  const [loading, setLoading] = useState(false);
  const [tipoconta, settipoconta] = useState("");
  const [file, setfile] = useState(null);
  const [form1, setform1] = useState(true);
  const [form2, setform2] = useState(false);

  const [nome, setnome] = useState("");
  const [ultimoNome, setultimoNome] = useState("");
  const [bi, setbi] = useState("");
  const [classe, setclasse] = useState("");

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
  const onFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!file) {
      alert("Comprovativo Obrigatório!");
      setLoading(false);
      return false;
    }
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
      user.comprovativo = result.secure_url;
    }

    user.tipo = "membro";
    user.conta = "pendente";
    user.nome = nome;
    user.bi = bi;
    user.ultimonome = ultimoNome;
    user.tipo = tipoconta;
    user.classe = classe;

    try {
      const res = await fetch("/api/usuarios/novomembro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const response = await res.json();

      if (response.message != "success") {
        toast.error(response.message, {
          autoClose: 2000,
          onClose: () => {
            return false;
          },
        });

        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("houve um erro", {
        autoClose: 2000,
      });
      setLoading(false);
      return false;
    }

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success(
        "Obrigado, caso fou aprovado As credenciais serão enviadas para o seu e-mail. Obrigado.(verifique no spam tambem)",
        {
          autoClose: 4000,
          onClose: () => {
            router.push("/login");
          },
        }
      );
    }, 2000);
  };

  return (
    <>
      {" "}
      <Head>
        <title>Inscrições - ANJE</title>
      </Head>
      <div className="register-box" style={{ marginTop: "30px" }}>
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h2>Inscrição</h2>
          </div>
          <div className="card-body">
            <form onSubmit={onFormSubmit}>
              {/* Nome */}
              {form1 && (
                <>
                  {" "}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="N° BI"
                      onChange={(e) => {
                        setbi(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      onChange={(e) => {
                        setnome(e.target.value);
                      }}
                      required
                    />
                  </div>
                  {/* Último Nome */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Último Nome"
                      onChange={(e) => {
                        setultimoNome(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      onChange={(e) => {
                        user.tipoconta = e.target.value;
                        settipoconta(e.target.value);
                      }}
                      required
                    >
                      <option value="">Tipo de Conta</option>
                      <option value="Membro">Membro</option>
                      <option value="Parceiro">Parcerio</option>
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
                              <option value="Platina">
                                Diamante - 35.000,00 kz
                              </option>
                              <option value="Diamante">
                                Platina - 20.000,00 kz
                              </option>
                              <option value="Ouro">Ouro - 10.000,00 kz</option>
                              <option value="Prata">Prata - 5.000,00 kz</option>
                              <option value="Bronze">
                                Bronze - 1.000,00 kz
                              </option>
                            </>
                          )}

                          {tipoconta == "Parceiro" && (
                            <>
                              {" "}
                              <option value="Platina">
                                Diamante - 100.000,00 kz
                              </option>
                              <option value="Diamante">
                                Platina - 75.000,00 kz
                              </option>
                              <option value="Ouro">Ouro - 50.000,00 kz</option>
                              <option value="Prata">
                                Prata - 35.000,00 kz
                              </option>
                            </>
                          )}
                        </select>
                      </div>
                    </>
                  )}
                  <div className="mb-3">
                    <div>
                      <span>Coordenadas báncarias: </span>
                    </div>
                    <div>
                      <span>AO06006600000676366110127</span>
                    </div>
                    <div>
                      <span>ANJE ANGOLA ASS N P C J EMPRESARIOS</span>
                    </div>
                    <label for="exampleInputFile">Comprovativo</label>
                    <input
                      type="file"
                      id="exampleInputFile"
                      accept=".pdf,.jpg,.png,.jpeg"
                      onChange={(e) => setfile(e.target.files[0])}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-sm btn-info btn-block"
                      onClick={() => {
                        setform1(false);
                        setform2(true);
                      }}
                    >
                      Próximo <i class="fa fa-arrow-alt-circle-right"></i>
                    </button>
                  </div>
                  <span class="text-center mt-4">Já tem conta?</span>
                </>
              )}
              {form2 && (
                <>
                  <div className="mb-3">
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => {
                        setform1(true);
                        setform2(false);
                      }}
                    >
                      <i class="fa fa-arrow-alt-circle-left"></i>
                      Voltar
                    </button>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => {
                        user.email = e.target.value.toLowerCase();
                      }}
                      required
                    />
                  </div>
                  {/* Contacto */}
                  <div className="mb-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">+244</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        data-inputmask='"mask": "(999) 999-9999"'
                        data-mask=""
                        inputmode="number"
                        placeholder="Contacto"
                        onChange={(e) => {
                          user.contacto = e.target.value;
                        }}
                        required
                      />
                    </div>
                  </div>
                  {/* Motivação */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Motivação"
                      onChange={(e) => {
                        user.motivacao = e.target.value;
                      }}
                      required
                    />
                  </div>
                  {/* Data de Nascimento */}
                  <div className="mb-3">
                    <label for="exampleInputFile">Data de Nascimento</label>

                    <input
                      type="date"
                      className="form-control"
                      placeholder="Data de Nascimento"
                      onChange={(e) => {
                        user.dataNascimento = e.target.value;
                      }}
                      required
                    />
                  </div>
                  {/* Província */}
                  <div className="mb-3">
                    <select
                      id="provincia"
                      className="form-control"
                      onChange={(e) => {
                        user.provincia = e.target.value;
                      }}
                      required
                    >
                      <option value="">Selecione a Província</option>
                      {provincesList.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Município */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Município"
                      onChange={(e) => {
                        user.municipio = e.target.value;
                      }}
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={loading}
                      >
                        {loading ? "Aguarde..." : "Registar"}
                      </button>
                    </div>
                  </div>
                </>
              )}
              {!loading && (
                <Link href="/login">
                  <a className="btn btn-xs btn-warning btn-block">
                    Iniciar Sessão
                  </a>
                </Link>
              )}
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
