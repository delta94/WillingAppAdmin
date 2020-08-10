import React from "react";
import Navbar from "./Navbar.js";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../Dashboard.css";
import { Link } from "react-router-dom";
import data from "../Data.json";
import Users from "../users.json";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";

export default class Dashboard extends React.Component {
  data = [
    {
      quarter: "january",
      spending: 450,
    },
    {
      quarter: "February",
      spending: 560,
    },
    {
      quarter: "march",
      spending: 600,
    },
    {
      quarter: "april",
      spending: 700,
    },
    {
      quarter: "may",
      spending: 450,
    },
    {
      quarter: "june",
      spending:590 ,
    },
    {
      quarter: "july",
      spending: 420,
    },
    {
      quarter: "auguest",
      spending: 211,
    },
    {
      quarter: "september",
      spending: 399,
    },
    {
      quarter: "october",
      spending: 877,
    },
    {
      quarter: "november",
      spending: 333,
    },
    {
      quarter: "december",
      spending: 459,
    },
  ];
  constructor(props) {
    super(props);
  }
  state = {
    options: {
      data: this.data,
      series: [
        {
          xKey: "quarter",
          yKey: "spending",
        },
      ],
    },
    Users: Users,
    value:[],
    topUsers: [],
  };

  componentDidMount = () => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    console.log(x);
    let a = x.filter((element, index) => index < 5);
    console.log(a);
    this.setState({ topUsers: a });
  };

  
  saveDatesInformation= async(e)=>{
    try{
      // send request to get the token from the server with phone number
      let res = await axios(
      {
          url:"https://cors-anywhere.herokuapp.com/ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_summary",
          // adress to cors https://cors-anywhere.herokuapp.com/
          method:"get",
          headers: {
            'content-type':'application/json',
            'X-Requested-With':'XMLhttpRequest'
          },
      })
    
      let data = res.data;
      console.log(data)
  }catch (e){
      console.log(`😱 Axios getInformation failed: ${e}`);
  }
 var b= this.setState({value:e.target.value});
  console.log (b) ;
  }


  // saveDatesinfo= () => {
  //       // axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       axios.get(`https://cors-anywhere.herokuapp.com/ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_summary`)
  //       .then(res => {
  //         const information = res.data;
  //         console.log(5);
  //         // console.log(information);
  //         })
  //       }
  render() {
    console.log(this.state.topUsers);
    // let TopFiveUsers = this.state.Users.slice(0, 5);
    return (
      <div id="dates" style={{ textAlign: "right" }}>
        <Navbar />
        <DateRangePicker
          onApply={() => this.saveDatesInformation()}
          initialSettings={{
            showDropdowns: true,
          }}
          startDate="1/1/2014"
          endDate="3/1/2014"
        >
          <input className="dateTimeInput col-2" type="text" />
        </DateRangePicker>
        <div />
        <p style ={{ textAlign: "left" }}>
          <span id="dataDate1">Total accaunts</span>
          <span id="dataDate2">Total accaunt requesters</span>
          <span id="dataDate3">Total accaunt users</span>
          <span id="dataDate4">Total active requests</span>
        </p>
        <br />
        <br />
        <div style={{ textAlign: "left" }}>
        <AgChartsReact style={{backgroundColor:"white" , color:"#4d34c1" , width:"700px"}} id="chart" options={this.state.options} />;
          <p>
            <span>
              <img
                src={"./emergency.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.emergency}
            </span>
            <span>
              <img
                src={"./Case.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.medical}
            </span>
            <span>
              <img
                src={"./Ride_Delivery.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.road_assist}
            </span>
            <span>
              <img
                src={"./Road assist.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.general}
            </span>
            <span>
              <img
                src={"./item needed.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.item_needed}
            </span>
            <span>
              <img
                src={"./Give away.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.give_away_item}
            </span>
            <span>
              <img
                src={"./Lost and found.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.lost_and_found}
            </span>
            <span>
              <img
                src={"./Social.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.social}
            </span>
            <span>
              <img
                src={"./General.svg"}
                style={{ width: "80px", height: "20px" }}
              ></img>{" "}
              {data.requests.general}
            </span>
          </p>
        </div>
       
      </div>
    );
  }
}
