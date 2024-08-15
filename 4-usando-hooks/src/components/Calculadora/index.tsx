import React, { useMemo, useState } from 'react';

const Calculadora: React.FC = () => {
  const [número, setNúmero] = useState<number>(0);

  // Função de cálculo cara que só deve ser executada quando o número muda
  const cálculoCaro = (n: number) => {
    console.log('Calculando...');
    let resultado = 0;
    for (let i = 0; i < 1000000000; i++) {
      resultado += n * i;
    }
    return resultado;
  };

  // Usando useMemo para memorizar o resultado do cálculo
  const resultado = useMemo(() => cálculoCaro(número), [número]);

  return (
    <div>
      <p>Resultado do cálculo: {resultado}</p>
      <button onClick={() => setNúmero(prev => prev + 1)}>Incrementar Número</button>
    </div>
  );
};

export default Calculadora;