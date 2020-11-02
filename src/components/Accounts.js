import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import data from "./Data.json";
import Modal from "react-bootstrap/Modal";
import "../Navbar.css";
import "../Accounts.css";
import Axios from "axios";
// import { element } from "prop-types";
//Test
export default class Accounts extends Component {
  constructor(props) {
    super(props);

   this.state = {
      users: [],
      loaded: false,
      userStatus: "",
      status: false,
      note: false,
      sort: {
        thName: "",
        sortDirection: "",
      },
      chosenUserName: "",
      chosenUserId: 0,
    };
  }

  componentDidMount = () => {
    Axios.get(
      "http://ec2-3-87-113-188.compute-1.amazonaws.com:8080/X98ActivitieS?token=d6be46ed-5cdc-403b-9ed1-0af8c5329864"
    )
      .then((res) => {
        // console.log(res.data);
        this.setState({ users: res.data, loaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  updateColToSort = (header) => {
    if (
      this.state.sort.thName === header &&
      this.state.sort.sortDirection === "ascending"
    ) {
      this.setState({
        sort: { thName: header, sortDirection: "descending" },
      });
    } else
      this.setState({
        sort: { thName: header, sortDirection: "ascending" },
      });

    switch (header) {
      case "id":
      case "phone":
      case "createDate":
      case "updateDate":
      case "requestCounter":
        this.SortTbByColTh(header);
        break;
      case "name":
        this.SortTbByThName();
        break;
      default:
        console.log("wow");
    }
  };

  SortTbByColTh = (header) => {
    let SortedList = this.state.users.sort((a, b) => {
      if (a[header] < b[header])
        return this.state.sort.sortDirection === "ascending" ? -1 : 1;
      if (a[header] > b[header])
        return this.state.sort.sortDirection === "ascending" ? 1 : -1;
      return 0;
    });
    this.setState({ users: SortedList });
  };

  SortTbByThName = () => {
    this.checkIfUpperCase();

    let SortedList = this.state.users.sort((a, b) => {
      if (a.name < b.name ) 
        return this.state.sort.sortDirection === "ascending" ? -1 : 1;
      if (a.name > b.name)
        return this.state.sort.sortDirection === "ascending" ? 1 : -1;
      return 0;
      // }
    });
    this.setState({ users: SortedList });
  };

  checkIfUpperCase = () => {
    this.state.users.filter((user) => {
      if (user.name !== null) {
        return user.name.toLowerCase();
      }
    });
  };

  //show and hide the modal
  ChangeNotifStatus = () => {
    if (this.state.notifStatus) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  handleNoteClose = () => this.setState({ note: false });
  handleNoteShow = () => this.setState({ note: true });
  handleClose = () => this.setState({ status: false });
  handleShow = (name, id) =>
    this.setState({ status: true, chosenUserName: name, chosenUserId: id });



  render() {
    document.body.style = "background: #f55f5;";
    return (
      <div>
        <Navbar />

        {/* Modal Section - user notification */}
        <Modal show={this.state.status} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>
              Send Notification to {this.state.chosenUserName} ({" "}
              {this.state.chosenUserId} ){" "}
            </Modal.Title>
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

        {/* Modal Section - report  */}
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

        {this.state.loaded ? (
          <div style={{ marginTop: 30 }} className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.updateColToSort("id")}
                    >
                      ID
                    </i>
                  </th>

                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.updateColToSort("name")}
                    >
                      Name
                    </i>
                  </th>

                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.updateColToSort("phone")}
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
                      onClick={() => this.updateColToSort("createDate")}
                    >
                      Create Date
                    </i>
                  </th>

                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.updateColToSort("updateDate")}
                    >
                      Last Connection
                    </i>
                  </th>

                  <th scope="col">
                    <i
                      className="TableHeadStyle"
                      onClick={() => this.updateColToSort("requestCounter")}
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
                      <tr key={element.id}>
                        <td onClick={() => this.handleNoteShow()}>
                          {element.id}
                        </td>
                        <td id="NameHead" onClick={() => this.handleNoteShow()}>
                          {element.name}
                        </td>
                        <td onClick={() => this.handleNoteShow()}>
                          {element.phone}
                        </td>
                        <td>
                          {element.status === 0 ? (
                            <div className="userStatus">
                              <div
                                className="StatDot"
                                style={{ backgroundColor: "red" }}
                              ></div>
                              Blocked
                            </div>
                          ) : (
                            <div className="userStatus">
                              <div
                                className="StatDot"
                                style={{ backgroundColor: "#5ac25a" }}
                              ></div>
                              Active
                            </div>
                          )}
                        </td>
                        <td onClick={() => this.handleNoteShow()}>
                          {mycreateDate.toLocaleString()}
                        </td>
                        <td onClick={() => this.handleNoteShow()}>
                          {myupdateDate.toLocaleString() !== "Invalid Date"
                            ? myupdateDate.toLocaleString()
                            : ""}
                        </td>
                        <td onClick={() => this.handleNoteShow()}>
                          {element.requestCounter}
                        </td>
                        <td className="sendButton">
                          <input
                            onClick={() =>
                              this.handleShow(element.name, element.id)
                            }
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

