import { createContext, useState } from 'react';
export const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Walter Avilé",
    dni: "12345678",
    rol: "Alumno", 
    institucion: "UNJU - Facultad de Ingeniería"
  });

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};