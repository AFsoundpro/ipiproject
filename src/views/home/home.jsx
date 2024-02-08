// Home.js

import React from 'react';
import './home.css'; // Importa los estilos específicos del componente
import bodega from "../../../public/bodega.jpg"
import Contact from '../../components/contact/contact';

const Home = () => {
  return (
    <main>
        <br />
        <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenidos a I.P.I Serviprecorte Ltda</h1>
        <button>Boton 1</button>
        <button>Boton 2</button>
        <h2><b>30 Años de Excelencia en Productos Plásticos</b></h2>
      </section>
        <hr />
      <section className="features-section">
        <div className='div-info'>
        <h2>Características destacadas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos illum corporis commodi natus inventore, nulla, temporibus quia expedita consequatur hic labore veniam nesciunt quos!</p>
        </div>
        <hr />
        <div className='div-img'>
            <button>Button</button>
            <h2>Imagen</h2>
        </div>
      </section>
      <hr />
      <section className='features-section'>
        <div className='div-img'>
            <button>Button</button>
            <h2>Imagen</h2>
        </div>
        <hr />
      <div className='div-info'>
        <h2>Características destacadas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos illum corporis commodi natus inventore, nulla, temporibus quia expedita consequatur hic labore veniam nesciunt quos!</p>
        </div>  
      </section>
      <br />
      <hr />
      <br />
        <section className='sec-3'>
            <div className='circle-sec'>
                <h3>imagen</h3>
            </div>
            <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam, suscipit numquam itaque vel optio excepturi, dolore temporibus adipisci pariatur quis saepe velit aut modi.</p>
            </div>
            <button>Button</button>
        </section>  
    </div>
    <br />
    <Contact />
    <br />
    </main>
    
  );
};

export default Home;
