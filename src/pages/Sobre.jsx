import './Sobre.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBirthdayCake, FaFlag, FaHome } from 'react-icons/fa';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2>Sobre Mim</h2>

        <div className="perfil">
          <div className="box dados-pessoais">
            <h3>👤 Dados Pessoais</h3>
            <ul>
              <li><FaFlag /> Nacionalidade: Moçambicana</li>
              <li><FaMapMarkerAlt /> Naturalidade: Maputo</li>
              <li><FaBirthdayCake /> Nascimento: 17/04/2004</li>
              <li><FaHome /> Residência: Ferroviário, Q.42 Casa nº18</li>
              <li><FaPhoneAlt /> Telefones: +258 844479683 / +258 861178419</li>
              <li><FaEnvelope /> Email: lourencovasco696@gmail.com</li>
            </ul>
          </div>

          <div className="box formacao">
            <h3>🎓 Formação Académica</h3>
            <ul>
              <li>Escola Secundária Eduardo Mondlane (2016–2021)</li>
              <li>Licenciando em Informática de Sistemas – ISICOM (4º ano)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
