const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let arr = Array.from(Array(m), () => new Array(n));

  for(let i=0; i<m; i++)
    for(let t=0; t<n; t++) {
      let counter = 0;
      try{ if(matrix[i-1][t-1]) counter++;} catch (e){}
      try{ if(matrix[i-1][t])   counter++;} catch (e){}
      try{ if(matrix[i-1][t+1]) counter++;} catch (e){}
      try{ if(matrix[i][t-1])   counter++;} catch (e){}
      try{ if(matrix[i][t+1])   counter++;} catch (e){}
      try{ if(matrix[i+1][t-1]) counter++;} catch (e){}
      try{ if(matrix[i+1][t])   counter++;} catch (e){}
      try{ if(matrix[i+1][t+1]) counter++;} catch (e){}
      arr[i][t] = counter;
    }

  return arr;
}
module.exports = {
  minesweeper
};
