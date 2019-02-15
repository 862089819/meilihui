small.onmouseover = function(){
		mask.style.display = "block";
		big.style.display = "block";
	}
	small.onmouseout = function(){
		mask.style.display = "none";
		big.style.display = "none";
	}
	small.onmousemove = function(e){
		var e = e || event;
		var x = e.pageX - mask.offsetWidth/2 - box.offsetLeft;
		var y = e.pageY - mask.offsetHeight/2 - box.offsetTop;
		
		var maxL = box.offsetWidth - mask.offsetWidth ;
		var maxT = box.offsetHeight - mask.offsetHeight ;
		
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );
		
		var x1 = x*(bigImg.offsetWidth)/(box.offsetWidth);
		var y1 = y*(bigImg.offsetHeight)/(box.offsetHeight);
 
		mask.style.left = x + "px";
		mask.style.top = y + "px";
		
		bigImg.style.left = -x1 + "px";
		bigImg.style.top = -y1 + "px";
	}