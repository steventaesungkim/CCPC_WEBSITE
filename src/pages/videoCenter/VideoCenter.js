import React, { Component } from "react";
// import "../../stylesheet/Styles.css";
import "./VideoCenter.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import Select from "../../components/select/Select";
class VideoCenter extends Component {
  state = {
    folderName: "",
    title: "",
    videoId: null,
    editFolder: "",
    editVideo: "",
    selectFolder: ["folder1", "folder2", "folder3"],
    selectVideo: ["video1", "video2", "video3"],
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

  selectFolders = () => {
    const { selectFolder } = this.state.selectFolder;
    return selectFolder.map((folder, i) => {
      return <option key={i}>{folder}</option>;
    });
  };

  selectVideos = () => {
    const { selectVideo } = this.state.selectVideo;
    return selectVideo.map((video, i) => {
      return <option key={i}>{video}</option>;
    });
  };

  render() {
    const createInputStyle = {
      fontSize: "75%",
      height: "40%",
      letterSpacing: 1,
      paddingLeft: 10,
      width: "35%",
    };
    const createButtonStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "85%",
      height: "40%",
      justifyContent: "center",
      width: "12%",
    };

    const sectionInputStyle = {
      fontSize: "75%",
      height: "100%",
      letterSpacing: 1,
      paddingLeft: 10,
      width: "65%",
    };
    const sectionButtonStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "85%",
      height: "20%",
      justifyContent: "center",
      alignSelf: "flex-end",
      width: "65%",
    };

    return (
      <>
        <div className="create__folder">
          <form className="videoCenterForm">
            <label>Create Folder</label>
            <Input
              type="text"
              name="folderName"
              value={this.state.folderName}
              style={createInputStyle}
              handleInput={this.handleInput}
            />

            <Button text="Create Folder" style={createButtonStyle} />
          </form>
        </div>

        {/* <section> */}
        <div className="section__edits">
          <p>Upload Video</p>
          <form className="videoForm">
            <label>
              Select Folder
              <Select selectOptions={this.selectFolders} />
            </label>

            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.videoId}
                style={sectionInputStyle}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Video ID
              <Input
                type="text"
                name="videoId"
                value={this.state.videoId}
                style={sectionInputStyle}
                handleInput={this.handleInput}
              />
            </label>
            <Button type="Upload" style={sectionButtonStyle} />
          </form>
        </div>

        <div className="section__edits">
          <p>Edit Folder</p>
          <form className="videoForm">
            <label>
              Select Folder
              <Select selectOptions={this.selectFolders} />
            </label>
            <label>
              Edit Folder
              <Input
                type="text"
                name="editFolder"
                value={this.state.editFolder}
                style={sectionInputStyle}
                handleInput={this.handleInput}
              />
            </label>

            {/* <div className="section__btn"> */}
            <Button type="Edit" style={sectionButtonStyle} />
            <Button type="Remove" style={sectionButtonStyle} />
            {/* </div> */}
          </form>
        </div>

        <div className="section__edits">
          <p>Edit Video</p>
          <form className="videoForm">
            <label>
              Select Folder
              <Select selectOptions={this.selectFolders} />
            </label>
            <label>
              Select Video
              <Select selectOptions={this.selectVideos} />
            </label>
            <label>
              Edit Video
              <Input
                type="text"
                name="editVideo"
                value={this.state.editVdieo}
                style={sectionInputStyle}
                handleInput={this.handleInput}
              />
            </label>

            {/* <div className="section__btn"> */}
            <Button type="Edit" style={sectionButtonStyle} />
            <Button type="Remove" style={sectionButtonStyle} />
            {/* </div> */}
          </form>
        </div>
        {/* </section> */}
      </>
    );
  }
}

export default VideoCenter;
