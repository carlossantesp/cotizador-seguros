import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import styled from "@emotion/styled";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin-inline: auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResume] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const { datos, cotizacion } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResume={setResume} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        <Resumen datos={datos} />
        {!loading ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
