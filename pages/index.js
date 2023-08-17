import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import makeid from "../lib/random";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ANJE - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "30px" }}>
            <div className="col-md-6 mx-auto">
              {" "}
              {/* Use mx-auto to center */}
              <div className="card card-widget">
                <div className="card-header">
                  <div className="user-block">
                    <span className="username">
                      <a href="#">ANJE - ANGOLA</a>
                    </span>
                    <span className="description">7:30 PM Today</span>
                  </div>
                </div>
                <div className="card-body">
                  <img
                    className="img-fluid pad"
                    src="https://picsum.photos/800/600"
                    alt="Photo"
                  />

                  <p style={{ marginTop: "10px" }}>
                    I took this photo this morning. What do you guys think?
                  </p>
                </div>
                <div className="card-footer card-comments"></div>
              </div>
            </div>

            <div className="col-md-6 mx-auto">
              {" "}
              {/* Use mx-auto to center */}
              <div className="card card-widget">
                <div className="card-header">
                  <div className="user-block">
                    <span className="username">
                      <a href="#">ANJE - ANGOLA</a>
                    </span>
                    <span className="description">7:30 PM Today</span>
                  </div>
                </div>
                <div className="card-body">
                  <img
                    className="img-fluid pad"
                    src="https://picsum.photos/800/600"
                    alt="Photo"
                  />

                  <p style={{ marginTop: "10px" }}>
                    I took this photo this morning. What do you guys think?
                  </p>
                </div>
                <div className="card-footer card-comments"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <a
        id="back-to-top"
        href="#"
        className="btn btn-primary back-to-top"
        role="button"
      >
        <i className="fas fa-pencil-alt"></i> Novo Post
      </a>
    </div>
  );
}
