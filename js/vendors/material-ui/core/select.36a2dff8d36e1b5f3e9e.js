(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[9040],{9771:(ze,ce,a)=>{"use strict";a.d(ce,{Z:()=>je});var p=a(85399),X=a(65917),l=a(2366),de=a(78537),ve=a(78667),fe=a(94980),me=a(92529),Y=a(72964),ye=a(4380),be=a(59731),he=a(20645),Ze=a(60388),Ce=a(54950),Pe=a(49747);function z(n,t){return(0,fe.Z)(t)==="object"&&t!==null?n===t:String(n)===String(t)}function Ee(n){return n==null||typeof n=="string"&&!n.trim()}var Ie=l.forwardRef(function(n,t){var U=n["aria-label"],b=n.autoFocus,P=n.autoWidth,H=n.children,u=n.classes,E=n.className,G=n.defaultValue,c=n.disabled,J=n.displayEmpty,I=n.IconComponent,h=n.inputRef,d=n.labelId,S=n.MenuProps,f=S===void 0?{}:S,m=n.multiple,v=n.name,g=n.onBlur,y=n.onChange,O=n.onClose,W=n.onFocus,Z=n.onOpen,w=n.open,D=n.readOnly,M=n.renderValue,k=n.SelectDisplayProps,x=k===void 0?{}:k,C=n.tabIndex,ne=n.type,Q=n.value,A=n.variant,F=A===void 0?"standard":A,V=(0,X.Z)(n,["aria-label","autoFocus","autoWidth","children","classes","className","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),_=(0,Pe.Z)({controlled:Q,default:G,name:"Select"}),j=(0,ve.Z)(_,2),i=j[0],te=j[1],ae=l.useRef(null),le=l.useState(null),s=le[0],Ne=le[1],Re=l.useRef(w!=null),T=Re.current,oe=l.useState(),Be=oe[0],Le=oe[1],re=l.useState(!1),Ke=re[0],Ue=re[1],He=(0,Ce.Z)(t,h);l.useImperativeHandle(He,function(){return{focus:function(){s.focus()},node:ae.current,value:i}},[s,i]),l.useEffect(function(){b&&s&&s.focus()},[b,s]),l.useEffect(function(){if(s){var e=(0,ye.Z)(s).getElementById(d);if(e){var o=function(){getSelection().isCollapsed&&s.focus()};return e.addEventListener("click",o),function(){e.removeEventListener("click",o)}}}},[d,s]);var N=function(e,o){e?Z&&Z(o):O&&O(o),T||(Le(P?null:s.clientWidth),Ue(e))},Ge=function(e){e.button===0&&(e.preventDefault(),s.focus(),N(!0,e))},Je=function(e){N(!1,e)},$=l.Children.toArray(H),Qe=function(e){var o=$.map(function(K){return K.props.value}).indexOf(e.target.value);if(o!==-1){var r=$[o];te(r.props.value),y&&y(e,r)}},Te=function(e){return function(o){m||N(!1,o);var r;if(m){r=Array.isArray(i)?i.slice():[];var K=i.indexOf(e.props.value);K===-1?r.push(e.props.value):r.splice(K,1)}else r=e.props.value;e.props.onClick&&e.props.onClick(o),i!==r&&(te(r),y&&(o.persist(),Object.defineProperty(o,"target",{writable:!0,value:{value:r,name:v}}),y(o,e)))}},$e=function(e){if(!D){var o=[" ","ArrowUp","ArrowDown","Enter"];o.indexOf(e.key)!==-1&&(e.preventDefault(),N(!0,e))}},R=s!==null&&(T?w:Ke),qe=function(e){!R&&g&&(e.persist(),Object.defineProperty(e,"target",{writable:!0,value:{value:i,name:v}}),g(e))};delete V["aria-invalid"];var B,ie,se=[],L=!1,Xe=!1;((0,Ze.vd)({value:i})||J)&&(M?B=M(i):L=!0);var Ye=$.map(function(e){if(!l.isValidElement(e))return null;var o;if(m){if(!Array.isArray(i))throw new Error((0,me.Z)(2));o=i.some(function(r){return z(r,e.props.value)}),o&&L&&se.push(e.props.children)}else o=z(i,e.props.value),o&&L&&(ie=e.props.children);return o&&(Xe=!0),l.cloneElement(e,{"aria-selected":o?"true":void 0,onClick:Te(e),onKeyUp:function(r){r.key===" "&&r.preventDefault(),e.props.onKeyUp&&e.props.onKeyUp(r)},role:"option",selected:o,value:void 0,"data-value":e.props.value})});L&&(B=m?se.join(", "):ie);var ue=Be;!P&&T&&s&&(ue=s.clientWidth);var q;typeof C!="undefined"?q=C:q=c?null:0;var pe=x.id||(v?"mui-component-select-".concat(v):void 0);return l.createElement(l.Fragment,null,l.createElement("div",(0,p.Z)({className:(0,Y.Z)(u.root,u.select,u.selectMenu,u[F],E,c&&u.disabled),ref:Ne,tabIndex:q,role:"button","aria-disabled":c?"true":void 0,"aria-expanded":R?"true":void 0,"aria-haspopup":"listbox","aria-label":U,"aria-labelledby":[d,pe].filter(Boolean).join(" ")||void 0,onKeyDown:$e,onMouseDown:c||D?null:Ge,onBlur:qe,onFocus:W},x,{id:pe}),Ee(B)?l.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):B),l.createElement("input",(0,p.Z)({value:Array.isArray(i)?i.join(","):i,name:v,ref:ae,"aria-hidden":!0,onChange:Qe,tabIndex:-1,className:u.nativeInput,autoFocus:b},V)),l.createElement(I,{className:(0,Y.Z)(u.icon,u["icon".concat((0,be.Z)(F))],R&&u.iconOpen,c&&u.disabled)}),l.createElement(he.Z,(0,p.Z)({id:"menu-".concat(v||""),anchorEl:s,open:R,onClose:Je},f,{MenuListProps:(0,p.Z)({"aria-labelledby":d,role:"listbox",disableListWrap:!0},f.MenuListProps),PaperProps:(0,p.Z)({},f.PaperProps,{style:(0,p.Z)({minWidth:ue},f.PaperProps!=null?f.PaperProps.style:null)})}),Ye))});const Se=Ie;var ge=a(42103),Oe=a(47077),We=a(47201),we=a(72149),De=a(94439),Me=a(38922),ke=a(52733),xe=a(40017),Ae=a(30825),Fe=Me.W,Ve=l.createElement(De.Z,null),_e=l.createElement(xe.Z,null),ee=l.forwardRef(function n(t,U){var b=t.autoWidth,P=b===void 0?!1:b,H=t.children,u=t.classes,E=t.displayEmpty,G=E===void 0?!1:E,c=t.IconComponent,J=c===void 0?we.Z:c,I=t.id,h=t.input,d=t.inputProps,S=t.label,f=t.labelId,m=t.labelWidth,v=m===void 0?0:m,g=t.MenuProps,y=t.multiple,O=y===void 0?!1:y,W=t.native,Z=W===void 0?!1:W,w=t.onClose,D=t.onOpen,M=t.open,k=t.renderValue,x=t.SelectDisplayProps,C=t.variant,ne=C===void 0?"standard":C,Q=(0,X.Z)(t,["autoWidth","children","classes","displayEmpty","IconComponent","id","input","inputProps","label","labelId","labelWidth","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),A=Z?ke.Z:Se,F=(0,Oe.Z)(),V=(0,ge.Z)({props:t,muiFormControl:F,states:["variant"]}),_=V.variant||ne,j=h||{standard:Ve,outlined:l.createElement(Ae.Z,{label:S,labelWidth:v}),filled:_e}[_];return l.cloneElement(j,(0,p.Z)({inputComponent:A,inputProps:(0,p.Z)({children:H,IconComponent:J,variant:_,type:void 0,multiple:O},Z?{id:I}:{autoWidth:P,displayEmpty:G,labelId:f,MenuProps:g,onClose:w,onOpen:D,open:M,renderValue:k,SelectDisplayProps:(0,p.Z)({id:I},x)},d,{classes:d?(0,de.Z)({baseClasses:u,newClasses:d.classes,Component:n}):u},h?h.props.inputProps:{}),ref:U},Q))});ee.muiName="Select";const je=(0,We.Z)(Fe,{name:"MuiSelect"})(ee)}}]);
