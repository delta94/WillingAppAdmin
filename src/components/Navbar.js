import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link,NavLink } from "react-router-dom";






const Navbar = () => {
  
  

  const userAuth = useSelector(state => state.userAuth)

    console.log(userAuth.user);
 
     const {user,name} = userAuth

  
  

  return (
    <div>
        <nav className="navbarStyle">
          <div style={{ marginRight: 0 }} className="row">
            <div className="col-1">
              <img className="logo" src="./willing_logo.png" />
            </div>
            <div className="col-8"></div>
            <div className="col-sm">
              {/* <img
                className="userImg"
                src="https://i.pinimg.com/originals/ba/30/7a/ba307ac530b3524e44cf8af6aa717fb5.jpg"
              /> */}
            </div>
            
            <div className="col-sm"></div>
          </div>
          {user &&(
          <div style={{ marginRight: 0 }} id="buttons" className="row">
            <div className="col-1"></div>
            <div className="col-sm">
              <Link className="linkstyle" path to="/dashboard">
                <button className="buttonStyle">Dashboard</button>
              </Link>
            </div>
            <div className="col-sm">
              <Link className="linkstyle" path to="/accounts">
                <button className="buttonStyle">Accounts</button>
              </Link>
            </div>
            <div className="col-sm">
              <Link className="linkstyle" path to="/reports">
                <button className="buttonStyle">Reports</button>
              </Link>
            </div>
            <div className="col-sm">
              <Link className="linkstyle" path to="/new post">
                <button className="buttonStyle">New post</button>
              </Link>
            </div>
            <div className="col-8"></div>
          </div>)}
        </nav>
      </div>
  )
}

export default Navbar


