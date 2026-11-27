import React, { Component } from 'react';
import ErrorBoundary from './errorBoundary';

class App extends Component {
  render() {
    return (
      <div style={{ padding: '12px' }}>
        <ErrorBoundary />
      </div>
    );
  }
}

export default App;