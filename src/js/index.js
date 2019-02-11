//吸顶菜单
var h = aaa.offsetHeight + header.offsetHeight;
window.onscroll = function(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	if( sTop > h ){
		nav.style.position = "fixed";
		nav.style.zIndex = "1000";
		nav.style.top = 0;
		returntop.style.display = "block";
	}else{
		nav.style.position = "";
		returntop.style.display = "none";
	} 
	
}         
//选项卡
//var $ulist = $(".activitieslist-box .day"),
//$cons = $(".list .morelist");
//$bor = $(".sliderbox .slider");
//$ulist.click(function(){
//	$(this).addClass("active").siblings().removeClass("active");
//	$cons.eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");
//	$(this).addClass("border").siblings().removeClass("border")
//$bor.eq( $(this).index() ).addClass("border").siblings().removeClass("border");
//}) 
$aaa = $("#returntop");
$("#returntop").click(function(){
	$("#returntop").css("display","none");
})


