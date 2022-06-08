import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/taskList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
