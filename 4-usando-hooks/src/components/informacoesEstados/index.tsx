import React, { useState } from 'react';

const InformacoesEstados: React.FC = () => {
  // Definindo os estados usando useState
  const [nome, setNome] = useState<string>('João');
  const [idade, setIdade] = useState<number>(30);
  const [humano, setHumano] = useState<boolean>(true);
  const [caracteristicas, setCaracteristicas] = useState<{
    altura: number;
    peso: number;
    cor: string;
  }>({
    altura: 1.80,
    peso: 75,
    cor: 'azul',
  });
  const [numerosDaSorte, setNumerosDaSorte] = useState<number[]>([7, 13, 21]);

  // Função para mudar o nome de João para Maria
  const mudarNomeParaMaria = () => {
    setNome('Maria');
  };

  // Renderizando o componente
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
      <button onClick={mudarNomeParaMaria}>Mudar Nome para Maria</button>
    </div>
  );
};

export default InformacoesEstados;