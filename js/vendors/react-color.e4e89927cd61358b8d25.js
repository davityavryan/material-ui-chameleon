(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[5462],{6323:(Ze,D,c)=>{"use strict";c.d(D,{Z:()=>Ne});var i=c(7104),V=c(16562),m=c.n(V),v=c(61385),A=c(83412),b=c(2366),N=c(35711),Z=function(r,t,o){var e=o.getBoundingClientRect(),n=e.width,a=e.height,s=typeof r.pageX=="number"?r.pageX:r.touches[0].pageX,u=typeof r.pageY=="number"?r.pageY:r.touches[0].pageY,p=s-(o.getBoundingClientRect().left+window.pageXOffset),l=u-(o.getBoundingClientRect().top+window.pageYOffset);p<0?p=0:p>n&&(p=n),l<0?l=0:l>a&&(l=a);var h=p/n,g=1-l/a;return{h:t.h,s:h,v:g,a:t.a,source:"hsv"}},X=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function B(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function W(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function Y(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var z=function(r){Y(t,r);function t(o){B(this,t);var e=W(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o));return e.handleChange=function(n){typeof e.props.onChange=="function"&&e.throttle(e.props.onChange,Z(n,e.props.hsl,e.container),n)},e.handleMouseDown=function(n){e.handleChange(n);var a=e.getContainerRenderWindow();a.addEventListener("mousemove",e.handleChange),a.addEventListener("mouseup",e.handleMouseUp)},e.handleMouseUp=function(){e.unbindEventListeners()},e.throttle=(0,N.Z)(function(n,a,s){n(a,s)},50),e}return X(t,[{key:"componentWillUnmount",value:function(){this.throttle.cancel(),this.unbindEventListeners()}},{key:"getContainerRenderWindow",value:function(){for(var o=this.container,e=window;!e.document.contains(o)&&e.parent!==e;)e=e.parent;return e}},{key:"unbindEventListeners",value:function(){var o=this.getContainerRenderWindow();o.removeEventListener("mousemove",this.handleChange),o.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var o=this,e=this.props.style||{},n=e.color,a=e.white,s=e.black,u=e.pointer,p=e.circle,l=(0,v.ZP)({default:{color:{absolute:"0px 0px 0px 0px",background:"hsl("+this.props.hsl.h+",100%, 50%)",borderRadius:this.props.radius},white:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},black:{absolute:"0px 0px 0px 0px",boxShadow:this.props.shadow,borderRadius:this.props.radius},pointer:{position:"absolute",top:-(this.props.hsv.v*100)+100+"%",left:this.props.hsv.s*100+"%",cursor:"default"},circle:{width:"4px",height:"4px",boxShadow:`0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,borderRadius:"50%",cursor:"hand",transform:"translate(-2px, -2px)"}},custom:{color:n,white:a,black:s,pointer:u,circle:p}},{custom:!!this.props.style});return i.createElement("div",{style:l.color,ref:function(h){return o.container=h},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.createElement("style",null,`
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `),i.createElement("div",{style:l.white,className:"saturation-white"},i.createElement("div",{style:l.black,className:"saturation-black"}),i.createElement("div",{style:l.pointer},this.props.pointer?i.createElement(this.props.pointer,this.props):i.createElement("div",{style:l.circle}))))}}]),t}(b.PureComponent||b.Component);const F=z;var E={},I=function(r,t,o,e){if(typeof document=="undefined"&&!e)return null;var n=e?new e:document.createElement("canvas");n.width=o*2,n.height=o*2;var a=n.getContext("2d");return a?(a.fillStyle=r,a.fillRect(0,0,n.width,n.height),a.fillStyle=t,a.fillRect(0,0,o,o),a.translate(o,o),a.fillRect(0,0,o,o),n.toDataURL()):null},K=function(r,t,o,e){var n=r+"-"+t+"-"+o+(e?"-server":"");if(E[n])return E[n];var a=I(r,t,o,e);return E[n]=a,a},_=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e])}return r},S=function(r){var t=r.white,o=r.grey,e=r.size,n=r.renderers,a=r.borderRadius,s=r.boxShadow,u=r.children,p=(0,v.ZP)({default:{grid:{borderRadius:a,boxShadow:s,absolute:"0px 0px 0px 0px",background:"url("+K(t,o,e,n.canvas)+") center left"}}});return(0,b.isValidElement)(u)?i.cloneElement(u,_({},u.props,{style:_({},u.props.style,p.grid)})):i.createElement("div",{style:p.grid})};S.defaultProps={size:8,white:"transparent",grey:"rgba(0,0,0,.08)",renderers:{}};const P=S;var $=function(r,t,o,e){var n=e.clientWidth,a=e.clientHeight,s=typeof r.pageX=="number"?r.pageX:r.touches[0].pageX,u=typeof r.pageY=="number"?r.pageY:r.touches[0].pageY,p=s-(e.getBoundingClientRect().left+window.pageXOffset),l=u-(e.getBoundingClientRect().top+window.pageYOffset);if(t==="vertical"){var h=void 0;if(l<0)h=359;else if(l>a)h=0;else{var g=-(l*100/a)+100;h=360*g/100}if(o.h!==h)return{h,s:o.s,l:o.l,a:o.a,source:"hsl"}}else{var d=void 0;if(p<0)d=0;else if(p>n)d=359;else{var k=p*100/n;d=360*k/100}if(o.h!==d)return{h:d,s:o.s,l:o.l,a:o.a,source:"hsl"}}return null},q=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function G(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function j(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function J(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var Q=function(r){J(t,r);function t(){var o,e,n,a;G(this,t);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return a=(e=(n=j(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(u))),n),n.handleChange=function(l){var h=$(l,n.props.direction,n.props.hsl,n.container);h&&typeof n.props.onChange=="function"&&n.props.onChange(h,l)},n.handleMouseDown=function(l){n.handleChange(l),window.addEventListener("mousemove",n.handleChange),window.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseUp=function(){n.unbindEventListeners()},e),j(n,a)}return q(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var o=this,e=this.props.direction,n=e===void 0?"horizontal":e,a=(0,v.ZP)({default:{hue:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius,boxShadow:this.props.shadow},container:{padding:"0 2px",position:"relative",height:"100%",borderRadius:this.props.radius},pointer:{position:"absolute",left:this.props.hsl.h*100/360+"%"},slider:{marginTop:"1px",width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",transform:"translateX(-2px)"}},vertical:{pointer:{left:"0px",top:-(this.props.hsl.h*100/360)+100+"%"}}},{vertical:n==="vertical"});return i.createElement("div",{style:a.hue},i.createElement("div",{className:"hue-"+n,style:a.container,ref:function(s){return o.container=s},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.createElement("style",null,`
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `),i.createElement("div",{style:a.pointer},this.props.pointer?i.createElement(this.props.pointer,this.props):i.createElement("div",{style:a.slider}))))}}]),t}(b.PureComponent||b.Component);const ee=Q;var te=function(r,t,o,e,n){var a=n.clientWidth,s=n.clientHeight,u=typeof r.pageX=="number"?r.pageX:r.touches[0].pageX,p=typeof r.pageY=="number"?r.pageY:r.touches[0].pageY,l=u-(n.getBoundingClientRect().left+window.pageXOffset),h=p-(n.getBoundingClientRect().top+window.pageYOffset);if(o==="vertical"){var g=void 0;if(h<0?g=0:h>s?g=1:g=Math.round(h*100/s)/100,t.a!==g)return{h:t.h,s:t.s,l:t.l,a:g,source:"rgb"}}else{var d=void 0;if(l<0?d=0:l>a?d=1:d=Math.round(l*100/a)/100,e!==d)return{h:t.h,s:t.s,l:t.l,a:d,source:"rgb"}}return null},ne=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e])}return r},re=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function oe(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function R(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function ae(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var ie=function(r){ae(t,r);function t(){var o,e,n,a;oe(this,t);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return a=(e=(n=R(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(u))),n),n.handleChange=function(l){var h=te(l,n.props.hsl,n.props.direction,n.props.a,n.container);h&&typeof n.props.onChange=="function"&&n.props.onChange(h,l)},n.handleMouseDown=function(l){n.handleChange(l),window.addEventListener("mousemove",n.handleChange),window.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseUp=function(){n.unbindEventListeners()},n.unbindEventListeners=function(){window.removeEventListener("mousemove",n.handleChange),window.removeEventListener("mouseup",n.handleMouseUp)},e),R(n,a)}return re(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"render",value:function(){var o=this,e=this.props.rgb,n=(0,v.ZP)({default:{alpha:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},checkboard:{absolute:"0px 0px 0px 0px",overflow:"hidden",borderRadius:this.props.radius},gradient:{absolute:"0px 0px 0px 0px",background:"linear-gradient(to right, rgba("+e.r+","+e.g+","+e.b+`, 0) 0%,
           rgba(`+e.r+","+e.g+","+e.b+", 1) 100%)",boxShadow:this.props.shadow,borderRadius:this.props.radius},container:{position:"relative",height:"100%",margin:"0 3px"},pointer:{position:"absolute",left:e.a*100+"%"},slider:{width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",marginTop:"1px",transform:"translateX(-2px)"}},vertical:{gradient:{background:"linear-gradient(to bottom, rgba("+e.r+","+e.g+","+e.b+`, 0) 0%,
           rgba(`+e.r+","+e.g+","+e.b+", 1) 100%)"},pointer:{left:0,top:e.a*100+"%"}},overwrite:ne({},this.props.style)},{vertical:this.props.direction==="vertical",overwrite:!0});return i.createElement("div",{style:n.alpha},i.createElement("div",{style:n.checkboard},i.createElement(P,{renderers:this.props.renderers})),i.createElement("div",{style:n.gradient}),i.createElement("div",{style:n.container,ref:function(a){return o.container=a},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.createElement("div",{style:n.pointer},this.props.pointer?i.createElement(this.props.pointer,this.props):i.createElement("div",{style:n.slider}))))}}]),t}(b.PureComponent||b.Component);const se=ie;var le=c(14098),pe=c(43858),ue=c(46829),C=c.n(ue),L=function(r){var t=["r","g","b","a","h","s","l","v"],o=0,e=0;return(0,pe.Z)(t,function(n){if(r[n]&&(o+=1,isNaN(r[n])||(e+=1),n==="s"||n==="l")){var a=/^\d+%$/;a.test(r[n])&&(e+=1)}}),o===e?r:!1},w=function(r,t){var o=r.hex?C()(r.hex):C()(r),e=o.toHsl(),n=o.toHsv(),a=o.toRgb(),s=o.toHex();e.s===0&&(e.h=t||0,n.h=t||0);var u=s==="000000"&&a.a===0;return{hsl:e,hex:u?"transparent":"#"+s,rgb:a,hsv:n,oldHue:r.h||t||e.h,source:r.source}},he=function(r){if(r==="transparent")return!0;var t=String(r).charAt(0)==="#"?1:0;return r.length!==4+t&&r.length<7+t&&C()(r).isValid()},Xe=function(r){if(!r)return"#fff";var t=w(r);if(t.hex==="transparent")return"rgba(0,0,0,0.4)";var o=(t.rgb.r*299+t.rgb.g*587+t.rgb.b*114)/1e3;return o>=128?"#000":"#fff"},Be={hsl:{a:1,h:0,l:.5,s:1},hex:"#ff0000",rgb:{r:255,g:0,b:0,a:1},hsv:{h:0,s:1,v:1,a:1}},We=function(r,t){var o=r.replace("\xB0","");return tinycolor(t+" ("+o+")")._ok},x=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e])}return r},ce=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function de(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function fe(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function ge(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var be=function(r){var t=function(o){ge(e,o);function e(n){de(this,e);var a=fe(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.handleChange=function(s,u){var p=L(s);if(p){var l=w(s,s.h||a.state.oldHue);a.setState(l),a.props.onChangeComplete&&a.debounce(a.props.onChangeComplete,l,u),a.props.onChange&&a.props.onChange(l,u)}},a.handleSwatchHover=function(s,u){var p=L(s);if(p){var l=w(s,s.h||a.state.oldHue);a.props.onSwatchHover&&a.props.onSwatchHover(l,u)}},a.state=x({},w(n.color,0)),a.debounce=(0,le.Z)(function(s,u,p){s(u,p)},100),a}return ce(e,[{key:"render",value:function(){var n={};return this.props.onSwatchHover&&(n.onSwatchHover=this.handleSwatchHover),i.createElement(r,x({},this.props,this.state,{onChange:this.handleChange},n))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return x({},w(n.color,a.oldHue))}}]),e}(b.PureComponent||b.Component);return t.propTypes=x({},r.propTypes),t.defaultProps=x({},r.defaultProps,{color:{h:250,s:.5,l:.2,a:1}}),t};const ve=be;var M=c(4618),ye=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function me(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function we(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function xe(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function Ee(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var Ce=1,T=38,Oe=40,ke=[T,Oe],_e=function(r){return ke.indexOf(r)>-1},Se=function(r){return Number(String(r).replace(/%/g,""))},Pe=1,je=function(r){Ee(t,r);function t(o){we(this,t);var e=xe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleBlur=function(){e.state.blurValue&&e.setState({value:e.state.blurValue,blurValue:null})},e.handleChange=function(n){e.setUpdatedValue(n.target.value,n)},e.handleKeyDown=function(n){var a=Se(n.target.value);if(!isNaN(a)&&_e(n.keyCode)){var s=e.getArrowOffset(),u=n.keyCode===T?a+s:a-s;e.setUpdatedValue(u,n)}},e.handleDrag=function(n){if(e.props.dragLabel){var a=Math.round(e.props.value+n.movementX);a>=0&&a<=e.props.dragMax&&e.props.onChange&&e.props.onChange(e.getValueObjectWithLabel(a),n)}},e.handleMouseDown=function(n){e.props.dragLabel&&(n.preventDefault(),e.handleDrag(n),window.addEventListener("mousemove",e.handleDrag),window.addEventListener("mouseup",e.handleMouseUp))},e.handleMouseUp=function(){e.unbindEventListeners()},e.unbindEventListeners=function(){window.removeEventListener("mousemove",e.handleDrag),window.removeEventListener("mouseup",e.handleMouseUp)},e.state={value:String(o.value).toUpperCase(),blurValue:String(o.value).toUpperCase()},e.inputId="rc-editable-input-"+Pe++,e}return ye(t,[{key:"componentDidUpdate",value:function(o,e){this.props.value!==this.state.value&&(o.value!==this.props.value||e.value!==this.state.value)&&(this.input===document.activeElement?this.setState({blurValue:String(this.props.value).toUpperCase()}):this.setState({value:String(this.props.value).toUpperCase(),blurValue:!this.state.blurValue&&String(this.props.value).toUpperCase()}))}},{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"getValueObjectWithLabel",value:function(o){return me({},this.props.label,o)}},{key:"getArrowOffset",value:function(){return this.props.arrowOffset||Ce}},{key:"setUpdatedValue",value:function(o,e){var n=this.props.label?this.getValueObjectWithLabel(o):o;this.props.onChange&&this.props.onChange(n,e),this.setState({value:o})}},{key:"render",value:function(){var o=this,e=(0,v.ZP)({default:{wrap:{position:"relative"}},"user-override":{wrap:this.props.style&&this.props.style.wrap?this.props.style.wrap:{},input:this.props.style&&this.props.style.input?this.props.style.input:{},label:this.props.style&&this.props.style.label?this.props.style.label:{}},"dragLabel-true":{label:{cursor:"ew-resize"}}},{"user-override":!0},this.props);return i.createElement("div",{style:e.wrap},i.createElement("input",{id:this.inputId,style:e.input,ref:function(n){return o.input=n},value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,placeholder:this.props.placeholder,spellCheck:"false"}),this.props.label&&!this.props.hideLabel?i.createElement("label",{htmlFor:this.inputId,style:e.label,onMouseDown:this.handleMouseDown},this.props.label):null)}}]),t}(b.PureComponent||b.Component);const y=je;var Re=c(67918),Le=function(){function r(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&r(t.prototype,o),e&&r(t,e),t}}();function Me(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function Ue(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var U=function(r){Ue(t,r);function t(o){Me(this,t);var e=Te(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toggleViews=function(){e.state.view==="hex"?e.setState({view:"rgb"}):e.state.view==="rgb"?e.setState({view:"hsl"}):e.state.view==="hsl"&&(e.props.hsl.a===1?e.setState({view:"hex"}):e.setState({view:"rgb"}))},e.handleChange=function(n,a){n.hex?he(n.hex)&&e.props.onChange({hex:n.hex,source:"hex"},a):n.r||n.g||n.b?e.props.onChange({r:n.r||e.props.rgb.r,g:n.g||e.props.rgb.g,b:n.b||e.props.rgb.b,source:"rgb"},a):n.a?(n.a<0?n.a=0:n.a>1&&(n.a=1),e.props.onChange({h:e.props.hsl.h,s:e.props.hsl.s,l:e.props.hsl.l,a:Math.round(n.a*100)/100,source:"rgb"},a)):(n.h||n.s||n.l)&&(typeof n.s=="string"&&n.s.includes("%")&&(n.s=n.s.replace("%","")),typeof n.l=="string"&&n.l.includes("%")&&(n.l=n.l.replace("%","")),n.s==1?n.s=.01:n.l==1&&(n.l=.01),e.props.onChange({h:n.h||e.props.hsl.h,s:Number((0,M.Z)(n.s)?e.props.hsl.s:n.s),l:Number((0,M.Z)(n.l)?e.props.hsl.l:n.l),source:"hsl"},a))},e.showHighlight=function(n){n.currentTarget.style.background="#eee"},e.hideHighlight=function(n){n.currentTarget.style.background="transparent"},o.hsl.a!==1&&o.view==="hex"?e.state={view:"rgb"}:e.state={view:o.view},e}return Le(t,[{key:"render",value:function(){var o=this,e=(0,v.ZP)({default:{wrap:{paddingTop:"16px",display:"flex"},fields:{flex:"1",display:"flex",marginLeft:"-6px"},field:{paddingLeft:"6px",width:"100%"},alpha:{paddingLeft:"6px",width:"100%"},toggle:{width:"32px",textAlign:"right",position:"relative"},icon:{marginRight:"-4px",marginTop:"12px",cursor:"pointer",position:"relative"},iconHighlight:{position:"absolute",width:"24px",height:"28px",background:"#eee",borderRadius:"4px",top:"10px",left:"12px",display:"none"},input:{fontSize:"11px",color:"#333",width:"100%",borderRadius:"2px",border:"none",boxShadow:"inset 0 0 0 1px #dadada",height:"21px",textAlign:"center"},label:{textTransform:"uppercase",fontSize:"11px",lineHeight:"11px",color:"#969696",textAlign:"center",display:"block",marginTop:"12px"},svg:{fill:"#333",width:"24px",height:"24px",border:"1px transparent solid",borderRadius:"5px"}},disableAlpha:{alpha:{display:"none"}}},this.props,this.state),n=void 0;return this.state.view==="hex"?n=i.createElement("div",{style:e.fields,className:"flexbox-fix"},i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"hex",value:this.props.hex,onChange:this.handleChange}))):this.state.view==="rgb"?n=i.createElement("div",{style:e.fields,className:"flexbox-fix"},i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"r",value:this.props.rgb.r,onChange:this.handleChange})),i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"g",value:this.props.rgb.g,onChange:this.handleChange})),i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"b",value:this.props.rgb.b,onChange:this.handleChange})),i.createElement("div",{style:e.alpha},i.createElement(y,{style:{input:e.input,label:e.label},label:"a",value:this.props.rgb.a,arrowOffset:.01,onChange:this.handleChange}))):this.state.view==="hsl"&&(n=i.createElement("div",{style:e.fields,className:"flexbox-fix"},i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"h",value:Math.round(this.props.hsl.h),onChange:this.handleChange})),i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"s",value:Math.round(this.props.hsl.s*100)+"%",onChange:this.handleChange})),i.createElement("div",{style:e.field},i.createElement(y,{style:{input:e.input,label:e.label},label:"l",value:Math.round(this.props.hsl.l*100)+"%",onChange:this.handleChange})),i.createElement("div",{style:e.alpha},i.createElement(y,{style:{input:e.input,label:e.label},label:"a",value:this.props.hsl.a,arrowOffset:.01,onChange:this.handleChange})))),i.createElement("div",{style:e.wrap,className:"flexbox-fix"},n,i.createElement("div",{style:e.toggle},i.createElement("div",{style:e.icon,onClick:this.toggleViews,ref:function(a){return o.icon=a}},i.createElement(Re.Z,{style:e.svg,onMouseOver:this.showHighlight,onMouseEnter:this.showHighlight,onMouseOut:this.hideHighlight}))))}}],[{key:"getDerivedStateFromProps",value:function(o,e){return o.hsl.a!==1&&e.view==="hex"?{view:"rgb"}:null}}]),t}(i.Component);U.defaultProps={view:"hex"};const He=U;var De=function(){var r=(0,v.ZP)({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",transform:"translate(-6px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}}});return i.createElement("div",{style:r.picker})};const H=De;var Ve=function(){var r=(0,v.ZP)({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}}});return i.createElement("div",{style:r.picker})};const Ae=Ve;var O=function(r){var t=r.width,o=r.onChange,e=r.disableAlpha,n=r.rgb,a=r.hsl,s=r.hsv,u=r.hex,p=r.renderers,l=r.styles,h=l===void 0?{}:l,g=r.className,d=g===void 0?"":g,k=r.defaultView,f=(0,v.ZP)((0,A.Z)({default:{picker:{width:t,background:"#fff",borderRadius:"2px",boxShadow:"0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",boxSizing:"initial",fontFamily:"Menlo"},saturation:{width:"100%",paddingBottom:"55%",position:"relative",borderRadius:"2px 2px 0 0",overflow:"hidden"},Saturation:{radius:"2px 2px 0 0"},body:{padding:"16px 16px 12px"},controls:{display:"flex"},color:{width:"32px"},swatch:{marginTop:"6px",width:"16px",height:"16px",borderRadius:"8px",position:"relative",overflow:"hidden"},active:{absolute:"0px 0px 0px 0px",borderRadius:"8px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.1)",background:"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")",zIndex:"2"},toggles:{flex:"1"},hue:{height:"10px",position:"relative",marginBottom:"8px"},Hue:{radius:"2px"},alpha:{height:"10px",position:"relative"},Alpha:{radius:"2px"}},disableAlpha:{color:{width:"22px"},alpha:{display:"none"},hue:{marginBottom:"0px"},swatch:{width:"10px",height:"10px",marginTop:"0px"}}},h),{disableAlpha:e});return i.createElement("div",{style:f.picker,className:"chrome-picker "+d},i.createElement("div",{style:f.saturation},i.createElement(F,{style:f.Saturation,hsl:a,hsv:s,pointer:Ae,onChange:o})),i.createElement("div",{style:f.body},i.createElement("div",{style:f.controls,className:"flexbox-fix"},i.createElement("div",{style:f.color},i.createElement("div",{style:f.swatch},i.createElement("div",{style:f.active}),i.createElement(P,{renderers:p}))),i.createElement("div",{style:f.toggles},i.createElement("div",{style:f.hue},i.createElement(ee,{style:f.Hue,hsl:a,pointer:H,onChange:o})),i.createElement("div",{style:f.alpha},i.createElement(se,{style:f.Alpha,rgb:n,hsl:a,pointer:H,renderers:p,onChange:o})))),i.createElement(He,{rgb:n,hsl:a,hex:u,view:k,onChange:o,disableAlpha:e})))};O.propTypes={width:m().oneOfType([m().string,m().number]),disableAlpha:m().bool,styles:m().object,defaultView:m().oneOf(["hex","rgb","hsl"])},O.defaultProps={width:225,disableAlpha:!1,styles:{}};const Ne=ve(O)}}]);
