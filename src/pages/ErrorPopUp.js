import React from "react";

function ErrorPopup({ message, onClose }) {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <div className="error-message">{message}</div>
        <button className="error-popup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
