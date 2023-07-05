import React from "react";
import "../css/act2.css";
import profileImg from "../img/tail.JPG";
import list1 from "../img/act2-list1.jpg";
import list2 from "../img/act2-list2.jpg";
import list3 from "../img/act2-list3.jpg";
function Act2(props) {
  return (
    <div className="act2-container">
      <div className="act2-titlebox">
        <h2>Brand me</h2>
        <p>
          대충 나를 브랜딩하다. <br /> 같은 문장을 적을 자리
        </p>
      </div>
      <div className="act2-profilebox">
        <div className="act2-profilebg"></div>
        <div className="act2-profile">
          <h1 className="act2-profile-title">INTRODUCTION</h1>
          <div className="act2-profile-line">
            <hr></hr>
          </div>
          <div className="act2-profile-img">
            <img src={profileImg} alt="img"></img>
          </div>
          <h3>Kim Young Il</h3>
          <h4>이 오브젝트를 눌러서 이동 시키게 만들거야</h4>
        </div>
      </div>
      <div className="act2-listbox">
        <div className="act2-list" id="act2-list-1">
          <div>
            <img src={list1} alt="list1"></img>
          </div>
          <h3>장점을 적을까</h3>
          <p>
            내 장점은 아직 30대가 아니고 <br></br>20대인데 장점 아닌가
          </p>
        </div>
        <div className="act2-list" id="act2-list-2">
          <div>
            <img src={list2} alt="list2"></img>
          </div>
          <h3>취미를 적을까</h3>
          <p>
            취미 그림 그리기 <br></br>말곤 뭐가 있지
          </p>
        </div>
        <div className="act2-list" id="act2-list-3">
          <div>
            <img src={list3} alt="list3"></img>
          </div>
          <h3>곧 출근이네</h3>
          <p>
            1년 후 난 이걸로 직업이 <br></br>될 수 있을까
          </p>
        </div>
      </div>
    </div>
  );
}

export default Act2;
