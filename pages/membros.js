import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dummy() {
  return (
    <div className="container">
      <Head>
        <title>Membros - Anje-Angola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        {/* <div className="row ">
            <div className="col-3 mt-3">
              <div className="card card-widget widget-user shadow-lg">
                <div
                  className="widget-user-header text-white"
                  style={{
                    background: "url('/img/hero-bgg1.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain", // Garante que a imagem seja totalmente visív
                    Maxwidth: "100%",
                    Maxheight: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="widget-user-image">
                  <img
                    className="img-circle"
                    src="https://picsum.photos/200/300"
                    alt="User Avatar"
                    style={{
                      objectFit: "cover",
                      width: "100px", // Defina a largura desejada
                      height: "100px",
                    }}
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <h4>Joel Quiteque</h4>
                <h6>Desenvolvidor</h6>
              </div>
            </div>
          </div> */}
        {/* 
        <div className="row mt-3">
          <div className="text-center col-md-12">
            <h4>A seguir</h4>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card card-widget widget-user-2">
              <div className="widget-user-header bg-dark">
                <div className="widget-user-image">
                  <img
                    className="img-circle elevation-2"
                    src="https://picsum.photos/200/300"
                    alt="User Avatar"
                    style={{
                      objectFit: "cover",
                      width: "65px", // Defina a largura desejada
                      height: "65px",
                    }}
                  />
                </div>
                <h3 className="widget-user-username">Nadia Carmichael</h3>
                <h5 className="widget-user-desc">Lead Developer</h5>{" "}
                <span className="badge badge-info">Diamante</span>
                <span className="ml-3">
                  {" "}
                  <i className="fa fa-envelope text-warning"></i>
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
