const obj1 = { name: 'jun', age: 10 }
const obj2 = { key1: 1, key2: 2 }

const obj3 = Object.assign({},obj1, obj2)
const obj4 = {...obj1, ...obj2}

console.log(obj1, obj2)
console.log( obj3, obj4)