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
        $("nav .nav .left").append($(`<li>${json[i].name}</li>`))
        // console.log(json[i].name)
    }
    $("nav .nav .left").on("mouseenter", "li", function () {
        $("nav .bar .l ol").html("");
        $("nav .bar .r dl").html("");
        for (var i in json) {
            if ($(this).html() == json[i].name) {

                for (var j in json[i].list) {
                    $("nav .bar .l ol").append($(` <li>
                                                        <a href="javascript:;">
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

// 登录用户名显示
var uname = $.cookie("loginuser");
$(".login").html("<i class='iconfont'>&#xe608;</i>" + uname)

// 放大镜效果
$(".left ul").mouseenter(function () {
    $(".left ul .small").css("display", "block")
    $(".left .big").css("display", "block")
})

$(".left ul").mousemove(function (e) {
    var e = e || event;
    var x = e.pageX - $(".left ul").offset().left - $(".left ul .small").width() / 2;
    var y = e.pageY - $(".left ul").offset().top - $(".left ul .small").height() / 2;

    var maxX = $(".left ul").width() - $(".left ul .small").width() - 2
    var maxY = $(".left ul").height() - $(".left ul .small").height() - 2

    x = Math.min(Math.max(1, x), maxX);
    y = Math.min(Math.max(1, y), maxY);

    $(".left ul .small").css({ "left": x, "top": y });

    var bigX = x * $(".left .big").width() / $(".left ul .small").width()
    var bigY = y * $(".left .big").height() / $(".left ul .small").height()
    // console.log($(".left .big").width() / $(".left ul .small").width())
    $(".left .big img").css({ "left": -bigX, "top": -bigY });

    // console.log(x,y)
})



$(".left ul").mouseleave(function () {
    $(".left ul .small").css("display", "none")
    $(".left .big").css("display", "none")
})

$(".left ol").on("click", "li", function () {
    var ind = $(this).index();
    $(".left ul li").eq(ind).css("display", "block").siblings().css("display", "none")
    $(".left .big img").eq(ind).css("display", "block").siblings().css("display", "none")
})


//传值
var str = location.href;
str = str.split("?")[1];
var pid = str.split("=")[1]
console.log(pid)
var deff1 = $.ajax({
    type: "get",
    url: "json/list.json?_id=" + new Date().getDate(),
    async: "true"
})
var ind = 0;
deff1.done(function (json) {
    for (let i in json) {
        // console.log(json[i])
        if (json[i].id == pid) {
            $("main .right h1").html(json[i].name)
            for (let j in json[i].color) {
                $("main .right .color div").append($(`<button><span></span><i>${j}</i></button>`))

                $("main .right .color div span").eq(ind).css("background", json[i].color[j].bg)
                ind++;
                if (j == $("main .right .color div button i").eq(0).html()) {
                    for (let k in json[i].color[j].img) {
                        $("main .left ol").append($(`<li>
                                                        <a href='javascript:;'>
                                                            <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                                                        </a>
                                                    </li>`))
                        // console.log(json[i].color["炭晶黑"].img[k])
                        $("main .left ul").append($(`<li>
                                                    <a href='javascript:;'>
                                                        <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                                                    </a>
                                                </li>`))
                        // console.log(json[i].color["炭晶黑"].img[k])

                        $("main .left .big").append($(` <img src='${json[i].color[j].img[k]}.jpg' alt=''>`))
                        $(".left ul li").eq(0).css("display", "block").siblings().css("display", "none")
                        $(".left .big img").eq(0).css("display", "block").siblings().css("display", "none")
                    }
                }
                // $("main .right .color").on("click", "button", function () {
                //     $("main .left ol").html("")
                //     $("main .left ul").html("")
                //     $("main .left .big").html("")
                //     console.log(json[i].color[j].img)
                //     for (let k in json[i].color[j].img) {
                //         if ($(this).children().eq(1).html() == j) {
                //             console.log(json[i].color[j].img[k])

                //             $("main .left ol").append($(`<li>
                //                                             <a href='javascript:;'>
                //                                                 <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                //                                             </a>
                //                                         </li>`))
                //             // console.log(json[i].color["炭晶黑"].img[k])
                //             $("main .left ul").append($(`<li>
                //                                             <a href='javascript:;'>
                //                                                 <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                //                                             </a>
                //                                         </li>`))
                //             // console.log(json[i].color["炭晶黑"].img[k])

                //             $("main .left .big").append($(` <img src='${json[i].color[j].img[k]}.jpg' alt=''>`))
                //             $(".left ul li").eq(0).css("display", "block").siblings().css("display", "none")
                //             $(".left .big img").eq(0).css("display", "block").siblings().css("display", "none")
                //         }
                //     }

                // })
            }


            $("main .right .color").on("click", "button", function () {
                $("main .left ol").html("")
                $("main .left ul").html(`<div class="small"></div>`)
                $("main .left .big").html("")
                // console.log(json[i].color[j].img)
                for (let i in json) {
                    if (json[i].id == pid) {
                        for (let j in json[i].color) {
                            for (let k in json[i].color[j].img) {
                                if ($(this).children().eq(1).html() == j) {
                                    console.log(json[i].color[j].img[k])

                                    $("main .left ol").append($(`<li>
                                                                <a href='javascript:;'>
                                                                    <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                                                                </a>
                                                            </li>`))
                                    // console.log(json[i].color["炭晶黑"].img[k])
                                    $("main .left ul").append($(`<li>
                                                                <a href='javascript:;'>
                                                                    <img src='${json[i].color[j].img[k]}.jpg' alt=''>
                                                                </a>
                                                            </li>`))
                                    // console.log(json[i].color["炭晶黑"].img[k])

                                    $("main .left .big").append($(` <img src='${json[i].color[j].img[k]}.jpg' alt=''>`))
                                    $(".left ul li").eq(0).css("display", "block").siblings().css("display", "none")
                                    $(".left .big img").eq(0).css("display", "block").siblings().css("display", "none")
                                }
                            }
                        }
                    }
                }
            })














            // for (let j in json[i].color) {
            //     console.log(json[i].color["炭晶黑"].img)
            //     for (let k in json[i].color[j].img) {
            //         $("main .right .color").on("click", "button", function () {
            //             // alert()
            //             console.log(typeof(j))

            //             if ($(this).children().eq(1).html() == j) {
            //                 console.log(json[i].color[j].img[k])
            //                 $("main .left ol").html("")
            //                 $("main .left ul").html("")
            //                 $("main .left .big").html("")
            //                 $("main .left ol").append($(`<li>
            //                                                     <a href='javascript:;'>
            //                                                         <img src='${json[i].color[j].img[k]}.jpg' alt=''>
            //                                                     </a>
            //                                                 </li>`))
            //                 console.log(json[i].color["炭晶黑"].img[k])
            //                 $("main .left ul").append($(`<li>
            //                                                     <a href='javascript:;'>
            //                                                         <img src='${json[i].color[j].img[k]}.jpg' alt=''>
            //                                                     </a>
            //                                                 </li>`))
            //                 // console.log(json[i].color["炭晶黑"].img[k])

            //                 $("main .left .big").append($(` <img src='${json[i].color[j].img[k]}.jpg' alt=''>`))
            //                 $(".left ul li").eq(0).css("display", "block").siblings().css("display", "none")
            //                 $(".left .big img").eq(0).css("display", "block").siblings().css("display", "none")
            //             }
            //         })
            //     }
            // }

            for (var j in json[i].ram) {
                $("main .right .ram div").append($(`<button>${json[i].ram[j]}</button>`))
                // console.log(json[i].ram[j])
            }
            for (var j in json[i].version) {
                $("main .right .version div").append($(`<button>${json[i].version[j]}</button>`))
                // console.log(json[i].version[j])
            }

        }
    }
})


$(".left ul li").eq(0).css("display", "block").siblings().css("display", "none")
$(".left .big img").eq(0).css("display", "block").siblings().css("display", "none")