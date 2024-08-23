type textoOuNulo = string | null;
type fixado = "Sucesso" | "Alerta" | "Perigo";

const ExemploTypes = () =>  {
  const nome:textoOuNulo = null;
  const sobrenome:textoOuNulo = "Roll";
  const numero:textoOuNulo = 2; //O TS vai gerar uma mensagem de erro, pois só pode ser string ou null, e não um number

  const mensagemUm:fixado = "Sucesso";
  const mensagemDois:fixado = "Perigo";
  const mensagemTres:fixado = "Micilini Roll";//O TS vai gerar uma mensagem de erro, pois os valores aceitos são apenas "Sucesso, Alerta e Perigo".

  return nome + sobrenome;
}

export default ExemploTypes;