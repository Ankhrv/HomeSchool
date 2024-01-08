import React, { useState } from "react";
import c from './Str2.module.css';
import { Helmet } from 'react-helmet';
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
import Nachat from '../../Components/Nachat/nachat';
import b from '../../Components/Menu/Menu.module.css';



const Str2 = () => {

        const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);
        
    return (
        
<div className={c.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>

<div className={c.A}>
<div className={c.fon}>
        <div className={c.a}>
        <div className={c.Textt}> 
<div className={c.Text}>
<a className={c.Text2}>Найдём</a>
<a className={c.Text1}>решение</a>
<a className={c.Text2}>для</a>
<a className={c.Text2}>любых</a>
<a className={c.Text2}>школьных</a>
<a className={c.Text1}>задач</a>
</div>

<div className={c.downtext}><div className={c.downtext1}>Школа – непростое испытание для детей и их родителей. Хотите, чтобы после окончания школы остались</div> <div className={c.downtext2}>только хорошие воспоминания и достойные результаты? Тогда доверьте обучение опытныму педагогу.</div></div>
<div className={c.downtext11}>Школа – непростое испытание для детей и их родителей. Хотите, чтобы после окончания школы остались только хорошие воспоминания и достойные результаты? Тогда доверьте обучение опытному педагогу.</div> 

</div> 
 

        </div>
        </div>
        </div>

        <div className={c.scrollmenu}>
       
<div className={c.aa2} onClick={() => setModalInfoOpen6(true)}><div className={c.b1}><div className={c.b2}></div><div className={c.b22}>Подготовка к ОГЭ</div><div className={c.b3}>Разбор тем по заданиям. Знакомство c алгоритмами быстрых решений. Задания на дом и практика, проверка заданий.</div><div className={c.strr1}><div className={c.str1}></div></div></div></div>
<div className={c.aa} onClick={() => setModalInfoOpen6(true)}><div className={c.b1}><div className={c.b20}></div><div className={c.b22}>Подготовка к КР</div><div className={c.b3}>Разберём контрольные работы по разным программам. Практическое задание на дом и проверка, для закрепления результата.</div><div className={c.strr1}><div className={c.str1}></div></div></div></div>
<div className={c.aa} onClick={() => setModalInfoOpen6(true)}><div className={c.b1}><div className={c.b21}></div><div className={c.b22}>Средняя школа</div><div className={c.b3}>Много новых предметов и падает успеваемость. Видео-уроки помогут вернуть интерес к учёбе и уверенность в своих знаниях.</div><div className={c.strr1}><div className={c.str1}></div></div></div></div>
<div className={c.aa3} onClick={() => setModalInfoOpen6(true)}><div className={c.b1}><div className={c.b211}></div><div className={c.b22}>Срочная помощь</div><div className={c.b3}>Сложности в домашнем задании? Хочешь понять тему, а не списать? Смотри видео-уроки по заданиям с учебников.</div><div className={c.strr1}><div className={c.str1}></div></div></div></div>
</div>     
    
<div className={b.smenu}>
        <SimpleModal6
          isOpen={modalInfoIsOpen6}
          onClose={() => setModalInfoOpen6(false)}>
          <Nachat/>
        </SimpleModal6> 
        </div>
        </div>
        
        );
}

export default Str2;