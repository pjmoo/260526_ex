// class
class Person {
  // 생성자
  constructor(name) {
    // 생성자의 매개변수로 받고
    this.name = name; // 소멸하지 않고 Person 내부의 프로퍼티로 남음
    // this.age
    this.address = "대한민국";
  }
  // 함수 <- 함수에서의 input, ouput 모두 적요
  hi() {
    console.log(this.#age); // 접근제어자
    console.log(`${this.name}에요 반가워요`);
  }
  #age = 20; // #을 붙이면 클래스 외부에서는 접근 불가
  // 접근 불가가 되었을 때는 3가지
  // 1. 앞으로 이 값은 변화하지 않음 (상수 같은 개념)
  // 2. 은닉 => 메모리주소 자체를 노출하지 않고 접근자/메서드를 통해서만 변경하여 차후 검증이나 복잡한 로직을 대응.
  // 3. 내부 작업에만 필요한 임시변수. 인스턴스의 상태 저장.
  address;

  // 접근자 프로퍼티
  // #age
  get age() {
    // getter
    // return this.#age + "";
    return this.#age;
  }
  set age(value) {
    this.#age = value;
  }
}

const p1 = new Person();
const p2 = new Person("윌리엄");
console.log(p1, p2);
p1.hi();
p2.hi();

// 필드, 멤버변수, 속성 => 각각 객체(인스턴스)별로 별도의 저장공간을 가지는 개념
console.log(p1.name, p2.name);
// console.log(p1.#age);
// Property '#age' is not accessible outside class 'Person' because it has a private identifier.ts(18013)

// getter, setter 함수이면서 동시에 할당 연산자에 반응
p1.age = 1000; // 할당연산자와 같이 쓰면 private한 필드 혹은 다른 내부 작업 등에 대해 대입
console.log(p1.age); // 함수처럼 ()을 안붙여도 그 자체를 프로퍼티처럼 쓸 수 있게 함.