import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Recuperacao() {
  var toaststate;

  const [email,setemail] = useState("")
  const [contacto,setcontacto] = useState("")
  const [loading,setloading] = useState(false)


  const Enviar = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    try {
      const res = await fetch("/api/usuarios/newpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          contacto:contacto
        }),
      });

      const data = await res.json()
      const SmSmessage = `Seja bem-vindo(a) a ANJE-Angola, é uma honra tê-lo(a) como membro ANJE!\n\nA sua senha da conta ANJE foi alterado com successo.\n\n email:${email}\n senha:${data.password}\n\nAcesse o portal em: https://portal-eta-eight.vercel.app/login\n\nANJE Angola - “Uma Angola feita por todos, e melhor para todos“`;

      const contactsend = [contacto];
      const resmessage = await fetch("https://app.smshub.ao/api/sendsms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken:
            "c4hlDrs2NjzTz9WF1IKDOiJuOxycKVBUvtecSMerq15Hjmxhw6bQ7M2AwVhJ5cJtv1vQJaEKa7vTbF4MsoP0ROKG5xvwgmnbVoK7BUvxGDsmN35YccxK1odj3lsxdYJW8ns55keJoyAdsIPAQ5V2nwiP0ZZRupIl9U3OqbyHi0XQGFSs8BaULBIslrn8bMXISAFdskFBjcz9h88hukLEivstqUNjusB5e7iYbOImhYFzb9musyXIlsIfdVHKefa",
        },
        body: JSON.stringify({
          auth_id: "122792814220057352",
          secret_key:
            "VB9ErlsiFQGfEOpME4HEb6bDXl2LcbKHLAGQbEVjHTAO4P1whIvjqCwg5BT1Fh0N0cSLCE48Hh8YWe2pVWrkcXZUkN0QrMnkJC9o",
          contactNo: contactsend,
          from: "ANJE-ANGOLA",
          message: SmSmessage,
        }),
      });


      
  

    } catch (error) {
      alert("Por favor verifique seu email e use um numero de telemovel activo")
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

 


  return (
    <>
      <Head>
        <title>Recuperar Senha - ANJE</title>
      </Head>
      <ToastContainer />

      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-body">
            <p className="login-box-msg">Esqueceste sua palavra passe ?</p>
            <form action="recover-password.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu Email"
                  onChange={(e)=>{
                    setemail(e.target.value)
                  }}
                />
               <div className="input-group mt-3">
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
                          setcontacto(e.target.value)
                        }}
                        required
                      />
                    </div>
              
              </div>
              <div className="row">
                <div className="col-12">
                 {!loading && ( <button onClick={Enviar} className="btn btn-primary btn-block">
                    requira nova palavra passe
                  </button>)}
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
      </div>
    </>
  );
}
