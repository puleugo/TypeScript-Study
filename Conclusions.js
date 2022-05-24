function superPrint(a) {
    return a[0];
}
var a = superPrint([1, 2, 3, 4]); // 이런 형태도 가능
var b = superPrint([true, false, true]);
var c = superPrint(["a", "b", "c"]);
var d = superPrint([1, true, "c"]);
var puleugo = {
    // const puleugo: Player<{ favFood: string }> = {
    name: "puleugo",
    extraInfo: {
        favFood: "hamburger"
    }
};
var lynn = {
    //재사용 예시
    name: "lynn",
    extraInfo: null
};
var temp = [1, 2, 3, 4];
