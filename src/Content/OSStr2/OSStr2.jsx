import React from 'react';
// import logo from './y.png';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footerauth';
import Headerauth from '../../Components/Header/Headerauth';
import Lk from './Lk/Lk';
import '../../App.css';



const OSStr2 = () => {
    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Lk/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr2;