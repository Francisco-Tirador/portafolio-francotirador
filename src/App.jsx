import './App.css'
import SobreMi from './componentes/sobreMi'
import Proyectos from './componentes/subComponentes/Proyectos'
import Target from './componentes/targPresenta'
import Contacto from './componentes/Contacto'
function App() {
 
  return (
    <div className="App">
     <Target/>
     <div>
       <SobreMi/>

       <h3 className='Subtitule'>Habilidades</h3>
       
         <ul >
        <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" className='liImg' title='HTML'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className='liImg' title='CSS'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className='liImg' title='JAVA SCRIP'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" className='liImg' title='REACT'></img></li>
          
         </ul>

         <h3 className='Subtitule'>Proyectos</h3>
         <Proyectos/>

          <h3 className='Subtitule'>Contacto</h3>
          <Contacto/>

     </div>
    
    </div>
  
  )
}

export default App
