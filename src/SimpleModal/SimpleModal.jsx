import React from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal.css";
import { Helmet } from 'react-helmet';

export const SimpleModal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
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
          
          <div className={`modal modal--${state}`}>
             
            <div className="modal-wrapper" onClick={onWrapperClick}> 
            <div className="nnn">    <div className="modal-content"></div>
             <button
                  className="modal-close-button"
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
