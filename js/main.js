$(".btn-7").click(function(){
    $(".btn-7").css({"background-color":"#C49B63","color":"white" ,"border":"2px solid #C49B63"})
    $(".meat").css("display","none");
    $(".drink").css("display","block");
    $(".btn-6").css({"background-color":"black","color":"#C49B63","border-bottom":"2px solid #C49B63"});
    $(".btn-8").css({"background-color":"black","color":"#C49B63" ,"border":"2px solid #C49B63"});
    $(".desert").css("display","none");
})
$(".btn-6").click(function(){
    $(".btn-7").css({"background-color":"black","color":"#C49B63","border-bottom":"2px solid #C49B63"});
    $(".btn-6").css({"background-color":"#C49B63","color":"white" ,"border":"2px solid #C49B63"})
$(".meat").css("display","block");
$(".drink").css("display","none");
$(".desert").css("display","none");
$(".btn-8").css({"background-color":"black","color":"#C49B63" ,"border":"2px solid #C49B63"});
})
$(".btn-8").click(function(){
    $(".btn-7").css({"background-color":"black","color":"#C49B63","border-bottom":"2px solid #C49B63"});
    $(".btn-6").css({"background-color":"black","color":"#C49B63","border-bottom":"2px solid #C49B63"});
    $(".btn-8").css({"background-color":"#C49B63","color":"white" ,"border":"2px solid #C49B63"})
$(".desert").css("display","block");
$(".meat").css("display","none");
$(".drink").css("display","none");
});
new WOW().init();
$(window).scroll(function(){
    let curentOffset=$(window).scrollTop();
    if(curentOffset>100){
        $(".navbar").css({"background-color":"rgba(0,0,0,0.5)","transition":"all 1s"})
    }
    else{
        $(".navbar").css("background-color","transparent")
    }
});
$(document).ready(function()
{
    $(".wrapper").fadeOut(8000,function(){
        $("body").css("overflow","auto")
    })
})
