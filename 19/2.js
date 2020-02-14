function fn(s){
    //공백 기준으로 쪼개서 배열 만들기
    // const arr = s.split(' ')
    // return arr.map( e => {
    //     //새배열 만들기
    //     let str = ''
    //     for(let i = 0; i <e.length; i ++){
    //         i % 2 === 0 ? str += e[i].toUpperCase() : str += e[i].toLowerCase() 
    //     }
    //     return str
    // }).join(' ') 
    return s.split(' ').map(e => {
      return e.split('').map((e,i) => {
         return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()
      }).join('')
    }).join(' ')
}
console.log(fn('sTrInG tTtTtT'))