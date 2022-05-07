import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
const totalArray = props.datapoints.map(datapoint => datapoint.value)
const maximumValue = Math.max(...totalArray)

return <div className="chart">
{props.datapoints.map((datapoint) => <ChartBar 
key = {datapoint.label}
value = {datapoint.value}
label = {datapoint.label}
maxValue = {maximumValue}
/>)}
</div>
}
export default Chart