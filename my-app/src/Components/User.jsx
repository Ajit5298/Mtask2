import React from 'react'
import Navbar from './Navbar'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function User() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();
  

  function handleChangePassword() {
    router('/change');
  }

  function checkLog(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("userDataR"));

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&
        dataFromLs[i].password === formData.password
      ) {
        flag = true;
      }
    }
    if (flag) {
      localStorage.setItem("currentUserR", JSON.stringify(formData.email));
      setFormData({ email: "", password: "" });
      router("/");
      alert("Log in sucessful");
    } else {
      setFormData({ email: "", password: "" });
      alert("Please check email or password");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    // console.log(name,value) ;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogout() {
    localStorage.removeItem("currentUserR");
    router("/");
    alert("Logged out successfully");
  }

  return (
    <>
      <Navbar />
      <div id="form">
        <h1>Login Your Account</h1>
        <div id="B4">
          <label> UserName : </label>
          <input id="B99" type="text" placeholder='Enter Your UserName' onChange={(e) => { featchData(e); }} name="email" required value={formData.email}></input><br />
        </div>
        <div id="B4">
          <label>User Password : </label>
          <input id="B9" type="password" placeholder='Enter Your Password' onChange={(e) => { featchData(e); }} name="password" required value={formData.password}></input><br />
        </div>
        <div id="B6">
        <button id="B7" onClick={handleChangePassword}>Change Password</button>
          <button id="B8" onClick={(e) => {checkLog(e);}}>Login</button>
          <button id="BB8" onClick={handleLogout}>Logout</button>
        </div>
      </div>

    </>
  )
}

export default User;
