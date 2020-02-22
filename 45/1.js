//x부터 시작해서 x만큼 증가하는 숫자 n개를 가진 배열 리턴
// const foo = (x, n) => {
// const arr = []
// for(let i = 0; i < n; i++){
//     arr.push( x * (i+1))
// }
// return arr
// }
// console.log(foo(2,5))
// console.log(foo(4,2))
// console.log(foo(-4,2))

const foo = (x,n) => {
    const arr = new Array()
    arr.length = n
    for(let i = 0; i < n; i++){
        arr.fill(x)
    }
    return arr.map((e,i) => e * (i+1))
}
console.log(foo(2,5))
console.log(foo(4,2))
console.log(foo(-4,2))