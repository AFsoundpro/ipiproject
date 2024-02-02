import React from "react";
import "./contact.css";
import logo from "/public/logo.png"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="main-contact">
                <div className="img-contact">
                    <img src={logo} alt="logo" />
                    <h2>Carrera 66a # 4D -55 <br /> Barrio Pradera <br /> Bogota, Colombia</h2>
                    <icon></icon>
                    <icon></icon>
                    <icon></icon>
                </div>
            <br />
            <div className="contact-contact">
                <h2>Contactanos</h2>
                <p>serviprecorte@gmail.com</p>
                <p>+57 (601) 4145830</p>
                <p></p>
            </div>
            <br />
            <div className="contact-products">
                <h3>Productos y servicios   </h3>
                <Link to="/productos">
                    <h3><b>CONOCE NUESTROS PRODUCTOS Y SERVICIOS</b></h3>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Contact