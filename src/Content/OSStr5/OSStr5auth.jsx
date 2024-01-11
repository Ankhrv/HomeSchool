import React from 'react';
// import logo from './y.png';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Voprotv from './Kabped/Kabped';
import '../../App.css';



const OSStr5auth = () => {
    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
   <Voprotv/> 
    <Footerauth/>
     </div>

        

        );
}

export default OSStr5auth;