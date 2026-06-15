import React from 'react';
const RegistroActividad = ({ ultimaModificacion }) => {
    const fechaFormateada = ultimaModificacion 
        ? new Date(ultimaModificacion).toLocaleTimeString() + ' - ' + new Date(ultimaModificacion).toLocaleDateString()
        : "Sin modificaciones recientes en esta sesión";

    return (
        <div className="registro-actividad" style={{
            marginTop: '30px',
            padding: '12px 20px',
            backgroundColor: '#1e1e1e',
            borderLeft: '4px solid #00d2c4',
            borderRadius: '0 8px 8px 0',
            color: '#aaa',
            fontSize: '14px'
        }}>
            <p style={{ margin: 0 }}>
                🔄 <strong>Última actualización del sistema:</strong> {fechaFormateada}
            </p>
        </div>
    );
};

export default RegistroActividad;