/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ReuseTwo = ({ type, link, title, desc }) => {
  return (
    <div className={type === "icon" ? "card-icon" : "card-img"}>
      {type === "icon" && <i className={link}></i>}
      {type === "image" && (
        <img src={link} alt={title} height="200" width="200" />
      )}
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default ReuseTwo;
