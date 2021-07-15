import React from "react";
import InfectadosPorPais from "../utils/InfectadosPorPais";
import ListadoPaises from "../utils/ListadoPaises";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Header = styled.h1`
  font-size: 60px;
  text-align: center;
`;


const Estadisticas = () => {

    return (
    <Container>
      <Header>CoVid-19 en el Mundo</Header>
      <h4>Listado de Paises con personas Infectadas por CoVid-19</h4>
      <ListadoPaises/>
      <h4>Cantidad de Infectados por País</h4>
      <InfectadosPorPais />
    </Container>
  );
};

export default Estadisticas;
