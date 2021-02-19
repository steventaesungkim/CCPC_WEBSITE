import React from "react";

const Button = ({ style, text, type }) => {
  return (
    <>
      <button className="button" style={style} type={type}>
        {text}
      </button>
    </>
  );
};
