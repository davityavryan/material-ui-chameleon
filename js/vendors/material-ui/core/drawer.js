(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{525:function(e,o,t){"use strict";var r=t(4),a=t(5),n=t(2),i=t(7),c=t(532),p=t(489),d=t(9),l=t(526),s=t(492),u=t(12),f=t(41),h=t(33),m={left:"right",right:"left",top:"down",bottom:"up"};var b={enter:f.b.enteringScreen,exit:f.b.leavingScreen},v=n.forwardRef((function(e,o){var t=e.anchor,d=void 0===t?"left":t,f=e.BackdropProps,v=e.children,g=e.classes,O=e.className,k=e.elevation,j=void 0===k?16:k,x=e.ModalProps,P=(x=void 0===x?{}:x).BackdropProps,w=Object(a.a)(x,["BackdropProps"]),A=e.onClose,D=e.open,B=void 0!==D&&D,N=e.PaperProps,C=void 0===N?{}:N,E=e.SlideProps,R=e.TransitionComponent,S=void 0===R?l.a:R,T=e.transitionDuration,y=void 0===T?b:T,L=e.variant,M=void 0===L?"temporary":L,z=Object(a.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),H=Object(h.a)(),I=n.useRef(!1);n.useEffect((function(){I.current=!0}),[]);var J=function(e,o){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(o)?m[o]:o}(H,d),q=n.createElement(s.a,Object(r.a)({elevation:"temporary"===M?j:0,square:!0},C,{className:Object(i.a)(g.paper,g["paperAnchor".concat(Object(u.a)(J))],C.className,"temporary"!==M&&g["paperAnchorDocked".concat(Object(u.a)(J))])}),v);if("permanent"===M)return n.createElement("div",Object(r.a)({className:Object(i.a)(g.root,g.docked,O),ref:o},z),q);var W=n.createElement(S,Object(r.a)({in:B,direction:m[J],timeout:y,appear:I.current},E),q);return"persistent"===M?n.createElement("div",Object(r.a)({className:Object(i.a)(g.root,g.docked,O),ref:o},z),W):n.createElement(c.a,Object(r.a)({BackdropProps:Object(r.a)({},f,P,{transitionDuration:y}),BackdropComponent:p.a,className:Object(i.a)(g.root,g.modal,O),open:B,onClose:A,ref:o},z,w),W)}));o.a=Object(d.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(v)}}]);
//# sourceMappingURL=drawer.js.map