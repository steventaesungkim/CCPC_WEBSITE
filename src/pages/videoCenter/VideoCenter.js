import React, { Component } from "react";
// import "../../stylesheet/Styles.css";
import "./VideoCenter.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import DropDown from "../../components/dropDown/DropDown";

class VideoCenter extends Component {
  state = {
    folderName: "",
    title: "",
    videoId: "",
    editFolder: "",
    editVideo: "",
    defaultOption: "select folder",
    selectFolders: ["select folder", "folder1", "folder2", "folder3"],
    selectVideos: ["select video", "video1", "video2", "video3"],
    isDisabled: true,
    defaultOpt: "select folder",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Submit:`,
      this.state.defaultOption,
      this.state.title,
      this.state.videoId
    );
    // Does something here and submits to backend..
    this.reset();
  };

  reset = () => {
    this.setState({
      folderName: "",
      title: "",
      videoId: "",
      editFolder: "",
      editVideo: "",
      defaultOption: "select folder",
      isDisabled: true,
      defaultOpt: "select folder",
    });
  };

  handleOptions = (e) => {
    console.log(`OPTIONS: `, e.target.value);
    this.setState({
      defaultOption: e.target.value,
      // isDisabled: false,
    });
  };

  changeOption = (e) => {
    console.log(`OTHER OPTION:`, e.target.value);
    this.setState({
      defaultOpt: e.target.value,
      isDisabled: false,
    });
  };

  // THIS IS FOR FUTURE REFERENCE TO SEE IF I CAN APPLY DRY METHOD...
  createFolderInput = () => {
    const createInputStyle = {
      fontSize: "75%",
      height: "40%",
      letterSpacing: 1,
      paddingLeft: 10,
      width: "35%",
    };
    return (
      <Input
        type="text"
        name="folderName"
        value={this.state.folderName}
        style={createInputStyle}
        handleInput={this.handleInput}
      />
    );
  };

  render() {
    // const createInputStyle = {
    //   fontSize: "75%",
    //   height: "40%",
    //   letterSpacing: 1,
    //   paddingLeft: 10,
    //   width: "35%",
    // };
    const createBtnStyle = {
      alignItems: "center",
      display: "flex",
      fontSize: "75%",
      fontWeight: "700",
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
      fontSize: "75%",
      fontWeight: "700",
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
      fontSize: "75%",
      fontWeight: "700",
      width: "45%",
    };

    const {
      defaultOption,
      selectFolders,
      selectVideos,
      defaultOpt,
      isDisabled,
    } = this.state;
    console.log(defaultOption, selectFolders, selectVideos, defaultOpt);

    return (
      <>
        <div className="create__folder">
          <form className="videoCenterForm" onSubmit={this.handleSubmit}>
            <label>Create Folder</label>
            {this.createFolderInput()}
            <Button text="Create Folder" style={createBtnStyle} />
          </form>
        </div>

        <div className="section__edits">
          <p>Upload Video</p>
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleOptions}
                selectFolders={selectFolders}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.title}
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
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleOptions}
                selectFolders={selectFolders}
              />
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
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.changeOption}
                selectFolders={selectFolders}
              />
            </label>
            {defaultOpt ? (
              <label>
                Select Video
                <DropDown
                  defaultValue={defaultOpt}
                  handleOptions={this.changeOption}
                  selectFolders={selectVideos}
                  isDisabled={isDisabled}
                />
              </label>
            ) : null}
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
      </>
    );
  }
}

export default VideoCenter;
