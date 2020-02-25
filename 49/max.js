const _max = () => {
    const a = 3
    const b = 2
    const c = 4
    let max = a

    if(b > max) max = b
    if(c > max) max = c
    
    return max

// return Math.max(a,b,c)


}

console.log(_max())