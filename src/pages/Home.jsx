import { FaCode, FaLaptopCode } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h1 className="fade-in">
          Olá, eu sou <span>Lourenco Vasco</span> <FaCode className="icon" />
        </h1>
        <h2 className="fade-in delay-1">Desenvolvedor Full Stack <FaLaptopCode className="icon" /></h2>
        <p className="fade-in delay-2">
          Estudante finalista de Informática de Sistemas, apaixonado por tecnologia e construção de soluções digitais. 
          Tenho experiência prática com Java, React, Laravel, Spring Boot e muito mais.
        </p>

      </div>
    </section>
  );
};

export default Home;
