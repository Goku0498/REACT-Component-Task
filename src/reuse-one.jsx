/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ReuseOne = ({ id, title, size }) => {
  return (
    <div key={id} className={size === "big" ? "sign-up-big" : "sign-up-small"}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="email-sign-up">
        <input type="email" placeholder="Email Address" />
        <button type="button" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ReuseOne;
