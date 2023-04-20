$(function () {
        $(" .title").click(function () {
                $(this).toggleClass("active");
                $(this).parent().find(".content").slideToggle();
                $(".select").parent().find(".card").slideToggle();
                $(".select").parent().find(".transfer").slideToggle();
        });
        // $(" .content .text ul li").click(function () {
        //         $(".content .card").addClass("active");
        // });
        // $(".payment .content .text ul li").click(function () {
        //         $(this).toggleClass("active");
        //         $(this).parent().find(".content").slideToggle();
        // });

        $("  .radio_2").click(function right() {
                $(".payment .select .card").addClass("active");
                $(".payment .select .transfer").removeClass("active");

                // $(".payment .select .card").addClass("active");
                // $(".payment .select").parent().find(".card").slideToggle();
        });
        $(" .radio_1").click(function left() {
                $(".payment .select .transfer").addClass("active");
                $(".payment .select .card").removeClass("active");
        });
        $(" .payment .pay .content .card ul li").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
        });
});
// var fullname = document.querySelector("#fullname");
// var phone = document.querySelector("#phone");
// var address = document.querySelector("#address");
// var address_makeup = document.querySelector("#address_makeup");
// var email = document.querySelector("#email");
// var error = document.querySelector(".error");

// function validate() {
//         if (fullname.value == "" || phone.value == "" || address.value == "" || address_makeup.value == "" || email.value == "") {
//                 error.innerHTML = "Bạn chưa nhập đủ thông tin";
//         } else if (phone.value.length > 11 || phone.value.length < 9) {
//                 error.innerHTML = "Số điện thoại không hợp lệ";
//         } else {
//                 error.innerHTML = "Thông tin đã được lưu";
//         }
// }

// var name_card = document.querySelector("#name_card");
// var number_card = document.querySelector("#number_card");
// var cvv = document.querySelector("#cvv");
// var expire_date = document.querySelector("#expire_date");
// var error1 = document.querySelector(".error1");

$(".trademark .slide-inner").slick({
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
});
