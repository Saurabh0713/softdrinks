
import './App.css';
import OrangeJuice from './OrangeJuice';
import Navbar from './Navbar';
import Home from './Home';
import KiwiJuice from './KiwiJuice';
import NewAF from './NewAF';
import VarityJuices from './VarityJuices';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    <OrangeJuice></OrangeJuice>
    <KiwiJuice/>
    <VarityJuices/>
    <NewAF/>
    <Footer/>
    </div>
  );
}

export default App;
