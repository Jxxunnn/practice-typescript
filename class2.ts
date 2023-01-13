class User {
    public name :string;
    private familyName :string ="kim";
    private age = 30;
    constructor(name){
        this.name = name + this.familyName
    }
    이름변경함수() {
        this.familyName = "park";
    }
}
const 유저20 = new User("park")

class Person3 {
    constructor(public name :string, ) {
    }
}
const 자식 = new Person3("kim")