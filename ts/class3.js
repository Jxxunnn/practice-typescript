var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User11 = /** @class */ (function () {
    function User11() {
        this.x = 10;
    }
    return User11;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User11));
var User10 = /** @class */ (function () {
    function User10() {
        this.y = 20;
    }
    User10.x = 10;
    return User10;
}());
var 자식3 = new User10();
console.log(자식3);
var User44 = /** @class */ (function () {
    function User44() {
        this.intro = "전문가입니다";
    }
    return User44;
}());
//let 철수 = new User();
//console.log(철수)
var User00 = /** @class */ (function () {
    function User00() {
        this.intro = User00.skill + "전문가입니다";
    }
    User00.skill = "js";
    return User00;
}());
User00.skill = "ts";
var 철수 = new User00();
console.log(철수);
