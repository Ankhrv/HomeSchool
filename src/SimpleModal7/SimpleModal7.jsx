import React, { useEffect } from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal3.css";
import { Helmet } from 'react-helmet';

export const SimpleModal7 = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper7")) onClose();
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen])

  return (
    <>
    <Helmet>
        <title>Home-School</title>
        <meta name="description" content="Удобное обучение не выходя из дома" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>


      
      <Transition in={isOpen} timeout={0} unmountOnExit={true}>
        {(state) => (
          
          <div className={`modal7 modal7--${state}`}>
             
            <div className="modal-wrapper7" onClick={onWrapperClick}> 
            <div className="nnn7">    <div className="modal-content7"></div>
             <button
                  className="modal-close-button7"
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
