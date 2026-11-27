import React, { Component } from "react";
import Modal from "./modal";

class CrashTrigger extends Component {
  render() {
    if (this.props.shouldCrash) {
      throw new Error("Something went wrong!");
    }
    return null;
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  occurError = () => {
    this.setState({ hasError: true });
  };

  closeModal = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.occurError}>
          Occur an error
        </button>

        <CrashTrigger shouldCrash={this.state.hasError} />

        <Modal
          isOpen={this.state.hasError}
          onClose={this.closeModal}
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />
      </div>
    );
  }
}

export default ErrorBoundary;