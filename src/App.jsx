import React from 'react';
import './App.css';
import TaskListComponent from './components/containers/taskList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
