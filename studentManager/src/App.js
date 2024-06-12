import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from './login';
import Signup from './Signup';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/footer';
import { NavBarComp } from './components/NavBar';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBarComp/>
    <Routes>
    <Route exact path='/' element={<Login/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/Signup' element={<Signup/>}></Route>
     <Route path='/admin' element={<AdminDashboard/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;

