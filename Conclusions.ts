function superPrint<T>(a: T[]) {
  return a[0];
}

const a = superPrint<number>([1, 2, 3, 4]); // 이런 형태도 가능
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, true, "c"]);

type Player<Extra> = {
  name: string;
  extraInfo: Extra;
};

type PuleugoExtra = {
  favFood: string;
};

type PuleugoPlayer = Player<PuleugoExtra>;

const puleugo: PuleugoPlayer = {
  // const puleugo: Player<{ favFood: string }> = {
  name: "puleugo",
  extraInfo: {
    favFood: "hamburger",
  },
};

const lynn: Player<null> = {
  //재사용 예시
  name: "lynn",
  extraInfo: null,
};

type A = Array<number>;

let temp: A = [1, 2, 3, 4];
