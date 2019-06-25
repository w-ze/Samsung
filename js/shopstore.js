//吸顶效果
$(document).scroll(function(){
    console.log($("header").height())
    if($("html,body").scrollTop() >= $("header").height()){
        $("nav").css({"position" : "fixed","top" : 0,"z-index" : 99,"width" : "100%"})
    }else{
        $("nav").css({"position" : ""})
    }
})


//回到顶部
$(document).scroll(function(){
    if($("html,body").scrollTop() >= 100){
        $(".back").css("display","block");
    }else{
        $(".back").css("display","none");
    }
})
$(".back").click(function(){
    $("html,body").animate({scrollTop:0},300)
})



// bar显示
var deff = $.ajax({
    type : "get",
    url : "json/bar1.json?_id="+new Date().getDate(),
    async : true
})
deff.done(function(json){
    for(var i in json){
        $("nav .nav .left").append($(`<li>${json[i].name}</li>`))
        console.log(json[i].name)
    }
    $("nav .nav .left").on("mouseenter","li",function(){
        $("nav .bar .l ol").html("");
        $("nav .bar .r dl").html("");
        for(var i in json){
            if($(this).html() == json[i].name){
                
                for(var j in json[i].list){
                    $("nav .bar .l ol").append($(` <li>
                                                        <a href="javascript:;">
                                                            <img src="${json[i].list[j].src}" alt="">
                                                            <p>${json[i].list[j].name}</p>
                                                        </a>
                                                    </li>`))
                }
                for(var k in json[i].type){
                    $("nav .bar .r dl").append($(`<dt><a href="javascript:;">${json[i].type[k].name}</a></dt>`))
                    for(var m in json[i].type[k].list){
                        $("nav .bar .r dl").append($(`<dd><a href="javascript:;">${json[i].type[k].list[m]}</a></dd>`))           
                    }
                }
            }
        }
        $("nav .bar").stop().slideDown(200);
        $(this).addClass("selected").siblings().removeClass("selected")
    })
    $("nav .nav .left").on("mouseleave","li",function(){
        $("nav .bar").stop().slideUp(200,function(){
            $("nav .nav ul li").removeClass("selected")
        });

    })
    $("nav .bar").mouseenter(function(){
        $("nav .bar").css("display","block").stop();
    })
    $("nav .bar").mouseleave(function(){
        $("nav .bar").stop().slideUp(200,function(){
            $("nav .nav ul li").removeClass("selected")
        });
    })
})



// 大轮播
var ind = 0;
var ind1;
var timer1 = null;
timer1 = setInterval(function () {
    $("section .banner ul").animate({
        marginLeft: -$("section .banner ul li").width()
    }, 500, function () {
        ind++;
        $("section .banner ul li").first().appendTo($("section .banner ul"));
        $("section .banner ul").css("margin-left", 0);
        if (ind == 5) {
            ind = 0;
        }
        // console.log(i)
        // console.log($(".banner ol li a"))
        $("section .banner ol li").eq(ind).addClass("active").siblings().removeClass("active")
    })
}, 3000)

$("section .banner").mouseenter(function(){
    ind1 = ind;
    clearInterval(timer1);
})
$("section .banner").mouseleave(function(){
    ind = ind1;
    timer1 = setInterval(function () {
        $("section .banner ul").animate({
            marginLeft: -$("section .banner ul li").width()
        }, 500, function () {
            ind++;
            $("section .banner ul li").first().appendTo($("section .banner ul"));
            $("section .banner ul").css("margin-left", 0);
            if (ind == 5) {
                ind = 0;
            }
            // console.log(i)
            // console.log($(".banner ol li a"))
            $("section .banner ol li").eq(ind).addClass("active").siblings().removeClass("active")
        })
    }, 3000)
})

$("section .banner ol").on("click","li",function(){
    ind1 = $(this).index();
    if(ind1 >= ind){
        $("section .banner ul").animate({
            marginLeft: -(ind1-ind)*$("section .banner ul li").width()
        },500,function(){
            for(var i = 0;i < (ind1-ind);i++){
                $("section .banner ul li").first().appendTo($("section .banner ul"));
                $("section .banner ul").css("margin-left", 0);
            }
            $("section .banner ol li").eq(ind1).addClass("active").siblings().removeClass("active")
            ind = ind1;
        })
    }else{
        // console.log($("section .banner ul li").length)
        // console.log(-($("section .banner ul li").length-Math.abs(ind1-ind))*$("section .banner ul li").width())
        console.log(-($("section .banner ul li").length-Math.abs(ind1-ind))*$("section .banner ul li").width())
        $("section .banner ul").animate({
            marginLeft: -($("section .banner ul li").length-Math.abs(ind1-ind))*$("section .banner ul li").width()
        },500,function(){
            console.log($("section .banner ul").length-Math.abs(ind1-ind))
            for(var i = 0;i < $("section .banner ul li").length-Math.abs(ind1-ind);i++){
                $("section .banner ul li").first().appendTo($("section .banner ul"));
                $("section .banner ul").css("margin-left", 0);
            }
            $("section .banner ol li").eq(ind1).addClass("active").siblings().removeClass("active")
            ind = ind1;
        })
    }
    
})

