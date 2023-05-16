import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const router = useNavigate();

  function submit(e) {
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem('userDataR')) || [];

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        flag = true;
        break;
      }
    }

    if (flag) {
      setUserData({ ...userData, email: '' });
      alert('Email already exists');
    } else if (userData.password.length < 8) {
      setUserData({ ...userData, password: '' });
      alert('Password must be at least 8 characters');
    } else {
      dataFromLs.push(userData);
      localStorage.setItem('userDataR', JSON.stringify(dataFromLs));
      setUserData({ name: '', email: '', password: '' });
      router('/user');
      alert('Registration done');
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;

    setUserData({ ...userData, [name]: value });
  }

  return (
    <>
      <Navbar />
      <div id="form">
        <h1>Create Your Account</h1>
        <div id="B4">
          <label>Name:</label>
          <input
            id="B99"
            type="text"
            placeholder="Enter Your Name"
            onChange={featchData}
            name="name"
            required
            value={userData.name}
          />
          <br />
        </div>
        <div id="B4">
          <label>Email:</label>
          <input
            id="B99"
            type="email"
            placeholder="Enter Your Email"
            onChange={featchData}
            name="email"
            required
            value={userData.email}
          />
          <br />
        </div>
        <div id="B4">
          <label>User Password:</label>
          <input
            id="B9"
            type="password"
            placeholder="Enter Your Password"
            onChange={featchData}
            name="password"
            required
            value={userData.password}
          />
          <br />
        </div>
        <div id="B6">
          <button id="B7" onClick={submit}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
