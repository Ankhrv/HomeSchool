import React from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal3.css";
import { Helmet } from 'react-helmet';

export const SimpleModal5 = ({ isOpen, onClose, children }) => {
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


      
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal3 modal3--${state}`}>
            <div className="modalwrapper3" onClick={onWrapperClick3}>
              <div className="modalcontent3">
                <button
                  className="modalclosebutton3"
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
