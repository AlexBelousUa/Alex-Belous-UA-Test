export const sameParityFilter = (arr = []) => {
let result =[];

let first = [];
let second = [];

for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 == 0) { first.push(arr[i]) } else { second.push(arr[i]) };
}

if (arr[0] % 2 == 0) { result = first} else { result = second }


return result;
}