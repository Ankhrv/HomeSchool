import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Obrs from './Obrs/Obrs';
import '../../App.css';



const OSStr1 = () => {

    const { pathname2 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname2])

    return (
    <div className="App"> 
    <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Obrs/>
    <Footer/>
     </div>

        

        );
}

export default OSStr1;