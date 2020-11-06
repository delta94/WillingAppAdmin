import {USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST} from '../constants/userConstant'
import axios from 'axios'


export const userLogin = (user) => async (dispatch) =>{

    axios.post('http://ec2-3-87-113-188.compute-1.amazonaws.com:8080/admin/login',user)
    .then(res => {
      console.log(res.data);
      if (res.data.token) {
         dispatch({
             type: USER_LOGIN_SUCCESS,
             payload: res.data, 
             isAuth:true
            })
         localStorage.setItem('userInfo',JSON.stringify(res.data))
        localStorage.setItem('isAuth',JSON.stringify(true))
      }else if(res.data.message){
          dispatch({
              type: USER_LOGIN_FAIL,
              payload: res.data.message,
              
          })
        //  this.setState({isAuth: false,message: res.data.message}) 
        //  setTimeout(() => this.setState({message:''}), 5000);
      }
      
     
     })
     .catch(err =>{
         alert(err)
     })
}