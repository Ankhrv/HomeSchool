import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './input.css';
// import a from '../signin/form.module.css';
import Userfront from "@userfront/core";
import PDF1 from "../../PDF/DOC009.pdf";
import PDF2 from "../../PDF/DOC009.pdf";
import PDF3 from "../../PDF/DOC009.pdf";

// import React, { useRef } from 'react';

// const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
  

  
Userfront.init("vnddpqyn");
  

  class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        captchaResponse: null,
      }
      this.state = {
        emailOrUsername: "",
        password: "",
        alertMessage: "",
      };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);


  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Reset the alert to empty
    
    this.setAlertMessage();
    // Call Userfront.login()
    Userfront.login({
      method: "password",
      emailOrUsername: this.state.emailOrUsername,
      password: this.state.password,
    }).catch((error) => {
      this.setAlertMessage(error.message);
    });
  }

  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  setcaptha(){
  this.setState({ captchaResponse: null });
  }

  render() {
    

  return (
       
 <form className='Form' onSubmit={this.handleSubmit} >
 <div className='GLAV'>
 <div className='zag'>Вход в личный кабинет</div>
 <div className='name0'>Введите вашу почту</div>
 <input className='inp'
 name="emailOrUsername"
 type="text"
 value={this.state.emailOrUsername}
 onChange={this.handleInputChange}
 
/>
<div className='name11'>Введите ваш пароль</div>
<input className='inp1'
         name="password"
         type="password"
         value={this.state.password}
         onChange={this.handleInputChange}
        />
 <button type="submit" className='but'>Далее</button>
 <div className='Err'> {this.state.alertMessage} </div>
 <div className='zag2'>
 Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className='span'>политикой конфиденциальности</a> и <a href={PDF2} target="_blank" rel="noreferrer" className='span'>пользовательским соглашением </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className='span'>обработку своих персональных данных</a>
 </div>
 </div>
 <div className='zag3'>
 <div className='zag33'>
 Ещё нет аккаунта? 
 </div>  
 <div className='zag43'>
 
 </div></div>      
 </form>
  );
}
  }

export default Signin;

