import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import styled from "@emotion/styled";
import Resumen from "./components/Resumen";

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

  const { datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResume={setResume} />
        <Resumen datos={datos} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
