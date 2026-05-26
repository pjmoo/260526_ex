// 커스텀 에러
class MyError extends Error {}

try {
  // 뭔가 내가 마음에 안드는 상황
  throw new MyError("무언가 잘못됐어 단단히");
  //   throw new Error();
} catch (e) {
  // instanceof 분류해서 처리하거나
  console.log(e); // MyError: 무언가 잘못됐어 단단히
  //   throw e; // 그대로 상위로 올려서 처리를 막을 수도 있음
  // 이걸 처리할 새로운 catch가 있거나, 시스템 실행 종료
  //   console.log("뒤는 도달 못하고...");
}

// function 1 : function 외부로 전파
function f() {
  return f2();
}
function f2() {
  throw new Error("f2에서 발생"); // 최상위에 있는 실행 상황이나 catch 만날 때까지는 throw -> 블록을 뚫고 나감
  return true;
}
try {
  console.log("f", f());
} catch (e) {
  console.log(e);
}

// function 2 : function return & finally
// try {
//   console.log(1);
//   a.a; // 일종의 return, break, continue 흐름제어 -> 지금까지 하던 거 멈추기
//   console.log(2);
// } finally {
//   // 앞에 에러가 있든 말든 이제 뒤에 이 작업을 하겠다
//   // 이것만 있고 catch가 없으면 에러는 try에서 중지된 그 지점 이후엔 무시
//   console.log("f");
// }

function ff() {
  const ccc = 0; // for문처럼 블록 내에서 선언된건 스코프 문제 있으니까 바깥에 써라.
  try {
    if (Math.random() >= 0.5) {
      a.a;
    }
    const ccc = 0;
    return "TRY 리턴";
  } catch {
    console.log(ccc); // 여기선 모름
    return "CATCH 리턴";
  } finally {
    console.log(ccc);
    // finally가 무조건 마지막에 실행되기 때문에
    // 앞에서 return은 함수블록을 종료시키는 의미만 있고, 반환에서는 우선권 X
    return "FINALLY 리턴";
    // finally에서는 return을 쓰지 말라고 권장
  }
}

console.log(ff());