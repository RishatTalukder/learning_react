const arr = [1, 2, 3, 4, 5];

const callback = (val, ind) => {
    console.log(val, ind);
  return val * 2;
};

const newArr = arr.map(callback);

console.log(newArr);
