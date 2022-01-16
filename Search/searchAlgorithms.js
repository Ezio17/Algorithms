const array = [1, 2, 3, 4, 5, 6, 7, 8];

function binarySearch(array, number) {
  let left = 0;
  let right = array.length - 1;
  let countOperation = 0;

  while (left <= right) {
    countOperation++;
    console.log(countOperation, 'binary');
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === number) {
      return `${middle} - индекс`;
    } else if (array[middle] > number) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return null;
}

function interpolationSearch(array, number) {
  let left = 0;
  let right = array.length - 1;
  let countOperation = 0;

  while (left <= right) {
    countOperation++;
    console.log(countOperation, 'interpolation');
    const middle = (left + (right - left) / (array[right] - array[left]) * (number - array[left]));

    if (array[middle] === number) {
      return `${middle} - индекс`;
    } else if (array[middle] > number) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return null;
}

function linearSearch(array, number) {
  let countOperation = 0;
  console.log(countOperation, 'linear');

  for (let i = 0; array.length > i; i++) {
    countOperation++;
    console.log(countOperation, 'linear');
  
    if (array[i] === number) {
      return `${i} - индекс`;
    }
  }

  return null;
}

console.log(binarySearch(array, 7));
console.log(interpolationSearch(array, 7));
console.log(linearSearch(array, 7));