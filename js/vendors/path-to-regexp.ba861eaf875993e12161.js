(self.webpackChunkmaterial_ui_chameleon_docs=self.webpackChunkmaterial_ui_chameleon_docs||[]).push([[1346],{51184:R=>{R.exports=t;var x=/\((?!\?)/g;function t(e,r,f){f=f||{},r=r||[];var E=f.strict,A=f.end!==!1,s=f.sensitive?"":"i",w=0,u=r.length,g=0,d=0,i;if(e instanceof RegExp){for(;i=x.exec(e.source);)r.push({name:d++,optional:!1,offset:i.index});return e}if(Array.isArray(e))return e=e.map(function(v){return t(v,r,f).source}),new RegExp("(?:"+e.join("|")+")",s);for(e=("^"+e+(E?"":e[e.length-1]==="/"?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,function(v,l,n,O,a,$,c,b){l=l||"",n=n||"",a=a||"([^\\/"+n+"]+?)",c=c||"",r.push({name:O,optional:!!c,offset:b+w});var m=""+(c?"":l)+"(?:"+n+(c?l:"")+a+($?"((?:[\\/"+n+"].+?)?)":"")+")"+c;return w+=m.length-v.length,m}).replace(/\*/g,function(v,l){for(var n=r.length;n-- >u&&r[n].offset>l;)r[n].offset+=3;return"(.*)"});i=x.exec(e);){for(var _=0,G=i.index;e.charAt(--G)==="\\";)_++;_%2!=1&&((u+g===r.length||r[u+g].offset>i.index)&&r.splice(u+g,0,{name:d++,optional:!1,offset:i.index}),g++)}return e+=A?"$":e[e.length-1]==="/"?"":"(?=\\/|$)",new RegExp(e,s)}}}]);

//# sourceMappingURL=path-to-regexp.ba861eaf875993e12161.js.map