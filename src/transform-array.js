const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length == 0) return [];

  let actions = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  let arrOut = [];
  for (let i=0;i<arr.length;i++) {
    if (arr[i] === actions[0]) {
      i++;
      arrOut.push('_');
      continue;
    }
    if (arr[i] === actions[1]) {
      if (arrOut.length>0) arrOut.pop();
      continue;
    }
    if (arr[i] === actions[2]) {
      if (arr.length>i+1) arrOut.push(arr[i+1]);
      continue;
    }
    if (arr[i] === actions[3]) {
      if (arrOut.length>0) arrOut.push(arrOut[arrOut.length-1]);
      continue;
    }
    if (arr[i]) arrOut.push(arr[i]);
  }

  return arrOut.filter(i => i !== '_');
}
module.exports = {
  transform
};
