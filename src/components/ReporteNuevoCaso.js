import React from "react";
import FormularioCarga from "../utils/FormularioCarga";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 60px;
  text-align: center;
`;

const ReporteNuevoCaso = () => {
  return (
    <Container>
      <Header>Reporte de Nuevos Casos Confirmados</Header>
      <div>
        <FormularioCarga />
      </div>
    </Container>
  );
};

export default ReporteNuevoCaso;
