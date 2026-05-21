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
        return proyectos;
    };

    return {
        obtenerProyectos
    };

})();

export default proyectoService;