var 회원 = "kim";
회원 = 123;
var 회원들2 = [1, 2, 3];
var 회원들3 = 3;
var 오브젝트 = { a: "123" };
var 회원2;
회원 = 123;
회원 = true;
회원2 = [];
var 회원3;
회원3 = 123;
회원3 = {};
var 회원4 = 회원2;
//let 회원5 :string = 회원3;
var 숫자;
//숫자 -1 
var 나이2;
//나이 + 1;
var 나이3 = 1;
//나이3 -1;
var Word = /** @class */ (function () {
    function Word() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        rest.forEach(function (v) {
            if (typeof v === "number") {
                nums.push(v);
            }
            else {
                strs.push(v);
            }
        });
        this.num = [];
        this.str = [];
    }
    return Word;
}());
