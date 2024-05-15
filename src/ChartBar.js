import React from "react";
import Chart from "react-apexcharts";

const dataBase = {
    Animais: [120, 115, 132, 140],
    Caprinos: [60, 57, 64, 75],
    Ovinos: [60, 58, 68, 65],
};

const arrIndex = Object.keys(dataBase);
const arrValues = Object.values(dataBase);

const ChartBar = () => {
    const data = arrValues.map((_, i) => ({
        name: arrIndex[i],
        data: arrValues.map((item) => item[i]),
    }));

    const options = {
        chart: {
            type: "bar",
            height: 400,
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            categories: arrIndex,
        },
        title: {
            text: "Quantitativo animal",
        },
    };

    return (
        <div>
            <Chart
                options={options}
                series={data}
                type="bar"
                height={400}
                width={800}
            />
        </div>
    );
};

export default ChartBar;
