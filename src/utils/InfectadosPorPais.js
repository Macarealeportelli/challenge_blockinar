import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const InfectadosPorPais = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    fetch(`http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`)
      .then((res) => res.json())

      .then(
        (data) => console.log(data)
        // setElementos(data)
      );
  }, []);

  return (
    <div>
      <p>soy el grafico de paises</p>
    </div>
  );
};

export default InfectadosPorPais;
