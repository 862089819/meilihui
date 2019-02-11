(function () {
  var tian = document.getElementsByClassName('JS-tian')[0];
  var shi = document.getElementsByClassName('JS-shi')[0];
  var fen = document.getElementsByClassName('JS-fen')[0];
  var miao = document.getElementsByClassName('JS-miao')[0];
  var endTime = new Date('2019/01/13 23:59:59').getTime() + 1000;
  var interval = null;
  interval = setInterval(function () {
   var syhm = endTime - Date.now(); // 剩余毫秒
   if (syhm >= 0) {
    tian.innerText = Math.floor(syhm / 1000 / 60 / 60 / 24);
    shi.innerText = Math.floor(syhm / 1000 / 60 / 60 % 24);
    fen.innerText = Math.floor(syhm / 1000 / 60 % 60);
    miao.innerText = Math.floor(syhm / 1000 % 60);
   } else {
    clearInterval(interval);
   } 
  }, 0);
 })();   