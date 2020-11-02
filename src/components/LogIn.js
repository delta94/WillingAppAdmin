import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import "../Dashboard.css";
import '../Login.css'
import Navbar from '../components/Navbar';
import axios from 'axios';


export default class LogIn extends Component {
    constructor(props) {
        super(props);

    this.state={
        email:'',
        password:'',
       
    }
    }
    validUser=(e)=>{
        this.setState({email:e.target.value});
        
    }
   
    validPass=(e)=>{
        this.setState({password:e.target.value})
        
    }

   savedName=(e)=>{
       e.preventDefault()
    //    this.props.add (this.state.UserName);
       let request ={
           email: this.state.email,
           password: this.state.password
       }
       axios.post('http://ec2-3-87-113-188.compute-1.amazonaws.com:8080/admin/login',request)
       .then(res => {
         console.log(res.data);
        }).catch(err =>{
            alert(err)
        })

       
   }



    render() {
        return (
            <>
            <Navbar/>
            <div className='background-login'>
            <div className='login-box'>
                
                  <form onSubmit={(e) => this.savedName(e)} >
              
                 {/* <div className="col-1">
               <img className="logo" src="./willing_logo.png" />
               </div>   */}
         
               <br/>  
               <h6 style={{color:"black",textAlign:'left'}}>Email</h6>
               <br/>
               <div className='inputContainer'>
               <i className="fa fa-user"></i>
               <input className='field' type ='text' onChange={this.validUser}   placeholder="Email"></input>
               </div>
               
              
               <h6 style={{color:"black",textAlign:'left',marginTop:'30px'}}>Password</h6>
               <br/>
               <div className='inputContainer'>
               <i className="fa fa-unlock-alt"></i>
               <input className='field' type ='password' onChange={this.validPass}  placeholder='password'></input>
               </div>
               
               <div className='rowContainer'>
                
               <input className='childCon' id='autoLogin' type='checkbox' style={{textAlign:'left'}}></input>
               <h3 style={{fontSize:'10px',marginLeft:'5px',whiteSpace:'nowrap'}}>Remember Me</h3>

               <h3 className='childCon' id='forgotPass' style={{fontSize: '10px',textAlign:'right',cursor:'pointer',fontWeight:'bold',
               color:'blue'}}>Forgot Password?</h3>
               
               
               </div>
               
               {/* <Link  path to="/dashboard"> */}
                <button className='btnSubmit' type='submit'>LOGIN</button>
              {/* </Link> */}

               {/* <Link to ='/dashboard'>
            
               <button onClick={this.validRegister}style={{backgroundColor:"lightblue",border:"2px solid blue " ,borderRadius: "50%"}}><b>submit</b></button>
               </Link> */}
               </form>
               </div>
               </div>
           </>
        )
    }
}
