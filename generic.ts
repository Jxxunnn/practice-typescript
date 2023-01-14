function 함수2(x: unknown[]){
    return x[0]
}
함수2([4,2])
function 함수<MyType>(x :MyType[]) :MyType{
    return x[0]
}

const a = 함수<number>([4,2])
const b = 함수<string>(["2"])

console.log(a)

interface LengthCheck {
    length : number
}

function 함수3<MyType extends LengthCheck>(x : MyType){
    return x.length
}
let d = 함수3<string[]>([])
