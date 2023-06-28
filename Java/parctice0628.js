let number = 123;
let str1 = "스트링";

let null1 = "눌";

number = Number(number);
str1 = String(str1);
null1 = Object(null1);
console.log(typeof number + " isn't " + typeof str1 + " data type.");

console.log(
  "typeof를 Array이나 null에 사용하면," +
    typeof null1 +
    "결과를 얻을 수 있습니다."
);

//

let mathScore = "77";
let engScore = "88";

mathScore = Number(mathScore);
engScore = Number(engScore);

let avgScore = (mathScore + engScore) / 2;

console.log("시험 평균 점수는" + avgScore + "입니다.");
