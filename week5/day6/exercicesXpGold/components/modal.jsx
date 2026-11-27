import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  render() {
    const { isOpen, onClose, error, errorInfo } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal-background" onClick={onClose}>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <p>{error ? error.toString() : "Error: Something went wrong!"}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </details>
          <p style={{ marginTop: "10px" }}>Please try it again</p>
          <button type="button" onClick={onClose} style={{ marginTop: "8px" }}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;