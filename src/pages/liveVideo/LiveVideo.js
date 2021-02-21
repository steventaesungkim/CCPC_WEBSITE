import React, { Component } from "react";
import "./LiveVideo.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

class LiveVideo extends Component {
  state = { id: null };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Does something here and submits to backend..
    this.reset();
  };

  reset = () => {
    this.setState({
      id: null,
    });
  };

  liveVideoForm = () => {
    const inputStyle = {
      fontSize: "75%",
      height: "20%",
      letterSpacing: 1,
      paddingLeft: 10,
      width: "35%",
    };

    const buttonStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "85%",
      height: "20%",
      justifyContent: "center",
      width: "10%",
    };

    return (
      <>
        <Input
          type="text"
          name="id"
          value={this.state.id}
          style={inputStyle}
          handleInput={this.handleInput}
        />

        <Button text="Upload" style={buttonStyle} />
      </>
    );
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <lable>Live Video ID</lable>
        {this.liveVideoForm()}
      </form>
    );
  }
}

export default LiveVideo;
