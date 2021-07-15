import React from 'react';
// import CurvaEvolutiva from '../utils/CurvaEvolutiva';
import TablaInfectados from '../utils/TablaInfectados';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  font-size: 60px;
  text-align: center;
`;

const Reportes =()=>{
    return(
        <Container>
       <Header>Casos Reportados de CoVid-19</Header>
        <TablaInfectados/>
        {/* <CurvaEvolutiva/> */}
        </Container>
    )
};

export default Reportes;