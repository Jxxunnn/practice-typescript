const 멍멍 :(string|boolean)[] = ["dog", true]
const 냥냥 :[string, number?, boolean?] = ["cat",3, true]

function 함수(...rest :[number, string]) {
    console.log(rest)
}
함수(1,"@@2")