const 제목 = document.querySelector("#title");

const 링크 = document.querySelector(".link")
if(링크 instanceof HTMLAnchorElement){
링크.href = "https://kakao.com"
}

let 버튼 = document.querySelector(".button")
버튼?.addEventListener("click", ()=>{})

if(제목 instanceof Element){
    제목.innerHTML = "반가워요"
    }
if(제목 !== null){
제목.innerHTML = "반가워요"
}
const 제목2 = document.querySelector("#title") as Element;

let 버튼2 = document.getElementById("button")
if(버튼2 instanceof HTMLButtonElement){
버튼2.addEventListener("click", function () {
  console.log("안녕");
});
}

const $anchors = document.querySelectorAll(".naver")

$anchors?.forEach((a)=>{
    if(a instanceof HTMLAnchorElement) {
        a.href = "kakao.com"
    }
})