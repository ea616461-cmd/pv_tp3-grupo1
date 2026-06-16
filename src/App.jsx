import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ListaProyectos from './components/lista';
import Footer from './components/Footer';
import './css/styles.css';

// IMPORTAMOS TU CONTEXTO Y TU PANTALLA DE PERFIL
import { UsuarioProvider } from './context/UsuarioContext';
import PerfilUsuario from './components/PerfilUsuario';

function App() {
  return (
    <UsuarioProvider>
      <div className="app-container">
        <Header />
        <Nav />
        <main>
          <ListaProyectos />
          
          {/* SE RENDERIZA TU PUNT0 3 ABAJO DE LA LISTA */}
          <PerfilUsuario />
        </main>
        <Footer />
      </div>
    </UsuarioProvider>
  );
}

export default App;