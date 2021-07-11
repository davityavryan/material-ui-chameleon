(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[4978],{65804:(U,p,e)=>{"use strict";e.d(p,{mi:()=>R,_4:()=>F,U1:()=>z,Fq:()=>L,_j:()=>j,$n:()=>H});var h=e(92529);function o(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(Math.max(n,t),a)}function s(t){t=t.substr(1);var n=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),a=t.match(n);return a&&a[0].length===1&&(a=a.map(function(v){return v+v})),a?"rgb".concat(a.length===4?"a":"","(").concat(a.map(function(v,w){return w<3?parseInt(v,16):Math.round(parseInt(v,16)/255*1e3)/1e3}).join(", "),")"):""}function l(t){var n=t.toString(16);return n.length===1?"0".concat(n):n}function I(t){if(t.indexOf("#")===0)return t;var n=m(t),a=n.values;return"#".concat(a.map(function(v){return l(v)}).join(""))}function M(t){t=m(t);var n=t,a=n.values,v=a[0],w=a[1]/100,N=a[2]/100,st=w*Math.min(N,1-N),Y=function(nt){var tt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(nt+v/30)%12;return N-st*Math.max(Math.min(tt-3,9-tt,1),-1)},G="rgb",Q=[Math.round(Y(0)*255),Math.round(Y(8)*255),Math.round(Y(4)*255)];return t.type==="hsla"&&(G+="a",Q.push(a[3])),O({type:G,values:Q})}function m(t){if(t.type)return t;if(t.charAt(0)==="#")return m(s(t));var n=t.indexOf("("),a=t.substring(0,n);if(["rgb","rgba","hsl","hsla"].indexOf(a)===-1)throw new Error((0,h.Z)(3,t));var v=t.substring(n+1,t.length-1).split(",");return v=v.map(function(w){return parseFloat(w)}),{type:a,values:v}}function O(t){var n=t.type,a=t.values;return n.indexOf("rgb")!==-1?a=a.map(function(v,w){return w<3?parseInt(v,10):v}):n.indexOf("hsl")!==-1&&(a[1]="".concat(a[1],"%"),a[2]="".concat(a[2],"%")),"".concat(n,"(").concat(a.join(", "),")")}function R(t,n){var a=A(t),v=A(n);return(Math.max(a,v)+.05)/(Math.min(a,v)+.05)}function A(t){t=m(t);var n=t.type==="hsl"?m(M(t)).values:t.values;return n=n.map(function(a){return a/=255,a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}),Number((.2126*n[0]+.7152*n[1]+.0722*n[2]).toFixed(3))}function F(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.15;return A(t)>.5?j(t,n):H(t,n)}var V=!1;function z(t,n){return L(t,n)}function L(t,n){return t=m(t),n=o(n),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.values[3]=n,O(t)}function j(t,n){if(t=m(t),n=o(n),t.type.indexOf("hsl")!==-1)t.values[2]*=1-n;else if(t.type.indexOf("rgb")!==-1)for(var a=0;a<3;a+=1)t.values[a]*=1-n;return O(t)}function H(t,n){if(t=m(t),n=o(n),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*n;else if(t.type.indexOf("rgb")!==-1)for(var a=0;a<3;a+=1)t.values[a]+=(255-t.values[a])*n;return O(t)}},5782:(U,p,e)=>{"use strict";e.d(p,{Z:()=>o});var h=e(26990);function o(s){return(0,h.Z)(s)}},87171:(U,p,e)=>{"use strict";e.d(p,{A:()=>_t,Z:()=>yt});var h=e(65917),o=e(57602),s=e(85399),l=["xs","sm","md","lg","xl"];function I(r){var u=r.values,i=u===void 0?{xs:0,sm:600,md:960,lg:1280,xl:1920}:u,f=r.unit,y=f===void 0?"px":f,c=r.step,P=c===void 0?5:c,D=(0,h.Z)(r,["values","unit","step"]);function x(d){var b=typeof i[d]=="number"?i[d]:d;return"@media (min-width:".concat(b).concat(y,")")}function K(d){var b=l.indexOf(d)+1,E=i[l[b]];if(b===l.length)return x("xs");var C=typeof E=="number"&&b>0?E:d;return"@media (max-width:".concat(C-P/100).concat(y,")")}function Z(d,b){var E=l.indexOf(b);return E===l.length-1?x(d):"@media (min-width:".concat(typeof i[d]=="number"?i[d]:d).concat(y,") and ")+"(max-width:".concat((E!==-1&&typeof i[l[E+1]]=="number"?i[l[E+1]]:b)-P/100).concat(y,")")}function B(d){return Z(d,d)}var $=!1;function S(d){return i[d]}return(0,s.Z)({keys:l,values:i,up:x,down:K,between:Z,only:B,width:S},D)}var M=e(58629);function m(r,u,i){var f;return(0,s.Z)({gutters:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:",`
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `].join(`
`)),(0,s.Z)({paddingLeft:u(2),paddingRight:u(2)},c,(0,M.Z)({},r.up("sm"),(0,s.Z)({paddingLeft:u(3),paddingRight:u(3)},c[r.up("sm")])))},toolbar:(f={minHeight:56},(0,M.Z)(f,"".concat(r.up("xs")," and (orientation: landscape)"),{minHeight:48}),(0,M.Z)(f,r.up("sm"),{minHeight:64}),f)},i)}var O=e(92529),R=e(11867),A=e(77644),F=e(91574),V=e(2098),z=e(28863),L=e(36554),j=e(5917),H=e(1747),t=e(65804),n={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:R.Z.white,default:A.Z[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},a={text:{primary:R.Z.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:A.Z[800],default:"#303030"},action:{active:R.Z.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function v(r,u,i,f){var y=f.light||f,c=f.dark||f*1.5;r[u]||(r.hasOwnProperty(i)?r[u]=r[i]:u==="light"?r.light=(0,t.$n)(r.main,y):u==="dark"&&(r.dark=(0,t._j)(r.main,c)))}function w(r){var u=r.primary,i=u===void 0?{light:F.Z[300],main:F.Z[500],dark:F.Z[700]}:u,f=r.secondary,y=f===void 0?{light:V.Z.A200,main:V.Z.A400,dark:V.Z.A700}:f,c=r.error,P=c===void 0?{light:z.Z[300],main:z.Z[500],dark:z.Z[700]}:c,D=r.warning,x=D===void 0?{light:L.Z[300],main:L.Z[500],dark:L.Z[700]}:D,K=r.info,Z=K===void 0?{light:j.Z[300],main:j.Z[500],dark:j.Z[700]}:K,B=r.success,$=B===void 0?{light:H.Z[300],main:H.Z[500],dark:H.Z[700]}:B,S=r.type,d=S===void 0?"light":S,b=r.contrastThreshold,E=b===void 0?3:b,C=r.tonalOffset,k=C===void 0?.2:C,et=(0,h.Z)(r,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function J(q){var _=(0,t.mi)(q,a.text.primary)>=E?a.text.primary:n.text.primary;if(!1)var X;return _}var W=function(_){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,rt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:300,it=arguments.length>3&&arguments[3]!==void 0?arguments[3]:700;if(_=(0,s.Z)({},_),!_.main&&_[X]&&(_.main=_[X]),!_.main)throw new Error((0,O.Z)(4,X));if(typeof _.main!="string")throw new Error((0,O.Z)(5,JSON.stringify(_.main)));return v(_,"light",rt,k),v(_,"dark",it,k),_.contrastText||(_.contrastText=J(_.main)),_},T={dark:a,light:n},at=(0,o.Z)((0,s.Z)({common:R.Z,type:d,primary:W(i),secondary:W(y,"A400","A200","A700"),error:W(P),warning:W(x),info:W(Z),success:W($),grey:A.Z,contrastThreshold:E,getContrastText:J,augmentColor:W,tonalOffset:k},T[d]),et);return at}function N(r){return Math.round(r*1e5)/1e5}var st=!1;function Y(r){return N(r)}var G={textTransform:"uppercase"},Q='"Roboto", "Helvetica", "Arial", sans-serif';function ut(r,u){var i=typeof u=="function"?u(r):u,f=i.fontFamily,y=f===void 0?Q:f,c=i.fontSize,P=c===void 0?14:c,D=i.fontWeightLight,x=D===void 0?300:D,K=i.fontWeightRegular,Z=K===void 0?400:K,B=i.fontWeightMedium,$=B===void 0?500:B,S=i.fontWeightBold,d=S===void 0?700:S,b=i.htmlFontSize,E=b===void 0?16:b,C=i.allVariants,k=i.pxToRem,et=(0,h.Z)(i,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]),J=P/14,W=k||function(q){return"".concat(q/E*J,"rem")},T=function(_,X,rt,it,bt){return(0,s.Z)({fontFamily:y,fontWeight:_,fontSize:W(X),lineHeight:rt},y===Q?{letterSpacing:"".concat(N(it/X),"em")}:{},bt,C)},at={h1:T(x,96,1.167,-1.5),h2:T(x,60,1.2,-.5),h3:T(Z,48,1.167,0),h4:T(Z,34,1.235,.25),h5:T(Z,24,1.334,0),h6:T($,20,1.6,.15),subtitle1:T(Z,16,1.75,.15),subtitle2:T($,14,1.57,.1),body1:T(Z,16,1.5,.15),body2:T(Z,14,1.43,.15),button:T($,14,1.75,.4,G),caption:T(Z,12,1.66,.4),overline:T(Z,12,2.66,1,G)};return(0,o.Z)((0,s.Z)({htmlFontSize:E,pxToRem:W,round:Y,fontFamily:y,fontSize:P,fontWeightLight:x,fontWeightRegular:Z,fontWeightMedium:$,fontWeightBold:d},at),et,{clone:!1})}var nt=.2,tt=.14,dt=.12;function g(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(nt,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(tt,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(dt,")")].join(",")}var gt=["none",g(0,2,1,-1,0,1,1,0,0,1,3,0),g(0,3,1,-2,0,2,2,0,0,1,5,0),g(0,3,3,-2,0,3,4,0,0,1,8,0),g(0,2,4,-1,0,4,5,0,0,1,10,0),g(0,3,5,-1,0,5,8,0,0,1,14,0),g(0,3,5,-1,0,6,10,0,0,1,18,0),g(0,4,5,-2,0,7,10,1,0,2,16,1),g(0,5,5,-3,0,8,10,1,0,3,14,2),g(0,5,6,-3,0,9,12,1,0,3,16,2),g(0,6,6,-3,0,10,14,1,0,4,18,3),g(0,6,7,-4,0,11,15,1,0,4,20,3),g(0,7,8,-4,0,12,17,2,0,5,22,4),g(0,7,8,-4,0,13,19,2,0,5,24,4),g(0,7,9,-4,0,14,21,2,0,5,26,4),g(0,8,9,-5,0,15,22,2,0,6,28,5),g(0,8,10,-5,0,16,24,2,0,6,30,5),g(0,8,11,-5,0,17,26,2,0,6,32,5),g(0,9,11,-5,0,18,28,2,0,7,34,6),g(0,9,12,-6,0,19,29,2,0,7,36,6),g(0,10,13,-6,0,20,31,3,0,8,38,7),g(0,10,13,-6,0,21,33,3,0,8,40,7),g(0,10,14,-6,0,22,35,3,0,8,42,7),g(0,11,14,-7,0,23,36,3,0,9,44,8),g(0,11,15,-7,0,24,38,3,0,9,46,8)];const mt=gt;var ft={borderRadius:4};const ht=ft;var vt=e(10706),Ot;function ct(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;if(r.mui)return r;var u=(0,vt.h)({spacing:r}),i=function(){for(var y=arguments.length,c=new Array(y),P=0;P<y;P++)c[P]=arguments[P];return c.length===0?u(1):c.length===1?u(c[0]):c.map(function(D){if(typeof D=="string")return D;var x=u(D);return typeof x=="number"?"".concat(x,"px"):x}).join(" ")};return Object.defineProperty(i,"unit",{get:function(){return r}}),i.mui=!0,i}var lt=e(8299),pt=e(41582);function ot(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=r.breakpoints,i=u===void 0?{}:u,f=r.mixins,y=f===void 0?{}:f,c=r.palette,P=c===void 0?{}:c,D=r.spacing,x=r.typography,K=x===void 0?{}:x,Z=(0,h.Z)(r,["breakpoints","mixins","palette","spacing","typography"]),B=w(P),$=I(i),S=ct(D),d=(0,o.Z)({breakpoints:$,direction:"ltr",mixins:m($,S,y),overrides:{},palette:B,props:{},shadows:mt,typography:ut(B,K),spacing:S,shape:ht,transitions:lt.ZP,zIndex:pt.Z},Z),b=arguments.length,E=new Array(b>1?b-1:0),C=1;C<b;C++)E[C-1]=arguments[C];if(d=E.reduce(function(J,W){return(0,o.Z)(J,W)},d),!1)var k,et;return d}var xt=!1;function _t(){return ot.apply(void 0,arguments)}const yt=ot},35978:(U,p,e)=>{"use strict";e.d(p,{Z:()=>s});var h=e(87171),o=(0,h.Z)();const s=o},16573:(U,p,e)=>{"use strict";e.d(p,{Z:()=>I});var h=e(85399),o=e(9763),s=e(35978);function l(M){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(0,o.Z)(M,(0,h.Z)({defaultTheme:s.Z},m))}const I=l},19152:(U,p,e)=>{"use strict";e.d(p,{Z:()=>I});var h=e(85399),o=e(80141),s=e(35978),l=function(m){var O=(0,o.Z)(m);return function(R,A){return O(R,(0,h.Z)({defaultTheme:s.Z},A))}};const I=l},8299:(U,p,e)=>{"use strict";e.d(p,{x9:()=>s,ZP:()=>I});var h=e(65917),o={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},s={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function l(M){return"".concat(Math.round(M),"ms")}const I={easing:o,duration:s,create:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["all"],O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=O.duration,A=R===void 0?s.standard:R,F=O.easing,V=F===void 0?o.easeInOut:F,z=O.delay,L=z===void 0?0:z,j=(0,h.Z)(O,["duration","easing","delay"]);if(!1)var H,t;return(Array.isArray(m)?m:[m]).map(function(n){return"".concat(n," ").concat(typeof A=="string"?A:l(A)," ").concat(V," ").concat(typeof L=="string"?L:l(L))}).join(",")},getAutoHeightDuration:function(m){if(!m)return 0;var O=m/36;return Math.round((4+15*Math.pow(O,.25)+O/5)*10)}}},3679:(U,p,e)=>{"use strict";e.d(p,{Z:()=>s});var h=e(52498),o=e(35978);function s(){var l=(0,h.Z)()||o.Z;return l}},47201:(U,p,e)=>{"use strict";e.d(p,{Z:()=>I});var h=e(85399),o=e(89293),s=e(35978);function l(M,m){return(0,o.Z)(M,(0,h.Z)({defaultTheme:s.Z},m))}const I=l},41582:(U,p,e)=>{"use strict";e.d(p,{Z:()=>o});var h={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const o=h}}]);

//# sourceMappingURL=styles.5494171504a5c38bba9d.js.map