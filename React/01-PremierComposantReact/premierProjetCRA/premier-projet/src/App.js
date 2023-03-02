import logo from './logo.svg';
import './App.css';
import StatelessCompoment from './Components/StatelessCompoment';
import StatefulComponent from './Components/StatefulComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <StatelessCompoment nom = "jeanne"/>
       <StatefulComponent nom ="'moi'"/>

      </header>
    </div>
  );
}

export default App;
