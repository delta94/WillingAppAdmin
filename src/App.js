
import React, { useEffect } from "react";
import Accounts from "./components/Accounts.js";
import Dashboard from "./components/Dashboard.js";
import Reports from "./components/Reports.js";
import LogIn from "./components/LogIn";
import {useSelector} from 'react-redux'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Post from "./components/Post.js";





const App = () => {

  

  

 

  return (
    <div className="App">
      
      <Router>
      <Navbar  />
        <Switch>
         
          <Route exact path="/">
            <LogIn  />
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
          <Route exact path="/new post">
              <Post/>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App


