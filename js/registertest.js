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

// 正则验证
var flag1 = false;
var flag2 = false;
var flag3 = false;
var reg1 = /^[^£¥€§※☆★○●◎◇◆□■△▲▽▼→←←↑↓↔〓◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿{}\[\]/?;:|)*~`!^+<>@#$%&=×÷₩•°¤《》¡¿("\\�-�]+$/
$("#familyname").keyup(function () {
    var str = $(this).val();
    if (!reg1.test(str)) {
        flag1 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入您的姓氏。")
        } else {
            $(this).next().next().html("名称不能包含特殊字符。");
        }
    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag1 = true;
    }
    test(flag1, flag2, flag3);
})


$("#givenname").keyup(function () {
    var str = $(this).val();
    if (!reg1.test(str)) {
        flag2 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入您的名字。")
        } else {
            $(this).next().next().html("名称不能包含特殊字符。");
        }

    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag2 = true;
    }
    test(flag1, flag2, flag3);
})

var reg2 = /^[0-9]{14,17}[0-9Xx]{1}$/;
$("#verifynumber").keyup(function () {
    var str = $(this).val();
    if (!reg2.test(str)) {
        flag3 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入ID。")
        } else {
            $(this).next().next().html("您的身份证号码必须包含 15 到 18 个数字。");
        }

    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag3 = true;
    }
    test(flag1, flag2, flag3);
})


var flag4 = false;
var flag5 = false;
var flag6 = false;
var flag7 = false;
var reg1 = /^[^£¥€§※☆★○●◎◇◆□■△▲▽▼→←←↑↓↔〓◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿{}\[\]/?;:|)*~`!^+<>@#$%&=×÷₩•°¤《》¡¿("\\�-�]+$/
$("#familyname1").keyup(function () {
    var str = $(this).val();
    if (!reg1.test(str)) {
        flag4 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入您的姓氏。")
        } else {
            $(this).next().next().html("名称不能包含特殊字符。");
        }
    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag4 = true;
    }
    test1(flag4, flag5, flag6, flag7);
})

$("select").click(function () {

    flag7 = true;
    test1(flag4, flag5, flag6, flag7);
})

$("#givenname1").keyup(function () {
    var str = $(this).val();
    if (!reg1.test(str)) {
        flag5 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入您的名字。")
        } else {
            $(this).next().next().html("名称不能包含特殊字符。");
        }

    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag5 = true;
    }
    test1(flag4, flag5, flag6, flag7);
})

var reg2 = /^[0-9]{14,17}[0-9Xx]{1}$/;
$("#verifynumber1").keyup(function () {
    var str = $(this).val();
    if (!reg2.test(str)) {
        flag6 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入ID。")
        } else {
            $(this).next().next().html("您的身份证号码必须包含 15 到 18 个数字。");
        }

    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag6 = true;
    }
    test1(flag4, flag5, flag6, flag7);
})



// 验证所有输入是否合法封装
function test(flag1, flag2, flag3) {
    if (flag1 && flag2 && flag3) {
        $(".register1 .verification").css("opacity", 1);
        $(".register1 .verification").attr("href", "register.html");
    } else {
        $(".register1 .verification").css("opacity", .4);
        $(".register1 .verification").attr("href", "javascript:;");
    }
}
function test1(flag4, flag5, flag6, flag7) {
    if (flag4 && flag5 && flag6 && flag7) {
        $(".register2 .verification").css("opacity", 1);
        $(".register2 .verification").attr("href", "register.html");
    } else {
        $(".register2 .verification").css("opacity", .4);
        $(".register2 .verification").attr("href", "javascript:;");
    }
}

//身份证，军人证切换
$(".register1 .replace").click(function () {
    $(".register1").css("display", "none")
    $(".register2").css("display", "block")
})

$(".register2 .replace").click(function () {
    $(".register1").css("display", "block")
    $(".register2").css("display", "none")
})





