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

const Bezplzan = (props) => {



  const [value, setValue] = useState()

  const form = useRef();

  const [buttonText, setButtonText] = useState("Отправить");

  const sendEmail  = (e)  => {

    e.preventDefault();
    // setButtonText("загрузка...");
    setButtonText("отправка");
    emailjs.sendForm('service_hmoh4pe','template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
    .then((result) => {
      setButtonText("отправлено");
      console.log(result.text);
      e.target.reset();
  }, (error) => {
      console.log(error.text);
      setButtonText("Sending Failed");
  });

};


  return (
    <div className='GL'> <form ref={form} onSubmit={sendEmail} className='te'>
      <p className='ui'>Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.</p>
    
      {/* <input type="text"
        title="Разрешено использовать только пробелы и русские буквы, в сумме не более 20 символов"
        pattern="^[А-Яа-яЁё\s]+$" maxLength={22} placeholder="Ваше имя" name="name" required /> */}

<PhoneInput 
  labels={ru}
  value={value}
  onChange={setValue}
  height="100px"
  maxLength="16"
  size="30px"
 />
{/* <InputMask type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                                                title="Используйте формат: +7 (777) 777-77-77"
                                                value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
                                                maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required /> */}

      {/* <input pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" type="email" name="email" maxLength={25} placeholder="Электронная почта" required />
      <textarea maxLength={500} placeholder="Ваш вопрос или сообщение" name="message"></textarea> */}


      <button  className='knop4' type="submit" value="Отправить">{buttonText}
      </button>
      <p className='Tt'>
        Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.
        Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link></p>
    </form>
    </div>

  );
}




export default Bezplzan;

