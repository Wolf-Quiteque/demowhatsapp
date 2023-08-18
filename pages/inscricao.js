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
    e.preventDefault();

    user.tipo = "membro";
    user.conta = "pendente";
    setLoading(true);

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
        setLoading(false);

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
      <div className="register-box" style={{ marginTop: "50px" }}>
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h2>Inscricao</h2>
          </div>
          <div className="card-body">
            <form onSubmit={onFormSubmit}>
              {/* Nome */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  onChange={(e) => {
                    user.nome = e.target.value;
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
                    user.ultimoNome = e.target.value;
                  }}
                  required
                />
              </div>

              {/* Email */}
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
                  <Link href="/login">
                    <a className="btn btn-xs btn-warning btn-block">
                      Iniciar Sessão
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
