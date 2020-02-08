function fn(n){
    //문자로 바꾸기
    //쪼개서 역순
    //새배열
   return n.toString().split('').reverse().map(s => Number(s))

}

console.log(fn(12345))