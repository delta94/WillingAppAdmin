import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar.js";
import Modal from "react-bootstrap/Modal";
import Users from "../users.json";
export default class Reports extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          users: Users,
          status: false,
          note:false,
        };
      }
      statusChange = () => {
        if (this.state.status) {
          this.setState({ status: false });
        } else {
          this.setState({ status: true });
        }
      };
    
      handleClose = () => this.setState({ status: false });
      handleShow = () => this.setState({ status: true });

      noteChange = () => {
        if (this.state.note) {
          this.setState({ note: false });
        } else {
          this.setState({ note: true });
        }
      };
    
      handleNoteClose = () => this.setState({ note: false });
      handleNoteShow = () => this.setState({ note: true });
    
    render() {
        return (
            <div>
            <Navbar />
            {/* modal section */}
            <Modal show={this.state.status} onHide={() => this.handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Delete this request?</Modal.Title>
              </Modal.Header>
              {/* <Modal.Body> */}
                {/* <textarea
                  placeholder="Write your note here"
                  className="textareaStyle"
                /> */}
              {/* </Modal.Body> */}
              <Modal.Footer>
                <button
                  className="btn btn-secondary"
                  onClick={() => this.handleClose()}
                >
                  Cancel
                </button>
                <button className="modalBTN" onClick={() => this.handleClose()}>
                  Delete
                </button>
              </Modal.Footer>
            </Modal>
            {/* modal section ends */}
            <Modal show={this.state.note} onHide={() => this.handleNoteClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Report Details:</Modal.Title>
              </Modal.Header>
              <Modal.Body> 
              <h6>Report description:</h6>
              <p>Report description </p>
              <h6>Reson</h6>
              <p> reson  description</p>
              <h6>Reporters' Details</h6>
              <p>name<br/>phone number </p>
              <h6>send notification to user name</h6>
              <textarea
                  placeholder="Write your note here"
                  className="textareaStyle"
                />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-secondary"
                  onClick={() => this.handleNoteClose()}
                >
                  Cancel
                </button>
                <button className="modalBTN" onClick={() => this.handleNoteClose()}>
                  send
                </button>
              </Modal.Footer>
            </Modal>
    
            <div style={{ marginTop: 30 }} className="container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                       
                      >
                        Report description
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                      
                      >
                      type 
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                       
                      >
                        
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                       
                      >
                        Status
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                        
                      >
                         date
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                       
                      >
                      </i>
                    </th>
                    <th scope="col">
                      <i
                        className="TableHeadStyle"
                        
                      >
                      
                      </i>
                    </th>
                    <th className="sendBurronStyle" scope="col">
                    block
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                      <tr >
                        <td onClick={this.handleNoteShow}></td>
                        <td onClick={this.handleNoteShow}></td>
                        <td onClick={this.handleNoteShow}> </td> <td onClick={this.handleNoteShow}> </td>
                        <td onClick={this.handleNoteShow}> </td>
                        <td onClick={this.handleNoteShow}> </td>
                        <td onClick={this.handleNoteShow}></td>
                        <td className="sendButton">
                         <p> <input type="submit"value="confirm"/> <input type="submit"value="delete" style={{backgroundColor:"#de4b4c" ,color:"white"}}
                         onClick={this.handleShow}/></p>
                            
                            
                           
                          
                        </td>
                      </tr>
                   
                  
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    }
    