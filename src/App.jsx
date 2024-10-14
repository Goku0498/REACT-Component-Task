/* eslint-disable no-unused-vars */
import React from "react";
import ReuseOne from "./reuse-one";
import { v4 } from "uuid";
import ReuseTwo from "./reuse-two";
import data from "./data-one.json";
import dataTwo from "./data-two.json";
import dataThree from "./data-three.json";
import ReuseThree from "./reuse-three";

function App() {
  return (
    <>
      <div className="nav-bar">
        <p>Start Bootstrap</p>
        <button type="button" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <ReuseOne
        id={v4()}
        title="Generate more leads with a professional landing page!"
        size="big"
      />

      <div className="card-container">
        {data.map((item) => (
          <ReuseTwo
            key={item.id}
            link={item.link}
            title={item.title}
            desc={item.description}
            type={item.type}
          />
        ))}
      </div>

      <div className="content">
        {dataThree.map((content) => (
          <ReuseThree
            key={content.id}
            link={content.link}
            title={content.title}
            desc={content.description}
            side={content.ImageSide}
          />
        ))}
      </div>

      <div className="review">
        <h1>What people are saying...</h1>
        <div className="card-container">
          {dataTwo.map((item) => (
            <ReuseTwo
              key={item.id}
              link={item.link}
              title={item.title}
              desc={item.description}
              type={item.type}
            />
          ))}
        </div>
      </div>

      <ReuseOne
        id={v4()}
        title="Ready to get started? Sign up now!"
        size="small"
      />

      <div className="bottom-bar">
        <div className="bottom-content">
          <div className="bottom-link">
            <a href="#">About</a>
            <snap>⋅</snap>
            <a href="#">Contact</a>
            <snap>⋅</snap>
            <a href="#">Terms of Use</a>
            <snap>⋅</snap>
            <a href="#">Privacy Policy</a>
          </div>
          <p>© Your Website 2023. All Rights Reserved.</p>
        </div>
        <div className="bottom-icon">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
