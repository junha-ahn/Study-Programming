function fnFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  // function fn(arr) {
  //   return arr.reduce((p, c) => p + c) / arr.length;
  // }

  function fn(arr){
    const sum = eval(arr.join('+'))
    const avg = sum / arr.length
    return avg  
  }

  console.log(fnFor([1, 2, 3, 4, 5]));
  console.log(fn([1, 2, 3, 4, 5]));