module.exports = function check(str, bracketsConfig) {
  let elem = str.split("");
  let stack = [];
  for (i = 0; i < elem.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (
        elem[i] == bracketsConfig[j][1] &&
        stack.length &&
        stack[stack.length - 1] == bracketsConfig[j][0]
      ) {
        stack.pop();
        break;
      } else if (elem[i] == bracketsConfig[j][0]) {
        stack.push(elem[i]);
        break;
      } else if (elem[i] == bracketsConfig[j][1]) {
        return false;
      }
    }
  }
  return !stack.length;
};
