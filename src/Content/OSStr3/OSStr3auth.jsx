import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Sysreqauth from './Sysreq/Sysreqauth';
import '../../App.css';



const OSStr3auth = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Sysreqauth/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr3auth;