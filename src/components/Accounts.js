import React, { Component } from "react";
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
  ReArrange = () => {
    let SortList = this.state.users.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

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
                    onClick={() => this.ReArrange()}
                  >
                    ID
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
                  >
                    Name
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
                  >
                    Telephone
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
                  >
                    Status
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
                  >
                    Create date
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
                  >
                    Last conection
                  </i>
                </th>
                <th scope="col">
                  <i
                    className="TableHeadStyle"
                    onClick={() => this.ReArrange()}
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
