import React from 'react';
const ProyectoDetalle = ({ proyecto }) => {
    
    if (!proyecto) {
        return <p className="aviso-detalle">Selecciona un proyecto para ver su detalle.</p>;
    }

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

    return (
        <div className="proyecto-detalle" style={{ border: '1px solid #00d2c4', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <h2>{titulo}</h2>
            <p><strong>Categoría:</strong> {categoria} | <strong>Estado:</strong> {estado}</p>
            
            <hr style={{ borderColor: '#333' }} />

            {/* Descripción extendida (mínimo dos párrafos) */}
            <section className="detalle-descripcion">
                <h3>Descripción del Proyecto</h3>
                {descripcion ? (
                    descripcion.split('\n\n').map((parrafo, index) => (
                        <p key={index}>{parrafo}</p>
                    ))
                ) : (
                    <p>No hay descripción disponible.</p>
                )}
            </section>

            {/* Lista de recursos */}
            <section className="detalle-recursos" style={{ marginTop: '15px' }}>
                <h3>Recursos Disponibles</h3>
                {recursos ? (
                    <ul>
                        <li>📄 <a href={recursos.pdf} target="_blank" rel="noreferrer">Documentación PDF</a></li>
                        <li>📁 <a href={recursos.drive} target="_blank" rel="noreferrer">Carpeta de Google Drive</a></li>
                        <li>💻 <a href={recursos.github} target="_blank" rel="noreferrer">Repositorio de GitHub</a></li>
                    </ul>
                ) : (
                    <p>No se cargaron recursos.</p>
                )}
            </section>

            {/* Sección de Equipo con nombres y roles */}
            <section className="detalle-equipo" style={{ marginTop: '15px' }}>
                <h3>Equipo de Trabajo</h3>
                {equipo && equipo.length > 0 ? (
                    <ul>
                        {equipo.map((miembro, index) => (
                            <li key={index}>
                                <strong>{miembro.nombre}</strong> - <span>{miembro.rol}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay miembros asignados.</p>
                )}
            </section>
        </div>
    );
};

export default ProyectoDetalle;