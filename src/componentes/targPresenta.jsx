import React from "react";


const Target=()=>{

    
    // const link="https://img.freepik.com/vector-gratis/programacion-desarrollador-software-escritorio-simbolos-codigo_24877-70808.jpg"
   
    
    return(
        <div className="targetPrincipal">
            
          {/* <Img enlace={link} alt="Programador"/> */}
          <img className="img" src="https://img.freepik.com/vector-premium/chico-joven-que-trabaja-computadora-mesa-elevadora-silla-pie-aislado-fondo-verde-ilustracion-plana_323758-138.jpg?w=740" alt="" />
          <div className="presentacion">
              <h1>Hola Mundo</h1>
             <p className="name entrada">Soy Francisco Beltran</p>
             <h2>Programador</h2>
          </div>
             

        </div>
    )
}

export default Target