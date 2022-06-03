const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

  function getSumOfDigits(n) {

  
    function summary(x){
     x = Array.from(String(x), Number)
      let sum=0;
     for(let i=0;i<x.length; i++){
       sum+=x[i];
    }
    return sum;
       }
       while (n > 9) {
         n= summary(n);
         n=n;
       }
   
      
     return(n);
   }
  
module.exports = {
  getSumOfDigits
};
