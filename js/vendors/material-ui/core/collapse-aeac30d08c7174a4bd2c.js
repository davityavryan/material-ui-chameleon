(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{135:function(e,t,n){"use strict";var i=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=i(n(292))},292:function(e,t,n){"use strict";var i=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=i(n(5)),o=i(n(6)),a=i(n(3)),u=i(n(9)),s=(i(n(4)),n(58)),l=i(n(10)),c=n(43),d=n(88),f=i(n(35)),p=function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}};t.styles=p;var h=a.default.forwardRef((function(e,t){var n=e.children,i=e.classes,l=e.className,p=e.collapsedHeight,h=void 0===p?"0px":p,g=e.component,m=void 0===g?"div":g,v=e.in,y=e.onEnter,E=e.onEntered,w=e.onEntering,x=e.onExit,b=e.onExiting,H=e.style,D=e.timeout,N=void 0===D?c.duration.standard:D,P=(0,o.default)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),T=(0,f.default)(),R=a.default.useRef(),_=a.default.useRef(null),j=a.default.useRef(),A="number"==typeof h?"".concat(h,"px"):h;a.default.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);return a.default.createElement(s.Transition,(0,r.default)({in:v,onEnter:function(e,t){e.style.height=A,y&&y(e,t)},onEntered:function(e,t){e.style.height="auto",E&&E(e,t)},onEntering:function(e,t){var n=_.current?_.current.clientHeight:0,i=(0,d.getTransitionProps)({style:H,timeout:N},{mode:"enter"}).duration;if("auto"===N){var r=T.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),j.current=r}else e.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");e.style.height="".concat(n,"px"),w&&w(e,t)},onExit:function(e){var t=_.current?_.current.clientHeight:0;e.style.height="".concat(t,"px"),x&&x(e)},onExiting:function(e){var t=_.current?_.current.clientHeight:0,n=(0,d.getTransitionProps)({style:H,timeout:N},{mode:"exit"}).duration;if("auto"===N){var i=T.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),j.current=i}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=A,b&&b(e)},addEndListener:function(e,t){"auto"===N&&(R.current=setTimeout(t,j.current||0))},timeout:"auto"===N?null:N},P),(function(e,o){return a.default.createElement(m,(0,r.default)({className:(0,u.default)(i.container,l,{entered:i.entered,exited:!v&&"0px"===A&&i.hidden}[e]),style:(0,r.default)({minHeight:A},H),ref:t},o),a.default.createElement("div",{className:i.wrapper,ref:_},a.default.createElement("div",{className:i.wrapperInner},n)))}))}));h.muiSupportAuto=!0;var g=(0,l.default)(p,{name:"MuiCollapse"})(h);t.default=g}}]);
//# sourceMappingURL=collapse-aeac30d08c7174a4bd2c.js.map