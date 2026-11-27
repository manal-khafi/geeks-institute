import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  render() {
    const { error, errorInfo, closeModal } = this.props;

    return (
      <div className="modal-background">
        <div className="modal-body">
          <div>{error && error.toString()}</div>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Details</summary>
            {errorInfo && errorInfo.componentStack}
          </details>
          <p>Please try it again</p>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;