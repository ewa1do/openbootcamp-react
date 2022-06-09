/**
 * Ejemplo de uso de los siguietes hooks:
 * - useState()
 * - useRef(): Identificar y referenciar elementos dentro de la vista
 * - useEffect(): Controla los cambios en la vista (ciclo de vida)
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
  /**
   * Vamos a crear dos contadore distintos,
   * cada uno en un estado diferente
   */
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * Vamos a crear una referencia con useRef()
   * para asociar una variable con un elemento
   * del DOM del componente (vista HTML)
   */
  const myRef = useRef();

  // Funciones para los contadores
  const updateCounter1 = function () {
    setCounter1(counter1 + 1);
  };

  const updateCounter2 = function () {
    setCounter2(counter2 + 1);
  };

  /**
   * Trabajando con useEffect
   */

  /**
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que este dento del useEffect()
   */
  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(myRef);
  // });

  /**
   * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
   * Cada vez que haya un cambio en contador 1 se ejecuta lo que
   * diga el useEffect(), en caso de que cambie contador 2 no habra
   * ejecucion.
   */

  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(myRef);
  // }, [counter1]);

  /**
   * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
   * Cada vez que haya un cambio en contador 1 se ejecuta lo que haya en useEffect()
   * Cada vez que haya un cambio en contador 2 se ejecuta lo que haya en useEffect()
   */

  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2');
    console.log('Mostrando Referencia a elemento del DOM:');
    console.log(myRef);
  }, [counter1, counter2]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
      <h2>CONTADOR 1: {counter1}</h2>
      <h2>CONTADOR 2: {counter2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={myRef}>Ejemplo de elemento referenciado</h4>

      {/* botones para cambiar los contadores */}
      <div>
        <button onClick={updateCounter1}>Incrementar contador 1</button>
        <button onClick={updateCounter2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
