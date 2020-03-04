const fn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 2000)
 })

 fn.then( message => {
     console.log('result:', message)
 })