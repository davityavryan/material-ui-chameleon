(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[8167],{45015:(P,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>y});var e=t(7104),f=t(2366),l=t(83198),a=t(30669),i=t(72365),d=t(16573),v=t(5782);const g=(0,d.Z)(({spacing:r})=>(0,v.Z)({root:{width:"100%","& > * + *":{marginTop:r(2)}}}));function h(r){return e.createElement(l.Z,{display:"flex",alignItems:"center"},e.createElement(l.Z,{width:"100%",mr:1},e.createElement(a.Z,{variant:"determinate",...r})),e.createElement(l.Z,{minWidth:35},e.createElement(i.Z,{variant:"body2",color:"textSecondary"},`${Math.round(r.value)}%`)))}function E(){const r=g(),[n,c]=e.useState(0),[Z,u]=e.useState(10),m=e.useRef(null);return e.useEffect(()=>{m.current=()=>{if(n>100)c(0),u(10);else{const s=Math.random()*10,L=Math.random()*10;c(n+s),u(n+s+L)}}}),e.useEffect(()=>{const s=setInterval(()=>{m.current()},500);return()=>{clearInterval(s)}},[]),e.createElement(f.Fragment,null,e.createElement("div",{className:r.root},e.createElement(a.Z,null),e.createElement(a.Z,{color:"secondary"}),e.createElement(a.Z,{variant:"buffer",value:n,valueBuffer:Z}),e.createElement(h,{value:n})))}const y=E}}]);

//# sourceMappingURL=linear.0c0da2d7d926f633257a.js.map