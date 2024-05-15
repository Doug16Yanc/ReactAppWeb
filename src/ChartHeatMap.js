import React from "react";
import Chart from "react-apexcharts";

const dataBase = {
    Animais: [120, 115, 132, 140],
    Caprinos: [60, 57, 64, 75],
    Ovinos: [60, 58, 68, 65],
};

const arrIndex = Object.keys(dataBase);
const arrValues = Object.values(dataBase);

const ChartHeat = () => {
    const data = arrIndex.map((animal, i) => ({
        name: animal,
        data: arrValues[i].map((value, j) => ({
            x: j,
            y: value,
        })),
    }));

    const options = {
        chart: {
            type: "heatmap",
            height: 500,
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 50,
                            name: "Baixo",
                            color: "#00A100",
                        },
                        {
                            from: 51,
                            to: 100,
                            name: "Médio",
                            color: "#128FD9",
                        },
                        {
                            from: 101,
                            to: 150,
                            name: "Alto",
                            color: "#FFB200",
                        },
                        {
                            from: 151,
                            to: 200,
                            name: "Muito Alto",
                            color: "#FF0000",
                        },
                    ],
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["Janeiro", "Fevereiro", "Março", "Abril"],
        },
        title: {
            text: "Heatmap - Quantitativo Animal",
        },
    };

    return (
        <div>
            <Chart options={options} series={data} type="heatmap" height={400} />
        </div>
    );
};

export default ChartHeat;
