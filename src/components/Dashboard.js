import React from "react";
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
      spending: 590,
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
    this.state = {
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
      topUsers: [],
      DateRange: null,
      registersData: "",
    };
  }

  componentDidMount = () => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    // console.log(x);
    let a = x.filter((element, index) => index < 5);
    // console.log(a);
    this.setState({ topUsers: a });
  };

  saveDatesInformation = async (e) => {
    try {
      // send request to get the token from the server with phone number
      let endDate = this.state.DateRange.slice(0, 10);
      let startDate = this.state.DateRange.slice(13, 23);
      console.log(endDate);
      console.log(startDate);
      let res = await axios({
        url: `https://cors-anywhere.herokuapp.com/http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_filters?from=${startDate}&to=${endDate}`,
        // adress to cors https://cors-anywhere.herokuapp.com/
        method: "get",
        headers: {
          "content-type": "application/json",
          "X-Requested-With": "XMLhttpRequest",
        },
      });
      // alert('works')
      let data = res.data;
      console.log(data);
      this.setState({ registersData: data });
      // document.getElementById("dataDate1").innerHTML = data.totalAccounts;
      // document.getElementById("dataDate2").innerHTML =
      //   data.totalActiveRequesterLastMonth;
      // document.getElementById("dataDate3").innerHTML = data.totalActiveUsers;
      // document.getElementById("dataDate4").innerHTML = data.totalActiveRequests;
    } catch (err) {
      console.log(`😱 Axios getInformation failed: ${err}`);
    }
    // this.setState({value: e.target.value});
    // console.log(e.target.value);
  };

  // saveDatesinfo= () => {
  //       // axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       axios.get(`https://cors-anywhere.herokuapp.com/ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_summary`)
  //       .then(res => {
  //         const information = res.data;
  //         console.log(5);
  //         // console.log(information);
  //         })
  //       }

  handleEvent = (event, picker) => {
    console.log(event.currentTarget.value);
    this.setState({ DateRange: event.currentTarget.value });
  };

  render() {
    return (
      <div id="dates" style={{ textAlign: "right" }}>
        <div />
        <div id="datesANDduser" className="row">
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate1">
                {this.state.registersData.addRequestCount}
              </span>
              <br />
              Total Requests
            </p>
          </div>
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate2">
                {this.state.registersData.uniqueUsersCount}
              </span>
              <br />
              Total Uniqe users
            </p>
          </div>
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate3">
                {this.state.registersData.registerCount}
              </span>
              <br />
              Total registers
            </p>
          </div>

          <div className="col-4">
            <DateRangePicker
              onEvent={this.handleEvent}
              onChange={this.handleChange}
              onApply={() => this.saveDatesInformation()}
              initialSettings={{
                showDropdowns: true,
              }}
              startDate="1/1/2014"
              endDate="3/1/2014"
            >
              <input
                onChange={this.handleChange}
                className="dateTimeInput "
                type="text"
              />
            </DateRangePicker>
          </div>
        </div>
        <br />
        <br />
        <div style={{ textAlign: "left" }}>
          <AgChartsReact
            style={{
              backgroundColor: "white",
              color: "#4d34c1",
              width: "700px",
            }}
            id="chart"
            options={this.state.options}
          />
          ;
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