function typeCheck(str){
  return (str.length == 4 || str.length == 6 ) && !isNaN(str)
}


console.log(typeCheck('12456'))