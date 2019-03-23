const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const decimal = [1, 5, 10, 50, 100, 500, 1000];

function convertRomanToDecimal(i) {
  const extractStr = i.substring(1);
  const firstStr = i.substring(0, 1);

  if (i === "IV") {
    return 4;
  }

  if (i === "IX") {
    return 9;
  }

  if (firstStr === "I") {
    return i.length;
  }

  const index = roman.findIndex(n => n === firstStr);
  const x = decimal[index];

  if (x >= 5) {
    return x + convertRomanToDecimal(extractStr);
  }

  return 0;
}

module.exports = {
  convertRomanToDecimal
};
