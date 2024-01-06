import React from 'react';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Obrs from './Obrs/Obrs';
import '../../App.css';



const OSStr1 = () => {
    return (
        <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Obrs/>
    <Footer/>
     </div>

        

        );
}

export default OSStr1;