function fn(arr) {
 if(arr.length == 1) return arr[0]=-1
 return arr.filter( v => v !== Math.min.apply(null, arr))
}

console.log(fn([10]))
console.log(fn([1,3,4,6,2]))
console.log(fn([5,8,13]))
console.log(fn([1]))
