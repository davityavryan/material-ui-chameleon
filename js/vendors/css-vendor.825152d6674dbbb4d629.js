(self.webpackChunkmaterial_ui_chameleon_gh_pages=self.webpackChunkmaterial_ui_chameleon_gh_pages||[]).push([[8500],{4409:(ur,z,p)=>{"use strict";p.d(z,{if:()=>D,wR:()=>k,HO:()=>ar});var d=p(5171),C=p(7301),l="",m="",j="",_="",M=d.Z&&"ontouchstart"in document.documentElement;if(d.Z){var P={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},A=document.createElement("p"),y=A.style,T="Transform";for(var x in P)if(x+T in y){l=x,m=P[x];break}l==="Webkit"&&"msHyphens"in y&&(l="ms",m=P.ms,_="edge"),l==="Webkit"&&"-apple-trailing-word"in y&&(j="apple")}var t={js:l,css:m,vendor:j,browser:_,isTouch:M};function D(e){return e[1]==="-"||t.js==="ms"?e:"@"+t.css+"keyframes"+e.substr(10)}var K={noPrefill:["appearance"],supportedProperty:function(r){return r!=="appearance"?!1:t.js==="ms"?"-webkit-"+r:t.css+r}},Z={noPrefill:["color-adjust"],supportedProperty:function(r){return r!=="color-adjust"?!1:t.js==="Webkit"?t.css+"print-"+r:r}},N=/[-\s]+(.)?/g;function R(e,r){return r?r.toUpperCase():""}function b(e){return e.replace(N,R)}function s(e){return b("-"+e)}var U={noPrefill:["mask"],supportedProperty:function(r,n){if(!/^mask/.test(r))return!1;if(t.js==="Webkit"){var i="mask-image";if(b(i)in n)return r;if(t.js+s(i)in n)return t.css+r}return r}},B={noPrefill:["text-orientation"],supportedProperty:function(r){return r!=="text-orientation"?!1:t.vendor==="apple"&&!t.isTouch?t.css+r:r}},I={noPrefill:["transform"],supportedProperty:function(r,n,i){return r!=="transform"?!1:i.transform?r:t.css+r}},L={noPrefill:["transition"],supportedProperty:function(r,n,i){return r!=="transition"?!1:i.transition?r:t.css+r}},S={noPrefill:["writing-mode"],supportedProperty:function(r){return r!=="writing-mode"?!1:t.js==="Webkit"||t.js==="ms"&&t.browser!=="edge"?t.css+r:r}},V={noPrefill:["user-select"],supportedProperty:function(r){return r!=="user-select"?!1:t.js==="Moz"||t.js==="ms"||t.vendor==="apple"?t.css+r:r}},H={supportedProperty:function(r,n){if(!/^break-/.test(r))return!1;if(t.js==="Webkit"){var i="WebkitColumn"+s(r);return i in n?t.css+"column-"+r:!1}if(t.js==="Moz"){var v="page"+s(r);return v in n?"page-"+r:!1}return!1}},$={supportedProperty:function(r,n){if(!/^(border|margin|padding)-inline/.test(r))return!1;if(t.js==="Moz")return r;var i=r.replace("-inline","");return t.js+s(i)in n?t.css+i:!1}},F={supportedProperty:function(r,n){return b(r)in n?r:!1}},G={supportedProperty:function(r,n){var i=s(r);return r[0]==="-"||r[0]==="-"&&r[1]==="-"?r:t.js+i in n?t.css+r:t.js!=="Webkit"&&"Webkit"+i in n?"-webkit-"+r:!1}},J={supportedProperty:function(r){return r.substring(0,11)!=="scroll-snap"?!1:t.js==="ms"?""+t.css+r:r}},Q={supportedProperty:function(r){return r!=="overscroll-behavior"?!1:t.js==="ms"?t.css+"scroll-chaining":r}},X={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},Y={supportedProperty:function(r,n){var i=X[r];return i&&t.js+s(i)in n?t.css+i:!1}},w={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},q=Object.keys(w),rr=function(r){return t.css+r},er={supportedProperty:function(r,n,i){var v=i.multiple;if(q.indexOf(r)>-1){var o=w[r];if(!Array.isArray(o))return t.js+s(o)in n?t.css+o:!1;if(!v)return!1;for(var O=0;O<o.length;O++)if(!(t.js+s(o[0])in n))return!1;return o.map(rr)}return!1}},E=[K,Z,U,B,I,L,S,V,H,$,F,G,J,Q,Y,er],W=E.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),tr=E.filter(function(e){return e.noPrefill}).reduce(function(e,r){return e.push.apply(e,(0,C.Z)(r.noPrefill)),e},[]),c,u={};if(d.Z){c=document.createElement("p");var g=window.getComputedStyle(document.documentElement,"");for(var h in g)isNaN(h)||(u[g[h]]=g[h]);tr.forEach(function(e){return delete u[e]})}function k(e,r){if(r===void 0&&(r={}),!c)return e;if(u[e]!=null)return u[e];(e==="transition"||e==="transform")&&(r[e]=e in c.style);for(var n=0;n<W.length&&(u[e]=W[n](e,c.style,r),!u[e]);n++);try{c.style[e]=""}catch(i){return!1}return u[e]}var f={},nr={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},ir=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,a;function sr(e,r,n){if(r==="var")return"var";if(r==="all")return"all";if(n==="all")return", all";var i=r?k(r):", "+k(n);return i||r||n}d.Z&&(a=document.createElement("p"));function ar(e,r){var n=r;if(!a||e==="content")return r;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var i=e+n;if(f[i]!=null)return f[i];try{a.style[e]=n}catch(v){return f[i]=!1,!1}if(nr[e])n=n.replace(ir,sr);else if(a.style[e]===""&&(n=t.css+n,n==="-ms-flex"&&(a.style[e]="-ms-flexbox"),a.style[e]=n,a.style[e]===""))return f[i]=!1,!1;return a.style[e]="",f[i]=n,f[i]}}}]);

//# sourceMappingURL=css-vendor.825152d6674dbbb4d629.js.map