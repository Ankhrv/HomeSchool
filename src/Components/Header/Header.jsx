import a from './Header2.module.css';
import logo from '../Header/phone-call.png';
import logo2 from '../Header/telegram.png';
import door from '../Header/door.png';
import React, { useState } from "react";
import { SimpleModal5 } from "../../SimpleModal5/SimpleModal5";
import Signin from '../signin/signin';
import { Helmet } from 'react-helmet';
import Register from '../signin/registr';
import { Link, NavLink } from "react-router-dom";



const Header = () => {

  const linkStyle = {
    textDecoration: "none",
    color:"#222"
  };

   const [modalInfoIsOpen5, setModalInfoOpen5] = useState(false);
   const [status, setStatus] = useState(false);
  

    return (
<div className={a.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={a.A}>
        <div className={a.a}>
 <div className={a.c4}>
    <a className={a.log}></a>
    <Link to="/" style={linkStyle}><a className={a.log2}>Home-School</a></Link>
</div>

<div className={a.c1}>
<Link to="/kabinet-pedagoga" style={linkStyle}><a className={a.cС}>Кабинет педагога</a></Link>

<Link to="/Og" style={linkStyle}><a className={a.c}>ОГЭ</a></Link>

  <Link to="/vopros-otvet-y" style={linkStyle}><a className={a.c}>Спроси учителя</a></Link>

  <Link to="/vopros-otvet" style={linkStyle}><a className={a.c}>Стоимость</a></Link>

  <a onClick={() => setModalInfoOpen5(true)}className={a.Сc}>Видеоуроки</a>
</div>



<div className={a.c3}>

<div className={a.i}>
         <div className={a.i1}>

   <div className={a.phone}><img src={logo} alt='logo' className={a.p}></img> <a href="tel:=+79869954077" className={a.iw}>+7 (986) 995 40 77</a></div>
    <div className={a.phone1}><img src={logo2} alt='logo2'className={a.t}></img> <a href="tg://resolve?domail=hschool_pedagog" className={a.i123}>@hschool_pedagog</a></div></div>

         </div>

{/* <a className={a.c5} onClick={() => setModalInfoOpen(true)}> */}
<a className={a.c5} onClick={() => setModalInfoOpen5(true)}>
   <img src={door} alt='door'className={a.t2}></img>Войти</a>

</div>
</div>

<div className={a.aA}>
 <div className={a.c4}>
    <a className={a.log}></a>
    <Link to="/" style={linkStyle}><a className={a.log2}>Home-School</a></Link>
</div>

<div className={a.c1}>
 
<Link to="/vopros-otvet" style={linkStyle}><a className={a.c}>Стоимость</a></Link>

</div>

<div className={a.c3}>

<div className={a.i}>
         <div className={a.i1}>

         <div className={a.phone}><img src={logo} alt='logo' className={a.p}></img> <a href="tel:=+79869954077" className={a.iw}>+7 (986) 995 40 77</a></div>
    <div className={a.phone1}><img src={logo2} alt='logo2'className={a.t}></img> <a href="tg://resolve?domail=hschool_pedagog" className={a.i123}>@hschool_pedagog</a></div></div>

         </div>

{/* <a className={a.c5} onClick={() => setModalInfoOpen(true)}> */}
<a className={a.c5} 
onClick={() => setModalInfoOpen5(true)}> 
<img src={door} alt='door'className={a.t2}></img> Войти</a>
</div>
</div>

{
  status ? <>

<div className={a.smenu}>
        <SimpleModal5
          isOpen={modalInfoIsOpen5}
          onClose={() => setModalInfoOpen5(false)}>
          <Register/>
          <button className={a.reg2} onClick={() => setStatus(false)}>Войти</button>
        </SimpleModal5> 
        </div>
        
          </> : <>

        <div className={a.smenu}>
        <SimpleModal5
          isOpen={modalInfoIsOpen5}
          onClose={() => setModalInfoOpen5(false)}
        >
          <Signin/>
             <button className={a.reg} onClick={() => setStatus(true)}>Зарегистрироваться</button>
        </SimpleModal5> 
        </div>
</>
}

</div>
</div>

);
}

export default Header;