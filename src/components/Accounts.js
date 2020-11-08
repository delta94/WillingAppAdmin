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
      sortCol: {
        thName: "",
        sortDirection: "descending",
      },
      chosenUserName: "",
      chosenUserId: 0,
      btnDisable: false,
      color: "",
    };
  }

  componentDidMount = () => {
    Axios.get(
      "http://ec2-3-87-113-188.compute-1.amazonaws.com:8080/X98ActivitieS?token=d6be46ed-5cdc-403b-9ed1-0af8c5329864"
    )
      .then((res) => {
        let descendData = [];
        // console.log(res.data);
        for ( let i = 0; i < res.data.length; i++) {
          descendData = [res.data[i], ...descendData];
        }
        this.setState({ users: descendData, loaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateColToSort = (header) => {
    if (
      this.state.sortCol.thName === header &&
      this.state.sortCol.sortDirection === "ascending"
    ) {
      this.setState({
        sortCol: { thName: header, sortDirection: "descending" },
      });
    } else
      this.setState({
        sortCol: { thName: header, sortDirection: "ascending" },
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
        
    }
  };

  SortTbByColTh = (header) => {
    let SortedList = this.state.users.sort((a, b) => {
      if (a[header] < b[header])
        return this.state.sortCol.sortDirection === "ascending" ? -1 : 1;
      if (a[header] > b[header])
        return this.state.sortCol.sortDirection === "ascending" ? 1 : -1;
      return 0;
    });
    this.setState({ users: SortedList });
  };

  SortTbByThName = () => {
    let tempNullList = [];
    let tempNameList = [];

    this.state.users.map((user) => {
      if (user.name === null) {
        return (tempNullList = [...tempNullList, user]);
      } else {
        return (tempNameList = [...tempNameList, user]);
      }
    });

    tempNameList.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase())
        return this.state.sortCol.sortDirection === "ascending" ? 1 : -1;
      else if (a.name.toLowerCase() > b.name.toLowerCase())
        return this.state.sortCol.sortDirection === "ascending" ? -1 : 1;
      else return 0;
    });

    let SortedList = [...tempNameList, ...tempNullList];
    this.setState({ users: SortedList });
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
  handleShow = (name, id, fcm) => {
    //console.log( name, id, fcm);
    if (fcm !== null) {
      this.setState({
        status: true,
        chosenUserName: name,
        chosenUserId: id,
        btnDisable: false,
        color: "",
      });
    } else
      this.setState({
        status: true,
        chosenUserName: name,
        chosenUserId: id,
        btnDisable: true,
        color: "gray",
      });
  };

  render() {
    document.body.style = "background: #f55f5;";
    return (
      <div>
       

        {/* Modal Section - User notification */}
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
            <button
              className="modalBTN"
              onClick={() => this.handleClose()}
              style={{ backgroundColor: this.state.color }}
              disabled={this.state.btnDisable}
            >
              Send
            </button>
          </Modal.Footer>
        </Modal>

        {/* Modal Section - Report  */}
        <Modal show={this.state.note} onHide={() => this.handleNoteClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Report Details:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h6>ID:</h6>
            <p> </p>
            <h6>Name</h6>
            <p>phone number</p>
            {/* <h6></h6> */}
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
                            this.handleShow(
                              element.name,
                              element.id,
                              element.fcm_token
                            )
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

