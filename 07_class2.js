// 상속
class Animal {
  count = 0; // 인스턴스 귀속 -> new 만들면 그 객체에서 count 영역이 생김
  static count = 0; // 클래스 귀속 -> 별도 저장공간에 class 설계와 함께 저장되어 있음
  static moreCount() {
    Animal.count++;
  }
  #name;
  constructor(name) {
    this.#name = name;
    this.count++;
    // Animal.count++;
    Animal.moreCount(); // 함수도 클래스 static
    // 클래스/인스턴스에 속한 함수는 메서드. -> static 메서드
  }
  speak() {
    console.log(this.#name);
  }
}
class Cat extends Animal {
  // 이미 기존에 구현해놓은 클래스를 써서 일부 내용을 공유하는 신규 클래스를 만드는 것
  #age;
  constructor(name, age) {
    // 냅두면 상속받은 원래 출처의 생성자가 기본으로 활성화
    // 우리가 직접 생성자를 만들면 그게 새로운게.
    // 상속 받은 직전 클래스
    // private -> 상속을 받아도 그 속성에 접근할 수 X.
    super(name);
    this.#age = age;
    console.log("count", Animal.count);
  }
  speak() {
    super.speak(); // 직전 상속 받은 원본의 것을 super로 쓰면서
    console.log(`나는 ${this.#age}살이다옹`); // 새로운 내용을 추가
  }
}
const a = new Animal("기니피그");
const b = new Cat("나폴레옹");
const c = new Cat("비스마르크", 50);
a.speak();
b.speak();
c.speak();
console.log(a.count, b.count, c.count);
console.log(Animal.count);
// Static - 인스턴스와 다른 저장 공간이므로 이름 겹쳐도 된다
// 클래스.(이름). 변수/함수 다 된다
// 쓸 일 있으면 class.() 쓰면 된다