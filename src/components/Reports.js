import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "../users.json";
import UsersReports from "../Reports.json";
import SingleReport from "./SingleReport";
import "../Reports.css";



export default class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users,
      status: false,
      note: false,
      flag: false,
      button: true,
      
     
    };
  }
  // show = () => {
  //   if (this.state.flag === true) {
  //     return <div>works</div>;
  //   }
  // };

  

  statusChange = () => {
    if (this.state.status) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  handleClose = () => {
    this.setState({ status: false });
  };
  handleShow = () => this.setState({ status: true });

  noteChange = () => {
    if (this.state.note) {
      this.setState({ note: false });
    } else {
      this.setState({ note: true });
    }
  };

  handleNoteClose = () => this.setState({ note: false });
  handleNoteShow = () => {
    this.setState({ note: true });
    // this.setState({button: false})
  };

  

  render() {
    //console.log(UsersReports);
    return (
      <div >
      
       
        
        
        <div style={{ marginTop: 30, zIndex:50 }} className="container">
          <table className="table table-striped" >
            <thead>
              <tr>
              <th scope="col">
                  <i className="TableHeadStyle">Reported request ID</i>
                </th>
                <th scope="col">
                  <i className="TableHeadStyle">Report description</i>
                </th>
                <th scope="col" >
                  <i className="TableHeadStyle" >Status</i>
                </th>
                {/* <th scope="col">
                  <i className="TableHeadStyle">type</i>
                </th> */}
                {/* <th scope="col">
                  <i className="TableHeadStyle"></i>
                </th> */}
               
                <th scope="col">
                  <i className="TableHeadStyle">Date</i>
                </th>
                {/* <th scope="col">
                  <i className="TableHeadStyle"></i>
                </th>
                <th scope="col">
                  <i className="TableHeadStyle"></i>
                </th> */}
                <th className="sendBurronStyle"  scope="col">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {UsersReports.map((element,index) => {
                return <SingleReport key={index} element={element}  />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
