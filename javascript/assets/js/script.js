//결과보기 버튼을 클릭하면 경고창을 띄워주세요
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.classList.toggle("active");
    });
})

// document.querySelector(".result").addEventListener("click," () => {});  //화살표 함수로 나타낸다면 function을 지워주고 화살표를 사용.