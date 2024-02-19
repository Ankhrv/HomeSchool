import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Sysreq from './Sysreq/Sysreq';
import '../../App.css';



const OSStr3 = () => {

    
    const { pathname1 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname1])

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

export default OSStr3;