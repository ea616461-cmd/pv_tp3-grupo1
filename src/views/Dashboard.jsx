import { Box, Container, Typography, Card, CardContent, Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Bienvenido al sistema de gestión de proyectos
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total de proyectos</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Proyectos en curso</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}