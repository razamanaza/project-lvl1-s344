const getSortedNum = num => (num.split('').sort().join(''));


const getBalancedNum = (num) => {
  const sorted = getSortedNum(num);
  if ((Number(sorted[sorted.length - 1]) - Number(sorted[0])) <= 1 ) return sorted; 
    
  let result = '';
  for (let i = 0; i < Math.ceil(sorted.length / 2); i += 1) {
    if (i === sorted.length - 1 - i) {
      result += sorted[i];
    } else {
      let sum = (Number(sorted[i]) + Number(sorted[sorted.length - 1 - i]));
      let left = Math.floor(sum / 2);
      let right = sum - left;
      result += left;
      result += right;
    }
  }

  return getBalancedNum(result);
};