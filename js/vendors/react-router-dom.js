(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{95:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(11),a=n(39),c=n(2),i=n.n(c),o=n(151),u=n(4),l=n(40),f=n(96);i.a.Component;var s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=Object(o.b)(t.props),t}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.c,{history:this.history,children:this.props.children})},t}(i.a.Component);var v=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?Object(o.c)(e,null,null,t):e},h=function(e){return e},m=i.a.forwardRef;void 0===m&&(m=h);var y=m((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,c=Object(l.a)(e,["innerRef","navigate","onClick"]),o=c.target,f=Object(u.a)({},c,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=h!==m&&t||n,i.a.createElement("a",f)}));var b=m((function(e,t){var n=e.component,a=void 0===n?y:n,c=e.replace,o=e.to,s=e.innerRef,b=Object(l.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=e.history,r=p(v(o,e.location),e.location),l=r?n.createHref(r):"",y=Object(u.a)({},b,{href:l,navigate:function(){var t=v(o,e.location);(c?n.replace:n.push)(t)}});return h!==m?y.ref=t||s:y.innerRef=s,i.a.createElement(a,y)}))})),d=function(e){return e},j=i.a.forwardRef;void 0===j&&(j=d);j((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,c=e.activeClassName,o=void 0===c?"active":c,s=e.activeStyle,h=e.className,m=e.exact,y=e.isActive,O=e.location,w=e.sensitive,R=e.strict,g=e.style,C=e.to,E=e.innerRef,k=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=O||e.location,c=p(v(C,n),n),l=c.pathname,N=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=N?Object(r.f)(n.pathname,{path:N,exact:m,sensitive:w,strict:R}):null,K=!!(y?y(A,n):A),x=K?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(h,o):h,D=K?Object(u.a)({},g,{},s):g,J=Object(u.a)({"aria-current":K&&a||null,className:x,style:D,to:c},k);return d!==j?J.ref=t||E:J.innerRef=E,i.a.createElement(b,J)}))}))}}]);
//# sourceMappingURL=react-router-dom.js.map