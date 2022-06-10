import React, { useState } from 'react';

// Definiendo estilos en contantes:

// ? Estilos para usuario logeado
const loggedStyle = {
  color: 'darkcyan',
};

// ? Estilos para usuario no logeado
const unloggedStyle = {
  color: 'crimson',
  fontWeight: 'bold',
};

const Greetingstyled = (props) => {
  // Generamos un estado para el componente
  // Y asi controlar si el usuario esta o no logeado
  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola, {props.name} </p>;
  const loginMessage = () => <p>Please Login!</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : loginMessage()}
      <button
        onClick={() => {
          console.log('Boton pulsado');
          setLogged(!logged);
        }}
      >
        {logged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Greetingstyled;
