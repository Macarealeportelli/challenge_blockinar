import React from "react";
import InfectadosPorPais from "../utils/InfectadosPorPais";
import ListadoPaises from "../utils/ListadoPaises";


const Estadisticas = () => {

    

  return (
    <div>
      <h1>Soy Covid en el mundo</h1>
      <h4>Listado de Paises con personas Infectadas por CoVid-19</h4>
      <ListadoPaises/>

      <InfectadosPorPais />
    </div>
  );
};

export default Estadisticas;
