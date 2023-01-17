const 멍멍 :(string|boolean)[] = ["dog", true]
const 냥냥 :[string, number?, boolean?] = ["cat",3, true]

function 함수(...rest :[number, string]) {
    console.log(rest)
}
함수(1,"@@2")

const arr = [1,2,3];
const arr2 = [4,5]
const arr3 :[number, ...number[]] = [1, ...arr2]