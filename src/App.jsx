import React from 'react';
import './App.css';
import TaskListComponent from './components/containers/taskList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MyComponentWithContext from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        <Ejemplo4 name='Eduardo'>
          {/* Todo lo que hay aqui, es tratado como props.children en cualquier componente */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
