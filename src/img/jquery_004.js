/*! jCarousel - v0.3.1 - 2014-04-26
* http://sorgalla.com/jcarousel
* Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function(c){var a=c.jCarousel={};a.version="0.3.1";var b=/^([+\-]=)?(.+)$/;a.parseTarget=function(f){var d=false,e=typeof f!=="object"?b.exec(f):null;if(e){f=parseInt(e[2],10)||0;if(e[1]){d=true;if(e[1]==="-="){f*=-1}}}else{if(typeof f!=="object"){f=parseInt(f,10)||0}}return{target:f,relative:d}};a.detectCarousel=function(d){var e;while(d.length>0){e=d.filter("[data-jcarousel]");if(e.length>0){return e}e=d.find("[data-jcarousel]");if(e.length>0){return e}d=d.parent()}return null};a.base=function(d){return{version:a.version,_options:{},_element:null,_carousel:null,_init:c.noop,_create:c.noop,_destroy:c.noop,_reload:c.noop,create:function(){this._element.attr("data-"+d.toLowerCase(),true).data(d,this);if(false===this._trigger("create")){return this}this._create();this._trigger("createend");return this},destroy:function(){if(false===this._trigger("destroy")){return this}this._destroy();this._trigger("destroyend");this._element.removeData(d).removeAttr("data-"+d.toLowerCase());return this},reload:function(e){if(false===this._trigger("reload")){return this}if(e){this.options(e)}this._reload();this._trigger("reloadend");return this},element:function(){return this._element},options:function(e,f){if(arguments.length===0){return c.extend({},this._options)}if(typeof e==="string"){if(typeof f==="undefined"){return typeof this._options[e]==="undefined"?null:this._options[e]}this._options[e]=f}else{this._options=c.extend({},this._options,e)}return this},carousel:function(){if(!this._carousel){this._carousel=a.detectCarousel(this.options("carousel")||this._element);if(!this._carousel){c.error('Could not detect carousel for plugin "'+d+'"')}}return this._carousel},_trigger:function(g,f,i){var h,e=false;i=[this].concat(i||[]);(f||this._element).each(function(){h=c.Event((d+":"+g).toLowerCase());c(this).trigger(h,i);if(h.isDefaultPrevented()){e=true}});return !e}}};a.plugin=function(f,d){var e=c[f]=function(h,g){this._element=c(h);this.options(g);this._init();this.create()};e.fn=e.prototype=c.extend({},a.base(f),d);c.fn[f]=function(h){var g=Array.prototype.slice.call(arguments,1),i=this;if(typeof h==="string"){this.each(function(){var j=c(this).data(f);if(!j){return c.error("Cannot call methods on "+f+' prior to initialization; attempted to call method "'+h+'"')}if(!c.isFunction(j[h])||h.charAt(0)==="_"){return c.error('No such method "'+h+'" for '+f+" instance")}var k=j[h].apply(j,g);if(k!==j&&typeof k!=="undefined"){i=k;return false}})}else{this.each(function(){var j=c(this).data(f);if(j instanceof e){j.reload(h)}else{new e(this,h)}})}return i};return e}}(jQuery));(function(c,b){var a=function(d){return parseFloat(d)||0};c.jCarousel.plugin("jcarousel",{animating:false,tail:0,inTail:false,resizeTimer:null,lt:null,vertical:false,rtl:false,circular:false,underflow:false,relative:false,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:false,wrap:null,vertical:null,rtl:null,center:false},_list:null,_items:null,_target:null,_first:null,_last:null,_visible:null,_fullyvisible:null,_init:function(){var d=this;this.onWindowResize=function(){if(d.resizeTimer){clearTimeout(d.resizeTimer)}d.resizeTimer=setTimeout(function(){d.reload()},100)};return this},_create:function(){this._reload();c(b).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){c(b).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical");if(this.vertical==null){this.vertical=this.list().height()>this.list().width()}this.rtl=this.options("rtl");if(this.rtl==null){this.rtl=(function(f){if((""+f.attr("dir")).toLowerCase()==="rtl"){return true}var g=false;f.parents("[dir]").each(function(){if((/rtl/i).test(c(this).attr("dir"))){g=true;return false}});return g}(this._element))}this.lt=this.vertical?"top":"left";this.relative=this.list().css("position")==="relative";this._list=null;this._items=null;var e=this._target&&this.index(this._target)>=0?this._target:this.closest();this.circular=this.options("wrap")==="circular";this.underflow=false;var d={left:0,top:0};if(e.length>0){this._prepare(e);this.list().find("[data-jcarousel-clone]").remove();this._items=null;this.underflow=this._fullyvisible.length>=this.items().length;this.circular=this.circular&&!this.underflow;d[this.lt]=this._position(e)+"px"}this.move(d);return this},list:function(){if(this._list===null){var d=this.options("list");this._list=c.isFunction(d)?d.call(this):this._element.find(d)}return this._list},items:function(){if(this._items===null){var d=this.options("items");this._items=(c.isFunction(d)?d.call(this):this.list().find(d)).not("[data-jcarousel-clone]")}return this._items},index:function(d){return this.items().index(d)},closest:function(){var d=this,i=this.list().position()[this.lt],h=c(),e=false,g=this.vertical?"bottom":(this.rtl&&!this.relative?"left":"right"),f;if(this.rtl&&this.relative&&!this.vertical){i+=this.list().width()-this.clipping()}this.items().each(function(){h=c(this);if(e){return false}var j=d.dimension(h);i+=j;if(i>=0){f=j-a(h.css("margin-"+g));if((Math.abs(i)-j+(f/2))<=0){e=true}else{return false}}});return h},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(false===this._trigger("hasnext")){return true}var e=this.options("wrap"),d=this.items().length-1;return d>=0&&!this.underflow&&((e&&e!=="first")||(this.index(this._last)<d)||(this.tail&&!this.inTail))?true:false},hasPrev:function(){if(false===this._trigger("hasprev")){return true}var d=this.options("wrap");return this.items().length>0&&!this.underflow&&((d&&d!=="last")||(this.index(this._first)>0)||(this.tail&&this.inTail))?true:false},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(d){return d["outer"+(this.vertical?"Height":"Width")](true)},scroll:function(n,f,t){if(this.animating){return this}if(false===this._trigger("scroll",null,[n,f])){return this}if(c.isFunction(f)){t=f;f=true}var q=c.jCarousel.parseTarget(n);if(q.relative){var g=this.items().length-1,r=Math.abs(q.target),e=this.options("wrap"),o,l,m,d,u,k,p,h;if(q.target>0){var s=this.index(this._last);if(s>=g&&this.tail){if(!this.inTail){this._scrollTail(f,t)}else{if(e==="both"||e==="last"){this._scroll(0,f,t)}else{if(c.isFunction(t)){t.call(this,false)}}}}else{o=this.index(this._target);if((this.underflow&&o===g&&(e==="circular"||e==="both"||e==="last"))||(!this.underflow&&s===g&&(e==="both"||e==="last"))){this._scroll(0,f,t)}else{m=o+r;if(this.circular&&m>g){h=g;u=this.items().get(-1);while(h++<m){u=this.items().eq(0);k=this._visible.index(u)>=0;if(k){u.after(u.clone(true).attr("data-jcarousel-clone",true))}this.list().append(u);if(!k){p={};p[this.lt]=this.dimension(u);this.moveBy(p)}this._items=null}this._scroll(u,f,t)}else{this._scroll(Math.min(m,g),f,t)}}}}else{if(this.inTail){this._scroll(Math.max((this.index(this._first)-r)+1,0),f,t)}else{l=this.index(this._first);o=this.index(this._target);d=this.underflow?o:l;m=d-r;if(d<=0&&((this.underflow&&e==="circular")||e==="both"||e==="first")){this._scroll(g,f,t)}else{if(this.circular&&m<0){h=m;u=this.items().get(0);while(h++<0){u=this.items().eq(-1);k=this._visible.index(u)>=0;if(k){u.after(u.clone(true).attr("data-jcarousel-clone",true))}this.list().prepend(u);this._items=null;var j=this.dimension(u);p={};p[this.lt]=-j;this.moveBy(p)}this._scroll(u,f,t)}else{this._scroll(Math.max(m,0),f,t)}}}}}else{this._scroll(q.target,f,t)}this._trigger("scrollend");return this},moveBy:function(f,g){var d=this.list().position(),h=1,e=0;if(this.rtl&&!this.vertical){h=-1;if(this.relative){e=this.list().width()-this.clipping()}}if(f.left){f.left=(d.left+e+a(f.left)*h)+"px"}if(f.top){f.top=(d.top+e+a(f.top)*h)+"px"}return this.move(f,g)},move:function(m,d){d=d||{};var h=this.options("transitions"),o=!!h,l=!!h.transforms,n=!!h.transforms3d,f=d.duration||0,k=this.list();if(!o&&f>0){k.animate(m,d);return}var e=d.complete||c.noop,j={};if(o){var i=k.css(["transitionDuration","transitionTimingFunction","transitionProperty"]),g=e;e=function(){c(this).css(i);g.call(this)};j={transitionDuration:(f>0?f/1000:0)+"s",transitionTimingFunction:h.easing||d.easing,transitionProperty:f>0?(function(){if(l||n){return"all"}return m.left?"left":"top"})():"none",transform:"none"}}if(n){j.transform="translate3d("+(m.left||0)+","+(m.top||0)+",0)"}else{if(l){j.transform="translate("+(m.left||0)+","+(m.top||0)+")"}else{c.extend(j,m)}}if(o&&f>0){k.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",e)}k.css(j);if(f<=0){k.each(function(){e.call(this)})}},_scroll:function(f,d,i){if(this.animating){if(c.isFunction(i)){i.call(this,false)}return this}if(typeof f!=="object"){f=this.items().eq(f)}else{if(typeof f.jquery==="undefined"){f=c(f)}}if(f.length===0){if(c.isFunction(i)){i.call(this,false)}return this}this.inTail=false;this._prepare(f);var h=this._position(f),g=this.list().position()[this.lt];if(h===g){if(c.isFunction(i)){i.call(this,false)}return this}var e={};e[this.lt]=h+"px";this._animate(e,d,i);return this},_scrollTail:function(d,g){if(this.animating||!this.tail){if(c.isFunction(g)){g.call(this,false)}return this}var f=this.list().position()[this.lt];if(this.rtl&&this.relative&&!this.vertical){f+=this.list().width()-this.clipping()}if(this.rtl&&!this.vertical){f+=this.tail}else{f-=this.tail}this.inTail=true;var e={};e[this.lt]=f+"px";this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())});this._animate(e,d,g);return this},_animate:function(f,e,j){j=j||c.noop;if(false===this._trigger("animate")){j.call(this,false);return this}this.animating=true;var i=this.options("animation"),d=c.proxy(function(){this.animating=false;var k=this.list().find("[data-jcarousel-clone]");if(k.length>0){k.remove();this._reload()}this._trigger("animateend");j.call(this,true)},this);var h=typeof i==="object"?c.extend({},i):{duration:i},g=h.complete||c.noop;if(e===false){h.duration=0}else{if(typeof c.fx.speeds[h.duration]!=="undefined"){h.duration=c.fx.speeds[h.duration]}}h.complete=function(){d();g.call(this)};this.move(f,h);return this},_prepare:function(o){var l=this.index(o),n=l,e=this.dimension(o),f=this.clipping(),k=this.vertical?"bottom":(this.rtl?"left":"right"),d=this.options("center"),h={target:o,first:o,last:o,visible:o,fullyvisible:e<=f?o:c()},p,j,g,i;if(d){e/=2;f/=2}if(e<f){while(true){p=this.items().eq(++n);if(p.length===0){if(!this.circular){break}p=this.items().eq(0);if(o.get(0)===p.get(0)){break}j=this._visible.index(p)>=0;if(j){p.after(p.clone(true).attr("data-jcarousel-clone",true))}this.list().append(p);if(!j){var m={};m[this.lt]=this.dimension(p);this.moveBy(m)}this._items=null}i=this.dimension(p);if(i===0){break}e+=i;h.last=p;h.visible=h.visible.add(p);g=a(p.css("margin-"+k));if((e-g)<=f){h.fullyvisible=h.fullyvisible.add(p)}if(e>=f){break}}}if(!this.circular&&!d&&e<f){n=l;while(true){if(--n<0){break}p=this.items().eq(n);if(p.length===0){break}i=this.dimension(p);if(i===0){break}e+=i;h.first=p;h.visible=h.visible.add(p);g=a(p.css("margin-"+k));if((e-g)<=f){h.fullyvisible=h.fullyvisible.add(p)}if(e>=f){break}}}this._update(h);this.tail=0;if(!d&&this.options("wrap")!=="circular"&&this.options("wrap")!=="custom"&&this.index(h.last)===(this.items().length-1)){e-=a(h.last.css("margin-"+k));if(e>f){this.tail=e-f}}return this},_position:function(f){var g=this._first,h=g.position()[this.lt],e=this.options("center"),d=e?(this.clipping()/2)-(this.dimension(g)/2):0;if(this.rtl&&!this.vertical){if(this.relative){h-=this.list().width()-this.dimension(g)}else{h-=this.clipping()-this.dimension(g)}h+=d}else{h-=d}if(!e&&(this.index(f)>this.index(g)||this.inTail)&&this.tail){h=this.rtl&&!this.vertical?h-this.tail:h+this.tail;this.inTail=true}else{this.inTail=false}return -h},_update:function(i){var e=this,g={target:this._target||c(),first:this._first||c(),last:this._last||c(),visible:this._visible||c(),fullyvisible:this._fullyvisible||c()},d=this.index(i.first||g.first)<this.index(g.first),f,h=function(k){var j=[],l=[];i[k].each(function(){if(g[k].index(this)<0){j.push(this)}});g[k].each(function(){if(i[k].index(this)<0){l.push(this)}});if(d){j=j.reverse()}else{l=l.reverse()}e._trigger(k+"in",c(j));e._trigger(k+"out",c(l));e["_"+k]=i[k]};for(f in i){h(f)}return this}})}(jQuery,window));(function(a){a.jcarousel.fn.scrollIntoView=function(i,c,m){var k=a.jCarousel.parseTarget(i),f=this.index(this._fullyvisible.first()),l=this.index(this._fullyvisible.last()),h;if(k.relative){h=k.target<0?Math.max(0,f+k.target):l+k.target}else{h=typeof k.target!=="object"?k.target:this.index(k.target)}if(h<f){return this.scroll(h,c,m)}if(h>=f&&h<=l){if(a.isFunction(m)){m.call(this,false)}return this}var j=this.items(),d=this.clipping(),g=this.vertical?"bottom":(this.rtl?"left":"right"),b=0,n;while(true){n=j.eq(h);if(n.length===0){break}b+=this.dimension(n);if(b>=d){var e=parseFloat(n.css("margin-"+g))||0;if((b-e)!==d){h++}break}if(h<=0){break}h--}return this.scroll(h,c,m)}}(jQuery));(function(a){a.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy();this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this);this.onReload=a.proxy(this._reload,this);this.onEvent=a.proxy(function(b){b.preventDefault();var c=this.options("method");if(a.isFunction(c)){c.call(this)}else{this.carousel().jcarousel(this.options("method"),this.options("target"))}},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload);this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent);this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent);this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var b=a.jCarousel.parseTarget(this.options("target")),e=this.carousel(),d;if(b.relative){d=e.jcarousel(b.target>0?"hasNext":"hasPrev")}else{var c=typeof b.target!=="object"?e.jcarousel("items").eq(b.target):b.target;d=e.jcarousel("target").index(c)>=0}if(this._active!==d){this._trigger(d?"active":"inactive");this._active=d}return this}})}(jQuery));(function(a){a.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(b){return'<a href="#'+b+'">'+b+"</a>"},event:"click",method:"scroll"},_carouselItems:null,_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy();this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this);this.onReload=a.proxy(this._reload,this);this.onScroll=a.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll);this._reload()},_destroy:function(){this._clear();this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll);this._carouselItems=null},_reload:function(){var h=this.options("perPage");this._pages={};this._items={};if(a.isFunction(h)){h=h.call(this)}if(h==null){this._pages=this._calculatePages()}else{var b=parseInt(h,10)||0,g=this._getCarouselItems(),f=1,d=0,m;while(true){m=g.eq(d++);if(m.length===0){break}if(!this._pages[f]){this._pages[f]=m}else{this._pages[f]=this._pages[f].add(m)}if(d%b===0){f++}}}this._clear();var l=this,k=this.carousel().data("jcarousel"),c=this._element,j=this.options("item"),e=this._getCarouselItems().length;a.each(this._pages,function(o,n){var i=l._items[o]=a(j.call(l,o,n));i.on(l.options("event")+".jcarouselpagination",a.proxy(function(){var r=n.eq(0);if(k.circular){var p=k.index(k.target()),q=k.index(r);if(parseFloat(o)>parseFloat(l._currentPage)){if(q<p){r="+="+(e-p+q)}}else{if(q>p){r="-="+(p+(e-q))}}}k[this.options("method")](r)},l));c.append(i)});this._update()},_update:function(){var c=this.carousel().jcarousel("target"),b;a.each(this._pages,function(e,d){d.each(function(){if(c.is(this)){b=e;return false}});if(b){return false}});if(this._currentPage!==b){this._trigger("inactive",this._items[this._currentPage]);this._trigger("active",this._items[b])}this._currentPage=b},items:function(){return this._items},reloadCarouselItems:function(){this._carouselItems=null;return this},_clear:function(){this._element.empty();this._currentPage=null},_calculatePages:function(){var i=this.carousel().data("jcarousel"),e=this._getCarouselItems(),f=i.clipping(),d=0,c=0,g=1,b={},h;while(true){h=e.eq(c++);if(h.length===0){break}if(!b[g]){b[g]=h}else{b[g]=b[g].add(h)}d+=i.dimension(h);if(d>=f){g++;d=0}}return b},_getCarouselItems:function(){if(!this._carouselItems){this._carouselItems=this.carousel().jcarousel("items")}return this._carouselItems}})}(jQuery));(function(a){a.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3000,autostart:true},_timer:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy();this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this);this.onAnimateEnd=a.proxy(this.start,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy);if(this.options("autostart")){this.start()}},_destroy:function(){this.stop();this.carousel().off("jcarousel:destroy",this.onDestroy)},start:function(){this.stop();this.carousel().one("jcarousel:animateend",this.onAnimateEnd);this._timer=setTimeout(a.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval"));return this},stop:function(){if(this._timer){this._timer=clearTimeout(this._timer)}this.carousel().off("jcarousel:animateend",this.onAnimateEnd);return this}})}(jQuery));