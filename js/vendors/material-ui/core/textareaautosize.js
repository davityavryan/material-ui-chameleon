(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{508:function(e,t,r){"use strict";var n=r(4),a=r(5),o=r(2),u=r(104),i=r(17);function l(e,t){return parseInt(e[t],10)||0}var s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,c={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d=o.forwardRef((function(e,t){var r=e.onChange,d=e.rows,f=e.rowsMax,w=e.rowsMin,h=void 0===w?1:w,v=e.style,b=e.value,m=Object(a.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),p=d||h,g=o.useRef(null!=b).current,y=o.useRef(null),x=Object(i.a)(t,y),E=o.useRef(null),M=o.useRef(0),O=o.useState({}),j=O[0],C=O[1],H=o.useCallback((function(){var t=y.current,r=window.getComputedStyle(t),n=E.current;n.style.width=r.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var a=r["box-sizing"],o=l(r,"padding-bottom")+l(r,"padding-top"),u=l(r,"border-bottom-width")+l(r,"border-top-width"),i=n.scrollHeight-o;n.value="x";var s=n.scrollHeight-o,c=i;p&&(c=Math.max(Number(p)*s,c)),f&&(c=Math.min(Number(f)*s,c));var d=(c=Math.max(c,s))+("border-box"===a?o+u:0),w=Math.abs(c-i)<=1;C((function(e){return M.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==w)?(M.current+=1,{overflow:w,outerHeightStyle:d}):e}))}),[f,p,e.placeholder]);o.useEffect((function(){var e=Object(u.a)((function(){M.current=0,H()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[H]),s((function(){H()})),o.useEffect((function(){M.current=0}),[b]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(n.a)({value:b,onChange:function(e){M.current=0,g||H(),r&&r(e)},ref:x,rows:p,style:Object(n.a)({height:j.outerHeightStyle,overflow:j.overflow?"hidden":null},v)},m)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:E,tabIndex:-1,style:Object(n.a)({},c,v)}))}));t.a=d}}]);
//# sourceMappingURL=textareaautosize.js.map