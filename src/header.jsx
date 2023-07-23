import React, { useEffect, useState } from "react";
import "../src/header.css";
import { Link, useLocation } from "react-router-dom";

const headerList = ["01", "/02", "/03", "/04", "/05"];
function Header(props) {
  const [list, setList] = useState("01");
  const [listColor, setListColor] = useState("white");
  const [scroll, setScroll] = useState(0);

  const location = useLocation();

  let currentPath = "";

  const updateScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  useEffect(() => {
    if (location.pathname === "/02") {
      if (scroll > 200) {
        setListColor("white");
      } else {
        setListColor("black");
      }
    }
  }, [scroll]);

  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();

    if (location.pathname === "/02" || location.pathname === "/04") {
      setListColor("black");
    } else {
      setListColor("white");
    }

    location.pathname === "/" ? setList("01") : setList(location.pathname);

    window.scrollTo(0, 0);
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
