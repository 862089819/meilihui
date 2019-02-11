//选项卡
var $udaybox = $(".activitieslist-box .day"),
$cons = $("#list .morelist");
$bor = $("#sliderbox .slider");

$udaybox.click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$cons.eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");
//	$(this).addClass("border").siblings().removeClass("border");
	$bor.eq( $(this).index() ).addClass("border").siblings().removeClass("border");
})  