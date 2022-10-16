const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let s = 0 ;
  for(let i=0; i< matrix[0].length; i++)
    for(let t=0; t<matrix.length && matrix[t][i]!==0; t++)
      s += matrix[t][i];

  return s;
}

module.exports = {
  getMatrixElementsSum
};
