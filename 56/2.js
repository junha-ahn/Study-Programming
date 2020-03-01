function foo() {
    console.log("foo's this: ",  this);  // 1번 -> 전역객체
    function bar() {
      console.log("bar's this: ", this); // 2번 -> 전역객체
    }
    bar();
  }
  foo();