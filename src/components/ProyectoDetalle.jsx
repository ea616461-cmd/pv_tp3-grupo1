import React from 'react';
import { useParams } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const proyectosMock = [
    {
        id: 1,
        titulo: "Sistema de Biblioteca",
        categoria: "Educación",
        estado: "En progreso",
        descripcion: "Este proyecto consiste en el desarrollo de un sistema web integral para la gestión y administración de préstamos, inventarios y usuarios de la biblioteca institucional.\n\nPermite optimizar los tiempos de búsqueda, automatizar las alertas de devoluciones atrasadas y ofrecer un catálogo en línea accesible para todos los estudiantes.",
        recursos: { pdf: "#", drive: "#", github: "#" },
        equipo: [{ nombre: "Walter Avilés", rol: "Desarrollador" }, { nombre: "Gabriel", rol: "Compañero" }]
    },
    {
        id: 2,
        titulo: "Plataforma E-learning",
        categoria: "Tecnología",
        estado: "Finalizado",
        descripcion: "Una plataforma educativa diseñada para la distribución de cursos virtuales, exámenes en línea y seguimiento del progreso de los alumnos de manera remota.\n\nCuenta con un panel de administración robusto para docentes y una interfaz intuitiva y adaptable para dispositivos móviles.",
        recursos: { pdf: "#", drive: "#", github: "#" },
        equipo: [{ nombre: "Facundo", rol: "Desarrollador" }]
    },
    {
        id: 3,
        titulo: "Gestión Escolar",
        categoria: "Administración",
        estado: "Pendiente",
        descripcion: "Aplicación orientada a la digitalización de legajos escolares, asistencias, calificaciones y reportes de rendimiento para instituciones de nivel medio.\n\nBusca centralizar la información administrativa en un entorno seguro y de rápido acceso para directivos y secretarios.",
        recursos: { pdf: "#", drive: "#", github: "#" },
        equipo: [{ nombre: "Gabriel", rol: "Desarrollador" }]
    },
    {
        id: 4,
        titulo: "Gestión Escolar",
        categoria: "Administración",
        estado: "Pendiente",
        descripcion: "Aplicación orientada a la digitalización de legajos escolares, asistencias, calificaciones y reportes de rendimiento para instituciones de nivel medio.\n\nBusca centralizar la información administrativa en un entorno seguro, optimizando los tiempos de carga para el cuerpo docente y garantizando un acceso rápido y seguro a los directivos.",
        recursos: { pdf: "#", drive: "#", github: "#" },
        equipo: [{ nombre: "Agustin", rol: "Desarrollador" }]
    },
    {
        id: 5,
        titulo: "Portal Universitario",
        categoria: "Institucional",
        estado: "En progreso",
        descripcion: "Diseño y desarrollo de una plataforma web centralizada para la comunidad académica de la Facultad de Ingeniería de la UNJU. El portal permite el acceso rápido al calendario académico, la consulta de planes de estudio y la descarga de documentación oficial.\n\nEl sistema cuenta con un diseño web responsivo y optimizado en modo oscuro, facilitando la navegación interna y la autogestión de trámites tanto para estudiantes avanzados como para ingresantes.",
        recursos: { pdf: "#", drive: "#", github: "#" },
        equipo: [{ nombre: "Walter Avilés", rol: "Desarrollador" }, { nombre: "Gabriel", rol: "Desarrollador" }]
    }
];

const ProyectoDetalle = ({ proyecto: proyectoProp }) => {
    const { id } = useParams();
    const proyecto = proyectoProp || proyectosMock.find(p => p.id === parseInt(id));
    
    if (!proyecto) {
        return (
            <p className="aviso-detalle" style={{ color: '#ffffff', textAlign: 'center', marginTop: '20px' }}>
                Selecciona un proyecto para ver su detalle o el proyecto no existe.
            </p>
        );
    }

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

    return (
        <div className="proyecto-detalle" style={{ 
            border: '1px solid #2d8dd6', 
            backgroundColor: '#333333',   
            color: '#ffffff',             
            padding: '25px', 
            borderRadius: '12px', 
            marginTop: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#ffffff', marginBottom: '10px' }}>{titulo}</h2>
            <p style={{ color: '#cccccc' }}>
                <strong style={{ color: '#2d8dd6' }}>Categoría:</strong> {categoria} | <strong style={{ color: '#2d8dd6' }}>Estado:</strong> {estado}
            </p>
            
            <hr style={{ borderColor: '#555', margin: '20px 0' }} />

            <section className="detalle-descripcion" style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#2d8dd6', marginBottom: '10px', fontWeight: 'bold' }}>Descripción del Proyecto</h3>
                {descripcion ? (
                    descripcion.split('\n\n').map((parrafo, index) => (
                        <p key={index} style={{ lineHeight: '1.6', marginBottom: '10px' }}>{parrafo}</p>
                    ))
                ) : (
                    <p style={{ color: '#aaa' }}>No hay descripción disponible.</p>
                )}
            </section>

            <section className="detalle-recursos" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: '#2d8dd6', marginBottom: '10px', fontWeight: 'bold' }}>Recursos Disponibles</h3>
                {recursos ? (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            📄 
                            <MuiLink 
                                href={recursos.pdf} 
                                target="_blank" 
                                rel="noreferrer"
                                underline="hover"
                                sx={{ color: '#2d8dd6', fontWeight: 'bold', '&:hover': { color: '#1e6fa3' } }}
                            >
                                Documentación PDF
                            </MuiLink>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            📁 
                            <MuiLink 
                                href={recursos.drive} 
                                target="_blank" 
                                rel="noreferrer"
                                underline="hover"
                                sx={{ color: '#2d8dd6', fontWeight: 'bold', '&:hover': { color: '#1e6fa3' } }}
                            >
                                Carpeta de Google Drive
                            </MuiLink>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            💻 
                            <MuiLink 
                                href={recursos.github} 
                                target="_blank" 
                                rel="noreferrer"
                                underline="hover"
                                sx={{ color: '#2d8dd6', fontWeight: 'bold', '&:hover': { color: '#1e6fa3' } }}
                            >
                                Repositorio de GitHub
                            </MuiLink>
                        </li>
                    </ul>
                ) : (
                    <p style={{ color: '#aaa' }}>No se cargaron recursos.</p>
                )}
            </section>

            <section className="detalle-equipo" style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: '#2d8dd6', marginBottom: '10px', fontWeight: 'bold' }}>Equipo de Trabajo</h3>
                {equipo && equipo.length > 0 ? (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.6' }}>
                        {equipo.map((miembro, index) => (
                            <li key={index} style={{ marginBottom: '5px' }}>
                                <strong style={{ color: '#ffffff' }}>{miembro.nombre}</strong> - <span style={{ color: '#cccccc' }}>{miembro.rol}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ color: '#aaa' }}>No hay miembros asignados.</p>
                )}
            </section>
        </div>
    );
};

export default ProyectoDetalle;