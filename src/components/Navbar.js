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
          <div style={{ marginRight: 0 }} id="buttons" className="row">
            <div className="col-1"></div>
{ user  && (
              <>
            <div className="col-sm">
              <NavLink  className="main-nav" activeClassName='main-nav-active'  to="/dashboard">
                Dashboard
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="main-nav" activeClassName='main-nav-active'  to="/accounts">
                Accounts
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="main-nav" activeClassName='main-nav-active'  to="/reports">
               Reports
              </NavLink>
            </div>
            </>
            
            )
            }
            <div className="col-8"></div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar


