import React from 'react';

const Card = ({animal, setEleccion}) => {
    return (
        <div>
            <h3>{animal.tipo}</h3>
            <button style={{backgroundColor:'pink'}} onClick={() => setEleccion(true)}>Elegir tipo de animal</button>
        </div>
    )
  }

export default Card;