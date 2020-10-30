import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import Card from '../components/shared/UIElements/Card';

import Navbar from '../components/Navbar';
import CategoryItem from '../components/dashboard/CategoryItem';

import DateRangePicker from 'react-bootstrap-daterangepicker';
// import { useDatePickerRange } from '../shared/hooks/use-datePickerRange-hook';

import Users from '../users.json';
import data from '../Data.json';

// import Graph from '../components/Dashboard copy';
// import LineChart from '../components/graph/LineChart';
import BarChart from '../components/graph/SimpleBarChart';

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
  data: data,
  registersData: {},
  icons: {},
  series: [
    {
      xKey: 'quarter',
      yKey: 'spending',
    },
  ],
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

  useEffect(() => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    let a = x.filter((element, index) => index < 5);

    dispatch({ type: 'SET_TOP_USERS', payload: a });

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

  return (
    <React.Fragment>
      <Navbar /> <br />
      <DateRangePicker
        onEvent={handleEvent}
        initialSettings={{
          showDropdowns: true,
        }}
        startDate={state.date.startDate}
        endDate={state.date.endDate}
      >
        <input className="dateTimeInput " type="text" />
      </DateRangePicker>{' '}
      <br />
      <br />
      <div className="card-container_dashboard">
        <Card
          title="Total Accounts:"
          subtitle={state.icons.totalAccounts}
        ></Card>
        <Card
          title="Total active users:"
          subtitle={state.icons.totalActiveUsers}
        ></Card>
        <Card
          title=" Total Active Requests Last Month:"
          subtitle={state.icons.totalActiveRequesterLastMonth}
        ></Card>
        <Card
          title="Total Active Requests:"
          subtitle={state.icons.totalActiveRequests}
        ></Card>
      </div>
      <div className="graph-container_dashboard">
        <BarChart onApply={() => fetchIcons} />
      </div>
      <article>
        <h4>Orders By Category</h4>
        <div className="card-container_dashboard">
          <CategoryItem src="./emergency.svg" name="category">
            {state.registersData.addRequestCount}
          </CategoryItem>
          <CategoryItem src="./Ride_Delivery.svg" name="category">
            {state.registersData.uniqueUsersCount}
          </CategoryItem>
          <CategoryItem src="./Road assist.svg" name="category">
            {state.registersData.registerCount}
          </CategoryItem>
          <CategoryItem src="./item needed.svg" name="category">
            {state.registersData.registerCount}
          </CategoryItem>
          <CategoryItem src="./Give away.svg" name="category">
            {state.registersData.registerCount}
          </CategoryItem>
          <CategoryItem src="./Lost and found.svg" name="category">
            {state.registersData.registerCount}
          </CategoryItem>
          <CategoryItem src="./Social.svg" name="category">
            {state.registersData.registerCount}
          </CategoryItem>
          <CategoryItem src="./General.svg" name=" name">
            {state.registersData.registerCount}
          </CategoryItem>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Dashboard;
