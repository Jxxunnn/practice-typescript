type AnimalType = string | number | undefined;
type Animal2Type = {name: string, age: number} 

let 동물 :string | number | undefined;
let 동물1 :AnimalType = "kim";
let 동물2 :Animal2Type = {name:"kim", age:20}

const 출생지역 = "seoul"
const 출생지역2 = {region : "seoul"}

type GirlFriend = {
    readonly name : string,
    age? : number
}

const 여친 :GirlFriend = {
    name : "엠버"
}
//여친.name = "유라"

type Name = string;
type Age = number;
type Person = Name | Age;
type PositionY = { x : string }  
type PositionX = { x : number }


type Position =  PositionY & PositionX // {x:number ,y:number}

//const position :Position = {x:3,y:10}
type Figure = {color? :string, size :number, readonly position :number[]}

const figure :Figure = {size:100, position: [2,3]}