import logo from './logo.svg';
import './App.css';
import StatelessComponent from './components/StatelessComponent';
import StatefulComponent from './components/StatefulComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StatelessComponent nom="Jeanne"/>
        <StatefulComponent nom="Anthony"/>
      </header>
    </div>
  );
}

export default App;
