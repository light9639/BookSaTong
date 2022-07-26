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
    }, 4000);
    $(".bannerBtn").on({
        "mouseenter": function () {
            clearInterval(BannerTimer);
        },
        "mouseleave": function () {
            BannerTimer = setInterval(() => {
                $(".bannerNextBtn").trigger("click");
            }, 4000);
        }
    })

    // 사람들이 많이 읽고 있는 웹툰 & 소설 크기 조절
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
        }, 500)
    }
    $(".readBook_NextBtn").on("click", function () {
        if (readBookSNum > 8) {
            readBookSNum = 0;
            $(".readBook_banner").css("margin-left", -readBookSNum * readSubLiWidth)
        }
        readBookSNum++;
        moveReadBook();
    })
    $(".readBook_PrevBtn").on("click", function () {
        if (readBookSNum == 0) {
            readBookSNum = 9;
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
        }, 500)
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

    // item 크기 조절
    let itemSNum = 0;
    let itemShow = 4;
    var firstObj = $(".item_Img>li:lt(5)").clone();
    var lastObj = $(".item_Img>li:gt(12)").clone();
    $(".item_Img").append(firstObj);
    $(".item_Img").prepend(lastObj);
    let itemSubCount = $(".item_Img>li").length;
    console.log(itemSubCount);
    var itemSubWidth = itemSubCount * 100 / itemShow;
    $(".item_Img").outerWidth(itemSubWidth + "%");
    var itemSubLiWidth = $(".item_Img").outerWidth() / itemSubCount
    $(".item_Img>li").outerWidth(itemSubLiWidth);

    function itemInit() {
        itemSNum = 0;
        let itemWidth = $(window).outerWidth();
        if (itemWidth < 767) {
            itemShow = 2;
            $(".item_Img").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else {
            itemShow = 4;
            $(".item_Img").css({
                "margin-left": 0,
                "left": 0
            });
            itemSubLiWidth = $(".item_Img").outerWidth() / itemSubCount
        }
        itemSubWidth = itemSubCount * 100 / itemShow;
        $(".item_Img").outerWidth(itemSubWidth / 2 + "%");
        itemSubLiWidth = $(".item_Img").outerWidth() / itemSubCount;
        $(".item_Img>li").outerWidth(itemSubLiWidth * 2);
    }
    itemInit();

    // item 클릭시 이동
    function moveitem() {
        $(".item_Img").stop().animate({
            "margin-left": (-itemSNum * itemSubLiWidth) * 4
        }, 750)
    }
    $(".item_NextBtn").on("click", function () {
        if (itemSNum > 7) {
            itemSNum = -1;
            $(".item_Img").css("margin-left", -itemSNum * itemSubLiWidth)
        }
        console.log(itemSNum);
        itemSNum++;
        moveitem();
    })
    $(".item_PrevBtn").on("click", function () {
        if (itemSNum == 0) {
            itemSNum = 9;
            $(".item_Img").css("margin-left", -itemSNum * itemSubLiWidth)
        }
        console.log(itemSNum);
        itemSNum--;
        moveitem();
    })

    // item 자동 이동
    let MoveitemTimer = setInterval(() => {
        $(".item_NextBtn").trigger("click");
    }, 3000);
    $(".item_innerBox>.innerBox").on({
        "mouseenter": function () {
            clearInterval(MoveitemTimer);
        },
        "mouseleave": function () {
            MoveitemTimer = setInterval(() => {
                $(".item_NextBtn").trigger("click");
            }, 3000);
        }
    })

    // Event 크기 조절
    let EventSNum = 0;
    let EventShow = 5;
    var firstObj = $(".EventImg>li:lt(5)").clone();
    var lastObj = $(".EventImg>li:gt(5)").clone();
    $(".EventImg").append(firstObj);
    $(".EventImg").prepend(lastObj);
    let EventSubCount = $(".EventImg>li").length;
    var EventSubWidth = EventSubCount * 100 / EventShow;
    $(".EventImg").outerWidth(EventSubWidth + "%");
    var EventSubLiWidth = $(".EventImg").outerWidth() / EventSubCount
    $(".EventImg>li").outerWidth(EventSubLiWidth);

    function EventInit() {
        EventSNum = 0;
        let EventWidth = $(window).outerWidth();
        if (EventWidth < 767) {
            EventShow = 1;
            $(".EventImg").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else if (EventWidth < 1024) {
            EventShow = 2;
            $(".EventImg").css({
                "margin-left": 0,
                "left": 0
            });
        }
        else {
            EventShow = 3;
            $(".EventImg").css({
                "margin-left": 0,
                "left": 0
            });
            EventSubLiWidth = $(".EventImg").outerWidth() / EventSubCount
        }
        EventSubWidth = EventSubCount * 100 / EventShow;
        $(".EventImg").outerWidth(EventSubWidth + "%");
        EventSubLiWidth = $(".EventImg").outerWidth() / EventSubCount;
        $(".EventImg>li").outerWidth(EventSubLiWidth);
    }
    EventInit();

    // Event 클릭시 이동
    function moveEvent() {
        $(".EventImg").stop().animate({
            "margin-left": -EventSNum * EventSubLiWidth
        }, 750)
    }
    $(".Event_NextBtn").on("click", function () {
        if (EventSNum > 9) {
            EventSNum = 0;
            $(".EventImg").css("margin-left", -EventSNum * EventSubLiWidth)
        }
        EventSNum++;
        moveEvent();
    })
    $(".Event_PrevBtn").on("click", function () {
        if (EventSNum == 0) {
            EventSNum = 10;
            $(".EventImg").css("margin-left", -EventSNum * EventSubLiWidth)
        }
        EventSNum--;
        moveEvent();
    })

    // .footmenu clearFix 추가 제거
    function clearFix() {
        wWidth = $(window).outerWidth();
        if (wWidth > 767) {
            $(".footMenu").removeClass("clearFix");
        }
        else {
            $(".footMenu").addClass("clearFix");
        }
    }

    //이미지 사이즈 조절
    $(window).on("resize", function () {
        clearFix();
        EventInit();
        itemInit();
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