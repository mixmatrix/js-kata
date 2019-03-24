const { opposite } = require('./opposite-number');

describe('Opposite Number', () => {
  it('return -1 when input 1', () => {
    const result = opposite(1);
    expect(result).toEqual(-1);
  });

  it('return -14 when input 14', () => {
    const result = opposite(14);
    expect(result).toEqual(-14);
  });
});
