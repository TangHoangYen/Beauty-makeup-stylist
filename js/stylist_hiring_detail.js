$(function () {
        $(".detail .time_hiring ul li ").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $datatime = $(this).attr("datatime");
                $(" .detail .price span").text($datatime);
        });

        $(".typeClick").click(function () {
                $type = $(this).attr("type");
                $quality = $(this).parent().find("input").val();
                if ($type == "plus") {
                        $quality++;
                } else if ($type == "minus" && $quality > 2) {
                        $quality--;
                }
                $(this).parent().find("input").val($quality);
        });

        $(".btn").click(function () {
                $(".s-popup-2").addClass("active");

                setTimeout(() => {
                        $(".s-popup-2").removeClass("active");
                }, 3000);
        });
});
