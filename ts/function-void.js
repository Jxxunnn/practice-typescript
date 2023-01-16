function 함수(x) {
    return x * 2;
}
함수(3);
function 함수2(x) {
    1 + 1;
}
함수2();
function 함수3(x) {
    if (typeof x === "number") {
        console.log(x + 3);
    }
}
함수(2);
function 함수4(x) {
    1 + 1;
}
함수4(19);
function 함수5(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log("이름이 엇습니다.");
    }
}
함수5("준근");
function calculateProbabilityOfMarriage(income, hasHouse, charmScore) {
    var score = 0;
    score += income;
    if (hasHouse)
        score += 500;
    if (charmScore === "상")
        score += 100;
    if (score >= 600)
        return "결혼가능";
}
//let a :number | bigint = 3;
//a + 1
