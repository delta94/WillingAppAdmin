
import React from "react";
import Navbar from "./Navbar.js";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../Dashboard.css";
// import { Link } from "react-router-dom";
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

  user = (key) => {
    let y = Users;
    // console.log (y);
    let x = Users.sort((a, b) => (a.numOfRequests > b.numOfRequests ? 1 : -1));
    console.log(x);
    let a = x.filter((element, index) => index < 5);
    console.log(a);
    this.setState({ User: [...a] });
  };

  date = (e) => {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
    console.log(6);
  };
  date2 = (e) => {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
    console.log(7);
  };

  render() {
    let TopFiveUsers = this.state.Users.slice(0, 5);
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
        {/* </div> */}
        {/* <input type="date" id="dates-input" onClick={this.date} />
        <input type="date" id="date-input" onChange={this.date2} /> */}
        <input type="submit" onClick={this.user} />

        <div />
        <br />
        <br />

        <div style={{ textAlign: "left" }}>
          <p>
            {this.user}
            {/* {this.compare} */}
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
              {TopFiveUsers.map((element, index) => {
                return (
                  <tr>
                    <td> {element.id} </td> <td> {element.name} </td>
                    <td> {element.phone} </td> <td> </td>
                    <td> {element.correctDate * 1000} </td>
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
=======
import React from 'react';
import {Link} from 'react-router-dom';
import data from "./Data.json";
import general from './General.svg';
import emergency from './Emergency.svg';
import giveaway from './Give away.svg';
import itemNeeded from './Item needed.svg';
import lostAndFound from './Lost and found.svg';
import Case from './Case.svg';
import rideDelivery from './Ride_Delivery.svg';
import road from './Road assist.svg';
import social from './Social.svg';

import axios from 'axios';
import 'react-svg-donuts/dist/index.css'
import Donut from 'react-svg-donuts';

export default class Dashboard extends React.Component {
  constructor(props){
  super(props)
  }
  state = {
   
        }
     

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //       console.log(persons);
  //       console.log(persons.length);
  //       let x= persons.length;
  //       this.setState({number:x});
        
  date=(e)=>{
    this.setState({value: e.target.value});
   console.log(e.target.value);
    console.log(6);
  }
  date2=(e)=>{
     this.setState({value: e.target.value});
     console.log(e.target.value);
     console.log(7);
  }
  user=()=>{
  
  }

  
  
  render() {
    return (
      
     
      
		
         <div id="dates" style={{textAlign:"right"}}>
            <input type="date" id="dates-input" onClick={this.date} />
           <input type="date" id="date-input" onChange={this.date2} />
           {/* <input type="submit" onClick={this.user} />  */}
           <div/>
    
      


    <br/><br/>

  <div style={{textAlign:"left"}}>
  <p>
   <span><img src={emergency} style={{width:"80px",height:"20px"}}></img> {data.requests.emergency}</span> 
   <span><img src={Case} style={{width:"80px",height:"20px"}}></img> {data.requests.medical}</span> 
   <span><img src={rideDelivery} style={{width:"80px",height:"20px"}}></img> {data.requests.road_assist}</span> 
   <span><img src={road} style={{width:"80px",height:"20px"}}></img> {data.requests.general}</span> 
   <span><img src={itemNeeded} style={{width:"80px",height:"20px"}}></img> {data.requests.item_needed}</span> 
   <span><img src={giveaway} style={{width:"80px",height:"20px"}}></img> {data.requests.give_away_item}</span> 
   <span><img src={lostAndFound} style={{width:"80px",height:"20px"}}></img> {data.requests.lost_and_found}</span> 
   <span><img src={social} style={{width:"80px",height:"20px"}}></img> {data.requests.social}</span> 
   <span><img src={general} style={{width:"80px",height:"20px"}}></img> {data.requests.general}</span> 

 </p>
    </div>

    </div>


      

    )
  }
}

