/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let ignore = n => !isFinite(n) ? 0 : n;
  return arr.reduce((max, val) => ignore(val) > ignore(max) ? val : max );
};

export default max;
