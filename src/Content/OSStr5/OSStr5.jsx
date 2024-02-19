import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Kabped from '../OSStr5/Kabped/Kabped';
import '../../App.css';



const OSStr5 = () => {

    const { pathname6 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname6])

    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Kabped/>
    <Footer/>
     </div>

        

        );
}

export default OSStr5;