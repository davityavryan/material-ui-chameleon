(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[1848],{92641:(O,f,e)=>{"use strict";e.d(f,{Z:()=>w});function u(m,L){for(var P=-1,M=Array(m);++P<m;)M[P]=L(P);return M}const s=u;var a=e(93107),i=e(82321),l=e(75554),v=e(27345),h=e(60789),g=Object.prototype,j=g.hasOwnProperty;function _(m,L){var P=(0,i.Z)(m),M=!P&&(0,a.Z)(m),R=!P&&!M&&(0,l.Z)(m),$=!P&&!M&&!R&&(0,h.Z)(m),D=P||M||R||$,b=D?s(m.length,String):[],q=b.length;for(var S in m)(L||j.call(m,S))&&!(D&&(S=="length"||R&&(S=="offset"||S=="parent")||$&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||(0,v.Z)(S,q)))&&b.push(S);return b}const w=_},74772:(O,f,e)=>{"use strict";e.d(f,{Z:()=>a});function u(i){return function(l,v,h){for(var g=-1,j=Object(l),_=h(l),w=_.length;w--;){var m=_[i?w:++g];if(v(j[m],m,j)===!1)break}return l}}var s=u();const a=s},54851:(O,f,e)=>{"use strict";e.d(f,{Z:()=>D});var u=e(62879),s=u.Z.Symbol;const a=s;var i=Object.prototype,l=i.hasOwnProperty,v=i.toString,h=a?a.toStringTag:void 0;function g(b){var q=l.call(b,h),S=b[h];try{b[h]=void 0;var Q=!0}catch(C){}var X=v.call(b);return Q&&(q?b[h]=S:delete b[h]),X}const j=g;var _=Object.prototype,w=_.toString;function m(b){return w.call(b)}const L=m;var P="[object Null]",M="[object Undefined]",R=a?a.toStringTag:void 0;function $(b){return b==null?b===void 0?M:P:R&&R in Object(b)?j(b):L(b)}const D=$},5474:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});var u=typeof global=="object"&&global&&global.Object===Object&&global;const s=u},27345:(O,f,e)=>{"use strict";e.d(f,{Z:()=>i});var u=9007199254740991,s=/^(?:0|[1-9]\d*)$/;function a(l,v){var h=typeof l;return v=v??u,!!v&&(h=="number"||h!="symbol"&&s.test(l))&&l>-1&&l%1==0&&l<v}const i=a},6315:(O,f,e)=>{"use strict";e.d(f,{Z:()=>a});var u=Object.prototype;function s(i){var l=i&&i.constructor,v=typeof l=="function"&&l.prototype||u;return i===v}const a=s},24736:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});function u(a,i){return function(l){return a(i(l))}}const s=u},62879:(O,f,e)=>{"use strict";e.d(f,{Z:()=>i});var u=e(5474),s=typeof self=="object"&&self&&self.Object===Object&&self,a=u.Z||s||Function("return this")();const i=a},14098:(O,f,e)=>{"use strict";e.d(f,{Z:()=>y});var u=e(71674),s=e(62879),a=function(){return s.Z.Date.now()};const i=a;var l=/\s/;function v(o){for(var p=o.length;p--&&l.test(o.charAt(p)););return p}const h=v;var g=/^\s+/;function j(o){return o&&o.slice(0,h(o)+1).replace(g,"")}const _=j;var w=e(54851),m=e(84462),L="[object Symbol]";function P(o){return typeof o=="symbol"||(0,m.Z)(o)&&(0,w.Z)(o)==L}const M=P;var R=0/0,$=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,b=/^0o[0-7]+$/i,q=parseInt;function S(o){if(typeof o=="number")return o;if(M(o))return R;if((0,u.Z)(o)){var p=typeof o.valueOf=="function"?o.valueOf():o;o=(0,u.Z)(p)?p+"":p}if(typeof o!="string")return o===0?o:+o;o=_(o);var E=D.test(o);return E||b.test(o)?q(o.slice(2),E?2:8):$.test(o)?R:+o}const Q=S;var X="Expected a function",C=Math.max,K=Math.min;function tt(o,p,E){var B,U,N,k,A,I,J=0,ot=!1,V=!1,G=!0;if(typeof o!="function")throw new TypeError(X);p=Q(p)||0,(0,u.Z)(E)&&(ot=!!E.leading,V="maxWait"in E,N=V?C(Q(E.maxWait)||0,p):N,G="trailing"in E?!!E.trailing:G);function rt(x){var W=B,et=U;return B=U=void 0,J=x,k=o.apply(et,W),k}function at(x){return J=x,A=setTimeout(ct,p),ot?rt(x):k}function Y(x){var W=x-I,et=x-J,lt=p-W;return V?K(lt,N-et):lt}function nt(x){var W=x-I,et=x-J;return I===void 0||W>=p||W<0||V&&et>=N}function ct(){var x=i();if(nt(x))return yt(x);A=setTimeout(ct,Y(x))}function yt(x){return A=void 0,G&&B?rt(x):(B=U=void 0,k)}function _t(){A!==void 0&&clearTimeout(A),J=0,B=I=U=A=void 0}function bt(){return A===void 0?k:yt(i())}function ft(){var x=i(),W=nt(x);if(B=arguments,U=this,I=x,W){if(A===void 0)return at(I);if(V)return clearTimeout(A),A=setTimeout(ct,p),rt(I)}return A===void 0&&(A=setTimeout(ct,p)),k}return ft.cancel=_t,ft.flush=bt,ft}const y=tt},43858:(O,f,e)=>{"use strict";e.d(f,{Z:()=>tt});function u(y,o){for(var p=-1,E=y==null?0:y.length;++p<E&&o(y[p],p,y)!==!1;);return y}const s=u;var a=e(74772),i=e(92641),l=e(6315),v=e(24736),h=(0,v.Z)(Object.keys,Object);const g=h;var j=Object.prototype,_=j.hasOwnProperty;function w(y){if(!(0,l.Z)(y))return g(y);var o=[];for(var p in Object(y))_.call(y,p)&&p!="constructor"&&o.push(p);return o}const m=w;var L=e(76975);function P(y){return(0,L.Z)(y)?(0,i.Z)(y):m(y)}const M=P;function R(y,o){return y&&(0,a.Z)(y,o,M)}const $=R;function D(y,o){return function(p,E){if(p==null)return p;if(!(0,L.Z)(p))return y(p,E);for(var B=p.length,U=o?B:-1,N=Object(p);(o?U--:++U<B)&&E(N[U],U,N)!==!1;);return p}}var b=D($);const q=b;var S=e(48594);function Q(y){return typeof y=="function"?y:S.Z}const X=Q;var C=e(82321);function K(y,o){var p=(0,C.Z)(y)?s:q;return p(y,X(o))}const tt=K},48594:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});function u(a){return a}const s=u},93107:(O,f,e)=>{"use strict";e.d(f,{Z:()=>_});var u=e(54851),s=e(84462),a="[object Arguments]";function i(w){return(0,s.Z)(w)&&(0,u.Z)(w)==a}const l=i;var v=Object.prototype,h=v.hasOwnProperty,g=v.propertyIsEnumerable,j=l(function(){return arguments}())?l:function(w){return(0,s.Z)(w)&&h.call(w,"callee")&&!g.call(w,"callee")};const _=j},82321:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});var u=Array.isArray;const s=u},76975:(O,f,e)=>{"use strict";e.d(f,{Z:()=>i});var u=e(22607),s=e(59625);function a(l){return l!=null&&(0,s.Z)(l.length)&&!(0,u.Z)(l)}const i=a},75554:(O,f,e)=>{"use strict";e.d(f,{Z:()=>_});var u=e(62879);function s(){return!1}const a=s;var i=typeof exports=="object"&&exports&&!exports.nodeType&&exports,l=i&&typeof module=="object"&&module&&!module.nodeType&&module,v=l&&l.exports===i,h=v?u.Z.Buffer:void 0,g=h?h.isBuffer:void 0,j=g||a;const _=j},22607:(O,f,e)=>{"use strict";e.d(f,{Z:()=>g});var u=e(54851),s=e(71674),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",v="[object Proxy]";function h(j){if(!(0,s.Z)(j))return!1;var _=(0,u.Z)(j);return _==i||_==l||_==a||_==v}const g=h},59625:(O,f,e)=>{"use strict";e.d(f,{Z:()=>a});var u=9007199254740991;function s(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=u}const a=s},71674:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});function u(a){var i=typeof a;return a!=null&&(i=="object"||i=="function")}const s=u},84462:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});function u(a){return a!=null&&typeof a=="object"}const s=u},60789:(O,f,e)=>{"use strict";e.d(f,{Z:()=>at});var u=e(54851),s=e(59625),a=e(84462),i="[object Arguments]",l="[object Array]",v="[object Boolean]",h="[object Date]",g="[object Error]",j="[object Function]",_="[object Map]",w="[object Number]",m="[object Object]",L="[object RegExp]",P="[object Set]",M="[object String]",R="[object WeakMap]",$="[object ArrayBuffer]",D="[object DataView]",b="[object Float32Array]",q="[object Float64Array]",S="[object Int8Array]",Q="[object Int16Array]",X="[object Int32Array]",C="[object Uint8Array]",K="[object Uint8ClampedArray]",tt="[object Uint16Array]",y="[object Uint32Array]",o={};o[b]=o[q]=o[S]=o[Q]=o[X]=o[C]=o[K]=o[tt]=o[y]=!0,o[i]=o[l]=o[$]=o[v]=o[D]=o[h]=o[g]=o[j]=o[_]=o[w]=o[m]=o[L]=o[P]=o[M]=o[R]=!1;function p(Y){return(0,a.Z)(Y)&&(0,s.Z)(Y.length)&&!!o[(0,u.Z)(Y)]}const E=p;function B(Y){return function(nt){return Y(nt)}}const U=B;var N=e(5474),k=typeof exports=="object"&&exports&&!exports.nodeType&&exports,A=k&&typeof module=="object"&&module&&!module.nodeType&&module,I=A&&A.exports===k,J=I&&N.Z.process,ot=function(){try{var Y=A&&A.require&&A.require("util").types;return Y||J&&J.binding&&J.binding("util")}catch(nt){}}();const V=ot;var G=V&&V.isTypedArray,rt=G?U(G):E;const at=rt},4618:(O,f,e)=>{"use strict";e.d(f,{Z:()=>s});function u(a){return a===void 0}const s=u},83412:(O,f,e)=>{"use strict";e.d(f,{Z:()=>In});function u(){this.__data__=[],this.size=0}const s=u;function a(t,r){return t===r||t!==t&&r!==r}const i=a;function l(t,r){for(var n=t.length;n--;)if(i(t[n][0],r))return n;return-1}const v=l;var h=Array.prototype,g=h.splice;function j(t){var r=this.__data__,n=v(r,t);if(n<0)return!1;var c=r.length-1;return n==c?r.pop():g.call(r,n,1),--this.size,!0}const _=j;function w(t){var r=this.__data__,n=v(r,t);return n<0?void 0:r[n][1]}const m=w;function L(t){return v(this.__data__,t)>-1}const P=L;function M(t,r){var n=this.__data__,c=v(n,t);return c<0?(++this.size,n.push([t,r])):n[c][1]=r,this}const R=M;function $(t){var r=-1,n=t==null?0:t.length;for(this.clear();++r<n;){var c=t[r];this.set(c[0],c[1])}}$.prototype.clear=s,$.prototype.delete=_,$.prototype.get=m,$.prototype.has=P,$.prototype.set=R;const D=$;function b(){this.__data__=new D,this.size=0}const q=b;function S(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}const Q=S;function X(t){return this.__data__.get(t)}const C=X;function K(t){return this.__data__.has(t)}const tt=K;var y=e(22607),o=e(62879),p=o.Z["__core-js_shared__"];const E=p;var B=function(){var t=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function U(t){return!!B&&B in t}const N=U;var k=e(71674),A=Function.prototype,I=A.toString;function J(t){if(t!=null){try{return I.call(t)}catch(r){}try{return t+""}catch(r){}}return""}const ot=J;var V=/[\\^$.*+?()[\]{}|]/g,G=/^\[object .+?Constructor\]$/,rt=Function.prototype,at=Object.prototype,Y=rt.toString,nt=at.hasOwnProperty,ct=RegExp("^"+Y.call(nt).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yt(t){if(!(0,k.Z)(t)||N(t))return!1;var r=(0,y.Z)(t)?ct:G;return r.test(ot(t))}const _t=yt;function bt(t,r){return t==null?void 0:t[r]}const ft=bt;function x(t,r){var n=ft(t,r);return _t(n)?n:void 0}const W=x;var et=W(o.Z,"Map");const lt=et;var Nt=W(Object,"create");const pt=Nt;function It(){this.__data__=pt?pt(null):{},this.size=0}const Jt=It;function Yt(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}const Qt=Yt;var Vt="__lodash_hash_undefined__",Xt=Object.prototype,Ct=Xt.hasOwnProperty;function Gt(t){var r=this.__data__;if(pt){var n=r[t];return n===Vt?void 0:n}return Ct.call(r,t)?r[t]:void 0}const Kt=Gt;var tr=Object.prototype,rr=tr.hasOwnProperty;function nr(t){var r=this.__data__;return pt?r[t]!==void 0:rr.call(r,t)}const er=nr;var or="__lodash_hash_undefined__";function cr(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&r===void 0?or:r,this}const ir=cr;function it(t){var r=-1,n=t==null?0:t.length;for(this.clear();++r<n;){var c=t[r];this.set(c[0],c[1])}}it.prototype.clear=Jt,it.prototype.delete=Qt,it.prototype.get=Kt,it.prototype.has=er,it.prototype.set=ir;const xt=it;function ur(){this.size=0,this.__data__={hash:new xt,map:new(lt||D),string:new xt}}const sr=ur;function ar(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}const fr=ar;function lr(t,r){var n=t.__data__;return fr(r)?n[typeof r=="string"?"string":"hash"]:n.map}const ht=lr;function pr(t){var r=ht(this,t).delete(t);return this.size-=r?1:0,r}const vr=pr;function yr(t){return ht(this,t).get(t)}const hr=yr;function dr(t){return ht(this,t).has(t)}const _r=dr;function br(t,r){var n=ht(this,t),c=n.size;return n.set(t,r),this.size+=n.size==c?0:1,this}const Zr=br;function ut(t){var r=-1,n=t==null?0:t.length;for(this.clear();++r<n;){var c=t[r];this.set(c[0],c[1])}}ut.prototype.clear=sr,ut.prototype.delete=vr,ut.prototype.get=hr,ut.prototype.has=_r,ut.prototype.set=Zr;const gr=ut;var jr=200;function mr(t,r){var n=this.__data__;if(n instanceof D){var c=n.__data__;if(!lt||c.length<jr-1)return c.push([t,r]),this.size=++n.size,this;n=this.__data__=new gr(c)}return n.set(t,r),this.size=n.size,this}const Or=mr;function st(t){var r=this.__data__=new D(t);this.size=r.size}st.prototype.clear=q,st.prototype.delete=Q,st.prototype.get=C,st.prototype.has=tt,st.prototype.set=Or;const wr=st;var xr=function(){try{var t=W(Object,"defineProperty");return t({},"",{}),t}catch(r){}}();const dt=xr;function Er(t,r,n){r=="__proto__"&&dt?dt(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n}const Zt=Er;function Ar(t,r,n){(n!==void 0&&!i(t[r],n)||n===void 0&&!(r in t))&&Zt(t,r,n)}const gt=Ar;var zr=e(74772),Et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,At=Et&&typeof module=="object"&&module&&!module.nodeType&&module,Sr=At&&At.exports===Et,zt=Sr?o.Z.Buffer:void 0,St=zt?zt.allocUnsafe:void 0;function Fr(t,r){if(r)return t.slice();var n=t.length,c=St?St(n):new t.constructor(n);return t.copy(c),c}const Pr=Fr;var Tr=o.Z.Uint8Array;const Ft=Tr;function $r(t){var r=new t.constructor(t.byteLength);return new Ft(r).set(new Ft(t)),r}const Mr=$r;function kr(t,r){var n=r?Mr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}const Rr=kr;function Dr(t,r){var n=-1,c=t.length;for(r||(r=Array(c));++n<c;)r[n]=t[n];return r}const Lr=Dr;var Pt=Object.create,Br=function(){function t(){}return function(r){if(!(0,k.Z)(r))return{};if(Pt)return Pt(r);t.prototype=r;var n=new t;return t.prototype=void 0,n}}();const Ur=Br;var Hr=e(24736),Wr=(0,Hr.Z)(Object.getPrototypeOf,Object);const Tt=Wr;var $t=e(6315);function qr(t){return typeof t.constructor=="function"&&!(0,$t.Z)(t)?Ur(Tt(t)):{}}const Nr=qr;var Mt=e(93107),kt=e(82321),jt=e(76975),Rt=e(84462);function Ir(t){return(0,Rt.Z)(t)&&(0,jt.Z)(t)}const Jr=Ir;var Yr=e(75554),Qr=e(54851),Vr="[object Object]",Xr=Function.prototype,Cr=Object.prototype,Dt=Xr.toString,Gr=Cr.hasOwnProperty,Kr=Dt.call(Object);function tn(t){if(!(0,Rt.Z)(t)||(0,Qr.Z)(t)!=Vr)return!1;var r=Tt(t);if(r===null)return!0;var n=Gr.call(r,"constructor")&&r.constructor;return typeof n=="function"&&n instanceof n&&Dt.call(n)==Kr}const rn=tn;var nn=e(60789);function en(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}const mt=en;var on=Object.prototype,cn=on.hasOwnProperty;function un(t,r,n){var c=t[r];(!(cn.call(t,r)&&i(c,n))||n===void 0&&!(r in t))&&Zt(t,r,n)}const sn=un;function an(t,r,n,c){var Z=!n;n||(n={});for(var z=-1,T=r.length;++z<T;){var d=r[z],F=c?c(n[d],t[d],d,n,t):void 0;F===void 0&&(F=t[d]),Z?Zt(n,d,F):sn(n,d,F)}return n}const fn=an;var ln=e(92641);function pn(t){var r=[];if(t!=null)for(var n in Object(t))r.push(n);return r}const vn=pn;var yn=Object.prototype,hn=yn.hasOwnProperty;function dn(t){if(!(0,k.Z)(t))return vn(t);var r=(0,$t.Z)(t),n=[];for(var c in t)c=="constructor"&&(r||!hn.call(t,c))||n.push(c);return n}const _n=dn;function bn(t){return(0,jt.Z)(t)?(0,ln.Z)(t,!0):_n(t)}const Lt=bn;function Zn(t){return fn(t,Lt(t))}const gn=Zn;function jn(t,r,n,c,Z,z,T){var d=mt(t,n),F=mt(r,n),Wt=T.get(F);if(Wt){gt(t,n,Wt);return}var H=z?z(d,F,n+"",t,r,T):void 0,vt=H===void 0;if(vt){var Ot=(0,kt.Z)(F),wt=!Ot&&(0,Yr.Z)(F),qt=!Ot&&!wt&&(0,nn.Z)(F);H=F,Ot||wt||qt?(0,kt.Z)(d)?H=d:Jr(d)?H=Lr(d):wt?(vt=!1,H=Pr(F,!0)):qt?(vt=!1,H=Rr(F,!0)):H=[]:rn(F)||(0,Mt.Z)(F)?(H=d,(0,Mt.Z)(d)?H=gn(d):(!(0,k.Z)(d)||(0,y.Z)(d))&&(H=Nr(F))):vt=!1}vt&&(T.set(F,H),Z(H,F,c,z,T),T.delete(F)),gt(t,n,H)}const mn=jn;function Bt(t,r,n,c,Z){t!==r&&(0,zr.Z)(r,function(z,T){if(Z||(Z=new wr),(0,k.Z)(z))mn(t,r,T,n,Bt,c,Z);else{var d=c?c(mt(t,T),z,T+"",t,r,Z):void 0;d===void 0&&(d=z),gt(t,T,d)}},Lt)}const On=Bt;var Ut=e(48594);function wn(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}const xn=wn;var Ht=Math.max;function En(t,r,n){return r=Ht(r===void 0?t.length-1:r,0),function(){for(var c=arguments,Z=-1,z=Ht(c.length-r,0),T=Array(z);++Z<z;)T[Z]=c[r+Z];Z=-1;for(var d=Array(r+1);++Z<r;)d[Z]=c[Z];return d[r]=n(T),xn(t,this,d)}}const An=En;function zn(t){return function(){return t}}const Sn=zn;var Fn=dt?function(t,r){return dt(t,"toString",{configurable:!0,enumerable:!1,value:Sn(r),writable:!0})}:Ut.Z;const Pn=Fn;var Tn=800,$n=16,Mn=Date.now;function kn(t){var r=0,n=0;return function(){var c=Mn(),Z=$n-(c-n);if(n=c,Z>0){if(++r>=Tn)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}var Rn=kn(Pn);const Dn=Rn;function Ln(t,r){return Dn(An(t,r,Ut.Z),t+"")}const Bn=Ln;var Un=e(27345);function Hn(t,r,n){if(!(0,k.Z)(n))return!1;var c=typeof r;return(c=="number"?(0,jt.Z)(n)&&(0,Un.Z)(r,n.length):c=="string"&&r in n)?i(n[r],t):!1}const Wn=Hn;function qn(t){return Bn(function(r,n){var c=-1,Z=n.length,z=Z>1?n[Z-1]:void 0,T=Z>2?n[2]:void 0;for(z=t.length>3&&typeof z=="function"?(Z--,z):void 0,T&&Wn(n[0],n[1],T)&&(z=Z<3?void 0:z,Z=1),r=Object(r);++c<Z;){var d=n[c];d&&t(r,d,c,z)}return r})}var Nn=qn(function(t,r,n){On(t,r,n)});const In=Nn},35711:(O,f,e)=>{"use strict";e.d(f,{Z:()=>l});var u=e(14098),s=e(71674),a="Expected a function";function i(v,h,g){var j=!0,_=!0;if(typeof v!="function")throw new TypeError(a);return(0,s.Z)(g)&&(j="leading"in g?!!g.leading:j,_="trailing"in g?!!g.trailing:_),(0,u.Z)(v,h,{leading:j,maxWait:h,trailing:_})}const l=i}}]);