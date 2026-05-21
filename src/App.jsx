import proyectoService from "./services/proyectoService";

function App() {

  const proyectos = proyectoService.obtenerProyectos();

  return (
    <div>
      <h1>Gestion de Proyectos Educativos</h1>

      {proyectos.map((proyecto) => (
        <div key={proyecto.id}>
          <h2>{proyecto.titulo}</h2>

          <p>
            <strong>Categoría:</strong> {proyecto.categoria}
          </p>

          <p>
            <strong>Estado:</strong> {proyecto.estado}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;