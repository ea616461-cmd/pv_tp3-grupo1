const proyectoService = (() => {

    let proyectos = [
        {
            id: 1,
            titulo: "Sistema de Biblioteca",
            categoria: "Educación",
            estado: "En progreso"
        },
        {
            id: 2,
            titulo: "Plataforma E-learning",
            categoria: "Tecnología",
            estado: "Finalizado"
        },
        {
            id: 3,
            titulo: "Gestión Escolar",
            categoria: "Administración",
            estado: "Pendiente"
        },
        {
            id: 4,
            titulo: "App de Cursos",
            categoria: "Educación",
            estado: "En progreso"
        },
        {
            id: 5,
            titulo: "Portal Universitario",
            categoria: "Web",
            estado: "Finalizado"
        }
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const agregarProyecto = (nuevoProyecto) => {
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => 
            proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();
export default proyectoService;