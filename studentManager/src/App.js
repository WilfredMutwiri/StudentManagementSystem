import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from './login';
import Signup from './Signup';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Login/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;

