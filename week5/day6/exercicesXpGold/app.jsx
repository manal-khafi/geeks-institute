import React, { Component } from "react";
import ErrorBoundary from "./components/errorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: null,
    };
  }

  render() {
    return (
      <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
        <ErrorBoundary />
      </main>
    );
  }
}

export default App;