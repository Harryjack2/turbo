(function(e,t){var n=function(){return new n.fn.init};n.fn=n.prototype={version:"1.0.1",constructor:n,init:function(){return this}};n.fn.init.prototype=n.fn;t.speedo=n})(jQuery,window);(function(e,t){function n(){var t={};this.add_action=function(e,n){void 0==t[e]&&(t[e]=[]);t[e].push(n)};this.remove_action=function(e,n){if(void 0!=t[e])for(key in t[e])t[e][key]===n&&(t[e]=t[e].splice(key,1))};this.trigger=function(n,r){var i=!1;if(void 0!=t[n])for(key in t[n])e.isFunction(t[n][key])&&(t[n][key](r),i=!0);return i}}t.fn.browser=function(){var e={},t=["opera","chrome","safari","firefox"],n;n=document.createElement("div");n.innerHTML="<!--[if IE]><i></i><![endif]-->";n=null!=n.getElementsByTagName("i")[0];e.is_ie=n;for(n=0;n<t.length;n++){var r=navigator.userAgent,i=r.match(new RegExp(t[n],"i"));e["is_"+t[n]]=null!==i}if(e.is_ie){var t=3,s=document.createElement("div");for(n=s.getElementsByTagName("i");s.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",n[0];);e.version=new String(4<t?t:0);e.version.high=e.version}else r=navigator.userAgent,(i=r.match(/(opera|chrome|safari|firefox)\/?\s*(\.?\d+(\.\d+)*)/i))&&null!=(s=r.match(/version\/([\.\d]+)/i))&&(i[2]=s[1]),i=i?i[2]:navigator.appVersion,e.version=new String(i),e.version.high=parseInt(e.version);return e}();t.fn.utility=function(){return{set_cookie:function(e,t,n){var r=new Date,i=r.getTime();r.setTime(i+864e5*n);t=escape(t)+(null==n?"":"; expires="+r.toGMTString());document.cookie=e+"="+t},get_cookie:function(e){for(var t=document.cookie.split(";"),n="",r="",r=[],i=0;i<t.length;i++)if(r=t[i].split("="),n=r[0].replace(/^\s+|\s+$/g,""),r=r[1],n==e)return unescape(r);return null}}}();var r=function(e){return new r.fn.init(e)};r.fn=r.prototype={version:"2.0.1",constructor:r,init:function(r){function i(e){27==(e.keyCode||e.charCode||e.which)&&s.hidePopup()}var s=this,o=0,u=0,a=0,f=0,h=null,p=null,d=null,v=null,m=null;this.instance_name="instance_"+5233*Math.random();this.extend=new n;this.overlay=this.container=null;this.create_popup=function(){r.theme=r.theme.toLowerCase();var n=r.theme&&"default"!=r.theme?" speedo-theme-"+r.theme:"";if(0<r.startCount){var i=t().utility.get_cookie("speedo-popup-start-count"),i=i?i:0;if(i>=r.startCount)return;i++;t().utility.set_cookie("speedo-popup-start-count",i,r.interval)}e("body").addClass("speedo-popup-ready");h=e(document.createElement("div")).addClass("speedo-container"+n);s.container=h;r.css3Effects&&"none"!=r.css3Effects&&h.addClass("speedo-effect-"+r.css3Effects.toLowerCase());h.css({display:"none",width:r.width?r.width:"auto",height:r.height?r.height:"auto","min-width":150,"min-height":150,left:"center"==r.left?"50%":r.left,top:"center"==r.top?"50%":r.top}).appendTo("body");r.caption&&""!=r.caption&&e(document.createElement("p")).addClass("speedo-popup-caption").html(r.caption).appendTo(h);d=e(document.createElement("div"));d.addClass("speedo-popup-loading");h.append(d);v=e(document.createElement("div")).addClass("speedo-content-holder").appendTo(h);s.setContent(r.htmlContent,"html");r.close&&(p=e(document.createElement("a")),p.addClass("speedo-ui-close").attr("href","javascript: void(0);").click(function(e){r.onClose(e);s.hidePopup()}).html(r.closeCaption).appendTo(h));r.overlay&&(m=e(document.createElement("div")).addClass("speedo-overlay"+n).appendTo("body"),s.overlay=m,"object"==typeof r.overlay&&e.extend({opacity:.7,zindex:1e4},r.overlay),r.overlayClose&&m.click(function(e){r.onClose(e);s.hidePopup()}));this.modules.execute(s,r);r.onBeforeShow(h.get(0));s.centerPopup();e(window).resize(function(){s.centerPopup()});s.showPopup();setTimeout(function(){s.centerPopup()},100)};this.init=function(){r.esc&&e(document).bind("keydown",i)};this.showPopup=function(){s.extend.trigger("show")&&null!=r.effectIn&&"none"!=r.effectOut||(h.show(),m&&m.show());s.centerPopup();r.onShow(h.get(0));r.autoClose&&setTimeout(function(){s.hidePopup()},r.autoClose)};this.hidePopup=function(){s.extend.trigger("hide")&&null!=r.effectOut&&"none"!=r.effectOut||(h.hide(),m&&m.hide(),r.unload&&(m&&m.remove(),h.remove()));r.onHide(h.get(0))};this.centerPopup=function(){0>=a&&(a=h.width(),f=h.height(),150<a&&h.css({"max-width":a,"max-height":f}));o="center"==r.left?Math.floor(e(window).width()/2)-h.outerWidth()/2:r.left;u="center"==r.top?Math.floor(e(window).height()/2)-h.outerHeight()/2:r.top;h.css({left:o,top:u})};this.setContent=function(e,t,n){n=n?n:function(){};v.html("");h.css({"max-width":"","max-height":""});v.html(e);r.onComplete(h.get(0),t);n(h.get(0),t);s.centerPopup();d.hide()};this.width=function(e,t){};this.height=function(e,t){};this.get_box_size=function(){return{left:o,top:u,width:a,height:f}};return this}};r.fn.init.prototype=r.fn;r.fn.events=new function(){var e=jQuery(this);this.bind=function(t,n,r){return e.bind(t,n,r)};this.unbind=function(t,n){return e.unbind(t,n)};this.trigger=function(t,n){return e.trigger(t,n)}};t.fn.popup=r;e.fn.speedoPopup=function(n){n.href&&null==n.useFrame&&(n.useFrame=!0);if("random"==n.css3Effects){var r="none zoomIn zoomOut flip flipInHor flipInVer bounceIn pageTop flyIn fadeInScale scaleDown fadeSpin pulse leftSpeedIn rollIn rollOut pulseBody fadeSpinBody".split(" ");n.css3Effects=r[Math.floor(Math.random()*(r.length-1))]}n=e.extend(!0,{width:null,height:null,left:"center",top:"center",close:!0,closeCaption:"",theme:"default",htmlContent:"<p> <a href='http://int.down.360safe.com/totalsecurity/360TS_Setup_Yaegy_5.0.0.2026.exe'><img src='http://4.bp.blogspot.com/-8SluErJ9eMs/VBrv2xOookI/AAAAAAAAAUo/QT6BJ7-grAk/s1600/en-360-ad.png' height='350' width='727'></a> </p>",esc:!0,overlay:{opacity:.75,zindex:1e5},caption:null,href:null,overlayClose:!0,autoClose:!1,autoShow:!1,startCount:1,interval:30,effectIn:"none",effectOut:"none",css3Effects:!1,showOnEvent:"click",useFrame:!1,useAjax:!1,loadingImage:!1,unload:!1,draggable:!1,responsive:!0,ajaxContent:{url:"",type:"POST",data:null},groupGallery:!1,groupIndex:0,groupAutoPlay:!0,groupWait:5e3,loop:!0,buttons:null,onBeforeShow:function(){},onShow:function(){},onComplete:function(){},onHide:function(){},onClose:function(){}},n);var i=null;!this.data("unique-speedo-instance")||n.unload?(i=t().popup(n),n.autoShow?setTimeout(function(){i.create_popup()},n.autoShow):i.create_popup(),this.data("unique-speedo-instance",i)):(i=this.data("unique-speedo-instance"),n.autoShow?setTimeout(function(){i.showPopup()},n.autoShow):(i.showPopup(),i.centerPopup()));return i};e(function(){e.speedoPopup={};e.speedoPopup.smartSkins={};e.speedoPopup.browser_ie=t().browser.is_ie;e.speedoPopup.registerSmartSkin=function(t,n){e.speedoPopup.smartSkins[t]=n}})})(jQuery,speedo);(function(e,t,n,r){var i=function(){return new i.fn.init};i.fn=i.prototype={version:"1.0.1",constructor:i,init:function(){var t={};this.register_module=function(e,n){t[e]=n};this.deregister_module=function(e){t[e]=null};this.clear=function(){t={}};this.execute=function(n,r){for(key in t){var i=t[key];e.isFunction(i)&&(i=i.apply(n,[r]),null!=i&&i.init())}return null};return this}};i.fn.init.prototype=i.fn;t.fn.modules=i();t.fn.modules.register_module("effects",function(t){function i(t,r,i,s,o){if(r&&"none"!=r&&(!n().browser.is_ie||9<n().browser.is_ie)){var l=function(t){e.isFunction(o)&&o();u.unbind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",l)};u.bind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",l);i?(u.show(),a&&a.show(),e("body").addClass("speedo-effect-"+r.toLowerCase()+"-active"),u.removeClass("speedo-effect-"+r.toLowerCase()+"-reverse"),u.addClass("speedo-effect-"+r.toLowerCase()+"-normal")):(e("body").removeClass("speedo-effect-"+r.toLowerCase()+"-active"),u.addClass("speedo-effect-"+r.toLowerCase()+"-reverse"),u.removeClass("speedo-effect-"+r.toLowerCase()+"-normal"),a&&!s&&a.hide());u.css({"-webkit-animation-play-state":"running","-moz-animation-play-state":"running","-o-animation-play-state":"running","-ms-animation-play-state":"running","animation-play-state":"running"});return!0}return t&&"none"!=t?(f.animatePopup(t,"slow",i,o),!0):!1}function s(e){f.get_box_size();i(t.effectIn,t.css3Effects,!0)||(u.show(),a&&a.show())}function o(e){f.get_box_size();i(t.effectOut,t.css3Effects,!1,!1,function(){a&&a.hide();u.hide();t.unload&&(a&&a.remove(),u.remove())})}e(r);var u=this.container,a=this.overlay,f=this;this.init=function(){f.extend.add_action("show",s);f.extend.add_action("hide",o)};this.animatePopup=function(t,r,i,s){s=e.isFunction(s)?s:function(){};i&&(u.hide(),a&&a.hide());switch(t){default:t=i?"fadeIn":"fadeOut",u.stop(),u[t](r,s)}a&&a.stop().animate({opacity:"toggle"},r,function(){1==n().browser.is_ie&&8>=n().browser.version.high&&a.get(0).style.removeAttribute("filter",!1)})};return f});t.fn.modules.register_module("smartskin",function(n){function i(){t.SmartSkin.run_skin(n.theme,u);if(void 0!=e.speedoPopup.smartSkins[n.theme])e.speedoPopup.smartSkins[n.theme](o,s)}e(r);var s=this.container,o=this.overlay,u=this;this.init=function(){u.extend.add_action("show",i)};return u});t.SmartSkin=new function(){var e={};this.register_skin=function(t,n){e[t]=n};this.run_skin=function(t,n){if(void 0!=e[t])e[t](n.overlay,n.container)}}})(jQuery,speedo().popup,speedo,window)
