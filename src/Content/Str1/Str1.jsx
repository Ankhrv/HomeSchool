import React, { useState } from "react";
import a from './Str1.module.css';
import logo from './y.png';
import { Helmet } from 'react-helmet';
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
import Nachat from '../../Components/Nachat/nachat';
import b from '../../Components/Menu/Menu.module.css';

const Str1 = () => {

    const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);

    return (
<div className={a.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={a.A}>
        <div className={a.a}>
       <div className={a.fon}>
           
          
            <div className={a.div1}>

            <div className={a.divleft}>
            <div className={a.divleft1}>
                <a>АКТУАЛЬНЫЕ</a> 
                <a>ВИДЕО-УРОКИ С</a>
                <a className={a.divleft11}>ОПЫТНЫМ ПЕДАГОГОМ</a>
                </div>
                <div className={a.divleft111}>

                <div className={a.divleft112}>
                <div className={a.divleft22}><img src={logo} alt='logo'className={a.t}></img> <div className={a.divleft2}>Составляйте cписок тем сейчас, или после консультации педагога</div></div>
                <div className={a.divleft22}><img src={logo} alt='logo'className={a.t}></img> <div className={a.divleft3}>Пошаговая подготовка учеников, максимальные знания для ГИА</div></div>
            </div>
            <div className={a.divleft113}>
            <div className={`${a.divleft22} ${a.fff}`}><img src={logo} alt='logo'className={a.t}></img><div className={a.divleft4}>Хорошие цены за высокие результаты. От 290 рублей за урок</div></div>
            <div className={`${a.divleft22} ${a.fff}`}><img src={logo} alt='logo'className={a.t}></img><div className={a.divleft5}>Интерактивные занятия на уникальной платформе</div></div>
            </div> 
            </div>
            <div className={a.divleft6} onClick={() => setModalInfoOpen6(true)}>Попробовать бесплатно</div>
            </div>

            <div className={b.smenu}>
        <SimpleModal6
          isOpen={modalInfoIsOpen6}
          onClose={() => setModalInfoOpen6(false)}>
          <Nachat/>
        </SimpleModal6> 
        </div>

            <div className={a.divleft0}>
            <div className={a.divleft1}>
                <a>АКТУАЛЬНЫЕ ВИДЕО-УРОКИ </a> 
                <a className={a.divleft11}>С ОПЫТНЫМ ПЕДАГОГОМ</a>
                </div>
                <div className={a.divleft111}>

                <div className={a.divleft112}>
                <div className={a.divleft22}><img src={logo} alt='logo'className={a.t}></img> <div className={a.divleft2}>Составляйте cписок тем сейчас, или после консультации педагога</div></div>
                <div className={a.divleft22}><img src={logo} alt='logo'className={a.t}></img> <div className={a.divleft3}>Пошаговая подготовка учеников, максимальные знания для ГИА</div></div>
            </div>
            <div className={a.divleft113}>
            <div className={`${a.divleft22} ${a.fff}`}><img src={logo} alt='logo'className={a.t}></img><div className={a.divleft4}>Хорошие цены за высокие результаты. От 290 рублей за урок</div></div>
            <div className={`${a.divleft22} ${a.fff}`}><img src={logo} alt='logo'className={a.t}></img><div className={a.divleft5}>Интерактивные занятия на уникальной платформе</div></div>
            </div> 
            </div>
            <div className={a.divleft6} onClick={() => setModalInfoOpen6(true)}>Попробовать бесплатно</div>
            </div>

            <div className={a.divrighttt}>
            <div className={a.divright}><div className={a.g}></div><div className={a.g1}><div className={a.g2}></div><div className={a.g3}></div></div></div>
            <div className={a.divrightt}>Как в реальной жизни. Только лучше!</div>
            </div></div>
           
        </div></div>
        </div>
        </div>

        );
}

export default Str1;