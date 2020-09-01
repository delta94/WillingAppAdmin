import React, { Component } from "react";
import Accounts from "./components/Accounts.js";
import Dashboard from "./components/Dashboard.js";
import Reports from "./components/Reports.js";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: "",
    };
  }

  // adminName=(i)=>{
  //     this.setstate({ adminName:i});
  //     console.log(adminName);
  //       }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LogIn add={this.adminName} />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/accounts">
              <Accounts />
            </Route>
            <Route exact path="/reports">
              <Reports />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
