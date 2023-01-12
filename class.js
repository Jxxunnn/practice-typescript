var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person1;
}());
var 사람1 = new Person1("kim");
var 사람2 = new Person1("park");
사람1.함수("안녕");
console.log(사람1);
var Person6 = /** @class */ (function () {
    function Person6() {
    }
    Person6.prototype.add = function (숫자) {
        console.log(숫자 + 1);
    };
    return Person6;
}());
var 사람3 = new Person6;
사람3.add(123);
