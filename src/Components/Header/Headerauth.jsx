import a from './Header2.module.css';
import c from '../../Content/Lk/Lk.module.css';
import logo from '../Header/phone-call.png';
import logo2 from '../Header/telegram.png';
import door from '../Header/door.png';
import profile from '../../Content/Lk/profile.png';
import exit from '../../Content/Lk/exit.png';
import message from '../../Content/Lk/message.png';
import video from '../../Content/Lk/video.png';
import video2 from '../../Content/Lk/video2.png';
import React, { useState } from "react";
import { SimpleModal8 } from "../../SimpleModal8/SimpleModal8";
import { Helmet } from 'react-helmet';
import './A.css';





const Headerauth = () => {

   const [modalInfoIsOpen8, setModalInfoOpen8] = useState(false);

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
    <a className={a.log2}>Home-School</a>
</div>

<div className={a.c1}>
  <a className={a.cС}>Кабинет педагога</a>

  <a className={a.c}>ОГЭ</a>

  <a className={a.c}>Спроси учителя</a>

  <a className={a.c}>Стоимость</a>

  <a className={a.Сc}>Видеоуроки</a>
</div>

<div className={a.c3}>

<div className={a.i}>
         <div className={a.i1}>

   <div className={a.phone}><img src={logo} alt='logo' className={a.p}></img> <div className={a.iw}>+7 (800) 775 50 70</div></div>
    <div className={a.phone1}><img src={logo2} alt='logo2'className={a.t}></img> <div className={a.i123}>@hschool_pedagog</div></div></div>

         </div>

        <a className={a.c5} onClick={() => setModalInfoOpen8(true)}>
       <img src={door} alt='door'className={a.t2}></img>Ученик</a>
      
       <SimpleModal8
         isOpen={modalInfoIsOpen8}
         onClose={() => setModalInfoOpen8(false)}
       >
           <div className={c.b}>
         <div className={c.b18}>Профиль</div>
         <div className={c.b100}><div className={c.b1}><img src={profile} alt='profile' className={c.profile}></img> Личный кабинет</div></div>
         <div className={c.b100}><div className={c.b1}><img src={message} alt='message' className={c.profile}></img> Обратная связь</div></div>
         <div className={c.b100}><div className={c.b1}><img src={video2} alt='video2' className={c.profile}></img> Видеоуроки</div></div>
         <div className={c.b100}><div className={c.b1}><img src={video} alt='video' className={c.profile}></img> Видеолекции</div></div>
         <div className={c.b100}><div className={c.b17}><img src={exit} alt='exit' className={c.profile}></img>Выйти</div></div>
         </div>
         </SimpleModal8>


</div>
</div>

<div className={a.aA}>
 <div className={a.c4}>
    <a className={a.log}></a>
    <a className={a.log2}>Home-School</a>
</div>

<div className={a.c1}>
 

  <a className={a.c}>Стоимость</a>


</div>



<div className={a.c3}>

<div className={a.i}>
         <div className={a.i1}>

         <div className={a.phone}><img src={logo} alt='logo' className={a.p}></img> <div className={a.iw}>+7 (800) 775 50 70</div></div>
    <div className={a.phone1}><img src={logo2} alt='logo2'className={a.t}></img> <div className={a.i123}>@hschool_pedagog</div></div></div>

         </div>


<a className={a.c5} onClick={() => setModalInfoOpen8(true)}>

<img src={door} alt='door'className={a.t2}></img> Ученик</a>
</div>
</div>


       

</div>
</div>

);
}

export default Headerauth;