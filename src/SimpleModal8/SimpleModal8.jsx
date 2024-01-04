import React from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal3.css";
import { Helmet } from 'react-helmet';

export const SimpleModal8 = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper8")) onClose();
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
          
          <div className={`modal8 modal8--${state}`}>
             
            <div className="modal-wrapper8" onClick={onWrapperClick}> 
            <div className="nnn8">    <div className="modal-content8"></div>
             <button
                  className="modal-close-button8"
                  onClick={() => onClose()}
                >
                  <IconClose />
                </button> 
                {children}
                </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
