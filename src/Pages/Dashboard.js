import React, { useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';

import DateRangePicker from 'react-bootstrap-daterangepicker';
// import { useDatePickerRange } from '../shared/hooks/use-datePickerRange-hook';

import Users from '../users.json';
import data from '../Data.json';

const formatToday = () => {
  let today = new Date();
  let currentDate =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDate;
};

const initialState = {
  date: {
    startDate: null,
    endDate: null,
    currentDate: formatToday(),
    dateRange: null,
  },
  Users: Users,
  topUsers: [],
  data: data,
  series: [
    {
      xKey: 'quarter',
      yKey: 'spending',
    },
  ],
  registersData: '',
  icons: '',
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
    // case 'SET_ALL_DATES':
    //   return { ...state, endDate: action.payload };
    default:
      return state;
    // throw new Error();
  }
}

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEvent = (event, picker) => {
    // console.log(event.currentTarget.value);
    // console.log(picker);
    dispatch({ type: 'SET_DATE_RANGE', payload: event.currentTarget.value });
    dispatch({ type: 'SET_START_DATE', payload: picker.startDate._d });
    dispatch({ type: 'SET_END_DATE', payload: picker.endDate._d });
  };

  useEffect(() => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    console.log(x);
    let a = x.filter((element, index) => index < 5);
    console.log(a);
    dispatch({ type: 'SET_TOP_USERS', payload: a });

    try {
    } catch (err) {}
  }, []);

  return (
    <div>
      <Navbar />
      <DateRangePicker
        // containerStyles={{ marginRight: '1rem', color: 'red' }}
        onEvent={handleEvent}
        // onChange={handelChange}
        // onApply={() => this.saveDatesInformation()}
        initialSettings={{
          showDropdowns: true,
        }}
        startDate={state.date.startDate}
        endDate={state.date.endDate}
      >
        <input
          // onChange={handelChange}
          className="dateTimeInput "
          type="text"
        />
      </DateRangePicker>
    </div>
  );
};

export default Dashboard;
