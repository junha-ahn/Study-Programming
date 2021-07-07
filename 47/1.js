const _map = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  };
  
  const _filter = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) result.push(arr[i]);
    }
    return result;
  };
  
  const someFunction = (arr, fn) => {
    return fn(arr);
  };
  
  console.log(someFunction([1, 2, 3, 4, 5], _map));
  console.log(someFunction([1, 2, 3, 4, 5], _filter));
  