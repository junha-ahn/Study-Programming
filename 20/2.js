function test(n){
    // const string = n.toString()
    // const arr = string.split('')
    // arr.sort((a,b) => b-a)
    // return arr.join('')
    return n.toString().split('').sort((a,b) => b-a).join('')
}

console.log(test(287465))