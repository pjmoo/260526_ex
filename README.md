# JavaScript 자료구조 · OOP · 예외 처리 · DSA

JavaScript의 내장 자료구조와 배열 고차 함수, 객체 지향 프로그래밍, 예외 처리, 그리고 문제 해결(PS)을 위한 자료구조·알고리즘(DSA) 기초를 실습한 저장소입니다. PDF 내용 중 자료구조 주제는 가장 최신 자료인 `146_DSA.pdf`를 기준으로 연결해 정리했습니다.

## 학습 자료

| 자료 | 핵심 내용 |
| --- | --- |
| `144-1_JavaScript_자료구조_기초.pdf` | Object, Array, Map, Set의 역할과 CRUD, 숫자 정렬 |
| `144-2_JavaScript_자료구조_심화.pdf` | `forEach`·`map`·`filter`·`reduce`, 메서드 체이닝, 얕은/깊은 복사 |
| `145-1_JavaScript_클래스.pdf` | 객체 리터럴, `this`, prototype, class, 상속, 캡슐화 |
| `145-2_JavaScript_예외처리.pdf` | `try`/`catch`/`finally`, 사용자 정의 에러, `throw`와 rethrow |
| `146_DSA.pdf` | 정확성과 효율성, 큐 구현, DSA·PS 학습 방향 |

## 실습 파일 구성

- [01_map.js](01_map.js): Object와 Map의 차이, Map의 CRUD와 순회
- [02_set.js](02_set.js): Set으로 중복 제거 및 포함 여부 검사
- [03_higher.js](03_higher.js): `sort`, `forEach`, `map`, `filter`, `reduce`, 체이닝
- [04_copy.js](04_copy.js): 참조·얕은 복사·깊은 복사의 차이
- [05_oop.js](05_oop.js), [06_class1.js](06_class1.js), [07_class2.js](07_class2.js): 객체, prototype, class, private 필드, 상속, static
- [08_exception.js](08_exception.js), [09_exception.js](09_exception.js): 에러 분류, `throw`, `try`/`catch`/`finally`

## 핵심 정리

### 1. 자료구조 선택

- **Object**는 속성을 묶는 일반 객체에 적합하다. 키·값을 배열로 다루려면 `Object.keys()`, `Object.values()`, `Object.entries()`를 사용한다.
- **Array**는 순서가 있는 목록에 적합하다. `push`/`pop`은 끝에서 작업하고, `shift`/`unshift`는 앞 요소를 재배치할 수 있으므로 비용을 의식한다.
- **Map**은 키의 타입 제약이 적고, `set`, `get`, `has`, `delete`, `size`처럼 키-값 관리 목적이 분명할 때 적합하다.
- **Set**은 중복 없는 값의 집합이다. `new Set(array)`과 전개 연산자(`...`)를 조합하면 배열의 중복을 간단히 제거할 수 있다.

```js
const uniqueNumbers = [...new Set([1, 2, 2, 3])];
// [1, 2, 3]
```

숫자를 정렬할 때 `sort()`만 사용하면 문자열 기준으로 정렬된다. 따라서 비교 함수를 명시한다.

```js
numbers.sort((a, b) => a - b); // 오름차순
numbers.sort((a, b) => b - a); // 내림차순
```

### 2. 배열 고차 함수와 불변성

- `forEach`는 각 요소에 부수 효과(출력, 외부 상태 변경)를 수행할 때 쓴다.
- `map`은 모든 요소를 변환한 **새 배열**을 만든다.
- `filter`는 조건을 통과한 요소만 담은 **새 배열**을 만든다.
- `reduce`는 누적값과 현재값을 이용해 배열을 하나의 값(합계, 객체, 새 배열 등)으로 축약한다. 초기값을 명시하면 빈 배열이나 타입 변화에도 안전하다.

```js
const total = scores
  .filter((score) => score >= 60)
  .map((score) => score + 10)
  .reduce((sum, score) => sum + score, 0);
```

객체를 `=`로 대입하면 값이 복사되는 것이 아니라 같은 참조를 공유한다. `{ ...object }`는 최상위만 복사하는 얕은 복사이므로 중첩 객체는 공유된다. 중첩 구조까지 분리해야 한다면 `structuredClone()`을 우선 고려한다.

```js
const copied = structuredClone(original);
```

