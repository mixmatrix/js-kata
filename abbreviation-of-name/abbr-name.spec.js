const { abbrevName } = require('./abbr-name');


describe('Abbreviation of name', () => {
  it('return "S.H" when input "Sam Harris"', () => {
    const result = abbrevName('Sam Harris');
    expect(result).toEqual('S.H');
  });

  it('return "P.F" when input "Patrick Feenan"', () => {
    const result = abbrevName('Patrick Feenan');
    expect(result).toEqual('P.F');
  });

  it('return "E.V" when input "Evan Cole"', () => {
    const result = abbrevName('Evan Cole');
    expect(result).toEqual('E.C');
  });

  it('return "E.V" when input "evan cole"', () => {
    const result = abbrevName('evan cole');
    expect(result).toEqual('E.C');
  });
});
