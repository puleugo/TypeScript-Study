type SuperPrint = <T>(a: T[]) => T;
type Temp = <T, M>(a: T[], b: M) => T;
type AnyPrint = (a: any[]) => any;

const superPrint: SuperPrint = (a) => a[0];
const anyPrint: AnyPrint = (a) => a[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, true, "c"]);
const n = anyPrint([1, true, "c"]);
// any와 Generic의 차이 : 동적으로 보호받음
// d.toUpperCase() // 보호 받음
// n.toUpperCase() // 보호 받지 못함
