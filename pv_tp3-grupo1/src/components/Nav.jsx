import React from 'react';

const Nav = () => {
    return (
        <nav style={{ margin: '15px 0' }}>
            <ul style={{ 
                display: 'flex',           /* Los obliga a ponerse uno al lado del otro */
                justifyContent: 'center',  /* Centra todo el menú en la pantalla */
                gap: '30px',               /* Les da una buena separación entre ellos */
                listStyle: 'none',         /* CORREGIDO: Sin guion y con S mayúscula */
                padding: 0, 
                margin: 0 
            }}>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#00d2c4', fontWeight: 'bold' }}>
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#00d2c4', fontWeight: 'bold' }}>
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#00d2c4', fontWeight: 'bold' }}>
                        Detalles
                    </a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#00d2c4', fontWeight: 'bold' }}>
                        Perfil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;