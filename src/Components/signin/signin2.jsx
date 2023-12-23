
import { NavLink, useNavigate } from 'react-router-dom';
import './input.css';
import { Helmet } from 'react-helmet';
import React, { useState } from "react";
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";

import Register from './registr';

// const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;


const Signin2 = () => {
 
  const [modalInfoIsOpen5, setModalInfoOpen5] = useState(false);

   return (
    
<div>
<Helmet>
       <title>Домашняя школа</title>
       <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
      
     </Helmet>

<a onClick={() => setModalInfoOpen5(true)} > Регистрация
</a>
<div >
        <SimpleModal6
          isOpen={modalInfoIsOpen5}
          onClose={() => setModalInfoOpen5(false)}
        >
          <Register/>
         
        </SimpleModal6> 
        </div>
</div>


);
}

export default Signin2;