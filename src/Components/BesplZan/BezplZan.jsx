import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';
import './BezplZan.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import InputMask from "react-input-mask";
import ru from 'react-phone-number-input/locale/ru';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import s from '../BesplZan/M.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import PDF1 from "../../PDF/Privacy.pdf";
import PDF2 from "../../PDF/PolzSogl.pdf";
import PDF3 from "../../PDF/Privacydata.pdf";


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
      setButtonText("Ошибка отправки");
  });

};

  return (
    <div className={s.GL}>

      <div className={s.ui}>В течение 3-х минут мы перезвоним Вам, подберём педагога и запишем на <span className={s.spanN1}>бесплатное пробное занятие</span></div>
     
       <form ref={form} onSubmit= {sendEmail} >

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
 <div>

  <button  className={s.knop} type="submit" value="Перезвоните мне">{buttonText}</button></div>
     </div>
     <div className={s.capcha}>
      <ReCAPTCHA  sitekey={process.env.REACT_APP_SITE_KEY} /> 
      </div> 
    </form>
    <div className={s.Tt}>
      <p className={s.R}>Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className={s.spanN}>политикой конфиденциальности</a> и <a href={PDF2} target="_blank" rel="noreferrer" className={s.spanN}>пользовательским соглашением </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className={s.spanN}>обработку своих персональных данных</a></p></div>
    </div>
  
    

  );
}


export default Bezplzan;

