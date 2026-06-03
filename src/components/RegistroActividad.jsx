import React from 'react';

const RegistroActividad = ({ ultimaModificacion }) => {
    
    // FUNCION para el formato del mensaje
    const obtenerMensajeFormateado = (fechaObjeto) => {
        if (!fechaObjeto) return "Sin modificaciones recientes en esta sesión";
        const fecha = new Date(fechaObjeto);
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const anio = fecha.getFullYear();
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        // Formato exacto pedido por la consigna
        return `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
    };
    const fechaFormateada = obtenerMensajeFormateado(ultimaModificacion);

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
            {/* Dejamos que tu función controle todo el string */}
            <p style={{ margin: 0 }}>
                🔄 {fechaFormateada}
            </p>
        </div>
    );
};

export default RegistroActividad;