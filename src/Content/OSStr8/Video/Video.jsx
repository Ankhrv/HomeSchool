import l from '../../OSStr5/Kabped/Kabped.module.css';
import video from './21.mp4';
import ReactPlayer from 'react-player';
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
// import s from '../../../Components/BesplZan/M.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import PDF1 from "../../../PDF/Privacy.pdf";
import PDF2 from "../../../PDF/PolzSogl.pdf";
import PDF3 from "../../../PDF/Privacydata.pdf";

const Video = () => {
      

       const linkStyle = {
              textDecoration: "none",
              color: "#666"
            };



   return (

<div className={l.A14}>
<Helmet>
       <title>Кабинет педагога</title>
       <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
     </Helmet>

       <div className={l.A4}>
    
       <div className={l.navi}>
       <Link to="/" style={linkStyle}>   <span className={l.navi2}>Главная</span></Link><span className={l.navi3}>&gt;</span><span className={l.navi4}>Видеоуроки</span></div> 
       

       <div className={l.a4o}>
       <div className={l.a4vid}><span className={l.zif}>Видео 3 Геометрия (новый выпуск)</span>
              
       <ReactPlayer
      className={l.a44vid}
      url={video}
      width="640"
      height="580"
      background={<img src='https://example.com/thumbnail.png' alt='Thumbnail' />}
      controls
     />


       
        
       </div>
       <div className={l.a4o}>
       <div className={l.a4vid}><span className={l.zif}>Видео 2 Геометрия (новый выпуск)</span>
              
              <ReactPlayer
             className={l.a44vid}
             url={video}
             width="640"
             height="580"
             controls
            />
       
       
              </div>
               
       <div className={l.a4o}>
       <div className={l.a4vid}><span className={l.zif}>Видео 1 Геометрия (новый выпуск)</span>
              
         
              
              <ReactPlayer
             className={l.a44vid}
             url={video}
             width="940"
             height="580"
             controls
            />
              </div>

              </div>
       </div>
       </div> </div> </div>
       

       );
}

export default Video;