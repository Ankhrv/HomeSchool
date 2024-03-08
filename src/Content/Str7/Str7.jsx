import React from "react"
import c from './Str7.module.css';

import { Helmet } from 'react-helmet';
// import str from './50.png';
import { useState } from 'react';
import './click.css'



const Str7 = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);

  const [isActive99, setIsActive99] = useState(false);
  const [isActive100, setIsActive100] = useState(false);
  const [isActive101, setIsActive101] = useState(false);
  const [isActive102, setIsActive102] = useState(false);
  const [isActive103, setIsActive103] = useState(false);
  const [isActive104, setIsActive104] = useState(false);
  const [isActive105, setIsActive105] = useState(false);
  const [isActive106, setIsActive106] = useState(false);
  const [isActive107, setIsActive107] = useState(false);
  const [isActive108, setIsActive108] = useState(false);
  const [isActive109, setIsActive109] = useState(false);
  const [isActive110, setIsActive110] = useState(false);

  let Mennu = React.createRef();
  let Mennu2 = React.createRef();
  let Mennu3 = React.createRef();
  let Mennu4 = React.createRef();
  let Mennu5 = React.createRef();
  let Mennu6 = React.createRef();
  let Mennu7 = React.createRef();
  let Mennu8 = React.createRef();
  let Mennu9 = React.createRef();
  let Mennu10 = React.createRef();
  let Mennu11 = React.createRef();
  let Mennu12 = React.createRef();

  let myFunction = (event) => {
    Mennu.current.classList.toggle("show2");
    Mennu2.current.classList.toggle("show3");
    setIsShown1(current => !current);
    setIsActive99(current => !current);
    setIsActive100(current => !current);
}

let myFunction2 = (event) => {
  Mennu4.current.classList.toggle("show4");
  Mennu3.current.classList.toggle("show5");
  setIsShown2(current => !current);
  setIsActive101(current => !current);
  setIsActive102(current => !current);
}

let myFunction3 = (event) => {
  Mennu6.current.classList.toggle("show6");
  Mennu5.current.classList.toggle("show7");
  setIsShown3(current => !current);
  setIsActive103(current => !current);
  setIsActive104(current => !current);
}

let myFunction4 = (event) => {
  Mennu8.current.classList.toggle("show2");
  Mennu7.current.classList.toggle("show3");
  setIsShown4(current => !current);
  setIsActive105(current => !current);
  setIsActive106(current => !current);
}

let myFunction5 = (event) => {
  Mennu10.current.classList.toggle("show2");
  Mennu9.current.classList.toggle("show3");
  setIsShown5(current => !current);
  setIsActive107(current => !current);
  setIsActive108(current => !current);
}

let myFunction6 = (event) => {
  Mennu12.current.classList.toggle("show2");
  Mennu11.current.classList.toggle("show3");
  setIsShown6(current => !current);
  setIsActive109(current => !current);
  setIsActive110(current => !current);
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

            <div onClick={myFunction} className={c.dropbtn110}>
            <div className={c.dropbtn1100}>
             <span> <div ref={Mennu2} style={{
              display: isActive99 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown1 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive100 ? '900' : ''
            }}>Как и где проходят занятия?</span> </div>
            <div ref={Mennu} className={c.dropdowncontent10}> Мы разработали специальную систему подбора уроков по темам для домашних занятий. Заниматься дома удобнее и комфортнее, так же это экономит время для любимых хобби. Созданный чат, позволит проверить свои знания, с помощью практических заданий которые проверит учитель. А разбивка по темам позволит закрыть пробелы или получить дополнительную информацию для закрепления.</div>
            </div>

            <div onClick={myFunction2} className={c.dropbtn111}>
            <div className={c.dropbtn1101}>
             <span> <div ref={Mennu3} style={{
              display: isActive101 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown2 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive102 ? '900' : ''
            }}>Какое оборудование нужно для занятий?</span> </div>
            <div ref={Mennu4} className={c.dropdowncontent11}> Для занятий понадобится ноутбук или компьютер, так же возможно использовать планшет. Наушники, камеры и микрофоны не нужны! Так же необходимо завести тетрадь ведь будет много полезной информации!</div>
            </div>


          
            <div onClick={myFunction3} className={c.dropbtn112}>
            <div className={c.dropbtn1102}>
             <span> <div ref={Mennu5} style={{
              display: isActive103 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown3 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive104 ? '900' : ''
            }}>Сколько длится урок?</span> </div>
            <div ref={Mennu6} className={c.dropdowncontent12}> Каждый урок продолжительностью не более 30 минут, в зависимости от темы. Рекомендуется провести диагностику, что бы определить необходимые темы и количество уроков.</div>
            </div>

            
            <div onClick={myFunction4} className={c.dropbtn113}>
            <div className={c.dropbtn1103}>
             <span> <div ref={Mennu7} style={{
              display: isActive105 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown4 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive106 ? '900' : ''
            }}>Я смогу посмотреть запись урока?</span> </div>
            <div ref={Mennu8} className={c.dropdowncontent13}> Запись уроков остаётся у ученика до конца учебного года. Поэтому можно пересматривать уроки в любое время!</div>
            </div>

            
            <div onClick={myFunction5} className={c.dropbtn114}>
            <div className={c.dropbtn1104}>
             <span> <div ref={Mennu9} style={{
              display: isActive107 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown5 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive108 ? '900' : ''
            }}>Как приобрести нужные уроки?</span> </div>
            <div ref={Mennu10} className={c.dropdowncontent14}> Нужно зарегестрироваться, выбрать уроки самостоятельно или пройти диагностику у опытного педагога. После этого сможете произвести оплату по реквизитам.</div>
            </div>

            
            <div onClick={myFunction6} className={c.dropbtn115}>
            <div className={c.dropbtn1105}>
             <span> <div ref={Mennu11} style={{
              display: isActive109 ? 'none' : 'block'
            }}
            className={c.dstr}></div></span>
            <span>{isShown6 ? (<div className={c.dstr2}></div>) : null}</span><span className={c.span} style={{
              fontWeight: isActive110 ? '900' : ''
            }}>Как заранее распланировать занятия? </span> </div>
            <div ref={Mennu12} className={c.dropdowncontent15}> В кабинете педагога находятся файлы по каждой программе. В них расписаны все темы которые проходятся по данному учебнику. Даже летом вы можете начать обучение по своей программе и расписать план занятий на год вперёд!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Str7;