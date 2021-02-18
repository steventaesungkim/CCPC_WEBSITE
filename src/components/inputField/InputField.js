import React from "react";

const InputField = ({ name, value, style, handleInput }) => {
  return (
    <>
      <input
        className="input__field"
        type="text"
        name={name}
        value={value}
        style={style}
        onChange={handleInput}
      />
    </>
  );
};

export default InputField;
