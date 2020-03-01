const a = 1, b = 2, c = 3
const arr = [1,2,3]

console.log(Math.max(a,b,c))
console.log(Math.max.call(null, a,b,c))
console.log(Math.max.apply(null, arr))
