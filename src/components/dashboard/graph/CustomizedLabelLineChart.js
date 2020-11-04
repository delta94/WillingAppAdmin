/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    month: 'אוקטובר 2020',

    acounts: 2400,
    amt: 2400,
  },
  {
    month: 'ספטמבר 2020',
    // requests: 3000,
    acounts: 1398,
    amt: 2210,
  },
  {
    month: 'אוגוסט 2020',
    // requests: 2000,
    acounts: 9800,
    amt: 2290,
  },
  {
    month: 'יולי 2020',
    // requests: 2780,
    acounts: 3908,
    amt: 2000,
  },
  {
    month: 'יוני 2020',
    // requests: 1890,
    acounts: 4800,
    amt: 2181,
  },
  {
    month: 'מאי 2020',
    // requests: 2390,
    acounts: 3800,
    amt: 2500,
  },
  {
    month: 'אפריל 2020',
    // requests: 3490,
    acounts: 4300,
    amt: 2100,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

  render() {
    return (
      <LineChart
        width={880}
        height={320}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 30,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="acounts"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
        {/* <Line type="monotone" dataKey="acounts" stroke="#82ca9d" /> */}
      </LineChart>
    );
  }
}
