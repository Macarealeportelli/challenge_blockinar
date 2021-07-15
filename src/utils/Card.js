import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Contenedor = styled.div`
    margin: 30px;
    width: 300px;
    height: 400px;
    padding: 10px;
    border: 0.5px solid #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Imagen = styled.img`
    width: 100%;
`

const Titulo = styled.h4`
    font-weight: 800;
    font-size:20px;
`
const Descripcion = styled.p`
    margin-top: 5px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`
const StyledLinkButton= styled(Link)`
    text-decoration: none;
    margin: 20px;
    padding: 10px;
    height: 20px;
    background-color: green;
    border-radius: 8px;
    &:visited {
    color: #fafafa;
  }
    &:active{
        color: #4949E5;
    }
  
`;

const Card = ({ title, ruta , url_imagen, description }) => {
 
    return (
     
        <Contenedor >
          <Imagen src={`${url_imagen}`} />
          <Titulo>{title}</Titulo>
          <Descripcion>{description}</Descripcion>
          <StyledLinkButton to={`/${ruta}`}> Ver Más </StyledLinkButton>
        </Contenedor>
      
    )
};

export default Card;