import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const router = useNavigate();

  function handleUser() {
    router('/User');
  }

  function handleTask() {
    // Check if the user is logged in
    const isLoggedIn = !!localStorage.getItem('currentUserR');

    if (isLoggedIn) {
      router('/task');
    } else {
      // Redirect to login page or display a message to the user
      router('/user'); // Replace 'login' with your actual login page route
    }
  }

  function handleHome() {
    router('/home');
  }

  function handleRegistration() {
    router('/registration');
  }

  return (
    <>
      <div id="B1">
        <ul class="A1">
          <li id="B2"><b>Logo</b></li>
          <li id="B3" onClick={handleHome}>Home</li>
          <li id="B3" onClick={handleTask}>Task</li>
          <li id="B3" onClick={handleUser}>User</li>
        </ul>

        <div id="icon">
          <svg
            onClick={handleRegistration}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm23.09-75.79A32,32,0,0,0,136,80H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V144h22.39l19,28.44a8,8,0,0,0,13.32-8.88ZM112,96h24a16,16,0,0,1,0,32H112Z"></path>
          </svg>
          <span id="icon2">For Registration</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
