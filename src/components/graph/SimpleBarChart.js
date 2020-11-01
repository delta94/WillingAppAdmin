import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    month: 'אוקטובר 2020',
    requests: 4000,
    acounts: 2400,
    else: 1000,
    amt: 2400,
  },
  {
    month: 'ספטמבר 2020',
    requests: 3000,
    acounts: 1398,
    else: 1000,
    amt: 2210,
  },
  {
    month: 'אוגוסט 2020',
    requests: 2000,
    acounts: 9800,
    else: 1000,
    amt: 2290,
  },
  {
    month: 'יולי 2020',
    requests: 2780,
    acounts: 3908,
    else: 1000,
    amt: 2000,
  },
  {
    month: 'יוני 2020',
    requests: 1890,
    acounts: 4800,
    else: 1000,
    amt: 2181,
  },
  {
    month: 'מאי 2020',
    requests: 2390,
    acounts: 3800,
    else: 1000,
    amt: 2500,
  },
  {
    month: 'אפריל 2020',
    requests: 3490,
    acounts: 4300,
    else: 1000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 10,

          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="requests" fill="#82ca9d" />
        <Bar dataKey="acounts" fill="#8884d8" />
        <Bar dataKey="else" fill="rgb(139, 12, 170)" />
      </BarChart>
    );
  }
}
