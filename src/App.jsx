import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. IMPORTAMOS EL PROVIDER (El contexto global que creaste)
import { UsuarioProvider } from './context/UsuarioContext';

import Header from './components/Header';
import Nav from './components/Nav';
import ListaProyectos from './components/lista'; 
import ProyectoDetalle from './components/ProyectoDetalle'; 
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import './css/styles.css';

function App() {
  return (
    // 2. ENVOLVEMOS TODO CON EL PROVIDER
    <UsuarioProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/proyectos" element={<ListaProyectos />} />
              <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
              <Route path="/perfil" element={<PerfilUsuario />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UsuarioProvider>
  );
}

export default App;