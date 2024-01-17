import o from './Vo.module.css';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import React, { useState } from "react";
// import a from './Footer.module.css';
// import Signin from '../signin/signin';
// import Register from '../signin/registr';
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../Components/BesplZan/BezplZan.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import 'react-phone-number-input/style.css';
import s from '../../../Components/BesplZan/M.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import PDF1 from "../../../PDF/Privacy.pdf";
import PDF2 from "../../../PDF/PolzSogl.pdf";
import PDF3 from "../../../PDF/Privacydata.pdf";

const Video = () => {
  

   return (

<div className={o.A14}>
<Helmet>
       <title>Кабинет педагога</title>
       <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
     </Helmet>

       <div className={o.A4}>
    
       <div className={o.navi}>
       <Link to="/" style={linkStyle}>   <span className={o.navi2}>Главная</span></Link><span className={o.navi3}>&gt;</span><span className={o.navi4}>Обратная связь</span></div> 
       
       <div className={o.text}>Видеоуроки совсем скоро будут доступны к просмотру
</div>
       <div className={o.a4}>


      
       </div>
       </div>
       </div>


       );
}

export default Video;