import React from "react";
import { useState } from "react";
import useFetch from "./useFetch";
// import { Bar } from "react-chartjs-2";

const url_paises = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries";

const InfectadosPorPais = () => {
  
    let paises = [];
    let infectados = [];

  const infoPaises = useFetch(url_paises);
  console.log(infoPaises)
    infoPaises.map((elemento)=>{
        paises.push(elemento.name)
        infectados.push(elemento.infected)
    })

console.log(paises, infectados)

  const data = {
    labels: paises,
    datasets: [
      {
        label: "Personas Infectadas",
        data: infectados,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Cantidad de Personas Infectadas por CoVid-19",
      },
    },
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Cantidad de Personas Infectadas por CoVid-19</h1>
      </div>
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
};
export default InfectadosPorPais;
