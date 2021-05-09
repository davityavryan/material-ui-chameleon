(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4167],{30667:(Oe,se,u)=>{"use strict";u.d(se,{Z:()=>we});var W=u(85399),re=u(65917),n=u(2366),le=u(60625),$=u(72964),j=u(54950),z=u(3517),oe=u(47201),pe=u(63264),fe=u(77146),de=u(46989),he=typeof window=="undefined"?n.useEffect:n.useLayoutEffect;function me(e){var l=e.classes,E=e.pulsate,C=E===void 0?!1:E,g=e.rippleX,B=e.rippleY,y=e.rippleSize,d=e.in,S=e.onExited,D=S===void 0?function(){}:S,h=e.timeout,c=n.useState(!1),a=c[0],m=c[1],o=(0,$.Z)(l.ripple,l.rippleVisible,C&&l.ripplePulsate),N={width:y,height:y,top:-(y/2)+B,left:-(y/2)+g},x=(0,$.Z)(l.child,a&&l.childLeaving,C&&l.childPulsate),p=(0,z.Z)(D);return he(function(){if(!d){m(!0);var v=setTimeout(p,h);return function(){clearTimeout(v)}}},[p,d,h]),n.createElement("span",{className:o,style:N},n.createElement("span",{className:x}))}const ve=me;var q=550,be=80,ge=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(q,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(q,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},ye=n.forwardRef(function(e,l){var E=e.center,C=E===void 0?!1:E,g=e.classes,B=e.className,y=(0,re.Z)(e,["center","classes","className"]),d=n.useState([]),S=d[0],D=d[1],h=n.useRef(0),c=n.useRef(null);n.useEffect(function(){c.current&&(c.current(),c.current=null)},[S]);var a=n.useRef(!1),m=n.useRef(null),o=n.useRef(null),N=n.useRef(null);n.useEffect(function(){return function(){clearTimeout(m.current)}},[]);var x=n.useCallback(function(r){var i=r.pulsate,s=r.rippleX,V=r.rippleY,I=r.rippleSize,L=r.cb;D(function(P){return[].concat((0,fe.Z)(P),[n.createElement(ve,{key:h.current,classes:g,timeout:q,pulsate:i,rippleX:s,rippleY:V,rippleSize:I})])}),h.current+=1,c.current=L},[g]),p=n.useCallback(function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,V=i.pulsate,I=V===void 0?!1:V,L=i.center,P=L===void 0?C||i.pulsate:L,K=i.fakeElement,G=K===void 0?!1:K;if(r.type==="mousedown"&&a.current){a.current=!1;return}r.type==="touchstart"&&(a.current=!0);var M=G?null:N.current,R=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0},k,w,b;if(P||r.clientX===0&&r.clientY===0||!r.clientX&&!r.touches)k=Math.round(R.width/2),w=Math.round(R.height/2);else{var H=r.touches?r.touches[0]:r,J=H.clientX,A=H.clientY;k=Math.round(J-R.left),w=Math.round(A-R.top)}if(P)b=Math.sqrt((2*Math.pow(R.width,2)+Math.pow(R.height,2))/3),b%2==0&&(b+=1);else{var Q=Math.max(Math.abs((M?M.clientWidth:0)-k),k)*2+2,U=Math.max(Math.abs((M?M.clientHeight:0)-w),w)*2+2;b=Math.sqrt(Math.pow(Q,2)+Math.pow(U,2))}r.touches?o.current===null&&(o.current=function(){x({pulsate:I,rippleX:k,rippleY:w,rippleSize:b,cb:s})},m.current=setTimeout(function(){o.current&&(o.current(),o.current=null)},be)):x({pulsate:I,rippleX:k,rippleY:w,rippleSize:b,cb:s})},[C,x]),v=n.useCallback(function(){p({},{pulsate:!0})},[p]),X=n.useCallback(function(r,i){if(clearTimeout(m.current),r.type==="touchend"&&o.current){r.persist(),o.current(),o.current=null,m.current=setTimeout(function(){X(r,i)});return}o.current=null,D(function(s){return s.length>0?s.slice(1):s}),c.current=i},[]);return n.useImperativeHandle(l,function(){return{pulsate:v,start:p,stop:X}},[v,p,X]),n.createElement("span",(0,W.Z)({className:(0,$.Z)(g.root,B),ref:N},y),n.createElement(de.Z,{component:null,exit:!0},S))});const Me=(0,oe.Z)(ge,{flip:!1,name:"MuiTouchRipple"})(n.memo(ye));var Re={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},ke=n.forwardRef(function(e,l){var E=e.action,C=e.buttonRef,g=e.centerRipple,B=g===void 0?!1:g,y=e.children,d=e.classes,S=e.className,D=e.component,h=D===void 0?"button":D,c=e.disabled,a=c===void 0?!1:c,m=e.disableRipple,o=m===void 0?!1:m,N=e.disableTouchRipple,x=N===void 0?!1:N,p=e.focusRipple,v=p===void 0?!1:p,X=e.focusVisibleClassName,r=e.onBlur,i=e.onClick,s=e.onFocus,V=e.onFocusVisible,I=e.onKeyDown,L=e.onKeyUp,P=e.onMouseDown,K=e.onMouseLeave,G=e.onMouseUp,M=e.onTouchEnd,R=e.onTouchMove,k=e.onTouchStart,w=e.onDragLeave,b=e.tabIndex,H=b===void 0?0:b,J=e.TouchRippleProps,A=e.type,Q=A===void 0?"button":A,U=(0,re.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Y=n.useRef(null);function Te(){return le.findDOMNode(Y.current)}var f=n.useRef(null),ie=n.useState(!1),T=ie[0],O=ie[1];a&&T&&O(!1);var ee=(0,pe.Z)(),Ze=ee.isFocusVisible,Ee=ee.onBlurVisible,Ce=ee.ref;n.useImperativeHandle(E,function(){return{focusVisible:function(){O(!0),Y.current.focus()}}},[]),n.useEffect(function(){T&&v&&!o&&f.current.pulsate()},[o,v,T]);function Z(t,ue){var He=arguments.length>2&&arguments[2]!==void 0?arguments[2]:x;return(0,z.Z)(function(ce){ue&&ue(ce);var Ae=He;return!Ae&&f.current&&f.current[t](ce),!0})}var Se=Z("start",P),De=Z("stop",w),Ne=Z("stop",G),xe=Z("stop",function(t){T&&t.preventDefault(),K&&K(t)}),Ve=Z("start",k),Ie=Z("stop",M),Le=Z("stop",R),Pe=Z("stop",function(t){T&&(Ee(t),O(!1)),r&&r(t)},!1),ze=(0,z.Z)(function(t){Y.current||(Y.current=t.currentTarget),Ze(t)&&(O(!0),V&&V(t)),s&&s(t)}),te=function(){var t=Te();return h&&h!=="button"&&!(t.tagName==="A"&&t.href)},ne=n.useRef(!1),Be=(0,z.Z)(function(t){v&&!ne.current&&T&&f.current&&t.key===" "&&(ne.current=!0,t.persist(),f.current.stop(t,function(){f.current.start(t)})),t.target===t.currentTarget&&te()&&t.key===" "&&t.preventDefault(),I&&I(t),t.target===t.currentTarget&&te()&&t.key==="Enter"&&!a&&(t.preventDefault(),i&&i(t))}),Xe=(0,z.Z)(function(t){v&&t.key===" "&&f.current&&T&&!t.defaultPrevented&&(ne.current=!1,t.persist(),f.current.stop(t,function(){f.current.pulsate(t)})),L&&L(t),i&&t.target===t.currentTarget&&te()&&t.key===" "&&!t.defaultPrevented&&i(t)}),F=h;F==="button"&&U.href&&(F="a");var _={};F==="button"?(_.type=Q,_.disabled=a):((F!=="a"||!U.href)&&(_.role="button"),_["aria-disabled"]=a);var Ke=(0,j.Z)(C,l),Ue=(0,j.Z)(Ce,Y),Ye=(0,j.Z)(Ke,Ue),ae=n.useState(!1),Fe=ae[0],_e=ae[1];n.useEffect(function(){_e(!0)},[]);var $e=Fe&&!o&&!a;return n.createElement(F,(0,W.Z)({className:(0,$.Z)(d.root,S,T&&[d.focusVisible,X],a&&d.disabled),onBlur:Pe,onClick:i,onFocus:ze,onKeyDown:Be,onKeyUp:Xe,onMouseDown:Se,onMouseLeave:xe,onMouseUp:Ne,onDragLeave:De,onTouchEnd:Ie,onTouchMove:Le,onTouchStart:Ve,ref:Ye,tabIndex:a?-1:H},_,U),y,$e?n.createElement(Me,(0,W.Z)({ref:f,center:B},J)):null)});const we=(0,oe.Z)(Re,{name:"MuiButtonBase"})(ke)}}]);
