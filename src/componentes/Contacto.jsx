import React, { useState } from 'react'


const Contacto = () => {

const [Cambio, setCambio] = useState(true)
const [Cambio2, setCambio2] = useState(true)
const accion=()=>{ if(Cambio===true){ setCambio(false)}else{ setCambio(true)}}
const NumberAcc=()=>{if(Cambio2===true){setCambio2(false)}else{setCambio2(true)}}




  return (
    <div>Contacto
     
        <p>Telefono</p>
        <div onClick={NumberAcc} className='conten'>
        <img className='targetProyect' src="https://cdn-icons-png.flaticon.com/512/3014/3014736.png" title="teléfono iconos"/>
        <p className={Cambio2? "contenContacto":""}>{Cambio2?"+52-56-12-58-76-65":""}</p>
     </div>
      
     
 <p>Correo</p>
 <div  onClick={accion} className={`conten `} >
       <img className='targetProyect' src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Correo" title='Correo'/>
        <p className={Cambio? "contenContacto":""}>{Cambio?"roshlandia @gmail .com":""}</p>
     </div>

    </div>
  )
}

export default Contacto