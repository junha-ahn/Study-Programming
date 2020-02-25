
function _map(arr) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i]*2)
    }
    return arr2

}

function _filter(arr) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ) arr2.push(arr[i])
    }
    return arr2

}

// console.log(map([1, 2, 3, 4, 5 , 6], e => e * 2))
// console.log(filter([1, 2, 3, 4, 5 , 6], e => e % 2 === 0))

console.log(_map([1,2,3,4,5]))
console.log(_filter([1,2,3,4,5]))