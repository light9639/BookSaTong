$(function() {
    //로그인 버튼 클릭시 색깔 변화
    $('.loginBox>form>.year>.button1').click(function () {
        $(this).toggleClass("buttonActive")
            .siblings()
            .removeClass("buttonActive");
    })
    $('.loginBox>form>.year>.button2').click(function () {
        $(this).toggleClass("buttonActive")
            .siblings()
            .removeClass("buttonActive");
    })

    // 회원가입 완료 클릭시 초기화
    $('.signUpButton>input').click(function () {
        $(".loginBox>form>.year>.button1").removeClass("buttonActive");
        $(".loginBox>form>.year>.button2").removeClass("buttonActive");
    })

    //체크박스 누르면 전체클릭
    $(document).ready( function() {
        $('.check-all').click( function() {
            $('.ab').prop('checked', this.checked );
        });
    });
})