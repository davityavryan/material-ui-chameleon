(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4167],{30667:(fe,W,o)=>{"use strict";o.d(W,{Z:()=>Ce});var F=o(85399),ie=o(65917),n=o(2366),de=o(60625),j=o(72964),q=o(54950),U=o(3517),se=o(47201),pe=o(63264),he=o(71997),ve=o(46989),me=typeof window=="undefined"?n.useEffect:n.useLayoutEffect;function be(u){var e=u.classes,x=u.pulsate,S=x===void 0?!1:x,Z=u.rippleX,b=u.rippleY,R=u.rippleSize,P=u.in,d=u.onExited,I=d===void 0?function(){}:d,g=u.timeout,p=n.useState(!1),c=p[0],s=p[1],h=(0,j.default)(e.ripple,e.rippleVisible,S&&e.ripplePulsate),r={width:R,height:R,top:-(R/2)+b,left:-(R/2)+Z},N=(0,j.default)(e.child,c&&e.childLeaving,S&&e.childPulsate),y=(0,U.Z)(I);return me(function(){if(!P){s(!0);var v=setTimeout(y,g);return function(){clearTimeout(v)}}},[y,P,g]),n.createElement("span",{className:h,style:r},n.createElement("span",{className:N}))}const Re=be;var _=550,ge=80,ye=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(_,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(_,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},Te=n.forwardRef(function(e,x){var S=e.center,Z=S===void 0?!1:S,b=e.classes,R=e.className,P=(0,ie.Z)(e,["center","classes","className"]),d=n.useState([]),I=d[0],g=d[1],p=n.useRef(0),c=n.useRef(null);n.useEffect(function(){c.current&&(c.current(),c.current=null)},[I]);var s=n.useRef(!1),h=n.useRef(null),r=n.useRef(null),N=n.useRef(null);n.useEffect(function(){return function(){clearTimeout(h.current)}},[]);var y=n.useCallback(function(a){var i=a.pulsate,l=a.rippleX,V=a.rippleY,k=a.rippleSize,w=a.cb;g(function(L){return[].concat((0,he.Z)(L),[n.createElement(Re,{key:p.current,classes:b,timeout:_,pulsate:i,rippleX:l,rippleY:V,rippleSize:k})])}),p.current+=1,c.current=w},[b]),v=n.useCallback(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2?arguments[2]:void 0,V=i.pulsate,k=V===void 0?!1:V,w=i.center,L=w===void 0?Z||i.pulsate:w,z=i.fakeElement,ee=z===void 0?!1:z;if(a.type==="mousedown"&&s.current){s.current=!1;return}a.type==="touchstart"&&(s.current=!0);var T=ee?null:N.current,M=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0},E,B,m;if(L||a.clientX===0&&a.clientY===0||!a.clientX&&!a.touches)E=Math.round(M.width/2),B=Math.round(M.height/2);else{var G=a.touches?a.touches[0]:a,te=G.clientX,J=G.clientY;E=Math.round(te-M.left),B=Math.round(J-M.top)}if(L)m=Math.sqrt((2*Math.pow(M.width,2)+Math.pow(M.height,2))/3),m%2==0&&(m+=1);else{var ne=Math.max(Math.abs((T?T.clientWidth:0)-E),E)*2+2,A=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;m=Math.sqrt(Math.pow(ne,2)+Math.pow(A,2))}a.touches?r.current===null&&(r.current=function(){y({pulsate:k,rippleX:E,rippleY:B,rippleSize:m,cb:l})},h.current=setTimeout(function(){r.current&&(r.current(),r.current=null)},ge)):y({pulsate:k,rippleX:E,rippleY:B,rippleSize:m,cb:l})},[Z,y]),$=n.useCallback(function(){v({},{pulsate:!0})},[v]),K=n.useCallback(function(a,i){if(clearTimeout(h.current),a.type==="touchend"&&r.current){a.persist(),r.current(),r.current=null,h.current=setTimeout(function(){K(a,i)});return}r.current=null,g(function(l){return l.length>0?l.slice(1):l}),c.current=i},[]);return n.useImperativeHandle(x,function(){return{pulsate:$,start:v,stop:K}},[$,v,K]),n.createElement("span",(0,F.Z)({className:(0,j.default)(b.root,R),ref:N},P),n.createElement(ve.Z,{component:null,exit:!0},I))});const Me=(0,se.Z)(ye,{flip:!1,name:"MuiTouchRipple"})(n.memo(Te));var Ee={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},Be=n.forwardRef(function(e,x){var S=e.action,Z=e.buttonRef,b=e.centerRipple,R=b===void 0?!1:b,P=e.children,d=e.classes,I=e.className,g=e.component,p=g===void 0?"button":g,c=e.disabled,s=c===void 0?!1:c,h=e.disableRipple,r=h===void 0?!1:h,N=e.disableTouchRipple,y=N===void 0?!1:N,v=e.focusRipple,$=v===void 0?!1:v,K=e.focusVisibleClassName,a=e.onBlur,i=e.onClick,l=e.onFocus,V=e.onFocusVisible,k=e.onKeyDown,w=e.onKeyUp,L=e.onMouseDown,z=e.onMouseLeave,ee=e.onMouseUp,T=e.onTouchEnd,M=e.onTouchMove,E=e.onTouchStart,B=e.onDragLeave,m=e.tabIndex,G=m===void 0?0:m,te=e.TouchRippleProps,J=e.type,ne=J===void 0?"button":J,A=(0,ie.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),O=n.useRef(null);function De(){return de.findDOMNode(O.current)}var f=n.useRef(null),ue=n.useState(!1),C=ue[0],Q=ue[1];s&&C&&Q(!1);var ae=(0,pe.Z)(),Se=ae.isFocusVisible,Ne=ae.onBlurVisible,$e=ae.ref;n.useImperativeHandle(S,function(){return{focusVisible:function(){Q(!0),O.current.focus()}}},[]),n.useEffect(function(){C&&$&&!r&&f.current.pulsate()},[r,$,C]);function D(t,H){var We=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;return(0,U.Z)(function(ce){H&&H(ce);var je=We;return!je&&f.current&&f.current[t](ce),!0})}var Ve=D("start",L),ke=D("stop",B),we=D("stop",ee),xe=D("stop",function(t){C&&t.preventDefault(),z&&z(t)}),Ze=D("start",E),Pe=D("stop",T),Ie=D("stop",M),Le=D("stop",function(t){C&&(Ne(t),Q(!1)),a&&a(t)},!1),Fe=(0,U.Z)(function(t){O.current||(O.current=t.currentTarget),Se(t)&&(Q(!0),V&&V(t)),l&&l(t)}),oe=function(){var H=De();return p&&p!=="button"&&!(H.tagName==="A"&&H.href)},re=n.useRef(!1),Ue=(0,U.Z)(function(t){$&&!re.current&&C&&f.current&&t.key===" "&&(re.current=!0,t.persist(),f.current.stop(t,function(){f.current.start(t)})),t.target===t.currentTarget&&oe()&&t.key===" "&&t.preventDefault(),k&&k(t),t.target===t.currentTarget&&oe()&&t.key==="Enter"&&!s&&(t.preventDefault(),i&&i(t))}),Ke=(0,U.Z)(function(t){$&&t.key===" "&&f.current&&C&&!t.defaultPrevented&&(re.current=!1,t.persist(),f.current.stop(t,function(){f.current.pulsate(t)})),w&&w(t),i&&t.target===t.currentTarget&&oe()&&t.key===" "&&!t.defaultPrevented&&i(t)}),X=p;X==="button"&&A.href&&(X="a");var Y={};X==="button"?(Y.type=ne,Y.disabled=s):((X!=="a"||!A.href)&&(Y.role="button"),Y["aria-disabled"]=s);var ze=(0,q.Z)(Z,x),Ae=(0,q.Z)($e,O),Oe=(0,q.Z)(ze,Ae),le=n.useState(!1),Xe=le[0],Ye=le[1];n.useEffect(function(){Ye(!0)},[]);var He=Xe&&!r&&!s;return n.createElement(X,(0,F.Z)({className:(0,j.default)(d.root,I,C&&[d.focusVisible,K],s&&d.disabled),onBlur:Le,onClick:i,onFocus:Fe,onKeyDown:Ue,onKeyUp:Ke,onMouseDown:Ve,onMouseLeave:xe,onMouseUp:we,onDragLeave:ke,onTouchEnd:Pe,onTouchMove:Ie,onTouchStart:Ze,ref:Oe,tabIndex:s?-1:G},Y,A),P,He?n.createElement(Me,(0,F.Z)({ref:f,center:R},te)):null)});const Ce=(0,se.Z)(Ee,{name:"MuiButtonBase"})(Be)},78061:(fe,W,o)=>{"use strict";o.r(W),o.d(W,{default:()=>F.Z});var F=o(30667)}}]);

//# sourceMappingURL=buttonbase.337cc12d708e02978eb7.js.map