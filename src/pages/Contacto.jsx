import './Contato.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Contato</h2>
        <ul className="lista-contato">
          <li>
            <FaMapMarkerAlt className="icon" />
            <span>Maputo, Moçambique</span>
          </li>
          <li>
            <FaPhoneAlt className="icon" />
            <span>+258 844 479 683</span>
          </li>
          <li>
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/258844479683" target="_blank" rel="noopener noreferrer">
              +258 844 479 683 (WhatsApp)
            </a>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <a href="mailto:lourencovasco696@gmail.com">
              lourencovasco696@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
