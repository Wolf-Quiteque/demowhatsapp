import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import styles from "./inscritos.module.css"; // Import your stylesheet

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const getsession = async () => {
    if (status === "authenticated") {
      router.replace("/perfil");
    }
  };

  const [value, setvalue] = useState(0);

  const Getinscritos = async () => {
    const res = await fetch("/api/usuarios/inscritos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setvalue(data.lenght);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      Getinscritos();
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); //

  return (
    <>
      <ToastContainer />

      {status == "unauthenticated" ? (
        <>
          <Head>
            <title>Numero de Inscritos</title>
          </Head>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-md-6 mt-5 text-center">
              <h1>{value}</h1>
              <h3>Inscritos</h3>
            </div>
            <div className="col-md-6 mt-5">
              <img src="/img/conferencia.jpg" className="img img-fluid" />
            </div>
            <div className="col-md-3"></div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
