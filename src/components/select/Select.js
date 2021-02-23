import React from "react";

const Select = ({ selectOptions }) => {
  console.log(`Select: `, selectOptions);
  return (
    <>
      <select>{selectOptions}</select>
    </>
  );
};

export default Select;
