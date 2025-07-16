import React, { useState } from "react";
import "./index.css";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const Data = {
      username: email,
      password: password,
    };
    //access  token and calling api...
    axios
      .post("https://dummyjson.com/auth/login", Data)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        alert("Login Successfull");
        // console.log("login Succussfully", res.data);
        navigate("/profile");
      })
      .catch((error) => {
        alert("Use-> emilys / emilyspass");
        // console.log("login Failed", error);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="space-y-4 p-10 rounded-md bg-white shadow-md w-96">
          <h2 className="text-center text-2xl font-bold mb-4">Login Form</h2>
          <div>
            <p>Email</p>
            <input
              onChange={(e) => SetEmail(e.target.value)}
              type="text"
              className="border rounded-md shadow-md w-full p-2"
              placeholder="email"
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              className="border rounded-md shadow-md w-full p-2"
              placeholder="password"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
