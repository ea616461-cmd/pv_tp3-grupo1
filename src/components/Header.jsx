import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
 
  const { usuario } = useContext(UsuarioContext);

  return (
    <AppBar position="static" color="primary" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Gestión de Proyectos Educativos
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="body1">
            Bienvenido, <strong>{usuario.nombre}</strong>
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ opacity: 0.8, borderLeft: '1px solid white', pl: 1 }}>
            {usuario.rol}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;