import React from 'react';
import './App.css';
import Head from './Components/head';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function Layout({children}){
    return(
        <div>
   <Head/>
   <Navbar/>
   {children}
<Footer/>
</div>

    );
}

export  default Layout;