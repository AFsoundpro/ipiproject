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
        <h2><b>30 Años de Excelencia en Productos Plásticos</b></h2>
      </section>
        <hr />
      <section className="features-section">
        <div className='div-info'>
        <h2>EL SERVICIO ES NUESTRA PRIORIDAD</h2>
        <p><b> Con tres décadas de experiencia, nuestra trayectoria refleja un compromiso inquebrantable con la excelencia y la innovación, asegurando productos de calidad y soluciones personalizadas para cada necesidad.</b></p>
        <button>Button</button>
        </div>
        
        <div className='div-img'>
            
        </div>
      </section>
      <hr />
      <section className='features-section'>
        <div className='div-img2'>
            
        </div>
        
      <div className='div-info'>
        <h2>Conoce nuestros productos y servicios</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos illum corporis commodi natus inventore, nulla, temporibus quia expedita consequatur hic labore veniam nesciunt quos!</p>
        <button>Button</button>
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
                <h2>Contactanos y ha tu cotizacion personalmente</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam, suscipit numquam itaque vel optio excepturi, dolore temporibus adipisci pariatur quis saepe velit aut modi.</p>
            </div>
            <button>Button</button>
        </section>  
    </div>
    <br />
    <Contact />
    </main>
    
  );
};

export default Home;
