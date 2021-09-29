import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../util/context";

const Modal = () => {
  const { modalOpen, closeModal } = useAppContext();
  return <div onClick={closeModal} className={`modal-overlay ${modalOpen && "show-modal"}`}>
      <div className="modal-container">
          <h3>Modal Content</h3>
          <button onClick={closeModal} className="close-modal-btn">
              <FaTimes/>
          </button>
      </div>
  </div>;
};

export default Modal;
