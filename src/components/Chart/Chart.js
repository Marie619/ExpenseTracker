import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

    const totalDataValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const yearMaxValue = Math.max(...totalDataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={yearMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
