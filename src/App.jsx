import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contacto from './pages/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Projetos />
      <Contacto />
    </>
  );
}

export default App;
