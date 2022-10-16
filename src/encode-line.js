const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let counter = 1;
  
  if (str == '') return res;
  for (let i=0;i<str.length-1;i++){
    if (str[i+1]==str[i])
      counter++;
    else {
      res += counter == 1 ? str[i] : counter.toString() + str[i];
      counter = 1;
    }
  }
  res += counter == 1 ? str[str.length-1] : counter.toString() + str[str.length-1];

  return res;
}
module.exports = {
  encodeLine
};
