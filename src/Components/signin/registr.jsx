import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './register.css';
import PDF1 from "../../PDF/DOC009.pdf";
import PDF2 from "../../PDF/DOC009.pdf";
import PDF3 from "../../PDF/DOC009.pdf";
import Userfront from "@userfront/core";
// import Signin3 from "./signin3";

// import React, { useRef } from 'react';

// const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
  

  
Userfront.init("vnddpqyn");
  

  class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        accountName: "",
        password: "",
        passwordVerify: "",
        alertMessage: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setAlertMessage = this.setAlertMessage.bind(this);
    }
  
    // Whenever an input changes value, change the corresponding state variable
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
      // Call Userfront.signup()
      Userfront.signup({
        method: "password",
        email: this.state.email,
        password: this.state.password,
        data: {
          accountName: this.state.accountName,
          email: this.state.email,
        },
      }).catch((error) => {
        this.setAlertMessage(error.message);
      });
    }
  
    setAlertMessage(message) {
      this.setState({ alertMessage: message });
    }
  
    render() {
    

  return (
    <form className='Form' onSubmit={this.handleSubmit} >
    <div className='GLAV'>
    <div className='zag'>Регистрация</div>
    <div className='name'>Введите вашу почту</div>
    <input className='inp'
     name="email"
     type="email"
     value={this.state.email}
     onChange={this.handleInputChange}
    
   />
     <div className='name1'>Введите ваше имя</div>        
     <input className='inp1'
             name="accountName"
             type="text"
             value={this.state.accountName}
             onChange={this.handleInputChange}  
           />
   <div className='name2'>Введите ваш пароль</div>
   <input className='inp3'
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
           />


<div className='name3'>Повторите ваш пароль</div>
   <input className='inp3'
             name="passwordVerify"
             type="password"
             value={this.state.passwordVerify}
             onChange={this.handleInputChange}
           />

    <button type="submit" className='but'>Далее</button>
    <div className='Err'> {this.state.alertMessage} </div>
    <div className='zag2'>
 Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className='span'>политикой конфиденциальности</a> и <a href={PDF2} target="_blank" rel="noreferrer" className='span'>пользовательским соглашением </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className='span'>обработку своих персональных данных</a>
 </div>
 </div>
 <div className='zag3reg'>
 <div className='zag33'>
 Уже есть аккаунт? 
 </div>  
 <div className='zag43'>

 </div></div>      
 </form>
  );
}
  }

export default Register;

