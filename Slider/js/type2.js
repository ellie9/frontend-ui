$(document).ready(function(){
    // 숨김처리
    $("#slider ul li.item:gt(0)").hide(); // gt :

    setInterval(function(){
        // 2 - 3 - 1   end 중요 처음으로 돌아가게함 메소드 체이닝
        $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        
    }, 2000); // fadeOut 시간과 fadeIn 시간의 합 계산

});