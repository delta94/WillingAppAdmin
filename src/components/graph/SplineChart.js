import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SplineChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: 'Monthly Sales - 2017',
      },
      axisX: {
        valueFormatString: 'MMM',
      },
      axisY: {
        title: 'Sales (in USD)',
        prefix: '$',
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: '$#,###',
          xValueFormatString: 'MMMM',
          type: 'spline',
          dataPoints: [
            { x: new Date(2017, 0), y: 6 },
            { x: new Date(2017, 1), y: 222 },
            { x: new Date(2017, 2), y: 383 },
            { x: new Date(2017, 3), y: 444 },
            { x: new Date(2017, 4), y: 420 },
            { x: new Date(2017, 5), y: 666 },
            { x: new Date(2017, 6), y: 777 },
            { x: new Date(2017, 7), y: 888 },
            { x: new Date(2017, 8), y: 1111 },
            { x: new Date(2017, 9), y: 1223 },
            { x: new Date(2017, 10), y: 1420 },
            { x: new Date(2017, 11), y: 1854 },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Spline Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default SplineChart;
