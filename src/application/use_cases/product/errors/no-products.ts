export class NoProducts extends Error {
  constructor() {
    super('Não há produtos cadastrados');
  }
}
