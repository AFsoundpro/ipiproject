import React from "react";
import "./productos.css"
import Contact from "../../components/contact/contact";
import extru from "/extrusion.png"
import polie from "/polie.jpg"
import precorte from "/precorte.jpg"
import invernadero from "/invernadero.jpg"
import transparente from "/transparente.jpg"
import negro2 from "/negro2.jpg"
import p1 from "/p1.webp"
import ensilar from "/encilar.jpg"
import preco from "/preco.webp"
import perf from "/perf.webp"

function Productos() {
    return (
        <div className="productos-servicios-container">
      <h1>Nuestros Servicios</h1>
      <div className="cards-container">
        <div className="card">
          <img src={preco} alt="Producto 1" />
          <h3>Precorte</h3>
          <p><b>En rollos de alta y baja densidad, impresion centrada o continua y especiales</b></p>
          <p><b>Cubre vestidos para lavanderia, laminas en polietileno y polipropileno</b></p>
        </div>
        
        <div className="card">
          <img src={perf} alt="Producto 3" />
          <h3>Servicio de perforado</h3>
          <p><b>En rollos de precorte, lamina y polipropileno para empaque de frutas o flores.</b></p>
        </div>
        <div className="card">
          <img src={p1} alt="Producto 4" />
          <h3>Precorte desde:</h3>
          <p><b>ANCHO:</b> 1/2" pulgadas (4cms) a 63" (160cms) en plano. Si desea mas ancho puede incluir fuelles.</p>
          <p><b>LARGO:</b> 2 1/2" (6cms) hasta donde desee el cliente</p>
        </div>
        <div className="card">
          <img src={extru} alt="Producto 5" />
          <h3>Servicio de Extrusion de plastico</h3>
          <p>La extrusión de rollos plásticos es un proceso de fabricación que implica la creación de películas plásticas continuas mediante la extrusión de material plástico a través de una boquilla.</p>
        </div>
      </div>
      <hr />
      <h1>Nuestros Productos</h1>
      <div className="cards-container">
        <div className="card">
          <img src={transparente} alt="Producto 1" />
          <h3>Rollos Tubulares</h3>
          <p>Es un formato de suministro de bolsas plásticas que está dispuesto en forma de un rollo continuo y tubular es decir no esta precortado</p>
        </div>
        <div className="card">
          <img src={precorte} alt="Producto 2" />
          <h3>Rollos precortados</h3>
          <p>Rollos precortados para empaque de carnes, granos, verduras, frutas; si es requerido se pueden perforar</p>
        </div>
        <div className="card">
          <img src={ensilar} alt="Producto 3" />
          <h3>Rollos para ensilar </h3>
          <p>El proceso de ensilaje implica compactar el forraje recién cosechado en la bolsa de plástico, eliminando el oxígeno y creando un entorno anaeróbico que promueve la fermentación beneficiosa.</p>
        </div>
        <div className="card">
          <img src={invernadero} alt="Producto 4" />
          <h3>Bolsas para vivero e invernadero</h3>
          <p>
            <li><b>Cubiertas de invernadero</b></li>
            <li><b>Bolsas para cultivo de plantas y semilleros</b></li>
            <li><b>Mantas o Mantillos</b> para cubrir el suelo alrededor de las plantas. </li>
            <li><b>Protección Contra Plagas</b></li>
            <li><b>Control de Malezas</b></li>
          </p>
        </div>
        <div className="card">
          <img src={negro2} alt="Producto 5" />
          <h3>Rollos de bolsa para basura</h3>
          <p>Los rollos para basura son bolsas de plástico que generalmente se presentan en un rollo continuo y son diseñadas para contener y transportar residuos sólidos. <b>Se venden unidades por mil bolsas en adelante.</b></p>
        </div>
        <div className="card">
          <img src={polie} alt="Producto 5" />
          <h3>Venta de materias primas plasticas</h3>
          <p>
            <li><b>Polietileno</b></li>
            <li><b>Polipropileno</b></li>
            <li><b>Pigmentos</b></li>
            <li><b>PET</b></li>
          </p>
          <p></p>
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