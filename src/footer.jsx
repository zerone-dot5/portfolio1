import React from "react";
import "../src/footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <ul className="footer-header">
        <div className="footer-header-name">Kim Young Il</div>
        <ul className="footer-header-media">
          <li>Github</li>
          <li>Instagram</li>
          <li>Blog</li>
        </ul>
      </ul>
      <ul className="footer-info">
        <li>Phone : 010 - 8006 - 5105</li>
        <li>Email : zerone.dot5@gmail.com</li>
        <li>
          Adress : 19, Seolchon-ro 4-gil, Jeju-si, Jeju-do, Republic of Korea
        </li>
      </ul>
      <hr></hr>
      <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved</p>
    </div>
  );
}

export default Footer;
