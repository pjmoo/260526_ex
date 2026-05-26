// exception

try {
  const a = null;
  a.a = 1;
  // TypeError: Cannot set properties of null (setting 'a')
  console.log("여기는 올 수 있을까?");
} catch {
  // 에러의 세부사항은 모르겠고, 일단 try 구문에서 발행(될지도 모르는..) 에러를 커버.
  console.log("에러가 있었음");
}

try {
  const a = null;
  a.a = 1;
  // TypeError: Cannot set properties of null (setting 'a')
  console.log("여기는 올 수 있을까?");
} catch (e) {
  console.log(e);
  console.error(e);
}

try {
  const r = Math.random();
  if (r >= 0.5) {
    r = 100; // TypeError: Assignment to constant variable.
  } else {
    console.log(a); // ReferenceError: a is not defined
  }
} catch (e) {
  //   console.log(e);
  console.log(typeof e);
  if (e instanceof TypeError) {
    console.log("타입 에러네요");
  } else if (e instanceof ReferenceError) {
    console.log("레퍼런스 에러네요");
  } else {
    console.log("모르는 에러네요");
  }
}