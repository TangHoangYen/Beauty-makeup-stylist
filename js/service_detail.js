var arr_picture = [
        "img_1/service-wedding/service-4.jpg",
        "img_1/service-wedding/service-11.jpeg",
        "img_1/service-wedding/service-8.jpg",
        "img_1/service-wedding/service-9.jpg",
];
var index = 0;
function next() {
        index++;
        if (index > 3) index = 0;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}
function back() {
        index--;
        if (index < 0) index = 3;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}
function picture_0() {
        index = 0;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}
function picture_1() {
        index = 1;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}
function picture_2() {
        index = 2;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}
function picture_3() {
        index = 3;
        var show = document.getElementById("show");
        show.src = arr_picture[index];
}

$(function () {
        // $(".detail .service_picture .picture ul li").click(function () {
        //         $imgSrc = $(this).attr("datasrc");
        //         $(".detail .img  img").attr("src", $imgSrc);
        //         $(this).addClass("active");
        //         $(this).siblings().removeClass("active");
        //         $(".add .product .img img").attr("src", $imgSrc);
        // });
        $(".detail .service_picture .picture ul li").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
        });

        $(".typeClick").click(function () {
                $type = $(this).attr("type");
                $quality = $(this).parent().find("input").val();
                if ($type == "plus") {
                        $quality++;
                } else if ($type == "minus" && $quality > 1) {
                        $quality--;
                }
                $(this).parent().find("input").val($quality);
        });

        $(".hair_style ul li ").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $datastyle = $(this).attr("datastyle");
                $(" h4 span").text($datastyle);
                $(".desc span ").text($datastyle);
        });
        $(".trademarks ul li ").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $datalabel = $(this).attr("datalabel");
                $(" h5 span").text($datalabel);
                $(".trademark_s span ").text($datalabel);
        });

        $(".detail .trademarks ul li").click(function () {
                $(this).toggleClass("active");
                $(this).siblings().removeClass("active");
        });

        $(".btn").click(function () {
                $(".add").addClass("active");

                setTimeout(() => {
                        $(".add").removeClass("active");
                }, 3000);
        });
});
