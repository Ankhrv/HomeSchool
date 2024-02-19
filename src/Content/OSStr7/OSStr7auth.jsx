import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Vo from './Vo/Vo';
import '../../App.css';



const OSStr7auth = () => {

    const { pathname11 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname11])

    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Vo/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr7auth;