// BarraNavegacion.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../nav/nav.css"
import logo from "/public/logo.png"

const BarraNavegacion = () => {
  return (
    <nav>
        <img src={logo} alt="" />
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/productos">Productos & Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BarraNavegacion;
