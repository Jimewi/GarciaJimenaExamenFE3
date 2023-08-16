import React from 'react';

const CardComponent = ({ input1, input2 }) => {
  return (
    <div className="card">
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>
    </div>
  );
};

export default CardComponent;