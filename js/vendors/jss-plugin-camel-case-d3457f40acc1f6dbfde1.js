(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(r,a,n){"use strict";var e=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=e(n(206));function f(r){var a={};for(var n in r){a[0===n.indexOf("--")?n:(0,l.default)(n)]=r[n]}return r.fallbacks&&(Array.isArray(r.fallbacks)?a.fallbacks=r.fallbacks.map(f):a.fallbacks=f(r.fallbacks)),a}var t=function(){return{onProcessStyle:function(r){if(Array.isArray(r)){for(var a=0;a<r.length;a++)r[a]=f(r[a]);return r}return f(r)},onChangeValue:function(r,a,n){if(0===a.indexOf("--"))return r;var e=(0,l.default)(a);return a===e?r:(n.prop(e,r),null)}}};a.default=t}}]);
//# sourceMappingURL=jss-plugin-camel-case-d3457f40acc1f6dbfde1.js.map