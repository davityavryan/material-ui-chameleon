(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[7551],{18815:(ke,de,q)=>{"use strict";q.d(de,{lX:()=>Ee,q_:()=>Ce,PP:()=>Te,ob:()=>b,Hp:()=>we,Ep:()=>T});var J=q(85399),ve=q(65134),ge=q(15055),ee=q(52686);function X(e){return e.charAt(0)==="/"?e:"/"+e}function ne(e){return e.charAt(0)==="/"?e.substr(1):e}function pe(e,n){return e.toLowerCase().indexOf(n.toLowerCase())===0&&"/?#".indexOf(e.charAt(n.length))!==-1}function te(e,n){return pe(e,n)?e.substr(n.length):e}function ae(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function me(e){var n=e||"/",h="",f="",t=n.indexOf("#");t!==-1&&(f=n.substr(t),n=n.substr(0,t));var g=n.indexOf("?");return g!==-1&&(h=n.substr(g),n=n.substr(0,g)),{pathname:n,search:h==="?"?"":h,hash:f==="#"?"":f}}function T(e){var n=e.pathname,h=e.search,f=e.hash,t=n||"/";return h&&h!=="?"&&(t+=h.charAt(0)==="?"?h:"?"+h),f&&f!=="#"&&(t+=f.charAt(0)==="#"?f:"#"+f),t}function b(e,n,h,f){var t;typeof e=="string"?(t=me(e),t.state=n):(t=(0,J.Z)({},e),t.pathname===void 0&&(t.pathname=""),t.search?t.search.charAt(0)!=="?"&&(t.search="?"+t.search):t.search="",t.hash?t.hash.charAt(0)!=="#"&&(t.hash="#"+t.hash):t.hash="",n!==void 0&&t.state===void 0&&(t.state=n));try{t.pathname=decodeURI(t.pathname)}catch(g){throw g instanceof URIError?new URIError('Pathname "'+t.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):g}return h&&(t.key=h),f?t.pathname?t.pathname.charAt(0)!=="/"&&(t.pathname=(0,ve.Z)(t.pathname,f.pathname)):t.pathname=f.pathname:t.pathname||(t.pathname="/"),t}function we(e,n){return e.pathname===n.pathname&&e.search===n.search&&e.hash===n.hash&&e.key===n.key&&(0,ge.Z)(e.state,n.state)}function V(){var e=null;function n(p){return e=p,function(){e===p&&(e=null)}}function h(p,w,d,v){if(e!=null){var m=typeof e=="function"?e(p,w):e;typeof m=="string"?typeof d=="function"?d(m,v):v(!0):v(m!==!1)}else v(!0)}var f=[];function t(p){var w=!0;function d(){w&&p.apply(void 0,arguments)}return f.push(d),function(){w=!1,f=f.filter(function(v){return v!==d})}}function g(){for(var p=arguments.length,w=new Array(p),d=0;d<p;d++)w[d]=arguments[d];f.forEach(function(v){return v.apply(void 0,w)})}return{setPrompt:n,confirmTransitionTo:h,appendListener:t,notifyListeners:g}}var ie=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function re(e,n){n(window.confirm(e))}function Pe(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function ye(){return window.navigator.userAgent.indexOf("Trident")===-1}function xe(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Oe(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var oe="popstate",se="hashchange";function fe(){try{return window.history.state||{}}catch(e){return{}}}function Ee(e){e===void 0&&(e={}),ie||(0,ee.Z)(!1);var n=window.history,h=Pe(),f=!ye(),t=e,g=t.forceRefresh,p=g===void 0?!1:g,w=t.getUserConfirmation,d=w===void 0?re:w,v=t.keyLength,m=v===void 0?6:v,U=e.basename?ae(X(e.basename)):"";function R(r){var c=r||{},a=c.key,i=c.state,s=window.location,l=s.pathname,I=s.search,C=s.hash,E=l+I+C;return U&&(E=te(E,U)),b(E,i,a)}function L(){return Math.random().toString(36).substr(2,m)}var x=V();function M(r){(0,J.Z)(H,r),H.length=n.length,x.notifyListeners(H.location,H.action)}function D(r){Oe(r)||K(R(r.state))}function $(){K(R(fe()))}var B=!1;function K(r){if(B)B=!1,M();else{var c="POP";x.confirmTransitionTo(r,c,d,function(a){a?M({action:c,location:r}):z(r)})}}function z(r){var c=H.location,a=k.indexOf(c.key);a===-1&&(a=0);var i=k.indexOf(r.key);i===-1&&(i=0);var s=a-i;s&&(B=!0,P(s))}var Z=R(fe()),k=[Z.key];function u(r){return U+T(r)}function o(r,c){var a="PUSH",i=b(r,c,L(),H.location);x.confirmTransitionTo(i,a,d,function(s){if(!!s){var l=u(i),I=i.key,C=i.state;if(h)if(n.pushState({key:I,state:C},null,l),p)window.location.href=l;else{var E=k.indexOf(H.location.key),N=k.slice(0,E+1);N.push(i.key),k=N,M({action:a,location:i})}else window.location.href=l}})}function _(r,c){var a="REPLACE",i=b(r,c,L(),H.location);x.confirmTransitionTo(i,a,d,function(s){if(!!s){var l=u(i),I=i.key,C=i.state;if(h)if(n.replaceState({key:I,state:C},null,l),p)window.location.replace(l);else{var E=k.indexOf(H.location.key);E!==-1&&(k[E]=i.key),M({action:a,location:i})}else window.location.replace(l)}})}function P(r){n.go(r)}function y(){P(-1)}function A(){P(1)}var W=0;function S(r){W+=r,W===1&&r===1?(window.addEventListener(oe,D),f&&window.addEventListener(se,$)):W===0&&(window.removeEventListener(oe,D),f&&window.removeEventListener(se,$))}var O=!1;function F(r){r===void 0&&(r=!1);var c=x.setPrompt(r);return O||(S(1),O=!0),function(){return O&&(O=!1,S(-1)),c()}}function G(r){var c=x.appendListener(r);return S(1),function(){S(-1),c()}}var H={length:n.length,action:"POP",location:Z,createHref:u,push:o,replace:_,go:P,goBack:y,goForward:A,block:F,listen:G};return H}var ce="hashchange",Le={hashbang:{encodePath:function(n){return n.charAt(0)==="!"?n:"!/"+ne(n)},decodePath:function(n){return n.charAt(0)==="!"?n.substr(1):n}},noslash:{encodePath:ne,decodePath:X},slash:{encodePath:X,decodePath:X}};function he(e){var n=e.indexOf("#");return n===-1?e:e.slice(0,n)}function j(){var e=window.location.href,n=e.indexOf("#");return n===-1?"":e.substring(n+1)}function _e(e){window.location.hash=e}function Y(e){window.location.replace(he(window.location.href)+"#"+e)}function Ce(e){e===void 0&&(e={}),ie||(0,ee.Z)(!1);var n=window.history,h=xe(),f=e,t=f.getUserConfirmation,g=t===void 0?re:t,p=f.hashType,w=p===void 0?"slash":p,d=e.basename?ae(X(e.basename)):"",v=Le[w],m=v.encodePath,U=v.decodePath;function R(){var a=U(j());return d&&(a=te(a,d)),b(a)}var L=V();function x(a){(0,J.Z)(c,a),c.length=n.length,L.notifyListeners(c.location,c.action)}var M=!1,D=null;function $(a,i){return a.pathname===i.pathname&&a.search===i.search&&a.hash===i.hash}function B(){var a=j(),i=m(a);if(a!==i)Y(i);else{var s=R(),l=c.location;if(!M&&$(l,s)||D===T(s))return;D=null,K(s)}}function K(a){if(M)M=!1,x();else{var i="POP";L.confirmTransitionTo(a,i,g,function(s){s?x({action:i,location:a}):z(a)})}}function z(a){var i=c.location,s=o.lastIndexOf(T(i));s===-1&&(s=0);var l=o.lastIndexOf(T(a));l===-1&&(l=0);var I=s-l;I&&(M=!0,A(I))}var Z=j(),k=m(Z);Z!==k&&Y(k);var u=R(),o=[T(u)];function _(a){var i=document.querySelector("base"),s="";return i&&i.getAttribute("href")&&(s=he(window.location.href)),s+"#"+m(d+T(a))}function P(a,i){var s="PUSH",l=b(a,void 0,void 0,c.location);L.confirmTransitionTo(l,s,g,function(I){if(!!I){var C=T(l),E=m(d+C),N=j()!==E;if(N){D=C,_e(E);var Q=o.lastIndexOf(T(c.location)),le=o.slice(0,Q+1);le.push(C),o=le,x({action:s,location:l})}else x()}})}function y(a,i){var s="REPLACE",l=b(a,void 0,void 0,c.location);L.confirmTransitionTo(l,s,g,function(I){if(!!I){var C=T(l),E=m(d+C),N=j()!==E;N&&(D=C,Y(E));var Q=o.indexOf(T(c.location));Q!==-1&&(o[Q]=C),x({action:s,location:l})}})}function A(a){n.go(a)}function W(){A(-1)}function S(){A(1)}var O=0;function F(a){O+=a,O===1&&a===1?window.addEventListener(ce,B):O===0&&window.removeEventListener(ce,B)}var G=!1;function H(a){a===void 0&&(a=!1);var i=L.setPrompt(a);return G||(F(1),G=!0),function(){return G&&(G=!1,F(-1)),i()}}function r(a){var i=L.appendListener(a);return F(1),function(){F(-1),i()}}var c={length:n.length,action:"POP",location:u,createHref:_,push:P,replace:y,go:A,goBack:W,goForward:S,block:H,listen:r};return c}function ue(e,n,h){return Math.min(Math.max(e,n),h)}function Te(e){e===void 0&&(e={});var n=e,h=n.getUserConfirmation,f=n.initialEntries,t=f===void 0?["/"]:f,g=n.initialIndex,p=g===void 0?0:g,w=n.keyLength,d=w===void 0?6:w,v=V();function m(o){(0,J.Z)(u,o),u.length=u.entries.length,v.notifyListeners(u.location,u.action)}function U(){return Math.random().toString(36).substr(2,d)}var R=ue(p,0,t.length-1),L=t.map(function(o){return typeof o=="string"?b(o,void 0,U()):b(o,void 0,o.key||U())}),x=T;function M(o,_){var P="PUSH",y=b(o,_,U(),u.location);v.confirmTransitionTo(y,P,h,function(A){if(!!A){var W=u.index,S=W+1,O=u.entries.slice(0);O.length>S?O.splice(S,O.length-S,y):O.push(y),m({action:P,location:y,index:S,entries:O})}})}function D(o,_){var P="REPLACE",y=b(o,_,U(),u.location);v.confirmTransitionTo(y,P,h,function(A){!A||(u.entries[u.index]=y,m({action:P,location:y}))})}function $(o){var _=ue(u.index+o,0,u.entries.length-1),P="POP",y=u.entries[_];v.confirmTransitionTo(y,P,h,function(A){A?m({action:P,location:y,index:_}):m()})}function B(){$(-1)}function K(){$(1)}function z(o){var _=u.index+o;return _>=0&&_<u.entries.length}function Z(o){return o===void 0&&(o=!1),v.setPrompt(o)}function k(o){return v.appendListener(o)}var u={length:L.length,action:"POP",location:L[R],index:R,entries:L,createHref:x,push:M,replace:D,go:$,goBack:B,goForward:K,canGo:z,block:Z,listen:k};return u}}}]);

//# sourceMappingURL=history.7b2eeb2720a1aa46ef55.js.map