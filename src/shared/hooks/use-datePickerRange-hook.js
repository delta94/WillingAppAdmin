import { useReducer } from 'react';

// import DateRangePicker from 'react-bootstrap-daterangepicker';

const formatToday = () => {
  let today = new Date();
  let currentDate =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDate;
};

const initialState = {
  startDate: null,
  endDate: null,
  currentDate: formatToday(),
  dateRange: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    // case 'SET_ALL_DATES':
    //   return { ...state, endDate: action.payload };
    default:
      throw new Error();
  }
}

export const useDatePickerRange = (initialState) => {
  const [dateRangeState, dispatch] = useReducer(reducer, initialState);

  const handleEvent = (event, picker) => {
    // console.log(event.currentTarget.value);
    // console.log(picker);
    dispatch({ type: 'SET_DATE_RANGE', payload: event.currentTarget.value });
    dispatch({ type: 'SET_START_DATE', payload: picker.startDate._d });
    dispatch({ type: 'SET_END_DATE', payload: picker.endDate._d });
  };

  return [dateRangeState, handleEvent];
};
