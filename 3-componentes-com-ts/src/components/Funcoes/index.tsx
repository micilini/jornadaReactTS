import React, { useState } from 'react';

const Funcoes: React.FC = () => {
  // Estado para armazenar o valor retornado por uma função
  const [resultado, setResultado] = useState<string>('');

  // Função sem retorno
  const mostrarMensagem = (mensagem: string): void => {
    console.log(mensagem);
    // A função sem retorno pode realizar ações como logging ou manipulação de dados
  };

  // Função com retorno
  const calcularSoma = (a: number, b: number): number => {
    return a + b;
  };

  // Função com retorno que altera o estado
  const atualizarResultado = (): void => {
    const soma = calcularSoma(5, 7);
    setResultado(`A soma é: ${soma}`);
  };

  // Função que retorna um JSX
  const criarElemento = (texto: string): JSX.Element => {
    return <p>{texto}</p>;
  };

  return (
    <div>
      <h1>Funções em React</h1>
      
      <button onClick={() => mostrarMensagem('Olá, Mundo!')}>Mostrar Mensagem</button>
      
      <button onClick={atualizarResultado}>Calcular Soma</button>
      
      <div>
        {criarElemento('Este é um elemento criado pela função criarElemento.')}
      </div>

      <div>
        <h2>{resultado}</h2>
      </div>
    </div>
  );
};

export default Funcoes;
