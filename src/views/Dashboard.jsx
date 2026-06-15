import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from "@mui/material";
import proyectoService from '../services/proyectoService.js';

export default function Dashboard() {
  const todosLosProyectos = proyectoService.obtenerProyectos();
  const totalProyectos = todosLosProyectos.length;
  const totalEnCurso = todosLosProyectos.filter(p => 
    p.estado === 'En progreso' || 
    p.estado === 'En curso' || 
    p.estado === 'Finalizado'
  ).length;
  const totalPendientes = todosLosProyectos.filter(p => 
    p.estado === 'Pendiente' || 
    p.estado === 'Pendiento' ||
    p.estado === 'Por empezar'
  ).length;

  return (
  
    <Container maxWidth="md">
      
      <Box sx={{ 
        mt: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%'
      }}>
        
        <Typography variant="h4" gutterBottom textAlign="center">
          Dashboard
        </Typography>

        <Typography variant="subtitle1" gutterBottom textAlign="center">
          Bienvenido al sistema de gestión de proyectos
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }} justifyContent="center">
          
          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: '#e3f2fd', boxShadow: 2, height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">Total de Proyectos</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                  {totalProyectos}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: '#fff3e0', boxShadow: 2, height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">Proyectos en Curso</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1, color: '#050504' }}>
                  {totalEnCurso}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: '#efebe9', boxShadow: 2, height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">Proyectos Pendientes</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                  {totalPendientes}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}