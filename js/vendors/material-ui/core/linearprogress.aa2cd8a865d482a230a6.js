(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[1021],{30669:(T,h,t)=>{"use strict";t.d(h,{Z:()=>k});var p=t(85399),C=t(65917),i=t(2366),s=t(72964),o=t(59731),D=t(47201),g=t(65804),O=t(3679),u=4,M=function(e){var c=function(n){return e.palette.type==="light"?(0,g.$n)(n,.62):(0,g._j)(n,.5)},a=c(e.palette.primary.main),l=c(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:l},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(l," 0%, ").concat(l," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(u,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(u,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(u,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}},I=i.forwardRef(function(e,c){var a=e.classes,l=e.className,m=e.color,n=m===void 0?"primary":m,b=e.value,y=e.valueBuffer,P=e.variant,r=P===void 0?"indeterminate":P,x=(0,C.Z)(e,["classes","className","color","value","valueBuffer","variant"]),E=(0,O.Z)(),d={},f={bar1:{},bar2:{}};if((r==="determinate"||r==="buffer")&&b!==void 0){d["aria-valuenow"]=Math.round(b),d["aria-valuemin"]=0,d["aria-valuemax"]=100;var _=b-100;E.direction==="rtl"&&(_=-_),f.bar1.transform="translateX(".concat(_,"%)")}if(r==="buffer"&&y!==void 0){var v=(y||0)-100;E.direction==="rtl"&&(v=-v),f.bar2.transform="translateX(".concat(v,"%)")}return i.createElement("div",(0,p.Z)({className:(0,s.Z)(a.root,a["color".concat((0,o.Z)(n))],l,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[r]),role:"progressbar"},d,{ref:c},x),r==="buffer"?i.createElement("div",{className:(0,s.Z)(a.dashed,a["dashedColor".concat((0,o.Z)(n))])}):null,i.createElement("div",{className:(0,s.Z)(a.bar,a["barColor".concat((0,o.Z)(n))],(r==="indeterminate"||r==="query")&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[r]),style:f.bar1}),r==="determinate"?null:i.createElement("div",{className:(0,s.Z)(a.bar,(r==="indeterminate"||r==="query")&&a.bar2Indeterminate,r==="buffer"?[a["color".concat((0,o.Z)(n))],a.bar2Buffer]:a["barColor".concat((0,o.Z)(n))]),style:f.bar2}))});const k=(0,D.Z)(M,{name:"MuiLinearProgress"})(I)}}]);

//# sourceMappingURL=linearprogress.aa2cd8a865d482a230a6.js.map