import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';
import './nachat.css';
import s from './nachat.module.css';
import PDF1 from "../../PDF/DOC009.pdf";
import PDF2 from "../../PDF/DOC009.pdf";
import PDF3 from "../../PDF/DOC009.pdf";
import { useRef } from 'react';
import ru from 'react-phone-number-input/locale/ru';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from "react-google-recaptcha";


const Nachat = (props) => {


  const navigate = useNavigate()

  const [value, setValue] = useState()

  const form = useRef();

  const [buttonText, setButtonText] = useState("Попробовать бесплатно");

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

<div className='zagO'>Начать учиться</div>
     
       <form ref={form} onSubmit= {sendEmail} >

       <div className={s.obsh}>

     <div className={s.name100N}>Введите ваше имя</div>        
     <input className='inp1O'type="text" title="Разрешено использовать только пробелы и русские буквы"
     pattern="^[А-Яа-яЁё\s]+$" maxLength={10} name="us_name" required 
     />
    
<div className={s.name100}>Мобильный телефон</div>
<div className={s.i}>

<PhoneInput 
  required 
  labels={ru}
  value={value}
  onChange={setValue}
  maxLength="16"
  minLength="15"
  name="phone"
 />

<div className={s.name100E}>Введите вашу почту</div>
    <input className='inpO'pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" type="email" name="email" maxLength={25} required 
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


export default Nachat;

