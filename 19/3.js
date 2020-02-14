function fn(n){
    // const numString = n.toString()
    // let sum = 0;
    // for(let i = 0; i < numString.length; i ++ ){
    //     sum += Number(numString[i])

    // }
    // return sum
    // return n.toString().split('').reduce((p,c) => p + c)
    return n.toString().split('').map(Number).reduce((pre, cur) => pre + cur)
}

console.log(fn(1234))