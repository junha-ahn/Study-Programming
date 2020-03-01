var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // 1번 -> obj 객체
    console.log("foo's this.value: ",  this.value); // 2번 -> 100
    function bar() {
      console.log("bar's this: ",  this); // 3번 -> 전역 객체
      console.log("bar's this.value: ", this.value); // 4번 -> 1
    }
    bar();
  }
};
obj.foo();