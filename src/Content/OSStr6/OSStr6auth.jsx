import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Og from '../OSStr6/Og/Og';
import '../../App.css';




const OSStr6auth = () => {

    const { pathname9 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname9])

    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Og/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr6auth;