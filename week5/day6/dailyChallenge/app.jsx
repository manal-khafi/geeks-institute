import React, { Component } from 'react';
import FormComponent from './formComponent';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default App;