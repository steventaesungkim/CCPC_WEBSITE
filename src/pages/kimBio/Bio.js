import React from "react";
import { useParams } from "react-router-dom";

const Bio = () => {
  // let { bioId } = useParams();
  console.log("hello");
  return (
    <div className="bio__container">
      <h2>Rev. Ki Kim</h2>
      {/* <h2>{bioId}</h2> */}
      <div className="bio__content">
        <img alt="" />
        <p>lorem ipsum</p>
      </div>
    </div>
  );
};

export default Bio;