//配件显示
var deff1 = $.ajax({
    type: "get",
    url: "json/accessories.json?_id=" + new Date().getDate(),
    async: true
});

deff1.done(function (json) {
    var ind = 0;
    var temp = "classify001";
    for (var i in json) {
        $(`<li><a href='javascript:;'>${json[i].name}</a></li>`).appendTo($(".accessories .nav ul"))
        for (var j in json[i].list) {
            if (json[i].list[j].price == json[i].list[j].originalprice) {
                // console.log(ind);
                if(temp != i){
                    ind++;
                    temp = i;
                }
                $(".accessories .product ul").eq(ind).append($(` <li>
                                                                    <a href="#"><img src=${json[i].list[j].src} alt=""></a>
                                                                    <h3>${json[i].list[j].name}
                                                                    <p class="word">${json[i].list[j].word}</p></h3>
                                                                    <p>${json[i].list[j].price}</p>
                                                                </li>`))
            } else {
                if(temp != i){
                    ind++;
                    temp = i;
                }
                $(".accessories .product ul").eq(ind).append($(` <li>
                                                                    <a href="#"><img src=${json[i].list[j].src} alt=""></a>
                                                                    <h3>${json[i].list[j].name}
                                                                    <p class="word">${json[i].list[j].word}</p></h3>
                                                                    <p>${json[i].list[j].price} <i>${json[i].list[j].originalprice}</i></p>
                                                                </li>`))
               
            }
        }
    }
    $(".accessories .nav li").eq(0).addClass("selected");

})


// 配件轮播
var ind3 = 0
var timer3 = setInterval(function(){
    $(".accessories .product ul").eq(ind3).fadeOut(1000);
    ind3++;
//    console.log(ind4)
    if(ind3 == 3){
        ind3 = 0;
    }
    $(".accessories .product ul").eq(ind3).fadeIn(1000);
    // console.log($(".accessories .nav a"))
    $(".accessories .nav li").eq(ind3).addClass("selected").siblings().removeClass("selected")
},3000)

// 配件点击选项卡事件
$(".accessories .nav ul").mouseenter(function () {
    clearInterval(timer3);
})
$(".accessories .nav ul").mouseleave(function () {
    timer3 = setInterval(function(){
        $(".accessories .product ul").eq(ind3).fadeOut(1000);
        ind3++;
        if(ind3 == 3){
            ind3 = 0;
        }
        $(".accessories .product ul").eq(ind3).fadeIn(1000);
        // console.log($(".accessories .nav a"))
        $(".accessories .nav li").eq(ind3).addClass("selected").siblings().removeClass("selected")
    },3000)
})
$(".accessories .nav ul").on("click","li",function () {
    ind3 = $(this).index();
    $(".accessories .product ul").eq(ind3).fadeIn(1000).siblings().not("span").fadeOut(1000);
    $(".accessories .nav li").eq(ind3).addClass("selected").siblings().removeClass("selected");
})

//配件左右箭头点击事件
$(".accessories .product span").eq(0).click(function(){
    ind3--;
})



// 小轮播
var ind2 = 0;
var ind5;
var timer5 = null;
timer5 = setInterval(function () {
    $(".activity .banner ul").animate({
        marginLeft: -$(".activity .banner ul li").width()
    }, 500, function () {
        ind2++;
        $(".activity .banner ul li").first().appendTo($(".activity .banner ul"));
        $(".activity .banner ul").css("margin-left", 0);
        if (ind2 == 3) {
            ind2 = 0;
        }
        // console.log(i)
        // console.log($(".banner ol li a"))
        $(".activity .banner ol li").eq(ind2).addClass("active").siblings().removeClass("active")
    })
}, 3000)

$(".activity .banner").mouseenter(function(){
    ind5 = ind2;
    clearInterval(timer5);
})
$(".activity .banner").mouseleave(function(){
    ind2 = ind5;
    timer5 = setInterval(function () {
        $(".activity .banner ul").animate({
            marginLeft: -$(".activity .banner ul li").width()
        }, 500, function () {
            ind2++;
            $(".activity .banner ul li").first().appendTo($(".activity .banner ul"));
            $(".activity .banner ul").css("margin-left", 0);
            if (ind2 == 3) {
                ind2 = 0;
            }
            // console.log(i)
            // console.log($(".banner ol li a"))
            $(".activity .banner ol li").eq(ind2).addClass("active").siblings().removeClass("active")
        })
    }, 3000)
})

