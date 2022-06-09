/**
 * Ejemplo de uso del metodo de ciclo
 * de vida en componente clase y el
 * hook de ciclo de vida en
 * componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(
      'Comportamiento antes de que el componente sea añadido al DOM (renderice)'
    );
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento antes de que el componente sea añadido al DOM (renderice)'
    );
  }, []); // si se usa el corchete vacio indica que solo se va a aplicar el efecto una vez

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
