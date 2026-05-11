import './Projetos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    id: 1,
    nome: 'Plataforma de Serviços Técnicos',
    descricao: 'Desenvolvimento de plataforma de intermediação para serviços de reparação de eletrodomésticos, com autenticação JWT, sistema de ofertas, chat em tempo real, geolocalização e dashboards administrativos.',
    tecnologias: ['FastAPI', 'SQLAlchemy', 'React', 'Redux Toolkit', 'TypeScript', 'Leaflet'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    nome: 'App ChatGPT via SMS',
    descricao: 'Desenvolvimento de aplicação móvel capaz de receber mensagens SMS no dispositivo Android, processar automaticamente o conteúdo através da API da OpenAI e responder ao remetente por SMS sem necessidade de acesso direto à aplicação.',
    tecnologias: ['React Native', 'OpenAI API', 'Android'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    nome: 'Sistema de Denúncias',
    descricao: 'Sistema de gestão de denúncias com autenticação, gestão de estados, notificações por email e exportação de relatórios PDF/Excel.',
    tecnologias: ['Spring Boot', 'ZK Framework', 'PostgreSQL'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    nome: 'SAGA — Sistema de Gestão de Atletas',
    descricao: 'Sistema web para gestão de atletas com autenticação, dashboards estatísticos e operações CRUD completas.',
    tecnologias: ['Laravel', 'PHP', 'MySQL'],
    github: '',
    demo: '',
  },
];

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="grid-projetos">
          {projetos.map(({ id, nome, descricao, tecnologias, github, demo }) => (
            <article key={id} className="card-projeto">
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <div className="tecnologias">
                {tecnologias.map((tech, i) => (
                  <span key={i} className="tag-tech">{tech}</span>
                ))}
              </div>
              <div className="links">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={22} />
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
