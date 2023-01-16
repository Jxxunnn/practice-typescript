var 함수123 = function () {
    return 3;
};
함수123("ㅁㄴㅇ");
var 회원정보2 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
회원정보2.plusOne(3);
var 회원정보5 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보5.plusOne(1);
회원정보5.changeName();
var cutZero = function (x) {
    if (x[0] === "0")
        return x.slice(1);
    else
        return x;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseInt(result);
};
var ccccc = function (x) {
    return x;
};
var 만들함수 = function (x, fun4, fun5) {
    console.log(fun5(fun4(x)));
};
만들함수('010-1111-2222', ccccc, removeDash);
