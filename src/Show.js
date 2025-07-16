import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Show = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const getData = () => {
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://dummyjson.com/auth/me", header)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        alert("please enter details");
        console.log(error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    alert("Logout Successful");
    navigate("/");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <p className="px-3">Profile Show</p>
        <button className="px-6 py-1 text-white bg-blue-600" onClick={getData}>
          Get Details
        </button>
        <button
          onClick={handleLogout}
          className="px-6 py-1 text-white bg-red-600"
        >
          Logout
        </button>
      </div>

      {userData && (
        <div className="h-40 p-10">
          <p>
            Name: {userData.firstName} {userData.lastName}
          </p>
          <p>Email: {userData.email}</p>
          <p>Token: {localStorage.getItem("token")}</p>
          <p>Gender:{userData.gender}</p>
          <img src={userData.image} alt="User profile" />
        </div>
      )}
    </>
  );
};

export default Show;
