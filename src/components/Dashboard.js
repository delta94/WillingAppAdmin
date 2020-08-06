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
      quarter: "Q1",
      spending: 450,
    },
    {
      quarter: "Q2",
      spending: 560,
    },
    {
      quarter: "Q3",
      spending: 600,
    },
    {
      quarter: "Q4",
      spending: 700,
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

  saveDatesinfo = () => {};

  render() {
    console.log(this.state.topUsers);
    // let TopFiveUsers = this.state.Users.slice(0, 5);
    return (
      <div id="dates" style={{ textAlign: "right" }}>
        <Navbar />
        <DateRangePicker
          onApply={() => this.saveDatesinfo()}
          initialSettings={{
            showDropdowns: true,
          }}
          startDate="1/1/2014"
          endDate="3/1/2014"
        >
          <input className="dateTimeInput col-2" type="text" />
        </DateRangePicker>
        <div />
        <br />
        <br />
        <div style={{ textAlign: "left" }}>
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
        <AgChartsReact options={this.state.options} />;
      </div>
    );
  }
}
