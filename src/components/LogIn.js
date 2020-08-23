import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../Dashboard.css";
export default class LogIn extends Component {
    state={
        UserName:'',
        password:'',
       
    }

    validUser=(element)=>{
        this.setState({UserName:element.target.value});
    }
   
    validPass=(element1)=>{
        this.setState({password:element1.target.value})
    }


   


    render() {
        return (
            <div>
                
                  <form style={{ backgroundColor:"#4d34c1"}}>
              
                 <div className="col-1">
               <img className="logo" src="./willing_logo.png" />
               </div>  
         
               <br/>  
               <h6>User name:</h6>
               <input type ='text' onChange={this.validUser} style={{backgroundColor:this.state.backgroundColorUserName ,border:"2px solid blue "}} placeholder="title" placeholder="UserName"></input>
               <br/>
               <h6>password:</h6>
               <input type ='password' onChange={this.validPass} style={{backgroundColor:this.state.backgroundColorPassword ,border:"2px solid blue "}} placeholder='password'></input>
               <br/>
              
               <Link  path to="/dashboard">
                <button  style={{textAlign:"center" ,border:"2px solid white " ,borderRadius: "50%"}}>submit</button>
              </Link>

               {/* <Link to ='/dashboard'>
            
               <button onClick={this.validRegister}style={{backgroundColor:"lightblue",border:"2px solid blue " ,borderRadius: "50%"}}><b>submit</b></button>
               </Link> */}
               </form>
               </div>
               
           
        )
    }
}
