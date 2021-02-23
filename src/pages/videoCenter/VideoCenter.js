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
    console.log(`handleSubmit:`, e);
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
    console.log(`SELECTFOLDER METHOD:`, selectFolder);
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
    console.log(this.state.selectFolder);
    const createInputStyle = {
      fontSize: "75%",
      height: "40%",
      letterSpacing: 1,
      paddingLeft: 10,
      width: "35%",
    };
    const createBtnStyle = {
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
    const uploadBtnStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "85%",
      height: "20%",
      justifyContent: "center",
      alignSelf: "flex-end",
      width: "65%",
    };
    const editRemoveBtnStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "85%",
      height: "100%",
      justifyContent: "center",
      fontSize: "85%",
      width: "45%",
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

            <Button text="Create Folder" style={createBtnStyle} />
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
            <Button text="Upload" style={uploadBtnStyle} />
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

            <div className="btn__container">
              <Button text="Edit" style={editRemoveBtnStyle} />
              <Button text="Remove" style={editRemoveBtnStyle} />
            </div>
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

            <div className="btn__container">
              <Button text="Edit" style={editRemoveBtnStyle} />
              <Button text="Remove" style={editRemoveBtnStyle} />
            </div>
          </form>
        </div>
        {/* </section> */}
      </>
    );
  }
}

export default VideoCenter;
