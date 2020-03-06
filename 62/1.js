
(async () => {
  const fn = () => {
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
              resolve('result')
          },2000)
      })
  }
  const result = await fn()
  console.log(result)
})()