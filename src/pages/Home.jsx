import { FaCode, FaLaptopCode, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="fade-in">
          Olá, eu sou <span>Lourenco Vasco Manhica</span> <FaCode className="icon" />
        </h1>
        <h2 className="fade-in delay-1">Backend & Full Stack Developer <FaLaptopCode className="icon" /></h2>
        <p className="fade-in delay-2">
          Estudante finalista de Informática de Sistemas com experiência no desenvolvimento de aplicações web e mobile utilizando Java, Python e JavaScript. Focado em backend engineering, APIs REST, autenticação, bases de dados relacionais e desenvolvimento full stack.
        </p>
        <div className="fade-in delay-3">
          <Link to="sobre" spy={true} smooth={true} offset={-70} duration={500} className="btn-primary">
            Conheça mais <FaArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
