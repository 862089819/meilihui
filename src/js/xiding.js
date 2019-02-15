var h = aaa.offsetHeight + header.offsetHeight;
window.onscroll = function(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	if( sTop > h ){
		nav.style.position = "fixed";
		nav.style.zIndex = "1000";
		nav.style.top = 0;
	}else{
		nav.style.position = "";
	} 
	 
}    