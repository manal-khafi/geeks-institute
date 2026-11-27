import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class ColorLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    this.colorTimer = setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  componentWillUnmount() {
    if (this.colorTimer) {
      clearTimeout(this.colorTimer);
    }
  }

  changeColorToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <section>
        <h2>My Favorite Color is {this.state.favoriteColor}</h2>
        <button type="button" onClick={this.changeColorToBlue}>
          Change to Blue
        </button>

        <hr />

        {this.state.show && <Child />}
        <button type="button" onClick={this.deleteHeader}>
          Delete
        </button>
      </section>
    );
  }
}

export default ColorLifecycle;