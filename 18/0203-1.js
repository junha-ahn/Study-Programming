function fn(n){
    let a = ''
    for(let i = 0; i <n; i++){
        i % 2 === 0 ? a += '수' : a += '박'
    }
    return a
}

console.log(fn(5))
console.log(fn(4))