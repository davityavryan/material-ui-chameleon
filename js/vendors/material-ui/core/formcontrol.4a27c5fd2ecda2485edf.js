(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[9758],{37375:(f,a,e)=>{"use strict";e.d(a,{Z:()=>b});var n=e(85399),o=e(65917),t=e(2366),u=e(72964),d=e(60388),_=e(47201),i=e(59731),m=e(42362),Z=e(99604),$={root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},x=t.forwardRef(function(r,y){var c=r.children,v=r.classes,N=r.className,P=r.color,z=P===void 0?"primary":P,D=r.component,X=D===void 0?"div":D,h=r.disabled,M=h===void 0?!1:h,O=r.error,j=O===void 0?!1:O,W=r.fullWidth,B=W===void 0?!1:W,A=r.focused,F=r.hiddenLabel,Y=F===void 0?!1:F,p=r.margin,E=p===void 0?"none":p,L=r.required,G=L===void 0?!1:L,H=r.size,R=r.variant,J=R===void 0?"standard":R,Q=(0,o.Z)(r,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),T=t.useState(function(){var l=!1;return c&&t.Children.forEach(c,function(s){if(!!(0,m.Z)(s,["Input","Select"])){var U=(0,m.Z)(s,["Select"])?s.props.input:s;U&&(0,d.B7)(U.props)&&(l=!0)}}),l}),V=T[0],k=T[1],g=t.useState(function(){var l=!1;return c&&t.Children.forEach(c,function(s){!(0,m.Z)(s,["Input","Select"])||(0,d.vd)(s.props,!0)&&(l=!0)}),l}),w=g[0],I=g[1],K=t.useState(!1),q=K[0],C=K[1],S=A!==void 0?A:q;M&&S&&C(!1);var ee;if(!1)var ae;var te=t.useCallback(function(){I(!0)},[]),re=t.useCallback(function(){I(!1)},[]),oe={adornedStart:V,setAdornedStart:k,color:z,disabled:M,error:j,filled:w,focused:S,fullWidth:B,hiddenLabel:Y,margin:(H==="small"?"dense":void 0)||E,onBlur:function(){C(!1)},onEmpty:re,onFilled:te,onFocus:function(){C(!0)},registerEffect:ee,required:G,variant:J};return t.createElement(Z.Z.Provider,{value:oe},t.createElement(X,(0,n.Z)({className:(0,u.default)(v.root,N,E!=="none"&&v["margin".concat((0,i.Z)(E))],B&&v.fullWidth),ref:y},Q),c))});const b=(0,_.Z)($,{name:"MuiFormControl"})(x)},99604:(f,a,e)=>{"use strict";e.d(a,{Y:()=>t,Z:()=>u});var n=e(2366),o=n.createContext();function t(){return n.useContext(o)}const u=o},42103:(f,a,e)=>{"use strict";e.d(a,{Z:()=>n});function n(o){var t=o.props,u=o.states,d=o.muiFormControl;return u.reduce(function(_,i){return _[i]=t[i],d&&typeof t[i]=="undefined"&&(_[i]=d[i]),_},{})}},47077:(f,a,e)=>{"use strict";e.d(a,{Z:()=>t});var n=e(2366),o=e(99604);function t(){return n.useContext(o.Z)}}}]);

//# sourceMappingURL=formcontrol.4a27c5fd2ecda2485edf.js.map