/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  let inputString = str.split('');
  let result = '';
  for(let i = 0; i < inputString.length; i++ ){
   result = result + inputString[i].toUpperCase() + inputString[i].repeat(i).toLowerCase() + '-';
  }
  result = result.slice(0,-1);
  return result;
}




