import React from 'react';

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-lista">
                <li>
                    <a href="#" className="nav-link">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        Detalles
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        Perfil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;