
import React , { useState } from 'react';
import '../App.css';
import axios from 'axios';
import fghj from "../fghj.png";
import {MdOutlineMailOutline }  from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri'
import { Routes, Route, Link } from "react-router-dom";
function App() {
    
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user,setUser] = useState (undefined);

    async function Req() {
        try {
         await axios({
            method: "post",
            url: "https://dev-api.pass-tickets.com/v1/en/auth/login",
            data: {
              email: email,
              password: password,
              userType: "user",
            },
          }).then((user) => setUser(user.data.payload.user.name))
        } catch (error) {
          console.log("error");
          console.log(error.response.data)
          setError(error.response.data.message);
        }
    }
  return (
      <div className='app'>
     <div className="form">
            <div className='form-wrapper'>
               <div><img src={fghj} className='pic' /></div>
                <div className='inputs'>

                <div className='email'>
                  <MdOutlineMailOutline className='icon'/>
                  <input className="inputfrom" type="email"  placeholder="Email"value={email} onChange={(eemail) => setemail(eemail.target.value)}/>
                  </div>
                <div className='email'> 
                <RiLockPasswordFill className='icon'/>
                <input className="inputfrom" type="password" placeholder="Password" value={password} onChange={(ppassword) => setPassword(ppassword.target.value)}/>
                </div>
                
                </div>
                <div className="error">{error}</div>
          {user !== undefined && (<div className='errorMas'> Welcome {user} </div>)}
                <div className='logbut'>
                <button type="submit" onClick={Req} className="btn-14">Log in</button>
                </div>

                <div className='last'>
                <Link to="/CreateAccount">
                     <a> Create Account </a> 
                </Link>
           
                
                </div> 
          </div>
          </div>
        </div>
  );
  }
    
export default App;
