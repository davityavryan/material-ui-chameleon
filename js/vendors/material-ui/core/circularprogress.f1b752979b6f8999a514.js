(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[9995],{63673:(T,x,r)=>{"use strict";r.d(x,{Z:()=>b});var c=r(85399),p=r(65917),s=r(2366),l=r(72964),M=r(47201),O=r(59731),t=44,C=function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},S=s.forwardRef(function(e,I){var a=e.classes,W=e.className,d=e.color,_=d===void 0?"primary":d,m=e.disableShrink,A=m===void 0?!1:m,f=e.size,h=f===void 0?40:f,B=e.style,v=e.thickness,o=v===void 0?3.6:v,u=e.value,k=u===void 0?0:u,D=e.variant,i=D===void 0?"indeterminate":D,R=(0,p.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),n={},y={},E={};if(i==="determinate"||i==="static"){var P=2*Math.PI*((t-o)/2);n.strokeDasharray=P.toFixed(3),E["aria-valuenow"]=Math.round(k),n.strokeDashoffset="".concat(((100-k)/100*P).toFixed(3),"px"),y.transform="rotate(-90deg)"}return s.createElement("div",(0,c.Z)({className:(0,l.default)(a.root,W,_!=="inherit"&&a["color".concat((0,O.Z)(_))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[i]),style:(0,c.Z)({width:h,height:h},y,B),ref:I,role:"progressbar"},E,R),s.createElement("svg",{className:a.svg,viewBox:"".concat(t/2," ").concat(t/2," ").concat(t," ").concat(t)},s.createElement("circle",{className:(0,l.default)(a.circle,A&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[i]),style:n,cx:t,cy:t,r:(t-o)/2,fill:"none",strokeWidth:o})))});const b=(0,M.Z)(C,{name:"MuiCircularProgress",flip:!1})(S)}}]);

//# sourceMappingURL=circularprogress.f1b752979b6f8999a514.js.map