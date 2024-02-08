import React from "react";
import "./contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faAddressCard, faBoxesStacked, faPhone, faEnvelope, faBusinessTime} from '@fortawesome/free-solid-svg-icons'

function Contacto() {
    return (
        <main className='contacto'>
            <div className='img-container'>
                <h1>QUIENES SOMOS</h1>
                <div>
                    <button>Botón 1</button>
                    <button>Botón 2</button>
                </div>
            </div>
            <section className="main-contacto">
                <div className="contactanos">
                    <h2>CONTACTANOS</h2>
                    <div>
                        <h3><FontAwesomeIcon icon={faPhone} />Telefonos</h3>
                        
                            <li>Fijo: +57 (601) 414-58-30</li>
                            <li>Corporativo</li>
                        
                    </div>

                    <div>
                        <h2><FontAwesomeIcon icon={faEnvelope} />CORREO</h2>
                        <span>serviprecorte@gmail.com</span>
                    </div>
                    <div className="list">
                        <h2><FontAwesomeIcon icon={faBusinessTime} />HORARIO DE ATENCION</h2>
                        
                            <li>lunes - viernes 8am -5pm</li>
                            <li>Sabado 8am - 1pm</li>
                            <li>Domingo - Cerrado</li>
                        
                    </div>
                </div>
                
                <div className="main-form">
                    <h2>envia un mensaje</h2>
                    <p>El tiempo de respuesta es aproximadamente 24H aproximadamente</p>
                    <div>
                        <form action="#">
                            <input type="text" placeholder="Nombre"/>
                            <br />
                            <input type="text" placeholder="Numero de telefono"/>
                            <br />
                            <input type="text" placeholder="Correo electronic"/>
                            <br />
                            <input type="text" placeholder="Nombre de empresa"/>
                            <br />
                            <input type="text" placeholder="Ciudad"/>
                            <br />
                            <textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
                            <br />
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contacto;
