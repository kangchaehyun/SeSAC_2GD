const colors = ["red", "pink", "orange"];

const sayHi = function () {
  console.log("hi");
};

function sayName(name) {
  console.log(`my name is ` + name);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

// const p1 = new Person("amy", 20);
// console.log(p1.getBornYear());

module.exports = {
  colors,
  sayName,
  Person,
};
