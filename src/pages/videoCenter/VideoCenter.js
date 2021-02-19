import React, { Component } from "react";

import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

class VideoCenter extends Component {
  state = {
    folderName: "",
    title: "",
    videoId: null,
    editFolder: "",
    editVideo: "",
  };

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
      folderName: "",
      title: "",
      videoId: null,
      editFolder: "",
      editVideo: "",
    });
  };

  render() {
    return (
      <>
        <div className="create__folder">
          <form>
            <label>Create Folder</label>
            <Input
              type="text"
              name="folderName"
              value={this.state.folderName}
              handleInput={this.handleInput}
            />

            <Button />
          </form>
        </div>

        <section>
          <div className="upload__video">
            <p>Upload Video</p>
            <form>
              <label>Select Folder</label>
              <Input />
              <label>Title</label>
              <Input
                name="videoId"
                value={this.state.videoId}
                handleInput={this.handleInput}
              />
              <label>Video ID</label>
              <Input />

              <Button />
            </form>
          </div>

          <div className="edit__folder">
            <p>Edit Folder</p>
            <form>
              <label>Select Folder</label>
              <Input />
              <label>Edit Folder</label>
              <Input
                name="editFolder"
                value={this.state.editFolder}
                handleInput={this.handleInput}
              />

              <div>
                <Button />
                <Button />
              </div>
            </form>
          </div>

          <div className="edit__video">
            <p>Edit Video</p>
            <form>
              <label>Select Folder</label>
              <Input />
              <label>Select Video</label>
              <Input />
              <label>Edit Video</label>
              <Input
                name="editVideo"
                value={this.state.editVdieo}
                handleInput={this.handleInput}
              />

              <div>
                <Button />
                <Button />
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default VideoCenter;
