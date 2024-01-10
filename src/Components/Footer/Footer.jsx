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
// import PDF4 from "../../PDF/Privacy.pdf";
import PDF5 from "../../PDF/Privacy.pdf";
import Diplom from "../../PDF/Diplom.pdf";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
  };

    const [modalInfoIsOpen2, setModalInfoOpen2] = useState(false);
    const [status, setStatus] = useState(false);

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
    <a className={a.log2}>Home-School</a>
</div>


<div className={a.socials}> 
<div className={a.vk}></div> 
<div className={a.tg}></div>
<div className={a.wu}></div>
<div className={a.wb}></div>

</div>
<a href={Diplom} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Образовательную деятельность ведёт дипломированный педагог</a>
<a className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div>
<div className={a.footer1}>
<a className={`${a.f} ${a.skr1}`}>Разделы сайта</a>
<Link to="/vopros-otvet" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Кабинет педагога</a></Link>
<a className={ `${a.f} ${a.fe}` }>Подготовка к ОГЭ</a>
<a className={ `${a.f} ${a.fe}` }>Программы 5-9 классов</a>
<a onClick={() => setModalInfoOpen2(true)} className={ `${a.f} ${a.fe}` }>Видеоуроки</a>
<Link to="/vopros-otvet" style={linkStyle}><a className={ `${a.f} ${a.fe}` }>Спроси учителя</a></Link>
<a className={ `${a.f} ${a.fe}` }>Стоимость</a>
<a onClick={() => setModalInfoOpen2(true)}className={ `${a.f} ${a.fe}` }>Личный кабинет</a>
<a className={ `${a.f} ${a.fe}` }>Полезное родителям</a>
</div>
<div className={a.footer2}>
<a className={`${a.f} ${a.skr}`}>Техподдержка</a>
<Link to="/obratnaja-sviaz" style={linkStyle}><a className={ `${a.fs} ${a.fe}` }><i className="pi pi-question-circle" style={{ fontSize: '14px', padding: '8px' }}></i> Обратная связь</a></Link>
<a href="tg://resolve?domail=hschool_pedagog" className={ `${a.fs} ${a.fe}` }><i className="pi pi-telegram" style={{ fontSize: '14px', padding: '8px' }}></i> Телеграм</a>
<a href="https://wa.me/79995390501"className={ `${a.fs} ${a.fe}` }><i className="pi pi-whatsapp" style={{ fontSize: '14px', padding: '8px' }}></i> WhatsApp</a>
<a href="https://mailto:petya.fomichev@internet.ru/" className={ `${a.fs} ${a.fe}` }><i className="pi pi-envelope" style={{ fontSize: '14px', padding: '8px' }}></i> school@infourok.ru</a>
<a className={ `${a.fs}` }><i className="pi pi-clock" style={{ fontSize: '14px', padding: '8px' }}></i> 10:00 – 22:00 мск</a>
<a href="tel:=+79995390501" className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (999) 539-05-01</a>
<a href="tel:=+79995390501" className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (999) 539-05-01</a>
<a href="tel:=+79995390501" className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (999) 539-05-01</a>
</div>

<div className={a.footer3}>

<a className={ `${a.f} ${a.fe}` } onClick={() => setModalInfoOpen2(true)}>Регистрация</a>
<a href={PDF1} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Инструкция пользования сайтом</a>
<Link to="/system-requirements" style={linkStyle}><a className={ `${a.f} ${a.fff} ${a.fe}` }>Системные требования</a></Link>
<a href={PDF2} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Пользовательское соглашение</a>
<a href={PDF1} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Политика конфиденциальности</a>
<a href={PDF3} target="_blank" rel="noreferrer" className={ `${a.f} ${a.fff} ${a.fe}` }>Политика о персональных данных</a>
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
<a href={Diplom} target="_blank" rel="noreferrer" className={a.pic1}><a> <img src={logo5} alt='logo' className={a.l5}></img></a><div className={a.textt}><div className={a.text2 }>Образовательную деятельность ведёт</div><div className={a.text2}> дипломированный педагог</div></div></a>
<a className={ `${a.f} ${a.fff} ${a.fe4} ${a.fr}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div></div>

{
  status ? <>

<div className={a.smenu}>
        <SimpleModal2
          isOpen={modalInfoIsOpen2}
          onClose={() => setModalInfoOpen2(false)}
        >
          <Signin/>
             <button className={a.reg} onClick={() => setStatus(false)}>Зарегистрироваться</button>
        </SimpleModal2> 
        </div>

          </> : <>

          <div className={a.smenu}>
        <SimpleModal2
          isOpen={modalInfoIsOpen2}
          onClose={() => setModalInfoOpen2(false)}>
          <Register/>
          <button className={a.reg2} onClick={() => setStatus(true)}>Войти</button>
        </SimpleModal2> 
        </div>
          
</>
}

</div>
</div>

);
}

export default Footer;