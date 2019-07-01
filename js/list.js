//吸顶效果
$(document).scroll(function () {
    if ($("html,body").scrollTop() >= $("header").height()) {
        $("nav").css({ "position": "fixed", "top": 0, "z-index": 99, "width": "100%" })
    } else {
        $("nav").css({ "position": "" })
    }
})


//回到顶部
$(document).scroll(function () {
    if ($("html,body").scrollTop() >= 100) {
        $(".back").css("display", "block");
    } else {
        $(".back").css("display", "none");
    }
})
$(".back").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300)
})



// bar显示
var deff = $.ajax({
    type: "get",
    url: "json/bar1.json?_id=" + new Date().getDate(),
    async: true
})
deff.done(function (json) {
    for (var i in json) {
        $("nav .nav .left").append($(`<li name=${i}>${json[i].name}</li>`))
        // console.log(json[i].name)
    }
    $("nav .nav .left").on("mouseenter", "li", function () {
        $("nav .bar .l ol").html("");
        $("nav .bar .r dl").html("");
        for (var i in json) {
            if ($(this).html() == json[i].name) {

                for (var j in json[i].list) {
                    $("nav .bar .l ol").append($(` <li>
                                                        <a href="item.html?panme=${json[i].list[j].id}">
                                                            <img src="${json[i].list[j].src}" alt="">
                                                            <p>${json[i].list[j].name}</p>
                                                        </a>
                                                    </li>`))
                }
                for (var k in json[i].type) {
                    $("nav .bar .r dl").append($(`<dt><a href="javascript:;">${json[i].type[k].name}</a></dt>`))
                    for (var m in json[i].type[k].list) {
                        $("nav .bar .r dl").append($(`<dd><a href="javascript:;">${json[i].type[k].list[m]}</a></dd>`))
                    }
                }
            }
        }
        $("nav .bar").stop().slideDown(200);
        $(this).addClass("selected").siblings().removeClass("selected")
    })
    $("nav .nav .left").on("mouseleave", "li", function () {
        $("nav .bar").stop().slideUp(200, function () {
            $("nav .nav ul li").removeClass("selected")
        });

    })
    $("nav .bar").mouseenter(function () {
        $("nav .bar").css("display", "block").stop();
    })
    $("nav .bar").mouseleave(function () {
        $("nav .bar").stop().slideUp(200, function () {
            $("nav .nav ul li").removeClass("selected")
        });
    })
})


//bar跳转list页面
$("nav .nav .left").on("click","li",function(){
    location.href = `list.html?type=${$(this).attr("name")}`
})

$("nav .nav .left").on("mouseenter","li",function(){
    $(this).css("cursor","pointer")
})
 

// 登录用户名显示

var uname = $.cookie("loginuser");
if(uname){
    $(".login").html("<i class='iconfont'>&#xe608;</i>" + uname)

}

// 列表显示
var str = location.href;
str = str.split("?")[1];
str = str.split("=")[1];
var deff1 = $.ajax({
    type : "get",
    url : "json/list.json?_id="+new Date().getDate(),
    async : true,
    success : function(json){
        for(let i in json){
            if(i == str){
                $("main nav span").html("网上商城 > " + json[i].name)
                $("section .right .title").html(json[i].name)
                for(let j in json[i].list){
                    $("section .right ul").append(`<li>
                                                        <a href="item.html?pname=${json[i].list[j].id}">
                                                            <img src="${json[i].list[j].src}" alt=""><br>
                                                            <span class="color" style="background:${json[i].list[j].bg1}"></span>
                                                            <span class="color" style="background:${json[i].list[j].bg2}"></span>
                                                            <span class="color" style="background:${json[i].list[j].bg3}"></span>
                                                            <span class="color" style="background:${json[i].list[j].bg4}"></span>
                                                            <span class="color" style="background:${json[i].list[j].bg5}"></span>
                                                            <h1>${json[i].list[j].name}</h1>
                                                            <h2>${json[i].list[j].price}</h2>
                                                        </a>
                                                    </li>`)
                }
            }
        }
    }
})


