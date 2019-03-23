function reverseWord(str) {
  const splitWord = str.split(" ");
  const numOfWord = splitWord.length;
  let reverse = "";

  for (let j = 0; j < numOfWord; j++) {
    reverse += splitWord[j]
      .split("")
      .reverse()
      .join("");

    if (j !== numOfWord - 1) {
      reverse += " ";
    }
  }

  return reverse;
}

module.exports = {
  reverseWord
};
