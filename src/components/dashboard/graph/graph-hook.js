import React, { useState, useRef } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const defaultOptions = {
  responsive: true,
  animationEnabled: true,
  //   title: {
  //     text: 'Monthly Sales - 2017',
  //   },
  axisX: {
    valueFormatString: 'MMM',
  },
  axisY: {
    title: 'Active Users (per month)',
    // prefix: '$',
    includeZero: false,
  },
  // We suggest not to set width/height property unless it is really required.
  // When you don’t set the width/height, CanvasJS automatically takes @@@ the size
  // of its container @@@!! and hence works well with responsive websites
  // width: 1200,
  // hight: 200,
  data: [
    {
      //   yValueFormatString: '$#,###',
      yValueFormatString: '#,###',
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

export const useGraph = () => {
  const [options, setOptions] = useState(defaultOptions);

  //   var chart = useRef();

  const setDatapoints = (dateRange) => {
    // var myChart = chart.current;
    const fetchedDataPoints = [
      { x: new Date(2020, 0), y: 222 },
      { x: new Date(2020, 1), y: 33 },
      { x: new Date(2020, 2), y: 233 },
      { x: new Date(2020, 3), y: 432 },
      { x: new Date(2020, 4), y: 545 },
    ];
    const updatedOptions = { ...options };
    updatedOptions.data[0].dataPoints = fetchedDataPoints;
    setOptions(updatedOptions);
    // myChart.render();
  };

  const SplineChartF = (props) => {
    const containerProps = {
      height: '36vh',
      //   height: 'calc(100vh - 150px)',
    };
    return (
      <div>
        {/* <h1>React Spline Chart</h1> */}
        <CanvasJSChart
          //   key={options.data[0].dataPoints.toString()} // force a remount when `dataPoints` change
          containerProps={containerProps}
          //   onRef={(ref) => (chart.current = ref)}
          options={options}
        />
        {/* {console.log(options.data[0].dataPoints)} */}
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  };
  return { setDatapoints, SplineChartF };
};
