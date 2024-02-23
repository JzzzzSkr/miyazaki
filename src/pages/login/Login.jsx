import "./Login.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="loginWrapper">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <div class="form-container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <div class="my-btn">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
