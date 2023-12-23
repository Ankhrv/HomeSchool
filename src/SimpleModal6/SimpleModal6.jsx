import React from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal6.css";
import { Helmet } from 'react-helmet';

export const SimpleModal6 = ({ isOpen, onClose, children }) => {
  const onWrapperClick3 = (event) => {
    if (event.target.classList.contains("closed")) onClose();
  };
  return (
    <>
    <Helmet>
        <title>Home-School</title>
        <meta name="description" content="Удобное обучение не выходя из дома" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>


      
      <Transition in={isOpen} timeout={0} unmountOnExit={true}>
        {(state) => (
          <div className={`modal4 modal4--${state}`}>
            <div className="modalwrapper4" onClick={onWrapperClick3}>
              <div className="modalcontent4">
                <button
                  className="modalclosebutton4"
                  onClick={() => onClose()}
                >
                  
                  <IconClose/> 
                </button>
                <span
                  className="modalclosebutton"
                  onClick={() => onClose()}
                >Войти</span>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
