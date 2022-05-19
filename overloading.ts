// 오버로딩이란?
// 한 함수가 여러개의 callSignature를 가지고 있을 때 가지는 문제점이다.
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b == "number") {
    return a + b;
  } else {
    return a;
  }
};
console.log(add(1, 2)); // 3
console.log(add(1, "test")); // 1

// 파라미터의 개수가 다른 오버로딩
type MultAdd = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: MultAdd = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

console.log(add2(1, 2));
console.log(add2(1, 2, 3));
