(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[8167],{45015:(M,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>L});var r=n(7104),d=n(2366),l=n(83198),s=n(30669),v=n(72365),y=n(16573),g=n(5782);const h=(0,y.Z)(({spacing:t})=>(0,g.Z)({root:{width:"100%","& > * + *":{marginTop:t(2)}}}));var E=Object.defineProperty,u=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(t,e,a)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Z=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&f(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&f(t,a,e[a]);return t};function S(t){return r.createElement(l.Z,{display:"flex",alignItems:"center"},r.createElement(l.Z,{width:"100%",mr:1},r.createElement(s.Z,Z({variant:"determinate"},t))),r.createElement(l.Z,{minWidth:35},r.createElement(v.Z,{variant:"body2",color:"textSecondary"},`${Math.round(t.value)}%`)))}function O(){const t=h(),[e,a]=r.useState(0),[I,m]=r.useState(10),i=r.useRef(null);return r.useEffect(()=>{i.current=()=>{if(e>100)a(0),m(10);else{const o=Math.random()*10,B=Math.random()*10;a(e+o),m(e+o+B)}}}),r.useEffect(()=>{const o=setInterval(()=>{i.current()},500);return()=>{clearInterval(o)}},[]),r.createElement(d.Fragment,null,r.createElement("div",{className:t.root},r.createElement(s.Z,null),r.createElement(s.Z,{color:"secondary"}),r.createElement(s.Z,{variant:"buffer",value:e,valueBuffer:I}),r.createElement(S,{value:e})))}const L=O}}]);

//# sourceMappingURL=linear.065d3d26715a7925fad7.js.map