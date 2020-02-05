function fn(n){
    const numString = n.toString()
    let sum = 0;
    for(let i = 0; i < numString.length; i ++ ){
        sum += Number(numString[i])

    }
    return sum
}

console.log(fn(1234))