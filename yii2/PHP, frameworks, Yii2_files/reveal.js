/*!
 * reveal.js 2.3.0 (2013-02-28, 17:03)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){return bt||wt?(window.addEventListener("load",h,!1),c(ft,e),n(),r(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function t(){if(Lt.theme=document.querySelector("#theme"),Lt.wrapper=document.querySelector(".reveal"),Lt.slides=document.querySelector(".reveal .slides"),!Lt.wrapper.querySelector(".progress")&&ft.progress){var e=document.createElement("div");e.classList.add("progress"),e.innerHTML="<span></span>",Lt.wrapper.appendChild(e)}if(!Lt.wrapper.querySelector(".controls")&&ft.controls){var t=document.createElement("aside");t.classList.add("controls"),t.innerHTML='<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>',Lt.wrapper.appendChild(t)}if(!Lt.wrapper.querySelector(".state-background")){var n=document.createElement("div");n.classList.add("state-background"),Lt.wrapper.appendChild(n)}if(!Lt.wrapper.querySelector(".pause-overlay")){var r=document.createElement("div");r.classList.add("pause-overlay"),Lt.wrapper.appendChild(r)}Lt.progress=document.querySelector(".reveal .progress"),Lt.progressbar=document.querySelector(".reveal .progress span"),ft.controls&&(Lt.controls=document.querySelector(".reveal .controls"),Lt.controlsLeft=l(document.querySelectorAll(".navigate-left")),Lt.controlsRight=l(document.querySelectorAll(".navigate-right")),Lt.controlsUp=l(document.querySelectorAll(".navigate-up")),Lt.controlsDown=l(document.querySelectorAll(".navigate-down")),Lt.controlsPrev=l(document.querySelectorAll(".navigate-prev")),Lt.controlsNext=l(document.querySelectorAll(".navigate-next")))}function n(){/iphone|ipod|android/gi.test(navigator.userAgent)&&!/crios/gi.test(navigator.userAgent)&&(window.addEventListener("load",u,!1),window.addEventListener("orientationchange",u,!1))}function r(){function e(){n.length&&head.js.apply(null,n),o()}for(var t=[],n=[],r=0,s=ft.dependencies.length;s>r;r++){var a=ft.dependencies[r];(!a.condition||a.condition())&&(a.async?n.push(a.src):t.push(a.src),"function"==typeof a.callback&&head.ready(a.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],a.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function o(){t(),a(),s(),P(),R(),setTimeout(function(){v("ready",{indexh:pt,indexv:ht,currentSlide:ct})},1)}function s(e){if(Lt.wrapper.classList.remove(ft.transition),"object"==typeof e&&c(ft,e),wt===!1&&(ft.transition="linear"),Lt.wrapper.classList.add(ft.transition),Lt.controls&&(Lt.controls.style.display=ft.controls&&Lt.controls?"block":"none"),Lt.progress&&(Lt.progress.style.display=ft.progress&&Lt.progress?"block":"none"),ft.rtl?Lt.wrapper.classList.add("rtl"):Lt.wrapper.classList.remove("rtl"),ft.center?Lt.wrapper.classList.add("center"):Lt.wrapper.classList.remove("center"),ft.mouseWheel?(document.addEventListener("DOMMouseScroll",V,!1),document.addEventListener("mousewheel",V,!1)):(document.removeEventListener("DOMMouseScroll",V,!1),document.removeEventListener("mousewheel",V,!1)),ft.rollingLinks?f():m(),ft.theme&&Lt.theme){var t=Lt.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];ft.theme!==r&&(t=t.replace(n,ft.theme),Lt.theme.setAttribute("href",t))}h()}function a(){if(xt=!0,window.addEventListener("hashchange",ot,!1),window.addEventListener("resize",st,!1),ft.touch&&(document.addEventListener("touchstart",Z,!1),document.addEventListener("touchmove",_,!1),document.addEventListener("touchend",Q,!1)),ft.keyboard&&document.addEventListener("keydown",$,!1),ft.progress&&Lt.progress&&Lt.progress.addEventListener("click",B,!1),ft.controls&&Lt.controls){var e="ontouchstart"in window&&null!=window.ontouchstart?"touchstart":"click";Lt.controlsLeft.forEach(function(t){t.addEventListener(e,G,!1)}),Lt.controlsRight.forEach(function(t){t.addEventListener(e,J,!1)}),Lt.controlsUp.forEach(function(t){t.addEventListener(e,et,!1)}),Lt.controlsDown.forEach(function(t){t.addEventListener(e,tt,!1)}),Lt.controlsPrev.forEach(function(t){t.addEventListener(e,nt,!1)}),Lt.controlsNext.forEach(function(t){t.addEventListener(e,rt,!1)})}}function i(){if(xt=!1,document.removeEventListener("keydown",$,!1),window.removeEventListener("hashchange",ot,!1),window.removeEventListener("resize",st,!1),ft.touch&&(document.removeEventListener("touchstart",Z,!1),document.removeEventListener("touchmove",_,!1),document.removeEventListener("touchend",Q,!1)),ft.progress&&Lt.progress&&Lt.progress.removeEventListener("click",B,!1),ft.controls&&Lt.controls){var e="ontouchstart"in window&&null!=window.ontouchstart?"touchstart":"click";Lt.controlsLeft.forEach(function(t){t.removeEventListener(e,G,!1)}),Lt.controlsRight.forEach(function(t){t.removeEventListener(e,J,!1)}),Lt.controlsUp.forEach(function(t){t.removeEventListener(e,et,!1)}),Lt.controlsDown.forEach(function(t){t.removeEventListener(e,tt,!1)}),Lt.controlsPrev.forEach(function(t){t.removeEventListener(e,nt,!1)}),Lt.controlsNext.forEach(function(t){t.removeEventListener(e,rt,!1)})}}function c(e,t){for(var n in t)e[n]=t[n]}function l(e){return Array.prototype.slice.call(e)}function d(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function u(){0===window.orientation?(document.documentElement.style.overflow="scroll",document.body.style.height="120%"):(document.documentElement.style.overflow="",document.body.style.height="100%"),setTimeout(function(){window.scrollTo(0,1)},10)}function v(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),c(n,t),Lt.wrapper.dispatchEvent(n)}function f(){if(wt&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(lt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var o=document.createElement("span");o.setAttribute("data-title",r.text),o.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(o)}}}function m(){for(var e=document.querySelectorAll(lt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],o=r.querySelector("span");o&&(r.classList.remove("roll"),r.innerHTML=o.innerHTML)}}function p(e){var t=l(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function h(){if(Lt.wrapper){var e=Lt.wrapper.offsetWidth,t=Lt.wrapper.offsetHeight;e-=t*ft.margin,t-=t*ft.margin;var n=ft.width,r=ft.height;if("string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),Lt.slides.style.width=n+"px",Lt.slides.style.height=r+"px",yt=Math.min(e/n,t/r),yt=Math.max(yt,ft.minScale),yt=Math.min(yt,ft.maxScale),void 0===Lt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)){var o="translate(-50%, -50%) scale("+yt+") translate(50%, 50%)";Lt.slides.style.WebkitTransform=o,Lt.slides.style.MozTransform=o,Lt.slides.style.msTransform=o,Lt.slides.style.OTransform=o,Lt.slides.style.transform=o}else Lt.slides.style.zoom=yt;for(var s=l(document.querySelectorAll(lt)),a=0,i=s.length;i>a;a++){var c=s[a];"none"!==c.style.display&&(c.style.top=ft.center?c.classList.contains("stack")?0:Math.max(-(c.offsetHeight/2)-20,-r/2)+"px":"")}}}function g(e,t){e&&e.setAttribute("data-previous-indexv",t||0)}function y(e){return e&&e.classList.contains("stack")?parseInt(e.getAttribute("data-previous-indexv")||0,10):0}function L(){if(ft.overview){W();var e=Lt.wrapper.classList.contains("overview");Lt.wrapper.classList.add("overview"),Lt.wrapper.classList.remove("exit-overview"),clearTimeout(At),clearTimeout(kt),At=setTimeout(function(){for(var t=document.querySelectorAll(dt),n=0,r=t.length;r>n;n++){var o=t[n],s="translateZ(-2500px) translate("+105*(n-pt)+"%, 0%)";if(o.setAttribute("data-index-h",n),o.style.display="block",o.style.WebkitTransform=s,o.style.MozTransform=s,o.style.msTransform=s,o.style.OTransform=s,o.style.transform=s,o.classList.contains("stack"))for(var a=o.querySelectorAll("section"),i=0,c=a.length;c>i;i++){var l=n===pt?ht:y(o),d=a[i],u="translate(0%, "+105*(i-l)+"%)";d.setAttribute("data-index-h",n),d.setAttribute("data-index-v",i),d.style.display="block",d.style.WebkitTransform=u,d.style.MozTransform=u,d.style.msTransform=u,d.style.OTransform=u,d.style.transform=u,d.addEventListener("click",at,!0)}else o.addEventListener("click",at,!0)}h(),e||v("overviewshown",{indexh:pt,indexv:ht,currentSlide:ct})},10)}}function w(){if(ft.overview){clearTimeout(At),clearTimeout(kt),Lt.wrapper.classList.remove("overview"),Lt.wrapper.classList.add("exit-overview"),kt=setTimeout(function(){Lt.wrapper.classList.remove("exit-overview")},10);for(var e=l(document.querySelectorAll(lt)),t=0,n=e.length;n>t;t++){var r=e[t];r.style.display="",r.style.WebkitTransform="",r.style.MozTransform="",r.style.msTransform="",r.style.OTransform="",r.style.transform="",r.removeEventListener("click",at,!0)}T(pt,ht),R(),v("overviewhidden",{indexh:pt,indexv:ht,currentSlide:ct})}}function b(e){"boolean"==typeof e?e?L():w():E()?w():L()}function E(){return Lt.wrapper.classList.contains("overview")}function S(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function q(){var e=Lt.wrapper.classList.contains("paused");W(),Lt.wrapper.classList.add("paused"),e===!1&&v("paused")}function A(){var e=Lt.wrapper.classList.contains("paused");R(),Lt.wrapper.classList.remove("paused"),e&&v("resumed")}function k(){x()?A():q()}function x(){return Lt.wrapper.classList.contains("paused")}function T(e,t,n){it=ct;var r=document.querySelectorAll(dt);void 0===t&&(t=y(r[e])),it&&it.parentNode&&it.parentNode.classList.contains("stack")&&g(it.parentNode,ht);var o=gt.concat();gt.length=0;var s=pt,a=ht;pt=M(dt,void 0===e?pt:e),ht=M(ut,void 0===t?ht:t),h();e:for(var i=0,c=gt.length;c>i;i++){for(var d=0;o.length>d;d++)if(o[d]===gt[i]){o.splice(d,1);continue e}document.documentElement.classList.add(gt[i]),v(gt[i])}for(;o.length;)document.documentElement.classList.remove(o.pop());E()&&L(),O(1500);var u=r[pt],f=u.querySelectorAll("section");if(ct=f[ht]||u,n!==void 0){var m=p(ct.querySelectorAll(".fragment"));l(m).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}pt!==s||ht!==a?v("slidechanged",{indexh:pt,indexv:ht,previousSlide:it,currentSlide:ct}):it=null,it&&(it.classList.remove("present"),document.querySelector(vt).classList.contains("present")&&setTimeout(function(){var e,t=l(document.querySelectorAll(dt+".stack"));for(e in t)t[e]&&g(t[e],0)},0)),N(),D()}function M(e,t){var n=l(document.querySelectorAll(e)),r=n.length;if(r){ft.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var o=0;r>o;o++){var s=n[o];if(E()===!1){var a=Math.abs((t-o)%(r-3))||0;s.style.display=a>3?"none":"block"}n[o].classList.remove("past"),n[o].classList.remove("present"),n[o].classList.remove("future"),t>o?n[o].classList.add("past"):o>t&&n[o].classList.add("future"),s.querySelector("section")&&n[o].classList.add("stack")}n[t].classList.add("present");var i=n[t].getAttribute("data-state");i&&(gt=gt.concat(i.split(" ")));var c=n[t].getAttribute("data-autoslide");mt=c?parseInt(c,10):ft.autoSlide}else t=0;return t}function D(){if(ft.progress&&Lt.progress){var e=l(document.querySelectorAll(dt)),t=document.querySelectorAll(lt+":not(.stack)").length,n=0;e:for(var r=0;e.length>r;r++){for(var o=e[r],s=l(o.querySelectorAll("section")),a=0;s.length>a;a++){if(s[a].classList.contains("present"))break e;n++}if(o.classList.contains("present"))break;o.classList.contains("stack")===!1&&n++}Lt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function N(){if(ft.controls&&Lt.controls){var e=C();Lt.controlsLeft.concat(Lt.controlsRight).concat(Lt.controlsUp).concat(Lt.controlsDown).concat(Lt.controlsPrev).concat(Lt.controlsNext).forEach(function(e){e.classList.remove("enabled")}),e.left&&Lt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&Lt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&Lt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&Lt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&Lt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&Lt.controlsNext.forEach(function(e){e.classList.add("enabled")})}}function C(){var e=document.querySelectorAll(dt),t=document.querySelectorAll(ut);return{left:pt>0,right:e.length-1>pt,up:ht>0,down:t.length-1>ht}}function P(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var o=Reveal.getIndices(r);T(o.h,o.v)}else T(pt,ht)}else{var s=parseInt(t[0],10)||0,a=parseInt(t[1],10)||0;T(s,a)}}function O(e){if(ft.history)if(clearTimeout(qt),"number"==typeof e)qt=setTimeout(O,e);else{var t="/";ct&&"string"==typeof ct.getAttribute("id")?t="/"+ct.getAttribute("id"):((pt>0||ht>0)&&(t+=pt),ht>0&&(t+="/"+ht)),window.location.hash=t}}function z(e){var t=pt,n=ht;if(e){var r=!!e.parentNode.nodeName.match(/section/gi),o=r?e.parentNode:e,s=l(document.querySelectorAll(dt));t=Math.max(s.indexOf(o),0),r&&(n=Math.max(l(e.parentNode.querySelectorAll("section")).indexOf(e),0))}return{h:t,v:n}}function H(){if(document.querySelector(ut+".present")){var e=p(document.querySelectorAll(ut+".present .fragment:not(.visible)"));if(e.length)return e[0].classList.add("visible"),v("fragmentshown",{fragment:e[0]}),!0}else{var t=p(document.querySelectorAll(dt+".present .fragment:not(.visible)"));if(t.length)return t[0].classList.add("visible"),v("fragmentshown",{fragment:t[0]}),!0}return!1}function I(){if(document.querySelector(ut+".present")){var e=p(document.querySelectorAll(ut+".present .fragment.visible"));if(e.length)return e[e.length-1].classList.remove("visible"),v("fragmenthidden",{fragment:e[e.length-1]}),!0}else{var t=p(document.querySelectorAll(dt+".present .fragment.visible"));if(t.length)return t[t.length-1].classList.remove("visible"),v("fragmenthidden",{fragment:t[t.length-1]}),!0}return!1}function R(){clearTimeout(St),!mt||x()||E()||(St=setTimeout(K,mt))}function W(){clearTimeout(St)}function X(){(C().left&&E()||I()===!1)&&T(pt-1)}function Y(){(C().right&&E()||H()===!1)&&T(pt+1)}function F(){(C().up&&E()||I()===!1)&&T(pt,ht-1)}function U(){(C().down&&E()||H()===!1)&&T(pt,ht+1)}function j(){if(I()===!1)if(C().up)F();else{var e=document.querySelector(dt+".past:nth-child("+pt+")");e&&(ht=e.querySelectorAll("section").length+1||void 0,pt--,T())}}function K(){H()===!1&&(C().down?U():Y()),R()}function $(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)){var n=!0;if(x()&&-1===[66,190,191].indexOf(e.keyCode))return!1;switch(e.keyCode){case 80:case 33:j();break;case 78:case 34:K();break;case 72:case 37:X();break;case 76:case 39:Y();break;case 75:case 38:F();break;case 74:case 40:U();break;case 36:T(0);break;case 35:T(Number.MAX_VALUE);break;case 32:E()?w():K();break;case 13:E()?w():n=!1;break;case 66:case 190:case 191:k();break;case 70:S();break;default:n=!1}n?e.preventDefault():27===e.keyCode&&wt&&(b(),e.preventDefault()),R()}}function Z(e){Tt.startX=e.touches[0].clientX,Tt.startY=e.touches[0].clientY,Tt.startCount=e.touches.length,2===e.touches.length&&ft.overview&&(Tt.startSpan=d({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Tt.startX,y:Tt.startY}))}function _(e){if(Tt.handled)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===Tt.startCount&&ft.overview){var r=d({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Tt.startX,y:Tt.startY});Math.abs(Tt.startSpan-r)>Tt.threshold&&(Tt.handled=!0,Tt.startSpan>r?L():w()),e.preventDefault()}else if(1===e.touches.length&&2!==Tt.startCount){var o=t-Tt.startX,s=n-Tt.startY;o>Tt.threshold&&Math.abs(o)>Math.abs(s)?(Tt.handled=!0,X()):-Tt.threshold>o&&Math.abs(o)>Math.abs(s)?(Tt.handled=!0,Y()):s>Tt.threshold?(Tt.handled=!0,F()):-Tt.threshold>s&&(Tt.handled=!0,U()),e.preventDefault()}}}function Q(){Tt.handled=!1}function V(e){clearTimeout(Et),Et=setTimeout(function(){var t=e.detail||-e.wheelDelta;t>0?K():j()},100)}function B(e){e.preventDefault();var t=l(document.querySelectorAll(dt)).length,n=Math.floor(e.clientX/Lt.wrapper.offsetWidth*t);T(n)}function G(e){e.preventDefault(),X()}function J(e){e.preventDefault(),Y()}function et(e){e.preventDefault(),F()}function tt(e){e.preventDefault(),U()}function nt(e){e.preventDefault(),j()}function rt(e){e.preventDefault(),K()}function ot(){P()}function st(){h()}function at(e){if(xt&&E()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(w(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);T(n,r)}}}var it,ct,lt=".reveal .slides section",dt=".reveal .slides>section",ut=".reveal .slides>section.present>section",vt=".reveal .slides>section:first-child",ft={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!0,theme:null,transition:"default",dependencies:[]},mt=ft.autoSlide,pt=0,ht=0,gt=[],yt=1,Lt={},wt="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,bt="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Et=0,St=0,qt=0,At=0,kt=0,xt=!1,Tt={startX:0,startY:0,startSpan:0,startCount:0,handled:!1,threshold:80};return{initialize:e,configure:s,slide:T,left:X,right:Y,up:F,down:U,prev:j,next:K,prevFragment:I,nextFragment:H,navigateTo:T,navigateLeft:X,navigateRight:Y,navigateUp:F,navigateDown:U,navigatePrev:j,navigateNext:K,layout:h,toggleOverview:b,togglePause:k,isOverview:E,isPaused:x,addEventListeners:a,removeEventListeners:i,getIndices:z,getSlide:function(e,t){var n=document.querySelectorAll(dt)[e],r=n&&n.querySelectorAll("section");return t!==void 0?r?r[t]:void 0:n},getPreviousSlide:function(){return it},getCurrentSlide:function(){return ct},getScale:function(){return yt},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(lt+".past")?!0:!1},isLastSlide:function(){return ct&&ct.classList.contains(".stack")?null==ct.querySelector(lt+".future")?!0:!1:null==document.querySelector(lt+".future")?!0:!1},addEventListener:function(e,t,n){"addEventListener"in window&&(Lt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(Lt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();