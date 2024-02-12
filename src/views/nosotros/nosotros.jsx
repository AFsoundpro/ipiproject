import React from "react";
import "./nosotros.css";
import Contact from "../../components/contact/contact";
import circular from "/public/circular.jpg";

function Nosotros() {
    return (
        <div className='nosotros'>
            {/* <div className='img-container'>
                <h1>QUIENES SOMOS</h1>
                <div>
                    <button>Boton 1</button>
                    <button>Boton 2</button>
                </div>
            </div> */}
            <h1>QUIENES SOMOS</h1>
            <section>
                <div className="sec1">
                    <div className="secson1">
                        <h2>DESDE 1992</h2>
                    </div>
                    <div className="secson2">
                        <p>Desde 1992, en I.P.I Serviprecorte Ltda, hemos sido líderes en la fabricación de productos plásticos de primera calidad. Con tres décadas de experiencia, nos enorgullece ofrecer soluciones innovadoras y respetuosas con el medio ambiente.</p>
                        <hr />
                        <h3>Compromiso Sostenible:</h3>
                        <p>Pioneros en prácticas sostenibles, buscamos constantemente maneras de minimizar nuestro impacto ambiental. Ofrecemos productos plásticos reciclables y sostenibles para un futuro más verde.</p>
                        <hr />
                        <h3>Mirando al Futuro:</h3>
                        <p>Celebramos tres décadas de logros, pero nuestra pasión por la innovación sigue siendo el motor que impulsa nuestro éxito. En I.P.I Serviprecorte Ltda, continuamos mirando hacia adelante, anticipando un futuro lleno de oportunidades y crecimiento.

                        Gracias por confiar en nosotros durante estos 30 años. Seguimos comprometidos con ofrecer productos plásticos de calidad y sostenibles para satisfacer sus necesidades en constante evolución.</p>
                    </div>
                </div>
            </section>
            <hr />
            <section className="mision">
                <div className="misiondiv">
                    <h2>MISION</h2>
                    <p>En nuestra empresa de productos plásticos, nos dedicamos a proporcionar soluciones de embalaje y productos plásticos de alta calidad, cumpliendo con los estándares más exigentes de la industria. Nos esforzamos por satisfacer las necesidades y expectativas de nuestros clientes, ofreciendo productos innovadores y respetuosos con el medio ambiente.</p>
                </div>
                <div className="visiondiv">
                    <h2>VISION</h2>
                    <p>Ser reconocidos como líderes en la industria de productos plásticos, destacando por nuestra innovación constante, compromiso con la sostenibilidad ambiental y la excelencia en la calidad de nuestros productos. Buscamos ser un referente en el desarrollo y aplicación de tecnologías avanzadas que contribuyan al bienestar de nuestros clientes, empleados y el entorno en el que operamos.</p>
                </div>
            </section>
            <section className="valores">
                <h1>Valores</h1>
                <icon></icon>
                <icon></icon>
                <icon></icon>
                <icon></icon>
                <icon></icon>
            </section>
            <hr />
            <div className="centered-container">
                <div className="main-recycle">
                    <div className="text-recycle">
                        <p>
                            Con esta visión y misión, aspiramos a ser líderes en la industria de productos plásticos, marcando la pauta en términos de calidad, sostenibilidad e innovación, y contribuyendo al desarrollo sostenible y al bienestar de nuestra sociedad.
                        </p>
                        <li>
                            <b>Innovación Sostenible:</b> Buscar continuamente nuevas formas de mejorar y desarrollar productos plásticos que sean sostenibles, reciclables y que minimicen nuestro impacto ambiental.
                        </li>
                        <br />
                        <li>
                            <b>Calidad y Durabilidad:</b> Garantizar la excelencia en la calidad de nuestros productos, utilizando materiales de primera calidad y procesos de fabricación avanzados para ofrecer soluciones duraderas y confiables.
                        </li>
                        <br />
                        <li>
                            <b>Relaciones de Confianza:</b> Construir relaciones sólidas y duraderas con nuestros clientes, basadas en la transparencia, la confianza y el compromiso de brindar un servicio excepcional.
                        </li>
                        <br />
                        <li>
                            <b>Cuidado del Personal:</b> Valorar y apoyar a nuestros empleados, proporcionando un entorno de trabajo seguro, oportunidades de desarrollo y reconocimiento por su contribución al éxito de la empresa.
                        </li>
                        <br />
                        <li>
                            <b>Responsabilidad Social:</b> Contribuir positivamente a las comunidades en las que operamos, participando en iniciativas sociales y ambientales que beneficien a la sociedad en general.
                        </li>
                    </div>
                    <div className="img-recycle">
                        <img src={circular} alt="IMG" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='img-container'>
                <h1>imagen</h1>
                <div>
                    <button>Boton 1</button>
                    <button>Boton 2</button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <Contact />
        </div>
    );
}

export default Nosotros;
