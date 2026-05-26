// Set
// 집합 -> 스스로가 각자가 다른 것과 구분되는 원소인 자료형

// object, map도 보면 특정 '키'에는 한 값만 들어갈 수 있음
const m = new Map();
m.set("a", 1234);
m.set("b", 1234); // 같은 값으로 넣었을 때 충돌 문제가 없음
// 중간에 해시가 꼈으니까 a -> <1231> -> 1234 / b -> <1123> -> 1234
console.log(m);
m.set("a", 5678); // a라는 키에 대응할 수 있는 값은 1개이기 때문에 '덮어쓰기'가 된다
console.log(m);
// a라는 키는 중복이 안된다. a에 들어가는 값은 중복될 수 있음

const s = new Set();
s.add(1234); // 키를 넣는 부분이 없음
console.log(s); // 값이 곧 키다
// 중복을 허용하지 않는다 -> 값에도
s.add(1234);
console.log(s);

// entry로 형태로 넣으면 바로 기존의 객체나 배열 등을 바탕으로 생성할 수 있음
const mm = new Map(Object.entries({ a: "a" }));
console.log(mm);

// 같은 값을 감지를 해서 정리를 해버린다
// 배열 중에 같은 값이 있는지를 감지해서 정리하는 역할
const ss = new Set(["a", "a", "a", "b", "b", "c"]);
console.log(ss);
// for문으로 객체, 배열, 맵 등을 사용해서 중복 정리하기를 할 순 있는데
// 속도도 느리고 구현 난도도 적지 않은 편 (Set 직접 다른 자료구조로 구현하기)

console.log("s.has(1234)", s.has(1234));
s.delete(1234);
console.log("s.has(1234)", s.has(1234));

s.add(1234);
s.add(12345);
s.add(123456);

// s.has, s.size
for (const c of s) {
  console.log(c);
}

// set vs set
// 자료구조 set : 1. 밸류가 곧 키인 (중복 제거 연산) 2. 집합 연산을 지원하는 자료구조 (부분집합)
// 일반적인 프로그래밍에서의 set : 접근자 setter (get/set). 설정. 대입.

// set되지 않은 키 호출 했을 때
const o = {};
console.log("o.a", o.a); // undefined
const mmm = new Map();
console.log("mmm.get('a')", mmm.get("a")); // undefined
// Java, Python -> 없는 키를 호출 했을 때의 대응이 다르다
// Java (get): 없는 것 호출하면 null
// getOrDefault...
// Python ([]): key Error
// Python (get): None
// setdefault...

// has로 체크를 해서 true, false로 만들거나 비교연산자등 테크닉으로 truthy, falsy, undefined를 대응하는 ?? 연산자 등을 활용

// ... 연산자를 사용을 해서...
const oo = { a: 1234, b: 12345 };
console.log([...Object.entries(oo)]);
const aa = ["a", "a", "a", "d", "d"];
const sss = new Set(aa);
const aa2 = [...sss]; // set은 for문으로 push해서 넣든가 해야하는데...
// 분해할당을 시켜서 추가해주시면 처리할 수 있다
console.log(aa, aa2);

// 자바 때 좀 더 제대로 + 문제 풀이