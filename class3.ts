class User11 {
    protected x = 10;
}

class NewUser extends User11 {
    doThis() {
        this.x = 20;
    }
}


class User10 {
    private static x = 10;
    y = 20;
}

let 자식3 = new User10();
console.log(자식3)

class User44 {
    intro ="전문가입니다"
}
//let 철수 = new User();
//console.log(철수)

class User00 {
    static skill = "js"
    intro = User00.skill + "전문가입니다";
}
User00.skill = "ts"
const 철수 = new User00();
console.log(철수)