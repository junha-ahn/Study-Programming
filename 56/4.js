var value = 1;

var obj = {
  value: 100,
  foo: function() {
    setTimeout(function() {
      console.log("callback's this: ",  this);  // 1번 -> 전역...?
      console.log("callback's this.value: ",  this.value); // 2번 -> 1
    }, 100);
  }
};

obj.foo();