function fn(arr) {
 if(arr.length <= 1) return arr.push(-1)
return arr.filter( v => v !== Math.min.apply(null, arr))
}

console.log(fn([5, 1,2,3]))
