// 복제(복사)
const a = { b: { c: 1234 } }; // 구조가 복잡해서 중간에 메모리 주소라는 것으로 기록을 하기 때문에
// 중첩 객체인 b도 메모리 저장이기 때문에

// 재할당
const b = a; // 값 자체를 넣는게 아니라 메모리 주소
a["d"] = 5678;
console.log(a, b);

// 얕은 복사
const c = { ...a }; // e가 추가가 안되었다
a["e"] = 8765;
console.log(a, b, c);
a["b"]["f"] = "abcd"; // 중첩 구조를 깨려면...
console.log(a, b, c);

// 깊은 복사 - 메모리를 많이 먹어서 별로 안함 (immutation, final, const ...)
// 1. 아예 문자열로 바꿨다가 다시 새로운 객체를 구조 해석해서 만드는 방법 JSON.
// a.myFun = () => {};
a.un = undefined;
const jsonStr = JSON.stringify(a);
const jsonObj = JSON.parse(jsonStr); // 다시 객체화 되었다 = 다른 메모리주소다 (안에 중첩된 객체 마저도)
console.log(jsonObj);
a["b"]["g"] = true;
console.log(a, b, c, "jsonObj", jsonObj);
// 문자열로 표현하기 어려운 것은 생략함.
// 2. structuredClone
const s = structuredClone(a); // 선언류는 안된다
a["b"]["h"] = null;

console.log(a, b, c, "jsonObj", jsonObj, "s", s);