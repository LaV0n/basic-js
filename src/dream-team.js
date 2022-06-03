const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(list) {
  let name = [];
  let j=0;
  if ((list === true )|| (list === null) ||( list === false )|| (list === undefined)) {return false}
  for (let i=0; i<list.length; i++){
    if ((list[i] === true )|| (list[i] === null) ||( list[i] === false )|| (list[i] === undefined) || (( typeof list[i]) !== 'string') ) { i=i} else{
    let char = list[i].trim();   
    name.push(char[0].toUpperCase());
  }}


return name.sort().join('');
  }

module.exports = {
  createDreamTeam
};
