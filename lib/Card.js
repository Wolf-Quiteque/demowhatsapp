import React, { useState } from "react";

export default function Card(props) {
  const { membro, onApprove, onReject, loading } = props;

  return (
    <>
      <div
        className={`callout  ${props.class}`}
        style={{ marginBottom: "5px", color: "#fff" }}
      >
        <h5>
          <i className="fa fa-user"></i> {membro.nome + " " + membro.ultimoNome}
        </h5>
        <small>
          <i className="fa fa-birthday-cake"></i> {membro.dataNascimento}
        </small>
        <h6 className="mt-3">
          <i className="fa fa-fist-raised"></i> Motivo:
          <p style={{ color: "#fad600" }}>{membro.motivacao}</p>
        </h6>
        <div style={{ marginTop: "40px" }}>
          <h6 style={{ fontSize: "14px" }}>
            <i className="fa fa-phone"></i> {membro.contacto}
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            <i className="fa fa-envelope"></i> {membro.email}
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            {" "}
            <i className="fa fa-map-pin"></i>{" "}
            {membro.provincia + ", " + membro.municipio}
          </h6>
        </div>

        <div>
          {loading ? (
            <>
              {" "}
              <button className="btn btn-sm btn-success mr-3 disabled">
                {" "}
                <i className="fa fa-check"></i> aprovar
              </button>
              <button className="btn btn-sm btn-danger disabled">
                {" "}
                <i className="fa fa-times"></i> reprovar
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className="btn btn-sm btn-success mr-3"
                onClick={() => onApprove(membro)}
              >
                {" "}
                <i className="fa fa-check"></i> aprovar
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onReject(membro)}
              >
                {" "}
                <i className="fa fa-times"></i> reprovar
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
