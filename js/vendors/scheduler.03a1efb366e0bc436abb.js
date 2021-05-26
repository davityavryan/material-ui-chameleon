(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[6847],{96237:(N,l)=>{"use strict";/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f,w,k,M;if(typeof performance=="object"&&typeof performance.now=="function"){var J=performance;l.unstable_now=function(){return J.now()}}else{var Y=Date,K=Y.now();l.unstable_now=function(){return Y.now()-K}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var y=null,U=null,W=function(){if(y!==null)try{var e=l.unstable_now();y(!0,e),y=null}catch(n){throw setTimeout(W,0),n}};f=function(e){y!==null?setTimeout(f,0,e):(y=e,setTimeout(W,0))},w=function(e,n){U=setTimeout(e,n)},k=function(){clearTimeout(U)},l.unstable_shouldYield=function(){return!1},M=l.unstable_forceFrameRate=function(){}}else{var O=window.setTimeout,Q=window.clearTimeout;if(typeof console!="undefined"){var S=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof S!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var p=!1,g=null,C=-1,A=5,E=0;l.unstable_shouldYield=function(){return l.unstable_now()>=E},M=function(){},l.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<e?Math.floor(1e3/e):5};var H=new MessageChannel,F=H.port2;H.port1.onmessage=function(){if(g!==null){var e=l.unstable_now();E=e+A;try{g(!0,e)?F.postMessage(null):(p=!1,g=null)}catch(n){throw F.postMessage(null),n}}else p=!1},f=function(e){g=e,p||(p=!0,F.postMessage(null))},w=function(e,n){C=O(function(){e(l.unstable_now())},n)},k=function(){Q(C),C=-1}}function L(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,u=e[r];if(u!==void 0&&0<P(u,n))e[r]=n,e[t]=u,t=r;else break e}}function o(e){return e=e[0],e===void 0?null:e}function T(e){var n=e[0];if(n!==void 0){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,u=e.length;r<u;){var _=2*(r+1)-1,d=e[_],h=_+1,v=e[h];if(d!==void 0&&0>P(d,t))v!==void 0&&0>P(v,d)?(e[r]=v,e[h]=t,r=h):(e[r]=d,e[_]=t,r=_);else if(v!==void 0&&0>P(v,t))e[r]=v,e[h]=t,r=h;else break e}}return n}return null}function P(e,n){var t=e.sortIndex-n.sortIndex;return t!==0?t:e.id-n.id}var s=[],c=[],V=1,i=null,a=3,I=!1,b=!1,m=!1;function j(e){for(var n=o(c);n!==null;){if(n.callback===null)T(c);else if(n.startTime<=e)T(c),n.sortIndex=n.expirationTime,L(s,n);else break;n=o(c)}}function R(e){if(m=!1,j(e),!b)if(o(s)!==null)b=!0,f(q);else{var n=o(c);n!==null&&w(R,n.startTime-e)}}function q(e,n){b=!1,m&&(m=!1,k()),I=!0;var t=a;try{for(j(n),i=o(s);i!==null&&(!(i.expirationTime>n)||e&&!l.unstable_shouldYield());){var r=i.callback;if(typeof r=="function"){i.callback=null,a=i.priorityLevel;var u=r(i.expirationTime<=n);n=l.unstable_now(),typeof u=="function"?i.callback=u:i===o(s)&&T(s),j(n)}else T(s);i=o(s)}if(i!==null)var _=!0;else{var d=o(c);d!==null&&w(R,d.startTime-n),_=!1}return _}finally{i=null,a=t,I=!1}}var z=M;l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(e){e.callback=null},l.unstable_continueExecution=function(){b||I||(b=!0,f(q))},l.unstable_getCurrentPriorityLevel=function(){return a},l.unstable_getFirstCallbackNode=function(){return o(s)},l.unstable_next=function(e){switch(a){case 1:case 2:case 3:var n=3;break;default:n=a}var t=a;a=n;try{return e()}finally{a=t}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=z,l.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=a;a=e;try{return n()}finally{a=t}},l.unstable_scheduleCallback=function(e,n,t){var r=l.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?r+t:r):t=r,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return u=t+u,e={id:V++,callback:n,priorityLevel:e,startTime:t,expirationTime:u,sortIndex:-1},t>r?(e.sortIndex=t,L(c,e),o(s)===null&&e===o(c)&&(m?k():m=!0,w(R,t-r))):(e.sortIndex=u,L(s,e),b||I||(b=!0,f(q))),e},l.unstable_wrapCallback=function(e){var n=a;return function(){var t=a;a=n;try{return e.apply(this,arguments)}finally{a=t}}}},10464:(N,l,f)=>{"use strict";N.exports=f(96237)}}]);

//# sourceMappingURL=scheduler.03a1efb366e0bc436abb.js.map