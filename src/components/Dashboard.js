import React from 'react';
import {Link} from 'react-router-dom';
import data from "./Data.json";
import general from './General.svg';
import emergency from './Emergency.svg';
import giveaway from './Give away.svg';
import itemNeeded from './Item needed.svg';
import lostAndFound from './Lost and found.svg';
import Case from './Case.svg';
import rideDelivery from './Ride_Delivery.svg';
import road from './Road assist.svg';
import social from './Social.svg';

import axios from 'axios';
import 'react-svg-donuts/dist/index.css'
import Donut from 'react-svg-donuts';

export default class Dashboard extends React.Component {
  constructor(props){
  super(props)
  }
  state = {
   
        }
     

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //       console.log(persons);
  //       console.log(persons.length);
  //       let x= persons.length;
  //       this.setState({number:x});
        
  date=(e)=>{
    this.setState({value: e.target.value});
   console.log(e.target.value);
    console.log(6);
  }
  date2=(e)=>{
     this.setState({value: e.target.value});
     console.log(e.target.value);
     console.log(7);
  }
  user=()=>{
  
  }

  
  
  render() {
    return (
      
     
      
		
         <div id="dates" style={{textAlign:"right"}}>
            <input type="date" id="dates-input" onClick={this.date} />
           <input type="date" id="date-input" onChange={this.date2} />
           {/* <input type="submit" onClick={this.user} />  */}
           <div/>
    
      


    <br/><br/>

  <div style={{textAlign:"left"}}>
  <p>
   <span><img src={emergency} style={{width:"80px",height:"20px"}}></img> {data.requests.emergency}</span> 
   <span><img src={Case} style={{width:"80px",height:"20px"}}></img> {data.requests.medical}</span> 
   <span><img src={rideDelivery} style={{width:"80px",height:"20px"}}></img> {data.requests.road_assist}</span> 
   <span><img src={road} style={{width:"80px",height:"20px"}}></img> {data.requests.general}</span> 
   <span><img src={itemNeeded} style={{width:"80px",height:"20px"}}></img> {data.requests.item_needed}</span> 
   <span><img src={giveaway} style={{width:"80px",height:"20px"}}></img> {data.requests.give_away_item}</span> 
   <span><img src={lostAndFound} style={{width:"80px",height:"20px"}}></img> {data.requests.lost_and_found}</span> 
   <span><img src={social} style={{width:"80px",height:"20px"}}></img> {data.requests.social}</span> 
   <span><img src={general} style={{width:"80px",height:"20px"}}></img> {data.requests.general}</span> 

 </p>
    </div>

    </div>


      

    )
  }
}