import React from "react";
import Accounts from "./components/Accounts.js";
import Dashboard from "./components/Dashboard.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/accounts">
            <Accounts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
