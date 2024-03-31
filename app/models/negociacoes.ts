import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = []

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  listar(): readonly Negociacao[] {
    return this.negociacoes
  }
}