import React, { Component } from "react";
import "./LiveVideo.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

class LiveVideo extends Component {
  state = { input: "" };

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
      input: "",
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <lable>Live Video ID</lable>
        <Input
          type="text"
          name="videoID"
          value={this.state.input}
          handleInput={this.handleInput}
        />

        <Button style={{}} text="Upload" type="submit" />
      </form>
    );
  }
}

export default LiveVideo;
