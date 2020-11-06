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

// import mockGraphData from './mockGraphData';

const data = [
  {
    month: 'אוקטובר 2020',

    acounts: 2400,
    amt: 2400,
  },
  {
    month: 'ספטמבר 2020',

    acounts: 1398,
    amt: 2210,
  },
  {
    month: 'אוגוסט 2020',
    requests: 2000,
    acounts: 9800,
    amt: 2290,
  },
  {
    month: 'יולי 2020',
    requests: 2780,
    acounts: 3908,
    amt: 2000,
  },
  {
    month: 'יוני 2020',
    requests: 1890,
    acounts: 4800,
    amt: 2181,
  },
  {
    month: 'מאי 2020',
    requests: 2390,
    acounts: 3800,
    amt: 2500,
  },
  {
    month: 'אפריל 2020',
    requests: 3490,
    acounts: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={1200}
        height={360}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="acounts"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="requests" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
