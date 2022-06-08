import React from 'react';
import './App.css';
import TaskListComponent from './components/containers/taskList';
import Ejemplo1 from './components/hooks/Ejemplo1';
import Ejemplo2 from './components/hooks/Ejemplo2';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        <Ejemplo2></Ejemplo2>
      </header>
    </div>
  );
}

export default App;
