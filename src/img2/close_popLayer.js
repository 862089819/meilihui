function ClosePopLayerUtil(b,a,c){this.id1=b;this.id2=a;if(null!=a&&typeof(a)!=="undefined"){$("body").bind("click",function(f){var d=$(f.target);if(d.closest("#"+b).length==0){$("#"+b).hide();c(b)}else{if(d.closest("#"+a).length!=0){$("#"+b).hide();c(b)}}})}else{$("body").bind("click",function(f){var d=$(f.target);if(d.closest("#"+b).length==0){$("#"+b).hide();c(b)}})}};