import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineAreaChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				// text: "anual users"
			},
			axisY: {
				// title: " number of users",
				includeZero: false,
				// suffix: " kWh"
			},
			data: [{
				type: "splineArea",
				// xValueFormatString: "+",
				// yValueFormatString: "",
				// showInLegend: true,
        // legendText: "monthes of the year",
        color: "#4d34c1",
				dataPoints: [
					{ x: new Date(2019, 1), y: 30 },
					{ x: new Date(2019, 2), y: 45 },
					{ x: new Date(2019,3), y: 76 },
					{ x: new Date(2019, 4), y: 79 },
					{ x: new Date(2019, 5), y: 81 },
					{ x: new Date(2019,6), y: 99 },
					{ x: new Date(2019, 7), y: 163 },
					{ x: new Date(2019, 8), y: 270 },
					{ x: new Date(2019, 9), y: 525 },
					{ x: new Date(2019, 10), y: 733 }
				]
			}]
		}
		
		return (
		<div>
			{/* <h1>React Spline Area Chart</h1> */}
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineAreaChart;                           