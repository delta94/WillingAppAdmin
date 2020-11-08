import React, { useState,useEffect } from 'react'
import "../Dashboard.css";
import '../Login.css'
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import {Alert} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {userLogin} from '../actions/userActions'




const LogIn = ({history}) => {

    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.userAuth)

    const {isAuth,message,user,error} = userAuth

    const [email,setEamil] = useState('Shachar87@gmail.com')
    const [password,setPassword] = useState('Aa123456')

    

   

const savedName = (e) =>{
    e.preventDefault()

    let request ={
                   email,
                   password
               }
    dispatch(userLogin(request))
    setEamil('')
    setPassword('')
}


if (user) {
    
    return <Redirect to='/dashboard'/>
}

    return (
        <>
            {error && <Alert variant='danger'>{error}</Alert>}
        
                        {/* {this.state.message && <Alert variant='danger'>{this.state.message}</Alert>} */}
                        <div className='background-login'>
                    <div className='login-box'>
                            
                              <form onSubmit={(e) => savedName(e)} >
                          
                             {/* <div className="col-1">
            //                <img className="logo" src="./willing_logo.png" />
            //                </div>   */}
                     
                       <br/>  
                           <h6 style={{color:"black",textAlign:'left'}}>Email</h6>
                          <br/>
                            <div className='inputContainer'>
                           <i className="fa fa-user"></i>
                          <input className='field' required type ='email' onChange={(e) =>setEamil(e.target.value)} value={email}   placeholder="Email"></input>
                           </div>
                           
                          
                           <h6 style={{color:"black",textAlign:'left',marginTop:'30px'}}>Password</h6>
                           <br/>
                           <div className='inputContainer'>
                           <i className="fa fa-unlock-alt"></i>
                           <input className='field' required type ='password' onChange={(e) =>setPassword(e.target.value)} value={password}  placeholder='Password'></input>
                           </div>
                           
                           <div className='rowContainer'>
                            
                           <input className='childCon'  id='autoLogin' type='checkbox' style={{textAlign:'left'}}></input>
                           <h3 style={{fontSize:'10px',marginLeft:'5px',whiteSpace:'nowrap'}}>Remember Me</h3>
            
                          <h3 className='childCon' id='forgotPass' style={{fontSize: '10px',textAlign:'right',cursor:'pointer',fontWeight:'bold',
                           color:'blue'}}>Forgot Password?</h3>
                           
                           
                            </div>
                           
                            <button className='btnSubmit' type='submit'>LOGIN</button>
                           
                         </form>
                          </div>
                          </div>
                       </>
    )
}

export default LogIn


