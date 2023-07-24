import React, { useState } from "react";
import "../css/ch04main.css";
function Ch04Main(props) {
  const [box1Zindex, setBox1Zindex] = useState(1);
  const [box1Scale, setBox1Scale] = useState(1.0);
  const [box1Bg, setBox1Bg] = useState("white");
  const [box1Color, setBox1Color] = useState("black");
  const [box1Reset, setBox1Reset] = useState("50%");
  const [box1Border, setBox1Border] = useState(` rgb(233, 233, 233)`);
  const [box1bottomBorder, setBox1BottomBorder] = useState("red");

  const [box2Zindex, setBox2Zindex] = useState(2);
  const [box2Scale, setBox2Scale] = useState(1.0);
  const [box2Bg, setBox2Bg] = useState("white");
  const [box2Color, setBox2Color] = useState("black");
  const [box2Reset, setBox2Reset] = useState("50%");
  const [box2Border, setBox2Border] = useState(` rgb(233, 233, 233)`);
  const [box2bottomBorder, setBox2BottomBorder] = useState("red");

  const [box3Zindex, setBox3Zindex] = useState(1);
  const [box3Scale, setBox3Scale] = useState(1.0);
  const [box3Bg, setBox3Bg] = useState("white");
  const [box3Color, setBox3Color] = useState("black");
  const [box3Reset, setBox3Reset] = useState("50%");
  const [box3Border, setBox3Border] = useState(` rgb(233, 233, 233)`);
  const [box3bottomBorder, setBox3BottomBorder] = useState("red");
  const box1HoverHandle = () => {
    setBox1Scale(1.3);
    setBox1Zindex(5);
    setBox1Bg("black");
    setBox1Color("white");
    setBox1Reset("");
    setBox1Border("black");
    setBox1BottomBorder("black");
  };
  const box1OutHandle = () => {
    setBox1Scale(1);
    setBox1Zindex(1);
    setBox1Bg("white");
    setBox1Color("black");
    setBox1Reset("50%");
    setBox1Border("rgb(233, 233, 233)");
    setBox1BottomBorder("red");
  };

  const box2HoverHandle = () => {
    setBox2Scale(1.3);
    setBox2Zindex(5);
    setBox2Bg("black");
    setBox2Color("white");
    setBox2Reset("");
    setBox2Border("black");
    setBox2BottomBorder("black");
  };
  const box2OutHandle = () => {
    setBox2Scale(1);
    setBox2Zindex(1);
    setBox2Bg("white");
    setBox2Color("black");
    setBox2Reset("50%");
    setBox2Border("rgb(233, 233, 233)");
    setBox2BottomBorder("red");
  };

  const box3HoverHandle = () => {
    setBox3Scale(1.3);
    setBox3Zindex(5);
    setBox3Bg("black");
    setBox3Color("white");
    setBox3Reset("");
    setBox3Border("black");
    setBox3BottomBorder("black");
  };
  const box3OutHandle = () => {
    setBox3Scale(1);
    setBox3Zindex(1);
    setBox3Bg("white");
    setBox3Color("black");
    setBox3Reset("50%");
    setBox3Border("rgb(233, 233, 233)");
    setBox3BottomBorder("red");
  };
  return (
    <div className="ch04-main-container">
      <div className="ch04Box">
        <div
          className="box"
          onMouseOver={box1HoverHandle}
          onMouseLeave={box1OutHandle}
        >
          <div
            className="css-js-tools"
            id="css-js-tool1"
            style={{
              top: box1Reset,
              left: box1Reset,
            }}
          >
            Icon1
          </div>
          <div
            className="css-js-tools"
            id="css-js-tool2"
            style={{ top: box1Reset, left: box1Reset }}
          >
            Icon2
          </div>
          <div
            className="css-js-tools"
            id="css-js-tool3"
            style={{ top: box1Reset, left: box1Reset }}
          >
            Text Icon
          </div>
          <div
            className="css-js-tools"
            id="css-js-tool4"
            style={{ top: box1Reset, left: box1Reset }}
          >
            Font
          </div>
          <div
            id="css-js"
            style={{
              transform: `scale(${box1Scale})`,
              zIndex: box1Zindex,
              backgroundColor: box1Bg,
              color: box1Color,
              border: `1.5px solid ${box1Border}`,
              borderBottom: `2px solid ${box1bottomBorder}`,
            }}
          >
            <p>
              Css & Js <br />
              Tools
            </p>
          </div>
        </div>
        <div
          className="box"
          onMouseOver={box2HoverHandle}
          onMouseLeave={box2OutHandle}
          style={{ zIndex: box2Zindex }}
        >
          <div
            id="graphic"
            style={{
              transform: `scale(${box2Scale})`,
              zIndex: box2Zindex,
              backgroundColor: box2Bg,
              color: box2Color,
              border: `1.5px solid ${box2Border}`,
              borderBottom: `2px solid ${box2bottomBorder}`,
            }}
          >
            <p>
              Graphic <br />
              Tools
            </p>
          </div>
          <div
            className="graphic-tools"
            id="graphic-tool1"
            style={{ top: box2Reset, left: box2Reset }}
          >
            Icon1
          </div>
          <div
            className="graphic-tools"
            id="graphic-tool2"
            style={{ top: box2Reset, left: box2Reset }}
          >
            Icon1
          </div>
          <div
            className="graphic-tools"
            id="graphic-tool3"
            style={{ top: box2Reset, left: box2Reset }}
          >
            Icon1
          </div>
          <div
            className="graphic-tools"
            id="graphic-tool4"
            style={{ top: box2Reset, left: box2Reset }}
          >
            Icon1
          </div>
        </div>
        <div
          className="box"
          onMouseOver={box3HoverHandle}
          onMouseLeave={box3OutHandle}
          style={{ zIndex: 3 }}
        >
          <div
            id="my"
            style={{
              transform: `scale(${box3Scale})`,
              zIndex: box3Zindex,
              backgroundColor: box3Bg,
              color: box3Color,
              border: `1.5px solid ${box3Border}`,
              borderBottom: `2px solid ${box3bottomBorder}`,
            }}
          >
            <p>
              My <br />
              Medias
            </p>
          </div>
          <div
            className="medias"
            id="media1"
            style={{ top: box3Reset, left: box3Reset }}
          >
            Icon1
          </div>
          <div
            className="medias"
            id="media2"
            style={{ top: box3Reset, left: box3Reset }}
          >
            Icon1
          </div>
          <div
            className="medias"
            id="media3"
            style={{ top: box3Reset, left: box3Reset }}
          >
            Icon1
          </div>
          <div
            className="medias"
            id="media4"
            style={{ top: box3Reset, left: box3Reset }}
          >
            Icon1
          </div>
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
