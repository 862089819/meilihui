$.fn.extend({mousewheel:function(a){return this.each(function(){var b=this;b.D=0;if($.browser.msie||$.browser.safari){b.onmousewheel=function(){b.D=event.wheelDelta;event.returnValue=false;a&&a.call(b)}}else{b.addEventListener("DOMMouseScroll",function(c){b.D=c.detail>0?-1:1;c.preventDefault();a&&a.call(b)},false)}})}});$.fn.extend({jscroll:function(a){return this.each(function(){a=a||{};a.Bar=a.Bar||{};a.Btn=a.Btn||{};a.Bar.Bg=a.Bar.Bg||{};a.Bar.Bd=a.Bar.Bd||{};a.Btn.uBg=a.Btn.uBg||{};a.Btn.dBg=a.Btn.dBg||{};var d={W:"15px",BgUrl:"",Bg:"#efefef",Bar:{Pos:"up",Bd:{Out:"#b5b5b5",Hover:"#ccc"},Bg:{Out:"#fff",Hover:"#fff",Focus:"orange"}},Btn:{btn:true,uBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"},dBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"}},Fn:function(){}};a.W=a.W||d.W;a.BgUrl=a.BgUrl||d.BgUrl;a.Bg=a.Bg||d.Bg;a.Bar.Pos=a.Bar.Pos||d.Bar.Pos;a.Bar.Bd.Out=a.Bar.Bd.Out||d.Bar.Bd.Out;a.Bar.Bd.Hover=a.Bar.Bd.Hover||d.Bar.Bd.Hover;a.Bar.Bg.Out=a.Bar.Bg.Out||d.Bar.Bg.Out;a.Bar.Bg.Hover=a.Bar.Bg.Hover||d.Bar.Bg.Hover;a.Bar.Bg.Focus=a.Bar.Bg.Focus||d.Bar.Bg.Focus;a.Btn.btn=a.Btn.btn!=undefined?a.Btn.btn:d.Btn.btn;a.Btn.uBg.Out=a.Btn.uBg.Out||d.Btn.uBg.Out;a.Btn.uBg.Hover=a.Btn.uBg.Hover||d.Btn.uBg.Hover;a.Btn.uBg.Focus=a.Btn.uBg.Focus||d.Btn.uBg.Focus;a.Btn.dBg.Out=a.Btn.dBg.Out||d.Btn.dBg.Out;a.Btn.dBg.Hover=a.Btn.dBg.Hover||d.Btn.dBg.Hover;a.Btn.dBg.Focus=a.Btn.dBg.Focus||d.Btn.dBg.Focus;a.Fn=a.Fn||d.Fn;var e=this;var m,u=0,w=0;$(e).css({overflow:"hidden",position:"relative",padding:"0px"});var l=$(e).width(),s=$(e).height()-1;var o=a.W?parseInt(a.W):21;var t=l-o;var r=a.Btn.btn==true?o:0;if($(e).children(".jscroll-c").height()==null){$(e).wrapInner("<div class='jscroll-c' style='top:0px;z-index:9999;zoom:1;position:relative'></div>");$(e).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");$(e).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>")}var j=$(e).children(".jscroll-c");var h=$(e).children(".jscroll-e");var g=h.children(".jscroll-h");var b=h.children(".jscroll-u");var i=h.children(".jscroll-d");if($.browser.msie){document.execCommand("BackgroundImageCache",false,true)}j.css({"padding-right":o});h.css({width:o,background:a.Bg,"background-image":a.BgUrl});g.css({top:r,background:a.Bar.Bg.Out,"background-image":a.BgUrl,"border-color":a.Bar.Bd.Out,width:o-2,cursor:"pointer"});b.css({height:r,background:a.Btn.uBg.Out,"background-image":a.BgUrl});i.css({height:r,background:a.Btn.dBg.Out,"background-image":a.BgUrl});g.hover(function(){if(w==0){$(this).css({background:a.Bar.Bg.Hover,"background-image":a.BgUrl,"border-color":a.Bar.Bd.Hover})}},function(){if(w==0){$(this).css({background:a.Bar.Bg.Out,"background-image":a.BgUrl,"border-color":a.Bar.Bd.Out})}});b.hover(function(){if(w==0){$(this).css({background:a.Btn.uBg.Hover,"background-image":a.BgUrl})}},function(){if(w==0){$(this).css({background:a.Btn.uBg.Out,"background-image":a.BgUrl})}});i.hover(function(){if(w==0){$(this).css({background:a.Btn.dBg.Hover,"background-image":a.BgUrl})}},function(){if(w==0){$(this).css({background:a.Btn.dBg.Out,"background-image":a.BgUrl})}});var c=j.height();var v=(s-2*r)*s/c;if(v<10){v=10}var f=v/6;var k=0,q=false;g.height(v);if(c<=s){j.css({padding:0});h.css({})}else{q=true}if(a.Bar.Pos!="up"){k=s-v-r;p()}g.bind("mousedown",function(z){a.Fn&&a.Fn.call(e);w=1;g.css({background:a.Bar.Bg.Focus,"background-image":a.BgUrl});var y=z.pageY,x=parseInt($(this).css("top"));$(document).mousemove(function(A){k=x+A.pageY-y;p()});$(document).mouseup(function(){w=0;g.css({background:a.Bar.Bg.Out,"background-image":a.BgUrl,"border-color":a.Bar.Bd.Out});$(document).unbind("mousemove")});return false});b.bind("mousedown",function(x){a.Fn&&a.Fn.call(e);w=1;b.css({background:a.Btn.uBg.Focus,"background-image":a.BgUrl});e.timeSetT("u");$(document).mouseup(function(){w=0;b.css({background:a.Btn.uBg.Out,"background-image":a.BgUrl});$(document).unbind();clearTimeout(m);u=0});return false});i.bind("mousedown",function(x){a.Fn&&a.Fn.call(e);w=1;i.css({background:a.Btn.dBg.Focus,"background-image":a.BgUrl});e.timeSetT("d");$(document).mouseup(function(){w=0;i.css({background:a.Btn.dBg.Out,"background-image":a.BgUrl});$(document).unbind();clearTimeout(m);u=0});return false});e.timeSetT=function(z){var x=this;if(z=="u"){k-=f}else{k+=f}p();u+=2;var y=500-u*50;if(y<=0){y=0}m=setTimeout(function(){x.timeSetT(z)},y)};h.bind("mousedown",function(x){a.Fn&&a.Fn.call(e);k=k+x.pageY-g.offset().top-v/2;n();return false});function n(){if(k<r){k=r}if(k>s-v-r){k=s-v-r}g.stop().animate({top:k},100);var x=-((k-r)*c/(s-2*r));j.stop().animate({top:x},1000)}function p(){if(k<r){k=r}if(k>s-v-r){k=s-v-r}g.css({top:k});var x=-((k-r)*c/(s-2*r));j.css({top:x})}$(e).mousewheel(function(){if(q!=true){return}a.Fn&&a.Fn.call(e);if(this.D>0){k-=f}else{k+=f}p()})})}});