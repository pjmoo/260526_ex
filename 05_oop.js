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