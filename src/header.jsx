import React, { useEffect, useState } from "react";
import "../src/header.css";
import { Link, useLocation } from "react-router-dom";

const headerList = ["01", "/02", "/03", "/04", "/05"];
function Header(props) {
  const [list, setList] = useState("01");
  const [listColor, setListColor] = useState("white");

  const location = useLocation();

  let currentPath = "";

  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();

    location.pathname === "/" ? setList("01") : setList(location.pathname);
    location.pathname === "/02" ? setListColor("black") : setListColor("white");
  }, [location]);
  return (
    <div className="header-container">
      <ul>
        {headerList.map((item, idx) => {
          return (
            <Link to={item === "01" ? "/" : item} key={idx}>
              <li
                key={idx}
                style={list === item ? { color: listColor } : { color: "gray" }}
              >
                {item === "01" ? item : item.substring(1)}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
