import React, { useEffect } from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal2.css";
import { Helmet } from 'react-helmet';

export const SimpleModal2 = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modalclosebutton2")) onClose();
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
      
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal2 modal2--${state}`}>
            <div className="modalwrapper2" onClick={onWrapperClick}>
              <div className="modalcontent2">
                <button
                  className="modalclosebutton2"
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
