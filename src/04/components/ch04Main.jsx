import React from "react";
import "../css/ch04main.css";
function Ch04Main(props) {
  return (
    <div className="ch04-main-container">
      <div className="ch04Box">
        <div className="box" id="css-js">
          <p>
            Css & Js <br />
            Tools
          </p>
        </div>
        <div className="box" id="graphic">
          <p>
            Graphic <br />
            Tools
          </p>
        </div>
        <div className="box" id="my">
          <p>
            My <br />
            Medias
          </p>
        </div>
        <div className="left-box1">
          <div className="left-box1-line"></div>
          <p>The tools and media I use</p>
          <p>I don't know what to write in one line</p>
        </div>
        <div className="right-box1">
          <div className="right-box1-circle"></div>
        </div>
        <div className="right-box2">
          <p>Zero</p>
          <div className="right-box2-square">Zr</div>
        </div>
        <div className="name">Kim Young Il</div>
      </div>
      <div className="css-js-bg">
        <p>CSS</p>
        <p>&JS</p>
      </div>
      <div className="graphic-bg">
        <p>Grap</p>
        <p>hic</p>
      </div>
      <div className="my-bg">
        <p>Media</p>
      </div>
    </div>
  );
}

export default Ch04Main;
