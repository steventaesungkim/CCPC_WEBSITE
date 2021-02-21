import React from "react";

const Button = ({ style, text }) => {
  return (
    <>
      <input className="button" type="submit" value={text} style={style} />
    </>
  );
};

export default Button;
