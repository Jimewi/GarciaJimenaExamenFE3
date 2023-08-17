import React, { useState } from "react";

const Form = () => {

    const [ani,setAni] = useState({
        tipo: '',
    })

    const [persona, setPersona] = useState({
        nombre: ''
    })

    const [error, setError] = useState(false)
    const [ok, setOk] = useState(false)

    const handleSubmit = ()=>{
        if (persona.nombre.length < 3 || (/^\s/.test(persona.nombre)) || ani.tipo.length < 6) {
            setOk(false)
            setError(true)
        }else{
            setError(false)
            setOk(true)
        }
        
    }

    return (
        <div> 
           
                <label>Ingrese su nombre </label>
                <input type= "text" onChange={(e)=>setPersona({...persona, nombre: e.target.value})}/>
                <br></br>
                <label>Ingrese su animal preferido </label>
                <input type= "text" onChange={(e)=>setAni({...ani, tipo: e.target.value})}/>
                <br></br>
                <button style={{backgroundColor:'pink'}} onClick={handleSubmit}>Enviar</button>
                {ok && <h3>Hola {persona.nombre}! <br></br> Sabemos que tu animal preferido es <br></br>
                <button style={{backgroundColor:'skyblue'}}>{ani.tipo}</button></h3>}
                {error && <h3 style={{color:"red"}}>“Por favor chequea que la información sea correcta”</h3>}
            
        </div>
    )
  }

export default Form;


