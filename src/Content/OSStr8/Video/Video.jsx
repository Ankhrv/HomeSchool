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
import VideoList from './VideoList';
import SearchInput from './SearchInput';


const Video = () => {
       const [searchTerm, setSearchTerm] = useState("");
       const linkStyle = {
        textDecoration: "none",
        color: "#666"
      };

       const videos = [
         { id: 1, title: 'Video 1', url: {video} },
         // Add more videos as needed
         { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/VIDEO_ID2' },
         { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 4, title: 'Video 4', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 5, title: 'Video 5', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 6, title: 'Video 6', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 7, title: 'Video 7', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 8, title: 'Video 8', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 9, title: 'Video 9', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
         { id: 10, title: 'Video 10', url: 'https://www.youtube.com/embed/phFlgKBmq0I' }, // Add more videos as needed
       ];
     
       const filteredVideos = videos
     .filter((video) => video.title.toLowerCase()
     .includes(searchTerm.toLowerCase()));
     
     
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
       <h1 style={{
           display:"flex",
          justifyContent:"center"}}
          >Поиск по названию</h1>
      <SearchInput 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} />
 </div>
 <div
     style={{
        display:"flex",
        justifyContent:"center",
        width:"100%",
        marginBottom:"40px",
     
        // gridTemplateColumns:"50% 50%",
        }}
    > 
      <VideoList videos={filteredVideos} />

      
     
   
      </div>   </div>
       </div>
       
       

       );
}

export default Video;