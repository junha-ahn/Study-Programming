function typeCheck(str){
  return (str.length == 4 || str.length == 6 ) && !isNaN(str) ? true : false
}


console.log(typeCheck('12456'))