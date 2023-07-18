import React from "react";
import "../css/act4.css";
import list1 from "../img/act4-list1.jpg";
import list2 from "../img/act4-list2.jpg";
import list3 from "../img/act4-list3.png";
function Act4(props) {
  return (
    <div className="act4-container">
      <div className="act4-container">
        <div className="act4-titlebox">
          <h2>Brand me</h2>
          <p>
            대충 나를 브랜딩하다. <br /> 같은 문장을 적을 자리
          </p>
        </div>
        <div className="act4-profilebox">
          <div className="act4-profilebg"></div>
        </div>
        <div className="act4-listbox">
          <div className="act4-list" id="act4-list-1">
            <div>
              <img src={list1} alt="list1"></img>
            </div>
            <h3>리스트 제목</h3>
            <p>
              리스트 부가 <br></br>설명
            </p>
          </div>
          <div className="act4-list" id="act4-list-2">
            <div>
              <img src={list2} alt="list2"></img>
            </div>
            <h3>리스트 제목</h3>
            <p>
              리스트 부가 <br></br>설명
            </p>
          </div>
          <div className="act4-list" id="act4-list-3">
            <div>
              <img src={list3} alt="list3"></img>
            </div>
            <h3>리스트 제목</h3>
            <p>
              리스트 부가 <br></br>설명
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Act4;
