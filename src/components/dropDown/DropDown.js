import React from "react";

const DropDown = ({ value, handleOptions, folder }) => {
  console.log(`Folder: `, folder);
  return (
    <>
      <select value={value} onChange={handleOptions}>
        {folder}
      </select>
    </>
  );
};

export default DropDown;
