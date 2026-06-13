import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import ListaProyectos from './components/lista'; 
import ProyectoDetalle from './components/ProyectoDetalle'; 
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import './css/styles.css';

//const Dashboard = () => <div style={{ padding: '20px' }}><h2>Dashboard (Inicio)</h2></div>;
//const Perfil = () => <div style={{ padding: '20px' }}><h2>Mi Perfil</h2></div>;

function App() {
  return (
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
  );
}

export default App;