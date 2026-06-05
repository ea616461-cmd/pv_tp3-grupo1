import React, { useState, useEffect, useRef } from 'react'; // <-- CORREGIDO: Sumamos useEffect en el import
import proyectoService from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard'; 
import RegistroActividad from './RegistroActividad'; // <-- CORREGIDO: Importamos el componente de registro
import FormularioProyecto from './FormularioProyecto';
const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [terminoBusqueda, setTerminoBusqueda] = useState(''); 
    
    // CORREGIDO: Declaramos el estado para que useEffect pueda guardar la fecha
    const [ultimaModificacion, setUltimaModificacion] = useState(null);
    const primeraCarga = useRef(true);
    const cambioReal = useRef(false);

    const handleEliminar = (id) => {
        cambioReal.current = true;
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
    if (primeraCarga.current) {
        primeraCarga.current = false;
        return;
    }

    if (!cambioReal.current) {
        return;
    }
        setUltimaModificacion(new Date());
        cambioReal.current = false;
    }, [proyectos]);

    return (
        <section className="contenedor-proyectos">
            <h2>Nuestros Proyectos</h2>
            <FormularioProyecto onAgregarProyecto={(nuevoProyecto) => {
    proyectoService.guardarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
}} />

            <div className="buscador-container">
                <label htmlFor="buscador">Buscar proyecto: </label>
                <input 
                    id="buscador"
                    type="text" 
                    placeholder="Escribe el título..." 
                    value={terminoBusqueda}
                    onChange={handleBuscar} 
                    className="buscador-input"
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
            {ultimaModificacion && (<RegistroActividad ultimaModificacion={ultimaModificacion} />)}
        </section>
    );
};

export default ListaProyectos;