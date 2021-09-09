/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
let result = {};
 for (let i = 0; i < arguments.length; i++){
  for (let key in obj) {
    if (arguments[i+1] == key) {
    result[key] = obj[key];   
 }
 }
}
return result;
};









