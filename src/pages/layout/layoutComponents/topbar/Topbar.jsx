import "./Topbar.scss";
import { useNavigate } from "react-router-dom";
import Asidebar from "./topbarComponents/asidebar/Asidebar";

const Topbar = () => {
  const navagate = useNavigate();

  const toHome = () => {
    navagate("/");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="logo" onClick={toHome}>
          <img src="./assets/logo.png" alt="" />
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#/about">About Miyazaki Hayao</a>
            </li>
            <li className="drop">
              <span href="" className="rec">
                Recommended
              </span>
              <ul className="dropdown">
                <li>
                  <a href="#/totoro">My Neighbor Totoro</a>
                </li>
                <li>
                  <a href="#/wind">The Wind Rises</a>
                </li>
                <li>
                  <a href="#/spirited">Spirited Away</a>
                </li>
                <li>
                  <a href="#/kiki">Kiki's Delivery Service</a>
                </li>
                <li>
                  <a href="#/ponyo">Ponyo</a>
                </li>
                <li>
                  <a href="#/howl">Howl's Moving Castle</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/characters">Character Analyze</a>
            </li>
            <li>
              <a href="#/contact">Contact Us</a>
            </li>
            <li>
              <a href="#/login">Login</a>
            </li>
          </ul>
        </nav>

        <div className="sideBar">
          <Asidebar></Asidebar>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
