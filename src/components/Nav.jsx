import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-lista">
        <li>
          <Link to="/dashboard" className="nav-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/proyectos" className="nav-link">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/perfil" className="nav-link">
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;