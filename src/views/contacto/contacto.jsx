import React from "react";

function Contacto() {
    return (
        <main className='home'>
            <div className='img-container'>
                <h1>QUIENES SOMOS</h1>
                <div>
                    <button>Botón 1</button>
                    <button>Botón 2</button>
                </div>
            </div>
            <section>
                <div>
                    <h2>CONTACTANOS</h2>
                    <div>
                        <h3>Telefonos</h3>
                        <ul>
                            <li>fijo</li>
                            <li>Corporativo</li>
                        </ul>
                    </div>

                    <div>
                        <h2>CORREO</h2>
                        <span>serviprecorte@gmail.com</span>
                    </div>
                    <div>
                        <h2>HORARIO DE ATENCION</h2>
                        <ul>
                            <li>lunes - viernes 8am -5pm</li>
                            <li>Sabado 8am - 1pm</li>
                            <li>Domingo - Cerrado</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <h2>envia un mensaje</h2>
                    <p>El tiempo de respuesta es aproximadamente 24H aproximadamente</p>
                    <div>
                        <form action="#">
                            <input type="text" placeholder="Nombre"/>
                            <input type="text" placeholder="Numero de telefono"/>
                            <input type="text" placeholder="Correo electronic"/>
                            <input type="text" placeholder="Nombre de empresa"/>
                            <input type="text" placeholder="Ciudad"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contacto;
