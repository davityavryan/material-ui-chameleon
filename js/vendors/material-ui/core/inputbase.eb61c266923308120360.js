(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[8174],{78829:(q,D,i)=>{"use strict";i.d(D,{Z:()=>ue});var E=i(65917),u=i(85399),M=i(92529),n=i(2366),C=i(72964),ee=i(42103),K=i(99604),ne=i(47201),ae=i(59731),A=i(54950),te=i(19712),oe=i(60388),ie=function(e){var g=e.palette.type==="light",c={color:"currentColor",opacity:g?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},f={opacity:"0 !important"},m={opacity:g?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:(0,u.Z)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),"&$marginDense":{paddingTop:4-1}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":f,"&::-moz-placeholder":f,"&:-ms-input-placeholder":f,"&::-ms-input-placeholder":f,"&:focus::-webkit-input-placeholder":m,"&:focus::-moz-placeholder":m,"&:focus:-ms-input-placeholder":m,"&:focus::-ms-input-placeholder":m},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:4-1},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}},le=typeof window=="undefined"?n.useEffect:n.useLayoutEffect,re=n.forwardRef(function(e,g){var c=e["aria-describedby"],f=e.autoComplete,m=e.autoFocus,a=e.classes,se=e.className,We=e.color,ce=e.defaultValue,L=e.disabled,R=e.endAdornment,we=e.error,U=e.fullWidth,fe=U===void 0?!1:U,me=e.id,k=e.inputComponent,he=k===void 0?"input":k,$=e.inputProps,r=$===void 0?{}:$,pe=e.inputRef,Ie=e.margin,z=e.multiline,x=z===void 0?!1:z,_e=e.name,_=e.onBlur,N=e.onChange,V=e.onClick,H=e.onFocus,ve=e.onKeyDown,Ee=e.onKeyUp,Ce=e.placeholder,ge=e.readOnly,X=e.renderSuffix,B=e.rows,Y=e.rowsMax,ye=e.rowsMin,h=e.startAdornment,G=e.type,O=G===void 0?"text":G,be=e.value,Pe=(0,E.Z)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),y=r.value!=null?r.value:be,De=n.useRef(y!=null),F=De.current,p=n.useRef(),Me=n.useCallback(function(s){},[]),Ae=(0,A.Z)(r.ref,Me),Re=(0,A.Z)(pe,Ae),J=(0,A.Z)(p,Re),Q=n.useState(!1),S=Q[0],W=Q[1],t=(0,K.Y)(),l=(0,ee.Z)({props:e,muiFormControl:t,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});l.focused=t?t.focused:S,n.useEffect(function(){!t&&L&&S&&(W(!1),_&&_())},[t,L,S,_]);var w=t&&t.onFilled,I=t&&t.onEmpty,v=n.useCallback(function(s){(0,oe.vd)(s)?w&&w():I&&I()},[w,I]);le(function(){F&&v({value:y})},[y,v,F]);var xe=function(o){if(l.disabled){o.stopPropagation();return}H&&H(o),r.onFocus&&r.onFocus(o),t&&t.onFocus?t.onFocus(o):W(!0)},Be=function(o){_&&_(o),r.onBlur&&r.onBlur(o),t&&t.onBlur?t.onBlur(o):W(!1)},Oe=function(o){if(!F){var j=o.target||p.current;if(j==null)throw new Error((0,M.Z)(1));v({value:j.value})}for(var T=arguments.length,Z=new Array(T>1?T-1:0),P=1;P<T;P++)Z[P-1]=arguments[P];r.onChange&&r.onChange.apply(r,[o].concat(Z)),N&&N.apply(void 0,[o].concat(Z))};n.useEffect(function(){v(p.current)},[]);var Fe=function(o){p.current&&o.currentTarget===o.target&&p.current.focus(),V&&V(o)},b=he,d=(0,u.Z)({},r,{ref:J});typeof b!="string"?d=(0,u.Z)({inputRef:J,type:O},d,{ref:null}):x?B&&!Y&&!ye?b="textarea":(d=(0,u.Z)({rows:B,rowsMax:Y},d),b=te.Z):d=(0,u.Z)({type:O},d);var Se=function(o){v(o.animationName==="mui-auto-fill-cancel"?p.current:{value:"x"})};return n.useEffect(function(){t&&t.setAdornedStart(Boolean(h))},[t,h]),n.createElement("div",(0,u.Z)({className:(0,C.Z)(a.root,a["color".concat((0,ae.Z)(l.color||"primary"))],se,l.disabled&&a.disabled,l.error&&a.error,fe&&a.fullWidth,l.focused&&a.focused,t&&a.formControl,x&&a.multiline,h&&a.adornedStart,R&&a.adornedEnd,l.margin==="dense"&&a.marginDense),onClick:Fe,ref:g},Pe),h,n.createElement(K.Z.Provider,{value:null},n.createElement(b,(0,u.Z)({"aria-invalid":l.error,"aria-describedby":c,autoComplete:f,autoFocus:m,defaultValue:ce,disabled:l.disabled,id:me,onAnimationStart:Se,name:_e,placeholder:Ce,readOnly:ge,required:l.required,rows:B,value:y,onKeyDown:ve,onKeyUp:Ee},d,{className:(0,C.Z)(a.input,r.className,l.disabled&&a.disabled,x&&a.inputMultiline,l.hiddenLabel&&a.inputHiddenLabel,h&&a.inputAdornedStart,R&&a.inputAdornedEnd,O==="search"&&a.inputTypeSearch,l.margin==="dense"&&a.inputMarginDense),onBlur:Be,onChange:Oe,onFocus:xe}))),R,X?X((0,u.Z)({},l,{startAdornment:h})):null)});const ue=(0,ne.Z)(ie,{name:"MuiInputBase"})(re)},60388:(q,D,i)=>{"use strict";i.d(D,{vd:()=>u,B7:()=>M});function E(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function u(n){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return n&&(E(n.value)&&n.value!==""||C&&E(n.defaultValue)&&n.defaultValue!=="")}function M(n){return n.startAdornment}}}]);

//# sourceMappingURL=inputbase.eb61c266923308120360.js.map