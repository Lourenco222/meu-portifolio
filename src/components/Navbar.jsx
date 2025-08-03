import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import perfil from '../assets/img/perfil.jpeg';


const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  // Ao iniciar, pega o tema salvo ou padrão
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navbar">
 <div className="logo">
  <img src={perfil} alt="Lourenco Vasco" />
</div>

      <ul className="nav-links">
        {['home','sobre','projetos','contacto'].map(sec => (
          <li key={sec}>
            <Link
              to={sec}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
        {theme === 'light' ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
