(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[888],{41574:(oa,w,t)=>{"use strict";t.d(w,{Z:()=>V});var Z=t(85399),B=t(65917),n=t(2366),c=t(72964),W=t(72208),A=t(47201),e=t(65804),N=t(54950),d=t(59731),b=t(30667),z=function(a){var p=a.palette.type==="light"?a.palette.grey[300]:a.palette.grey[700],s=(0,e.U1)(a.palette.text.primary,.26);return{root:{fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.getContrastText(p),backgroundColor:p,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:a.palette.type==="light"?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)},"& $avatarColorPrimary":{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark},"& $avatarColorSecondary":{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:a.palette.primary.main,color:a.palette.primary.contrastText},colorSecondary:{backgroundColor:a.palette.secondary.main,color:a.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,e._4)(p,.08)},"&:active":{boxShadow:a.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,e._4)(a.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,e._4)(a.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,e._4)(p,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,e._4)(a.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,e._4)(a.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat(a.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,e.U1)(a.palette.text.primary,a.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:a.palette.primary.main,border:"1px solid ".concat(a.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,e.U1)(a.palette.primary.main,a.palette.action.hoverOpacity)}},outlinedSecondary:{color:a.palette.secondary.main,border:"1px solid ".concat(a.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,e.U1)(a.palette.secondary.main,a.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:a.palette.type==="light"?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:s,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,e.U1)(s,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,e.U1)(a.palette.primary.contrastText,.7),"&:hover, &:active":{color:a.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,e.U1)(a.palette.secondary.contrastText,.7),"&:hover, &:active":{color:a.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,e.U1)(a.palette.primary.main,.7),"&:hover, &:active":{color:a.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,e.U1)(a.palette.secondary.main,.7),"&:hover, &:active":{color:a.palette.secondary.main}}}};function _(g){return g.key==="Backspace"||g.key==="Delete"}var F=n.forwardRef(function(a,p){var s=a.avatar,o=a.classes,j=a.className,C=a.clickable,E=a.color,r=E===void 0?"default":E,H=a.component,f=a.deleteIcon,k=a.disabled,P=k===void 0?!1:k,v=a.icon,X=a.label,h=a.onClick,i=a.onDelete,D=a.onKeyDown,S=a.onKeyUp,I=a.size,G=I===void 0?"medium":I,x=a.variant,R=x===void 0?"default":x,J=(0,B.Z)(a,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),m=n.useRef(null),Q=(0,N.Z)(m,p),O=function(l){l.stopPropagation(),i&&i(l)},Y=function(l){l.currentTarget===l.target&&_(l)&&l.preventDefault(),D&&D(l)},q=function(l){l.currentTarget===l.target&&(i&&_(l)?i(l):l.key==="Escape"&&m.current&&m.current.blur()),S&&S(l)},y=C!==!1&&h?!0:C,u=G==="small",T=H||(y?b.Z:"div"),aa=T===b.Z?{component:"div"}:{},U=null;if(i){var K=(0,c.default)(r!=="default"&&(R==="default"?o["deleteIconColor".concat((0,d.Z)(r))]:o["deleteIconOutlinedColor".concat((0,d.Z)(r))]),u&&o.deleteIconSmall);U=f&&n.isValidElement(f)?n.cloneElement(f,{className:(0,c.default)(f.props.className,o.deleteIcon,K),onClick:O}):n.createElement(W.Z,{className:(0,c.default)(o.deleteIcon,K),onClick:O})}var $=null;s&&n.isValidElement(s)&&($=n.cloneElement(s,{className:(0,c.default)(o.avatar,s.props.className,u&&o.avatarSmall,r!=="default"&&o["avatarColor".concat((0,d.Z)(r))])}));var L=null;return v&&n.isValidElement(v)&&(L=n.cloneElement(v,{className:(0,c.default)(o.icon,v.props.className,u&&o.iconSmall,r!=="default"&&o["iconColor".concat((0,d.Z)(r))])})),n.createElement(T,(0,Z.Z)({role:y||i?"button":void 0,className:(0,c.default)(o.root,j,r!=="default"&&[o["color".concat((0,d.Z)(r))],y&&o["clickableColor".concat((0,d.Z)(r))],i&&o["deletableColor".concat((0,d.Z)(r))]],R!=="default"&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[r]],P&&o.disabled,u&&o.sizeSmall,y&&o.clickable,i&&o.deletable),"aria-disabled":P?!0:void 0,tabIndex:y||i?0:void 0,onClick:h,onKeyDown:Y,onKeyUp:q,ref:Q},aa,J),$||L,n.createElement("span",{className:(0,c.default)(o.label,u&&o.labelSmall)},X),U)});const V=(0,A.Z)(z,{name:"MuiChip"})(F)}}]);

//# sourceMappingURL=chip.77a5ca38610ac75b8f25.js.map