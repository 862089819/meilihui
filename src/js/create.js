var oUl = document.getElementById("ul")
var oImg = document.getElementById("img")
	
	function getDate(date){
		console.log(date) 
//		var str = "<img src='../img/0f3b1ab914f4f8a8e187e81117a5304e.min.jpg' />";
		var arr = date.img ;
		var arr2 = date.price ;
		var arr3 = date.del;
		var str = "";
		for( var i = 0 ; i < arr.length ; i ++){
			var item = arr[i];
			var prc = arr2[i];
			var del = arr3[i];
//			var item2 = item + ".min.jpg";
			console.log(item);
//			str += "<img src="+ item +"/>" +  prc ;
			str += "<a href='list.html'><li id='img'><div class='imgbox2' id='img'>"+
						"<img src="+ item + " class='img1' id='img' />" +
//						"<img src='' class='img2 aaa'/>" +
					"</div>" +
					"<div class='price2'>" +
						"<p>ANN DEMEULEMEESTER</p>" +
						"<p>黑色修身连衣裙</p>" +
						"<p><span class='price-red'>￥" + prc + "</span><span><del>￥" + del +"</del></span></p>" +
					"</div>" 
//					"<div id='mark'>" +
//						"<div class='smallbox1 bbb'>" +
//							"<img src='../img/0f3b1ab914f4f8a80ead1947b884ff38.min.jpg'>" +
//						"</div>" +
//						"<div class='smallbox2'>" +
//							"<img src='../img/0f3b1ab914f4f8a8913429c222df1bae.min.jpg'>" +
//						"</div>" +
//					"</div>" +
//						"</li>" 
		}
		oUl.innerHTML = str ;
	}
	window.onload = function(){ 
		var sc = document.createElement("script");
		sc.src = "../js/jsonp.json";
		document.body.appendChild( sc )
	} 
// oImg.onclick = function(){
// 	location.href = "list.html"
// }
