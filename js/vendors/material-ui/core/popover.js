(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{500:function(n,t,e){"use strict";var o=e(4),r=e(5),i=e(2),a=e(16),c=e(104),l=e(7),u=e(34),f=e(164),s=e(166),h=e(9),v=e(532),p=e(501),d=e(492);function m(n,t){var e=0;return"number"==typeof t?e=t:"center"===t?e=n.height/2:"bottom"===t&&(e=n.height),e}function E(n,t){var e=0;return"number"==typeof t?e=t:"center"===t?e=n.width/2:"right"===t&&(e=n.width),e}function g(n){return[n.horizontal,n.vertical].map((function(n){return"number"==typeof n?"".concat(n,"px"):n})).join(" ")}function b(n){return"function"==typeof n?n():n}var O=i.forwardRef((function(n,t){var e=n.action,h=n.anchorEl,O=n.anchorOrigin,w=void 0===O?{vertical:"top",horizontal:"left"}:O,x=n.anchorPosition,j=n.anchorReference,z=void 0===j?"anchorEl":j,P=n.children,C=n.classes,y=n.className,k=n.container,T=n.elevation,H=void 0===T?8:T,N=n.getContentAnchorEl,R=n.marginThreshold,M=void 0===R?16:R,W=n.onEnter,A=n.onEntered,D=n.onEntering,B=n.onExit,J=n.onExited,L=n.onExiting,I=n.open,S=n.PaperProps,X=void 0===S?{}:S,Y=n.transformOrigin,q=void 0===Y?{vertical:"top",horizontal:"left"}:Y,F=n.TransitionComponent,G=void 0===F?p.a:F,K=n.transitionDuration,Q=void 0===K?"auto":K,U=n.TransitionProps,V=void 0===U?{}:U,Z=Object(r.a)(n,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),$=i.useRef(),_=i.useCallback((function(n){if("anchorPosition"===z)return x;var t=b(h),e=(t&&1===t.nodeType?t:Object(u.a)($.current).body).getBoundingClientRect(),o=0===n?w.vertical:"center";return{top:e.top+m(e,o),left:e.left+E(e,w.horizontal)}}),[h,w.horizontal,w.vertical,x,z]),nn=i.useCallback((function(n){var t=0;if(N&&"anchorEl"===z){var e=N(n);if(e&&n.contains(e)){var o=function(n,t){for(var e=t,o=0;e&&e!==n;)o+=(e=e.parentElement).scrollTop;return o}(n,e);t=e.offsetTop+e.clientHeight/2-o||0}0}return t}),[w.vertical,z,N]),tn=i.useCallback((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:m(n,q.vertical)+t,horizontal:E(n,q.horizontal)}}),[q.horizontal,q.vertical]),en=i.useCallback((function(n){var t=nn(n),e={width:n.offsetWidth,height:n.offsetHeight},o=tn(e,t);if("none"===z)return{top:null,left:null,transformOrigin:g(o)};var r=_(t),i=r.top-o.vertical,a=r.left-o.horizontal,c=i+e.height,l=a+e.width,u=Object(f.a)(b(h)),s=u.innerHeight-M,v=u.innerWidth-M;if(i<M){var p=i-M;i-=p,o.vertical+=p}else if(c>s){var d=c-s;i-=d,o.vertical+=d}if(a<M){var m=a-M;a-=m,o.horizontal+=m}else if(l>v){var E=l-v;a-=E,o.horizontal+=E}return{top:"".concat(Math.round(i),"px"),left:"".concat(Math.round(a),"px"),transformOrigin:g(o)}}),[h,z,_,nn,tn,M]),on=i.useCallback((function(){var n=$.current;if(n){var t=en(n);null!==t.top&&(n.style.top=t.top),null!==t.left&&(n.style.left=t.left),n.style.transformOrigin=t.transformOrigin}}),[en]),rn=i.useCallback((function(n){$.current=a.findDOMNode(n)}),[]);i.useEffect((function(){I&&on()})),i.useImperativeHandle(e,(function(){return I?{updatePosition:function(){on()}}:null}),[I,on]),i.useEffect((function(){if(I){var n=Object(c.a)((function(){on()}));return window.addEventListener("resize",n),function(){n.clear(),window.removeEventListener("resize",n)}}}),[I,on]);var an=Q;"auto"!==Q||G.muiSupportAuto||(an=void 0);var cn=k||(h?Object(u.a)(b(h)).body:void 0);return i.createElement(v.a,Object(o.a)({container:cn,open:I,ref:t,BackdropProps:{invisible:!0},className:Object(l.a)(C.root,y)},Z),i.createElement(G,Object(o.a)({appear:!0,in:I,onEnter:W,onEntered:A,onExit:B,onExited:J,onExiting:L,timeout:an},V,{onEntering:Object(s.a)((function(n,t){D&&D(n,t),on()}),V.onEntering)}),i.createElement(d.a,Object(o.a)({elevation:H,ref:rn},X,{className:Object(l.a)(C.paper,X.className)}),P)))}));t.a=Object(h.a)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(O)}}]);
//# sourceMappingURL=popover.js.map