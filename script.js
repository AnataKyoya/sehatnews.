$(document).ready(function () {
    setTimeout(() => {
        $(".swiper").css("width", "100%");
        $(".text-swiper").css("transform", "translateX(0)");
    }, 500)

    setTimeout(() => {
        $(".obj-loading").css("opacity", "1");
        setTimeout(() => {
            $(".text-swiper").css("opacity", "0");
        }, 800)
        let a = 0;
        let b = 0;
        let c = 0;
        let loadThr = setInterval(() => {
            $(".thr-obj.first").css("margin-top", "-" + a + "px");
            a = a + 4;
            if (a > 512) {
                a = 0;
                c = c + 512;
            }
            if (c == 2048) {
                $(".thr-obj.first").css("margin-top", "-519px");
                clearInterval(loadThr);
                $("main").css("display", "block");
                $(".swipe").css("align-items", "end");
                $(".swiper").css("background-color", "#ffffff");
            }
        }, 1)

        let loadTw = setInterval(() => {
            $(".tw-obj.first").css("margin-top", "-" + b + "px");
            b = b + 1;
            if (b > 450) {
                if (b > 519) {
                    b = 519;
                    clearInterval(loadTw);
                    $(".fst-obj").css("top", "0");
                    $(".text-swiper").css("transform", "translateX(400%)");
                    setTimeout(() => {
                        $(".obj-loading").css("opacity", "0");
                    }, 800)
                    setTimeout(() => {
                        $(".swiper").css("width", "0");
                        setTimeout(() => {
                            $(".start").css("display", "none");
                        }, 1500)
                    }, 1000)
                }
            }
        }, 1)
    }, 2000);

    let spanC = 1;
    let moveSpan = 0;

    setInterval(() => {
        let widthSpan = $(`.teks-kiri div span:nth-child(${spanC})`).width();
        $(".teks-kiri div span:nth-child(1)").css("margin-top", "-" + moveSpan + "px")
        spanC = spanC + 1;
        moveSpan = moveSpan + 38;

        $(".teks-kiri div").css("width", (widthSpan + 19))

        if (spanC > 3) {
            spanC = 1;
        }

        if (moveSpan > 76) {
            moveSpan = 0;
        }
    }, 3000)

    $(".menu").click(function (e) {
        e.preventDefault();

        $(".slider-nav").addClass("open");
    });

    $(".div-close").click(function (e) {
        e.preventDefault();

        $(".slider-nav").removeClass("open");
    });

    click();

    let direct = 0

    function click() {
        $(".arr-kanan").bind("click", function (e) {
            e.preventDefault();
            direct = 1;
            $(".kumpulan-gambar").css("transform", "translate(-33.3%,0)");

            $(".arr-kanan").unbind("click");
        });
    }

    $(".kumpulan-gambar").bind("transitionend", function (e) {
        $(".kumpulan-gambar").append($(".img-artikel:first-child"))

        $(".judul-artikel").text($(".img-artikel:first-child img").attr("alt"));
        $(".teks-artikel .category-article").text($(".img-artikel:first-child .index").attr("data-kategori"));
        $(".teks-artikel a").attr("href", $(".img-artikel:first-child .index").attr("data-url"));

        $(".kumpulan-gambar").css("transition", "none");
        $(".kumpulan-gambar").css("transform", "translate(0,0)")
        setTimeout(() => {
            $(".kumpulan-gambar").css("transition", "1s");
        }, 100)

        setTimeout(() => {
            click();
        }, 500)
    });

    $(".lembar-artikel").on('mouseover', function () {
        $(".lembar-artikel").removeClass('hover');
        $(this).addClass('hover');
    });
});