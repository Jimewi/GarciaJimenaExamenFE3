import { useState } from 'react'
import './App.css'
import Card from './Components/CardComponent'
import Form from './Components/Form'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario y Componente</h1>
        <FormComponent />
      </header>
    </div>
  );
}

export default App
