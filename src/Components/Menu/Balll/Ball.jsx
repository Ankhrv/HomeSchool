import React from "react";
import { Transition } from "react-transition-group";

import "./Ball.css";
import ball from '../ball.png';
import { Helmet } from 'react-helmet';

 const Ball = () => {
 
  return (
   <div className='ball1'><img src={ball} alt='ball'className='ball'></img></div>
  );
};
export default Ball;