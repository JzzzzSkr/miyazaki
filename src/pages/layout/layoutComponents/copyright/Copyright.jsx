import "./Copyright.scss";

const Copyright = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src="./assets/logo.png" alt="" />
      </div>
      <div className="middle">
        <span>Copyright © 2023 Huahui Liang All Rights Reserved.</span>
      </div>
      <div className="right">
        <div className="up">
          <span>Phone: 0421896406</span>
        </div>
        <div className="down">
          <span>Email: huahuiie@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
