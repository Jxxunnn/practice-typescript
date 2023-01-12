let 이름0 :123
이름0 = 123

let 접니다 :"대머리" | "솔로"
접니다 = "솔로"

function 함1수(a :"hello") :1 | 0{
    return 1
}
함1수("hello")

function 가위바위보(x :"가위" | "바위" | "보") :("가위" | "바위" | "보")[] {
    return [x]
}
가위바위보("가위")

const 자료 = {
    name : "kim"
}
function 내함수1(a :"kim"){

}
내함수(자료.name)