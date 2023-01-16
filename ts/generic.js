function 함수2(x) {
    return x[0];
}
함수2([4, 2]);
function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
var b = 함수(["2"]);
console.log(a);
function 함수3(x) {
    return x.length;
}
var d = 함수3([]);
