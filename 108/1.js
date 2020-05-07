function* increment(){
    let i = 0
    while(true){
      yield i++
    }
  }
  