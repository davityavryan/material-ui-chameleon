(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[7516],{19712:(V,D,i)=>{"use strict";i.d(D,{Z:()=>z});var f=i(85399),A=i(65917),e=i(2366),H=i(83668),L=i(54950);function u(g,t){return parseInt(g[t],10)||0}var S=typeof window!="undefined"?e.useLayoutEffect:e.useEffect,T={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}},Z=e.forwardRef(function(t,I){var m=t.onChange,W=t.rows,h=t.rowsMax,M=t.rowsMin,B=M===void 0?1:M,b=t.style,c=t.value,K=(0,A.Z)(t,["onChange","rows","rowsMax","rowsMin","style","value"]),s=W||B,U=e.useRef(c!=null),N=U.current,R=e.useRef(null),F=(0,L.Z)(I,R),y=e.useRef(null),l=e.useRef(0),C=e.useState({}),x=C[0],$=C[1],d=e.useCallback(function(){var n=R.current,a=window.getComputedStyle(n),o=y.current;o.style.width=a.width,o.value=n.value||t.placeholder||"x",o.value.slice(-1)===`
`&&(o.value+=" ");var j=a["box-sizing"],v=u(a,"padding-bottom")+u(a,"padding-top"),p=u(a,"border-bottom-width")+u(a,"border-top-width"),P=o.scrollHeight-v;o.value="x";var _=o.scrollHeight-v,r=P;s&&(r=Math.max(Number(s)*_,r)),h&&(r=Math.min(Number(h)*_,r)),r=Math.max(r,_);var w=r+(j==="border-box"?v+p:0),O=Math.abs(r-P)<=1;$(function(E){return l.current<20&&(w>0&&Math.abs((E.outerHeightStyle||0)-w)>1||E.overflow!==O)?(l.current+=1,{overflow:O,outerHeightStyle:w}):E})},[h,s,t.placeholder]);e.useEffect(function(){var n=(0,H.Z)(function(){l.current=0,d()});return window.addEventListener("resize",n),function(){n.clear(),window.removeEventListener("resize",n)}},[d]),S(function(){d()}),e.useEffect(function(){l.current=0},[c]);var k=function(a){l.current=0,N||d(),m&&m(a)};return e.createElement(e.Fragment,null,e.createElement("textarea",(0,f.Z)({value:c,onChange:k,ref:F,rows:s,style:(0,f.Z)({height:x.outerHeightStyle,overflow:x.overflow?"hidden":null},b)},K)),e.createElement("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:y,tabIndex:-1,style:(0,f.Z)({},T.shadow,b)}))});const z=Z}}]);

//# sourceMappingURL=textareaautosize.ce57eeffc01edc2cd767.js.map