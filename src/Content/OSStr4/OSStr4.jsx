import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Vo from '../OSStr7/Vo/Vo';
import '../../App.css';



const OSStr4 = () => {

    const { pathname4 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname4])

    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Vo/>
    <Footer/>
     </div>

        

        );
}

export default OSStr4;