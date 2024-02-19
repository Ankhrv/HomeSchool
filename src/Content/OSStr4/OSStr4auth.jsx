import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Obrs from '../OSStr1/Obrs/Obrs';
import '../../App.css';



const OSStr4auth = () => {

    const { pathname5 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname5])

    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Obrs/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr4auth;