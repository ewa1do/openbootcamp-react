import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingFunc from './components/pure/greetingFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Eduardo"></Greeting> */}
        <GreetingFunc name="Eduardo"></GreetingFunc>
      </header>
    </div>
  );
}

export default App;
