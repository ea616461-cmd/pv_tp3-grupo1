import React, { useState } from 'react';
import proyectoService from '../services/proyectoService.js';
const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [terminoBusqueda, setTerminoBusqueda] = useState(''); 
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id); 
        setProyectos(proyectoService.obtenerProyectos()); 
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setTerminoBusqueda(texto); 
        
        if (texto.trim() === '') {
            setProyectos(proyectoService.obtenerProyectos()); 
        } else {
            const filtrados = proyectoService.buscarProyecto(texto); 
            setProyectos(filtrados);
        }
    };

    return (
        <section className="contenedor-proyectos">
            <h2>Nuestros Proyectos</h2>

            
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="buscador">Buscar proyecto: </label>
                <input 
                    id="buscador"
                    type="text" 
                    placeholder="Escribe el título..." 
                    value={terminoBusqueda}
                    onChange={handleBuscar} 
                    style={{ padding: '6px', width: '250px' }}
                />
            </div>

           
            {proyectos.length === 0 ? (
                <p>No se encontraron proyectos.</p>
            ) : (
                proyectos.map((proyecto) => (
                    <article key={proyecto.id} className="proyecto-card" style={{ borderBottom: '1px solid #555', padding: '15px 0' }}>
                        <div className="contenido">
                            <h3>{proyecto.titulo}</h3>
                            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
                            <p><strong>Estado:</strong> {proyecto.estado}</p>
                            
                            <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
                                <a href="#" onClick={(e) => e.preventDefault()}>Ver detalle</a>
                                
                                
                                <button 
                                    onClick={() => handleEliminar(proyecto.id)}
                                    style={{ backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '3px' }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </article>
                ))
            )}
        </section>
    );
};

export default ListaProyectos;