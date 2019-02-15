
var oBtn = document.getElementById("submit-2");
var nop = document.getElementById("no-phone");
var nopwd = document.getElementById("code-conditions");

var oPhone = document.getElementById("phone");
var oCode = document.getElementById("code");
var alog = document.getElementById("alog")
oPhone.onblur = function(){
	var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
	if(!re.test(oPhone.value)){
		nop.style.display = "block";
//		return false;
	}else{
		nop.style.display = "none";
	}
}
oCode.onblur = function(){
	var rew = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
	if(!rew.test(oCode.value)){
		nopwd.style.display = "block";
//		return false;
	}else{
		nopwd.style.display = "none";
		
	}
}
	oBtn.onclick = function(){
	var username = oPhone.value;
	var userpwd = oCode.value;
	var now = new Date();
	now.setDate(now.getDate() + 30 );
	document.cookie = "phone="+username+";expires="+now;
	document.cookie = "code="+userpwd+";expires="+now;
	if(!username){
		alert("用户名不能为空")
		}else{
			location.href = "login.html";
		alert("注册成功")
		};
	} 
