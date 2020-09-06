import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../Dashboard.css";
import { Link } from "react-router-dom";
import data from "../Data.json";
import Users from "../users.json";
import { AgChartsReact } from "ag-charts-react";
import CanvasJSReact from "../assets/canvasjs.react";
import Navbar from "./Navbar";
import Graph from "./Dashboard copy";
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Dashboard extends React.Component {
  constructor(props) {
    var today = new Date(),
      currentDate =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
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
      currentDate: currentDate,
      Users: Users,
      topUsers: [],
      DateRange: null,
      registersData: "",
    };
  }

  componentDidMount = async () => {
    let y = Users;
    let x = Users.sort((a, b) => (b.numOfRequests > a.numOfRequests ? 1 : -1));
    // console.log(x);
    let a = x.filter((element, index) => index < 5);
    // console.log(a);
    this.setState({ topUsers: a });

    try {
      // send request to get the token from the server with phone number
      // let startDate =
      //   this.state.DateRange.slice(3, 5) +
      //   "/" +
      //   this.state.DateRange.slice(0, 3) +
      //   this.state.DateRange.slice(6, 10);
      // let endDate =
      //   this.state.DateRange.slice(16, 19) +
      //   this.state.DateRange.slice(13, 15) +
      //   this.state.DateRange.slice(18, 23);
      // console.log(startDate);
      // console.log(endDate);
      let res = await axios({
        url: `https://cors-anywhere.herokuapp.com/http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_filters?from=01/01/2018&to=${this.state.currentDate}`,
        // adress to cors https://cors-anywhere.herokuapp.com/
        method: "get",
        headers: {
          "content-type": "application/json",
          "X-Requested-With": "XMLhttpRequest",
        },
      });
      // alert("works");
      let data = res.data;
      console.log(data);
      this.setState({ registersData: data });
    } catch (err) {
      console.log(`😱 Axios getInformation failed: ${err}`);
    }

    // axios
    //   .get({
    //     url: `https://cors-anywhere.herokuapp.com/http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_filters?from=01.01.2018&to=${this.state.currentDate}`,
    //     headers: {
    //       "content-type": "application/json",
    //       "X-Requested-With": "XMLhttpRequest",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     let data = res.data;
    //     console.log(data);
    //     this.setState({ registersData: data });
    //   })
    //   .catch((err) => {
    //     console.log(`😱 Axios getInformation failed: ${err}`);
    //   });
  };

  saveDatesInformation = async (e) => {
    try {
      // send request to get the token from the server with phone number
      let startDate =
        this.state.DateRange.slice(3, 5) +
        "/" +
        this.state.DateRange.slice(0, 3) +
        this.state.DateRange.slice(6, 10);
      let endDate =
        this.state.DateRange.slice(16, 19) +
        this.state.DateRange.slice(13, 15) +
        this.state.DateRange.slice(18, 23);
      console.log(startDate);
      console.log(endDate);
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
    } catch (err) {
      console.log(`😱 Axios getInformation failed: ${err}`);
    }
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
        <Navbar />
        <div />
        <div id="datesANDduser" className="row">
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate1">
                {this.state.registersData.registerCount}
              </span>
              <br />
              Total active accounts
            </p>
          </div>
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate2">
                {this.state.registersData.uniqueUsersCount}
              </span>
              <br />
              Total active users
            </p>
          </div>
          <div className="col-2">
            <p className="usersInfo">
              <span id="dataDate3">
                {this.state.registersData.addRequestCount}
              </span>
              <br />
              Total requests
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

        <Graph />
        <div style={{ textAlign: "left", marginTop: 30 }}>
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
