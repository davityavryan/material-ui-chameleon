(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4872],{24939:(et,b,r)=>{"use strict";r.d(b,{Z:()=>H});var c=r(85399),B=r(34910),K=r(65917),u=r(2366),U=r(25540),I=r(3679),m=r(62258),P=r(54950);function f(v){return"scale(".concat(v,", ").concat(Math.pow(v,2),")")}var S={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},T=u.forwardRef(function(n,j){var h=n.children,D=n.disableStrictModeCompat,p=D===void 0?!1:D,g=n.in,x=n.onEnter,$=n.onEntered,z=n.onEntering,R=n.onExit,F=n.onExited,G=n.onExiting,y=n.style,O=n.timeout,l=O===void 0?"auto":O,A=n.TransitionComponent,X=A===void 0?U.ZP:A,J=(0,K.Z)(n,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),L=u.useRef(),C=u.useRef(),d=(0,I.Z)(),_=d.unstable_strictMode&&!p,M=u.useRef(null),N=(0,P.Z)(h.ref,j),Q=(0,P.Z)(_?M:void 0,N),E=function(e){return function(o,a){if(e){var i=_?[M.current,o]:[o,a],s=(0,B.Z)(i,2),W=s[0],Z=s[1];Z===void 0?e(W):e(W,Z)}}},V=E(z),Y=E(function(t,e){(0,m.n)(t);var o=(0,m.C)({style:y,timeout:l},{mode:"enter"}),a=o.duration,i=o.delay,s;l==="auto"?(s=d.transitions.getAutoHeightDuration(t.clientHeight),C.current=s):s=a,t.style.transition=[d.transitions.create("opacity",{duration:s,delay:i}),d.transitions.create("transform",{duration:s*.666,delay:i})].join(","),x&&x(t,e)}),w=E($),k=E(G),q=E(function(t){var e=(0,m.C)({style:y,timeout:l},{mode:"exit"}),o=e.duration,a=e.delay,i;l==="auto"?(i=d.transitions.getAutoHeightDuration(t.clientHeight),C.current=i):i=o,t.style.transition=[d.transitions.create("opacity",{duration:i,delay:a}),d.transitions.create("transform",{duration:i*.666,delay:a||i*.333})].join(","),t.style.opacity="0",t.style.transform=f(.75),R&&R(t)}),tt=E(F),nt=function(e,o){var a=_?e:o;l==="auto"&&(L.current=setTimeout(a,C.current||0))};return u.useEffect(function(){return function(){clearTimeout(L.current)}},[]),u.createElement(X,(0,c.Z)({appear:!0,in:g,nodeRef:_?M:void 0,onEnter:Y,onEntered:w,onEntering:V,onExit:q,onExited:tt,onExiting:k,addEndListener:nt,timeout:l==="auto"?null:l},J),function(t,e){return u.cloneElement(h,(0,c.Z)({style:(0,c.Z)({opacity:0,transform:f(.75),visibility:t==="exited"&&!g?"hidden":void 0},S[t],y,h.props.style),ref:Q},e))})});T.muiSupportAuto=!0;const H=T}}]);

//# sourceMappingURL=grow.5975419598103fdd5f9b.js.map