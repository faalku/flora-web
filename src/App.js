import React from 'react';
import './App.css';
import ItemCard from './Components/ItemCard';
import Layout from './Layout'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import CreateAccount from './Pages/CreateAccount';
function Main() {
  return (
    <div className='app'>
   <Layout>
  <div>
  <div className='comp'>
  <ItemCard/>
   <ItemCard/>
   <ItemCard/>
   <ItemCard/>
  </div>
  <div className='comp' >
  <ItemCard/>
   <ItemCard/>
   <ItemCard/>
   <ItemCard/>
  </div>
  
  </div>
   </Layout>
   </div>
  );
}


function App() {
  return (
    <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/Login" element={<Login/>} />
       <Route path="/Cart" element={<Cart/>} />
       <Route path="/CreateAccount" element={<CreateAccount/>} />
      </Routes>
  );
}

export default App;
