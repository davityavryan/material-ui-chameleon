(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{225:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(5)),o=(r(t(118)),/\s*,\s*/g),l=/&/g,u=/\$([\w-]+)/g;var a=function(){function e(e,n){return function(t,r){var i=e.getRule(r)||n&&n.getRule(r);return i?(i=i).selector:r}}function n(e,n){for(var t=n.split(o),r=e.split(o),i="",u=0;u<t.length;u++)for(var a=t[u],d=0;d<r.length;d++){var s=r[d];i&&(i+=", "),i+=-1!==s.indexOf("&")?s.replace(l,a):a+" "+s}return i}function t(e,n,t){if(t)return(0,i.default)({},t,{index:t.index+1});var r=e.options.nestingLevel;r=void 0===r?1:r+1;var o=(0,i.default)({},e.options,{nestingLevel:r,index:n.indexOf(e)+1});return delete o.name,o}return{onProcessStyle:function(r,o,l){if("style"!==o.type)return r;var a,d,s=o,f=s.options.parent;for(var c in r){var v=-1!==c.indexOf("&"),p="@"===c[0];if(v||p){if(a=t(s,f,a),v){var g=n(c,s.selector);d||(d=e(f,l)),g=g.replace(u,d),f.addRule(g,r[c],(0,i.default)({},a,{selector:g}))}else p&&f.addRule(c,{},a).addRule(s.key,r[c],{selector:s.selector});delete r[c]}}return r}}};n.default=a}}]);
//# sourceMappingURL=jss-plugin-nested-44ed7c8315906239e71a.js.map