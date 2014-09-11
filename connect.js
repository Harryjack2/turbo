/*
 *    speedo.popup.min.js
 *
 *    Speedo Popup v2.0.1
 *
 *    Speedo Popup is a lightweight jQuery plugin
 *    with powerful customization settings.
 *
 *    http://www.artflow.ro
 *    http://www.agapastudio.com
 *
 *    Copyright (c) 2012-2013 By Artflow & Agapa Studio.All rights reserved.
 */

(function(b,j){var e=function(){return new e.fn.init};e.fn=e.prototype={version:"1.0.1",constructor:e,init:function(){return this}};e.fn.init.prototype=e.fn;j.speedo=e})(jQuery,window);

(function(b,j){var e=j.fn,c={},a=["opera","chrome","safari","firefox"],h;h=document.createElement("div");h.innerHTML="\x3c!--[if IE]><i></i><![endif]--\x3e";h=null!=h.getElementsByTagName("i")[0];c.is_ie=h;for(key in a){h=navigator.userAgent;var g=h.match(RegExp(a[key],"i"));c["is_"+a[key]]=null!==g}if(c.is_ie){var a=3,d=document.createElement("div");for(h=d.getElementsByTagName("i");d.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",h[0];);c.version=new String(4<a?a:0);c.version.high=
c.version}else{h=navigator.userAgent;if((g=h.match(/(opera|chrome|safari|firefox)\/?\s*(\.?\d+(\.\d+)*)/i))&&null!=(d=h.match(/version\/([\.\d]+)/i)))g[2]=d[1];g=g?g[2]:navigator.appVersion;c.version=new String(g);c.version.high=parseInt(c.version)}e.browser=c})(jQuery,speedo);


(function(b,j){
    function e(){var a={};this.add_action=function(b,c){void 0==a[b]&&(a[b]=[]);a[b].push(c)};this.remove_action=function(b,c){if(void 0!=a[b])for(key in a[b])a[b][key]===c&&(a[b]=a[b].splice(key,1))};this.trigger=function(c,g){var d=!1;if(void 0!=a[c])for(key in a[c])b.isFunction(a[c][key])&&(a[c][key](g),d=!0);return d}}
    var c=function(a){return new c.fn.init(a)};
    c.fn=c.prototype={version:"2.0.1",constructor:c,init:function(a){function c(d){d=d?d:a.href;n=!1;if((null==d||""==d)&&a.htmlContent)return"html";
if(d.match(u))return"image";return f}var d=this,l=0,p=0,k=0,m=0,f=null,q=null,s=null,r=null,t=null,n=!1,u=/\.(jpg|jpeg|gif|png|bmp|tiff)(.*)?$/i;this.instance_name="instance_"+5233*Math.random();this.extend=new e;this.overlay=this.container=null;this.create_popup=function(){a.theme=a.theme.toLowerCase();
var g=a.theme&&"default"!=a.theme?" speedo-theme-"+a.theme:"";if(0<a.startCount){var e=j().utility.get_cookie("speedo-popup-start-count"),e=e?e:0;if(e>=a.startCount)return;e++;j().utility.set_cookie("speedo-popup-start-count",e,a.interval)}b("body").addClass("speedo-popup-ready");f=b(document.createElement("div"));f.addClass("speedo-container"+g);d.container=f;a.css3Effects&&"none"!=a.css3Effects&&f.addClass("speedo-effect-"+a.css3Effects.toLowerCase());f.css({display:"none",width:a.width?a.width:
"auto",height:a.height?a.height:"auto","min-width":150,"min-height":150,left:"center"==a.left?"50%":a.left,top:"center"==a.top?"50%":a.top});f.appendTo("body");a.caption&&""!=a.caption&&(e=b(document.createElement("p")),e.addClass("speedo-popup-caption"),e.html(a.caption),f.append(e));s=b(document.createElement("div"));s.addClass("speedo-popup-loading");f.append(s);r=b(document.createElement("div"));r.addClass("speedo-content-holder");r.appendTo(f);var k;e=a.buttons;if(b.isArray(e)&&0<e.length){var l=
["html","action"],n=b(document.createElement("div"));n.addClass("speedo-popup-custom-buttons");for(var p=0;p<e.length;p++){var m=b(document.createElement("a"));m.attr("href","javascript: void(0);");e[p].html&&m.html(e[p].html);for(k in e[p])-1==l.indexOf(k)&&m.attr(k,e[p][k]);b.isFunction(e[p].action)&&m.click(e[p].action);n.append(m)}k=n}else k=!1;!1!==k&&f.append(k);k=c();d.setContent("html"!=k?a.href:a.htmlContent,k);a.close&&(q=b(document.createElement("a")),q.addClass("speedo-ui-close"),q.attr("href",
"javascript: void(0);"),q.click(function(b){a.onClose(b);d.hidePopup()}),q.html(a.closeCaption),f.append(q));a.overlay&&(t=b(document.createElement("div")),t.addClass("speedo-overlay"+g),t.appendTo("body"),d.overlay=t,"object"==typeof a.overlay&&b.extend({opacity:0.7,zindex:1E4},a.overlay),a.overlayClose&&t.click(function(b){a.onClose(b);d.hidePopup()}));this.modules.execute(d,a);a.onBeforeShow(f.get(0));d.centerPopup();b(window).resize(function(){d.centerPopup()});d.showPopup();setTimeout(function(){d.centerPopup()},
100)};this.init=function(){a.esc&&b(document).bind("keydown",g)};this.showPopup=function(){if(n){var b=c();d.setContent(a.href,b)}if(!d.extend.trigger("show")||null==a.effectIn||"none"==a.effectOut)f.show(),t&&t.show();d.centerPopup();a.onShow(f.get(0));a.autoClose&&setTimeout(function(){d.hidePopup()},a.autoClose)};this.hidePopup=function(){if(!d.extend.trigger("hide")||null==a.effectOut||"none"==a.effectOut)f.hide(),t&&t.hide(),d.remove_embeded_object(),a.unload&&(t&&t.remove(),f.remove());a.onHide(f.get(0))};
this.centerPopup=function(){0>=k&&(k=f.width(),m=f.height(),150<k&&f.css({"max-width":k,"max-height":m}));if(a.responsive){var d=b(window).width(),c=b(window).height(),h=f.outerWidth(),e=f.outerHeight(),g=parseInt(f.css("padding-left"))+parseInt(f.css("padding-right")),r=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"));if(d<k+g+l||c<m+r+p){var g=parseInt(f.css("margin-left"))+parseInt(f.css("margin-right")),r=parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom")),s=f.width(),
n=f.height();f.css({width:d-(h+g-s),height:c-(e+r-n)})}}l="center"==a.left?Math.floor(b(window).width()/2)-f.outerWidth()/2:a.left;p="center"==a.top?Math.floor(b(window).height()/2)-f.outerHeight()/2:a.top;f.css({left:l,top:p})};
this.setContent=function(e,g,k){var n=g?g:c(e);k=k?k:function(){};r.html("");f.css({"max-width":"","max-height":""});r.html(e),a.onComplete(f.get(0),n),k(f.get(0),n),d.centerPopup(),s.hide()};
this.width=function(a,b){var d=k;a&&(k=a,void 0==b||b?f.animate({width:a,left:Math.floor(a/2)},"slow"):f.css("width",a));return d};this.height=function(a,b){var d=m;a&&(m=a,void 0==b||b?f.animate({height:a,top:Math.floor(a/2)},"slow"):f.css("height",a));return d};this.remove_embeded_object=function(){n&&r.html(" ")};this.get_box_size=function(){return{left:l,top:p,width:k,
height:m}};return this}};
    c.fn.init.prototype=c.fn;
    c.fn.events=new function(){var a=jQuery(this);this.bind=function(b,c,d){return a.bind(b,c,d)};this.unbind=function(b,c){return a.unbind(b,c)};this.trigger=function(b,c){return a.trigger(b,c)}};
    j.fn.popup=c
})(jQuery,speedo);


