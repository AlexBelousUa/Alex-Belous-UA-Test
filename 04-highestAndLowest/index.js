/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
  let inputString = numbers.split(' ');
  let max = Math.max.apply(null, inputString);
  let min = Math.min.apply(null, inputString);
  let result = String(min + ' ' + max);
  return result;
}
