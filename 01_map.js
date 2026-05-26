// Map
// 1. Map Vs Object
const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
// k, v -> 호출할 수 있는 이름 => 값
o["e"] = function () {
  console.log("e");
};
// 숫자를 넣으면 배열로 인식된다든가
// for (const v of o) {
// }
// TypeError: o is not iterable - 컬렉션이 아니다
// 1. 효율적이지도 않고
// 2. KV라는 목적에 충실하지도 않다
console.log(o);
const map = new Map(); // new - 생성자 -> Map()
// 데이터를 관리하는 여러 함수들 내장
// map.get, set, has...

// 왜 별도의 Map이 JavaScript에서 필요하게 되었는가? (Object로 충분하지 않나?)
o["aa"] = 1234;
// 객체명[프로퍼티명(리터럴 - 타자형태로 쳐서 표현할 수 있는 값)] = 값
o.bb = 12345; // 식별자 규칙을 위반하지 않는 (공백, 특수문자) 표현의 경우에는 변수처럼 바로 작성할 수 있음 (객체명.프로퍼티명)

// map은 set이라는 전용 함수로 처리
// map.set(키, 값)
map.set("aa", 1234);
map.set("bb", 12345);

// CRUD <- 다 거침

console.log(o["aa"], o.aa);
console.log(map.get("aa")); // 세팅할 값이 없으니까
// map.get(호출하려는 키)

// 객체에서 특정한 프로퍼티가 포함되었는지 'in'으로 검사
console.log(`"aa" in o`, "aa" in o);
console.log(`"cc" in o`, "cc" in o);
// 특정한 키의 포함 여부
console.log(map.has("aa"));
console.log(map.has("cc"));
// key - map 연결시킨다
console.log(map);
for (const c of map) {
  // 변환과정 등을 거치지 않아도
  // iterable하다
}
