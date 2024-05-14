import React from "react";
import { Chart } from "react-google-charts";
import ChartStyle from "./ChartStyle";

const dataBase = {
    animais : [120, 115, 132, 140],
    caprinos : [60, 57, 64, 75],
    ovinos : [60, 58, 68, 65],
};

let arrIndex = Object.keys(dataBase);
let arrValues = Object.values(dataBase);
export let data = [];

for (let i = 0; i < arrValues[0].length; i++){
    data[i] = arrValues.map((item) => {
        return item[i];
    })
}

data.unshift(arrIndex);

console.log(arrIndex);

export const options = {
    title : "Quantitativo animal",
    curveType : "function",
    legend : { position : "bottom"},
    hAxis : { format : "currency"},
    animation : { duration : 500, easing : "linear", startup : true},
};

const ChartValue = () => {
    return (
        <>
        <ChartStyle>
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            chartLanguage="pt-BR"
        />
        </ChartStyle>
        </>
    )
};

export default Chart;