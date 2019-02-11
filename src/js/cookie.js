//创建cookie
function createCookie(key,value,expires){
	var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/'; //'key=value;path=/'
	//判断是不是数字
	if(typeof expires === 'number' && expires >= 0){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ';expires=' + date; //'key=value;path=/;expires=' + 日期对象
	}
	//创建cookie
	document.cookie = cookieText;
}
//获取cookie
//"%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97; url=www.1000phone.com; email=zhangzhilin%401000phone.net"
/*
	截：
	substring(start,end)
	substr(start,length)
	slice(start,end)
	
	start 				end
	姓名 ：      0      46
	url:		48      69
	email :     71
	indexOf()
	end
*/


function cookie(key){
	var cookieKey = encodeURIComponent(key) + '=';
	var start = document.cookie.indexOf(cookieKey);
	if(start != -1){
		var end = document.cookie.indexOf(';',start);
		if(end === -1){
			end = document.cookie.length;
		}
		var cookieValue = decodeURIComponent(document.cookie.substring(start + cookieKey.length,end));
		return cookieValue;
	}
}
/*
"%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97; url=www.1000phone.com; email=zhangzhilin%401000phone.net"
[
	"%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97",
	"url=www.1000phone.com",
	"email=zhangzhilin%401000phone.net"
]
[
	[
		"%E5%A7%93%E5%90%8D",
		"%E5%BC%A0%E5%BF%97%E6%9E%97"
	],
	[
		"url",
		"www.1000phone.com"
	],
	[
		"email",
		"zhangzhilin%401000phone.net"
	]
]
*/
function getCookie(key){
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		var list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ';path=/';
}