import { useState } from 'react';
import './App.css'
import Card from './Components/Card';
import Form from './Components/Form';


function App () {

  const [eleccion, setEleccion] = useState(false)

  let animales = [
    {id: 1, tipo: "Animales Domesticos"},
    {id:2, tipo: "Animales Salvajes"},
  ]

  return(
    <>
    <div style={{backgroundColor:'greenyellow'}}>
      <h1>Elije tu animal preferido: </h1>
        {animales.map((animal)=> <Card animal={animal} key ={animal.id} setEleccion={setEleccion}/> )}
        {eleccion && <Form/>}
    </div>

    </>
  )
}

export default App;
