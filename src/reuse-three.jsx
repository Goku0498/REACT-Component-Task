/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ReuseThree = ({ side, link, title, desc }) => {
  return (
    <div className={side === "right" ? "content-right" : "content-left"}>
      <div className="content-details">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <img src={link} alt={title} />
    </div>
  );
};

export default ReuseThree;
