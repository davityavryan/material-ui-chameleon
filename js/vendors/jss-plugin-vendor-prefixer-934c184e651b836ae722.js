(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{208:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=t(209),n=t(29);var o=function(){function e(r){for(var t in r){var o=r[t];if("fallbacks"===t&&Array.isArray(o))r[t]=o.map(e);else{var u=!1,s=(0,a.supportedProperty)(t);s&&s!==t&&(u=!0);var p=!1,l=(0,a.supportedValue)(s,(0,n.toCssValue)(o));l&&l!==o&&(p=!0),(u||p)&&(u&&delete r[t],r[s||t]=l||o)}}return r}return{onProcessRule:function(e){if("keyframes"===e.type){var r=e;r.at=(0,a.supportedKeyframes)(r.at)}},onProcessStyle:function(r,t){return"style"!==t.type?r:e(r)},onChangeValue:function(e,r){return(0,a.supportedValue)(r,(0,n.toCssValue)(e))||e}}};r.default=o}}]);
//# sourceMappingURL=jss-plugin-vendor-prefixer-934c184e651b836ae722.js.map