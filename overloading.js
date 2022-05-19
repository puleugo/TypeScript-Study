var add = function (a, b) {
    if (typeof b == "number") {
        return a + b;
    }
    else {
        return a;
    }
};
console.log(add(1, 2)); // 3
console.log(add(1, "test")); // 1
var add2 = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
console.log(add2(1, 2));
console.log(add2(1, 2, 3));
