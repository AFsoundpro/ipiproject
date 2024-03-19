// BarraNavegacion.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../nav/nav.css"
import logo from "/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faAddressCard, faBoxesStacked, faPhone} from '@fortawesome/free-solid-svg-icons'

const BarraNavegacion = () => {
  return (
    <nav>
      
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
        
      
      <ul>
        <li>  
          <Link to="/"><FontAwesomeIcon icon={faHouse} />Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros"><FontAwesomeIcon icon={faAddressCard} />Nosotros</Link>
        </li>
        <li>
          <Link to="/productos"><FontAwesomeIcon icon={faBoxesStacked} />Productos & Servicios</Link>
        </li>
        <li>
          <Link to="/contacto"><FontAwesomeIcon icon={faPhone} />Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BarraNavegacion;
