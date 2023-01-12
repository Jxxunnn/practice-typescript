type 함수타입 = (a :string) => 3;

const 함수123 :함수타입 = function () {
    return 3
}
함수123("ㅁㄴㅇ")

let 회원정보2 = {
    name : "kim",
    plusOne(a) {
        return a+1
    },
    changeName: () => {}
}

회원정보2.plusOne(3)

type MemberType = {name : string, age : number, plusOne : (x :number) => number, changeName : () => void}

let 회원정보5 :MemberType = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }
  회원정보5.plusOne(1);
  회원정보5.changeName();

type func1 = (x :string) => string
type func2 = (x :string) => number

  const cutZero = (x) => {
    if(x[0] === "0") return x.slice(1)
    else return x
  }
  const removeDash = (x) => {
    let result = x.replace(/-/g,"")
    return parseInt(result)
  }
  const ccccc = (x) => {
    return x
  }

type func3 = (x: string, cutZero: func1, removeDash: func2) => void 

const 만들함수 :func3 = (x, fun4, fun5) => {
    console.log(fun5(fun4(x)))
}

만들함수('010-1111-2222', ccccc, removeDash)




