// select清空样式
$("select").prop("selectedIndex", -1)

$("select").focus(function () {
    $(this).css("border-color", "#1428a0")
    $(this).css("border-width", "2px")
    $(this).prev().css("color", "#1428a0")
    $(this).prev().animate({
        "top": -30,
        "font-size": 14
    }, 300)
})

$("select").blur(function () {
    console.log($("select option:selected").html())
    if ($("select option:selected").html() == "") {
        $(this).css("border-color", "#ddd")
        $(this).prev().css("color", "#767676")
        $(this).next().next().html("");
        $(this).prev().animate({
            "top": -5,
            "font-size": 20
        }, 300)
    }
})

//输入特效

$("input").focus(function () {
    $(this).css("border-color", "#1428a0")
    $(this).css("border-width", "2px")
    $(this).prev().css("color", "#1428a0")
    $(this).prev().animate({
        "top": -30,
        "font-size": 14
    }, 300)
})

$("input").blur(function () {
    if ($(this).val() == "") {
        $(this).css("border-color", "#ddd")
        $(this).prev().css("color", "#767676")
        $(this).next().next().html("");
        $(this).prev().animate({
            "top": -5,
            "font-size": 20
        }, 300)
    }
})



// 随机验证码
$(".code div").html(yzm(8))
$(".code div").css("font-size",rand(30,40))
$(".code img").click(function(){
    $(".code div").html(yzm(8))
})

//验证验证码
var flag = false
$("#code").keyup(function(){
    var str1 = $(".code div").html();
    var str2 = $("#code").val();
    console.log(str1,str2)
    if(str1 != str2){
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");     
        $(this).next().next().html("验证码不正确");
        flag = false;  
    }else{
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");     
        $(this).next().next().html(""); 
        flag = true;  
    }
    test(flag);

    function test(flag) {
        if (flag) {
            $(".register1 .verification").attr("href", `php/login.php?user=${$("#email").val()}&upwd=${$("#pass").val()}`);
        } else {
            $(".register1 .verification").attr("href", "javascript:;");
        }
    }
})





