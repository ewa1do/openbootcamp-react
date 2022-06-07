import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingFunc from './components/pure/greetingFunc';
import TaskListComponent from './components/containers/taskList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Eduardo"></Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingFunc name='Eduardo'></GreetingFunc> */}

        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
