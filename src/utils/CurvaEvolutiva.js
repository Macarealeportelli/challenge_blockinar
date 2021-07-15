import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
// import { Line } from "react-chartjs-2";

const url_data = "https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected";

const CurvaEvolutiva = () => {
  let fechasInfeccion = [];

  const dataFetch = useFetch(url_data);
  //   console.log(dataFetch)

  dataFetch.map((elemento) => {
    fechasInfeccion.push(elemento.infect_date);
  });

  console.log(fechasInfeccion);

  const currentYear=2021;

  const meses = [
    { id: 1, name_month: "Enero", days_month: 31 },
    { id: 2, name_month: "Febrero", days_month: 28 },
    { id: 3, name_month: "Marzo", days_month: 31 },
    { id: 4, name_month: "Abril", days_month: 30 },
    { id: 5, name_month: "Mayo", days_month: 31 },
    { id: 6, name_month: "Junio", days_month: 30 },
    { id: 7, name_month: "Julio", days_month: 31 },
    { id: 8, name_month: "Agosto", days_month: 31 },
    { id: 9, name_month: "Septiembre", days_month: 30 },
    { id: 10, name_month: "Octubre", days_month: 31 },
    { id: 11, name_month: "Noviembre", days_month: 30 },
    { id: 12, name_month: "Diciembre", days_month: 31 },
  ];

  const casosDiarios=[];
  const diasMesActual=[];

  const data = {
    labels: casosDiarios,
    datasets: [
      {
        label: "Fecha",
        data: diasMesActual,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className="header">
        <h1 className="title">Curva Evolutiva - Casos de CoVid-19 por fecha</h1>
      </div>
      {/* <Line data={data} options={options} /> */}
    </div>
  );
};
export default CurvaEvolutiva;
