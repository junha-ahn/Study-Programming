//렉시컬 스코프

var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // -> 1
bar(); // -> 1

//foo를 호출하면 foo 안의 bar가 호출되는데 
//bar의 스코프 안에는 x가 선언되어 있지 않아서 상위 스코프인 전역 스코프의 x가 찍힘
//그래서 둘다 결과값이 1이다.