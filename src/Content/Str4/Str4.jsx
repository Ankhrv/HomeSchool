import React from 'react';
import c from './Str4.module.css';
import { Helmet } from 'react-helmet';




const Str3 = () => {
    return (
        
<div className={c.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>

<div className={c.A}>
<div className={c.Textt}> 
<div className={c.Text}>
<a className={c.Text1}>Научим</a>
<a className={c.Text2}>только </a>
<a className={c.Text1}>хорошему</a>
</div>
</div>
<div className={c.fon}>
<div className={c.a}>
<div className={c.a2}>

<div className={c.block1}>
        <div className={c.block11}><font color="#222">Наша команда проверяет</font> 
        <span className={c.i}> квалификацию, дипломы, документы </span>специалиста </div>
        <div className={c.block112}>Одобренные специалисты появляются в каталоге и <span className={c.i}>ведут отчёты</span> по всем проведенным занятиям</div>
        <div className={c.block113}>Наши педагоги <span className={c.i}>регулярно проходят курсы</span> повышения квалификации от «Инфоурока»</div>
        </div>

<div className={c.block2}>
        <div className={c.block12}>Мы <span className={c.i}>проводим собеседование</span>, где проверяем личные и профессиональные качества специалиста и его техническое оборудование</div>
        <div className={c.block12}>Мы <span className={c.i}>отсматриваем записи уроков</span> и всегда готовы прийти на помощь, если возникнут сложности</div>
        </div>


</div>
</div>
</div>
</div>
</div>




        
        );
}

export default Str3;