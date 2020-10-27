import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import data from "./Data.json";
import Modal from "react-bootstrap/Modal";
import "../Navbar.css";
import Axios from "axios";
// import { element } from "prop-types";

export default class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loaded: false,
      status: false,
      note: false,
      chosenUserName: "",
      chosenUserId: 0,
    };
  }

  componentDidMount = () => {
    Axios.get(
      "https://cors-anywhere.herokuapp.com/http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/X98ActivitieS?token=d6be46ed-5cdc-403b-9ed1-0af8c5329864"
    )
      .then((res) => {
        console.log(res.data);
        this.setState({ users: res.data, loaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function that sort the table order
  SortByName = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  SortById = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.id < b.id) return -1;

      if (a.id > b.id) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  SortByPhone = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.phone < b.phone) return -1;

      if (a.phone > b.phone) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  SortByCDate = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.createDate.toLowerCase() < b.createDate.toLowerCase()) return -1;

      if (a.createDate.toLowerCase() > b.createDate.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  SortByDate = () => {
    let SortList = this.state.users.sort((a, b) => {
      if (a.updateDate.toLowerCase() < b.updateDate.toLowerCase()) return -1;

      if (a.updateDate.toLowerCase() > b.updateDate.toLowerCase()) return 1;

      return 0;
    });
    this.setState({ users: SortList });
  };

  SortByRequests = () => {
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
  handleShow = (name, id) => this.setState({ status: true, chosenUserName: name, chosenUserId: id});




  render() {
    document.body.style = "background: #f5f5f5;";
    return (
      <div>
        <Navbar />

        {/* Modal Section */}
        <Modal show={this.state.status} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Hi {this.state.chosenUserName} ( {this.state.chosenUserId} ) </Modal.Title>
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

        {/* Modal Section Ends */}
        <Modal show={this.state.note} onHide={() => this.handleNoteClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Report Details:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h6>ID:</h6>
            <p> </p>
            <h6>Name</h6>
            <p>phone number</p>
            <h6></h6>
            <p>
              <br/>
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

        {this.state.loaded ? (
          <div style={{ marginTop: 30 }} className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.SortById()}
                    >
                      ID
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      // onClick={() => this.SortByName()}
                    >
                      Name
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.SortByPhone()}
                    >
                      Phone
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      // onClick={() => this.SortByStatus()}
                    >
                      Status
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      // onClick={() => this.SortByCDate()}
                    >
                      Create Date
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      // onClick={() => this.SortByDate()}
                    >
                      Last Connection
                    </i>
                  </th>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      // onClick={() => this.SortByRequests()}
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
                    <tr>
                      <td onClick={() => this.handleNoteShow()}>
                        {element.id}
                      </td>
                      <td id="NameHead" onClick={() => this.handleNoteShow()}>
                        {element.name}
                      </td>
                      <td onClick={() => this.handleNoteShow()}>
                        {element.phone}{" "}
                      </td>{" "}
                      <td> </td>
                      <td onClick={() => this.handleNoteShow()}>
                        {mycreateDate.toLocaleString()}{" "}
                      </td>
                      <td onClick={() => this.handleNoteShow()}>
                        {myupdateDate.toLocaleString()}{" "}
                      </td>
                      <td onClick={() => this.handleNoteShow()}>
                        {element.requestCounter}
                      </td>
                      <td className="sendButton">
                        <input
                          onClick={() => this.handleShow(element.name, element.id)}
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
        ) : (
          <div id="spinner" className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}

      </div>
    );
  }
}
