// JS OOP
// 객체 리터럴
const v = "동적키";
const v2 = "이미 있는 변수값";
const o1 = {
  v2, // 단축연산으로 값이 있는 변수를 바로 넣을 수 있다
  //   v2: v2, (이럴 필요 없다)
  속성명: "<속성명>",
  속성명2: "값",
  myFun: function () {
    console.log(this.속성명); // 이 리터럴로 만들어질 객체를 객체 내부에서 호출하는 방법
    console.log("myFun");
  },
  myFun2() {
    console.log("myFun2");
  },
  myFun3: () => {
    console.log("myFun");
  },
  [v]: "반찬가게", // 동적키
};
console.log(o1);
o1.myFun();

// 프로토타입 생성자
function Student(name, major) {
  // 외부에서 받을 매개변수
  this.name = name;
  this.major = major;
  // ...
  this.country = "한국";
  this.hello = () => console.log("안녕");
}

const s1 = Student("Jane", "철학");
const s2 = new Student("Jane", "철학"); // new 유무
const s3 = new Student("Jane", "철학");
// 기본/원시 타입 => 별도로 만들어주지 않아도 바로 쓸 수 있는 타입 목록.
// 참조 타입 : 내가 생성자를 통해서 새롭게 만드는 객체별 구분해주는 타입 <- 프로토타입, 클래스
// console.log("s1", s1);
console.log("s2", s2);
console.log("s3", s3);
Student.prototype.bye = function () {
  console.log("Bye");
};
console.log("s3.hello === s2.hello", s3.hello === s2.hello);
console.log("s3.bye === s2.bye", s3.bye === s2.bye);

// -> Class.