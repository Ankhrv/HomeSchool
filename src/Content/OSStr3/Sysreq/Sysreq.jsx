import React from 'react';
import o from '../../OSStr5/Kabped/Kabped.module.css';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';




const Sysreq = () => {

  const linkStyle = {
    textDecoration: "none",
    color: "#666"
  };
  
    return (
     
<div className={o.A14}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={o.A4}>
       
        <div className={o.navi}>
        <Link to="/" style={linkStyle}>   <span className={o.navi2}>Главная</span></Link><span className={o.navi3}>&gt;</span><span className={o.navi4}>Системные требования</span></div> 
       
        <div className={o.a4}> </div>  
        </div>
        </div>
        

        );
}

export default Sysreq;