
import React from "react";
import Navbar from "./Navbar.js";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../Dashboard.css";
import { Link } from "react-router-dom";
import data from "../Data.json";
import Users from "../users.json";
import axios from "axios";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
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
  }
  saveDatesInformation= async()=>{
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
  }


  saveDatesinfo= () => {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`https://cors-anywhere.herokuapp.com/ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS/_summary`)
        .then(res => {
          const information = res.data;
          console.log(5);
          // console.log(information);
          })
        }
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
        <div className="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"> ID </th> <th scope="col"> Name </th>
                <th scope="col"> Telephone </th> <th scope="col"> Status </th>
                <th scope="col"> Create date </th> <th scope="col"> Send </th>
              </tr>
            </thead>
            <tbody>
              {this.state.topUsers.map((element, index) => {
                var mycreateDate = new Date(element.createDate * 1000);
                var myupdateDate = new Date(element.updateDate * 1000);
                return (
                  <tr>
                    <td> {element.id} </td> <td> {element.name} </td>
                    <td> {element.phone} </td> <td> </td>
                    <td> {mycreateDate.toLocaleString()}</td>
                    <td>
                      <button className="inTableButton"> Send </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
