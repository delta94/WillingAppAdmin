import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./Data.json";
import Users from "../users.json";
import Navbar from "./Navbar.js";
import Modal from "react-bootstrap/Modal";
import "../Navbar.css";

export default class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users,
      status: false,
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

  handleClose = () => this.setState({ status: false });
  handleShow = () => this.setState({ status: true });

  render() {
    document.body.style = "background: #f5f5f5;";
    return (
      <div>
        <Navbar />
        {/* modal section */}
        <Modal show={this.state.status} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Your Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              placeholder="Write your note here"
              className="textareaStyle"
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => this.handleClose()}
            >
              Close
            </button>
            <button className="modalBTN" onClick={() => this.handleClose()}>
              Save & Send
            </button>
          </Modal.Footer>
        </Modal>
        {/* modal section ends */}

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
                var mycreateDate = new Date(element.createDate * 1000);
                var myupdateDate = new Date(element.updateDate * 1000);
                return (
                  <tr>
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
