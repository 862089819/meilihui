var $udaybox = $("#simg .simg"),
$cons = $("#bimg .bimg");

$udaybox.click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$cons.eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");
//	$(this).addClass("border").siblings().removeClass("border");
//	$bor.eq( $(this).index() ).addClass("border").siblings().removeClass("border");
})  