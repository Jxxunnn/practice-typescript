var User = /** @class */ (function () {
    function User(name) {
        this.familyName = "kim";
        this.age = 30;
        this.name = name + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return User;
}());
var 유저20 = new User("park");
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var 자식 = new Person3("kim");
