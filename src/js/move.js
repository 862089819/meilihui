var $imgbox = $("li .imgbox2"),
$smallbox1 = $(".smallbox1");
$smallbox2 = $(".smallbox2");
$img1 = $(".img1");
$img2 = $(".img2");
$mark = $("#mark");
$li = $("li")
$smallbox1.click(function(){
	$(this).addClass("bbb").siblings().removeClass("bbb");
	$img2.eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");
}) 
//$imgbox.mouseleave(function(){
//	$mark.css("display","none");
//})
// $(".price2").css("background","greenyellow")   s