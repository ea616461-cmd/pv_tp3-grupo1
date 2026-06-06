import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { proyectoService } from '../services/proyectoService'; 

export const DetalleProyecto = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    if (proyectoService && typeof proyectoService.getById === 'function') {
      const datosProyecto = proyectoService.getById(id);
      setProyecto(datosProyecto);
    }
  }, [id]);

  if (!proyecto) {
    return (
      <div className="container mt-4">
        <h3>Cargando detalles del proyecto...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2>{proyecto.nombre}</h2>
        <p className="text-muted">ID del Proyecto: {id}</p>
        <hr />
        
        <h5>Descripción</h5>
        <p>{proyecto.descripcion}</p>
        
        <h5 className="mt-4">Integrantes del Grupo</h5>
        <ul>
          {proyecto.integrantes && proyecto.integrantes.map((integrante, index) => (
            <li key={index}>{integrante}</li>
          ))}
        </ul>

        <div className="mt-4">
          <Link to="/proyectos" className="btn btn-primary">
            Volver a la Lista
          </Link>
        </div>
      </div>
    </div>
  );
};