import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/components/Modal.css";

const Modal = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="Modal-overlay">
          <div className="Modal-content">{children}</div>
        </div>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
