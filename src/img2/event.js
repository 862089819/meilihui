var productSizes="";var brandNames="";var productTypes="";var priceOrderType="";var discountOrderType="";var currentTop=0;var currentPage=0;var totalPage=0;var contextPath="";var evEventId="";var detail_url="";var brandId="";var timerLoadMore=null;var index=0;var addProductOp=null;if(!window.Enterprise){window.Enterprise={}}var brandLabel=$("#selectBrandDiv").find("> .selectlist_top > span").text(),typeLabel=$("#selectTypeDiv").find("> .selectlist_top > span").text();var loadMoreUrl="silo";var ttop=420;window.onload=function(){var b=$(".content_bg");var a=$(window)||$(document);$(a).scroll(function(){var d=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var c=ttop-d;if(c>-50){$(b).css("margin-top",c)}})};function timerNew(){var a=$("#startDate0").val();var f=$("#endDate").val();var g=(new Date(f))-(new Date());var e=(new Date(f))-(new Date(a));var i=parseInt(g/1000/60/60/24,10);var b=parseInt(g/1000/60/60%24,10);var c=parseInt(g/1000/60%60,10);var j=parseInt(g/1000%60,10);var d=parseInt(e/1000/60/60/24,10);i=i+1;var h=d%7;if(h==0){h=7}if(i>h){i=(i-h)%7;if(i==0){i=7}}else{i=i}i=i-1;if(i<=0&&b<=0&&c<=0&&j<=0){if($.trim($("#spanTimer").text())=="0秒"){}else{$("#spanTimer").html("0秒");setTimeout("location.reload()",2000)}}else{if(i<=0){if(b<=0){if(c<=0){$("#spanTimer").html(j+"秒")}else{$("#spanTimer").html(c+"分"+j+"秒")}}else{$("#spanTimer").html(b+"时"+c+"分"+j+"秒")}}else{$("#spanTimer").html(i+"天"+b+"时"+c+"分"+j+"秒")}setTimeout("timerNew()",1000)}}$(function(){currentPage=$("#currentPage").val();totalPage=$("#totalPage").val();evEventId=$("#evEventId").val();contextPath=$("#contextPath").val();detail_url=$("#detail_url").val();brandId=$("#brandId").val();loadMoreUrl=$("#loadMoreUrl").val();var j=$("#ui-page-num"),f=$("#ui-page-s");isColect(brandId);timerNew();new bigBannerImgSlide("bigBanner_leftpage","bigBanner_rightpage","bannerUl","bannerCircleDiv","bannerImgDiv",1800,8000000);currentTop=$("#searchContentDiv").offset().top-$("#navBarId").height();var h=$("#bannerImgDiv").attr("id");if(null!=h&&typeof(h)!="undefined"){currentTop=currentTop/2}$(window).scroll(function(){var l=$(window).scrollTop();if(l>=currentTop){if(!$("#searchContentDiv").hasClass("productquery_top")){$("#searchContentDiv").addClass("productquery_top")}}else{if($("#searchContentDiv").hasClass("productquery_top")){$("#searchContentDiv").removeClass("productquery_top")}}});a();function a(){if(totalPage<2){return}var m=j.add(f),o=j.siblings(".ui-page-skip").find("> .form-page-skip"),n=Number(currentPage),l=$("#startDate").val(),l=l?l:"";m.on("click","> a",function(p){p.preventDefault();goldlogRecord("/mei.6.4","","","H1703624");c($(this).attr("data-page"))});o.submit(function(q){q.preventDefault();var r=$(this).find("> .ui-page-skipTo"),p=r.val(),p=p.trim(),p=Number(p);if(isNaN(p)||!p){r.val(currentPage)}else{p=(p<1)?1:p;p=(p>totalPage)?totalPage:p;c(p)}})}function c(n){var l=$("#startDate").val(),l=l?l:"";var m=$("#contentDiv").offset().top;m>300?$("html, body").animate({scrollTop:m-100}):$("html, body").animate({scrollTop:m-80});$pagerLoading=$("<div />").addClass("pager-loading").css({width:"100%",position:"absolute",top:0,left:0,right:0,padding:"0 0 15px","text-align":"center","background-color":"#fff","background-color":"rgba(255,255,255,0.75)","z-index":2,color:"#666"}).html('<img src="/images/pager_loading.gif"> 正在加载中...');$("#contentDiv").prepend($pagerLoading);$.ajax({type:"get",url:contextPath+"/"+loadMoreUrl+"/loadMore.html",dataType:"json",data:{evEventId:evEventId,currentPage:--n,priceOrderType:priceOrderType,discountOrderType:discountOrderType,brandNames:brandNames,productTypes:productTypes,productSizes:productSizes,detail_url:detail_url,startDate:l},error:function(){m>300?$("html, body").animate({scrollTop:m-120}):$("html, body").animate({scrollTop:m-70});$($pagerLoading).remove();j.add(f).siblings(".ui-page-error").stop(true,true).show().delay(2000).fadeOut("slow")},success:function(o){if(o.currentPage){$("#contentDiv").html(o.result);currentPage=o.currentPage}Enterprise.insideOut.updatePagers()}})}Enterprise.insideOut={updatePagers:function(v){var m=j.next().clone(),n=$("<div />"),o,q,p=2,u=totalPage,l=currentPage-2,t=currentPage+2,s=nextMore=false;if(l>p){s=((l-1)==p)||((l-2)==p);s=!s}if(t<u){nextMore=((t+1)==u)||((t+2)==u);nextMore=!nextMore}if(s){startPage=l}else{startPage=1}if(nextMore){endPage=t}else{endPage=totalPage}if(startPage<1){startPage=1}if(endPage>totalPage){endPage=totalPage}if(currentPage==1){o=m.children(":eq(0)").clone()}else{o=m.children(":eq(1)").clone(),prevPage=currentPage-1,o=g(o,prevPage)}n.append(o);if(s){for(var r=1;r<3;r++){o=m.children(":eq(3)").clone();o=g(o,r,true);n.append(o)}o=m.children(":eq(6)").clone();n.append(o)}for(var r=startPage;r<=endPage;r++){if(r==currentPage){o=m.children(":eq(2)").clone().html(r)}else{o=m.children(":eq(3)").clone();o=g(o,r,true)}n.append(o)}if(nextMore){o=m.children(":eq(6)").clone();n.append(o);o=m.children(":eq(3)").clone();o=g(o,totalPage,true);n.append(o)}if(currentPage==totalPage){o=m.children(":eq(4)").clone()}else{o=m.children(":eq(5)").clone(),nextPage=currentPage+1;o=g(o,nextPage)}n.append(o);j.empty().append(n.children());m=f.next().clone(),n=$("<div />");o=m.children(":eq(0)").clone().html(currentPage+"/"+totalPage);n.append(o);if(currentPage==1){o=m.children(":eq(1)").clone()}else{o=m.children(":eq(2)").clone(),prevPage=currentPage-1;o=g(o,prevPage)}n.append(o);if(currentPage==totalPage){o=m.children(":eq(3)").clone()}else{o=m.children(":eq(4)").clone(),nextPage=currentPage+1;o=g(o,nextPage)}n.append(o);f.empty().append(n.children());if(v){f.parent().siblings("#ui-page-totalCount").find("> b").html(v)}j.siblings(".ui-page-skip").find(".ui-page-skipTo").val(currentPage).attr("data-page",currentPage).siblings("b").html(totalPage)},toggleShowMoreBtn:function(){var o=$("#nav-attrs").find("> .filter-list");if(!o.length){return}var n=o.find(".select_ul"),m=n.css("line-height").replace("px",""),l=m*2;n.each(function(q,r){var r=$(this),p=r.parent().next();(r.height()>l)?p.show():p.hide()})}};function g(m,n,l){m.attr("data-page",n);if(l){m.html(n)}return m}$("#selected-attrs").on("click","li",function(){var o=$(this),n=o.attr("data-type"),p=o.attr("data"),m,l;o.hide();if(n=="brand"){m=i(brandNames,p);brandNames=m;l="selectBrandLoading"}if(n=="type"){m=i(productTypes,p);productTypes=m;l="selectTypeLoading"}searchProduct(l,"menu");searchProduct(l,"page")}).on("click","> .reset-filters",function(){brandNames=productTypes="";searchProduct("noneLoading","menu");searchProduct("noneLoading","page")});$("#searchContentDiv").on("click",".sorter > a",function(){var m=$(this),q=m.hasClass("btn-reset-sorter");if(q){m.addClass("is-default").siblings(".order-by").removeClass("asc desc");priceOrderType=discountOrderType="";goldlogRecord("/mei.6.2","","","H1703622")}else{var s=m.hasClass("desc"),l=m.hasClass("asc"),n=!s&&!l,r=m.siblings(".btn-reset-sorter"),t=r.hasClass("is-default"),p=m.hasClass("by-price"),o;if(n){m.addClass("asc");o="ASC"}else{if(s){m.addClass("asc").removeClass("desc");o="ASC"}else{m.addClass("desc").removeClass("asc");o="DESC"}}if(p){priceOrderType=o;goldlogRecord("/mei.6.3","","","H1703623")}else{discountOrderType=o}if(t){r.removeClass("is-default")}}searchProduct("sorter-loader","page")});k();function k(){var l=$("#nav-attrs").find("> .filter-list");if(!l.length){return}Enterprise.insideOut.toggleShowMoreBtn();l.on("click",".show-more",function(o,p){var p=$(this),m=!p.hasClass("expanded"),n=m?p.attr("data-fold"):p.attr("data-more");p.toggleClass("expanded").html(n).prev().toggleClass("expanded-list")})}function i(l,m){if(l==m){l=""}else{var n=l.split(","),o=$.inArray(m,n);n.splice(o,1);l=n.join(",")}return l}var b=$("#scrollTypeDiv .select_ul li").length;var e=null;var d=e+1;$("#scrollTypeDiv .select_ul li").live("click",function(){e=$(this).index();d=e+1<b?e+1:0;if($("#scrollTypeDiv .select_ul li span").eq(e).hasClass("selected")){$("#scrollTypeDiv .select_ul li span").eq(e).removeClass("selected");$("#scrollTypeDiv .select_ul li span").eq(e).addClass("not_selected")}else{$("#scrollTypeDiv .select_ul li span").eq(e).removeClass("not_selected");$("#scrollTypeDiv .select_ul li span").eq(e).addClass("selected")}var m=$("#scrollTypeDiv .select_ul li span");productTypes="";for(var l=0;l<m.length;l++){if($("#scrollTypeDiv .select_ul li span").eq(l).hasClass("selected")){if(productTypes==""){productTypes+=$("#scrollTypeDiv .select_ul li").eq(l).attr("data")}else{productTypes+=","+$("#scrollTypeDiv .select_ul li").eq(l).attr("data")}}}if(productTypes==""){$("#btn_resetType").hide()}else{$("#btn_resetType").show()}searchProduct("selectTypeLoading","menu");searchProduct("selectTypeLoading","page")});b=$("#scrollDiv .select_ul li").length;e=null;d=e+1;$("#scrollDiv .select_ul li").live("click",function(){e=$(this).index();d=e+1<b?e+1:0;if($("#scrollDiv .select_ul li span").eq(e).hasClass("selected")){$("#scrollDiv .select_ul li span").eq(e).removeClass("selected");$("#scrollDiv .select_ul li span").eq(e).addClass("not_selected")}else{$("#scrollDiv .select_ul li span").eq(e).removeClass("not_selected");$("#scrollDiv .select_ul li span").eq(e).addClass("selected")}var m=$("#scrollDiv .select_ul li span");brandNames="";for(var l=0;l<m.length;l++){if($("#scrollDiv .select_ul li span").eq(l).hasClass("selected")){if(brandNames==""){brandNames+=$("#scrollDiv .select_ul li").eq(l).attr("data")}else{brandNames+=","+$("#scrollDiv .select_ul li").eq(l).attr("data")}}}if(brandNames==""){$("#btn_resetBrand").hide()}else{$("#btn_resetBrand").show()}searchProduct("selectBrandLoading","menu");searchProduct("selectBrandLoading","page")});$("#listproduct").live("mouseenter",function(){if(!$("#product_select_info").is(":animated")&&!$("#img_002").is(":animated")){$("#product_select_info").animate({left:0+"px"},"10");$("#img_002").animate({left:0+"px"},"10")}});$("#listproduct").live("mouseleave",function(){if(!$("#product_select_info").is(":animated")&&!$("#img_002").is(":animated")){$("#product_select_info").animate({left:-320+"px"},"10");$("#img_002").animate({left:320+"px"},"10")}})});function loadScroll(c){var b=$("#"+c).height();var a=$("#"+c+" .select_ul").eq(0).height();if(null==a||typeof(a)=="undefined"){var a=$("#"+c+" #innerScrollSizeDiv").height()}if(null!=b&&typeof(b)!="undefined"&&a>b){$("#"+c).jscroll({W:"3px",BgUrl:"",Bg:"right #e7e7e7 repeat-x",Bar:{Pos:"up",Bd:{Out:"#000 background-color #000",Hover:"#000 "},Bg:{Out:"-45px 0 repeat-x #000",Hover:"-58px 0 repeat-x  #000 pointer",Focus:"-71px 0 repeat-x  #000"}},Btn:{btn:false,uBg:{Out:"0 0 ",Hover:"-15px 0",Focus:"-30px 0"},dBg:{Out:"0 -15px",Hover:"-15px -15px",Focus:"-30px -15px"}},Fn:function(){}})}}function mouseOverImage(a){if($("#product_pop_info"+a).is(":hidden")){$("#product_pop_info"+a).show()}}function mouseOutImage(a){$("#product_pop_info"+a).hide()}function selectSizeClick(h){if($(h).hasClass("product_size_Checked")){$(h).removeClass("product_size_Checked")}else{$(h).addClass("product_size_Checked")}var e=$("#scrollSizeDiv .product_size");productSizes="";var a="";var c=false;for(var b=0;b<e.length;b++){a="";if($("#sizeGroup"+b).attr("data")=="ALL"){if(productSizes==""){a+="ALL"}else{a+="_ALL"}}else{if(productSizes==""){a+=$("#sizeGroup"+b).attr("data")+":"}else{a+="_"+$("#sizeGroup"+b).attr("data")+":"}}c=false;var f=$("#sizeGroup"+b+" ul li span");for(var d=0;d<f.length;d++){if($("#sizeGroup"+b+" ul li span").eq(d).hasClass("product_size_Checked")){var g=$("#sizeGroup"+b+" ul li").eq(d).attr("data");if(!c){productSizes+=a;c=true}if(g=="ALL"){}else{if(productSizes.substr(productSizes.length-1)==":"){productSizes+=g}else{productSizes+=","+g}}}}}if(productSizes==""){$("#btn_resetSize").hide()}else{$("#btn_resetSize").show()}searchProduct("selectSizeLoading")}function searchProduct(c){var b=$("#"+c);if(null!=b&&typeof(b)!="undefined"){b.show()}var a="";if(null!=$("#startDate")&&typeof($("#startDate"))!="undefined"){a=$("#startDate").val()}$.ajax({type:"get",url:contextPath+"/"+loadMoreUrl+"/search.html",dataType:"json",data:{evEventId:evEventId,priceOrderType:priceOrderType,discountOrderType:discountOrderType,brandNames:brandNames,productTypes:productTypes,productSizes:productSizes,detail_url:detail_url,startDate:a},success:function(h){var f=h.result;var e=h.brandList;$("#scrollDiv").html(e);if(h.brandNames!=null){brandNames=h.brandNames}var g=h.categoryList;$("#scrollTypeDiv").html(g);if(h.productTypes!=null){productTypes=h.productTypes}var d=h.sizeList;$("#scrollSizeDiv").html(d);if(h.productSizes!=null){productSizes=h.productSizes}if(e||g){paintSelectedFilters(e,g)}Enterprise.insideOut.toggleShowMoreBtn();switch(f){case 0:break;default:$("#contentDiv").html(f);$("#contentDiv").css("padding-bottom","100px");currentPage=1;totalPage=h.totalPage;Enterprise.insideOut.updatePagers(h.totalCount);break}b.hide()}});isLastPage=false}function paintSelectedFilters(c,d){var a=_paintSelectedFilters(c,"brand",brandLabel),f=_paintSelectedFilters(d,"type",typeLabel),e=$("<div />"),b,g=$("#selected-attrs").find("> .attrs");if(a&&a.children().length){e.append(a.children())}if(f&&f.children().length){e.append(f.children())}b=e.children();if(b.length){g.empty().append(b).parent().show()}else{g.empty().parent().hide()}}function _paintSelectedFilters(f,d,a){var c="",e=$("<ul />"),b;if(f){c=e;$(f).find("span").each(function(){var h=$(this),g=h.hasClass("selected");if(g){b=h.text(a).parent().attr("data-type",d);c.append(b)}})}return c}function productSizeClick(f,d,a){var e=$("#product_select_info"+d+" .product_size ul li span");var b=0;for(var c=0;c<e.length;c++){if($("#product_select_info"+d+" .product_size ul li span").eq(c).hasClass("product_size_Checked")){$("#product_select_info"+d+" .product_size ul li span").eq(c).removeClass("product_size_Checked")}if(e[c]==f){b=c}}if($(f).hasClass("product_size_Checked")){$(f).removeClass("product_size_Checked")}else{$(f).addClass("product_size_Checked")}e=$("#dhtzUl"+d+" li span");for(var c=0;c<e.length;c++){if($("#dhtzUl"+d+" li span").eq(c).hasClass("product_size_Checked")){$("#dhtzUl"+d+" li span").eq(c).removeClass("product_size_Checked")}}if($("#dhtzUl"+d+" li span").eq(b).hasClass("product_size_Checked")){$("#dhtzUl"+d+" li span").eq(b).removeClass("product_size_Checked")}else{$("#dhtzUl"+d+" li span").eq(b).addClass("product_size_Checked")}$("#sizeId"+d).val(a);$("#message"+d).html("");$("#message"+d).hide()}function productSizeForDhtzClick(d,a){getQRCode(a);var c=$("#dhtzPopUl li span");for(var b=0;b<c.length;b++){if($("#dhtzPopUl li span").eq(b).hasClass("product_size_Checked")){$("#dhtzPopUl li span").eq(b).removeClass("product_size_Checked")}}if($(d).hasClass("product_size_Checked")){$(d).removeClass("product_size_Checked")}else{$(d).addClass("product_size_Checked")}$("#dhtzSizeId1").val(a)}function addEventProduct(g,e,d,c){$(g).html("提交中...");addProductOp=g;var b=$("#sizeId"+e).val();if(b==""){$("#message"+e).html("请选择适合您的尺寸！");$("#message"+e).show()}else{var f=isLogins();if(f==="nologin"){showPopDiv("poplogin")}else{var a=addProduct(b,d,"",c);if(a!=null){if(a.msg!=""){showMessage(e,a.msg);setTimeout("hiddenMessage('"+e+"')",3000)}}}}setTimeout("recoverMessage()",200)}function showMessage(a,b){if($("#product_select_info"+a+" #productSizeDiv").is(":hidden")){$("#product_select_info"+a+" #productSizeDiv").show()}$("#message"+a).html(b);$("#message"+a).show()}function hiddenMessage(a){$("#message"+a).html("");$("#message"+a).hide();if($("#product_select_info"+a+" #productSizeDiv").attr("name")=="none"){$("#product_select_info"+a+" #productSizeDiv").hide()}}function recoverMessage(a){$(addProductOp).html("加入购物袋")}function showDhtzPoPDiv(a,b){var d=isLogins();if(d==="nologin"){showPopDiv("poplogin")}else{$("#dhtzPopUl").html($("#dhtzUl"+b).html());if($("#dhtzPopUl li").text()==""){$("#arrivalNoticeProductSize").hide()}else{$("#arrivalNoticeProductSize").show()}showdiv(a);var c=$("#dhtzSizeId"+b).val();if(null!=c&&typeof(c)!="undefined"){$("#dhtzSizeId1").val(c);toGetArrivalInfo();getQRCode(c)}}}function toGetArrivalInfo(){$.ajax({type:"get",url:contextPath+"/silo/toGetArrival.html",success:function(b){var a=b.result;if(a!=null&&a!=""){$("#showDivDialog #txtNoticeContent1").val(a);$("#showDivDialog #txtNoticeContent1").css("color","black")}}})}function getQRCode(a){$.ajax({type:"get",url:contextPath+"/silo/getQRCode.html",dataType:"json",data:{productId:a,evEventId:evEventId},success:function(d){var b=d.result;if(b=="suc"){var c=d.qrCode;$("#showDivDialog #imgQrCode").attr("src","https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+c)}else{$("#showDivDialog #noticeMsg").html("获取微信图片失败")}}})}function showPoPDiv(a,f){if(a=="aNSuccess"){if($("#dhtzSizeId1").val()==""){$("#showDivDialog #noticeMsg").html("请选择一个尺寸");return}}var e=$("#dhtzSizeId1").val();var c=$("#showDivDialog #txtNoticeContent1").val();var d="1";var b=/^([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;var g=/^[0-9]{11}$/;if(null==c||""==c||null==$.trim(c)||""==$.trim(c)||"请输入您的手机号码或邮箱"==$.trim(c)){$("#showDivDialog #noticeMsg").html("请输入您的手机号码或邮箱");return}else{if(b.test(c)||g.test(c)){if(b.test(c)){if("@yahoo.com.cn"==c||"@yahoo.cn"==c){$("#showDivDialog #noticeMsg").html("Yahoo 中国邮箱已停止使用，请您更换其它邮箱");return}d="1"}else{d="2"}}else{$("#showDivDialog #noticeMsg").html("请输入正确的手机号码或邮箱");return}}$.ajax({type:"get",url:contextPath+"/silo/arrivalNotice.html",dataType:"json",data:{noticeContent:c,productId:e,eventId:f,type:d},success:function(i){var h=i.result;if(h=="suc"){showdiv(a)}else{$("#showDivDialog #noticeMsg").html("到货通知提交失败")}}})}function showPoPZpxqDiv(a){var d="";var c=$("span[name='"+a+"']");for(var b=0;b<c.length;b++){var e=c.eq(b).text();if(null!=e&&typeof(e)!="undefined"){if(d==""){d=e}else{d+="__"+e}}}$.ajax({type:"get",url:contextPath+"/silo/getGiftDetail.html",dataType:"json",data:{strGiftList:d,evEventId:evEventId,detail_url:detail_url},success:function(g){var f=g.result;if(f=="suc"){if(g.type=="one"){showdiv("GWPDetailDiv")}else{showdiv("GWPDetailDiv")}$("#showDivDialog #bodyDivID").html(g.data);$("#showDivDialog").width(500);$("#showDivDialog").height(2000);if(g.type=="one"){$("#showDivDialog #GWPDetailDiv").show()}else{$("#showDivDialog #GWPDetailListDiv").show()}}else{}}})}function GWPSelectClick(d,a,f,c){if(c=="empty"){$("#isEmpty"+d).show()}else{$("#isEmpty"+d).hide()}$("#giftName"+d).html("<a style='white-space: normal;' >"+$(f).attr("title")+"</a>");$("#GWPImg"+d).attr("src",a);$("#GWPImg"+d).attr("title",$(f).attr("title"));var e=$("#GWPUl"+d+" li span");for(var b=0;b<e.length;b++){if($("#GWPUl"+d+" li span").eq(b).hasClass("border_color2_Checked")){$("#GWPUl"+d+" li span").eq(b).removeClass("border_color2_Checked");$("#GWPUl"+d+" li span").eq(b).addClass("border_color2")}}if($(f).hasClass("border_color2")){$(f).removeClass("border_color2");$(f).addClass("border_color2_Checked")}}function clearText(a){if($(a).val()=="请输入您的手机号码或邮箱"){$(a).val("");$(a).css("color","black")}}function changeImageList(b,a,c){if(null!=a&&typeof(a)!="undefined"){$("#productImg"+b).attr("src",a)}$("#smallImgDiv"+b).children("span").removeClass("border_color2_Checked");$(c).addClass("border_color2_Checked")}function showRecommendInfo(b){var a=$(b).prev();if(null!=a&&typeof(a)!="undefined"){a.children("div").show()}}function hideRecommendInfo(b){var a=$(b).prev();if(null!=a&&typeof(a)!="undefined"){a.children("div").hide()}}function addBankEventProduct(f,e,d,c){$(f).html("提交中...");addProductOp=f;var b=$("#sizeId"+e).val();if(b==""){$("#message"+e).html("请选择适合您的尺寸！");$("#message"+e).show()}else{if($("#membereid").val()==""){loginBankSuccess()}else{var a=addProduct(b,d,"",c);if(a!=null){if(a.msg!=""){showMessage(e,a.msg);setTimeout("hiddenMessage('"+e+"')",3000)}}}}setTimeout("recoverMessage()",200)}function showBankDhtzPoPDiv(a,b){if($("#membereid").val()==""){showdiv("loginBank")}else{$("#dhtzPopUl").html($("#dhtzUl"+b).html());if($("#dhtzPopUl li").text()==""){$("#arrivalNoticeProductSize").hide()}else{$("#arrivalNoticeProductSize").show()}showdiv(a);var c=$("#dhtzSizeId"+b).val();if(null!=c&&typeof(c)!="undefined"){$("#dhtzSizeId1").val(c);getQRCode(c)}}}function bigBannerClick(c,a,b){if(b=="1"){window.location.href=a}else{if(b=="2"){window.open(a,"_blank","")}else{if(b=="3"){$("#pop_img").attr("src",a);showdiv("pop_link")}}}}function hotPointClick(a,b){if(b=="1"){window.location.href=a}else{if(b=="2"){window.open(a,"_blank","")}else{if(b=="3"){$("#pop_img").attr("src",a);showdiv("pop_link")}}}}function isColect(a){$.ajax({type:"get",dataType:"json",url:$("#contextPath").val()+"/brandPage/isBdColect.html",data:{brandId:a},cache:false,success:function(c){var b=c.result;if(b=="yes"){$("#addcolleting").css("display","none");$("#cancelcolleting").css("display","block")}else{$("#addcolleting").css("display","block");$("#cancelcolleting").css("display","none")}}})}var xb={evtHash:[],ieGetUniqueID:function(a){if(a===window){return"theWindow"}else{if(a===document){return"theDocument"}else{return a.uniqueID}}},addEvent:function(b,c,g,e){if(typeof b.addEventListener!="undefined"){if(c=="mouseenter"){b.addEventListener("mouseover",xb.mouseEnter(g),e)}else{if(c=="mouseleave"){b.addEventListener("mouseout",xb.mouseEnter(g),e)}else{b.addEventListener(c,g,e)}}}else{if(typeof b.attachEvent!="undefined"){var a="{FNKEY::obj_"+xb.ieGetUniqueID(b)+"::evt_"+c+"::fn_"+g+"}";var d=xb.evtHash[a];if(typeof d!="undefined"){return}d=function(){g.call(b)};xb.evtHash[a]=d;b.attachEvent("on"+c,d);window.attachEvent("onunload",function(){b.detachEvent("on"+c,d)});a=null}else{b["on"+c]=g}}},removeEvent:function(b,c,g,e){if(typeof b.removeEventListener!="undefined"){b.removeEventListener(c,g,e)}else{if(typeof b.detachEvent!="undefined"){var a="{FNKEY::obj_"+xb.ieGetUniqueID(b)+"::evt"+c+"::fn_"+g+"}";var d=xb.evtHash[a];if(typeof d!="undefined"){b.detachEvent("on"+c,d);delete xb.evtHash[a]}a=null}}},mouseEnter:function(a){return function(b){var c=b.relatedTarget;if(this==c||xb.isAChildOf(this,c)){return}a.call(this,b)}},isAChildOf:function(b,a){if(b==a){return false}while(a&&a!=b){a=a.parentNode}return a==b}};