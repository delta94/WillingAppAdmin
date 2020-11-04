import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import './Dashboard.css';

import Card from '../components/shared/UIElements/Card';

import Navbar from '../components/Navbar';

import DateRangePicker from 'react-bootstrap-daterangepicker';

import Users from '../users.json';
import data from '../Data.json';

import SplineChart from '../components/dashboard/graph/SplineChart';
import SplineChartFC from '../components/dashboard/graph/SplineChartFC';

// TODO transfer to utils !!
const formatToday = () => {
  let today = new Date();
  let currentDate =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDate;
};

const initialState = {
  date: {
    startDate: formatToday(new Date()),
    endDate: null,
    currentDate: formatToday(),
    dateRange: null,
  },
  // fetchedDate: {
  //   registersData: {},
  //   icons: {},
  // },
  Users: Users,
  topUsers: [],
  // data: {},
  registersData: {},
  icons: {},
  options: {
    animationEnabled: true,
    axisX: {
      valueFormatString: 'MMM',
    },
    axisY: {
      title: 'Active Users (per month)',
      // prefix: '$',
      includeZero: false,
    },
    data: [
      {
        //   yValueFormatString: '$#,###',
        yValueFormatString: '#,###',
        xValueFormatString: 'MMMM',
        type: 'spline',
        dataPoints: [],
      },
    ],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATE_RANGE':
      return { ...state, date: { ...state.date, dateRange: action.payload } };
    case 'SET_START_DATE':
      return { ...state, date: { ...state.date, startDate: action.payload } };
    case 'SET_END_DATE':
      return { ...state, date: { ...state.date, endDate: action.payload } };
    case 'SET_TOP_USERS':
      return { ...state, topUsers: action.payload };
    case 'SET_REGISTERED_USERS':
      return { ...state, registersData: action.payload };
    case 'SET_ICONS':
      return { ...state, icons: action.payload };
    case 'SET_GRAPH_DATA':
      return {
        ...state,
        options: { ...state.options, datapoints: action.payload },
      };
    // case 'SET_ALL_DATES':
    //   return { ...state, endDate: action.payload };
    default:
      return state;
    // throw new Error();
  }
}

const formatDate = (date) => {
  const formatedDate =
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  return formatedDate;
};
const formatDateInMs = (date) => {
  const formatedDate = date.getTime();
  return formatedDate;
};

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEvent = (event, picker) => {
    dispatch({ type: 'SET_DATE_RANGE', payload: event.currentTarget.value });
    dispatch({
      type: 'SET_START_DATE',
      payload: formatDate(picker.startDate._d),
    });
    dispatch({ type: 'SET_END_DATE', payload: formatDate(picker.endDate._d) });
  };

  useEffect(() => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    let a = x.filter((element, index) => index < 5);

    dispatch({ type: 'SET_TOP_USERS', payload: a });

    const fetchIcons = async () => {
      try {
        const config = {
          headers: {
            'content-type': 'application/json',
            'X-Requested-With': 'XMLhttpRequest',
          },
        };

        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL_SUMMARY}`,
          config
        );

        dispatch({ type: 'SET_ICONS', payload: data });

        console.log(data);
      } catch (err) {
        console.log(`😱 Axios fetch Icons failed: ${err}`);
      }
    };

    fetchIcons();
  }, [state.registersData]);

  useEffect(() => {
    const fetchRigisterData = async () => {
      try {
        const config = {
          headers: {
            'content-type': 'application/json',
            'X-Requested-With': 'XMLhttpRequest',
          },
        };

        const { data } = await axios.get(
          // `${process.env.REACT_APP_BACKEND_URL_FILTERS}?from=01/01/2018&to=${state.date.currentDate}`,
          `${process.env.REACT_APP_BACKEND_URL_FILTERS}?from=${state.date.startDate}&to=${state.date.endDate}`,
          config
        );

        dispatch({ type: 'SET_REGISTERED_USERS', payload: data });
        console.log(data);
      } catch (err) {
        console.log(`😱 Axios fetch registered users failed: ${err}`);
      }
    };

    fetchRigisterData();
  }, [state.date]);

  // TOFIX!!
  // useEffect(() => {
  //   const fetchGraphData = () => {
  //     const dataPoints = [
  //       { x: new Date(2020, 6), y: 222 },
  //       { x: new Date(2020, 7), y: 383 },
  //       { x: new Date(2020, 8), y: 848 },
  //       { x: new Date(2020, 9), y: 420 },
  //     ];

  //     dispatch({ type: 'SET_GRAPH_DATA', payload: dataPoints });
  //     // console.log(char);
  //   };

  //   fetchGraphData();
  // }, [state.date]);

  return (
    <React.Fragment>
      <Navbar className="navbar-container" />

      <div className="date-picker-container">
        <DateRangePicker
          onEvent={handleEvent}
          initialSettings={{
            showDropdowns: true,
          }}
          startDate={state.date.startDate}
          endDate={state.date.endDate}
        >
          <input className="dateTimeInput" type="text" />
        </DateRangePicker>{' '}
      </div>

      <article className="icons-plus-graph-container">
        <div className="icons-container">
          <Card
            subtitle="Total Accounts"
            title={state.icons.totalAccounts}
          ></Card>
          <Card
            subtitle="Active Users"
            title={state.icons.totalActiveUsers}
          ></Card>
          <Card
            subtitle=" Orders Last Month"
            title={state.icons.totalActiveRequesterLastMonth}
          ></Card>
          <Card
            subtitle="Active Orders"
            title={state.icons.totalActiveRequests}
          ></Card>
        </div>

        <div className="graph-container">
          <SplineChart />
        </div>
      </article>

      <article className="categories-container">
        <h4 className="start-row">Orders By Category</h4>
        <div className="card-container_dashboard">
          <Card
            src="./emergency.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./Ride_Delivery.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./Road assist.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./item needed.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./Give away.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./Lost and found.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./Social.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
          <Card
            src="./General.svg"
            subtitle="category name"
            title={state.registersData.addRequestCount}
          ></Card>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Dashboard;
