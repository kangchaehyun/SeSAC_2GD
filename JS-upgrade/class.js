// 오브젝트를 생성
/* 
속성
    만들어진 연도 year
    집의 이름 name 
    창문의 갯수 window
함수
    만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
    창문의 갯수를 콘솔창에 출력하는 함수
 */

class House {
  constructor(year, name, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }
  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year} 지났어요`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();

const house2 = new House(2022, "자이", 10);
house2.getAge();
house2.getWindow();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log(this.width * this.height);
  }
}
let recl = new Shape(3, 4);
recl.getArea();

class Rectangle extends Shape {
  // 속성 추가를 하지 않는다면 constructor로 정의하지 않아도 됨
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

const rectangle2 = new Rectangle(6, 8);
console.log(rectangle2.getArea());
console.log(rectangle2.getDiagonal());

class Triangle extends Shape {
  //overrding
  //함수의 이름은 같지만 기능은 다르게 쓰고 싶을 때
  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  //   overriding
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
const circle = new Circle(1, 1, 5);
console.log(circle.getArea());
