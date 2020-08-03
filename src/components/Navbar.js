import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbarStyle">
          <div style={{ marginRight: 0 }} className="row">
            <div className="col-1"><img className="logo" src="./logo_willingsvg_white.svg"/></div>
            <div className="col-8"></div>
            <div className="col-sm">
              <img
                className="userImg"
                src="https://i.pinimg.com/originals/ba/30/7a/ba307ac530b3524e44cf8af6aa717fb5.jpg"
              />
            </div>
            <div className="col-sm"></div>
          </div>
          <div style={{ marginRight: 0 }} id="buttons" className="row">
            <div className="col-1"></div>
            <div className="col-sm">
              <button className="buttonStyle"><Link className="linkstyle"  path to ="/">Dashboard</Link></button>
            </div>
            <div className="col-sm">
              <button className="buttonStyle"><Link className="linkstyle" path to = "/accounts/">Accounts</Link></button>
            </div>
            <div className="col-sm">
              <button className="buttonStyle"><Link className="linkstyle" path to ="">Requests</Link></button>
            </div>
            <div className="col-8"></div>
          </div>
        </nav>
      </div>
    );
  }
}
