import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/Auth-Context";
import axios from "axios";

const Login = () => {
  const { foundUser, authToken, userHandler, tokenHandler } = useAuth();
  

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email:email,
        password:password,
      });
      if (response.data.foundUser) {
        if(rememberMe)
        localStorage.setItem("user", JSON.stringify(response.data));
        userHandler(response.data.foundUser)
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);

  const testLoginHandler = () => {
    setEmail("test@gmail.com");
    setPassword("test");
    setRememberMe(true);
  }
  return (
    <div className="login__container">
      <div className="form__container">
        <header className="heading">Login</header>
        <form onSubmit={loginHandler}>
          <div className="email">
            <label htmlFor="email__input">Email Address</label>
            <input
              type="email"
              id="email__input"
              className="email__input txt-2xl "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password__input">Password</label>
            <input
              type="password"
              id="password__input"
              className="password__input txt-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="footer">
            <div className="rememberMe__container">
              <input
                type="checkbox"
                id="rememberMe"
                className="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            {/* <Link to="/forgotpassword" className="forgotPassword">
              Forgot Password
            </Link> */}
          </div>
          <input type="submit" className="login__button" value="Login" />
          <input
            type="submit"
            className="login__button"
            value="Login with Test Credentials"
            onClick={testLoginHandler}
          />
          <div className="noaccount">
            Don't have an account?
            <Link to="/signup" className="txt-4xl txt-yellow-400">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
