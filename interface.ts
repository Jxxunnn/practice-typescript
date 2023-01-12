interface Square {color : string, width : number}
//type Square = {color : string, width : number}

let 네모 :Square = {color :"red" , width : 100}

interface Student {name : string};
interface Teacher extends Student {
    age : number
}
//interface Teacher {name: string, age: number};

let 학생 :Student = {name: "kim"}
let 선생 :Teacher = {name :"kim", age:20}