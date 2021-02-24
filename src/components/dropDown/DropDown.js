import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultOption,
  handleOptions,
  selectFolders,
  selectVideos,
  isDisabled,
  text,
}) => {
  console.log(defaultOption, selectFolders, text, isDisabled);
  return (
    <>
      <select
        className="dropdown"
        defaultValue={defaultOption}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder, i) => {
          return (
            <option value={folder} key={i}>
              {folder}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
