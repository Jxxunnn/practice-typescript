type Fish = {swim :String}
type Bird = {fly :string}

function 함수(animal :Fish | Bird){
    if("swim" in animal){
    console.log(animal.swim)
    }
}
함수({swim: "asd", fly: "asd"})

// 오브젝트 instanceof 부모class

const 날짜 = new Date()
if(날짜 instanceof Date) {

}

type Car = {
    wheel : "4개",
    color : string
}
type Bike = {
    wheel : "2개",
    color : string
}

function 함수(x :Car | Bike) {
    if(x.wheel === "4개"){
        console.log("x는 Car타입이에요")
    }
}

//let arrr = []