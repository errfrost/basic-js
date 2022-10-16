const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let strN = n.toString();
  for (let i=0; i<strN.length; i++)
    if (Number(strN.replace(strN[i],'')) > max)
      max = Number(strN.replace(strN[i],''));

  return max;
}

module.exports = {
  deleteDigit
};
