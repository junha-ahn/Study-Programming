//reduce
const sum = (arr) => {
    return arr.reduce((p,c) => p+c)
}

console.log(sum([1,2,3,4,5]))
console.log(sum([1]))
console.log(sum([1,2]))

//재귀함수
function fn(arr) {
    return arr.length === 0 ? 0 : arr[0] + fn(arr.slice(1))
  }
console.log(fn([1, 2, 3]))
