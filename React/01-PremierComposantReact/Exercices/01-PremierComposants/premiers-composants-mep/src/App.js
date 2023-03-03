import Headers from './components/Header';
import Description from './components/Description';
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      {/* Banniere */}
      <div className="banner">
        <Headers />
        <div className="description">
          <Description />
        </div>
      </div>
      {/* Partie Centrale */}
      <div className="row">
        <div className="col-2 left">
          <Left />
        </div>
        <div className="col-8 center">
          <Center />
        </div>
        <div className="col-2 right">
          <Right />
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
