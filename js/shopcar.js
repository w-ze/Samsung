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
if(uname){
    $(".login").html("<i class='iconfont'>&#xe608;</i>" + uname)

}


//判断购物车是否为空
var str = localStorage.getItem("shoplist");

function check() {
    var str = localStorage.getItem("shoplist");

    if (str == "[]") {
        $(".null").css("display", "block");
        $(".shop").css("display", "none");
    } else {
        $(".null").css("display", "none");
        $(".shop").css("display", "block");
    }
    console.log(typeof (str))
}
check();



// 购物车显示
var arr = JSON.parse(str);
for (var i in arr) {
    var vip = arr[i].price;
    vip = vip.split(".")[0];
    vip = vip.split("￥")[1];
    console.log(vip)
    $(".list table").append($(`<tr  data-id="${arr[i].id}">
                                        <td><input type="checkbox" class="ck"></td>
                                        <td><img src="${arr[i].src}" alt=""></td>
                                        <td>${arr[i].name}</td>
                                        <td>${arr[i].price}</td>
                                        <td>${vip}</td>
                                        <td><span class="updateCount" data-number="-1">-</span>
                                            <span class="shop-count">${arr[i].count}</span>
                                            <span class="updateCount" data-number="1">+</span>
                                            <p class="del">删除</p></td>
                                        <td class="sumprice">￥${vip * arr[i].count}.00</td>
                                    </tr>`))
}




// 数量加减
$(".updateCount").click(function () {

    //确定要操作的商品编号
    var pid = $(this).parent().parent().data("id");
    console.log(pid)
    //取出操作商品的num值  确定操作的是+?   -?
    var num = $(this).data("number");
    // console.log(num)

    //取出数量
    var count = $(this).parent().find(".shop-count").html();
    console.log(count)

    if (num == -1 && count == 1) {
        return;
    }
    //遍历数组
    arr.forEach((pro) => {
        if (pro.id === pid) {
            pro.count += num;
            //将数组重新存入到storage中
            localStorage.setItem("shoplist", JSON.stringify(arr));

            //页面同步改变
            $(this).parent().find(".shop-count").html(pro.count);
            //同步改变金额
            var vip = pro.price;
            vip = vip.split(".")[0];
            vip = vip.split("￥")[1];
            console.log(vip)
            $(this).parent().parent().find(".sumprice").html(`￥${vip * pro.count}.00`);
            // jiesuan();
            return;
        }
    })
    // console.log(vip)
    check();
    // sum();
})


//全选
$(".all").click(function () {
    $("input:checkbox").prop("checked", $(this).prop("checked"));
    sum();
})

//选择结算

$(".ck").click(function () {
    sum();
})


//删除
$(".del").click(function () {
    $(this).parent().parent().remove();
    var pid = $(this).parent().parent().data("id");
    arr.forEach((pro, index) => {
        if (pro.id === pid) {
            //删除数组中的pro这个商品
            arr.splice(index, 1);
            //将数组重新存入到storage中
            localStorage.setItem("shoplist", JSON.stringify(arr));
            // jiesuan();
            return;
        }
    })
    sum();
    check();
})


//结算封装
function sum() {
    var count = 0;//数量
    var money = 0;//总金额
    //结算的是被选中的复选框
    $(".ck:checked").each(function () {
        count += Number($(this).parent().parent().find(".shop-count").html());
        var s = $(this).parent().parent().find(".sumprice").html();
        s = s.split("￥")[1];
        money += parseFloat(parseInt(s));
    })
    $(".pr").html(`￥${money}.00`);
    $(".vip").html(money);
}
