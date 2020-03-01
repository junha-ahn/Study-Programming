function test() {
    console.log(this)
 }
 
 test() // 1번 -> 전역객체
 var o1 = { name: 'obj1' }; 
 o1.test = test; 
 o1.test(); // 2번 -> o1 객체
 
 var a1 = [1, 2, 3];
 a1.test = test
 a1.test(); // 3번 -> a1배열
 
 var o1_test = o1.test;
 o1_test(); // 4번 -> 전역객체
 
 console.log(test === o1.test && o1.test === a1.test) // 5번 -> true...?