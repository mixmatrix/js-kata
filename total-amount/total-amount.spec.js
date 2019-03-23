const { points } = require('./total-amount');

describe('Total amount of points', () => {
    it('return score = 3 when input ["3:0"]', () => {
        const result = points(['3:0']);
        expect(result).toEqual(3);
    });

    it('return score = 6 when input ["3:0", "1:0"]', () => {
        const result = points(['3:0', '1:0']);
        expect(result).toEqual(6);
    });

    it('return score = 1 when input ["1:1"]', () => {
        const result = points(['1:1']);
        expect(result).toEqual(1);
    });

    it('return score = 5 when input `["1:1", "2:2", "3:0"]` ', () => {
        const result = points(['1:1', '2:2', '3:0']);
        expect(result).toEqual(5);
    });

    it('return score = 0 when input `["0:1"]`', () => {
        const result = points(['0:1']);
        expect(result).toEqual(0);
    });
});
