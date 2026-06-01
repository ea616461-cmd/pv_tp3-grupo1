import React, { useState } from 'react';

const FormularioProyecto = ({ onAgregarProyecto }) => {
    // Estado local para gestionar los datos del formulario (Requisito del TP)
    const [proyecto, setProyecto] = useState({
        nombre: '',
        descripcion: ''
    });

    // Función interna para capturar los cambios en los inputs (handleChange)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProyecto({
            ...proyecto,
            [name]: value
        });
    };

    // Función para manejar el envío de datos (submit)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación de campos obligatorios
        if (proyecto.nombre.trim() === '' || proyecto.descripcion.trim() === '') {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        // Elevación del Estado: enviamos el objeto al componente padre mediante callback
        onAgregarProyecto({
            id: Date.now(),
            ...proyecto
        });

        // Limpieza de los campos del formulario
        setProyecto({ nombre: '', descripcion: '' });
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
            <h3>Formulario de Alta de Proyecto</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Nombre del Proyecto:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={proyecto.nombre}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={proyecto.descripcion}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '60px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Guardar Proyecto
                </button>
            </form>
        </div>
    );
};

export default FormularioProyecto;