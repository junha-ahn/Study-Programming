function fn(n){
    return Math.sqrt(n) % 2 ? -1 : Math.pow(Math.sqrt(n)+1, 2)
}
console.log(fn(4))
