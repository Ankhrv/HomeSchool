import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Og from '../OSStr6/Og/Og';
import '../../App.css';



const OSStr6 = () => {

    const { pathname8 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname8])

    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Og/>
    <Footer/>
     </div>

        

        );
}

export default OSStr6;