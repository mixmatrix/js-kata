const { reverseWord } = require('./reverse-word');

describe('Reverse Word', () => {
  test('return "elppa" when input "apple"', () => {
    const r = reverseWord("apple");
    expect(r).toEqual('elppa');
  });

  test('return "olleh dlrow" when input "hello world"', () => {
    const r = reverseWord('hello world');
    expect(r).toEqual('olleh dlrow');
  });

  test('return "ehT ngisralloD" when input "The Dollarsign"', () => {
    const r = reverseWord('The Dollarsign');
    expect(r).toEqual('ehT ngisralloD');
  });
});
