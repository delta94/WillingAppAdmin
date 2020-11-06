import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userReducer} from './reducers/userReducers'


const reducer = combineReducers({
    userAuth: userReducer
})


const userAuthFromStorage = localStorage.getItem('isAuth') ? JSON.parse(
    localStorage.getItem('isAuth')) : false

    const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(
        localStorage.getItem('userInfo')) : false

     const combined = {
         user: userInfoFromStorage,
         isAuth: userAuthFromStorage
     }
       
console.log(userAuthFromStorage);
console.log(userInfoFromStorage);
   console.log(combined);
const initialState = {
    userAuth: combined
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store