import React, { useState, useEffect } from 'react'; // <-- CORREGIDO: Sumamos useEffect en el import
import proyectoService from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard'; 
import RegistroActividad from './RegistroActividad'; // <-- CORREGIDO: Importamos el componente de registro

const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [terminoBusqueda, setTerminoBusqueda] = useState(''); 
    
    // CORREGIDO: Declaramos el estado para que useEffect pueda guardar la fecha
    const [ultimaModificacion, setUltimaModificacion] = useState(null);

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

    useEffect(() => {
        setUltimaModificacion(new Date());
    }, [proyectos]);

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
                    <ProyectoCard 
                        key={proyecto.id} 
                        proyecto={proyecto} 
                        onEliminar={handleEliminar} 
                    />
                ))
            )}

            {/* CORREGIDO: Agregamos el componente visual abajo del todo como pide el TP */}
            <RegistroActividad ultimaModificacion={ultimaModificacion} />
        </section>
    );
};

export default ListaProyectos;