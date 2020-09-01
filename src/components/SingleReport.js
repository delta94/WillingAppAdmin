import React, { Component } from "react";
import { ReactComponent as ReactLogo } from "../Dots.svg";
import "../Reports.css";
import Modal from "react-bootstrap/Modal";

export default class SingleReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: false,
      flag: false,
      status: false,
      disabledButton: false,
    };
  }

  handleNoteClose = () => this.setState({ note: false });
  handleNoteShow = () => {
    this.setState({ note: true });
    // this.setState({button: false})
  };

  show = () => {
    if (this.state.flag === true) {
      return <div>works</div>;
    }
  };

  handleClose = () => {
    this.setState({ status: false });
  };
  handleShow = () => {
    this.setState({ status: true });
  };

  ChangeButtonFunction = () => {
    this.setState({ disabledButton: true });
  };

  render() {
    let color = "#5ac25a";
    if (this.props.element.status === "close") {
      color = "red";
    } else if (this.props.element.status === "open") {
      color = "#5ac25a";
    } else {
      color = "orange";
    }
    return (
      <tr>
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
            <p> reson description</p>
            <h6>Reporters' Details</h6>
            <p>
              name
              <br />
              phone number{" "}
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
        <td onClick={this.handleNoteShow}>{this.props.element.descrirtion}</td>
        <td onClick={this.handleNoteShow}>{this.props.element.type}</td>
        <td onClick={this.handleNoteShow} style={{ textAlign: "left" }}>
          <span style={{ backgroundColor: `${color}` }} className="dot"></span>
          {this.props.element.status}
        </td>
        <td onClick={this.handleNoteShow}>{this.props.element.date}</td>
        <td className="sendButton">
          <input
            disabled={this.state.disabledButton}
            onClick={this.ChangeButtonFunction}
            id="lightButton"
            type="submit"
            value="confirm"
          />
          <input
            id="redButton"
            onClick={this.handleShow}
            type="submit"
            value="delete"
          />
          <ReactLogo
            style={{ marginTop: 0 }}
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