$(".activity .banner ol").on("click","li",function(){
    ind5 = $(this).index();
    if(ind5 >= ind2){
        $(".activity .banner ul").animate({
            marginLeft: -(ind5-ind2)*$(".activity .banner ul li").width()
        },500,function(){
            for(var i = 0;i < (ind5-ind2);i++){
                $(".activity .banner ul li").first().appendTo($(".activity .banner ul"));
                $(".activity .banner ul").css("margin-left", 0);
            }
            $(".activity .banner ol li").eq(ind5).addClass("active").siblings().removeClass("active")
            ind2 = ind5;
        })
    }else{
        // console.log($("section .banner ul li").length)
        // console.log(-($("section .banner ul li").length-Math.abs(ind1-ind))*$("section .banner ul li").width())
        console.log(-($(".activity .banner ul li").length-Math.abs(ind5-ind2))*$(".activity .banner ul li").width())
        $(".activity .banner ul").animate({
            marginLeft: -($(".activity .banner ul li").length-Math.abs(ind5-ind2))*$(".activity .banner ul li").width()
        },500,function(){
            console.log($(".activity .banner ul").length-Math.abs(ind5-ind2))
            for(var i = 0;i < $(".activity .banner ul li").length-Math.abs(ind5-ind2);i++){
                $(".activity .banner ul li").first().appendTo($(".activity .banner ul"));
                $(".activity .banner ul").css("margin-left", 0);
            }
            $(".activity .banner ol li").eq(ind5).addClass("active").siblings().removeClass("active")
            ind2 = ind5;
        })
    }
    
})




//热销显示
var deff2 = $.ajax({
    type: "get",
    url: "json/hotsell.json?_id" + new Date().getDate(),
    async: true,
})
deff2.done(function (json) {
    for (var i in json) {
        if (json[i].price == json[i].originalprice) {
            $(".hotsell ul").append($(` <li>
                                            <a href="#"><img src=${json[i].src} alt=""></a>
                                            <h3>${json[i].name}</h3>
                                            <p class="word">${json[i].word}</p>
                                            <p>${json[i].price}</p>
                                        </li>`))
        } else {
            $(".hotsell ul").append($(` <li>
                                            <a href="#"><img src=${json[i].src} alt=""></a>
                                            <h3>${json[i].name}</h3>
                                            <p class="word">${json[i].word}</p>
                                            <p>${json[i].price} <span>${json[i].originalprice}</span></p>
                                        </li>`))
        }

    }
})


//为你推荐加载数据
var deff3 = $.ajax({
    type: "get",
    url: "json/recommend.json?_id=" + new Date().getDate(),
    async: true
});

deff3.done(function (json) {
    var ind = 0;
    var temp = "classify001";
    for (var i in json) {
        $(`<li><a href='javascript:;'>${json[i].name}</a></li>`).appendTo($(".recommend .nav ul"))
        for (var j in json[i].list) {
            if (json[i].list[j].price == json[i].list[j].originalprice) {
                // console.log(ind);
                if(temp != i){
                    ind++;
                    temp = i;
                }
                $(".recommend .product ul").eq(ind).append($(` <li>
                                                                    <a href="#"><img src=${json[i].list[j].src} alt=""></a>
                                                                    <h3>${json[i].list[j].name}
                                                                    <p class="word">${json[i].list[j].word}</p></h3>
                                                                    <p>${json[i].list[j].price}</p>
                                                                </li>`))
                
                // console.log(i)
                
            } else {
                if(temp != i){
                    ind++;
                    temp = i;
                }
                $(".recommend .product ul").eq(ind).append($(` <li>
                                                                    <a href="#"><img src=${json[i].list[j].src} alt=""></a>
                                                                    <h3>${json[i].list[j].name}
                                                                    <p class="word">${json[i].list[j].word}</p></h3>
                                                                    <p>${json[i].list[j].price} <i>${json[i].list[j].originalprice}</i></p>
                                                                </li>`))
               
            }
        }
    }
    $(".recommend .nav li").eq(0).addClass("selected");
})

// 为你推荐轮播
var ind4 = 0
var timer4 = setInterval(function(){
    $(".recommend .product ul").eq(ind4).fadeOut(1000);
    ind4++;
//    console.log(ind4)
    if(ind4 == 4){
        ind4 = 0;
    }
    $(".recommend .product ul").eq(ind4).fadeIn(1000);
    // console.log($(".recommend .nav a"))
    $(".recommend .nav li").eq(ind4).addClass("selected").siblings().removeClass("selected")
},3000)

// 为你推荐点击选项卡事件
$(".recommend .nav ul").mouseenter(function () {
    clearInterval(timer4);
})
$(".recommend .nav ul").mouseleave(function () {
    timer4 = setInterval(function(){
        $(".recommend .product ul").eq(ind4).fadeOut(1000);
        ind4++;
    //    console.log(ind4)
        if(ind4 == 4){
            ind4 = 0;
        }
        $(".recommend .product ul").eq(ind4).fadeIn(1000);
        // console.log($(".recommend .nav a"))
        $(".recommend .nav li").eq(ind4).addClass("selected").siblings().removeClass("selected")
    },3000)
})
$(".recommend .nav ul").on("click","li",function () {
    ind4 = $(this).index();
    $(".recommend .product ul").eq(ind4).fadeIn(1000).siblings().not("span").fadeOut(1000);
    $(".recommend .nav li").eq(ind4).addClass("selected").siblings().removeClass("selected");
})

// 登录用户名显示
var uname = $.cookie("loginuser");
$(".login").html("<i class='iconfont'>&#xe608;</i>" + uname)