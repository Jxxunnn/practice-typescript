function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
함수(1, 2, 3, 4, 5);
var 변수 = ["안녕", 100][0];
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
var object = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수(object);
/* function 함수({user, comment, admin} :UserType3) {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
함수( { user : 'kim', comment : [3,5,4], admin : false } ) */
function 함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    for (var key in arguments[0]) {
        console.log(arguments[0][key]);
    }
}
함수({ user: 'kim', comment: [3, 5, 4], admin: false });
