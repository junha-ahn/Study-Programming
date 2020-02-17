function fn(n){
    // return Math.sqrt(n) % 2 ? -1 : Math.pow(Math.sqrt(n)+1, 2)
  const num = Math.sqrt(n);
  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}
console.log(fn(11))
console.log(fn(100))
console.log(fn(3))