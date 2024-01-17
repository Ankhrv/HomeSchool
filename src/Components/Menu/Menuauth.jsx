import React, { useState } from "react";
import { SimpleModal } from "../../SimpleModal/SimpleModal";
import { SimpleModal7 } from "../../SimpleModal7/SimpleModal7";
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
import c from '../../Content/Lk/Lk.module.css';
import profile from '../../Content/Lk/profile.png';
import exit from '../../Content/Lk/exit.png';
import message from '../../Content/Lk/message.png';
import video from '../../Content/Lk/video.png';
import video2 from '../../Content/Lk/video2.png'
import Userfront from "@userfront/core";
import { Helmet } from 'react-helmet';
import b from './Menu.module.css';
import door2 from './door2.png';
import ball from './ball.png';
import menu2 from './menu2.png';
import { NavLink } from "react-router-dom";
// import Profile from "../profile/profile";
// import Register from '../signin/registr';
import BezplZan from '../BesplZan/BezplZan';


function Menuauth() {

  
  const setActive11 = ({isActive}) => isActive ? 'active-link11' : 'notactive11' ;
  const setActive10 = ({isActive}) => isActive ? 'active-link10' : 'notactive10' ;
  const setActive16 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive15 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive14 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive17 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive2 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
  const setActive3 = ({isActive}) => isActive ? 'active-link3' : 'notactive3' ;

  const [modalInfoIsOpen7, setModalInfoOpen7] = useState(false);
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  // const [modalInfoIsOpen5, setModalInfoOpen5] = useState(false);
  const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);
  // const [status, setStatus] = useState(false);
  return (
    <div className={b.smenua}>
         <div className={b.smenuaa}>
     <div className={b.a}>
      <Helmet>
        <title>Home-School</title>
        <meta name="description" content="Удобное обучение не выходя из дома" />
      
      </Helmet>
      <div className={b.aA}>
   
        <div className={b.modalbutton1} onClick={() => setModalInfoOpen7(true)}>
          <img src={door2} alt='door2'className={b.t1}></img>
          Профиль</div>

        <div className={b.modalbutton2}>
          <img src={ball} alt='ball'className={b.t2}></img>
          <div className={b.t222auth}
          onClick={() => setModalInfoOpen6(true)}>
            Оставить заявку</div></div>
        
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
         <NavLink to="/dashboard" className={setActive2}><div className={b.b18}>Главная</div></NavLink>  
         <NavLink to="/kabinet-pedagoga-auth" className={setActive15}><div className={b.b1}>Кабинет педагога</div></NavLink>  
         <NavLink to="/Ogauth" className={setActive16}><div className={b.b1}>ОГЭ</div></NavLink>
         <NavLink to="/vopros-otvet-ya" className={setActive14}> <div className={b.b1}>Спроси учителя</div></NavLink>  
         <NavLink to="/video" className={setActive17}><div className={b.b1}>Видеоуроки</div></NavLink>
         <div className={b.b1}>Видеолекции</div>
         <NavLink to="/obratnaja-sviaz-auth" className={setActive3}><div className={b.b1}>Обратная связь</div></NavLink>  
         <NavLink to="/vopros-otvet-auth" className={setActive10}><div className={b.b17}>Стоимость</div></NavLink>  
         </div>
        </SimpleModal>
        
        <div className={b.smenu}>
        <SimpleModal6                                                                                               
          isOpen={modalInfoIsOpen6}
          onClose={() => setModalInfoOpen6(false)}>
          <BezplZan/>
        </SimpleModal6> 
        </div>

        <div className={b.smenu}>
        <SimpleModal7
          isOpen={modalInfoIsOpen7}
          onClose={() => setModalInfoOpen7(false)}
        >
           <div className={c.b}>
         <div className={c.b18}>Профиль</div>
         <NavLink to="/lichnyi-kabinet-auth" className={setActive10}><div className={c.b100}><div className={c.b1}><img src={profile} alt='profile' className={c.profile}></img> Личный кабинет</div></div></NavLink>
         <NavLink to="/obratnaja-sviaz-auth" className={setActive11}><div className={c.b100}><div className={c.b1}><img src={message} alt='message' className={c.profile}></img> Обратная связь</div></div></NavLink>
         <NavLink to="/video" className={setActive17}> <div className={c.b100}><div className={c.b1}><img src={video2} alt='video2' className={c.profile}></img> Видеоуроки</div></div></NavLink>
         <div className={c.b100}><div className={c.b1}><img src={video} alt='video' className={c.profile}></img> Видеолекции</div></div>
         <div className={c.b100}><div onClick={Userfront.logout} className={c.b17}><img src={exit} alt='exit' className={c.profile}></img>Выйти</div></div>
         </div>
       
        </SimpleModal7> 
        </div>

        </div> </div>
  
       
  );
}

export default Menuauth;