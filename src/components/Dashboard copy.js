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
				// type: "splineArea",
				xValueFormatString: "+",
				yValueFormatString: "",
				showInLegend: true,
        legendText: "monthes of the year",
        color: "#4d34c1",
				dataPoints: [
					{ x: "january", y: 450 },
					{ x: "February", y: 74.102 },
					{ x: "march", y: 72.569 },
					{ x: "april", y: 72.743 },
					{ x: "may", y: 72.381 },
					{ x: "june", y: 71.406 },
					{ x:"july" , y: 73.163 },
					{ x: "auguest", y: 74.270 },
					{ x:"september" , y: 72.525 },
					{ x:"october" , y: 73.121 }
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