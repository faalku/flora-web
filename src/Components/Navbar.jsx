import React from "react"
import '../App.css';
import { BsCart4} from 'react-icons/bs';
import { BrowserRouter, Route, Link } from "react-router-dom";
function Navbar(){
    return(

<div className='new-nav2 '>

      <a className='new-c' >Sales</a>

      <a className='new-c'>New </a>

      <a className='new-c' >New </a>
     
     <a className='new-c'>Channels</a>
     
     <Link to="/Cart">
     <button className='new-c'> <BsCart4/></button>
     </Link>

    </div>
    )
}
 
export default Navbar;