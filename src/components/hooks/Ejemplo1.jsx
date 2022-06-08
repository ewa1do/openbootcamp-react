/**
 * Ejemplo de uso del hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas poder modificarlo.
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
  // Valor inicial para un contador
  const initialValue = 0;

  // Valor inicial para una persona
  const initialPerson = {
    name: 'Eduardo',
    email: 'eduardo@vera.com',
  };

  /**
   * Queremos que el INITIALVALUE y INITIALPERSON sean
   * parte del estado del componente para asi poder
   * gestionar su cambio y que este se vea reflejado
   * en la vista del componente.
   *
   * const [varName, changingFunction] = useState(initialValue)
   */

  const [counter, setCounter] = useState(initialValue);
  const [person, setPerson] = useState(initialPerson);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */

  const incrementCounter = function () {
    // ? funcionParaCambiar(nuevoValor);

    setCounter(counter + 1);
  };

  /**
   * Funcion para actualizar el estado de persona en el componente
   */
  const updatePerson = function () {
    setPerson({
      name: 'Andres',
      email: 'andres@vera.com',
    });
  };

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {counter}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>Nombre: {person.name}</h3>
      <h4>Email: {person.email}</h4>
      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={incrementCounter}>Incrementar contador</button>
      <button onClick={updatePerson}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
