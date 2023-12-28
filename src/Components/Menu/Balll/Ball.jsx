import React, { useState } from "react";
import { SimpleModal6 } from "../../../SimpleModal6/SimpleModal6";
import "./Ball.css";
import BezplZan from '../../BesplZan/BezplZan';
import ball from '../ball.png';
import { Helmet } from 'react-helmet';

 const Ball = () => {
  const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);
  return (
   <>  
   <Helmet>
   <title>Home-School</title>
   <meta name="description" content="Удобное обучение не выходя из дома" />
 </Helmet>
   <div  onClick={() => setModalInfoOpen6(true)} className='ball1'><img src={ball} alt='ball'className='ball'></img></div>
   <div className='smenu'>
   <SimpleModal6
     isOpen={modalInfoIsOpen6}
     onClose={() => setModalInfoOpen6(false)}>
     <BezplZan/>
   </SimpleModal6> 
   </div>
   </>
  );
};
export default Ball;