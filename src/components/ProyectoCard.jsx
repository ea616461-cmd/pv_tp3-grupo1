import React from 'react';
import { Link } from 'react-router-dom';
const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    return (
        <article className="proyecto-card">
            <h3>{titulo}</h3>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
            
            <div className="botones-card">
                <Link to={`/proyectos/${id}`} className="btn-detalle">Ver detalle</Link>
                
                {/* CORREGIDO: Le agregamos el evento onClick para que ejecute la función usando el ID */}
                <button 
                    className="btn-eliminar" 
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default ProyectoCard;