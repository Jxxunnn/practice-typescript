var 제목 = document.querySelector("#title");
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector(".button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
if (제목 !== null) {
    제목.innerHTML = "반가워요";
}
var 제목2 = document.querySelector("#title");
var 버튼2 = document.getElementById("button");
if (버튼2 instanceof HTMLButtonElement) {
    버튼2.addEventListener("click", function () {
        console.log("안녕");
    });
}
var $anchors = document.querySelectorAll(".naver");
$anchors === null || $anchors === void 0 ? void 0 : $anchors.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "kakao.com";
    }
});
