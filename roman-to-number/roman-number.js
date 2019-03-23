function convertDecimalToRoman(i) {
    if (i === 4) {
        return "IV";
    }

    if (i >= 5 && i <= 8) {
        return "V" + "I".repeat(i - 5);
    }

    if (i === 9) {
        return "IX";
    }

    if (i === 19) {
        return "X" + convertDecimalToRoman(9);
    }

    if (i >= 1000) {
        return "M" + convertDecimalToRoman(i - 1000);
    }

    if (i >= 500) {
        return "D" + convertDecimalToRoman(i - 500);
    }

    if (i >= 100) {
        return "C" + convertDecimalToRoman(i - 100);
    }

    if (i >= 50) {
        return "L" + convertDecimalToRoman(i - 50);
    }

    if (i >= 10) {
        return "X" + convertDecimalToRoman(i - 10);
    }

    return "I".repeat(i);
}

module.exports = {
    convertDecimalToRoman,
};
