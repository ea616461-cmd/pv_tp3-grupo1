import React, { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto global
export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  // Apartado de complejidad: Cargamos inicialmente desde LocalStorage si existe algo guardado
  const [usuario, setUsuario] = useState(() => {
    const datosLocales = localStorage.getItem('perfilUsuario');
    return datosLocales ? JSON.parse(datosLocales) : {
      nombre: "Hugo Gabriel Leaño",
      dni: "45253770",
      rol: "Alumno",
      institucion: "UNJu"
    };
  });

  // useEffect que "escuche" activamente los cambios para guardarlos en el almacenamiento local
  useEffect(() => {
    localStorage.setItem('perfilUsuario', JSON.stringify(usuario));
  }, [usuario]);

  // Función global para actualizar los datos desde la vista del formulario
  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};