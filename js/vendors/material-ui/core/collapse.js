(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{495:function(t,e,n){"use strict";var i=n(4),o=n(19),r=n(5),a=n(2),c=n(7),s=n(534),u=n(9),l=n(41),d=n(65),f=n(33),p=n(17),h=a.forwardRef((function(t,e){var n=t.children,u=t.classes,h=t.className,m=t.collapsedHeight,g=void 0===m?"0px":m,v=t.component,E=void 0===v?"div":v,b=t.disableStrictModeCompat,y=void 0!==b&&b,x=t.in,w=t.onEnter,j=t.onEntered,O=t.onEntering,H=t.onExit,D=t.onExited,R=t.onExiting,C=t.style,N=t.timeout,M=void 0===N?l.b.standard:N,T=t.TransitionComponent,A=void 0===T?s.a:T,S=Object(r.a)(t,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=Object(f.a)(),I=a.useRef(),J=a.useRef(null),L=a.useRef(),_="number"==typeof g?"".concat(g,"px"):g;a.useEffect((function(){return function(){clearTimeout(I.current)}}),[]);var q=k.unstable_strictMode&&!y,z=a.useRef(null),B=Object(p.a)(e,q?z:void 0),F=function(t){return function(e,n){if(t){var i=q?[z.current,e]:[e,n],r=Object(o.a)(i,2),a=r[0],c=r[1];void 0===c?t(a):t(a,c)}}},G=F((function(t,e){t.style.height=_,w&&w(t,e)})),K=F((function(t,e){var n=J.current?J.current.clientHeight:0,i=Object(d.a)({style:C,timeout:M},{mode:"enter"}).duration;if("auto"===M){var o=k.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(o,"ms"),L.current=o}else t.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");t.style.height="".concat(n,"px"),O&&O(t,e)})),P=F((function(t,e){t.style.height="auto",j&&j(t,e)})),Q=F((function(t){var e=J.current?J.current.clientHeight:0;t.style.height="".concat(e,"px"),H&&H(t)})),U=F(D),V=F((function(t){var e=J.current?J.current.clientHeight:0,n=Object(d.a)({style:C,timeout:M},{mode:"exit"}).duration;if("auto"===M){var i=k.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(i,"ms"),L.current=i}else t.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");t.style.height=_,R&&R(t)}));return a.createElement(A,Object(i.a)({in:x,onEnter:G,onEntered:P,onEntering:K,onExit:Q,onExited:U,onExiting:V,addEndListener:function(t,e){var n=q?t:e;"auto"===M&&(I.current=setTimeout(n,L.current||0))},nodeRef:q?z:void 0,timeout:"auto"===M?null:M},S),(function(t,e){return a.createElement(E,Object(i.a)({className:Object(c.a)(u.container,h,{entered:u.entered,exited:!x&&"0px"===_&&u.hidden}[t]),style:Object(i.a)({minHeight:_},C),ref:B},e),a.createElement("div",{className:u.wrapper,ref:J},a.createElement("div",{className:u.wrapperInner},n)))}))}));h.muiSupportAuto=!0,e.a=Object(u.a)((function(t){return{container:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(h)}}]);
//# sourceMappingURL=collapse.js.map