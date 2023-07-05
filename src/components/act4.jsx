import React from "react";
import "../css/act4.css";
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
            <div>img 태그로 바꿀 자리</div>
            <h3>리스트 제목</h3>
            <p>
              리스트 부가 <br></br>설명
            </p>
          </div>
          <div className="act4-list" id="act4-list-2">
            <div>img 태그로 바꿀 자리</div>
            <h3>리스트 제목</h3>
            <p>
              리스트 부가 <br></br>설명
            </p>
          </div>
          <div className="act4-list" id="act4-list-3">
            <div>img 태그로 바꿀 자리</div>
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
