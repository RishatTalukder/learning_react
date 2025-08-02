import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContextProvider"; // importing the useGlobalContext hook

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext(); // consuming the global context value

  return (
    <div
      className={`modal fade ${isModalOpen ? "show" : ""}`}
      style={{ display: isModalOpen ? "block" : "none" }} // toggling the display of the modal
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!isModalOpen}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
          </div>
          <div className="modal-body">
            Modal content goes here.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;