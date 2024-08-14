import Header from './components/Header';
import Informacoes from './components/Informacoes';
import InformacoesEstados from './components/InformacoesEstados';
import Propriedades from './components/Propriedades';
import Bloco from './components/Bloco';
import Funcoes from './components/Funcoes';
import Formularios from './components/Formularios';

function App(){
  return(
    <>
      <Header />
      <br />
      <Informacoes />
      <br />
      <InformacoesEstados />
      <br />
      <Propriedades nome="João" idade={30} />
      <br />
      <Bloco>
        <h1>Este é o meu Bloco</h1>
        <p>Este é o meu bloco de texto</p>
      </Bloco>
      <br />
      <Funcoes />
      <br />
      <Formularios />
      <br />
    </>
  );
}

export default App;
