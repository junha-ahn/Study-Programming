function Person(name) {
    if (this instanceof Person) { this.name = name } 
    else throw new Error();
  }
  var person = new Person('Nicholaas'); // 1번 -> name: Nichollass
  var person = Person('Nicholaas'); // 2번 -> Error
  var person = Person.call(person, 'Michael'); // 3번 -> name: Michael