function star() {
    const n = 5;
    let str = ''
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j < 6 - i; j++) {
        str +=  ' '
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        str += '*'
      }
      for(let l = 1; l <6 -i; l++){
          str+= ' '
      }
      str += '\n'
    }
    return str;
  }

  console.log(star())