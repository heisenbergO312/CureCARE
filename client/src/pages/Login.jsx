/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  // const [error, setError] = useState("")

  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password,role);
  };

  return (
    <div className="login-parent">
      <div className="login-form">
        <h1>
          Hello! <p>Welcome</p> Back
        </h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          type="text"
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        <label className="role-label">
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </label>
        <div className="login-btn" onClick={handleSubmit}>
          Login
        </div>
        <div className="login-newhere">
          New Here ?{" "}
          <Link className="login-register-redirect" to={"/register"}>
            {" "}
            Register
          </Link>
        </div>
        <div style={{ color: "red" }} className="login-newhere">
          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
