export const getLastWordLength = str => {
  let strN = str.trim();
  let inputString = strN.split(' ');
  let lastWord = inputString[inputString.length-1]; 
  let result = lastWord.length;
  return result;
}




