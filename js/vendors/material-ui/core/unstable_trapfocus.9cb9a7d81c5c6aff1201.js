(self.webpackChunkmaterial_ui_chameleon_gh_pages=self.webpackChunkmaterial_ui_chameleon_gh_pages||[]).push([[4813],{5336:(U,O,u)=>{"use strict";u.d(O,{Z:()=>L});var e=u(2366),A=u(625),I=u(4380),P=u(4950);function C(r){var d=r.children,E=r.disableAutoFocus,v=E===void 0?!1:E,_=r.disableEnforceFocus,o=_===void 0?!1:_,R=r.disableRestoreFocus,m=R===void 0?!1:R,M=r.getDoc,i=r.isEnabled,c=r.open,l=e.useRef(),b=e.useRef(null),F=e.useRef(null),a=e.useRef(),t=e.useRef(null),g=e.useCallback(function(n){t.current=A.findDOMNode(n)},[]),T=(0,P.Z)(d.ref,g),h=e.useRef();return e.useEffect(function(){h.current=c},[c]),!h.current&&c&&typeof window!="undefined"&&(a.current=M().activeElement),e.useEffect(function(){if(!!c){var n=(0,I.Z)(t.current);!v&&t.current&&!t.current.contains(n.activeElement)&&(t.current.hasAttribute("tabIndex")||t.current.setAttribute("tabIndex",-1),t.current.focus());var f=function(){var s=t.current;if(s!==null){if(!n.hasFocus()||o||!i()||l.current){l.current=!1;return}t.current&&!t.current.contains(n.activeElement)&&t.current.focus()}},D=function(s){o||!i()||s.keyCode!==9||n.activeElement===t.current&&(l.current=!0,s.shiftKey?F.current.focus():b.current.focus())};n.addEventListener("focus",f,!0),n.addEventListener("keydown",D,!0);var k=setInterval(function(){f()},50);return function(){clearInterval(k),n.removeEventListener("focus",f,!0),n.removeEventListener("keydown",D,!0),m||(a.current&&a.current.focus&&a.current.focus(),a.current=null)}}},[v,o,m,i,c]),e.createElement(e.Fragment,null,e.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),e.cloneElement(d,{ref:T}),e.createElement("div",{tabIndex:0,ref:F,"data-test":"sentinelEnd"}))}const L=C}}]);

//# sourceMappingURL=unstable_trapfocus.9cb9a7d81c5c6aff1201.js.map