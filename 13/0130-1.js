function fn(string){
    let countP = 0
    let countY = 0
    for(let i = 0; i < string.length; i++){
        const s = string[i]
        if(s === 'p' || s === 'P') countP++
        if(s === 'y' || s === 'Y') countY++
    }
    return countP === countY ? true : false
}

console.log(fn('pPoooy'))