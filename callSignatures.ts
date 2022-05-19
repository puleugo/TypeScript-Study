// 화살표 함수
const add = (a: number, b: number) => a + b;
console.log(add(1, 2));

// 타입 생성
type Add = (a: number, b: number) => number;
const add2: Add = (a, b) => a + b;
