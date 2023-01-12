class Person1 {
    name :string;
    constructor(name :string){
        this.name = name
    }
    함수(a :string){
        console.log("안녕" + a)
    }
}

let 사람1 = new Person1("kim");
let 사람2 = new Person1("park");
사람1.함수("안녕")
console.log(사람1)

class Person6 {
    add(숫자: number) {
      console.log(숫자 + 1);
    }
  }

let 사람3 = new Person6
사람3.add(123)