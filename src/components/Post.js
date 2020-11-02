import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Location from "./Location";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      whenValue: 0,
      whereValue: 0,
      selectedCategory:"" ,
      Category: "",
      Description: "",
      Duration: "",
      Raius: "",
      Urgency: "",
      Name: "",
      Phonenumber: "",
      color:"#e4e4e4"
    };
  }

  updateTimeZone = (time) => {
    this.setState({ value: time.target.value });
  };

  sendPostInformation = () => {};
  ChangeButtonFunction =(e)=>{
    this.setState({ selectedCategory: e.target.name });
    console.log(this.state.selectedCategory);
    if (this.state.selectedCategory === this.state.Category){
        this.setState({ color:"4d34c1" });
        console.log ("yes");
        }
        else {
            this.setState({ color:"#e4e4e4"  });
            console.log ("no");
        }
    
  }

  render() {
    console.log(this.state.Category);
    const date = new Date();
    var timestamp = date.getTime();
    document.body.style = "background: #f5f5f5;";
    return (
      <div>
        <form id="categoryForm" className="container">
          <h3 style={{ paddingTop: 30 }}>Choose Category</h3>
          <br />
          <div className="row">
            <input
              name="0"
              value="Emergency"
             onClick={(e) => this.setState({ selectedCategory: e.target.name }) } onClick={this.ChangeButtonFunction}
           
              
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="1"
              value="Medical"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="2"
              value="Ride/Delivery"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="3"
              value="Road Assist"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="4"
              value="Item Needed"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="5"
              value="Give Away Item"
              defaultValue="doon"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="6"
              value="Lost and Found"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="7"
              value="Social"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
            <input style={{ backgroundColor:this.state.color }}
              name="8"
              value="General"
              onClick={(e) => this.setState({ Category: e.target.name })} onClick={this.ChangeButtonFunction}
              type="button"
              className="col-sm category"
            />
          </div>
        </form>

        <form className="container PostDetails">
          <div className="row">
            <h3 className="col-12" style={{ paddingTop: 20 }}>
              Request Details
            </h3>
            <br />
            <span className="col-12">DESCRIPTION</span>
            <br />
            <span className="col-12">
              <textarea
                onChange={(e) => this.setState({ Description: e.target.value })}
                className="textareaStyle"
              />
            </span>

            <br />
            <br />
            <div className="col-3">
              <span>Location</span>
              <br />
              <input className="InputStyle" />
              <br />
              <br />
              <span> Urgency level: </span>
              <br />
              <select
                onChange={(e) => this.setState({ Urgency: e.target.value })}
              >
                <option value="0">Not urgent</option>
                <option value="1">Moderate</option>
                <option value="2">Serious</option>
                <option value="3">Critical</option>
                <option value="4">Life threatening</option>
              </select>
              <br />
              <br />
              <span>When</span>
              <br />
              <RangeSlider
                tooltip="auto"
                tooltipLabel={
                  (this.tool = () => {
                    return this.state.whenValue;
                  })
                }
                size="sm"
                max={30}
                min={1}
                value={this.state.whenValue}
                onChange={(changeEvent) =>
                  this.setState({
                    value: changeEvent.target.value * 86400000 + timestamp,
                    whenValue: changeEvent.target.value,
                  })
                }
              />
              <br />
              <br />
              <span>Where</span>
              <br />
              <RangeSlider
                value={this.state.whereValue}
                tooltip="auto"
                tooltipLabel={
                  (this.label = () => {
                    return this.state.whereValue + "KM";
                  })
                }
                size="sm"
                max={500}
                min={1}
                onChange={(changeEvent) =>
                  this.setState({
                    whereValue: changeEvent.target.value,
                  })
                }
              />
            </div>
            <span className="col-9">
              {/* <Location /> */}
            </span>
            {/* <input className="Input" /> */}
          </div>
        </form>
        <div className="container">
          <div className="  row">
            <form className=" contact col-3">
              <h3>Contact Details</h3>
              <span>NAME</span>
              <br />
              <input
                onChange={(e) => this.setState({ Name: e.target.value })}
                className="InputStyle"
              />
              <br />
              <br />
              <span>PHONE</span>
              <br />
              <input
                onChange={(e) => this.setState({ Phonenumber: e.target.value })}
                className="InputStyle"
                type="number"
              />
            </form>
            <div className="col-1"></div>
            <form id="imageForm" className=" contact col-8">
              <p id="image">Add Images</p>
            </form>
            <div style={{ margin: "auto" }}>
              <button
                onClick={() => this.sendPostInformation()}
                className="SendButton"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
