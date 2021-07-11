(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[5111],{45269:(st,F,m)=>{"use strict";m.d(F,{l_:()=>J,AW:()=>q,F0:()=>C,rs:()=>nt,s6:()=>h,LX:()=>g,TH:()=>S});var y=m(39975),p=m(7104),d=m(18815),Z=m(46403),M=m(52686),_=m(85399),j=m(51184),A=m.n(j),k=m(87764),V=function(e){var n=(0,Z.Z)();return n.displayName=e,n},b=V("Router-History"),X=function(e){var n=(0,Z.Z)();return n.displayName=e,n},h=X("Router"),C=function(t){(0,y.Z)(e,t),e.computeRootMatch=function(r){return{path:"/",url:"/",params:{},isExact:r==="/"}};function e(o){var r;return r=t.call(this,o)||this,r.state={location:o.history.location},r._isMounted=!1,r._pendingLocation=null,o.staticContext||(r.unlisten=o.history.listen(function(a){r._isMounted?r.setState({location:a}):r._pendingLocation=a})),r}var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return p.createElement(h.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},p.createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},e}(p.Component),ut=function(t){(0,y.Z)(e,t);function e(){for(var o,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=t.call.apply(t,[this].concat(a))||this,o.history=(0,d.PP)(o.props),o}var n=e.prototype;return n.render=function(){return p.createElement(C,{history:this.history,children:this.props.children})},e}(p.Component),B=function(t){(0,y.Z)(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(r){this.props.onUpdate&&this.props.onUpdate.call(this,this,r)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(p.Component);function ct(t){var e=t.message,n=t.when,o=n===void 0?!0:n;return React.createElement(h.Consumer,null,function(r){if(r||invariant(!1),!o||r.staticContext)return null;var a=r.history.block;return React.createElement(B,{onMount:function(s){s.release=a(e)},onUpdate:function(s,u){u.message!==e&&(s.release(),s.release=a(e))},onUnmount:function(s){s.release()},message:e})})}if(!1)var lt;var R={},z=1e4,W=0;function G(t){if(R[t])return R[t];var e=A().compile(t);return W<z&&(R[t]=e,W++),e}function T(t,e){return t===void 0&&(t="/"),e===void 0&&(e={}),t==="/"?t:G(t)(e,{pretty:!0})}function J(t){var e=t.computedMatch,n=t.to,o=t.push,r=o===void 0?!1:o;return p.createElement(h.Consumer,null,function(a){a||(0,M.Z)(!1);var i=a.history,s=a.staticContext,u=r?i.push:i.replace,l=(0,d.ob)(e?typeof n=="string"?T(n,e.params):(0,_.Z)({},n,{pathname:T(n.pathname,e.params)}):n);return s?(u(l),null):p.createElement(B,{onMount:function(){u(l)},onUpdate:function(v,f){var E=(0,d.ob)(f.to);(0,d.Hp)(E,(0,_.Z)({},l,{key:E.key}))||u(l)},to:n})})}var N={},Q=1e4,$=0;function Y(t,e){var n=""+e.end+e.strict+e.sensitive,o=N[n]||(N[n]={});if(o[t])return o[t];var r=[],a=A()(t,r,e),i={regexp:a,keys:r};return $<Q&&(o[t]=i,$++),i}function g(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,o=n.path,r=n.exact,a=r===void 0?!1:r,i=n.strict,s=i===void 0?!1:i,u=n.sensitive,l=u===void 0?!1:u,c=[].concat(o);return c.reduce(function(v,f){if(!f&&f!=="")return null;if(v)return v;var E=Y(f,{end:a,strict:s,sensitive:l}),U=E.regexp,rt=E.keys,D=U.exec(t);if(!D)return null;var O=D[0],ot=D.slice(1),w=t===O;return a&&!w?null:{path:f,url:f==="/"&&O===""?"/":O,isExact:w,params:rt.reduce(function(H,at,it){return H[at.name]=ot[it],H},{})}},null)}function pt(t){return React.Children.count(t)===0}function ft(t,e,n){var o=t(e);return o||null}var q=function(t){(0,y.Z)(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var r=this;return p.createElement(h.Consumer,null,function(a){a||(0,M.Z)(!1);var i=r.props.location||a.location,s=r.props.computedMatch?r.props.computedMatch:r.props.path?g(i.pathname,r.props):a.match,u=(0,_.Z)({},a,{location:i,match:s}),l=r.props,c=l.children,v=l.component,f=l.render;return Array.isArray(c)&&c.length===0&&(c=null),p.createElement(h.Provider,{value:u},u.match?c?typeof c=="function"?c(u):c:v?p.createElement(v,u):f?f(u):null:typeof c=="function"?c(u):null)})},e}(p.Component);function x(t){return t.charAt(0)==="/"?t:"/"+t}function tt(t,e){return t?(0,_.Z)({},e,{pathname:x(t)+e.pathname}):e}function et(t,e){if(!t)return e;var n=x(t);return e.pathname.indexOf(n)!==0?e:(0,_.Z)({},e,{pathname:e.pathname.substr(n.length)})}function K(t){return typeof t=="string"?t:(0,d.Ep)(t)}function L(t){return function(){(0,M.Z)(!1)}}function I(){}var ht=function(t){(0,y.Z)(e,t);function e(){for(var o,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=t.call.apply(t,[this].concat(a))||this,o.handlePush=function(s){return o.navigateTo(s,"PUSH")},o.handleReplace=function(s){return o.navigateTo(s,"REPLACE")},o.handleListen=function(){return I},o.handleBlock=function(){return I},o}var n=e.prototype;return n.navigateTo=function(r,a){var i=this.props,s=i.basename,u=s===void 0?"":s,l=i.context,c=l===void 0?{}:l;c.action=a,c.location=tt(u,(0,d.ob)(r)),c.url=K(c.location)},n.render=function(){var r=this.props,a=r.basename,i=a===void 0?"":a,s=r.context,u=s===void 0?{}:s,l=r.location,c=l===void 0?"/":l,v=(0,k.Z)(r,["basename","context","location"]),f={createHref:function(U){return x(i+K(U))},action:"POP",location:et(i,(0,d.ob)(c)),push:this.handlePush,replace:this.handleReplace,go:L("go"),goBack:L("goBack"),goForward:L("goForward"),listen:this.handleListen,block:this.handleBlock};return p.createElement(C,(0,_.Z)({},v,{history:f,staticContext:u}))},e}(p.Component),nt=function(t){(0,y.Z)(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var r=this;return p.createElement(h.Consumer,null,function(a){a||(0,M.Z)(!1);var i=r.props.location||a.location,s,u;return p.Children.forEach(r.props.children,function(l){if(u==null&&p.isValidElement(l)){s=l;var c=l.props.path||l.props.from;u=c?g(i.pathname,(0,_.Z)({},l.props,{path:c})):a.match}}),u?p.cloneElement(s,{location:i,computedMatch:u}):null})},e}(p.Component);function mt(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(r){var a=r.wrappedComponentRef,i=_objectWithoutPropertiesLoose(r,["wrappedComponentRef"]);return React.createElement(h.Consumer,null,function(s){return s||invariant(!1),React.createElement(t,_extends({},i,s,{ref:a}))})};return n.displayName=e,n.WrappedComponent=t,hoistStatics(n,t)}var P=p.useContext;function vt(){return P(b)}function S(){return P(h).location}function dt(){var t=P(h).match;return t?t.params:{}}function _t(t){var e=S(),n=P(h).match;return t?g(e.pathname,t):n}if(!1)var yt,Et,Mt,gt,Pt}}]);

//# sourceMappingURL=react-router.78c15c87580f920d3780.js.map