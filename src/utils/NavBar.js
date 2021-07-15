import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BarraNav=styled.nav`
    display: flex;
    height: 120px;
    align-items: center;
    padding: 10px;
    
    background-color: black;

    
`;

const StyledLink= styled(Link)`
    text-decoration: none;
    margin: 20px;
    &:visited {
    color: #fafafa;
  }
    &:active{
        color: #4949E5;
    }
  
`;

const StyledLinkButton= styled(Link)`
    text-decoration: none;
    margin: 20px;
    padding: 10px;
    height: 20px;
    background-color: red;
    border-radius: 8px;
    &:visited {
    color: #fafafa;
  }
    &:active{
        color: #4949E5;
    }
  
`;

const Logo=styled.img`
    height: 100px;
    margin: 30px;
`;

const RouteContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
`


const NavBar=()=>{
   
    return(
        <BarraNav>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5ycAbqg00bnRu18T5dk_LGZGZxpsQVQXGbUg7k9HBtwKL6ahLVm2RIwvP4f3G_4i73Y&usqp=CAU"/>
        <RouteContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/infectados">Reportes</StyledLink>
        <StyledLink to="/estadisticas">Estadísticas</StyledLink>
        <StyledLinkButton to="/reporte-nuevo-caso">Nuevo Caso</StyledLinkButton>
        </RouteContainer>
        </BarraNav> 
        
    )
};

export default NavBar;