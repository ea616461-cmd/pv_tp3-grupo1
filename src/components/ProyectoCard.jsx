import React from 'react';
import { Link } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    
    return (
        <article className="proyecto-card">
            <h3>{titulo}</h3>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
            
            {/* Con justify-content: center centramos los dos botones en medio de la tarjeta */}
            <div className="botones-card" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '15px', 
                marginTop: '20px',
                width: '100%'
            }}>
                {/* Link de detalle adaptado a tu azul */}
                <Link 
                    to={`/proyectos/${id}`} 
                    className="btn-detalle"
                    style={{ 
                        color: '#2d8dd6', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        border: '1px solid #2d8dd6',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        display: 'inline-block'
                    }}
                >
                    Ver detalle
                </Link>
                
                {/* Botón eliminar adaptado a rojo con letras blancas */}
                <button 
                    className="btn-eliminar" 
                    onClick={() => onEliminar(id)}
                    style={{
                        backgroundColor: '#d32f2f',
                        color: '#ffffff',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default ProyectoCard;