var ttop=420;window.onload=function(){$(".ylMarquee").jMarquee({visible:6,step:1,direction:"left"});var d=$("#bigbannerSize").val();var f=$(".content_bg");var e=$(window)||$(document);var c=$(window).height();$(e).scroll(function(){var h=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var g=ttop-h;if(d>0&&g>-50){$(f).css("margin-top",g)}if(h>c){$(".clickOn").show()}else{$(".clickOn").hide()}})};var contextPath;var isAllowPreview;$(document).ready(function(){new initImg("theEventImg");new bigBannerImgSlide("bigBanner_leftpage","bigBanner_rightpage","bannerUl","bannerCircleDiv","bannerImgDiv",1800,8000);contextPath=$("#contextPath").val();var n=$("#basePath").val();var g=$("#notice_id").val();var h=$("#notice_version").val();var c=getCookie("noticeId");var o=getCookie("noticeVersion");if(null!=c&&c!=""&&typeof(c)!="undefined"){if(g==c&&h==o){$(".notice_container").hide()}else{if(g==c&&!(h==o)){$(".notice_container").show();Setcookie("noticeId",g,24*60*60*1000);Setcookie("noticeVersion",h,24*60*60*1000)}else{$(".notice_container").show();Setcookie("noticeId",g,24*60*60*1000);Setcookie("noticeVersion",h,24*60*60*1000)}}}var j=getCookie("subscripeEventIds");if(null!=j&&j!=""&&typeof(j)!="undefined"){var l=getCookie("siloEnNameArray");var m=getCookie("siloEvCodeArray");if(null!=l&&l!=""&&typeof(l)!="undefined"){if(null!=m&&m!=""&&typeof(m)!="undefined"){for(var e=0;e<j.split(",").length;e++){var k=$("#"+j.split(",")[e]+"subscripStatus");k.html("已订阅");var d=$("#"+j.split(",")[e]+"preview");if(d!=null&&typeof(d)!="undefined"){var f='<a class="a1" id="'+j.split(",")[e]+'preview" href="'+n+"/silo/"+l.split(",")[e]+"/"+m.split(",")[e]+"-"+j.split(",")[e]+'-event.html">预览</a>';$("#"+j.split(",")[e]+"theButton").html(f);$("#"+j.split(",")[e]+"theButton").css("background","#db2726")}else{$("#"+j.split(",")[e]+"theButton").html("")}$("#"+j.split(",")[e]+"subscrip").html("取消")}}}}$("#closeNoticeBtn").click(function(){var p=$("#notice_id").val();var i=$("#notice_version").val();$(".notice_container").hide();Setcookie("noticeId",p,24*60*60*1000);Setcookie("noticeVersion",i,24*60*60*1000)});$("#officialProduct").click(function(){});$(".activitiesWeek").click(function(){var r=$(this).index();var q=["H1703600","H1703622","H1703623","H1703624","H1703625"];var p="/mei.5."+(r+1);goldlogRecord(p,"","",q[r]);$(".activitiesContent").each(function(s){if(r==s){$(".activitiesContent").hide();$(this).css("display","block")}});var i=90*r;$(".activitiesHeader").children(".theSlider").css("left",i)});$(".theActivities").hover(function(){getUserSubscripInfo($(this))},function(){$(this).children(".theMask").hide();$(this).children(".theButton").hide()});$("#user_phone").click(function(){var i=$(this).val();if(i=="请输入您的手机号"){$(this).val("")}});$("#user_phone").blur(function(){var i=$(this).val();if(i==""){$(this).css("color","grey");$(this).val("请输入您的手机号")}});$("#ph_message_btn").click(function(){var r=$("#user_phone").val();if(validatemobile(r)==false){$("#user_phone").val("");$("#user_phone").focus();return}var p="";if(subscriptIdArray!=null&&subscriptIdArray.length!=0){for(var q=0;q<subscriptIdArray.length;q++){if(q==subscriptIdArray.length-1){p+=subscriptIdArray[q]}else{p+=subscriptIdArray[q]+","}}}$.ajax({type:"post",url:"home/addSuscrip",data:{user_phone:r,subscript_type:1,eventArray:p},dataType:"json",success:function(t){if(null==t){alert("服务器返回异常");return}var u=t.mess;if(u.success==true){var s=$("#user_phone").val();$("#user_phone").val("");subSuccess();open_DialogOBJ("sub_info");var i=getCookie("subscripeEventIds");if(i==null||i==""||typeof(i)=="undefined"){Setcookie("cookieSubPhone",s);Setcookie("subscripeEventIds",p)}else{Setcookie("subscripeEventIds",i+","+p)}}},error:function(i){}})});$("#weChat_message_btn").click(function(){var p="";if(subscriptIdArray!=null&&subscriptIdArray.length!=0){for(var q=0;q<subscriptIdArray.length;q++){if(q==subscriptIdArray.length-1){p+=subscriptIdArray[q]}else{p+=subscriptIdArray[q]+","}}}$.ajax({type:"post",url:"home/getWechatSuscrip",data:{eventArray:p},dataType:"json",success:function(i){if(null==i){alert("服务器返回异常");return}var r=i.mess;if(r.success==true){$("#weChatImg").attr("src",r.data);$(".pop_up_box").show()}else{alert("生成二维码失败")}},error:function(i){alert("服务器连接超时")}})});$(".theEventImg").click(function(){var p=$(this).index();$(".activitiesContent").each(function(q){if(p==q){$(".activitiesContent").hide();$(this).css("display","block")}});var i=90*p;$(".activitiesHeader").children(".theSlider").css("left",i)});$(document).on("mouseenter",".rightBanner",function(){var i=$("#marketingImgDiv ul").children("li").length;if(i>1){$(".rightBanner_leftpage").show();$(".rightBanner_rightpage").show()}});$(document).on("mouseleave",".rightBanner",function(){$(".rightBanner_leftpage").hide();$(".rightBanner_rightpage").hide()});getMarketingBanner();getNewZone()});function subSuccess(){var k="";var m="";var e=getCookie("siloEnNameArray");var f=getCookie("siloEvCodeArray");var o=$("#basePath").val();for(var h=0;h<subscriptIdArray.length;h++){var l=$("#"+subscriptIdArray[h]+"subscripStatus");var g=$("#"+subscriptIdArray[h]+"preview");l.html("已订阅");if(g!=null&&typeof(g)!="undefined"){if(isAllowPreview=="1"){var d=$("#"+subscriptIdArray[h]+"theButton").attr("name");var c=d.split(",")[0];var n=d.split(",")[1];m+=c;k+=n;var j='<a class="a1" id="'+subscriptIdArray[h]+'preview" href="'+o+"/silo/"+n+"/"+c+'--event.html">预览</a>';$("#"+subscriptIdArray[h]+"theButton").html(j);$("#"+subscriptIdArray[h]+"theButton").css("background","#db2726")}else{$("#"+subscriptIdArray[h]+"theButton").html("")}}else{$("#"+subscriptIdArray[h]+"theButton").html("")}}$("#brandSubscribe").hide();if(e==null||e==""||typeof(e)=="undefined"){Setcookie("siloEnNameArray",k)}else{Setcookie("siloEnNameArray",e+","+k)}if(f==null||f==""||typeof(f)=="undefined"){Setcookie("siloEvCodeArray",m)}else{Setcookie("siloEvCodeArray",f+","+m)}subscriptIdArray=null;subscriptImgArray=null}var slider_count_sub=0;var slideCount=0;var $slider_width=117;function a(){if(slider_count_sub<=0){return false}slider_count_sub--;sliderPic();$("#subscribeBrandD").animate({left:"+="+$slider_width+"px"},"10")}function b(){if(slideCount<3||slider_count_sub>=slideCount-3){return false}slider_count_sub++;sliderPic();$("#subscribeBrandD").animate({left:"-="+$slider_width+"px"},"0")}function sliderPic(){if(slideCount<=3){$("#aId").hide();$("#bId").hide();return false}if(slider_count_sub>=slideCount-3){$("#bId").hide();$("#aId").show();return}if(slider_count_sub<slideCount-3&&slider_count_sub>0){$("#aId").show();$("#bId").show();return}if(slider_count_sub<=0){$("#aId").hide();$("#bId").show();return}}function leftMethod(c){$("#subscribeBrandD").animate({left:"+="+$slider_width+"px"},"0")}function getUserSubscripInfo(e){var c=e.children(".theButton").text();var d=e.children(".theButton").find("a");if($.browser.mozilla){if(d.length>0||$.trim(c).length>0){e.children(".theMask").show();e.children(".theButton").show()}}else{if(d.length>0){e.children(".theMask").show();e.children(".theButton").show()}}}var subscriptIdArray=null;function userSubscript(g,c,e){isAllowPreview=e;var f=$("#"+g+"subscrip");var d=$("#"+g+"subscripStatus");if(null!=f){if(f.html()=="取消"){updateJsArray(g,0);updateJsArrayImg(c,0);changeSubBtnStyle(1,g);d.html("");showSubscribeBrand()}else{goldlogRecord("/mei.5.6","","eventid="+g,"H1703626");updateJsArray(g,1);updateJsArrayImg(c,1);changeSubBtnStyle(0,g);d.html("已选择");showSubscribeBrand();setUserPhoneVal()}}}function changeSubBtnStyle(e,g){var d=$("#"+g+"subscrip");var f=$("#"+g+"preview");var c=$("#"+g+"span");if(e==0){if(f.length>0){c.hide();d.css("background","#999");d.html("取消");f.css("width","50%");d.css("width","50%")}else{d.html("取消");d.parent().css("background","#999")}}else{if(f.length>0){c.show();d.css("background","#db2726");d.html("订阅");f.css("width","45%");d.css("width","45%")}else{d.html("订阅");d.parent().css("background","#db2726")}}}function setUserPhoneVal(){if($("#user_phone").val()==null||$("#user_phone").val()==""||$("#user_phone").val()=="请输入您的手机号"){var c=$("#user_telphone").val();if(null!=c&&c!=""&&typeof(c)!="undefined"){$("#user_phone").val(c);$("#user_phone").keyup()}}}var logImgWidth=null;function showSubscribeBrand(){if(null!=subscriptIdArray&&subscriptIdArray.length!=0&&null!=subscriptImgArray&&subscriptImgArray!=0){if(subscriptIdArray.length==subscriptImgArray.length){$("#brandSubscribe").show()}}var g="";var e=$("#subscribeBrandD");for(var d=0;d<subscriptIdArray.length;d++){var f=subscriptIdArray[d]+"";var c=subscriptImgArray[d]+"";g+='<li style="float:left;"><div class="theSubscribe">';g+='<div class="theSubscribeImg" id="'+f+'Brand">';g+='<img src="'+c+'">';g+='<a id="'+f+","+c+'"  onclick="cancelSubscriptBtn(this.id);" class="subscribeCancel ie6png_compatible"></a>';g+="</div></div></li>"}$(e).html(g);if(null==subscriptIdArray||(null!=subscriptIdArray&&subscriptIdArray.length==0)){$("#brandSubscribe").hide()}else{if(subscriptIdArray.length>3){slideCount=$("#subscribeBrandD li").length;$("#subscribeBrandD").width(slideCount*$slider_width);b()}else{slideCount=$("#subscribeBrandD li").length;$("#subscribeBrandD").width(slideCount*$slider_width);sliderPic()}}}function cancelSubscriptBtn(e){if(e!=null&&e.split(",").length!=0){var d=e.split(",")[0];var c=e.split(",")[1];userSubscript(d,c)}sliderPic()}function updateJsArray(e,c){if(c==1){if(subscriptIdArray==null){subscriptIdArray=new Array();subscriptIdArray[0]=e}else{subscriptIdArray.push(e)}}else{if(subscriptIdArray!=null){for(var d=0;d<subscriptIdArray.length;d++){if(e==subscriptIdArray[d]){subscriptIdArray.splice(d,1)}}if(subscriptIdArray.length>=3){a()}}}}var subscriptImgArray=null;function updateJsArrayImg(d,c){if(c==1){if(subscriptImgArray==null){subscriptImgArray=new Array();subscriptImgArray[0]=d}else{subscriptImgArray.push(d)}}else{if(subscriptImgArray!=null){for(var e=0;e<subscriptImgArray.length;e++){if(d==subscriptImgArray[e]){subscriptImgArray.splice(e,1)}}}}}function validatemobile(c){if(c.length==0){showSubscriptPopInfo();return false}if(c.length!=11){showSubscriptPopInfo();return false}var d=/^[0-9]{11}$/;if(!d.test(c)){showSubscriptPopInfo();return false}}function goToEventPageByEventId(c){window.location.href="${request.contextPath}/event/list?id="+c}function closedWechatPop(){$("#pop_up_box").hide()}function hotPointmouseOver(d){var e=d+"banner";var c=document.getElementById(e);c.removeEventListener("click")}function hotPointmouseOut(e){var f=e+"banner";var c=document.getElementById(f);var d=hotPointClick();c.addEventListener("click",d,false)}function hotPointClick(c,d){if(d=="1"){window.location.href=c}else{if(d=="2"){window.open(c,"_blank","")}else{if(d=="3"){$("#pop_img").attr("src",c);open_DialogOBJ("pop_img")}}}}function showSubscriptPopInfo(){$(".trip_mas").show();setTimeout(function(){$(".trip_mas").hide()},1500)}function getMarketingBanner(){var c=getCookie("mlh_mei_credential");var d={platform_code:"PC"};if(c){d.credential=c}$.ajax({url:"/appapi/home/marketingBannerNewZoneForPC",async:false,type:"GET",data:d,error:function(){},success:function(f){if(f.errorNum==0){if(f.banners&&f.banners.length>0){var e=initMarketingBanner(f.banners);$(".content_container > .eventList").eq(0).find("h3").after(e);new bigBannerImgSlide("rightBanner_leftpage","rightBanner_rightpage","marketingUl","marketBannerCircleDiv","marketingImgDiv",320,5000)}}}})}function initMarketingBanner(g){var e="";var f="";var d='<div class="rightBanner_leftpage" style="z-index:1; display:none;"></div><div class="rightBanner_rightpage" style="z-index:1; display:none;"></div><div class="theBannerPage" style="z-index:1;" id="marketBannerCircleDiv">';var h="</div>";var k="";var c='<div id="marketingImgDiv" style="width:100%;height:100%;position:relative;"><ul id="marketingUl" data-spm="2027977" style="width:2999px;position:absolute;overflow:hidden;cursor:pointer;">';var i="</ul></div>";var j="";$.each(g,function(l,m){if(l===0){k=k+'<a class="pagebutton_checked"></a>'}else{k=k+"<a></a>"}j=j+'<li style="float:left;" onclick="marketBannerClick(\''+m.link_type_code+"','"+m.link_url+"','"+m.target_code+"','"+m.pop_up+'\');"><img alt="" src="'+m.img_url+'" style="width:320px;height:485px;"></li>'});if(g.length>1){e=d+k+h}else{e=""}f='<div class="rightBanner">'+e+c+j+i+"</div>";return f}function getNewZone(){var c=getCookie("mlh_mei_credential");var d={platform_code:"PC"};if(c){d.credential=c}$.ajax({url:"/appapi/home/newZoneEntrance/v3",async:false,type:"GET",data:d,error:function(){$("#newZone").remove()},success:function(f){var e="";if(f.errorNum==0){if(f.linkUrl&&f.img){e='<a href="'+f.linkUrl+'" target="_blank"><img src="'+f.img+'" alt=""></a>';$("#newZone").append(e)}else{$("#newZone").remove()}}else{$("#newZone").remove()}}})};