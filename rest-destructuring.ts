function 함수(...rest: number[]) {
    console.log(rest)
}
함수(1,2,3,4,5)

const [변수] = ["안녕",100]
const {student, age} = {student:true, age:20}
const object = {student: true, age: 20}

function 함수({student, age}) {
    console.log(student, age)
}
함수(object)

interface UserType3 {user :string, comment :number[], admin :boolean}

/* function 함수({user, comment, admin} :UserType3) {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
함수( { user : 'kim', comment : [3,5,4], admin : false } ) */
function 함수({user, comment, admin} :UserType3) {
    for(const key in arguments[0]){
        console.log(arguments[0][key])
    }
}
함수( { user : 'kim', comment : [3,5,4], admin : false } )