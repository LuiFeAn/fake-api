class DescriptionError extends Error {
  constructor() {
    super('Descrição inválida. Envie uma descrição entre 1 a 400 caracteres');
  }
}
