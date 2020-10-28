import React, { Component } from "react";
import { ReactComponent as ReactLogo } from "../Dots.svg";
import "../Reports.css";
import Modal from "react-bootstrap/Modal";

import Backdrop from "./UI/Backdrop";


export default class SingleReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: false,
      flag: false,
      status: false,
      disabledButtonConfirm: false,
      disabledButtonDelete: false,
      closeAlert: false,
      element: this.props.element
    };
    
  }



  handleNoteClose = () => this.setState({ note: false });

  handleNoteShow = () => {
    this.setState({ note: true });
    // this.setState({button: false})
  };
  flagOf = () => {
    this.setState({ flag: false });
  };

  show = () => {
    if (this.state.flag === true) {
      
      return (
        <div>
          <Backdrop click={this.flagOf}/>
        {/* <Alert 
         // onHide={() => this.CloseAlert()}
          style={{ position: "absolute", zIndex:'200' }}
          className="floatingDiv"
        > */}
          <div className="info-box"  >
            <ul className="reportOptionStyle">
              <option className="optionStyle">Send message to the Reporter</option>
              
              <option className="optionStyle">Send message to the Publisher</option>
              
              <option className="optionStyle">Block Publisher</option>
               {/* <button style={{boxSizing:"8px"}} class="btn btn-xs btn-danger">
              X                   
            </button> */}
            </ul>
           
          </div>
        {/* </Alert> */}
        </div>
      );
    }
  };



  CloseAlert = () => {
    this.setState({ closeAlert: true });
  };

  handleClose = () => {
    
    this.setState({ status: false });
    
    
    
  };
  handleShow = () => {
    this.setState({ status: true });
  };

  ChangeButtonFunction = () => {
    this.setState({ disabledButtonConfirm: true });
    this.setState(prevState => ({
      element: {                   
          ...prevState.element,    
          status: 'Closed'       
      }
  }))
    
  };

  handleClick = () => {
    
    
    this.setState({ disabledButtonDelete: true });
    this.setState({ disabledButtonConfirm: true });
    this.setState(prevState => ({
      element: {                   
          ...prevState.element,    
          status: 'Deleted'       
      }
  }))

    
  
     this.handleClose();
  };

  render() {
    //console.log(this.props.closeOptions);
    // console.log(this.state.disabledButtonConfirm);
  //  console.log( 'The State', this.state);
    console.log('The Element', this.state.element); 
    
   

   let stat = this.state.element.status 
   let newStat = stat.charAt(0).toUpperCase() + stat.slice(1)

  let newDate =  new Date(parseInt(this.props.element.date))
  
   

    let color = "#5ac25a";

    // if (this.props.closeOptions) {
    //   this.setState({ flag: false });
    // }
    if (this.state.element.status === "closed") {
      color = "red";
      
      
    } else if (this.state.element.status === "open") {
      color = "#5ac25a";
    } else {
      color = "orange";
    }

    if (this.state.disabledButtonConfirm && this.state.disabledButtonDelete) {
      color = 'orange'
    }else if(this.state.disabledButtonConfirm == true && this.state.disabledButtonDelete == false){
      color = 'red'
    }
    return (
      
      <tr>
        <Modal show={this.state.status} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Delete request ID {this.state.element.id}?</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body> */}
          {/* <textarea
                  placeholder="Write your note here"
                  className="textareaStyle"
                /> */}
          {/* </Modal.Body> */}
          <Modal.Body>
            
           
            <button
            className="modalBTN"
              style={{border: 'none', padding:'0 20px',backgroundColor: 'grey', marginRight:'7px'}}
              onClick={() =>{
                this.handleClose()
                
              } 
              }
            >
              Cancel
            </button>
            <button className="modalBTN" style={{border: 'none',padding:'0 20px'}} onClick={() => this.handleClick()}>
              Delete
            </button>
          </Modal.Body>
        </Modal>
        {/* modal section ends */}
        <Modal show={this.state.note} onHide={() => this.handleNoteClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Report Details:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Report description:</h6>
            <p>{this.state.element.descrirtion} </p>
            <h6>Reson</h6>
            <p> {this.state.element.type}</p>
            <h6>Reporters' Details</h6>
            <p>
              {this.state.element.nameOfReporter}
              <br />
              phone number:
              {this.state.element.Phonnumber}
            </p>
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
        <td>{this.state.element.id}</td>
        <td onClick={this.handleNoteShow}>{this.state.element.description}</td>
        {/* <td onClick={this.handleNoteShow}>{this.props.element.type}</td> */}
        <td onClick={this.handleNoteShow} >
          <span style={{ backgroundColor: `${color}` }} className="dot"></span>{" "}
          {newStat}
        </td>
        
        <td onClick={this.handleNoteShow}>{newDate.toLocaleString()}{" "}</td>
        <td className="sendButton" style={{ textAlign: "right" }} >
          <input
            disabled={this.state.disabledButtonConfirm || this.state.element.status === 'deleted' || 
            this.state.element.status === 'closed'}
            style={{
              backgroundColor: (this.state.disabledButtonConfirm || 
              this.state.element.status === 'deleted' || this.state.element.status === 'closed') &&  '#d3d3d3',
              cursor: (this.state.disabledButtonConfirm || 
              this.state.element.status === 'deleted' ||
              this.state.element.status === 'closed') && 'not-allowed'
              }}
            onClick={this.ChangeButtonFunction}
            id="lightButton"
            type="submit"
            value="Confirm"
          />
          <input
            // style={{ background: this.state.bgColor }}
            disabled={this.state.disabledButtonDelete || this.state.element.status === 'deleted' }
            style={{
              backgroundColor: (this.state.disabledButtonDelete ||
               this.state.element.status === 'deleted'  ) &&  '#d3d3d3' ,
              cursor: (this.state.disabledButtonDelete || this.state.element.status === 'deleted') && 'not-allowed'
              }}
            id="redButton"
            onClick={this.handleShow}
            type="submit"
            value="Delete"
          />
          <ReactLogo
            style={{ marginTop: 0 ,cursor: 'pointer',marginLeft:'5px' }}
            onClick={() => {
              this.setState({ flag: !this.state.flag });
              
            }}
          />
          {this.show()}
        </td>
      </tr>
    );
  }
}
