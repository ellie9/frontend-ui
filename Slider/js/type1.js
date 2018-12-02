$(document).ready(function(){

    // slider 라는 id속성을 가진 element 를 선택
    // jquery 
    // $("#slider") -> document.getElementById("slider")
    // $(".slider") -> document.getElementsByClass("slider")


   $items = $("#slider ul li.item");
   // setTimeout();

   var currentIndex = 1;
   var imgCount = $items.length; //3 li 개수

   setInterval(function(){
        // if (currentIndex >= 3) { 3보다 크면 0으로 반환
        
        if (currentIndex >= imgCount) {
            currentIndex = 0;
        }

        $items.removeClass('active'); 
        // 1. 모든 이미지에 active 클래스 삭제
        $items.eq(currentIndex++).addClass('active');
        
   }, 1000);
});