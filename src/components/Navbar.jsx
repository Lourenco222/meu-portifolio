import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import perfil from '../assets/img/perfil.jpeg';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

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
        <img src={perfil} alt="Lourenco Vasco Manhica" />
        <span className="logo-text">Lourenco Vasco</span>
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {['home', 'sobre', 'projetos', 'contato'].map((sec) => (
          <li key={sec} onClick={() => setMenuOpen(false)}>
            <Link
              to={sec}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </li>
        ))}
        <li className="theme-toggle-li">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
