function bigBannerImgSlide(d,f,l,o,m,j,e){this.leftBtnID=d;this.rightBtnID=f;this.bigBannerUlID=l;this.bannerCircleUlID=o;this.bannerImgDiv=m;this.imgLiLength=j;this.time=e;var h=0;var p=$("."+d);var r=$("."+f);var q=$("#"+l)||$("."+l);var c=$("#"+o)||$("."+o);var a=$("#"+o)||$("."+o);var b=$("#"+m);var i=null;var k=false;var n=$(q).children("li").length;$(b).css("width",(n)*j+"px");g();function g(){i=setTimeout(function(){if(n-h>=1){}else{h=n}$(r).click()},e)}$(r).click(function(){clearTimeout(i);if(h<n-1){h++}else{h=0}var s=$("#"+m+">ul");if(k==true){s.css({marginLeft:0}).find("li:first").appendTo(s);k=false}s.animate({marginLeft:"-"+j+"px"},j,function(){s.css({marginLeft:0}).find("li:first").appendTo(s)});$(a).children("a").removeClass("pagebutton_checked").addClass("pagebutton");$(a).children("a").eq(h).addClass("pagebutton_checked");g()});$(p).click(function(){clearTimeout(i);if(h>0){h--}else{h=n-1}var s=$("#"+m+">ul");if(k==false){s.css({marginLeft:"-"+j+"px"}).find("li:first").before(s.find("li:last-child"));k=true}s.animate({marginLeft:0},j,function(){s.css({marginLeft:"-"+j+"px"}).find("li:first").before(s.find("li:last-child"))});$(a).children("a").removeClass("pagebutton_checked").addClass("pagebutton");$(a).children("a").eq(h).addClass("pagebutton_checked");g()});$(a).children("a").click(function(){clearTimeout(i);var u=$(this).index(0)-h;var t=$("#"+m+">ul");if(u>0){t.animate({marginLeft:"-"+u*j+"px"},j,function(){for(var v=0;v<u;v++){t.css({marginLeft:0}).find("li:first").appendTo(t)}})}else{if(k==false){for(var s=0;s>u;s--){t.css({marginLeft:"-"+Math.abs(u)*j+"px"}).find("li:first").before(t.find("li:last-child"))}}t.animate({marginLeft:0},j,function(){})}h=$(this).index(0);$(a).children("a").removeClass("pagebutton_checked").addClass("pagebutton");$(a).children("a").eq(h).addClass("pagebutton_checked");g()})};