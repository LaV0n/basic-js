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
function getMatrixElementsSum( matrix) {
  
  let sum =0;
  for (let k=0; k<matrix[0].length; k++){
    sum+=matrix[0][k];
  };

  for (let i=0; i<matrix[0].length; i++){
    let j=1;
    for (j; j<matrix.length; j++){
      if (matrix[j-1][i] !== 0){
          sum+=matrix[j][i];         
      }
    }
 }
 return sum;
}

module.exports = {
  getMatrixElementsSum
};
