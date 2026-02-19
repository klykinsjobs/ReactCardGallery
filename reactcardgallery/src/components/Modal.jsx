import React from "react";
import "./Modal.css";

// Simple modal that shows details for a selected card
const Modal = ({ isOpen, onClose, animal, color }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-color" style={{ backgroundColor: color }} />

                <h2>{animal}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
