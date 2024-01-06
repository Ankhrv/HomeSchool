import React from 'react';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Obrs from './Obrs/Obrs';
import '../../App.css';



const OSStr1auth = () => {
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

export default OSStr1auth;