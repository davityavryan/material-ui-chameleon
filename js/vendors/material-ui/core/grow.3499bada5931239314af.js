(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4872],{24939:(tt,T,o)=>{"use strict";o.d(T,{Z:()=>P});var m=o(85399),A=o(78667),S=o(65917),u=o(2366),D=o(25540),j=o(3679),y=o(62258),x=o(54950);function E(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var L={entering:{opacity:1,transform:E(1)},entered:{opacity:1,transform:"none"}},C=u.forwardRef(function(e,q){var p=e.children,Z=e.disableStrictModeCompat,z=Z===void 0?!1:Z,_=e.in,b=e.onEnter,B=e.onEntered,F=e.onEntering,R=e.onExit,G=e.onExited,I=e.onExiting,g=e.style,k=e.timeout,s=k===void 0?"auto":k,w=e.TransitionComponent,J=w===void 0?D.ZP:w,K=(0,S.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),H=u.useRef(),h=u.useRef(),c=(0,j.Z)(),f=c.unstable_strictMode&&!z,v=u.useRef(null),N=(0,x.Z)(p.ref,q),O=(0,x.Z)(f?v:void 0,N),d=function(t){return function(i,r){if(t){var l=f?[v.current,i]:[i,r],n=(0,A.Z)(l,2),a=n[0],M=n[1];M===void 0?t(a):t(a,M)}}},Q=d(F),U=d(function(t,i){(0,y.n)(t);var r=(0,y.C)({style:g,timeout:s},{mode:"enter"}),l=r.duration,n=r.delay,a;s==="auto"?(a=c.transitions.getAutoHeightDuration(t.clientHeight),h.current=a):a=l,t.style.transition=[c.transitions.create("opacity",{duration:a,delay:n}),c.transitions.create("transform",{duration:a*.666,delay:n})].join(","),b&&b(t,i)}),V=d(B),X=d(I),Y=d(function(t){var i=(0,y.C)({style:g,timeout:s},{mode:"exit"}),r=i.duration,l=i.delay,n;s==="auto"?(n=c.transitions.getAutoHeightDuration(t.clientHeight),h.current=n):n=r,t.style.transition=[c.transitions.create("opacity",{duration:n,delay:l}),c.transitions.create("transform",{duration:n*.666,delay:l||n*.333})].join(","),t.style.opacity="0",t.style.transform=E(.75),R&&R(t)}),$=d(G),W=function(t,i){var r=f?t:i;s==="auto"&&(H.current=setTimeout(r,h.current||0))};return u.useEffect(function(){return function(){clearTimeout(H.current)}},[]),u.createElement(J,(0,m.Z)({appear:!0,in:_,nodeRef:f?v:void 0,onEnter:U,onEntered:V,onEntering:Q,onExit:Y,onExited:$,onExiting:X,addEndListener:W,timeout:s==="auto"?null:s},K),function(t,i){return u.cloneElement(p,(0,m.Z)({style:(0,m.Z)({opacity:0,transform:E(.75),visibility:t==="exited"&&!_?"hidden":void 0},L[t],g,p.props.style),ref:O},i))})});C.muiSupportAuto=!0;const P=C}}]);