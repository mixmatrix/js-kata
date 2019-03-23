const { convertDecimalToRoman } = require('./roman-number');

describe('Roman Number', () => {
    test('return "I" when input 1', () => {
        const r = convertDecimalToRoman(1);
        expect(r).toEqual("I");
    });
    
    test('return "II" when input 2', () => {
        const r = convertDecimalToRoman(2);
        expect(r).toEqual("II");
    });
    
    test('return "III" when input 3', () => {
        const r = convertDecimalToRoman(3);
        expect(r).toEqual("III");
    });
    
    test('return "IV" when input 4', () => {
        const r = convertDecimalToRoman(4);
        expect(r).toEqual("IV");
    });
    
    test('return "V" when input 5', () => {
        const r = convertDecimalToRoman(5);
        expect(r).toEqual("V");
    });

    test('return "VI" when input 6', () => {
        const r = convertDecimalToRoman(6);
        expect(r).toEqual("VI");
    });

    test('return "VII" when input 7', () => {
        const r = convertDecimalToRoman(7);
        expect(r).toEqual("VII");
    });

    test('return "VIII" when input 8', () => {
        const r = convertDecimalToRoman(8);
        expect(r).toEqual("VIII");
    });

    test('return "IX" when input 9', () => {
        const r = convertDecimalToRoman(9);
        expect(r).toEqual("IX");
    });

    test('return "X" when input 10', () => {
        const r = convertDecimalToRoman(10);
        expect(r).toEqual("X");
    });

    test('return "XI" when input 11', () => {
        const r = convertDecimalToRoman(11);
        expect(r).toEqual("XI");
    });

    test('return "XII" when input 12', () => {
        const r = convertDecimalToRoman(12);
        expect(r).toEqual("XII");
    });

    test('return "XIV" when input 14', () => {
        const r = convertDecimalToRoman(14);
        expect(r).toEqual("XIV");
    });

    test('return "XV" when input 15', () => {
        const r = convertDecimalToRoman(15);
        expect(r).toEqual("XV");
    });

    test('return "XVI" when input 16', () => {
        const r = convertDecimalToRoman(16);
        expect(r).toEqual("XVI");
    });

    test('return "XVII" when input 17', () => {
        const r = convertDecimalToRoman(17);
        expect(r).toEqual("XVII");
    });

    test('return "XIX" when input 19', () => {
        const r = convertDecimalToRoman(19);
        expect(r).toEqual("XIX");
    });

    test('return "XX" when input 20', () => {
        const r = convertDecimalToRoman(20);
        expect(r).toEqual("XX");
    });

    test('return "L" when input 50', () => {
        const r = convertDecimalToRoman(50);
        expect(r).toEqual("L");
    });

    test('return "LI" when input 51', () => {
        const r = convertDecimalToRoman(51);
        expect(r).toEqual("LI");
    });

    test('return "C" when input 100', () => {
        const r = convertDecimalToRoman(100);
        expect(r).toEqual("C");
    });

    test('return "CI" when input 101', () => {
        const r = convertDecimalToRoman(101);
        expect(r).toEqual("CI");
    });

    test('return "D" when input 500', () => {
        const r = convertDecimalToRoman(500);
        expect(r).toEqual("D");
    });

    test('return "DI" when input 501', () => {
        const r = convertDecimalToRoman(501);
        expect(r).toEqual("DI");
    });

    test('return "M" when input 1000', () => {
        const r = convertDecimalToRoman(1000);
        expect(r).toEqual("M");
    });

    test('return "MXIX" when input 1019', () => {
        const r = convertDecimalToRoman(1019);
        expect(r).toEqual("MXIX");
    });
});
