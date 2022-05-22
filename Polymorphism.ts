// 다형성 (Polymorphism)이란?
// Poly: 여러개
// Mophos, Morphic : 구조, 형태
// 여러 구조 or 여러 형태
type SuperPrint = {
  // (arr : number[]): void
  // (arr : boolean[]): void
  // (arr : string[]): void
  // (arr : (number|boolean|string)[]): void
  <TypePlaceholder>(arr: TypePlaceholder[]): void; // Generic타입 : 동적으로 타입 부여가 변한다. -> 다형성(여러 형태)
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, true, "c"]);

type SuperPrint2 = {
  <T>(arr: T[]): T;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];

// a, b, c, d에 부여될 수 있는 타입이 각기 다름.
const a = superPrint2([1, 2, 3, 4]);
const b = superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, true, "c"]);
