import React from 'react';
import { NomesEnum } from '../enums/NomesEnum';

const MostraNome: React.FC<{ nome: NomesEnum }> = ({ nome }) => {
  return <h1>{nome}</h1>;
};

export default MostraNome;