function lengthOf(str, index = 0) {
  if (!str || str[index] === undefined) {
    return 0;
  }

  return 1 + lengthOf(str, index + 1);
}

console.log(lengthOf('abcdef'));
