import React, { useRef, useEffect, useState } from "react";

export default function GerirClientes({ usuario }) {
  return <></>;
}

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://usuario-api.emainvest.ao/api/ipo/usuario/get/" +
      context.query.cliente_id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const usuario = await data.json();
  return {
    props: { usuario },
  };
}
