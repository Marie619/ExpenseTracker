import React from "react";
import ChartBar from "./ChartBar";
import style from "./Chart.module.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = Math.max(...dataPointValues);

  return (
    <div className={style.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
