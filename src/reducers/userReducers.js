import {USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST} from '../constants/userConstant'


export const userReducer = (state = { isAuth: false}, action) =>{
    switch(action.type){
     case USER_LOGIN_REQUEST:
         return{
             loading: true
         }
     case USER_LOGIN_SUCCESS:
         return{
             isAuth: true,
             loading: false,
             user: action.payload
         }
      case USER_LOGIN_FAIL: 
      return{
          ...state,
          loading: false,
          error: action.payload
      }
      default:
          return state

    }

}