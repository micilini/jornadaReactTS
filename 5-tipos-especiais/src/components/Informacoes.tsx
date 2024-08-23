import React from 'react';

// Definição do tipo para as props dentro do mesmo arquivo
type InformacoesProps = {
  nome: string;
  idade: number;
  email: string;
};

const Informacoes: React.FC<InformacoesProps> = ({ nome, idade, email }) => {
  return (
    <div>
      <h1>Informações</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Informacoes;