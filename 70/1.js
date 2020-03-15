// let node = { type: 'Identifier' };

// // // 1번. destructuring 을 이용해서 node의 type을 새로운 newType 변수에 초기화해보세요

// const {type: newType} = node
// console.log(newType)

let node = {
  type: 'Identifier',
  name: 'foo'
  }, 
  type = 'Literal',
  name = 5;
  // ({type: type} = node)
({type} = node)
 console.log(type)
// 2번. destructuring 을 이용해서 node의 type을 type 변수에 담아보세요