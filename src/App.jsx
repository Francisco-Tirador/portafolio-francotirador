import './App.css'
import SobreMi from './componentes/sobreMi'
import Target from './componentes/targPresenta'
function App() {
 
  return (
    <div className="App">
     <Target/>
     <div>
       <SobreMi/>

       <h3>Habilidades</h3>
       
         <ul>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" className='liImg' title='HTML'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className='liImg' title='CSS'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className='liImg' title='JAVA SCRIP'></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" className='liImg' title='REACT'></img></li>
          
         </ul>



     </div>
    
    </div>
  
  )
}

export default App
