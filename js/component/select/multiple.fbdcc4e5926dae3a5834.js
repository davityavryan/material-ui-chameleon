(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[1901],{49004:(O,Z,t)=>{"use strict";t.r(Z),t.d(Z,{default:()=>H});var l=t(7104),g=t(72964),u=t(94439),d=t(26060),r=t(75223),o=t(37375),C=t(22620),i=t(9771),b=t(53166),x=t(41574),N=t(3679),S=t(16573),I=t(5782);const M=(0,S.Z)(({spacing:a})=>(0,I.Z)({formControl:{margin:a(1),minWidth:120,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:a(3)}})),P=48,T=8,p={PaperProps:{style:{maxHeight:P*4.5+T,width:250}}},c=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function v(a,s,{typography:n}){return{fontWeight:s.indexOf(a)===-1?n.fontWeightRegular:n.fontWeightMedium}}function W(){const a=M(),s=(0,N.Z)(),[n,y]=l.useState([]),h=e=>{y(e.target.value)},k=e=>{const{options:m}=e.target,f=[];for(let E=0,A=m.length;E<A;E+=1)m[E].selected&&f.push(m[E].value);y(f)};return l.createElement("div",null,l.createElement(o.Z,{className:a.formControl},l.createElement(d.Z,{id:"demo-mutiple-name-label"},"Name"),l.createElement(i.Z,{labelId:"demo-mutiple-name-label",id:"demo-mutiple-name",multiple:!0,value:n,onChange:h,input:l.createElement(u.Z,null),MenuProps:p},c.map(e=>l.createElement(r.Z,{key:e,value:e,style:v(e,n,s)},e)))),l.createElement(o.Z,{className:a.formControl},l.createElement(d.Z,{id:"demo-mutiple-checkbox-label"},"Tag"),l.createElement(i.Z,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:n,onChange:h,input:l.createElement(u.Z,null),renderValue:e=>e.join(", "),MenuProps:p},c.map(e=>l.createElement(r.Z,{key:e,value:e},l.createElement(b.Z,{checked:n.indexOf(e)>-1}),l.createElement(C.Z,{primary:e}))))),l.createElement(o.Z,{className:a.formControl},l.createElement(d.Z,{id:"demo-mutiple-chip-label"},"Chip"),l.createElement(i.Z,{labelId:"demo-mutiple-chip-label",id:"demo-mutiple-chip",multiple:!0,value:n,onChange:h,input:l.createElement(u.Z,{id:"select-multiple-chip"}),renderValue:e=>l.createElement("div",{className:a.chips},e.map(m=>l.createElement(x.Z,{key:m,label:m,className:a.chip}))),MenuProps:p},c.map(e=>l.createElement(r.Z,{key:e,value:e,style:v(e,n,s)},e)))),l.createElement(o.Z,{className:(0,g.Z)(a.formControl,a.noLabel)},l.createElement(i.Z,{multiple:!0,displayEmpty:!0,value:n,onChange:h,input:l.createElement(u.Z,null),renderValue:e=>e.length===0?l.createElement("em",null,"Placeholder"):e.join(", "),MenuProps:p,inputProps:{"aria-label":"Without label"}},l.createElement(r.Z,{disabled:!0,value:""},l.createElement("em",null,"Placeholder")),c.map(e=>l.createElement(r.Z,{key:e,value:e,style:v(e,n,s)},e)))),l.createElement(o.Z,{className:a.formControl},l.createElement(d.Z,{shrink:!0,htmlFor:"select-multiple-native"},"Native"),l.createElement(i.Z,{multiple:!0,native:!0,value:n,onChange:k,inputProps:{id:"select-multiple-native"}},c.map(e=>l.createElement("option",{key:e,value:e},e)))))}const H=W}}]);

//# sourceMappingURL=multiple.fbdcc4e5926dae3a5834.js.map