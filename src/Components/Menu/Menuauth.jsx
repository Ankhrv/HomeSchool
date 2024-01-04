import React, { useState } from "react";
import { SimpleModal } from "../../SimpleModal/SimpleModal";
import { SimpleModal7 } from "../../SimpleModal7/SimpleModal7";
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
// import { SimpleModal5 } from "../../SimpleModal5/SimpleModal5";
import { Helmet } from 'react-helmet';
import b from './Menu.module.css';
import door2 from './door2.png';
import ball from './ball.png';
import menu2 from './menu2.png';
// import Profile from "../profile/profile";
// import Register from '../signin/registr';
import BezplZan from '../BesplZan/BezplZan';


function Menu() {
  const [modalInfoIsOpen7, setModalInfoOpen7] = useState(false);
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
         <div className={b.b18}>Главная</div>
         <div className={b.b1}>Кабинет педагога</div>
         <div className={b.b1}>ОГЭ</div>
         <div className={b.b1}>Спроси учителя</div>
         <div className={b.b1}>Видеоуроки</div>
         <div className={b.b1}>Видеолекции</div>
         <div className={b.b1}>Обратная связь</div>
         <div className={b.b17}>Стоимость</div>
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
          <div className={b.b}>
         <div className={b.b18}>Главная</div>
         <div className={b.b1}>Кабинет педагога</div>
         <div className={b.b1}>ОГЭ</div>
         <div className={b.b1}>Спроси учителя</div>
         <div className={b.b1}>Видеоуроки</div>
         <div className={b.b1}>Видеолекции</div>
         <div className={b.b1}>Обратная связь</div>
         <div className={b.b17}>Стоимость</div>
         </div>
       
        </SimpleModal7> 
        </div>

        </div> </div>
  
       
  );
}

export default Menu;