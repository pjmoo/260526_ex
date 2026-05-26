// 고차함수 <- 함수를 패러미터로 받거나 리턴하는 경우

// sort
const a = [1, 13, 5, 8, 3];
// 정렬한다 -> for문?
// [배열 내장 메서드]
console.log(a);

console.log(a.sort()); // [ 1, 13, 3, 5, 8 ]
// 자바스크립트의 기본 정렬은 '문자열'화 시킨다음에 정렬을 합니다
// 13, 2 -> 2가 뒤에 옴.
// [1]-3, [2]-.. => 작은 순서에서 큰 순서로 배치하는 것 -> 오름차순
// 오름차순 : 데이터가 등장하는 방향과 데이터를 배치하는 순서/방향이 일치할 때 (ascending)
// 내림차순 : 데이터가 등장하는 방향과 데이터가 커지는 방향이 반대일 때 (descending)

console.log(a); // 자바스크립트에서는 sort 메서드 사용 시 본래값도 변경을 하고, 변경된 값(배열)도 리턴을 한다
// a.toSorted() - 원본에 영향을 미치지 않고 정렬된 결과만 가져다주는 내장 메서드
function compare(a, b) {
  // 앞 원소. 뒤 원소 2개.
  // 1, 5, 13, 8, 2
  // (1, 5) -> 1 - 5 => + (1 더 큰 것), - (5 더 큰 것), 0이면 그대로
  return a - b; // b - a (내림차순)
}
const compare2 = function (a, b) {
  return b - a; // 내림차순 (큰게 앞으로 오게)
};
console.log(a.sort(compare)); // 함수를 사용해서 정렬을 한다
// [ 1, 3, 5, 8, 13 ]
console.log(a.sort(compare2)); // [ 13, 8, 5, 3, 1 ]
console.log(
  a.sort(function (a, b) {
    return a - b;
  }),
); // [ 1, 3, 5, 8, 13 ]
console.log(a.sort((a, b) => b - a));
// [ 13, 8, 5, 3, 1 ]
const a2 = [1, -3, 5, -19, 7];
// 화살표 함수가 가장 일반적으로 고차함수 구현시 패러미터로 사용됨
console.log(a2.sort((a, b) => Math.abs(a) - Math.abs(b)));

// 배열 내장 메서드 <- 함수를 패러미터로 쓰기 때문에 고차함수
a2.forEach(console.log); // 괄호를 안한 순수함수가 내장 메서드들을 위한 호출용함수로 쓸 수 있다
// () 없이 붙이면 알아서 필요할 때 호출해서 써라 / () 붙이면 -> 값을 써라
a2.forEach((v) => console.log(v));
// 배열 내장 메서드에 패러미터로 들어가는 함수 -> fn(value, index, array)
// value : 값 자체. index : 0부터 시작되는 인덱스, array : 전체 배열

// for of, for in, for와 비슷한데 -> 중간에 흐름제어를 못하는 for문. forEach.
// 함수형 프로그래밍?

// map -> 대체. a, b, c, d, e, f => (...) => a', b', c', d', e', f'...
console.log(a2);
// map -> [value], index, array
console.log(a2.map((v) => Math.abs(v))); // [ 1, 3, 5, 7, 19 ]
console.log(a2.map(Math.abs)); // [ 1, 3, 5, 7, 19 ]
console.log(
  a2.map((v, i) => {
    if (i % 2 == 0) {
      // 0, 2, 4...
      return v ** 2;
    } else {
      return 0; // 1, 3, 5...
    }
  }),
); // [ 1, 0, 25, 0, 361 ]
console.log(a2.map((v, i) => (i % 2 == 0 ? v ** 2 : 0)));
// [ 1, 0, 25, 0, 361 ]
console.log(a2.map((v, i) => (!(i % 2) ? v ** 2 : 0))); // 숏 코딩.
// 배열 -> for문. 압축되지 않은 표현식 -> (함수화) -> 배열 내장 메서드 (고차함수) + 고급 연산자들을 사용해서 표현식 압축