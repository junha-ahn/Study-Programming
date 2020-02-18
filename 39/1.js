const fn = num => {
    const str = num.toString();
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i])
    }
   return num % sum === 0 ? '하샤드 수 입니다.' : '하샤드 수가 아닙니다.'
  };
  
  console.log(fn(18))