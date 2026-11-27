import React, { Component } from 'react';
import Modal from './modal';

// Helper component that throws during render when triggered
class BuggyTrigger extends Component {
  render() {
    throw new Error('Something went wrong!');
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
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    return (
      <div>
        <button type="button" onClick={this.occurError}>
          Occur an error
        </button>

        {/* Triggers a render error when occurError() sets hasError to true */}
        {hasError && !errorInfo && <BuggyTrigger />}

        {/* Displays the Modal once componentDidCatch captures errorInfo */}
        {hasError && errorInfo && (
          <Modal
            error={error}
            errorInfo={errorInfo}
            closeModal={this.closeModal}
          />
        )}

        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;