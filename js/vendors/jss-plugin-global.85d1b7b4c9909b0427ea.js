(self.webpackChunkmaterial_ui_chameleon_gh_pages=self.webpackChunkmaterial_ui_chameleon_gh_pages||[]).push([[4227],{5081:(y,d,u)=>{"use strict";u.d(d,{Z:()=>P});var o=u(4786),c=u(9751),l="@global",a="@global ",_=function(){function n(r,t,e){this.type="global",this.at=l,this.rules=void 0,this.options=void 0,this.key=void 0,this.isProcessed=!1,this.key=r,this.options=e,this.rules=new c.RB((0,o.Z)({},e,{parent:this}));for(var s in t)this.rules.add(s,t[s]);this.rules.process()}var i=n.prototype;return i.getRule=function(t){return this.rules.get(t)},i.addRule=function(t,e,s){var f=this.rules.add(t,e,s);return f&&this.options.jss.plugins.onProcessRule(f),f},i.indexOf=function(t){return this.rules.indexOf(t)},i.toString=function(){return this.rules.toString()},n}(),v=function(){function n(r,t,e){this.type="global",this.at=l,this.options=void 0,this.rule=void 0,this.isProcessed=!1,this.key=void 0,this.key=r,this.options=e;var s=r.substr(a.length);this.rule=e.jss.createRule(s,t,(0,o.Z)({},e,{parent:this}))}var i=n.prototype;return i.toString=function(t){return this.rule?this.rule.toString(t):""},n}(),g=/\s*,\s*/g;function h(n,i){for(var r=n.split(g),t="",e=0;e<r.length;e++)t+=i+" "+r[e].trim(),r[e+1]&&(t+=", ");return t}function p(n,i){var r=n.options,t=n.style,e=t?t[l]:null;if(!!e){for(var s in e)i.addRule(s,e[s],(0,o.Z)({},r,{selector:h(s,n.selector)}));delete t[l]}}function R(n,i){var r=n.options,t=n.style;for(var e in t)if(!(e[0]!=="@"||e.substr(0,l.length)!==l)){var s=h(e.substr(l.length),n.selector);i.addRule(s,t[e],(0,o.Z)({},r,{selector:s})),delete t[e]}}function b(){function n(r,t,e){if(!r)return null;if(r===l)return new _(r,t,e);if(r[0]==="@"&&r.substr(0,a.length)===a)return new v(r,t,e);var s=e.parent;return s&&(s.type==="global"||s.options.parent&&s.options.parent.type==="global")&&(e.scoped=!1),e.scoped===!1&&(e.selector=r),null}function i(r,t){r.type!=="style"||!t||(p(r,t),R(r,t))}return{onCreateRule:n,onProcessRule:i}}const P=b}}]);

//# sourceMappingURL=jss-plugin-global.85d1b7b4c9909b0427ea.js.map