(function(b,j){var e=function(){return new e.fn.init};e.fn=e.prototype={version:"1.0.1",constructor:e,init:function(){var c={};this.register_module=function(a,b){c[a]=b};this.deregister_module=function(a){c[a]=null};this.clear=function(){c={}};this.execute=function(a,e){for(key in c){var g=c[key];b.isFunction(g)&&(g=g.apply(a,[e]),null!=g&&g.init())}return null};return this}};e.fn.init.prototype=e.fn;j.fn.modules=e()})(jQuery,speedo().popup);

(function(b,j,e){
    
    j.fn.modules.register_module("effects",function(c){
        function a(a,f,h,g,k){if(f&&"none"!=f&&(!e().browser.is_ie||9<e().browser.is_ie)){var m=function(){b.isFunction(k)&&k();d.unbind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",m)};d.bind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",m);h?(d.show(),l&&l.show(),b("body").addClass("speedo-effect-"+f.toLowerCase()+"-active"),d.removeClass("speedo-effect-"+f.toLowerCase()+"-reverse"),d.addClass("speedo-effect-"+
f.toLowerCase()+"-normal")):(b("body").removeClass("speedo-effect-"+f.toLowerCase()+"-active"),d.addClass("speedo-effect-"+f.toLowerCase()+"-reverse"),d.removeClass("speedo-effect-"+f.toLowerCase()+"-normal"),l&&!g&&l.hide());d.css({"-webkit-animation-play-state":"running","-moz-animation-play-state":"running","-o-animation-play-state":"running","-ms-animation-play-state":"running","animation-play-state":"running"});return!0}return a&&"none"!=a?(b.isFunction(a)?c.overlay?a(d.get(0),l.get(0)):a(d.get(0)):
b.isArray(a)?j.animatePopup(a[0],a[1],h,k):j.animatePopup(a,"slow",h,k),!0):!1}
        function h(){var b=j.get_box_size();k=b.left;m=b.top;f=b.width;q=b.height;a(c.effectIn,c.css3Effects,!0)||(d.show(),l&&l.show())}
        function g(){var b=j.get_box_size();k=b.left;m=b.top;f=b.width;q=b.height;a(c.effectOut,c.css3Effects,!1,!1,function(){j.remove_embeded_object();l&&l.hide();d.hide();c.unload&&(l&&l.remove(),d.remove())})}
        b(window);
        var d=this.container,l=this.overlay,j=this,k=0,m=0,f=0,q=0;
        this.init=function(){j.extend.add_action("show",
h);j.extend.add_action("hide",g)};
        this.animatePopup=function(a,c,h,g){g=b.isFunction(g)?g:function(){};h&&(d.hide(),l&&l.hide());switch(a){case "slideLeft":h?(d.css("left",-f),d.stop().animate({left:k,opacity:"toggle"},c,g)):d.stop().animate({left:-f,opacity:"toggle"},c,g);break;case "slideRight":h?(d.css("left",b(window).width()+f),d.stop().animate({left:k,opacity:"toggle"},c,g)):d.stop().animate({left:b(window).width()+f,opacity:"toggle"},c,g);break;case "slideTop":h?(d.css("top",-q),d.stop().animate({top:m,
opacity:"toggle"},c,g)):d.stop().animate({top:-q,opacity:"toggle"},c,g);break;case "slideBottom":h?(d.css("top",b(window).height()+q),d.stop().animate({top:m,opacity:"toggle"},c,g)):d.stop().animate({top:b(window).height()+q,opacity:"toggle"},c,g);break;case "slideZoom":h?(d.css("top",-q),d.css("left",k+f/2),d.stop().animate({width:"toggle",left:k,top:m,opacity:"toggle"},c,g)):d.stop().animate({top:-q,left:k+f/2,width:"toggle",opacity:"toggle"},c,g);break;case "growBox":d.stop().animate({width:"toggle",
height:"toggle"},g);break;case "incerto":h?(d.css("left",k+f/2),d.stop().animate({width:"toggle",left:k},c,g),d.css("top",m+q/2),d.animate({top:m},c,g)):(d.stop().animate({top:m+q/2},c,g),d.animate({width:"toggle",left:k+f/2},c,g));break;default:a=h?"fadeIn":"fadeOut",d.stop(),d[a](c,g)}l&&l.stop().animate({opacity:"toggle"},c,function(){!0==e().browser.is_ie&&8>=e().browser.version.high&&l.get(0).style.removeAttribute("filter",!1)})};
        return j
    })

})(jQuery,speedo().popup,speedo);
