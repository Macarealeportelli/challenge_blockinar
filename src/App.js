import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Reportes from "./components/Reportes";
import Estadisticas from "./components/Estadisticas";
import NavBar from "./utils/NavBar";
import ReporteNuevoCaso from "./components/ReporteNuevoCaso";
import Footer from "./utils/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: "Exo 2";
  
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infectados" component={Reportes} />
          <Route exact path="/estadisticas" component={Estadisticas} />
          <Route
            exact
            path="/reporte-nuevo-caso"
            component={ReporteNuevoCaso}
          />
        </Switch>

        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
