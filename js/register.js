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

//密码正则验证
var flag = false;
$(".pass input").focus(function(){
    $(".pass .notice").css("display","block")
})
$(".pass input").blur(function(){
    $(".pass .notice").css("display","none")
})
var reg = /^[0-9A-Za-z_]{8,}$/;  //强密码
var reg3 = /^[a-z0-9]{1,7}$/;  //太弱
var reg4 = /^[a-z0-9]{8,}$/;  //弱密码
var reg5 = /^[a-zA-Z0-9!@#\$%\^&*?]{8,}$/ //太强
$("#pass1").keyup(function () {
    $(this).next().next().children().eq(0).css("background","#eee");
    $(this).next().next().children().eq(1).css("background","#eee");
    $(this).next().next().children().eq(2).css("background","#eee");
    $(this).next().next().children().eq(2).css("background","#eee");
    var str = $(this).val();
    if (reg3.test(str)) {     
        // $(this).css("border-color", "#d0021b");
        // $(this).css("color", "#d0021b");
        // $(this).prev().css("color", "#d0021b");     
        $(this).next().next().next().html("太弱");
        $(this).next().next().next().css("color","#d0021b");
        $(this).next().next().css("background","#eee");
        $(this).next().next().css("display","block");
        $(this).next().next().children().eq(0).css("background","#d0021b");
        flag = false;
    } else if(reg4.test(str)){
        // alert()
        flag = true;
        $(this).next().next().next().html("弱密码");
        $(this).next().next().next().css("color","#f0652f");
        $(this).next().next().css("background","#eee");
        $(this).next().next().css("display","block");
        $(this).next().next().children().eq(0).css("background","#f0652f");
        $(this).next().next().children().eq(1).css("background","#f0652f");
    }else if(reg.test(str)){
        $(this).next().next().next().html("强密码");
        $(this).next().next().next().css("color","##b7e305");
        $(this).next().next().css("background","#eee");
        $(this).next().next().css("display","block");
        $(this).next().next().children().eq(0).css("background","#b7e305");
        $(this).next().next().children().eq(1).css("background","#b7e305");
        $(this).next().next().children().eq(2).css("background","#b7e305");
    }else if(reg5.test(str)){
        $(this).next().next().next().html("太强");
        $(this).next().next().next().css("color","#76bc28");
        $(this).next().next().css("background","#eee");
        $(this).next().next().css("display","block");
        $(this).next().next().children().eq(0).css("background","#76bc28");
        $(this).next().next().children().eq(1).css("background","#76bc28");
        $(this).next().next().children().eq(2).css("background","#76bc28");
        $(this).next().next().children().eq(3).css("background","#76bc28");
    }
    test(flag,flag1, flag2, flag3,flag4,flag5);
})

// 确认密码
var flag4 = false;
$("#pass2").blur(function () {
    var str1 = $("#pass1").val();
    var str2 = $("#pass2").val();
    if(str1 != str2){
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");     
        $(this).next().next().html("密码不匹配");
        flag4 = false;     
    }else{
        flag4 = true;
    }
    test(flag,flag1, flag2, flag3,flag4,flag5);
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
    test(flag,flag1, flag2, flag3,flag4,flag5);
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
    test(flag,flag1, flag2, flag3,flag4,flag5);
})

var reg2 = /^\w+@\w+(\.\w+)+$/;
$("#email").keyup(function () {
    var str = $(this).val();
    if (!reg2.test(str)) {
        flag3 = false;
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");
        if (str == "") {
            $(this).next().next().html("请输入e-mail。")
        } else {
            $(this).next().next().html("电子邮件地址无效");
        }

    } else {
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");
        $(this).next().next().html("");
        flag3 = true;
    }
    test(flag,flag1, flag2, flag3,flag4,flag5);
})

// 随机验证码
$(".code div").html(yzm(8))
$(".code div").css("font-size",rand(30,40))
$(".code img").click(function(){
    $(".code div").html(yzm(8))
})

//验证验证码
var flag5 = false
$("#code").keyup(function(){
    var str1 = $(".code div").html();
    var str2 = $("#code").val();
    console.log(str1,str2)
    if(str1 != str2){
        $(this).css("border-color", "#d0021b");
        $(this).css("color", "#d0021b");
        $(this).prev().css("color", "#d0021b");     
        $(this).next().next().html("验证码不正确");
        flag5 = false;  
    }else{
        $(this).css("border-color", "#1428a0");
        $(this).css("color", "#1428a0");
        $(this).prev().css("color", "#1428a0");     
        $(this).next().next().html(""); 
        flag5 = true;  
    }
    test(flag,flag1, flag2, flag3,flag4,flag5);
})





// 验证所有输入是否合法封装
function test(flag,flag1, flag2, flag3,flag4,flag5) {
    if (flag1 && flag2 && flag3 && flag4 && flag5 && flag) {
        $(".register1 .verification").css("opacity", 1);
        $(".register1 .verification").click(function(){
            var deff = $.ajax({
                tyoe : "get",
                url : `php/register.php?username=${$("#email").val()}&password=${$("#pass1").val()}`,
                async : true
            })
            
            deff.done(function(res){
                console.log(res);
                if(res == 1){
                    alert("注册成功");
                    
                    location.href = "registerresult.html";
                    // $.cookie("loginuser",$("#email").val(),{ expires : 3 })
                }else{
                    alert("注册失败"); 
                    location.href = "register.html";
                }
            })
        })
        // $(".register1 .verification").attr("href", `php/register.php?username=${$("#email").val()}&password=${$("#pass1").val()}`);
        $(".register1 .verification").click(function(){
            $.cookie( "userinfo" , $("#email").val()  , { expires : 3 } );
        })
    } else {
        $(".register1 .verification").css("opacity", .4);
        $(".register1 .verification").attr("href", "javascript:;");
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








