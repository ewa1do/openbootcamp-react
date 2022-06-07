import React, { Component } from 'react';

// Proptype: Specifies the data-type we're passing to the prop
import PropTypes from 'prop-types';

class Greeting extends Component {
  // Prop: are like html attributes, that we can define in react to modify the output.
  // The values are passed by the parent element

  constructor(props) {
    super(props);

    this.state = {
      age: 24,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}!</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Birthday</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
