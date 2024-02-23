import "./Moment.scss";
import { useNavigate } from "react-router-dom";

const Moment = () => {
  const navage = useNavigate();

  return (
    <div className="momentWrapper">
      <h3 className="subtitle">Moment</h3>
      <div className="momentBox">
        <ul>
          <li
            onClick={() => {
              navage("./spirited");
            }}
          >
            <a href="#spirited">
              <img src="./assets/1.jpg" alt="Spirited Away scene" />
            </a>
          </li>
          <li
            onClick={() => {
              navage("./kiki");
            }}
          >
            <a href="#kiki">
              <img src="./assets/2.jpg" alt="kiki scene" />
            </a>
          </li>
          <li
            onClick={() => {
              navage("./ponyo");
            }}
          >
            <a href="#ponyo">
              <img src="./assets/3.jpg" alt="ponyo scene" />
            </a>
          </li>
          <li
            onClick={() => {
              navage("./totoro");
            }}
          >
            <a href="#totoro">
              <img src="./assets/4.jpg" alt="totoro scene" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Moment;
