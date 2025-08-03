import './Contato.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Contato</h2>
        <ul className="lista-contato">
          <li>
            <FaPhoneAlt className="icon" />
            <span>+258 844 479 683 / +258 861 178 419</span>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <span>lourencovasco696@gmail.com</span>
          </li>
          <li>
            <FaMapMarkerAlt className="icon" />
            <span>Ferroviário, Q.42 Casa nº18, Maputo</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
