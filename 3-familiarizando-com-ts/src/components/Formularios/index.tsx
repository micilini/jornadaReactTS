import React, { useState } from 'react';

const Formularios: React.FC = () => {
  // Estados para armazenar os valores dos campos
  const [texto, setTexto] = useState<string>('');
  const [opcao, setOpcao] = useState<string>('opcao1');
  const [comentario, setComentario] = useState<string>('');
  const [checkbox, setCheckbox] = useState<boolean>(false);

  // Função para lidar com a mudança do campo de texto
  const handleTextoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };

  // Função para lidar com a mudança da seleção
  const handleOpcaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcao(event.target.value);
  };

  // Função para lidar com a mudança da área de texto
  const handleComentarioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComentario(event.target.value);
  };

  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o envio do formulário padrão
    console.log('Texto:', texto);
    console.log('Opção selecionada:', opcao);
    console.log('Comentário:', comentario);
    console.log('Checkbox:', checkbox);
  };

  return (
    <div>
      <h1>Formulários em React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="texto">Texto:</label>
          <input
            type="text"
            id="texto"
            value={texto}
            onChange={handleTextoChange}
          />
        </div>

        <div>
          <label htmlFor="opcao">Opção:</label>
          <select
            id="opcao"
            value={opcao}
            onChange={handleOpcaoChange}
          >
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={handleComentarioChange}
          />
        </div>

        <div>
          <label htmlFor="checkbox">Aceito os termos:</label>
          <input
            type="checkbox"
            id="checkbox"
            checked={checkbox}
            onChange={handleCheckboxChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formularios;
