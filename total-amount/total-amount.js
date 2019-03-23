function points(x) {
  const sum = x.reduce((acc, cur) => {
    const s = cur.split(':');
    const h = s[0];
    const a = s[1];

    if (h == a) {
      return acc + 1;
    }

    if (h > a) {
      return acc + 3;
    }

    return acc + 0;
  }, 0);

  return sum;
}

module.exports = {
  points,
};
