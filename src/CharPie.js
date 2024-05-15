import React from "react";
import Chart from "react-apexcharts";

const dataBase = {
  Animais: [120, 115, 132, 140],
  Caprinos: [60, 57, 64, 75],
  Ovinos: [60, 58, 68, 65],
};

const arrIndex = Object.keys(dataBase);
const arrValues = Object.values(dataBase);

const ChartPie = () => {
  const data = arrIndex.map((label, i) => ({
    x: label,
    y: arrValues.reduce((acc, val) => acc + val[i], 0),
  }));

  const options = {
    chart: {
      type: "pie",
      height: 400,
    },
    labels: arrIndex,
    title: {
      text: "Quantitativo animal",
    },
  };

  return (
    <div>
      <Chart options={options} series={data} type="pie" height={400} width={800} />
    </div>
  );
};

export default ChartPie;
