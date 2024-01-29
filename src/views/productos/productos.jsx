import React from "react";
import "./productos.css"
import Contact from "../../components/contact/contact";

function Productos() {
    return (
        <div className="productos-servicios-container">
      <h2>Nuestros Productos y Servicios</h2>
      <div className="cards-container">
        <div className="card">
          <img src="imagen1.jpg" alt="Producto 1" />
          <h3>Producto 1</h3>
          <p>Descripción del Producto 1.</p>
        </div>
        <div className="card">
          <img src="imagen2.jpg" alt="Producto 2" />
          <h3>Producto 2</h3>
          <p>Descripción del Producto 2.</p>
        </div>
        <div className="card">
          <img src="imagen3.jpg" alt="Producto 3" />
          <h3>Producto 3</h3>
          <p>Descripción del Producto 3.</p>
        </div>
        <div className="card">
          <img src="imagen4.jpg" alt="Producto 4" />
          <h3>Producto 4</h3>
          <p>Descripción del Producto 4.</p>
        </div>
        <div className="card">
          <img src="imagen5.jpg" alt="Producto 5" />
          <h3>Producto 5</h3>
          <p>Descripción del Producto 5.</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <Contact />
    </div>
    )
}

export default Productos