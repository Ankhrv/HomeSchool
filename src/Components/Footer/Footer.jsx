import React, { useState } from "react";
import a from './Footer.module.css';
import Signin from '../signin/signin';
import { Helmet } from 'react-helmet';
import Register from '../signin/registr';
import logo5 from './0100.png';
import 'primeicons/primeicons.css';
import { SimpleModal5 } from "../../SimpleModal5/SimpleModal5";
// import logo2 from '../Header/telegram.png';
// import door from '../Header/door.png';


const Footer = () => {

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
<a className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Образовательную деятельность ведёт дипломированный педагог</a>
<a className={ `${a.f} ${a.fff} ${a.fe2}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div>
<div className={a.footer1}>
<a className={`${a.f} ${a.skr1}`}>Разделы сайта</a>
<a className={ `${a.f} ${a.fe}` }>Кабинет педагога</a>
<a className={ `${a.f} ${a.fe}` }>Подготовка к ОГЭ</a>
<a className={ `${a.f} ${a.fe}` }>Программы 5-9 классов</a>
<a className={ `${a.f} ${a.fe}` }>Видеоуроки</a>
<a className={ `${a.f} ${a.fe}` }>Спроси учителя</a>
<a className={ `${a.f} ${a.fe}` }>Стоимость</a>
<a className={ `${a.f} ${a.fe}` }>Личный кабинет</a>
<a className={ `${a.f} ${a.fe}` }>Полезное родителям</a>
</div>
<div className={a.footer2}>
<a className={`${a.f} ${a.skr}`}>Техподдержка</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-question-circle" style={{ fontSize: '14px', padding: '8px' }}></i> Обратная связь</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-telegram" style={{ fontSize: '14px', padding: '8px' }}></i> Телеграм</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-whatsapp" style={{ fontSize: '14px', padding: '8px' }}></i> WhatsApp</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-envelope" style={{ fontSize: '14px', padding: '8px' }}></i> school@infourok.ru</a>
<a className={ `${a.fs}` }><i className="pi pi-clock" style={{ fontSize: '14px', padding: '8px' }}></i> 10:00 – 22:00 мск</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (499) 229-88-88</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (495) 032-99-99</a>
<a className={ `${a.fs} ${a.fe}` }><i className="pi pi-phone" style={{ fontSize: '14px', padding: '8px' }}></i> +7 (800) 775-50-70</a>
</div>

<div className={a.footer3}>

<a className={ `${a.f} ${a.fe}` } onClick={() => setModalInfoOpen5(true)}>Регистрация</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Инструкция пользования сайтом</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Системные требования</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Пользовательское соглашение</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Политика конфиденциальности</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Политика о персональных данных</a>
<a className={ `${a.f} ${a.fff} ${a.fe}` }>Правила пользования сайтом</a>
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
<div className={a.pic1}><a> <img src={logo5} alt='logo' className={a.l5}></img></a><div className={a.textt}><div className={a.text2 }>Образовательную деятельность ведёт</div><div className={a.text2}> дипломированный педагог</div></div></div>
<a className={ `${a.f} ${a.fff} ${a.fe4} ${a.fr}` }> <img src={logo5} alt='logo' className={a.l5}></img>Эксперт ОГЭ</a>
{/* <a className={ `${a.fp} ${a.fe2} ${a.fff}` }>Министерство Образования и Науки РФЛицензия</a> */}
</div></div>

{
  status ? <>

<div className={a.smenu}>
        <SimpleModal5
          isOpen={modalInfoIsOpen5}
          onClose={() => setModalInfoOpen5(false)}
        >
          <Signin/>
             <button className={a.reg} onClick={() => setStatus(false)}>Зарегистрироваться</button>
        </SimpleModal5> 
        </div>

          </> : <>

          <div className={a.smenu}>
        <SimpleModal5
          isOpen={modalInfoIsOpen5}
          onClose={() => setModalInfoOpen5(false)}>
          <Register/>
          <button className={a.reg2} onClick={() => setStatus(true)}>Войти</button>
        </SimpleModal5> 
        </div>
          
</>
}

</div>
</div>

);
}

export default Footer;