import React, { useState, useEffect } from "react";
import "../css/item1.css";
import bgGreen from "../img/japan1.png";
import bgBlack from "../img/japan2.png";

function Item1(props) {
  const [shadow, setShadow] = useState("none");
  const [bgColor, setBgColor] = useState(bgBlack);
  const [height, setHeignt] = useState("340px");

  const ClickHandle = () => {
    height === "340px" ? setHeignt("450px") : setHeignt("340px");
  };

  const HoverHandle = () => {
    setShadow("1px 1px gray");
  };
  const HoverOutHandle = () => {
    setShadow("none");
  };
  const BlackHandle = () => {
    setBgColor(bgBlack);
  };
  const GreenHandle = () => {
    setBgColor(bgGreen);
  };

  return (
    <div className="item1-container">
      <div className="titleBox" style={{ height: height }}>
        <h2
          style={{ textShadow: shadow }}
          onClick={ClickHandle}
          onMouseOver={HoverHandle}
          onMouseLeave={HoverOutHandle}
        >
          にっぽん
        </h2>
        <hr></hr>
        <div className="btnBox">
          <button
            className="color-btn"
            id="color-btn-1"
            onClick={BlackHandle}
          ></button>
          <button
            className="color-btn"
            id="color-btn-2"
            onClick={GreenHandle}
          ></button>
        </div>
      </div>
      <div className="textBgBox" style={{ backgroundImage: `url(${bgColor})` }}>
        <div className="textBg" id="textBg-1"></div>
        <div className="bg"></div>
        <div className="textBg" id="textBg-2"></div>
        <div className="bg"></div>
        <div className="textBg" id="textBg-3"></div>
        <div className="bg"></div>
        <div className="textBg" id="textBg-4"></div>
        <div className="bg"></div>
        <div className="textBg" id="textBg-5"></div>
      </div>
    </div>
  );
}

export default Item1;
