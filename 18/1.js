function fn(n){
    let a = ''
    for(let i = 0; i <n; i++){
        i % 2 === 0 ? a += '수' : a += '박'
    }
    return a
}

function foo(n){
    const arr = new Array(n).fill('수')
    const arr2 = arr.map((el, i) => {
    return i % 2 === 0 ? '수' : '박'
    })
    return arr2.join('')
}

console.log(fn(5))
console.log(fn(4))
console.log(foo(5))