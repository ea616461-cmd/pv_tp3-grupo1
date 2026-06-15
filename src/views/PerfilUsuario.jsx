import React, { useContext, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  TextField, 
  MenuItem 
} from "@mui/material";

import { UsuarioContext } from '../context/UsuarioContext';

export default function PerfilUsuario() {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);
  const [formValues, setFormValues] = useState({ ...usuario });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    actualizarPerfil(formValues);
    setEditando(false);
  };

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este perfil?")) {
      console.log("Perfil eliminado");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#ffffff' }}>
          Perfil de Usuario
        </Typography>

        <Paper sx={{ 
          p: 4, 
          boxShadow: 5, 
          borderRadius: 3, 
          bgcolor: '#333333', 
          color: '#ffffff',
          border: '1px solid #2d8dd6',
          width: '100%'
        }}>
          {!editando ? (
            <Box>
              <Typography variant="h5" sx={{ color: '#2d8dd6', mb: 2, borderBottom: '1px solid #555', pb: 1, fontWeight: 'bold' }}>
                Información Personal
              </Typography>
              
              <List>
                <ListItem disableGutters>
                  <ListItemText 
                    primary={<Typography sx={{ color: '#2d8dd6', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Nombre</Typography>} 
                    secondary={<Typography sx={{ color: '#ffffff', mt: 0.5 }}>{usuario.nombre}</Typography>} 
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText 
                    primary={<Typography sx={{ color: '#2d8dd6', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>DNI / Legajo</Typography>} 
                    secondary={<Typography sx={{ color: '#ffffff', mt: 0.5 }}>{usuario.dni}</Typography>} 
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText 
                    primary={<Typography sx={{ color: '#2d8dd6', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Rol en el Sistema</Typography>} 
                    secondary={<Typography sx={{ color: '#ffffff', mt: 0.5 }}>{usuario.rol}</Typography>} 
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText 
                    primary={<Typography sx={{ color: '#2d8dd6', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Institución</Typography>} 
                    secondary={<Typography sx={{ color: '#ffffff', mt: 0.5 }}>{usuario.institucion}</Typography>} 
                  />
                </ListItem>
              </List>
              
              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={handleEliminar}
                  sx={{ 
                    bgcolor: '#d32f2f', 
                    color: '#ffffff',     
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#b71c1c' }
                  }}
                >
                  Eliminar Perfil
                </Button>

                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={() => { setFormValues({ ...usuario }); setEditando(true); }}
                  sx={{ 
                    color: '#2d8dd6', 
                    borderColor: '#2d8dd6', 
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#2d8dd6', color: '#ffffff', borderColor: '#2d8dd6' }
                  }}
                >
                  Editar Perfil
                </Button>
              </Box>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleGuardar} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Typography variant="h6" sx={{ color: '#2d8dd6', fontWeight: 'bold', borderBottom: '1px solid #555', pb: 1 }} gutterBottom>
                Modificar Información
              </Typography>

            
              <TextField
                label="Nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                fullWidth
                required
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#2d8dd6 !important' }, // Fuerza el azul por defecto
                  '& .MuiOutlinedInput-root': { 
                    '& fieldset': { borderColor: '#555' }, 
                    '&:hover fieldset': { borderColor: '#2d8dd6' }, 
                    '&.Mui-focused fieldset': { borderColor: '#2d8dd6' } 
                  },
                  '& .MuiInputBase-input': { color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' } 
                }}
              />

              <TextField
                label="DNI"
                name="dni"
                value={formValues.dni}
                onChange={handleChange}
                fullWidth
                required
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#2d8dd6 !important' }, // Fuerza el azul por defecto
                  '& .MuiOutlinedInput-root': { 
                    '& fieldset': { borderColor: '#555' }, 
                    '&:hover fieldset': { borderColor: '#2d8dd6' }, 
                    '&.Mui-focused fieldset': { borderColor: '#2d8dd6' } 
                  },
                  '& .MuiInputBase-input': { color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' } 
                }}
              />

              <TextField
                select
                label="Rol"
                name="rol"
                value={formValues.rol}
                onChange={handleChange}
                fullWidth
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#2d8dd6 !important' }, // Fuerza el azul por defecto
                  '& .MuiOutlinedInput-root': { 
                    '& fieldset': { borderColor: '#555' }, 
                    '&:hover fieldset': { borderColor: '#2d8dd6' }, 
                    '&.Mui-focused fieldset': { borderColor: '#2d8dd6' } 
                  },
                  '& .MuiSelect-select': { color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' } 
                }}
              >
                <MenuItem value="Alumno">Alumno</MenuItem>
                <MenuItem value="Docente">Docente</MenuItem>
              </TextField>
              <TextField
                label="Institución"
                name="institucion"
                value={formValues.institucion}
                onChange={handleChange}
                fullWidth
                required
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#2d8dd6 !important' }, // Fuerza el azul por defecto
                  '& .MuiOutlinedInput-root': { 
                    '& fieldset': { borderColor: '#555' }, 
                    '&:hover fieldset': { borderColor: '#2d8dd6' }, 
                    '&.Mui-focused fieldset': { borderColor: '#2d8dd6' } 
                  },
                  '& .MuiInputBase-input': { color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' } 
                }}
              />
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 1 }}>
                <Button 
                    variant="contained" 
                    onClick={() => setEditando(false)} 
                    sx={{ 
                        bgcolor: '#d32f2f', 
                        color: '#ffffff',     
                        fontWeight: 'bold', 
                        '&:hover': { bgcolor: '#b71c1c' } 
                    }}
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#2d8dd6', 
                    color: '#ffffff',   
                    fontWeight: 'bold', 
                    '&:hover': { bgcolor: '#1e6fa3' } 
                  }}
                >
                  Guardar
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}