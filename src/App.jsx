import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/home/home';
import Nosotros from './views/nosotros/nosotros';
import Productos from './views/productos/productos';
import Contacto from './views/contacto/contacto';
import BarraNavegacion from './components/nav/nav';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <BarraNavegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
