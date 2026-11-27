import React, { Component } from "react";
import ErrorBoundary from "./components/errorBoundary";
import ColorLifecycle from "./components/colorLifecycle";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <button
        type="button"
        onClick={this.handleClick}
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        {this.state.counter}
      </button>
    );
  }
}

function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <p>
        Click on the numbers to increase the counters.
        <br />
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
      </p>

      <hr />

      <h3>Simulation 1: Two counters in one ErrorBoundary</h3>
      <ErrorBoundary>
        <div style={{ display: "flex", gap: "12px" }}>
          <BuggyCounter />
          <BuggyCounter />
        </div>
      </ErrorBoundary>

      <hr />

      <h3>Simulation 2: Each counter in its own ErrorBoundary</h3>
      <p>
        These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <hr />

      {/* Simulation 3: Unwrapped BuggyCounter (uncomment to test full crash) */}
      {/* <h3>Simulation 3: No ErrorBoundary</h3>
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter /> */}

      <hr />

      <ColorLifecycle />
    </main>
  );
}

export default App;