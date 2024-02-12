import React from "react";
import "./contact.css";
import logo from "/public/logo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faAddressCard, faBoxesStacked, faPhone, faEnvelope, faBusinessTime, faPeopleCarryBox} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="main-contact">
                <div className="img-contact">
                    <img src={logo} alt="logo" />
                    <h3><FontAwesomeIcon icon={faBusinessTime} />Carrera 66a # 4D -55 <br /> Barrio Pradera <br /> Bogota, Colombia</h3>
                    <icon></icon>
                    <icon></icon>
                    <icon></icon>
                </div>
            <br />
            <div className="contact-contact">
                <h2>Contactanos</h2>
                <p><FontAwesomeIcon icon={faEnvelope} />serviprecorte@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} />+57 (601) 4145830</p>
                <p></p>
            </div>
            <br />
            <div className="contact-products">
                <h3>Productos y servicios   </h3>
                <Link to="/productos">
                    <h3><b>CONOCE NUESTROS PRODUCTOS Y SERVICIOS</b></h3>
                    <icon><FontAwesomeIcon icon={faPeopleCarryBox} /></icon>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Contact