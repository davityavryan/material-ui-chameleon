(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[5111],{45269:(cn,j,h)=>{"use strict";h.d(j,{l_:()=>J,AW:()=>Y,F0:()=>x,rs:()=>tn,s6:()=>l,LX:()=>E,TH:()=>D});var g=h(39975),p=h(7104),d=h(18815),P=h(46403),C=h(52686),v=h(85399),V=h(51184),U=h.n(V),X=h(87764),q=function(n){var t=(0,P.Z)();return t.displayName=n,t},w=q("Router-History"),z=function(n){var t=(0,P.Z)();return t.displayName=n,t},l=z("Router"),x=function(n){(0,g.Z)(t,n),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:e==="/"}};function t(e){var o;return o=n.call(this,e)||this,o.state={location:e.history.location},o._isMounted=!1,o._pendingLocation=null,e.staticContext||(o.unlisten=e.history.listen(function(a){o._isMounted?o.setState({location:a}):o._pendingLocation=a})),o}var r=t.prototype;return r.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&this.unlisten()},r.render=function(){return p.createElement(l.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},p.createElement(w.Provider,{children:this.props.children||null,value:this.props.history}))},t}(p.Component),sn=function(n){(0,g.Z)(t,n);function t(){for(var e,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=n.call.apply(n,[this].concat(a))||this,e.history=(0,d.PP)(e.props),e}var r=t.prototype;return r.render=function(){return p.createElement(x,{history:this.history,children:this.props.children})},t}(p.Component),A=function(n){(0,g.Z)(t,n);function t(){return n.apply(this,arguments)||this}var r=t.prototype;return r.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},r.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},r.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},r.render=function(){return null},t}(p.Component);function pn(n){var t=n.message,r=n.when,e=r===void 0?!0:r;return React.createElement(l.Consumer,null,function(o){if(o||invariant(!1),!e||o.staticContext)return null;var a=o.history.block;return React.createElement(A,{onMount:function(i){i.release=a(t)},onUpdate:function(i,c){c.message!==t&&(i.release(),i.release=a(t))},onUnmount:function(i){i.release()},message:t})})}if(!1)var ln;var _={},G=1e4,L=0;function I(n){if(_[n])return _[n];var t=U().compile(n);return L<G&&(_[n]=t,L++),t}function W(n,t){return n===void 0&&(n="/"),t===void 0&&(t={}),n==="/"?n:I(n)(t,{pretty:!0})}function J(n){var t=n.computedMatch,r=n.to,e=n.push,o=e===void 0?!1:e;return p.createElement(l.Consumer,null,function(a){a||(0,C.Z)(!1);var i=a.history,c=a.staticContext,s=o?i.push:i.replace,u=(0,d.ob)(t?typeof r=="string"?W(r,t.params):(0,v.Z)({},r,{pathname:W(r.pathname,t.params)}):r);return c?(s(u),null):p.createElement(A,{onMount:function(){s(u)},onUpdate:function(y,m){var f=(0,d.ob)(m.to);(0,d.Hp)(f,(0,v.Z)({},u,{key:f.key}))||s(u)},to:r})})}var B={},K=1e4,N=0;function Q(n,t){var r=""+t.end+t.strict+t.sensitive,e=B[r]||(B[r]={});if(e[n])return e[n];var o=[],a=U()(n,o,t),i={regexp:a,keys:o};return N<K&&(e[n]=i,N++),i}function E(n,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var r=t,e=r.path,o=r.exact,a=o===void 0?!1:o,i=r.strict,c=i===void 0?!1:i,s=r.sensitive,u=s===void 0?!1:s,y=[].concat(e);return y.reduce(function(m,f){if(!f&&f!=="")return null;if(m)return m;var H=Q(f,{end:a,strict:c,sensitive:u}),en=H.regexp,rn=H.keys,k=en.exec(n);if(!k)return null;var b=k[0],on=k.slice(1),F=n===b;return a&&!F?null:{path:f,url:f==="/"&&b===""?"/":b,isExact:F,params:rn.reduce(function(O,an,un){return O[an.name]=on[un],O},{})}},null)}function hn(n){return React.Children.count(n)===0}function fn(n,t,r){var e=n(t);return e||null}var Y=function(n){(0,g.Z)(t,n);function t(){return n.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var e=this;return p.createElement(l.Consumer,null,function(o){o||(0,C.Z)(!1);var a=e.props.location||o.location,i=e.props.computedMatch?e.props.computedMatch:e.props.path?E(a.pathname,e.props):o.match,c=(0,v.Z)({},o,{location:a,match:i}),s=e.props,u=s.children,y=s.component,m=s.render;return Array.isArray(u)&&u.length===0&&(u=null),p.createElement(l.Provider,{value:c},c.match?u?typeof u=="function"?u(c):u:y?p.createElement(y,c):m?m(c):null:typeof u=="function"?u(c):null)})},t}(p.Component);function M(n){return n.charAt(0)==="/"?n:"/"+n}function $(n,t){return n?(0,v.Z)({},t,{pathname:M(n)+t.pathname}):t}function nn(n,t){if(!n)return t;var r=M(n);return t.pathname.indexOf(r)!==0?t:(0,v.Z)({},t,{pathname:t.pathname.substr(r.length)})}function S(n){return typeof n=="string"?n:(0,d.Ep)(n)}function R(n){return function(){(0,C.Z)(!1)}}function T(){}var mn=function(n){(0,g.Z)(t,n);function t(){for(var e,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=n.call.apply(n,[this].concat(a))||this,e.handlePush=function(c){return e.navigateTo(c,"PUSH")},e.handleReplace=function(c){return e.navigateTo(c,"REPLACE")},e.handleListen=function(){return T},e.handleBlock=function(){return T},e}var r=t.prototype;return r.navigateTo=function(e,o){var a=this.props,i=a.basename,c=i===void 0?"":i,s=a.context,u=s===void 0?{}:s;u.action=o,u.location=$(c,(0,d.ob)(e)),u.url=S(u.location)},r.render=function(){var e=this.props,o=e.basename,a=o===void 0?"":o,i=e.context,c=i===void 0?{}:i,s=e.location,u=s===void 0?"/":s,y=(0,X.Z)(e,["basename","context","location"]),m={createHref:function(f){return M(a+S(f))},action:"POP",location:nn(a,(0,d.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:R("go"),goBack:R("goBack"),goForward:R("goForward"),listen:this.handleListen,block:this.handleBlock};return p.createElement(x,(0,v.Z)({},y,{history:m,staticContext:c}))},t}(p.Component),tn=function(n){(0,g.Z)(t,n);function t(){return n.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var e=this;return p.createElement(l.Consumer,null,function(o){o||(0,C.Z)(!1);var a=e.props.location||o.location,i,c;return p.Children.forEach(e.props.children,function(s){if(c==null&&p.isValidElement(s)){i=s;var u=s.props.path||s.props.from;c=u?E(a.pathname,(0,v.Z)({},s.props,{path:u})):o.match}}),c?p.cloneElement(i,{location:a,computedMatch:c}):null})},t}(p.Component);function dn(n){var t="withRouter("+(n.displayName||n.name)+")",r=function(e){var o=e.wrappedComponentRef,a=_objectWithoutPropertiesLoose(e,["wrappedComponentRef"]);return React.createElement(l.Consumer,null,function(i){return i||invariant(!1),React.createElement(n,_extends({},a,i,{ref:o}))})};return r.displayName=t,r.WrappedComponent=n,hoistStatics(r,n)}var Z=p.useContext;function vn(){return Z(w)}function D(){return Z(l).location}function yn(){var n=Z(l).match;return n?n.params:{}}function gn(n){var t=D(),r=Z(l).match;return n?E(t.pathname,n):r}if(!1)var Cn,En,Zn,xn,_n}}]);