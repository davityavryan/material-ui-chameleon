(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[70],{46829:(k,F,G)=>{var w;(function(c){var L=/^\s+/,O=/\s+$/,j=0,f=c.round,p=c.min,m=c.max,R=c.random;function s(e,r){if(e=e||"",r=r||{},e instanceof s)return e;if(!(this instanceof s))return new s(e,r);var t=z(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=f(100*this._a)/100,this._format=r.format||t.format,this._gradientType=r.gradientType,this._r<1&&(this._r=f(this._r)),this._g<1&&(this._g=f(this._g)),this._b<1&&(this._b=f(this._b)),this._ok=t.ok,this._tc_id=j++}s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),r,t,i,a,n,h;return r=e.r/255,t=e.g/255,i=e.b/255,r<=.03928?a=r/12.92:a=c.pow((r+.055)/1.055,2.4),t<=.03928?n=t/12.92:n=c.pow((t+.055)/1.055,2.4),i<=.03928?h=i/12.92:h=c.pow((i+.055)/1.055,2.4),.2126*a+.7152*n+.0722*h},setAlpha:function(e){return this._a=P(e),this._roundA=f(100*this._a)/100,this},toHsv:function(){var e=C(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=C(this._r,this._g,this._b),r=f(e.h*360),t=f(e.s*100),i=f(e.v*100);return this._a==1?"hsv("+r+", "+t+"%, "+i+"%)":"hsva("+r+", "+t+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=T(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=T(this._r,this._g,this._b),r=f(e.h*360),t=f(e.s*100),i=f(e.l*100);return this._a==1?"hsl("+r+", "+t+"%, "+i+"%)":"hsla("+r+", "+t+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return E(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return q(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:f(this._r),g:f(this._g),b:f(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+f(this._r)+", "+f(this._g)+", "+f(this._b)+")":"rgba("+f(this._r)+", "+f(this._g)+", "+f(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:f(u(this._r,255)*100)+"%",g:f(u(this._g,255)*100)+"%",b:f(u(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+f(u(this._r,255)*100)+"%, "+f(u(this._g,255)*100)+"%, "+f(u(this._b,255)*100)+"%)":"rgba("+f(u(this._r,255)*100)+"%, "+f(u(this._g,255)*100)+"%, "+f(u(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:ne[E(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var r="#"+I(this._r,this._g,this._b,this._a),t=r,i=this._gradientType?"GradientType = 1, ":"";if(e){var a=s(e);t="#"+I(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+r+",endColorstr="+t+")"},toString:function(e){var r=!!e;e=e||this._format;var t=!1,i=this._a<1&&this._a>=0,a=!r&&i&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return s(this.toString())},_applyModification:function(e,r){var t=e.apply(null,[this].concat([].slice.call(r)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(K,arguments)},brighten:function(){return this._applyModification(X,arguments)},darken:function(){return this._applyModification(Z,arguments)},desaturate:function(){return this._applyModification($,arguments)},saturate:function(){return this._applyModification(V,arguments)},greyscale:function(){return this._applyModification(W,arguments)},spin:function(){return this._applyModification(J,arguments)},_applyCombination:function(e,r){return e.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(re,arguments)},complement:function(){return this._applyCombination(Q,arguments)},monochromatic:function(){return this._applyCombination(ie,arguments)},splitcomplement:function(){return this._applyCombination(te,arguments)},triad:function(){return this._applyCombination(Y,arguments)},tetrad:function(){return this._applyCombination(ee,arguments)}},s.fromRatio=function(e,r){if(typeof e=="object"){var t={};for(var i in e)e.hasOwnProperty(i)&&(i==="a"?t[i]=e[i]:t[i]=A(e[i]));e=t}return s(e,r)};function z(e){var r={r:0,g:0,b:0},t=1,i=null,a=null,n=null,h=!1,l=!1;return typeof e=="string"&&(e=he(e)),typeof e=="object"&&(y(e.r)&&y(e.g)&&y(e.b)?(r=D(e.r,e.g,e.b),h=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):y(e.h)&&y(e.s)&&y(e.v)?(i=A(e.s),a=A(e.v),r=U(e.h,i,a),h=!0,l="hsv"):y(e.h)&&y(e.s)&&y(e.l)&&(i=A(e.s),n=A(e.l),r=M(e.h,i,n),h=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=P(t),{ok:h,format:e.format||l,r:p(255,m(r.r,0)),g:p(255,m(r.g,0)),b:p(255,m(r.b,0)),a:t}}function D(e,r,t){return{r:u(e,255)*255,g:u(r,255)*255,b:u(t,255)*255}}function T(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);var i=m(e,r,t),a=p(e,r,t),n,h,l=(i+a)/2;if(i==a)n=h=0;else{var g=i-a;switch(h=l>.5?g/(2-i-a):g/(i+a),i){case e:n=(r-t)/g+(r<t?6:0);break;case r:n=(t-e)/g+2;break;case t:n=(e-r)/g+4;break}n/=6}return{h:n,s:h,l}}function M(e,r,t){var i,a,n;e=u(e,360),r=u(r,100),t=u(t,100);function h(b,x,v){return v<0&&(v+=1),v>1&&(v-=1),v<1/6?b+(x-b)*6*v:v<1/2?x:v<2/3?b+(x-b)*(2/3-v)*6:b}if(r===0)i=a=n=t;else{var l=t<.5?t*(1+r):t+r-t*r,g=2*t-l;i=h(g,l,e+1/3),a=h(g,l,e),n=h(g,l,e-1/3)}return{r:i*255,g:a*255,b:n*255}}function C(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);var i=m(e,r,t),a=p(e,r,t),n,h,l=i,g=i-a;if(h=i===0?0:g/i,i==a)n=0;else{switch(i){case e:n=(r-t)/g+(r<t?6:0);break;case r:n=(t-e)/g+2;break;case t:n=(e-r)/g+4;break}n/=6}return{h:n,s:h,v:l}}function U(e,r,t){e=u(e,360)*6,r=u(r,100),t=u(t,100);var i=c.floor(e),a=e-i,n=t*(1-r),h=t*(1-a*r),l=t*(1-(1-a)*r),g=i%6,b=[t,h,n,n,l,t][g],x=[l,t,t,h,n,n][g],v=[n,n,l,t,t,h][g];return{r:b*255,g:x*255,b:v*255}}function E(e,r,t,i){var a=[d(f(e).toString(16)),d(f(r).toString(16)),d(f(t).toString(16))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function q(e,r,t,i,a){var n=[d(f(e).toString(16)),d(f(r).toString(16)),d(f(t).toString(16)),d(N(i))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function I(e,r,t,i){var a=[d(N(i)),d(f(e).toString(16)),d(f(r).toString(16)),d(f(t).toString(16))];return a.join("")}s.equals=function(e,r){return!e||!r?!1:s(e).toRgbString()==s(r).toRgbString()},s.random=function(){return s.fromRatio({r:R(),g:R(),b:R()})};function $(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.s-=r/100,t.s=S(t.s),s(t)}function V(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.s+=r/100,t.s=S(t.s),s(t)}function W(e){return s(e).desaturate(100)}function K(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.l+=r/100,t.l=S(t.l),s(t)}function X(e,r){r=r===0?0:r||10;var t=s(e).toRgb();return t.r=m(0,p(255,t.r-f(255*-(r/100)))),t.g=m(0,p(255,t.g-f(255*-(r/100)))),t.b=m(0,p(255,t.b-f(255*-(r/100)))),s(t)}function Z(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.l-=r/100,t.l=S(t.l),s(t)}function J(e,r){var t=s(e).toHsl(),i=(t.h+r)%360;return t.h=i<0?360+i:i,s(t)}function Q(e){var r=s(e).toHsl();return r.h=(r.h+180)%360,s(r)}function Y(e){var r=s(e).toHsl(),t=r.h;return[s(e),s({h:(t+120)%360,s:r.s,l:r.l}),s({h:(t+240)%360,s:r.s,l:r.l})]}function ee(e){var r=s(e).toHsl(),t=r.h;return[s(e),s({h:(t+90)%360,s:r.s,l:r.l}),s({h:(t+180)%360,s:r.s,l:r.l}),s({h:(t+270)%360,s:r.s,l:r.l})]}function te(e){var r=s(e).toHsl(),t=r.h;return[s(e),s({h:(t+72)%360,s:r.s,l:r.l}),s({h:(t+216)%360,s:r.s,l:r.l})]}function re(e,r,t){r=r||6,t=t||30;var i=s(e).toHsl(),a=360/t,n=[s(e)];for(i.h=(i.h-(a*r>>1)+720)%360;--r;)i.h=(i.h+a)%360,n.push(s(i));return n}function ie(e,r){r=r||6;for(var t=s(e).toHsv(),i=t.h,a=t.s,n=t.v,h=[],l=1/r;r--;)h.push(s({h:i,s:a,v:n})),n=(n+l)%1;return h}s.mix=function(e,r,t){t=t===0?0:t||50;var i=s(e).toRgb(),a=s(r).toRgb(),n=t/100,h={r:(a.r-i.r)*n+i.r,g:(a.g-i.g)*n+i.g,b:(a.b-i.b)*n+i.b,a:(a.a-i.a)*n+i.a};return s(h)},s.readability=function(e,r){var t=s(e),i=s(r);return(c.max(t.getLuminance(),i.getLuminance())+.05)/(c.min(t.getLuminance(),i.getLuminance())+.05)},s.isReadable=function(e,r,t){var i=s.readability(e,r),a,n;switch(n=!1,a=ue(t),a.level+a.size){case"AAsmall":case"AAAlarge":n=i>=4.5;break;case"AAlarge":n=i>=3;break;case"AAAsmall":n=i>=7;break}return n},s.mostReadable=function(e,r,t){var i=null,a=0,n,h,l,g;t=t||{},h=t.includeFallbackColors,l=t.level,g=t.size;for(var b=0;b<r.length;b++)n=s.readability(e,r[b]),n>a&&(a=n,i=s(r[b]));return s.isReadable(e,i,{level:l,size:g})||!h?i:(t.includeFallbackColors=!1,s.mostReadable(e,["#fff","#000"],t))};var H=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ne=s.hexNames=ae(H);function ae(e){var r={};for(var t in e)e.hasOwnProperty(t)&&(r[e[t]]=t);return r}function P(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function u(e,r){se(e)&&(e="100%");var t=fe(e);return e=p(r,m(0,parseFloat(e))),t&&(e=parseInt(e*r,10)/100),c.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function S(e){return p(1,m(0,e))}function o(e){return parseInt(e,16)}function se(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function fe(e){return typeof e=="string"&&e.indexOf("%")!=-1}function d(e){return e.length==1?"0"+e:""+e}function A(e){return e<=1&&(e=e*100+"%"),e}function N(e){return c.round(parseFloat(e)*255).toString(16)}function B(e){return o(e)/255}var _=function(){var e="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",t="(?:"+r+")|(?:"+e+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function y(e){return!!_.CSS_UNIT.exec(e)}function he(e){e=e.replace(L,"").replace(O,"").toLowerCase();var r=!1;if(H[e])e=H[e],r=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=_.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=_.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=_.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=_.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=_.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=_.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=_.hex8.exec(e))?{r:o(t[1]),g:o(t[2]),b:o(t[3]),a:B(t[4]),format:r?"name":"hex8"}:(t=_.hex6.exec(e))?{r:o(t[1]),g:o(t[2]),b:o(t[3]),format:r?"name":"hex"}:(t=_.hex4.exec(e))?{r:o(t[1]+""+t[1]),g:o(t[2]+""+t[2]),b:o(t[3]+""+t[3]),a:B(t[4]+""+t[4]),format:r?"name":"hex8"}:(t=_.hex3.exec(e))?{r:o(t[1]+""+t[1]),g:o(t[2]+""+t[2]),b:o(t[3]+""+t[3]),format:r?"name":"hex"}:!1}function ue(e){var r,t;return e=e||{level:"AA",size:"small"},r=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:r,size:t}}k.exports?k.exports=s:(w=function(){return s}.call(F,G,F,k),w!==void 0&&(k.exports=w))})(Math)}}]);

//# sourceMappingURL=tinycolor2.bc89be23d5be9a2c4164.js.map