import React from 'react';

const Propriedades: React.FC<{ nome: string; idade?: number }> = ({ nome, idade }) => {
  return (
    <div>
      <h1>Nome: {nome}</h1>
      {idade !== undefined ? <p>Idade: {idade}</p> : <p>Idade não informada</p>}
    </div>
  );
};

export default Propriedades;