// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index,index+size)]) : carry, []);
return chunk;
};




