(function () {
  var tian = document.getElementsByClassName('JS-tian')[0];
  var shi = document.getElementsByClassName('JS-shi')[0];
  var fen = document.getElementsByClassName('JS-fen')[0];
  var miao = document.getElementsByClassName('JS-miao')[0];
  var endTime = new Date('2019/05/13 23:59:59').getTime() + 1000;
  var interval = null;
  interval = setInterval(function () {
   var syhm = endTime - Date.now(); // 剩余毫秒
   if (syhm >= 0) {
   	var t = Math.floor(syhm / 1000 / 60 / 60 / 24);
   	var s = Math.floor(syhm / 1000 / 60 / 60 % 24);
   	var f = Math.floor(syhm / 1000 / 60 % 60);
   	var m = Math.floor(syhm / 1000 % 60);
    tian.innerText = t;
    shi.innerText = s;
    fen.innerText = f;
    miao.innerText = m;
//  if (t|| s || f || m < 10){}
   } else {
    clearInterval(interval);
   } 
  }, 0);
 })();   