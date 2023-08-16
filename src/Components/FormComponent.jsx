import React, { useState } from 'react';
import CardComponent from './CardComponent';

const FormComponent = () => {
  const [animal, setAnimal] = useState('');
  const [persona, setPersona] = useState('');
  const [cardVisible, setCardVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (animal.length < 3 || persona.length < 6) {
      alert('Por favor chequea que la información sea correcta');
    } else {
      setCardVisible(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Persona">Tipo Animal:</label>
        <input
          type="text"
          id="Animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          required
        />
        <br />
        <label htmlFor="persona">Nombre:</label>
        <input
          type="text"
          id="Persona"
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {cardVisible && <CardComponent animal={animal} persona={persona} />}
    </div>
  );
};

export default FormComponent;