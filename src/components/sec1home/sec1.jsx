import React from "react";
import bodega from "/public/bodega.jpg"
import "../sec1home/sec1.css"

function Sec1() {
    return (
        
        <div className="sec1">
            <img src={bodega} alt="bodega" />
            <button>Boton 1</button>
        </div>
        
    )
}

export default Sec1