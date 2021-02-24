import React from "react";

const DropDown = ({ defaultOption, handleOptions, selectFolders }) => {
  return (
    <>
      <select value={defaultOption} onChange={handleOptions}>
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
