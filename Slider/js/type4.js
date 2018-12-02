$(document).ready(function(){
    /*  */

    /* 화살표 함수  => 무명함수 function(){}*/
    /* (event) => 
        function(event,type) -> event =>
    */
    $(window).resize(() => {
        resizePanelPosition();
    });

    function resizePanelPosition(){
        // Control Panel Positioning
        $left = $("#slider .control .left i");
        $right = $("#slider .control .right i");
        $controlPanel = $("#slider .control a");
        $img = $("#slider .item img");

        let imgHeight = $img.height();
        // console.log(imgHeight);

        let adjustPosition = imgHeight - imgHeight /2;
        // console.log(adjustPosition);

        $controlPanel.css("height", imgHeight + "px");
        $left.css("padding-top", adjustPosition + "px");
        $right.css("padding-top", adjustPosition + "px");

        console.log(".item last", $("#slider ul .item:first").last());
    }

    resizePanelPosition();

    /* Interval Image Slider */
    // Interval Control 을 위한 변수

    let sliding

    // 0번째 li를 제외한 element 를 hide (display:none;)
    $("#slider ul li:gt(0)").hide();

    // next image sliding
    function nextSlide() {
        $("#slider ul .item:first")
    }

});