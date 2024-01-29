import React from "react";
import "./nosotros.css";
import Contact from "../../components/contact/contact";

function Nosotros() {
    return (
        <div className='home'>
            <div className='img-container'>
            <h1>QUIENES SOMOS</h1>
            <div>
                <button>Boton 1</button>
                <button>Boton 2</button>
            </div>
        </div>
        <section>
            <div>
                <div>
                    <h2>DESDE 1992</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis repellat fugiat rerum. Quae ex distinctio minima, doloribus asperiores velit sequi nam facilis cumque omnis.</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae praesentium molestias explicabo nobis repellat, perspiciatis possimus deleniti minus accusamus, aperiam fugit incidunt quo ut?</p>
                </div>
            </div>
        </section>
        <hr />
        <section>
            <div>
                <h2>MISION</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eligendi quisquam minima, explicabo consequatur enim ipsam totam corrupti aut obcaecati error tenetur libero, illum nihil.</p>
            </div>
            <div>
                <h2>VISION</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt quo eum. Iste nemo, mollitia ab debitis sapiente iusto repellat tempora obcaecati voluptatum, saepe veniam.</p>
            </div>
        </section>
        <section>
            <h1>ICONS</h1>
        </section>
        <hr />
        <div className='img-container'>
            <h1>imagen</h1>
            <div>
                <button>Boton 1</button>
                <button>Boton 2</button>
            </div>
        </div>

        <Contact />
        </div>
    )
}

export default Nosotros