import React, { Component } from 'react'
import data from "./Data.json";
import axios from 'axios';
import  './Main1.css';
export default class Main extends Component {

    constructor(props){
        super(props)
        }
        state = {
          // persons:this.props.person,
          // number:'',
          chartData:{
            labels:[
            "emergency",
            "medical",
            "road_assist","item_needed",
            "give_away_item",
            "ride_deliver",
             "lost_and_found",
             "social",
             "general"],
            datasets:[
              {
                label:"requests",
                datails:[80,50,49,62,0,11,33,60,89
                ],
                backgroundColor:[
                  'pink', 'yellow','blue', 'violett','red', 'green','grey','orange','brown'
                ]
              }
            ]
          
          }
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
              
      
      
        
        
        render() {
          return (
            
            <div style={{textAlign:"center" }}>
            
          
              
               
            {/* <ul>
               { this.props.persons.map((person,index) => <li key={index}>{person.name} </li> )}
               {this.Request}
            </ul> */}
            {/* <ul>
              {this.props.person.filter((person, index => (person.name==) */}
              {/* <li>
       ))}
            </ul> */}
            {/* {this.state.persons.map} */}
            </div>
            
      
          )
        }
      }
    
    
    
    
     
    render() {
       
        return (
            <div>
                 <div>
        <nav className="navbarStyle">
          <div id="search" className="row">
            <div className="col-3"></div>
            <div id="searchbar" className="col-6 input-group mb-3">
              <input id="searchField" type="search" placeholder="Search" />
              <div className="input-group-prepend" id="magdelet">
                <i className="input-group-image">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-search"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-1">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </div>
            <div className="col-1"></div>
          </div>
          <div id="buttons" className="row">
            <div className="col-1"></div>
            <div className="col-1">
              <button className="buttonStyle">Dashboard</button>
            </div>
            <div className="col-1">
              <button className="buttonStyle">Accounts</button>
            </div>
            <div className="col-1">
              <button className="buttonStyle">Requests</button>
            </div>
            <div className="col-8"></div>
          </div>
        </nav>
      </div>
    );
  }
}
            
            </div>
        )
    }

}