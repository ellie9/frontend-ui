$(document).ready(function(){
    /* Mouse Over Event 를 통해서 
     *setInterval() 제어한다
    */
    $("#slider ul li.item:gt(0)").hide(); // gt :

    var fading = function(){
        setInterval(function(){
            $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        }, 2000)
    };  // 함수형 변수

    fading();

    $("#slider").hover(function(){
        console.log("Mouse In");
        clearInterval(fading);
    }, function(){
        console.log("Mouse Out");
        fading();
    });

});