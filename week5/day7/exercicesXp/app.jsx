import React, { Component } from 'react';
import ErrorBoundary from './errorBoundary';
import FavoriteColor from './favoriteColor';
import LifecycleUnmount from './lifecycleUnmount';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Exercise 1: Error Boundary Simulation</h2>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5.
        </b>
      </p>

      {/* Simulation 1 */}
      <p>Two counters inside the same error boundary:</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />

      {/* Simulation 2 */}
      <p>Two counters each inside their own error boundary:</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />

      {/* Simulation 3 */}
      <p>Counter without an error boundary:</p>
      <BuggyCounter />

      <hr />

      <h2>Exercise 2: Lifecycle (Updating)</h2>
      <FavoriteColor />

      <hr />

      <h2>Exercise 3: Lifecycle #2 (Unmounting)</h2>
      <LifecycleUnmount />
    </div>
  );
}

export default App;