interface StringOnly {
    [key :string] : string | number
}

const user :StringOnly = {
    name : "kim",
    age : "20",
    location : "seoul",
    asd : 123,
    1 : 123
}
interface MyType {
    "font-size" : MyType | number
}

const css :MyType = {
    "font-size" : {
        "font-size" : {
            "font-size" : 14
        }
    }
}