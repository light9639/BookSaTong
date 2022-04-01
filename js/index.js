$(function () {
    // input 클릭시 변화
    $("input").focusin(function () {
        $(this).addClass("active")
    })
    $("input").focusout(function () {
        $(this).removeClass("active");
    })

    // 메뉴 마우스 호버
    $(".headBottom").mouseover(function () {
        $(".sub").stop().slideDown(500);
        $(".subBg").stop().slideDown(500);
    })
    $(".headBottom").mouseout(function () {
        $(".sub").stop().slideUp(500);
        $(".subBg").stop().slideUp(500);
    });

    // 메뉴 클릭시 색깔 변화
    $(".headerMenu>li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".headerMenu>li").mouseout(function () {
        $(this).removeClass("active");
    })
    $(".sub>li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".sub>li").mouseout(function () {
        $(this).removeClass("active");
    })

    //모바일 메뉴 클릭시 움직임
    $('.mobileMenu>li>a').click(function () {
        $(this).toggleClass("active")
            .parent()
            .siblings()
            .children("a").removeClass("active");

        $(this).next().slideToggle(300)
            .parent()
            .siblings()
            .children(".mobileSub").slideUp(300);
    })

    // x버튼 클릭시 모바일 메뉴 오른쪽으로 이동
    $('.Mobile>.mobileBox>a').click(function () {
        $(".Mobile").removeClass("mobileActive");
    })

    // x버튼 클릭시 모바일 메뉴 오른쪽으로 이동
    $('.headTop>a>i').click(function () {
        $(".Mobile").addClass("mobileActive");
    })

    //배너의 너비값
    var wWidth = $(window).outerWidth();
    var showBanner = 0;
    var showCount = 2;
    var first = $(".bannerSub>li:lt(2)").clone();
    var last = $(".bannerSub>li:gt(8)").clone();
    $(".bannerSub").append(first);
    $(".bannerSub").prepend(last);
    var bannerSubCount = $(".bannerSub>li").length;
    console.log(bannerSubCount)
    var bannerSubWidth = bannerSubCount * 100 / showCount;
    $(".bannerSub").outerWidth(bannerSubWidth + "%");
    var bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount
    $(".bannerSub>li").outerWidth(bannerSubLiWidth);

    function BannerInit() {
        showBanner = 0;
        if (wWidth > 767) {
            showCount = 2;
            $(".bannerSub").css({
                "margin-left": -bannerSubLiWidth/2,
                "left": 0
            });
        }
        else {
            showCount = 1;
            $(".bannerSub").css({
                "margin-left": 0,
                "left": 0
            });
            bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount
        }
        bannerSubWidth = bannerSubCount * 100 / showCount;
        $(".bannerSub").outerWidth(bannerSubWidth + "%");
        bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount;
        $(".bannerSub>li").outerWidth(bannerSubLiWidth);
    }
    BannerInit();

    // 배너 시작 시 BannerActive 추가
    if (wWidth > 767){
        $(".bannerSub>li").eq(1).addClass("BannerActive");
    } else {
        $(".bannerSub>li:first-child").addClass("BannerActive");
    }

    // 배너 이동
    function moveBannerSub() {
        $(".bannerSub").stop().animate({
            "left": -showBanner * bannerSubLiWidth
        }, 1000)
        if(wWidth > 767){
            $(".bannerSub>li").eq(showBanner+1).addClass("BannerActive").siblings().removeClass("BannerActive");
        } else {
            $(".bannerSub>li").eq(showBanner).addClass("BannerActive").siblings().removeClass("BannerActive");
        }
        if (showBanner == bannerSubCount) {
            $(".number>.count").text(1);
        }
        else {
            if(showBanner > 9) {
                $(".number>.count").text(1);
            } else {
                $(".number>.count").text(showBanner + 1);
            }
        }
    }
    $(".bannerNextBtn").on("click", function () {
        if (showBanner > 9) {
            showBanner = 0;
            $(".bannerSub").css("left", -showBanner * bannerSubLiWidth)
        }
        showBanner++;
        moveBannerSub();
    })
    $(".bannerPrevBtn").on("click", function () {
        if (showBanner == 0) {
            showBanner = 10;
            $(".bannerSub").css("left", -showBanner * bannerSubLiWidth)
        }
        showBanner--;
        moveBannerSub();
    })

    // 배너 자동이동
    let BannerTimer = setInterval(() => {
        $(".bannerNextBtn").trigger("click");
    }, 3000);
    $(".bannerBtn").on({
        "mouseenter": function () {
            clearInterval(BannerTimer);
        },
        "mouseleave": function () {
            BannerTimer = setInterval(() => {
                $(".bannerNextBtn").trigger("click");
            }, 3000);
        }
    })

    // 사람들이 많이 읽고 있는 책 크기 조절
    let readBookSNum = 0;
    let readBookShow = 3;
    var readFirstObj = $(".readBook_banner>li:lt(2)").clone();
    var readLastObj = $(".readBook_banner>li:gt(2)").clone();
    $(".readBook_banner").append(readFirstObj);
    $(".readBook_banner").prepend(readLastObj);
    let readSubCount = $(".readBook_banner>li").length;
    var readSubWidth = readSubCount * 100 / readBookShow;
    $(".readBook_banner").outerWidth(readSubWidth + "%");
    var readSubLiWidth = $(".readBook_banner").outerWidth() / readSubCount
    $(".readBook_banner>li").outerWidth(readSubLiWidth);

    function readBookInit() {
        readBookSNum = 0;
        let readWidth = $(window).outerWidth();
        if (readWidth < 767) {
            readBookShow = 2;
            $(".readBook_banner").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else {
            readBookShow = 3;
            readSubLiWidth = $(".readBook_banner").outerWidth() / readSubCount
        }
        readSubWidth = readSubCount * 100 / readBookShow;
        $(".readBook_banner").outerWidth(readSubWidth + "%");
        readSubLiWidth = $(".readBook_banner").outerWidth() / readSubCount;
        $(".readBook_banner>li").outerWidth(readSubLiWidth);
    }
    readBookInit();

    // 사람들이 많이 읽고 있는 책 클릭시 이동
    function moveReadBook() {
        $(".readBook_banner").stop().animate({
            "margin-left": -readBookSNum * readSubLiWidth
        }, 1000)
    }
    $(".readBook_NextBtn").on("click", function () {
        if (readBookSNum > 2) {
            readBookSNum = 0;
            $(".readBook_banner").css("margin-left", -readBookSNum * readSubLiWidth)
        }
        readBookSNum++;
        moveReadBook();
    })
    $(".readBook_PrevBtn").on("click", function () {
        if (readBookSNum == 0) {
            readBookSNum = 2;
            $(".readBook_banner").css("margin-left", -readBookSNum * readSubLiWidth)
        }
        readBookSNum--;
        moveReadBook();
    })

    // 집 앞 서점에 방금 나온 신간! 크기 조절
    let newBookSNum = 0;
    let newBookShow = 3;
    var newBookFirstObj = $(".newBook_Img>li:lt(2)").clone();
    var newBookLastObj = $(".newBook_Img>li:gt(8)").clone();
    $(".newBook_Img").append(newBookFirstObj);
    $(".newBook_Img").prepend(newBookLastObj);
    let newBookSubCount = $(".newBook_Img>li").length;
    var newBookSubWidth = newBookSubCount * 100 / newBookShow;
    $(".newBook_Img").outerWidth(newBookSubWidth + "%");
    var newBookSubLiWidth = $(".newBook_Img").outerWidth() / newBookSubCount
    $(".newBook_Img>li").outerWidth(newBookSubLiWidth);

    function newBookInit() {
        newBookSNum = 0;
        let newBookWidth = $(window).outerWidth();
        if (newBookWidth < 767) {
            newBookShow = 3;
        }
        else if (newBookWidth < 1024) {
            newBookShow = 4;
        }
        else {
            newBookShow = 5;
        }
        newBookSubWidth = newBookSubCount * 100 / newBookShow;
        $(".newBook_Img").outerWidth(newBookSubWidth + "%");
        newBookSubLiWidth = $(".newBook_Img").outerWidth() / newBookSubCount;
        $(".newBook_Img>li").outerWidth(newBookSubLiWidth);
    }
    newBookInit();

    // 집 앞 서점에 방금 나온 신간! 클릭시 이동
    function moveNewBook() {
        $(".newBook_Img").stop().animate({
            "margin-left": -newBookSNum * newBookSubLiWidth
        }, 1000)
    }
    $(".newBookNextBtn").on("click", function () {
        if (newBookSNum > 11) {
            newBookSNum = 0;
            $(".newBook_Img").css("margin-left", -newBookSNum * newBookSubLiWidth)
        }
        newBookSNum++;
        moveNewBook();
    })
    $(".newBookPrevBtn").on("click", function () {
        if (newBookSNum == 0) {
            newBookSNum = 12;
            $(".newBook_Img").css("margin-left", -newBookSNum * newBookSubLiWidth)
        }
        newBookSNum--;
        moveNewBook();
    })

    // 집 앞 서점에 방금 나온 신간! 자동 이동
    let NewBookTimer = setInterval(() => {
        $(".newBookNextBtn").trigger("click");
    }, 3000);
    $(".newBook_container>.innerBox").on({
        "mouseenter": function () {
            clearInterval(NewBookTimer);
        },
        "mouseleave": function () {
            NewBookTimer = setInterval(() => {
                $(".newBookNextBtn").trigger("click");
            }, 3000);
        }
    })

    // NEW ARRIVAL 크기 조절
    let arrivalSNum = 0;
    let arrivalShow = 4;
    var firstObj = $(".new_arrival_Img>li:lt(5)").clone();
    var lastObj = $(".new_arrival_Img>li:gt(12)").clone();
    $(".new_arrival_Img").append(firstObj);
    $(".new_arrival_Img").prepend(lastObj);
    let arrivalSubCount = $(".new_arrival_Img>li").length;
    console.log(arrivalSubCount);
    var arrivalSubWidth = arrivalSubCount * 100 / arrivalShow;
    $(".new_arrival_Img").outerWidth(arrivalSubWidth + "%");
    var arrivalSubLiWidth = $(".new_arrival_Img").outerWidth() / arrivalSubCount
    $(".new_arrival_Img>li").outerWidth(arrivalSubLiWidth);

    function arrivalInit() {
        arrivalSNum = 0;
        let arrivalWidth = $(window).outerWidth();
        if (arrivalWidth < 767) {
            arrivalShow = 2;
            $(".new_arrival_Img").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else {
            arrivalShow = 4;
            $(".new_arrival_Img").css({
                "margin-left": 0,
                "left": 0
            });
            arrivalSubLiWidth = $(".new_arrival_Img").outerWidth() / arrivalSubCount
        }
        arrivalSubWidth = arrivalSubCount * 100 / arrivalShow;
        $(".new_arrival_Img").outerWidth(arrivalSubWidth / 2 + "%");
        arrivalSubLiWidth = $(".new_arrival_Img").outerWidth() / arrivalSubCount;
        $(".new_arrival_Img>li").outerWidth(arrivalSubLiWidth * 2);
    }
    arrivalInit();

    // NEW ARRIVAL 클릭시 이동
    function moveArrival() {
        $(".new_arrival_Img").stop().animate({
            "margin-left": (-arrivalSNum * arrivalSubLiWidth) * 4
        }, 1000)
    }
    $(".new_arrival_NextBtn").on("click", function () {
        if (arrivalSNum > 7) {
            arrivalSNum = -1;
            $(".new_arrival_Img").css("margin-left", -arrivalSNum * arrivalSubLiWidth)
        }
        console.log(arrivalSNum);
        arrivalSNum++;
        moveArrival();
    })
    $(".new_arrival_PrevBtn").on("click", function () {
        if (arrivalSNum == 0) {
            arrivalSNum = 9;
            $(".new_arrival_Img").css("margin-left", -arrivalSNum * arrivalSubLiWidth)
        }
        console.log(arrivalSNum);
        arrivalSNum--;
        moveArrival();
    })

    // NEW ARRIVAL 자동 이동
    let MoveArrivalTimer = setInterval(() => {
        $(".new_arrival_NextBtn").trigger("click");
    }, 3000);
    $(".new_arrival_innerBox>.innerBox").on({
        "mouseenter": function () {
            clearInterval(MoveArrivalTimer);
        },
        "mouseleave": function () {
            MoveArrivalTimer = setInterval(() => {
                $(".new_arrival_NextBtn").trigger("click");
            }, 3000);
        }
    })

    // item 크기 조절
    let itemSNum = 0;
    let itemShow = 5;
    var firstObj = $(".itemImg>li:lt(5)").clone();
    var lastObj = $(".itemImg>li:gt(5)").clone();
    $(".itemImg").append(firstObj);
    $(".itemImg").prepend(lastObj);
    let ItemSubCount = $(".itemImg>li").length;
    var ItemSubWidth = ItemSubCount * 100 / itemShow;
    $(".itemImg").outerWidth(ItemSubWidth + "%");
    var ItemSubLiWidth = $(".itemImg").outerWidth() / ItemSubCount
    $(".itemImg>li").outerWidth(ItemSubLiWidth);

    function itemInit() {
        itemSNum = 0;
        let itemWidth = $(window).outerWidth();
        if (itemWidth < 767) {
            itemShow = 3;
            $(".itemImg").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else if (itemWidth < 1024) {
            itemShow = 4;
            $(".itemImg").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else {
            itemShow = 5;
            $(".itemImg").css({
                "margin-left": 0,
                "left": 0
            });
            ItemSubLiWidth = $(".itemImg").outerWidth() / ItemSubCount
        }
        ItemSubWidth = ItemSubCount * 100 / itemShow;
        $(".itemImg").outerWidth(ItemSubWidth + "%");
        ItemSubLiWidth = $(".itemImg").outerWidth() / ItemSubCount;
        $(".itemImg>li").outerWidth(ItemSubLiWidth);
    }
    itemInit();

    // item 클릭시 이동
    function moveItem() {
        $(".itemImg").stop().animate({
            "margin-left": -itemSNum * ItemSubLiWidth
        }, 1000)
    }
    $(".item_NextBtn").on("click", function () {
        if (itemSNum > 9) {
            itemSNum = 0;
            $(".itemImg").css("margin-left", -itemSNum * ItemSubLiWidth)
        }
        itemSNum++;
        moveItem();
    })
    $(".item_PrevBtn").on("click", function () {
        if (itemSNum == 0) {
            itemSNum = 10;
            $(".itemImg").css("margin-left", -itemSNum * ItemSubLiWidth)
        }
        itemSNum--;
        moveItem();
    })

    // .footmenu clearFix 추가 제거
    function clearFix() {
        wWidth = $(window).outerWidth();
        if (wWidth > 767) {
            $(".footMenu").removeClass("clearFix").siblings().addClass("clearFix");
        }
        else {
            $(".footMenu").addClass("clearFix").siblings().removeClass("clearFix");
        }
    }

    //이미지 사이즈 조절
    $(window).on("resize", function () {
        clearFix();
        itemInit();
        arrivalInit();
        newBookInit();
        readBookInit();
        wWidth = $(window).outerWidth();
        BannerInit();
    })

    // footer 패밀리사이트 up and down
    $('.familySite>a').click(function () {
        $(this).toggleClass("familyActive")
            .parent()
            .siblings()
            .children("a").removeClass("familyActive");

        $(this).next().slideToggle(300)
            .parent()
            .siblings()
            .children(".family").slideUp(300);
    })
})