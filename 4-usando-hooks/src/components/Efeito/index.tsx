import React, { useEffect } from 'react';

interface EfeitoProps {
  mensagem: string;
}

const Efeito: React.FC<EfeitoProps> = ({ mensagem }) => {
  useEffect(() => {
    console.log(`Componente montado ou a mensagem mudou: ${mensagem}`);
    
    // Esta função é chamada quando o componente é desmontado
    return () => {
      console.log('Componente desmontado');
    };
  }, [mensagem]); // Dependência: o useEffect será chamado sempre que a prop 'mensagem' mudar

  return (
    <div>
      <h1>{mensagem}</h1>
    </div>
  );
};

export default Efeito;