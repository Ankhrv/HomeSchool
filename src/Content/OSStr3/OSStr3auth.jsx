import React from 'react';
// import logo from './y.png';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Sysreq from './Sysreq/Sysreq';
import '../../App.css';



const OSStr3auth = () => {
    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Sysreq/>
    <Footer/>
     </div>

        

        );
}

export default OSStr3auth;