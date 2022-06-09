/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 *
 * @returns Component1
 * Dispone de un que va a tener un valor
 * que recibe desde el padre
 */

const myContext = React.createContext(null);

const Component1 = () => {
  // Inicializamos un estado vacio que va a rellenarse
  // con los datos del contexto del padre

  const state = useContext(myContext);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Printeamos el componente 2 */}
      <Component2></Component2>
    </div>
  );
};

const Component2 = () => {
  const state = useContext(myContext);

  return (
    <div>
      <h2>La sesion es: {state.session}</h2>
    </div>
  );
};

const MyComponentWithContext = () => {
  const initialState = {
    token: '1234567',
    session: 1,
  };

  // Crear el estado de este componente

  const [sessionData, setSessionData] = useState(initialState);

  const updateSession = function () {
    setSessionData({
      token: 'JWT123456789',
      session: sessionData.session + 1,
    });
  };

  return (
    <myContext.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualiza, los componentes de aqui tambien lo actualizan */}
      <h1>*** Ejemplo de useState() y useContext() ***</h1>
      <Component1></Component1>
      <button onClick={updateSession}>Actualizar Sesion</button>
    </myContext.Provider>
  );
};

export default MyComponentWithContext;
