function 내함수(x :number|string){
    if(typeof x === "string"){
    return x + "1"
    }
    else {
        return x + 1
    }
}
내함수(123)

function 내함수2(x :number|string){
    const array :number[] = [];
    if(typeof x === "number"){
        array[0] = x;
    }
}
내함수2(123)

function 내함수3(x :number|string){
    const array :number[] = [];    
    array[0] = x as number;
    
}
내함수2(123)

function cleanNumberArray(array :(string | number)[]) : number[] {
    return array.map((item)=>{
        if(typeof item === "string") return parseInt(item)  
        else return item
    })
}