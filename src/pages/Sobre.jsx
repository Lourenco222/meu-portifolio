import './Sobre.css';
import { FaUserGraduate, FaBriefcase, FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const Sobre = () => {
  const competencias = {
    linguagens: ['Java', 'Python', 'JavaScript', 'PHP', 'HTML/CSS'],
    frameworks: ['Spring Boot', 'FastAPI', 'React', 'React Native', 'Laravel', 'SQLAlchemy', 'Redux Toolkit', 'Hibernate', 'Bootstrap', 'Vite'],
    basesDeDados: ['PostgreSQL', 'MySQL', 'SQLite'],
    ferramentas: ['GitHub', 'GitLab', 'Trello', 'YouTrack']
  };

  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2>Sobre Mim</h2>

        <div className="perfil-profissional">
          <div className="box perfil-box">
            <div className="box-header">
              <FaBriefcase className="box-icon" />
              <h3>Perfil Profissional</h3>
            </div>
            <p>
              Estudante finalista de Informática de Sistemas com experiência no desenvolvimento de aplicações web e mobile utilizando Java, Python e JavaScript. Focado em backend engineering, APIs REST, autenticação, bases de dados relacionais e desenvolvimento full stack.
            </p>
          </div>

          <div className="box formacao-box">
            <div className="box-header">
              <FaUserGraduate className="box-icon" />
              <h3>Formação Académica</h3>
            </div>
            <div className="formacao-item">
              <h4>Instituto Superior de Comunicação e Imagem de Moçambique</h4>
              <p>Licenciando em Informática de Sistemas — 4º Ano (Presente)</p>
            </div>
          </div>
        </div>

        <div className="competencias">
          <div className="box">
            <div className="box-header">
              <FaCode className="box-icon" />
              <h3>Linguagens</h3>
            </div>
            <div className="tags">
              {competencias.linguagens.map((ling, i) => (
                <span key={i} className="tag">{ling}</span>
              ))}
            </div>
          </div>

          <div className="box">
            <div className="box-header">
              <FaTools className="box-icon" />
              <h3>Frameworks & Tecnologias</h3>
            </div>
            <div className="tags">
              {competencias.frameworks.map((framework, i) => (
                <span key={i} className="tag">{framework}</span>
              ))}
            </div>
          </div>

          <div className="box">
            <div className="box-header">
              <FaDatabase className="box-icon" />
              <h3>Bases de Dados</h3>
            </div>
            <div className="tags">
              {competencias.basesDeDados.map((db, i) => (
                <span key={i} className="tag">{db}</span>
              ))}
            </div>
          </div>

          <div className="box">
            <div className="box-header">
              <FaTools className="box-icon" />
              <h3>Ferramentas</h3>
            </div>
            <div className="tags">
              {competencias.ferramentas.map((ferramenta, i) => (
                <span key={i} className="tag">{ferramenta}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
