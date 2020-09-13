// import React, { Component } from 'react';
// import CanvasJSReact from '../assets/canvasjs.react';
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class SplineAreaChart extends Component {
// 	render() {

// 		const options = {
// 			animationEnabled: true,
// 			title: {
// 				// text: "anual users"
// 			},
// 			axisY: {
// 				// title: " number of users",
// 				includeZero: false,
// 				// suffix: " kWh"
// 			},
// 			data: [{
// 				type: "splineArea",
// 				// xValueFormatString: "+",
// 				// yValueFormatString: "",
// 				// showInLegend: true,
//         // legendText: "monthes of the year",
//         color: "#4d34c1",
// 				dataPoints: [
// 					{ x: new Date(2019, 1,1), y: 30 },
// 					{ x: new Date(2019, 2,1), y: 45 },
// 					{ x: new Date(2019,3), y: 76 },
// 					{ x: new Date(2019, 4), y: 79 },
// 					{ x: new Date(2019, 5), y: 81 },
// 					{ x: new Date(2019,6), y: 99 },
// 					{ x: new Date(2019, 7), y: 163 },
// 					{ x: new Date(2019, 8), y: 270 },
// 					{ x: new Date(2019, 9), y: 525 },
// 					{ x: new Date(2019, 10), y: 733 }
// 				]
// 			}]
// 		}

// 		return (
// 		<div>
// 			{/* <h1>React Spline Area Chart</h1> */}
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }

// export default SplineAreaChart;

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const tempDate = new Date();
const datesToGraph = `${tempDate.getFullYear()}-${
  tempDate.getMonth() + 1
}-${tempDate.getDate()}`;

const data = [
  {
    name: "August 19",
    uv: 30,
  },
  {
    name: "September 19",
    uv: 45,
  },
  {
    name: "October 19",
    uv: 76,
  },
  {
    name: "November 19",
    uv: 79,
  },
  {
    name: "December 19",
    uv: 81,
  },
  {
    name: "January 20",
    uv: 99,
  },
  {
    name: "February 20",
    uv: 163,
  },
  {
    name: "March 20",
    uv: 270,
  },
  {
    name: "April 20",
    uv: 525,
  },
  {
    name: "May 20",
    uv: 733,
  },
  {
    name: "June 20",
    uv: 733,
  },{
    name: "July 20",
    uv: 733,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/Lrffmzfc/";

  render() {
    console.log(new Date(2019, 1, 1));
    return (
      <AreaChart
        width={1300}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="white" strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#4d34c1" />
      </AreaChart>
    );
  }
}