/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
let result = '';
let newArray = string.split('');
let mainArray = [...new Set(newArray)];
let keys = 0;
for(i = 0; i < mainArray.length; i++ ){

for(j = 0; j < newArray.length; j++ ){
if(newArray[j] == mainArray[i]) {result = result + newArray[j]; keys = keys + 1; };
if(keys == size){ keys = 0; break; };
}
return result;
}




