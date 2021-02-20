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
            <label>
              Create Folder
              <Input
                type="text"
                name="folderName"
                value={this.state.folderName}
                handleInput={this.handleInput}
              />
            </label>

            <Button text="Create Folder" style={{}} />
          </form>
        </div>

        <section>
          <div className="upload__video">
            <p>Upload Video</p>
            <form>
              <label>
                Select Folder
                <Input />
              </label>
              <label>
                Title
                <Input
                  type="text"
                  name="title"
                  value={this.state.videoId}
                  handleInput={this.handleInput}
                />
              </label>
              <label>
                Video ID
                <Input
                  type="text"
                  name="videoId"
                  value={this.state.videoId}
                  handleInput={this.handleInput}
                />
              </label>

              <Button type="Upload" style={{}} />
            </form>
          </div>

          <div className="edit__folder">
            <p>Edit Folder</p>
            <form>
              <label>
                Select Folder
                <Input />
              </label>
              <label>
                Edit Folder
                <Input
                  type="text"
                  name="editFolder"
                  value={this.state.editFolder}
                  handleInput={this.handleInput}
                />
              </label>

              <div>
                <Button type="Edit" style={{}} />
                <Button type="Remove" style={{}} />
              </div>
            </form>
          </div>

          <div className="edit__video">
            <p>Edit Video</p>
            <form>
              <label>
                Select Folder
                <Input />
              </label>
              <label>
                Select Video
                <Input />
              </label>
              <label>
                Edit Video
                <Input
                  type="text"
                  name="editVideo"
                  value={this.state.editVdieo}
                  handleInput={this.handleInput}
                />
              </label>

              <div>
                <Button type="Edit" style={{}} />
                <Button type="Remove" style={{}} />
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default VideoCenter;
