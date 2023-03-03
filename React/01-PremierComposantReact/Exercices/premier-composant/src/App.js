
import './App.css';
import CenterComposant from './Components/centerComposant';
import DescriptionComposant from './Components/centerComposant';
import FooterComposant from './Components/footerComposant';
import HeaderComposant from './Components/headerComposant';
import LeftComposant from './Components/leftComposant';
import RightComposant from './Components/rightComposant';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <HeaderComposant/>
      <DescriptionComposant/>
      </header>
      <div>
      <LeftComposant/>
      <CenterComposant/>
      <RightComposant/>
      <FooterComposant/>
      
      </div>  
    
    </div>
  );
}

export default App;
