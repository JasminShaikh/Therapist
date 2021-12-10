import { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { toastError, toastSuccess } from "../Common/Toast";
import { isAuthenticated } from "../../utils/helper";
import { UserLogin } from "../../utils/api";

const Login = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await UserLogin({ ...user });
      localStorage.setItem("tokenValue", res.data);

      history.push("/");
      return toastSuccess("Login successfully");
    } catch (error) {
      console.error("Error", error);
      toastError("Incorrect id password");
    }
  };

  const { email, password } = user;

  if (isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-wrapper">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
            required
          />
          <button className="btn-login">Login</button>

          <div>
            <Link to="/register">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
