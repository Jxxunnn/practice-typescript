function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수2(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
내함수2(123);
function 내함수3(x) {
    var array = [];
    array[0] = x;
}
내함수2(123);
function cleanNumberArray(array) {
    return array.map(function (item) {
        if (typeof item === "string")
            return parseInt(item);
        else
            return item;
    });
}
