import React from 'react';

const Informacoes: React.FC = () => {
  const nome: string = 'João';
  const idade: number = 30;
  const humano: boolean = true;
  const caracteristicas: { altura: number; peso: number; cor: string } = {
    altura: 1.80,
    peso: 75,
    cor: 'azul',
  };
  const numerosDaSorte: number[] = [7, 13, 21];

  return (
    <div>
      <h1>Informações</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Humano:</strong> {humano ? 'Sim' : 'Não'}</p>
      <p><strong>Características:</strong></p>
      <ul>
        <li><strong>Altura:</strong> {caracteristicas.altura} m</li>
        <li><strong>Peso:</strong> {caracteristicas.peso} kg</li>
        <li><strong>Cor:</strong> {caracteristicas.cor}</li>
      </ul>
      <p><strong>Números da Sorte:</strong></p>
      <ul>
        {numerosDaSorte.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default Informacoes;
