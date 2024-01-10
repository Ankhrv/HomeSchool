import React from 'react';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Obrsauth from './Obrs/Obrsauth';
import '../../App.css';



const OSStr1auth = () => {
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