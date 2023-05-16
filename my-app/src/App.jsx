// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import User from './Components/User';
import Home from './Components/Home';
import Register from './Components/Register';
import ChangePassword from './Components/Changepassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Navbar/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/task' element={<Task/>}/>
        <Route exact path='/registration' element={<Register/>}/>
        <Route exact path='/change' element={<ChangePassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
