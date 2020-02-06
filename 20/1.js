function fn(n){
    //문자로 바꾸기
    //쪼개서 역순
    //새배열
    const arr = n.toString().split('').reverse().map(s => Number(s))
return arr
}

console.log(fn(12345))