import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Obrsauth from './Obrs/Obrsauth';
import '../../App.css';



const OSStr1auth = () => {

    const { pathname3 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname3])

    return (
        <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Obrsauth/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr1auth;