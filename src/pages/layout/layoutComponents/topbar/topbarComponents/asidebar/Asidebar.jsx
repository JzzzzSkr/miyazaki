import React, { useRef, useState, useEffect } from "react";
import "./Asidebar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Asidebar = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef();
  const recommendRef = useRef();
  const [isRecommendListVisible, setIsRecommendListVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideSidebar =
        sidebarRef.current && !sidebarRef.current.contains(event.target);
      const clickedOutsideRecommendList =
        recommendRef.current && !recommendRef.current.contains(event.target);

      // if click is happened in ouside of recommendList, and recommendList is opening. Then close the recommendlist
      if (clickedOutsideRecommendList && isRecommendListVisible) {
        setIsRecommendListVisible(false);
      }
      // else if user click outside of the sidebar ,and recommendlist already closed, then we close the sidebar
      else if (clickedOutsideSidebar && !isRecommendListVisible) {
        setIsSidebarVisible(false);
        setIsRecommendListVisible(false);
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === "Escape") {
        setIsSidebarVisible(false);
        setIsRecommendListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isRecommendListVisible]);

  const navigateTo = (path) => {
    navigate(path);
    setIsSidebarVisible(false);
    setIsRecommendListVisible(false);
  };

  const toggleRecommendList = () => {
    setIsRecommendListVisible(!isRecommendListVisible);
  };

  const recomClass = classNames({
    recommendList: true,
    recommendActive: isRecommendListVisible,
  });

  return (
    <div className="sideBar">
      <aside
        ref={sidebarRef}
        className={`sidebar ${isSidebarVisible ? "active" : ""}`}
      >
        <ul>
          <li onClick={() => navigateTo("/")}>Home</li>
          <li onClick={() => navigateTo("/about")}>About</li>
          <li onClick={toggleRecommendList}>
            Recommend
            <div ref={recommendRef} className={recomClass}>
              <ul>
                <li onClick={() => navigateTo("#/totoro")}>
                  <a href="#totoro">My Neighbor Totoro</a>
                </li>
                <li onClick={() => navigateTo("#/wind")}>
                  <a href="#wind">The Wind Rises</a>
                </li>
                <li onClick={() => navigateTo("#/spirited")}>
                  <a href="#spirited">Spirited Away</a>
                </li>
                <li onClick={() => navigateTo("#/kiki")}>
                  <a href="#kiki">Kiki's Delivery Service</a>
                </li>
                <li onClick={() => navigateTo("#/ponyo")}>
                  <a href="#ponyo">Ponyo</a>
                </li>
                <li onClick={() => navigateTo("#/howl")}>
                  <a href="#howl">Howl's Moving Castle</a>
                </li>
              </ul>
            </div>
          </li>
          <li onClick={() => navigateTo("/characters")}>Character Analyze</li>
          <li onClick={() => navigateTo("/contact")}>Contact Us</li>
          <li onClick={() => navigateTo("/login")}>Login</li>
        </ul>
      </aside>
      <span
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        style={{ cursor: "pointer" }}
      >
        <MenuIcon style={{ fontSize: "40px" }} />
      </span>
    </div>
  );
};

export default Asidebar;
