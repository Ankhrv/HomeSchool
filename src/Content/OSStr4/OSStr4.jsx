import React from 'react';
// import logo from './y.png';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Vo from '../OSStr7/Og/Vo';
import '../../App.css';



const OSStr4 = () => {
    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Vo/>
    <Footer/>
     </div>

        

        );
}

export default OSStr4;