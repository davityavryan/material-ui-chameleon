(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[2235],{69225:(de,y,t)=>{"use strict";t.r(y),t.d(y,{default:()=>ee});var e=t(7104),O=t(72964),C=t(83198),A=t(76865),F=t(17054),u=t(3717),L=t(71371),k=t(38454),z=t(16238),S=t(97167),B=t(60057),M=t(91130),T=t(72365),K=t(3286),p=t(53166),x=t(7085),D=t(59304),$=t(16017),j=t(9830),G=t(88406),J=t(99420),R=t(16573),I=t(5782),Q=t(65804);const U=(0,R.Z)(({spacing:s,palette:n})=>(0,I.Z)({root:{paddingLeft:s(2),paddingRight:s(1)},highlight:n.type==="light"?{color:n.secondary.main,backgroundColor:(0,Q.$n)(n.secondary.light,.85)}:{color:n.text.primary,backgroundColor:n.secondary.dark},title:{flex:"1 1 100%"}})),V=(0,R.Z)((0,I.Z)({visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}));function i(s,n,a,l,d){return{name:s,calories:n,fat:a,carbs:l,protein:d}}const f=[i("Cupcake",305,3.7,67,4.3),i("Donut",452,25,51,4.9),i("Eclair",262,16,24,6),i("Frozen yoghurt",159,6,24,4),i("Gingerbread",356,16,49,3.9),i("Honeycomb",408,3.2,87,6.5),i("Ice cream sandwich",237,9,37,4.3),i("Jelly Bean",375,0,94,0),i("KitKat",518,26,65,7),i("Lollipop",392,.2,98,0),i("Marshmallow",318,0,81,2),i("Nougat",360,19,9,37),i("Oreo",437,18,63,4)];function H(s,n,a){return n[a]<s[a]?-1:n[a]>s[a]?1:0}function W(s,n){return s==="desc"?(a,l)=>H(a,l,n):(a,l)=>-H(a,l,n)}function X(s,n){const a=s.map((l,d)=>[l,d]);return a.sort((l,d)=>{const o=n(l[0],d[0]);return o!==0?o:l[1]-d[1]}),a.map(l=>l[0])}const Y=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function w(s){const{classes:n,onSelectAllClick:a,order:l,orderBy:d,numSelected:o,rowCount:E,onRequestSort:b}=s,Z=r=>P=>{b(P,r)};return e.createElement(k.Z,null,e.createElement(S.Z,null,e.createElement(u.Z,{padding:"checkbox"},e.createElement(p.Z,{indeterminate:o>0&&o<E,checked:E>0&&o===E,onChange:a,inputProps:{"aria-label":"select all desserts"}})),Y.map(r=>e.createElement(u.Z,{key:r.id,align:r.numeric?"right":"left",padding:r.disablePadding?"none":"default",sortDirection:d===r.id?l:!1},e.createElement(B.Z,{active:d===r.id,direction:d===r.id?l:"asc",onClick:Z(r.id)},r.label,d===r.id?e.createElement("span",{className:n.visuallyHidden},l==="desc"?"sorted descending":"sorted ascending"):null)))))}const q=s=>{const n=U(),{numSelected:a}=s;return e.createElement(M.Z,{className:(0,O.default)(n.root,{[n.highlight]:a>0})},a>0?e.createElement(T.Z,{className:n.title,color:"inherit",variant:"subtitle1",component:"div"},a," selected"):e.createElement(T.Z,{className:n.title,variant:"h6",id:"tableTitle",component:"div"},"Nutrition"),a>0?e.createElement(D.ZP,{title:"Delete"},e.createElement(x.Z,{"aria-label":"delete"},e.createElement(G.Z,null))):e.createElement(D.ZP,{title:"Filter list"},e.createElement(x.Z,{"aria-label":"filter list"},e.createElement(J.Z,null))))};function _(){const s=V(),[n,a]=e.useState("asc"),[l,d]=e.useState("calories"),[o,E]=e.useState([]),[b,Z]=e.useState(0),[r,P]=e.useState(!1),[v,te]=e.useState(5),ne=(c,h)=>{a(l===h&&n==="asc"?"desc":"asc"),d(h)},ae=c=>{if(c.target.checked){const h=f.map(m=>m.name);E(h);return}E([])},le=(c,h)=>{const m=o.indexOf(h);let g=[];m===-1?g=g.concat(o,h):m===0?g=g.concat(o.slice(1)):m===o.length-1?g=g.concat(o.slice(0,-1)):m>0&&(g=g.concat(o.slice(0,m),o.slice(m+1))),E(g)},ce=(c,h)=>{Z(h)},se=c=>{te(parseInt(c.target.value,10)),Z(0)},oe=c=>{P(c.target.checked)},re=c=>o.indexOf(c)!==-1,N=v-Math.min(v,f.length-b*v);return e.createElement(C.Z,{width:1},e.createElement(C.Z,{display:"flex",justifyContent:"flex-end",mb:2},e.createElement($.Z,{control:e.createElement(j.Z,{checked:r,onChange:oe}),label:"Dense padding"})),e.createElement(K.Z,null,e.createElement(q,{numSelected:o.length}),e.createElement(L.Z,null,e.createElement(A.Z,{"aria-labelledby":"tableTitle",size:r?"small":"medium","aria-label":"enhanced table"},e.createElement(w,{classes:s,numSelected:o.length,order:n,orderBy:l,onSelectAllClick:ae,onRequestSort:ne,rowCount:f.length}),e.createElement(F.Z,null,X(f,W(n,l)).slice(b*v,b*v+v).map((c,h)=>{const m=re(c.name),g=`enhanced-table-checkbox-${h}`;return e.createElement(S.Z,{hover:!0,onClick:ie=>le(ie,c.name),role:"checkbox","aria-checked":m,tabIndex:-1,key:c.name,selected:m},e.createElement(u.Z,{padding:"checkbox"},e.createElement(p.Z,{checked:m,inputProps:{"aria-labelledby":g}})),e.createElement(u.Z,{component:"th",id:g,scope:"row",padding:"none"},c.name),e.createElement(u.Z,{align:"right"},c.calories),e.createElement(u.Z,{align:"right"},c.fat),e.createElement(u.Z,{align:"right"},c.carbs),e.createElement(u.Z,{align:"right"},c.protein))}),N>0&&e.createElement(S.Z,{style:{height:(r?33:53)*N}},e.createElement(u.Z,{colSpan:6}))))),e.createElement(z.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:f.length,rowsPerPage:v,page:b,onChangePage:ce,onChangeRowsPerPage:se})))}const ee=_}}]);

//# sourceMappingURL=sort-select.bda220cf2a83ea47b299.js.map