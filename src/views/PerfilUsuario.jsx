import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

export default function PerfilUsuario() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>

        <Paper sx={{ p: 3 }}>
          <List>
            <ListItem>
              <ListItemText primary="Nombre" secondary="Juan Pérez" />
            </ListItem>

            <ListItem>
              <ListItemText primary="Rol" secondary="Estudiante" />
            </ListItem>

            <ListItem>
              <ListItemText primary="Institución" secondary="Universidad X" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
}