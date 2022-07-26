$(function () {
    $(".btn>li").click(function (e) {
        let selectNum = $(this).index();

        $(this)
            .addClass("active")
            .siblings().removeClass("active");

        $(".first_contents>ul")
            .eq(selectNum)
            .css("display", "block")
            .siblings().css("display", "none");
    })

    $(".btn1>li").click(function (e) {
        let selectNum1 = $(this).index();

        $(this)
            .addClass("active")
            .siblings().removeClass("active");

        $(".second_contents>ul")
            .eq(selectNum1)
            .css("display", "block")
            .siblings().css("display", "none");
    })
})