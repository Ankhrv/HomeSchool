import React from "react"
import c from './Str6.module.css';
import { Helmet } from 'react-helmet';
import str from './50.png';
import { useState } from 'react';



const Str6 = () => {

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    setIsActive(current => !current);
  }

  const handleClick2 = event => {
    // 👇️ toggle shown state
    setIsShown2(current => !current);

    setIsActive2(current => !current);
  }

  const handleClick3 = event => {
    // 👇️ toggle shown state
    setIsShown3(current => !current);

    setIsActive3(current => !current);
  }

  const handleClick4 = event => {
    // 👇️ toggle shown state
    setIsShown4(current => !current);

    setIsActive4(current => !current);
  }

  const handleClick5 = event => {
    // 👇️ toggle shown state
    setIsShown5(current => !current);

    setIsActive5(current => !current);
  }

  const handleClick6 = event => {
    // 👇️ toggle shown state
    setIsShown6(current => !current);

    setIsActive6(current => !current);
  }

  return (
    <div className={c.A1}>
      <Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />

      </Helmet>

      <div className={c.A}>
        <div className={c.Textt}>
          <div className={c.Text}>
            <a className={c.Text1}>Ответы</a>
            <a className={c.Text2}>на частые </a>
            <a className={c.Text1}>вопросы</a>
          </div>
        </div>
        <div className={c.fon}>
          <div className={c.a}>

            <div onClick={handleClick} style={{
              fontWeight: isActive ? '900' : '',
              display: isActive ? 'block' : '',
            }} className={c.d1}>

              <img style={{

transform: isActive ? '' : '',
paddingLeft: isActive ? '25px' : '',
paddingRight: isActive ? '10px' : '',
paddingTop: isActive ? '-0px' : '',
transition: isActive ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                 
                  marginTop: isActive ? '-1px' : '3px'
                  
                }} >Как и где проходят занятия?</span> {isShown ? (<div className={c.d00}> Мы разработали собственную видеоплатформу для онлайн‑занятий, заниматься на которой гораздо удобнее и эффективнее, чем в Zoom или другом приложении. Это созданная на время урока виртуальная классная комната с онлайн доской для демонстрации материалов, и возможностью выполнять различные действия вместе с учителем.</div>) : null}
            </div>

            <div onClick={handleClick2} style={{
              fontWeight: isActive2 ? '900' : '',
              display: isActive2 ? 'block' : '',
            }} className={c.d2}>

              <img style={{
           transform: isActive2 ? '' : '',
           paddingLeft: isActive2 ? '25px' : '',
           paddingRight: isActive2 ? '10px' : '',
           paddingTop: isActive2 ? '-0px' : '',
           transition: isActive2 ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                  marginTop: isActive2 ? '3px' : '3px'
                }} >Какое оборудование нужно для занятий?</span>{isShown2 ? (<div className={c.d00}> Для занятий понадобится компьютер или планшет, доступ к интернету, наушники, микрофон, и те учебники и дополнительные материалы, которые вы обсудите с педагогом. </div>) : null}
            </div>

            <div onClick={handleClick3} style={{
              fontWeight: isActive3 ? '900' : '',
              display: isActive3 ? 'block' : '',
            }} className={c.d3}>

              <img style={{
                  transform: isActive3 ? '' : '',
                  paddingLeft: isActive3 ? '25px' : '',
                  paddingRight: isActive3 ? '10px' : '',
                  paddingTop: isActive3 ? '-0px' : '',
                  transition: isActive3 ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                  marginTop: isActive2 ? '3px' : '3px'
                }} >Сколько длится урок?</span> {isShown3 ? (<div className={c.d00}> Продолжительность урока 45 минут. Бесплатное вводное занятие длится 30-45 минут. Преподаватель проведет диагностику текущего уровня знаний, выявит пробелы и проблемные зоны, после чего, составит план обучения. </div>) : null}
            </div>

            <div onClick={handleClick4} style={{
              fontWeight: isActive4 ? '900' : '',
              display: isActive4 ? 'block' : '',
            }} className={c.d4}>

              <img style={{
                 transform: isActive4 ? '' : '',
                 paddingLeft: isActive4 ? '25px' : '',
                 paddingRight: isActive4 ? '10px' : '',
                 paddingTop: isActive4 ? '-0px' : '',
                 transition: isActive4 ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                  marginTop: isActive2 ? '3px' : '3px'
                }} >Я смогу посмотреть запись урока?</span> {isShown4 ? (<div className={c.d00}> Да, запись занятия будет доступна для просмотра. Вы сможете воспроизвести запись в личном кабинете, в любое время.</div>) : null}
            </div>

            <div onClick={handleClick5} style={{
              fontWeight: isActive5 ? '900' : '',
              display: isActive5 ? 'block' : '',
            }} className={c.d5}>

              <img style={{
                  transform: isActive5 ? '' : '',
                  paddingLeft: isActive5 ? '25px' : '',
                  paddingRight: isActive5 ? '10px' : '',
                  paddingTop: isActive5 ? '-0px' : '',
                  transition: isActive5 ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                  marginTop: isActive2 ? '3px' : '3px'
                }} >Как записаться на урок?</span> {isShown5 ? (<div className={c.d00}> Нужно зарегистрироваться, выбрать преподавателя по необходимому предмету, запланировать с ним урок в электронном расписании и внести оплату.</div>) : null}
            </div>

            <div onClick={handleClick6} style={{
              fontWeight: isActive6 ? '900' : '',
              display: isActive6 ? 'block' : '',
            }} className={c.d6}>

              <img style={{
                transform: isActive6 ? '' : '',
                paddingLeft: isActive6 ? '25px' : '',
                paddingRight: isActive6 ? '10px' : '',
                paddingTop: isActive6 ? '-0px' : '',
                transition: isActive6 ? '1s' : '1s'
              }}

                className={c.dstr} src={str} ></img><span style={{
                  marginTop: isActive2 ? '3px' : '3px'
                }} >Я смогу заранее распланировать занятия?</span> {isShown6 ? (<div className={c.d00}> Планировать можно на любую дату, даже на год вперёд. Когда занятия запланированы, то их срок действия заканчивается только по факту проведения, а значит они не сгорят, а вы будете уверены, что время у вашего педагога не займёт другой ученик. </div>) : null}
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Str6;