import React, { useState } from "react";
import a from './Footer.module.css';
import Signin from '../signin/signin';
import { Helmet } from 'react-helmet';
import Register from '../signin/registr';
import logo5 from './0100.png';
import 'primeicons/primeicons.css';
import { SimpleModal2 } from "../../SimpleModal2/SimpleModal2";
import { Link } from "react-router-dom";
import PDF1 from "../../PDF/Privacy.pdf";
import PDF2 from "../../PDF/PolzSogl.pdf";
import PDF3 from "../../PDF/Privacydata.pdf";
import PDF4 from "../../PDF/Privacy.pdf";
import PDF5 from "../../PDF/Privacy.pdf";
import Diplom from "../../PDF/Diplom.pdf";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
  };

    return (
<div className={a.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={a.A}>
        <div className={a.a}>

<div className={a.footer}>
<div className={a.c4}>
 <a className={a.log}></a>
 <Link to="/dashboard" style={linkStyle}><a className={a.log2}>Home-School</a></Link>
</div>

<div className={a.socials}> 
<a href="https://vk.com/infourok_school" className={a.vk}></a> 
<a href="tg://resolve?domail=hschool_pedagog" className={a.tg}></a>
<div className={a.wu}></div>
<div className={a.wb}></div>

</div>
<a href={Diplom} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Образовательную деятельность ведёт дипломированный педагог</a>
<a className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div>
<div className={a.footer1}>
<a className={`${a.f} ${a.skr1}`}>Разделы сайта</a>
<Link to="/kabinet-pedagoga-auth" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Кабинет педагога</a></Link>
<Link to="/Ogauth" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Подготовка к ОГЭ</a></Link>
<a className={ `${a.f} ${a.fe}` }>Видеоуроки</a>
<Link to="/vopros-otvet-ya" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Программы 5-9 классов</a></Link>
<a className={ `${a.f} ${a.fe}` }>Видеоуроки</a>
<Link to="/vopros-otvet-ya" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Спроси учителя</a></Link>
<Link to="/vopros-otvet-ya" style={linkStyle}></Link><a className={ `${a.f} ${a.fe}` }>Стоимость</a>
<Link to="/lichnyi-kabinet-auth" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Личный кабинет</a></Link>
<a className={ `${a.f} ${a.fe}` }>Полезное родителям</a>
</div>
<div className={a.footer2}>
<a className={`${a.f} ${a.skr}`}>Техподдержка</a>
<Link to="/obratnaja-sviaz-auth" style={linkStyle}><a className={ `${a.fs} ${a.fe}` }><i className="pi pi-question-circle" style={{ fontSize: '14px', padding: '8px' }}></i> Обратная связь</a></Link>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-telegram" style={{ fontSize: '14px', padding: '8px' }}></i> Телеграм</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-whatsapp" style={{ fontSize: '14px', padding: '8px' }}></i> WhatsApp</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-envelope" style={{ fontSize: '14px', padding: '8px' }}></i> school@infourok.ru</a>
<a className={ `${a.fs}` }><i className="pi pi-clock" style={{ fontSize: '14px', padding: '8px' }}></i> 10:00 – 22:00 мск</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (986) 995 40 77</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (986) 995 40 77</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (986) 995 40 77</a>
</div>

<div className={a.footer3}>

<a className={ `${a.f} ${a.fee}` } >Регистрация</a>
<a href={PDF1} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Инструкция пользования сайтом</a>
<Link to="/system-requirements-auth" style={linkStyle}><a className={ `${a.f} ${a.fff} ${a.fe}` }>Системные требования</a></Link>
<a href={PDF2} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Пользовательское соглашение</a>
<a href={PDF3} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Политика конфиденциальности</a>
<a href={PDF4} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Политика о персональных данных</a>
<a href={PDF5} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Правила пользования сайтом</a>
<a className={ `${a.f} ${a.fff}` }>Онлайн-школа «Home-School» © 2024</a>

</div>
</div>

<div className={a.footerr}>

<div className={a.socials}> 
<div className={a.vk}></div> 
<div className={a.tg}></div>
<div className={a.wu}></div>
<div className={a.wb}></div>

</div>
<div className={a.pic}>
<a href={Diplom} target="_blank" rel="noreferrer"  className={a.pic1}><a> <img src={logo5} alt='logo' className={a.l5}></img></a><div className={a.textt}><div className={a.text2 }>Образовательную деятельность ведёт</div><div className={a.text2}> дипломированный педагог</div></div></a>
<a className={ `${a.f} ${a.fff} ${a.fe4} ${a.fr}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div></div>

</div>
</div>

);
}

export default Footer;