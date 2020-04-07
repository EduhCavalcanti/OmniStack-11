//TEste unitário
const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('Deveria gerar uma unica chave ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8)
  });
});