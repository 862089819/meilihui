
var oBtn = document.getElementById("submit-2");
window.onload = function(){
			var str = document.cookie;
			var arr = str.split("; ");
			for( var i = 0 ; i < arr.length ; i ++){
				var itm = arr[i].split("=");
				if( itm[0] == "phone"){
					var username = itm[1];
				}
				if( itm[0] == "code"){
					var userpwd = itm[1];
				}
			}
			
//			var username = arr[0].split("=")[1];
//			var userpwd = arr[1].split("=")[1];
			oBtn.onclick = function(){
				var utpwd = code.value;
				var utname = phone.value;
//				console.log(username === utname && userpwd === utpwd)
				if( username === utname && userpwd === utpwd){
					alert("登陆成功")
					location.href = "index.html";
				}else{
					alert("登录失败")

					
				}
			}
		}
		