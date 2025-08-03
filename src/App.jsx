import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Projetos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
