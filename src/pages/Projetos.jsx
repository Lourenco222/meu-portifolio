import './Projetos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    id: 1,
    nome: 'Sistema de Gestão de Atletas (SAGA)',
    descricao: 'Sistema web para gerenciar dados e performance de atletas, com autenticação, CRUD e relatórios.',
    tecnologias: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/seuusuario/saga',
    demo: '',
  },
  {
    id: 2,
    nome: 'App ChatGPT via SMS',
    descricao: 'Aplicativo mobile que permite interação com ChatGPT via mensagens SMS.',
    tecnologias: ['React Native', 'Node.js', 'Twilio API'],
    github: 'https://github.com/seuusuario/chatgpt-sms',
    demo: '',
  },
  {
    id: 3,
    nome: 'Sistema de Denúncias',
    descricao: 'Plataforma para registo e gestão de denúncias com fluxos completos e notificações via e-mail.',
    tecnologias: ['Spring Boot', 'ZK Framework', 'PostgreSQL'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    nome: 'Lista de Produtos',
    descricao: 'Aplicação web para listagem e filtragem de produtos, integrada com MockAPI e deploy na Vercel.',
    tecnologias: ['React', 'MockAPI', 'Vercel'],
    github: 'https://github.com/seuusuario/lista-produtos',
    demo: 'https://seusite.vercel.app',
  },
  {
    id: 5,
    nome: 'Sistema Acadêmico Faculdade',
    descricao: 'Projeto acadêmico desenvolvido em Laravel e MySQL para gestão de dados acadêmicos.',
    tecnologias: ['Laravel', 'MySQL', 'PHP'],
    github: '',
    demo: '',
  },
  {
    id: 6,
    nome: 'Portfólio React + Vite',
    descricao: 'Site pessoal para apresentar projetos, habilidades e contato, com design moderno e responsivo.',
    tecnologias: ['React', 'Vite', 'CSS Modules'],
    github: 'https://github.com/seuusuario/portfolio-react',
    demo: 'https://seusite.netlify.app',
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
                    <FaGithub size={20} />
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <FaExternalLinkAlt size={18} />
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
