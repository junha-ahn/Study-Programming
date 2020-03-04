const fn = new Promise((resolve, reject) => {
    throw new Error('에러 발생!')
 })

 fn.catch((e)=>{
     console.log(e)
 })