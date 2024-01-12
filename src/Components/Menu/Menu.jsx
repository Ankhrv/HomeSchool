import React, { useState } from "react";
import { SimpleModal } from "../../SimpleModal/SimpleModal";
import { SimpleModal2 } from "../../SimpleModal2/SimpleModal2";
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
// import { SimpleModal5 } from "../../SimpleModal5/SimpleModal5";
import { Helmet } from 'react-helmet';
import b from './Menu.module.css';
import door2 from './door2.png';
import ball from './ball.png';
import menu2 from './menu2.png';
import Signin from "../signin/signin";
import Register from '../signin/registr';
import BezplZan from '../BesplZan/BezplZan';
import { NavLink } from "react-router-dom";
import '../Menu/active.css';


function Menu() {
  const setActive16 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive15 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive14 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive10 = ({isActive}) => isActive ? 'active-link3' : 'notactive3' ;
  const setActive2 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive3 = ({isActive}) => isActive ? 'active-link3' : 'notactive3' ;
  const [modalInfoIsOpen2, setModalInfoOpen2] = useState(false);
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  // const [modalInfoIsOpen5, setModalInfoOpen5] = useState(false);
  const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);
  const [status, setStatus] = useState(false);
  
  return (
    <div className={b.smenua}>
         <div className={b.smenuaa}>
     <div className={b.a}>
      <Helmet>
        <title>Home-School</title>
        <meta name="description" content="Удобное обучение не выходя из дома" />
      
      </Helmet>
      <div className={b.aA}>
   
        <div className={b.modalbutton1} onClick={() => setModalInfoOpen2(true)}>
          <img src={door2} alt='door2'className={b.t1}></img>
          Войти</div>

        <div className={b.modalbutton2}>
          <img src={ball} alt='ball'className={b.t2}></img>
          <div className={b.t222}
          onClick={() => setModalInfoOpen6(true)}>
            Бесплатное занятие</div></div>
        
        <div className={b.modalbutton}
          onClick={() => setModalInfoOpen(true)}>
            <img src={menu2} alt='menu2'className={b.t3}></img>
         <div className={b.t31}> Mеню </div></div>
        </div> 
         </div>
         </div>
         <div className={b.smenu}>
        <SimpleModal
          isOpen={modalInfoIsOpen}
          onClose={() => setModalInfoOpen(false)}
        >
         <div className={b.b}>
         <NavLink to="/" className={setActive2}><div className={b.b18}>Главная</div></NavLink>  
         <NavLink to="/kabinet-pedagoga" className={setActive15}><div className={b.b1}>Кабинет педагога</div></NavLink>  
         <NavLink to="/Og" className={setActive16}><div className={b.b1}>ОГЭ</div></NavLink>
         <NavLink to="/vopros-otvet-y" className={setActive14}> <div className={b.b1}>Спроси учителя</div></NavLink>  
         <div onClick={() => setModalInfoOpen2(true)} className={b.b1}>Видеоуроки</div>
         <div onClick={() => setModalInfoOpen2(true)} className={b.b1}>Видеолекции</div>
         <NavLink to="/obratnaja-sviaz" className={setActive3}><div className={b.b1}>Обратная связь</div></NavLink>  
         <NavLink to="/vopros-otvet" className={setActive10}><div className={b.b17}>Стоимость</div></NavLink>  
         </div>
        </SimpleModal>
        
        <div className={b.smenu}>
        <SimpleModal6
          isOpen={modalInfoIsOpen6}
          onClose={() => setModalInfoOpen6(false)}>
          <BezplZan/>
        </SimpleModal6> 
        </div>

        {
  status ? <>

<div className={b.smenu}>
        <SimpleModal2
          isOpen={modalInfoIsOpen2}
          onClose={() => setModalInfoOpen2(false)}>
          <Register/>
          <button className={b.reg2} onClick={() => setStatus(false)}>Войти</button>
        </SimpleModal2> 
        </div>
        
          </> : <>

        <div className={b.smenu}>
        <SimpleModal2
          isOpen={modalInfoIsOpen2}
          onClose={() => setModalInfoOpen2(false)}
        >
          <Signin/>
             <button className={b.reg} onClick={() => setStatus(true)}>Зарегистрироваться</button>
        </SimpleModal2> 
        </div>
</>
}
        </div> </div>
  
       
  );
}

export default Menu;