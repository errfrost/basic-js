const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if (matrix.length == 0) return 0;
  return matrix.map(i => i.filter(item => item == '^^').length).map(i => count += i, count=0).reverse()[0];
  //берем массив и делаем из него массив с количеством котиков в каждом из подмассивов, потом берем этот массив
  // и делаем его массивом где каждый следующий элемент сумма предыдущих. Искомое число - последний элемент массива,
  // переворачиваем его и берем первый
}

module.exports = {
  countCats
};
