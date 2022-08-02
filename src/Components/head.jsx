import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { CgProfile } from 'react-icons/cg';
import logo from './logo.png'
import { BrowserRouter, Route, Link } from "react-router-dom";
function Header(){
    return(
        <div>
<div className='parent-div'>
  <div className='first-flex'><img className="logo"src={logo}/></div>
  <div className='second-flex'>
  |
  <Link to="/Login">
  <button className='login'><CgProfile/> Log in </button> 
  </Link>
  
  |
  <select className='lang'>
    <option value="option 1"> Arabic </option>
    <option value="option 2"> English </option>
    </select>
  </div>
        </div>
        </div>
    );
}
export default Header;
