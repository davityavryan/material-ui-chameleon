(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4813],{65336:(w,O,u)=>{"use strict";u.d(O,{Z:()=>L});var e=u(2366),A=u(60625),I=u(4380),P=u(54950);function C(r){var d=r.children,E=r.disableAutoFocus,v=E===void 0?!1:E,_=r.disableEnforceFocus,s=_===void 0?!1:_,R=r.disableRestoreFocus,m=R===void 0?!1:R,M=r.getDoc,i=r.isEnabled,c=r.open,l=e.useRef(),b=e.useRef(null),F=e.useRef(null),a=e.useRef(),t=e.useRef(null),T=e.useCallback(function(n){t.current=A.findDOMNode(n)},[]),k=(0,P.Z)(d.ref,T),D=e.useRef();return e.useEffect(function(){D.current=c},[c]),!D.current&&c&&typeof window!="undefined"&&(a.current=M().activeElement),e.useEffect(function(){if(!!c){var n=(0,I.Z)(t.current);!v&&t.current&&!t.current.contains(n.activeElement)&&(t.current.hasAttribute("tabIndex")||t.current.setAttribute("tabIndex",-1),t.current.focus());var f=function(){var o=t.current;if(o!==null){if(!n.hasFocus()||s||!i()||l.current){l.current=!1;return}t.current&&!t.current.contains(n.activeElement)&&t.current.focus()}},h=function(o){s||!i()||o.keyCode!==9||n.activeElement===t.current&&(l.current=!0,o.shiftKey?F.current.focus():b.current.focus())};n.addEventListener("focus",f,!0),n.addEventListener("keydown",h,!0);var K=setInterval(function(){f()},50);return function(){clearInterval(K),n.removeEventListener("focus",f,!0),n.removeEventListener("keydown",h,!0),m||(a.current&&a.current.focus&&a.current.focus(),a.current=null)}}},[v,s,m,i,c]),e.createElement(e.Fragment,null,e.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),e.cloneElement(d,{ref:k}),e.createElement("div",{tabIndex:0,ref:F,"data-test":"sentinelEnd"}))}const L=C}}]);

//# sourceMappingURL=unstable_trapfocus.cbc62af14b7e9e423e73.js.map