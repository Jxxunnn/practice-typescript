let 회원 :(number | string | boolean) = "kim";
회원 = 123;

let 회원들2 :(number | string) [] = [1,2,3];
let 회원들3 : number | string[] = 3;
let 오브젝트 :{a: string | number} = {a: "123"};

let 회원2 :any;
회원 = 123;
회원 = true;
회원2 = [];

let 회원3 :unknown;
회원3 = 123;
회원3 = {};

let 회원4 :string = 회원2;
//let 회원5 :string = 회원3;

let 숫자 :unknown;
//숫자 -1 

let 나이2 :string|number;
//나이 + 1;

let 나이3 :unknown = 1;
//나이3 -1;

class Word {
    num;
    str;
    constructor(...rest) {

    const nums :number[] = [];
    const strs :string[] = [];
 
    rest.forEach((v)=> {
      if(typeof v === "number") {
        nums.push(v)
    } else {
        strs.push(v)
    }})
      

      this.num  = [];
      this.str = []; 
    }
  }
  