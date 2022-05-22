var superPrint = function (arr) {
    arr.forEach(function (i) { return console.log(i); });
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, true, "c"]);
var superPrint2 = function (arr) { return arr[0]; };
// a, b, c, d에 부여될 수 있는 타입이 각기 다름.
var a = superPrint2([1, 2, 3, 4]);
var b = superPrint2([true, false, true]);
var c = superPrint2(["a", "b", "c"]);
var d = superPrint2([1, true, "c"]);
