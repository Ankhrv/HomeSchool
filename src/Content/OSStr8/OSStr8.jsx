import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Video from './Video/Video';
import '../../App.css';



const OSStr8 = () => {

    const { pathname12 } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname12])

    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Video/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr8;