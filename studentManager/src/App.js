import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from './login';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;

