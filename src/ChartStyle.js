import React from 'react';
import { Chart } from 'react-google-charts';

const ChartStyle = () => {
  const options = {
    charStyle: {
      fontSize: 12,
      color: 'red',
      bold: true,
      italic: false,
    },
  }

  return (
    <ChartStyle
      chartType="LineChart"
      data={[['Year', 'Sales', 'Expenses'], [2004, 1000, 400], [2005, 1170, 460], [2006, 660, 1120], [2007, 1030, 540]]}
      options={options}
      width="100%"
      height="400px"
    />
  );
};


  export default ChartStyle;
