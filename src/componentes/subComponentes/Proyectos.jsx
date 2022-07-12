import React, { useState } from 'react'

const Proyectos = () => {

const [Description, setDescription] = useState(true)
const masInfo=()=>{if(Description===true){setDescription(false)}else{setDescription(true)}}


const [DescRick, setDescRick] = useState(true)
const masRick=()=>{if(DescRick==true){setDescRick(false)}else{setDescRick(true)}}

const [DesComerce, setDesComerce] = useState(true)
const masComerce=()=>{if(DesComerce== true){setDesComerce(false)}else{setDesComerce(true)}}

const infoPoke="Este proyecto web hace referencia a la famosa serie Pokémon utilizando su amplia gama de personajes aprovechándolos para explorar las diferentes formas de búsqueda de estos; construido en React, trabajando con la experiencia de usuario y la api."
const nada=""

const infoRick="Este proyecto web ocupa los personajes de la serie Rick and Morty, tomado esta información para ver estos personajes en sus respectivos universos, podemos tomar como referencia este proyecto si lo queremos llevar a una tienda virtual en su forma de búsqueda y la vista de los productos; construido en React, utilizando redux, y sus apis correspondientes."

const infoComerce="Este proyecto web es una tienda virtual (e-comerce), en donde podemos crearnos un usuario y observar los productos que podemos agregar a nuestro carrito a nuestro gusto, así como realizar la compra ficticia; construido en React, con redux, axios y su api correspondiente"



  return (
    <div className='contenProyects'>

    <div className='targetProyect'>
    <img className='imgProyect' src="https://cdn-icons-png.flaticon.com/512/189/189001.png" alt="Pokedex" title='Pokedex'/>
    <p>{Description ?nada:infoPoke}</p>
    
    <button onClick={masInfo}>Mas sobre este proyecto</button>
    </div>

    <div className='targetProyect'>
        <img className='imgProyect' src="https://cdn-icons-png.flaticon.com/512/1374/1374413.png" alt="Portal" title='Rick and Morty' />
        <p>{DescRick ? nada :infoRick}</p>
        <button onClick={masRick}>Mas sobre este proyecto</button>
    </div>
    <div className='targetProyect'>
        <img className='imgProyect' src="https://cdn-icons-png.flaticon.com/512/1043/1043450.png" alt="E-Comerce" title='E-Comerce' />
        <p>{DesComerce?nada:infoComerce}</p>
        <button onClick={masComerce}>Mas sobre este proyecto</button>
    
    </div>


    </div>
  )
}

export default Proyectos