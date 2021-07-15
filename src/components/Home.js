import React from "react";
import Card from "../utils/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px;
  
`;

const Header = styled.h1`
  font-size: 60px;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Header>Avance Epidemiológico CoVid-19</Header>
      <CardContainer>
        <Card
          title={"Reporte de Casos Confirmados"}
          description={
            "Conozca el reporte de los casos confirmados de CoVid-19"
          }
          url_imagen={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGsp6OR6zbMSYLahkcUAqszv_n-H4w1-WDg&usqp=CAU"
          }
          ruta={"infectados"}
        />
        <Card
          title={"CoVid en el Mundo"}
          description={"Conozca el estado del CoVid en el mundo"}
          url_imagen={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfS24FqmOOZomYiWM7kLGVD74cvA9Ygw5gbA&usqp=CAU"
          }
          ruta={"estadisticas"}
        />
        <Card
          title={"Reporte un Nuevo caso"}
          description={
            "Registre los casos confirmados de CoVid-19 en nuestra base de datos"
          }
          url_imagen={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQoeRvgsyqOgbkJ20mUfZZ8HRZokOCHxAXg&usqp=CAU"
          }
          ruta={"reporte-nuevo-caso"}
        />
      </CardContainer>
    </Container>
  );
};

export default Home;
