
import logo from '/img/M2ILOGO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-M2ILOGO" alt="M2ILOGO" />  
        
            <h2>M2i Formation</h2>
            <h3>votre formation sur mesur</h3>
        </div>
      </header>

      <body>
          <div>Left</div>
          <div>Center</div>
      </body>


      <footer>
        <h3>Ma premiere page perso gégérée par react - Copyright@2022 - Me contacter</h3>
      </footer>
    </div>
  );
}

export default App;