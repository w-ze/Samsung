//吸顶效果
$(document).scroll(function(){
    if($("html,body").scrollTop() > 0){
        $("header").css({"position" : "fixed","top" : 0,"z-index" : 99,"width" : "100%"})
    }else{
        $("header").css({"position" : ""})
    }
})


//回到顶部
$(document).scroll(function(){
    if($("html,body").scrollTop() >= 20){
        $(".back").css("display","block");
    }else{
        $(".back").css("display","none");
    }
})
$(".back").click(function(){
    $("html,body").animate({scrollTop:0},300)
})