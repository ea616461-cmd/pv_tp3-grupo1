import React, { useContext, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);
  const [formulario, setFormulario] = useState({ ...usuario });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    actualizarPerfil(formulario);
    setEditando(false);
  };

  const cardEstilo = {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '450px',
    margin: '30px auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const inputEstilo = {
    width: '100%',
    padding: '10px',
    marginTop: '6px',
    marginBottom: '14px',
    backgroundColor: '#2d2d2d',
    border: '1px solid #444',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const botonEditarEstilo = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={cardEstilo}>
      <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: '20px', color: '#007acc' }}>
        Perfil de Usuario
      </h2>

      {!editando ? (
        <div>
          <div style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>DNI:</strong> {usuario.dni}</p>
            <p><strong>Rol:</strong> {usuario.rol}</p>
            <p><strong>Institución:</strong> {usuario.institucion}</p>
          </div>
          <button type="button" onClick={() => setEditando(true)} style={botonEditarEstilo}>
            Editar Perfil
          </button>
        </div>
      ) : (
        <form onSubmit={handleGuardar}>
          <label style={{ fontSize: '13px', color: '#aaa' }}>Nombre Completo:
            <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} style={inputEstilo} required />
          </label>
          
          <label style={{ fontSize: '13px', color: '#aaa' }}>DNI:
            <input type="text" name="dni" value={formulario.dni} onChange={handleChange} style={inputEstilo} required />
          </label>
          
          <label style={{ fontSize: '13px', color: '#aaa' }}>Rol:
            <select name="rol" value={formulario.rol} onChange={handleChange} style={inputEstilo}>
              <option value="Alumno">Alumno</option>
              <option value="Docente">Docente</option>
            </select>
          </label>
          
          <label style={{ fontSize: '13px', color: '#aaa' }}>Institución:
            <input type="text" name="institucion" value={formulario.institucion} onChange={handleChange} style={inputEstilo} required />
          </label>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={{ ...botonEditarEstilo, backgroundColor: '#28a745' }}>
              Guardar Cambios
            </button>
            <button type="button" onClick={() => setEditando(false)} style={{ ...botonEditarEstilo, backgroundColor: '#dc3545' }}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PerfilUsuario;