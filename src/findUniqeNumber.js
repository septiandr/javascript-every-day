const findUniqeNumber = (arr) => {
  let uniqeNumber = [];
  let dobleNumber = [];
  arr.forEach((val) => {
    console.log(val);
    const isExistUniqe = uniqeNumber?.some((item) => item === val);
    const isExistDoble = dobleNumber?.some((item) => item === val);
    if (isExistDoble) {
      dobleNumber.push(val);
    } else if (!isExistUniqe) {
      uniqeNumber.push(val);
    } else if (isExistUniqe) {
      dobleNumber.push(val);
      uniqeNumber = uniqeNumber.filter((item) => item !== val);
    }
  });

  return uniqeNumber;
};

console.log(findUniqeNumber([1, 1, 5, 8, 8, 3, 1, 3, 9]));

module.exports = findUniqeNumber;
