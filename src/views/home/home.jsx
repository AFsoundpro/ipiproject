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
        {/* <h2>Bienvenidos a I.P.I Serviprecorte Ltda</h2> */}
        <h2><b>30 Años de Excelencia en Productos Plásticos</b></h2>
      </section>
      <br />
      <section className="features-section">
        <div className='div-info'>
        <h2>EL SERVICIO ES NUESTRA PRIORIDAD</h2>
        <p><b> Con tres décadas de experiencia, nuestra trayectoria refleja un compromiso inquebrantable con la excelencia y la innovación, asegurando productos de calidad y soluciones personalizadas para cada necesidad.</b></p>
        <button>Button</button>
        </div>
        
        <div className='div-img'>
            
        </div>
      </section>
      <section className='features-section'>
        <div className='div-img2'>
            
        </div>
        
      <div className='div-info'>
        <h2>Conoce nuestros productos y servicios</h2>
        <p>En I.P.I Serviprecorte SAS, nos especializamos en la extrusión de bolsas y el precorte de polietileno de alta y baja densidad. Utilizamos tecnología avanzada para garantizar productos de la más alta calidad, adaptados a sus necesidades. Ofrecemos soluciones innovadoras y sostenibles para diversas aplicaciones industriales y comerciales. Contáctenos para más información.</p>
        <button>Button</button>
        </div>
        
      </section>
      <br />
      <br />
      <br />
      <br />
        <section className='sec-3'>
            <div className='circle-sec'>
                
            </div>
            <div>
                <h2>Contactanos y ha tu cotizacion personalmente</h2>
                <p> Descubra la calidad y precisión de nuestros servicios en I.P.I Serviprecorte SAS. Nos especializamos en prestarle asesoria y un excelente servicio, adaptándonos a sus necesidades específicas. ¡Solicite su cotización hoy mismo y permita que nuestros expertos le brinden soluciones innovadoras y eficientes para su negocio!</p>
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
