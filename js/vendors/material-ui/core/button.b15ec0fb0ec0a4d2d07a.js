(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[2912],{57921:(K,E,i)=>{"use strict";i.d(E,{Z:()=>I});var h=i(65917),c=i(85399),e=i(2366),l=i(72964),z=i(47201),n=i(65804),R=i(30667),r=i(59731),k=function(o){return{root:(0,c.Z)({},o.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:o.shape.borderRadius,color:o.palette.text.primary,transition:o.transitions.create(["background-color","box-shadow","border"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,n.U1)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:o.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:o.palette.primary.main,"&:hover":{backgroundColor:(0,n.U1)(o.palette.primary.main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:o.palette.secondary.main,"&:hover":{backgroundColor:(0,n.U1)(o.palette.secondary.main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat(o.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(o.palette.action.disabledBackground)}},outlinedPrimary:{color:o.palette.primary.main,border:"1px solid ".concat((0,n.U1)(o.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(o.palette.primary.main),backgroundColor:(0,n.U1)(o.palette.primary.main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:o.palette.secondary.main,border:"1px solid ".concat((0,n.U1)(o.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(o.palette.secondary.main),backgroundColor:(0,n.U1)(o.palette.secondary.main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(o.palette.action.disabled)}},contained:{color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],boxShadow:o.shadows[2],"&:hover":{backgroundColor:o.palette.grey.A100,boxShadow:o.shadows[4],"@media (hover: none)":{boxShadow:o.shadows[2],backgroundColor:o.palette.grey[300]},"&$disabled":{backgroundColor:o.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:o.shadows[6]},"&:active":{boxShadow:o.shadows[8]},"&$disabled":{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground}},containedPrimary:{color:o.palette.primary.contrastText,backgroundColor:o.palette.primary.main,"&:hover":{backgroundColor:o.palette.primary.dark,"@media (hover: none)":{backgroundColor:o.palette.primary.main}}},containedSecondary:{color:o.palette.secondary.contrastText,backgroundColor:o.palette.secondary.main,"&:hover":{backgroundColor:o.palette.secondary.dark,"@media (hover: none)":{backgroundColor:o.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},P=e.forwardRef(function(o,$){var M=o.children,a=o.classes,T=o.className,p=o.color,d=p===void 0?"default":p,b=o.component,D=b===void 0?"button":b,u=o.disabled,g=u===void 0?!1:u,y=o.disableElevation,w=y===void 0?!1:y,x=o.disableFocusRipple,B=x===void 0?!1:x,_=o.endIcon,L=o.focusVisibleClassName,v=o.fullWidth,W=v===void 0?!1:v,S=o.size,t=S===void 0?"medium":S,f=o.startIcon,C=o.type,U=C===void 0?"button":C,m=o.variant,s=m===void 0?"text":m,Z=(0,h.Z)(o,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),A=f&&e.createElement("span",{className:(0,l.Z)(a.startIcon,a["iconSize".concat((0,r.Z)(t))])},f),N=_&&e.createElement("span",{className:(0,l.Z)(a.endIcon,a["iconSize".concat((0,r.Z)(t))])},_);return e.createElement(R.Z,(0,c.Z)({className:(0,l.Z)(a.root,a[s],T,d==="inherit"?a.colorInherit:d!=="default"&&a["".concat(s).concat((0,r.Z)(d))],t!=="medium"&&[a["".concat(s,"Size").concat((0,r.Z)(t))],a["size".concat((0,r.Z)(t))]],w&&a.disableElevation,g&&a.disabled,W&&a.fullWidth),component:D,disabled:g,focusRipple:!B,focusVisibleClassName:(0,l.Z)(a.focusVisible,L),ref:$,type:U},Z),e.createElement("span",{className:a.label},A,M,N))});const I=(0,z.Z)(k,{name:"MuiButton"})(P)}}]);

//# sourceMappingURL=button.b15ec0fb0ec0a4d2d07a.js.map