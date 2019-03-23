const { convertRomanToDecimal } = require('./reverse-roman');

describe('Reverse Roman', () => {
    test('return 1 when input I', () => {
        const r = convertRomanToDecimal('I');
        expect(r).toEqual(1);
    });

    test('return 2 when input II', () => {
        const r = convertRomanToDecimal('II');
        expect(r).toEqual(2);
    });

    test('return 3 when input III', () => {
        const r = convertRomanToDecimal('III');
        expect(r).toEqual(3);
    });

    test('return 4 when input IV', () => {
        const r = convertRomanToDecimal('IV');
        expect(r).toEqual(4);
    });

    test('return 5 when input V', () => {
        const r = convertRomanToDecimal('V');
        expect(r).toEqual(5);
    });

    test('return 6 when input VI', () => {
        const r = convertRomanToDecimal('VI');
        expect(r).toEqual(6);
    });

    test('return 7 when input VII', () => {
        const r = convertRomanToDecimal('VII');
        expect(r).toEqual(7);
    });

    test('return 8 when input VIII', () => {
        const r = convertRomanToDecimal('VIII');
        expect(r).toEqual(8);
    });

    test('return 9 when input IX', () => {
        const r = convertRomanToDecimal('IX');
        expect(r).toEqual(9);
    });

    test('return 10 when input X', () => {
        const r = convertRomanToDecimal('X');
        expect(r).toEqual(10);
    });

    test('return 11 when input XI', () => {
        const r = convertRomanToDecimal('XI');
        expect(r).toEqual(11);
    });

    test('return 12 when input XII', () => {
        const r = convertRomanToDecimal('XII');
        expect(r).toEqual(12);
    });

    test('return 14 when input XIV', () => {
        const r = convertRomanToDecimal('XIV');
        expect(r).toEqual(14);
    });

    test('return 15 when input XV', () => {
        const r = convertRomanToDecimal('XV');
        expect(r).toEqual(15);
    });

    test('return 16 when input XVI', () => {
        const r = convertRomanToDecimal('XVI');
        expect(r).toEqual(16);
    });

    test('return 50 when input L', () => {
        const r = convertRomanToDecimal('L');
        expect(r).toEqual(50);
    });

    test('return 53 when input LIII', () => {
        const r = convertRomanToDecimal('LIII');
        expect(r).toEqual(53);
    });

    test('return 100 when input C', () => {
        const r = convertRomanToDecimal('C');
        expect(r).toEqual(100);
    });

    test('return 103 when input CIII', () => {
        const r = convertRomanToDecimal('CIII');
        expect(r).toEqual(103);
    });

    test('return 500 when input D', () => {
        const r = convertRomanToDecimal('D');
        expect(r).toEqual(500);
    });

    test('return 549 when input DXXXXIX', () => {
        const r = convertRomanToDecimal('DXXXXIX');
        expect(r).toEqual(549);
    });

    test('return 1000 when input M', () => {
        const r = convertRomanToDecimal("M");
        expect(r).toEqual(1000);
    });

    test('return 1200 when input MCC', () => {
        const r = convertRomanToDecimal("MCC");
        expect(r).toEqual(1200);
    });
});