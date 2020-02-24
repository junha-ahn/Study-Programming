const star = (n, m) => {
    let result = ''
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        result += '*'
      }
      result += '\n'
    }
    return result
  };
  console.log(star(5, 3))
  