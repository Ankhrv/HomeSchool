import React from 'react';
import o from '../../OSStr5/Kabped/Kabped.module.css';
import j from './sysreq.module.css';
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
       
        <div className={j.a4}> 
        <div className={j.a}>Минимальные системные требования</div>
        <div className={j.b1}><div className={j.b}>Windows и MacOS</div><div className={j.b2}></div></div>
        <div className={j.grid}>
        <div className={j.grid1}> 
        <li className={j.li}>Cкорость интернета</li>
        <li className={j.li}><span className={j.spangrid3}>4.0+ Mbps</span> <span className={j.spanli}> загрузка</span><span className={j.spanli3}></span></li>
        <li className={j.li}><span className={j.spangrid3}>4.0+ Mbps</span> <span className={j.spanli1}> выгрузка</span><span className={j.spanli2}></span></li>
        <li className={j.li1}>Проверить скорость</li>
        </div>
        <div className={j.grid2}>
        <li className={j.li}>Браузеры</li>
        <li className={j.li}><span className={j.spangoogle}></span><span className={j.spangrid3}>Google Chrome</span><span className={j.spanli3}></span> <span className={j.spangrid3}></span><span className={j.spangrid3}>Mozilla FireFox</span></li>
        <li className={j.li}><span className={j.spangoogle}></span><span className={j.spangrid3}>Microsoft Edge</span><span className={j.spanli3}></span> <span className={j.spangrid3}>Safari</span></li>
        <li className={j.librauser}>Браузеры необходимо обновить до последней версии</li>
        </div>
        <div className={j.grid3}>
        <li className={j.li}>Микрофон</li>
        <li className={j.li}><span className={j.spangrid3}>Для занятий у вас обязательно должен быть микрофон и звуковоспроизводящее устройство (наушники или колонки)</span></li>
        </div>
        </div>

        <div className={j.grid}>
        <div className={j.grid1}> 
        <li className={j.li}>Компьютер</li>
        <li className={j.li}><span className={j.spangrid3}>6+ Gb оперативной памяти</span> </li>
        <li className={j.li}><span className={j.spangrid3}>2.0+ Ghz тактовая частота процессора</span></li>
        
        </div>
        <div className={j.grid2}>
        <li className={j.lib}>!</li>
        <li className={j.lib}><span className={j.spangrid2}>Браузеры</span> Internet Explorer <span className={j.spangrid2}>и</span> Microsoft Edge Legacy <span className={j.spangrid2}>не поддерживаются!</span></li>
        </div>
        <div className={j.grid3}>
        {/* <li className={j.li}>Микрофон</li>
        <li className={j.li}><span className={j.spangrid3}>Для занятий у вас обязательно должен быть микрофон и звуковоспроизводящее устройство (наушники или колонки)</span></li> */}
        </div>
        </div>
        <div className={j.b1}><div className={j.b12}>Android и iOS</div><div className={j.b2}></div></div>
        <div className={j.grid}>
        <div className={j.grid1}> 
        <li className={j.li}><span className={j.spangrid3}>Телефон с iOS (12.2+): Safari браузер</span></li>
        <li className={j.li}><span className={j.spangrid3}>Телефон с Android (6.0+): Chrome Mobile</span></li>
        </div>
        </div>
        <div className={j.obs}>
          <div className={j.div1}>Наша команда поможет с любыми вопросами</div>
          <div className={j.div2}>Работаем 365 дней в году с 10:00 до 22:00 по московскому времени</div>
          <Link to="/obratnaja-sviaz"><div className={j.div3}>Написать команде</div></Link>
        </div>
        </div>  
        </div>
        </div>
        

        );
}

export default Sysreq;