/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
let result;
let numbersNew = numbers;
numbersNew.sort(function(numbers, b) {
  return numbers - b;
});
result = numbersNew[numbersNew.length-1] + numbersNew[numbersNew.length-2];
return result;
}


