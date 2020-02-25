const _max = () => {
    const a = 8
    const b = 7
    const c = 5
    
    let max = a

    if(b > max) max = b
    if(c > max) max = c

    return max

// return Math.max(a,b,c)


}

console.log(_max())