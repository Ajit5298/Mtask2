import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [formData, setFormData] = useState({ oldPassword: "", newPassword: "" });
  const currentUser = JSON.parse(localStorage.getItem("currentUserR"));
  const router = useNavigate();

  function handleChange(e) {
    var value = e.target.value;
    var name = e.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem("userDataR"));

    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === currentUser && dataFromLs[i].password === formData.oldPassword) {
        dataFromLs[i].password = formData.newPassword;
        localStorage.setItem("userDataR", JSON.stringify(dataFromLs));
        setFormData({ oldPassword: "", newPassword: "" });
        alert("Password changed successfully");
        router("/");
        return;
      }
    }
    alert("Please check your old password");
    setFormData({ oldPassword: "", newPassword: "" });
  }

  return (
    <>
      <Navbar />
      <div id="form">
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div id="B4">
            <label> Current Password : </label>
            <input id="B9" type="password" placeholder="Enter current password" name="oldPassword" value={formData.oldPassword} onChange={handleChange} required />
          </div>
          <div id="B4">
            <label>New Password : </label>
            <input id="B90" type="password" placeholder="Enter new password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
          </div>
          <div id="B6">
            <button type="submit" id="B8">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
