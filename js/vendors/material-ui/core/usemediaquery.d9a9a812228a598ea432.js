(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[3202],{32181:(R,h,a)=>{"use strict";a.d(h,{Z:()=>D});var v=a(85399),u=a(2366),E=a(52498),$=a(54174);function D(i){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=(0,E.Z)(),P=(0,$.Z)({theme:d,name:"MuiUseMediaQuery",props:{}}),e=typeof i=="function"?i(d):i;e=e.replace(/^@media( ?)/m,"");var t=typeof window!="undefined"&&typeof window.matchMedia!="undefined",s=(0,v.Z)({},P,O),_=s.defaultMatches,y=_===void 0?!1:_,c=s.matchMedia,r=c===void 0?t?window.matchMedia:null:c,f=s.noSsr,L=f===void 0?!1:f,M=s.ssrMatchMedia,l=M===void 0?null:M,p=u.useState(function(){return L&&t?r(e).matches:l?l(e).matches:y}),C=p[0],w=p[1];return u.useEffect(function(){var m=!0;if(!!t){var n=r(e),o=function(){m&&w(n.matches)};return o(),n.addListener(o),function(){m=!1,n.removeListener(o)}}},[e,r,t]),C}}}]);

//# sourceMappingURL=usemediaquery.d9a9a812228a598ea432.js.map