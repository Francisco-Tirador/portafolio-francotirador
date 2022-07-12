import React from "react";
import Img from "./subComponentes/img";
const Target=()=>{

    const link="https://img.freepik.com/vector-gratis/programacion-desarrollador-software-escritorio-simbolos-codigo_24877-70808.jpg"
    return(
        <div className="targetPrincipal">
            
          <Img enlace={link} alt="Programador"/>
          <div className="presentacion">
              <h1>Hola Mundo</h1>
             <p>Soy Francisco Beltran</p>
             <h2>Programador</h2>
          </div>
             

        </div>
    )
}

export default Target