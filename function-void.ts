function 함수(x :number) :number {
    return x*2

}
함수(3)

function 함수2(x? :number) :void {
   1+1
}
함수2()

function 함수3(x :number | string) :void {
    if(typeof x === "number"){
    console.log(x + 3)
    }
}
함수(2)

function 함수4(x) :void {
    1+1
 }
 함수4(19)

 function 함수5(name? :string) :void {
    if(name){
    console.log(`안녕하세요 ${name}`)
    }
    else {
        console.log("이름이 엇습니다.")
    }
 }
 함수5("준근")

 function calculateProbabilityOfMarriage(
  income: number,
  hasHouse: boolean,
  charmScore: string
): void | string {
  let score: number = 0;
  score += income;
  if(hasHouse) score += 500;
  if(charmScore === "상") score += 100
  if(score >= 600) return "결혼가능"
}