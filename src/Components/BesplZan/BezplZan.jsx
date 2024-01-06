import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';
import './BezplZan.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import InputMask from "react-input-mask";
import ru from 'react-phone-number-input/locale/ru'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import s from '../BesplZan/M.module.css';

const Bezplzan = (props) => {
  const navigate = useNavigate()

  const [value, setValue] = useState()

  const form = useRef();

  const [buttonText, setButtonText] = useState("Перезвоните мне");

  const sendEmail  = (e)  => {

    e.preventDefault();
    // setButtonText("загрузка...");
    setButtonText("Отправка");
    emailjs.sendForm('service_hmoh4pe','template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
    .then((result) => {
      setButtonText("Отправлено");
      console.log(result.text);
      e.target.reset();
      navigate('/');
  }, (error) => {
      console.log(error.text);
      setButtonText("Sending Failed");
  });

};


  return (
    <div className={s.GL}>


      
      <div className={s.ui}>В течение 3-х минут мы перезвоним Вам, подберём педагога и запишем на <span className={s.spanN1}>бесплатное пробное занятие</span></div>
     


       <form ref={form} onSubmit={sendEmail}>

       <div className={s.obsh}>
    
<div className={s.name100}>Мобильный телефон</div>
<div className={s.i}>
<PhoneInput 
  labels={ru}
  value={value}
  onChange={setValue}
  maxLength="16"
  minLength="15"
  name="phone"
 />
 </div>
<div><button  className={s.knop} type="submit" value="Перезвоните мне">{buttonText}
      </button></div>
     </div>
    
    </form>
    <div className={s.Tt}>
      <p className={s.R}>Заполняя эту форму, вы подтверждаете, что ознакомились с <span className={s.spanN}>политикой конфиденциальности</span> и <span className={s.spanN}>пользовательским соглашением </span>, а также даёте согласие на <span className={s.spanN}>обработку своих персональных данных</span></p></div>
    </div>
  
    

  );
}




export default Bezplzan;

