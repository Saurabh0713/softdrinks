
import './App.css';
import OrangeJuice from './OrangeJuice';
import Navbar from './Navbar';
import Home from './Home';
import KiwiJuice from './KiwiJuice';
import NewAF from './NewAF';
import VarityJuices from './VarityJuices';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    <OrangeJuice></OrangeJuice>
    <KiwiJuice/>
    <VarityJuices/>
    {/* <NewAF/> */}
    </div>
  );
}

export default App;
