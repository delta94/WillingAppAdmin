import React from "react";
import Accounts from "./components/Accounts.js";
import Dashboard from "./components/Dashboard.js";
import Reports from "./components/Reports.js";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
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

export default App;
