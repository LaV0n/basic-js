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
function encodeLine(str ) {
  //throw new NotImplementedError('Not implemented');
  let result='';
  let count = 1;
  for(let i = 0; i <= str.length; i++) {
    
        if(str[i+1] === str[i]) {
            count++;
            
            }else{
          result =result  + count+ str[i];
          count=1;
        }
    
}
  return result.replaceAll('1','');
}

module.exports = {
  encodeLine
};
