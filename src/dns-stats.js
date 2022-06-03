const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  throw new NotImplementedError('Not implemented');
  let result ={};
 for (let j=0; j<domains.length;j++){
   let first = domains[j].split('.').reverse();
  for (let i=0;i<first.length; i++){
      



   for (let i=0;i<domains.length; i++){
    result[domains[i]] = 1;
    domains= domains[i]+'.'+ domains[i+1];
   }
  
}}
  return result;
}

module.exports = {
  getDNSStats
};
