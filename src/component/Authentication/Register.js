import { useState } from "react";
import { toastError, toastSuccess } from "../Common/Toast";
import { useHistory, Redirect, Link } from "react-router-dom";
import { isAuthenticated } from "../../utils/helper";
import { UserRegister } from "../../utils/api";

const Register = () => {
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
      const res = await UserRegister({ ...user });
      localStorage.setItem("tokenValue", res.data);
      history.push("/");
      return toastSuccess("Register successfully");
    } catch (error) {
      console.error("Error", error);
      toastError("Incorrect id password");
    }
  };

  if (isAuthenticated()) {
    return <Redirect to="/" />;
  }

  const { email, password } = user;

  return (
    <div className="register-wrapper">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)} className="register-form">
          <h1>Register</h1>
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
          <button className="btn-register">Register</button>

          <div>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