### 3. 객체와 클래스

- 객체 리터럴에서는 속성 단축 표기, 계산된 속성명(`[key]`), 메서드 단축 표기를 사용할 수 있다.
- 일반 메서드의 `this`는 호출한 객체를 가리킨다. 생성자나 클래스 내부에서는 `new`로 만들어지는 인스턴스를 가리킨다.
- 인스턴스마다 동일한 메서드를 만들기보다 `prototype` 또는 class 메서드에 두면 메서드를 공유할 수 있다.
- class는 prototype 기반 문법을 더 읽기 쉽게 표현한 문법이다. `#field`로 내부 상태를 숨기고, getter/setter로 검증된 접근 경로를 제공할 수 있다.
- 상속에서는 `extends`로 부모를 지정하고, 자식 생성자에서는 `this`를 사용하기 전에 `super()`를 호출한다. 공용 기능은 `static`으로 클래스에 둔다.

### 4. 예외 처리

`try`에는 실패할 수 있는 작업을, `catch`에는 복구 또는 사용자 안내를 둔다. 에러는 `name`, `message`, `stack` 정보를 가지며 `instanceof`로 종류별 대응을 할 수 있다.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

try {
  throw new ValidationError('이름은 필수입니다.');
} catch (error) {
  if (error instanceof ValidationError) console.error(error.message);
  else throw error; // 여기서 처리할 수 없는 에러는 상위로 전달
}
```

`finally`는 성공·실패와 관계없이 정리 작업을 수행하는 곳이다. 연결 해제나 로딩 상태 복구에 적합하지만, `finally`의 `return`은 앞선 `return`이나 예외를 덮어쓸 수 있으므로 피한다. 또한 `try`, `catch`, `finally` 각각은 블록 스코프이므로 공유할 값은 바깥에 `let`으로 선언한다.

### 5. DSA와 문제 해결

문제 해결에서는 **정확성**과 **효율성**을 함께 본다. 입력 크기와 시간·메모리 제한을 먼저 확인하고, 그에 맞는 자료구조와 알고리즘을 고른다.

JavaScript에서 큐를 단순히 `Array.prototype.shift()`로 구현하면 앞 요소를 꺼낼 때마다 나머지 요소가 이동해 `O(N)`이 될 수 있다. 인덱스(`head`, `tail`)와 객체 저장소를 사용하면 enqueue/dequeue를 `O(1)`로 처리할 수 있다.

```js
class FastQueue {
  #storage = {};
  #head = 0;
  #tail = 0;

  enqueue(item) {
    this.#storage[this.#tail++] = item;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const item = this.#storage[this.#head];
    delete this.#storage[this.#head++];
    return item;
  }

  get size() {
    return this.#tail - this.#head;
  }
}
```

DSA 학습은 쉬운 문제로 입출력과 언어 문법을 익힌 뒤, 자료구조를 학습하고 같은 유형의 문제를 반복해 푸는 흐름으로 진행한다. 언어를 바꾸기보다 한 언어로 자료구조와 문제 풀이 습관을 먼저 만드는 편이 좋다.

## TIL

- 자료구조는 단순히 데이터를 담는 방식이 아니라, 필요한 연산의 시간 복잡도를 결정하는 선택이다.
- `Map`은 키-값 조회, `Set`은 중복 제거·존재 확인처럼 목적에 맞게 선택해야 코드의 의도가 선명해진다.
- `map`/`filter`/`reduce`는 원본을 바꾸지 않는 흐름을 만들기 쉽지만, `sort()`는 원본 배열을 변경하므로 주의한다. 원본을 보존하려면 `toSorted()` 또는 복사 후 정렬한다.
- 전개 연산자 복사는 중첩 객체까지 안전하게 복사하지 않는다. 복사가 필요한 데이터의 깊이를 먼저 판단한다.
- `finally`는 정리 작업용이며, 반환값을 만들 장소가 아니다.
- JavaScript로 PS를 할 때 배열의 앞쪽 삭제 비용을 간과하지 않는다. 큐·스택·우선순위 큐·연결 리스트 같은 기본 구조와 시간 복잡도를 함께 익힌다.

## 실행 방법

Node.js가 설치된 환경에서 원하는 실습 파일을 실행한다.

```bash
node 01_map.js
node 03_higher.js
node 08_exception.js
```
