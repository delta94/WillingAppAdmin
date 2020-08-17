import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./Data.json";
import Users from "../users.json";
import Modal from "react-bootstrap/Modal";
import "../Navbar.css";

export default class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users,
      status: false,
      note: false,
    };
  }

  // function that sort the table order
  ArrangeByName = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  ArrangeById = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.id < b.id) return -1;

      if (a.id > b.id) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  ArrangeByPhone = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.phone < b.phone) return -1;

      if (a.phone > b.phone) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  ArrangeByCDate = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.createDate.toLowerCase() < b.createDate.toLowerCase()) return -1;

      if (a.createDate.toLowerCase() > b.createDate.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  ArrangeByDate = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.updateDate.toLowerCase() < b.updateDate.toLowerCase()) return -1;

      if (a.updateDate.toLowerCase() > b.updateDate.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  ArrangeByRequests = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.numOfRequests < b.numOfRequests) return -1;

      if (a.numOfRequests > b.numOfRequests) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  //show and hide the modal
  statusChange = () => {
    if (this.state.status) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };
  handleNoteClose = () => this.setState({ note: false });
  handleNoteShow = () => this.setState({ note: true });

  handleClose = () => this.setState({ status: false });
  handleShow = () => this.setState({ status: true });

  render() {
    document.body.style = "background: #f5f5f5;";
    return (
      <div>
        {/* modal section */}
        <Modal show={this.state.status} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Send Notification to User Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="textareaStyle" />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => this.handleClose()}
            >
              Close
            </button>
            <button className="modalBTN" onClick={() => this.handleClose()}>
              Send
            </button>
          </Modal.Footer>
        </Modal>
        {/* modal section ends */}
        <Modal show={this.state.note} onHide={() => this.handleNoteClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Report Details:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>ID:</h6>
            <p> </p>
            <h6>Name</h6>
            <p> phone number</p>
            <h6></h6>
            <p>
            
              <br />
              
            </p>
            
           
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => this.handleNoteClose()}
            >
              Cancel
            </button>
            {/* <button className="modalBTN" onClick={() => this.handleNoteClose()}>
              send
            </button> */}
          </Modal.Footer>
        </Modal>

        <div style={{ marginTop: 30 }} className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeById()}
                  >
                    ID
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByName()}
                  >
                    Name
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByPhone()}
                  >
                    Telephone
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByStatus()}
                  >
                    Status
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByCDate()}
                  >
                    Create date
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByDate()}
                  >
                    Last conection
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ArrangeByRequests()}
                  >
                    Requests
                  </i>
                </th>
                <th className="sendBurronStyle" scope="col">
                  Send
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((element) => {
                var mycreateDate = new Date(parseInt(element.createDate));
                var myupdateDate = new Date(parseInt(element.updateDate));
                return (
                  <tr onClick={() => this.handleNoteShow()}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.phone} </td> <td> </td>
                    <td>{mycreateDate.toLocaleString()} </td>
                    <td>{myupdateDate.toLocaleString()} </td>
                    <td>{element.numOfRequests}</td>
                    <td className="sendButton">
                      <input
                        onClick={() => this.handleShow()}
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="inTableButton"
                        type="submit"
                        value="Send"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
