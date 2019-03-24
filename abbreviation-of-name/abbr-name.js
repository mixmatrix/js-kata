function abbrevName(name) {
  const splitName = name.split(' ');
  return `${splitName[0][0]}.${splitName[1][0]}`.toUpperCase();
}


module.exports = {
  abbrevName,
};
