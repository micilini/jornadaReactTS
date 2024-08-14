import React from 'react';
import { ButtonProps } from './buttonProps.interface';

// Componente usando a interface para as propriedades
const Botao: React.FC<ButtonProps> = ({ texto, onClick }) => {
  return <button onClick={onClick}>{texto}</button>;
};

export default Botao;