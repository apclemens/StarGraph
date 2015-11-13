/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});


/*!
 * This file is part of Cytoscape.js 2.5.0.
 *
 * Cytoscape.js is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * Cytoscape.js is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with
 * Cytoscape.js. If not, see <http://www.gnu.org/licenses/>.
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.cytoscape=e()}}(function(){var define,module,exports;return function e(t,r,n){function i(o,s){if(!r[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[o]={exports:{}};t[o][0].call(c.exports,function(e){var r=t[o][1][e];return i(r?r:e)},c,c.exports,e,t,r,n)}return r[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(e,t,r){"use strict";var n=e("./util"),i=e("./is"),a=e("./promise"),o=function(e,t,r){if(!(this instanceof o))return new o(e,t,r);var a=this._private=n.extend({duration:1e3},t,r);a.target=e,a.style=a.style||a.css,a.started=!1,a.playing=!1,a.hooked=!1,a.applying=!1,a.progress=0,a.completes=[],a.frames=[],a.complete&&i.fn(a.complete)&&a.completes.push(a.complete),this.length=1,this[0]=this},s=o.prototype;n.extend(s,{instanceString:function(){return"animation"},hook:function(){var e=this._private;if(!e.hooked){var t,r=e.target._private.animation;t=e.queue?r.queue:r.current,t.push(this),i.elementOrCollection(e.target)&&e.target.cy().addToAnimationPool(e.target),e.hooked=!0}return this},play:function(){var e=this._private;return 1===e.progress&&(e.progress=0),e.playing=!0,e.started=!1,e.stopped=!1,this.hook(),this},playing:function(){return this._private.playing},apply:function(){var e=this._private;return e.applying=!0,e.started=!1,e.stopped=!1,this.hook(),this},applying:function(){return this._private.applying},pause:function(){var e=this._private;return e.playing=!1,e.started=!1,this},stop:function(){var e=this._private;return e.playing=!1,e.started=!1,e.stopped=!0,this},rewind:function(){return this.progress(0)},fastforward:function(){return this.progress(1)},time:function(e){var t=this._private;return void 0===e?t.progress*t.duration:this.progress(e/t.duration)},progress:function(e){var t=this._private,r=t.playing;return void 0===e?t.progress:(r&&this.pause(),t.progress=e,t.started=!1,r&&this.play(),this)},completed:function(){return 1===this._private.progress},reverse:function(){var e=this._private,t=e.playing;t&&this.pause(),e.progress=1-e.progress,e.started=!1;var r=function(t,r){var n=e[t];e[t]=e[r],e[r]=n};r("zoom","startZoom"),r("pan","startPan"),r("position","startPosition");for(var i=0;i<e.style.length;i++){var a=e.style[i],o=a.name,s=e.startStyle[o];e.startStyle[o]=e.startStyle[n.dash2camel(o)]=a,e.style[i]=s}return t&&this.play(),this},promise:function(e){var t,r=this._private;switch(e){case"frame":t=r.frames;break;default:case"complete":case"completed":t=r.completes}return new a(function(e,r){t.push(function(){e()})})}}),s.complete=s.completed,t.exports=o},{"./is":77,"./promise":80,"./util":94}],2:[function(e,t,r){"use strict";var n=e("../../is"),i={aStar:function(e){var t=this;e=e||{};var r=function(e,t,n,i){if(e==t)return i.push(a.getElementById(t)),i;if(t in n){var o=n[t],s=v[t];return i.push(a.getElementById(t)),i.push(a.getElementById(s)),r(e,o,n,i)}return void 0},i=function(e,t){if(0===e.length)return void 0;for(var r=0,n=t[e[0]],i=1;i<e.length;i++){var a=t[e[i]];n>a&&(n=a,r=i)}return r},a=this._private.cy;if(null==e||null==e.root)return void 0;var o=n.string(e.root)?this.filter(e.root)[0]:e.root[0];if(null==e.goal)return void 0;var s=n.string(e.goal)?this.filter(e.goal)[0]:e.goal[0];if(null!=e.heuristic&&n.fn(e.heuristic))var l=e.heuristic;else var l=function(){return 0};if(null!=e.weight&&n.fn(e.weight))var u=e.weight;else var u=function(e){return 1};if(null!=e.directed)var c=e.directed;else var c=!1;var d=[],h=[o.id()],p={},v={},f={},g={};f[o.id()]=0,g[o.id()]=l(o);for(var y=this.edges().stdFilter(function(e){return!e.isLoop()}),m=this.nodes(),b=0;h.length>0;){var x=i(h,g),w=a.getElementById(h[x]);if(b++,w.id()==s.id()){var _=r(o.id(),s.id(),p,[]);return _.reverse(),{found:!0,distance:f[w.id()],path:t.spawn(_),steps:b}}d.push(w.id()),h.splice(x,1);var E=w.connectedEdges();c&&(E=E.stdFilter(function(e){return e.data("source")===w.id()})),E=E.intersect(y);for(var D=0;D<E.length;D++){var k=E[D],T=k.connectedNodes().stdFilter(function(e){return e.id()!==w.id()}).intersect(m);if(-1==d.indexOf(T.id())){var S=f[w.id()]+u.apply(k,[k]);-1!=h.indexOf(T.id())?S<f[T.id()]&&(f[T.id()]=S,g[T.id()]=S+l(T),p[T.id()]=w.id()):(f[T.id()]=S,g[T.id()]=S+l(T),h.push(T.id()),p[T.id()]=w.id(),v[T.id()]=k.id())}}}return{found:!1,distance:void 0,path:void 0,steps:b}}};t.exports=i},{"../../is":77}],3:[function(e,t,r){"use strict";var n=e("../../is"),i=e("../../util"),a={bellmanFord:function(e){var t=this;if(e=e||{},null!=e.weight&&n.fn(e.weight))var r=e.weight;else var r=function(e){return 1};if(null!=e.directed)var a=e.directed;else var a=!1;if(null==e.root)return void 0;if(n.string(e.root))var o=this.filter(e.root)[0];else var o=e.root[0];for(var s=this._private.cy,l=this.edges().stdFilter(function(e){return!e.isLoop()}),u=this.nodes(),c=u.length,d={},h=0;c>h;h++)d[u[h].id()]=h;for(var p=[],v=[],f=[],h=0;c>h;h++)u[h].id()===o.id()?p[h]=0:p[h]=1/0,v[h]=void 0;for(var g=!1,h=1;c>h;h++){g=!1;for(var y=0;y<l.length;y++){var m=d[l[y].source().id()],b=d[l[y].target().id()],x=r.apply(l[y],[l[y]]),w=p[m]+x;if(w<p[b]&&(p[b]=w,v[b]=m,f[b]=l[y],g=!0),!a){var w=p[b]+x;w<p[m]&&(p[m]=w,v[m]=b,f[m]=l[y],g=!0)}}if(!g)break}if(g)for(var y=0;y<l.length;y++){var m=d[l[y].source().id()],b=d[l[y].target().id()],x=r.apply(l[y],[l[y]]);if(p[m]+x<p[b])return i.error("Graph contains a negative weight cycle for Bellman-Ford"),{pathTo:void 0,distanceTo:void 0,hasNegativeWeightCycle:!0}}for(var _=[],h=0;c>h;h++)_.push(u[h].id());var E={distanceTo:function(e){if(n.string(e))var t=s.filter(e)[0].id();else var t=e.id();return p[d[t]]},pathTo:function(e){var r=function(e,t,r,n,i,a){for(;;){if(i.push(s.getElementById(n[r])),i.push(a[r]),t===r)return i;var o=e[r];if("undefined"==typeof o)return void 0;r=o}};if(n.string(e))var i=s.filter(e)[0].id();else var i=e.id();var a=[],l=r(v,d[o.id()],d[i],_,a,f);return null!=l&&l.reverse(),t.spawn(l)},hasNegativeWeightCycle:!1};return E}};t.exports=a},{"../../is":77,"../../util":94}],4:[function(e,t,r){"use strict";var n=e("../../is"),i={betweennessCentrality:function(e){if(e=e||{},null!=e.weight&&n.fn(e.weight))var t=e.weight,r=!0;else var r=!1;if(null!=e.directed&&n.bool(e.directed))var i=e.directed;else var i=!1;for(var a=function(e,t){e.unshift(t);for(var r=0;f[e[r]]<f[e[r+1]]&&r<e.length-1;r++){var n=e[r];e[r]=e[r+1],e[r+1]=n}},o=this._private.cy,s=this.nodes(),l={},u={},c=0;c<s.length;c++)i?l[s[c].id()]=s[c].outgoers("node"):l[s[c].id()]=s[c].openNeighborhood("node");for(var c=0;c<s.length;c++)u[s[c].id()]=0;for(var d=0;d<s.length;d++){for(var h=[],p={},v={},f={},g=[],c=0;c<s.length;c++)p[s[c].id()]=[],v[s[c].id()]=0,f[s[c].id()]=Number.POSITIVE_INFINITY;for(v[s[d].id()]=1,f[s[d].id()]=0,g.unshift(s[d].id());g.length>0;){var y=g.pop();h.push(y),r?l[y].forEach(function(e){if(o.$("#"+y).edgesTo(e).length>0)var r=o.$("#"+y).edgesTo(e)[0];else var r=e.edgesTo("#"+y)[0];var n=t.apply(r,[r]);f[e.id()]>f[y]+n&&(f[e.id()]=f[y]+n,g.indexOf(e.id())<0?a(g,e.id()):(g.splice(g.indexOf(e.id()),1),a(g,e.id())),v[e.id()]=0,p[e.id()]=[]),f[e.id()]==f[y]+n&&(v[e.id()]=v[e.id()]+v[y],p[e.id()].push(y))}):l[y].forEach(function(e){f[e.id()]==Number.POSITIVE_INFINITY&&(g.unshift(e.id()),f[e.id()]=f[y]+1),f[e.id()]==f[y]+1&&(v[e.id()]=v[e.id()]+v[y],p[e.id()].push(y))})}for(var m={},c=0;c<s.length;c++)m[s[c].id()]=0;for(;h.length>0;){var b=h.pop();p[b].forEach(function(e){m[e]=m[e]+v[e]/v[b]*(1+m[b]),b!=s[d].id()&&(u[b]=u[b]+m[b])})}}var x=0;for(var w in u)x<u[w]&&(x=u[w]);var _={betweenness:function(e){if(n.string(e))var e=o.filter(e)[0].id();else var e=e.id();return u[e]},betweennessNormalized:function(e){if(n.string(e))var e=o.filter(e)[0].id();else var e=e.id();return u[e]/x}};return _.betweennessNormalised=_.betweennessNormalized,_}};i.bc=i.betweennessCentrality,t.exports=i},{"../../is":77}],5:[function(e,t,r){"use strict";var n=e("../../is"),i=e("../../heap"),a=function(e){return e={bfs:e.bfs||!e.dfs,dfs:e.dfs||!e.bfs},function(t,r,i){var a,o,s;n.plainObject(t)&&!n.elementOrCollection(t)&&(a=t,t=a.roots||a.root,r=a.visit,i=a.directed,o=a.std,s=a.thisArg),i=2!==arguments.length||n.fn(r)?i:r,r=n.fn(r)?r:function(){};for(var l,u=this._private.cy,c=t=n.string(t)?this.filter(t):t,d=[],h=[],p={},v={},f={},g=0,y=this.nodes(),m=this.edges(),b=0;b<c.length;b++)c[b].isNode()&&(d.unshift(c[b]),e.bfs&&(f[c[b].id()]=!0,h.push(c[b])),v[c[b].id()]=0);for(;0!==d.length;){var c=e.bfs?d.shift():d.pop();if(e.dfs){if(f[c.id()])continue;f[c.id()]=!0,h.push(c)}var x,w=v[c.id()],_=p[c.id()],E=null==_?void 0:_.connectedNodes().not(c)[0];if(x=o?r.call(s,c,_,E,g++,w):r.call(c,g++,w,c,_,E),x===!0){l=c;break}if(x===!1)break;for(var D=c.connectedEdges(i?function(){return this.data("source")===c.id()}:void 0).intersect(m),b=0;b<D.length;b++){var k=D[b],T=k.connectedNodes(function(){return this.id()!==c.id()}).intersect(y);0===T.length||f[T.id()]||(T=T[0],d.push(T),e.bfs&&(f[T.id()]=!0,h.push(T)),p[T.id()]=k,v[T.id()]=v[c.id()]+1)}}for(var S=[],b=0;b<h.length;b++){var P=h[b],C=p[P.id()];C&&S.push(C),S.push(P)}return{path:u.collection(S,{unique:!0}),found:u.collection(l)}}},o={breadthFirstSearch:a({bfs:!0}),depthFirstSearch:a({dfs:!0}),kruskal:function(e){function t(e){for(var t=0;t<a.length;t++){var r=a[t];if(r.anySame(e))return{eles:r,index:t}}}var r=this.cy();e=n.fn(e)?e:function(){return 1};for(var i=r.collection(r,[]),a=[],o=this.nodes(),s=0;s<o.length;s++)a.push(o[s].collection());for(var l=this.edges(),u=l.toArray().sort(function(t,r){var n=e.call(t,t),i=e.call(r,r);return n-i}),s=0;s<u.length;s++){var c=u[s],d=c.source()[0],h=c.target()[0],p=t(d),v=t(h);p.index!==v.index&&(i=i.add(c),a[p.index]=p.eles.add(v.eles),a.splice(v.index,1))}return o.add(i)},dijkstra:function(e,t,r){var a;n.plainObject(e)&&!n.elementOrCollection(e)&&(a=e,e=a.root,t=a.weight,r=a.directed);var o=this._private.cy;t=n.fn(t)?t:function(){return 1};for(var s=n.string(e)?this.filter(e)[0]:e[0],l={},u={},c={},d=this.edges().filter(function(){return!this.isLoop()}),h=this.nodes(),p=function(e){return l[e.id()]},v=function(e,t){l[e.id()]=t,f.updateItem(e)},f=new i(function(e,t){return p(e)-p(t)}),g=0;g<h.length;g++){var y=h[g];l[y.id()]=y.same(s)?0:1/0,f.push(y)}for(var m=function(e,n){for(var i,a=(r?e.edgesTo(n):e.edgesWith(n)).intersect(d),o=1/0,s=0;s<a.length;s++){var l=a[s],u=t.apply(l,[l]);(o>u||!i)&&(o=u,i=l)}return{edge:i,dist:o}};f.size()>0;){var b=f.pop(),x=p(b),w=b.id();if(c[w]=x,x===Math.Infinite)break;for(var _=b.neighborhood().intersect(h),g=0;g<_.length;g++){var E=_[g],D=E.id(),k=m(b,E),T=x+k.dist;T<p(E)&&(v(E,T),u[D]={node:b,edge:k.edge})}}return{distanceTo:function(e){var t=n.string(e)?h.filter(e)[0]:e[0];return c[t.id()]},pathTo:function(e){var t=n.string(e)?h.filter(e)[0]:e[0],r=[],i=t;if(t.length>0)for(r.unshift(t);u[i.id()];){var a=u[i.id()];r.unshift(a.edge),r.unshift(a.node),i=a.node}return o.collection(r)}}}};o.bfs=o.breadthFirstSearch,o.dfs=o.depthFirstSearch,t.exports=o},{"../../heap":75,"../../is":77}],6:[function(e,t,r){"use strict";var n=e("../../is"),i={closenessCentralityNormalized:function(e){e=e||{};var t=this.cy(),r=e.harmonic;void 0===r&&(r=!0);for(var i={},a=0,o=this.nodes(),s=this.floydWarshall({weight:e.weight,directed:e.directed}),l=0;l<o.length;l++){for(var u=0,c=0;c<o.length;c++)if(l!=c){var d=s.distance(o[l],o[c]);u+=r?1/d:d}r||(u=1/u),u>a&&(a=u),i[o[l].id()]=u}return{closeness:function(e){if(n.string(e))var e=t.filter(e)[0].id();else var e=e.id();return i[e]/a}}},closenessCentrality:function(e){if(e=e||{},null==e.root)return void 0;if(n.string(e.root))var t=this.filter(e.root)[0];else var t=e.root[0];if(null!=e.weight&&n.fn(e.weight))var r=e.weight;else var r=function(){return 1};if(null!=e.directed&&n.bool(e.directed))var i=e.directed;else var i=!1;var a=e.harmonic;void 0===a&&(a=!0);for(var o=this.dijkstra({root:t,weight:r,directed:i}),s=0,l=this.nodes(),u=0;u<l.length;u++)if(l[u].id()!=t.id()){var c=o.distanceTo(l[u]);s+=a?1/c:c}return a?s:1/s}};i.cc=i.closenessCentrality,i.ccn=i.closenessCentralityNormalised=i.closenessCentralityNormalized,t.exports=i},{"../../is":77}],7:[function(e,t,r){"use strict";var n=e("../../is"),i=e("../../util"),a={degreeCentralityNormalized:function(e){e=e||{};var t=this.cy();if(null!=e.directed)var r=e.directed;else var r=!1;var a=this.nodes(),o=a.length;if(r){for(var s={},l={},u=0,c=0,d=0;o>d;d++){var h=a[d],p=this.degreeCentrality(i.extend({},e,{root:h}));u<p.indegree&&(u=p.indegree),c<p.outdegree&&(c=p.outdegree),s[h.id()]=p.indegree,l[h.id()]=p.outdegree}return{indegree:function(e){if(n.string(e))var e=t.filter(e)[0].id();else var e=e.id();return s[e]/u},outdegree:function(e){if(n.string(e))var e=t.filter(e)[0].id();else var e=e.id();return l[e]/c}}}for(var v={},f=0,d=0;o>d;d++){var h=a[d],p=this.degreeCentrality(i.extend({},e,{root:h}));f<p.degree&&(f=p.degree),v[h.id()]=p.degree}return{degree:function(e){if(n.string(e))var e=t.filter(e)[0].id();else var e=e.id();return v[e]/f}}},degreeCentrality:function(e){e=e||{};var t=this;if(null==e||null==e.root)return void 0;var r=n.string(e.root)?this.filter(e.root)[0]:e.root[0];if(null!=e.weight&&n.fn(e.weight))var i=e.weight;else var i=function(e){return 1};if(null!=e.directed)var a=e.directed;else var a=!1;if(null!=e.alpha&&n.number(e.alpha))var o=e.alpha;else o=0;if(a){for(var s=r.connectedEdges('edge[target = "'+r.id()+'"]').intersection(t),l=r.connectedEdges('edge[source = "'+r.id()+'"]').intersection(t),u=s.length,c=l.length,d=0,h=0,p=0;p<s.length;p++){var v=s[p];d+=i.apply(v,[v])}for(var p=0;p<l.length;p++){var v=l[p];h+=i.apply(v,[v])}return{indegree:Math.pow(u,1-o)*Math.pow(d,o),outdegree:Math.pow(c,1-o)*Math.pow(h,o)}}for(var f=r.connectedEdges().intersection(t),g=f.length,y=0,p=0;p<f.length;p++){var v=f[p];y+=i.apply(v,[v])}return{degree:Math.pow(g,1-o)*Math.pow(y,o)}}};a.dc=a.degreeCentrality,a.dcn=a.degreeCentralityNormalised=a.degreeCentralityNormalized,t.exports=a},{"../../is":77,"../../util":94}],8:[function(e,t,r){"use strict";var n=e("../../is"),i={floydWarshall:function(e){e=e||{};var t=this.cy();if(null!=e.weight&&n.fn(e.weight))var r=e.weight;else var r=function(e){return 1};if(null!=e.directed)var i=e.directed;else var i=!1;for(var a=this.edges().stdFilter(function(e){return!e.isLoop()}),o=this.nodes(),s=o.length,l={},u=0;s>u;u++)l[o[u].id()]=u;for(var c=[],u=0;s>u;u++){for(var d=new Array(s),h=0;s>h;h++)u==h?d[h]=0:d[h]=1/0;c.push(d)}var p=[],v=[],f=function(e){for(var t=0;s>t;t++){for(var r=new Array(s),n=0;s>n;n++)r[n]=void 0;e.push(r)}};f(p),f(v);for(var u=0;u<a.length;u++){var g=l[a[u].source().id()],y=l[a[u].target().id()],m=r.apply(a[u],[a[u]]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,v[g][y]=a[u])}if(!i)for(var u=0;u<a.length;u++){var g=l[a[u].target().id()],y=l[a[u].source().id()],m=r.apply(a[u],[a[u]]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,v[g][y]=a[u])}for(var b=0;s>b;b++)for(var u=0;s>u;u++)for(var h=0;s>h;h++)c[u][b]+c[b][h]<c[u][h]&&(c[u][h]=c[u][b]+c[b][h],p[u][h]=p[u][b]);for(var x=[],u=0;s>u;u++)x.push(o[u].id());var w={distance:function(e,r){if(n.string(e))var i=t.filter(e)[0].id();else var i=e.id();if(n.string(r))var a=t.filter(r)[0].id();else var a=r.id();return c[l[i]][l[a]]},path:function(e,r){var i=function(e,r,n,i,a){if(e===r)return t.getElementById(i[e]);if(void 0===n[e][r])return void 0;for(var o=[t.getElementById(i[e])],s=e;e!==r;){s=e,e=n[e][r];var l=a[s][e];o.push(l),o.push(t.getElementById(i[e]))}return o};if(n.string(e))var a=t.filter(e)[0].id();else var a=e.id();if(n.string(r))var o=t.filter(r)[0].id();else var o=r.id();var s=i(l[a],l[o],p,x,v);return t.collection(s)}};return w}};t.exports=i},{"../../is":77}],9:[function(e,t,r){"use strict";var n=e("../../util"),i={};[e("./bfs-dfs"),e("./a-star"),e("./floyd-warshall"),e("./bellman-ford"),e("./kerger-stein"),e("./page-rank"),e("./degree-centrality"),e("./closeness-centrality"),e("./betweenness-centrality")].forEach(function(e){n.extend(i,e)}),t.exports=i},{"../../util":94,"./a-star":2,"./bellman-ford":3,"./betweenness-centrality":4,"./bfs-dfs":5,"./closeness-centrality":6,"./degree-centrality":7,"./floyd-warshall":8,"./kerger-stein":10,"./page-rank":11}],10:[function(e,t,r){"use strict";var n=e("../../util"),i={kargerStein:function(e){var t=this;e=e||{};var r=function(e,t,r){for(var n=r[e],i=n[1],a=n[2],o=t[i],s=t[a],l=r.filter(function(e){return t[e[1]]===o&&t[e[2]]===s?!1:t[e[1]]===s&&t[e[2]]===o?!1:!0}),u=0;u<l.length;u++){var c=l[u];c[1]===s?(l[u]=c.slice(0),l[u][1]=o):c[2]===s&&(l[u]=c.slice(0),l[u][2]=o)}for(var u=0;u<t.length;u++)t[u]===s&&(t[u]=o);return l},i=function(e,t,n,a){if(a>=n)return t;var o=Math.floor(Math.random()*t.length),s=r(o,e,t);return i(e,s,n-1,a)},a=this._private.cy,o=this.edges().stdFilter(function(e){return!e.isLoop()}),s=this.nodes(),l=s.length,u=o.length,c=Math.ceil(Math.pow(Math.log(l)/Math.LN2,2)),d=Math.floor(l/Math.sqrt(2));if(2>l)return void n.error("At least 2 nodes are required for Karger-Stein algorithm");for(var h={},p=0;l>p;p++)h[s[p].id()]=p;for(var v=[],p=0;u>p;p++){var f=o[p];v.push([p,h[f.source().id()],h[f.target().id()]])}for(var g,y=1/0,m=[],p=0;l>p;p++)m.push(p);for(var b=0;c>=b;b++){var x=m.slice(0),w=i(x,v,l,d),_=x.slice(0),E=i(x,w,d,2),D=i(_,w,d,2);E.length<=D.length&&E.length<y?(y=E.length,g=[E,x]):D.length<=E.length&&D.length<y&&(y=D.length,g=[D,_])}for(var k=g[0].map(function(e){return o[e[0]]}),T=[],S=[],P=g[1][0],p=0;p<g[1].length;p++){var C=g[1][p];C===P?T.push(s[p]):S.push(s[p])}var N={cut:t.spawn(a,k),partition1:t.spawn(T),partition2:t.spawn(S)};return N}};t.exports=i},{"../../util":94}],11:[function(e,t,r){"use strict";var n=e("../../is"),i={pageRank:function(e){e=e||{};var t=function(e){for(var t=e.length,r=0,n=0;t>n;n++)r+=e[n];for(var n=0;t>n;n++)e[n]=e[n]/r};if(null!=e&&null!=e.dampingFactor)var r=e.dampingFactor;else var r=.8;if(null!=e&&null!=e.precision)var i=e.precision;else var i=1e-6;if(null!=e&&null!=e.iterations)var a=e.iterations;else var a=200;if(null!=e&&null!=e.weight&&n.fn(e.weight))var o=e.weight;else var o=function(e){return 1};for(var s=this._private.cy,l=this.edges().stdFilter(function(e){return!e.isLoop()}),u=this.nodes(),c=u.length,d=l.length,h={},p=0;c>p;p++)h[u[p].id()]=p;for(var v=[],f=[],g=(1-r)/c,p=0;c>p;p++){for(var y=[],m=0;c>m;m++)y.push(0);v.push(y),f.push(0)}for(var p=0;d>p;p++){var b=l[p],x=h[b.source().id()],w=h[b.target().id()],_=o.apply(b,[b]);v[w][x]+=_,f[x]+=_}for(var E=1/c+g,m=0;c>m;m++)if(0===f[m])for(var p=0;c>p;p++)v[p][m]=E;else for(var p=0;c>p;p++)v[p][m]=v[p][m]/f[m]+g;for(var D,k=[],T=[],p=0;c>p;p++)k.push(1),T.push(0);for(var S=0;a>S;S++){for(var P=T.slice(0),p=0;c>p;p++)for(var m=0;c>m;m++)P[p]+=v[p][m]*k[m];t(P),D=k,k=P;for(var C=0,p=0;c>p;p++)C+=Math.pow(D[p]-k[p],2);if(i>C)break}var N={rank:function(e){if(n.string(e))var t=s.filter(e)[0].id();else var t=e.id();return k[h[t]]}};return N}};t.exports=i},{"../../is":77}],12:[function(e,t,r){"use strict";var n=e("../define"),i={animate:n.animate(),animation:n.animation(),animated:n.animated(),clearQueue:n.clearQueue(),delay:n.delay(),delayAnimation:n.delayAnimation(),stop:n.stop()};t.exports=i},{"../define":41}],13:[function(e,t,r){"use strict";var n=e("../util"),i={classes:function(e){e=e.match(/\S+/g)||[];for(var t=this,r=[],i={},a=0;a<e.length;a++){var o=e[a];i[o]=!0}for(var s=0;s<t.length;s++){for(var l=t[s],u=l._private,c=u.classes,d=!1,a=0;a<e.length;a++){var o=e[a],h=c[o];if(!h){d=!0;break}}if(!d)for(var p in c){var h=c[p],v=i[p];if(h&&!v){d=!0;break}}d&&(u.classes=n.copy(i),r.push(l))}return r.length>0&&this.spawn(r).updateStyle().trigger("class"),t},addClass:function(e){return this.toggleClass(e,!0)},hasClass:function(e){var t=this[0];return null!=t&&t._private.classes[e]?!0:!1},toggleClass:function(e,t){for(var r=e.match(/\S+/g)||[],n=this,i=[],a=0,o=n.length;o>a;a++)for(var s=n[a],l=!1,u=0;u<r.length;u++){var c=r[u],d=s._private.classes,h=d[c],p=t||void 0===t&&!h;p?(d[c]=!0,h||l||(i.push(s),l=!0)):(d[c]=!1,h&&!l&&(i.push(s),l=!0))}return i.length>0&&this.spawn(i).updateStyle().trigger("class"),n},removeClass:function(e){return this.toggleClass(e,!1)},flashClass:function(e,t){var r=this;if(null==t)t=250;else if(0===t)return r;return r.addClass(e),setTimeout(function(){r.removeClass(e)},t),r}};t.exports=i},{"../util":94}],14:[function(e,t,r){"use strict";var n={allAre:function(e){return this.filter(e).length===this.length},is:function(e){return this.filter(e).length>0},some:function(e,t){for(var r=0;r<this.length;r++){var n=t?e.apply(t,[this[r],r,this]):e(this[r],r,this);if(n)return!0}return!1},every:function(e,t){for(var r=0;r<this.length;r++){var n=t?e.apply(t,[this[r],r,this]):e(this[r],r,this);if(!n)return!1}return!0},same:function(e){return e=this.cy().collection(e),this.length!==e.length?!1:this.intersect(e).length===this.length},anySame:function(e){return e=this.cy().collection(e),this.intersect(e).length>0},allAreNeighbors:function(e){return e=this.cy().collection(e),this.neighborhood().intersect(e).length===e.length}};n.allAreNeighbours=n.allAreNeighbors,t.exports=n},{}],15:[function(e,t,r){"use strict";var n={parent:function(e){for(var t=[],r=this._private.cy,n=0;n<this.length;n++){var i=this[n],a=r.getElementById(i._private.data.parent);a.size()>0&&t.push(a)}return this.spawn(t,{unique:!0}).filter(e)},parents:function(e){for(var t=[],r=this.parent();r.nonempty();){for(var n=0;n<r.length;n++){var i=r[n];t.push(i)}r=r.parent()}return this.spawn(t,{unique:!0}).filter(e)},commonAncestors:function(e){for(var t,r=0;r<this.length;r++){var n=this[r],i=n.parents();t=t||i,t=t.intersect(i)}return t.filter(e)},orphans:function(e){return this.stdFilter(function(e){return e.isNode()&&e.parent().empty()}).filter(e)},nonorphans:function(e){return this.stdFilter(function(e){return e.isNode()&&e.parent().nonempty()}).filter(e)},children:function(e){for(var t=[],r=0;r<this.length;r++){var n=this[r];t=t.concat(n._private.children)}return this.spawn(t,{unique:!0}).filter(e)},siblings:function(e){return this.parent().children().not(this).filter(e)},isParent:function(){var e=this[0];return e?0!==e._private.children.length:void 0},isChild:function(){var e=this[0];return e?void 0!==e._private.data.parent&&0!==e.parent().length:void 0},descendants:function(e){function t(e){for(var n=0;n<e.length;n++){var i=e[n];r.push(i),i.children().nonempty()&&t(i.children())}}var r=[];return t(this.children()),this.spawn(r,{unique:!0}).filter(e)}};n.ancestors=n.parents,t.exports=n},{}],16:[function(e,t,r){"use strict";var n,i,a=e("../define");n=i={data:a.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),removeData:a.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),scratch:a.data({field:"scratch",bindingEvent:"scratch",allowBinding:!0,allowSetting:!0,settingEvent:"scratch",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,updateStyle:!0}),removeScratch:a.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:!0,updateStyle:!0}),rscratch:a.data({field:"rscratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeRscratch:a.removeData({field:"rscratch",triggerEvent:!1}),id:function(){var e=this[0];return e?e._private.data.id:void 0}},n.attr=n.data,n.removeAttr=n.removeData,t.exports=i},{"../define":41}],17:[function(e,t,r){"use strict";function n(e){return function(t){var r=this;if(void 0===t&&(t=!0),0!==r.length&&r.isNode()&&!r.removed()){for(var n=0,i=r[0],a=i._private.edges,o=0;o<a.length;o++){var s=a[o];(t||!s.isLoop())&&(n+=e(i,s))}return n}}}function i(e,t){return function(r){for(var n,i=this.nodes(),a=0;a<i.length;a++){var o=i[a],s=o[e](r);void 0===s||void 0!==n&&!t(s,n)||(n=s)}return n}}var a=e("../util"),o={};a.extend(o,{degree:n(function(e,t){return t.source().same(t.target())?2:1}),indegree:n(function(e,t){return t.target().same(e)?1:0}),outdegree:n(function(e,t){return t.source().same(e)?1:0})}),a.extend(o,{minDegree:i("degree",function(e,t){return t>e}),maxDegree:i("degree",function(e,t){return e>t}),minIndegree:i("indegree",function(e,t){return t>e}),maxIndegree:i("indegree",function(e,t){return e>t}),minOutdegree:i("outdegree",function(e,t){return t>e}),maxOutdegree:i("outdegree",function(e,t){return e>t})}),a.extend(o,{totalDegree:function(e){for(var t=0,r=this.nodes(),n=0;n<r.length;n++)t+=r[n].degree(e);return t}}),t.exports=o},{"../util":94}],18:[function(e,t,r){"use strict";var n,i,a=e("../define"),o=e("../is"),s=e("../util");n=i={position:a.data({field:"position",bindingEvent:"position",allowBinding:!0,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!0,triggerFnName:"rtrigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){var t=e.updateCompoundBounds();t.rtrigger("position")},canSet:function(e){return!e.locked()&&!e.isParent()}}),silentPosition:a.data({field:"position",bindingEvent:"position",allowBinding:!1,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!1,triggerFnName:"trigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){e.updateCompoundBounds()},canSet:function(e){return!e.locked()&&!e.isParent()}}),positions:function(e,t){if(o.plainObject(e))this.position(e);else if(o.fn(e)){for(var r=e,n=0;n<this.length;n++){var i=this[n],e=r.apply(i,[n,i]);if(e&&!i.locked()&&!i.isParent()){var a=i._private.position;a.x=e.x,a.y=e.y}}var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;t?l.trigger("position"):l.rtrigger("position")}return this},silentPositions:function(e){return this.positions(e,!0)},renderedPosition:function(e,t){var r=this[0],n=this.cy(),i=n.zoom(),a=n.pan(),s=o.plainObject(e)?e:void 0,l=void 0!==s||void 0!==t&&o.string(e);if(r&&r.isNode()){if(!l){var u=r._private.position;return s={x:u.x*i+a.x,y:u.y*i+a.y},void 0===e?s:s[e]}for(var c=0;c<this.length;c++){var r=this[c];void 0!==t?r._private.position[e]=(t-a[e])/i:void 0!==s&&(r._private.position={x:(s.x-a.x)/i,y:(s.y-a.y)/i})}this.rtrigger("position")}else if(!l)return void 0;return this},relativePosition:function(e,t){var r=this[0],n=this.cy(),i=o.plainObject(e)?e:void 0,a=void 0!==i||void 0!==t&&o.string(e),s=n.hasCompoundNodes();if(r&&r.isNode()){if(!a){var l=r._private.position,u=s?r.parent():null,c=u&&u.length>0,d=c;c&&(u=u[0]);var h=d?u._private.position:{x:0,y:0};return i={x:l.x-h.x,y:l.y-h.y},void 0===e?i:i[e]}for(var p=0;p<this.length;p++){var r=this[p],u=s?r.parent():null,c=u&&u.length>0,d=c;c&&(u=u[0]);var h=d?u._private.position:{x:0,y:0};void 0!==t?r._private.position[e]=t+h[e]:void 0!==i&&(r._private.position={x:i.x+h.x,y:i.y+h.y})}this.rtrigger("position")}else if(!a)return void 0;return this},renderedBoundingBox:function(e){var t=this.boundingBox(e),r=this.cy(),n=r.zoom(),i=r.pan(),a=t.x1*n+i.x,o=t.x2*n+i.x,s=t.y1*n+i.y,l=t.y2*n+i.y;return{x1:a,x2:o,y1:s,y2:l,w:o-a,h:l-s}},updateCompoundBounds:function(){function e(e){var t=e.children(),n=e._private.style,i="include"===n["compound-sizing-wrt-labels"].value,a=t.boundingBox({includeLabels:i,includeEdges:!0}),o={top:n["padding-top"].pfValue,bottom:n["padding-bottom"].pfValue,left:n["padding-left"].pfValue,right:n["padding-right"].pfValue},s=e._private.position,l=!1;"auto"===n.width.value&&(e._private.autoWidth=a.w,s.x=(a.x1+a.x2-o.left+o.right)/2,l=!0),"auto"===n.height.value&&(e._private.autoHeight=a.h,s.y=(a.y1+a.y2-o.top+o.bottom)/2,l=!0),l&&r.push(e)}var t=this.cy();if(!t.styleEnabled()||!t.hasCompoundNodes())return t.collection();for(var r=[],n=this.parent();n.nonempty();){for(var i=0;i<n.length;i++){var a=n[i];e(a)}n=n.parent()}return this.spawn(r)},boundingBox:function(e){var t=this,r=t._private.cy,n=r._private,i=n.styleEnabled;e=e||s.staticEmptyObject();var a=void 0===e.includeNodes?!0:e.includeNodes,o=void 0===e.includeEdges?!0:e.includeEdges,l=void 0===e.includeLabels?!0:e.includeLabels;i&&n.renderer.recalculateRenderedStyle(this);for(var u=1/0,c=-(1/0),d=1/0,h=-(1/0),p=0;p<t.length;p++){var v,f,g,y,m,b,x=t[p],w=x._private,_=w.style,E=i?w.style.display.value:"element",D="nodes"===w.group,k=!1;if("none"!==E){if(D&&a){k=!0;var T=w.position;m=T.x,b=T.y;var S=x.outerWidth(),P=S/2,C=x.outerHeight(),N=C/2;v=m-P,f=m+P,g=b-N,y=b+N,u=u>v?v:u,c=f>c?f:c,d=d>g?g:d,h=y>h?y:h}else if(x.isEdge()&&o){k=!0;var M=w.source,B=M._private,z=B.position,O=w.target,I=O._private,L=I.position,A=w.rstyle||{},S=0,R=0;if(i&&(S=_.width.pfValue,R=S/2),v=z.x,f=L.x,g=z.y,y=L.y,v>f){var V=v;v=f,f=V}if(g>y){var V=g;g=y,y=V}if(v-=R,f+=R,g-=R,y+=R,u=u>v?v:u,c=f>c?f:c,d=d>g?g:d,h=y>h?y:h,i)for(var F=A.bezierPts||A.linePts||[],j=0;j<F.length;j++){var q=F[j];v=q.x-R,f=q.x+R,g=q.y-R,y=q.y+R,u=u>v?v:u,c=f>c?f:c,d=d>g?g:d,h=y>h?y:h}if(i&&"haystack"===_["curve-style"].strValue){var X=A.haystackPts;if(v=X[0].x,g=X[0].y,f=X[1].x,y=X[1].y,v>f){var V=v;v=f,f=V}if(g>y){var V=g;g=y,y=V}u=u>v?v:u,c=f>c?f:c,d=d>g?g:d,h=y>h?y:h}}if(i){var w=x._private,_=w.style,A=w.rstyle,Y=_.label.strValue,$=_["font-size"],H=_["text-halign"],W=_["text-valign"],Z=A.labelWidth,U=A.labelHeight,G=A.labelX,K=A.labelY,J=x.isEdge(),Q="autorotate"===_["edge-text-rotation"].strValue;if(l&&Y&&$&&null!=U&&null!=Z&&null!=G&&null!=K&&H&&W){var ee,te,re,ne,ie=U,ae=Z;if(J){if(ee=G-ae/2,te=G+ae/2,re=K-ie/2,ne=K+ie/2,Q){var oe=w.rscratch.labelAngle,se=Math.cos(oe),le=Math.sin(oe),ue=function(e,t){return e-=G,t-=K,{x:e*se-t*le+G,y:e*le+t*se+K}},ce=ue(ee,re),de=ue(ee,ne),he=ue(te,re),pe=ue(te,ne);ee=Math.min(ce.x,de.x,he.x,pe.x),te=Math.max(ce.x,de.x,he.x,pe.x),re=Math.min(ce.y,de.y,he.y,pe.y),ne=Math.max(ce.y,de.y,he.y,pe.y)}}else{switch(H.value){case"left":ee=G-ae,te=G;break;case"center":ee=G-ae/2,te=G+ae/2;break;case"right":ee=G,te=G+ae}switch(W.value){case"top":re=K-ie,ne=K;break;case"center":re=K-ie/2,ne=K+ie/2;break;case"bottom":re=K,ne=K+ie}}u=u>ee?ee:u,c=te>c?te:c,d=d>re?re:d,h=ne>h?ne:h}}}}var ve=function(e){return e===1/0||e===-(1/0)?0:e};return u=ve(u),c=ve(c),d=ve(d),h=ve(h),{x1:u,x2:c,y1:d,y2:h,w:c-u,h:h-d}}};var l=function(e){e.uppercaseName=s.capitalize(e.name),e.autoName="auto"+e.uppercaseName,e.labelName="label"+e.uppercaseName,e.outerName="outer"+e.uppercaseName,e.uppercaseOuterName=s.capitalize(e.outerName),n[e.name]=function(){var t=this[0],r=t._private,n=r.cy,i=n._private.styleEnabled;if(t){if(!i)return 1;var a=r.style[e.name];switch(a.strValue){case"auto":return r[e.autoName]||0;case"label":return r.rstyle[e.labelName]||0;default:return a.pfValue}}},n["outer"+e.uppercaseName]=function(){var t=this[0],r=t._private,n=r.cy,i=n._private.styleEnabled;if(t){if(i){var a=r.style,o=t[e.name](),s=a["border-width"].pfValue,l=a[e.paddings[0]].pfValue+a[e.paddings[1]].pfValue;return o+s+l}return 1}},n["rendered"+e.uppercaseName]=function(){var t=this[0];if(t){var r=t[e.name]();return r*this.cy().zoom()}},n["rendered"+e.uppercaseOuterName]=function(){var t=this[0];if(t){var r=t[e.outerName]();return r*this.cy().zoom()}}};l({name:"width",paddings:["padding-left","padding-right"]}),l({name:"height",paddings:["padding-top","padding-bottom"]}),n.modelPosition=n.point=n.position,n.modelPositions=n.points=n.positions,n.renderedPoint=n.renderedPosition,n.relativePoint=n.relativePosition,n.boundingbox=n.boundingBox,n.renderedBoundingbox=n.renderedBoundingBox,t.exports=i},{"../define":41,"../is":77,"../util":94}],19:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a=function(e,t,r){if(!(this instanceof a))return new a(e,t,r);var o=this;if(r=void 0===r||r?!0:!1,void 0===e||void 0===t||!i.core(e))return void n.error("An element must have a core reference and parameters set");var s=t.group;
if(null==s&&(s=null!=t.data.source&&null!=t.data.target?"edges":"nodes"),"nodes"!==s&&"edges"!==s)return void n.error("An element must be of type `nodes` or `edges`; you specified `"+s+"`");if(this.length=1,this[0]=this,this._private={cy:e,single:!0,data:t.data||{},position:t.position||{},autoWidth:void 0,autoHeight:void 0,listeners:[],group:s,style:{},rstyle:{},styleCxts:[],removed:!0,selected:t.selected?!0:!1,selectable:void 0===t.selectable?!0:t.selectable?!0:!1,locked:t.locked?!0:!1,grabbed:!1,grabbable:void 0===t.grabbable?!0:t.grabbable?!0:!1,active:!1,classes:{},animation:{current:[],queue:[]},rscratch:{},scratch:t.scratch||{},edges:[],children:[]},t.renderedPosition){var l=t.renderedPosition,u=e.pan(),c=e.zoom();this._private.position={x:(l.x-u.x)/c,y:(l.y-u.y)/c}}if(i.string(t.classes))for(var d=t.classes.split(/\s+/),h=0,p=d.length;p>h;h++){var v=d[h];v&&""!==v&&(o._private.classes[v]=!0)}(t.style||t.css)&&e.style().applyBypass(this,t.style||t.css),(void 0===r||r)&&this.restore()};t.exports=a},{"../is":77,"../util":94}],20:[function(e,t,r){"use strict";var n=e("../define"),i={on:n.on(),one:n.on({unbindSelfOnTrigger:!0}),once:n.on({unbindAllBindersOnTrigger:!0}),off:n.off(),trigger:n.trigger(),rtrigger:function(e,t){return 0!==this.length?(this.cy().notify({type:e,collection:this}),this.trigger(e,t),this):void 0}};n.eventAliasesOn(i),t.exports=i},{"../define":41}],21:[function(e,t,r){"use strict";var n=e("../is"),i=e("../selector"),a={nodes:function(e){return this.filter(function(e,t){return t.isNode()}).filter(e)},edges:function(e){return this.filter(function(e,t){return t.isEdge()}).filter(e)},filter:function(e){if(n.fn(e)){for(var t=[],r=0;r<this.length;r++){var a=this[r];e.apply(a,[r,a])&&t.push(a)}return this.spawn(t)}return n.string(e)||n.elementOrCollection(e)?i(e).filter(this):void 0===e?this:this.spawn()},not:function(e){if(e){n.string(e)&&(e=this.filter(e));for(var t=[],r=0;r<this.length;r++){var i=this[r],a=e._private.ids[i.id()];a||t.push(i)}return this.spawn(t)}return this},absoluteComplement:function(){var e=this._private.cy;return e.elements().not(this)},intersect:function(e){if(n.string(e)){var t=e;return this.filter(t)}for(var r=[],i=this,a=e,o=this.length<e.length,s=o?a._private.ids:i._private.ids,l=o?i:a,u=0;u<l.length;u++){var c=l[u]._private.data.id,d=s[c];d&&r.push(d)}return this.spawn(r)},xor:function(e){var t=this._private.cy;n.string(e)&&(e=t.$(e));var r=[],i=this,a=e,o=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=i._private.data.id,o=t._private.ids[a];o||r.push(i)}};return o(i,a),o(a,i),this.spawn(r)},diff:function(e){var t=this._private.cy;n.string(e)&&(e=t.$(e));var r=[],i=[],a=[],o=this,s=e,l=function(e,t,r){for(var n=0;n<e.length;n++){var i=e[n],o=i._private.data.id,s=t._private.ids[o];s?a.push(i):r.push(i)}};return l(o,s,r),l(s,o,i),{left:this.spawn(r,{unique:!0}),right:this.spawn(i,{unique:!0}),both:this.spawn(a,{unique:!0})}},add:function(e){var t=this._private.cy;if(!e)return this;if(n.string(e)){var r=e;e=t.elements(r)}for(var i=[],a=0;a<this.length;a++)i.push(this[a]);for(var a=0;a<e.length;a++){var o=!this._private.ids[e[a].id()];o&&i.push(e[a])}return this.spawn(i)},merge:function(e){var t=this._private,r=t.cy;if(!e)return this;if(n.string(e)){var i=e;e=r.elements(i)}for(var a=0;a<e.length;a++){var o=e[a],s=o.id(),l=!t.ids[s];if(l){var u=this.length++;this[u]=o,t.ids[s]=o,t.indexes[s]=u}}return this},unmergeOne:function(e){e=e[0];var t=this._private,r=e.id(),n=t.indexes[r];if(null==n)return this;this[n]=void 0,t.ids[r]=void 0,t.indexes[r]=void 0;var i=n===this.length-1;if(this.length>1&&!i){var a=this.length-1,o=this[a];this[a]=void 0,this[n]=o,t.indexes[o.id()]=n}return this.length--,this},unmerge:function(e){var t=this._private.cy;if(!e)return this;if(n.string(e)){var r=e;e=t.elements(r)}for(var i=0;i<e.length;i++)this.unmergeOne(e[i]);return this},map:function(e,t){for(var r=[],n=this,i=0;i<n.length;i++){var a=n[i],o=t?e.apply(t,[a,i,n]):e(a,i,n);r.push(o)}return r},stdFilter:function(e,t){for(var r=[],n=this,i=0;i<n.length;i++){var a=n[i],o=t?e.apply(t,[a,i,n]):e(a,i,n);o&&r.push(a)}return this.spawn(r)},max:function(e,t){for(var r,n=-(1/0),i=this,a=0;a<i.length;a++){var o=i[a],s=t?e.apply(t,[o,a,i]):e(o,a,i);s>n&&(n=s,r=o)}return{value:n,ele:r}},min:function(e,t){for(var r,n=1/0,i=this,a=0;a<i.length;a++){var o=i[a],s=t?e.apply(t,[o,a,i]):e(o,a,i);n>s&&(n=s,r=o)}return{value:n,ele:r}}},o=a;o.u=o["|"]=o["+"]=o.union=o.or=o.add,o["\\"]=o["!"]=o["-"]=o.difference=o.relativeComplement=o.subtract=o.not,o.n=o["&"]=o["."]=o.and=o.intersection=o.intersect,o["^"]=o["(+)"]=o["(-)"]=o.symmetricDifference=o.symdiff=o.xor,o.fnFilter=o.filterFn=o.stdFilter,o.complement=o.abscomp=o.absoluteComplement,t.exports=a},{"../is":77,"../selector":81}],22:[function(e,t,r){"use strict";var n={isNode:function(){return"nodes"===this.group()},isEdge:function(){return"edges"===this.group()},isLoop:function(){return this.isEdge()&&this.source().id()===this.target().id()},isSimple:function(){return this.isEdge()&&this.source().id()!==this.target().id()},group:function(){var e=this[0];return e?e._private.group:void 0}};t.exports=n},{}],23:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a=e("./element"),o={prefix:"ele",id:0,generate:function(e,t,r){var n=(i.element(t)?t._private:t,null!=r?r:this.prefix+this.id);if(e.getElementById(n).empty())this.id++;else for(;!e.getElementById(n).empty();)n=this.prefix+ ++this.id;return n}},s=function(e,t,r){if(!(this instanceof s))return new s(e,t,r);if(void 0===e||!i.core(e))return void n.error("A collection must have a reference to the core");var l={},u={},c=!1;if(t){if(t.length>0&&i.plainObject(t[0])&&!i.element(t[0])){c=!0;for(var d=[],h={},p=0,v=t.length;v>p;p++){var f=t[p];null==f.data&&(f.data={});var g=f.data;if(null==g.id)g.id=o.generate(e,f);else if(0!==e.getElementById(g.id).length||h[g.id])continue;var y=new a(e,f,!1);d.push(y),h[g.id]=!0}t=d}}else t=[];this.length=0;for(var p=0,v=t.length;v>p;p++){var m=t[p];if(m){var b=m._private.data.id;(!r||r.unique&&!l[b])&&(l[b]=m,u[b]=this.length,this[this.length]=m,this.length++)}}this._private={cy:e,ids:l,indexes:u},c&&this.restore()},l=a.prototype=s.prototype;l.instanceString=function(){return"collection"},l.spawn=function(e,t,r){return i.core(e)||(r=t,t=e,e=this.cy()),new s(e,t,r)},l.cy=function(){return this._private.cy},l.element=function(){return this[0]},l.collection=function(){return i.collection(this)?this:new s(this._private.cy,[this])},l.unique=function(){return new s(this._private.cy,this,{unique:!0})},l.getElementById=function(e){var t=this._private.cy,r=this._private.ids[e];return r?r:new s(t)},l.json=function(e){var t=this.element(),r=this.cy();if(null==t&&e)return this;if(null==t)return void 0;var a=t._private;if(i.plainObject(e)){r.startBatch(),e.data&&t.data(e.data),e.position&&t.position(e.position);var o=function(r,n,i){var o=e[r];null!=o&&o!==a[r]&&(o?t[n]():t[i]())};return o("removed","remove","restore"),o("selected","select","unselect"),o("selectable","selectify","unselectify"),o("locked","lock","unlock"),o("grabbable","grabify","ungrabify"),null!=e.classes&&t.classes(e.classes),r.endBatch(),this}if(void 0===e){var s={data:n.copy(a.data),position:n.copy(a.position),group:a.group,removed:a.removed,selected:a.selected,selectable:a.selectable,locked:a.locked,grabbable:a.grabbable,classes:null},l=[];for(var u in a.classes)a.classes[u]&&l.push(u);return s.classes=l.join(" "),s}},l.jsons=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t],n=r.json();e.push(n)}return e},l.clone=function(){for(var e=this.cy(),t=[],r=0;r<this.length;r++){var n=this[r],i=n.json(),o=new a(e,i,!1);t.push(o)}return new s(e,t)},l.copy=l.clone,l.restore=function(e){var t=this,r=[],a=t.cy();void 0===e&&(e=!0);for(var l=[],u=[],c=[],d=0,h=0,p=0,v=t.length;v>p;p++){var f=t[p];f.isNode()?(u.push(f),d++):(c.push(f),h++)}l=u.concat(c);for(var p=0,v=l.length;v>p;p++){var f=l[p];if(f.removed()){var g=f._private,y=g.data;if(void 0===y.id)y.id=o.generate(a,f);else if(i.number(y.id))y.id=""+y.id;else{if(i.emptyString(y.id)||!i.string(y.id)){n.error("Can not create element with invalid string ID `"+y.id+"`");continue}if(0!==a.getElementById(y.id).length){n.error("Can not create second element with ID `"+y.id+"`");continue}}var m=y.id;if(f.isNode()){var b=f,x=g.position;null==x.x&&(x.x=0),null==x.y&&(x.y=0)}if(f.isEdge()){for(var w=f,_=["source","target"],E=_.length,D=!1,k=0;E>k;k++){var T=_[k],S=y[T];i.number(S)&&(S=y[T]=""+y[T]),null==S||""===S?(n.error("Can not create edge `"+m+"` with unspecified "+T),D=!0):a.getElementById(S).empty()&&(n.error("Can not create edge `"+m+"` with nonexistant "+T+" `"+S+"`"),D=!0)}if(D)continue;var P=a.getElementById(y.source),C=a.getElementById(y.target);P._private.edges.push(w),C._private.edges.push(w),w._private.source=P,w._private.target=C}g.ids={},g.ids[m]=f,g.removed=!1,a.addToPool(f),r.push(f)}}for(var p=0;d>p;p++){var b=l[p],y=b._private.data;i.number(y.parent)&&(y.parent=""+y.parent);var N=y.parent,M=null!=N;if(M){var B=a.getElementById(N);if(B.empty())y.parent=void 0;else{for(var z=!1,O=B;!O.empty();){if(b.same(O)){z=!0,y.parent=void 0;break}O=O.parent()}z||(B[0]._private.children.push(b),b._private.parent=B[0],a._private.hasCompoundNodes=!0)}}}if(r=new s(a,r),r.length>0){var I=r.add(r.connectedNodes()).add(r.parent());I.updateStyle(e),e?r.rtrigger("add"):r.trigger("add")}return t},l.removed=function(){var e=this[0];return e&&e._private.removed},l.inside=function(){var e=this[0];return e&&!e._private.removed},l.remove=function(e){function t(e){for(var t=e._private.edges,r=0;r<t.length;r++)n(t[r])}function r(e){for(var t=e._private.children,r=0;r<t.length;r++)n(t[r])}function n(e){var n=c[e.id()];n||(c[e.id()]=!0,e.isNode()?(u.push(e),t(e),r(e)):u.unshift(e))}function i(e,t){for(var r=e._private.edges,n=0;n<r.length;n++){var i=r[n];if(t===i){r.splice(n,1);break}}}function a(e,t){t=t[0],e=e[0];for(var r=e._private.children,n=0;n<r.length;n++)if(r[n][0]===t[0]){r.splice(n,1);break}}var o=this,l=[],u=[],c={},d=o._private.cy;void 0===e&&(e=!0);for(var h=0,p=o.length;p>h;h++){var v=o[h];n(v)}for(var h=0;h<u.length;h++){var v=u[h];if(v._private.removed=!0,d.removeFromPool(v),l.push(v),v.isEdge()){var f=v.source()[0],g=v.target()[0];i(f,v),i(g,v)}else{var y=v.parent();0!==y.length&&a(y,v)}}var m=d._private.elements;d._private.hasCompoundNodes=!1;for(var h=0;h<m.length;h++){var v=m[h];if(v.isParent()){d._private.hasCompoundNodes=!0;break}}var b=new s(this.cy(),l);b.size()>0&&(e&&this.cy().notify({type:"remove",collection:b}),b.trigger("remove"));for(var x={},h=0;h<u.length;h++){var v=u[h],w="nodes"===v._private.group,_=v._private.data.parent;if(w&&void 0!==_&&!x[_]){x[_]=!0;var y=d.getElementById(_);y&&0!==y.length&&!y._private.removed&&0===y.children().length&&y.updateStyle()}}return new s(d,l)},l.move=function(e){var t=this._private.cy;if(void 0!==e.source||void 0!==e.target){var r=e.source,n=e.target,i=t.getElementById(r).length>0,a=t.getElementById(n).length>0;if(i||a){var o=this.jsons();this.remove();for(var s=0;s<o.length;s++){var l=o[s];"edges"===l.group&&(i&&(l.data.source=r),a&&(l.data.target=n))}return t.add(o)}}else if(void 0!==e.parent){var u=e.parent,c=null===u||t.getElementById(u).length>0;if(c){var o=this.jsons(),d=this.descendants(),h=d.merge(d.add(this).connectedEdges());this.remove();for(var s=0;s<this.length;s++){var l=o[s];"nodes"===l.group&&(l.data.parent=null===u?void 0:u)}}return t.add(o).merge(h.restore())}return this},[e("./algorithms"),e("./animation"),e("./class"),e("./comparators"),e("./compounds"),e("./data"),e("./degree"),e("./dimensions"),e("./events"),e("./filter"),e("./group"),e("./index"),e("./iteration"),e("./layout"),e("./style"),e("./switch-functions"),e("./traversing")].forEach(function(e){n.extend(l,e)}),t.exports=s},{"../is":77,"../util":94,"./algorithms":9,"./animation":12,"./class":13,"./comparators":14,"./compounds":15,"./data":16,"./degree":17,"./dimensions":18,"./element":19,"./events":20,"./filter":21,"./group":22,"./index":23,"./iteration":24,"./layout":25,"./style":26,"./switch-functions":27,"./traversing":28}],24:[function(e,t,r){"use strict";var n=e("../is"),i=e("./zsort"),a={each:function(e){if(n.fn(e))for(var t=0;t<this.length;t++){var r=this[t],i=e.apply(r,[t,r]);if(i===!1)break}return this},forEach:function(e,t){if(n.fn(e))for(var r=0;r<this.length;r++){var i=this[r],a=t?e.apply(t,[i,r,this]):e(i,r,this);if(a===!1)break}return this},toArray:function(){for(var e=[],t=0;t<this.length;t++)e.push(this[t]);return e},slice:function(e,t){var r=[],n=this.length;null==t&&(t=n),null==e&&(e=0),0>e&&(e=n+e),0>t&&(t=n+t);for(var i=e;i>=0&&t>i&&n>i;i++)r.push(this[i]);return this.spawn(r)},size:function(){return this.length},eq:function(e){return this[e]||this.spawn()},first:function(){return this[0]||this.spawn()},last:function(){return this[this.length-1]||this.spawn()},empty:function(){return 0===this.length},nonempty:function(){return!this.empty()},sort:function(e){if(!n.fn(e))return this;var t=this.toArray().sort(e);return this.spawn(t)},sortByZIndex:function(){return this.sort(i)},zDepth:function(){var e=this[0];if(!e)return void 0;var t=e._private,r=t.group;if("nodes"===r){var n=t.data.parent?e.parents().size():0;return e.isParent()?n:Number.MAX_VALUE}var i=t.source,a=t.target,o=i.zDepth(),s=a.zDepth();return Math.max(o,s,0)}};t.exports=a},{"../is":77,"./zsort":29}],25:[function(e,t,r){"use strict";var n=e("../is"),i=e("../util"),a={layoutPositions:function(e,t,r){var i=this.nodes(),a=this.cy();if(e.trigger({type:"layoutstart",layout:e}),e.animations=[],t.animate){for(var o=0;o<i.length;o++){var s=i[o],l=o===i.length-1,u=r.call(s,o,s),c=s.position();n.number(c.x)&&n.number(c.y)||s.silentPosition({x:0,y:0});var d=s.animation({position:u,duration:t.animationDuration,easing:t.animationEasing,step:l?function(){t.fit&&a.fit(t.eles,t.padding)}:void 0,complete:l?function(){null!=t.zoom&&a.zoom(t.zoom),t.pan&&a.pan(t.pan),t.fit&&a.fit(t.eles,t.padding),e.one("layoutstop",t.stop),e.trigger({type:"layoutstop",layout:e})}:void 0});e.animations.push(d),d.play()}e.one("layoutready",t.ready),e.trigger({type:"layoutready",layout:e})}else i.positions(r),t.fit&&a.fit(t.eles,t.padding),null!=t.zoom&&a.zoom(t.zoom),t.pan&&a.pan(t.pan),e.one("layoutready",t.ready),e.trigger({type:"layoutready",layout:e}),e.one("layoutstop",t.stop),e.trigger({type:"layoutstop",layout:e});return this},layout:function(e){var t=this.cy();return t.layout(i.extend({},e,{eles:this})),this},makeLayout:function(e){var t=this.cy();return t.makeLayout(i.extend({},e,{eles:this}))}};a.createLayout=a.makeLayout,t.exports=a},{"../is":77,"../util":94}],26:[function(e,t,r){"use strict";var n=e("../is"),i={updateStyle:function(e){var t=this._private.cy;if(!t.styleEnabled())return this;if(t._private.batchingStyle){var r=t._private.batchStyleEles;return r.merge(this),this}var n=t.style();e=e||void 0===e?!0:!1,n.apply(this);var i=this.updateCompoundBounds(),a=i.length>0?this.add(i):this;return e?a.rtrigger("style"):a.trigger("style"),this},updateMappers:function(e){var t=this._private.cy,r=t.style();if(e=e||void 0===e?!0:!1,!t.styleEnabled())return this;r.updateMappers(this);var n=this.updateCompoundBounds(),i=n.length>0?this.add(n):this;return e?i.rtrigger("style"):i.trigger("style"),this},renderedCss:function(e){var t=this.cy();if(!t.styleEnabled())return this;var r=this[0];if(r){var n=r.cy().style().getRenderedStyle(r);return void 0===e?n:n[e]}},css:function(e,t){var r=this.cy();if(!r.styleEnabled())return this;var i=!1,a=r.style();if(n.plainObject(e)){var o=e;a.applyBypass(this,o,i);var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;l.rtrigger("style")}else if(n.string(e)){if(void 0===t){var u=this[0];return u?u._private.style[e].strValue:void 0}a.applyBypass(this,e,t,i);var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;l.rtrigger("style")}else if(void 0===e){var u=this[0];return u?a.getRawStyle(u):void 0}return this},removeCss:function(e){var t=this.cy();if(!t.styleEnabled())return this;var r=!1,n=t.style(),i=this;if(void 0===e)for(var a=0;a<i.length;a++){var o=i[a];n.removeAllBypasses(o,r)}else{e=e.split(/\s+/);for(var a=0;a<i.length;a++){var o=i[a];n.removeBypasses(o,e,r)}}var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;return l.rtrigger("style"),this},show:function(){return this.css("display","element"),this},hide:function(){return this.css("display","none"),this},visible:function(){var e=this.cy();if(!e.styleEnabled())return!0;var t=this[0],r=e.hasCompoundNodes();if(t){var n=t._private.style;if("visible"!==n.visibility.value||"element"!==n.display.value)return!1;if("nodes"===t._private.group){if(!r)return!0;var i=t._private.data.parent?t.parents():null;if(i)for(var a=0;a<i.length;a++){var o=i[a],s=o._private.style,l=s.visibility.value,u=s.display.value;if("visible"!==l||"element"!==u)return!1}return!0}var c=t._private.source,d=t._private.target;return c.visible()&&d.visible()}},hidden:function(){var e=this[0];return e?!e.visible():void 0},effectiveOpacity:function(){var e=this.cy();if(!e.styleEnabled())return 1;var t=e.hasCompoundNodes(),r=this[0];if(r){var n=r._private,i=n.style.opacity.value;if(!t)return i;var a=n.data.parent?r.parents():null;if(a)for(var o=0;o<a.length;o++){var s=a[o],l=s._private.style.opacity.value;i=l*i}return i}},transparent:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0],r=t.cy().hasCompoundNodes();return t?r?0===t.effectiveOpacity():0===t._private.style.opacity.value:void 0},isFullAutoParent:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0];if(t){var r="auto"===t._private.style.width.value,n="auto"===t._private.style.height.value;return t.isParent()&&r&&n}},backgrounding:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0];return t._private.backgrounding?!0:!1}};i.bypass=i.style=i.css,i.renderedStyle=i.renderedCss,i.removeBypass=i.removeStyle=i.removeCss,t.exports=i},{"../is":77}],27:[function(e,t,r){"use strict";function n(e){return function(){var t=arguments,r=[];if(2===t.length){var n=t[0],i=t[1];this.bind(e.event,n,i)}else if(1===t.length){var i=t[0];this.bind(e.event,i)}else if(0===t.length){for(var a=0;a<this.length;a++){var o=this[a],s=!e.ableField||o._private[e.ableField],l=o._private[e.field]!=e.value;if(e.overrideAble){var u=e.overrideAble(o);if(void 0!==u&&(s=u,!u))return this}s&&(o._private[e.field]=e.value,l&&r.push(o))}var c=this.spawn(r);c.updateStyle(),c.trigger(e.event)}return this}}function i(e){a[e.field]=function(){var t=this[0];if(t){if(e.overrideField){var r=e.overrideField(t);if(void 0!==r)return r}return t._private[e.field]}},a[e.on]=n({event:e.on,field:e.field,ableField:e.ableField,overrideAble:e.overrideAble,value:!0}),a[e.off]=n({event:e.off,field:e.field,ableField:e.ableField,overrideAble:e.overrideAble,value:!1})}var a={};i({field:"locked",overrideField:function(e){return e.cy().autolock()?!0:void 0},on:"lock",off:"unlock"}),i({field:"grabbable",overrideField:function(e){return e.cy().autoungrabify()?!1:void 0},on:"grabify",off:"ungrabify"}),i({field:"selected",ableField:"selectable",overrideAble:function(e){return e.cy().autounselectify()?!1:void 0},on:"select",off:"unselect"}),i({field:"selectable",overrideField:function(e){return e.cy().autounselectify()?!1:void 0},on:"selectify",off:"unselectify"}),a.deselect=a.unselect,a.grabbed=function(){var e=this[0];return e?e._private.grabbed:void 0},i({field:"active",on:"activate",off:"unactivate"}),a.inactive=function(){var e=this[0];return e?!e._private.active:void 0},t.exports=a},{}],28:[function(e,t,r){"use strict";function n(e){return function(t){for(var r=[],n=0;n<this.length;n++){var i=this[n],a=i._private[e.attr];a&&r.push(a)}return this.spawn(r,{unique:!0}).filter(t)}}function i(e){return function(t){var r=[],n=this._private.cy,i=e||{};s.string(t)&&(t=n.$(t));for(var a=this._private.ids,o=t._private.ids,l=0;l<t.length;l++)for(var u=t[l]._private.edges,c=0;c<u.length;c++){var d=u[c],h=d._private.data,p=a[h.source]&&o[h.target],v=o[h.source]&&a[h.target],f=p||v;if(f){if(i.thisIs){if("source"===i.thisIs&&!p)continue;if("target"===i.thisIs&&!v)continue}r.push(d)}}return this.spawn(r,{unique:!0})}}function a(e){var t={codirected:!1};return e=o.extend({},t,e),function(t){for(var r=[],n=this.edges(),i=e,a=0;a<n.length;a++)for(var o=n[a],s=o.source()[0],l=s.id(),u=o.target()[0],c=u.id(),d=s._private.edges,h=0;h<d.length;h++){var p=d[h],v=p._private.data,f=v.target,g=v.source,y=f===c&&g===l,m=l===f&&c===g;(i.codirected&&y||!i.codirected&&(y||m))&&r.push(p)}return this.spawn(r,{unique:!0}).filter(t)}}var o=e("../util"),s=e("../is"),l={};o.extend(l,{roots:function(e){for(var t=this,r=[],n=0;n<t.length;n++){var i=t[n];if(i.isNode()){var a=i.connectedEdges(function(){return this.data("target")===i.id()&&this.data("source")!==i.id()}).length>0;a||r.push(i)}}return this.spawn(r,{unique:!0}).filter(e)},leaves:function(e){for(var t=this,r=[],n=0;n<t.length;n++){var i=t[n];if(i.isNode()){var a=i.connectedEdges(function(){return this.data("source")===i.id()&&this.data("target")!==i.id()}).length>0;a||r.push(i)}}return this.spawn(r,{unique:!0}).filter(e)},outgoers:function(e){for(var t=this,r=[],n=0;n<t.length;n++){var i=t[n],a=i.id();if(i.isNode())for(var o=i._private.edges,s=0;s<o.length;s++){var l=o[s],u=l._private.data.source,c=l._private.data.target;u===a&&c!==a&&(r.push(l),r.push(l.target()[0]))}}return this.spawn(r,{unique:!0}).filter(e)},successors:function(e){for(var t=this,r=[],n={};;){var i=t.outgoers();if(0===i.length)break;for(var a=!1,o=0;o<i.length;o++){var s=i[o],l=s.id();n[l]||(n[l]=!0,r.push(s),a=!0)}if(!a)break;t=i}return this.spawn(r,{unique:!0}).filter(e)},incomers:function(e){for(var t=this,r=[],n=0;n<t.length;n++){var i=t[n],a=i.id();if(i.isNode())for(var o=i._private.edges,s=0;s<o.length;s++){var l=o[s],u=l._private.data.source,c=l._private.data.target;c===a&&u!==a&&(r.push(l),r.push(l.source()[0]))}}return this.spawn(r,{unique:!0}).filter(e)},predecessors:function(e){for(var t=this,r=[],n={};;){var i=t.incomers();if(0===i.length)break;for(var a=!1,o=0;o<i.length;o++){var s=i[o],l=s.id();n[l]||(n[l]=!0,r.push(s),a=!0)}if(!a)break;t=i}return this.spawn(r,{unique:!0}).filter(e)}}),o.extend(l,{neighborhood:function(e){for(var t=[],r=this.nodes(),n=0;n<r.length;n++)for(var i=r[n],a=i.connectedEdges(),o=0;o<a.length;o++){var s=a[o],l=s._private.source,u=s._private.target,c=i===l?u:l;c.length>0&&t.push(c[0]),t.push(s[0])}return this.spawn(t,{unique:!0}).filter(e)},closedNeighborhood:function(e){return this.neighborhood().add(this).filter(e)},openNeighborhood:function(e){return this.neighborhood(e)}}),l.neighbourhood=l.neighborhood,l.closedNeighbourhood=l.closedNeighborhood,l.openNeighbourhood=l.openNeighborhood,o.extend(l,{source:function(e){var t,r=this[0];return r&&(t=r._private.source),t&&e?t.filter(e):t},target:function(e){var t,r=this[0];return r&&(t=r._private.target),t&&e?t.filter(e):t},sources:n({attr:"source"}),targets:n({attr:"target"})}),o.extend(l,{edgesWith:i(),edgesTo:i({thisIs:"source"})}),o.extend(l,{connectedEdges:function(e){for(var t=[],r=this,n=0;n<r.length;n++){var i=r[n];if(i.isNode())for(var a=i._private.edges,o=0;o<a.length;o++){var s=a[o];t.push(s)}}return this.spawn(t,{unique:!0}).filter(e)},connectedNodes:function(e){for(var t=[],r=this,n=0;n<r.length;n++){var i=r[n];i.isEdge()&&(t.push(i.source()[0]),t.push(i.target()[0]))}return this.spawn(t,{unique:!0}).filter(e)},parallelEdges:a(),codirectedEdges:a({codirected:!0})}),o.extend(l,{components:function(){var e=this.cy(),t=e.collection(),r=this.nodes(),n=[],i=function(e,n){t.merge(e),r.unmerge(e),n.merge(e)};do{var a=e.collection();n.push(a);var o=r[0];i(o,a),this.bfs({directed:!1,roots:o,visit:function(e,t,r,n,o){i(r,a)}})}while(r.length>0);return n.map(function(e){return e.closedNeighborhood()})}}),t.exports=l},{"../is":77,"../util":94}],29:[function(e,t,r){"use strict";var n=function(e,t){var r=e.cy(),n=e._private,i=t._private,a=n.style["z-index"].value-i.style["z-index"].value,o=0,s=0,l=r.hasCompoundNodes(),u="nodes"===n.group,c="edges"===n.group,d="nodes"===i.group,h="edges"===i.group;l&&(o=e.zDepth(),s=t.zDepth());var p=o-s,v=0===p;return v?u&&h?1:c&&d?-1:0===a?n.index-i.index:a:p};t.exports=n},{}],30:[function(e,t,r){"use strict";function n(e){var t=!u||"interactive"!==u.readyState&&"complete"!==u.readyState?n:e;setTimeout(t,9,e)}var i=e("../is"),a=e("../util"),o=e("../collection"),s=e("../collection/element"),l=e("../window"),u=l?l.document:null,c=e("../extensions/renderer/null"),d={add:function(e){var t,r=this;if(i.elementOrCollection(e)){var n=e;if(n._private.cy===r)t=n.restore();else{for(var l=[],u=0;u<n.length;u++){var c=n[u];l.push(c.json())}t=new o(r,l)}}else if(i.array(e)){var l=e;t=new o(r,l)}else if(i.plainObject(e)&&(i.array(e.nodes)||i.array(e.edges))){for(var d=e,l=[],h=["nodes","edges"],u=0,p=h.length;p>u;u++){var v=h[u],f=d[v];if(i.array(f))for(var g=0,y=f.length;y>g;g++){var m=a.extend({group:v},f[g]);l.push(m)}}t=new o(r,l)}else{var m=e;t=new s(r,m).collection()}return t},remove:function(e){if(i.elementOrCollection(e))e=e;else if(i.string(e)){var t=e;e=this.$(t)}return e.remove()},load:function(e,t,r){function o(){s.one("layoutready",function(e){s.notifications(!0),s.trigger(e),s.notify({type:"load",collection:s.elements()}),s.one("load",t),s.trigger("load")}).one("layoutstop",function(){s.one("done",r),s.trigger("done")});var e=a.extend({},s._private.options.layout);e.eles=s.$(),s.layout(e)}var s=this;s.notifications(!1);var u=s.elements();return u.length>0&&u.remove(),null!=e&&(i.plainObject(e)||i.array(e))&&s.add(e),!l||s.renderer()instanceof c?o():n(o),this}};t.exports=d},{"../collection":23,"../collection/element":19,"../extensions/renderer/null":73,"../is":77,"../util":94,"../window":100}],31:[function(e,t,r){"use strict";var n=e("../define"),i=e("../util"),a=e("../is"),o={animate:n.animate(),animation:n.animation(),animated:n.animated(),clearQueue:n.clearQueue(),delay:n.delay(),delayAnimation:n.delayAnimation(),stop:n.stop(),addToAnimationPool:function(e){var t=this;t.styleEnabled()&&t._private.aniEles.merge(e)},stopAnimationLoop:function(){this._private.animationsRunning=!1},startAnimationLoop:function(){function e(){c._private.animationsRunning&&i.requestAnimationFrame(function(r){t(r),e()})}function t(e){function t(t,i){var o=t._private,s=o.animation.current,l=o.animation.queue,u=!1;if(0===s.length){var c=l.shift();c&&s.push(c)}for(var d=function(e){for(var t=e.length-1;t>=0;t--){var r=e[t];r()}e.splice(0,e.length)},h=s.length-1;h>=0;h--){var p=s[h],v=p._private;v.stopped?(s.splice(h,1),v.hooked=!1,v.playing=!1,v.started=!1,d(v.frames)):(v.playing||v.applying)&&(v.playing&&v.applying&&(v.applying=!1),v.started||r(t,p,e),n(t,p,e,i),v.applying&&(v.applying=!1),d(v.frames),p.completed()&&(s.splice(h,1),v.hooked=!1,v.playing=!1,v.started=!1,d(v.completes)),u=!0)}return i||0!==s.length||0!==l.length||a.push(t),u}for(var i=c._private.aniEles,a=[],o=!1,s=0;s<i.length;s++){var l=i[s],u=t(l);o=o||u}var d=t(c,!0);if(o||d){var h;if(i.length>0){var p=i.updateCompoundBounds();h=p.length>0?i.add(p):i}c.notify({type:"draw",collection:h})}i.unmerge(a)}function r(e,t,r){var n=a.core(e),i=!n,o=e,s=c._private.style,l=t._private;if(i){var u=o._private.position;l.startPosition=l.startPosition||{x:u.x,y:u.y},l.startStyle=l.startStyle||s.getValueStyle(o)}if(n){var d=c._private.pan;l.startPan=l.startPan||{x:d.x,y:d.y},l.startZoom=null!=l.startZoom?l.startZoom:c._private.zoom}l.started=!0,l.startTime=r-l.progress*l.duration}function n(e,t,r,n){var i=c._private.style,s=!n,l=e._private,d=t._private,p=d.easing,v=d.startTime;if(!d.easingImpl)if(null==p)d.easingImpl=h.linear;else{var f;if(a.string(p)){var g=i.parse("transition-timing-function",p);f=g.value}else f=p;var y,m;a.string(f)?(y=f,m=[]):(y=f[1],m=f.slice(2).map(function(e){return+e})),m.length>0?("spring"===y&&m.push(d.duration),d.easingImpl=h[y].apply(null,m)):d.easingImpl=h[y]}var b,x=d.easingImpl;if(b=0===d.duration?1:(r-v)/d.duration,d.applying&&(b=d.progress),0>b?b=0:b>1&&(b=1),null==d.delay){var w=d.startPosition,_=d.position,E=l.position;_&&s&&(o(w.x,_.x)&&(E.x=u(w.x,_.x,b,x)),o(w.y,_.y)&&(E.y=u(w.y,_.y,b,x)));var D=d.startPan,k=d.pan,T=l.pan,S=null!=k&&n;S&&(o(D.x,k.x)&&(T.x=u(D.x,k.x,b,x)),o(D.y,k.y)&&(T.y=u(D.y,k.y,b,x)),e.trigger("pan"));var P=d.startZoom,C=d.zoom,N=null!=C&&n;N&&(o(P,C)&&(l.zoom=u(P,C,b,x)),e.trigger("zoom")),(S||N)&&e.trigger("viewport");var M=d.style;if(M&&s)for(var B=0;B<M.length;B++){var z=M[B],y=z.name,O=z,I=d.startStyle[y],L=u(I,O,b,x);i.overrideBypass(e,y,L)}}return a.fn(d.step)&&d.step.apply(e,[r]),d.progress=b,b}function o(e,t){return null==e||null==t?!1:a.number(e)&&a.number(t)?!0:e&&t?!0:!1}function s(e,t,r){var n=1-r,i=r*r;return 3*n*n*r*e+3*n*i*t+i*r}function l(e,t){return function(r,n,i){return r+(n-r)*s(e,t,i)}}function u(e,t,r,n){0>r?r=0:r>1&&(r=1);var i,o;if(i=null!=e.pfValue||null!=e.value?null!=e.pfValue?e.pfValue:e.value:e,o=null!=t.pfValue||null!=t.value?null!=t.pfValue?t.pfValue:t.value:t,a.number(i)&&a.number(o))return n(i,o,r);if(a.array(i)&&a.array(o)){for(var s=[],l=0;l<o.length;l++){var u=i[l],c=o[l];if(null!=u&&null!=c){var d=n(u,c,r);e.roundValue&&(d=Math.round(d)),s.push(d)}else s.push(c)}return s}return void 0}var c=this;if(c._private.animationsRunning=!0,c.styleEnabled()){e();var d=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,n){var i={x:t.x+n.dx*r,v:t.v+n.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,n){var i={dx:r.v,dv:e(r)},a=t(r,.5*n,i),o=t(r,.5*n,a),s=t(r,n,o),l=1/6*(i.dx+2*(a.dx+o.dx)+s.dx),u=1/6*(i.dv+2*(a.dv+o.dv)+s.dv);return r.x=r.x+l*n,r.v=r.v+u*n,r}return function n(e,t,i){var a,o,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,d=1e-4,h=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,l.tension=e,l.friction=t,a=null!==i,a?(c=n(e,t),o=c/i*h):o=h;;)if(s=r(s||l,o),u.push(1+s.x),c+=16,!(Math.abs(s.x)>d&&Math.abs(s.v)>d))break;return a?function(e){return u[e*(u.length-1)|0]}:c}}(),h={linear:function(e,t,r){return e+(t-e)*r},ease:l(.25,.1,.25,1),"ease-in":l(.42,0,1,1),"ease-out":l(0,0,.58,1),"ease-in-out":l(.42,0,.58,1),"ease-in-sine":l(.47,0,.745,.715),"ease-out-sine":l(.39,.575,.565,1),"ease-in-out-sine":l(.445,.05,.55,.95),"ease-in-quad":l(.55,.085,.68,.53),"ease-out-quad":l(.25,.46,.45,.94),"ease-in-out-quad":l(.455,.03,.515,.955),"ease-in-cubic":l(.55,.055,.675,.19),"ease-out-cubic":l(.215,.61,.355,1),"ease-in-out-cubic":l(.645,.045,.355,1),"ease-in-quart":l(.895,.03,.685,.22),"ease-out-quart":l(.165,.84,.44,1),"ease-in-out-quart":l(.77,0,.175,1),"ease-in-quint":l(.755,.05,.855,.06),"ease-out-quint":l(.23,1,.32,1),"ease-in-out-quint":l(.86,0,.07,1),"ease-in-expo":l(.95,.05,.795,.035),"ease-out-expo":l(.19,1,.22,1),"ease-in-out-expo":l(1,0,0,1),"ease-in-circ":l(.6,.04,.98,.335),"ease-out-circ":l(.075,.82,.165,1),"ease-in-out-circ":l(.785,.135,.15,.86),spring:function(e,t,r){var n=d(e,t,r);return function(e,t,r){return e+(t-e)*n(r)}},"cubic-bezier":function(e,t,r,n){return l(e,t,r,n)}}}}};t.exports=o},{"../define":41,"../is":77,"../util":94}],32:[function(e,t,r){"use strict";var n=e("../define"),i={on:n.on(),one:n.on({unbindSelfOnTrigger:!0}),once:n.on({unbindAllBindersOnTrigger:!0}),off:n.off(),trigger:n.trigger()};n.eventAliasesOn(i),t.exports=i},{"../define":41}],33:[function(e,t,r){"use strict";var n={png:function(e){var t=this._private.renderer;return e=e||{},t.png(e)},jpg:function(e){var t=this._private.renderer;return e=e||{},e.bg=e.bg||"#fff",t.jpg(e)}};n.jpeg=n.jpg,t.exports=n},{}],34:[function(e,t,r){"use strict";var n=e("../window"),i=e("../util"),a=e("../collection"),o=e("../is"),s=e("../promise"),l=e("../define"),u=function(e){if(!(this instanceof u))return new u(e);var t=this;e=i.extend({},e);var r=e.container;r&&!o.htmlElement(r)&&o.htmlElement(r[0])&&(r=r[0]);var l=r?r._cyreg:null;l=l||{},l&&l.cy&&(l.cy.destroy(),l={});
var c=l.readies=l.readies||[];r&&(r._cyreg=l),l.cy=t;var d=void 0!==n&&void 0!==r&&!e.headless,h=e;h.layout=i.extend({name:d?"grid":"null"},h.layout),h.renderer=i.extend({name:d?"canvas":"null"},h.renderer);var p=function(e,t,r){return void 0!==t?t:void 0!==r?r:e},v=this._private={container:r,ready:!1,initrender:!1,options:h,elements:[],id2index:{},listeners:[],onRenders:[],aniEles:a(this),scratch:{},layout:null,renderer:null,notificationsEnabled:!0,minZoom:1e-50,maxZoom:1e50,zoomingEnabled:p(!0,h.zoomingEnabled),userZoomingEnabled:p(!0,h.userZoomingEnabled),panningEnabled:p(!0,h.panningEnabled),userPanningEnabled:p(!0,h.userPanningEnabled),boxSelectionEnabled:p(!0,h.boxSelectionEnabled),autolock:p(!1,h.autolock,h.autolockNodes),autoungrabify:p(!1,h.autoungrabify,h.autoungrabifyNodes),autounselectify:p(!1,h.autounselectify),styleEnabled:void 0===h.styleEnabled?d:h.styleEnabled,zoom:o.number(h.zoom)?h.zoom:1,pan:{x:o.plainObject(h.pan)&&o.number(h.pan.x)?h.pan.x:0,y:o.plainObject(h.pan)&&o.number(h.pan.y)?h.pan.y:0},animation:{current:[],queue:[]},hasCompoundNodes:!1,deferredExecQueue:[]},f=h.selectionType;void 0===f||"additive"!==f&&"single"!==f?v.selectionType="single":v.selectionType=f,o.number(h.minZoom)&&o.number(h.maxZoom)&&h.minZoom<h.maxZoom?(v.minZoom=h.minZoom,v.maxZoom=h.maxZoom):o.number(h.minZoom)&&void 0===h.maxZoom?v.minZoom=h.minZoom:o.number(h.maxZoom)&&void 0===h.minZoom&&(v.maxZoom=h.maxZoom);var g=function(e){for(var t=!1,r=0;r<y.length;r++){var n=y[r];if(o.promise(n)){t=!0;break}}return t?s.all(y).then(e):void e(y)};t.initRenderer(i.extend({hideEdgesOnViewport:h.hideEdgesOnViewport,hideLabelsOnViewport:h.hideLabelsOnViewport,textureOnViewport:h.textureOnViewport,wheelSensitivity:o.number(h.wheelSensitivity)&&h.wheelSensitivity>0?h.wheelSensitivity:1,motionBlur:void 0===h.motionBlur?!0:h.motionBlur,motionBlurOpacity:void 0===h.motionBlurOpacity?.05:h.motionBlurOpacity,pixelRatio:o.number(h.pixelRatio)&&h.pixelRatio>0?h.pixelRatio:"auto"===h.pixelRatio?void 0:1,desktopTapThreshold:void 0===h.desktopTapThreshold?4:h.desktopTapThreshold,touchTapThreshold:void 0===h.touchTapThreshold?8:h.touchTapThreshold},h.renderer));var y=[h.style,h.elements];g(function(e){var r=e[0],n=e[1];v.styleEnabled&&t.setStyle(r),h.initrender&&(t.on("initrender",h.initrender),t.on("initrender",function(){v.initrender=!0})),t.load(n,function(){t.startAnimationLoop(),v.ready=!0,o.fn(h.ready)&&t.on("ready",h.ready);for(var e=0;e<c.length;e++){var r=c[e];t.on("ready",r)}l&&(l.readies=[]),t.trigger("ready")},h.done)})},c=u.prototype;i.extend(c,{instanceString:function(){return"core"},isReady:function(){return this._private.ready},ready:function(e){this.isReady()?this.trigger("ready",[],e):this.on("ready",e)},initrender:function(){return this._private.initrender},destroy:function(){var e=this;e.stopAnimationLoop(),e.notify({type:"destroy"});var t=e.container();if(t)for(t._cyreg=null;t.childNodes.length>0;)t.removeChild(t.childNodes[0]);return e},getElementById:function(e){var t=this._private.id2index[e];return void 0!==t?this._private.elements[t]:a(this)},selectionType:function(){return this._private.selectionType},hasCompoundNodes:function(){return this._private.hasCompoundNodes},styleEnabled:function(){return this._private.styleEnabled},addToPool:function(e){for(var t=this._private.elements,r=this._private.id2index,n=0;n<e.length;n++){var i=e[n],a=i._private.data.id,o=r[a],s=void 0!==o;s||(o=t.length,t.push(i),r[a]=o,i._private.index=o)}return this},removeFromPool:function(e){for(var t=this._private.elements,r=this._private.id2index,n=0;n<e.length;n++){var i=e[n],a=i._private.data.id,o=r[a],s=void 0!==o;if(s){this._private.id2index[a]=void 0,t.splice(o,1);for(var l=o;l<t.length;l++){var u=t[l]._private.data.id;r[u]--,t[l]._private.index--}}}},container:function(){return this._private.container},options:function(){return i.copy(this._private.options)},json:function(e){var t=this,r=t._private;if(o.plainObject(e)){if(t.startBatch(),e.elements){var n={},a=function(e,r){for(var a=0;a<e.length;a++){var o=e[a],s=o.data.id,l=t.getElementById(s);n[s]=!0,0!==l.length?l.json(o):r?t.add(i.extend({group:r},o)):t.add(o)}};if(o.array(e.elements))a(e.elements);else for(var s=["nodes","edges"],l=0;l<s.length;l++){var u=s[l],c=e.elements[u];o.array(c)&&a(c,u)}t.elements().stdFilter(function(e){return!n[e.id()]}).remove()}e.style&&t.style(e.style),null!=e.zoom&&e.zoom!==r.zoom&&t.zoom(e.zoom),e.pan&&(e.pan.x!==r.pan.x||e.pan.y!==r.pan.y)&&t.pan(e.pan);for(var d=["minZoom","maxZoom","zoomingEnabled","userZoomingEnabled","panningEnabled","userPanningEnabled","boxSelectionEnabled","autolock","autoungrabify","autounselectify"],l=0;l<d.length;l++){var h=d[l];null!=e[h]&&t[h](e[h])}return t.endBatch(),this}if(void 0===e){var p={};return p.elements={},t.elements().each(function(e,t){var r=t.group();p.elements[r]||(p.elements[r]=[]),p.elements[r].push(t.json())}),this._private.styleEnabled&&(p.style=t.style().json()),p.zoomingEnabled=t._private.zoomingEnabled,p.userZoomingEnabled=t._private.userZoomingEnabled,p.zoom=t._private.zoom,p.minZoom=t._private.minZoom,p.maxZoom=t._private.maxZoom,p.panningEnabled=t._private.panningEnabled,p.userPanningEnabled=t._private.userPanningEnabled,p.pan=i.copy(t._private.pan),p.boxSelectionEnabled=t._private.boxSelectionEnabled,p.renderer=i.copy(t._private.options.renderer),p.hideEdgesOnViewport=t._private.options.hideEdgesOnViewport,p.hideLabelsOnViewport=t._private.options.hideLabelsOnViewport,p.textureOnViewport=t._private.options.textureOnViewport,p.wheelSensitivity=t._private.options.wheelSensitivity,p.motionBlur=t._private.options.motionBlur,p}},scratch:l.data({field:"scratch",bindingEvent:"scratch",allowBinding:!0,allowSetting:!0,settingEvent:"scratch",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0}),removeScratch:l.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:!0})}),[e("./add-remove"),e("./animation"),e("./events"),e("./export"),e("./layout"),e("./notification"),e("./renderer"),e("./search"),e("./style"),e("./viewport")].forEach(function(e){i.extend(c,e)}),t.exports=u},{"../collection":23,"../define":41,"../is":77,"../promise":80,"../util":94,"../window":100,"./add-remove":30,"./animation":31,"./events":32,"./export":33,"./layout":35,"./notification":36,"./renderer":37,"./search":38,"./style":39,"./viewport":40}],35:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a={layout:function(e){var t=this._private.prevLayout=null==e?this._private.prevLayout:this.makeLayout(e);return t.run(),this},makeLayout:function(e){var t=this;if(null==e)return void n.error("Layout options must be specified to make a layout");if(null==e.name)return void n.error("A `name` must be specified to make a layout");var r=e.name,a=t.extension("layout",r);if(null==a)return void n.error("Can not apply layout: No such layout `"+r+"` found; did you include its JS file?");var o;o=i.string(e.eles)?t.$(e.eles):null!=e.eles?e.eles:t.$();var s=new a(n.extend({},e,{cy:t,eles:o}));return s}};a.createLayout=a.makeLayout,t.exports=a},{"../is":77,"../util":94}],36:[function(e,t,r){"use strict";var n={notify:function(e){var t=this._private;if(t.batchingNotify){var r=t.batchNotifyEles,n=t.batchNotifyTypes;return e.collection&&r.merge(e.collection),void(n.ids[e.type]||n.push(e.type))}if(t.notificationsEnabled){var i=this.renderer();i.notify(e)}},notifications:function(e){var t=this._private;return void 0===e?t.notificationsEnabled:void(t.notificationsEnabled=e?!0:!1)},noNotifications:function(e){this.notifications(!1),e(),this.notifications(!0)},startBatch:function(){var e=this._private;return null==e.batchCount&&(e.batchCount=0),0===e.batchCount&&(e.batchingStyle=e.batchingNotify=!0,e.batchStyleEles=this.collection(),e.batchNotifyEles=this.collection(),e.batchNotifyTypes=[],e.batchNotifyTypes.ids={}),e.batchCount++,this},endBatch:function(){var e=this._private;return e.batchCount--,0===e.batchCount&&(e.batchingStyle=!1,e.batchStyleEles.updateStyle(),e.batchingNotify=!1,this.notify({type:e.batchNotifyTypes,collection:e.batchNotifyEles})),this},batch:function(e){return this.startBatch(),e(),this.endBatch(),this},batchData:function(e){var t=this;return this.batch(function(){for(var r in e){var n=e[r],i=t.getElementById(r);i.data(n)}})}};t.exports=n},{}],37:[function(e,t,r){"use strict";var n=e("../util"),i={renderTo:function(e,t,r,n){var i=this._private.renderer;return i.renderTo(e,t,r,n),this},renderer:function(){return this._private.renderer},forceRender:function(){return this.notify({type:"draw"}),this},resize:function(){return this.notify({type:"resize"}),this.trigger("resize"),this},initRenderer:function(e){var t=this,r=t.extension("renderer",e.name);if(null==r)return void n.error("Can not initialise: No such renderer `%s` found; did you include its JS file?",e.name);var i=n.extend({},e,{cy:t}),a=t._private.renderer=new r(i);a.init(i)},triggerOnRender:function(){for(var e=this._private.onRenders,t=0;t<e.length;t++){var r=e[t];r()}return this},onRender:function(e){return this._private.onRenders.push(e),this},offRender:function(e){var t=this._private.onRenders;if(null==e)return this._private.onRenders=[],this;for(var r=0;r<t.length;r++){var n=t[r];if(e===n){t.splice(r,1);break}}return this}};i.invalidateDimensions=i.resize,t.exports=i},{"../util":94}],38:[function(e,t,r){"use strict";var n=e("../is"),i=e("../collection"),a={collection:function(e,t){return n.string(e)?this.$(e):n.elementOrCollection(e)?e.collection():n.array(e)?i(this,e,t):i(this)},nodes:function(e){var t=this.$(function(){return this.isNode()});return e?t.filter(e):t},edges:function(e){var t=this.$(function(){return this.isEdge()});return e?t.filter(e):t},$:function(e){var t=new i(this,this._private.elements);return e?t.filter(e):t}};a.elements=a.filter=a.$,t.exports=a},{"../collection":23,"../is":77}],39:[function(e,t,r){"use strict";var n=e("../is"),i=e("../style"),a={style:function(e){if(e){var t=this.setStyle(e);t.update()}return this._private.style},setStyle:function(e){var t=this._private;return n.stylesheet(e)?t.style=e.generateStyle(this):n.array(e)?t.style=i.fromJson(this,e):n.string(e)?t.style=i.fromString(this,e):t.style=i(this),t.style}};t.exports=a},{"../is":77,"../style":86}],40:[function(e,t,r){"use strict";var n=e("../is"),i={autolock:function(e){return void 0===e?this._private.autolock:(this._private.autolock=e?!0:!1,this)},autoungrabify:function(e){return void 0===e?this._private.autoungrabify:(this._private.autoungrabify=e?!0:!1,this)},autounselectify:function(e){return void 0===e?this._private.autounselectify:(this._private.autounselectify=e?!0:!1,this)},panningEnabled:function(e){return void 0===e?this._private.panningEnabled:(this._private.panningEnabled=e?!0:!1,this)},userPanningEnabled:function(e){return void 0===e?this._private.userPanningEnabled:(this._private.userPanningEnabled=e?!0:!1,this)},zoomingEnabled:function(e){return void 0===e?this._private.zoomingEnabled:(this._private.zoomingEnabled=e?!0:!1,this)},userZoomingEnabled:function(e){return void 0===e?this._private.userZoomingEnabled:(this._private.userZoomingEnabled=e?!0:!1,this)},boxSelectionEnabled:function(e){return void 0===e?this._private.boxSelectionEnabled:(this._private.boxSelectionEnabled=e?!0:!1,this)},pan:function(){var e,t,r,i,a,o=arguments,s=this._private.pan;switch(o.length){case 0:return s;case 1:if(n.string(o[0]))return e=o[0],s[e];if(n.plainObject(o[0])){if(!this._private.panningEnabled)return this;r=o[0],i=r.x,a=r.y,n.number(i)&&(s.x=i),n.number(a)&&(s.y=a),this.trigger("pan viewport")}break;case 2:if(!this._private.panningEnabled)return this;e=o[0],t=o[1],"x"!==e&&"y"!==e||!n.number(t)||(s[e]=t),this.trigger("pan viewport")}return this.notify({type:"viewport"}),this},panBy:function(e){var t,r,i,a,o,s=arguments,l=this._private.pan;if(!this._private.panningEnabled)return this;switch(s.length){case 1:n.plainObject(s[0])&&(i=s[0],a=i.x,o=i.y,n.number(a)&&(l.x+=a),n.number(o)&&(l.y+=o),this.trigger("pan viewport"));break;case 2:t=s[0],r=s[1],"x"!==t&&"y"!==t||!n.number(r)||(l[t]+=r),this.trigger("pan viewport")}return this.notify({type:"viewport"}),this},fit:function(e,t){var r=this.getFitViewport(e,t);if(r){var n=this._private;n.zoom=r.zoom,n.pan=r.pan,this.trigger("pan zoom viewport"),this.notify({type:"viewport"})}return this},getFitViewport:function(e,t){if(n.number(e)&&void 0===t&&(t=e,e=void 0),this._private.panningEnabled&&this._private.zoomingEnabled){var r;if(n.string(e)){var i=e;e=this.$(i)}else if(n.boundingBox(e)){var a=e;r={x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},r.w=r.x2-r.x1,r.h=r.y2-r.y1}else n.elementOrCollection(e)||(e=this.elements());r=r||e.boundingBox();var o,s=this.width(),l=this.height();if(t=n.number(t)?t:0,!isNaN(s)&&!isNaN(l)&&s>0&&l>0&&!isNaN(r.w)&&!isNaN(r.h)&&r.w>0&&r.h>0){o=Math.min((s-2*t)/r.w,(l-2*t)/r.h),o=o>this._private.maxZoom?this._private.maxZoom:o,o=o<this._private.minZoom?this._private.minZoom:o;var u={x:(s-o*(r.x1+r.x2))/2,y:(l-o*(r.y1+r.y2))/2};return{zoom:o,pan:u}}}},minZoom:function(e){return void 0===e?this._private.minZoom:(n.number(e)&&(this._private.minZoom=e),this)},maxZoom:function(e){return void 0===e?this._private.maxZoom:(n.number(e)&&(this._private.maxZoom=e),this)},zoom:function(e){var t,r;if(void 0===e)return this._private.zoom;if(n.number(e))r=e;else if(n.plainObject(e)){if(r=e.level,e.position){var i=e.position,a=this._private.pan,o=this._private.zoom;t={x:i.x*o+a.x,y:i.y*o+a.y}}else e.renderedPosition&&(t=e.renderedPosition);if(t&&!this._private.panningEnabled)return this}if(!this._private.zoomingEnabled)return this;if(!n.number(r)||t&&(!n.number(t.x)||!n.number(t.y)))return this;if(r=r>this._private.maxZoom?this._private.maxZoom:r,r=r<this._private.minZoom?this._private.minZoom:r,t){var s=this._private.pan,l=this._private.zoom,u=r,c={x:-u/l*(t.x-s.x)+t.x,y:-u/l*(t.y-s.y)+t.y};this._private.zoom=r,this._private.pan=c;var d=s.x!==c.x||s.y!==c.y;this.trigger(" zoom "+(d?" pan ":"")+" viewport ")}else this._private.zoom=r,this.trigger("zoom viewport");return this.notify({type:"viewport"}),this},viewport:function(e){var t=this._private,r=!0,i=!0,a=[],o=!1,s=!1;if(!e)return this;if(n.number(e.zoom)||(r=!1),n.plainObject(e.pan)||(i=!1),!r&&!i)return this;if(r){var l=e.zoom;l<t.minZoom||l>t.maxZoom||!t.zoomingEnabled?o=!0:(t.zoom=l,a.push("zoom"))}if(i&&(!o||!e.cancelOnFailedZoom)&&t.panningEnabled){var u=e.pan;n.number(u.x)&&(t.pan.x=u.x,s=!1),n.number(u.y)&&(t.pan.y=u.y,s=!1),s||a.push("pan")}return a.length>0&&(a.push("viewport"),this.trigger(a.join(" ")),this.notify({type:"viewport"})),this},center:function(e){var t=this.getCenterPan(e);return t&&(this._private.pan=t,this.trigger("pan viewport"),this.notify({type:"viewport"})),this},getCenterPan:function(e,t){if(this._private.panningEnabled){if(n.string(e)){var r=e;e=this.elements(r)}else n.elementOrCollection(e)||(e=this.elements());var i=e.boundingBox(),a=this.width(),o=this.height();t=void 0===t?this._private.zoom:t;var s={x:(a-t*(i.x1+i.x2))/2,y:(o-t*(i.y1+i.y2))/2};return s}},reset:function(){return this._private.panningEnabled&&this._private.zoomingEnabled?(this.viewport({pan:{x:0,y:0},zoom:1}),this):this},width:function(){var e=this._private.container;return e?e.clientWidth:1},height:function(){var e=this._private.container;return e?e.clientHeight:1},extent:function(){var e=this._private.pan,t=this._private.zoom,r=this.renderedExtent(),n={x1:(r.x1-e.x)/t,x2:(r.x2-e.x)/t,y1:(r.y1-e.y)/t,y2:(r.y2-e.y)/t};return n.w=n.x2-n.x1,n.h=n.y2-n.y1,n},renderedExtent:function(){var e=this.width(),t=this.height();return{x1:0,y1:0,x2:e,y2:t,w:e,h:t}}};i.centre=i.center,i.autolockNodes=i.autolock,i.autoungrabifyNodes=i.autoungrabify,t.exports=i},{"../is":77}],41:[function(e,t,r){"use strict";var n=e("./util"),i=e("./is"),a=e("./selector"),o=e("./promise"),s=e("./event"),l=e("./animation"),u={data:function(e){var t={field:"data",bindingEvent:"data",allowBinding:!1,allowSetting:!1,allowGetting:!1,settingEvent:"data",settingTriggersEvent:!1,triggerFnName:"trigger",immutableKeys:{},updateStyle:!1,onSet:function(e){},canSet:function(e){return!0}};return e=n.extend({},t,e),function(t,r){var n=e,a=this,o=void 0!==a.length,s=o?a:[a],l=o?a[0]:a;if(i.string(t)){if(n.allowGetting&&void 0===r){var u;return l&&(u=l._private[n.field][t]),u}if(n.allowSetting&&void 0!==r){var c=!n.immutableKeys[t];if(c){for(var d=0,h=s.length;h>d;d++)n.canSet(s[d])&&(s[d]._private[n.field][t]=r);n.updateStyle&&a.updateStyle(),n.onSet(a),n.settingTriggersEvent&&a[n.triggerFnName](n.settingEvent)}}}else if(n.allowSetting&&i.plainObject(t)){var p,v,f=t;for(p in f){v=f[p];var c=!n.immutableKeys[p];if(c)for(var d=0,h=s.length;h>d;d++)n.canSet(s[d])&&(s[d]._private[n.field][p]=v)}n.updateStyle&&a.updateStyle(),n.onSet(a),n.settingTriggersEvent&&a[n.triggerFnName](n.settingEvent)}else if(n.allowBinding&&i.fn(t)){var g=t;a.bind(n.bindingEvent,g)}else if(n.allowGetting&&void 0===t){var u;return l&&(u=l._private[n.field]),u}return a}},removeData:function(e){var t={field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!1,immutableKeys:{}};return e=n.extend({},t,e),function(t){var r=e,n=this,a=void 0!==n.length,o=a?n:[n];if(i.string(t)){for(var s=t.split(/\s+/),l=s.length,u=0;l>u;u++){var c=s[u];if(!i.emptyString(c)){var d=!r.immutableKeys[c];if(d)for(var h=0,p=o.length;p>h;h++)o[h]._private[r.field][c]=void 0}}r.triggerEvent&&n[r.triggerFnName](r.event)}else if(void 0===t){for(var h=0,p=o.length;p>h;h++){var v=o[h]._private[r.field];for(var c in v){var f=!r.immutableKeys[c];f&&(v[c]=void 0)}}r.triggerEvent&&n[r.triggerFnName](r.event)}return n}},event:{regex:/(\w+)(\.\w+)?/,optionalTypeRegex:/(\w+)?(\.\w+)?/,falseCallback:function(){return!1}},on:function(e){var t={unbindSelfOnTrigger:!1,unbindAllBindersOnTrigger:!1};return e=n.extend({},t,e),function(t,r,n,o){var s=this,l=void 0!==s.length,c=l?s:[s],d=i.string(t),h=e;if(i.plainObject(r)?(o=n,n=r,r=void 0):(i.fn(r)||r===!1)&&(o=r,n=void 0,r=void 0),(i.fn(n)||n===!1)&&(o=n,n=void 0),!i.fn(o)&&o!==!1&&d)return s;if(d){var p={};p[t]=o,t=p}for(var v in t)if(o=t[v],o===!1&&(o=u.event.falseCallback),i.fn(o)){v=v.split(/\s+/);for(var f=0;f<v.length;f++){var g=v[f];if(!i.emptyString(g)){var y=g.match(u.event.regex);if(y)for(var m=y[1],b=y[2]?y[2]:void 0,x={callback:o,data:n,delegated:r?!0:!1,selector:r,selObj:new a(r),type:m,namespace:b,unbindSelfOnTrigger:h.unbindSelfOnTrigger,unbindAllBindersOnTrigger:h.unbindAllBindersOnTrigger,binders:c},w=0;w<c.length;w++){var _=c[w]._private;_.listeners=_.listeners||[],_.listeners.push(x)}}}}return s}},eventAliasesOn:function(e){var t=e;t.addListener=t.listen=t.bind=t.on,t.removeListener=t.unlisten=t.unbind=t.off,t.emit=t.trigger,t.pon=t.promiseOn=function(e,t){var r=this,n=Array.prototype.slice.call(arguments,0);return new o(function(e,t){var i=function(t){r.off.apply(r,o),e(t)},a=n.concat([i]),o=a.concat([]);r.on.apply(r,a)})}},off:function(e){var t={};return e=n.extend({},t,e),function(e,t,r){var n=this,a=void 0!==n.length,o=a?n:[n],s=i.string(e);if(0===arguments.length){for(var l=0;l<o.length;l++)o[l]._private.listeners=[];return n}if((i.fn(t)||t===!1)&&(r=t,t=void 0),s){var c={};c[e]=r,e=c}for(var d in e){r=e[d],r===!1&&(r=u.event.falseCallback),d=d.split(/\s+/);for(var h=0;h<d.length;h++){var p=d[h];if(!i.emptyString(p)){var v=p.match(u.event.optionalTypeRegex);if(v)for(var f=v[1]?v[1]:void 0,g=v[2]?v[2]:void 0,l=0;l<o.length;l++)for(var y=o[l]._private.listeners=o[l]._private.listeners||[],m=0;m<y.length;m++){var b=y[m],x=!g||g===b.namespace,w=!f||b.type===f,_=!r||r===b.callback,E=x&&w&&_;E&&(y.splice(m,1),m--)}}}}return n}},trigger:function(e){var t={};return e=n.extend({},t,e),function(t,r,n){var a=this,o=void 0!==a.length,l=o?a:[a],c=i.string(t),d=i.plainObject(t),h=i.event(t),p=this._private.cy||(i.core(this)?this:null),v=p?p.hasCompoundNodes():!1;if(c){var f=t.split(/\s+/);t=[];for(var g=0;g<f.length;g++){var y=f[g];if(!i.emptyString(y)){var m=y.match(u.event.regex),b=m[1],x=m[2]?m[2]:void 0;t.push({type:b,namespace:x})}}}else if(d){var w=t;t=[w]}r?i.array(r)||(r=[r]):r=[];for(var g=0;g<t.length;g++)for(var _=t[g],E=0;E<l.length;E++){var y,D=l[E],k=D._private.listeners=D._private.listeners||[],T=i.element(D),S=T||e.layout;if(h?(y=_,y.cyTarget=y.cyTarget||D,y.cy=y.cy||p):y=new s(_,{cyTarget:D,cy:p,namespace:_.namespace}),_.layout&&(y.layout=_.layout),e.layout&&(y.layout=D),y.cyPosition){var P=y.cyPosition,C=p.zoom(),N=p.pan();y.cyRenderedPosition={x:P.x*C+N.x,y:P.y*C+N.y}}n&&(k=[{namespace:y.namespace,type:y.type,callback:n}]);for(var M=0;M<k.length;M++){var B=k[M],z=!B.namespace||B.namespace===y.namespace,O=B.type===y.type,I=B.delegated?D!==y.cyTarget&&i.element(y.cyTarget)&&B.selObj.matches(y.cyTarget):!0,L=z&&O&&I;if(L){var A=[y];if(A=A.concat(r),B.data?y.data=B.data:y.data=void 0,(B.unbindSelfOnTrigger||B.unbindAllBindersOnTrigger)&&(k.splice(M,1),M--),B.unbindAllBindersOnTrigger)for(var R=B.binders,V=0;V<R.length;V++){var F=R[V];if(F&&F!==D)for(var j=F._private.listeners,q=0;q<j.length;q++){var X=j[q];X===B&&(j.splice(q,1),q--)}}var Y=B.delegated?y.cyTarget:D,$=B.callback.apply(Y,A);($===!1||y.isPropagationStopped())&&(S=!1,$===!1&&(y.stopPropagation(),y.preventDefault()))}}if(S){var H=v?D._private.parent:null,W=null!=H&&0!==H.length;W?(H=H[0],H.trigger(y)):p.trigger(y)}}return a}},animated:function(e){var t={};return e=n.extend({},t,e),function(){var e=this,t=void 0!==e.length,r=t?e:[e],n=this._private.cy||this;if(!n.styleEnabled())return!1;var i=r[0];return i?i._private.animation.current.length>0:void 0}},clearQueue:function(e){var t={};return e=n.extend({},t,e),function(){var e=this,t=void 0!==e.length,r=t?e:[e],n=this._private.cy||this;if(!n.styleEnabled())return this;for(var i=0;i<r.length;i++){var a=r[i];a._private.animation.queue=[]}return this}},delay:function(e){var t={};return e=n.extend({},t,e),function(e,t){var r=this._private.cy||this;return r.styleEnabled()?this.animate({delay:e,duration:e,complete:t}):this}},delayAnimation:function(e){var t={};return e=n.extend({},t,e),function(e,t){var r=this._private.cy||this;return r.styleEnabled()?this.animation({delay:e,duration:e,complete:t}):this}},animation:function(e){var t={};return e=n.extend({},t,e),function(e,t){var r=this,i=void 0!==r.length,a=i?r:[r],o=this._private.cy||this,s=!i,u=!s;if(!o.styleEnabled())return this;var c=o.style();switch(e=n.extend({},e,t),void 0===e.duration&&(e.duration=400),e.duration){case"slow":e.duration=600;break;case"fast":e.duration=200}var d=!0;if(e)for(var h in e){d=!1;break}if(d)return new l(a[0],e);if(u&&(e.style=c.getPropsList(e.style||e.css),e.css=void 0),e.renderedPosition&&u){var p=e.renderedPosition,v=o.pan(),f=o.zoom();e.position={x:(p.x-v.x)/f,y:(p.y-v.y)/f}}if(e.panBy&&s){var g=e.panBy,y=o.pan();e.pan={x:y.x+g.x,y:y.y+g.y}}var m=e.center||e.centre;if(m&&s){var b=o.getCenterPan(m.eles,e.zoom);b&&(e.pan=b)}if(e.fit&&s){var x=e.fit,w=o.getFitViewport(x.eles||x.boundingBox,x.padding);w&&(e.pan=w.pan,e.zoom=w.zoom)}return new l(a[0],e)}},animate:function(e){var t={};return e=n.extend({},t,e),function(e,t){var r=this,i=void 0!==r.length,a=i?r:[r],o=this._private.cy||this;if(!o.styleEnabled())return this;t&&(e=n.extend({},e,t));for(var s=0;s<a.length;s++){var l=a[s],u=l.animated()&&(void 0===e.queue||e.queue),c=l.animation(e,u?{queue:!0}:void 0);c.play()}return this}},stop:function(e){var t={};return e=n.extend({},t,e),function(e,t){var r=this,n=void 0!==r.length,i=n?r:[r],a=this._private.cy||this;if(!a.styleEnabled())return this;for(var o=0;o<i.length;o++){for(var s=i[o],l=s._private,u=l.animation.current,c=0;c<u.length;c++){var d=u[c],h=d._private;t&&(h.duration=0)}e&&(l.animation.queue=[]),t||(l.animation.current=[])}return a.notify({collection:this,type:"draw"}),this}}};t.exports=u},{"./animation":1,"./event":42,"./is":77,"./promise":80,"./selector":81,"./util":94}],42:[function(e,t,r){"use strict";function n(){return!1}function i(){return!0}var a=function(e,t){return this instanceof a?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented?i:n):this.type=e,t&&(this.type=void 0!==t.type?t.type:this.type,this.cy=t.cy,this.cyTarget=t.cyTarget,this.cyPosition=t.cyPosition,this.cyRenderedPosition=t.cyRenderedPosition,this.namespace=t.namespace,this.layout=t.layout,this.data=t.data,this.message=t.message),void(this.timeStamp=e&&e.timeStamp||Date.now())):new a(e,t)};a.prototype={instanceString:function(){return"event"},preventDefault:function(){this.isDefaultPrevented=i;var e=this.originalEvent;e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){this.isPropagationStopped=i;var e=this.originalEvent;e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i,this.stopPropagation()},isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n},t.exports=a},{}],43:[function(e,t,r){"use strict";function n(e,t,r){var n=r;if("core"===e)c.prototype[t]=r;else if("collection"===e)u.prototype[t]=r;else if("layout"===e){for(var a=function(e){this.options=e,r.call(this,e),h.plainObject(this._private)||(this._private={}),this._private.cy=e.cy,this._private.listeners=[]},o=a.prototype=Object.create(r.prototype),d=[],v=0;v<d.length;v++){var f=d[v];o[f]=o[f]||function(){return this}}o.start&&!o.run?o.run=function(){return this.start(),this}:!o.start&&o.run&&(o.start=function(){return this.run(),this}),o.stop||(o.stop=function(){var e=this.options;if(e&&e.animate)for(var t=this.animations,r=0;r<t.length;r++)t[r].stop();return this.trigger("layoutstop"),this}),o.destroy||(o.destroy=function(){return this}),o.on=l.on({layout:!0}),o.one=l.on({layout:!0,unbindSelfOnTrigger:!0}),o.once=l.on({layout:!0,unbindAllBindersOnTrigger:!0}),o.off=l.off({layout:!0}),o.trigger=l.trigger({layout:!0}),l.eventAliasesOn(o),n=a}else if("renderer"===e&&"null"!==t&&"base"!==t){var g=i("renderer","base").prototype,y=r.prototype;for(var m in g){var b=g[m],x=null!=y[m];if(x)return void s.error("Can not register renderer `"+t+"` since it overrides `"+m+"` in its prototype");y[m]=b}g.clientFunctions.forEach(function(e){y[e]=y[e]||function(){s.error("Renderer does not implement `renderer."+e+"()` on its prototype")}})}return s.setMap({map:p,keys:[e,t],value:n})}function i(e,t){return s.getMap({map:p,keys:[e,t]})}function a(e,t,r,n,i){return s.setMap({map:v,keys:[e,t,r,n],value:i})}function o(e,t,r,n){return s.getMap({map:v,keys:[e,t,r,n]})}var s=e("./util"),l=e("./define"),u=e("./collection"),c=e("./core"),d=e("./extensions"),h=e("./is"),p={},v={},f=function(){return 2===arguments.length?i.apply(null,arguments):3===arguments.length?n.apply(null,arguments):4===arguments.length?o.apply(null,arguments):5===arguments.length?a.apply(null,arguments):void s.error("Invalid extension access syntax")};c.prototype.extension=f,d.forEach(function(e){e.extensions.forEach(function(t){n(e.type,t.name,t.impl)})}),t.exports=f},{"./collection":23,"./core":34,"./define":41,"./extensions":44,"./is":77,"./util":94}],44:[function(e,t,r){"use strict";t.exports=[{type:"layout",extensions:e("./layout")},{type:"renderer",extensions:e("./renderer")}]},{"./layout":50,"./renderer":72}],45:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},s,e)}var i=e("../../util"),a=e("../../math"),o=e("../../is"),s={fit:!0,directed:!1,padding:30,circle:!1,spacingFactor:1.75,boundingBox:void 0,avoidOverlap:!0,roots:void 0,maximalAdjustments:0,animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){var e,t=this.options,r=t,n=t.cy,i=r.eles,s=i.nodes().not(":parent"),l=i,u=a.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()});if(o.elementOrCollection(r.roots))e=r.roots;else if(o.array(r.roots)){for(var c=[],d=0;d<r.roots.length;d++){var h=r.roots[d],p=n.getElementById(h);c.push(p)}e=n.collection(c)}else if(o.string(r.roots))e=n.$(r.roots);else if(r.directed)e=s.roots();else{for(var v=[],f=s;f.length>0;){var g=n.collection();i.bfs({roots:f[0],visit:function(e,t,r,n,i){g=g.add(r)},directed:!1}),f=f.not(g),v.push(g)}e=n.collection();for(var d=0;d<v.length;d++){var y=v[d],m=y.maxDegree(!1),b=y.filter(function(){return this.degree(!1)===m});e=e.add(b)}}var x=[],w={},_={},E={},D={},k={};l.bfs({roots:e,directed:r.directed,visit:function(e,t,r,n,i){var a=this[0],o=a.id();if(x[t]||(x[t]=[]),x[t].push(a),w[o]=!0,_[o]=t,E[o]=i,D[o]=n,i){var s=i.id(),l=k[s]=k[s]||[];l.push(r)}}});for(var T=[],d=0;d<s.length;d++){var p=s[d];w[p.id()]||T.push(p)}for(var S=3*T.length,P=0;0!==T.length&&S>P;){for(var C=T.shift(),N=C.neighborhood().nodes(),M=!1,d=0;d<N.length;d++){var B=_[N[d].id()];if(void 0!==B){x[B].push(C),M=!0;break}}M||T.push(C),P++}for(;0!==T.length;){var C=T.shift(),M=!1;M||(0===x.length&&x.push([]),x[0].push(C))}var z=function(){for(var e=0;e<x.length;e++)for(var t=x[e],r=0;r<t.length;r++){var n=t[r];n._private.scratch.breadthfirst={depth:e,index:r}}};z();for(var O=function(e){for(var t,r=e.connectedEdges(function(){return this.data("target")===e.id()}),n=e._private.scratch.breadthfirst,i=0,a=0;a<r.length;a++){var o=r[a],s=o.source()[0],l=s._private.scratch.breadthfirst;n.depth<=l.depth&&i<l.depth&&(i=l.depth,t=s)}return t},I=0;I<r.maximalAdjustments;I++){for(var L=x.length,A=[],d=0;L>d;d++)for(var B=x[d],R=B.length,V=0;R>V;V++){var p=B[V],F=p._private.scratch.breadthfirst,j=O(p);j&&(F.intEle=j,A.push(p))}for(var d=0;d<A.length;d++){var p=A[d],F=p._private.scratch.breadthfirst,j=F.intEle,q=j._private.scratch.breadthfirst;x[F.depth].splice(F.index,1);for(var X=q.depth+1;X>x.length-1;)x.push([]);x[X].push(p),F.depth=X,F.index=x[X].length-1}z()}var Y=0;if(r.avoidOverlap){for(var d=0;d<s.length;d++){var $=s[d],H=$.boundingBox(),W=H.w,Z=H.h;Y=Math.max(Y,W,Z)}Y*=r.spacingFactor}for(var U={},G=function(e){if(U[e.id()])return U[e.id()];for(var t=e._private.scratch.breadthfirst.depth,r=e.neighborhood().nodes().not(":parent"),n=0,i=0,a=0;a<r.length;a++){var o=r[a],s=o._private.scratch.breadthfirst,l=s.index,u=s.depth,c=x[u].length;(t>u||0===t)&&(n+=l/c,i++)}return i=Math.max(1,i),n/=i,0===i&&(n=void 0),U[e.id()]=n,n},K=function(e,t){var r=G(e),n=G(t);return r-n},J=0;3>J;J++){for(var d=0;d<x.length;d++)x[d]=x[d].sort(K);z()}for(var Q=0,d=0;d<x.length;d++)Q=Math.max(x[d].length,Q);for(var ee={x:u.x1+u.w/2,y:u.x1+u.h/2},te=function(e,t){var n=e._private.scratch.breadthfirst,i=n.depth,a=n.index,o=x[i].length,s=Math.max(u.w/(o+1),Y),l=Math.max(u.h/(x.length+1),Y),c=Math.min(u.w/2/x.length,u.h/2/x.length);if(c=Math.max(c,Y),r.circle){if(r.circle){var d=c*i+c-(x.length>0&&x[0].length<=3?c/2:0),h=2*Math.PI/x[i].length*a;return 0===i&&1===x[0].length&&(d=1),{x:ee.x+d*Math.cos(h),y:ee.y+d*Math.sin(h)}}return{x:ee.x+(a+1-(o+1)/2)*s,y:(i+1)*l}}var p={x:ee.x+(a+1-(o+1)/2)*s,y:(i+1)*l};return t?p:p},re={},d=x.length-1;d>=0;d--)for(var B=x[d],V=0;V<B.length;V++){var C=B[V];re[C.id()]=te(C,d===x.length-1)}return s.layoutPositions(this,r,function(){return re[this.id()]}),this},t.exports=n},{"../../is":77,"../../math":79,"../../util":94}],46:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},s,e)}var i=e("../../util"),a=e("../../math"),o=e("../../is"),s={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,radius:void 0,startAngle:1.5*Math.PI,sweep:void 0,clockwise:!0,sort:void 0,animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){var e=this.options,t=e,r=e.cy,n=t.eles,i=void 0!==t.counterclockwise?!t.counterclockwise:t.clockwise,s=n.nodes().not(":parent");t.sort&&(s=s.sort(t.sort));for(var l,u=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:r.width(),h:r.height()}),c={x:u.x1+u.w/2,y:u.y1+u.h/2},d=void 0===t.sweep?2*Math.PI-2*Math.PI/s.length:t.sweep,h=d/Math.max(1,s.length-1),p=0,v=0;v<s.length;v++){var f=s[v],g=f.boundingBox(),y=g.w,m=g.h;p=Math.max(p,y,m)}if(l=o.number(t.radius)?t.radius:s.length<=1?0:Math.min(u.h,u.w)/2-p,s.length>1&&t.avoidOverlap){p*=1.75;var b=Math.cos(h)-Math.cos(0),x=Math.sin(h)-Math.sin(0),w=Math.sqrt(p*p/(b*b+x*x));
l=Math.max(w,l)}var _=function(e,r){var n=t.startAngle+e*h*(i?1:-1),a=l*Math.cos(n),o=l*Math.sin(n),s={x:c.x+a,y:c.y+o};return s};return s.layoutPositions(this,t,_),this},t.exports=n},{"../../is":77,"../../math":79,"../../util":94}],47:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},o,e)}var i=e("../../util"),a=e("../../math"),o={fit:!0,padding:30,startAngle:1.5*Math.PI,sweep:void 0,clockwise:!0,equidistant:!1,minNodeSpacing:10,boundingBox:void 0,avoidOverlap:!0,height:void 0,width:void 0,concentric:function(e){return e.degree()},levelWidth:function(e){return e.maxDegree()/4},animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){for(var e=this.options,t=e,r=void 0!==t.counterclockwise?!t.counterclockwise:t.clockwise,n=e.cy,i=t.eles,o=i.nodes().not(":parent"),s=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()}),l={x:s.x1+s.w/2,y:s.y1+s.h/2},u=[],c=t.startAngle,d=0,h=0;h<o.length;h++){var p,v=o[h];p=t.concentric.apply(v,[v]),u.push({value:p,node:v}),v._private.scratch.concentric=p}o.updateStyle();for(var h=0;h<o.length;h++){var v=o[h],f=v.boundingBox();d=Math.max(d,f.w,f.h)}u.sort(function(e,t){return t.value-e.value});for(var g=t.levelWidth(o),y=[[]],m=y[0],h=0;h<u.length;h++){var b=u[h];if(m.length>0){var x=Math.abs(m[0].value-b.value);x>=g&&(m=[],y.push(m))}m.push(b)}var w=d+t.minNodeSpacing;if(!t.avoidOverlap){var _=y.length>0&&y[0].length>1,E=Math.min(s.w,s.h)/2-w,D=E/(y.length+_?1:0);w=Math.min(w,D)}for(var k=0,h=0;h<y.length;h++){var T=y[h],S=void 0===t.sweep?2*Math.PI-2*Math.PI/T.length:t.sweep,P=T.dTheta=S/Math.max(1,T.length-1);if(T.length>1&&t.avoidOverlap){var C=Math.cos(P)-Math.cos(0),N=Math.sin(P)-Math.sin(0),M=Math.sqrt(w*w/(C*C+N*N));k=Math.max(M,k)}T.r=k,k+=w}if(t.equidistant){for(var B=0,k=0,h=0;h<y.length;h++){var T=y[h],z=T.r-k;B=Math.max(B,z)}k=0;for(var h=0;h<y.length;h++){var T=y[h];0===h&&(k=T.r),T.r=k,k+=B}}for(var O={},h=0;h<y.length;h++)for(var T=y[h],P=T.dTheta,k=T.r,I=0;I<T.length;I++){var b=T[I],c=t.startAngle+(r?1:-1)*P*I,L={x:l.x+k*Math.cos(c),y:l.y+k*Math.sin(c)};O[b.node.id()]=L}return o.layoutPositions(this,t,function(){var e=this.id();return O[e]}),this},t.exports=n},{"../../math":79,"../../util":94}],48:[function(e,t,r){"use strict";function n(e){this.options=a.extend({},u,e),this.options.layout=this}var i,a=e("../../util"),o=e("../../math"),s=e("../../thread"),l=e("../../is"),u={ready:function(){},stop:function(){},animate:!0,animationThreshold:250,refresh:20,fit:!0,padding:30,boundingBox:void 0,componentSpacing:100,nodeRepulsion:function(e){return 4e5},nodeOverlap:10,idealEdgeLength:function(e){return 10},edgeElasticity:function(e){return 100},nestingFactor:5,gravity:80,numIter:1e3,initialTemp:200,coolingFactor:.95,minTemp:1,useMultitasking:!0};n.prototype.run=function(){var e=this.options,t=e.cy,r=this,n=this.thread;(!n||n.stopped())&&(n=this.thread=s({disabled:!e.useMultitasking})),r.stopped=!1,r.trigger({type:"layoutstart",layout:r}),i=!0===e.debug?!0:!1;var o=c(t,r,e);i&&p(o),v(o,t);var l=Date.now(),u=!1,d=function(r){r=r||{},u||!r.force&&Date.now()-l<e.animationThreshold||(u=!0,a.requestAnimationFrame(function(){f(o,t,e),!0===e.fit&&t.fit(e.padding),u=!1}))};n.on("message",function(e){var t=e.message;o.layoutNodes=t,d()}),n.pass({layoutInfo:o,options:{animate:e.animate,refresh:e.refresh,componentSpacing:e.componentSpacing,nodeOverlap:e.nodeOverlap,nestingFactor:e.nestingFactor,gravity:e.gravity,numIter:e.numIter,initialTemp:e.initialTemp,coolingFactor:e.coolingFactor,minTemp:e.minTemp}}).run(function(e){var t,r=e.layoutInfo,n=e.options,i=!1,a=function(e,t,r){o(e,t),c(e,t),d(e,t),h(e,t),p(e,t)},o=function(e,t){for(var r=0;r<e.graphSet.length;r++)for(var n=e.graphSet[r],i=n.length,a=0;i>a;a++)for(var o=e.layoutNodes[e.idToIndex[n[a]]],l=a+1;i>l;l++){var u=e.layoutNodes[e.idToIndex[n[l]]];s(o,u,e,t)}},s=function(e,t,r,n){var i=e.cmptId,a=t.cmptId;if(i===a||r.isCompound){var o=t.positionX-e.positionX,s=t.positionY-e.positionY;if(0!==o||0!==s){var c=l(e,t,o,s);if(c>0)var d=n.nodeOverlap*c,h=Math.sqrt(o*o+s*s),p=d*o/h,v=d*s/h;else var f=u(e,o,s),g=u(t,-1*o,-1*s),y=g.x-f.x,m=g.y-f.y,b=y*y+m*m,h=Math.sqrt(b),d=(e.nodeRepulsion+t.nodeRepulsion)/b,p=d*y/h,v=d*m/h;e.isLocked||(e.offsetX-=p,e.offsetY-=v),t.isLocked||(t.offsetX+=p,t.offsetY+=v)}}},l=function(e,t,r,n){if(r>0)var i=e.maxX-t.minX;else var i=t.maxX-e.minX;if(n>0)var a=e.maxY-t.minY;else var a=t.maxY-e.minY;return i>=0&&a>=0?Math.sqrt(i*i+a*a):0},u=function(e,t,r){var n=e.positionX,i=e.positionY,a=e.height||1,o=e.width||1,s=r/t,l=a/o,u={};do{if(0===t&&r>0){u.x=n,u.y=i+a/2;break}if(0===t&&0>r){u.x=n,u.y=i+a/2;break}if(t>0&&s>=-1*l&&l>=s){u.x=n+o/2,u.y=i+o*r/2/t;break}if(0>t&&s>=-1*l&&l>=s){u.x=n-o/2,u.y=i-o*r/2/t;break}if(r>0&&(-1*l>=s||s>=l)){u.x=n+a*t/2/r,u.y=i+a/2;break}if(0>r&&(-1*l>=s||s>=l)){u.x=n-a*t/2/r,u.y=i-a/2;break}}while(!1);return u},c=function(e,t){for(var r=0;r<e.edgeSize;r++){var n=e.layoutEdges[r],i=e.idToIndex[n.sourceId],a=e.layoutNodes[i],o=e.idToIndex[n.targetId],s=e.layoutNodes[o],l=s.positionX-a.positionX,c=s.positionY-a.positionY;if(0===l&&0===c)return;var d=u(a,l,c),h=u(s,-1*l,-1*c),p=h.x-d.x,v=h.y-d.y,f=Math.sqrt(p*p+v*v),g=Math.pow(n.idealLength-f,2)/n.elasticity;if(0!==f)var y=g*p/f,m=g*v/f;else var y=0,m=0;a.isLocked||(a.offsetX+=y,a.offsetY+=m),s.isLocked||(s.offsetX-=y,s.offsetY-=m)}},d=function(e,t){for(var r=1,n=0;n<e.graphSet.length;n++){var i=e.graphSet[n],a=i.length;if(0===n)var o=e.clientHeight/2,s=e.clientWidth/2;else var l=e.layoutNodes[e.idToIndex[i[0]]],u=e.layoutNodes[e.idToIndex[l.parentId]],o=u.positionX,s=u.positionY;for(var c=0;a>c;c++){var d=e.layoutNodes[e.idToIndex[i[c]]];if(!d.isLocked){var h=o-d.positionX,p=s-d.positionY,v=Math.sqrt(h*h+p*p);if(v>r){var f=t.gravity*h/v,g=t.gravity*p/v;d.offsetX+=f,d.offsetY+=g}}}}},h=function(e,t){var r=[],n=0,i=-1;for(r.push.apply(r,e.graphSet[0]),i+=e.graphSet[0].length;i>=n;){var a=r[n++],o=e.idToIndex[a],s=e.layoutNodes[o],l=s.children;if(0<l.length&&!s.isLocked){for(var u=s.offsetX,c=s.offsetY,d=0;d<l.length;d++){var h=e.layoutNodes[e.idToIndex[l[d]]];h.offsetX+=u,h.offsetY+=c,r[++i]=l[d]}s.offsetX=0,s.offsetY=0}}},p=function(e,t){for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];0<n.children.length&&(n.maxX=void 0,n.minX=void 0,n.maxY=void 0,n.minY=void 0)}for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];if(!(0<n.children.length||n.isLocked)){var i=v(n.offsetX,n.offsetY,e.temperature);n.positionX+=i.x,n.positionY+=i.y,n.offsetX=0,n.offsetY=0,n.minX=n.positionX-n.width,n.maxX=n.positionX+n.width,n.minY=n.positionY-n.height,n.maxY=n.positionY+n.height,f(n,e)}}for(var r=0;r<e.nodeSize;r++){var n=e.layoutNodes[r];0<n.children.length&&!n.isLocked&&(n.positionX=(n.maxX+n.minX)/2,n.positionY=(n.maxY+n.minY)/2,n.width=n.maxX-n.minX,n.height=n.maxY-n.minY)}},v=function(e,t,r){var n=Math.sqrt(e*e+t*t);if(n>r)var i={x:r*e/n,y:r*t/n};else var i={x:e,y:t};return i},f=function(e,t){var r=e.parentId;if(null!=r){var n=t.layoutNodes[t.idToIndex[r]],i=!1;return(null==n.maxX||e.maxX+n.padRight>n.maxX)&&(n.maxX=e.maxX+n.padRight,i=!0),(null==n.minX||e.minX-n.padLeft<n.minX)&&(n.minX=e.minX-n.padLeft,i=!0),(null==n.maxY||e.maxY+n.padBottom>n.maxY)&&(n.maxY=e.maxY+n.padBottom,i=!0),(null==n.minY||e.minY-n.padTop<n.minY)&&(n.minY=e.minY-n.padTop,i=!0),i?f(n,t):void 0}},g=function(e,t){for(var n=r.layoutNodes,i=[],a=0;a<n.length;a++){var o=n[a],s=o.cmptId,l=i[s]=i[s]||[];l.push(o)}for(var u=0,a=0;a<i.length;a++){var c=i[a];c.x1=1/0,c.x2=-(1/0),c.y1=1/0,c.y2=-(1/0);for(var d=0;d<c.length;d++){var h=c[d];c.x1=Math.min(c.x1,h.positionX-h.width/2),c.x2=Math.max(c.x2,h.positionX+h.width/2),c.y1=Math.min(c.y1,h.positionY-h.height/2),c.y2=Math.max(c.y2,h.positionY+h.height/2)}c.w=c.x2-c.x1,c.h=c.y2-c.y1,u+=c.w*c.h}i.sort(function(e,t){return t.w*t.h-e.w*e.h});for(var p=0,v=0,f=0,g=0,y=Math.sqrt(u)*r.clientWidth/r.clientHeight,a=0;a<i.length;a++){for(var c=i[a],d=0;d<c.length;d++){var h=c[d];h.isLocked||(h.positionX+=p,h.positionY+=v)}p+=c.w+t.componentSpacing,f+=c.w+t.componentSpacing,g=Math.max(g,c.h),f>y&&(v+=g+t.componentSpacing,p=0,f=0,g=0)}},y=function(e){return i?!1:(a(r,n,e),r.temperature=r.temperature*n.coolingFactor,r.temperature<n.minTemp?!1:!0)},m=0;do{for(var b=0;b<n.refresh&&m<n.numIter;){var t=y(m);if(!t)break;b++,m++}n.animate&&broadcast(r.layoutNodes)}while(t&&m+1<n.numIter);return g(r,n),r}).then(function(e){o.layoutNodes=e.layoutNodes,n.stop(),h()});var h=function(){d({force:!0}),r.one("layoutstop",e.stop),r.trigger({type:"layoutstop",layout:r})};return this},n.prototype.stop=function(){return this.stopped=!0,this.thread&&this.thread.stop(),this.trigger("layoutstop"),this},n.prototype.destroy=function(){return this.thread&&this.thread.stop(),this};var c=function(e,t,r){for(var n=r.eles.edges(),i=r.eles.nodes(),a={isCompound:e.hasCompoundNodes(),layoutNodes:[],idToIndex:{},nodeSize:i.size(),graphSet:[],indexToGraph:[],layoutEdges:[],edgeSize:n.size(),temperature:r.initialTemp,clientWidth:e.width(),clientHeight:e.width(),boundingBox:o.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:e.width(),h:e.height()})},s=r.eles.components(),u={},c=0;c<s.length;c++)for(var h=s[c],p=0;p<h.length;p++){var v=h[p];u[v.id()]=c}for(var c=0;c<a.nodeSize;c++){var f=i[c],g=f.boundingBox(),y={};y.isLocked=f.locked(),y.id=f.data("id"),y.parentId=f.data("parent"),y.cmptId=u[f.id()],y.children=[],y.positionX=f.position("x"),y.positionY=f.position("y"),y.offsetX=0,y.offsetY=0,y.height=g.w,y.width=g.h,y.maxX=y.positionX+y.width/2,y.minX=y.positionX-y.width/2,y.maxY=y.positionY+y.height/2,y.minY=y.positionY-y.height/2,y.padLeft=parseFloat(f.style("padding-left")),y.padRight=parseFloat(f.style("padding-right")),y.padTop=parseFloat(f.style("padding-top")),y.padBottom=parseFloat(f.style("padding-bottom")),y.nodeRepulsion=l.fn(r.nodeRepulsion)?r.nodeRepulsion.call(f,f):r.nodeRepulsion,a.layoutNodes.push(y),a.idToIndex[y.id]=c}for(var m=[],b=0,x=-1,w=[],c=0;c<a.nodeSize;c++){var f=a.layoutNodes[c],_=f.parentId;null!=_?a.layoutNodes[a.idToIndex[_]].children.push(f.id):(m[++x]=f.id,w.push(f.id))}for(a.graphSet.push(w);x>=b;){var E=m[b++],D=a.idToIndex[E],v=a.layoutNodes[D],k=v.children;if(k.length>0){a.graphSet.push(k);for(var c=0;c<k.length;c++)m[++x]=k[c]}}for(var c=0;c<a.graphSet.length;c++)for(var T=a.graphSet[c],p=0;p<T.length;p++){var S=a.idToIndex[T[p]];a.indexToGraph[S]=c}for(var c=0;c<a.edgeSize;c++){var P=n[c],C={};C.id=P.data("id"),C.sourceId=P.data("source"),C.targetId=P.data("target");var N=l.fn(r.idealEdgeLength)?r.idealEdgeLength.call(P,P):r.idealEdgeLength,M=l.fn(r.edgeElasticity)?r.edgeElasticity.call(P,P):r.edgeElasticity,B=a.idToIndex[C.sourceId],z=a.idToIndex[C.targetId],O=a.indexToGraph[B],I=a.indexToGraph[z];if(O!=I){for(var L=d(C.sourceId,C.targetId,a),A=a.graphSet[L],R=0,y=a.layoutNodes[B];-1===A.indexOf(y.id);)y=a.layoutNodes[a.idToIndex[y.parentId]],R++;for(y=a.layoutNodes[z];-1===A.indexOf(y.id);)y=a.layoutNodes[a.idToIndex[y.parentId]],R++;N*=R*r.nestingFactor}C.idealLength=N,C.elasticity=M,a.layoutEdges.push(C)}return a},d=function(e,t,r){var n=h(e,t,0,r);return 2>n.count?0:n.graph},h=function(e,t,r,n){var i=n.graphSet[r];if(-1<i.indexOf(e)&&-1<i.indexOf(t))return{count:2,graph:r};for(var a=0,o=0;o<i.length;o++){var s=i[o],l=n.idToIndex[s],u=n.layoutNodes[l].children;if(0!==u.length){var c=n.indexToGraph[n.idToIndex[u[0]]],d=h(e,t,c,n);if(0!==d.count){if(1!==d.count)return d;if(a++,2===a)break}}}return{count:a,graph:r}},p=function(e){if(i){console.debug("layoutNodes:");for(var t=0;t<e.nodeSize;t++){var r=e.layoutNodes[t],n="\nindex: "+t+"\nId: "+r.id+"\nChildren: "+r.children.toString()+"\nparentId: "+r.parentId+"\npositionX: "+r.positionX+"\npositionY: "+r.positionY+"\nOffsetX: "+r.offsetX+"\nOffsetY: "+r.offsetY+"\npadLeft: "+r.padLeft+"\npadRight: "+r.padRight+"\npadTop: "+r.padTop+"\npadBottom: "+r.padBottom;console.debug(n)}console.debug("idToIndex");for(var t in e.idToIndex)console.debug("Id: "+t+"\nIndex: "+e.idToIndex[t]);console.debug("Graph Set");for(var a=e.graphSet,t=0;t<a.length;t++)console.debug("Set : "+t+": "+a[t].toString());for(var n="IndexToGraph",t=0;t<e.indexToGraph.length;t++)n+="\nIndex : "+t+" Graph: "+e.indexToGraph[t];console.debug(n),n="Layout Edges";for(var t=0;t<e.layoutEdges.length;t++){var o=e.layoutEdges[t];n+="\nEdge Index: "+t+" ID: "+o.id+" SouceID: "+o.sourceId+" TargetId: "+o.targetId+" Ideal Length: "+o.idealLength}console.debug(n),n="nodeSize: "+e.nodeSize,n+="\nedgeSize: "+e.edgeSize,n+="\ntemperature: "+e.temperature,console.debug(n)}},v=function(e,t){for(var r=e.clientWidth,n=e.clientHeight,i=0;i<e.nodeSize;i++){var a=e.layoutNodes[i];0!==a.children.length||a.isLocked||(a.positionX=Math.random()*r,a.positionY=Math.random()*n)}},f=function(e,t,r){var n=r.layout,i=r.eles.nodes(),a=e.boundingBox,o={x1:1/0,x2:-(1/0),y1:1/0,y2:-(1/0)};r.boundingBox&&(i.forEach(function(t){var r=e.layoutNodes[e.idToIndex[t.data("id")]];o.x1=Math.min(o.x1,r.positionX),o.x2=Math.max(o.x2,r.positionX),o.y1=Math.min(o.y1,r.positionY),o.y2=Math.max(o.y2,r.positionY)}),o.w=o.x2-o.x1,o.h=o.y2-o.y1),i.positions(function(t,n){var i=e.layoutNodes[e.idToIndex[n.data("id")]];if(r.boundingBox){var s=(i.positionX-o.x1)/o.w,l=(i.positionY-o.y1)/o.h;return{x:a.x1+s*a.w,y:a.y1+l*a.h}}return{x:i.positionX,y:i.positionY}}),!0!==e.ready&&(e.ready=!0,n.one("layoutready",r.ready),n.trigger({type:"layoutready",layout:this}))};t.exports=n},{"../../is":77,"../../math":79,"../../thread":92,"../../util":94}],49:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},o,e)}var i=e("../../util"),a=e("../../math"),o={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,avoidOverlapPadding:10,condense:!1,rows:void 0,cols:void 0,position:function(e){},sort:void 0,animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){var e=this.options,t=e,r=e.cy,n=t.eles,i=n.nodes().not(":parent");t.sort&&(i=i.sort(t.sort));var o=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:r.width(),h:r.height()});if(0===o.h||0===o.w)i.layoutPositions(this,t,function(){return{x:o.x1,y:o.y1}});else{var s=i.size(),l=Math.sqrt(s*o.h/o.w),u=Math.round(l),c=Math.round(o.w/o.h*l),d=function(e){if(null==e)return Math.min(u,c);var t=Math.min(u,c);t==u?u=e:c=e},h=function(e){if(null==e)return Math.max(u,c);var t=Math.max(u,c);t==u?u=e:c=e},p=t.rows,v=null!=t.cols?t.cols:t.columns;if(null!=p&&null!=v)u=p,c=v;else if(null!=p&&null==v)u=p,c=Math.ceil(s/u);else if(null==p&&null!=v)c=v,u=Math.ceil(s/c);else if(c*u>s){var f=d(),g=h();(f-1)*g>=s?d(f-1):(g-1)*f>=s&&h(g-1)}else for(;s>c*u;){var f=d(),g=h();(g+1)*f>=s?h(g+1):d(f+1)}var y=o.w/c,m=o.h/u;if(t.condense&&(y=0,m=0),t.avoidOverlap)for(var b=0;b<i.length;b++){var x=i[b],w=x._private.position;(null==w.x||null==w.y)&&(w.x=0,w.y=0);var _=x.boundingBox(),E=t.avoidOverlapPadding,D=_.w+E,k=_.h+E;y=Math.max(y,D),m=Math.max(m,k)}for(var T={},S=function(e,t){return T["c-"+e+"-"+t]?!0:!1},P=function(e,t){T["c-"+e+"-"+t]=!0},C=0,N=0,M=function(){N++,N>=c&&(N=0,C++)},B={},b=0;b<i.length;b++){var x=i[b],z=t.position(x);if(z&&(void 0!==z.row||void 0!==z.col)){var w={row:z.row,col:z.col};if(void 0===w.col)for(w.col=0;S(w.row,w.col);)w.col++;else if(void 0===w.row)for(w.row=0;S(w.row,w.col);)w.row++;B[x.id()]=w,P(w.row,w.col)}}var O=function(e,t){var r,n;if(t.locked()||t.isFullAutoParent())return!1;var i=B[t.id()];if(i)r=i.col*y+y/2+o.x1,n=i.row*m+m/2+o.y1;else{for(;S(C,N);)M();r=N*y+y/2+o.x1,n=C*m+m/2+o.y1,P(C,N),M()}return{x:r,y:n}};i.layoutPositions(this,t,O)}return this},t.exports=n},{"../../math":79,"../../util":94}],50:[function(e,t,r){"use strict";t.exports=[{name:"breadthfirst",impl:e("./breadthfirst")},{name:"circle",impl:e("./circle")},{name:"concentric",impl:e("./concentric")},{name:"cose",impl:e("./cose")},{name:"grid",impl:e("./grid")},{name:"null",impl:e("./null")},{name:"preset",impl:e("./preset")},{name:"random",impl:e("./random")}]},{"./breadthfirst":45,"./circle":46,"./concentric":47,"./cose":48,"./grid":49,"./null":51,"./preset":52,"./random":53}],51:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},a,e)}var i=e("../../util"),a={ready:function(){},stop:function(){}};n.prototype.run=function(){var e=this.options,t=e.eles,r=this;e.cy;return r.trigger("layoutstart"),t.nodes().positions(function(){return{x:0,y:0}}),r.one("layoutready",e.ready),r.trigger("layoutready"),r.one("layoutstop",e.stop),r.trigger("layoutstop"),this},n.prototype.stop=function(){return this},t.exports=n},{"../../util":94}],52:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},o,e)}var i=e("../../util"),a=e("../../is"),o={positions:void 0,zoom:void 0,pan:void 0,fit:!0,padding:30,animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){function e(e){if(null==t.positions)return null;if(i)return t.positions.apply(e,[e]);var r=t.positions[e._private.data.id];return null==r?null:r}var t=this.options,r=t.eles,n=r.nodes(),i=a.fn(t.positions);return n.layoutPositions(this,t,function(t,r){var n=e(r);return r.locked()||null==n?!1:n}),this},t.exports=n},{"../../is":77,"../../util":94}],53:[function(e,t,r){"use strict";function n(e){this.options=i.extend({},o,e)}var i=e("../../util"),a=e("../../math"),o={fit:!0,padding:30,boundingBox:void 0,animate:!1,animationDuration:500,animationEasing:void 0,ready:void 0,stop:void 0};n.prototype.run=function(){var e=this.options,t=e.cy,r=e.eles,n=r.nodes().not(":parent"),i=a.makeBoundingBox(e.boundingBox?e.boundingBox:{x1:0,y1:0,w:t.width(),h:t.height()}),o=function(e,t){return{x:i.x1+Math.round(Math.random()*i.w),y:i.y1+Math.round(Math.random()*i.h)}};return n.layoutPositions(this,e,o),this},t.exports=n},{"../../math":79,"../../util":94}],54:[function(e,t,r){"use strict";var n=e("../../../math"),i=e("../../../is"),a=e("../../../util"),o={};o.arrowShapeHeight=.3,o.registerArrowShapes=function(){var e=this.arrowShapes={},t=this,r=function(e,t,r,n,i,a){var o=i.x-r/2-a,s=i.x+r/2+a,l=i.y-r/2-a,u=i.y+r/2+a,c=e>=o&&s>=e&&t>=l&&u>=t;return c},o=function(e,t,r,n,i){var a=e*Math.cos(n)-t*Math.sin(n),o=e*Math.sin(n)+t*Math.cos(n),s=a*r,l=o*r,u=s+i.x,c=l+i.y;return{x:u,y:c}},s=function(e,t,r,n){for(var i=[],a=0;a<e.length;a+=2){var s=e[a],l=e[a+1];i.push(o(s,l,t,r,n))}return i},l=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n.x,n.y)}return t},u=function(o,u){i.string(u)&&(u=e[u]),e[o]=a.extend({name:o,points:[-.15,-.3,.15,-.3,.15,.3,-.15,.3],collide:function(e,t,r,i,a,o){var u=l(s(this.points,r+2*o,i,a)),c=n.pointInsidePolygonPoints(e,t,u);return c},roughCollide:r,draw:function(e,r,n,i){var a=s(this.points,r,n,i);t.arrowShapeImpl("polygon")(e,a)},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pfValue}},u)};u("none",{collide:a.falsify,roughCollide:a.falsify,draw:a.noop,spacing:a.zeroify,gap:a.zeroify}),u("triangle",{points:[-.15,-.3,0,0,.15,-.3]}),u("arrow","triangle"),u("triangle-backcurve",{points:e.triangle.points,controlPoint:[0,-.15],roughCollide:r,draw:function(e,r,n,i){var a=s(this.points,r,n,i),l=this.controlPoint,u=o(l[0],l[1],r,n,i);t.arrowShapeImpl(this.name)(e,a,u)},gap:function(e){return e._private.style.width.pfValue}}),u("triangle-tee",{points:[-.15,-.3,0,0,.15,-.3,-.15,-.3],pointsTee:[-.15,-.4,-.15,-.5,.15,-.5,.15,-.4],collide:function(e,t,r,i,a,o){var u=l(s(this.points,r+2*o,i,a)),c=l(s(this.pointsTee,r+2*o,i,a)),d=n.pointInsidePolygonPoints(e,t,u)||n.pointInsidePolygonPoints(e,t,c);return d},draw:function(e,r,n,i){var a=s(this.points,r,n,i),o=s(this.pointsTee,r,n,i);t.arrowShapeImpl(this.name)(e,a,o)}}),u("vee",{points:[-.15,-.3,0,0,.15,-.3,0,-.15],gap:function(e){return e._private.style.width.pfValue}}),u("half-triangle-overshot",{points:[0,-.25,-.5,-.25,.5,.25],leavePathOpen:!0,matchEdgeWidth:!0}),u("circle",{radius:.15,collide:function(e,t,r,n,i,a){var o=i,s=Math.pow(o.x-e,2)+Math.pow(o.y-t,2)<=Math.pow((r+2*a)*this.radius,2);return s},draw:function(e,r,n,i){t.arrowShapeImpl(this.name)(e,i.x,i.y,this.radius*r)},spacing:function(e){return t.getArrowWidth(e._private.style.width.pfValue)*this.radius}}),u("inhibitor",{points:[-.25,0,-.25,-.1,.25,-.1,.25,0],spacing:function(e){return 1},gap:function(e){return 1}}),u("tee","inhibitor"),u("square",{points:[-.15,0,.15,0,.15,-.3,-.15,-.3]}),u("diamond",{points:[-.15,-.15,0,-.3,.15,-.15,0,0],gap:function(e){return e._private.style.width.pfValue}})},t.exports=o},{"../../../is":77,"../../../math":79,"../../../util":94}],55:[function(e,t,r){"use strict";var n={},i=function(e){e.eleEache=null},a=function(e){return e.eleEache||(e.eleEache={nodes:e.cy.nodes(),edges:e.cy.edges()}),e.eleEache};n.getCachedElements=function(){return a(this)},n.getCachedNodes=function(){return a(this).nodes},n.getCachedEdges=function(){return a(this).edges},n.updateElementsCache=function(){var e=this;return i(e),a(e)},t.exports=n},{}],56:[function(e,t,r){"use strict";function n(e,t){var r=function(e,t,r,n){return i.qbezierAt(e,t,r,n)},n=e._private,a=n.rstyle.bezierPts;a.push({x:r(t[0],t[2],t[4],.05),y:r(t[1],t[3],t[5],.05)}),a.push({x:r(t[0],t[2],t[4],.25),y:r(t[1],t[3],t[5],.25)}),a.push({x:r(t[0],t[2],t[4],.4),y:r(t[1],t[3],t[5],.4)}),a.push({x:r(t[0],t[2],t[4],.5),y:r(t[1],t[3],t[5],.5)}),a.push({x:r(t[0],t[2],t[4],.6),y:r(t[1],t[3],t[5],.6)}),a.push({x:r(t[0],t[2],t[4],.75),y:r(t[1],t[3],t[5],.75)}),a.push({x:r(t[0],t[2],t[4],.95),y:r(t[1],t[3],t[5],.95)})}var i=e("../../../math"),a=e("../../../is"),o=e("../../../collection/zsort"),s={};s.projectIntoViewport=function(e,t){var r=this.findContainerClientCoords(),n=r[0],i=r[1],a=e-n,o=t-i;return a-=this.cy.pan().x,o-=this.cy.pan().y,a/=this.cy.zoom(),o/=this.cy.zoom(),[a,o]},s.findContainerClientCoords=function(){var e=this.container,t=this.containerBB=this.containerBB||e.getBoundingClientRect();return[t.left,t.top,t.right-t.left,t.bottom-t.top]},s.invalidateContainerClientCoordsCache=function(){this.containerBB=null},s.findNearestElement=function(e,t,r,n){function a(n){var i=n._private;if("no"!==i.style.events.strValue){var a=n.outerWidth()+2*f,o=n.outerHeight()+2*f,s=a/2,c=o/2,h=i.position;if(h.x-s<=e&&e<=h.x+s&&h.y-c<=t&&t<=h.y+c){var p=!r||n.visible()&&!n.transparent();if(r&&!p)return;var v=u.nodeShapes[l.getNodeShape(n)];v.checkPoint(e,t,0,a,o,h.x,h.y)&&d.push(n)}}}function o(n){var o=n._private;if("no"!==o.style.events.strValue){var s,c,h=o.rscratch,f=o.style,g=f.width.pfValue/2+v,y=g*g,m=2*g,b=o.source,x=o.target,w=!1,_=function(){if(void 0!==c)return c;if(!r)return c=!0,!0;var e=n.visible()&&!n.transparent();return e?(c=!0,!0):(c=!1,!1)};if("segments"===h.edgeType||"straight"===h.edgeType||"haystack"===h.edgeType)for(var E=h.allpts,D=0;D+3<E.length;D+=2)(w=i.inLineVicinity(e,t,E[D],E[D+1],E[D+2],E[D+3],m))&&_()&&y>(s=i.sqDistanceToFiniteLine(e,t,E[D],E[D+1],E[D+2],E[D+3]))&&d.push(n);else if("bezier"===h.edgeType||"multibezier"===h.edgeType||"self"===h.edgeType||"compound"===h.edgeType)for(var E=h.allpts,D=0;D+5<h.allpts.length;D+=4)(w=i.inBezierVicinity(e,t,E[D],E[D+1],E[D+2],E[D+3],E[D+4],E[D+5],m))&&_()&&y>(s=i.sqDistanceToQuadraticBezier(e,t,E[D],E[D+1],E[D+2],E[D+3],E[D+4],E[D+5]))&&d.push(n);if(w&&_()&&0===d.length||d[d.length-1]!==n)for(var b=b||o.source,x=x||o.target,k=f.width.pfValue,T=l.getArrowWidth(k),S=[{name:"source",x:h.arrowStartX,y:h.arrowStartY,angle:h.srcArrowAngle},{name:"target",x:h.arrowEndX,y:h.arrowEndY,angle:h.tgtArrowAngle},{name:"mid-source",x:h.midX,y:h.midY,angle:h.midsrcArrowAngle},{name:"mid-target",x:h.midX,y:h.midY,angle:h.midtgtArrowAngle}],D=0;D<S.length;D++){var P=S[D],C=u.arrowShapes[f[P.name+"-arrow-shape"].value];if(C.roughCollide(e,t,T,P.angle,{x:P.x,y:P.y},v)&&C.collide(e,t,T,P.angle,{x:P.x,y:P.y},v)){d.push(n);break}}p&&d.length>0&&d[d.length-1]===n&&(a(b),a(x))}}function s(r){var n=r._private,a=g;if("no"!==n.style["text-events"].strValue)if("edges"===n.group&&"autorotate"===n.style["edge-text-rotation"].strValue){var o=n.rstyle,s=o.labelWidth+2*a,l=o.labelHeight+2*a,u=o.labelX,c=o.labelY,h=n.rscratch.labelAngle,p=Math.cos(h),v=Math.sin(h),f=function(e,t){return e-=u,t-=c,{x:e*p-t*v+u,y:e*v+t*p+c}},y=u-s/2,m=u+s/2,b=c-l/2,x=c+l/2,w=f(y,b),_=f(y,x),E=f(m,b),D=f(m,x),k=[w.x,w.y,E.x,E.y,D.x,D.y,_.x,_.y];i.pointInsidePolygonPoints(e,t,k)&&d.push(r)}else{var T=r.boundingBox({includeLabels:!0,includeNodes:!1,includeEdges:!1});T.x1-=a,T.y1-=a,T.x2+=a,T.y2+=a,T.w=T.x2-T.x1,T.h=T.y2-T.y1,i.inBoundingBox(T,e,t)&&d.push(r)}}for(var l=this,u=this,c=u.getCachedZSortedEles(),d=[],h=u.cy.zoom(),p=u.cy.hasCompoundNodes(),v=(n?24:8)/h,f=(n?8:2)/h,g=(n?8:2)/h,y=c.length-1;y>=0;y--){var m=c[y],b=m._private;if(d.length>0)break;"nodes"===b.group?a(m):o(m),s(m)}return d.length>0?d[d.length-1]:null},s.getAllInBox=function(e,t,r,n){var a=this.getCachedNodes(),o=this.getCachedEdges(),s=[],l=Math.min(e,r),u=Math.max(e,r),c=Math.min(t,n),d=Math.max(t,n);e=l,r=u,t=c,n=d;for(var h=i.makeBoundingBox({x1:e,y1:t,x2:r,y2:n}),p=0;p<a.length;p++){var v=a[p],f=v.boundingBox({includeNodes:!0,includeEdges:!1,includeLabels:!1});i.boundingBoxesIntersect(h,f)&&s.push(a[p])}for(var g=0;g<o.length;g++){var y=o[g],m=y._private,b=m.rscratch;if((null==b.startX||null==b.startY||i.inBoundingBox(h,b.startX,b.startY))&&(null==b.endX||null==b.endY||i.inBoundingBox(h,b.endX,b.endY)))if("bezier"===b.edgeType||"multibezier"===b.edgeType||"self"===b.edgeType||"compound"===b.edgeType||"segments"===b.edgeType||"haystack"===b.edgeType){for(var x=m.rstyle.bezierPts||m.rstyle.linePts||m.rstyle.haystackPts,w=!0,p=0;p<x.length;p++)if(!i.pointInBoundingBox(h,x[p])){w=!1;break}w&&s.push(y)}else("haystack"===b.edgeType||"straight"===b.edgeType)&&s.push(y)}return s},s.getNodeShape=function(e){var t=this,r=e._private.style,n=r.shape.value;if(e.isParent())return"rectangle"===n||"roundrectangle"===n?n:"rectangle";if("polygon"===n){var i=r["shape-polygon-points"].value;return t.nodeShapes.makePolygon(i).name}return n},s.updateCachedZSortedEles=function(){this.getCachedZSortedEles(!0)},s.getCachedZSortedEles=function(e){var t=this.lastZOrderCachedNodes,r=this.lastZOrderCachedEdges,n=this.getCachedNodes(),i=this.getCachedEdges(),a=[];if(!e&&t&&r&&t===n&&r===i)a=this.cachedZSortedEles;else{for(var s=0;s<n.length;s++){var l=n[s];(l.animated()||l.visible()&&!l.transparent())&&a.push(l)}for(var s=0;s<i.length;s++){var u=i[s];(u.animated()||u.visible()&&!u.transparent())&&a.push(u)}a.sort(o),this.cachedZSortedEles=a}return this.lastZOrderCachedNodes=n,this.lastZOrderCachedEdges=i,a},s.projectLines=function(e){var t=e._private,r=t.rscratch,i=r.edgeType;if("multibezier"===i||"bezier"===i||"self"===i||"compound"===i)for(var a=(t.rstyle.bezierPts=[],0);a+5<r.allpts.length;a+=4)n(e,r.allpts.slice(a,a+6));else if("segments"===i)for(var o=t.rstyle.linePts=[],a=0;a+1<r.allpts.length;a+=2)o.push({x:r.allpts[a],y:r.allpts[a+1]});else if("haystack"===i){var s=r.haystackPts;t.rstyle.haystackPts=[{x:s[0],y:s[1]},{x:s[2],y:s[3]}]}},s.projectBezier=s.projectLines,s.recalculateNodeLabelProjection=function(e){var t=e._private.style.label.strValue;if(t&&!t.match(/^\s+$/)){var r,n,i=e.outerWidth(),a=e.outerHeight(),o=e._private.position,s=e._private.style["text-halign"].strValue,l=e._private.style["text-valign"].strValue,u=e._private.rscratch,c=e._private.rstyle;switch(s){case"left":r=o.x-i/2;break;case"right":r=o.x+i/2;break;default:r=o.x}switch(l){case"top":n=o.y-a/2;break;case"bottom":n=o.y+a/2;break;default:n=o.y}u.labelX=r,u.labelY=n,c.labelX=r,c.labelY=n,this.applyLabelDimensions(e)}},s.recalculateEdgeLabelProjection=function(e){var t=e._private.style.label.strValue;if(t&&!t.match(/^\s+$/)){var r,n,i=e._private,a=i.rscratch,o=i.rstyle;r=a.midX,n=a.midY,a.labelX=r,a.labelY=n,o.labelX=r,o.labelY=n,this.applyLabelDimensions(e)}},s.applyLabelDimensions=function(e){var t=e._private.rscratch,r=e._private.rstyle,n=this.getLabelText(e),i=this.calculateLabelDimensions(e,n);r.labelWidth=i.width,t.labelWidth=i.width,r.labelHeight=i.height,t.labelHeight=i.height},s.getLabelText=function(e){var t=e._private.style,r=e._private.style.label.strValue,n=t["text-transform"].value,i=e._private.rscratch;if("none"==n||("uppercase"==n?r=r.toUpperCase():"lowercase"==n&&(r=r.toLowerCase())),"wrap"===t["text-wrap"].value){if(i.labelWrapKey===i.labelKey)return i.labelWrapCachedText;for(var a=r.split("\n"),o=t["text-max-width"].pfValue,s=[],l=0;l<a.length;l++){var u=a[l],c=this.calculateLabelDimensions(e,u,"line="+u),d=c.width;if(d>o){for(var h=u.split(/\s+/),p="",v=0;v<h.length;v++){var f=h[v],g=0===p.length?f:p+" "+f,y=this.calculateLabelDimensions(e,g,"testLine="+g),m=y.width;o>=m?p+=f+" ":(s.push(p),p=f+" ")}p.match(/^\s+$/)||s.push(p)}else s.push(u)}i.labelWrapCachedLines=s,i.labelWrapCachedText=r=s.join("\n"),i.labelWrapKey=i.labelKey}return r},s.calculateLabelDimensions=function(e,t,r){var n=this,i=e._private.style,a=i["font-style"].strValue,o=i["font-size"].pfValue+"px",s=i["font-family"].strValue,l=i["font-weight"].strValue,u=e._private.labelKey;r&&(u+="$@$"+r);var c=n.labelDimCache||(n.labelDimCache={});if(c[u])return c[u];var d=this.labelCalcDiv;d||(d=this.labelCalcDiv=document.createElement("div"),document.body.appendChild(d));var h=d.style;return h.fontFamily=s,h.fontStyle=a,h.fontSize=o,h.fontWeight=l,h.position="absolute",h.left="-9999px",h.top="-9999px",h.zIndex="-1",h.visibility="hidden",h.pointerEvents="none",h.padding="0",h.lineHeight="1","wrap"===i["text-wrap"].value?h.whiteSpace="pre":h.whiteSpace="normal",d.textContent=t,c[u]={width:d.clientWidth,height:d.clientHeight},c[u]},s.recalculateRenderedStyle=function(e){for(var t=[],r=[],n={},i=0;i<e.length;i++){var a=e[i],o=a._private,s=o.style,l=o.rscratch,u=o.rstyle,c=o.data.id,d=null!=l.boundingBoxKey&&o.boundingBoxKey===l.boundingBoxKey,h=null!=l.labelKey&&o.labelKey===l.labelKey,p=d&&h;if("nodes"===o.group){var v=o.position,f=null!=u.nodeX&&null!=u.nodeY&&v.x===u.nodeX&&v.y===u.nodeY,g=null!=u.nodeW&&u.nodeW===s.width.pfValue,y=null!=u.nodeH&&u.nodeH===s.height.pfValue;f&&p&&g&&y||r.push(a),u.nodeX=v.x,u.nodeY=v.y,u.nodeW=s.width.pfValue,u.nodeH=s.height.pfValue}else{var m=o.source._private.position,b=o.target._private.position,x=null!=u.srcX&&null!=u.srcY&&m.x===u.srcX&&m.y===u.srcY,w=null!=u.tgtX&&null!=u.tgtY&&b.x===u.tgtX&&b.y===u.tgtY,_=x&&w;if(!_||!p)if("bezier"===l.edgeType||"straight"===l.edgeType||"self"===l.edgeType||"compound"===l.edgeType){if(!n[c]){t.push(a),n[c]=!0;for(var E=a.parallelEdges(),i=0;i<E.length;i++){var D=E[i],k=D._private.data.id;n[k]||(t.push(D),n[k]=!0)}}}else t.push(a);u.srcX=m.x,u.srcY=m.y,u.tgtX=b.x,u.tgtY=b.y}l.boundingBoxKey=o.boundingBoxKey,l.labelKey=o.labelKey}this.recalculateEdgeProjections(t),this.recalculateLabelProjections(r,t)},s.recalculateLabelProjections=function(e,t){for(var r=0;r<e.length;r++)this.recalculateNodeLabelProjection(e[r]);for(var r=0;r<t.length;r++)this.recalculateEdgeLabelProjection(t[r])},s.recalculateEdgeProjections=function(e){this.findEdgeControlPoints(e)},s.findEdgeControlPoints=function(e){if(e&&0!==e.length){for(var t,r=this,n=r.cy,o=n.hasCompoundNodes(),s={},l=[],u=[],c=[],d=0;d<e.length;d++){var h=e[d],p=h._private,v=p.data,f=p.style,g=f["curve-style"].value,y="unbundled-bezier"===g||"segments"===g;if("none"!==f.display.value)if("autorotate"===f["edge-text-rotation"].strValue&&c.push(h),"haystack"!==g){var m=v.source,b=v.target;t=m>b?b+"$-$"+m:m+"$-$"+b,y&&(t="unbundled$-$"+v.id),null==s[t]&&(s[t]=[],l.push(t)),s[t].push(h),y&&(s[t].hasUnbundled=!0)}else u.push(h)}for(var x,w,_,E,D,k,T,S,P,C,N,M,B,z,O=0;O<l.length;O++){t=l[O];var I=s[t];if(I.sort(function(e,t){return e._private.index-t._private.index}),x=I[0]._private.source,w=I[0]._private.target,_=x._private,E=w._private,_.data.id>E.data.id){var L=x;x=w,w=L}if(D=_.position,k=E.position,T=x.outerWidth(),S=x.outerHeight(),P=w.outerWidth(),C=w.outerHeight(),N=r.nodeShapes[this.getNodeShape(x)],M=r.nodeShapes[this.getNodeShape(w)],z=!1,I.length>1&&x!==w||I.hasUnbundled){var A=N.intersectLine(D.x,D.y,T,S,k.x,k.y,0),R=M.intersectLine(k.x,k.y,P,C,D.x,D.y,0),V={
x1:A[0],x2:R[0],y1:A[1],y2:R[1]},F=R[1]-A[1],j=R[0]-A[0],q=Math.sqrt(j*j+F*F),X={x:j,y:F},Y={x:X.x/q,y:X.y/q};B={x:-Y.y,y:Y.x},(M.checkPoint(A[0],A[1],0,P,C,k.x,k.y)||N.checkPoint(R[0],R[1],0,T,S,D.x,D.y))&&(B={},z=!0)}for(var h,$,H,d=0;d<I.length;d++){h=I[d],$=h._private,H=$.rscratch;var W=H.lastEdgeIndex,Z=d,U=H.lastNumEdges,G=I.length,K=$.style,f=K,g=K["curve-style"].value,J=K["control-point-distances"],Q=K["control-point-weights"],ee=J&&Q?Math.min(J.value.length,Q.value.length):1,te=K["control-point-step-size"].pfValue,re=void 0!==J?J.pfValue[0]:void 0,ne=Q.value[0],y="unbundled-bezier"===g||"segments"===g,ie=$.source!==x;ie&&y&&(re*=-1);var ae=H.lastSrcCtlPtX,oe=D.x,se=H.lastSrcCtlPtY,le=D.y,ue=H.lastSrcCtlPtW,ce=x.outerWidth(),de=H.lastSrcCtlPtH,he=x.outerHeight(),pe=H.lastTgtCtlPtX,ve=k.x,fe=H.lastTgtCtlPtY,ge=k.y,ye=H.lastTgtCtlPtW,me=w.outerWidth(),be=H.lastTgtCtlPtH,xe=w.outerHeight(),we=H.lastW,_e=K["control-point-step-size"].pfValue;if(z?H.badBezier=!0:H.badBezier=!1,ae!==oe||se!==le||ue!==ce||de!==he||pe!==ve||fe!==ge||ye!==me||be!==xe||we!==_e||!(W===Z&&U===G||y)){if(H.lastSrcCtlPtX=oe,H.lastSrcCtlPtY=le,H.lastSrcCtlPtW=ce,H.lastSrcCtlPtH=he,H.lastTgtCtlPtX=ve,H.lastTgtCtlPtY=ge,H.lastTgtCtlPtW=me,H.lastTgtCtlPtH=xe,H.lastEdgeIndex=Z,H.lastNumEdges=G,H.lastWidth=_e,x===w){H.edgeType="self";var Ee=d,De=te;y&&(Ee=0,De=re),H.ctrlpts=[D.x,D.y-(1+Math.pow(S,1.12)/100)*De*(Ee/3+1),D.x-(1+Math.pow(T,1.12)/100)*De*(Ee/3+1),D.y]}else if(o&&(x.isParent()||x.isChild()||w.isParent()||w.isChild())&&(x.parents().anySame(w)||w.parents().anySame(x))){H.edgeType="compound",H.badBezier=!1;var Ee=d,De=te;y&&(Ee=0,De=re);var ke=50,Te={x:D.x-T/2,y:D.y-S/2},Se={x:k.x-P/2,y:k.y-C/2},Pe={x:Math.min(Te.x,Se.x),y:Math.min(Te.y,Se.y)},Ce=.5,Ne=Math.max(Ce,Math.log(.01*T)),Me=Math.max(Ce,Math.log(.01*P));H.ctrlpts=[Pe.x,Pe.y-(1+Math.pow(ke,1.12)/100)*De*(Ee/3+1)*Ne,Pe.x-(1+Math.pow(ke,1.12)/100)*De*(Ee/3+1)*Me,Pe.y]}else if("segments"===g){H.edgeType="segments",H.segpts=[];for(var Be=K["segment-weights"].pfValue,ze=K["segment-distances"].pfValue,Oe=Math.min(Be.length,ze.length),Ie=0;Oe>Ie;Ie++){var Le=Be[Ie],Ae=ze[Ie],Re=1-Le,Ve=Le,Fe={x:V.x1*Re+V.x2*Ve,y:V.y1*Re+V.y2*Ve};H.segpts.push(Fe.x+B.x*Ae,Fe.y+B.y*Ae)}}else if(I.length%2!==1||d!==Math.floor(I.length/2)||y){var je=y;H.edgeType=je?"multibezier":"bezier",H.ctrlpts=[];for(var qe=0;ee>qe;qe++){var Xe,Ye=(.5-I.length/2+d)*te,$e=i.signum(Ye);je&&(re=J?J.pfValue[qe]:te,ne=Q.value[qe]),Xe=y?re:void 0!==re?$e*re:void 0;var He=void 0!==Xe?Xe:Ye,Re=!ie||y?1-ne:ne,Ve=!ie||y?ne:1-ne,Fe={x:V.x1*Re+V.x2*Ve,y:V.y1*Re+V.y2*Ve};H.ctrlpts.push(Fe.x+B.x*He,Fe.y+B.y*He)}}else H.edgeType="straight";this.findEndpoints(h);var We=!a.number(H.startX)||!a.number(H.startY),Ze=!a.number(H.arrowStartX)||!a.number(H.arrowStartY),Ue=!a.number(H.endX)||!a.number(H.endY),Ge=!a.number(H.arrowEndX)||!a.number(H.arrowEndY),Ke=3,Je=this.getArrowWidth(K.width.pfValue)*this.arrowShapeHeight,Qe=Ke*Je;if("bezier"===H.edgeType){var et=i.distance({x:H.ctrlpts[0],y:H.ctrlpts[1]},{x:H.startX,y:H.startY}),tt=Qe>et,rt=i.distance({x:H.ctrlpts[0],y:H.ctrlpts[1]},{x:H.endX,y:H.endY}),nt=Qe>rt,it=!1;if(We||Ze||tt){it=!0;var at={x:H.ctrlpts[0]-D.x,y:H.ctrlpts[1]-D.y},ot=Math.sqrt(at.x*at.x+at.y*at.y),st={x:at.x/ot,y:at.y/ot},lt=Math.max(T,S),ut={x:H.ctrlpts[0]+2*st.x*lt,y:H.ctrlpts[1]+2*st.y*lt},ct=N.intersectLine(D.x,D.y,T,S,ut.x,ut.y,0);tt?(H.ctrlpts[0]=H.ctrlpts[0]+st.x*(Qe-et),H.ctrlpts[1]=H.ctrlpts[1]+st.y*(Qe-et)):(H.ctrlpts[0]=ct[0]+st.x*Qe,H.ctrlpts[1]=ct[1]+st.y*Qe)}if(Ue||Ge||nt){it=!0;var at={x:H.ctrlpts[0]-k.x,y:H.ctrlpts[1]-k.y},ot=Math.sqrt(at.x*at.x+at.y*at.y),st={x:at.x/ot,y:at.y/ot},lt=Math.max(T,S),ut={x:H.ctrlpts[0]+2*st.x*lt,y:H.ctrlpts[1]+2*st.y*lt},dt=M.intersectLine(k.x,k.y,P,C,ut.x,ut.y,0);nt?(H.ctrlpts[0]=H.ctrlpts[0]+st.x*(Qe-rt),H.ctrlpts[1]=H.ctrlpts[1]+st.y*(Qe-rt)):(H.ctrlpts[0]=dt[0]+st.x*Qe,H.ctrlpts[1]=dt[1]+st.y*Qe)}it&&this.findEndpoints(h)}if("multibezier"===H.edgeType||"bezier"===H.edgeType||"self"===H.edgeType||"compound"===H.edgeType){H.allpts=[],H.allpts.push(H.startX,H.startY);for(var qe=0;qe+1<H.ctrlpts.length;qe+=2)H.allpts.push(H.ctrlpts[qe],H.ctrlpts[qe+1]),qe+3<H.ctrlpts.length&&H.allpts.push((H.ctrlpts[qe]+H.ctrlpts[qe+2])/2,(H.ctrlpts[qe+1]+H.ctrlpts[qe+3])/2);H.allpts.push(H.endX,H.endY);var ht,pt;"bezier"===H.edgeType?(H.midX=i.qbezierAt(H.arrowStartX,H.ctrlpts[0],H.arrowEndX,.5),H.midY=i.qbezierAt(H.arrowStartY,H.ctrlpts[1],H.arrowEndY,.5)):H.ctrlpts.length/2%2===0?(ht=H.allpts.length/2-1,H.midX=H.allpts[ht],H.midY=H.allpts[ht+1]):(ht=H.allpts.length/2-3,pt=.5,H.midX=i.qbezierAt(H.allpts[ht],H.allpts[ht+2],H.allpts[ht+4],pt),H.midY=i.qbezierAt(H.allpts[ht+1],H.allpts[ht+3],H.allpts[ht+5],pt))}else if("straight"===H.edgeType)H.allpts=[H.startX,H.startY,H.endX,H.endY],H.midX=(H.arrowStartX+H.arrowEndX)/2,H.midY=(H.arrowStartY+H.arrowEndY)/2;else if("segments"===H.edgeType)if(H.allpts=[],H.allpts.push(H.startX,H.startY),H.allpts.push.apply(H.allpts,H.segpts),H.allpts.push(H.endX,H.endY),H.segpts.length%4===0){var vt=H.segpts.length/2,ft=vt-2;H.midX=(H.segpts[ft]+H.segpts[vt])/2,H.midY=(H.segpts[ft+1]+H.segpts[vt+1])/2}else{var ft=H.segpts.length/2-1;H.midX=H.segpts[ft],H.midY=H.segpts[ft+1]}this.projectLines(h),this.calculateArrowAngles(h),this.recalculateEdgeLabelProjection(h)}}}for(var d=0;d<u.length;d++){var h=u[d],p=h._private,f=p.style,gt=p.rscratch,H=gt;if(!gt.haystack){var yt=2*Math.random()*Math.PI;gt.source={x:Math.cos(yt),y:Math.sin(yt)};var yt=2*Math.random()*Math.PI;gt.target={x:Math.cos(yt),y:Math.sin(yt)}}var x=p.source,w=p.target,D=x._private.position,k=w._private.position,T=x.width(),P=w.width(),S=x.height(),C=w.height(),lt=f["haystack-radius"].value,mt=lt/2;H.haystackPts=H.allpts=[H.source.x*T*mt+D.x,H.source.y*S*mt+D.y,H.target.x*P*mt+k.x,H.target.y*C*mt+k.y],H.midX=(H.allpts[0]+H.allpts[2])/2,H.midY=(H.allpts[1]+H.allpts[3])/2,gt.edgeType="haystack",gt.haystack=!0,this.projectLines(h),this.calculateArrowAngles(h),this.recalculateEdgeLabelProjection(h)}for(var d=0;d<c.length;d++){var h=c[d],H=h._private.rscratch;H.labelAngle=Math.atan(H.midDispY/H.midDispX)}return s}};var l=function(e,t){return Math.atan2(t,e)-Math.PI/2};s.calculateArrowAngles=function(e){var t,r,n,a,o,s,u=e._private.rscratch,c="haystack"===u.edgeType,d="multibezier"===u.edgeType,h="segments"===u.edgeType,p="compound"===u.edgeType,v="self"===u.edgeType,f=e.source().position(),g=e.target().position();c?(n=u.haystackPts[0],a=u.haystackPts[1],o=u.haystackPts[2],s=u.haystackPts[3]):(n=u.arrowStartX,a=u.arrowStartY,o=u.arrowEndX,s=u.arrowEndY),t=f.x-n,r=f.y-a,u.srcArrowAngle=l(t,r);var y=u.midX,m=u.midY;if(c&&(y=(n+o)/2,m=(a+s)/2),t=o-n,r=s-a,v)t=-1,r=1;else if(h){var b=u.allpts;if(b.length/2%2===0){var x=b.length/2,w=x-2;t=b[x]-b[w],r=b[x+1]-b[w+1]}else{var x=b.length/2-1,w=x-2,_=x+2;t=b[x]-b[w],r=b[x+1]-b[w+1]}}else if(d||p){var E,D,k,T,b=u.allpts,S=u.ctrlpts;if(S.length/2%2===0){var P=b.length/2-1,C=P+2,N=C+2;E=i.qbezierAt(b[P],b[C],b[N],0),D=i.qbezierAt(b[P+1],b[C+1],b[N+1],0),k=i.qbezierAt(b[P],b[C],b[N],1e-4),T=i.qbezierAt(b[P+1],b[C+1],b[N+1],1e-4)}else{var C=b.length/2-1,P=C-2,N=C+2;E=i.qbezierAt(b[P],b[C],b[N],.4999),D=i.qbezierAt(b[P+1],b[C+1],b[N+1],.4999),k=i.qbezierAt(b[P],b[C],b[N],.5),T=i.qbezierAt(b[P+1],b[C+1],b[N+1],.5)}t=k-E,r=T-D}if(u.midtgtArrowAngle=l(t,r),u.midDispX=t,u.midDispY=r,t*=-1,r*=-1,h){var b=u.allpts;if(b.length/2%2===0);else{var x=b.length/2-1,_=x+2;t=-(b[_]-b[x]),r=-(b[_+1]-b[x+1])}}u.midsrcArrowAngle=l(t,r),t=g.x-o,r=g.y-s,u.tgtArrowAngle=l(t,r)},s.findEndpoints=function(e){var t,r,n,o=this,s=e.source()[0],l=e.target()[0],u=s._private,c=l._private,d=u.position,h=c.position,p=e._private.style["target-arrow-shape"].value,v=e._private.style["source-arrow-shape"].value,f=e._private.rscratch,g=f.edgeType,y="bezier"===g||"multibezier"===g||"self"===g||"compound"===g,m="bezier"!==g,b="straight"===g||"segments"===g,x="segments"===g;if(y){var w=[f.ctrlpts[0],f.ctrlpts[1]],_=m?[f.ctrlpts[f.ctrlpts.length-2],f.ctrlpts[f.ctrlpts.length-1]]:w;r=_,n=w}else if(b){var E=x?f.segpts.slice(0,2):[h.x,h.y],D=x?f.segpts.slice(f.segpts.length-2):[d.x,d.y];r=D,n=E}t=o.nodeShapes[this.getNodeShape(l)].intersectLine(h.x,h.y,l.outerWidth(),l.outerHeight(),r[0],r[1],0);var k=i.shortenIntersection(t,r,o.arrowShapes[p].spacing(e)),T=i.shortenIntersection(t,r,o.arrowShapes[p].gap(e));f.endX=T[0],f.endY=T[1],f.arrowEndX=k[0],f.arrowEndY=k[1],t=o.nodeShapes[this.getNodeShape(s)].intersectLine(d.x,d.y,s.outerWidth(),s.outerHeight(),n[0],n[1],0);var S=i.shortenIntersection(t,n,o.arrowShapes[v].spacing(e)),P=i.shortenIntersection(t,n,o.arrowShapes[v].gap(e));f.startX=P[0],f.startY=P[1],f.arrowStartX=S[0],f.arrowStartY=S[1],b&&(a.number(f.startX)&&a.number(f.startY)&&a.number(f.endX)&&a.number(f.endY)?f.badLine=!1:f.badLine=!0)},s.getArrowWidth=s.getArrowHeight=function(e){var t=this.arrowWidthCache=this.arrowWidthCache||{},r=t[e];return r?r:(r=Math.max(Math.pow(13.37*e,.9),29),t[e]=r,r)},t.exports=s},{"../../../collection/zsort":29,"../../../is":77,"../../../math":79}],57:[function(e,t,r){"use strict";var n={};n.getCachedImage=function(e,t){var r=this,n=r.imageCache=r.imageCache||{};if(n[e]&&n[e].image)return n[e].image;var i=n[e]=n[e]||{},a=i.image=new Image;return a.addEventListener("load",t),a.src=e,a},t.exports=n},{}],58:[function(e,t,r){"use strict";var n=e("../../../is"),i=e("../../../util"),a=function(){},o=a,s=o.prototype;s.clientFunctions=["redrawHint","render","renderTo","matchCanvasSize","nodeShapeImpl","arrowShapeImpl"],s.init=function(e){var t=this;t.options=e,t.cy=e.cy,t.container=e.cy.container(),t.selection=[void 0,void 0,void 0,void 0,0],t.hoverData={down:null,last:null,downTime:null,triggerMode:null,dragging:!1,initialPan:[null,null],capture:!1},t.dragData={possibleDragElements:[]},t.touchData={start:null,capture:!1,startPosition:[null,null,null,null,null,null],singleTouchStartTime:null,singleTouchMoved:!0,now:[null,null,null,null,null,null],earlier:[null,null,null,null,null,null]},t.redraws=0,t.showFps=e.showFps,t.hideEdgesOnViewport=e.hideEdgesOnViewport,t.hideLabelsOnViewport=e.hideLabelsOnViewport,t.textureOnViewport=e.textureOnViewport,t.wheelSensitivity=e.wheelSensitivity,t.motionBlurEnabled=e.motionBlur,t.forcedPixelRatio=e.pixelRatio,t.motionBlur=!0,t.motionBlurOpacity=e.motionBlurOpacity,t.motionBlurTransparency=1-t.motionBlurOpacity,t.motionBlurPxRatio=1,t.mbPxRBlurry=1,t.minMbLowQualFrames=4,t.fullQualityMb=!1,t.clearedForMotionBlur=[],t.desktopTapThreshold=e.desktopTapThreshold,t.desktopTapThreshold2=e.desktopTapThreshold*e.desktopTapThreshold,t.touchTapThreshold=e.touchTapThreshold,t.touchTapThreshold2=e.touchTapThreshold*e.touchTapThreshold,t.tapholdDuration=500,t.bindings=[],t.registerNodeShapes(),t.registerArrowShapes(),t.load()},s.notify=function(e){var t,r=this;t=n.array(e.type)?e.type:[e.type];for(var i=0;i<t.length;i++){var a=t[i];switch(a){case"destroy":return void r.destroy();case"add":case"remove":case"load":r.updateElementsCache();break;case"viewport":r.redrawHint("select",!0);break;case"style":r.updateCachedZSortedEles()}("load"===a||"resize"===a)&&(r.invalidateContainerClientCoordsCache(),r.matchCanvasSize(r.container))}r.redrawHint("eles",!0),r.redrawHint("drag",!0),this.startRenderLoop(),this.redraw()},s.destroy=function(){this.destroyed=!0,this.cy.stopAnimationLoop();for(var e=0;e<this.bindings.length;e++){var t=this.bindings[e],r=t;r.target.removeEventListener(r.event,r.handler,r.useCapture)}if(this.removeObserver&&this.removeObserver.disconnect(),this.labelCalcDiv)try{document.body.removeChild(this.labelCalcDiv)}catch(n){}},[e("./arrow-shapes"),e("./cached-eles"),e("./coord-ele-math"),e("./images"),e("./load-listeners"),e("./node-shapes"),e("./redraw")].forEach(function(e){i.extend(s,e)}),t.exports=o},{"../../../is":77,"../../../util":94,"./arrow-shapes":54,"./cached-eles":55,"./coord-ele-math":56,"./images":57,"./load-listeners":59,"./node-shapes":60,"./redraw":61}],59:[function(e,t,r){"use strict";var n=e("../../../is"),i=e("../../../util"),a=e("../../../event"),o=e("../../../collection"),s={};s.registerBinding=function(e,t,r,n){this.bindings.push({target:e,event:t,handler:r,useCapture:n}),e.addEventListener(t,r,n)},s.nodeIsDraggable=function(e){return 0!==e._private.style.opacity.value&&"visible"==e._private.style.visibility.value&&"element"==e._private.style.display.value&&!e.locked()&&e.grabbable()?!0:!1},s.load=function(){var e=this,t=function(t,r,n,o){null==t&&(t=e.cy);for(var s=0;s<r.length;s++){var l=r[s],u=a(n,i.extend({type:l},o));t.trigger(u)}},r=function(e){return e.shiftKey||e.metaKey||e.ctrlKey},s=function(t){var r;if(t.addToList&&e.cy.hasCompoundNodes()){if(!t.addToList.hasId){t.addToList.hasId={};for(var n=0;n<t.addToList.length;n++){var i=t.addToList[n];t.addToList.hasId[i.id()]=!0}}r=t.addToList.hasId}return r||{}},l=function(e,t){if(e._private.cy.hasCompoundNodes()&&(null!=t.inDragLayer||null!=t.addToList))for(var r=s(t),n=e.descendants(),i=0;i<n.size();i++){var a=n[i],o=a._private;t.inDragLayer&&(o.rscratch.inDragLayer=!0),t.addToList&&!r[a.id()]&&(t.addToList.push(a),r[a.id()]=!0,o.grabbed=!0);for(var l=o.edges,u=0;t.inDragLayer&&u<l.length;u++)l[u]._private.rscratch.inDragLayer=!0}},u=function(e,t){var r=e._private,n=s(t);t.inDragLayer&&(r.rscratch.inDragLayer=!0),t.addToList&&!n[e.id()]&&(t.addToList.push(e),n[e.id()]=!0,r.grabbed=!0);for(var i=r.edges,a=0;t.inDragLayer&&a<i.length;a++)i[a]._private.rscratch.inDragLayer=!0;l(e,t),d(e,{inDragLayer:t.inDragLayer})},c=function(e){if(e)for(var t=0;t<e.length;t++){var r=e[t]._private;if("nodes"===r.group){r.rscratch.inDragLayer=!1,r.grabbed=!1;for(var n=r.edges,i=0;i<n.length;i++)n[i]._private.rscratch.inDragLayer=!1;d(e[t],{inDragLayer:!1})}else"edges"===r.group&&(r.rscratch.inDragLayer=!1)}},d=function(e,t){if(null!=t.inDragLayer||null!=t.addToList){var r=e;if(e._private.cy.hasCompoundNodes()){for(;r.parent().nonempty();)r=r.parent()[0];if(r!=e){for(var n=r.descendants().merge(r).unmerge(e).unmerge(e.descendants()),i=n.connectedEdges(),a=s(t),o=0;o<n.size();o++)void 0!==t.inDragLayer&&(n[o]._private.rscratch.inDragLayer=t.inDragLayer),t.addToList&&!a[n[o].id()]&&(t.addToList.push(n[o]),a[n[o].id()]=!0,n[o]._private.grabbed=!0);for(var l=0;void 0!==t.inDragLayer&&l<i.length;l++)i[l]._private.rscratch.inDragLayer=t.inDragLayer}}}};"undefined"!=typeof MutationObserver?(e.removeObserver=new MutationObserver(function(t){for(var r=0;r<t.length;r++){var n=t[r],i=n.removedNodes;if(i)for(var a=0;a<i.length;a++){var o=i[a];if(o===e.container){e.destroy();break}}}}),e.container.parentNode&&e.removeObserver.observe(e.container.parentNode,{childList:!0})):e.registerBinding(e.container,"DOMNodeRemoved",function(t){e.destroy()}),e.registerBinding(window,"resize",i.debounce(function(t){e.invalidateContainerClientCoordsCache(),e.matchCanvasSize(e.container),e.redrawHint("eles",!0),e.redraw()},100));for(var h=function(t){e.registerBinding(t,"scroll",function(t){e.invalidateContainerClientCoordsCache()})},p=e.cy.container();h(p),p.parentNode;)p=p.parentNode;e.registerBinding(e.container,"contextmenu",function(e){e.preventDefault()});var v=function(){return 0!==e.selection[4]};e.registerBinding(e.container,"mousedown",function(r){r.preventDefault(),e.hoverData.capture=!0,e.hoverData.which=r.which;var n=e.cy,i=e.projectIntoViewport(r.clientX,r.clientY),o=e.selection,s=e.findNearestElement(i[0],i[1],!0,!1),l=e.dragData.possibleDragElements;e.hoverData.mdownPos=i;var c=function(){e.hoverData.tapholdCancelled=!1,clearTimeout(e.hoverData.tapholdTimeout),e.hoverData.tapholdTimeout=setTimeout(function(){if(!e.hoverData.tapholdCancelled){var t=e.hoverData.down;t?t.trigger(a(r,{type:"taphold",cyPosition:{x:i[0],y:i[1]}})):n.trigger(a(r,{type:"taphold",cyPosition:{x:i[0],y:i[1]}}))}},e.tapholdDuration)};if(3==r.which){e.hoverData.cxtStarted=!0;var d=a(r,{type:"cxttapstart",cyPosition:{x:i[0],y:i[1]}});s?(s.activate(),s.trigger(d),e.hoverData.down=s):n.trigger(d),e.hoverData.downTime=(new Date).getTime(),e.hoverData.cxtDragged=!1}else if(1==r.which){if(s&&s.activate(),null!=s&&e.nodeIsDraggable(s)){var h=a(r,{type:"grab",cyPosition:{x:i[0],y:i[1]}});if(s.isNode()&&!s.selected())l=e.dragData.possibleDragElements=[],u(s,{addToList:l}),s.trigger(h);else if(s.isNode()&&s.selected()){l=e.dragData.possibleDragElements=[];for(var p=n.$(function(){return this.isNode()&&this.selected()}),v=0;v<p.length;v++)e.nodeIsDraggable(p[v])&&u(p[v],{addToList:l});s.trigger(h)}e.redrawHint("eles",!0),e.redrawHint("drag",!0)}e.hoverData.down=s,e.hoverData.downTime=(new Date).getTime(),t(s,["mousedown","tapstart","vmousedown"],r,{cyPosition:{x:i[0],y:i[1]}}),null==s?(o[4]=1,e.data.bgActivePosistion={x:i[0],y:i[1]},e.redrawHint("select",!0),e.redraw()):s.isEdge()&&(o[4]=1),c()}o[0]=o[2]=i[0],o[1]=o[3]=i[1]},!1),e.registerBinding(window,"mousemove",i.throttle(function(i){var s=!1,l=e.hoverData.capture;if(!l){var c=e.findContainerClientCoords();if(!(i.clientX>c[0]&&i.clientX<c[0]+e.canvasWidth&&i.clientY>c[1]&&i.clientY<c[1]+e.canvasHeight))return;for(var d=e.container,h=i.target,p=h.parentNode,v=!1;p;){if(p===d){v=!0;break}p=p.parentNode}if(!v)return}var f=e.cy,g=f.zoom(),y=e.projectIntoViewport(i.clientX,i.clientY),m=e.selection,b=null;e.hoverData.draggingEles||(b=e.findNearestElement(y[0],y[1],!0,!1));var x=e.hoverData.last,w=e.hoverData.down,_=[y[0]-m[2],y[1]-m[3]],E=e.dragData.possibleDragElements,D=m[2]-m[0],k=D*D,T=m[3]-m[1],S=T*T,P=k+S,C=P*g*g,N=r(i);e.hoverData.tapholdCancelled=!0;var M=function(){var t=e.hoverData.dragDelta=e.hoverData.dragDelta||[];0===t.length?(t.push(_[0]),t.push(_[1])):(t[0]+=_[0],t[1]+=_[1])};if(s=!0,t(b,["mousemove","vmousemove","tapdrag"],i,{cyPosition:{x:y[0],y:y[1]}}),3===e.hoverData.which){var B=a(i,{type:"cxtdrag",cyPosition:{x:y[0],y:y[1]}});w?w.trigger(B):f.trigger(B),e.hoverData.cxtDragged=!0,e.hoverData.cxtOver&&b===e.hoverData.cxtOver||(e.hoverData.cxtOver&&e.hoverData.cxtOver.trigger(a(i,{type:"cxtdragout",cyPosition:{x:y[0],y:y[1]}})),e.hoverData.cxtOver=b,b&&b.trigger(a(i,{type:"cxtdragover",cyPosition:{x:y[0],y:y[1]}})))}else if(e.hoverData.dragging){if(s=!0,f.panningEnabled()&&f.userPanningEnabled()){var z;if(e.hoverData.justStartedPan){var O=e.hoverData.mdownPos;z={x:(y[0]-O[0])*g,y:(y[1]-O[1])*g},e.hoverData.justStartedPan=!1}else z={x:_[0]*g,y:_[1]*g};f.panBy(z),e.hoverData.dragged=!0}y=e.projectIntoViewport(i.clientX,i.clientY)}else if(1!=m[4]||null!=w&&!w.isEdge()){if(w&&w.isEdge()&&w.active()&&w.unactivate(),b!=x&&(x&&t(x,["mouseout","tapdragout"],i,{cyPosition:{x:y[0],y:y[1]}}),b&&t(b,["mouseover","tapdragover"],i,{cyPosition:{x:y[0],y:y[1]}}),e.hoverData.last=b),w&&w.isNode()&&e.nodeIsDraggable(w))if(C>=e.desktopTapThreshold2){var I=!e.dragData.didDrag;I&&e.redrawHint("eles",!0),e.dragData.didDrag=!0;for(var L=[],A=0;A<E.length;A++){var R=E[A];if(e.hoverData.draggingEles||u(R,{inDragLayer:!0}),R.isNode()&&e.nodeIsDraggable(R)&&R.grabbed()){var V=R._private.position;if(L.push(R),n.number(_[0])&&n.number(_[1])){var F=!R.isParent();if(F&&(V.x+=_[0],V.y+=_[1]),I){var j=e.hoverData.dragDelta;F&&n.number(j[0])&&n.number(j[1])&&(V.x+=j[0],V.y+=j[1])}}}}e.hoverData.draggingEles=!0;var q=o(f,L);q.updateCompoundBounds(),q.trigger("position drag"),e.redrawHint("drag",!0),e.redraw()}else M();s=!0}else e.hoverData.dragging||!f.boxSelectionEnabled()||!N&&f.panningEnabled()&&f.userPanningEnabled()?!e.hoverData.selecting&&f.panningEnabled()&&f.userPanningEnabled()&&(e.hoverData.dragging=!0,e.hoverData.justStartedPan=!0,m[4]=0,e.data.bgActivePosistion={x:y[0],y:y[1]},e.redrawHint("select",!0),e.redraw()):(e.data.bgActivePosistion=void 0,e.hoverData.selecting=!0,e.redrawHint("select",!0),e.redraw()),w&&w.isEdge()&&w.active()&&w.unactivate();return m[2]=y[0],m[3]=y[1],s?(i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault(),!1):void 0},1e3/30,{trailing:!0}),!1),e.registerBinding(window,"mouseup",function(n){var i=e.hoverData.capture;if(i){e.hoverData.capture=!1;var s=e.cy,l=e.projectIntoViewport(n.clientX,n.clientY),u=e.selection,d=e.findNearestElement(l[0],l[1],!0,!1),h=e.dragData.possibleDragElements,p=e.hoverData.down,v=r(n);if(e.data.bgActivePosistion&&(e.redrawHint("select",!0),e.redraw()),e.hoverData.tapholdCancelled=!0,e.data.bgActivePosistion=void 0,p&&p.unactivate(),3===e.hoverData.which){var f=a(n,{type:"cxttapend",cyPosition:{x:l[0],y:l[1]}});if(p?p.trigger(f):s.trigger(f),!e.hoverData.cxtDragged){var g=a(n,{type:"cxttap",cyPosition:{x:l[0],y:l[1]}});p?p.trigger(g):s.trigger(g)}e.hoverData.cxtDragged=!1,e.hoverData.which=null}else if(1===e.hoverData.which){if(null!=p||e.dragData.didDrag||e.hoverData.selecting||e.hoverData.dragged||r(n)||(s.$(function(){return this.selected()}).unselect(),h.length>0&&e.redrawHint("eles",!0),e.dragData.possibleDragElements=h=[]),t(d,["mouseup","tapend","vmouseup"],n,{cyPosition:{x:l[0],y:l[1]}}),e.dragData.didDrag||e.hoverData.dragged||t(d,["click","tap","vclick"],n,{cyPosition:{x:l[0],y:l[1]}}),d!=p||e.dragData.didDrag||e.hoverData.selecting||null!=d&&d._private.selectable&&(e.hoverData.dragging||("additive"===s.selectionType()||v?d.selected()?d.unselect():d.select():v||(s.$(":selected").unmerge(d).unselect(),d.select())),e.redrawHint("eles",!0)),e.hoverData.selecting){var y=[],m=e.getAllInBox(u[0],u[1],u[2],u[3]);e.redrawHint("select",!0),m.length>0&&e.redrawHint("eles",!0);for(var b=0;b<m.length;b++)m[b]._private.selectable&&y.push(m[b]);var x=o(s,y);"additive"===s.selectionType()?x.select():(v||s.$(":selected").unmerge(x).unselect(),x.select()),e.redraw()}e.hoverData.dragging&&(e.hoverData.dragging=!1,e.redrawHint("select",!0),e.redrawHint("eles",!0),e.redraw()),u[4]||(e.redrawHint("drag",!0),e.redrawHint("eles",!0),c(h),p&&p.trigger("free"))}u[4]=0,e.hoverData.down=null,e.hoverData.cxtStarted=!1,e.hoverData.draggingEles=!1,e.hoverData.selecting=!1,e.dragData.didDrag=!1,e.hoverData.dragged=!1,e.hoverData.dragDelta=[]}},!1);var f=function(t){if(!e.scrollingPage){var r=e.cy,n=e.projectIntoViewport(t.clientX,t.clientY),i=[n[0]*r.zoom()+r.pan().x,n[1]*r.zoom()+r.pan().y];if(e.hoverData.draggingEles||e.hoverData.dragging||e.hoverData.cxtStarted||v())return void t.preventDefault();if(r.panningEnabled()&&r.userPanningEnabled()&&r.zoomingEnabled()&&r.userZoomingEnabled()){t.preventDefault(),e.data.wheelZooming=!0,clearTimeout(e.data.wheelTimeout),e.data.wheelTimeout=setTimeout(function(){e.data.wheelZooming=!1,e.redrawHint("eles",!0),e.redraw()},150);var a=t.deltaY/-250||t.wheelDeltaY/1e3||t.wheelDelta/1e3;a*=e.wheelSensitivity;var o=1===t.deltaMode;o&&(a*=33),r.zoom({level:r.zoom()*Math.pow(10,a),renderedPosition:{x:i[0],y:i[1]}})}}};e.registerBinding(e.container,"wheel",f,!0),e.registerBinding(window,"scroll",function(t){e.scrollingPage=!0,clearTimeout(e.scrollingPageTimeout),e.scrollingPageTimeout=setTimeout(function(){e.scrollingPage=!1},250)},!0),e.registerBinding(e.container,"mouseout",function(t){var r=e.projectIntoViewport(t.clientX,t.clientY);e.cy.trigger(a(t,{type:"mouseout",cyPosition:{x:r[0],y:r[1]}}))},!1),e.registerBinding(e.container,"mouseover",function(t){var r=e.projectIntoViewport(t.clientX,t.clientY);e.cy.trigger(a(t,{type:"mouseover",cyPosition:{x:r[0],y:r[1]}}))},!1);var g,y,m,b,x,w,_,E,D,k,T,S,P,C,N=function(e,t,r,n){return Math.sqrt((r-e)*(r-e)+(n-t)*(n-t))},M=function(e,t,r,n){return(r-e)*(r-e)+(n-t)*(n-t)};e.registerBinding(e.container,"touchstart",C=function(r){r.preventDefault(),e.touchData.capture=!0,e.data.bgActivePosistion=void 0;var n=e.cy,i=e.getCachedNodes(),o=e.getCachedEdges(),s=e.touchData.now,l=e.touchData.earlier;if(r.touches[0]){var c=e.projectIntoViewport(r.touches[0].clientX,r.touches[0].clientY);s[0]=c[0],s[1]=c[1]}if(r.touches[1]){var c=e.projectIntoViewport(r.touches[1].clientX,r.touches[1].clientY);s[2]=c[0],s[3]=c[1]}if(r.touches[2]){var c=e.projectIntoViewport(r.touches[2].clientX,r.touches[2].clientY);s[4]=c[0],s[5]=c[1]}if(r.touches[1]){var d=function(e){for(var t=0;t<e.length;t++)e[t]._private.grabbed=!1,e[t]._private.rscratch.inDragLayer=!1,e[t].active()&&e[t].unactivate()};d(i),d(o);var h=e.findContainerClientCoords();D=h[0],k=h[1],T=h[2],S=h[3],g=r.touches[0].clientX-D,y=r.touches[0].clientY-k,m=r.touches[1].clientX-D,b=r.touches[1].clientY-k,P=g>=0&&T>=g&&m>=0&&T>=m&&y>=0&&S>=y&&b>=0&&S>=b;var p=n.pan(),v=n.zoom();x=N(g,y,m,b),w=M(g,y,m,b),_=[(g+m)/2,(y+b)/2],E=[(_[0]-p.x)/v,(_[1]-p.y)/v];var f=200,C=f*f;if(C>w&&!r.touches[2]){var B=e.findNearestElement(s[0],s[1],!0,!0),z=e.findNearestElement(s[2],s[3],!0,!0);return B&&B.isNode()?(B.activate().trigger(a(r,{type:"cxttapstart",cyPosition:{x:s[0],y:s[1]}})),e.touchData.start=B):z&&z.isNode()?(z.activate().trigger(a(r,{type:"cxttapstart",cyPosition:{x:s[0],y:s[1]}})),e.touchData.start=z):(n.trigger(a(r,{type:"cxttapstart",cyPosition:{x:s[0],y:s[1]}})),e.touchData.start=null),e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxt=!0,e.touchData.cxtDragged=!1,e.data.bgActivePosistion=void 0,void e.redraw()}}if(r.touches[2]);else if(r.touches[1]);else if(r.touches[0]){var O=e.findNearestElement(s[0],s[1],!0,!0);if(null!=O&&(O.activate(),e.touchData.start=O,O.isNode()&&e.nodeIsDraggable(O))){var I=e.dragData.touchDragEles=[];if(e.redrawHint("eles",!0),e.redrawHint("drag",!0),O.selected())for(var L=n.$(function(){return this.isNode()&&this.selected()}),A=0;A<L.length;A++){var R=L[A];e.nodeIsDraggable(R)&&u(R,{addToList:I})}else u(O,{addToList:I});O.trigger(a(r,{type:"grab",cyPosition:{x:s[0],y:s[1]}}))}t(O,["touchstart","tapstart","vmousedown"],r,{cyPosition:{x:s[0],y:s[1]}}),null==O&&(e.data.bgActivePosistion={x:c[0],y:c[1]},e.redrawHint("select",!0),e.redraw());for(var V=0;V<s.length;V++)l[V]=s[V],e.touchData.startPosition[V]=s[V];e.touchData.singleTouchMoved=!1,e.touchData.singleTouchStartTime=+new Date,clearTimeout(e.touchData.tapholdTimeout),e.touchData.tapholdTimeout=setTimeout(function(){e.touchData.singleTouchMoved!==!1||e.pinching||(t(e.touchData.start,["taphold"],r,{cyPosition:{x:s[0],y:s[1]}}),e.touchData.start||n.$(":selected").unselect())},e.tapholdDuration)}},!1);var B;e.registerBinding(window,"touchmove",B=i.throttle(function(r){var i=e.selection,s=e.touchData.capture;s&&r.preventDefault();var l=e.cy,c=e.touchData.now,d=e.touchData.earlier,h=l.zoom();if(r.touches[0]){var p=e.projectIntoViewport(r.touches[0].clientX,r.touches[0].clientY);c[0]=p[0],c[1]=p[1]}if(r.touches[1]){var p=e.projectIntoViewport(r.touches[1].clientX,r.touches[1].clientY);c[2]=p[0],c[3]=p[1]}if(r.touches[2]){var p=e.projectIntoViewport(r.touches[2].clientX,r.touches[2].clientY);c[4]=p[0],c[5]=p[1]}for(var v=[],f=0;f<c.length;f++)v[f]=c[f]-d[f];var _=e.touchData.startPosition,T=c[0]-_[0],S=T*T,C=c[1]-_[1],B=C*C,z=S+B,O=z*h*h;if(s&&e.touchData.cxt){var I=r.touches[0].clientX-D,L=r.touches[0].clientY-k,A=r.touches[1].clientX-D,R=r.touches[1].clientY-k,V=M(I,L,A,R),F=V/w,j=150,q=j*j,X=1.5,Y=X*X;if(F>=Y||V>=q){e.touchData.cxt=!1,e.touchData.start&&(e.touchData.start.unactivate(),e.touchData.start=null),e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var $=a(r,{type:"cxttapend",cyPosition:{x:c[0],y:c[1]}});e.touchData.start?e.touchData.start.trigger($):l.trigger($)}}if(s&&e.touchData.cxt){var $=a(r,{type:"cxtdrag",cyPosition:{x:c[0],y:c[1]}});e.data.bgActivePosistion=void 0,e.redrawHint("select",!0),e.touchData.start?e.touchData.start.trigger($):l.trigger($),e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxtDragged=!0;var H=e.findNearestElement(c[0],c[1],!0,!0);e.touchData.cxtOver&&H===e.touchData.cxtOver||(e.touchData.cxtOver&&e.touchData.cxtOver.trigger(a(r,{type:"cxtdragout",cyPosition:{x:c[0],y:c[1]}})),e.touchData.cxtOver=H,H&&H.trigger(a(r,{type:"cxtdragover",cyPosition:{x:c[0],y:c[1]}})))}else if(s&&r.touches[2]&&l.boxSelectionEnabled())e.data.bgActivePosistion=void 0,this.lastThreeTouch=+new Date,e.touchData.selecting=!0,e.redrawHint("select",!0),i&&0!==i.length&&void 0!==i[0]?(i[2]=(c[0]+c[2]+c[4])/3,i[3]=(c[1]+c[3]+c[5])/3):(i[0]=(c[0]+c[2]+c[4])/3,i[1]=(c[1]+c[3]+c[5])/3,i[2]=(c[0]+c[2]+c[4])/3+1,i[3]=(c[1]+c[3]+c[5])/3+1),i[4]=1,e.touchData.selecting=!0,e.redraw();else if(s&&r.touches[1]&&l.zoomingEnabled()&&l.panningEnabled()&&l.userZoomingEnabled()&&l.userPanningEnabled()){e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var W=e.dragData.touchDragEles;if(W){e.redrawHint("drag",!0);for(var Z=0;Z<W.length;Z++)W[Z]._private.grabbed=!1,W[Z]._private.rscratch.inDragLayer=!1}var I=r.touches[0].clientX-D,L=r.touches[0].clientY-k,A=r.touches[1].clientX-D,R=r.touches[1].clientY-k,U=N(I,L,A,R),G=U/x;if(1!=G&&P){var K=I-g,J=L-y,Q=A-m,ee=R-b,te=(K+Q)/2,re=(J+ee)/2,ne=l.zoom(),ie=ne*G,ae=l.pan(),oe=E[0]*ne+ae.x,se=E[1]*ne+ae.y,le={x:-ie/ne*(oe-ae.x-te)+oe,y:-ie/ne*(se-ae.y-re)+se};if(e.touchData.start){var W=e.dragData.touchDragEles;if(W)for(var Z=0;Z<W.length;Z++){var ue=W[Z]._private;ue.grabbed=!1,ue.rscratch.inDragLayer=!1}var ce=e.touchData.start._private;ce.active=!1,ce.grabbed=!1,ce.rscratch.inDragLayer=!1,e.redrawHint("drag",!0),e.touchData.start.trigger("free").trigger("unactivate")}l.viewport({zoom:ie,pan:le,cancelOnFailedZoom:!0}),x=U,g=I,y=L,m=A,b=R,e.pinching=!0}if(r.touches[0]){var p=e.projectIntoViewport(r.touches[0].clientX,r.touches[0].clientY);c[0]=p[0],c[1]=p[1]}if(r.touches[1]){var p=e.projectIntoViewport(r.touches[1].clientX,r.touches[1].clientY);c[2]=p[0],c[3]=p[1]}if(r.touches[2]){var p=e.projectIntoViewport(r.touches[2].clientX,r.touches[2].clientY);c[4]=p[0],c[5]=p[1]}}else if(r.touches[0]){var de=e.touchData.start,he=e.touchData.last,H=H||e.findNearestElement(c[0],c[1],!0,!0);if(null!=de&&"nodes"==de._private.group&&e.nodeIsDraggable(de))if(O>=e.touchTapThreshold2){for(var W=e.dragData.touchDragEles,pe=!e.dragData.didDrag,ve=0;ve<W.length;ve++){var fe=W[ve];if(pe&&u(fe,{inDragLayer:!0}),e.nodeIsDraggable(fe)&&fe.isNode()&&fe.grabbed()){e.dragData.didDrag=!0;var ge=fe._private.position,ye=!fe.isParent();if(ye&&n.number(v[0])&&n.number(v[1])&&(ge.x+=v[0],ge.y+=v[1]),pe){e.redrawHint("eles",!0);var me=e.touchData.dragDelta;ye&&n.number(me[0])&&n.number(me[1])&&(ge.x+=me[0],ge.y+=me[1])}}}var be=o(l,W);be.updateCompoundBounds(),be.trigger("position drag"),e.hoverData.draggingEles=!0,e.redrawHint("drag",!0),e.touchData.startPosition[0]==d[0]&&e.touchData.startPosition[1]==d[1]&&e.redrawHint("eles",!0),e.redraw()}else{var me=e.touchData.dragDelta=e.touchData.dragDelta||[];0===me.length?(me.push(v[0]),me.push(v[1])):(me[0]+=v[0],me[1]+=v[1])}t(de||H,["touchmove","tapdrag","vmousemove"],r,{cyPosition:{x:c[0],y:c[1]}}),H!=he&&(he&&he.trigger(a(r,{type:"tapdragout",cyPosition:{x:c[0],y:c[1]}})),H&&H.trigger(a(r,{type:"tapdragover",cyPosition:{x:c[0],y:c[1]}}))),e.touchData.last=H;for(var Z=0;Z<c.length;Z++)c[Z]&&e.touchData.startPosition[Z]&&O>e.touchTapThreshold2&&(e.touchData.singleTouchMoved=!0);if(s&&(null==de||de.isEdge())&&l.panningEnabled()&&l.userPanningEnabled()&&O>e.touchTapThreshold2){e.swipePanning?l.panBy({x:v[0]*h,y:v[1]*h}):O>=e.touchTapThreshold2&&(e.swipePanning=!0,l.panBy({x:T*h,y:C*h})),de&&(de.unactivate(),e.data.bgActivePosistion||(e.data.bgActivePosistion={x:c[0],y:c[1]}),e.redrawHint("select",!0),e.touchData.start=null);var p=e.projectIntoViewport(r.touches[0].clientX,r.touches[0].clientY);c[0]=p[0],c[1]=p[1]}}for(var f=0;f<c.length;f++)d[f]=c[f]},1e3/30,{trailing:!0}),!1);var z;e.registerBinding(window,"touchcancel",z=function(t){var r=e.touchData.start;e.touchData.capture=!1,r&&r.unactivate()});var O;if(e.registerBinding(window,"touchend",O=function(r){var n=e.touchData.start,i=e.touchData.capture;if(i){e.touchData.capture=!1,r.preventDefault();var s=e.selection;e.swipePanning=!1,e.hoverData.draggingEles=!1;var l=e.cy,u=l.zoom(),d=e.touchData.now,h=e.touchData.earlier;if(r.touches[0]){var p=e.projectIntoViewport(r.touches[0].clientX,r.touches[0].clientY);d[0]=p[0],d[1]=p[1]}if(r.touches[1]){var p=e.projectIntoViewport(r.touches[1].clientX,r.touches[1].clientY);d[2]=p[0],d[3]=p[1]}if(r.touches[2]){var p=e.projectIntoViewport(r.touches[2].clientX,r.touches[2].clientY);
d[4]=p[0],d[5]=p[1]}n&&n.unactivate();var v;if(e.touchData.cxt){if(v=a(r,{type:"cxttapend",cyPosition:{x:d[0],y:d[1]}}),n?n.trigger(v):l.trigger(v),!e.touchData.cxtDragged){var f=a(r,{type:"cxttap",cyPosition:{x:d[0],y:d[1]}});n?n.trigger(f):l.trigger(f)}return e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxt=!1,e.touchData.start=null,void e.redraw()}if(!r.touches[2]&&l.boxSelectionEnabled()&&e.touchData.selecting){e.touchData.selecting=!1;var g=[],y=e.getAllInBox(s[0],s[1],s[2],s[3]);s[0]=void 0,s[1]=void 0,s[2]=void 0,s[3]=void 0,s[4]=0,e.redrawHint("select",!0);for(var m=0;m<y.length;m++)y[m]._private.selectable&&g.push(y[m]);var b=o(l,g);b.select(),b.length>0?e.redrawHint("eles",!0):e.redraw()}var x=!1;if(null!=n&&(n._private.active=!1,x=!0,n.unactivate()),r.touches[2])e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);else if(r.touches[1]);else if(r.touches[0]);else if(!r.touches[0]){e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var w=e.dragData.touchDragEles;if(null!=n){var _=n._private.grabbed;c(w),e.redrawHint("drag",!0),e.redrawHint("eles",!0),_&&n.trigger("free"),t(n,["touchend","tapend","vmouseup"],r,{cyPosition:{x:d[0],y:d[1]}}),n.unactivate(),e.touchData.start=null}else{var E=e.findNearestElement(d[0],d[1],!0,!0);t(E,["touchend","tapend","vmouseup"],r,{cyPosition:{x:d[0],y:d[1]}})}var D=e.touchData.startPosition[0]-d[0],k=D*D,T=e.touchData.startPosition[1]-d[1],S=T*T,P=k+S,C=P*u*u;null!=n&&!e.dragData.didDrag&&n._private.selectable&&C<e.touchTapThreshold2&&!e.pinching&&("single"===l.selectionType()?(l.$(":selected").unmerge(n).unselect(),n.select()):n.selected()?n.unselect():n.select(),x=!0,e.redrawHint("eles",!0)),e.touchData.singleTouchMoved||t(n,["tap","vclick"],r,{cyPosition:{x:d[0],y:d[1]}}),e.touchData.singleTouchMoved=!0}for(var N=0;N<d.length;N++)h[N]=d[N];e.dragData.didDrag=!1,0===r.touches.length&&(e.touchData.dragDelta=[]),x&&n&&n.updateStyle(!1),r.touches.length<2&&(e.pinching=!1,e.redrawHint("eles",!0),e.redraw())}},!1),"undefined"==typeof TouchEvent){var I=[],L=function(e){return{clientX:e.clientX,clientY:e.clientY,force:1,identifier:e.pointerId,pageX:e.pageX,pageY:e.pageY,radiusX:e.width/2,radiusY:e.height/2,screenX:e.screenX,screenY:e.screenY,target:e.target}},A=function(e){return{event:e,touch:L(e)}},R=function(e){I.push(A(e))},V=function(e){for(var t=0;t<I.length;t++){var r=I[t];if(r.event.pointerId===e.pointerId)return void I.splice(t,1)}},F=function(e){var t=I.filter(function(t){return t.event.pointerId===e.pointerId})[0];t.event=e,t.touch=L(e)},j=function(e){e.touches=I.map(function(e){return e.touch})};e.registerBinding(e.container,"pointerdown",function(e){"mouse"!==e.pointerType&&(e.preventDefault(),R(e),j(e),C(e))}),e.registerBinding(e.container,"pointerup",function(e){"mouse"!==e.pointerType&&(V(e),j(e),O(e))}),e.registerBinding(e.container,"pointercancel",function(e){"mouse"!==e.pointerType&&(V(e),j(e),z(e))}),e.registerBinding(e.container,"pointermove",function(e){"mouse"!==e.pointerType&&(e.preventDefault(),F(e),j(e),B(e))})}},t.exports=s},{"../../../collection":23,"../../../event":42,"../../../is":77,"../../../util":94}],60:[function(e,t,r){"use strict";var n=e("../../../math"),i={};i.registerNodeShapes=function(){function e(e,i){return t[e]={name:e,points:i,draw:function(e,t,n,i,a){r.nodeShapeImpl("polygon")(e,t,n,i,a,this.points)},intersectLine:function(e,t,r,i,a,o,s){return n.polygonIntersectLine(a,o,this.points,e,t,r/2,i/2,s)},checkPoint:function(r,i,a,o,s,l,u){return n.pointInsidePolygon(r,i,t[e].points,l,u,o,s,[0,-1],a)}}}var t=this.nodeShapes={},r=this;t.ellipse={name:"ellipse",draw:function(e,t,n,i,a){r.nodeShapeImpl(this.name)(e,t,n,i,a)},intersectLine:function(e,t,r,i,a,o,s){return n.intersectLineEllipse(a,o,e,t,r/2+s,i/2+s)},checkPoint:function(e,t,r,n,i,a,o){return e-=a,t-=o,e/=n/2+r,t/=i/2+r,1>=e*e+t*t}},e("triangle",n.generateUnitNgonPointsFitToSquare(3,0)),e("square",n.generateUnitNgonPointsFitToSquare(4,0)),t.rectangle=t.square,t.roundrectangle={name:"roundrectangle",points:n.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,i,a){r.nodeShapeImpl(this.name)(e,t,n,i,a)},intersectLine:function(e,t,r,i,a,o,s){return n.roundRectangleIntersectLine(a,o,e,t,r,i,s)},checkPoint:function(e,t,r,i,a,o,s){var l=n.getRoundRectangleRadius(i,a);if(n.pointInsidePolygon(e,t,this.points,o,s,i,a-2*l,[0,-1],r))return!0;if(n.pointInsidePolygon(e,t,this.points,o,s,i-2*l,a,[0,-1],r))return!0;var u=function(e,t,r,n,i,a,o){return e-=r,t-=n,e/=i/2+o,t/=a/2+o,1>=e*e+t*t};return u(e,t,o-i/2+l,s-a/2+l,2*l,2*l,r)?!0:u(e,t,o+i/2-l,s-a/2+l,2*l,2*l,r)?!0:u(e,t,o+i/2-l,s+a/2-l,2*l,2*l,r)?!0:u(e,t,o-i/2+l,s+a/2-l,2*l,2*l,r)?!0:!1}},e("diamond",[0,1,1,0,0,-1,-1,0]),e("pentagon",n.generateUnitNgonPointsFitToSquare(5,0)),e("hexagon",n.generateUnitNgonPointsFitToSquare(6,0)),e("heptagon",n.generateUnitNgonPointsFitToSquare(7,0)),e("octagon",n.generateUnitNgonPointsFitToSquare(8,0));var i=new Array(20),a=n.generateUnitNgonPoints(5,0),o=n.generateUnitNgonPoints(5,Math.PI/5),s=.5*(3-Math.sqrt(5));s*=1.57;for(var l=0;l<o.length/2;l++)o[2*l]*=s,o[2*l+1]*=s;for(var l=0;5>l;l++)i[4*l]=a[2*l],i[4*l+1]=a[2*l+1],i[4*l+2]=o[2*l],i[4*l+3]=o[2*l+1];i=n.fitPolygonToSquare(i),e("star",i),e("vee",[-1,-1,0,-.333,1,-1,0,1]),e("rhomboid",[-1,-1,.333,-1,1,1,-.333,1]),t.makePolygon=function(r){var n,i=r.join("$"),a="polygon-"+i;return(n=t[a])?n:e(a,r)}},t.exports=i},{"../../../math":79}],61:[function(e,t,r){"use strict";var n=e("../../../util"),i={};i.timeToRender=function(){return this.redrawTotalTime/this.redrawCount};var a=1e3/60,o=1e3;i.redraw=function(e){e=e||n.staticEmptyObject();var t=this,r=e.forcedContext;void 0===t.averageRedrawTime&&(t.averageRedrawTime=0),void 0===t.lastRedrawTime&&(t.lastRedrawTime=0);var i=t.lastRedrawTime;i=a>i?a:i,i=o>i?i:o,void 0===t.lastDrawTime&&(t.lastDrawTime=0);var s=Date.now(),l=s-t.lastDrawTime,u=l>=i;return r||u&&!t.currentlyDrawing?(t.requestedFrame=!0,t.currentlyDrawing=!0,void(t.renderOptions=e)):void(t.skipFrame=!0)},i.startRenderLoop=function(){var e=this,t=function(){if(!e.destroyed){if(e.requestedFrame&&!e.skipFrame){var r=n.performanceNow();e.render(e.renderOptions);var i=e.lastRedrawTime=n.performanceNow();void 0===e.averageRedrawTime&&(e.averageRedrawTime=i-r),void 0===e.redrawCount&&(e.redrawCount=0),e.redrawCount++,void 0===e.redrawTotalTime&&(e.redrawTotalTime=0);var a=i-r;e.redrawTotalTime+=a,e.lastRedrawTime=a,e.averageRedrawTime=e.averageRedrawTime/2+a/2,e.requestedFrame=!1}e.skipFrame=!1,n.requestAnimationFrame(t)}};n.requestAnimationFrame(t)},t.exports=i},{"../../../util":94}],62:[function(e,t,r){"use strict";var n,i={};i.arrowShapeImpl=function(e){return(n||(n={polygon:function(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.lineTo(n.x,n.y)}},"triangle-backcurve":function(e,t,r){for(var n,i=0;i<t.length;i++){var a=t[i];0===i&&(n=a),e.lineTo(a.x,a.y)}e.quadraticCurveTo(r.x,r.y,n.x,n.y)},"triangle-tee":function(e,t,r){for(var n=t,i=0;i<n.length;i++){var a=n[i];e.lineTo(a.x,a.y)}var o=r,s=r[0];e.moveTo(s.x,s.y);for(var i=0;i<o.length;i++){var a=o[i];e.lineTo(a.x,a.y)}},circle:function(e,t,r,n){e.arc(t,r,n,0,2*Math.PI,!1)}}))[e]},t.exports=i},{}],63:[function(e,t,r){"use strict";var n={};n.drawEdge=function(e,t,r){var n=t._private.rscratch,i=this.usePaths();if(!(n.badBezier||n.badLine||isNaN(n.allpts[0]))){var a=t._private.style;if(!(a.width.pfValue<=0)){var o=a["overlay-padding"].pfValue,s=a["overlay-opacity"].value,l=a["overlay-color"].value;if(r){if(0===s)return;this.strokeStyle(e,l[0],l[1],l[2],s),e.lineCap="round","self"!=n.edgeType||i||(e.lineCap="butt")}else{var u=a["line-color"].value;this.strokeStyle(e,u[0],u[1],u[2],a.opacity.value),e.lineCap="butt"}var c=a.width.pfValue+(r?2*o:0),d=r?"solid":a["line-style"].value;e.lineWidth=c;var h=a["shadow-blur"].pfValue,p=a["shadow-opacity"].value,v=a["shadow-color"].value,f=a["shadow-offset-x"].pfValue,g=a["shadow-offset-y"].pfValue;this.shadowStyle(e,v,r?0:p,h,f,g),this.drawEdgePath(t,e,n.allpts,d,c),this.drawArrowheads(e,t,r),this.shadowStyle(e,"transparent",0)}}},n.drawEdgePath=function(e,t,r,n,i){var a,o=e._private.rscratch,s=t,l=!1,u=this.usePaths();if(u){var c=r.join("$"),d=o.pathCacheKey&&o.pathCacheKey===c;d?(a=t=o.pathCache,l=!0):(a=t=new Path2D,o.pathCacheKey=c,o.pathCache=a)}if(s.setLineDash)switch(n){case"dotted":s.setLineDash([1,1]);break;case"dashed":s.setLineDash([6,3]);break;case"solid":s.setLineDash([])}if(!l)switch(t.beginPath&&t.beginPath(),t.moveTo(r[0],r[1]),o.edgeType){case"bezier":case"self":case"compound":case"multibezier":if(!o.badBezier)for(var h=2;h+3<r.length;h+=4)t.quadraticCurveTo(r[h],r[h+1],r[h+2],r[h+3]);break;case"straight":case"segments":case"haystack":if(!o.badLine)for(var h=2;h+1<r.length;h+=2)t.lineTo(r[h],r[h+1])}t=s,u?t.stroke(a):t.stroke(),t.setLineDash&&t.setLineDash([])},n.drawArrowheads=function(e,t,r){if(!r){var n=t._private.rscratch,i="haystack"===n.edgeType;i||this.drawArrowhead(e,t,"source",n.arrowStartX,n.arrowStartY,n.srcArrowAngle),this.drawArrowhead(e,t,"mid-target",n.midX,n.midY,n.midtgtArrowAngle),this.drawArrowhead(e,t,"mid-source",n.midX,n.midY,n.midsrcArrowAngle),i||this.drawArrowhead(e,t,"target",n.arrowEndX,n.arrowEndY,n.tgtArrowAngle)}},n.drawArrowhead=function(e,t,r,n,i,a){if(!(isNaN(n)||null==n||isNaN(i)||null==i||isNaN(a)||null==a)){var o=this,s=t._private.style,l=s[r+"-arrow-shape"].value;if("none"!==l){var u=e.globalCompositeOperation,c="hollow"===s[r+"-arrow-fill"].value?"both":"filled",d=s[r+"-arrow-fill"].value;"half-triangle-overshot"===l&&(d="hollow",c="hollow"),(1!==s.opacity.value||"hollow"===d)&&(e.globalCompositeOperation="destination-out",o.fillStyle(e,255,255,255,1),o.strokeStyle(e,255,255,255,1),o.drawArrowShape(t,r,e,c,s.width.pfValue,s[r+"-arrow-shape"].value,n,i,a),e.globalCompositeOperation=u);var h=s[r+"-arrow-color"].value;o.fillStyle(e,h[0],h[1],h[2],s.opacity.value),o.strokeStyle(e,h[0],h[1],h[2],s.opacity.value),o.drawArrowShape(t,r,e,d,s.width.pfValue,s[r+"-arrow-shape"].value,n,i,a)}}},n.drawArrowShape=function(e,t,r,n,i,a,o,s,l){var u,c=this,d=this.usePaths(),h=e._private.rscratch,p=!1,v=r,f={x:o,y:s},g=this.getArrowWidth(i),y=c.arrowShapes[a];if(d){var m=g+"$"+a+"$"+l+"$"+o+"$"+s;h.arrowPathCacheKey=h.arrowPathCacheKey||{},h.arrowPathCache=h.arrowPathCache||{};var b=h.arrowPathCacheKey[t]===m;b?(u=r=h.arrowPathCache[t],p=!0):(u=r=new Path2D,h.arrowPathCacheKey[t]=m,h.arrowPathCache[t]=u)}r.beginPath&&r.beginPath(),p||y.draw(r,g,l,f),!y.leavePathOpen&&r.closePath&&r.closePath(),r=v,("filled"===n||"both"===n)&&(d?r.fill(u):r.fill()),("hollow"===n||"both"===n)&&(r.lineWidth=y.matchEdgeWidth?i:1,r.lineJoin="miter",d?r.stroke(u):r.stroke())},t.exports=n},{}],64:[function(e,t,r){"use strict";var n={};n.safeDrawImage=function(e,t,r,n,i,a,o,s,l,u){var c=this;try{e.drawImage(t,r,n,i,a,o,s,l,u)}catch(d){c.data.canvasNeedsRedraw[c.NODE]=!0,c.data.canvasNeedsRedraw[c.DRAG]=!0,c.drawingImage=!0,c.redraw()}},n.drawInscribedImage=function(e,t,r){var n=this,i=r._private.position.x,a=r._private.position.y,o=r._private.style,s=o["background-fit"].value,l=o["background-position-x"],u=o["background-position-y"],c=o["background-repeat"].value,d=r.width(),h=r.height(),p=r._private.rscratch,v=o["background-clip"].value,f="node"===v,g=o["background-image-opacity"].value,y=t.width||t.cachedW,m=t.height||t.cachedH;(null==y||null==m)&&(document.body.appendChild(t),y=t.cachedW=t.width||t.offsetWidth,m=t.cachedH=t.height||t.offsetHeight,document.body.removeChild(t));var b=y,x=m,w=o["background-width"];"auto"!==w.value&&(b="%"===w.units?w.value/100*d:w.pfValue);var _=o["background-height"];if("auto"!==_.value&&(x="%"===_.units?_.value/100*h:_.pfValue),0!==b&&0!==x){if("contain"===s){var E=Math.min(d/b,h/x);b*=E,x*=E}else if("cover"===s){var E=Math.max(d/b,h/x);b*=E,x*=E}var D=i-d/2;D+="%"===l.units?(d-b)*l.value/100:l.pfValue;var k=a-h/2;k+="%"===u.units?(h-x)*u.value/100:u.pfValue,p.pathCache&&(D-=i,k-=a,i=0,a=0);var T=e.globalAlpha;if(e.globalAlpha=g,"no-repeat"===c)f&&(e.save(),p.pathCache?e.clip(p.pathCache):(n.nodeShapes[n.getNodeShape(r)].draw(e,i,a,d,h),e.clip())),n.safeDrawImage(e,t,0,0,y,m,D,k,b,x),f&&e.restore();else{var S=e.createPattern(t,c);e.fillStyle=S,n.nodeShapes[n.getNodeShape(r)].draw(e,i,a,d,h),e.translate(D,k),e.fill(),e.translate(-D,-k)}e.globalAlpha=T}},t.exports=n},{}],65:[function(e,t,r){"use strict";function n(e,t,r,n,i,a){var a=a||5;e.beginPath(),e.moveTo(t+a,r),e.lineTo(t+n-a,r),e.quadraticCurveTo(t+n,r,t+n,r+a),e.lineTo(t+n,r+i-a),e.quadraticCurveTo(t+n,r+i,t+n-a,r+i),e.lineTo(t+a,r+i),e.quadraticCurveTo(t,r+i,t,r+i-a),e.lineTo(t,r+a),e.quadraticCurveTo(t,r,t+a,r),e.closePath(),e.fill()}var i=e("../../../is"),a={};a.drawEdgeText=function(e,t){var r=t._private.style.label.strValue;if(r&&!r.match(/^\s+$/)&&(!this.hideEdgesOnViewport||!(this.dragData.didDrag||this.pinching||this.hoverData.dragging||this.data.wheel||this.swipePanning))){var n=t._private.style["font-size"].pfValue*t.cy().zoom(),a=t._private.style["min-zoomed-font-size"].pfValue;if(!(a>n)){e.textAlign="center",e.textBaseline="middle";var o=t._private.rscratch;if(i.number(o.labelX)&&i.number(o.labelY)){var s,l=t._private.style,u="autorotate"===l["edge-text-rotation"].strValue;u?(s=o.labelAngle,e.translate(o.labelX,o.labelY),e.rotate(s),this.drawText(e,t,0,0),e.rotate(-s),e.translate(-o.labelX,-o.labelY)):this.drawText(e,t,o.labelX,o.labelY)}}}},a.drawNodeText=function(e,t){var r=t._private.style.label.strValue;if(r&&!r.match(/^\s+$/)){var n=t._private.style["font-size"].pfValue*t.cy().zoom(),a=t._private.style["min-zoomed-font-size"].pfValue;if(!(a>n)){var o=t._private.style["text-halign"].strValue,s=t._private.style["text-valign"].strValue,l=t._private.rscratch;if(i.number(l.labelX)&&i.number(l.labelY)){switch(o){case"left":e.textAlign="right";break;case"right":e.textAlign="left";break;default:e.textAlign="center"}switch(s){case"top":e.textBaseline="bottom";break;case"bottom":e.textBaseline="top";break;default:e.textBaseline="middle"}this.drawText(e,t,l.labelX,l.labelY)}}}},a.getFontCache=function(e){var t;this.fontCaches=this.fontCaches||[];for(var r=0;r<this.fontCaches.length;r++)if(t=this.fontCaches[r],t.context===e)return t;return t={context:e},this.fontCaches.push(t),t},a.setupTextStyle=function(e,t){var r=t.effectiveOpacity(),n=t._private.style,i=n["font-style"].strValue,a=n["font-size"].pfValue+"px",o=n["font-family"].strValue,s=n["font-weight"].strValue,l=n["text-opacity"].value*n.opacity.value*r,u=n["text-outline-opacity"].value*l,c=n.color.value,d=n["text-outline-color"].value,h=n["text-shadow-blur"].pfValue,p=n["text-shadow-opacity"].value,v=n["text-shadow-color"].value,f=n["text-shadow-offset-x"].pfValue,g=n["text-shadow-offset-y"].pfValue,y=t._private.fontKey,m=this.getFontCache(e);m.key!==y&&(e.font=i+" "+s+" "+a+" "+o,m.key=y);var b=this.getLabelText(t);return e.lineJoin="round",this.fillStyle(e,c[0],c[1],c[2],l),this.strokeStyle(e,d[0],d[1],d[2],u),this.shadowStyle(e,v,p,h,f,g),b},a.drawText=function(e,t,r,i){var a=t._private,o=a.style,s=a.rstyle,l=a.rscratch,u=t.effectiveOpacity();if(0!==u&&0!==o["text-opacity"].value){var c=this.setupTextStyle(e,t),d=o["text-halign"].value,h=o["text-valign"].value;if(t.isEdge()&&(d="center",h="center"),t.isNode()){var p=o["padding-left"].pfValue,v=o["padding-right"].pfValue,f=o["padding-top"].pfValue,g=o["padding-bottom"].pfValue;r+=p/2,r-=v/2,i+=f/2,i-=g/2}if(null!=c&&!isNaN(r)&&!isNaN(i)){var y=o["text-background-opacity"].value,m=o["text-border-opacity"].value,b=o["text-border-width"].pfValue;if(y>0||b>0&&m>0){var x=4+b/2;t.isNode()&&("top"===h?i-=x:"bottom"===h&&(i+=x),"left"===d?r-=x:"right"===d&&(r+=x));var w=s.labelWidth,_=s.labelHeight,E=r;d&&("center"==d?E-=w/2:"left"==d&&(E-=w));var D=i;if(t.isNode()?"top"==h?D-=_:"center"==h&&(D-=_/2):D-=_/2,"autorotate"===o["edge-text-rotation"].strValue?(i=0,w+=4,E=r-w/2,D=i-_/2):(E-=x,D-=x,_+=2*x,w+=2*x),y>0){var k=e.fillStyle,T=o["text-background-color"].value;e.fillStyle="rgba("+T[0]+","+T[1]+","+T[2]+","+y*u+")";var S=o["text-background-shape"].strValue;"roundrectangle"==S?n(e,E,D,w,_,2):e.fillRect(E,D,w,_),e.fillStyle=k}if(b>0&&m>0){var P=e.strokeStyle,C=e.lineWidth,N=o["text-border-color"].value,M=o["text-border-style"].value;if(e.strokeStyle="rgba("+N[0]+","+N[1]+","+N[2]+","+m*u+")",e.lineWidth=b,e.setLineDash)switch(M){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"double":e.lineWidth=b/4,e.setLineDash([]);break;case"solid":e.setLineDash([])}if(e.strokeRect(E,D,w,_),"double"===M){var B=b/2;e.strokeRect(E+B,D+B,w-2*B,_-2*B)}e.setLineDash&&e.setLineDash([]),e.lineWidth=C,e.strokeStyle=P}}var z=2*o["text-outline-width"].pfValue;if(z>0&&(e.lineWidth=z),"wrap"===o["text-wrap"].value){var O=l.labelWrapCachedLines,I=s.labelHeight/O.length;switch(h){case"top":i-=(O.length-1)*I;break;case"bottom":break;default:case"center":i-=(O.length-1)*I/2}for(var L=0;L<O.length;L++)z>0&&e.strokeText(O[L],r,i),e.fillText(O[L],r,i),i+=I}else z>0&&e.strokeText(c,r,i),e.fillText(c,r,i);this.shadowStyle(e,"transparent",0)}}},t.exports=a},{"../../../is":77}],66:[function(e,t,r){"use strict";var n=e("../../../is"),i={};i.drawNode=function(e,t,r){var i,a,o=this,s=t._private.style,l=t._private.rscratch,u=t._private,c=u.position;if(n.number(c.x)&&n.number(c.y)){var d,h=this.usePaths(),p=e,v=!1,f=s["overlay-padding"].pfValue,g=s["overlay-opacity"].value,y=s["overlay-color"].value;if(!r||0!==g){var m=t.effectiveOpacity();if(0!==m)if(i=t.width()+s["padding-left"].pfValue+s["padding-right"].pfValue,a=t.height()+s["padding-top"].pfValue+s["padding-bottom"].pfValue,e.lineWidth=s["border-width"].pfValue,void 0!==r&&r)g>0&&(this.fillStyle(e,y[0],y[1],y[2],g),o.nodeShapes.roundrectangle.draw(e,t._private.position.x,t._private.position.y,i+2*f,a+2*f),e.fill());else{var b,x=s["background-image"].value[2]||s["background-image"].value[1];if(void 0!==x){b=this.getCachedImage(x,function(){o.data.canvasNeedsRedraw[o.NODE]=!0,o.data.canvasNeedsRedraw[o.DRAG]=!0,o.drawingImage=!0,o.redraw()});var w=u.backgrounding;u.backgrounding=!b.complete,w!==u.backgrounding&&t.updateStyle(!1)}var _=s["background-color"].value,E=s["border-color"].value,D=s["border-style"].value;this.fillStyle(e,_[0],_[1],_[2],s["background-opacity"].value*m),this.strokeStyle(e,E[0],E[1],E[2],s["border-opacity"].value*m);var k=s["shadow-blur"].pfValue,T=s["shadow-opacity"].value,S=s["shadow-color"].value,P=s["shadow-offset-x"].pfValue,C=s["shadow-offset-y"].pfValue;if(this.shadowStyle(e,S,T,k,P,C),e.lineJoin="miter",e.setLineDash)switch(D){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"solid":case"double":e.setLineDash([])}var N=s.shape.strValue;if(h){var M=N+"$"+i+"$"+a;e.translate(c.x,c.y),l.pathCacheKey===M?(d=e=l.pathCache,v=!0):(d=e=new Path2D,l.pathCacheKey=M,l.pathCache=d)}if(!v){var B=c;h&&(B={x:0,y:0}),o.nodeShapes[this.getNodeShape(t)].draw(e,B.x,B.y,i,a)}e=p,h?e.fill(d):e.fill(),this.shadowStyle(e,"transparent",0),void 0!==x&&b.complete&&this.drawInscribedImage(e,b,t);var z=s["background-blacken"].value,O=s["border-width"].pfValue;if(this.hasPie(t)&&(this.drawPie(e,t,m),(0!==z||0!==O)&&(h||o.nodeShapes[this.getNodeShape(t)].draw(e,c.x,c.y,i,a))),z>0?(this.fillStyle(e,0,0,0,z),h?e.fill(d):e.fill()):0>z&&(this.fillStyle(e,255,255,255,-z),h?e.fill(d):e.fill()),O>0&&(h?e.stroke(d):e.stroke(),"double"===D)){e.lineWidth=s["border-width"].pfValue/3;var I=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",h?e.stroke(d):e.stroke(),e.globalCompositeOperation=I}h&&e.translate(-c.x,-c.y),e.setLineDash&&e.setLineDash([])}}}},i.hasPie=function(e){return e=e[0],e._private.hasPie},i.drawPie=function(e,t,r){t=t[0];var n=t._private,i=t.cy().style(),a=n.style,o=a["pie-size"],s=t.width(),l=t.height(),u=n.position.x,c=n.position.y,d=Math.min(s,l)/2,h=0,p=this.usePaths();p&&(u=0,c=0),"%"===o.units?d=d*o.value/100:void 0!==o.pfValue&&(d=o.pfValue/2);for(var v=1;v<=i.pieBackgroundN;v++){var f=a["pie-"+v+"-background-size"].value,g=a["pie-"+v+"-background-color"].value,y=a["pie-"+v+"-background-opacity"].value*r,m=f/100;m+h>1&&(m=1-h);var b=1.5*Math.PI+2*Math.PI*h,x=2*Math.PI*m,w=b+x;0===f||h>=1||h+m>1||(e.beginPath(),e.moveTo(u,c),e.arc(u,c,d,b,w),e.closePath(),this.fillStyle(e,g[0],g[1],g[2],y),e.fill(),h+=m)}},t.exports=i},{"../../../is":77}],67:[function(e,t,r){"use strict";var n={},i=e("../../../util"),a=e("../../../math"),o=100;n.getPixelRatio=function(){var e=this.data.contexts[0];if(null!=this.forcedPixelRatio)return this.forcedPixelRatio;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},n.paintCache=function(e){for(var t,r=this.paintCaches=this.paintCaches||[],n=!0,i=0;i<r.length;i++)if(t=r[i],t.context===e){n=!1;break}return n&&(t={context:e},r.push(t)),t},n.fillStyle=function(e,t,r,n,i){e.fillStyle="rgba("+t+","+r+","+n+","+i+")"},n.strokeStyle=function(e,t,r,n,i){e.strokeStyle="rgba("+t+","+r+","+n+","+i+")"},n.shadowStyle=function(e,t,r,n,i,a){var o=this.cy.zoom(),s=this.paintCache(e);(0!==s.shadowOpacity||0!==r)&&(s.shadowOpacity=r,r>0?(e.shadowBlur=n*o,e.shadowColor="rgba("+t[0]+","+t[1]+","+t[2]+","+r+")",e.shadowOffsetX=i*o,e.shadowOffsetY=a*o):(e.shadowBlur=0,e.shadowColor="transparent"))},n.matchCanvasSize=function(e){var t=this,r=t.data,n=e.clientWidth,i=e.clientHeight,a=t.getPixelRatio(),o=t.motionBlurPxRatio;(e===t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE]||e===t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG])&&(a=o);var s,l=n*a,u=i*a;if(l!==t.canvasWidth||u!==t.canvasHeight){t.fontCaches=null;var c=r.canvasContainer;c.style.width=n+"px",c.style.height=i+"px";for(var d=0;d<t.CANVAS_LAYERS;d++)s=r.canvases[d],(s.width!==l||s.height!==u)&&(s.width=l,s.height=u,s.style.width=n+"px",s.style.height=i+"px");for(var d=0;d<t.BUFFER_COUNT;d++)s=r.bufferCanvases[d],(s.width!==l||s.height!==u)&&(s.width=l,s.height=u,s.style.width=n+"px",s.style.height=i+"px");t.textureMult=1,1>=a&&(s=r.bufferCanvases[t.TEXTURE_BUFFER],t.textureMult=2,s.width=l*t.textureMult,s.height=u*t.textureMult),t.canvasWidth=l,t.canvasHeight=u}},n.renderTo=function(e,t,r,n){this.render({forcedContext:e,forcedZoom:t,forcedPan:r,drawAllLayers:!0,forcedPxRatio:n})},n.render=function(e){function t(e,t,r,n,i){var a=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",h.fillStyle(e,255,255,255,h.motionBlurTransparency),e.fillRect(t,r,n,i),e.globalCompositeOperation=a}function r(e,r){var n,i,a,o;h.clearingMotionBlur||e!==f.bufferContexts[h.MOTIONBLUR_BUFFER_NODE]&&e!==f.bufferContexts[h.MOTIONBLUR_BUFFER_DRAG]?(n=C,i=S,a=h.canvasWidth,o=h.canvasHeight):(n={x:P.x*b,y:P.y*b},i=T*b,a=h.canvasWidth*b,o=h.canvasHeight*b),e.setTransform(1,0,0,1,0,0),"motionBlur"===r?t(e,0,0,a,o):s||void 0!==r&&!r||e.clearRect(0,0,a,o),l||(e.translate(n.x,n.y),e.scale(i,i)),d&&e.translate(d.x,d.y),c&&e.scale(c,c)}function n(e,t){for(var r=e.eles,n=0;n<r.length;n++){var i=r[n];i.isNode()?(h.drawNode(t,i),q||h.drawNodeText(t,i),h.drawNode(t,i,!0)):j||(h.drawEdge(t,i),q||h.drawEdgeText(t,i),h.drawEdge(t,i,!0))}}e=e||i.staticEmptyObject();var s=e.forcedContext,l=e.drawAllLayers,u=e.drawOnlyNodeLayer,c=e.forcedZoom,d=e.forcedPan,h=this,p=void 0===e.forcedPxRatio?this.getPixelRatio():e.forcedPxRatio,v=h.cy,f=h.data,g=f.canvasNeedsRedraw,y=h.textureOnViewport&&!s&&(h.pinching||h.hoverData.dragging||h.swipePanning||h.data.wheelZooming),m=void 0!==e.motionBlur?e.motionBlur:h.motionBlur,b=h.motionBlurPxRatio,x=v.hasCompoundNodes(),w=h.hoverData.draggingEles,_=h.hoverData.selecting||h.touchData.selecting?!0:!1;m=m&&!s&&h.motionBlurEnabled&&!_;var E=m;!s&&h.motionBlurTimeout&&clearTimeout(h.motionBlurTimeout),m&&(null==h.mbFrames&&(h.mbFrames=0),h.drawingImage||h.mbFrames++,h.mbFrames<3&&(E=!1),h.mbFrames>h.minMbLowQualFrames&&(h.motionBlurPxRatio=h.mbPxRBlurry)),h.clearingMotionBlur&&(h.motionBlurPxRatio=1),h.textureDrawLastFrame&&!y&&(g[h.NODE]=!0,g[h.SELECT_BOX]=!0);var D=h.getCachedEdges(),k=v.style()._private.coreStyle,T=v.zoom(),S=void 0!==c?c:T,P=v.pan(),C={x:P.x,y:P.y},N={zoom:T,pan:{x:P.x,y:P.y}},M=h.prevViewport,B=void 0===M||N.zoom!==M.zoom||N.pan.x!==M.pan.x||N.pan.y!==M.pan.y;B||w&&!x||(h.motionBlurPxRatio=1),d&&(C=d),S*=p,C.x*=p,C.y*=p;var z={drag:{nodes:[],edges:[],eles:[]},nondrag:{nodes:[],edges:[],eles:[]}};if(y||(h.textureDrawLastFrame=!1),y){h.textureDrawLastFrame=!0;var O;if(!h.textureCache){h.textureCache={},O=h.textureCache.bb=v.elements().boundingBox(),h.textureCache.texture=h.data.bufferCanvases[h.TEXTURE_BUFFER];var I=h.data.bufferContexts[h.TEXTURE_BUFFER];I.setTransform(1,0,0,1,0,0),I.clearRect(0,0,h.canvasWidth*h.textureMult,h.canvasHeight*h.textureMult),h.render({forcedContext:I,drawOnlyNodeLayer:!0,forcedPxRatio:p*h.textureMult});var N=h.textureCache.viewport={zoom:v.zoom(),pan:v.pan(),width:h.canvasWidth,height:h.canvasHeight};N.mpan={x:(0-N.pan.x)/N.zoom,y:(0-N.pan.y)/N.zoom}}g[h.DRAG]=!1,g[h.NODE]=!1;var L=f.contexts[h.NODE],A=h.textureCache.texture,N=h.textureCache.viewport;O=h.textureCache.bb,L.setTransform(1,0,0,1,0,0),m?t(L,0,0,N.width,N.height):L.clearRect(0,0,N.width,N.height);var R=k["outside-texture-bg-color"].value,V=k["outside-texture-bg-opacity"].value;h.fillStyle(L,R[0],R[1],R[2],V),L.fillRect(0,0,N.width,N.height);var T=v.zoom();r(L,!1),L.clearRect(N.mpan.x,N.mpan.y,N.width/N.zoom/p,N.height/N.zoom/p),L.drawImage(A,N.mpan.x,N.mpan.y,N.width/N.zoom/p,N.height/N.zoom/p)}else h.textureOnViewport&&!s&&(h.textureCache=null);var F=h.pinching||h.hoverData.dragging||h.swipePanning||h.data.wheelZooming||h.hoverData.draggingEles,j=h.hideEdgesOnViewport&&F,q=h.hideLabelsOnViewport&&F;if(g[h.DRAG]||g[h.NODE]||l||u){j||h.findEdgeControlPoints(D);for(var X=h.getCachedZSortedEles(),Y=v.extent(),$=0;$<X.length;$++){var H,W=X[$],O=s?null:W.boundingBox(),Z=s?!0:a.boundingBoxesIntersect(Y,O);Z&&(H=W._private.rscratch.inDragLayer?z.drag:z.nondrag,H.eles.push(W))}}var U=[];if(U[h.NODE]=!g[h.NODE]&&m&&!h.clearedForMotionBlur[h.NODE]||h.clearingMotionBlur,U[h.NODE]&&(h.clearedForMotionBlur[h.NODE]=!0),U[h.DRAG]=!g[h.DRAG]&&m&&!h.clearedForMotionBlur[h.DRAG]||h.clearingMotionBlur,U[h.DRAG]&&(h.clearedForMotionBlur[h.DRAG]=!0),g[h.NODE]||l||u||U[h.NODE]){var G=m&&!U[h.NODE]&&1!==b,L=s||(G?h.data.bufferContexts[h.MOTIONBLUR_BUFFER_NODE]:f.contexts[h.NODE]),K=m&&!G?"motionBlur":void 0;r(L,K),n(z.nondrag,L),l||m||(g[h.NODE]=!1)}if(!u&&(g[h.DRAG]||l||U[h.DRAG])){var G=m&&!U[h.DRAG]&&1!==b,L=s||(G?h.data.bufferContexts[h.MOTIONBLUR_BUFFER_DRAG]:f.contexts[h.DRAG]);r(L,m&&!G?"motionBlur":void 0),n(z.drag,L),l||m||(g[h.DRAG]=!1)}if(h.showFps||!u&&g[h.SELECT_BOX]&&!l){var L=s||f.contexts[h.SELECT_BOX];if(r(L),1==h.selection[4]&&(h.hoverData.selecting||h.touchData.selecting)){var T=h.cy.zoom(),J=k["selection-box-border-width"].value/T;L.lineWidth=J,L.fillStyle="rgba("+k["selection-box-color"].value[0]+","+k["selection-box-color"].value[1]+","+k["selection-box-color"].value[2]+","+k["selection-box-opacity"].value+")",L.fillRect(h.selection[0],h.selection[1],h.selection[2]-h.selection[0],h.selection[3]-h.selection[1]),J>0&&(L.strokeStyle="rgba("+k["selection-box-border-color"].value[0]+","+k["selection-box-border-color"].value[1]+","+k["selection-box-border-color"].value[2]+","+k["selection-box-opacity"].value+")",L.strokeRect(h.selection[0],h.selection[1],h.selection[2]-h.selection[0],h.selection[3]-h.selection[1]))}if(f.bgActivePosistion&&!h.hoverData.selecting){var T=h.cy.zoom(),Q=f.bgActivePosistion;L.fillStyle="rgba("+k["active-bg-color"].value[0]+","+k["active-bg-color"].value[1]+","+k["active-bg-color"].value[2]+","+k["active-bg-opacity"].value+")",L.beginPath(),L.arc(Q.x,Q.y,k["active-bg-size"].pfValue/T,0,2*Math.PI),L.fill()}var ee=h.lastRedrawTime;if(h.showFps&&ee){ee=Math.round(ee);var te=Math.round(1e3/ee);L.setTransform(1,0,0,1,0,0),L.fillStyle="rgba(255, 0, 0, 0.75)",L.strokeStyle="rgba(255, 0, 0, 0.75)",L.lineWidth=1,L.fillText("1 frame = "+ee+" ms = "+te+" fps",0,20);var re=60;L.strokeRect(0,30,250,20),L.fillRect(0,30,250*Math.min(te/re,1),20)}l||(g[h.SELECT_BOX]=!1)}if(m&&1!==b){var ne=f.contexts[h.NODE],ie=h.data.bufferCanvases[h.MOTIONBLUR_BUFFER_NODE],ae=f.contexts[h.DRAG],oe=h.data.bufferCanvases[h.MOTIONBLUR_BUFFER_DRAG],se=function(e,r,n){e.setTransform(1,0,0,1,0,0),n||!E?e.clearRect(0,0,h.canvasWidth,h.canvasHeight):t(e,0,0,h.canvasWidth,h.canvasHeight);var i=b;e.drawImage(r,0,0,h.canvasWidth*i,h.canvasHeight*i,0,0,h.canvasWidth,h.canvasHeight)};(g[h.NODE]||U[h.NODE])&&(se(ne,ie,U[h.NODE]),g[h.NODE]=!1),(g[h.DRAG]||U[h.DRAG])&&(se(ae,oe,U[h.DRAG]),g[h.DRAG]=!1)}h.currentlyDrawing=!1,h.prevViewport=N,h.clearingMotionBlur&&(h.clearingMotionBlur=!1,h.motionBlurCleared=!0,h.motionBlur=!0),m&&(h.motionBlurTimeout=setTimeout(function(){h.motionBlurTimeout=null,h.clearedForMotionBlur[h.NODE]=!1,h.clearedForMotionBlur[h.DRAG]=!1,h.motionBlur=!1,h.clearingMotionBlur=!y,h.mbFrames=0,g[h.NODE]=!0,g[h.DRAG]=!0,h.redraw()},o)),h.drawingImage=!1,s||h.initrender||(h.initrender=!0,v.trigger("initrender")),s||v.triggerOnRender()},t.exports=n},{"../../../math":79,"../../../util":94}],68:[function(e,t,r){"use strict";var n=e("../../../math"),i={};i.drawPolygonPath=function(e,t,r,n,i,a){var o=n/2,s=i/2;e.beginPath&&e.beginPath(),e.moveTo(t+o*a[0],r+s*a[1]);for(var l=1;l<a.length/2;l++)e.lineTo(t+o*a[2*l],r+s*a[2*l+1]);e.closePath()},i.drawRoundRectanglePath=function(e,t,r,i,a,o){var s=i/2,l=a/2,u=n.getRoundRectangleRadius(i,a);e.beginPath&&e.beginPath(),e.moveTo(t,r-l),e.arcTo(t+s,r-l,t+s,r,u),e.arcTo(t+s,r+l,t,r+l,u),e.arcTo(t-s,r+l,t-s,r,u),e.arcTo(t-s,r-l,t,r-l,u),e.lineTo(t,r-l),e.closePath()};for(var a=Math.sin(0),o=Math.cos(0),s={},l={},u=Math.PI/40,c=0*Math.PI;c<2*Math.PI;c+=u)s[c]=Math.sin(c),l[c]=Math.cos(c);i.drawEllipsePath=function(e,t,r,n,i){if(e.beginPath&&e.beginPath(),e.ellipse)e.ellipse(t,r,n/2,i/2,0,0,2*Math.PI);else for(var c,d,h=n/2,p=i/2,v=0*Math.PI;v<2*Math.PI;v+=u)c=t-h*s[v]*a+h*l[v]*o,d=r+p*l[v]*a+p*s[v]*o,0===v?e.moveTo(c,d):e.lineTo(c,d);e.closePath()},t.exports=i},{"../../../math":79}],69:[function(e,t,r){"use strict";var n=e("../../../is"),i={};i.createBuffer=function(e,t){var r=document.createElement("canvas");return r.width=e,r.height=t,[r,r.getContext("2d")]},i.bufferCanvasImage=function(e){var t=this.cy,r=t.elements().boundingBox(),i=e.full?Math.ceil(r.w):this.container.clientWidth,a=e.full?Math.ceil(r.h):this.container.clientHeight,o=1;if(void 0!==e.scale)i*=e.scale,a*=e.scale,o=e.scale;else if(n.number(e.maxWidth)||n.number(e.maxHeight)){var s=1/0,l=1/0;n.number(e.maxWidth)&&(s=o*e.maxWidth/i),n.number(e.maxHeight)&&(l=o*e.maxHeight/a),o=Math.min(s,l),i*=o,a*=o}var u=document.createElement("canvas");u.width=i,u.height=a,u.style.width=i+"px",u.style.height=a+"px";var c=u.getContext("2d");if(i>0&&a>0)if(c.clearRect(0,0,i,a),e.bg&&(c.fillStyle=e.bg,c.rect(0,0,i,a),c.fill()),c.globalCompositeOperation="source-over",e.full)this.render({forcedContext:c,drawAllLayers:!0,forcedZoom:o,forcedPan:{x:-r.x1*o,y:-r.y1*o},forcedPxRatio:1});else{var d=t.pan(),h={x:d.x*o,y:d.y*o},p=t.zoom()*o;this.render({forcedContext:c,drawAllLayers:!0,forcedZoom:p,forcedPan:h,forcedPxRatio:1})}return u},i.png=function(e){return this.bufferCanvasImage(e).toDataURL("image/png")},i.jpg=function(e){return this.bufferCanvasImage(e).toDataURL("image/jpeg")},t.exports=i},{"../../../is":77}],70:[function(e,t,r){"use strict";function n(e){var t=this;t.data={canvases:new Array(o.CANVAS_LAYERS),contexts:new Array(o.CANVAS_LAYERS),canvasNeedsRedraw:new Array(o.CANVAS_LAYERS),bufferCanvases:new Array(o.BUFFER_COUNT),bufferContexts:new Array(o.CANVAS_LAYERS)},t.data.canvasContainer=document.createElement("div");var r=t.data.canvasContainer.style;r.position="absolute",r.zIndex="0",r.overflow="hidden",e.cy.container().appendChild(t.data.canvasContainer);for(var n=0;n<o.CANVAS_LAYERS;n++){var i=t.data.canvases[n]=document.createElement("canvas");t.data.contexts[n]=i.getContext("2d"),
i.setAttribute("style","-ms-touch-action: none; touch-action: none;"),i.style.position="absolute",i.setAttribute("data-id","layer"+n),i.style.zIndex=String(o.CANVAS_LAYERS-n),t.data.canvasContainer.appendChild(i),t.data.canvasNeedsRedraw[n]=!1}t.data.topCanvas=t.data.canvases[0],t.data.canvases[o.NODE].setAttribute("data-id","layer"+o.NODE+"-node"),t.data.canvases[o.SELECT_BOX].setAttribute("data-id","layer"+o.SELECT_BOX+"-selectbox"),t.data.canvases[o.DRAG].setAttribute("data-id","layer"+o.DRAG+"-drag");for(var n=0;n<o.BUFFER_COUNT;n++)t.data.bufferCanvases[n]=document.createElement("canvas"),t.data.bufferContexts[n]=t.data.bufferCanvases[n].getContext("2d"),t.data.bufferCanvases[n].style.position="absolute",t.data.bufferCanvases[n].setAttribute("data-id","buffer"+n),t.data.bufferCanvases[n].style.zIndex=String(-n-1),t.data.bufferCanvases[n].style.visibility="hidden";t.pathsEnabled=!0}var i=e("../../../util"),a=n,o=n.prototype;o.CANVAS_LAYERS=3,o.SELECT_BOX=0,o.DRAG=1,o.NODE=2,o.BUFFER_COUNT=3,o.TEXTURE_BUFFER=0,o.MOTIONBLUR_BUFFER_NODE=1,o.MOTIONBLUR_BUFFER_DRAG=2,o.redrawHint=function(e,t){var r=this;switch(e){case"eles":r.data.canvasNeedsRedraw[o.NODE]=t;break;case"drag":r.data.canvasNeedsRedraw[o.DRAG]=t;break;case"select":r.data.canvasNeedsRedraw[o.SELECT_BOX]=t}};var s="undefined"!=typeof Path2D;o.path2dEnabled=function(e){return void 0===e?this.pathsEnabled:void(this.pathsEnabled=e?!0:!1)},o.usePaths=function(){return s&&this.pathsEnabled},[e("./arrow-shapes"),e("./drawing-edges"),e("./drawing-images"),e("./drawing-label-text"),e("./drawing-nodes"),e("./drawing-redraw"),e("./drawing-shapes"),e("./export-image"),e("./node-shapes")].forEach(function(e){i.extend(o,e)}),t.exports=a},{"../../../util":94,"./arrow-shapes":62,"./drawing-edges":63,"./drawing-images":64,"./drawing-label-text":65,"./drawing-nodes":66,"./drawing-redraw":67,"./drawing-shapes":68,"./export-image":69,"./node-shapes":71}],71:[function(e,t,r){"use strict";var n,i={};i.nodeShapeImpl=function(e){var t=this;return(n||(n={ellipse:function(e,r,n,i,a){t.drawEllipsePath(e,r,n,i,a)},polygon:function(e,r,n,i,a,o){t.drawPolygonPath(e,r,n,i,a,o)},roundrectangle:function(e,r,n,i,a){t.drawRoundRectanglePath(e,r,n,i,a,10)}}))[e]},t.exports=i},{}],72:[function(e,t,r){"use strict";t.exports=[{name:"null",impl:e("./null")},{name:"base",impl:e("./base")},{name:"canvas",impl:e("./canvas")}]},{"./base":58,"./canvas":70,"./null":73}],73:[function(e,t,r){"use strict";function n(e){this.options=e,this.notifications=0}var i=function(){};n.prototype={recalculateRenderedStyle:i,notify:function(){this.notifications++},init:i},t.exports=n},{}],74:[function(e,t,r){"use strict";var n=e("./is"),i=e("./util"),a=e("./thread"),o=e("./promise"),s=e("./define"),l=function(t){if(!(this instanceof l))return new l(t);this._private={pass:[]};var r=4;if(n.number(t),"undefined"!=typeof navigator&&null!=navigator.hardwareConcurrency)t=navigator.hardwareConcurrency;else try{t=e("os").cpus().length}catch(i){t=r}for(var o=0;t>o;o++)this[o]=new a;this.length=t},u=l.prototype;i.extend(u,{instanceString:function(){return"fabric"},require:function(e,t){for(var r=0;r<this.length;r++){var n=this[r];n.require(e,t)}return this},random:function(){var e=Math.round((this.length-1)*Math.random()),t=this[e];return t},run:function(e){var t=this._private.pass.shift();return this.random().pass(t).run(e)},message:function(e){return this.random().message(e)},broadcast:function(e){for(var t=0;t<this.length;t++){var r=this[t];r.message(e)}return this},stop:function(){for(var e=0;e<this.length;e++){var t=this[e];t.stop()}return this},pass:function(e){var t=this._private.pass;if(!n.array(e))throw"Only arrays may be used with fabric.pass()";return t.push(e),this},spreadSize:function(){var e=Math.ceil(this._private.pass[0].length/this.length);return e=Math.max(1,e)},spread:function(e){for(var t=this,r=t._private,n=t.spreadSize(),i=r.pass.shift().concat([]),a=[],s=0;s<this.length;s++){var l=this[s],u=i.splice(0,n),c=l.pass(u).run(e);a.push(c);var d=0===i.length;if(d)break}return o.all(a).then(function(e){for(var t=[],r=0,n=0;n<e.length;n++)for(var i=e[n],a=0;a<i.length;a++){var o=i[a];t[r++]=o}return t})},map:function(e){var t=this;return t.require(e,"_$_$_fabmap"),t.spread(function(e){var t=[],r=resolve;resolve=function(e){t.push(e)};for(var n=0;n<e.length;n++){var i=t.length,a=_$_$_fabmap(e[n]),o=i===t.length;o&&t.push(a)}return resolve=r,t})},filter:function(e){var t=this._private,r=t.pass[0];return this.map(e).then(function(e){for(var t=[],n=0;n<r.length;n++){var i=r[n],a=e[n];a&&t.push(i)}return t})},sort:function(e){var t=this,r=this._private.pass[0].length,n=this.spreadSize();return e=e||function(e,t){return t>e?-1:e>t?1:0},t.require(e,"_$_$_cmp"),t.spread(function(e){var t=e.sort(_$_$_cmp);resolve(t)}).then(function(t){for(var i=function(n,i,a){i=Math.min(i,r),a=Math.min(a,r);for(var o=n,s=i,l=[],u=o;a>u;u++){var c=t[n],d=t[i];s>n&&(i>=a||e(c,d)<=0)?(l.push(c),n++):(l.push(d),i++)}for(var u=0;u<l.length;u++){var h=o+u;t[h]=l[u]}},a=n;r>a;a*=2)for(var o=0;r>o;o+=2*a)i(o,o+a,o+2*a);return t})}});var c=function(e){return e=e||{},function(t,r){var n=this._private.pass.shift();return this.random().pass(n)[e.threadFn](t,r)}};i.extend(u,{randomMap:c({threadFn:"map"}),reduce:c({threadFn:"reduce"}),reduceRight:c({threadFn:"reduceRight"})});var d=u;d.promise=d.run,d.terminate=d.halt=d.stop,d.include=d.require,i.extend(u,{on:s.on(),one:s.on({unbindSelfOnTrigger:!0}),off:s.off(),trigger:s.trigger()}),s.eventAliasesOn(u),t.exports=l},{"./define":41,"./is":77,"./promise":80,"./thread":92,"./util":94,os:void 0}],75:[function(e,t,r){"use strict";(function(){var e,n,i,a,o,s,l,u,c,d,h,p,v,f,g;i=Math.floor,d=Math.min,n=function(e,t){return t>e?-1:e>t?1:0},c=function(e,t,r,a,o){var s;if(null==r&&(r=0),null==o&&(o=n),0>r)throw new Error("lo must be non-negative");for(null==a&&(a=e.length);a>r;)s=i((r+a)/2),o(t,e[s])<0?a=s:r=s+1;return[].splice.apply(e,[r,r-r].concat(t)),t},s=function(e,t,r){return null==r&&(r=n),e.push(t),f(e,0,e.length-1,r)},o=function(e,t){var r,i;return null==t&&(t=n),r=e.pop(),e.length?(i=e[0],e[0]=r,g(e,0,t)):i=r,i},u=function(e,t,r){var i;return null==r&&(r=n),i=e[0],e[0]=t,g(e,0,r),i},l=function(e,t,r){var i;return null==r&&(r=n),e.length&&r(e[0],t)<0&&(i=[e[0],t],t=i[0],e[0]=i[1],g(e,0,r)),t},a=function(e,t){var r,a,o,s,l,u;for(null==t&&(t=n),s=function(){u=[];for(var t=0,r=i(e.length/2);r>=0?r>t:t>r;r>=0?t++:t--)u.push(t);return u}.apply(this).reverse(),l=[],a=0,o=s.length;o>a;a++)r=s[a],l.push(g(e,r,t));return l},v=function(e,t,r){var i;return null==r&&(r=n),i=e.indexOf(t),-1!==i?(f(e,0,i,r),g(e,i,r)):void 0},h=function(e,t,r){var i,o,s,u,c;if(null==r&&(r=n),o=e.slice(0,t),!o.length)return o;for(a(o,r),c=e.slice(t),s=0,u=c.length;u>s;s++)i=c[s],l(o,i,r);return o.sort(r).reverse()},p=function(e,t,r){var i,s,l,u,h,p,v,f,g,y;if(null==r&&(r=n),10*t<=e.length){if(u=e.slice(0,t).sort(r),!u.length)return u;for(l=u[u.length-1],f=e.slice(t),h=0,v=f.length;v>h;h++)i=f[h],r(i,l)<0&&(c(u,i,0,null,r),u.pop(),l=u[u.length-1]);return u}for(a(e,r),y=[],s=p=0,g=d(t,e.length);g>=0?g>p:p>g;s=g>=0?++p:--p)y.push(o(e,r));return y},f=function(e,t,r,i){var a,o,s;for(null==i&&(i=n),a=e[r];r>t&&(s=r-1>>1,o=e[s],i(a,o)<0);)e[r]=o,r=s;return e[r]=a},g=function(e,t,r){var i,a,o,s,l;for(null==r&&(r=n),a=e.length,l=t,o=e[t],i=2*t+1;a>i;)s=i+1,a>s&&!(r(e[i],e[s])<0)&&(i=s),e[t]=e[i],t=i,i=2*t+1;return e[t]=o,f(e,l,t,r)},e=function(){function e(e){this.cmp=null!=e?e:n,this.nodes=[]}return e.push=s,e.pop=o,e.replace=u,e.pushpop=l,e.heapify=a,e.updateItem=v,e.nlargest=h,e.nsmallest=p,e.prototype.push=function(e){return s(this.nodes,e,this.cmp)},e.prototype.pop=function(){return o(this.nodes,this.cmp)},e.prototype.peek=function(){return this.nodes[0]},e.prototype.contains=function(e){return-1!==this.nodes.indexOf(e)},e.prototype.replace=function(e){return u(this.nodes,e,this.cmp)},e.prototype.pushpop=function(e){return l(this.nodes,e,this.cmp)},e.prototype.heapify=function(){return a(this.nodes,this.cmp)},e.prototype.updateItem=function(e){return v(this.nodes,e,this.cmp)},e.prototype.clear=function(){return this.nodes=[]},e.prototype.empty=function(){return 0===this.nodes.length},e.prototype.size=function(){return this.nodes.length},e.prototype.clone=function(){var t;return t=new e,t.nodes=this.nodes.slice(0),t},e.prototype.toArray=function(){return this.nodes.slice(0)},e.prototype.insert=e.prototype.push,e.prototype.top=e.prototype.peek,e.prototype.front=e.prototype.peek,e.prototype.has=e.prototype.contains,e.prototype.copy=e.prototype.clone,e}(),function(e,n){return"function"==typeof define&&define.amd?define([],n):"object"==typeof r?t.exports=n():e.Heap=n()}(this,function(){return e})}).call(this)},{}],76:[function(e,t,r){"use strict";var n=e("./window"),i=e("./is"),a=e("./core"),o=e("./extension"),s=e("./jquery-plugin"),l=e("./stylesheet"),u=e("./thread"),c=e("./fabric"),d=function(e){return void 0===e&&(e={}),i.plainObject(e)?new a(e):i.string(e)?o.apply(o,arguments):void 0};d.version="2.5.0",n&&n.jQuery&&s(n.jQuery,d),d.registerJquery=function(e){s(e,d)},d.stylesheet=d.Stylesheet=l,d.thread=d.Thread=u,d.fabric=d.Fabric=c,t.exports=d},{"./core":34,"./extension":43,"./fabric":74,"./is":77,"./jquery-plugin":78,"./stylesheet":91,"./thread":92,"./window":100}],77:[function(e,t,r){"use strict";var n=e("./window"),i=n?n.navigator:null,a="string",o=typeof{},s="function",l=typeof HTMLElement,u=function(e){return e&&e.instanceString&&c.fn(e.instanceString)?e.instanceString():null},c={defined:function(e){return null!=e},string:function(e){return null!=e&&typeof e==a},fn:function(e){return null!=e&&typeof e===s},array:function(e){return Array.isArray?Array.isArray(e):null!=e&&e instanceof Array},plainObject:function(e){return null!=e&&typeof e===o&&!c.array(e)&&e.constructor===Object},object:function(e){return null!=e&&typeof e===o},number:function(e){return null!=e&&"number"==typeof e&&!isNaN(e)},integer:function(e){return c.number(e)&&Math.floor(e)===e},bool:function(e){return null!=e&&typeof e==typeof!0},htmlElement:function(e){return"undefined"===l?void 0:null!=e&&e instanceof HTMLElement},elementOrCollection:function(e){return c.element(e)||c.collection(e)},element:function(e){return"collection"===u(e)&&e._private.single},collection:function(e){return"collection"===u(e)&&!e._private.single},core:function(e){return"core"===u(e)},style:function(e){return"style"===u(e)},stylesheet:function(e){return"stylesheet"===u(e)},event:function(e){return"event"===u(e)},thread:function(e){return"thread"===u(e)},fabric:function(e){return"fabric"===u(e)},emptyString:function(e){return e?c.string(e)&&(""===e||e.match(/^\s+$/))?!0:!1:!0},nonemptyString:function(e){return e&&c.string(e)&&""!==e&&!e.match(/^\s+$/)?!0:!1},domElement:function(e){return"undefined"==typeof HTMLElement?!1:e instanceof HTMLElement},boundingBox:function(e){return c.plainObject(e)&&c.number(e.x1)&&c.number(e.x2)&&c.number(e.y1)&&c.number(e.y2)},promise:function(e){return c.object(e)&&c.fn(e.then)},touch:function(){return n&&("ontouchstart"in n||n.DocumentTouch&&document instanceof DocumentTouch)},gecko:function(){return"undefined"!=typeof InstallTrigger||"MozAppearance"in document.documentElement.style},webkit:function(){return"undefined"!=typeof webkitURL||"WebkitAppearance"in document.documentElement.style},chromium:function(){return"undefined"!=typeof chrome},khtml:function(){return i&&i.vendor.match(/kde/i)},khtmlEtc:function(){return c.khtml()||c.webkit()||c.chromium()},trident:function(){/*@cc_on!@*/
return"undefined"!=typeof ActiveXObject||!1},windows:function(){return i&&i.appVersion.match(/Win/i)},mac:function(){return i&&i.appVersion.match(/Mac/i)},linux:function(){return i&&i.appVersion.match(/Linux/i)},unix:function(){return i&&i.appVersion.match(/X11/i)}};t.exports=c},{"./window":100}],78:[function(e,t,r){"use strict";var n=e("./is"),i=function(e){var t=e[0]._cyreg=e[0]._cyreg||{};return t},a=function(e,t){e&&(e.fn.cytoscape||(e.fn.cytoscape=function(r){var a=e(this);if("get"===r)return i(a).cy;if(n.fn(r)){var o=r,s=i(a).cy;if(s&&s.isReady())s.trigger("ready",[],o);else{var l=i(a),u=l.readies=l.readies||[];u.push(o)}}else if(n.plainObject(r))return a.each(function(){var n=e.extend({},r,{container:e(this)[0]});t(n)})},e.cytoscape=t,null==e.fn.cy&&null==e.cy&&(e.fn.cy=e.fn.cytoscape,e.cy=e.cytoscape)))};t.exports=a},{"./is":77}],79:[function(e,t,r){"use strict";var n={};n.signum=function(e){return e>0?1:0>e?-1:0},n.distance=function(e,t){return Math.sqrt(n.sqDistance(e,t))},n.sqDistance=function(e,t){var r=t.x-e.x,n=t.y-e.y;return r*r+n*n},n.qbezierAt=function(e,t,r,n){return(1-n)*(1-n)*e+2*(1-n)*n*t+n*n*r},n.qbezierPtAt=function(e,t,r,i){return{x:n.qbezierAt(e.x,t.x,r.x,i),y:n.qbezierAt(e.y,t.y,r.y,i)}},n.makeBoundingBox=function(e){if(null!=e.x1&&null!=e.y1){if(null!=e.x2&&null!=e.y2&&e.x2>=e.x1&&e.y2>=e.y1)return{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,w:e.x2-e.x1,h:e.y2-e.y1};if(null!=e.w&&null!=e.h&&e.w>=0&&e.h>=0)return{x1:e.x1,y1:e.y1,x2:e.x1+e.w,y2:e.y1+e.h,w:e.w,h:e.h}}},n.boundingBoxesIntersect=function(e,t){return e.x1>t.x2?!1:t.x1>e.x2?!1:e.x2<t.x1?!1:t.x2<e.x1?!1:e.y2<t.y1?!1:t.y2<e.y1?!1:e.y1>t.y2?!1:t.y1>e.y2?!1:!0},n.inBoundingBox=function(e,t,r){return e.x1<=t&&t<=e.x2&&e.y1<=r&&r<=e.y2},n.pointInBoundingBox=function(e,t){return this.inBoundingBox(e,t.x,t.y)},n.roundRectangleIntersectLine=function(e,t,r,n,i,a,o){var s,l=this.getRoundRectangleRadius(i,a),u=i/2,c=a/2,d=r-u+l-o,h=n-c-o,p=r+u-l+o,v=h;if(s=this.finiteLinesIntersect(e,t,r,n,d,h,p,v,!1),s.length>0)return s;var f=r+u+o,g=n-c+l-o,y=f,m=n+c-l+o;if(s=this.finiteLinesIntersect(e,t,r,n,f,g,y,m,!1),s.length>0)return s;var b=r-u+l-o,x=n+c+o,w=r+u-l+o,_=x;if(s=this.finiteLinesIntersect(e,t,r,n,b,x,w,_,!1),s.length>0)return s;var E=r-u-o,D=n-c+l-o,k=E,T=n+c-l+o;if(s=this.finiteLinesIntersect(e,t,r,n,E,D,k,T,!1),s.length>0)return s;var S,P=r-u+l,C=n-c+l;if(S=this.intersectLineCircle(e,t,r,n,P,C,l+o),S.length>0&&S[0]<=P&&S[1]<=C)return[S[0],S[1]];var N=r+u-l,M=n-c+l;if(S=this.intersectLineCircle(e,t,r,n,N,M,l+o),S.length>0&&S[0]>=N&&S[1]<=M)return[S[0],S[1]];var B=r+u-l,z=n+c-l;if(S=this.intersectLineCircle(e,t,r,n,B,z,l+o),S.length>0&&S[0]>=B&&S[1]>=z)return[S[0],S[1]];var O=r-u+l,I=n+c-l;return S=this.intersectLineCircle(e,t,r,n,O,I,l+o),S.length>0&&S[0]<=O&&S[1]>=I?[S[0],S[1]]:[]},n.inLineVicinity=function(e,t,r,n,i,a,o){var s=o,l=Math.min(r,i),u=Math.max(r,i),c=Math.min(n,a),d=Math.max(n,a);return e>=l-s&&u+s>=e&&t>=c-s&&d+s>=t},n.inBezierVicinity=function(e,t,r,n,i,a,o,s,l){var u={x1:Math.min(r,o,i)-l,x2:Math.max(r,o,i)+l,y1:Math.min(n,s,a)-l,y2:Math.max(n,s,a)+l};return e<u.x1||e>u.x2||t<u.y1||t>u.y2?!1:!0},n.solveCubic=function(e,t,r,n,i){t/=e,r/=e,n/=e;var a,o,s,l,u,c,d,h;return o=(3*r-t*t)/9,s=-(27*n)+t*(9*r-2*(t*t)),s/=54,a=o*o*o+s*s,i[1]=0,d=t/3,a>0?(u=s+Math.sqrt(a),u=0>u?-Math.pow(-u,1/3):Math.pow(u,1/3),c=s-Math.sqrt(a),c=0>c?-Math.pow(-c,1/3):Math.pow(c,1/3),i[0]=-d+u+c,d+=(u+c)/2,i[4]=i[2]=-d,d=Math.sqrt(3)*(-c+u)/2,i[3]=d,void(i[5]=-d)):(i[5]=i[3]=0,0===a?(h=0>s?-Math.pow(-s,1/3):Math.pow(s,1/3),i[0]=-d+2*h,void(i[4]=i[2]=-(h+d))):(o=-o,l=o*o*o,l=Math.acos(s/Math.sqrt(l)),h=2*Math.sqrt(o),i[0]=-d+h*Math.cos(l/3),i[2]=-d+h*Math.cos((l+2*Math.PI)/3),void(i[4]=-d+h*Math.cos((l+4*Math.PI)/3))))},n.sqDistanceToQuadraticBezier=function(e,t,r,n,i,a,o,s){var l=1*r*r-4*r*i+2*r*o+4*i*i-4*i*o+o*o+n*n-4*n*a+2*n*s+4*a*a-4*a*s+s*s,u=9*r*i-3*r*r-3*r*o-6*i*i+3*i*o+9*n*a-3*n*n-3*n*s-6*a*a+3*a*s,c=3*r*r-6*r*i+r*o-r*e+2*i*i+2*i*e-o*e+3*n*n-6*n*a+n*s-n*t+2*a*a+2*a*t-s*t,d=1*r*i-r*r+r*e-i*e+n*a-n*n+n*t-a*t,h=[];this.solveCubic(l,u,c,d,h);for(var p=1e-7,v=[],f=0;6>f;f+=2)Math.abs(h[f+1])<p&&h[f]>=0&&h[f]<=1&&v.push(h[f]);v.push(1),v.push(0);for(var g,y,m,b,x=-1,w=0;w<v.length;w++)y=Math.pow(1-v[w],2)*r+2*(1-v[w])*v[w]*i+v[w]*v[w]*o,m=Math.pow(1-v[w],2)*n+2*(1-v[w])*v[w]*a+v[w]*v[w]*s,b=Math.pow(y-e,2)+Math.pow(m-t,2),x>=0?x>b&&(x=b,g=v[w]):(x=b,g=v[w]);return x},n.sqDistanceToFiniteLine=function(e,t,r,n,i,a){var o=[e-r,t-n],s=[i-r,a-n],l=s[0]*s[0]+s[1]*s[1],u=o[0]*o[0]+o[1]*o[1],c=o[0]*s[0]+o[1]*s[1],d=c*c/l;return 0>c?u:d>l?(e-i)*(e-i)+(t-a)*(t-a):u-d},n.pointInsidePolygonPoints=function(e,t,r){for(var n,i,a,o,s,l=0,u=0,c=0;c<r.length/2;c++)if(n=r[2*c],i=r[2*c+1],c+1<r.length/2?(a=r[2*(c+1)],o=r[2*(c+1)+1]):(a=r[2*(c+1-r.length/2)],o=r[2*(c+1-r.length/2)+1]),n==e&&a==e);else{if(!(n>=e&&e>=a||e>=n&&a>=e))continue;s=(e-n)/(a-n)*(o-i)+i,s>t&&l++,t>s&&u++}return l%2===0?!1:!0},n.pointInsidePolygon=function(e,t,r,i,a,o,s,l,u){var c,d=new Array(r.length);null!=l[0]?(c=Math.atan(l[1]/l[0]),l[0]<0?c+=Math.PI/2:c=-c-Math.PI/2):c=l;for(var h=Math.cos(-c),p=Math.sin(-c),v=0;v<d.length/2;v++)d[2*v]=o/2*(r[2*v]*h-r[2*v+1]*p),d[2*v+1]=s/2*(r[2*v+1]*h+r[2*v]*p),d[2*v]+=i,d[2*v+1]+=a;var f;if(u>0){var g=this.expandPolygon(d,-u);f=this.joinLines(g)}else f=d;return n.pointInsidePolygonPoints(e,t,f)},n.joinLines=function(e){for(var t,r,n,i,a,o,s,l,u=new Array(e.length/2),c=0;c<e.length/4;c++){t=e[4*c],r=e[4*c+1],n=e[4*c+2],i=e[4*c+3],c<e.length/4-1?(a=e[4*(c+1)],o=e[4*(c+1)+1],s=e[4*(c+1)+2],l=e[4*(c+1)+3]):(a=e[0],o=e[1],s=e[2],l=e[3]);var d=this.finiteLinesIntersect(t,r,n,i,a,o,s,l,!0);u[2*c]=d[0],u[2*c+1]=d[1]}return u},n.expandPolygon=function(e,t){for(var r,n,i,a,o=new Array(2*e.length),s=0;s<e.length/2;s++){r=e[2*s],n=e[2*s+1],s<e.length/2-1?(i=e[2*(s+1)],a=e[2*(s+1)+1]):(i=e[0],a=e[1]);var l=a-n,u=-(i-r),c=Math.sqrt(l*l+u*u),d=l/c,h=u/c;o[4*s]=r+d*t,o[4*s+1]=n+h*t,o[4*s+2]=i+d*t,o[4*s+3]=a+h*t}return o},n.intersectLineEllipse=function(e,t,r,n,i,a){var o=r-e,s=n-t;o/=i,s/=a;var l=Math.sqrt(o*o+s*s),u=l-1;if(0>u)return[];var c=u/l;return[(r-e)*c+e,(n-t)*c+t]},n.intersectLineCircle=function(e,t,r,n,i,a,o){var s=[r-e,n-t],l=[i,a],u=[e-i,t-a],c=s[0]*s[0]+s[1]*s[1],d=2*(u[0]*s[0]+u[1]*s[1]),l=u[0]*u[0]+u[1]*u[1]-o*o,h=d*d-4*c*l;if(0>h)return[];var p=(-d+Math.sqrt(h))/(2*c),v=(-d-Math.sqrt(h))/(2*c),f=Math.min(p,v),g=Math.max(p,v),y=[];if(f>=0&&1>=f&&y.push(f),g>=0&&1>=g&&y.push(g),0===y.length)return[];var m=y[0]*s[0]+e,b=y[0]*s[1]+t;if(y.length>1){if(y[0]==y[1])return[m,b];var x=y[1]*s[0]+e,w=y[1]*s[1]+t;return[m,b,x,w]}return[m,b]},n.findCircleNearPoint=function(e,t,r,n,i){var a=n-e,o=i-t,s=Math.sqrt(a*a+o*o),l=a/s,u=o/s;return[e+l*r,t+u*r]},n.findMaxSqDistanceToOrigin=function(e){for(var t,r=1e-6,n=0;n<e.length/2;n++)t=e[2*n]*e[2*n]+e[2*n+1]*e[2*n+1],t>r&&(r=t);return r},n.finiteLinesIntersect=function(e,t,r,n,i,a,o,s,l){var u=(o-i)*(t-a)-(s-a)*(e-i),c=(r-e)*(t-a)-(n-t)*(e-i),d=(s-a)*(r-e)-(o-i)*(n-t);if(0!==d){var h=u/d,p=c/d;return h>=0&&1>=h&&p>=0&&1>=p?[e+h*(r-e),t+h*(n-t)]:l?[e+h*(r-e),t+h*(n-t)]:[]}return 0===u||0===c?[e,r,o].sort()[1]===o?[o,s]:[e,r,i].sort()[1]===i?[i,a]:[i,o,r].sort()[1]===r?[r,n]:[]:[]},n.polygonIntersectLine=function(e,t,r,i,a,o,s,l){for(var u,c=[],d=new Array(r.length),h=0;h<d.length/2;h++)d[2*h]=r[2*h]*o+i,d[2*h+1]=r[2*h+1]*s+a;var p;if(l>0){var v=n.expandPolygon(d,-l);p=n.joinLines(v)}else p=d;for(var f,g,y,m,h=0;h<p.length/2;h++)f=p[2*h],g=p[2*h+1],h<p.length/2-1?(y=p[2*(h+1)],m=p[2*(h+1)+1]):(y=p[0],m=p[1]),u=this.finiteLinesIntersect(e,t,i,a,f,g,y,m),0!==u.length&&c.push(u[0],u[1]);return c},n.shortenIntersection=function(e,t,r){var n=[e[0]-t[0],e[1]-t[1]],i=Math.sqrt(n[0]*n[0]+n[1]*n[1]),a=(i-r)/i;return 0>a&&(a=1e-5),[t[0]+a*n[0],t[1]+a*n[1]]},n.generateUnitNgonPointsFitToSquare=function(e,t){var r=n.generateUnitNgonPoints(e,t);return r=n.fitPolygonToSquare(r)},n.fitPolygonToSquare=function(e){for(var t,r,n=e.length/2,i=1/0,a=1/0,o=-(1/0),s=-(1/0),l=0;n>l;l++)t=e[2*l],r=e[2*l+1],i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);for(var u=2/(o-i),c=2/(s-a),l=0;n>l;l++)t=e[2*l]=e[2*l]*u,r=e[2*l+1]=e[2*l+1]*c,i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);if(-1>a)for(var l=0;n>l;l++)r=e[2*l+1]=e[2*l+1]+(-1-a);return e},n.generateUnitNgonPoints=function(e,t){var r=1/e*2*Math.PI,n=e%2===0?Math.PI/2+r/2:Math.PI/2;n+=t;for(var i,a,o,s=new Array(2*e),l=0;e>l;l++)i=l*r+n,a=s[2*l]=Math.cos(i),o=s[2*l+1]=Math.sin(-i);return s},n.getRoundRectangleRadius=function(e,t){return Math.min(e/4,t/4,8)},t.exports=n},{}],80:[function(e,t,r){"use strict";var n=0,i=1,a=2,o=function(e){return this instanceof o?(this.id="Thenable/1.0.7",this.state=n,this.fulfillValue=void 0,this.rejectReason=void 0,this.onFulfilled=[],this.onRejected=[],this.proxy={then:this.then.bind(this)},void("function"==typeof e&&e.call(this,this.fulfill.bind(this),this.reject.bind(this)))):new o(e)};o.prototype={fulfill:function(e){return s(this,i,"fulfillValue",e)},reject:function(e){return s(this,a,"rejectReason",e)},then:function(e,t){var r=this,n=new o;return r.onFulfilled.push(c(e,n,"fulfill")),r.onRejected.push(c(t,n,"reject")),l(r),n.proxy}};var s=function(e,t,r,i){return e.state===n&&(e.state=t,e[r]=i,l(e)),e},l=function(e){e.state===i?u(e,"onFulfilled",e.fulfillValue):e.state===a&&u(e,"onRejected",e.rejectReason)},u=function(e,t,r){if(0!==e[t].length){var n=e[t];e[t]=[];var i=function(){for(var e=0;e<n.length;e++)n[e](r)};"function"==typeof setImmediate?setImmediate(i):setTimeout(i,0)}},c=function(e,t,r){return function(n){if("function"!=typeof e)t[r].call(t,n);else{var i;try{i=e(n)}catch(a){return void t.reject(a)}d(t,i)}}},d=function(e,t){if(e===t||e.proxy===t)return void e.reject(new TypeError("cannot resolve promise with itself"));var r;if("object"==typeof t&&null!==t||"function"==typeof t)try{r=t.then}catch(n){return void e.reject(n)}if("function"!=typeof r)e.fulfill(t);else{var i=!1;try{r.call(t,function(r){i||(i=!0,r===t?e.reject(new TypeError("circular thenable chain")):d(e,r))},function(t){i||(i=!0,e.reject(t))})}catch(n){i||e.reject(n)}}},h="undefined"==typeof h?o:h;h.all=h.all||function(e){return new h(function(t,r){for(var n=new Array(e.length),i=0,a=function(r,a){n[r]=a,i++,i===e.length&&t(n)},o=0;o<e.length;o++)!function(t){var n=e[t],i=null!=n.then;if(i)n.then(function(e){a(t,e)},function(e){r(e)});else{var o=n;a(t,o)}}(o)})},t.exports=h},{}],81:[function(e,t,r){"use strict";var n=e("./is"),i=e("./util"),a=function(e,t){if(!(this instanceof a))return new a(e,t);void 0===t&&void 0!==e&&(t=e,e=void 0);var r=this;if(r._private={selectorText:null,invalid:!0},!t||n.string(t)&&t.match(/^\s*$/))null==e?r.length=0:(r[0]=l(),r[0].group=e,r.length=1);else if(n.elementOrCollection(t)){var o=t.collection();r[0]=l(),r[0].collection=o,r.length=1}else if(n.fn(t))r[0]=l(),r[0].filter=t,r.length=1;else{if(!n.string(t))return void i.error("A selector must be created from a string; found "+t);var s=null,l=function(){return{classes:[],colonSelectors:[],data:[],group:null,ids:[],meta:[],collection:null,filter:null,parent:null,ancestor:null,subject:null,child:null,descendant:null}},u={metaChar:"[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",comparatorOp:"=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",boolOp:"\\?|\\!|\\^",string:'"(?:\\\\"|[^"])+"|'+"'(?:\\\\'|[^'])+'",number:i.regex.number,meta:"degree|indegree|outdegree",separator:"\\s*,\\s*",descendant:"\\s+",child:"\\s+>\\s+",subject:"\\$"};u.variable="(?:[\\w-]|(?:\\\\"+u.metaChar+"))+",u.value=u.string+"|"+u.number,u.className=u.variable,u.id=u.variable;for(var c=function(e){return e.replace(new RegExp("\\\\("+u.metaChar+")","g"),function(e,t,r,n){return t})},d=u.comparatorOp.split("|"),h=0;h<d.length;h++){var p=d[h];u.comparatorOp+="|@"+p}for(var d=u.comparatorOp.split("|"),h=0;h<d.length;h++){var p=d[h];p.indexOf("!")>=0||"="!==p&&(u.comparatorOp+="|\\!"+p)}var v=[{name:"group",query:!0,regex:"(node|edge|\\*)",populate:function(e){this.group="*"==e?e:e+"s"}},{name:"state",query:!0,regex:"(:selected|:unselected|:locked|:unlocked|:visible|:hidden|:transparent|:grabbed|:free|:removed|:inside|:grabbable|:ungrabbable|:animated|:unanimated|:selectable|:unselectable|:orphan|:nonorphan|:parent|:child|:loop|:simple|:active|:inactive|:touch|:backgrounding|:nonbackgrounding)",populate:function(e){this.colonSelectors.push(e)}},{name:"id",query:!0,regex:"\\#("+u.id+")",populate:function(e){this.ids.push(c(e))}},{name:"className",query:!0,regex:"\\.("+u.className+")",populate:function(e){this.classes.push(c(e))}},{name:"dataExists",query:!0,regex:"\\[\\s*("+u.variable+")\\s*\\]",populate:function(e){this.data.push({field:c(e)})}},{name:"dataCompare",query:!0,regex:"\\[\\s*("+u.variable+")\\s*("+u.comparatorOp+")\\s*("+u.value+")\\s*\\]",populate:function(e,t,r){var n=null!=new RegExp("^"+u.string+"$").exec(r);r=n?r.substring(1,r.length-1):parseFloat(r),this.data.push({field:c(e),operator:t,value:r})}},{name:"dataBool",query:!0,regex:"\\[\\s*("+u.boolOp+")\\s*("+u.variable+")\\s*\\]",populate:function(e,t){this.data.push({field:c(t),operator:e})}},{name:"metaCompare",query:!0,regex:"\\[\\[\\s*("+u.meta+")\\s*("+u.comparatorOp+")\\s*("+u.number+")\\s*\\]\\]",populate:function(e,t,r){this.meta.push({field:c(e),operator:t,value:parseFloat(r)})}},{name:"nextQuery",separator:!0,regex:u.separator,populate:function(){r[++h]=l(),s=null}},{name:"child",separator:!0,regex:u.child,populate:function(){var e=l();e.parent=this,e.subject=s,r[h]=e}},{name:"descendant",separator:!0,regex:u.descendant,populate:function(){var e=l();e.ancestor=this,e.subject=s,r[h]=e}},{name:"subject",modifier:!0,regex:u.subject,populate:function(){return null!=s&&this.subject!=this?(i.error("Redefinition of subject in selector `"+t+"`"),!1):(s=this,void(this.subject=this))}}];r._private.selectorText=t;var f=t,h=0,g=function(e){for(var t,r,i,a=0;a<v.length;a++){var o=v[a],s=o.name;if(!n.fn(e)||e(s,o)){var l=f.match(new RegExp("^"+o.regex));if(null!=l){r=l,t=o,i=s;var u=l[0];f=f.substring(u.length);break}}}return{expr:t,match:r,name:i}},y=function(){var e=f.match(/^\s+/);if(e){var t=e[0];f=f.substring(t.length)}};for(r[0]=l(),y();;){var m=g();if(null==m.expr)return void i.error("The selector `"+t+"`is invalid");for(var b=[],x=1;x<m.match.length;x++)b.push(m.match[x]);var w=m.expr.populate.apply(r[h],b);if(w===!1)return;if(f.match(/^\s*$/))break}r.length=h+1;for(var x=0;x<r.length;x++){var _=r[x];if(null!=_.subject){for(;_.subject!=_;)if(null!=_.parent){var E=_.parent,D=_;D.parent=null,E.child=D,_=E}else{if(null==_.ancestor){i.error("When adjusting references for the selector `"+_+"`, neither parent nor ancestor was found");break}var k=_.ancestor,T=_;T.ancestor=null,k.descendant=T,_=k}r[x]=_.subject}}if(null!=e)for(var x=0;x<r.length;x++){if(null!=r[x].group&&r[x].group!=e)return void i.error("Group `"+r[x].group+"` conflicts with implicit group `"+e+"` in selector `"+t+"`");r[x].group=e}}r._private.invalid=!1},o=a.prototype;o.size=function(){return this.length},o.eq=function(e){return this[e]};var s=function(e,t){if(null!=e.group&&"*"!=e.group&&e.group!=t._private.group)return!1;for(var r=t.cy(),i=!0,a=0;a<e.colonSelectors.length;a++){var o=e.colonSelectors[a];switch(o){case":selected":i=t.selected();break;case":unselected":i=!t.selected();break;case":selectable":i=t.selectable();break;case":unselectable":i=!t.selectable();break;case":locked":i=t.locked();break;case":unlocked":i=!t.locked();break;case":visible":i=t.visible();break;case":hidden":i=!t.visible();break;case":transparent":i=t.transparent();break;case":grabbed":i=t.grabbed();break;case":free":i=!t.grabbed();break;case":removed":i=t.removed();break;case":inside":i=!t.removed();break;case":grabbable":i=t.grabbable();break;case":ungrabbable":i=!t.grabbable();break;case":animated":i=t.animated();break;case":unanimated":i=!t.animated();break;case":parent":i=t.isNode()&&t.children().nonempty();break;case":child":case":nonorphan":i=t.isNode()&&t.parent().nonempty();break;case":orphan":i=t.isNode()&&t.parent().empty();break;case":loop":i=t.isEdge()&&t.data("source")===t.data("target");break;case":simple":i=t.isEdge()&&t.data("source")!==t.data("target");break;case":active":i=t.active();break;case":inactive":i=!t.active();break;case":touch":i=n.touch();break;case":backgrounding":i=t.backgrounding();break;case":nonbackgrounding":i=!t.backgrounding()}if(!i)break}if(!i)return!1;for(var l=!0,a=0;a<e.ids.length;a++){var u=e.ids[a],c=t._private.data.id;if(l=l&&u==c,!l)break}if(!l)return!1;for(var d=!0,a=0;a<e.classes.length;a++){var h=e.classes[a];if(d=d&&t.hasClass(h),!d)break}if(!d)return!1;var p=function(t){for(var r=!0,i=0;i<e[t.name].length;i++){var a,o=e[t.name][i],s=o.operator,l=o.value,u=o.field;if(null!=s&&null!=l){var c=t.fieldValue(u),d=n.string(c)||n.number(c)?""+c:"",h=""+l,p=!1;s.indexOf("@")>=0&&(d=d.toLowerCase(),h=h.toLowerCase(),s=s.replace("@",""),p=!0);var v=!1,f=!1;switch(s.indexOf("!")>=0&&(s=s.replace("!",""),v=!0),p&&(l=h.toLowerCase(),c=d.toLowerCase()),s){case"*=":a=d.search(h)>=0;break;case"$=":a=null!=new RegExp(h+"$").exec(d);break;case"^=":a=null!=new RegExp("^"+h).exec(d);break;case"=":a=c===l;break;case"!=":a=c!==l;break;case">":a=v?l>=c:c>l,f=!0;break;case">=":a=v?l>c:c>=l,f=!0;break;case"<":a=v?c>=l:l>c,f=!0;break;case"<=":a=v?c>l:l>=c,f=!0;break;default:a=!1}}else if(null!=s)switch(s){case"?":a=t.fieldTruthy(u);break;case"!":a=!t.fieldTruthy(u);break;case"^":a=t.fieldUndefined(u)}else a=!t.fieldUndefined(u);if(v&&!f&&(a=!a,f=!0),!a){r=!1;break}}return r},v=p({name:"data",fieldValue:function(e){return t._private.data[e]},fieldRef:function(e){return"element._private.data."+e},fieldUndefined:function(e){return void 0===t._private.data[e]},fieldTruthy:function(e){return t._private.data[e]?!0:!1}});if(!v)return!1;var f=p({name:"meta",fieldValue:function(e){return t[e]()},fieldRef:function(e){return"element."+e+"()"},fieldUndefined:function(e){return null==t[e]()},fieldTruthy:function(e){return t[e]()?!0:!1}});if(!f)return!1;if(null!=e.collection){var g=null!=e.collection._private.ids[t.id()];if(!g)return!1}if(null!=e.filter&&0===t.collection().filter(e.filter).size())return!1;var y=function(e,t){if(null!=e){var n=!1;if(!r.hasCompoundNodes())return!1;t=t();for(var i=0;i<t.length;i++)if(s(e,t[i])){n=!0;break}return n}return!0};return y(e.parent,function(){return t.parent()})&&y(e.ancestor,function(){return t.parents()})&&y(e.child,function(){return t.children()})&&y(e.descendant,function(){return t.descendants()})?!0:!1};o.filter=function(e){var t=this,r=e.cy();if(t._private.invalid)return r.collection();var n=function(e,r){for(var n=0;n<t.length;n++){var i=t[n];if(s(i,r))return!0}return!1};null==t._private.selectorText&&(n=function(){return!0});var i=e.filter(n);return i},o.matches=function(e){var t=this;if(t._private.invalid)return!1;for(var r=0;r<t.length;r++){var n=t[r];if(s(n,e))return!0}return!1},o.toString=o.selector=function(){for(var e="",t=function(e,t){return n.string(e)?t?'"'+e+'"':e:""},r=function(e){var n="";e.subject===e&&(n+="$");var a=t(e.group);n+=a.substring(0,a.length-1);for(var o=0;o<e.data.length;o++){var s=e.data[o];n+=s.value?"["+s.field+t(s.operator)+t(s.value,!0)+"]":"["+t(s.operator)+s.field+"]"}for(var o=0;o<e.meta.length;o++){var l=e.meta[o];n+="[["+l.field+t(l.operator)+t(l.value,!0)+"]]"}for(var o=0;o<e.colonSelectors.length;o++){var u=e.colonSelectors[i];n+=u}for(var o=0;o<e.ids.length;o++){var u="#"+e.ids[i];n+=u}for(var o=0;o<e.classes.length;o++){var u="."+e.classes[o];n+=u}return null!=e.parent&&(n=r(e.parent)+" > "+n),null!=e.ancestor&&(n=r(e.ancestor)+" "+n),null!=e.child&&(n+=" > "+r(e.child)),null!=e.descendant&&(n+=" "+r(e.descendant)),n},i=0;i<this.length;i++){var a=this[i];e+=r(a),this.length>1&&i<this.length-1&&(e+=", ")}return e},t.exports=a},{"./is":77,"./util":94}],82:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a={};a.apply=function(e){var t=this;t._private.newStyle&&(this._private.contextStyles={},this._private.propDiffs={});for(var r=0;r<e.length;r++){var n=e[r],i=t.getContextMeta(n),a=t.getContextStyle(i),o=t.applyContextStyle(i,a,n);t.updateTransitions(n,o.diffProps),t.updateStyleHints(n)}t._private.newStyle=!1},a.getPropertiesDiff=function(e,t){var r=this,n=r._private.propDiffs=r._private.propDiffs||{},i=e+"-"+t,a=n[i];if(a)return a;for(var o=[],s={},l=0;l<r.length;l++){var u=r[l],c="t"===e[l],d="t"===t[l],h=c!==d,p=u.mappedProperties.length>0;if(h||p){var v;h&&p?v=u.properties:h?v=u.properties:p&&(v=u.mappedProperties);for(var f=0;f<v.length;f++){for(var g=v[f],y=g.name,m=!1,b=l+1;b<r.length;b++){var x=r[b],w="t"===t[b];if(w&&(m=null!=x.properties[g.name]))break}s[y]||m||(s[y]=!0,o.push(y))}}}return n[i]=o,o},a.getContextMeta=function(e){var t,r=this,n="",i=e._private.styleCxtKey||"";r._private.newStyle&&(i="");for(var a=0;a<r.length;a++){var o=r[a],s=o.selector&&o.selector.matches(e);n+=s?"t":"f"}return t=r.getPropertiesDiff(i,n),e._private.styleCxtKey=n,{key:n,diffPropNames:t}},a.getContextStyle=function(e){var t=e.key,r=this,n=this._private.contextStyles=this._private.contextStyles||{};if(n[t])return n[t];for(var i={_private:{key:t}},a=0;a<r.length;a++){var o=r[a],s="t"===t[a];if(s)for(var l=0;l<o.properties.length;l++){var u=o.properties[l],c=i[u.name]=u;c.context=o}}return n[t]=i,i},a.applyContextStyle=function(e,t,r){for(var n=this,i=e.diffPropNames,a={},o=0;o<i.length;o++){var s=i[o],l=t[s],u=r._private.style[s];if(l&&u!==l){var c=a[s]={prev:u};n.applyParsedProperty(r,l),c.next=r._private.style[s],c.next&&c.next.bypass&&(c.next=c.next.bypassed)}}return{diffProps:a}},a.updateStyleHints=function(e){var t=e._private,r=this,n=t.style;if(!e.removed()){var i=!1;if("nodes"===t.group&&r._private.hasPie)for(var a=1;a<=r.pieBackgroundN;a++){var o=t.style["pie-"+a+"-background-size"].value;if(o>0){i=!0;break}}t.hasPie=i;var s=n["text-transform"].strValue,l=n.label.strValue,u=n["font-style"].strValue,o=n["font-size"].pfValue+"px",c=n["font-family"].strValue,d=n["font-weight"].strValue,h=n["text-valign"].strValue,p=n["text-valign"].strValue,v=n["text-outline-width"].pfValue,f=n["text-wrap"].strValue,g=n["text-max-width"].pfValue;t.labelKey=u+"$"+o+"$"+c+"$"+d+"$"+l+"$"+s+"$"+h+"$"+p+"$"+v+"$"+f+"$"+g,t.fontKey=u+"$"+d+"$"+o+"$"+c;var y=n.width.pfValue,m=n.height.pfValue,b=n["border-width"].pfValue;if(t.boundingBoxKey=y+"$"+m+"$"+b,"edges"===e._private.group){var x=n["control-point-step-size"].pfValue,w=n["control-point-distances"]?n["control-point-distances"].pfValue.join("_"):void 0,_=n["control-point-weights"].value.join("_"),E=n["curve-style"].strValue;t.boundingBoxKey+="$"+x+"$"+w+"$"+_+"$"+E}t.styleKey=Date.now()}},a.applyParsedProperty=function(e,t){var r,a,o=this,s=t,l=e._private.style,u=o.types,c=o.properties[s.name].type,d=s.bypass,h=l[s.name],p=h&&h.bypass,v=e._private;if(("height"===t.name||"width"===t.name)&&e.isNode()){if("auto"===t.value&&!e.isParent())return!1;"auto"!==t.value&&e.isParent()&&(s=t=this.parse(t.name,"auto",d))}if(d&&s.deleteBypass){var f=l[s.name];return f?f.bypass&&f.bypassed?(l[s.name]=f.bypassed,!0):!1:!0}var g=function(){n.error("Do not assign mappings to elements without corresponding data (e.g. ele `"+e.id()+"` for property `"+s.name+"` with data field `"+s.field+"`); try a `["+s.field+"]` selector to limit scope to elements with `"+s.field+"` defined")};switch(s.mapped){case u.mapData:case u.mapLayoutData:case u.mapScratch:var r,y=s.mapped===u.mapLayoutData,m=s.mapped===u.mapScratch,b=s.field.split(".");r=m||y?v.scratch:v.data;for(var x=0;x<b.length&&r;x++){var w=b[x];r=r[w]}var _;if(_=i.number(r)?(r-s.fieldMin)/(s.fieldMax-s.fieldMin):0,0>_?_=0:_>1&&(_=1),c.color){var E=s.valueMin[0],D=s.valueMax[0],k=s.valueMin[1],T=s.valueMax[1],S=s.valueMin[2],P=s.valueMax[2],C=null==s.valueMin[3]?1:s.valueMin[3],N=null==s.valueMax[3]?1:s.valueMax[3],M=[Math.round(E+(D-E)*_),Math.round(k+(T-k)*_),Math.round(S+(P-S)*_),Math.round(C+(N-C)*_)];a={bypass:s.bypass,name:s.name,value:M,strValue:"rgb("+M[0]+", "+M[1]+", "+M[2]+")"}}else{if(!c.number)return!1;var B=s.valueMin+(s.valueMax-s.valueMin)*_;a=this.parse(s.name,B,s.bypass,!0)}a||(a=this.parse(s.name,h.strValue,s.bypass,!0)),a||g(),a.mapping=s,s=a;break;case u.data:case u.layoutData:case u.scratch:var r,y=s.mapped===u.layoutData,m=s.mapped===u.scratch,b=s.field.split(".");if(r=m||y?v.scratch:v.data)for(var x=0;x<b.length;x++){var w=b[x];r=r[w]}if(a=this.parse(s.name,r,s.bypass,!0),!a){var z=h?h.strValue:"";a=this.parse(s.name,z,s.bypass,!0)}a||g(),a.mapping=s,s=a;break;case u.fn:var O=s.value,I=O(e);a=this.parse(s.name,I,s.bypass,!0),a.mapping=s,s=a;break;case void 0:break;default:return!1}return d?(p?s.bypassed=h.bypassed:s.bypassed=h,l[s.name]=s):p?h.bypassed=s:l[s.name]=s,!0},a.update=function(){var e=this._private.cy,t=e.elements();t.updateStyle()},a.updateMappers=function(e){for(var t=this,r=0;r<e.length;r++){for(var n=e[r],i=n._private.style,a=0;a<t.properties.length;a++){var o=t.properties[a],s=i[o.name];if(s&&s.mapping){var l=s.mapping;this.applyParsedProperty(n,l)}}this.updateStyleHints(n)}},a.updateTransitions=function(e,t,r){var n=this,a=e._private,o=a.style,s=o["transition-property"].value,l=o["transition-duration"].pfValue,u=o["transition-delay"].pfValue,c={};if(s.length>0&&l>0){for(var d=!1,h=0;h<s.length;h++){var p=s[h],v=o[p],f=t[p];if(f){var g,y=f.prev,m=y,b=null!=f.next?f.next:v,x=!1,w=1e-6;m&&(i.number(m.pfValue)&&i.number(b.pfValue)?(x=b.pfValue-m.pfValue,g=m.pfValue+w*x):i.number(m.value)&&i.number(b.value)?(x=b.value-m.value,g=m.value+w*x):i.array(m.value)&&i.array(b.value)&&(x=m.value[0]!==b.value[0]||m.value[1]!==b.value[1]||m.value[2]!==b.value[2],g=m.strValue),x&&(c[p]=b.strValue,this.applyBypass(e,p,g),d=!0))}}if(!d)return;a.transitioning=!0,e.stop(),u>0&&e.delay(u),e.animate({css:c},{duration:l,easing:o["transition-timing-function"].value,queue:!1,complete:function(){r||n.removeBypasses(e,s),a.transitioning=!1}})}else a.transitioning&&(e.stop(),this.removeBypasses(e,s),a.transitioning=!1)},t.exports=a},{"../is":77,"../util":94}],83:[function(e,t,r){"use strict";var n=e("../is"),i=e("../util"),a={};a.applyBypass=function(e,t,r,a){var o=this,s=[],l=!0;if("*"===t||"**"===t){if(void 0!==r)for(var u=0;u<o.properties.length;u++){var c=o.properties[u],t=c.name,d=this.parse(t,r,!0);d&&s.push(d)}}else if(n.string(t)){var d=this.parse(t,r,!0);d&&s.push(d)}else{if(!n.plainObject(t))return!1;var h=t;a=r;for(var u=0;u<o.properties.length;u++){var c=o.properties[u],t=c.name,r=h[t];if(void 0===r&&(r=h[i.dash2camel(t)]),void 0!==r){var d=this.parse(t,r,!0);d&&s.push(d)}}}if(0===s.length)return!1;for(var p=!1,u=0;u<e.length;u++){for(var v,f=e[u],g=f._private.style,y={},m=0;m<s.length;m++){var c=s[m];if(a){var b=g[c.name];v=y[c.name]={prev:b}}p=this.applyParsedProperty(f,c)||p,a&&(v.next=g[c.name])}p&&this.updateStyleHints(f),a&&this.updateTransitions(f,y,l)}return p},a.overrideBypass=function(e,t,r){t=i.camel2dash(t);for(var n=0;n<e.length;n++){var a=e[n],o=a._private.style[t],s=this.properties[t].type,l=s.color,u=s.mutiple;o.bypass?(o.value=r,null!=o.pfValue&&(o.pfValue=r),l?o.strValue="rgb("+r.join(",")+")":u?o.strValue=r.join(" "):o.strValue=""+r):this.applyBypass(a,t,r)}},a.removeAllBypasses=function(e,t){return this.removeBypasses(e,this.propertyNames,t)},a.removeBypasses=function(e,t,r){for(var n=!0,i=0;i<e.length;i++){for(var a=e[i],o={},s=a._private.style,l=0;l<t.length;l++){var u=t[l],c=this.properties[u],d="",h=this.parse(u,d,!0),p=s[c.name],v=o[c.name]={prev:p};this.applyParsedProperty(a,h),v.next=s[c.name]}this.updateStyleHints(a),r&&this.updateTransitions(a,o,n)}},t.exports=a},{"../is":77,"../util":94}],84:[function(e,t,r){"use strict";var n=e("../window"),i={};i.getEmSizeInPixels=function(){var e=this.containerCss("font-size");return null!=e?parseFloat(e):1},i.containerCss=function(e){var t=this._private.cy,r=t.container();return n&&r&&n.getComputedStyle?n.getComputedStyle(r).getPropertyValue(e):void 0},t.exports=i},{"../window":100}],85:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a={};a.getRenderedStyle=function(e){var t=this,e=e[0];if(e){for(var r={},i=e._private.style,a=this._private.cy,o=a.zoom(),s=0;s<t.properties.length;s++){var l=t.properties[s],u=i[l.name];if(u){var c=u.unitless?u.strValue:u.pfValue*o+"px";r[l.name]=c,r[n.dash2camel(l.name)]=c}}return r}},a.getRawStyle=function(e){var t=this,e=e[0];if(e){for(var r={},i=e._private.style,a=0;a<t.properties.length;a++){var o=t.properties[a],s=i[o.name];s&&(r[o.name]=s.strValue,r[n.dash2camel(o.name)]=s.strValue)}return r}},a.getValueStyle=function(e){var t,r=this,a={},o=i.element(e);if(t=o?e._private.style:e)for(var s=0;s<r.properties.length;s++){var l=r.properties[s],u=t[l.name]||t[n.dash2camel(l.name)];void 0!==u&&(u=i.plainObject(u)?this.parse(l.name,u.strValue):this.parse(l.name,u)),u&&(a[l.name]=u,a[n.dash2camel(l.name)]=u)}return a},a.getPropsList=function(e){var t=this,r=[],i=e,a=t.properties;if(i)for(var o in i){var s=i[o],l=a[o]||a[n.camel2dash(o)],u=this.parse(l.name,s);r.push(u)}return r},t.exports=a},{"../is":77,"../util":94}],86:[function(e,t,r){"use strict";var n=e("../is"),i=e("../util"),a=e("../selector"),o=function(e){return this instanceof o?n.core(e)?(this._private={cy:e,coreStyle:{},newStyle:!0},this.length=0,void this.addDefaultStylesheet()):void i.error("A style must have a core reference"):new o(e)},s=o.prototype;s.instanceString=function(){return"style"},s.clear=function(){for(var e=0;e<this.length;e++)this[e]=void 0;return this.length=0,this._private.newStyle=!0,this},s.resetToDefault=function(){return this.clear(),this.addDefaultStylesheet(),this},s.core=function(){return this._private.coreStyle},s.selector=function(e){var t="core"===e?null:new a(e),r=this.length++;return this[r]={selector:t,properties:[],mappedProperties:[],index:r},this},s.css=function(){var e=this,t=arguments;switch(t.length){case 1:for(var r=t[0],n=0;n<e.properties.length;n++){var a=e.properties[n],o=r[a.name];void 0===o&&(o=r[i.dash2camel(a.name)]),void 0!==o&&this.cssRule(a.name,o)}break;case 2:this.cssRule(t[0],t[1])}return this},s.style=s.css,s.cssRule=function(e,t){var r=this.parse(e,t);if(r){var n=this.length-1;this[n].properties.push(r),this[n].properties[r.name]=r,r.name.match(/pie-(\d+)-background-size/)&&r.value&&(this._private.hasPie=!0),r.mapped&&this[n].mappedProperties.push(r);var i=!this[n].selector;i&&(this._private.coreStyle[r.name]=r)}return this},o.fromJson=function(e,t){var r=new o(e);return r.fromJson(t),r},o.fromString=function(e,t){return new o(e).fromString(t)},[e("./apply"),e("./bypass"),e("./container"),e("./get-for-ele"),e("./json"),e("./string-sheet"),e("./properties"),e("./parse")].forEach(function(e){i.extend(s,e)}),o.types=s.types,o.properties=s.properties,t.exports=o},{"../is":77,"../selector":81,"../util":94,"./apply":82,"./bypass":83,"./container":84,"./get-for-ele":85,"./json":87,"./parse":88,"./properties":89,"./string-sheet":90}],87:[function(e,t,r){"use strict";var n={};n.applyFromJson=function(e){for(var t=this,r=0;r<e.length;r++){var n=e[r],i=n.selector,a=n.style||n.css;t.selector(i);for(var o in a){var s=a[o];t.css(o,s)}}return t},n.fromJson=function(e){var t=this;return t.resetToDefault(),t.applyFromJson(e),t},n.json=function(){for(var e=[],t=this.defaultLength;t<this.length;t++){for(var r=this[t],n=r.selector,i=r.properties,a={},o=0;o<i.length;o++){var s=i[o];a[s.name]=s.strValue}e.push({selector:n?n.toString():"core",style:a})}return e},t.exports=n},{}],88:[function(e,t,r){"use strict";var n=e("../util"),i=e("../is"),a={};a.parse=function(e,t,r,i){var a,s=[e,t,r,i].join("$"),l=this.propCache=this.propCache||{},u=o.bind(this);return(a=l[s])||(a=l[s]=u(e,t,r,i)),a=n.copy(a),a&&(a.value=n.copy(a.value)),a};var o=function(e,t,r,a){var o=this;e=n.camel2dash(e);var s=o.properties[e],l=t,u=o.types;if(!s)return null;if(void 0===t||null===t)return null;s.alias&&(s=s.pointsTo,e=s.name);var c=i.string(t);c&&(t=t.trim());var d=s.type;if(!d)return null;
if(r&&(""===t||null===t))return{name:e,value:t,bypass:!0,deleteBypass:!0};if(i.fn(t))return{name:e,value:t,strValue:"fn",mapped:u.fn,bypass:r};var h,p,v,f,g,y;if(!c||a);else{if((h=new RegExp(u.data.regex).exec(t))||(v=new RegExp(u.layoutData.regex).exec(t))||(g=new RegExp(u.scratch.regex).exec(t))){if(r)return!1;var m;return m=h?u.data:v?u.layoutData:u.scratch,h=h||v||g,{name:e,value:h,strValue:""+t,mapped:m,field:h[1],bypass:r}}if((p=new RegExp(u.mapData.regex).exec(t))||(f=new RegExp(u.mapLayoutData.regex).exec(t))||(y=new RegExp(u.mapScratch.regex).exec(t))){if(r)return!1;if(d.multiple)return!1;var m;if(m=p?u.mapData:f?u.mapLayoutData:u.mapScratch,p=p||f||y,!d.color&&!d.number)return!1;var b=this.parse(e,p[4]);if(!b||b.mapped)return!1;var x=this.parse(e,p[5]);if(!x||x.mapped)return!1;if(b.value===x.value)return!1;if(d.color){var w=b.value,_=x.value,E=!(w[0]!==_[0]||w[1]!==_[1]||w[2]!==_[2]||w[3]!==_[3]&&(null!=w[3]&&1!==w[3]||null!=_[3]&&1!==_[3]));if(E)return!1}return{name:e,value:p,strValue:""+t,mapped:m,field:p[1],fieldMin:parseFloat(p[2]),fieldMax:parseFloat(p[3]),valueMin:b.value,valueMax:x.value,bypass:r}}}if(d.multiple&&!a){var D;if(D=c?t.split(/\s+/):i.array(t)?t:[t],d.evenMultiple&&D.length%2!==0)return null;var k=D.map(function(t){var n=o.parse(e,t,r,!0);return null!=n.pfValue?n.pfValue:n.value});return{name:e,value:k,pfValue:k,strValue:k.join(" "),bypass:r,units:d.number&&!d.unitless?d.implicitUnits||"px":void 0}}var T=function(){for(var n=0;n<d.enums.length;n++){var i=d.enums[n];if(i===t)return{name:e,value:t,strValue:""+t,bypass:r}}return null};if(d.number){var S,P="px";if(d.units&&(S=d.units),d.implicitUnits&&(P=d.implicitUnits),!d.unitless)if(c){var C="px|em"+(d.allowPercent?"|\\%":"");S&&(C=S);var N=t.match("^("+n.regex.number+")("+C+")?$");N&&(t=N[1],S=N[2]||P)}else(!S||d.implicitUnits)&&(S=P);if(t=parseFloat(t),isNaN(t)&&void 0===d.enums)return null;if(isNaN(t)&&void 0!==d.enums)return t=l,T();if(d.integer&&!i.integer(t))return null;if(void 0!==d.min&&t<d.min||void 0!==d.max&&t>d.max)return null;var M={name:e,value:t,strValue:""+t+(S?S:""),units:S,bypass:r};return d.unitless||"px"!==S&&"em"!==S||(M.pfValue="px"!==S&&S?this.getEmSizeInPixels()*t:t),("ms"===S||"s"===S)&&(M.pfValue="ms"===S?t:1e3*t),("deg"===S||"rad"===S)&&(M.pfValue="rad"===S?t:t*Math.PI/180),M}if(d.propList){var B=[],z=""+t;if("none"===z);else{for(var O=z.split(","),I=0;I<O.length;I++){var L=O[I].trim();o.properties[L]&&B.push(L)}if(0===B.length)return null}return{name:e,value:B,strValue:0===B.length?"none":B.join(", "),bypass:r}}if(d.color){var A=n.color2tuple(t);return A?{name:e,value:A,strValue:""+t,bypass:r,roundValue:!0}:null}if(d.regex||d.regexes){if(d.enums){var R=T();if(R)return R}for(var V=d.regexes?d.regexes:[d.regex],I=0;I<V.length;I++){var F=new RegExp(V[I]),j=F.exec(t);if(j)return{name:e,value:j,strValue:""+t,bypass:r}}return null}return d.string?{name:e,value:t,strValue:""+t,bypass:r}:d.enums?T():null};t.exports=a},{"../is":77,"../util":94}],89:[function(e,t,r){"use strict";var n=e("../util"),i={};!function(){var e=n.regex.number,t=n.regex.rgbaNoBackRefs,r=n.regex.hslaNoBackRefs,a=n.regex.hex3,o=n.regex.hex6,s=function(e){return"^"+e+"\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"},l=function(n){var i=e+"|\\w+|"+t+"|"+r+"|"+a+"|"+o;return"^"+n+"\\s*\\(([\\w\\.]+)\\s*\\,\\s*("+e+")\\s*\\,\\s*("+e+")\\s*,\\s*("+i+")\\s*\\,\\s*("+i+")\\)$"};i.types={time:{number:!0,min:0,units:"s|ms",implicitUnits:"ms"},percent:{number:!0,min:0,max:100,units:"%",implicitUnits:"%"},zeroOneNumber:{number:!0,min:0,max:1,unitless:!0},nOneOneNumber:{number:!0,min:-1,max:1,unitless:!0},nonNegativeInt:{number:!0,min:0,integer:!0,unitless:!0},position:{enums:["parent","origin"]},nodeSize:{number:!0,min:0,enums:["auto","label"]},number:{number:!0},numbers:{number:!0,multiple:!0},size:{number:!0,min:0},bgSize:{number:!0,min:0,allowPercent:!0},bgWH:{number:!0,min:0,allowPercent:!0,enums:["auto"]},bgPos:{number:!0,allowPercent:!0},bgRepeat:{enums:["repeat","repeat-x","repeat-y","no-repeat"]},bgFit:{enums:["none","contain","cover"]},bgClip:{enums:["none","node"]},color:{color:!0},bool:{enums:["yes","no"]},lineStyle:{enums:["solid","dotted","dashed"]},borderStyle:{enums:["solid","dotted","dashed","double"]},curveStyle:{enums:["bezier","unbundled-bezier","haystack","segments"]},fontFamily:{regex:'^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'},fontVariant:{enums:["small-caps","normal"]},fontStyle:{enums:["italic","normal","oblique"]},fontWeight:{enums:["normal","bold","bolder","lighter","100","200","300","400","500","600","800","900",100,200,300,400,500,600,700,800,900]},textDecoration:{enums:["none","underline","overline","line-through"]},textTransform:{enums:["none","uppercase","lowercase"]},textWrap:{enums:["none","wrap"]},textBackgroundShape:{enums:["rectangle","roundrectangle"]},nodeShape:{enums:["rectangle","roundrectangle","ellipse","triangle","square","pentagon","hexagon","heptagon","octagon","star","diamond","vee","rhomboid","polygon"]},compoundIncludeLabels:{enums:["include","exclude"]},arrowShape:{enums:["tee","triangle","triangle-tee","triangle-backcurve","half-triangle-overshot","vee","square","circle","diamond","none"]},arrowFill:{enums:["filled","hollow"]},display:{enums:["element","none"]},visibility:{enums:["hidden","visible"]},valign:{enums:["top","center","bottom"]},halign:{enums:["left","center","right"]},text:{string:!0},data:{mapping:!0,regex:s("data")},layoutData:{mapping:!0,regex:s("layoutData")},scratch:{mapping:!0,regex:s("scratch")},mapData:{mapping:!0,regex:l("mapData")},mapLayoutData:{mapping:!0,regex:l("mapLayoutData")},mapScratch:{mapping:!0,regex:l("mapScratch")},fn:{mapping:!0,fn:!0},url:{regex:"^url\\s*\\(\\s*([^\\s]+)\\s*\\s*\\)|none|(.+)$"},propList:{propList:!0},angle:{number:!0,units:"deg|rad",implicitUnits:"rad"},textRotation:{enums:["none","autorotate"]},polygonPointList:{number:!0,multiple:!0,evenMultiple:!0,min:-1,max:1,unitless:!0},easing:{regexes:["^(spring)\\s*\\(\\s*("+e+")\\s*,\\s*("+e+")\\s*\\)$","^(cubic-bezier)\\s*\\(\\s*("+e+")\\s*,\\s*("+e+")\\s*,\\s*("+e+")\\s*,\\s*("+e+")\\s*\\)$"],enums:["linear","ease","ease-in","ease-out","ease-in-out","ease-in-sine","ease-out-sine","ease-in-out-sine","ease-in-quad","ease-out-quad","ease-in-out-quad","ease-in-cubic","ease-out-cubic","ease-in-out-cubic","ease-in-quart","ease-out-quart","ease-in-out-quart","ease-in-quint","ease-out-quint","ease-in-out-quint","ease-in-expo","ease-out-expo","ease-in-out-expo","ease-in-circ","ease-out-circ","ease-in-out-circ"]}};var u=i.types,c=i.properties=[{name:"text-valign",type:u.valign},{name:"text-halign",type:u.halign},{name:"color",type:u.color},{name:"label",type:u.text},{name:"text-outline-color",type:u.color},{name:"text-outline-width",type:u.size},{name:"text-outline-opacity",type:u.zeroOneNumber},{name:"text-opacity",type:u.zeroOneNumber},{name:"text-background-color",type:u.color},{name:"text-background-opacity",type:u.zeroOneNumber},{name:"text-border-opacity",type:u.zeroOneNumber},{name:"text-border-color",type:u.color},{name:"text-border-width",type:u.size},{name:"text-border-style",type:u.borderStyle},{name:"text-background-shape",type:u.textBackgroundShape},{name:"text-transform",type:u.textTransform},{name:"text-wrap",type:u.textWrap},{name:"text-max-width",type:u.size},{name:"text-events",type:u.bool},{name:"font-family",type:u.fontFamily},{name:"font-style",type:u.fontStyle},{name:"font-weight",type:u.fontWeight},{name:"font-size",type:u.size},{name:"min-zoomed-font-size",type:u.size},{name:"edge-text-rotation",type:u.textRotation},{name:"events",type:u.bool},{name:"display",type:u.display},{name:"visibility",type:u.visibility},{name:"opacity",type:u.zeroOneNumber},{name:"z-index",type:u.nonNegativeInt},{name:"overlay-padding",type:u.size},{name:"overlay-color",type:u.color},{name:"overlay-opacity",type:u.zeroOneNumber},{name:"shadow-blur",type:u.size},{name:"shadow-color",type:u.color},{name:"shadow-opacity",type:u.zeroOneNumber},{name:"shadow-offset-x",type:u.number},{name:"shadow-offset-y",type:u.number},{name:"text-shadow-blur",type:u.size},{name:"text-shadow-color",type:u.color},{name:"text-shadow-opacity",type:u.zeroOneNumber},{name:"text-shadow-offset-x",type:u.number},{name:"text-shadow-offset-y",type:u.number},{name:"transition-property",type:u.propList},{name:"transition-duration",type:u.time},{name:"transition-delay",type:u.time},{name:"transition-timing-function",type:u.easing},{name:"height",type:u.nodeSize},{name:"width",type:u.nodeSize},{name:"shape",type:u.nodeShape},{name:"shape-polygon-points",type:u.polygonPointList},{name:"background-color",type:u.color},{name:"background-opacity",type:u.zeroOneNumber},{name:"background-blacken",type:u.nOneOneNumber},{name:"padding-left",type:u.size},{name:"padding-right",type:u.size},{name:"padding-top",type:u.size},{name:"padding-bottom",type:u.size},{name:"border-color",type:u.color},{name:"border-opacity",type:u.zeroOneNumber},{name:"border-width",type:u.size},{name:"border-style",type:u.borderStyle},{name:"background-image",type:u.url},{name:"background-image-opacity",type:u.zeroOneNumber},{name:"background-position-x",type:u.bgPos},{name:"background-position-y",type:u.bgPos},{name:"background-repeat",type:u.bgRepeat},{name:"background-fit",type:u.bgFit},{name:"background-clip",type:u.bgClip},{name:"background-width",type:u.bgWH},{name:"background-height",type:u.bgWH},{name:"position",type:u.position},{name:"compound-sizing-wrt-labels",type:u.compoundIncludeLabels},{name:"line-style",type:u.lineStyle},{name:"line-color",type:u.color},{name:"curve-style",type:u.curveStyle},{name:"haystack-radius",type:u.zeroOneNumber},{name:"control-point-step-size",type:u.size},{name:"control-point-distances",type:u.numbers},{name:"control-point-weights",type:u.numbers},{name:"segment-distances",type:u.numbers},{name:"segment-weights",type:u.numbers},{name:"selection-box-color",type:u.color},{name:"selection-box-opacity",type:u.zeroOneNumber},{name:"selection-box-border-color",type:u.color},{name:"selection-box-border-width",type:u.size},{name:"active-bg-color",type:u.color},{name:"active-bg-opacity",type:u.zeroOneNumber},{name:"active-bg-size",type:u.size},{name:"outside-texture-bg-color",type:u.color},{name:"outside-texture-bg-opacity",type:u.zeroOneNumber}],d=i.aliases=[{name:"content",pointsTo:"label"},{name:"control-point-distance",pointsTo:"control-point-distances"},{name:"control-point-weight",pointsTo:"control-point-weights"}];i.pieBackgroundN=16,c.push({name:"pie-size",type:u.bgSize});for(var h=1;h<=i.pieBackgroundN;h++)c.push({name:"pie-"+h+"-background-color",type:u.color}),c.push({name:"pie-"+h+"-background-size",type:u.percent}),c.push({name:"pie-"+h+"-background-opacity",type:u.zeroOneNumber});var p=i.arrowPrefixes=["source","mid-source","target","mid-target"];[{name:"arrow-shape",type:u.arrowShape},{name:"arrow-color",type:u.color},{name:"arrow-fill",type:u.arrowFill}].forEach(function(e){p.forEach(function(t){var r=t+"-"+e.name,n=e.type;c.push({name:r,type:n})})},{}),i.propertyNames=c.map(function(e){return e.name});for(var h=0;h<c.length;h++){var v=c[h];c[v.name]=v}for(var h=0;h<d.length;h++){var f=d[h],g=c[f.pointsTo],y={name:f.name,alias:!0,pointsTo:g};c.push(y),c[f.name]=y}}(),i.addDefaultStylesheet=function(){this.selector("node, edge").css(n.extend({events:"yes","text-events":"no","text-valign":"top","text-halign":"center",color:"#000","text-outline-color":"#000","text-outline-width":0,"text-outline-opacity":1,"text-opacity":1,"text-decoration":"none","text-transform":"none","text-wrap":"none","text-max-width":9999,"text-background-color":"#000","text-background-opacity":0,"text-border-opacity":0,"text-border-width":0,"text-border-style":"solid","text-border-color":"#000","text-background-shape":"rectangle","font-family":"Helvetica Neue, Helvetica, sans-serif","font-style":"normal","font-weight":"normal","font-size":16,"min-zoomed-font-size":0,"edge-text-rotation":"none",visibility:"visible",display:"element",opacity:1,"z-index":0,label:"","overlay-opacity":0,"overlay-color":"#000","overlay-padding":10,"shadow-opacity":0,"shadow-color":"#000","shadow-blur":10,"shadow-offset-x":0,"shadow-offset-y":0,"text-shadow-opacity":0,"text-shadow-color":"#000","text-shadow-blur":5,"text-shadow-offset-x":0,"text-shadow-offset-y":0,"transition-property":"none","transition-duration":0,"transition-delay":0,"transition-timing-function":"linear","background-blacken":0,"background-color":"#888","background-opacity":1,"background-image":"none","background-image-opacity":1,"background-position-x":"50%","background-position-y":"50%","background-repeat":"no-repeat","background-fit":"none","background-clip":"node","background-width":"auto","background-height":"auto","border-color":"#000","border-opacity":1,"border-width":0,"border-style":"solid",height:30,width:30,shape:"ellipse","shape-polygon-points":"-1, -1,   1, -1,   1, 1,   -1, 1","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0,position:"origin","compound-sizing-wrt-labels":"include"},{"pie-size":"100%"},[{name:"pie-{{i}}-background-color",value:"black"},{name:"pie-{{i}}-background-size",value:"0%"},{name:"pie-{{i}}-background-opacity",value:1}].reduce(function(e,t){for(var r=1;r<=i.pieBackgroundN;r++){var n=t.name.replace("{{i}}",r),a=t.value;e[n]=a}return e},{}),{"line-style":"solid","line-color":"#ddd","control-point-step-size":40,"control-point-weights":.5,"segment-weights":.25,"segment-distances":20,"curve-style":"bezier","haystack-radius":.8},[{name:"arrow-shape",value:"none"},{name:"arrow-color",value:"#ddd"},{name:"arrow-fill",value:"filled"}].reduce(function(e,t){return i.arrowPrefixes.forEach(function(r){var n=r+"-"+t.name,i=t.value;e[n]=i}),e},{}))).selector("$node > node").css({width:"auto",height:"auto",shape:"rectangle","padding-top":10,"padding-right":10,"padding-left":10,"padding-bottom":10}).selector("edge").css({width:1}).selector(":active").css({"overlay-color":"black","overlay-padding":10,"overlay-opacity":.25}).selector("core").css({"selection-box-color":"#ddd","selection-box-opacity":.65,"selection-box-border-color":"#aaa","selection-box-border-width":1,"active-bg-color":"black","active-bg-opacity":.15,"active-bg-size":30,"outside-texture-bg-color":"#000","outside-texture-bg-opacity":.125}),this.defaultLength=this.length},t.exports=i},{"../util":94}],90:[function(e,t,r){"use strict";var n=e("../util"),i=e("../selector"),a={};a.applyFromString=function(e){function t(){c=c.length>a.length?c.substr(a.length):""}function r(){o=o.length>s.length?o.substr(s.length):""}var a,o,s,l=this,u=this,c=""+e;for(c=c.replace(/[\/][*](\s|.)+?[*][\/]/g,"");;){var d=c.match(/^\s*$/);if(d)break;var h=c.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);if(!h){n.error("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: "+c);break}a=h[0];var p=h[1];if("core"!==p){var v=new i(p);if(v._private.invalid){n.error("Skipping parsing of block: Invalid selector found in string stylesheet: "+p),t();continue}}var f=h[2],g=!1;o=f;for(var y=[];;){var d=o.match(/^\s*$/);if(d)break;var m=o.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);if(!m){n.error("Skipping parsing of block: Invalid formatting of style property and value definitions found in:"+f),g=!0;break}s=m[0];var b=m[1],x=m[2],w=l.properties[b];if(w){var _=u.parse(b,x);_?(y.push({name:b,val:x}),r()):(n.error("Skipping property: Invalid property definition in: "+s),r())}else n.error("Skipping property: Invalid property name in: "+s),r()}if(g){t();break}u.selector(p);for(var E=0;E<y.length;E++){var w=y[E];u.css(w.name,w.val)}t()}return u},a.fromString=function(e){var t=this;return t.resetToDefault(),t.applyFromString(e),t},t.exports=a},{"../selector":81,"../util":94}],91:[function(e,t,r){"use strict";var n=e("./is"),i=e("./util"),a=e("./style"),o=function(){return this instanceof o?void(this.length=0):new o},s=o.prototype;s.instanceString=function(){return"stylesheet"},s.selector=function(e){var t=this.length++;return this[t]={selector:e,properties:[]},this},s.css=function(e,t){var r=this.length-1;if(n.string(e))this[r].properties.push({name:e,value:t});else if(n.plainObject(e))for(var o=e,s=0;s<a.properties.length;s++){var l=a.properties[s],u=o[l.name];if(void 0===u&&(u=o[i.dash2camel(l.name)]),void 0!==u){var e=l.name,t=u;this[r].properties.push({name:e,value:t})}}return this},s.style=s.css,s.generateStyle=function(e){for(var t=new a(e),r=0;r<this.length;r++){var n=this[r],i=n.selector,o=n.properties;t.selector(i);for(var s=0;s<o.length;s++){var l=o[s];t.css(l.name,l.value)}}return t},t.exports=o},{"./is":77,"./style":86,"./util":94}],92:[function(_dereq_,module,exports){"use strict";var window=_dereq_("./window"),util=_dereq_("./util"),Promise=_dereq_("./promise"),Event=_dereq_("./event"),define=_dereq_("./define"),is=_dereq_("./is"),Thread=function(e){if(!(this instanceof Thread))return new Thread(e);var t=this._private={requires:[],files:[],queue:null,pass:[],disabled:!1};is.plainObject(e)&&null!=e.disabled&&(t.disabled=!!e.disabled)},thdfn=Thread.prototype,stringifyFieldVal=function(e){var t=is.fn(e)?e.toString():'JSON.parse("'+JSON.stringify(e)+'")';return t},fnAsRequire=function(e){var t,r;is.object(e)&&e.fn?(t=fnAs(e.fn,e.name),r=e.name,e=e.fn):is.fn(e)?(t=e.toString(),r=e.name):is.string(e)?t=e:is.object(e)&&(t=e.proto?"":e.name+" = {};",r=e.name,e=e.obj),t+="\n";var n=function(e,r){if(e.prototype){var n=!1;for(var i in e.prototype){n=!0;break}n&&(t+=fnAsRequire({name:r,obj:e,proto:!0},e))}};if(e.prototype&&null!=r)for(var i in e.prototype){var a="",o=e.prototype[i],s=stringifyFieldVal(o),l=r+".prototype."+i;a+=l+" = "+s+";\n",a&&(t+=a),n(o,l)}if(!is.string(e))for(var i in e){var u="";if(e.hasOwnProperty(i)){var o=e[i],s=stringifyFieldVal(o),l=r+'["'+i+'"]';u+=l+" = "+s+";\n"}u&&(t+=u),n(o,l)}return t},isPathStr=function(e){return is.string(e)&&e.match(/\.js$/)};util.extend(thdfn,{instanceString:function(){return"thread"},require:function(e,t){var r=this._private.requires;if(isPathStr(e))return this._private.files.push(e),this;if(t)e=is.fn(e)?{name:t,fn:e}:{name:t,obj:e};else if(is.fn(e)){if(!e.name)throw'The function name could not be automatically determined.  Use thread.require( someFunction, "someFunction" )';e={name:e.name,fn:e}}return r.push(e),this},pass:function(e){return this._private.pass.push(e),this},run:function(fn,pass){var self=this,_p=this._private;if(pass=pass||_p.pass.shift(),_p.stopped)throw"Attempted to run a stopped thread!  Start a new thread or do not stop the existing thread and reuse it.";if(_p.running)return _p.queue=_p.queue.then(function(){return self.run(fn,pass)});var useWW=null!=window&&!_p.disabled,useNode=!window&&"undefined"!=typeof module&&!_p.disabled;self.trigger("run");var runP=new Promise(function(resolve,reject){_p.running=!0;var threadTechAlreadyExists=_p.ran,fnImplStr=is.string(fn)?fn:fn.toString(),fnStr="\n"+_p.requires.map(function(e){return fnAsRequire(e)}).concat(_p.files.map(function(e){if(useWW){var t=function(e){return e.match(/^\.\//)||e.match(/^\.\./)?window.location.origin+window.location.pathname+e:e.match(/^\//)?window.location.origin+"/"+e:e};return'importScripts("'+t(e)+'");'}if(useNode)return'eval( require("fs").readFileSync("'+e+'", { encoding: "utf8" }) );';throw"External file `"+e+"` can not be required without any threading technology."})).concat(["( function(){","var ret = ("+fnImplStr+")("+JSON.stringify(pass)+");","if( ret !== undefined ){ resolve(ret); }","} )()\n"]).join("\n");if(_p.requires=[],_p.files=[],useWW){var fnBlob,fnUrl;if(!threadTechAlreadyExists){var fnPre=fnStr+"";fnStr=["function _ref_(o){ return eval(o); };","function broadcast(m){ return message(m); };","function message(m){ postMessage(m); };","function listen(fn){",'  self.addEventListener("message", function(m){ ','    if( typeof m === "object" && (m.data.$$eval || m.data === "$$start") ){',"    } else { ","      fn( m.data );","    }","  });","};",'self.addEventListener("message", function(m){  if( m.data.$$eval ){ eval( m.data.$$eval ); }  });',"function resolve(v){ postMessage({ $$resolve: v }); };","function reject(v){ postMessage({ $$reject: v }); };"].join("\n"),fnStr+=fnPre,fnBlob=new Blob([fnStr],{type:"application/javascript"}),fnUrl=window.URL.createObjectURL(fnBlob)}var ww=_p.webworker=_p.webworker||new Worker(fnUrl);threadTechAlreadyExists&&ww.postMessage({$$eval:fnStr});var cb;ww.addEventListener("message",cb=function(e){var t=is.object(e)&&is.object(e.data);t&&"$$resolve"in e.data?(ww.removeEventListener("message",cb),resolve(e.data.$$resolve)):t&&"$$reject"in e.data?(ww.removeEventListener("message",cb),reject(e.data.$$reject)):self.trigger(new Event(e,{type:"message",message:e.data}))},!1),threadTechAlreadyExists||ww.postMessage("$$start")}else if(useNode){_p.child||(_p.child=_dereq_("child_process").fork(_dereq_("path").join(__dirname,"thread-node-fork")));var child=_p.child,cb;child.on("message",cb=function(e){is.object(e)&&"$$resolve"in e?(child.removeListener("message",cb),resolve(e.$$resolve)):is.object(e)&&"$$reject"in e?(child.removeListener("message",cb),reject(e.$$reject)):self.trigger(new Event({},{type:"message",message:e}))}),child.send({$$eval:fnStr})}else{var promiseResolve=resolve,promiseReject=reject,timer=_p.timer=_p.timer||{listeners:[],exec:function(){fnStr=["function _ref_(o){ return eval(o); };","function broadcast(m){ return message(m); };",'function message(m){ self.trigger( new Event({}, { type: "message", message: m }) ); };',"function listen(fn){ timer.listeners.push( fn ); };","function resolve(v){ promiseResolve(v); };","function reject(v){ promiseReject(v); };"].join("\n")+fnStr,eval(fnStr)},message:function(e){for(var t=timer.listeners,r=0;r<t.length;r++){var n=t[r];n(e)}}};timer.exec()}}).then(function(e){return _p.running=!1,_p.ran=!0,self.trigger("ran"),e});return null==_p.queue&&(_p.queue=runP),runP},message:function(e){var t=this._private;return t.webworker&&t.webworker.postMessage(e),t.child&&t.child.send(e),t.timer&&t.timer.message(e),this},stop:function(){var e=this._private;return e.webworker&&e.webworker.terminate(),e.child&&e.child.kill(),e.timer,e.stopped=!0,this.trigger("stop")},stopped:function(){return this._private.stopped}});var fnAs=function(e,t){var r=e.toString();return r=r.replace(/function\s*\S*\s*\(/,"function "+t+"(")},defineFnal=function(e){return e=e||{},function(t,r){var n=fnAs(t,"_$_$_"+e.name);return this.require(n),this.run(["function( data ){","  var origResolve = resolve;","  var res = [];","  ","  resolve = function( val ){","    res.push( val );","  };","  ","  var ret = data."+e.name+"( _$_$_"+e.name+(arguments.length>1?", "+JSON.stringify(r):"")+" );","  ","  resolve = origResolve;","  resolve( res.length > 0 ? res : ret );","}"].join("\n"))}};util.extend(thdfn,{reduce:defineFnal({name:"reduce"}),reduceRight:defineFnal({name:"reduceRight"}),map:defineFnal({name:"map"})});var fn=thdfn;fn.promise=fn.run,fn.terminate=fn.halt=fn.stop,fn.include=fn.require,util.extend(thdfn,{on:define.on(),one:define.on({unbindSelfOnTrigger:!0}),off:define.off(),trigger:define.trigger()}),define.eventAliasesOn(thdfn),module.exports=Thread},{"./define":41,"./event":42,"./is":77,"./promise":80,"./util":94,"./window":100,child_process:void 0,path:void 0}],93:[function(e,t,r){"use strict";var n=e("../is");t.exports={hex2tuple:function(e){if((4===e.length||7===e.length)&&"#"===e[0]){var t,r,n,i=4===e.length,a=16;return i?(t=parseInt(e[1]+e[1],a),r=parseInt(e[2]+e[2],a),n=parseInt(e[3]+e[3],a)):(t=parseInt(e[1]+e[2],a),r=parseInt(e[3]+e[4],a),n=parseInt(e[5]+e[6],a)),[t,r,n]}},hsl2tuple:function(e){function t(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e}var r,n,i,a,o,s,l,u,c=new RegExp("^"+this.regex.hsla+"$").exec(e);if(c){if(n=parseInt(c[1]),0>n?n=(360- -1*n%360)%360:n>360&&(n%=360),n/=360,i=parseFloat(c[2]),0>i||i>100)return;if(i/=100,a=parseFloat(c[3]),0>a||a>100)return;if(a/=100,o=c[4],void 0!==o&&(o=parseFloat(o),0>o||o>1))return;if(0===i)s=l=u=Math.round(255*a);else{var d=.5>a?a*(1+i):a+i-a*i,h=2*a-d;s=Math.round(255*t(h,d,n+1/3)),l=Math.round(255*t(h,d,n)),u=Math.round(255*t(h,d,n-1/3))}r=[s,l,u,o]}return r},rgb2tuple:function(e){var t,r=new RegExp("^"+this.regex.rgba+"$").exec(e);if(r){t=[];for(var n=[],i=1;3>=i;i++){var a=r[i];if("%"===a[a.length-1]&&(n[i]=!0),a=parseFloat(a),n[i]&&(a=a/100*255),0>a||a>255)return;t.push(Math.floor(a))}var o=n[1]||n[2]||n[3],s=n[1]&&n[2]&&n[3];if(o&&!s)return;var l=r[4];if(void 0!==l){if(l=parseFloat(l),0>l||l>1)return;t.push(l)}}return t},colorname2tuple:function(e){return this.colors[e.toLowerCase()]},color2tuple:function(e){return(n.array(e)?e:null)||this.colorname2tuple(e)||this.hex2tuple(e)||this.rgb2tuple(e)||this.hsl2tuple(e)},colors:{transparent:[0,0,0,0],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}},{"../is":77}],94:[function(e,t,r){"use strict";var n=e("../is"),i=e("../math"),a={falsify:function(){return!1},zeroify:function(){return 0},noop:function(){},error:function(e){console.error?(console.error.apply(console,arguments),console.trace&&console.trace()):(console.log.apply(console,arguments),console.trace&&console.trace())},clone:function(e){return this.extend({},e)},copy:function(e){return null==e?e:n.array(e)?e.slice():n.plainObject(e)?this.clone(e):e}};a.makeBoundingBox=i.makeBoundingBox.bind(i),a._staticEmptyObject={},a.staticEmptyObject=function(){return a._staticEmptyObject},a.extend=null!=Object.assign?Object.assign:function(e){for(var t=arguments,r=1;r<t.length;r++){var n=t[r];for(var i in n)e[i]=n[i]}return e},[e("./colors"),e("./maps"),{memoize:e("./memoize")},e("./regex"),e("./strings"),e("./timing")].forEach(function(e){a.extend(a,e)}),t.exports=a},{"../is":77,"../math":79,"./colors":93,"./maps":95,"./memoize":96,"./regex":97,"./strings":98,"./timing":99}],95:[function(e,t,r){"use strict";var n=e("../is");t.exports={mapEmpty:function(e){var t=!0;if(null!=e)for(var r in e){t=!1;break}return t},pushMap:function(e){var t=this.getMap(e);null==t?this.setMap(this.extend({},e,{value:[e.value]})):t.push(e.value)},setMap:function(e){for(var t,r=e.map,i=e.keys,a=i.length,o=0;a>o;o++){var t=i[o];n.plainObject(t)&&this.error("Tried to set map with object key"),o<i.length-1?(null==r[t]&&(r[t]={}),r=r[t]):r[t]=e.value}},getMap:function(e){for(var t=e.map,r=e.keys,i=r.length,a=0;i>a;a++){var o=r[a];if(n.plainObject(o)&&this.error("Tried to get map with object key"),t=t[o],null==t)return t}return t},deleteMap:function(e){for(var t=e.map,r=e.keys,i=r.length,a=e.keepChildren,o=0;i>o;o++){var s=r[o];n.plainObject(s)&&this.error("Tried to delete map with object key");var l=o===e.keys.length-1;if(l)if(a)for(var u in t)a[u]||(t[u]=void 0);else t[s]=void 0;else t=t[s]}}}},{"../is":77}],96:[function(e,t,r){"use strict";t.exports=function(e,t){var r=this,n={};return t||(t=function(){if(1===arguments.length)return arguments[0];for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return e.join("$")}),function(){var i,a=arguments,o=t.apply(r,a);return(i=n[o])||(i=n[o]=e.apply(r,a)),i}}},{}],97:[function(e,t,r){"use strict";var n="(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))",i="rgb[a]?\\(("+n+"[%]?)\\s*,\\s*("+n+"[%]?)\\s*,\\s*("+n+"[%]?)(?:\\s*,\\s*("+n+"))?\\)",a="rgb[a]?\\((?:"+n+"[%]?)\\s*,\\s*(?:"+n+"[%]?)\\s*,\\s*(?:"+n+"[%]?)(?:\\s*,\\s*(?:"+n+"))?\\)",o="hsl[a]?\\(("+n+")\\s*,\\s*("+n+"[%])\\s*,\\s*("+n+"[%])(?:\\s*,\\s*("+n+"))?\\)",s="hsl[a]?\\((?:"+n+")\\s*,\\s*(?:"+n+"[%])\\s*,\\s*(?:"+n+"[%])(?:\\s*,\\s*(?:"+n+"))?\\)",l="\\#[0-9a-fA-F]{3}",u="\\#[0-9a-fA-F]{6}";t.exports={regex:{number:n,rgba:i,rgbaNoBackRefs:a,hsla:o,hslaNoBackRefs:s,hex3:l,hex6:u}}},{}],98:[function(e,t,r){"use strict";var n=e("./memoize"),i=e("../is");t.exports={camel2dash:n(function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}),dash2camel:n(function(e){return e.replace(/(-\w)/g,function(e){return e[1].toUpperCase()})}),capitalize:function(e){return i.emptyString(e)?e:e.charAt(0).toUpperCase()+e.substring(1)}}},{"../is":77,"./memoize":96}],99:[function(e,t,r){"use strict";var n=e("../window"),i=e("../is"),a=n?n.performance:null,o={},s=n?n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame:null;s=s||function(e){e&&setTimeout(function(){e(l())},1e3/60)},o.requestAnimationFrame=function(e){s(e)};var l=a&&a.now?function(){return a.now()}:function(){return Date.now()};o.performanceNow=l,o.throttle=function(e,t,r){var n=!0,a=!0;return r===!1?n=!1:i.plainObject(r)&&(n="leading"in r?r.leading:n,a="trailing"in r?r.trailing:a),r=r||{},r.leading=n,r.maxWait=t,r.trailing=a,o.debounce(e,t,r)},o.now=function(){
return Date.now()},o.debounce=function(e,t,r){var n,a,o,s,l,u,c,d=this,h=0,p=!1,v=!0;if(i.fn(e)){if(t=Math.max(0,t)||0,r===!0){var f=!0;v=!1}else i.plainObject(r)&&(f=r.leading,p="maxWait"in r&&(Math.max(t,r.maxWait)||0),v="trailing"in r?r.trailing:v);var g=function(){var r=t-(d.now()-s);if(0>=r){a&&clearTimeout(a);var i=c;a=u=c=void 0,i&&(h=d.now(),o=e.apply(l,n),u||a||(n=l=null))}else u=setTimeout(g,r)},y=function(){u&&clearTimeout(u),a=u=c=void 0,(v||p!==t)&&(h=d.now(),o=e.apply(l,n),u||a||(n=l=null))};return function(){if(n=arguments,s=d.now(),l=this,c=v&&(u||!f),p===!1)var r=f&&!u;else{a||f||(h=s);var i=p-(s-h),m=0>=i;m?(a&&(a=clearTimeout(a)),h=s,o=e.apply(l,n)):a||(a=setTimeout(y,i))}return m&&u?u=clearTimeout(u):u||t===p||(u=setTimeout(g,t)),r&&(m=!0,o=e.apply(l,n)),!m||u||a||(n=l=null),o}}},t.exports=o},{"../is":77,"../window":100}],100:[function(e,t,r){t.exports="undefined"==typeof window?null:window},{}]},{},[76])(76)});
//# sourceMappingURL=cytoscape.min.js.map


/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.11.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	scrollParent: function( includeHidden ) {
		var position = this.css( "position" ),
			excludeStaticParent = position === "absolute",
			overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			scrollParent = this.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: (function() {
		var uuid = 0;

		return function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			});
		};
	})(),

	removeUniqueId: function() {
		return this.each(function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
		return !!img && visible( img );
	}
	return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}

// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	disableSelection: (function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.bind( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		};
	})(),

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};


/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;


/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */


var mouseHandled = false;
$( document ).mouseup( function() {
	mouseHandled = false;
});

var mouse = $.widget("ui.mouse", {
	version: "1.11.4",
	options: {
		cancel: "input,textarea,button,select,option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.bind("mousedown." + this.widgetName, function(event) {
				return that._mouseDown(event);
			})
			.bind("click." + this.widgetName, function(event) {
				if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
					$.removeData(event.target, that.widgetName + ".preventClickEvent");
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind("." + this.widgetName);
		if ( this._mouseMoveDelegate ) {
			this.document
				.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
				.unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
		}
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = (event.which === 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				that.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
			$.removeData(event.target, this.widgetName + ".preventClickEvent");
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return that._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return that._mouseUp(event);
		};

		this.document
			.bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {
			// IE mouseup check - mouseup happened when mouse was out of window
			if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
				return this._mouseUp(event);

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {
				return this._mouseUp( event );
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		this.document
			.unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target === this._mouseDownEvent.target) {
				$.data(event.target, this.widgetName + ".preventClickEvent", true);
			}

			this._mouseStop(event);
		}

		mouseHandled = false;
		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(/* event */) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(/* event */) {},
	_mouseDrag: function(/* event */) {},
	_mouseStop: function(/* event */) {},
	_mouseCapture: function(/* event */) { return true; }
});


/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

(function() {

$.ui = $.ui || {};

var cachedScrollbarWidth, supportsOffsetFractions,
	max = Math.max,
	abs = Math.abs,
	round = Math.round,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[0];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[0];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[0].clientWidth;
		}

		div.remove();

		return (cachedScrollbarWidth = w1 - w2);
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[0] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: withinElement.offset() || { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),

			// support: jQuery 1.6.x
			// jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
			width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
			height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[0].preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;
	// clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each(function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		// if the browser doesn't support fractions, then round for consistent results
		if ( !supportsOffsetFractions ) {
			position.left = round( position.left );
			position.top = round( position.top );
		}

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				});
			}
		});

		if ( options.using ) {
			// adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

// fraction support test
(function() {
	var testElement, testElementParent, testElementStyle, offsetLeft, i,
		body = document.getElementsByTagName( "body" )[ 0 ],
		div = document.createElement( "div" );

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px;";

	offsetLeft = $( div ).offset().left;
	supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );
})();

})();

var position = $.ui.position;


/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */


var accordion = $.widget( "ui.accordion", {
	version: "1.11.4",
	options: {
		active: 0,
		animate: {},
		collapsible: false,
		event: "click",
		header: "> li > :first-child,> :not(li):even",
		heightStyle: "auto",
		icons: {
			activeHeader: "ui-icon-triangle-1-s",
			header: "ui-icon-triangle-1-e"
		},

		// callbacks
		activate: null,
		beforeActivate: null
	},

	hideProps: {
		borderTopWidth: "hide",
		borderBottomWidth: "hide",
		paddingTop: "hide",
		paddingBottom: "hide",
		height: "hide"
	},

	showProps: {
		borderTopWidth: "show",
		borderBottomWidth: "show",
		paddingTop: "show",
		paddingBottom: "show",
		height: "show"
	},

	_create: function() {
		var options = this.options;
		this.prevShow = this.prevHide = $();
		this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
			// ARIA
			.attr( "role", "tablist" );

		// don't allow collapsible: false and active: false / null
		if ( !options.collapsible && (options.active === false || options.active == null) ) {
			options.active = 0;
		}

		this._processPanels();
		// handle negative values
		if ( options.active < 0 ) {
			options.active += this.headers.length;
		}
		this._refresh();
	},

	_getCreateEventData: function() {
		return {
			header: this.active,
			panel: !this.active.length ? $() : this.active.next()
		};
	},

	_createIcons: function() {
		var icons = this.options.icons;
		if ( icons ) {
			$( "<span>" )
				.addClass( "ui-accordion-header-icon ui-icon " + icons.header )
				.prependTo( this.headers );
			this.active.children( ".ui-accordion-header-icon" )
				.removeClass( icons.header )
				.addClass( icons.activeHeader );
			this.headers.addClass( "ui-accordion-icons" );
		}
	},

	_destroyIcons: function() {
		this.headers
			.removeClass( "ui-accordion-icons" )
			.children( ".ui-accordion-header-icon" )
				.remove();
	},

	_destroy: function() {
		var contents;

		// clean up main element
		this.element
			.removeClass( "ui-accordion ui-widget ui-helper-reset" )
			.removeAttr( "role" );

		// clean up headers
		this.headers
			.removeClass( "ui-accordion-header ui-accordion-header-active ui-state-default " +
				"ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
			.removeAttr( "role" )
			.removeAttr( "aria-expanded" )
			.removeAttr( "aria-selected" )
			.removeAttr( "aria-controls" )
			.removeAttr( "tabIndex" )
			.removeUniqueId();

		this._destroyIcons();

		// clean up content panels
		contents = this.headers.next()
			.removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom " +
				"ui-accordion-content ui-accordion-content-active ui-state-disabled" )
			.css( "display", "" )
			.removeAttr( "role" )
			.removeAttr( "aria-hidden" )
			.removeAttr( "aria-labelledby" )
			.removeUniqueId();

		if ( this.options.heightStyle !== "content" ) {
			contents.css( "height", "" );
		}
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "event" ) {
			if ( this.options.event ) {
				this._off( this.headers, this.options.event );
			}
			this._setupEvents( value );
		}

		this._super( key, value );

		// setting collapsible: false while collapsed; open first panel
		if ( key === "collapsible" && !value && this.options.active === false ) {
			this._activate( 0 );
		}

		if ( key === "icons" ) {
			this._destroyIcons();
			if ( value ) {
				this._createIcons();
			}
		}

		// #5332 - opacity doesn't cascade to positioned elements in IE
		// so we need to add the disabled class to the headers and panels
		if ( key === "disabled" ) {
			this.element
				.toggleClass( "ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.headers.add( this.headers.next() )
				.toggleClass( "ui-state-disabled", !!value );
		}
	},

	_keydown: function( event ) {
		if ( event.altKey || event.ctrlKey ) {
			return;
		}

		var keyCode = $.ui.keyCode,
			length = this.headers.length,
			currentIndex = this.headers.index( event.target ),
			toFocus = false;

		switch ( event.keyCode ) {
			case keyCode.RIGHT:
			case keyCode.DOWN:
				toFocus = this.headers[ ( currentIndex + 1 ) % length ];
				break;
			case keyCode.LEFT:
			case keyCode.UP:
				toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
				break;
			case keyCode.SPACE:
			case keyCode.ENTER:
				this._eventHandler( event );
				break;
			case keyCode.HOME:
				toFocus = this.headers[ 0 ];
				break;
			case keyCode.END:
				toFocus = this.headers[ length - 1 ];
				break;
		}

		if ( toFocus ) {
			$( event.target ).attr( "tabIndex", -1 );
			$( toFocus ).attr( "tabIndex", 0 );
			toFocus.focus();
			event.preventDefault();
		}
	},

	_panelKeyDown: function( event ) {
		if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
			$( event.currentTarget ).prev().focus();
		}
	},

	refresh: function() {
		var options = this.options;
		this._processPanels();

		// was collapsed or no panel
		if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
			options.active = false;
			this.active = $();
		// active false only when collapsible is true
		} else if ( options.active === false ) {
			this._activate( 0 );
		// was active, but active panel is gone
		} else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			// all remaining panel are disabled
			if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
				options.active = false;
				this.active = $();
			// activate previous panel
			} else {
				this._activate( Math.max( 0, options.active - 1 ) );
			}
		// was active, active panel still exists
		} else {
			// make sure active index is correct
			options.active = this.headers.index( this.active );
		}

		this._destroyIcons();

		this._refresh();
	},

	_processPanels: function() {
		var prevHeaders = this.headers,
			prevPanels = this.panels;

		this.headers = this.element.find( this.options.header )
			.addClass( "ui-accordion-header ui-state-default ui-corner-all" );

		this.panels = this.headers.next()
			.addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
			.filter( ":not(.ui-accordion-content-active)" )
			.hide();

		// Avoid memory leaks (#10056)
		if ( prevPanels ) {
			this._off( prevHeaders.not( this.headers ) );
			this._off( prevPanels.not( this.panels ) );
		}
	},

	_refresh: function() {
		var maxHeight,
			options = this.options,
			heightStyle = options.heightStyle,
			parent = this.element.parent();

		this.active = this._findActive( options.active )
			.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
			.removeClass( "ui-corner-all" );
		this.active.next()
			.addClass( "ui-accordion-content-active" )
			.show();

		this.headers
			.attr( "role", "tab" )
			.each(function() {
				var header = $( this ),
					headerId = header.uniqueId().attr( "id" ),
					panel = header.next(),
					panelId = panel.uniqueId().attr( "id" );
				header.attr( "aria-controls", panelId );
				panel.attr( "aria-labelledby", headerId );
			})
			.next()
				.attr( "role", "tabpanel" );

		this.headers
			.not( this.active )
			.attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			})
			.next()
				.attr({
					"aria-hidden": "true"
				})
				.hide();

		// make sure at least one header is in the tab order
		if ( !this.active.length ) {
			this.headers.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
			.next()
				.attr({
					"aria-hidden": "false"
				});
		}

		this._createIcons();

		this._setupEvents( options.event );

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});

			this.headers.each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.headers.next()
				.each(function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				})
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.headers.next()
				.each(function() {
					maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
				})
				.height( maxHeight );
		}
	},

	_activate: function( index ) {
		var active = this._findActive( index )[ 0 ];

		// trying to activate the already active panel
		if ( active === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the currently active header
		active = active || this.active[ 0 ];

		this._eventHandler({
			target: active,
			currentTarget: active,
			preventDefault: $.noop
		});
	},

	_findActive: function( selector ) {
		return typeof selector === "number" ? this.headers.eq( selector ) : $();
	},

	_setupEvents: function( event ) {
		var events = {
			keydown: "_keydown"
		};
		if ( event ) {
			$.each( event.split( " " ), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			});
		}

		this._off( this.headers.add( this.headers.next() ) );
		this._on( this.headers, events );
		this._on( this.headers.next(), { keydown: "_panelKeyDown" });
		this._hoverable( this.headers );
		this._focusable( this.headers );
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			clicked = $( event.currentTarget ),
			clickedIsActive = clicked[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : clicked.next(),
			toHide = active.next(),
			eventData = {
				oldHeader: active,
				oldPanel: toHide,
				newHeader: collapsing ? $() : clicked,
				newPanel: toShow
			};

		event.preventDefault();

		if (
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.headers.index( clicked );

		// when the call to ._toggle() comes after the class changes
		// it causes a very odd bug in IE 8 (see #6720)
		this.active = clickedIsActive ? $() : clicked;
		this._toggle( eventData );

		// switch classes
		// corner classes on the previously active header stay after the animation
		active.removeClass( "ui-accordion-header-active ui-state-active" );
		if ( options.icons ) {
			active.children( ".ui-accordion-header-icon" )
				.removeClass( options.icons.activeHeader )
				.addClass( options.icons.header );
		}

		if ( !clickedIsActive ) {
			clicked
				.removeClass( "ui-corner-all" )
				.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
			if ( options.icons ) {
				clicked.children( ".ui-accordion-header-icon" )
					.removeClass( options.icons.header )
					.addClass( options.icons.activeHeader );
			}

			clicked
				.next()
				.addClass( "ui-accordion-content-active" );
		}
	},

	_toggle: function( data ) {
		var toShow = data.newPanel,
			toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

		// handle activating a panel during the animation for another activation
		this.prevShow.add( this.prevHide ).stop( true, true );
		this.prevShow = toShow;
		this.prevHide = toHide;

		if ( this.options.animate ) {
			this._animate( toShow, toHide, data );
		} else {
			toHide.hide();
			toShow.show();
			this._toggleComplete( data );
		}

		toHide.attr({
			"aria-hidden": "true"
		});
		toHide.prev().attr({
			"aria-selected": "false",
			"aria-expanded": "false"
		});
		// if we're switching panels, remove the old header from the tab order
		// if we're opening from collapsed state, remove the previous header from the tab order
		// if we're collapsing, then keep the collapsing header in the tab order
		if ( toShow.length && toHide.length ) {
			toHide.prev().attr({
				"tabIndex": -1,
				"aria-expanded": "false"
			});
		} else if ( toShow.length ) {
			this.headers.filter(function() {
				return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow
			.attr( "aria-hidden", "false" )
			.prev()
				.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				});
	},

	_animate: function( toShow, toHide, data ) {
		var total, easing, duration,
			that = this,
			adjust = 0,
			boxSizing = toShow.css( "box-sizing" ),
			down = toShow.length &&
				( !toHide.length || ( toShow.index() < toHide.index() ) ),
			animate = this.options.animate || {},
			options = down && animate.down || animate,
			complete = function() {
				that._toggleComplete( data );
			};

		if ( typeof options === "number" ) {
			duration = options;
		}
		if ( typeof options === "string" ) {
			easing = options;
		}
		// fall back from options to animation in case of partial down settings
		easing = easing || options.easing || animate.easing;
		duration = duration || options.duration || animate.duration;

		if ( !toHide.length ) {
			return toShow.animate( this.showProps, duration, easing, complete );
		}
		if ( !toShow.length ) {
			return toHide.animate( this.hideProps, duration, easing, complete );
		}

		total = toShow.show().outerHeight();
		toHide.animate( this.hideProps, {
			duration: duration,
			easing: easing,
			step: function( now, fx ) {
				fx.now = Math.round( now );
			}
		});
		toShow
			.hide()
			.animate( this.showProps, {
				duration: duration,
				easing: easing,
				complete: complete,
				step: function( now, fx ) {
					fx.now = Math.round( now );
					if ( fx.prop !== "height" ) {
						if ( boxSizing === "content-box" ) {
							adjust += fx.now;
						}
					} else if ( that.options.heightStyle !== "content" ) {
						fx.now = Math.round( total - toHide.outerHeight() - adjust );
						adjust = 0;
					}
				}
			});
	},

	_toggleComplete: function( data ) {
		var toHide = data.oldPanel;

		toHide
			.removeClass( "ui-accordion-content-active" )
			.prev()
				.removeClass( "ui-corner-top" )
				.addClass( "ui-corner-all" );

		// Work around for rendering bug in IE (#5421)
		if ( toHide.length ) {
			toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
		}
		this._trigger( "activate", null, data );
	}
});


/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */


var menu = $.widget( "ui.menu", {
	version: "1.11.4",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-carat-1-e"
		},
		items: "> *",
		menus: "ul",
		position: {
			my: "left-1 top",
			at: "right top"
		},
		role: "menu",

		// callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;

		// Flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.addClass( "ui-menu ui-widget ui-widget-content" )
			.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
			.attr({
				role: this.options.role,
				tabIndex: 0
			});

		if ( this.options.disabled ) {
			this.element
				.addClass( "ui-state-disabled" )
				.attr( "aria-disabled", "true" );
		}

		this._on({
			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item": function( event ) {
				var target = $( event.target );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {
				// Ignore mouse events while typeahead is active, see #10458.
				// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
				// is over an item in the menu
				if ( this.previousFilter ) {
					return;
				}
				var target = $( event.currentTarget );
				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				target.siblings( ".ui-state-active" ).removeClass( "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {
				// If there's already an active item, keep it active
				// If not, activate the first item
				var item = this.active || this.element.find( this.options.items ).eq( 0 );

				if ( !keepActiveItem ) {
					this.focus( event, item );
				}
			},
			blur: function( event ) {
				this._delay(function() {
					if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
						this.collapseAll( event );
					}
				});
			},
			keydown: "_keydown"
		});

		this.refresh();

		// Clicks outside of a menu collapse any open menus
		this._on( this.document, {
			click: function( event ) {
				if ( this._closeOnDocumentClick( event ) ) {
					this.collapseAll( event );
				}

				// Reset the mouseHandled flag
				this.mouseHandled = false;
			}
		});
	},

	_destroy: function() {
		// Destroy (sub)menus
		this.element
			.removeAttr( "aria-activedescendant" )
			.find( ".ui-menu" ).addBack()
				.removeClass( "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front" )
				.removeAttr( "role" )
				.removeAttr( "tabIndex" )
				.removeAttr( "aria-labelledby" )
				.removeAttr( "aria-expanded" )
				.removeAttr( "aria-hidden" )
				.removeAttr( "aria-disabled" )
				.removeUniqueId()
				.show();

		// Destroy menu items
		this.element.find( ".ui-menu-item" )
			.removeClass( "ui-menu-item" )
			.removeAttr( "role" )
			.removeAttr( "aria-disabled" )
			.removeUniqueId()
			.removeClass( "ui-state-hover" )
			.removeAttr( "tabIndex" )
			.removeAttr( "role" )
			.removeAttr( "aria-haspopup" )
			.children().each( function() {
				var elem = $( this );
				if ( elem.data( "ui-menu-submenu-carat" ) ) {
					elem.remove();
				}
			});

		// Destroy menu dividers
		this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
	},

	_keydown: function( event ) {
		var match, prev, character, skip,
			preventDefault = true;

		switch ( event.keyCode ) {
		case $.ui.keyCode.PAGE_UP:
			this.previousPage( event );
			break;
		case $.ui.keyCode.PAGE_DOWN:
			this.nextPage( event );
			break;
		case $.ui.keyCode.HOME:
			this._move( "first", "first", event );
			break;
		case $.ui.keyCode.END:
			this._move( "last", "last", event );
			break;
		case $.ui.keyCode.UP:
			this.previous( event );
			break;
		case $.ui.keyCode.DOWN:
			this.next( event );
			break;
		case $.ui.keyCode.LEFT:
			this.collapse( event );
			break;
		case $.ui.keyCode.RIGHT:
			if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
				this.expand( event );
			}
			break;
		case $.ui.keyCode.ENTER:
		case $.ui.keyCode.SPACE:
			this._activate( event );
			break;
		case $.ui.keyCode.ESCAPE:
			this.collapse( event );
			break;
		default:
			preventDefault = false;
			prev = this.previousFilter || "";
			character = String.fromCharCode( event.keyCode );
			skip = false;

			clearTimeout( this.filterTimer );

			if ( character === prev ) {
				skip = true;
			} else {
				character = prev + character;
			}

			match = this._filterMenuItems( character );
			match = skip && match.index( this.active.next() ) !== -1 ?
				this.active.nextAll( ".ui-menu-item" ) :
				match;

			// If no matches on the current filter, reset to the last character pressed
			// to move down the menu to the first item that starts with that character
			if ( !match.length ) {
				character = String.fromCharCode( event.keyCode );
				match = this._filterMenuItems( character );
			}

			if ( match.length ) {
				this.focus( event, match );
				this.previousFilter = character;
				this.filterTimer = this._delay(function() {
					delete this.previousFilter;
				}, 1000 );
			} else {
				delete this.previousFilter;
			}
		}

		if ( preventDefault ) {
			event.preventDefault();
		}
	},

	_activate: function( event ) {
		if ( !this.active.is( ".ui-state-disabled" ) ) {
			if ( this.active.is( "[aria-haspopup='true']" ) ) {
				this.expand( event );
			} else {
				this.select( event );
			}
		}
	},

	refresh: function() {
		var menus, items,
			that = this,
			icon = this.options.icons.submenu,
			submenus = this.element.find( this.options.menus );

		this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		submenus.filter( ":not(.ui-menu)" )
			.addClass( "ui-menu ui-widget ui-widget-content ui-front" )
			.hide()
			.attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			})
			.each(function() {
				var menu = $( this ),
					item = menu.parent(),
					submenuCarat = $( "<span>" )
						.addClass( "ui-menu-icon ui-icon " + icon )
						.data( "ui-menu-submenu-carat", true );

				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCarat );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			});

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each(function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				item.addClass( "ui-widget-content ui-menu-divider" );
			}
		});

		// Don't refresh list items that are already adapted
		items.not( ".ui-menu-item, .ui-menu-divider" )
			.addClass( "ui-menu-item" )
			.uniqueId()
			.attr({
				tabIndex: -1,
				role: this._itemRole()
			});

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			this.element.find( ".ui-menu-icon" )
				.removeClass( this.options.icons.submenu )
				.addClass( value.submenu );
		}
		if ( key === "disabled" ) {
			this.element
				.toggleClass( "ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
		}
		this._super( key, value );
	},

	focus: function( event, item ) {
		var nested, focused;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();
		focused = this.active.addClass( "ui-state-focus" ).removeClass( "ui-state-active" );
		// Only update aria-activedescendant if there's a role
		// otherwise we assume focus is managed elsewhere
		if ( this.options.role ) {
			this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
		}

		// Highlight active parent menu item, if any
		this.active
			.parent()
			.closest( ".ui-menu-item" )
			.addClass( "ui-state-active" );

		if ( event && event.type === "keydown" ) {
			this._close();
		} else {
			this.timer = this._delay(function() {
				this._close();
			}, this.delay );
		}

		nested = item.children( ".ui-menu" );
		if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
			this._startOpening(nested);
		}
		this.activeMenu = item.parent();

		this._trigger( "focus", event, { item: item } );
	},

	_scrollIntoView: function( item ) {
		var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
		if ( this._hasScroll() ) {
			borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
			paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
			offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
			scroll = this.activeMenu.scrollTop();
			elementHeight = this.activeMenu.height();
			itemHeight = item.outerHeight();

			if ( offset < 0 ) {
				this.activeMenu.scrollTop( scroll + offset );
			} else if ( offset + itemHeight > elementHeight ) {
				this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
			}
		}
	},

	blur: function( event, fromFocus ) {
		if ( !fromFocus ) {
			clearTimeout( this.timer );
		}

		if ( !this.active ) {
			return;
		}

		this.active.removeClass( "ui-state-focus" );
		this.active = null;

		this._trigger( "blur", event, { item: this.active } );
	},

	_startOpening: function( submenu ) {
		clearTimeout( this.timer );

		// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the carat icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay(function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend({
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay(function() {
			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );
			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu
			.find( ".ui-menu" )
				.hide()
				.attr( "aria-hidden", "true" )
				.attr( "aria-expanded", "false" )
			.end()
			.find( ".ui-state-active" ).not( ".ui-state-focus" )
				.removeClass( "ui-state-active" );
	},

	_closeOnDocumentClick: function( event ) {
		return !$( event.target ).closest( ".ui-menu" ).length;
	},

	_isDivider: function( item ) {

		// Match hyphen, em dash, en dash
		return !/[^\-\u2014\u2013\s]/.test( item.text() );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
				.find( this.options.items )
				.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay(function() {
				this.focus( event, newItem );
			});
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.find( this.options.items )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {
		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click.
		this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
		var ui = { item: this.active };
		if ( !this.active.has( ".ui-menu" ).length ) {
			this.collapseAll( event, true );
		}
		this._trigger( "select", event, ui );
	},

	_filterMenuItems: function(character) {
		var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
			regex = new RegExp( "^" + escapedCharacter, "i" );

		return this.activeMenu
			.find( this.options.items )

			// Only match on items, not dividers or other content (#10571)
			.filter( ".ui-menu-item" )
			.filter(function() {
				return regex.test( $.trim( $( this ).text() ) );
			});
	}
});


/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */


$.widget( "ui.autocomplete", {
	version: "1.11.4",
	defaultElement: "<input>",
	options: {
		appendTo: null,
		autoFocus: false,
		delay: 300,
		minLength: 1,
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		source: null,

		// callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		response: null,
		search: null,
		select: null
	},

	requestIndex: 0,
	pending: 0,

	_create: function() {
		// Some browsers only repeat keydown events, not keypress events,
		// so we use the suppressKeyPress flag to determine if we've already
		// handled the keydown event. #7269
		// Unfortunately the code for & in keypress is the same as the up arrow,
		// so we use the suppressKeyPressRepeat flag to avoid handling keypress
		// events when we know the keydown event was used to modify the
		// search term. #7799
		var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
			nodeName = this.element[ 0 ].nodeName.toLowerCase(),
			isTextarea = nodeName === "textarea",
			isInput = nodeName === "input";

		this.isMultiLine =
			// Textareas are always multi-line
			isTextarea ? true :
			// Inputs are always single-line, even if inside a contentEditable element
			// IE also treats inputs as contentEditable
			isInput ? false :
			// All other element types are determined by whether or not they're contentEditable
			this.element.prop( "isContentEditable" );

		this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
		this.isNewMenu = true;

		this.element
			.addClass( "ui-autocomplete-input" )
			.attr( "autocomplete", "off" );

		this._on( this.element, {
			keydown: function( event ) {
				if ( this.element.prop( "readOnly" ) ) {
					suppressKeyPress = true;
					suppressInput = true;
					suppressKeyPressRepeat = true;
					return;
				}

				suppressKeyPress = false;
				suppressInput = false;
				suppressKeyPressRepeat = false;
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					suppressKeyPress = true;
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					suppressKeyPress = true;
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					suppressKeyPress = true;
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					suppressKeyPress = true;
					this._keyEvent( "next", event );
					break;
				case keyCode.ENTER:
					// when menu is open and has focus
					if ( this.menu.active ) {
						// #6055 - Opera still allows the keypress to occur
						// which causes forms to submit
						suppressKeyPress = true;
						event.preventDefault();
						this.menu.select( event );
					}
					break;
				case keyCode.TAB:
					if ( this.menu.active ) {
						this.menu.select( event );
					}
					break;
				case keyCode.ESCAPE:
					if ( this.menu.element.is( ":visible" ) ) {
						if ( !this.isMultiLine ) {
							this._value( this.term );
						}
						this.close( event );
						// Different browsers have different default behavior for escape
						// Single press can mean undo or clear
						// Double press in IE means clear the whole form
						event.preventDefault();
					}
					break;
				default:
					suppressKeyPressRepeat = true;
					// search timeout should be triggered before the input value is changed
					this._searchTimeout( event );
					break;
				}
			},
			keypress: function( event ) {
				if ( suppressKeyPress ) {
					suppressKeyPress = false;
					if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
						event.preventDefault();
					}
					return;
				}
				if ( suppressKeyPressRepeat ) {
					return;
				}

				// replicate some key handlers to allow them to repeat in Firefox and Opera
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					this._keyEvent( "next", event );
					break;
				}
			},
			input: function( event ) {
				if ( suppressInput ) {
					suppressInput = false;
					event.preventDefault();
					return;
				}
				this._searchTimeout( event );
			},
			focus: function() {
				this.selectedItem = null;
				this.previous = this._value();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				clearTimeout( this.searching );
				this.close( event );
				this._change( event );
			}
		});

		this._initSource();
		this.menu = $( "<ul>" )
			.addClass( "ui-autocomplete ui-front" )
			.appendTo( this._appendTo() )
			.menu({
				// disable ARIA support, the live region takes care of that
				role: null
			})
			.hide()
			.menu( "instance" );

		this._on( this.menu.element, {
			mousedown: function( event ) {
				// prevent moving focus out of the text field
				event.preventDefault();

				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay(function() {
					delete this.cancelBlur;
				});

				// clicking on the scrollbar causes focus to shift to the body
				// but we can't detect a mouseup or a click immediately afterward
				// so we have to track the next mousedown and close the menu if
				// the user clicks somewhere outside of the autocomplete
				var menuElement = this.menu.element[ 0 ];
				if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
					this._delay(function() {
						var that = this;
						this.document.one( "mousedown", function( event ) {
							if ( event.target !== that.element[ 0 ] &&
									event.target !== menuElement &&
									!$.contains( menuElement, event.target ) ) {
								that.close();
							}
						});
					});
				}
			},
			menufocus: function( event, ui ) {
				var label, item;
				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						});

						return;
					}
				}

				item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {
					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				}

				// Announce the value in the liveRegion
				label = ui.item.attr( "aria-label" ) || item.value;
				if ( label && $.trim( label ).length ) {
					this.liveRegion.children().hide();
					$( "<div>" ).text( label ).appendTo( this.liveRegion );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// only trigger when focus was lost (click on menu)
				if ( this.element[ 0 ] !== this.document[ 0 ].activeElement ) {
					this.element.focus();
					this.previous = previous;
					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay(function() {
						this.previous = previous;
						this.selectedItem = item;
					});
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}
				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		});

		this.liveRegion = $( "<span>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			})
			.addClass( "ui-helper-hidden-accessible" )
			.appendTo( this.document[ 0 ].body );

		// turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		});
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element
			.removeClass( "ui-autocomplete-input" )
			.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax({
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response([]);
					}
				});
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay(function() {

			// Search if the value has changed, or if the user retypes the same value (see #7434)
			var equalValues = this.term === this._value(),
				menuVisible = this.menu.element.is( ":visible" ),
				modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

			if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this.element.addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy(function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this.element.removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {
			// use ._close() instead of .close() so we don't cancel future searches
			this._close();
		}
	},

	close: function( event ) {
		this.cancelSearch = true;
		this._close( event );
	},

	_close: function( event ) {
		if ( this.menu.element.is( ":visible" ) ) {
			this.menu.element.hide();
			this.menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );
		}
	},

	_change: function( event ) {
		if ( this.previous !== this._value() ) {
			this._trigger( "change", event, { item: this.selectedItem } );
		}
	},

	_normalize: function( items ) {
		// assume all items have the right format when the first item is complete
		if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
			return items;
		}
		return $.map( items, function( item ) {
			if ( typeof item === "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend( {}, item, {
				label: item.label || item.value,
				value: item.value || item.label
			});
		});
	},

	_suggest: function( items ) {
		var ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		this.isNewMenu = true;
		this.menu.refresh();

		// size and position menu
		ul.show();
		this._resizeMenu();
		ul.position( $.extend({
			of: this.element
		}, this.options.position ) );

		if ( this.options.autoFocus ) {
			this.menu.next();
		}
	},

	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(
			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.element.outerWidth()
		) );
	},

	_renderMenu: function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		});
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
	},

	_renderItem: function( ul, item ) {
		return $( "<li>" ).text( item.label ).appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is( ":visible" ) ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
				this.menu.isLastItem() && /^next/.test( direction ) ) {

			if ( !this.isMultiLine ) {
				this._value( this.term );
			}

			this.menu.blur();
			return;
		}
		this.menu[ direction ]( event );
	},

	widget: function() {
		return this.menu.element;
	},

	_value: function() {
		return this.valueMethod.apply( this.element, arguments );
	},

	_keyEvent: function( keyEvent, event ) {
		if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
			this._move( keyEvent, event );

			// prevents moving cursor to beginning/end of the text field in some browsers
			event.preventDefault();
		}
	}
});

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
	},
	filter: function( array, term ) {
		var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
		return $.grep( array, function( value ) {
			return matcher.test( value.label || value.value || value );
		});
	}
});

// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No search results.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " results are" : " result is" ) +
					" available, use up and down arrow keys to navigate.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		this.liveRegion.children().hide();
		$( "<div>" ).text( message ).appendTo( this.liveRegion );
	}
});

var autocomplete = $.ui.autocomplete;


/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */


var lastActive,
	baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
	typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
	formResetHandler = function() {
		var form = $( this );
		setTimeout(function() {
			form.find( ":ui-button" ).button( "refresh" );
		}, 1 );
	},
	radioGroup = function( radio ) {
		var name = radio.name,
			form = radio.form,
			radios = $( [] );
		if ( name ) {
			name = name.replace( /'/g, "\\'" );
			if ( form ) {
				radios = $( form ).find( "[name='" + name + "'][type=radio]" );
			} else {
				radios = $( "[name='" + name + "'][type=radio]", radio.ownerDocument )
					.filter(function() {
						return !this.form;
					});
			}
		}
		return radios;
	};

$.widget( "ui.button", {
	version: "1.11.4",
	defaultElement: "<button>",
	options: {
		disabled: null,
		text: true,
		label: null,
		icons: {
			primary: null,
			secondary: null
		}
	},
	_create: function() {
		this.element.closest( "form" )
			.unbind( "reset" + this.eventNamespace )
			.bind( "reset" + this.eventNamespace, formResetHandler );

		if ( typeof this.options.disabled !== "boolean" ) {
			this.options.disabled = !!this.element.prop( "disabled" );
		} else {
			this.element.prop( "disabled", this.options.disabled );
		}

		this._determineButtonType();
		this.hasTitle = !!this.buttonElement.attr( "title" );

		var that = this,
			options = this.options,
			toggleButton = this.type === "checkbox" || this.type === "radio",
			activeClass = !toggleButton ? "ui-state-active" : "";

		if ( options.label === null ) {
			options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
		}

		this._hoverable( this.buttonElement );

		this.buttonElement
			.addClass( baseClasses )
			.attr( "role", "button" )
			.bind( "mouseenter" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return;
				}
				if ( this === lastActive ) {
					$( this ).addClass( "ui-state-active" );
				}
			})
			.bind( "mouseleave" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).removeClass( activeClass );
			})
			.bind( "click" + this.eventNamespace, function( event ) {
				if ( options.disabled ) {
					event.preventDefault();
					event.stopImmediatePropagation();
				}
			});

		// Can't use _focusable() because the element that receives focus
		// and the element that gets the ui-state-focus class are different
		this._on({
			focus: function() {
				this.buttonElement.addClass( "ui-state-focus" );
			},
			blur: function() {
				this.buttonElement.removeClass( "ui-state-focus" );
			}
		});

		if ( toggleButton ) {
			this.element.bind( "change" + this.eventNamespace, function() {
				that.refresh();
			});
		}

		if ( this.type === "checkbox" ) {
			this.buttonElement.bind( "click" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return false;
				}
			});
		} else if ( this.type === "radio" ) {
			this.buttonElement.bind( "click" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return false;
				}
				$( this ).addClass( "ui-state-active" );
				that.buttonElement.attr( "aria-pressed", "true" );

				var radio = that.element[ 0 ];
				radioGroup( radio )
					.not( radio )
					.map(function() {
						return $( this ).button( "widget" )[ 0 ];
					})
					.removeClass( "ui-state-active" )
					.attr( "aria-pressed", "false" );
			});
		} else {
			this.buttonElement
				.bind( "mousedown" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return false;
					}
					$( this ).addClass( "ui-state-active" );
					lastActive = this;
					that.document.one( "mouseup", function() {
						lastActive = null;
					});
				})
				.bind( "mouseup" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return false;
					}
					$( this ).removeClass( "ui-state-active" );
				})
				.bind( "keydown" + this.eventNamespace, function(event) {
					if ( options.disabled ) {
						return false;
					}
					if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
						$( this ).addClass( "ui-state-active" );
					}
				})
				// see #8559, we bind to blur here in case the button element loses
				// focus between keydown and keyup, it would be left in an "active" state
				.bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
					$( this ).removeClass( "ui-state-active" );
				});

			if ( this.buttonElement.is("a") ) {
				this.buttonElement.keyup(function(event) {
					if ( event.keyCode === $.ui.keyCode.SPACE ) {
						// TODO pass through original event correctly (just as 2nd argument doesn't work)
						$( this ).click();
					}
				});
			}
		}

		this._setOption( "disabled", options.disabled );
		this._resetButton();
	},

	_determineButtonType: function() {
		var ancestor, labelSelector, checked;

		if ( this.element.is("[type=checkbox]") ) {
			this.type = "checkbox";
		} else if ( this.element.is("[type=radio]") ) {
			this.type = "radio";
		} else if ( this.element.is("input") ) {
			this.type = "input";
		} else {
			this.type = "button";
		}

		if ( this.type === "checkbox" || this.type === "radio" ) {
			// we don't search against the document in case the element
			// is disconnected from the DOM
			ancestor = this.element.parents().last();
			labelSelector = "label[for='" + this.element.attr("id") + "']";
			this.buttonElement = ancestor.find( labelSelector );
			if ( !this.buttonElement.length ) {
				ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
				this.buttonElement = ancestor.filter( labelSelector );
				if ( !this.buttonElement.length ) {
					this.buttonElement = ancestor.find( labelSelector );
				}
			}
			this.element.addClass( "ui-helper-hidden-accessible" );

			checked = this.element.is( ":checked" );
			if ( checked ) {
				this.buttonElement.addClass( "ui-state-active" );
			}
			this.buttonElement.prop( "aria-pressed", checked );
		} else {
			this.buttonElement = this.element;
		}
	},

	widget: function() {
		return this.buttonElement;
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-helper-hidden-accessible" );
		this.buttonElement
			.removeClass( baseClasses + " ui-state-active " + typeClasses )
			.removeAttr( "role" )
			.removeAttr( "aria-pressed" )
			.html( this.buttonElement.find(".ui-button-text").html() );

		if ( !this.hasTitle ) {
			this.buttonElement.removeAttr( "title" );
		}
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "disabled" ) {
			this.widget().toggleClass( "ui-state-disabled", !!value );
			this.element.prop( "disabled", !!value );
			if ( value ) {
				if ( this.type === "checkbox" || this.type === "radio" ) {
					this.buttonElement.removeClass( "ui-state-focus" );
				} else {
					this.buttonElement.removeClass( "ui-state-focus ui-state-active" );
				}
			}
			return;
		}
		this._resetButton();
	},

	refresh: function() {
		//See #8237 & #8828
		var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

		if ( isDisabled !== this.options.disabled ) {
			this._setOption( "disabled", isDisabled );
		}
		if ( this.type === "radio" ) {
			radioGroup( this.element[0] ).each(function() {
				if ( $( this ).is( ":checked" ) ) {
					$( this ).button( "widget" )
						.addClass( "ui-state-active" )
						.attr( "aria-pressed", "true" );
				} else {
					$( this ).button( "widget" )
						.removeClass( "ui-state-active" )
						.attr( "aria-pressed", "false" );
				}
			});
		} else if ( this.type === "checkbox" ) {
			if ( this.element.is( ":checked" ) ) {
				this.buttonElement
					.addClass( "ui-state-active" )
					.attr( "aria-pressed", "true" );
			} else {
				this.buttonElement
					.removeClass( "ui-state-active" )
					.attr( "aria-pressed", "false" );
			}
		}
	},

	_resetButton: function() {
		if ( this.type === "input" ) {
			if ( this.options.label ) {
				this.element.val( this.options.label );
			}
			return;
		}
		var buttonElement = this.buttonElement.removeClass( typeClasses ),
			buttonText = $( "<span></span>", this.document[0] )
				.addClass( "ui-button-text" )
				.html( this.options.label )
				.appendTo( buttonElement.empty() )
				.text(),
			icons = this.options.icons,
			multipleIcons = icons.primary && icons.secondary,
			buttonClasses = [];

		if ( icons.primary || icons.secondary ) {
			if ( this.options.text ) {
				buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
			}

			if ( icons.primary ) {
				buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
			}

			if ( icons.secondary ) {
				buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
			}

			if ( !this.options.text ) {
				buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

				if ( !this.hasTitle ) {
					buttonElement.attr( "title", $.trim( buttonText ) );
				}
			}
		} else {
			buttonClasses.push( "ui-button-text-only" );
		}
		buttonElement.addClass( buttonClasses.join( " " ) );
	}
});

$.widget( "ui.buttonset", {
	version: "1.11.4",
	options: {
		items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
	},

	_create: function() {
		this.element.addClass( "ui-buttonset" );
	},

	_init: function() {
		this.refresh();
	},

	_setOption: function( key, value ) {
		if ( key === "disabled" ) {
			this.buttons.button( "option", key, value );
		}

		this._super( key, value );
	},

	refresh: function() {
		var rtl = this.element.css( "direction" ) === "rtl",
			allButtons = this.element.find( this.options.items ),
			existingButtons = allButtons.filter( ":ui-button" );

		// Initialize new buttons
		allButtons.not( ":ui-button" ).button();

		// Refresh existing buttons
		existingButtons.button( "refresh" );

		this.buttons = allButtons
			.map(function() {
				return $( this ).button( "widget" )[ 0 ];
			})
				.removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
				.filter( ":first" )
					.addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
				.end()
				.filter( ":last" )
					.addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
				.end()
			.end();
	},

	_destroy: function() {
		this.element.removeClass( "ui-buttonset" );
		this.buttons
			.map(function() {
				return $( this ).button( "widget" )[ 0 ];
			})
				.removeClass( "ui-corner-left ui-corner-right" )
			.end()
			.button( "destroy" );
	}
});

var button = $.ui.button;


/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */


$.extend($.ui, { datepicker: { version: "1.11.4" } });

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {
		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {
			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[""] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: ["January","February","March","April","May","June",
			"July","August","September","October","November","December"], // Names of months for drop-down and formatting
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
		dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional[""]);
	this.regional.en = $.extend( true, {}, this.regional[ "" ]);
	this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function(settings) {
		datepicker_extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function(target, settings) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = (nodeName === "div" || nodeName === "span");
		if (!target.id) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {});
		if (nodeName === "input") {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp);
		this._autoSize(inst);
		$.data(target, "datepicker", inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var showOn, buttonText, buttonImage,
			appendText = this._get(inst, "appendText"),
			isRTL = this._get(inst, "isRTL");

		if (inst.append) {
			inst.append.remove();
		}
		if (appendText) {
			inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
			input[isRTL ? "before" : "after"](inst.append);
		}

		input.unbind("focus", this._showDatepicker);

		if (inst.trigger) {
			inst.trigger.remove();
		}

		showOn = this._get(inst, "showOn");
		if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		}
		if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
			buttonText = this._get(inst, "buttonText");
			buttonImage = this._get(inst, "buttonImage");
			inst.trigger = $(this._get(inst, "buttonImageOnly") ?
				$("<img/>").addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$("<button type='button'></button>").addClass(this._triggerClass).
					html(!buttonImage ? buttonText : $("<img/>").attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? "before" : "after"](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
					$.datepicker._hideDatepicker();
				} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker(input[0]);
				} else {
					$.datepicker._showDatepicker(input[0]);
				}
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, "autoSize") && !inst.inline) {
			var findMax, max, maxI, i,
				date = new Date(2009, 12 - 1, 20), // Ensure double digits
				dateFormat = this._get(inst, "dateFormat");

			if (dateFormat.match(/[DM]/)) {
				findMax = function(names) {
					max = 0;
					maxI = 0;
					for (i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					"monthNames" : "monthNamesShort"))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
			}
			inst.input.attr("size", this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName)) {
			return;
		}
		divSpan.addClass(this.markerClassName).append(inst.dpDiv);
		$.data(target, "datepicker", inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if (!inst) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $("<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>");
			this._dialogInput.keydown(this._doKeyDown);
			$("body").append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], "datepicker", inst);
		}
		datepicker_extendRemove(inst.settings, settings || {});
		date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI) {
			$.blockUI(this.dpDiv);
		}
		$.data(this._dialogInput[0], "datepicker", inst);
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function(target) {
		var nodeName,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData(target, "datepicker");
		if (nodeName === "input") {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind("focus", this._showDatepicker).
				unbind("keydown", this._doKeyDown).
				unbind("keypress", this._doKeyPress).
				unbind("keyup", this._doKeyUp);
		} else if (nodeName === "div" || nodeName === "span") {
			$target.removeClass(this.markerClassName).empty();
		}

		if ( datepicker_instActive === inst ) {
			datepicker_instActive = null;
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = false;
			inst.trigger.filter("button").
				each(function() { this.disabled = false; }).end().
				filter("img").css({opacity: "1.0", cursor: ""});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().removeClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", false);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = true;
			inst.trigger.filter("button").
				each(function() { this.disabled = true; }).end().
				filter("img").css({opacity: "0.5", cursor: "default"});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().addClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", true);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] === target) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function(target) {
		try {
			return $.data(target, "datepicker");
		}
		catch (err) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function(target, name, value) {
		var settings, date, minDate, maxDate,
			inst = this._getInst(target);

		if (arguments.length === 2 && typeof name === "string") {
			return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name === "all" ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}

		settings = name || {};
		if (typeof name === "string") {
			settings = {};
			settings[name] = value;
		}

		if (inst) {
			if (this._curInst === inst) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker(target, true);
			minDate = this._getMinMaxDate(inst, "min");
			maxDate = this._getMinMaxDate(inst, "max");
			datepicker_extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
				inst.settings.minDate = this._formatDate(inst, minDate);
			}
			if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker(target);
				} else {
					this._enableDatepicker(target);
				}
			}
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline) {
			this._setDateFromField(inst, noDefault);
		}
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst(event.target),
			handled = true,
			isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing) {
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// trigger custom callback
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, "stepBigMonths") :
							-$.datepicker._get(inst, "stepMonths")), "M");
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, "stepBigMonths") :
							+$.datepicker._get(inst, "stepMonths")), "M");
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		} else {
			handled = false;
		}

		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var chars, chr,
			inst = $.datepicker._getInst(event.target);

		if ($.datepicker._get(inst, "constrainInput")) {
			chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
			chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var date,
			inst = $.datepicker._getInst(event.target);

		if (inst.input.val() !== inst.lastVal) {
			try {
				date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));

				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
			input = $("input", input.parentNode)[0];
		}

		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}

		beforeShow = $.datepicker._get(inst, "beforeShow");
		beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
			return;
		}
		datepicker_extendRemove(inst.settings, beforeShowSettings);

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);

		if ($.datepicker._inDialog) { // hide cursor
			input.value = "";
		}
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css("position") === "fixed";
			return !isFixed;
		});

		offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			"static" : (isFixed ? "fixed" : "absolute")), display: "none",
			left: offset.left + "px", top: offset.top + "px"});

		if (!inst.inline) {
			showAnim = $.datepicker._get(inst, "showAnim");
			duration = $.datepicker._get(inst, "duration");
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
			} else {
				inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);

		var origyearshtml,
			numMonths = this._getNumberOfMonths(inst),
			cols = numMonths[1],
			width = 17,
			activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

		if ( activeCell.length > 0 ) {
			datepicker_handleMouseover.apply( activeCell.get( 0 ) );
		}

		inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
		if (cols > 1) {
			inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
		}
		inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
			"Class"]("ui-datepicker-multi");
		inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
			"Class"]("ui-datepicker-rtl");

		if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.focus();
		}

		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
			viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var position,
			inst = this._getInst(obj),
			isRTL = this._get(inst, "isRTL");

		while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
			obj = obj[isRTL ? "previousSibling" : "nextSibling"];
		}

		position = $(obj).offset();
		return [position.left, position.top];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function(input) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if (!inst || (input && inst !== $.data(input, "datepicker"))) {
			return;
		}

		if (this._datepickerShowing) {
			showAnim = this._get(inst, "showAnim");
			duration = this._get(inst, "duration");
			postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
			} else {
				inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
					(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
			}

			if (!showAnim) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get(inst, "onClose");
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
			}

			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
				if ($.blockUI) {
					$.unblockUI();
					$("body").append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst) {
			return;
		}

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
				$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var date,
			target = $(id),
			inst = this._getInst(target[0]);

		if (this._get(inst, "gotoCurrent") && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		inst["selected" + (period === "M" ? "Month" : "Year")] =
		inst["draw" + (period === "M" ? "Month" : "Year")] =
			parseInt(select.options[select.selectedIndex].value,10);

		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var inst,
			target = $(id);

		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}

		inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $("a", td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		this._selectDate(target, "");
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var onSelect,
			target = $(id),
			inst = this._getInst(target[0]);

		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input) {
			inst.input.val(dateStr);
		}
		this._updateAlternate(inst);

		onSelect = this._get(inst, "onSelect");
		if (onSelect) {
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		} else if (inst.input) {
			inst.input.trigger("change"); // fire the change event
		}

		if (inst.inline){
			this._updateDatepicker(inst);
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) !== "object") {
				inst.input.focus(); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altFormat, date, dateStr,
			altField = this._get(inst, "altField");

		if (altField) { // update alternate field too
			altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
			date = this._getDate(inst);
			dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ""];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function(date) {
		var time,
			checkDate = new Date(date.getTime());

		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

		time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function (format, value, settings) {
		if (format == null || value == null) {
			throw "Invalid arguments";
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if (value === "") {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Extract a number from the string value
			getNumber = function(match) {
				var isDoubled = lookAhead(match),
					size = (match === "@" ? 14 : (match === "!" ? 20 :
					(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
					minSize = (match === "y" ? size : 1),
					digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
					num = value.substring(iValue).match(digits);
				if (!num) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			},
			// Extract a name from the string value and convert to an index
			getName = function(match, shortNames, longNames) {
				var index = -1,
					names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
						return [ [k, v] ];
					}).sort(function (a, b) {
						return -(a[1].length - b[1].length);
					});

				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index !== -1) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},
			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")){
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if (iValue < value.length){
			extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function (format, date, settings) {
		if (!date) {
			return "";
		}

		var iFormat,
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Format a number, with leading zero if necessary
			formatNumber = function(match, value, len) {
				var num = "" + value;
				if (lookAhead(match)) {
					while (num.length < len) {
						num = "0" + num;
					}
				}
				return num;
			},
			// Format a name, short or long as requested
			formatName = function(match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			},
			output = "",
			literal = false;

		if (date) {
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o",
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var iFormat,
			chars = "",
			literal = false,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					chars += format.charAt(iFormat);
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if (lookAhead("'")) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt(iFormat);
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() === inst.lastVal) {
			return;
		}

		var dateFormat = this._get(inst, "dateFormat"),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate(inst),
			date = defaultDate,
			settings = this._getFormatConfig(inst);

		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			dates = (noDefault ? "" : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			},
			offsetString = function(offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}

				var date = (offset.toLowerCase().match(/^c/) ?
					$.datepicker._getDate(inst) : null) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec(offset);

				while (matches) {
					switch (matches[2] || "d") {
						case "d" : case "D" :
							day += parseInt(matches[1],10); break;
						case "w" : case "W" :
							day += parseInt(matches[1],10) * 7; break;
						case "m" : case "M" :
							month += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y": case "Y" :
							year += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			},
			newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
				(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

		newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function(date) {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
			this._notifyChange(inst);
		}
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? "" : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, "stepMonths"),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find("[data-handler]").map(function () {
			var handler = {
				prev: function () {
					$.datepicker._adjustDate(id, -stepMonths, "M");
				},
				next: function () {
					$.datepicker._adjustDate(id, +stepMonths, "M");
				},
				hide: function () {
					$.datepicker._hideDatepicker();
				},
				today: function () {
					$.datepicker._gotoToday(id);
				},
				selectDay: function () {
					$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
					return false;
				},
				selectMonth: function () {
					$.datepicker._selectMonthYear(id, this, "M");
					return false;
				},
				selectYear: function () {
					$.datepicker._selectMonthYear(id, this, "Y");
					return false;
				}
			};
			$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
		});
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
			isRTL = this._get(inst, "isRTL"),
			showButtonPanel = this._get(inst, "showButtonPanel"),
			hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
			navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
			numMonths = this._getNumberOfMonths(inst),
			showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
			stepMonths = this._get(inst, "stepMonths"),
			isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
			currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
				new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get(inst, "prevText");
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));

		prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

		nextText = this._get(inst, "nextText");
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));

		next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

		currentText = this._get(inst, "currentText");
		gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

		controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get(inst, "closeText") + "</button>" : "");

		buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
			(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

		firstDay = parseInt(this._get(inst, "firstDay"),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);

		showWeek = this._get(inst, "showWeek");
		dayNames = this._get(inst, "dayNames");
		dayNamesMin = this._get(inst, "dayNamesMin");
		monthNames = this._get(inst, "monthNames");
		monthNamesShort = this._get(inst, "monthNamesShort");
		beforeShowDay = this._get(inst, "beforeShowDay");
		showOtherMonths = this._get(inst, "showOtherMonths");
		selectOtherMonths = this._get(inst, "selectOtherMonths");
		defaultDate = this._getDefaultDate(inst);
		html = "";
		dow;
		for (row = 0; row < numMonths[0]; row++) {
			group = "";
			this.maxRows = 4;
			for (col = 0; col < numMonths[1]; col++) {
				selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				cornerClass = " ui-corner-all";
				calender = "";
				if (isMultiMonth) {
					calender += "<div class='ui-datepicker-group";
					if (numMonths[1] > 1) {
						switch (col) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
							case numMonths[1]-1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
					(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
				for (dow = 0; dow < 7; dow++) { // days of the week
					day = (dow + firstDay) % 7;
					thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
						"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				}
				leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += "<tr>";
					tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get(inst, "calculateWeek")(printDate) + "</td>");
					for (dow = 0; dow < 7; dow++) { // create date picker days
						daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
						otherMonth = (printDate.getMonth() !== drawMonth);
						unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += "<td class='" +
							((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
							(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
							((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "") + // highlight selected day
							(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
							(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
							(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
							(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
							(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
							(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
							(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
							((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get(inst, "changeMonth"),
			changeYear = this._get(inst, "changeYear"),
			showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// month selection
		if (secondary || !changeMonth) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
		} else {
			inMinYear = (minDate && minDate.getFullYear() === drawYear);
			inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
					monthHtml += "<option value='" + month + "'" +
						(month === drawMonth ? " selected='selected'" : "") +
						">" + monthNamesShort[month] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if (!showMonthAfterYear) {
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
		}

		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if (secondary || !changeYear) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {
				// determine range of years to display
				years = this._get(inst, "yearRange").split(":");
				thisYear = new Date().getFullYear();
				determineYear = function(value) {
					var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				year = determineYear(years[0]);
				endYear = Math.max(year, determineYear(years[1] || ""));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for (; year <= endYear; year++) {
					inst.yearshtml += "<option value='" + year + "'" +
						(year === drawYear ? " selected='selected'" : "") +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get(inst, "yearSuffix");
		if (showMonthAfterYear) {
			html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period === "Y" ? offset : 0),
			month = inst.drawMonth + (period === "M" ? offset : 0),
			day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
			date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period === "M" || period === "Y") {
			this._notifyChange(inst);
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			newDate = (minDate && date < minDate ? minDate : date);
		return (maxDate && newDate > maxDate ? maxDate : newDate);
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, "onChangeMonthYear");
		if (onChange) {
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, "numberOfMonths");
		return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst),
			date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

		if (offset < 0) {
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		}
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			minYear = null,
			maxYear = null,
			years = this._get(inst, "yearRange");
			if (years){
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if ( yearSplit[0].match(/[+\-].*/) ) {
					minYear += currentYear;
				}
				if ( yearSplit[1].match(/[+\-].*/) ) {
					maxYear += currentYear;
				}
			}

		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()) &&
			(!minYear || date.getFullYear() >= minYear) &&
			(!maxYear || date.getFullYear() <= maxYear));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, "shortYearCutoff");
		shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
			monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day === "object" ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover(dpDiv) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		})
		.delegate( selector, "mouseover", datepicker_handleMouseover );
}

function datepicker_handleMouseover() {
	if (!$.datepicker._isDisabledDatepicker( datepicker_instActive.inline? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
		$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
		$(this).addClass("ui-state-hover");
		if (this.className.indexOf("ui-datepicker-prev") !== -1) {
			$(this).addClass("ui-datepicker-prev-hover");
		}
		if (this.className.indexOf("ui-datepicker-next") !== -1) {
			$(this).addClass("ui-datepicker-next-hover");
		}
	}
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = props[name];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick);
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ($("#"+$.datepicker._mainDivId).length === 0) {
		$("body").append($.datepicker.dpDiv);
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		typeof options === "string" ?
			$.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.11.4";

var datepicker = $.datepicker;


/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */


$.widget("ui.draggable", $.ui.mouse, {
	version: "1.11.4",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if (this.options.addClasses){
			this.element.addClass("ui-draggable");
		}
		if (this.options.disabled){
			this.element.addClass("ui-draggable-disabled");
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function(event) {
		var o = this.options;

		this._blurActiveElement( event );

		// among others, prevent a drag on a resizable-handle
		if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle(event);
		if (!this.handle) {
			return false;
		}

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map(function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		});
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var document = this.document[ 0 ];

		// Only need to blur if the event occurred on the draggable itself, see #10527
		if ( !this.handleElement.is( event.target ) ) {
			return;
		}

		// support: IE9
		// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
		try {

			// Support: IE9, IE10
			// If the <body> is blurred, IE will switch windows, see #9520
			if ( document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body" ) {

				// Blur any element that currently has focus, see #4261
				$( document.activeElement ).blur();
			}
		} catch ( error ) {}
	},

	_mouseStart: function(event) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		this.helper.addClass("ui-draggable-dragging");

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter(function() {
				return $( this ).css( "position" ) === "fixed";
			}).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if (this._trigger("start", event) === false) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}

		// Reset helper's right/bottom css if they're set and set explicit width/height instead
		// as this prevents resizing of elements with right/bottom set (see #7772)
		this._normalizeRightBottom();

		this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

		//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart(this, event);
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function(event, noPropagation) {
		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo("absolute");

		//Call plugins and callbacks and use the resulting position if something is returned
		if (!noPropagation) {
			var ui = this._uiHash();
			if (this._trigger("drag", event, ui) === false) {
				this._mouseUp({});
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		return false;
	},

	_mouseStop: function(event) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			dropped = $.ui.ddmanager.drop(this, event);
		}

		//if a drop comes from outside (a sortable)
		if (this.dropped) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
			$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				if (that._trigger("stop", event) !== false) {
					that._clear();
				}
			});
		} else {
			if (this._trigger("stop", event) !== false) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop(this, event);
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {
			// The interaction is over; whether or not the click resulted in a drag, focus the element
			this.element.focus();
		}

		return $.ui.mouse.prototype._mouseUp.call(this, event);
	},

	cancel: function() {

		if (this.helper.is(".ui-draggable-dragging")) {
			this._mouseUp({});
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function(event) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this.handleElement.addClass( "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this.handleElement.removeClass( "ui-draggable-handle" );
	},

	_createHelper: function(event) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if (!helper.parents("body").length) {
			helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
		}

		// http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
			helper.css("position", "absolute");
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = { left: +obj[0], top: +obj[1] || 0 };
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt(this.helper.css( "top" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt(this.helper.css( "left" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.element.css("marginLeft"), 10) || 0),
			top: (parseInt(this.element.css("marginTop"), 10) || 0),
			right: (parseInt(this.element.css("marginRight"), 10) || 0),
			bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document") {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function(d, pos) {

		if (!pos) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod)
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod)
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ){
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if (event.pageX - this.offset.click.left < containment[0]) {
					pageX = containment[0] + this.offset.click.left;
				}
				if (event.pageY - this.offset.click.top < containment[1]) {
					pageY = containment[1] + this.offset.click.top;
				}
				if (event.pageX - this.offset.click.left > containment[2]) {
					pageX = containment[2] + this.offset.click.left;
				}
				if (event.pageY - this.offset.click.top > containment[3]) {
					pageY = containment[3] + this.offset.click.top;
				}
			}

			if (o.grid) {
				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
				top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
				pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
				pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (
				pageY -																	// The absolute mouse position
				this.offset.click.top	-												// Click offset (relative to the element)
				this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (
				pageX -																	// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this.helper.removeClass("ui-draggable-dragging");
		if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	_normalizeRightBottom: function() {
		if ( this.options.axis !== "y" && this.helper.css( "right" ) !== "auto" ) {
			this.helper.width( this.helper.width() );
			this.helper.css( "right", "auto" );
		}
		if ( this.options.axis !== "x" && this.helper.css( "bottom" ) !== "auto" ) {
			this.helper.height( this.helper.height() );
			this.helper.css( "bottom", "auto" );
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

});

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		});

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each(function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// refreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger("activate", event, uiSortable);
			}
		});
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		});

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop(event);

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {
				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		});
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {
					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				});
			}

			if ( innermostIntersecting ) {
				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					});

					// hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );
					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {
				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					});
				}
			}
		});
	}
});

$.ui.plugin.add("draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if (t.css("cursor")) {
			o._cursor = t.css("cursor");
		}
		t.css("cursor", o.cursor);
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if (o._cursor) {
			$("body").css("cursor", o._cursor);
		}
	}
});

$.ui.plugin.add("draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if (t.css("opacity")) {
			o._opacity = t.css("opacity");
		}
		t.css("opacity", o.opacity);
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if (o._opacity) {
			$(ui.helper).css("opacity", o._opacity);
		}
	}
});

$.ui.plugin.add("draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] && i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if (!o.axis || o.axis !== "x") {
				if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				} else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
				}
			}

			if (!o.axis || o.axis !== "y") {
				if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				} else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
				}
			}

		}

		if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(i, event);
		}

	}
});

$.ui.plugin.add("draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
			var $t = $(this),
				$o = $t.offset();
			if (this !== i.element[0]) {
				i.snapElements.push({
					item: this,
					width: $t.outerWidth(), height: $t.outerHeight(),
					top: $o.top, left: $o.left
				});
			}
		});

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for (i = inst.snapElements.length - 1; i >= 0; i--){

			l = inst.snapElements[i].left - inst.margins.left;
			r = l + inst.snapElements[i].width;
			t = inst.snapElements[i].top - inst.margins.top;
			b = t + inst.snapElements[i].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
				if (inst.snapElements[i].snapping) {
					(inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
				}
				inst.snapElements[i].snapping = false;
				continue;
			}

			if (o.snapMode !== "inner") {
				ts = Math.abs(t - y2) <= d;
				bs = Math.abs(b - y1) <= d;
				ls = Math.abs(l - x2) <= d;
				rs = Math.abs(r - x1) <= d;
				if (ts) {
					ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top;
				}
				if (bs) {
					ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top;
				}
				if (ls) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left;
				}
				if (rs) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left;
				}
			}

			first = (ts || bs || ls || rs);

			if (o.snapMode !== "outer") {
				ts = Math.abs(t - y1) <= d;
				bs = Math.abs(b - y2) <= d;
				ls = Math.abs(l - x1) <= d;
				rs = Math.abs(r - x2) <= d;
				if (ts) {
					ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top;
				}
				if (bs) {
					ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top;
				}
				if (ls) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left;
				}
				if (rs) {
					ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left;
				}
			}

			if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
				(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
			}
			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

		}

	}
});

$.ui.plugin.add("draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray($(o.stack)).sort(function(a, b) {
				return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
			});

		if (!group.length) { return; }

		min = parseInt($(group[0]).css("zIndex"), 10) || 0;
		$(group).each(function(i) {
			$(this).css("zIndex", min + i);
		});
		this.css("zIndex", (min + group.length));
	}
});

$.ui.plugin.add("draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if (t.css("zIndex")) {
			o._zIndex = t.css("zIndex");
		}
		t.css("zIndex", o.zIndex);
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if (o._zIndex) {
			$(ui.helper).css("zIndex", o._zIndex);
		}
	}
});

var draggable = $.ui.draggable;


/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */


$.widget("ui.resizable", $.ui.mouse, {
	version: "1.11.4",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,
		// See #7960
		zIndex: 90,

		// callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: function( value ) {
		return parseInt( value, 10 ) || 0;
	},

	_isNumber: function( value ) {
		return !isNaN( parseInt( value, 10 ) );
	},

	_hasScroll: function( el, a ) {

		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},

	_create: function() {

		var n, i, handle, axis, hname,
			that = this,
			o = this.options;
		this.element.addClass("ui-resizable");

		$.extend(this, {
			_aspectRatio: !!(o.aspectRatio),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
		});

		// Wrap the element if it cannot hold child nodes
		if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {

			this.element.wrap(
				$("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})
			);

			this.element = this.element.parent().data(
				"ui-resizable", this.element.resizable( "instance" )
			);

			this.elementIsWrapper = true;

			this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			});
			this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			});
			// support: Safari
			// Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css("resize");
			this.originalElement.css("resize", "none");

			this._proportionallyResizeElements.push( this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			}) );

			// support: IE9
			// avoid IE jump (hard set the margin)
			this.originalElement.css({ margin: this.originalElement.css("margin") });

			this._proportionallyResize();
		}

		this.handles = o.handles ||
			( !$(".ui-resizable-handle", this.element).length ?
				"e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} );

		this._handles = $();
		if ( this.handles.constructor === String ) {

			if ( this.handles === "all") {
				this.handles = "n,e,s,w,se,sw,ne,nw";
			}

			n = this.handles.split(",");
			this.handles = {};

			for (i = 0; i < n.length; i++) {

				handle = $.trim(n[i]);
				hname = "ui-resizable-" + handle;
				axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

				axis.css({ zIndex: o.zIndex });

				// TODO : What's going on here?
				if ("se" === handle) {
					axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
				}

				this.handles[handle] = ".ui-resizable-" + handle;
				this.element.append(axis);
			}

		}

		this._renderAxis = function(target) {

			var i, axis, padPos, padWrapper;

			target = target || this.element;

			for (i in this.handles) {

				if (this.handles[i].constructor === String) {
					this.handles[i] = this.element.children( this.handles[ i ] ).first().show();
				} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
					this.handles[ i ] = $( this.handles[ i ] );
					this._on( this.handles[ i ], { "mousedown": that._mouseDown });
				}

				if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {

					axis = $(this.handles[i], this.element);

					padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

					padPos = [ "padding",
						/ne|nw|n/.test(i) ? "Top" :
						/se|sw|s/.test(i) ? "Bottom" :
						/^e$/.test(i) ? "Right" : "Left" ].join("");

					target.css(padPos, padWrapper);

					this._proportionallyResize();
				}

				this._handles = this._handles.add( this.handles[ i ] );
			}
		};

		// TODO: make renderAxis a prototype function
		this._renderAxis(this.element);

		this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
		this._handles.disableSelection();

		this._handles.mouseover(function() {
			if (!that.resizing) {
				if (this.className) {
					axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
				}
				that.axis = axis && axis[1] ? axis[1] : "se";
			}
		});

		if (o.autoHide) {
			this._handles.hide();
			$(this.element)
				.addClass("ui-resizable-autohide")
				.mouseenter(function() {
					if (o.disabled) {
						return;
					}
					$(this).removeClass("ui-resizable-autohide");
					that._handles.show();
				})
				.mouseleave(function() {
					if (o.disabled) {
						return;
					}
					if (!that.resizing) {
						$(this).addClass("ui-resizable-autohide");
						that._handles.hide();
					}
				});
		}

		this._mouseInit();
	},

	_destroy: function() {

		this._mouseDestroy();

		var wrapper,
			_destroy = function(exp) {
				$(exp)
					.removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
					.removeData("resizable")
					.removeData("ui-resizable")
					.unbind(".resizable")
					.find(".ui-resizable-handle")
						.remove();
			};

		// TODO: Unwrap at same DOM position
		if (this.elementIsWrapper) {
			_destroy(this.element);
			wrapper = this.element;
			this.originalElement.css({
				position: wrapper.css("position"),
				width: wrapper.outerWidth(),
				height: wrapper.outerHeight(),
				top: wrapper.css("top"),
				left: wrapper.css("left")
			}).insertAfter( wrapper );
			wrapper.remove();
		}

		this.originalElement.css("resize", this.originalResizeStyle);
		_destroy(this.originalElement);

		return this;
	},

	_mouseCapture: function(event) {
		var i, handle,
			capture = false;

		for (i in this.handles) {
			handle = $(this.handles[i])[0];
			if (handle === event.target || $.contains(handle, event.target)) {
				capture = true;
			}
		}

		return !this.options.disabled && capture;
	},

	_mouseStart: function(event) {

		var curleft, curtop, cursor,
			o = this.options,
			el = this.element;

		this.resizing = true;

		this._renderProxy();

		curleft = this._num(this.helper.css("left"));
		curtop = this._num(this.helper.css("top"));

		if (o.containment) {
			curleft += $(o.containment).scrollLeft() || 0;
			curtop += $(o.containment).scrollTop() || 0;
		}

		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };

		this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.sizeDiff = {
			width: el.outerWidth() - el.width(),
			height: el.outerHeight() - el.height()
		};

		this.originalPosition = { left: curleft, top: curtop };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		this.aspectRatio = (typeof o.aspectRatio === "number") ?
			o.aspectRatio :
			((this.originalSize.width / this.originalSize.height) || 1);

		cursor = $(".ui-resizable-" + this.axis).css("cursor");
		$("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

		el.addClass("ui-resizable-resizing");
		this._propagate("start", event);
		return true;
	},

	_mouseDrag: function(event) {

		var data, props,
			smp = this.originalMousePosition,
			a = this.axis,
			dx = (event.pageX - smp.left) || 0,
			dy = (event.pageY - smp.top) || 0,
			trigger = this._change[a];

		this._updatePrevProperties();

		if (!trigger) {
			return false;
		}

		data = trigger.apply(this, [ event, dx, dy ]);

		this._updateVirtualBoundaries(event.shiftKey);
		if (this._aspectRatio || event.shiftKey) {
			data = this._updateRatio(data, event);
		}

		data = this._respectSize(data, event);

		this._updateCache(data);

		this._propagate("resize", event);

		props = this._applyChanges();

		if ( !this._helper && this._proportionallyResizeElements.length ) {
			this._proportionallyResize();
		}

		if ( !$.isEmptyObject( props ) ) {
			this._updatePrevProperties();
			this._trigger( "resize", event, this.ui() );
			this._applyChanges();
		}

		return false;
	},

	_mouseStop: function(event) {

		this.resizing = false;
		var pr, ista, soffseth, soffsetw, s, left, top,
			o = this.options, that = this;

		if (this._helper) {

			pr = this._proportionallyResizeElements;
			ista = pr.length && (/textarea/i).test(pr[0].nodeName);
			soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
			soffsetw = ista ? 0 : that.sizeDiff.width;

			s = {
				width: (that.helper.width()  - soffsetw),
				height: (that.helper.height() - soffseth)
			};
			left = (parseInt(that.element.css("left"), 10) +
				(that.position.left - that.originalPosition.left)) || null;
			top = (parseInt(that.element.css("top"), 10) +
				(that.position.top - that.originalPosition.top)) || null;

			if (!o.animate) {
				this.element.css($.extend(s, { top: top, left: left }));
			}

			that.helper.height(that.size.height);
			that.helper.width(that.size.width);

			if (this._helper && !o.animate) {
				this._proportionallyResize();
			}
		}

		$("body").css("cursor", "auto");

		this.element.removeClass("ui-resizable-resizing");

		this._propagate("stop", event);

		if (this._helper) {
			this.helper.remove();
		}

		return false;

	},

	_updatePrevProperties: function() {
		this.prevPosition = {
			top: this.position.top,
			left: this.position.left
		};
		this.prevSize = {
			width: this.size.width,
			height: this.size.height
		};
	},

	_applyChanges: function() {
		var props = {};

		if ( this.position.top !== this.prevPosition.top ) {
			props.top = this.position.top + "px";
		}
		if ( this.position.left !== this.prevPosition.left ) {
			props.left = this.position.left + "px";
		}
		if ( this.size.width !== this.prevSize.width ) {
			props.width = this.size.width + "px";
		}
		if ( this.size.height !== this.prevSize.height ) {
			props.height = this.size.height + "px";
		}

		this.helper.css( props );

		return props;
	},

	_updateVirtualBoundaries: function(forceAspectRatio) {
		var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
			o = this.options;

		b = {
			minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
			maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
			minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
			maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
		};

		if (this._aspectRatio || forceAspectRatio) {
			pMinWidth = b.minHeight * this.aspectRatio;
			pMinHeight = b.minWidth / this.aspectRatio;
			pMaxWidth = b.maxHeight * this.aspectRatio;
			pMaxHeight = b.maxWidth / this.aspectRatio;

			if (pMinWidth > b.minWidth) {
				b.minWidth = pMinWidth;
			}
			if (pMinHeight > b.minHeight) {
				b.minHeight = pMinHeight;
			}
			if (pMaxWidth < b.maxWidth) {
				b.maxWidth = pMaxWidth;
			}
			if (pMaxHeight < b.maxHeight) {
				b.maxHeight = pMaxHeight;
			}
		}
		this._vBoundaries = b;
	},

	_updateCache: function(data) {
		this.offset = this.helper.offset();
		if (this._isNumber(data.left)) {
			this.position.left = data.left;
		}
		if (this._isNumber(data.top)) {
			this.position.top = data.top;
		}
		if (this._isNumber(data.height)) {
			this.size.height = data.height;
		}
		if (this._isNumber(data.width)) {
			this.size.width = data.width;
		}
	},

	_updateRatio: function( data ) {

		var cpos = this.position,
			csize = this.size,
			a = this.axis;

		if (this._isNumber(data.height)) {
			data.width = (data.height * this.aspectRatio);
		} else if (this._isNumber(data.width)) {
			data.height = (data.width / this.aspectRatio);
		}

		if (a === "sw") {
			data.left = cpos.left + (csize.width - data.width);
			data.top = null;
		}
		if (a === "nw") {
			data.top = cpos.top + (csize.height - data.height);
			data.left = cpos.left + (csize.width - data.width);
		}

		return data;
	},

	_respectSize: function( data ) {

		var o = this._vBoundaries,
			a = this.axis,
			ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
			ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
			isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
			isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
			dw = this.originalPosition.left + this.originalSize.width,
			dh = this.position.top + this.size.height,
			cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
		if (isminw) {
			data.width = o.minWidth;
		}
		if (isminh) {
			data.height = o.minHeight;
		}
		if (ismaxw) {
			data.width = o.maxWidth;
		}
		if (ismaxh) {
			data.height = o.maxHeight;
		}

		if (isminw && cw) {
			data.left = dw - o.minWidth;
		}
		if (ismaxw && cw) {
			data.left = dw - o.maxWidth;
		}
		if (isminh && ch) {
			data.top = dh - o.minHeight;
		}
		if (ismaxh && ch) {
			data.top = dh - o.maxHeight;
		}

		// Fixing jump error on top/left - bug #2330
		if (!data.width && !data.height && !data.left && data.top) {
			data.top = null;
		} else if (!data.width && !data.height && !data.top && data.left) {
			data.left = null;
		}

		return data;
	},

	_getPaddingPlusBorderDimensions: function( element ) {
		var i = 0,
			widths = [],
			borders = [
				element.css( "borderTopWidth" ),
				element.css( "borderRightWidth" ),
				element.css( "borderBottomWidth" ),
				element.css( "borderLeftWidth" )
			],
			paddings = [
				element.css( "paddingTop" ),
				element.css( "paddingRight" ),
				element.css( "paddingBottom" ),
				element.css( "paddingLeft" )
			];

		for ( ; i < 4; i++ ) {
			widths[ i ] = ( parseInt( borders[ i ], 10 ) || 0 );
			widths[ i ] += ( parseInt( paddings[ i ], 10 ) || 0 );
		}

		return {
			height: widths[ 0 ] + widths[ 2 ],
			width: widths[ 1 ] + widths[ 3 ]
		};
	},

	_proportionallyResize: function() {

		if (!this._proportionallyResizeElements.length) {
			return;
		}

		var prel,
			i = 0,
			element = this.helper || this.element;

		for ( ; i < this._proportionallyResizeElements.length; i++) {

			prel = this._proportionallyResizeElements[i];

			// TODO: Seems like a bug to cache this.outerDimensions
			// considering that we are in a loop.
			if (!this.outerDimensions) {
				this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
			}

			prel.css({
				height: (element.height() - this.outerDimensions.height) || 0,
				width: (element.width() - this.outerDimensions.width) || 0
			});

		}

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if (this._helper) {

			this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

			this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++o.zIndex //TODO: Don't modify option
			});

			this.helper
				.appendTo("body")
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function(event, dx) {
			return { width: this.originalSize.width + dx };
		},
		w: function(event, dx) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function(event, dx, dy) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function(event, dx, dy) {
			return { height: this.originalSize.height + dy };
		},
		se: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments),
				this._change.e.apply(this, [ event, dx, dy ]));
		},
		sw: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments),
				this._change.w.apply(this, [ event, dx, dy ]));
		},
		ne: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments),
				this._change.e.apply(this, [ event, dx, dy ]));
		},
		nw: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments),
				this._change.w.apply(this, [ event, dx, dy ]));
		}
	},

	_propagate: function(n, event) {
		$.ui.plugin.call(this, n, [ event, this.ui() ]);
		(n !== "resize" && this._trigger(n, event, this.ui()));
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "animate", {

	stop: function( event ) {
		var that = $(this).resizable( "instance" ),
			o = that.options,
			pr = that._proportionallyResizeElements,
			ista = pr.length && (/textarea/i).test(pr[0].nodeName),
			soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
			soffsetw = ista ? 0 : that.sizeDiff.width,
			style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
			left = (parseInt(that.element.css("left"), 10) +
				(that.position.left - that.originalPosition.left)) || null,
			top = (parseInt(that.element.css("top"), 10) +
				(that.position.top - that.originalPosition.top)) || null;

		that.element.animate(
			$.extend(style, top && left ? { top: top, left: left } : {}), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseInt(that.element.css("width"), 10),
						height: parseInt(that.element.css("height"), 10),
						top: parseInt(that.element.css("top"), 10),
						left: parseInt(that.element.css("left"), 10)
					};

					if (pr && pr.length) {
						$(pr[0]).css({ width: data.width, height: data.height });
					}

					// propagating resize, and updating values for each animation step
					that._updateCache(data);
					that._propagate("resize", event);

				}
			}
		);
	}

});

$.ui.plugin.add( "resizable", "containment", {

	start: function() {
		var element, p, co, ch, cw, width, height,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			el = that.element,
			oc = o.containment,
			ce = ( oc instanceof $ ) ? oc.get( 0 ) : ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

		if ( !ce ) {
			return;
		}

		that.containerElement = $( ce );

		if ( /document/.test( oc ) || oc === document ) {
			that.containerOffset = {
				left: 0,
				top: 0
			};
			that.containerPosition = {
				left: 0,
				top: 0
			};

			that.parentData = {
				element: $( document ),
				left: 0,
				top: 0,
				width: $( document ).width(),
				height: $( document ).height() || document.body.parentNode.scrollHeight
			};
		} else {
			element = $( ce );
			p = [];
			$([ "Top", "Right", "Left", "Bottom" ]).each(function( i, name ) {
				p[ i ] = that._num( element.css( "padding" + name ) );
			});

			that.containerOffset = element.offset();
			that.containerPosition = element.position();
			that.containerSize = {
				height: ( element.innerHeight() - p[ 3 ] ),
				width: ( element.innerWidth() - p[ 1 ] )
			};

			co = that.containerOffset;
			ch = that.containerSize.height;
			cw = that.containerSize.width;
			width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
			height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

			that.parentData = {
				element: ce,
				left: co.left,
				top: co.top,
				width: width,
				height: height
			};
		}
	},

	resize: function( event ) {
		var woset, hoset, isParent, isOffsetRelative,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cp = that.position,
			pRatio = that._aspectRatio || event.shiftKey,
			cop = {
				top: 0,
				left: 0
			},
			ce = that.containerElement,
			continueResize = true;

		if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
			cop = co;
		}

		if ( cp.left < ( that._helper ? co.left : 0 ) ) {
			that.size.width = that.size.width +
				( that._helper ?
					( that.position.left - co.left ) :
					( that.position.left - cop.left ) );

			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
			that.position.left = o.helper ? co.left : 0;
		}

		if ( cp.top < ( that._helper ? co.top : 0 ) ) {
			that.size.height = that.size.height +
				( that._helper ?
					( that.position.top - co.top ) :
					that.position.top );

			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
			that.position.top = that._helper ? co.top : 0;
		}

		isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
		isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

		if ( isParent && isOffsetRelative ) {
			that.offset.left = that.parentData.left + that.position.left;
			that.offset.top = that.parentData.top + that.position.top;
		} else {
			that.offset.left = that.element.offset().left;
			that.offset.top = that.element.offset().top;
		}

		woset = Math.abs( that.sizeDiff.width +
			(that._helper ?
				that.offset.left - cop.left :
				(that.offset.left - co.left)) );

		hoset = Math.abs( that.sizeDiff.height +
			(that._helper ?
				that.offset.top - cop.top :
				(that.offset.top - co.top)) );

		if ( woset + that.size.width >= that.parentData.width ) {
			that.size.width = that.parentData.width - woset;
			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
		}

		if ( hoset + that.size.height >= that.parentData.height ) {
			that.size.height = that.parentData.height - hoset;
			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
		}

		if ( !continueResize ) {
			that.position.left = that.prevPosition.left;
			that.position.top = that.prevPosition.top;
			that.size.width = that.prevSize.width;
			that.size.height = that.prevSize.height;
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cop = that.containerPosition,
			ce = that.containerElement,
			helper = $( that.helper ),
			ho = helper.offset(),
			w = helper.outerWidth() - that.sizeDiff.width,
			h = helper.outerHeight() - that.sizeDiff.height;

		if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
			$( this ).css({
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			});
		}

		if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
			$( this ).css({
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			});
		}
	}
});

$.ui.plugin.add("resizable", "alsoResize", {

	start: function() {
		var that = $(this).resizable( "instance" ),
			o = that.options;

		$(o.alsoResize).each(function() {
			var el = $(this);
			el.data("ui-resizable-alsoresize", {
				width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
				left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
			});
		});
	},

	resize: function(event, ui) {
		var that = $(this).resizable( "instance" ),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: (that.size.height - os.height) || 0,
				width: (that.size.width - os.width) || 0,
				top: (that.position.top - op.top) || 0,
				left: (that.position.left - op.left) || 0
			};

			$(o.alsoResize).each(function() {
				var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
					css = el.parents(ui.originalElement[0]).length ?
							[ "width", "height" ] :
							[ "width", "height", "top", "left" ];

				$.each(css, function(i, prop) {
					var sum = (start[prop] || 0) + (delta[prop] || 0);
					if (sum && sum >= 0) {
						style[prop] = sum || null;
					}
				});

				el.css(style);
			});
	},

	stop: function() {
		$(this).removeData("resizable-alsoresize");
	}
});

$.ui.plugin.add("resizable", "ghost", {

	start: function() {

		var that = $(this).resizable( "instance" ), o = that.options, cs = that.size;

		that.ghost = that.originalElement.clone();
		that.ghost
			.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: cs.height,
				width: cs.width,
				margin: 0,
				left: 0,
				top: 0
			})
			.addClass("ui-resizable-ghost")
			.addClass(typeof o.ghost === "string" ? o.ghost : "");

		that.ghost.appendTo(that.helper);

	},

	resize: function() {
		var that = $(this).resizable( "instance" );
		if (that.ghost) {
			that.ghost.css({
				position: "relative",
				height: that.size.height,
				width: that.size.width
			});
		}
	},

	stop: function() {
		var that = $(this).resizable( "instance" );
		if (that.ghost && that.helper) {
			that.helper.get(0).removeChild(that.ghost.get(0));
		}
	}

});

$.ui.plugin.add("resizable", "grid", {

	resize: function() {
		var outerDimensions,
			that = $(this).resizable( "instance" ),
			o = that.options,
			cs = that.size,
			os = that.originalSize,
			op = that.originalPosition,
			a = that.axis,
			grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
			gridX = (grid[0] || 1),
			gridY = (grid[1] || 1),
			ox = Math.round((cs.width - os.width) / gridX) * gridX,
			oy = Math.round((cs.height - os.height) / gridY) * gridY,
			newWidth = os.width + ox,
			newHeight = os.height + oy,
			isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
			isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
			isMinWidth = o.minWidth && (o.minWidth > newWidth),
			isMinHeight = o.minHeight && (o.minHeight > newHeight);

		o.grid = grid;

		if (isMinWidth) {
			newWidth += gridX;
		}
		if (isMinHeight) {
			newHeight += gridY;
		}
		if (isMaxWidth) {
			newWidth -= gridX;
		}
		if (isMaxHeight) {
			newHeight -= gridY;
		}

		if (/^(se|s|e)$/.test(a)) {
			that.size.width = newWidth;
			that.size.height = newHeight;
		} else if (/^(ne)$/.test(a)) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.top = op.top - oy;
		} else if (/^(sw)$/.test(a)) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.left = op.left - ox;
		} else {
			if ( newHeight - gridY <= 0 || newWidth - gridX <= 0) {
				outerDimensions = that._getPaddingPlusBorderDimensions( this );
			}

			if ( newHeight - gridY > 0 ) {
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else {
				newHeight = gridY - outerDimensions.height;
				that.size.height = newHeight;
				that.position.top = op.top + os.height - newHeight;
			}
			if ( newWidth - gridX > 0 ) {
				that.size.width = newWidth;
				that.position.left = op.left - ox;
			} else {
				newWidth = gridX - outerDimensions.width;
				that.size.width = newWidth;
				that.position.left = op.left + os.width - newWidth;
			}
		}
	}

});

var resizable = $.ui.resizable;


/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */


var dialog = $.widget( "ui.dialog", {
	version: "1.11.4",
	options: {
		appendTo: "body",
		autoOpen: true,
		buttons: [],
		closeOnEscape: true,
		closeText: "Close",
		dialogClass: "",
		draggable: true,
		hide: null,
		height: "auto",
		maxHeight: null,
		maxWidth: null,
		minHeight: 150,
		minWidth: 150,
		modal: false,
		position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit",
			// Ensure the titlebar is always visible
			using: function( pos ) {
				var topOffset = $( this ).css( pos ).offset().top;
				if ( topOffset < 0 ) {
					$( this ).css( "top", pos.top - topOffset );
				}
			}
		},
		resizable: true,
		show: null,
		title: null,
		width: 300,

		// callbacks
		beforeClose: null,
		close: null,
		drag: null,
		dragStart: null,
		dragStop: null,
		focus: null,
		open: null,
		resize: null,
		resizeStart: null,
		resizeStop: null
	},

	sizeRelatedOptions: {
		buttons: true,
		height: true,
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true,
		width: true
	},

	resizableRelatedOptions: {
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true
	},

	_create: function() {
		this.originalCss = {
			display: this.element[ 0 ].style.display,
			width: this.element[ 0 ].style.width,
			minHeight: this.element[ 0 ].style.minHeight,
			maxHeight: this.element[ 0 ].style.maxHeight,
			height: this.element[ 0 ].style.height
		};
		this.originalPosition = {
			parent: this.element.parent(),
			index: this.element.parent().children().index( this.element )
		};
		this.originalTitle = this.element.attr( "title" );
		this.options.title = this.options.title || this.originalTitle;

		this._createWrapper();

		this.element
			.show()
			.removeAttr( "title" )
			.addClass( "ui-dialog-content ui-widget-content" )
			.appendTo( this.uiDialog );

		this._createTitlebar();
		this._createButtonPane();

		if ( this.options.draggable && $.fn.draggable ) {
			this._makeDraggable();
		}
		if ( this.options.resizable && $.fn.resizable ) {
			this._makeResizable();
		}

		this._isOpen = false;

		this._trackFocus();
	},

	_init: function() {
		if ( this.options.autoOpen ) {
			this.open();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;
		if ( element && (element.jquery || element.nodeType) ) {
			return $( element );
		}
		return this.document.find( element || "body" ).eq( 0 );
	},

	_destroy: function() {
		var next,
			originalPosition = this.originalPosition;

		this._untrackInstance();
		this._destroyOverlay();

		this.element
			.removeUniqueId()
			.removeClass( "ui-dialog-content ui-widget-content" )
			.css( this.originalCss )
			// Without detaching first, the following becomes really slow
			.detach();

		this.uiDialog.stop( true, true ).remove();

		if ( this.originalTitle ) {
			this.element.attr( "title", this.originalTitle );
		}

		next = originalPosition.parent.children().eq( originalPosition.index );
		// Don't try to place the dialog next to itself (#8613)
		if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
			next.before( this.element );
		} else {
			originalPosition.parent.append( this.element );
		}
	},

	widget: function() {
		return this.uiDialog;
	},

	disable: $.noop,
	enable: $.noop,

	close: function( event ) {
		var activeElement,
			that = this;

		if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
			return;
		}

		this._isOpen = false;
		this._focusedElement = null;
		this._destroyOverlay();
		this._untrackInstance();

		if ( !this.opener.filter( ":focusable" ).focus().length ) {

			// support: IE9
			// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
			try {
				activeElement = this.document[ 0 ].activeElement;

				// Support: IE9, IE10
				// If the <body> is blurred, IE will switch windows, see #4520
				if ( activeElement && activeElement.nodeName.toLowerCase() !== "body" ) {

					// Hiding a focused element doesn't trigger blur in WebKit
					// so in case we have nothing to focus on, explicitly blur the active element
					// https://bugs.webkit.org/show_bug.cgi?id=47182
					$( activeElement ).blur();
				}
			} catch ( error ) {}
		}

		this._hide( this.uiDialog, this.options.hide, function() {
			that._trigger( "close", event );
		});
	},

	isOpen: function() {
		return this._isOpen;
	},

	moveToTop: function() {
		this._moveToTop();
	},

	_moveToTop: function( event, silent ) {
		var moved = false,
			zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map(function() {
				return +$( this ).css( "z-index" );
			}).get(),
			zIndexMax = Math.max.apply( null, zIndices );

		if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
			this.uiDialog.css( "z-index", zIndexMax + 1 );
			moved = true;
		}

		if ( moved && !silent ) {
			this._trigger( "focus", event );
		}
		return moved;
	},

	open: function() {
		var that = this;
		if ( this._isOpen ) {
			if ( this._moveToTop() ) {
				this._focusTabbable();
			}
			return;
		}

		this._isOpen = true;
		this.opener = $( this.document[ 0 ].activeElement );

		this._size();
		this._position();
		this._createOverlay();
		this._moveToTop( null, true );

		// Ensure the overlay is moved to the top with the dialog, but only when
		// opening. The overlay shouldn't move after the dialog is open so that
		// modeless dialogs opened after the modal dialog stack properly.
		if ( this.overlay ) {
			this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
		}

		this._show( this.uiDialog, this.options.show, function() {
			that._focusTabbable();
			that._trigger( "focus" );
		});

		// Track the dialog immediately upon openening in case a focus event
		// somehow occurs outside of the dialog before an element inside the
		// dialog is focused (#10152)
		this._makeFocusTarget();

		this._trigger( "open" );
	},

	_focusTabbable: function() {
		// Set focus to the first match:
		// 1. An element that was focused previously
		// 2. First element inside the dialog matching [autofocus]
		// 3. Tabbable element inside the content element
		// 4. Tabbable element inside the buttonpane
		// 5. The close button
		// 6. The dialog itself
		var hasFocus = this._focusedElement;
		if ( !hasFocus ) {
			hasFocus = this.element.find( "[autofocus]" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.element.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialog;
		}
		hasFocus.eq( 0 ).focus();
	},

	_keepFocus: function( event ) {
		function checkFocus() {
			var activeElement = this.document[0].activeElement,
				isActive = this.uiDialog[0] === activeElement ||
					$.contains( this.uiDialog[0], activeElement );
			if ( !isActive ) {
				this._focusTabbable();
			}
		}
		event.preventDefault();
		checkFocus.call( this );
		// support: IE
		// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
		// so we check again later
		this._delay( checkFocus );
	},

	_createWrapper: function() {
		this.uiDialog = $("<div>")
			.addClass( "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
				this.options.dialogClass )
			.hide()
			.attr({
				// Setting tabIndex makes the div focusable
				tabIndex: -1,
				role: "dialog"
			})
			.appendTo( this._appendTo() );

		this._on( this.uiDialog, {
			keydown: function( event ) {
				if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
						event.keyCode === $.ui.keyCode.ESCAPE ) {
					event.preventDefault();
					this.close( event );
					return;
				}

				// prevent tabbing out of dialogs
				if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
					return;
				}
				var tabbables = this.uiDialog.find( ":tabbable" ),
					first = tabbables.filter( ":first" ),
					last = tabbables.filter( ":last" );

				if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
					this._delay(function() {
						first.focus();
					});
					event.preventDefault();
				} else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
					this._delay(function() {
						last.focus();
					});
					event.preventDefault();
				}
			},
			mousedown: function( event ) {
				if ( this._moveToTop( event ) ) {
					this._focusTabbable();
				}
			}
		});

		// We assume that any existing aria-describedby attribute means
		// that the dialog content is marked up properly
		// otherwise we brute force the content as the description
		if ( !this.element.find( "[aria-describedby]" ).length ) {
			this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr( "id" )
			});
		}
	},

	_createTitlebar: function() {
		var uiDialogTitle;

		this.uiDialogTitlebar = $( "<div>" )
			.addClass( "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix" )
			.prependTo( this.uiDialog );
		this._on( this.uiDialogTitlebar, {
			mousedown: function( event ) {
				// Don't prevent click on close button (#8838)
				// Focusing a dialog that is partially scrolled out of view
				// causes the browser to scroll it into view, preventing the click event
				if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {
					// Dialog isn't getting focus when dragging (#8063)
					this.uiDialog.focus();
				}
			}
		});

		// support: IE
		// Use type="button" to prevent enter keypresses in textboxes from closing the
		// dialog in IE (#9312)
		this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
			.button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: false
			})
			.addClass( "ui-dialog-titlebar-close" )
			.appendTo( this.uiDialogTitlebar );
		this._on( this.uiDialogTitlebarClose, {
			click: function( event ) {
				event.preventDefault();
				this.close( event );
			}
		});

		uiDialogTitle = $( "<span>" )
			.uniqueId()
			.addClass( "ui-dialog-title" )
			.prependTo( this.uiDialogTitlebar );
		this._title( uiDialogTitle );

		this.uiDialog.attr({
			"aria-labelledby": uiDialogTitle.attr( "id" )
		});
	},

	_title: function( title ) {
		if ( !this.options.title ) {
			title.html( "&#160;" );
		}
		title.text( this.options.title );
	},

	_createButtonPane: function() {
		this.uiDialogButtonPane = $( "<div>" )
			.addClass( "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" );

		this.uiButtonSet = $( "<div>" )
			.addClass( "ui-dialog-buttonset" )
			.appendTo( this.uiDialogButtonPane );

		this._createButtons();
	},

	_createButtons: function() {
		var that = this,
			buttons = this.options.buttons;

		// if we already have a button pane, remove it
		this.uiDialogButtonPane.remove();
		this.uiButtonSet.empty();

		if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
			this.uiDialog.removeClass( "ui-dialog-buttons" );
			return;
		}

		$.each( buttons, function( name, props ) {
			var click, buttonOptions;
			props = $.isFunction( props ) ?
				{ click: props, text: name } :
				props;
			// Default to a non-submitting button
			props = $.extend( { type: "button" }, props );
			// Change the context for the click callback to be the main element
			click = props.click;
			props.click = function() {
				click.apply( that.element[ 0 ], arguments );
			};
			buttonOptions = {
				icons: props.icons,
				text: props.showText
			};
			delete props.icons;
			delete props.showText;
			$( "<button></button>", props )
				.button( buttonOptions )
				.appendTo( that.uiButtonSet );
		});
		this.uiDialog.addClass( "ui-dialog-buttons" );
		this.uiDialogButtonPane.appendTo( this.uiDialog );
	},

	_makeDraggable: function() {
		var that = this,
			options = this.options;

		function filteredUi( ui ) {
			return {
				position: ui.position,
				offset: ui.offset
			};
		}

		this.uiDialog.draggable({
			cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
			handle: ".ui-dialog-titlebar",
			containment: "document",
			start: function( event, ui ) {
				$( this ).addClass( "ui-dialog-dragging" );
				that._blockFrames();
				that._trigger( "dragStart", event, filteredUi( ui ) );
			},
			drag: function( event, ui ) {
				that._trigger( "drag", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var left = ui.offset.left - that.document.scrollLeft(),
					top = ui.offset.top - that.document.scrollTop();

				options.position = {
					my: "left top",
					at: "left" + (left >= 0 ? "+" : "") + left + " " +
						"top" + (top >= 0 ? "+" : "") + top,
					of: that.window
				};
				$( this ).removeClass( "ui-dialog-dragging" );
				that._unblockFrames();
				that._trigger( "dragStop", event, filteredUi( ui ) );
			}
		});
	},

	_makeResizable: function() {
		var that = this,
			options = this.options,
			handles = options.resizable,
			// .ui-resizable has position: relative defined in the stylesheet
			// but dialogs have to use absolute or fixed positioning
			position = this.uiDialog.css("position"),
			resizeHandles = typeof handles === "string" ?
				handles	:
				"n,e,s,w,se,sw,ne,nw";

		function filteredUi( ui ) {
			return {
				originalPosition: ui.originalPosition,
				originalSize: ui.originalSize,
				position: ui.position,
				size: ui.size
			};
		}

		this.uiDialog.resizable({
			cancel: ".ui-dialog-content",
			containment: "document",
			alsoResize: this.element,
			maxWidth: options.maxWidth,
			maxHeight: options.maxHeight,
			minWidth: options.minWidth,
			minHeight: this._minHeight(),
			handles: resizeHandles,
			start: function( event, ui ) {
				$( this ).addClass( "ui-dialog-resizing" );
				that._blockFrames();
				that._trigger( "resizeStart", event, filteredUi( ui ) );
			},
			resize: function( event, ui ) {
				that._trigger( "resize", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var offset = that.uiDialog.offset(),
					left = offset.left - that.document.scrollLeft(),
					top = offset.top - that.document.scrollTop();

				options.height = that.uiDialog.height();
				options.width = that.uiDialog.width();
				options.position = {
					my: "left top",
					at: "left" + (left >= 0 ? "+" : "") + left + " " +
						"top" + (top >= 0 ? "+" : "") + top,
					of: that.window
				};
				$( this ).removeClass( "ui-dialog-resizing" );
				that._unblockFrames();
				that._trigger( "resizeStop", event, filteredUi( ui ) );
			}
		})
		.css( "position", position );
	},

	_trackFocus: function() {
		this._on( this.widget(), {
			focusin: function( event ) {
				this._makeFocusTarget();
				this._focusedElement = $( event.target );
			}
		});
	},

	_makeFocusTarget: function() {
		this._untrackInstance();
		this._trackingInstances().unshift( this );
	},

	_untrackInstance: function() {
		var instances = this._trackingInstances(),
			exists = $.inArray( this, instances );
		if ( exists !== -1 ) {
			instances.splice( exists, 1 );
		}
	},

	_trackingInstances: function() {
		var instances = this.document.data( "ui-dialog-instances" );
		if ( !instances ) {
			instances = [];
			this.document.data( "ui-dialog-instances", instances );
		}
		return instances;
	},

	_minHeight: function() {
		var options = this.options;

		return options.height === "auto" ?
			options.minHeight :
			Math.min( options.minHeight, options.height );
	},

	_position: function() {
		// Need to show the dialog to get the actual offset in the position plugin
		var isVisible = this.uiDialog.is( ":visible" );
		if ( !isVisible ) {
			this.uiDialog.show();
		}
		this.uiDialog.position( this.options.position );
		if ( !isVisible ) {
			this.uiDialog.hide();
		}
	},

	_setOptions: function( options ) {
		var that = this,
			resize = false,
			resizableOptions = {};

		$.each( options, function( key, value ) {
			that._setOption( key, value );

			if ( key in that.sizeRelatedOptions ) {
				resize = true;
			}
			if ( key in that.resizableRelatedOptions ) {
				resizableOptions[ key ] = value;
			}
		});

		if ( resize ) {
			this._size();
			this._position();
		}
		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", resizableOptions );
		}
	},

	_setOption: function( key, value ) {
		var isDraggable, isResizable,
			uiDialog = this.uiDialog;

		if ( key === "dialogClass" ) {
			uiDialog
				.removeClass( this.options.dialogClass )
				.addClass( value );
		}

		if ( key === "disabled" ) {
			return;
		}

		this._super( key, value );

		if ( key === "appendTo" ) {
			this.uiDialog.appendTo( this._appendTo() );
		}

		if ( key === "buttons" ) {
			this._createButtons();
		}

		if ( key === "closeText" ) {
			this.uiDialogTitlebarClose.button({
				// Ensure that we always pass a string
				label: "" + value
			});
		}

		if ( key === "draggable" ) {
			isDraggable = uiDialog.is( ":data(ui-draggable)" );
			if ( isDraggable && !value ) {
				uiDialog.draggable( "destroy" );
			}

			if ( !isDraggable && value ) {
				this._makeDraggable();
			}
		}

		if ( key === "position" ) {
			this._position();
		}

		if ( key === "resizable" ) {
			// currently resizable, becoming non-resizable
			isResizable = uiDialog.is( ":data(ui-resizable)" );
			if ( isResizable && !value ) {
				uiDialog.resizable( "destroy" );
			}

			// currently resizable, changing handles
			if ( isResizable && typeof value === "string" ) {
				uiDialog.resizable( "option", "handles", value );
			}

			// currently non-resizable, becoming resizable
			if ( !isResizable && value !== false ) {
				this._makeResizable();
			}
		}

		if ( key === "title" ) {
			this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
		}
	},

	_size: function() {
		// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
		// divs will both have width and height set, so we need to reset them
		var nonContentHeight, minContentHeight, maxContentHeight,
			options = this.options;

		// Reset content sizing
		this.element.show().css({
			width: "auto",
			minHeight: 0,
			maxHeight: "none",
			height: 0
		});

		if ( options.minWidth > options.width ) {
			options.width = options.minWidth;
		}

		// reset wrapper sizing
		// determine the height of all the non-content elements
		nonContentHeight = this.uiDialog.css({
				height: "auto",
				width: options.width
			})
			.outerHeight();
		minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
		maxContentHeight = typeof options.maxHeight === "number" ?
			Math.max( 0, options.maxHeight - nonContentHeight ) :
			"none";

		if ( options.height === "auto" ) {
			this.element.css({
				minHeight: minContentHeight,
				maxHeight: maxContentHeight,
				height: "auto"
			});
		} else {
			this.element.height( Math.max( 0, options.height - nonContentHeight ) );
		}

		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
		}
	},

	_blockFrames: function() {
		this.iframeBlocks = this.document.find( "iframe" ).map(function() {
			var iframe = $( this );

			return $( "<div>" )
				.css({
					position: "absolute",
					width: iframe.outerWidth(),
					height: iframe.outerHeight()
				})
				.appendTo( iframe.parent() )
				.offset( iframe.offset() )[0];
		});
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_allowInteraction: function( event ) {
		if ( $( event.target ).closest( ".ui-dialog" ).length ) {
			return true;
		}

		// TODO: Remove hack when datepicker implements
		// the .ui-front logic (#8989)
		return !!$( event.target ).closest( ".ui-datepicker" ).length;
	},

	_createOverlay: function() {
		if ( !this.options.modal ) {
			return;
		}

		// We use a delay in case the overlay is created from an
		// event that we're going to be cancelling (#2804)
		var isOpening = true;
		this._delay(function() {
			isOpening = false;
		});

		if ( !this.document.data( "ui-dialog-overlays" ) ) {

			// Prevent use of anchors and inputs
			// Using _on() for an event handler shared across many instances is
			// safe because the dialogs stack and must be closed in reverse order
			this._on( this.document, {
				focusin: function( event ) {
					if ( isOpening ) {
						return;
					}

					if ( !this._allowInteraction( event ) ) {
						event.preventDefault();
						this._trackingInstances()[ 0 ]._focusTabbable();
					}
				}
			});
		}

		this.overlay = $( "<div>" )
			.addClass( "ui-widget-overlay ui-front" )
			.appendTo( this._appendTo() );
		this._on( this.overlay, {
			mousedown: "_keepFocus"
		});
		this.document.data( "ui-dialog-overlays",
			(this.document.data( "ui-dialog-overlays" ) || 0) + 1 );
	},

	_destroyOverlay: function() {
		if ( !this.options.modal ) {
			return;
		}

		if ( this.overlay ) {
			var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

			if ( !overlays ) {
				this.document
					.unbind( "focusin" )
					.removeData( "ui-dialog-overlays" );
			} else {
				this.document.data( "ui-dialog-overlays", overlays );
			}

			this.overlay.remove();
			this.overlay = null;
		}
	}
});


/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */


$.widget( "ui.droppable", {
	version: "1.11.4",
	widgetEventPrefix: "drop",
	options: {
		accept: "*",
		activeClass: false,
		addClasses: true,
		greedy: false,
		hoverClass: false,
		scope: "default",
		tolerance: "intersect",

		// callbacks
		activate: null,
		deactivate: null,
		drop: null,
		out: null,
		over: null
	},
	_create: function() {

		var proportions,
			o = this.options,
			accept = o.accept;

		this.isover = false;
		this.isout = true;

		this.accept = $.isFunction( accept ) ? accept : function( d ) {
			return d.is( accept );
		};

		this.proportions = function( /* valueToWrite */ ) {
			if ( arguments.length ) {
				// Store the droppable's proportions
				proportions = arguments[ 0 ];
			} else {
				// Retrieve or derive the droppable's proportions
				return proportions ?
					proportions :
					proportions = {
						width: this.element[ 0 ].offsetWidth,
						height: this.element[ 0 ].offsetHeight
					};
			}
		};

		this._addToManager( o.scope );

		o.addClasses && this.element.addClass( "ui-droppable" );

	},

	_addToManager: function( scope ) {
		// Add the reference and positions to the manager
		$.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
		$.ui.ddmanager.droppables[ scope ].push( this );
	},

	_splice: function( drop ) {
		var i = 0;
		for ( ; i < drop.length; i++ ) {
			if ( drop[ i ] === this ) {
				drop.splice( i, 1 );
			}
		}
	},

	_destroy: function() {
		var drop = $.ui.ddmanager.droppables[ this.options.scope ];

		this._splice( drop );

		this.element.removeClass( "ui-droppable ui-droppable-disabled" );
	},

	_setOption: function( key, value ) {

		if ( key === "accept" ) {
			this.accept = $.isFunction( value ) ? value : function( d ) {
				return d.is( value );
			};
		} else if ( key === "scope" ) {
			var drop = $.ui.ddmanager.droppables[ this.options.scope ];

			this._splice( drop );
			this._addToManager( value );
		}

		this._super( key, value );
	},

	_activate: function( event ) {
		var draggable = $.ui.ddmanager.current;
		if ( this.options.activeClass ) {
			this.element.addClass( this.options.activeClass );
		}
		if ( draggable ){
			this._trigger( "activate", event, this.ui( draggable ) );
		}
	},

	_deactivate: function( event ) {
		var draggable = $.ui.ddmanager.current;
		if ( this.options.activeClass ) {
			this.element.removeClass( this.options.activeClass );
		}
		if ( draggable ){
			this._trigger( "deactivate", event, this.ui( draggable ) );
		}
	},

	_over: function( event ) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
			if ( this.options.hoverClass ) {
				this.element.addClass( this.options.hoverClass );
			}
			this._trigger( "over", event, this.ui( draggable ) );
		}

	},

	_out: function( event ) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
			if ( this.options.hoverClass ) {
				this.element.removeClass( this.options.hoverClass );
			}
			this._trigger( "out", event, this.ui( draggable ) );
		}

	},

	_drop: function( event, custom ) {

		var draggable = custom || $.ui.ddmanager.current,
			childrenIntersection = false;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return false;
		}

		this.element.find( ":data(ui-droppable)" ).not( ".ui-draggable-dragging" ).each(function() {
			var inst = $( this ).droppable( "instance" );
			if (
				inst.options.greedy &&
				!inst.options.disabled &&
				inst.options.scope === draggable.options.scope &&
				inst.accept.call( inst.element[ 0 ], ( draggable.currentItem || draggable.element ) ) &&
				$.ui.intersect( draggable, $.extend( inst, { offset: inst.element.offset() } ), inst.options.tolerance, event )
			) { childrenIntersection = true; return false; }
		});
		if ( childrenIntersection ) {
			return false;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
			if ( this.options.activeClass ) {
				this.element.removeClass( this.options.activeClass );
			}
			if ( this.options.hoverClass ) {
				this.element.removeClass( this.options.hoverClass );
			}
			this._trigger( "drop", event, this.ui( draggable ) );
			return this.element;
		}

		return false;

	},

	ui: function( c ) {
		return {
			draggable: ( c.currentItem || c.element ),
			helper: c.helper,
			position: c.position,
			offset: c.positionAbs
		};
	}

});

$.ui.intersect = (function() {
	function isOverAxis( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	}

	return function( draggable, droppable, toleranceMode, event ) {

		if ( !droppable.offset ) {
			return false;
		}

		var x1 = ( draggable.positionAbs || draggable.position.absolute ).left + draggable.margins.left,
			y1 = ( draggable.positionAbs || draggable.position.absolute ).top + draggable.margins.top,
			x2 = x1 + draggable.helperProportions.width,
			y2 = y1 + draggable.helperProportions.height,
			l = droppable.offset.left,
			t = droppable.offset.top,
			r = l + droppable.proportions().width,
			b = t + droppable.proportions().height;

		switch ( toleranceMode ) {
		case "fit":
			return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
		case "intersect":
			return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
				x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
				t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
				y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
		case "pointer":
			return isOverAxis( event.pageY, t, droppable.proportions().height ) && isOverAxis( event.pageX, l, droppable.proportions().width );
		case "touch":
			return (
				( y1 >= t && y1 <= b ) || // Top edge touching
				( y2 >= t && y2 <= b ) || // Bottom edge touching
				( y1 < t && y2 > b ) // Surrounded vertically
			) && (
				( x1 >= l && x1 <= r ) || // Left edge touching
				( x2 >= l && x2 <= r ) || // Right edge touching
				( x1 < l && x2 > r ) // Surrounded horizontally
			);
		default:
			return false;
		}
	};
})();

/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
	current: null,
	droppables: { "default": [] },
	prepareOffsets: function( t, event ) {

		var i, j,
			m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
			type = event ? event.type : null, // workaround for #2317
			list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

		droppablesLoop: for ( i = 0; i < m.length; i++ ) {

			// No disabled and non-accepted
			if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ], ( t.currentItem || t.element ) ) ) ) {
				continue;
			}

			// Filter out elements in the current dragged item
			for ( j = 0; j < list.length; j++ ) {
				if ( list[ j ] === m[ i ].element[ 0 ] ) {
					m[ i ].proportions().height = 0;
					continue droppablesLoop;
				}
			}

			m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
			if ( !m[ i ].visible ) {
				continue;
			}

			// Activate the droppable if used directly from draggables
			if ( type === "mousedown" ) {
				m[ i ]._activate.call( m[ i ], event );
			}

			m[ i ].offset = m[ i ].element.offset();
			m[ i ].proportions({ width: m[ i ].element[ 0 ].offsetWidth, height: m[ i ].element[ 0 ].offsetHeight });

		}

	},
	drop: function( draggable, event ) {

		var dropped = false;
		// Create a copy of the droppables in case the list changes during the drop (#9116)
		$.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

			if ( !this.options ) {
				return;
			}
			if ( !this.options.disabled && this.visible && $.ui.intersect( draggable, this, this.options.tolerance, event ) ) {
				dropped = this._drop.call( this, event ) || dropped;
			}

			if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
				this.isout = true;
				this.isover = false;
				this._deactivate.call( this, event );
			}

		});
		return dropped;

	},
	dragStart: function( draggable, event ) {
		// Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
		draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
			if ( !draggable.options.refreshPositions ) {
				$.ui.ddmanager.prepareOffsets( draggable, event );
			}
		});
	},
	drag: function( draggable, event ) {

		// If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
		if ( draggable.options.refreshPositions ) {
			$.ui.ddmanager.prepareOffsets( draggable, event );
		}

		// Run through all droppables and check their positions based on specific tolerance options
		$.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

			if ( this.options.disabled || this.greedyChild || !this.visible ) {
				return;
			}

			var parentInstance, scope, parent,
				intersects = $.ui.intersect( draggable, this, this.options.tolerance, event ),
				c = !intersects && this.isover ? "isout" : ( intersects && !this.isover ? "isover" : null );
			if ( !c ) {
				return;
			}

			if ( this.options.greedy ) {
				// find droppable parents with same scope
				scope = this.options.scope;
				parent = this.element.parents( ":data(ui-droppable)" ).filter(function() {
					return $( this ).droppable( "instance" ).options.scope === scope;
				});

				if ( parent.length ) {
					parentInstance = $( parent[ 0 ] ).droppable( "instance" );
					parentInstance.greedyChild = ( c === "isover" );
				}
			}

			// we just moved into a greedy child
			if ( parentInstance && c === "isover" ) {
				parentInstance.isover = false;
				parentInstance.isout = true;
				parentInstance._out.call( parentInstance, event );
			}

			this[ c ] = true;
			this[c === "isout" ? "isover" : "isout"] = false;
			this[c === "isover" ? "_over" : "_out"].call( this, event );

			// we just moved out of a greedy child
			if ( parentInstance && c === "isout" ) {
				parentInstance.isout = false;
				parentInstance.isover = true;
				parentInstance._over.call( parentInstance, event );
			}
		});

	},
	dragStop: function( draggable, event ) {
		draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
		// Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
		if ( !draggable.options.refreshPositions ) {
			$.ui.ddmanager.prepareOffsets( draggable, event );
		}
	}
};

var droppable = $.ui.droppable;


/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */


var dataSpace = "ui-effects-",

	// Create a local jQuery because jQuery Color relies on it and the
	// global may not exist with AMD and a custom build (#10199)
	jQuery = $;

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	// plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
	// a set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		} ],

	// jQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},
	support = color.support = {},

	// element for support tests
	supportElem = jQuery( "<p>" )[ 0 ],

	// colors = jQuery.Color.names
	colors,

	// local aliases of functions called often
	each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
});

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return (allowEmpty || !prop.def) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	// IE will pass in empty strings as value for alpha,
	// which will hit this case
	if ( isNaN( value ) ) {
		return prop.def;
	}

	if ( type.mod ) {
		// we add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return (value + type.mod) % type.mod;
	}

	// for now all property types without mod have min and max
	return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// if this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// exit each( stringParsers ) here because we matched
			return false;
		}
	});

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// if this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = jQuery.type( red ),
			rgba = this._rgba = [];

		// more than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			});
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				});
			} else {
				each( spaces, function( spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// if the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// if the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// this is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					});

					// everything defined but alpha?
					if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
						// use the default of 1
						inst[ cache ][ 3 ] = 1;
						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				});
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if (isCache) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				});
			}
			return same;
		});
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		});
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// if null, don't override start value
			if ( endValue === null ) {
				return;
			}
			// if null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		});
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {
		// if we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		}));
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			});

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			});

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		}).join("");
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};

each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = jQuery.type( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		});

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {
		// alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var vtype = jQuery.type( value ),
				fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
				local = this[ fn ](),
				cur = local[ prop.idx ],
				match;

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = jQuery.type( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	});
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, curElem,
					backgroundColor = "";

				if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						while (
							(backgroundColor === "" || backgroundColor === "transparent") &&
							curElem && curElem.style
						) {
							try {
								backgroundColor = jQuery.css( curElem, "backgroundColor" );
								curElem = curElem.parentNode;
							} catch ( e ) {
							}
						}

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				try {
					elem.style[ hook ] = value;
				} catch ( e ) {
					// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
				}
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		});
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

})( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
	$.fx.step[ prop ] = function( fx ) {
		if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
			jQuery.style( fx.elem, prop, fx.end );
			fx.setAttr = true;
		}
	};
});

function getElementStyles( elem ) {
	var key, len,
		style = elem.ownerDocument.defaultView ?
			elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
			elem.currentStyle,
		styles = {};

	if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
		len = style.length;
		while ( len-- ) {
			key = style[ len ];
			if ( typeof style[ key ] === "string" ) {
				styles[ $.camelCase( key ) ] = style[ key ];
			}
		}
	// support: Opera, IE <9
	} else {
		for ( key in style ) {
			if ( typeof style[ key ] === "string" ) {
				styles[ key ] = style[ key ];
			}
		}
	}

	return styles;
}

function styleDifference( oldStyle, newStyle ) {
	var diff = {},
		name, value;

	for ( name in newStyle ) {
		value = newStyle[ name ];
		if ( oldStyle[ name ] !== value ) {
			if ( !shorthandStyles[ name ] ) {
				if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
					diff[ name ] = value;
				}
			}
		}
	}

	return diff;
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

$.effects.animateClass = function( value, duration, easing, callback ) {
	var o = $.speed( duration, easing, callback );

	return this.queue( function() {
		var animated = $( this ),
			baseClass = animated.attr( "class" ) || "",
			applyClassChange,
			allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

		// map the animated objects to store the original styles.
		allAnimations = allAnimations.map(function() {
			var el = $( this );
			return {
				el: el,
				start: getElementStyles( this )
			};
		});

		// apply class change
		applyClassChange = function() {
			$.each( classAnimationActions, function(i, action) {
				if ( value[ action ] ) {
					animated[ action + "Class" ]( value[ action ] );
				}
			});
		};
		applyClassChange();

		// map all animated objects again - calculate new styles and diff
		allAnimations = allAnimations.map(function() {
			this.end = getElementStyles( this.el[ 0 ] );
			this.diff = styleDifference( this.start, this.end );
			return this;
		});

		// apply original class
		animated.attr( "class", baseClass );

		// map all animated objects again - this time collecting a promise
		allAnimations = allAnimations.map(function() {
			var styleInfo = this,
				dfd = $.Deferred(),
				opts = $.extend({}, o, {
					queue: false,
					complete: function() {
						dfd.resolve( styleInfo );
					}
				});

			this.el.animate( this.diff, opts );
			return dfd.promise();
		});

		// once all animations have completed:
		$.when.apply( $, allAnimations.get() ).done(function() {

			// set the final class
			applyClassChange();

			// for each animated element,
			// clear all css properties that were animated
			$.each( arguments, function() {
				var el = this.el;
				$.each( this.diff, function(key) {
					el.css( key, "" );
				});
			});

			// this is guarnteed to be there if you use jQuery.speed()
			// it also handles dequeuing the next anim...
			o.complete.call( animated[ 0 ] );
		});
	});
};

$.fn.extend({
	addClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return speed ?
				$.effects.animateClass.call( this,
					{ add: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.addClass ),

	removeClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return arguments.length > 1 ?
				$.effects.animateClass.call( this,
					{ remove: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.removeClass ),

	toggleClass: (function( orig ) {
		return function( classNames, force, speed, easing, callback ) {
			if ( typeof force === "boolean" || force === undefined ) {
				if ( !speed ) {
					// without speed parameter
					return orig.apply( this, arguments );
				} else {
					return $.effects.animateClass.call( this,
						(force ? { add: classNames } : { remove: classNames }),
						speed, easing, callback );
				}
			} else {
				// without force parameter
				return $.effects.animateClass.call( this,
					{ toggle: classNames }, force, speed, easing );
			}
		};
	})( $.fn.toggleClass ),

	switchClass: function( remove, add, speed, easing, callback) {
		return $.effects.animateClass.call( this, {
			add: add,
			remove: remove
		}, speed, easing, callback );
	}
});

})();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(function() {

$.extend( $.effects, {
	version: "1.11.4",

	// Saves a set of properties in a data storage
	save: function( element, set ) {
		for ( var i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
			}
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function( element, set ) {
		var val, i;
		for ( i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				val = element.data( dataSpace + set[ i ] );
				// support: jQuery 1.6.2
				// http://bugs.jquery.com/ticket/9917
				// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
				// We can't differentiate between "" and 0 here, so we just assume
				// empty string since it's likely to be a more common value...
				if ( val === undefined ) {
					val = "";
				}
				element.css( set[ i ], val );
			}
		}
	},

	setMode: function( el, mode ) {
		if (mode === "toggle") {
			mode = el.is( ":hidden" ) ? "show" : "hide";
		}
		return mode;
	},

	// Translates a [top,left] array into a baseline value
	// this should be a little more flexible in the future to handle a string & hash
	getBaseline: function( origin, original ) {
		var y, x;
		switch ( origin[ 0 ] ) {
			case "top": y = 0; break;
			case "middle": y = 0.5; break;
			case "bottom": y = 1; break;
			default: y = origin[ 0 ] / original.height;
		}
		switch ( origin[ 1 ] ) {
			case "left": x = 0; break;
			case "center": x = 0.5; break;
			case "right": x = 1; break;
			default: x = origin[ 1 ] / original.width;
		}
		return {
			x: x,
			y: y
		};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function( element ) {

		// if the element is already wrapped, return it
		if ( element.parent().is( ".ui-effects-wrapper" )) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				"float": element.css( "float" )
			},
			wrapper = $( "<div></div>" )
				.addClass( "ui-effects-wrapper" )
				.css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
			// Store the size in case width/height are defined in % - Fixes #5245
			size = {
				width: element.width(),
				height: element.height()
			},
			active = document.activeElement;

		// support: Firefox
		// Firefox incorrectly exposes anonymous content
		// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
		try {
			active.id;
		} catch ( e ) {
			active = document.body;
		}

		element.wrap( wrapper );

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}

		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if ( element.css( "position" ) === "static" ) {
			wrapper.css({ position: "relative" });
			element.css({ position: "relative" });
		} else {
			$.extend( props, {
				position: element.css( "position" ),
				zIndex: element.css( "z-index" )
			});
			$.each([ "top", "left", "bottom", "right" ], function(i, pos) {
				props[ pos ] = element.css( pos );
				if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
					props[ pos ] = "auto";
				}
			});
			element.css({
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			});
		}
		element.css(size);

		return wrapper.css( props ).show();
	},

	removeWrapper: function( element ) {
		var active = document.activeElement;

		if ( element.parent().is( ".ui-effects-wrapper" ) ) {
			element.parent().replaceWith( element );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
		}

		return element;
	},

	setTransition: function( element, list, factor, value ) {
		value = value || {};
		$.each( list, function( i, x ) {
			var unit = element.cssUnit( x );
			if ( unit[ 0 ] > 0 ) {
				value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
			}
		});
		return value;
	}
});

// return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

	// allow passing all options as the first parameter
	if ( $.isPlainObject( effect ) ) {
		options = effect;
		effect = effect.effect;
	}

	// convert to an object
	effect = { effect: effect };

	// catch (effect, null, ...)
	if ( options == null ) {
		options = {};
	}

	// catch (effect, callback)
	if ( $.isFunction( options ) ) {
		callback = options;
		speed = null;
		options = {};
	}

	// catch (effect, speed, ?)
	if ( typeof options === "number" || $.fx.speeds[ options ] ) {
		callback = speed;
		speed = options;
		options = {};
	}

	// catch (effect, options, callback)
	if ( $.isFunction( speed ) ) {
		callback = speed;
		speed = null;
	}

	// add options to effect
	if ( options ) {
		$.extend( effect, options );
	}

	speed = speed || options.duration;
	effect.duration = $.fx.off ? 0 :
		typeof speed === "number" ? speed :
		speed in $.fx.speeds ? $.fx.speeds[ speed ] :
		$.fx.speeds._default;

	effect.complete = callback || options.complete;

	return effect;
}

function standardAnimationOption( option ) {
	// Valid standard speeds (nothing, number, named speed)
	if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
		return true;
	}

	// Invalid strings - treat as "normal" speed
	if ( typeof option === "string" && !$.effects.effect[ option ] ) {
		return true;
	}

	// Complete callback
	if ( $.isFunction( option ) ) {
		return true;
	}

	// Options hash (but not naming an effect)
	if ( typeof option === "object" && !option.effect ) {
		return true;
	}

	// Didn't match any standard API
	return false;
}

$.fn.extend({
	effect: function( /* effect, options, speed, callback */ ) {
		var args = _normalizeArguments.apply( this, arguments ),
			mode = args.mode,
			queue = args.queue,
			effectMethod = $.effects.effect[ args.effect ];

		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args.duration, args.complete );
			} else {
				return this.each( function() {
					if ( args.complete ) {
						args.complete.call( this );
					}
				});
			}
		}

		function run( next ) {
			var elem = $( this ),
				complete = args.complete,
				mode = args.mode;

			function done() {
				if ( $.isFunction( complete ) ) {
					complete.call( elem[0] );
				}
				if ( $.isFunction( next ) ) {
					next();
				}
			}

			// If the element already has the correct final state, delegate to
			// the core methods so the internal tracking of "olddisplay" works.
			if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
				elem[ mode ]();
				done();
			} else {
				effectMethod.call( elem[0], args, done );
			}
		}

		return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
	},

	show: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "show";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.show ),

	hide: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "hide";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.hide ),

	toggle: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "toggle";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.toggle ),

	// helper functions
	cssUnit: function(key) {
		var style = this.css( key ),
			val = [];

		$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
			if ( style.indexOf( unit ) > 0 ) {
				val = [ parseFloat( style ), unit ];
			}
		});
		return val;
	}
});

})();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
	baseEasings[ name ] = function( p ) {
		return Math.pow( p, i + 2 );
	};
});

$.extend( baseEasings, {
	Sine: function( p ) {
		return 1 - Math.cos( p * Math.PI / 2 );
	},
	Circ: function( p ) {
		return 1 - Math.sqrt( 1 - p * p );
	},
	Elastic: function( p ) {
		return p === 0 || p === 1 ? p :
			-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
	},
	Back: function( p ) {
		return p * p * ( 3 * p - 2 );
	},
	Bounce: function( p ) {
		var pow2,
			bounce = 4;

		while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
		return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
	}
});

$.each( baseEasings, function( name, easeIn ) {
	$.easing[ "easeIn" + name ] = easeIn;
	$.easing[ "easeOut" + name ] = function( p ) {
		return 1 - easeIn( 1 - p );
	};
	$.easing[ "easeInOut" + name ] = function( p ) {
		return p < 0.5 ?
			easeIn( p * 2 ) / 2 :
			1 - easeIn( p * -2 + 2 ) / 2;
	};
});

})();

var effect = $.effects;


/*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */


var effectBlind = $.effects.effect.blind = function( o, done ) {
	// Create element
	var el = $( this ),
		rvertical = /up|down|vertical/,
		rpositivemotion = /up|left|vertical|horizontal/,
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		direction = o.direction || "up",
		vertical = rvertical.test( direction ),
		ref = vertical ? "height" : "width",
		ref2 = vertical ? "top" : "left",
		motion = rpositivemotion.test( direction ),
		animation = {},
		show = mode === "show",
		wrapper, distance, margin;

	// if already wrapped, the wrapper's properties are my property. #6245
	if ( el.parent().is( ".ui-effects-wrapper" ) ) {
		$.effects.save( el.parent(), props );
	} else {
		$.effects.save( el, props );
	}
	el.show();
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	distance = wrapper[ ref ]();
	margin = parseFloat( wrapper.css( ref2 ) ) || 0;

	animation[ ref ] = show ? distance : 0;
	if ( !motion ) {
		el
			.css( vertical ? "bottom" : "right", 0 )
			.css( vertical ? "top" : "left", "auto" )
			.css({ position: "absolute" });

		animation[ ref2 ] = show ? margin : distance + margin;
	}

	// start at 0 if we are showing
	if ( show ) {
		wrapper.css( ref, 0 );
		if ( !motion ) {
			wrapper.css( ref2, margin + distance );
		}
	}

	// Animate
	wrapper.animate( animation, {
		duration: o.duration,
		easing: o.easing,
		queue: false,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};


/*!
 * jQuery UI Effects Bounce 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 */


var effectBounce = $.effects.effect.bounce = function( o, done ) {
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

		// defaults:
		mode = $.effects.setMode( el, o.mode || "effect" ),
		hide = mode === "hide",
		show = mode === "show",
		direction = o.direction || "up",
		distance = o.distance,
		times = o.times || 5,

		// number of internal animations
		anims = times * 2 + ( show || hide ? 1 : 0 ),
		speed = o.duration / anims,
		easing = o.easing,

		// utility:
		ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
		motion = ( direction === "up" || direction === "left" ),
		i,
		upAnim,
		downAnim,

		// we will need to re-assemble the queue to stack our animations in place
		queue = el.queue(),
		queuelen = queue.length;

	// Avoid touching opacity to prevent clearType and PNG issues in IE
	if ( show || hide ) {
		props.push( "opacity" );
	}

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el ); // Create Wrapper

	// default distance for the BIGGEST bounce is the outer Distance / 3
	if ( !distance ) {
		distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
	}

	if ( show ) {
		downAnim = { opacity: 1 };
		downAnim[ ref ] = 0;

		// if we are showing, force opacity 0 and set the initial position
		// then do the "first" animation
		el.css( "opacity", 0 )
			.css( ref, motion ? -distance * 2 : distance * 2 )
			.animate( downAnim, speed, easing );
	}

	// start at the smallest distance if we are hiding
	if ( hide ) {
		distance = distance / Math.pow( 2, times - 1 );
	}

	downAnim = {};
	downAnim[ ref ] = 0;
	// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
	for ( i = 0; i < times; i++ ) {
		upAnim = {};
		upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

		el.animate( upAnim, speed, easing )
			.animate( downAnim, speed, easing );

		distance = hide ? distance * 2 : distance / 2;
	}

	// Last Bounce when Hiding
	if ( hide ) {
		upAnim = { opacity: 0 };
		upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

		el.animate( upAnim, speed, easing );
	}

	el.queue(function() {
		if ( hide ) {
			el.hide();
		}
		$.effects.restore( el, props );
		$.effects.removeWrapper( el );
		done();
	});

	// inject all the animations we just queued to be first in line (after "inprogress")
	if ( queuelen > 1) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	el.dequeue();

};


/*!
 * jQuery UI Effects Clip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 */


var effectClip = $.effects.effect.clip = function( o, done ) {
	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		direction = o.direction || "vertical",
		vert = direction === "vertical",
		size = vert ? "height" : "width",
		position = vert ? "top" : "left",
		animation = {},
		wrapper, animate, distance;

	// Save & Show
	$.effects.save( el, props );
	el.show();

	// Create Wrapper
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});
	animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
	distance = animate[ size ]();

	// Shift
	if ( show ) {
		animate.css( size, 0 );
		animate.css( position, distance / 2 );
	}

	// Create Animation Object:
	animation[ size ] = show ? distance : 0;
	animation[ position ] = show ? 0 : distance / 2;

	// Animate
	animate.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( !show ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});

};


/*!
 * jQuery UI Effects Drop 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 */


var effectDrop = $.effects.effect.drop = function( o, done ) {

	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		direction = o.direction || "left",
		ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
		motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
		animation = {
			opacity: show ? 1 : 0
		},
		distance;

	// Adjust
	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );

	distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

	if ( show ) {
		el
			.css( "opacity", 0 )
			.css( ref, motion === "pos" ? -distance : distance );
	}

	// Animation
	animation[ ref ] = ( show ?
		( motion === "pos" ? "+=" : "-=" ) :
		( motion === "pos" ? "-=" : "+=" ) ) +
		distance;

	// Animate
	el.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};


/*!
 * jQuery UI Effects Explode 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 */


var effectExplode = $.effects.effect.explode = function( o, done ) {

	var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
		cells = rows,
		el = $( this ),
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",

		// show and then visibility:hidden the element before calculating offset
		offset = el.show().css( "visibility", "hidden" ).offset(),

		// width and height of a piece
		width = Math.ceil( el.outerWidth() / cells ),
		height = Math.ceil( el.outerHeight() / rows ),
		pieces = [],

		// loop
		i, j, left, top, mx, my;

	// children animate complete:
	function childComplete() {
		pieces.push( this );
		if ( pieces.length === rows * cells ) {
			animComplete();
		}
	}

	// clone the element for each row and cell.
	for ( i = 0; i < rows ; i++ ) { // ===>
		top = offset.top + i * height;
		my = i - ( rows - 1 ) / 2 ;

		for ( j = 0; j < cells ; j++ ) { // |||
			left = offset.left + j * width;
			mx = j - ( cells - 1 ) / 2 ;

			// Create a clone of the now hidden main element that will be absolute positioned
			// within a wrapper div off the -left and -top equal to size of our pieces
			el
				.clone()
				.appendTo( "body" )
				.wrap( "<div></div>" )
				.css({
					position: "absolute",
					visibility: "visible",
					left: -j * width,
					top: -i * height
				})

			// select the wrapper - make it overflow: hidden and absolute positioned based on
			// where the original was located +left and +top equal to the size of pieces
				.parent()
				.addClass( "ui-effects-explode" )
				.css({
					position: "absolute",
					overflow: "hidden",
					width: width,
					height: height,
					left: left + ( show ? mx * width : 0 ),
					top: top + ( show ? my * height : 0 ),
					opacity: show ? 0 : 1
				}).animate({
					left: left + ( show ? 0 : mx * width ),
					top: top + ( show ? 0 : my * height ),
					opacity: show ? 1 : 0
				}, o.duration || 500, o.easing, childComplete );
		}
	}

	function animComplete() {
		el.css({
			visibility: "visible"
		});
		$( pieces ).remove();
		if ( !show ) {
			el.hide();
		}
		done();
	}
};


/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */


var effectFade = $.effects.effect.fade = function( o, done ) {
	var el = $( this ),
		mode = $.effects.setMode( el, o.mode || "toggle" );

	el.animate({
		opacity: mode
	}, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: done
	});
};


/*!
 * jQuery UI Effects Fold 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 */


var effectFold = $.effects.effect.fold = function( o, done ) {

	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		show = mode === "show",
		hide = mode === "hide",
		size = o.size || 15,
		percent = /([0-9]+)%/.exec( size ),
		horizFirst = !!o.horizFirst,
		widthFirst = show !== horizFirst,
		ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
		duration = o.duration / 2,
		wrapper, distance,
		animation1 = {},
		animation2 = {};

	$.effects.save( el, props );
	el.show();

	// Create Wrapper
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});
	distance = widthFirst ?
		[ wrapper.width(), wrapper.height() ] :
		[ wrapper.height(), wrapper.width() ];

	if ( percent ) {
		size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
	}
	if ( show ) {
		wrapper.css( horizFirst ? {
			height: 0,
			width: size
		} : {
			height: size,
			width: 0
		});
	}

	// Animation
	animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
	animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

	// Animate
	wrapper
		.animate( animation1, duration, o.easing )
		.animate( animation2, duration, o.easing, function() {
			if ( hide ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		});

};


/*!
 * jQuery UI Effects Highlight 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 */


var effectHighlight = $.effects.effect.highlight = function( o, done ) {
	var elem = $( this ),
		props = [ "backgroundImage", "backgroundColor", "opacity" ],
		mode = $.effects.setMode( elem, o.mode || "show" ),
		animation = {
			backgroundColor: elem.css( "backgroundColor" )
		};

	if (mode === "hide") {
		animation.opacity = 0;
	}

	$.effects.save( elem, props );

	elem
		.show()
		.css({
			backgroundImage: "none",
			backgroundColor: o.color || "#ffff99"
		})
		.animate( animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( mode === "hide" ) {
					elem.hide();
				}
				$.effects.restore( elem, props );
				done();
			}
		});
};


/*!
 * jQuery UI Effects Size 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/size-effect/
 */


var effectSize = $.effects.effect.size = function( o, done ) {

	// Create element
	var original, baseline, factor,
		el = $( this ),
		props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

		// Always restore
		props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

		// Copy for children
		props2 = [ "width", "height", "overflow" ],
		cProps = [ "fontSize" ],
		vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
		hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

		// Set options
		mode = $.effects.setMode( el, o.mode || "effect" ),
		restore = o.restore || mode !== "effect",
		scale = o.scale || "both",
		origin = o.origin || [ "middle", "center" ],
		position = el.css( "position" ),
		props = restore ? props0 : props1,
		zero = {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		};

	if ( mode === "show" ) {
		el.show();
	}
	original = {
		height: el.height(),
		width: el.width(),
		outerHeight: el.outerHeight(),
		outerWidth: el.outerWidth()
	};

	if ( o.mode === "toggle" && mode === "show" ) {
		el.from = o.to || zero;
		el.to = o.from || original;
	} else {
		el.from = o.from || ( mode === "show" ? zero : original );
		el.to = o.to || ( mode === "hide" ? zero : original );
	}

	// Set scaling factor
	factor = {
		from: {
			y: el.from.height / original.height,
			x: el.from.width / original.width
		},
		to: {
			y: el.to.height / original.height,
			x: el.to.width / original.width
		}
	};

	// Scale the css box
	if ( scale === "box" || scale === "both" ) {

		// Vertical props scaling
		if ( factor.from.y !== factor.to.y ) {
			props = props.concat( vProps );
			el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
			el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
		}

		// Horizontal props scaling
		if ( factor.from.x !== factor.to.x ) {
			props = props.concat( hProps );
			el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
			el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
		}
	}

	// Scale the content
	if ( scale === "content" || scale === "both" ) {

		// Vertical props scaling
		if ( factor.from.y !== factor.to.y ) {
			props = props.concat( cProps ).concat( props2 );
			el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
			el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
		}
	}

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );
	el.css( "overflow", "hidden" ).css( el.from );

	// Adjust
	if (origin) { // Calculate baseline shifts
		baseline = $.effects.getBaseline( origin, original );
		el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
		el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
		el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
		el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
	}
	el.css( el.from ); // set top & left

	// Animate
	if ( scale === "content" || scale === "both" ) { // Scale the children

		// Add margins/font-size
		vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
		hProps = hProps.concat([ "marginLeft", "marginRight" ]);
		props2 = props0.concat(vProps).concat(hProps);

		el.find( "*[width]" ).each( function() {
			var child = $( this ),
				c_original = {
					height: child.height(),
					width: child.width(),
					outerHeight: child.outerHeight(),
					outerWidth: child.outerWidth()
				};
			if (restore) {
				$.effects.save(child, props2);
			}

			child.from = {
				height: c_original.height * factor.from.y,
				width: c_original.width * factor.from.x,
				outerHeight: c_original.outerHeight * factor.from.y,
				outerWidth: c_original.outerWidth * factor.from.x
			};
			child.to = {
				height: c_original.height * factor.to.y,
				width: c_original.width * factor.to.x,
				outerHeight: c_original.height * factor.to.y,
				outerWidth: c_original.width * factor.to.x
			};

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
				child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
			}

			// Horizontal props scaling
			if ( factor.from.x !== factor.to.x ) {
				child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
				child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
			}

			// Animate children
			child.css( child.from );
			child.animate( child.to, o.duration, o.easing, function() {

				// Restore children
				if ( restore ) {
					$.effects.restore( child, props2 );
				}
			});
		});
	}

	// Animate
	el.animate( el.to, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( el.to.opacity === 0 ) {
				el.css( "opacity", el.from.opacity );
			}
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			if ( !restore ) {

				// we need to calculate our new positioning based on the scaling
				if ( position === "static" ) {
					el.css({
						position: "relative",
						top: el.to.top,
						left: el.to.left
					});
				} else {
					$.each([ "top", "left" ], function( idx, pos ) {
						el.css( pos, function( _, str ) {
							var val = parseInt( str, 10 ),
								toRef = idx ? el.to.left : el.to.top;

							// if original was "auto", recalculate the new value from wrapper
							if ( str === "auto" ) {
								return toRef + "px";
							}

							return val + toRef + "px";
						});
					});
				}
			}

			$.effects.removeWrapper( el );
			done();
		}
	});

};


/*!
 * jQuery UI Effects Scale 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 */


var effectScale = $.effects.effect.scale = function( o, done ) {

	// Create element
	var el = $( this ),
		options = $.extend( true, {}, o ),
		mode = $.effects.setMode( el, o.mode || "effect" ),
		percent = parseInt( o.percent, 10 ) ||
			( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
		direction = o.direction || "both",
		origin = o.origin,
		original = {
			height: el.height(),
			width: el.width(),
			outerHeight: el.outerHeight(),
			outerWidth: el.outerWidth()
		},
		factor = {
			y: direction !== "horizontal" ? (percent / 100) : 1,
			x: direction !== "vertical" ? (percent / 100) : 1
		};

	// We are going to pass this effect to the size effect:
	options.effect = "size";
	options.queue = false;
	options.complete = done;

	// Set default origin and restore for show/hide
	if ( mode !== "effect" ) {
		options.origin = origin || [ "middle", "center" ];
		options.restore = true;
	}

	options.from = o.from || ( mode === "show" ? {
		height: 0,
		width: 0,
		outerHeight: 0,
		outerWidth: 0
	} : original );
	options.to = {
		height: original.height * factor.y,
		width: original.width * factor.x,
		outerHeight: original.outerHeight * factor.y,
		outerWidth: original.outerWidth * factor.x
	};

	// Fade option to support puff
	if ( options.fade ) {
		if ( mode === "show" ) {
			options.from.opacity = 0;
			options.to.opacity = 1;
		}
		if ( mode === "hide" ) {
			options.from.opacity = 1;
			options.to.opacity = 0;
		}
	}

	// Animate
	el.effect( options );

};


/*!
 * jQuery UI Effects Puff 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/puff-effect/
 */


var effectPuff = $.effects.effect.puff = function( o, done ) {
	var elem = $( this ),
		mode = $.effects.setMode( elem, o.mode || "hide" ),
		hide = mode === "hide",
		percent = parseInt( o.percent, 10 ) || 150,
		factor = percent / 100,
		original = {
			height: elem.height(),
			width: elem.width(),
			outerHeight: elem.outerHeight(),
			outerWidth: elem.outerWidth()
		};

	$.extend( o, {
		effect: "scale",
		queue: false,
		fade: true,
		mode: mode,
		complete: done,
		percent: hide ? percent : 100,
		from: hide ?
			original :
			{
				height: original.height * factor,
				width: original.width * factor,
				outerHeight: original.outerHeight * factor,
				outerWidth: original.outerWidth * factor
			}
	});

	elem.effect( o );
};


/*!
 * jQuery UI Effects Pulsate 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 */


var effectPulsate = $.effects.effect.pulsate = function( o, done ) {
	var elem = $( this ),
		mode = $.effects.setMode( elem, o.mode || "show" ),
		show = mode === "show",
		hide = mode === "hide",
		showhide = ( show || mode === "hide" ),

		// showing or hiding leaves of the "last" animation
		anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
		duration = o.duration / anims,
		animateTo = 0,
		queue = elem.queue(),
		queuelen = queue.length,
		i;

	if ( show || !elem.is(":visible")) {
		elem.css( "opacity", 0 ).show();
		animateTo = 1;
	}

	// anims - 1 opacity "toggles"
	for ( i = 1; i < anims; i++ ) {
		elem.animate({
			opacity: animateTo
		}, duration, o.easing );
		animateTo = 1 - animateTo;
	}

	elem.animate({
		opacity: animateTo
	}, duration, o.easing);

	elem.queue(function() {
		if ( hide ) {
			elem.hide();
		}
		done();
	});

	// We just queued up "anims" animations, we need to put them next in the queue
	if ( queuelen > 1 ) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	elem.dequeue();
};


/*!
 * jQuery UI Effects Shake 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 */


var effectShake = $.effects.effect.shake = function( o, done ) {

	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "effect" ),
		direction = o.direction || "left",
		distance = o.distance || 20,
		times = o.times || 3,
		anims = times * 2 + 1,
		speed = Math.round( o.duration / anims ),
		ref = (direction === "up" || direction === "down") ? "top" : "left",
		positiveMotion = (direction === "up" || direction === "left"),
		animation = {},
		animation1 = {},
		animation2 = {},
		i,

		// we will need to re-assemble the queue to stack our animations in place
		queue = el.queue(),
		queuelen = queue.length;

	$.effects.save( el, props );
	el.show();
	$.effects.createWrapper( el );

	// Animation
	animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
	animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
	animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

	// Animate
	el.animate( animation, speed, o.easing );

	// Shakes
	for ( i = 1; i < times; i++ ) {
		el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
	}
	el
		.animate( animation1, speed, o.easing )
		.animate( animation, speed / 2, o.easing )
		.queue(function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		});

	// inject all the animations we just queued to be first in line (after "inprogress")
	if ( queuelen > 1) {
		queue.splice.apply( queue,
			[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
	}
	el.dequeue();

};


/*!
 * jQuery UI Effects Slide 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */


var effectSlide = $.effects.effect.slide = function( o, done ) {

	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
		mode = $.effects.setMode( el, o.mode || "show" ),
		show = mode === "show",
		direction = o.direction || "left",
		ref = (direction === "up" || direction === "down") ? "top" : "left",
		positiveMotion = (direction === "up" || direction === "left"),
		distance,
		animation = {};

	// Adjust
	$.effects.save( el, props );
	el.show();
	distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

	$.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	if ( show ) {
		el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
	}

	// Animation
	animation[ ref ] = ( show ?
		( positiveMotion ? "+=" : "-=") :
		( positiveMotion ? "-=" : "+=")) +
		distance;

	// Animate
	el.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};


/*!
 * jQuery UI Effects Transfer 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 */


var effectTransfer = $.effects.effect.transfer = function( o, done ) {
	var elem = $( this ),
		target = $( o.to ),
		targetFixed = target.css( "position" ) === "fixed",
		body = $("body"),
		fixTop = targetFixed ? body.scrollTop() : 0,
		fixLeft = targetFixed ? body.scrollLeft() : 0,
		endPosition = target.offset(),
		animation = {
			top: endPosition.top - fixTop,
			left: endPosition.left - fixLeft,
			height: target.innerHeight(),
			width: target.innerWidth()
		},
		startPosition = elem.offset(),
		transfer = $( "<div class='ui-effects-transfer'></div>" )
			.appendTo( document.body )
			.addClass( o.className )
			.css({
				top: startPosition.top - fixTop,
				left: startPosition.left - fixLeft,
				height: elem.innerHeight(),
				width: elem.innerWidth(),
				position: targetFixed ? "fixed" : "absolute"
			})
			.animate( animation, o.duration, o.easing, function() {
				transfer.remove();
				done();
			});
};


/*!
 * jQuery UI Progressbar 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 */


var progressbar = $.widget( "ui.progressbar", {
	version: "1.11.4",
	options: {
		max: 100,
		value: 0,

		change: null,
		complete: null
	},

	min: 0,

	_create: function() {
		// Constrain initial value
		this.oldValue = this.options.value = this._constrainedValue();

		this.element
			.addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
			.attr({
				// Only set static values, aria-valuenow and aria-valuemax are
				// set inside _refreshValue()
				role: "progressbar",
				"aria-valuemin": this.min
			});

		this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
			.appendTo( this.element );

		this._refreshValue();
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
			.removeAttr( "role" )
			.removeAttr( "aria-valuemin" )
			.removeAttr( "aria-valuemax" )
			.removeAttr( "aria-valuenow" );

		this.valueDiv.remove();
	},

	value: function( newValue ) {
		if ( newValue === undefined ) {
			return this.options.value;
		}

		this.options.value = this._constrainedValue( newValue );
		this._refreshValue();
	},

	_constrainedValue: function( newValue ) {
		if ( newValue === undefined ) {
			newValue = this.options.value;
		}

		this.indeterminate = newValue === false;

		// sanitize value
		if ( typeof newValue !== "number" ) {
			newValue = 0;
		}

		return this.indeterminate ? false :
			Math.min( this.options.max, Math.max( this.min, newValue ) );
	},

	_setOptions: function( options ) {
		// Ensure "value" option is set after other values (like max)
		var value = options.value;
		delete options.value;

		this._super( options );

		this.options.value = this._constrainedValue( value );
		this._refreshValue();
	},

	_setOption: function( key, value ) {
		if ( key === "max" ) {
			// Don't allow a max less than min
			value = Math.max( this.min, value );
		}
		if ( key === "disabled" ) {
			this.element
				.toggleClass( "ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
		}
		this._super( key, value );
	},

	_percentage: function() {
		return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
	},

	_refreshValue: function() {
		var value = this.options.value,
			percentage = this._percentage();

		this.valueDiv
			.toggle( this.indeterminate || value > this.min )
			.toggleClass( "ui-corner-right", value === this.options.max )
			.width( percentage.toFixed(0) + "%" );

		this.element.toggleClass( "ui-progressbar-indeterminate", this.indeterminate );

		if ( this.indeterminate ) {
			this.element.removeAttr( "aria-valuenow" );
			if ( !this.overlayDiv ) {
				this.overlayDiv = $( "<div class='ui-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
			}
		} else {
			this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": value
			});
			if ( this.overlayDiv ) {
				this.overlayDiv.remove();
				this.overlayDiv = null;
			}
		}

		if ( this.oldValue !== value ) {
			this.oldValue = value;
			this._trigger( "change" );
		}
		if ( value === this.options.max ) {
			this._trigger( "complete" );
		}
	}
});


/*!
 * jQuery UI Selectable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 */


var selectable = $.widget("ui.selectable", $.ui.mouse, {
	version: "1.11.4",
	options: {
		appendTo: "body",
		autoRefresh: true,
		distance: 0,
		filter: "*",
		tolerance: "touch",

		// callbacks
		selected: null,
		selecting: null,
		start: null,
		stop: null,
		unselected: null,
		unselecting: null
	},
	_create: function() {
		var selectees,
			that = this;

		this.element.addClass("ui-selectable");

		this.dragged = false;

		// cache selectee children based on filter
		this.refresh = function() {
			selectees = $(that.options.filter, that.element[0]);
			selectees.addClass("ui-selectee");
			selectees.each(function() {
				var $this = $(this),
					pos = $this.offset();
				$.data(this, "selectable-item", {
					element: this,
					$element: $this,
					left: pos.left,
					top: pos.top,
					right: pos.left + $this.outerWidth(),
					bottom: pos.top + $this.outerHeight(),
					startselected: false,
					selected: $this.hasClass("ui-selected"),
					selecting: $this.hasClass("ui-selecting"),
					unselecting: $this.hasClass("ui-unselecting")
				});
			});
		};
		this.refresh();

		this.selectees = selectees.addClass("ui-selectee");

		this._mouseInit();

		this.helper = $("<div class='ui-selectable-helper'></div>");
	},

	_destroy: function() {
		this.selectees
			.removeClass("ui-selectee")
			.removeData("selectable-item");
		this.element
			.removeClass("ui-selectable ui-selectable-disabled");
		this._mouseDestroy();
	},

	_mouseStart: function(event) {
		var that = this,
			options = this.options;

		this.opos = [ event.pageX, event.pageY ];

		if (this.options.disabled) {
			return;
		}

		this.selectees = $(options.filter, this.element[0]);

		this._trigger("start", event);

		$(options.appendTo).append(this.helper);
		// position helper (lasso)
		this.helper.css({
			"left": event.pageX,
			"top": event.pageY,
			"width": 0,
			"height": 0
		});

		if (options.autoRefresh) {
			this.refresh();
		}

		this.selectees.filter(".ui-selected").each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.startselected = true;
			if (!event.metaKey && !event.ctrlKey) {
				selectee.$element.removeClass("ui-selected");
				selectee.selected = false;
				selectee.$element.addClass("ui-unselecting");
				selectee.unselecting = true;
				// selectable UNSELECTING callback
				that._trigger("unselecting", event, {
					unselecting: selectee.element
				});
			}
		});

		$(event.target).parents().addBack().each(function() {
			var doSelect,
				selectee = $.data(this, "selectable-item");
			if (selectee) {
				doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
				selectee.$element
					.removeClass(doSelect ? "ui-unselecting" : "ui-selected")
					.addClass(doSelect ? "ui-selecting" : "ui-unselecting");
				selectee.unselecting = !doSelect;
				selectee.selecting = doSelect;
				selectee.selected = doSelect;
				// selectable (UN)SELECTING callback
				if (doSelect) {
					that._trigger("selecting", event, {
						selecting: selectee.element
					});
				} else {
					that._trigger("unselecting", event, {
						unselecting: selectee.element
					});
				}
				return false;
			}
		});

	},

	_mouseDrag: function(event) {

		this.dragged = true;

		if (this.options.disabled) {
			return;
		}

		var tmp,
			that = this,
			options = this.options,
			x1 = this.opos[0],
			y1 = this.opos[1],
			x2 = event.pageX,
			y2 = event.pageY;

		if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
		if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
		this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

		this.selectees.each(function() {
			var selectee = $.data(this, "selectable-item"),
				hit = false;

			//prevent helper from being selected if appendTo: selectable
			if (!selectee || selectee.element === that.element[0]) {
				return;
			}

			if (options.tolerance === "touch") {
				hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
			} else if (options.tolerance === "fit") {
				hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
			}

			if (hit) {
				// SELECT
				if (selectee.selected) {
					selectee.$element.removeClass("ui-selected");
					selectee.selected = false;
				}
				if (selectee.unselecting) {
					selectee.$element.removeClass("ui-unselecting");
					selectee.unselecting = false;
				}
				if (!selectee.selecting) {
					selectee.$element.addClass("ui-selecting");
					selectee.selecting = true;
					// selectable SELECTING callback
					that._trigger("selecting", event, {
						selecting: selectee.element
					});
				}
			} else {
				// UNSELECT
				if (selectee.selecting) {
					if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
						selectee.$element.removeClass("ui-selecting");
						selectee.selecting = false;
						selectee.$element.addClass("ui-selected");
						selectee.selected = true;
					} else {
						selectee.$element.removeClass("ui-selecting");
						selectee.selecting = false;
						if (selectee.startselected) {
							selectee.$element.addClass("ui-unselecting");
							selectee.unselecting = true;
						}
						// selectable UNSELECTING callback
						that._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
				if (selectee.selected) {
					if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
						selectee.$element.removeClass("ui-selected");
						selectee.selected = false;

						selectee.$element.addClass("ui-unselecting");
						selectee.unselecting = true;
						// selectable UNSELECTING callback
						that._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
			}
		});

		return false;
	},

	_mouseStop: function(event) {
		var that = this;

		this.dragged = false;

		$(".ui-unselecting", this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass("ui-unselecting");
			selectee.unselecting = false;
			selectee.startselected = false;
			that._trigger("unselected", event, {
				unselected: selectee.element
			});
		});
		$(".ui-selecting", this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
			selectee.selecting = false;
			selectee.selected = true;
			selectee.startselected = true;
			that._trigger("selected", event, {
				selected: selectee.element
			});
		});
		this._trigger("stop", event);

		this.helper.remove();

		return false;
	}

});


/*!
 * jQuery UI Selectmenu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectmenu
 */


var selectmenu = $.widget( "ui.selectmenu", {
	version: "1.11.4",
	defaultElement: "<select>",
	options: {
		appendTo: null,
		disabled: null,
		icons: {
			button: "ui-icon-triangle-1-s"
		},
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		width: null,

		// callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		select: null
	},

	_create: function() {
		var selectmenuId = this.element.uniqueId().attr( "id" );
		this.ids = {
			element: selectmenuId,
			button: selectmenuId + "-button",
			menu: selectmenuId + "-menu"
		};

		this._drawButton();
		this._drawMenu();

		if ( this.options.disabled ) {
			this.disable();
		}
	},

	_drawButton: function() {
		var that = this;

		// Associate existing label with the new button
		this.label = $( "label[for='" + this.ids.element + "']" ).attr( "for", this.ids.button );
		this._on( this.label, {
			click: function( event ) {
				this.button.focus();
				event.preventDefault();
			}
		});

		// Hide original select element
		this.element.hide();

		// Create button
		this.button = $( "<span>", {
			"class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
			tabindex: this.options.disabled ? -1 : 0,
			id: this.ids.button,
			role: "combobox",
			"aria-expanded": "false",
			"aria-autocomplete": "list",
			"aria-owns": this.ids.menu,
			"aria-haspopup": "true"
		})
			.insertAfter( this.element );

		$( "<span>", {
			"class": "ui-icon " + this.options.icons.button
		})
			.prependTo( this.button );

		this.buttonText = $( "<span>", {
			"class": "ui-selectmenu-text"
		})
			.appendTo( this.button );

		this._setText( this.buttonText, this.element.find( "option:selected" ).text() );
		this._resizeButton();

		this._on( this.button, this._buttonEvents );
		this.button.one( "focusin", function() {

			// Delay rendering the menu items until the button receives focus.
			// The menu may have already been rendered via a programmatic open.
			if ( !that.menuItems ) {
				that._refreshMenu();
			}
		});
		this._hoverable( this.button );
		this._focusable( this.button );
	},

	_drawMenu: function() {
		var that = this;

		// Create menu
		this.menu = $( "<ul>", {
			"aria-hidden": "true",
			"aria-labelledby": this.ids.button,
			id: this.ids.menu
		});

		// Wrap menu
		this.menuWrap = $( "<div>", {
			"class": "ui-selectmenu-menu ui-front"
		})
			.append( this.menu )
			.appendTo( this._appendTo() );

		// Initialize menu widget
		this.menuInstance = this.menu
			.menu({
				role: "listbox",
				select: function( event, ui ) {
					event.preventDefault();

					// support: IE8
					// If the item was selected via a click, the text selection
					// will be destroyed in IE
					that._setSelection();

					that._select( ui.item.data( "ui-selectmenu-item" ), event );
				},
				focus: function( event, ui ) {
					var item = ui.item.data( "ui-selectmenu-item" );

					// Prevent inital focus from firing and check if its a newly focused item
					if ( that.focusIndex != null && item.index !== that.focusIndex ) {
						that._trigger( "focus", event, { item: item } );
						if ( !that.isOpen ) {
							that._select( item, event );
						}
					}
					that.focusIndex = item.index;

					that.button.attr( "aria-activedescendant",
						that.menuItems.eq( item.index ).attr( "id" ) );
				}
			})
			.menu( "instance" );

		// Adjust menu styles to dropdown
		this.menu
			.addClass( "ui-corner-bottom" )
			.removeClass( "ui-corner-all" );

		// Don't close the menu on mouseleave
		this.menuInstance._off( this.menu, "mouseleave" );

		// Cancel the menu's collapseAll on document click
		this.menuInstance._closeOnDocumentClick = function() {
			return false;
		};

		// Selects often contain empty items, but never contain dividers
		this.menuInstance._isDivider = function() {
			return false;
		};
	},

	refresh: function() {
		this._refreshMenu();
		this._setText( this.buttonText, this._getSelectedItem().text() );
		if ( !this.options.width ) {
			this._resizeButton();
		}
	},

	_refreshMenu: function() {
		this.menu.empty();

		var item,
			options = this.element.find( "option" );

		if ( !options.length ) {
			return;
		}

		this._parseOptions( options );
		this._renderMenu( this.menu, this.items );

		this.menuInstance.refresh();
		this.menuItems = this.menu.find( "li" ).not( ".ui-selectmenu-optgroup" );

		item = this._getSelectedItem();

		// Update the menu to have the correct item focused
		this.menuInstance.focus( null, item );
		this._setAria( item.data( "ui-selectmenu-item" ) );

		// Set disabled state
		this._setOption( "disabled", this.element.prop( "disabled" ) );
	},

	open: function( event ) {
		if ( this.options.disabled ) {
			return;
		}

		// If this is the first time the menu is being opened, render the items
		if ( !this.menuItems ) {
			this._refreshMenu();
		} else {

			// Menu clears focus on close, reset focus to selected item
			this.menu.find( ".ui-state-focus" ).removeClass( "ui-state-focus" );
			this.menuInstance.focus( null, this._getSelectedItem() );
		}

		this.isOpen = true;
		this._toggleAttr();
		this._resizeMenu();
		this._position();

		this._on( this.document, this._documentClick );

		this._trigger( "open", event );
	},

	_position: function() {
		this.menuWrap.position( $.extend( { of: this.button }, this.options.position ) );
	},

	close: function( event ) {
		if ( !this.isOpen ) {
			return;
		}

		this.isOpen = false;
		this._toggleAttr();

		this.range = null;
		this._off( this.document );

		this._trigger( "close", event );
	},

	widget: function() {
		return this.button;
	},

	menuWidget: function() {
		return this.menu;
	},

	_renderMenu: function( ul, items ) {
		var that = this,
			currentOptgroup = "";

		$.each( items, function( index, item ) {
			if ( item.optgroup !== currentOptgroup ) {
				$( "<li>", {
					"class": "ui-selectmenu-optgroup ui-menu-divider" +
						( item.element.parent( "optgroup" ).prop( "disabled" ) ?
							" ui-state-disabled" :
							"" ),
					text: item.optgroup
				})
					.appendTo( ul );

				currentOptgroup = item.optgroup;
			}

			that._renderItemData( ul, item );
		});
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-selectmenu-item", item );
	},

	_renderItem: function( ul, item ) {
		var li = $( "<li>" );

		if ( item.disabled ) {
			li.addClass( "ui-state-disabled" );
		}
		this._setText( li, item.label );

		return li.appendTo( ul );
	},

	_setText: function( element, value ) {
		if ( value ) {
			element.text( value );
		} else {
			element.html( "&#160;" );
		}
	},

	_move: function( direction, event ) {
		var item, next,
			filter = ".ui-menu-item";

		if ( this.isOpen ) {
			item = this.menuItems.eq( this.focusIndex );
		} else {
			item = this.menuItems.eq( this.element[ 0 ].selectedIndex );
			filter += ":not(.ui-state-disabled)";
		}

		if ( direction === "first" || direction === "last" ) {
			next = item[ direction === "first" ? "prevAll" : "nextAll" ]( filter ).eq( -1 );
		} else {
			next = item[ direction + "All" ]( filter ).eq( 0 );
		}

		if ( next.length ) {
			this.menuInstance.focus( event, next );
		}
	},

	_getSelectedItem: function() {
		return this.menuItems.eq( this.element[ 0 ].selectedIndex );
	},

	_toggle: function( event ) {
		this[ this.isOpen ? "close" : "open" ]( event );
	},

	_setSelection: function() {
		var selection;

		if ( !this.range ) {
			return;
		}

		if ( window.getSelection ) {
			selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange( this.range );

		// support: IE8
		} else {
			this.range.select();
		}

		// support: IE
		// Setting the text selection kills the button focus in IE, but
		// restoring the focus doesn't kill the selection.
		this.button.focus();
	},

	_documentClick: {
		mousedown: function( event ) {
			if ( !this.isOpen ) {
				return;
			}

			if ( !$( event.target ).closest( ".ui-selectmenu-menu, #" + this.ids.button ).length ) {
				this.close( event );
			}
		}
	},

	_buttonEvents: {

		// Prevent text selection from being reset when interacting with the selectmenu (#10144)
		mousedown: function() {
			var selection;

			if ( window.getSelection ) {
				selection = window.getSelection();
				if ( selection.rangeCount ) {
					this.range = selection.getRangeAt( 0 );
				}

			// support: IE8
			} else {
				this.range = document.selection.createRange();
			}
		},

		click: function( event ) {
			this._setSelection();
			this._toggle( event );
		},

		keydown: function( event ) {
			var preventDefault = true;
			switch ( event.keyCode ) {
				case $.ui.keyCode.TAB:
				case $.ui.keyCode.ESCAPE:
					this.close( event );
					preventDefault = false;
					break;
				case $.ui.keyCode.ENTER:
					if ( this.isOpen ) {
						this._selectFocusedItem( event );
					}
					break;
				case $.ui.keyCode.UP:
					if ( event.altKey ) {
						this._toggle( event );
					} else {
						this._move( "prev", event );
					}
					break;
				case $.ui.keyCode.DOWN:
					if ( event.altKey ) {
						this._toggle( event );
					} else {
						this._move( "next", event );
					}
					break;
				case $.ui.keyCode.SPACE:
					if ( this.isOpen ) {
						this._selectFocusedItem( event );
					} else {
						this._toggle( event );
					}
					break;
				case $.ui.keyCode.LEFT:
					this._move( "prev", event );
					break;
				case $.ui.keyCode.RIGHT:
					this._move( "next", event );
					break;
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.PAGE_UP:
					this._move( "first", event );
					break;
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_DOWN:
					this._move( "last", event );
					break;
				default:
					this.menu.trigger( event );
					preventDefault = false;
			}

			if ( preventDefault ) {
				event.preventDefault();
			}
		}
	},

	_selectFocusedItem: function( event ) {
		var item = this.menuItems.eq( this.focusIndex );
		if ( !item.hasClass( "ui-state-disabled" ) ) {
			this._select( item.data( "ui-selectmenu-item" ), event );
		}
	},

	_select: function( item, event ) {
		var oldIndex = this.element[ 0 ].selectedIndex;

		// Change native select element
		this.element[ 0 ].selectedIndex = item.index;
		this._setText( this.buttonText, item.label );
		this._setAria( item );
		this._trigger( "select", event, { item: item } );

		if ( item.index !== oldIndex ) {
			this._trigger( "change", event, { item: item } );
		}

		this.close( event );
	},

	_setAria: function( item ) {
		var id = this.menuItems.eq( item.index ).attr( "id" );

		this.button.attr({
			"aria-labelledby": id,
			"aria-activedescendant": id
		});
		this.menu.attr( "aria-activedescendant", id );
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			this.button.find( "span.ui-icon" )
				.removeClass( this.options.icons.button )
				.addClass( value.button );
		}

		this._super( key, value );

		if ( key === "appendTo" ) {
			this.menuWrap.appendTo( this._appendTo() );
		}

		if ( key === "disabled" ) {
			this.menuInstance.option( "disabled", value );
			this.button
				.toggleClass( "ui-state-disabled", value )
				.attr( "aria-disabled", value );

			this.element.prop( "disabled", value );
			if ( value ) {
				this.button.attr( "tabindex", -1 );
				this.close();
			} else {
				this.button.attr( "tabindex", 0 );
			}
		}

		if ( key === "width" ) {
			this._resizeButton();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_toggleAttr: function() {
		this.button
			.toggleClass( "ui-corner-top", this.isOpen )
			.toggleClass( "ui-corner-all", !this.isOpen )
			.attr( "aria-expanded", this.isOpen );
		this.menuWrap.toggleClass( "ui-selectmenu-open", this.isOpen );
		this.menu.attr( "aria-hidden", !this.isOpen );
	},

	_resizeButton: function() {
		var width = this.options.width;

		if ( !width ) {
			width = this.element.show().outerWidth();
			this.element.hide();
		}

		this.button.outerWidth( width );
	},

	_resizeMenu: function() {
		this.menu.outerWidth( Math.max(
			this.button.outerWidth(),

			// support: IE10
			// IE10 wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping
			this.menu.width( "" ).outerWidth() + 1
		) );
	},

	_getCreateOptions: function() {
		return { disabled: this.element.prop( "disabled" ) };
	},

	_parseOptions: function( options ) {
		var data = [];
		options.each(function( index, item ) {
			var option = $( item ),
				optgroup = option.parent( "optgroup" );
			data.push({
				element: option,
				index: index,
				value: option.val(),
				label: option.text(),
				optgroup: optgroup.attr( "label" ) || "",
				disabled: optgroup.prop( "disabled" ) || option.prop( "disabled" )
			});
		});
		this.items = data;
	},

	_destroy: function() {
		this.menuWrap.remove();
		this.button.remove();
		this.element.show();
		this.element.removeUniqueId();
		this.label.attr( "for", this.ids.element );
	}
});


/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */


var slider = $.widget( "ui.slider", $.ui.mouse, {
	version: "1.11.4",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this.element
			.addClass( "ui-slider" +
				" ui-slider-" + this.orientation +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all");

		this._refresh();
		this._setOption( "disabled", this.options.disabled );

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
			handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this.handle = this.handles.eq( 0 );

		this.handles.each(function( i ) {
			$( this ).data( "ui-slider-handle-index", i );
		});
	},

	_createRange: function() {
		var options = this.options,
			classes = "";

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[0], options.values[0] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice(0);
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div></div>" )
					.appendTo( this.element );

				classes = "ui-slider-range" +
				// note: this isn't the most fittingly semantic framework class for this element,
				// but worked best visually with a variety of themes
				" ui-widget-header ui-corner-all";
			} else {
				this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
					// Handle range switching from true to min/max
					.css({
						"left": "",
						"bottom": ""
					});
			}

			this.range.addClass( classes +
				( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this.element
			.removeClass( "ui-slider" +
				" ui-slider-horizontal" +
				" ui-slider-vertical" +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all" );

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each(function( i ) {
			var thisDistance = Math.abs( normValue - that.values(i) );
			if (( distance > thisDistance ) ||
				( distance === thisDistance &&
					(i === that._lastChangedValue || that.values(i) === o.min ))) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		});

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		closestHandle
			.addClass( "ui-state-active" )
			.focus();

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
				( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
				( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this.handles.removeClass( "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_start: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}
		return this._trigger( "start", event, uiHash );
	},

	_slide: function( event, index, newVal ) {
		var otherVal,
			newValues,
			allowed;

		if ( this.options.values && this.options.values.length ) {
			otherVal = this.values( index ? 0 : 1 );

			if ( ( this.options.values.length === 2 && this.options.range === true ) &&
					( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
				) {
				newVal = otherVal;
			}

			if ( newVal !== this.values( index ) ) {
				newValues = this.values();
				newValues[ index ] = newVal;
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal,
					values: newValues
				} );
				otherVal = this.values( index ? 0 : 1 );
				if ( allowed !== false ) {
					this.values( index, newVal );
				}
			}
		} else {
			if ( newVal !== this.value() ) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal
				} );
				if ( allowed !== false ) {
					this.value( newVal );
				}
			}
		}
	},

	_stop: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}

		this._trigger( "stop", event, uiHash );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;

			this._trigger( "change", event, uiHash );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this.options.values && this.options.values.length ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		if ( key === "disabled" ) {
			this.element.toggleClass( "ui-state-disabled", !!value );
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this.element
					.removeClass( "ui-slider-horizontal ui-slider-vertical" )
					.addClass( "ui-slider-" + this.orientation );
				this._refreshValue();

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for ( i = 0; i < valsLength; i += 1 ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this.options.values && this.options.values.length ) {
			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = (val - this._valueMin()) % step,
			alignValue = val - valModStep;

		if ( Math.abs(valModStep) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed(5) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.floor( ( +( max - min ).toFixed( this._precision() ) ) / step ) * step;
		max = aboveMin + min;
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this.options.values && this.options.values.length ) {
			this.handles.each(function( i ) {
				valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						$( event.target ).addClass( "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this.options.values && this.options.values.length ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				$( event.target ).removeClass( "ui-state-active" );
			}
		}
	}
});


/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */


var sortable = $.widget("ui.sortable", $.ui.mouse, {
	version: "1.11.4",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},

	_isOverAxis: function( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	},

	_isFloating: function( item ) {
		return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
	},

	_create: function() {
		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

		this._setHandleClassName();

		//We're ready to go
		this.ready = true;

	},

	_setOption: function( key, value ) {
		this._super( key, value );

		if ( key === "handle" ) {
			this._setHandleClassName();
		}
	},

	_setHandleClassName: function() {
		this.element.find( ".ui-sortable-handle" ).removeClass( "ui-sortable-handle" );
		$.each( this.items, function() {
			( this.instance.options.handle ?
				this.item.find( this.instance.options.handle ) : this.item )
				.addClass( "ui-sortable-handle" );
		});
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-sortable ui-sortable-disabled" )
			.find( ".ui-sortable-handle" )
				.removeClass( "ui-sortable-handle" );
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- ) {
			this.items[i].item.removeData(this.widgetName + "-item");
		}

		return this;
	},

	_mouseCapture: function(event, overrideHandle) {
		var currentItem = null,
			validHandle = false,
			that = this;

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type === "static") {
			return false;
		}

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		$(event.target).parents().each(function() {
			if($.data(this, that.widgetName + "-item") === that) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, that.widgetName + "-item") === that) {
			currentItem = $(event.target);
		}

		if(!currentItem) {
			return false;
		}
		if(this.options.handle && !overrideHandle) {
			$(this.options.handle, currentItem).find("*").addBack().each(function() {
				if(this === event.target) {
					validHandle = true;
				}
			});
			if(!validHandle) {
				return false;
			}
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {

		var i, body,
			o = this.options;

		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

		//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] !== this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Create the placeholder
		this._createPlaceholder();

		//Set a containment if given in the options
		if(o.containment) {
			this._setContainment();
		}

		if( o.cursor && o.cursor !== "auto" ) { // cursor option
			body = this.document.find( "body" );

			// support: IE
			this.storedCursor = body.css( "cursor" );
			body.css( "cursor", o.cursor );

			this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) {
				this._storedOpacity = this.helper.css("opacity");
			}
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) {
				this._storedZIndex = this.helper.css("zIndex");
			}
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
			this.overflowOffset = this.scrollParent.offset();
		}

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions) {
			this._cacheHelperProportions();
		}


		//Post "activate" events to possible containers
		if( !noActivation ) {
			for ( i = this.containers.length - 1; i >= 0; i-- ) {
				this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
			}
		}

		//Prepare possible droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");
		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		return true;

	},

	_mouseDrag: function(event) {
		var i, item, itemElement, intersection,
			o = this.options,
			scrolled = false;

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				} else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
				}

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				} else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
				}

			} else {

				if(event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
				} else if(this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
				}

				if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
				} else if(this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
				}

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis !== "y") {
			this.helper[0].style.left = this.position.left+"px";
		}
		if(!this.options.axis || this.options.axis !== "x") {
			this.helper[0].style.top = this.position.top+"px";
		}

		//Rearrange
		for (i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			item = this.items[i];
			itemElement = item.item[0];
			intersection = this._intersectsWithPointer(item);
			if (!intersection) {
				continue;
			}

			// Only put the placeholder inside the current Container, skip all
			// items from other containers. This works because when moving
			// an item from one container to another the
			// currentContainer is switched before the placeholder is moved.
			//
			// Without this, moving items in "sub-sortables" can cause
			// the placeholder to jitter between the outer and inner container.
			if (item.instance !== this.currentContainer) {
				continue;
			}

			// cannot intersect with itself
			// no useless actions that have been done before
			// no action if the item moved is the parent of the item checked
			if (itemElement !== this.currentItem[0] &&
				this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
				!$.contains(this.placeholder[0], itemElement) &&
				(this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
			) {

				this.direction = intersection === 1 ? "down" : "up";

				if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		//Call callbacks
		this._trigger("sort", event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) {
			return;
		}

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			$.ui.ddmanager.drop(this, event);
		}

		if(this.options.revert) {
			var that = this,
				cur = this.placeholder.offset(),
				axis = this.options.axis,
				animation = {};

			if ( !axis || axis === "x" ) {
				animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
			}
			if ( !axis || axis === "y" ) {
				animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
			}
			this.reverting = true;
			$(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
				that._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper === "original") {
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, this._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) {
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			}
			if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
				this.helper.remove();
			}

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			str = [];
		o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
			if (res) {
				str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
			}
		});

		if(!str.length && o.key) {
			str.push(o.key + "=");
		}

		return str.join("&");

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			ret = [];

		o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height,
			l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height,
			dyClick = this.offset.click.top,
			dxClick = this.offset.click.left,
			isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
			isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
			isOverElement = isOverElementHeight && isOverElementWidth;

		if ( this.options.tolerance === "pointer" ||
			this.options.forcePointerForContainers ||
			(this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) && // Right Half
				x2 - (this.helperProportions.width / 2) < r && // Left Half
				t < y1 + (this.helperProportions.height / 2) && // Bottom Half
				y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement) {
			return false;
		}

		return this.floating ?
			( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta !== 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta !== 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this._setHandleClassName();
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
	},

	_getItemsAsjQuery: function(connected) {

		var i, j, cur, inst,
			items = [],
			queries = [],
			connectWith = this._connectWith();

		if(connectWith && connected) {
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for ( j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
					}
				}
			}
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

		function addItems() {
			items.push( this );
		}
		for (i = queries.length - 1; i >= 0; i--){
			queries[i][0].each( addItems );
		}

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

		this.items = $.grep(this.items, function (item) {
			for (var j=0; j < list.length; j++) {
				if(list[j] === item.item[0]) {
					return false;
				}
			}
			return true;
		});

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];

		var i, j, cur, inst, targetData, _queries, item, queriesLength,
			items = this.items,
			queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
			connectWith = this._connectWith();

		if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for (j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				}
			}
		}

		for (i = queries.length - 1; i >= 0; i--) {
			targetData = queries[i][1];
			_queries = queries[i][0];

			for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				item = $(_queries[j]);

				item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			}
		}

	},

	refreshPositions: function(fast) {

		// Determine whether items are being displayed horizontally
		this.floating = this.items.length ?
			this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
			false;

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		var i, item, t, p;

		for (i = this.items.length - 1; i >= 0; i--){
			item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
				continue;
			}

			t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			p = t.offset();
			item.left = p.left;
			item.top = p.top;
		}

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (i = this.containers.length - 1; i >= 0; i--){
				p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			}
		}

		return this;
	},

	_createPlaceholder: function(that) {
		that = that || this;
		var className,
			o = that.options;

		if(!o.placeholder || o.placeholder.constructor === String) {
			className = o.placeholder;
			o.placeholder = {
				element: function() {

					var nodeName = that.currentItem[0].nodeName.toLowerCase(),
						element = $( "<" + nodeName + ">", that.document[0] )
							.addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
							.removeClass("ui-sortable-helper");

					if ( nodeName === "tbody" ) {
						that._createTrPlaceholder(
							that.currentItem.find( "tr" ).eq( 0 ),
							$( "<tr>", that.document[ 0 ] ).appendTo( element )
						);
					} else if ( nodeName === "tr" ) {
						that._createTrPlaceholder( that.currentItem, element );
					} else if ( nodeName === "img" ) {
						element.attr( "src", that.currentItem.attr( "src" ) );
					}

					if ( !className ) {
						element.css( "visibility", "hidden" );
					}

					return element;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) {
						return;
					}

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
					if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
				}
			};
		}

		//Create the placeholder
		that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

		//Append it after the actual current item
		that.currentItem.after(that.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(that, that.placeholder);

	},

	_createTrPlaceholder: function( sourceTr, targetTr ) {
		var that = this;

		sourceTr.children().each(function() {
			$( "<td>&#160;</td>", that.document[ 0 ] )
				.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
				.appendTo( targetTr );
		});
	},

	_contactContainers: function(event) {
		var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
			innermostContainer = null,
			innermostIndex = null;

		// get innermost container that intersects with item
		for (i = this.containers.length - 1; i >= 0; i--) {

			// never consider a container that's located within the item itself
			if($.contains(this.currentItem[0], this.containers[i].element[0])) {
				continue;
			}

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue
				if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
					continue;
				}

				innermostContainer = this.containers[i];
				innermostIndex = i;

			} else {
				// container doesn't intersect. trigger "out" event if necessary
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		// if no intersecting containers found, return
		if(!innermostContainer) {
			return;
		}

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			if (!this.containers[innermostIndex].containerCache.over) {
				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}
		} else {

			//When entering a new container, we will find the item with the least distance and append our item near it
			dist = 10000;
			itemWithLeastDistance = null;
			floating = innermostContainer.floating || this._isFloating(this.currentItem);
			posProperty = floating ? "left" : "top";
			sizeProperty = floating ? "width" : "height";
			axis = floating ? "clientX" : "clientY";

			for (j = this.items.length - 1; j >= 0; j--) {
				if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
					continue;
				}
				if(this.items[j].item[0] === this.currentItem[0]) {
					continue;
				}

				cur = this.items[j].item.offset()[posProperty];
				nearBottom = false;
				if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
					nearBottom = true;
				}

				if ( Math.abs( event[ axis ] - cur ) < dist ) {
					dist = Math.abs( event[ axis ] - cur );
					itemWithLeastDistance = this.items[ j ];
					this.direction = nearBottom ? "up": "down";
				}
			}

			//Check if dropOnEmpty is enabled
			if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
				return;
			}

			if(this.currentContainer === this.containers[innermostIndex]) {
				if ( !this.currentContainer.containerCache.over ) {
					this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
					this.currentContainer.containerCache.over = 1;
				}
				return;
			}

			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
			this._trigger("change", event, this._uiHash());
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
			this.currentContainer = this.containers[innermostIndex];

			//Update the placeholder
			this.options.placeholder.update(this.currentContainer, this.placeholder);

			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		}


	},

	_createHelper: function(event) {

		var o = this.options,
			helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

		//Add the helper to the DOM if that didn't happen already
		if(!helper.parents("body").length) {
			$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
		}

		if(helper[0] === this.currentItem[0]) {
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
		}

		if(!helper[0].style.width || o.forceHelperSize) {
			helper.width(this.currentItem.width());
		}
		if(!helper[0].style.height || o.forceHelperSize) {
			helper.height(this.currentItem.height());
		}

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		// This needs to be actually done for all browsers, since pageX/pageY includes this information
		// with an ugly IE fix
		if( this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition === "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var ce, co, over,
			o = this.options;
		if(o.containment === "parent") {
			o.containment = this.helper[0].parentNode;
		}
		if(o.containment === "document" || o.containment === "window") {
			this.containment = [
				0 - this.offset.relative.left - this.offset.parent.left,
				0 - this.offset.relative.top - this.offset.parent.top,
				o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
				(o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
			];
		}

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			ce = $(o.containment)[0];
			co = $(o.containment).offset();
			over = ($(ce).css("overflow") !== "hidden");

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) {
			pos = this.position;
		}
		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
			scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var top, left,
			o = this.options,
			pageX = event.pageX,
			pageY = event.pageY,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) {
					pageX = this.containment[0] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top < this.containment[1]) {
					pageY = this.containment[1] + this.offset.click.top;
				}
				if(event.pageX - this.offset.click.left > this.containment[2]) {
					pageX = this.containment[2] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top > this.containment[3]) {
					pageY = this.containment[3] + this.offset.click.top;
				}
			}

			if(o.grid) {
				top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY -																// The absolute mouse position
				this.offset.click.top -													// Click offset (relative to the element)
				this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX -																// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var counter = this.counter;

		this._delay(function() {
			if(counter === this.counter) {
				this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
			}
		});

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var i,
			delayedTriggers = [];

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem.parent().length) {
			this.placeholder.before(this.currentItem);
		}
		this._noFinalSort = null;

		if(this.helper[0] === this.currentItem[0]) {
			for(i in this._storedCSS) {
				if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
					this._storedCSS[i] = "";
				}
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		}
		if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		}

		// Check if the items Container has Changed and trigger appropriate
		// events.
		if (this !== this.currentContainer) {
			if(!noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
				delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
				delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
			}
		}


		//Post events to containers
		function delayEvent( type, instance, container ) {
			return function( event ) {
				container._trigger( type, event, instance._uiHash( instance ) );
			};
		}
		for (i = this.containers.length - 1; i >= 0; i--){
			if (!noPropagation) {
				delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
			}
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if ( this.storedCursor ) {
			this.document.find( "body" ).css( "cursor", this.storedCursor );
			this.storedStylesheet.remove();
		}
		if(this._storedOpacity) {
			this.helper.css("opacity", this._storedOpacity);
		}
		if(this._storedZIndex) {
			this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
		}

		this.dragging = false;

		if(!noPropagation) {
			this._trigger("beforeStop", event, this._uiHash());
		}

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if ( !this.cancelHelperRemoval ) {
			if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
				this.helper.remove();
			}
			this.helper = null;
		}

		if(!noPropagation) {
			for (i=0; i < delayedTriggers.length; i++) {
				delayedTriggers[i].call(this, event);
			} //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return !this.cancelHelperRemoval;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(_inst) {
		var inst = _inst || this;
		return {
			helper: inst.helper,
			placeholder: inst.placeholder || $([]),
			position: inst.position,
			originalPosition: inst.originalPosition,
			offset: inst.positionAbs,
			item: inst.currentItem,
			sender: _inst ? _inst.element : null
		};
	}

});


/*!
 * jQuery UI Spinner 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */


function spinner_modifier( fn ) {
	return function() {
		var previous = this.element.val();
		fn.apply( this, arguments );
		this._refresh();
		if ( previous !== this.element.val() ) {
			this._trigger( "change" );
		}
	};
}

var spinner = $.widget( "ui.spinner", {
	version: "1.11.4",
	defaultElement: "<input>",
	widgetEventPrefix: "spin",
	options: {
		culture: null,
		icons: {
			down: "ui-icon-triangle-1-s",
			up: "ui-icon-triangle-1-n"
		},
		incremental: true,
		max: null,
		min: null,
		numberFormat: null,
		page: 10,
		step: 1,

		change: null,
		spin: null,
		start: null,
		stop: null
	},

	_create: function() {
		// handle string values that need to be parsed
		this._setOption( "max", this.options.max );
		this._setOption( "min", this.options.min );
		this._setOption( "step", this.options.step );

		// Only format if there is a value, prevents the field from being marked
		// as invalid in Firefox, see #9573.
		if ( this.value() !== "" ) {
			// Format the value, but don't constrain.
			this._value( this.element.val(), true );
		}

		this._draw();
		this._on( this._events );
		this._refresh();

		// turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		});
	},

	_getCreateOptions: function() {
		var options = {},
			element = this.element;

		$.each( [ "min", "max", "step" ], function( i, option ) {
			var value = element.attr( option );
			if ( value !== undefined && value.length ) {
				options[ option ] = value;
			}
		});

		return options;
	},

	_events: {
		keydown: function( event ) {
			if ( this._start( event ) && this._keydown( event ) ) {
				event.preventDefault();
			}
		},
		keyup: "_stop",
		focus: function() {
			this.previous = this.element.val();
		},
		blur: function( event ) {
			if ( this.cancelBlur ) {
				delete this.cancelBlur;
				return;
			}

			this._stop();
			this._refresh();
			if ( this.previous !== this.element.val() ) {
				this._trigger( "change", event );
			}
		},
		mousewheel: function( event, delta ) {
			if ( !delta ) {
				return;
			}
			if ( !this.spinning && !this._start( event ) ) {
				return false;
			}

			this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
			clearTimeout( this.mousewheelTimer );
			this.mousewheelTimer = this._delay(function() {
				if ( this.spinning ) {
					this._stop( event );
				}
			}, 100 );
			event.preventDefault();
		},
		"mousedown .ui-spinner-button": function( event ) {
			var previous;

			// We never want the buttons to have focus; whenever the user is
			// interacting with the spinner, the focus should be on the input.
			// If the input is focused then this.previous is properly set from
			// when the input first received focus. If the input is not focused
			// then we need to set this.previous based on the value before spinning.
			previous = this.element[0] === this.document[0].activeElement ?
				this.previous : this.element.val();
			function checkFocus() {
				var isActive = this.element[0] === this.document[0].activeElement;
				if ( !isActive ) {
					this.element.focus();
					this.previous = previous;
					// support: IE
					// IE sets focus asynchronously, so we need to check if focus
					// moved off of the input because the user clicked on the button.
					this._delay(function() {
						this.previous = previous;
					});
				}
			}

			// ensure focus is on (or stays on) the text field
			event.preventDefault();
			checkFocus.call( this );

			// support: IE
			// IE doesn't prevent moving focus even with event.preventDefault()
			// so we set a flag to know when we should ignore the blur event
			// and check (again) if focus moved off of the input.
			this.cancelBlur = true;
			this._delay(function() {
				delete this.cancelBlur;
				checkFocus.call( this );
			});

			if ( this._start( event ) === false ) {
				return;
			}

			this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
		},
		"mouseup .ui-spinner-button": "_stop",
		"mouseenter .ui-spinner-button": function( event ) {
			// button will add ui-state-active if mouse was down while mouseleave and kept down
			if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
				return;
			}

			if ( this._start( event ) === false ) {
				return false;
			}
			this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
		},
		// TODO: do we really want to consider this a stop?
		// shouldn't we just stop the repeater and wait until mouseup before
		// we trigger the stop event?
		"mouseleave .ui-spinner-button": "_stop"
	},

	_draw: function() {
		var uiSpinner = this.uiSpinner = this.element
			.addClass( "ui-spinner-input" )
			.attr( "autocomplete", "off" )
			.wrap( this._uiSpinnerHtml() )
			.parent()
				// add buttons
				.append( this._buttonHtml() );

		this.element.attr( "role", "spinbutton" );

		// button bindings
		this.buttons = uiSpinner.find( ".ui-spinner-button" )
			.attr( "tabIndex", -1 )
			.button()
			.removeClass( "ui-corner-all" );

		// IE 6 doesn't understand height: 50% for the buttons
		// unless the wrapper has an explicit height
		if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
				uiSpinner.height() > 0 ) {
			uiSpinner.height( uiSpinner.height() );
		}

		// disable spinner if element was already disabled
		if ( this.options.disabled ) {
			this.disable();
		}
	},

	_keydown: function( event ) {
		var options = this.options,
			keyCode = $.ui.keyCode;

		switch ( event.keyCode ) {
		case keyCode.UP:
			this._repeat( null, 1, event );
			return true;
		case keyCode.DOWN:
			this._repeat( null, -1, event );
			return true;
		case keyCode.PAGE_UP:
			this._repeat( null, options.page, event );
			return true;
		case keyCode.PAGE_DOWN:
			this._repeat( null, -options.page, event );
			return true;
		}

		return false;
	},

	_uiSpinnerHtml: function() {
		return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
	},

	_buttonHtml: function() {
		return "" +
			"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
				"<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
			"</a>" +
			"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
				"<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
			"</a>";
	},

	_start: function( event ) {
		if ( !this.spinning && this._trigger( "start", event ) === false ) {
			return false;
		}

		if ( !this.counter ) {
			this.counter = 1;
		}
		this.spinning = true;
		return true;
	},

	_repeat: function( i, steps, event ) {
		i = i || 500;

		clearTimeout( this.timer );
		this.timer = this._delay(function() {
			this._repeat( 40, steps, event );
		}, i );

		this._spin( steps * this.options.step, event );
	},

	_spin: function( step, event ) {
		var value = this.value() || 0;

		if ( !this.counter ) {
			this.counter = 1;
		}

		value = this._adjustValue( value + step * this._increment( this.counter ) );

		if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
			this._value( value );
			this.counter++;
		}
	},

	_increment: function( i ) {
		var incremental = this.options.incremental;

		if ( incremental ) {
			return $.isFunction( incremental ) ?
				incremental( i ) :
				Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
		}

		return 1;
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_adjustValue: function( value ) {
		var base, aboveMin,
			options = this.options;

		// make sure we're at a valid step
		// - find out where we are relative to the base (min or 0)
		base = options.min !== null ? options.min : 0;
		aboveMin = value - base;
		// - round to the nearest step
		aboveMin = Math.round(aboveMin / options.step) * options.step;
		// - rounding is based on 0, so adjust back to our base
		value = base + aboveMin;

		// fix precision from bad JS floating point math
		value = parseFloat( value.toFixed( this._precision() ) );

		// clamp the value
		if ( options.max !== null && value > options.max) {
			return options.max;
		}
		if ( options.min !== null && value < options.min ) {
			return options.min;
		}

		return value;
	},

	_stop: function( event ) {
		if ( !this.spinning ) {
			return;
		}

		clearTimeout( this.timer );
		clearTimeout( this.mousewheelTimer );
		this.counter = 0;
		this.spinning = false;
		this._trigger( "stop", event );
	},

	_setOption: function( key, value ) {
		if ( key === "culture" || key === "numberFormat" ) {
			var prevValue = this._parse( this.element.val() );
			this.options[ key ] = value;
			this.element.val( this._format( prevValue ) );
			return;
		}

		if ( key === "max" || key === "min" || key === "step" ) {
			if ( typeof value === "string" ) {
				value = this._parse( value );
			}
		}
		if ( key === "icons" ) {
			this.buttons.first().find( ".ui-icon" )
				.removeClass( this.options.icons.up )
				.addClass( value.up );
			this.buttons.last().find( ".ui-icon" )
				.removeClass( this.options.icons.down )
				.addClass( value.down );
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			this.widget().toggleClass( "ui-state-disabled", !!value );
			this.element.prop( "disabled", !!value );
			this.buttons.button( value ? "disable" : "enable" );
		}
	},

	_setOptions: spinner_modifier(function( options ) {
		this._super( options );
	}),

	_parse: function( val ) {
		if ( typeof val === "string" && val !== "" ) {
			val = window.Globalize && this.options.numberFormat ?
				Globalize.parseFloat( val, 10, this.options.culture ) : +val;
		}
		return val === "" || isNaN( val ) ? null : val;
	},

	_format: function( value ) {
		if ( value === "" ) {
			return "";
		}
		return window.Globalize && this.options.numberFormat ?
			Globalize.format( value, this.options.numberFormat, this.options.culture ) :
			value;
	},

	_refresh: function() {
		this.element.attr({
			"aria-valuemin": this.options.min,
			"aria-valuemax": this.options.max,
			// TODO: what should we do with values that can't be parsed?
			"aria-valuenow": this._parse( this.element.val() )
		});
	},

	isValid: function() {
		var value = this.value();

		// null is invalid
		if ( value === null ) {
			return false;
		}

		// if value gets adjusted, it's invalid
		return value === this._adjustValue( value );
	},

	// update the value without triggering change
	_value: function( value, allowAny ) {
		var parsed;
		if ( value !== "" ) {
			parsed = this._parse( value );
			if ( parsed !== null ) {
				if ( !allowAny ) {
					parsed = this._adjustValue( parsed );
				}
				value = this._format( parsed );
			}
		}
		this.element.val( value );
		this._refresh();
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-spinner-input" )
			.prop( "disabled", false )
			.removeAttr( "autocomplete" )
			.removeAttr( "role" )
			.removeAttr( "aria-valuemin" )
			.removeAttr( "aria-valuemax" )
			.removeAttr( "aria-valuenow" );
		this.uiSpinner.replaceWith( this.element );
	},

	stepUp: spinner_modifier(function( steps ) {
		this._stepUp( steps );
	}),
	_stepUp: function( steps ) {
		if ( this._start() ) {
			this._spin( (steps || 1) * this.options.step );
			this._stop();
		}
	},

	stepDown: spinner_modifier(function( steps ) {
		this._stepDown( steps );
	}),
	_stepDown: function( steps ) {
		if ( this._start() ) {
			this._spin( (steps || 1) * -this.options.step );
			this._stop();
		}
	},

	pageUp: spinner_modifier(function( pages ) {
		this._stepUp( (pages || 1) * this.options.page );
	}),

	pageDown: spinner_modifier(function( pages ) {
		this._stepDown( (pages || 1) * this.options.page );
	}),

	value: function( newVal ) {
		if ( !arguments.length ) {
			return this._parse( this.element.val() );
		}
		spinner_modifier( this._value ).call( this, newVal );
	},

	widget: function() {
		return this.uiSpinner;
	}
});


/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */


var tabs = $.widget( "ui.tabs", {
	version: "1.11.4",
	delay: 300,
	options: {
		active: null,
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_isLocal: (function() {
		var rhash = /#.*$/;

		return function( anchor ) {
			var anchorUrl, locationUrl;

			// support: IE7
			// IE7 doesn't normalize the href property when set via script (#9317)
			anchor = anchor.cloneNode( false );

			anchorUrl = anchor.href.replace( rhash, "" );
			locationUrl = location.href.replace( rhash, "" );

			// decoding may throw an error if the URL isn't UTF-8 (#9518)
			try {
				anchorUrl = decodeURIComponent( anchorUrl );
			} catch ( error ) {}
			try {
				locationUrl = decodeURIComponent( locationUrl );
			} catch ( error ) {}

			return anchor.hash.length > 1 && anchorUrl === locationUrl;
		};
	})(),

	_create: function() {
		var that = this,
			options = this.options;

		this.running = false;

		this.element
			.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
			.toggleClass( "ui-tabs-collapsible", options.collapsible );

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				})
			) ).sort();
		}

		// check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {
			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each(function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				});
			}

			// check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// no active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// don't allow collapsible: false and active: false
		if ( !collapsible && active === false && this.anchors.length ) {
			active = 0;
		}

		return active;
	},

	_getCreateEventData: function() {
		return {
			tab: this.active,
			panel: !this.active.length ? $() : this._getPanelForTab( this.active )
		};
	},

	_tabKeydown: function( event ) {
		var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
			selectedIndex = this.tabs.index( focusedTab ),
			goingForward = true;

		if ( this._handlePageNav( event ) ) {
			return;
		}

		switch ( event.keyCode ) {
			case $.ui.keyCode.RIGHT:
			case $.ui.keyCode.DOWN:
				selectedIndex++;
				break;
			case $.ui.keyCode.UP:
			case $.ui.keyCode.LEFT:
				goingForward = false;
				selectedIndex--;
				break;
			case $.ui.keyCode.END:
				selectedIndex = this.anchors.length - 1;
				break;
			case $.ui.keyCode.HOME:
				selectedIndex = 0;
				break;
			case $.ui.keyCode.SPACE:
				// Activate only, no collapsing
				event.preventDefault();
				clearTimeout( this.activating );
				this._activate( selectedIndex );
				return;
			case $.ui.keyCode.ENTER:
				// Toggle (cancel delayed activation, allow collapsing)
				event.preventDefault();
				clearTimeout( this.activating );
				// Determine if we should collapse or activate
				this._activate( selectedIndex === this.options.active ? false : selectedIndex );
				return;
			default:
				return;
		}

		// Focus the appropriate tab, based on which key was pressed
		event.preventDefault();
		clearTimeout( this.activating );
		selectedIndex = this._focusNextTab( selectedIndex, goingForward );

		// Navigating with control/command key will prevent automatic activation
		if ( !event.ctrlKey && !event.metaKey ) {

			// Update aria-selected immediately so that AT think the tab is already selected.
			// Otherwise AT may confuse the user by stating that they need to activate the tab,
			// but the tab will already be activated by the time the announcement finishes.
			focusedTab.attr( "aria-selected", "false" );
			this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

			this.activating = this._delay(function() {
				this.option( "active", selectedIndex );
			}, this.delay );
		}
	},

	_panelKeydown: function( event ) {
		if ( this._handlePageNav( event ) ) {
			return;
		}

		// Ctrl+up moves focus to the current tab
		if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
			event.preventDefault();
			this.active.focus();
		}
	},

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
			this._activate( this._focusNextTab( this.options.active - 1, false ) );
			return true;
		}
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
			this._activate( this._focusNextTab( this.options.active + 1, true ) );
			return true;
		}
	},

	_findNextTab: function( index, goingForward ) {
		var lastTabIndex = this.tabs.length - 1;

		function constrain() {
			if ( index > lastTabIndex ) {
				index = 0;
			}
			if ( index < 0 ) {
				index = lastTabIndex;
			}
			return index;
		}

		while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
			index = goingForward ? index + 1 : index - 1;
		}

		return index;
	},

	_focusNextTab: function( index, goingForward ) {
		index = this._findNextTab( index, goingForward );
		this.tabs.eq( index ).focus();
		return index;
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "disabled" ) {
			// don't use the widget factory's disabled handling
			this._setupDisabled( value );
			return;
		}

		this._super( key, value);

		if ( key === "collapsible" ) {
			this.element.toggleClass( "ui-tabs-collapsible", value );
			// Setting collapsible: false while collapsed; open first panel
			if ( !value && this.options.active === false ) {
				this._activate( 0 );
			}
		}

		if ( key === "event" ) {
			this._setupEvents( value );
		}

		if ( key === "heightStyle" ) {
			this._setupHeightStyle( value );
		}
	},

	_sanitizeSelector: function( hash ) {
		return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		});

		this._processTabs();

		// was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();
		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();
			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}
		// was active, active tab still exists
		} else {
			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setupDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr({
			"aria-selected": "false",
			"aria-expanded": "false",
			tabIndex: -1
		});
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr({
				"aria-hidden": "true"
			});

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.addClass( "ui-tabs-active ui-state-active" )
				.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				});
			this._getPanelForTab( this.active )
				.show()
				.attr({
					"aria-hidden": "false"
				});
		}
	},

	_processTabs: function() {
		var that = this,
			prevTabs = this.tabs,
			prevAnchors = this.anchors,
			prevPanels = this.panels;

		this.tablist = this._getList()
			.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.attr( "role", "tablist" )

			// Prevent users from focusing disabled tabs via click
			.delegate( "> li", "mousedown" + this.eventNamespace, function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			})

			// support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			});

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.addClass( "ui-state-default ui-corner-top" )
			.attr({
				role: "tab",
				tabIndex: -1
			});

		this.anchors = this.tabs.map(function() {
				return $( "a", this )[ 0 ];
			})
			.addClass( "ui-tabs-anchor" )
			.attr({
				role: "presentation",
				tabIndex: -1
			});

		this.panels = $();

		this.anchors.each(function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// inline tab
			if ( that._isLocal( anchor ) ) {
				selector = anchor.hash;
				panelId = selector.substring( 1 );
				panel = that.element.find( that._sanitizeSelector( selector ) );
			// remote tab
			} else {
				// If the tab doesn't already have aria-controls,
				// generate an id by using a throw-away element
				panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr({
				"aria-controls": panelId,
				"aria-labelledby": anchorId
			});
			panel.attr( "aria-labelledby", anchorId );
		});

		this.panels
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.attr( "role", "tabpanel" );

		// Avoid memory leaks (#10056)
		if ( prevTabs ) {
			this._off( prevTabs.not( this.tabs ) );
			this._off( prevAnchors.not( this.anchors ) );
			this._off( prevPanels.not( this.panels ) );
		}
	},

	// allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.tablist || this.element.find( "ol,ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.data( "ui-tabs-destroy", true );
	},

	_setupDisabled: function( disabled ) {
		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// disable tabs
		for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				$( li )
					.addClass( "ui-state-disabled" )
					.attr( "aria-disabled", "true" );
			} else {
				$( li )
					.removeClass( "ui-state-disabled" )
					.removeAttr( "aria-disabled" );
			}
		}

		this.options.disabled = disabled;
	},

	_setupEvents: function( event ) {
		var events = {};
		if ( event ) {
			$.each( event.split(" "), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			});
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );
		// Always prevent the default action, even when disabled
		this._on( true, this.anchors, {
			click: function( event ) {
				event.preventDefault();
			}
		});
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});

			this.element.children().not( this.panels ).each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.panels.each(function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			})
			.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each(function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			}).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||
				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||
				// can't switch durning an animation
				this.running ||
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
				show();
			});
		} else {
			eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr( "aria-hidden", "true" );
		eventData.oldTab.attr({
			"aria-selected": "false",
			"aria-expanded": "false"
		});
		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter(function() {
				return $( this ).attr( "tabIndex" ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow.attr( "aria-hidden", "false" );
		eventData.newTab.attr({
			"aria-selected": "true",
			"aria-expanded": "true",
			tabIndex: 0
		});
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler({
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		});
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {
		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

		this.tablist
			.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.removeAttr( "role" );

		this.anchors
			.removeClass( "ui-tabs-anchor" )
			.removeAttr( "role" )
			.removeAttr( "tabIndex" )
			.removeUniqueId();

		this.tablist.unbind( this.eventNamespace );

		this.tabs.add( this.panels ).each(function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this )
					.removeClass( "ui-state-default ui-state-active ui-state-disabled " +
						"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
					.removeAttr( "tabIndex" )
					.removeAttr( "aria-live" )
					.removeAttr( "aria-busy" )
					.removeAttr( "aria-selected" )
					.removeAttr( "aria-labelledby" )
					.removeAttr( "aria-hidden" )
					.removeAttr( "aria-expanded" )
					.removeAttr( "role" );
			}
		});

		this.tabs.each(function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		});

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				});
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				});
			}
		}
		this._setupDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setupDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			},
			complete = function( jqXHR, status ) {
				if ( status === "abort" ) {
					that.panels.stop( false, true );
				}

				tab.removeClass( "ui-tabs-loading" );
				panel.removeAttr( "aria-busy" );

				if ( jqXHR === that.xhr ) {
					delete that.xhr;
				}
			};

		// not remote
		if ( this._isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			tab.addClass( "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.done(function( response, status, jqXHR ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						panel.html( response );
						that._trigger( "load", event, eventData );

						complete( jqXHR, status );
					}, 1 );
				})
				.fail(function( jqXHR, status ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						complete( jqXHR, status );
					}, 1 );
				});
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {
			url: anchor.attr( "href" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
});


/*!
 * jQuery UI Tooltip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */


var tooltip = $.widget( "ui.tooltip", {
	version: "1.11.4",
	options: {
		content: function() {
			// support: IE<9, Opera in jQuery <1.7
			// .text() can't accept undefined, so coerce to a string
			var title = $( this ).attr( "title" ) || "";
			// Escape title, since we're going from an attribute to raw HTML
			return $( "<a>" ).text( title ).html();
		},
		hide: true,
		// Disabled elements have inconsistent behavior across browsers (#8661)
		items: "[title]:not([disabled])",
		position: {
			my: "left top+15",
			at: "left bottom",
			collision: "flipfit flip"
		},
		show: true,
		tooltipClass: null,
		track: false,

		// callbacks
		close: null,
		open: null
	},

	_addDescribedBy: function( elem, id ) {
		var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
		describedby.push( id );
		elem
			.data( "ui-tooltip-id", id )
			.attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
	},

	_removeDescribedBy: function( elem ) {
		var id = elem.data( "ui-tooltip-id" ),
			describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
			index = $.inArray( id, describedby );

		if ( index !== -1 ) {
			describedby.splice( index, 1 );
		}

		elem.removeData( "ui-tooltip-id" );
		describedby = $.trim( describedby.join( " " ) );
		if ( describedby ) {
			elem.attr( "aria-describedby", describedby );
		} else {
			elem.removeAttr( "aria-describedby" );
		}
	},

	_create: function() {
		this._on({
			mouseover: "open",
			focusin: "open"
		});

		// IDs of generated tooltips, needed for destroy
		this.tooltips = {};

		// IDs of parent tooltips where we removed the title attribute
		this.parents = {};

		if ( this.options.disabled ) {
			this._disable();
		}

		// Append the aria-live region so tooltips announce correctly
		this.liveRegion = $( "<div>" )
			.attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			})
			.addClass( "ui-helper-hidden-accessible" )
			.appendTo( this.document[ 0 ].body );
	},

	_setOption: function( key, value ) {
		var that = this;

		if ( key === "disabled" ) {
			this[ value ? "_disable" : "_enable" ]();
			this.options[ key ] = value;
			// disable element style changes
			return;
		}

		this._super( key, value );

		if ( key === "content" ) {
			$.each( this.tooltips, function( id, tooltipData ) {
				that._updateContent( tooltipData.element );
			});
		}
	},

	_disable: function() {
		var that = this;

		// close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {
			var event = $.Event( "blur" );
			event.target = event.currentTarget = tooltipData.element[ 0 ];
			that.close( event, true );
		});

		// remove title attributes to prevent native tooltips
		this.element.find( this.options.items ).addBack().each(function() {
			var element = $( this );
			if ( element.is( "[title]" ) ) {
				element
					.data( "ui-tooltip-title", element.attr( "title" ) )
					.removeAttr( "title" );
			}
		});
	},

	_enable: function() {
		// restore title attributes
		this.element.find( this.options.items ).addBack().each(function() {
			var element = $( this );
			if ( element.data( "ui-tooltip-title" ) ) {
				element.attr( "title", element.data( "ui-tooltip-title" ) );
			}
		});
	},

	open: function( event ) {
		var that = this,
			target = $( event ? event.target : this.element )
				// we need closest here due to mouseover bubbling,
				// but always pointing at the same event target
				.closest( this.options.items );

		// No element to show a tooltip for or the tooltip is already open
		if ( !target.length || target.data( "ui-tooltip-id" ) ) {
			return;
		}

		if ( target.attr( "title" ) ) {
			target.data( "ui-tooltip-title", target.attr( "title" ) );
		}

		target.data( "ui-tooltip-open", true );

		// kill parent tooltips, custom or native, for hover
		if ( event && event.type === "mouseover" ) {
			target.parents().each(function() {
				var parent = $( this ),
					blurEvent;
				if ( parent.data( "ui-tooltip-open" ) ) {
					blurEvent = $.Event( "blur" );
					blurEvent.target = blurEvent.currentTarget = this;
					that.close( blurEvent, true );
				}
				if ( parent.attr( "title" ) ) {
					parent.uniqueId();
					that.parents[ this.id ] = {
						element: this,
						title: parent.attr( "title" )
					};
					parent.attr( "title", "" );
				}
			});
		}

		this._registerCloseHandlers( event, target );
		this._updateContent( target, event );
	},

	_updateContent: function( target, event ) {
		var content,
			contentOption = this.options.content,
			that = this,
			eventType = event ? event.type : null;

		if ( typeof contentOption === "string" ) {
			return this._open( event, target, contentOption );
		}

		content = contentOption.call( target[0], function( response ) {

			// IE may instantly serve a cached response for ajax requests
			// delay this call to _open so the other call to _open runs first
			that._delay(function() {

				// Ignore async response if tooltip was closed already
				if ( !target.data( "ui-tooltip-open" ) ) {
					return;
				}

				// jQuery creates a special event for focusin when it doesn't
				// exist natively. To improve performance, the native event
				// object is reused and the type is changed. Therefore, we can't
				// rely on the type being correct after the event finished
				// bubbling, so we set it back to the previous value. (#8740)
				if ( event ) {
					event.type = eventType;
				}
				this._open( event, target, response );
			});
		});
		if ( content ) {
			this._open( event, target, content );
		}
	},

	_open: function( event, target, content ) {
		var tooltipData, tooltip, delayedShow, a11yContent,
			positionOption = $.extend( {}, this.options.position );

		if ( !content ) {
			return;
		}

		// Content can be updated multiple times. If the tooltip already
		// exists, then just update the content and bail.
		tooltipData = this._find( target );
		if ( tooltipData ) {
			tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
			return;
		}

		// if we have a title, clear it to prevent the native tooltip
		// we have to check first to avoid defining a title if none exists
		// (we don't want to cause an element to start matching [title])
		//
		// We use removeAttr only for key events, to allow IE to export the correct
		// accessible attributes. For mouse events, set to empty string to avoid
		// native tooltip showing up (happens only when removing inside mouseover).
		if ( target.is( "[title]" ) ) {
			if ( event && event.type === "mouseover" ) {
				target.attr( "title", "" );
			} else {
				target.removeAttr( "title" );
			}
		}

		tooltipData = this._tooltip( target );
		tooltip = tooltipData.tooltip;
		this._addDescribedBy( target, tooltip.attr( "id" ) );
		tooltip.find( ".ui-tooltip-content" ).html( content );

		// Support: Voiceover on OS X, JAWS on IE <= 9
		// JAWS announces deletions even when aria-relevant="additions"
		// Voiceover will sometimes re-read the entire log region's contents from the beginning
		this.liveRegion.children().hide();
		if ( content.clone ) {
			a11yContent = content.clone();
			a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
		} else {
			a11yContent = content;
		}
		$( "<div>" ).html( a11yContent ).appendTo( this.liveRegion );

		function position( event ) {
			positionOption.of = event;
			if ( tooltip.is( ":hidden" ) ) {
				return;
			}
			tooltip.position( positionOption );
		}
		if ( this.options.track && event && /^mouse/.test( event.type ) ) {
			this._on( this.document, {
				mousemove: position
			});
			// trigger once to override element-relative positioning
			position( event );
		} else {
			tooltip.position( $.extend({
				of: target
			}, this.options.position ) );
		}

		tooltip.hide();

		this._show( tooltip, this.options.show );
		// Handle tracking tooltips that are shown with a delay (#8644). As soon
		// as the tooltip is visible, position the tooltip using the most recent
		// event.
		if ( this.options.show && this.options.show.delay ) {
			delayedShow = this.delayedShow = setInterval(function() {
				if ( tooltip.is( ":visible" ) ) {
					position( positionOption.of );
					clearInterval( delayedShow );
				}
			}, $.fx.interval );
		}

		this._trigger( "open", event, { tooltip: tooltip } );
	},

	_registerCloseHandlers: function( event, target ) {
		var events = {
			keyup: function( event ) {
				if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
					var fakeEvent = $.Event(event);
					fakeEvent.currentTarget = target[0];
					this.close( fakeEvent, true );
				}
			}
		};

		// Only bind remove handler for delegated targets. Non-delegated
		// tooltips will handle this in destroy.
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			events.remove = function() {
				this._removeTooltip( this._find( target ).tooltip );
			};
		}

		if ( !event || event.type === "mouseover" ) {
			events.mouseleave = "close";
		}
		if ( !event || event.type === "focusin" ) {
			events.focusout = "close";
		}
		this._on( true, target, events );
	},

	close: function( event ) {
		var tooltip,
			that = this,
			target = $( event ? event.currentTarget : this.element ),
			tooltipData = this._find( target );

		// The tooltip may already be closed
		if ( !tooltipData ) {

			// We set ui-tooltip-open immediately upon open (in open()), but only set the
			// additional data once there's actually content to show (in _open()). So even if the
			// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
			// the period between open() and _open().
			target.removeData( "ui-tooltip-open" );
			return;
		}

		tooltip = tooltipData.tooltip;

		// disabling closes the tooltip, so we need to track when we're closing
		// to avoid an infinite loop in case the tooltip becomes disabled on close
		if ( tooltipData.closing ) {
			return;
		}

		// Clear the interval for delayed tracking tooltips
		clearInterval( this.delayedShow );

		// only set title if we had one before (see comment in _open())
		// If the title attribute has changed since open(), don't restore
		if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
			target.attr( "title", target.data( "ui-tooltip-title" ) );
		}

		this._removeDescribedBy( target );

		tooltipData.hiding = true;
		tooltip.stop( true );
		this._hide( tooltip, this.options.hide, function() {
			that._removeTooltip( $( this ) );
		});

		target.removeData( "ui-tooltip-open" );
		this._off( target, "mouseleave focusout keyup" );

		// Remove 'remove' binding only on delegated targets
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			this._off( target, "remove" );
		}
		this._off( this.document, "mousemove" );

		if ( event && event.type === "mouseleave" ) {
			$.each( this.parents, function( id, parent ) {
				$( parent.element ).attr( "title", parent.title );
				delete that.parents[ id ];
			});
		}

		tooltipData.closing = true;
		this._trigger( "close", event, { tooltip: tooltip } );
		if ( !tooltipData.hiding ) {
			tooltipData.closing = false;
		}
	},

	_tooltip: function( element ) {
		var tooltip = $( "<div>" )
				.attr( "role", "tooltip" )
				.addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
					( this.options.tooltipClass || "" ) ),
			id = tooltip.uniqueId().attr( "id" );

		$( "<div>" )
			.addClass( "ui-tooltip-content" )
			.appendTo( tooltip );

		tooltip.appendTo( this.document[0].body );

		return this.tooltips[ id ] = {
			element: element,
			tooltip: tooltip
		};
	},

	_find: function( target ) {
		var id = target.data( "ui-tooltip-id" );
		return id ? this.tooltips[ id ] : null;
	},

	_removeTooltip: function( tooltip ) {
		tooltip.remove();
		delete this.tooltips[ tooltip.attr( "id" ) ];
	},

	_destroy: function() {
		var that = this;

		// close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {
			// Delegate to close method to handle common cleanup
			var event = $.Event( "blur" ),
				element = tooltipData.element;
			event.target = event.currentTarget = element[ 0 ];
			that.close( event, true );

			// Remove immediately; destroying an open tooltip doesn't use the
			// hide animation
			$( "#" + id ).remove();

			// Restore the title
			if ( element.data( "ui-tooltip-title" ) ) {
				// If the title attribute has changed since open(), don't restore
				if ( !element.attr( "title" ) ) {
					element.attr( "title", element.data( "ui-tooltip-title" ) );
				}
				element.removeData( "ui-tooltip-title" );
			}
		});
		this.liveRegion.remove();
	}
});



}));

var cola;!function(a){var b=function(){function a(){this.locks={}}return a.prototype.add=function(a,b){isNaN(b[0])||isNaN(b[1]),this.locks[a]=b},a.prototype.clear=function(){this.locks={}},a.prototype.isEmpty=function(){for(var a in this.locks)return!1;return!0},a.prototype.apply=function(a){for(var b in this.locks)a(b,this.locks[b])},a}();a.Locks=b;var c=function(){function a(a,c,e){void 0===e&&(e=null),this.D=c,this.G=e,this.threshold=1e-4,this.random=new d,this.project=null,this.x=a,this.k=a.length;var f=this.n=a[0].length;this.H=new Array(this.k),this.g=new Array(this.k),this.Hd=new Array(this.k),this.a=new Array(this.k),this.b=new Array(this.k),this.c=new Array(this.k),this.d=new Array(this.k),this.e=new Array(this.k),this.ia=new Array(this.k),this.ib=new Array(this.k),this.xtmp=new Array(this.k),this.locks=new b,this.minD=Number.MAX_VALUE;for(var g,h=f;h--;)for(g=f;--g>h;){var i=c[h][g];i>0&&i<this.minD&&(this.minD=i)}for(this.minD===Number.MAX_VALUE&&(this.minD=1),h=this.k;h--;){for(this.g[h]=new Array(f),this.H[h]=new Array(f),g=f;g--;)this.H[h][g]=new Array(f);this.Hd[h]=new Array(f),this.a[h]=new Array(f),this.b[h]=new Array(f),this.c[h]=new Array(f),this.d[h]=new Array(f),this.e[h]=new Array(f),this.ia[h]=new Array(f),this.ib[h]=new Array(f),this.xtmp[h]=new Array(f)}}return a.createSquareMatrix=function(a,b){for(var c=new Array(a),d=0;a>d;++d){c[d]=new Array(a);for(var e=0;a>e;++e)c[d][e]=b(d,e)}return c},a.prototype.offsetDir=function(){for(var a=this,b=new Array(this.k),c=0,d=0;d<this.k;++d){var e=b[d]=this.random.getNextBetween(.01,1)-.5;c+=e*e}return c=Math.sqrt(c),b.map(function(b){return b*=a.minD/c})},a.prototype.computeDerivatives=function(a){var b=this,c=this.n;if(!(1>c)){for(var d,e=new Array(this.k),f=new Array(this.k),g=new Array(this.k),h=0,i=0;c>i;++i){for(d=0;d<this.k;++d)g[d]=this.g[d][i]=0;for(var j=0;c>j;++j)if(i!==j){for(var k=c;k--;){var l=0;for(d=0;d<this.k;++d){var m=e[d]=a[d][i]-a[d][j];l+=f[d]=m*m}if(l>1e-9)break;var n=this.offsetDir();for(d=0;d<this.k;++d)a[d][j]+=n[d]}var o=Math.sqrt(l),p=this.D[i][j],q=null!=this.G?this.G[i][j]:1;if(q>1&&o>p||!isFinite(p))for(d=0;d<this.k;++d)this.H[d][i][j]=0;else{q>1&&(q=1);var r=p*p,s=q*(o-p)/(r*o),t=-q/(r*o*o*o);for(isFinite(s)||console.log(s),d=0;d<this.k;++d)this.g[d][i]+=e[d]*s,g[d]-=this.H[d][i][j]=t*(p*(f[d]-l)+o*l)}}for(d=0;d<this.k;++d)h=Math.max(h,this.H[d][i][i]=g[d])}this.locks.isEmpty()||this.locks.apply(function(c,e){for(d=0;d<b.k;++d)b.H[d][c][c]+=h,b.g[d][c]-=h*(e[d]-a[d][c])})}},a.dotProd=function(a,b){for(var c=0,d=a.length;d--;)c+=a[d]*b[d];return c},a.rightMultiply=function(b,c,d){for(var e=b.length;e--;)d[e]=a.dotProd(b[e],c)},a.prototype.computeStepSize=function(b){for(var c=0,d=0,e=0;2>e;++e)c+=a.dotProd(this.g[e],b[e]),a.rightMultiply(this.H[e],b[e],this.Hd[e]),d+=a.dotProd(b[e],this.Hd[e]);return 0!==d&&isFinite(d)?c/d:0},a.prototype.reduceStress=function(){this.computeDerivatives(this.x);for(var a=this.computeStepSize(this.g),b=0;b<this.k;++b)this.takeDescentStep(this.x[b],this.g[b],a);return this.computeStress()},a.copy=function(a,b){for(var c=a.length,d=b[0].length,e=0;c>e;++e)for(var f=0;d>f;++f)b[e][f]=a[e][f]},a.prototype.stepAndProject=function(b,c,d,e){a.copy(b,c),this.takeDescentStep(c[0],d[0],e),this.project&&this.project[0](b[0],b[1],c[0]),this.takeDescentStep(c[1],d[1],e),this.project&&this.project[1](c[0],b[1],c[1])},a.mApply=function(a,b,c){for(var d=a;d-->0;)for(var e=b;e-->0;)c(d,e)},a.prototype.matrixApply=function(b){a.mApply(this.k,this.n,b)},a.prototype.computeNextPosition=function(a,b){var c=this;this.computeDerivatives(a);var d=this.computeStepSize(this.g);this.stepAndProject(a,b,this.g,d);for(var e=0;e<this.n;++e)for(var f=0;f<this.k;++f)isNaN(b[f][e]);if(this.project){this.matrixApply(function(d,e){return c.e[d][e]=a[d][e]-b[d][e]});var g=this.computeStepSize(this.e);g=Math.max(.2,Math.min(g,1)),this.stepAndProject(a,b,this.e,g)}},a.prototype.run=function(a){for(var b=Number.MAX_VALUE,c=!1;!c&&a-->0;){var d=this.rungeKutta();c=Math.abs(b/d-1)<this.threshold,b=d}return b},a.prototype.rungeKutta=function(){var b=this;this.computeNextPosition(this.x,this.a),a.mid(this.x,this.a,this.ia),this.computeNextPosition(this.ia,this.b),a.mid(this.x,this.b,this.ib),this.computeNextPosition(this.ib,this.c),this.computeNextPosition(this.c,this.d);var c=0;return this.matrixApply(function(a,d){var e=(b.a[a][d]+2*b.b[a][d]+2*b.c[a][d]+b.d[a][d])/6,f=b.x[a][d]-e;c+=f*f,b.x[a][d]=e}),c},a.mid=function(b,c,d){a.mApply(b.length,b[0].length,function(a,e){return d[a][e]=b[a][e]+(c[a][e]-b[a][e])/2})},a.prototype.takeDescentStep=function(a,b,c){for(var d=0;d<this.n;++d)a[d]=a[d]-c*b[d]},a.prototype.computeStress=function(){for(var a=0,b=0,c=this.n-1;c>b;++b)for(var d=b+1,e=this.n;e>d;++d){for(var f=0,g=0;g<this.k;++g){var h=this.x[g][b]-this.x[g][d];f+=h*h}f=Math.sqrt(f);var i=this.D[b][d];if(isFinite(i)){var j=i-f,k=i*i;a+=j*j/k}}return a},a.zeroDistance=1e-10,a}();a.Descent=c;var d=function(){function a(a){void 0===a&&(a=1),this.seed=a,this.a=214013,this.c=2531011,this.m=2147483648,this.range=32767}return a.prototype.getNext=function(){return this.seed=(this.seed*this.a+this.c)%this.m,(this.seed>>16)/this.range},a.prototype.getNextBetween=function(a,b){return a+this.getNext()*(b-a)},a}();a.PseudoRandom=d}(cola||(cola={}));var __extends=this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);c.prototype=b.prototype,a.prototype=new c},cola;!function(a){var b;!function(b){function c(a,b,c){return(b.x-a.x)*(c.y-a.y)-(c.x-a.x)*(b.y-a.y)}function d(a,b,d){return c(a,b,d)>0}function e(a,b,d){return c(a,b,d)<0}function f(a){var b,d=a.slice(0).sort(function(a,b){return a.x!==b.x?b.x-a.x:b.y-a.y}),e=a.length,f=0,g=d[0].x;for(b=1;e>b&&d[b].x===g;++b);var h=b-1,i=[];if(i.push(d[f]),h===e-1)d[h].y!==d[f].y&&i.push(d[h]);else{var j,k=e-1,l=d[e-1].x;for(b=e-2;b>=0&&d[b].x===l;b--);for(j=b+1,b=h;++b<=j;)if(!(c(d[f],d[j],d[b])>=0&&j>b)){for(;i.length>1&&!(c(i[i.length-2],i[i.length-1],d[b])>0);)i.length-=1;b!=f&&i.push(d[b])}k!=j&&i.push(d[k]);var m=i.length;for(b=j;--b>=h;)if(!(c(d[k],d[h],d[b])>=0&&b>h)){for(;i.length>m&&!(c(i[i.length-2],i[i.length-1],d[b])>0);)i.length-=1;b!=f&&i.push(d[b])}}return i}function g(a,b,c){b.slice(0).sort(function(b,c){return Math.atan2(b.y-a.y,b.x-a.x)-Math.atan2(c.y-a.y,c.x-a.x)}).forEach(c)}function h(a,b){return{rtan:i(a,b),ltan:j(a,b)}}function i(a,b){var c,f,g,h,i,j=b.length-1;if(e(a,b[1],b[0])&&!d(a,b[j-1],b[0]))return 0;for(c=0,f=j;;){if(f-c===1)return d(a,b[c],b[f])?c:f;if(g=Math.floor((c+f)/2),i=e(a,b[g+1],b[g]),i&&!d(a,b[g-1],b[g]))return g;h=d(a,b[c+1],b[c]),h?i?f=g:d(a,b[c],b[g])?f=g:c=g:i&&e(a,b[c],b[g])?f=g:c=g}}function j(a,b){var c,f,g,h,i,j=b.length-1;if(d(a,b[j-1],b[0])&&!e(a,b[1],b[0]))return 0;for(c=0,f=j;;){if(f-c===1)return e(a,b[c],b[f])?c:f;if(g=Math.floor((c+f)/2),i=e(a,b[g+1],b[g]),d(a,b[g-1],b[g])&&!i)return g;h=e(a,b[c+1],b[c]),h?i?e(a,b[c],b[g])?f=g:c=g:f=g:i?c=g:d(a,b[c],b[g])?f=g:c=g}}function k(a,b,c,d,e,f){var g,h;g=c(b[0],a),h=d(a[g],b);for(var i=!1;!i;){for(i=!0;;){if(g===a.length-1&&(g=0),e(b[h],a[g],a[g+1]))break;++g}for(;;){if(0===h&&(h=b.length-1),f(a[g],b[h],b[h-1]))break;--h,i=!1}}return{t1:g,t2:h}}function l(a,b){var c=m(b,a);return{t1:c.t2,t2:c.t1}}function m(a,b){return k(a,b,i,j,d,e)}function n(a,b){return k(a,b,j,j,e,e)}function o(a,b){return k(a,b,i,i,d,d)}function p(b,c){for(var d=[],e=1,f=c.length;f>e;++e){var g=a.vpsc.Rectangle.lineIntersection(b.x1,b.y1,b.x2,b.y2,c[e-1].x,c[e-1].y,c[e].x,c[e].y);g&&d.push(g)}return d}function q(a,b){for(var d=a.length-1,e=b.length-1,f=new y,g=0;d>g;++g)for(var h=0;e>h;++h){var i=a[0==g?d-1:g-1],j=a[g],k=a[g+1],l=b[0==h?e-1:h-1],m=b[h],n=b[h+1],o=c(i,j,m),p=c(j,l,m),q=c(j,m,n),r=c(l,m,j),s=c(m,i,j),t=c(m,j,k);o>=0&&p>=0&&0>q&&r>=0&&s>=0&&0>t?f.ll=new x(g,h):0>=o&&0>=p&&q>0&&0>=r&&0>=s&&t>0?f.rr=new x(g,h):0>=o&&p>0&&0>=q&&r>=0&&0>s&&t>=0?f.rl=new x(g,h):o>=0&&0>p&&q>=0&&0>=r&&s>0&&0>=t&&(f.lr=new x(g,h))}return f}function r(a,b){for(var c=1,d=b.length;d>c;++c)if(e(b[c-1],b[c],a))return!1;return!0}function s(a,b){return!a.every(function(a){return!r(a,b)})}function t(a,b){if(s(a,b))return!0;if(s(b,a))return!0;for(var c=1,d=a.length;d>c;++c){var e=a[c],f=a[c-1];if(p(new v(f.x,f.y,e.x,e.y),b).length>0)return!0}return!1}var u=function(){function a(){}return a}();b.Point=u;var v=function(){function a(a,b,c,d){this.x1=a,this.y1=b,this.x2=c,this.y2=d}return a}();b.LineSegment=v;var w=function(a){function b(){a.apply(this,arguments)}return __extends(b,a),b}(u);b.PolyPoint=w,b.isLeft=c,b.ConvexHull=f,b.clockwiseRadialSweep=g,b.tangent_PolyPolyC=k,b.LRtangent_PolyPolyC=l,b.RLtangent_PolyPolyC=m,b.LLtangent_PolyPolyC=n,b.RRtangent_PolyPolyC=o;var x=function(){function a(a,b){this.t1=a,this.t2=b}return a}();b.BiTangent=x;var y=function(){function a(){}return a}();b.BiTangents=y;var z=function(a){function b(){a.apply(this,arguments)}return __extends(b,a),b}(u);b.TVGPoint=z;var A=function(){function a(a,b,c,d){this.id=a,this.polyid=b,this.polyvertid=c,this.p=d,d.vv=this}return a}();b.VisibilityVertex=A;var B=function(){function a(a,b){this.source=a,this.target=b}return a.prototype.length=function(){var a=this.source.p.x-this.target.p.x,b=this.source.p.y-this.target.p.y;return Math.sqrt(a*a+b*b)},a}();b.VisibilityEdge=B;var C=function(){function a(a,c){if(this.P=a,this.V=[],this.E=[],c)this.V=c.V.slice(0),this.E=c.E.slice(0);else{for(var d=a.length,e=0;d>e;e++)for(var f=a[e],g=0;g<f.length;++g){var h=f[g],i=new A(this.V.length,e,g,h);this.V.push(i),g>0&&this.E.push(new B(f[g-1].vv,i))}for(var e=0;d-1>e;e++)for(var j=a[e],g=e+1;d>g;g++){var k=a[g],l=b.tangents(j,k);for(var m in l){var n=l[m],o=j[n.t1],p=k[n.t2];this.addEdgeIfVisible(o,p,e,g)}}}}return a.prototype.addEdgeIfVisible=function(a,b,c,d){this.intersectsPolys(new v(a.x,a.y,b.x,b.y),c,d)||this.E.push(new B(a.vv,b.vv))},a.prototype.addPoint=function(a,b){var c=this.P.length;this.V.push(new A(this.V.length,c,0,a));for(var d=0;c>d;++d)if(d!==b){var e=this.P[d],f=h(a,e);this.addEdgeIfVisible(a,e[f.ltan],b,d),this.addEdgeIfVisible(a,e[f.rtan],b,d)}return a.vv},a.prototype.intersectsPolys=function(a,b,c){for(var d=0,e=this.P.length;e>d;++d)if(d!=b&&d!=c&&p(a,this.P[d]).length>0)return!0;return!1},a}();b.TangentVisibilityGraph=C,b.tangents=q,b.polysOverlap=t}(b=a.geom||(a.geom={}))}(cola||(cola={}));var cola;!function(a){var b;!function(a){var b=function(){function a(a){this.scale=a,this.AB=0,this.AD=0,this.A2=0}return a.prototype.addVariable=function(a){var b=this.scale/a.scale,c=a.offset/a.scale,d=a.weight;this.AB+=d*b*c,this.AD+=d*b*a.desiredPosition,this.A2+=d*b*b},a.prototype.getPosn=function(){return(this.AD-this.AB)/this.A2},a}();a.PositionStats=b;var c=function(){function a(a,b,c,d){void 0===d&&(d=!1),this.left=a,this.right=b,this.gap=c,this.equality=d,this.active=!1,this.unsatisfiable=!1,this.left=a,this.right=b,this.gap=c,this.equality=d}return a.prototype.slack=function(){return this.unsatisfiable?Number.MAX_VALUE:this.right.scale*this.right.position()-this.gap-this.left.scale*this.left.position()},a}();a.Constraint=c;var d=function(){function a(a,b,c){void 0===b&&(b=1),void 0===c&&(c=1),this.desiredPosition=a,this.weight=b,this.scale=c,this.offset=0}return a.prototype.dfdv=function(){return 2*this.weight*(this.position()-this.desiredPosition)},a.prototype.position=function(){return(this.block.ps.scale*this.block.posn+this.offset)/this.scale},a.prototype.visitNeighbours=function(a,b){var c=function(c,d){return c.active&&a!==d&&b(c,d)};this.cOut.forEach(function(a){return c(a,a.right)}),this.cIn.forEach(function(a){return c(a,a.left)})},a}();a.Variable=d;var e=function(){function a(a){this.vars=[],a.offset=0,this.ps=new b(a.scale),this.addVariable(a)}return a.prototype.addVariable=function(a){a.block=this,this.vars.push(a),this.ps.addVariable(a),this.posn=this.ps.getPosn()},a.prototype.updateWeightedPosition=function(){this.ps.AB=this.ps.AD=this.ps.A2=0;for(var a=0,b=this.vars.length;b>a;++a)this.ps.addVariable(this.vars[a]);this.posn=this.ps.getPosn()},a.prototype.compute_lm=function(a,b,c){var d=this,e=a.dfdv();return a.visitNeighbours(b,function(b,f){var g=d.compute_lm(f,a,c);f===b.right?(e+=g*b.left.scale,b.lm=g):(e+=g*b.right.scale,b.lm=-g),c(b)}),e/a.scale},a.prototype.populateSplitBlock=function(a,b){var c=this;a.visitNeighbours(b,function(b,d){d.offset=a.offset+(d===b.right?b.gap:-b.gap),c.addVariable(d),c.populateSplitBlock(d,a)})},a.prototype.traverse=function(a,b,c,d){var e=this;void 0===c&&(c=this.vars[0]),void 0===d&&(d=null),c.visitNeighbours(d,function(d,f){b.push(a(d)),e.traverse(a,b,f,c)})},a.prototype.findMinLM=function(){var a=null;return this.compute_lm(this.vars[0],null,function(b){!b.equality&&(null===a||b.lm<a.lm)&&(a=b)}),a},a.prototype.findMinLMBetween=function(a,b){this.compute_lm(a,null,function(){});var c=null;return this.findPath(a,null,b,function(a,b){!a.equality&&a.right===b&&(null===c||a.lm<c.lm)&&(c=a)}),c},a.prototype.findPath=function(a,b,c,d){var e=this,f=!1;return a.visitNeighbours(b,function(b,g){f||g!==c&&!e.findPath(g,a,c,d)||(f=!0,d(b,g))}),f},a.prototype.isActiveDirectedPathBetween=function(a,b){if(a===b)return!0;for(var c=a.cOut.length;c--;){var d=a.cOut[c];if(d.active&&this.isActiveDirectedPathBetween(d.right,b))return!0}return!1},a.split=function(b){return b.active=!1,[a.createSplitBlock(b.left),a.createSplitBlock(b.right)]},a.createSplitBlock=function(b){var c=new a(b);return c.populateSplitBlock(b,null),c},a.prototype.splitBetween=function(b,c){var d=this.findMinLMBetween(b,c);if(null!==d){var e=a.split(d);return{constraint:d,lb:e[0],rb:e[1]}}return null},a.prototype.mergeAcross=function(a,b,c){b.active=!0;for(var d=0,e=a.vars.length;e>d;++d){var f=a.vars[d];f.offset+=c,this.addVariable(f)}this.posn=this.ps.getPosn()},a.prototype.cost=function(){for(var a=0,b=this.vars.length;b--;){var c=this.vars[b],d=c.position()-c.desiredPosition;a+=d*d*c.weight}return a},a}();a.Block=e;var f=function(){function a(a){this.vs=a;var b=a.length;for(this.list=new Array(b);b--;){var c=new e(a[b]);this.list[b]=c,c.blockInd=b}}return a.prototype.cost=function(){for(var a=0,b=this.list.length;b--;)a+=this.list[b].cost();return a},a.prototype.insert=function(a){a.blockInd=this.list.length,this.list.push(a)},a.prototype.remove=function(a){var b=this.list.length-1,c=this.list[b];this.list.length=b,a!==c&&(this.list[a.blockInd]=c,c.blockInd=a.blockInd)},a.prototype.merge=function(a){var b=a.left.block,c=a.right.block,d=a.right.offset-a.left.offset-a.gap;b.vars.length<c.vars.length?(c.mergeAcross(b,a,d),this.remove(b)):(b.mergeAcross(c,a,-d),this.remove(c))},a.prototype.forEach=function(a){this.list.forEach(a)},a.prototype.updateBlockPositions=function(){this.list.forEach(function(a){return a.updateWeightedPosition()})},a.prototype.split=function(a){var b=this;this.updateBlockPositions(),this.list.forEach(function(c){var d=c.findMinLM();null!==d&&d.lm<g.LAGRANGIAN_TOLERANCE&&(c=d.left.block,e.split(d).forEach(function(a){return b.insert(a)}),b.remove(c),a.push(d))})},a}();a.Blocks=f;var g=function(){function a(a,b){this.vs=a,this.cs=b,this.vs=a,a.forEach(function(a){a.cIn=[],a.cOut=[]}),this.cs=b,b.forEach(function(a){a.left.cOut.push(a),a.right.cIn.push(a)}),this.inactive=b.map(function(a){return a.active=!1,a}),this.bs=null}return a.prototype.cost=function(){return this.bs.cost()},a.prototype.setStartingPositions=function(a){this.inactive=this.cs.map(function(a){return a.active=!1,a}),this.bs=new f(this.vs),this.bs.forEach(function(b,c){return b.posn=a[c]})},a.prototype.setDesiredPositions=function(a){this.vs.forEach(function(b,c){return b.desiredPosition=a[c]})},a.prototype.mostViolated=function(){for(var b=Number.MAX_VALUE,c=null,d=this.inactive,e=d.length,f=e,g=0;e>g;++g){var h=d[g];if(!h.unsatisfiable){var i=h.slack();if((h.equality||b>i)&&(b=i,c=h,f=g,h.equality))break}}return f!==e&&(b<a.ZERO_UPPERBOUND&&!c.active||c.equality)&&(d[f]=d[e-1],d.length=e-1),c},a.prototype.satisfy=function(){null==this.bs&&(this.bs=new f(this.vs)),this.bs.split(this.inactive);for(var b=null;(b=this.mostViolated())&&(b.equality||b.slack()<a.ZERO_UPPERBOUND&&!b.active);){var c=b.left.block,d=b.right.block;if(c!==d)this.bs.merge(b);else{if(c.isActiveDirectedPathBetween(b.right,b.left)){b.unsatisfiable=!0;continue}var e=c.splitBetween(b.left,b.right);if(null===e){b.unsatisfiable=!0;continue}this.bs.insert(e.lb),this.bs.insert(e.rb),this.bs.remove(c),this.inactive.push(e.constraint),b.slack()>=0?this.inactive.push(b):this.bs.merge(b)}}},a.prototype.solve=function(){this.satisfy();for(var a=Number.MAX_VALUE,b=this.bs.cost();Math.abs(a-b)>1e-4;)this.satisfy(),a=b,b=this.bs.cost();return b},a.LAGRANGIAN_TOLERANCE=-1e-4,a.ZERO_UPPERBOUND=-1e-10,a}();a.Solver=g}(b=a.vpsc||(a.vpsc={}))}(cola||(cola={}));var cola;!function(a){var b;!function(a){function b(a){return a.bounds="undefined"!=typeof a.leaves?a.leaves.reduce(function(a,b){return b.bounds.union(a)},p.empty()):p.empty(),"undefined"!=typeof a.groups&&(a.bounds=a.groups.reduce(function(a,c){return b(c).union(a)},a.bounds)),a.bounds=a.bounds.inflate(a.padding),a.bounds}function c(a,b,c,d){var e=b.rayIntersection(c.cx(),c.cy());e||(e={x:b.cx(),y:b.cy()});var f=c.rayIntersection(b.cx(),b.cy());f||(f={x:c.cx(),y:c.cy()});var g=f.x-e.x,h=f.y-e.y,i=Math.sqrt(g*g+h*h),j=i-d;a.sourceIntersection=e,a.targetIntersection=f,a.arrowStart={x:e.x+j*g/i,y:e.y+j*h/i}}function d(a,b,c){var d=b.rayIntersection(a.x,a.y);d||(d={x:b.cx(),y:b.cy()});var e=d.x-a.x,f=d.y-a.y,g=Math.sqrt(e*e+f*f);return{x:d.x-c*e/g,y:d.y-c*f/g}}function e(a,b){return a.pos>b.pos?1:a.pos<b.pos?-1:a.isOpen?-1:0}function f(){return new RBTree(function(a,b){return a.pos-b.pos})}function g(a,b,c,d){void 0===d&&(d=!1);var e=a.padding,f="undefined"!=typeof a.groups?a.groups.length:0,i="undefined"!=typeof a.leaves?a.leaves.length:0,j=f?a.groups.reduce(function(a,d){return a.concat(g(d,b,c,!0))},[]):[],k=(d?2:0)+i+f,l=new Array(k),m=new Array(k),n=0,o=function(a,b){m[n]=a,l[n++]=b};if(d){var p=a.bounds,q=b.getCentre(p),r=b.getSize(p)/2,s=b.getOpen(p),t=b.getClose(p),u=q-r+e/2,v=q+r-e/2;a.minVar.desiredPosition=u,o(b.makeRect(s,t,u,e),a.minVar),a.maxVar.desiredPosition=v,o(b.makeRect(s,t,v,e),a.maxVar)}i&&a.leaves.forEach(function(a){return o(a.bounds,a.variable)}),f&&a.groups.forEach(function(a){var c=a.bounds;o(b.makeRect(b.getOpen(c),b.getClose(c),b.getCentre(c),b.getSize(c)),a.minVar)});var w=h(m,l,b,c);return f&&(l.forEach(function(a){a.cOut=[],a.cIn=[]}),w.forEach(function(a){a.left.cOut.push(a),a.right.cIn.push(a)}),a.groups.forEach(function(a){var c=(a.padding-b.getSize(a.bounds))/2;a.minVar.cIn.forEach(function(a){return a.gap+=c}),a.minVar.cOut.forEach(function(b){b.left=a.maxVar,b.gap+=c})})),j.concat(w)}function h(b,c,d,g){var h,i=b.length,j=2*i;console.assert(c.length>=i);var k=new Array(j);for(h=0;i>h;++h){var l=b[h],m=new q(c[h],l,d.getCentre(l));k[h]=new r(!0,m,d.getOpen(l)),k[h+i]=new r(!1,m,d.getClose(l))}k.sort(e);var n=new Array,o=f();for(h=0;j>h;++h){var p=k[h],m=p.v;if(p.isOpen)o.insert(m),d.findNeighbours(m,o);else{o.remove(m);var s=function(b,c){var e=(d.getSize(b.r)+d.getSize(c.r))/2+g;n.push(new a.Constraint(b.v,c.v,e))},t=function(a,b,c){for(var d,e=m[a].iterator();null!==(d=e[a]());)c(d,m),d[b].remove(m)};t("prev","next",function(a,b){return s(a,b)}),t("next","prev",function(a,b){return s(b,a)})}}return console.assert(0===o.size),n}function i(a,b){var c=function(c,d){for(var e,f=b.findIter(a);null!==(e=f[c]());){var g=e.r.overlapX(a.r);if((0>=g||g<=e.r.overlapY(a.r))&&(a[c].insert(e),e[d].insert(a)),0>=g)break}};c("next","prev"),c("prev","next")}function j(a,b){var c=function(c,d){var e=b.findIter(a)[c]();null!==e&&e.r.overlapX(a.r)>0&&(a[c].insert(e),e[d].insert(a))};c("next","prev"),c("prev","next")}function k(a,b){return h(a,b,s,1e-6)}function l(a,b){return h(a,b,t,1e-6)}function m(a){return g(a,s,1e-6)}function n(a){return g(a,t,1e-6)}function o(b){var c=b.map(function(b){return new a.Variable(b.cx())}),d=a.generateXConstraints(b,c),e=new a.Solver(c,d);e.solve(),c.forEach(function(a,c){return b[c].setXCentre(a.position())}),c=b.map(function(b){return new a.Variable(b.cy())}),d=a.generateYConstraints(b,c),e=new a.Solver(c,d),e.solve(),c.forEach(function(a,c){return b[c].setYCentre(a.position())})}a.computeGroupBounds=b;var p=function(){function a(a,b,c,d){this.x=a,this.X=b,this.y=c,this.Y=d}return a.empty=function(){return new a(Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY)},a.prototype.cx=function(){return(this.x+this.X)/2},a.prototype.cy=function(){return(this.y+this.Y)/2},a.prototype.overlapX=function(a){var b=this.cx(),c=a.cx();return c>=b&&a.x<this.X?this.X-a.x:b>=c&&this.x<a.X?a.X-this.x:0},a.prototype.overlapY=function(a){var b=this.cy(),c=a.cy();return c>=b&&a.y<this.Y?this.Y-a.y:b>=c&&this.y<a.Y?a.Y-this.y:0},a.prototype.setXCentre=function(a){var b=a-this.cx();this.x+=b,this.X+=b},a.prototype.setYCentre=function(a){var b=a-this.cy();this.y+=b,this.Y+=b},a.prototype.width=function(){return this.X-this.x},a.prototype.height=function(){return this.Y-this.y},a.prototype.union=function(b){return new a(Math.min(this.x,b.x),Math.max(this.X,b.X),Math.min(this.y,b.y),Math.max(this.Y,b.Y))},a.prototype.lineIntersections=function(b,c,d,e){for(var f=[[this.x,this.y,this.X,this.y],[this.X,this.y,this.X,this.Y],[this.X,this.Y,this.x,this.Y],[this.x,this.Y,this.x,this.y]],g=[],h=0;4>h;++h){var i=a.lineIntersection(b,c,d,e,f[h][0],f[h][1],f[h][2],f[h][3]);null!==i&&g.push({x:i.x,y:i.y})}return g},a.prototype.rayIntersection=function(a,b){var c=this.lineIntersections(this.cx(),this.cy(),a,b);return c.length>0?c[0]:null},a.prototype.vertices=function(){return[{x:this.x,y:this.y},{x:this.X,y:this.y},{x:this.X,y:this.Y},{x:this.x,y:this.Y},{x:this.x,y:this.y}]},a.lineIntersection=function(a,b,c,d,e,f,g,h){var i=c-a,j=g-e,k=d-b,l=h-f,m=l*i-j*k;if(0==m)return null;var n=a-e,o=b-f,p=j*o-l*n,q=p/m,r=i*o-k*n,s=r/m;return q>=0&&1>=q&&s>=0&&1>=s?{x:a+q*i,y:b+q*k}:null},a.prototype.inflate=function(b){return new a(this.x-b,this.X+b,this.y-b,this.Y+b)},a}();a.Rectangle=p,a.makeEdgeBetween=c,a.makeEdgeTo=d;var q=function(){function a(a,b,c){this.v=a,this.r=b,this.pos=c,this.prev=f(),this.next=f()}return a}(),r=function(){function a(a,b,c){this.isOpen=a,this.v=b,this.pos=c}return a}(),s={getCentre:function(a){return a.cx()},getOpen:function(a){return a.y},getClose:function(a){return a.Y},getSize:function(a){return a.width()},makeRect:function(a,b,c,d){return new p(c-d/2,c+d/2,a,b)},findNeighbours:i},t={getCentre:function(a){return a.cy()},getOpen:function(a){return a.x},getClose:function(a){return a.X},getSize:function(a){return a.height()},makeRect:function(a,b,c,d){return new p(a,b,c-d/2,c+d/2)},findNeighbours:j};a.generateXConstraints=k,a.generateYConstraints=l,a.generateXGroupConstraints=m,a.generateYGroupConstraints=n,a.removeOverlaps=o;var u=function(a){function b(b,c){a.call(this,0,c),this.index=b}return __extends(b,a),b}(a.Variable),v=function(){function c(c,d,e,f,g){var h=this;if(void 0===e&&(e=null),void 0===f&&(f=null),void 0===g&&(g=!1),this.nodes=c,this.groups=d,this.rootGroup=e,this.avoidOverlaps=g,this.variables=c.map(function(a,b){return a.variable=new u(b,1)}),f&&this.createConstraints(f),g&&e&&"undefined"!=typeof e.groups){c.forEach(function(b){if(!b.width||!b.height)return void(b.bounds=new a.Rectangle(b.x,b.x,b.y,b.y));var c=b.width/2,d=b.height/2;b.bounds=new a.Rectangle(b.x-c,b.x+c,b.y-d,b.y+d)}),b(e);var i=c.length;d.forEach(function(a){h.variables[i]=a.minVar=new u(i++,.01),h.variables[i]=a.maxVar=new u(i++,.01)})}}return c.prototype.createSeparation=function(b){return new a.Constraint(this.nodes[b.left].variable,this.nodes[b.right].variable,b.gap,"undefined"!=typeof b.equality?b.equality:!1)},c.prototype.makeFeasible=function(a){var b=this;if(this.avoidOverlaps){var c="x",d="width";"x"===a.axis&&(c="y",d="height");var e=a.offsets.map(function(a){return b.nodes[a.node]}).sort(function(a,b){return a[c]-b[c]}),f=null;e.forEach(function(a){f&&(a[c]=f[c]+f[d]+1),f=a})}},c.prototype.createAlignment=function(b){var c=this,d=this.nodes[b.offsets[0].node].variable;this.makeFeasible(b);var e="x"===b.axis?this.xConstraints:this.yConstraints;b.offsets.slice(1).forEach(function(b){var f=c.nodes[b.node].variable;e.push(new a.Constraint(d,f,b.offset,!0))})},c.prototype.createConstraints=function(a){var b=this,c=function(a){return"undefined"==typeof a.type||"separation"===a.type};this.xConstraints=a.filter(function(a){return"x"===a.axis&&c(a)}).map(function(a){return b.createSeparation(a)}),this.yConstraints=a.filter(function(a){return"y"===a.axis&&c(a)}).map(function(a){return b.createSeparation(a)}),a.filter(function(a){return"alignment"===a.type}).forEach(function(a){return b.createAlignment(a)})},c.prototype.setupVariablesAndBounds=function(a,b,c,d){this.nodes.forEach(function(e,f){e.fixed?(e.variable.weight=1e3,c[f]=d(e)):e.variable.weight=1;var g=(e.width||0)/2,h=(e.height||0)/2,i=a[f],j=b[f];e.bounds=new p(i-g,i+g,j-h,j+h)})},c.prototype.xProject=function(a,b,c){(this.rootGroup||this.avoidOverlaps||this.xConstraints)&&this.project(a,b,a,c,function(a){return a.px},this.xConstraints,m,function(a){return a.bounds.setXCentre(c[a.variable.index]=a.variable.position())},function(a){var b=c[a.minVar.index]=a.minVar.position(),d=c[a.maxVar.index]=a.maxVar.position(),e=a.padding/2;a.bounds.x=b-e,a.bounds.X=d+e})},c.prototype.yProject=function(a,b,c){(this.rootGroup||this.yConstraints)&&this.project(a,b,b,c,function(a){return a.py},this.yConstraints,n,function(a){return a.bounds.setYCentre(c[a.variable.index]=a.variable.position())},function(a){var b=c[a.minVar.index]=a.minVar.position(),d=c[a.maxVar.index]=a.maxVar.position(),e=a.padding/2;a.bounds.y=b-e,a.bounds.Y=d+e})},c.prototype.projectFunctions=function(){var a=this;return[function(b,c,d){return a.xProject(b,c,d)},function(b,c,d){return a.yProject(b,c,d)}]},c.prototype.project=function(a,c,d,e,f,g,h,i,j){this.setupVariablesAndBounds(a,c,e,f),this.rootGroup&&this.avoidOverlaps&&(b(this.rootGroup),g=g.concat(h(this.rootGroup))),this.solve(this.variables,g,d,e),this.nodes.forEach(i),this.rootGroup&&this.avoidOverlaps&&this.groups.forEach(j)},c.prototype.solve=function(b,c,d,e){var f=new a.Solver(b,c);f.setStartingPositions(d),f.setDesiredPositions(e),f.solve()},c}();a.Projection=v}(b=a.vpsc||(a.vpsc={}))}(cola||(cola={}));var PairingHeap=function(){function a(a){this.elem=a,this.subheaps=[]}return a.prototype.toString=function(a){for(var b="",c=!1,d=0;d<this.subheaps.length;++d){var e=this.subheaps[d];e.elem?(c&&(b+=","),b+=e.toString(a),c=!0):c=!1}return""!==b&&(b="("+b+")"),(this.elem?a(this.elem):"")+b},a.prototype.forEach=function(a){this.empty()||(a(this.elem,this),this.subheaps.forEach(function(b){return b.forEach(a)}))},a.prototype.count=function(){return this.empty()?0:1+this.subheaps.reduce(function(a,b){return a+b.count()},0)},a.prototype.min=function(){return this.elem},a.prototype.empty=function(){return null==this.elem},a.prototype.contains=function(a){if(this===a)return!0;for(var b=0;b<this.subheaps.length;b++)if(this.subheaps[b].contains(a))return!0;return!1},a.prototype.isHeap=function(a){var b=this;return this.subheaps.every(function(c){return a(b.elem,c.elem)&&c.isHeap(a)})},a.prototype.insert=function(b,c){return this.merge(new a(b),c)},a.prototype.merge=function(a,b){return this.empty()?a:a.empty()?this:b(this.elem,a.elem)?(this.subheaps.push(a),this):(a.subheaps.push(this),a)},a.prototype.removeMin=function(a){return this.empty()?null:this.mergePairs(a)},a.prototype.mergePairs=function(b){if(0==this.subheaps.length)return new a(null);if(1==this.subheaps.length)return this.subheaps[0];var c=this.subheaps.pop().merge(this.subheaps.pop(),b),d=this.mergePairs(b);return c.merge(d,b)},a.prototype.decreaseKey=function(b,c,d,e){var f=b.removeMin(e);b.elem=f.elem,b.subheaps=f.subheaps,null!==d&&null!==f.elem&&d(b.elem,b);var g=new a(c);return null!==d&&d(c,g),this.merge(g,e)},a}(),PriorityQueue=function(){function a(a){this.lessThan=a}return a.prototype.top=function(){return this.empty()?null:this.root.elem},a.prototype.push=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(var c,d,e=0;d=a[e];++e)c=new PairingHeap(d),this.root=this.empty()?c:this.root.merge(c,this.lessThan);return c},a.prototype.empty=function(){return!this.root||!this.root.elem},a.prototype.isHeap=function(){return this.root.isHeap(this.lessThan)},a.prototype.forEach=function(a){this.root.forEach(a)},a.prototype.pop=function(){if(this.empty())return null;var a=this.root.min();return this.root=this.root.removeMin(this.lessThan),a},a.prototype.reduceKey=function(a,b,c){void 0===c&&(c=null),this.root=this.root.decreaseKey(a,b,c,this.lessThan)},a.prototype.toString=function(a){return this.root.toString(a)},a.prototype.count=function(){return this.root.count()},a}(),cola;!function(a){var b;!function(a){var b=function(){function a(a,b){this.id=a,this.distance=b}return a}(),c=function(){function a(a){this.id=a,this.neighbours=[]}return a}(),d=function(){function a(a,b,c){this.node=a,this.prev=b,this.d=c}return a}(),e=function(){function a(a,d,e,f,g){this.n=a,this.es=d,this.neighbours=new Array(this.n);for(var h=this.n;h--;)this.neighbours[h]=new c(h);for(h=this.es.length;h--;){var i=this.es[h],j=e(i),k=f(i),l=g(i);this.neighbours[j].neighbours.push(new b(k,l)),this.neighbours[k].neighbours.push(new b(j,l))}}return a.prototype.DistanceMatrix=function(){for(var a=new Array(this.n),b=0;b<this.n;++b)a[b]=this.dijkstraNeighbours(b);return a},a.prototype.DistancesFromNode=function(a){return this.dijkstraNeighbours(a)},a.prototype.PathFromNodeToNode=function(a,b){return this.dijkstraNeighbours(a,b)},a.prototype.PathFromNodeToNodeWithPrevCost=function(a,b,c){var e=new PriorityQueue(function(a,b){return a.d<=b.d}),f=this.neighbours[a],g=new d(f,null,0),h={};for(e.push(g);!e.empty()&&(g=e.pop(),f=g.node,f.id!==b);)for(var i=f.neighbours.length;i--;){var j=f.neighbours[i],k=this.neighbours[j.id];if(!g.prev||k.id!==g.prev.node.id){var l=k.id+","+f.id;if(!(l in h&&h[l]<=g.d)){var m=g.prev?c(g.prev.node.id,f.id,k.id):0,n=g.d+j.distance+m;h[l]=n,e.push(new d(k,g,n))}}}for(var o=[];g.prev;)g=g.prev,o.push(g.node.id);return o},a.prototype.dijkstraNeighbours=function(a,b){void 0===b&&(b=-1);for(var c=new PriorityQueue(function(a,b){return a.d<=b.d}),d=this.neighbours.length,e=new Array(d);d--;){var f=this.neighbours[d];f.d=d===a?0:Number.POSITIVE_INFINITY,f.q=c.push(f)}for(;!c.empty();){var g=c.pop();if(e[g.id]=g.d,g.id===b){for(var h=[],i=g;"undefined"!=typeof i.prev;)h.push(i.prev.id),i=i.prev;return h}for(d=g.neighbours.length;d--;){var j=g.neighbours[d],i=this.neighbours[j.id],k=g.d+j.distance;g.d!==Number.MAX_VALUE&&i.d>k&&(i.d=k,i.prev=g,c.reduceKey(i.q,i,function(a,b){return a.q=b}))}}return e},a}();a.Calculator=e}(b=a.shortestpaths||(a.shortestpaths={}))}(cola||(cola={}));var cola;!function(a){var b=function(){function a(a,b,c){this.id=a,this.rect=b,this.children=c,this.leaf="undefined"==typeof c||0===c.length}return a}();a.NodeWrapper=b;var c=function(){function a(a,b,c,d,e){void 0===d&&(d=null),void 0===e&&(e=null),this.id=a,this.x=b,this.y=c,this.node=d,this.line=e}return a}();a.Vert=c;var d=function(){function a(b,c){this.s=b,this.t=c;var d=a.findMatch(b,c),e=c.slice(0).reverse(),f=a.findMatch(b,e);d.length>=f.length?(this.length=d.length,this.si=d.si,this.ti=d.ti,this.reversed=!1):(this.length=f.length,this.si=f.si,this.ti=c.length-f.ti-f.length,this.reversed=!0)}return a.findMatch=function(a,b){for(var c=a.length,d=b.length,e={length:0,si:-1,ti:-1},f=new Array(c),g=0;c>g;g++){f[g]=new Array(d);for(var h=0;d>h;h++)if(a[g]===b[h]){var i=f[g][h]=0===g||0===h?1:f[g-1][h-1]+1;i>e.length&&(e.length=i,e.si=g-i+1,e.ti=h-i+1)}else f[g][h]=0}return e},a.prototype.getSequence=function(){return this.length>=0?this.s.slice(this.si,this.si+this.length):[]},a}();a.LongestCommonSubsequence=d;
var e=function(){function d(d,e,f){var g=this;void 0===f&&(f=12),this.originalnodes=d,this.groupPadding=f,this.leaves=null,this.nodes=d.map(function(a,c){return new b(c,e.getBounds(a),e.getChildren(a))}),this.leaves=this.nodes.filter(function(a){return a.leaf}),this.groups=this.nodes.filter(function(a){return!a.leaf}),this.cols=this.getGridDim("x"),this.rows=this.getGridDim("y"),this.groups.forEach(function(a){return a.children.forEach(function(b){return g.nodes[b].parent=a})}),this.root={children:[]},this.nodes.forEach(function(a){"undefined"==typeof a.parent&&(a.parent=g.root,g.root.children.push(a.id)),a.ports=[]}),this.backToFront=this.nodes.slice(0),this.backToFront.sort(function(a,b){return g.getDepth(a)-g.getDepth(b)});var h=this.backToFront.slice(0).reverse().filter(function(a){return!a.leaf});h.forEach(function(b){var c=a.vpsc.Rectangle.empty();b.children.forEach(function(a){return c=c.union(g.nodes[a].rect)}),b.rect=c.inflate(g.groupPadding)});var i=this.midPoints(this.cols.map(function(a){return a.x})),j=this.midPoints(this.rows.map(function(a){return a.y})),k=i[0],l=i[i.length-1],m=j[0],n=j[j.length-1],o=this.rows.map(function(a){return{x1:k,x2:l,y1:a.y,y2:a.y}}).concat(j.map(function(a){return{x1:k,x2:l,y1:a,y2:a}})),p=this.cols.map(function(a){return{x1:a.x,x2:a.x,y1:m,y2:n}}).concat(i.map(function(a){return{x1:a,x2:a,y1:m,y2:n}})),q=o.concat(p);q.forEach(function(a){return a.verts=[]}),this.verts=[],this.edges=[],o.forEach(function(a){return p.forEach(function(b){var d=new c(g.verts.length,b.x1,a.y1);a.verts.push(d),b.verts.push(d),g.verts.push(d);for(var e=g.backToFront.length;e-->0;){var f=g.backToFront[e],h=f.rect,i=Math.abs(d.x-h.cx()),j=Math.abs(d.y-h.cy());if(i<h.width()/2&&j<h.height()/2){d.node=f;break}}})}),q.forEach(function(a){g.nodes.forEach(function(b){b.rect.lineIntersections(a.x1,a.y1,a.x2,a.y2).forEach(function(d){var e=new c(g.verts.length,d.x,d.y,b,a);g.verts.push(e),a.verts.push(e),b.ports.push(e)})});var b=Math.abs(a.y1-a.y2)<.1,d=function(a,c){return b?c.x-a.x:c.y-a.y};a.verts.sort(d);for(var e=1;e<a.verts.length;e++){var f=a.verts[e-1],h=a.verts[e];f.node&&f.node===h.node&&f.node.leaf||g.edges.push({source:f.id,target:h.id,length:Math.abs(d(f,h))})}})}return d.prototype.avg=function(a){return a.reduce(function(a,b){return a+b})/a.length},d.prototype.getGridDim=function(a){for(var b=[],c=this.leaves.slice(0,this.leaves.length);c.length>0;){var d=c[0].rect,e=c.filter(function(b){return b.rect["overlap"+a.toUpperCase()](d)});b.push(e),e.forEach(function(a){return c.splice(c.indexOf(a),1)}),e[a]=this.avg(e.map(function(b){return b.rect["c"+a]()}))}return b.sort(function(b,c){return b[a]-c[a]}),b},d.prototype.getDepth=function(a){for(var b=0;a.parent!==this.root;)b++,a=a.parent;return b},d.prototype.midPoints=function(a){for(var b=a[1]-a[0],c=[a[0]-b/2],d=1;d<a.length;d++)c.push((a[d]+a[d-1])/2);return c.push(a[a.length-1]+b/2),c},d.prototype.findLineage=function(a){var b=[a];do a=a.parent,b.push(a);while(a!==this.root);return b.reverse()},d.prototype.findAncestorPathBetween=function(a,b){for(var c=this.findLineage(a),d=this.findLineage(b),e=0;c[e]===d[e];)e++;return{commonAncestor:c[e-1],lineages:c.slice(e).concat(d.slice(e))}},d.prototype.siblingObstacles=function(a,b){var c=this,d=this.findAncestorPathBetween(a,b),e={};d.lineages.forEach(function(a){return e[a.id]={}});var f=d.commonAncestor.children.filter(function(a){return!(a in e)});return d.lineages.filter(function(a){return a.parent!==d.commonAncestor}).forEach(function(a){return f=f.concat(a.parent.children.filter(function(b){return b!==a.id}))}),f.map(function(a){return c.nodes[a]})},d.getSegmentSets=function(a,b){for(var c=[],d=0;d<a.length;d++)for(var e=a[d],f=0;f<e.length;f++){var g=e[f];g.edgeid=d,g.i=f;var h=g[1][b]-g[0][b];Math.abs(h)<.1&&c.push(g)}c.sort(function(a,c){return a[0][b]-c[0][b]});for(var i=[],j=null,k=0;k<c.length;k++){var g=c[k];(!j||Math.abs(g[0][b]-j.pos)>.1)&&(j={pos:g[0][b],segments:[]},i.push(j)),j.segments.push(g)}return i},d.nudgeSegs=function(b,c,d,e,f,g){var h=e.length;if(!(1>=h)){for(var i=e.map(function(c){return new a.vpsc.Variable(c[0][b])}),j=[],k=0;h>k;k++)for(var l=0;h>l;l++)if(k!==l){var m=e[k],n=e[l],o=m.edgeid,p=n.edgeid,q=-1,r=-1;"x"==b?f(o,p)&&(m[0][c]<m[1][c]?(q=l,r=k):(q=k,r=l)):f(o,p)&&(m[0][c]<m[1][c]?(q=k,r=l):(q=l,r=k)),q>=0&&j.push(new a.vpsc.Constraint(i[q],i[r],g))}var s=new a.vpsc.Solver(i,j);s.solve(),i.forEach(function(a,c){var f=e[c],g=a.position();f[0][b]=f[1][b]=g;var h=d[f.edgeid];f.i>0&&(h[f.i-1][1][b]=g),f.i<h.length-1&&(h[f.i+1][0][b]=g)})}},d.nudgeSegments=function(a,b,c,e,f){for(var g=d.getSegmentSets(a,b,c),h=0;h<g.length;h++){for(var i=g[h],j=[],k=0;k<i.segments.length;k++){var l=i.segments[k];j.push({type:0,s:l,pos:Math.min(l[0][c],l[1][c])}),j.push({type:1,s:l,pos:Math.max(l[0][c],l[1][c])})}j.sort(function(a,b){return a.pos-b.pos+a.type-b.type});var m=[],n=0;j.forEach(function(g){0===g.type?(m.push(g.s),n++):n--,0==n&&(d.nudgeSegs(b,c,a,m,e,f),m=[])})}},d.prototype.routeEdges=function(b,c,d,e){var f=this,g=b.map(function(a){return f.route(d(a),e(a))}),h=a.GridRouter.orderEdges(g),i=g.map(function(b){return a.GridRouter.makeSegments(b)});return a.GridRouter.nudgeSegments(i,"x","y",h,c),a.GridRouter.nudgeSegments(i,"y","x",h,c),i},d.angleBetween2Lines=function(a,b){var c=Math.atan2(a[0].y-a[1].y,a[0].x-a[1].x),d=Math.atan2(b[0].y-b[1].y,b[0].x-b[1].x),e=c-d;return(e>Math.PI||e<-Math.PI)&&(e=d-c),e},d.isLeft=function(a,b,c){return(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)<=0},d.getOrder=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c];"undefined"==typeof b[d.l]&&(b[d.l]={}),b[d.l][d.r]=!0}return function(a,c){return"undefined"!=typeof b[a]&&b[a][c]}},d.orderEdges=function(b){for(var c=[],e=0;e<b.length-1;e++)for(var f=e+1;f<b.length;f++){var g,h,i,j=b[e],k=b[f],l=new a.LongestCommonSubsequence(j,k);0!==l.length&&(l.reversed&&(k.reverse(),k.reversed=!0,l=new a.LongestCommonSubsequence(j,k)),l.length!==j.length&&l.length!==k.length?(l.si+l.length>=j.length||l.ti+l.length>=k.length?(g=j[l.si+1],i=j[l.si-1],h=k[l.ti-1]):(g=j[l.si+l.length-2],h=j[l.si+l.length],i=k[l.ti+l.length]),c.push(d.isLeft(g,h,i)?{l:f,r:e}:{l:e,r:f})):c.push({l:e,r:f}))}return a.GridRouter.getOrder(c)},d.makeSegments=function(a){function b(a){return{x:a.x,y:a.y}}for(var c=function(a,b,c){return Math.abs((b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x))<.001},d=[],e=b(a[0]),f=1;f<a.length;f++){var g=b(a[f]),h=f<a.length-1?a[f+1]:null;h&&c(e,g,h)||(d.push([e,g]),e=g)}return d},d.prototype.route=function(b,c){var d=this,e=this.nodes[b],f=this.nodes[c];this.obstacles=this.siblingObstacles(e,f);var g={};this.obstacles.forEach(function(a){return g[a.id]=a}),this.passableEdges=this.edges.filter(function(a){var b=d.verts[a.source],c=d.verts[a.target];return!(b.node&&b.node.id in g||c.node&&c.node.id in g)});for(var h=1;h<e.ports.length;h++){var i=e.ports[0].id,j=e.ports[h].id;this.passableEdges.push({source:i,target:j,length:0})}for(var h=1;h<f.ports.length;h++){var i=f.ports[0].id,j=f.ports[h].id;this.passableEdges.push({source:i,target:j,length:0})}var k=function(a){return a.source},l=function(a){return a.target},m=function(a){return a.length},n=new a.shortestpaths.Calculator(this.verts.length,this.passableEdges,k,l,m),o=function(a,b,c){var g=d.verts[a],h=d.verts[b],i=d.verts[c],j=Math.abs(i.x-g.x),k=Math.abs(i.y-g.y);return g.node===e&&g.node===h.node||h.node===f&&h.node===i.node?0:j>1&&k>1?1e3:0},p=n.PathFromNodeToNodeWithPrevCost(e.ports[0].id,f.ports[0].id,o),q=p.reverse().map(function(a){return d.verts[a]});return q.push(this.nodes[f.id].ports[0]),q.filter(function(a,b){return!(b<q.length-1&&q[b+1].node===e&&a.node===e||b>0&&a.node===f&&q[b-1].node===f)})},d}();a.GridRouter=e}(cola||(cola={}));var cola;!function(a){function b(a,b){var c={};for(var d in a)c[d]={};for(var d in b)c[d]={};return Object.keys(c).length}function c(a,b){var c=0;for(var d in a)"undefined"!=typeof b[d]&&++c;return c}function d(a,b){var c={},d=function(a,b){"undefined"==typeof c[a]&&(c[a]={}),c[a][b]={}};return a.forEach(function(a){var c=b.getSourceIndex(a),e=b.getTargetIndex(a);d(c,e),d(e,c)}),c}function e(a,b,c,e){var f=d(a,e);a.forEach(function(a){var d=f[e.getSourceIndex(a)],g=f[e.getTargetIndex(a)];e.setLength(a,1+b*c(d,g))})}function f(a,d,f){void 0===f&&(f=1),e(a,f,function(a,d){return Math.sqrt(b(a,d)-c(a,d))},d)}function g(a,d,f){void 0===f&&(f=1),e(a,f,function(a,d){return Math.min(Object.keys(a).length,Object.keys(d).length)<1.1?0:c(a,d)/b(a,d)},d)}function h(a,b,c,d){var e=i(a,b,d),f={};e.filter(function(a){return a.length>1}).forEach(function(a){return a.forEach(function(b){return f[b]=a})});var g=[];return b.forEach(function(a){var b=d.getSourceIndex(a),e=d.getTargetIndex(a),h=f[b],i=f[e];h&&i&&h.component===i.component||g.push({axis:c,left:b,right:e,gap:d.getMinSeparation(a)})}),g}function i(a,b,c){function d(a){f[a]=j,g[a]=j,h[a]=!0,j+=1,k.push(a);for(var b=e[a],c=0;c<b.length;++c){var i=b[c];f[i]<0?(d(i),g[a]=0|Math.min(g[a],g[i])):h[i]&&(g[a]=Math.min(g[a],g[i]))}if(g[a]===f[a]){for(var m=[],c=k.length-1;c>=0;--c){var n=k[c];if(h[n]=!1,m.push(n),n===a){k.length=c;break}}l.push(m)}}for(var e=new Array(a),f=new Array(a),g=new Array(a),h=new Array(a),i=0;a>i;++i)e[i]=[],f[i]=-1,g[i]=0,h[i]=!1;for(var i=0;i<b.length;++i)e[c.getSourceIndex(b[i])].push(c.getTargetIndex(b[i]));for(var j=0,k=[],l=[],i=0;a>i;++i)f[i]<0&&d(i);return l}a.symmetricDiffLinkLengths=f,a.jaccardLinkLengths=g,a.generateDirectedEdgeConstraints=h}(cola||(cola={}));var cola;!function(a){var b;!function(a){function b(a,c,d){a.forAll(function(a){if(a.isLeaf())c.leaves||(c.leaves=[]),c.leaves.push(a.id);else{var e=c;a.gid=d.length,(!a.isIsland()||a.predefined)&&(e={id:a.gid},c.groups||(c.groups=[]),c.groups.push(a.gid),d.push(e)),b(a.children,e,d)}})}function c(a,b){var c={};for(var d in a)d in b&&(c[d]=a[d]);return c}function d(b,c,d,e){for(var f=b.length,g=new a.Configuration(f,c,d,e);g.greedyMerge(););var h=[],i=g.getGroupHierarchy(h);return h.forEach(function(a){var c=function(c){var d=a[c];"number"==typeof d&&(a[c]=b[d])};c("source"),c("target")}),{groups:i,powerEdges:h}}var e=function(){function a(a,b,c){this.source=a,this.target=b,this.type=c}return a}();a.PowerEdge=e;var f=function(){function a(a,b,c,d){var e=this;if(this.linkAccessor=c,this.modules=new Array(a),this.roots=[],d)this.initModulesFromGroup(d);else{this.roots.push(new h);for(var f=0;a>f;++f)this.roots[0].add(this.modules[f]=new g(f))}this.R=b.length,b.forEach(function(a){var b=e.modules[c.getSourceIndex(a)],d=e.modules[c.getTargetIndex(a)],f=c.getType(a);b.outgoing.add(f,d),d.incoming.add(f,b)})}return a.prototype.initModulesFromGroup=function(a){var b=new h;this.roots.push(b);for(var c=0;c<a.leaves.length;++c){var d=a.leaves[c],e=new g(d.id);this.modules[d.id]=e,b.add(e)}if(a.groups)for(var f=0;f<a.groups.length;++f){var j=a.groups[f];b.add(new g(-1-f,new i,new i,this.initModulesFromGroup(j),!0))}return b},a.prototype.merge=function(a,b,c){void 0===c&&(c=0);var d=a.incoming.intersection(b.incoming),e=a.outgoing.intersection(b.outgoing),f=new h;f.add(a),f.add(b);var i=new g(this.modules.length,e,d,f);this.modules.push(i);var j=function(c,d,e){c.forAll(function(c,f){c.forAll(function(c){var g=c[d];g.add(f,i),g.remove(f,a),g.remove(f,b),a[e].remove(f,c),b[e].remove(f,c)})})};return j(e,"incoming","outgoing"),j(d,"outgoing","incoming"),this.R-=d.count()+e.count(),this.roots[c].remove(a),this.roots[c].remove(b),this.roots[c].add(i),i},a.prototype.rootMerges=function(a){void 0===a&&(a=0);for(var b=this.roots[a].modules(),c=b.length,d=new Array(c*(c-1)),e=0,f=0,g=c-1;g>f;++f)for(var h=f+1;c>h;++h){var i=b[f],j=b[h];d[e++]={nEdges:this.nEdges(i,j),a:i,b:j}}return d},a.prototype.greedyMerge=function(){for(var a=0;a<this.roots.length;++a)if(!(this.roots[a].modules().length<2)){var b=this.rootMerges(a).sort(function(a,b){return a.nEdges-b.nEdges}),c=b[0];if(!(c.nEdges>=this.R))return this.merge(c.a,c.b,a),!0}},a.prototype.nEdges=function(a,b){var c=a.incoming.intersection(b.incoming),d=a.outgoing.intersection(b.outgoing);return this.R-c.count()-d.count()},a.prototype.getGroupHierarchy=function(a){var c=this,d=[],f={};b(this.roots[0],f,d);var g=this.allEdges();return g.forEach(function(b){var f=c.modules[b.source],g=c.modules[b.target];a.push(new e("undefined"==typeof f.gid?b.source:d[f.gid],"undefined"==typeof g.gid?b.target:d[g.gid],b.type))}),d},a.prototype.allEdges=function(){var b=[];return a.getEdges(this.roots[0],b),b},a.getEdges=function(b,c){b.forAll(function(b){b.getEdges(c),a.getEdges(b.children,c)})},a}();a.Configuration=f;var g=function(){function a(a,b,c,d,e){void 0===b&&(b=new i),void 0===c&&(c=new i),void 0===d&&(d=new h),void 0===e&&(e=!1),this.id=a,this.outgoing=b,this.incoming=c,this.children=d,this.predefined=e}return a.prototype.getEdges=function(a){var b=this;this.outgoing.forAll(function(c,d){c.forAll(function(c){a.push(new e(b.id,c.id,d))})})},a.prototype.isLeaf=function(){return 0===this.children.count()},a.prototype.isIsland=function(){return 0===this.outgoing.count()&&0===this.incoming.count()},a}();a.Module=g;var h=function(){function a(){this.table={}}return a.prototype.count=function(){return Object.keys(this.table).length},a.prototype.intersection=function(b){var d=new a;return d.table=c(this.table,b.table),d},a.prototype.intersectionCount=function(a){return this.intersection(a).count()},a.prototype.contains=function(a){return a in this.table},a.prototype.add=function(a){this.table[a.id]=a},a.prototype.remove=function(a){delete this.table[a.id]},a.prototype.forAll=function(a){for(var b in this.table)a(this.table[b])},a.prototype.modules=function(){var a=[];return this.forAll(function(b){b.predefined||a.push(b)}),a},a}();a.ModuleSet=h;var i=function(){function a(){this.sets={},this.n=0}return a.prototype.count=function(){return this.n},a.prototype.contains=function(a){var b=!1;return this.forAllModules(function(c){b||c.id!=a||(b=!0)}),b},a.prototype.add=function(a,b){var c=a in this.sets?this.sets[a]:this.sets[a]=new h;c.add(b),++this.n},a.prototype.remove=function(a,b){var c=this.sets[a];c.remove(b),0===c.count()&&delete this.sets[a],--this.n},a.prototype.forAll=function(a){for(var b in this.sets)a(this.sets[b],b)},a.prototype.forAllModules=function(a){this.forAll(function(b){return b.forAll(a)})},a.prototype.intersection=function(b){var c=new a;return this.forAll(function(a,d){if(d in b.sets){var e=a.intersection(b.sets[d]),f=e.count();f>0&&(c.sets[d]=e,c.n+=f)}}),c},a}();a.LinkSets=i,a.getGroups=d}(b=a.powergraph||(a.powergraph={}))}(cola||(cola={}));var cola;!function(a){function b(a){a.fixed|=2,a.px=a.x,a.py=a.y}function c(a){a.fixed&=-7}function d(a){a.fixed|=4,a.px=a.x,a.py=a.y}function e(a){a.fixed&=-5}return a.d3adaptor=function(){var d=d3.dispatch("start","tick","end"),e=a.adaptor({trigger:function(a){d[a.type](a)},on:function(a,b){return d.on(a,b),e},kick:function(a){d3.timer(a)},drag:function(){var a=d3.behavior.drag().origin(function(a){return a}).on("dragstart.d3adaptor",b).on("drag.d3adaptor",function(a){a.px=d3.event.x,a.py=d3.event.y,e.resume()}).on("dragend.d3adaptor",c);return arguments.length?void this.call(a):a}});return e},a.adaptor=function(f){function g(a){return"function"==typeof r?+r.call(null,a):r}function h(a,b){a.length=b}function i(a){return"function"==typeof t?t(a):0}function j(a){return"number"==typeof a.source?a.source:a.source.index}function k(a){return"number"==typeof a.target?a.target:a.target.index}var l,m,n={},o=f.trigger,p=f.kick,q=[1,1],r=20,s=null,t=null,u=!1,v=!0,w=!1,x=[],y=[],z=[],A=null,B=[],C=[],D=null,E=null,F=null,G=.01,H=10,I=null;n.on=f.on,n.drag=f.drag,n.dragstart=b,n.dragend=c,n.mouseover=d,n.mouseout=e,n.tick=function(){if(G>l)return w=!1,o({type:"end",alpha:l=0,stress:m}),delete m,!0;{var a,b=x.length;B.length}E.locks.clear();for(var c=0;b>c;++c)if(a=x[c],a.fixed){("undefined"==typeof a.px||"undefined"==typeof a.py)&&(a.px=a.x,a.py=a.y);var d=[a.px,a.py];E.locks.add(c,d)}var e=E.rungeKutta();0===e?l=0:"undefined"!=typeof m&&(l=Math.abs(Math.abs(m/e)-1)),m=e;for(var c=0;b>c;++c)a=x[c],a.fixed?(a.x=a.px,a.y=a.py):(a.x=E.x[0][c],a.y=E.x[1][c]);o({type:"tick",alpha:l,stress:m})},n.nodes=function(a){if(!arguments.length){if(0===x.length&&B.length>0){var b=0;B.forEach(function(a){b=Math.max(b,a.source,a.target)}),x=new Array(++b);for(var c=0;b>c;++c)x[c]={}}return x}return x=a,n},n.groups=function(a){return arguments.length?(y=a,A={},y.forEach(function(a){"undefined"==typeof a.padding&&(a.padding=1),"undefined"!=typeof a.leaves&&a.leaves.forEach(function(b,c){(a.leaves[c]=x[b]).parent=a}),"undefined"!=typeof a.groups&&a.groups.forEach(function(b,c){(a.groups[c]=y[b]).parent=a})}),A.leaves=x.filter(function(a){return"undefined"==typeof a.parent}),A.groups=y.filter(function(a){return"undefined"==typeof a.parent}),n):y},n.powerGraphGroups=function(b){var c=a.powergraph.getGroups(x,B,J,A);return this.groups(c.groups),b(c),n},n.avoidOverlaps=function(a){return arguments.length?(u=a,n):u},n.handleDisconnected=function(a){return arguments.length?(v=a,n):v},n.flowLayout=function(a,b){return arguments.length||(a="y"),F={axis:a,getMinSeparation:"number"==typeof b?function(){return b}:b},n},n.links=function(a){return arguments.length?(B=a,n):B},n.constraints=function(a){return arguments.length?(C=a,n):C},n.distanceMatrix=function(a){return arguments.length?(D=a,n):D},n.size=function(a){return arguments.length?(q=a,n):q},n.defaultNodeSize=function(a){return arguments.length?(H=a,n):H},n.linkDistance=function(a){return arguments.length?(r="function"==typeof a?a:+a,s=null,n):"function"==typeof r?r():r},n.linkType=function(a){return t=a,n},n.convergenceThreshold=function(a){return arguments.length?(G="function"==typeof a?a:+a,n):G},n.alpha=function(a){return arguments.length?(a=+a,l?l=a>0?a:0:a>0&&(w||(w=!0,o({type:"start",alpha:l=a}),p(n.tick))),n):l};var J={getSourceIndex:j,getTargetIndex:k,setLength:h,getType:i};return n.symmetricDiffLinkLengths=function(b,c){return this.linkDistance(function(a){return b*a.length}),s=function(){a.symmetricDiffLinkLengths(B,J,c)},n},n.jaccardLinkLengths=function(b,c){return this.linkDistance(function(a){return b*a.length}),s=function(){a.jaccardLinkLengths(B,J,c)},n},n.start=function(){var b,c=this.nodes().length,d=c+2*y.length,e=(B.length,q[0]),f=q[1];s&&s();var h=new Array(d),i=new Array(d);z=new Array(d);var l=null,m=this.avoidOverlaps();x.forEach(function(a,b){a.index=b,"undefined"==typeof a.x&&(a.x=e/2,a.y=f/2),h[b]=a.x,i[b]=a.y});var o;D?o=D:(o=new a.shortestpaths.Calculator(d,B,j,k,g).DistanceMatrix(),l=a.Descent.createSquareMatrix(d,function(){return 2}),B.forEach(function(a){var b=j(a),c=k(a);l[b][c]=l[c][b]=1}));var p=a.Descent.createSquareMatrix(d,function(a,b){return o[a][b]});if(A&&"undefined"!=typeof A.groups){var b=c;y.forEach(function(){l[b][b+1]=l[b+1][b]=1e-6,p[b][b+1]=p[b+1][b]=.1,h[b]=0,i[b++]=0,h[b]=0,i[b++]=0})}else A={leaves:x,groups:[]};var r=C||[];F&&(J.getMinSeparation=F.getMinSeparation,r=r.concat(a.generateDirectedEdgeConstraints(c,B,F.axis,J)));var t=arguments.length>0?arguments[0]:0,u=arguments.length>1?arguments[1]:0,w=arguments.length>2?arguments[2]:0;this.avoidOverlaps(!1),E=new a.Descent([h,i],p),E.locks.clear();for(var b=0;c>b;++b){var I=x[b];if(I.fixed){I.px=I.x,I.py=I.y;var K=[I.x,I.y];E.locks.add(b,K)}}return E.threshold=G,E.run(t),r.length>0&&(E.project=new a.vpsc.Projection(x,y,A,r).projectFunctions()),E.run(u),this.avoidOverlaps(m),m&&(x.forEach(function(a,b){a.x=h[b],a.y=i[b]}),E.project=new a.vpsc.Projection(x,y,A,r,!0).projectFunctions(),x.forEach(function(a,b){h[b]=a.x,i[b]=a.y})),E.G=l,E.run(w),B.forEach(function(a){"number"==typeof a.source&&(a.source=x[a.source]),"number"==typeof a.target&&(a.target=x[a.target])}),x.forEach(function(a,b){a.x=h[b],a.y=i[b]}),!D&&v&&(a.applyPacking(a.separateGraphs(x,B),e,f,H),x.forEach(function(a,b){E.x[0][b]=a.x,E.x[1][b]=a.y})),n.resume()},n.resume=function(){return n.alpha(.1)},n.stop=function(){return n.alpha(0)},n.prepareEdgeRouting=function(b){I=new a.geom.TangentVisibilityGraph(x.map(function(a){return a.bounds.inflate(-b).vertices()}))},n.routeEdge=function(b,c){var d=[],e=new a.geom.TangentVisibilityGraph(I.P,{V:I.V,E:I.E}),f={x:b.source.x,y:b.source.y},g={x:b.target.x,y:b.target.y},h=e.addPoint(f,b.source.id),i=e.addPoint(g,b.target.id);e.addEdgeIfVisible(f,g,b.source.id,b.target.id),"undefined"!=typeof c&&c(e);var j=function(a){return a.source.id},k=function(a){return a.target.id},l=function(a){return a.length()},m=new a.shortestpaths.Calculator(e.V.length,e.E,j,k,l),n=m.PathFromNodeToNode(h.id,i.id);if(1===n.length||n.length===e.V.length)a.vpsc.makeEdgeBetween(b,b.source.innerBounds,b.target.innerBounds,5),d=[{x:b.sourceIntersection.x,y:b.sourceIntersection.y},{x:b.arrowStart.x,y:b.arrowStart.y}];else{for(var o=n.length-2,p=e.V[n[o]].p,q=e.V[n[0]].p,d=[b.source.innerBounds.rayIntersection(p.x,p.y)],r=o;r>=0;--r)d.push(e.V[n[r]].p);d.push(a.vpsc.makeEdgeTo(q,b.target.innerBounds,5))}return d},n.linkId=function(a){return j(a)+"-"+k(a)},n},a}(cola||(cola={})),RBTree=function(a){var b=function(a){var c=b.m[a];if(c.mod)return c.mod.exports;var d=c.mod={exports:{}};return c(d,d.exports),d.exports};return b.m={},b.m["./treebase"]=function(a){function b(){}function c(a){this._tree=a,this._ancestors=[],this._cursor=null}b.prototype.clear=function(){this._root=null,this.size=0},b.prototype.find=function(a){for(var b=this._root;null!==b;){var c=this._comparator(a,b.data);if(0===c)return b.data;b=b.get_child(c>0)}return null},b.prototype.findIter=function(a){for(var b=this._root,c=this.iterator();null!==b;){var d=this._comparator(a,b.data);if(0===d)return c._cursor=b,c;c._ancestors.push(b),b=b.get_child(d>0)}return null},b.prototype.lowerBound=function(a){return this._bound(a,this._comparator)},b.prototype.upperBound=function(a){function b(a,b){return c(b,a)}var c=this._comparator;return this._bound(a,b)},b.prototype.min=function(){var a=this._root;if(null===a)return null;for(;null!==a.left;)a=a.left;return a.data},b.prototype.max=function(){var a=this._root;if(null===a)return null;for(;null!==a.right;)a=a.right;return a.data},b.prototype.iterator=function(){return new c(this)},b.prototype.each=function(a){for(var b,c=this.iterator();null!==(b=c.next());)a(b)},b.prototype.reach=function(a){for(var b,c=this.iterator();null!==(b=c.prev());)a(b)},b.prototype._bound=function(a,b){for(var c=this._root,d=this.iterator();null!==c;){var e=this._comparator(a,c.data);if(0===e)return d._cursor=c,d;d._ancestors.push(c),c=c.get_child(e>0)}for(var f=d._ancestors.length-1;f>=0;--f)if(c=d._ancestors[f],b(a,c.data)>0)return d._cursor=c,d._ancestors.length=f,d;return d._ancestors.length=0,d},c.prototype.data=function(){return null!==this._cursor?this._cursor.data:null},c.prototype.next=function(){if(null===this._cursor){var a=this._tree._root;null!==a&&this._minNode(a)}else if(null===this._cursor.right){var b;do{if(b=this._cursor,!this._ancestors.length){this._cursor=null;break}this._cursor=this._ancestors.pop()}while(this._cursor.right===b)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return null!==this._cursor?this._cursor.data:null},c.prototype.prev=function(){if(null===this._cursor){var a=this._tree._root;null!==a&&this._maxNode(a)}else if(null===this._cursor.left){var b;do{if(b=this._cursor,!this._ancestors.length){this._cursor=null;break}this._cursor=this._ancestors.pop()}while(this._cursor.left===b)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return null!==this._cursor?this._cursor.data:null},c.prototype._minNode=function(a){for(;null!==a.left;)this._ancestors.push(a),a=a.left;this._cursor=a},c.prototype._maxNode=function(a){for(;null!==a.right;)this._ancestors.push(a),a=a.right;this._cursor=a},a.exports=b},b.m.__main__=function(a){function c(a){this.data=a,this.left=null,this.right=null,this.red=!0}function d(a){this._root=null,this._comparator=a,this.size=0}function e(a){return null!==a&&a.red}function f(a,b){var c=a.get_child(!b);return a.set_child(!b,c.get_child(b)),c.set_child(b,a),a.red=!0,c.red=!1,c}function g(a,b){return a.set_child(!b,f(a.get_child(!b),!b)),f(a,b)}var h=b("./treebase");c.prototype.get_child=function(a){return a?this.right:this.left},c.prototype.set_child=function(a,b){a?this.right=b:this.left=b},d.prototype=new h,d.prototype.insert=function(a){var b=!1;if(null===this._root)this._root=new c(a),b=!0,this.size++;else{var d=new c(void 0),h=0,i=0,j=null,k=d,l=null,m=this._root;for(k.right=this._root;;){if(null===m?(m=new c(a),l.set_child(h,m),b=!0,this.size++):e(m.left)&&e(m.right)&&(m.red=!0,m.left.red=!1,m.right.red=!1),e(m)&&e(l)){var n=k.right===j;m===l.get_child(i)?k.set_child(n,f(j,!i)):k.set_child(n,g(j,!i))}var o=this._comparator(m.data,a);if(0===o)break;i=h,h=0>o,null!==j&&(k=j),j=l,l=m,m=m.get_child(h)}this._root=d.right}return this._root.red=!1,b},d.prototype.remove=function(a){if(null===this._root)return!1;var b=new c(void 0),d=b;d.right=this._root;for(var h=null,i=null,j=null,k=1;null!==d.get_child(k);){var l=k;i=h,h=d,d=d.get_child(k);var m=this._comparator(a,d.data);if(k=m>0,0===m&&(j=d),!e(d)&&!e(d.get_child(k)))if(e(d.get_child(!k))){var n=f(d,k);h.set_child(l,n),h=n}else if(!e(d.get_child(!k))){var o=h.get_child(!l);if(null!==o)if(e(o.get_child(!l))||e(o.get_child(l))){var p=i.right===h;e(o.get_child(l))?i.set_child(p,g(h,l)):e(o.get_child(!l))&&i.set_child(p,f(h,l));var q=i.get_child(p);q.red=!0,d.red=!0,q.left.red=!1,q.right.red=!1}else h.red=!1,o.red=!0,d.red=!0}}return null!==j&&(j.data=d.data,h.set_child(h.right===d,d.get_child(null===d.left)),this.size--),this._root=b.right,null!==this._root&&(this._root.red=!1),null!==j},a.exports=d},b("__main__")}(window);var cola;!function(a){var b={};return b.PADDING=10,b.GOLDEN_SECTION=(1+Math.sqrt(5))/2,b.FLOAT_EPSILON=1e-4,b.MAX_INERATIONS=100,a.applyPacking=function(a,c,d,e,f){function g(a){function b(a){var b=Number.MAX_VALUE,c=Number.MAX_VALUE,d=0,f=0;a.array.forEach(function(a){var g="undefined"!=typeof a.width?a.width:e,h="undefined"!=typeof a.height?a.height:e;g/=2,h/=2,d=Math.max(a.x+g,d),b=Math.min(a.x-g,b),f=Math.max(a.y+h,f),c=Math.min(a.y-h,c)}),a.width=d-b,a.height=f-c}a.forEach(function(a){b(a)})}function h(a){a.forEach(function(a){var b={x:0,y:0};a.array.forEach(function(a){b.x+=a.x,b.y+=a.y}),b.x/=a.array.length,b.y/=a.array.length;var c={x:b.x-a.width/2,y:b.y-a.height/2},d={x:a.x-c.x,y:a.y-c.y};a.array.forEach(function(a){a.x=a.x+d.x+p/2-r/2,a.y=a.y+d.y+q/2-s/2})})}function i(a){var c=Number.POSITIVE_INFINITY,d=0;a.sort(function(a,b){return b.height-a.height}),t=a.reduce(function(a,b){return a.width<b.width?a.width:b.width});for(var e=o=t,f=p=l(a),g=0,h=Number.MAX_VALUE,i=Number.MAX_VALUE,k=-1,m=Number.MAX_VALUE,n=Number.MAX_VALUE;m>t||n>b.FLOAT_EPSILON;){if(1!=k)var o=f-(f-e)/b.GOLDEN_SECTION,h=j(a,o);if(0!=k)var p=e+(f-e)/b.GOLDEN_SECTION,i=j(a,p);if(m=Math.abs(o-p),n=Math.abs(h-i),c>h&&(c=h,d=o),c>i&&(c=i,d=p),h>i?(e=o,o=p,h=i,k=1):(f=p,p=o,i=h,k=0),g++>100)break}j(a,d)}function j(a,b){v=[],r=0,s=0,u=o;for(var c=0;c<a.length;c++){var d=a[c];k(d,b)}return Math.abs(m()-f)}function k(a,c){for(var d=void 0,e=0;e<v.length;e++)if(v[e].space_left>=a.height&&v[e].x+v[e].width+a.width+b.PADDING-c<=b.FLOAT_EPSILON){d=v[e];break}v.push(a),void 0!==d?(a.x=d.x+d.width+b.PADDING,a.y=d.bottom,a.space_left=a.height,a.bottom=a.y,d.space_left-=a.height+b.PADDING,d.bottom+=a.height+b.PADDING):(a.y=u,u+=a.height+b.PADDING,a.x=n,a.bottom=a.y,a.space_left=a.height),a.y+a.height-s>-b.FLOAT_EPSILON&&(s=a.y+a.height-o),a.x+a.width-r>-b.FLOAT_EPSILON&&(r=a.x+a.width-n)}function l(a){var c=0;return a.forEach(function(a){return c+=a.width+b.PADDING}),c}function m(){return r/s}var n=0,o=0,p=c,q=d,f="undefined"!=typeof f?f:1,e="undefined"!=typeof e?e:0,r=0,s=0,t=0,u=0,v=[];0!=a.length&&(g(a),i(a),h(a))},a.separateGraphs=function(a,b){function c(a,b){if(void 0===d[a.index]){b&&(g++,f.push({array:[]})),d[a.index]=g,f[g-1].array.push(a);var h=e[a.index];if(h)for(var i=0;i<h.length;i++)c(h[i],!1)}}for(var d={},e={},f=[],g=0,h=0;h<b.length;h++){var i=b[h],j=i.source,k=i.target;e[j.index]?e[j.index].push(k):e[j.index]=[k],e[k.index]?e[k.index].push(j):e[k.index]=[j]}for(var h=0;h<a.length;h++){var l=a[h];d[l.index]||c(l,!0)}return f},a}(cola||(cola={}));
//# sourceMappingURL=cola.v3.min.js.map

;(function(){ 'use strict';

  // registers the extension on a cytoscape lib ref
  var register = function( cytoscape, cola ){
    if( !cytoscape || !cola ){ return; } // can't register if cytoscape unspecified

    var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    var isString = function(o){ return typeof o === typeof ''; };
    var isNumber = function(o){ return typeof o === typeof 0; };
    var isObject = function(o){ return o != null && typeof o === typeof {}; };

    // default layout options
    var defaults = {
      animate: true, // whether to show the layout as it's running
      refresh: 1, // number of ticks per frame; higher is faster but more jerky
      maxSimulationTime: 4000, // max length in ms to run the layout
      ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
      fit: true, // on every layout reposition of nodes, fit the viewport
      padding: 30, // padding around the simulation
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

      // layout event callbacks
      ready: function(){}, // on layoutready
      stop: function(){}, // on layoutstop

      // positioning options
      randomize: false, // use random node positions at beginning of layout
      avoidOverlap: true, // if true, prevents overlap of node bounding boxes
      handleDisconnected: true, // if true, avoids disconnected components from overlapping
      nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
      flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
      alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }

      // different methods of specifying edge length
      // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
      edgeLength: undefined, // sets edge length directly in simulation
      edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
      edgeJaccardLength: undefined, // jaccard edge length in simulation

      // iterations of cola algorithm; uses default values on undefined
      unconstrIter: undefined, // unconstrained initial layout iterations
      userConstIter: undefined, // initial layout iterations with user-specified constraints
      allConstIter: undefined, // initial layout iterations with all constraints including non-overlap

      // infinite layout options
      infinite: false // overrides all other options for a forces-all-the-time mode
    };

    // constructor
    // options : object containing layout options
    function ColaLayout( options ){
      var opts = this.options = {};
      for( var i in defaults ){ opts[i] = defaults[i]; }
      for( var i in options ){ opts[i] = options[i]; }
    }

    // runs the layout
    ColaLayout.prototype.run = function(){
      var layout = this;
      var options = this.options;

      layout.manuallyStopped = false;

      var cy = options.cy; // cy is automatically populated for us in the constructor
      var eles = options.eles;
      var nodes = eles.nodes();
      var edges = eles.edges();
      var ready = false;

      var bb = options.boundingBox || { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
      if( bb.x2 === undefined ){ bb.x2 = bb.x1 + bb.w; }
      if( bb.w === undefined ){ bb.w = bb.x2 - bb.x1; }
      if( bb.y2 === undefined ){ bb.y2 = bb.y1 + bb.h; }
      if( bb.h === undefined ){ bb.h = bb.y2 - bb.y1; }

      var typeoffn = typeof function(){};
      var getOptVal = function( val, ele ){
        if( typeof val === typeoffn ){
          var fn = val;
          return fn.apply( ele, [ ele ] );
        } else {
          return val;
        }
      };

      var updateNodePositions = function(){
        var x = { min: Infinity, max: -Infinity };
        var y = { min: Infinity, max: -Infinity };

        for( var i = 0; i < nodes.length; i++ ){
          var node = nodes[i];
          var scratch = node.scratch('cola');

          x.min = Math.min( x.min, scratch.x || 0 );
          x.max = Math.max( x.max, scratch.x || 0 );

          y.min = Math.min( y.min, scratch.y || 0 );
          y.max = Math.max( y.max, scratch.y || 0 );

          // update node dims
          if( !scratch.updatedDims ){
            var nbb = node.boundingBox();
            var padding = getOptVal( options.nodeSpacing, node );

            scratch.width = nbb.w + 2*padding;
            scratch.height = nbb.h + 2*padding;
          }
        }

        nodes.positions(function(i, node){
          var scratch = node.scratch().cola;
          var retPos;

          if( !node.grabbed() && !node.isParent() ){
            retPos = {
              x: bb.x1 + scratch.x - x.min,
              y: bb.y1 + scratch.y - y.min
            };

            if( !isNumber(retPos.x) || !isNumber(retPos.y) ){
              retPos = undefined;
            }
          }

          return retPos;
        });

        nodes.updateCompoundBounds(); // because the way this layout sets positions is buggy for some reason; ref #878

        if( !ready ){
          onReady();
          ready = true;
        }

        if( options.fit ){
          cy.fit( options.padding );
        }
      };

      var onDone = function(){
        if( options.ungrabifyWhileSimulating ){
          grabbableNodes.grabify();
        }

        nodes.off('grab free position', grabHandler);
        nodes.off('lock unlock', lockHandler);

        // trigger layoutstop when the layout stops (e.g. finishes)
        layout.one('layoutstop', options.stop);
        layout.trigger({ type: 'layoutstop', layout: layout });
      };

      var onReady = function(){
        // trigger layoutready when each node has had its position set at least once
        layout.one('layoutready', options.ready);
        layout.trigger({ type: 'layoutready', layout: layout });
      };

      var ticksPerFrame = options.refresh;
      var tickSkip = 1; // frames until a tick; used to slow down sim for debugging

      if( options.refresh < 0 ){
        tickSkip = Math.abs( options.refresh );
        ticksPerFrame = 1;
      } else {
        ticksPerFrame = Math.max( 1, ticksPerFrame ); // at least 1
      }

      var adaptor = layout.adaptor = cola.adaptor({
        trigger: function( e ){ // on sim event
          var TICK = cola.EventType ? cola.EventType.tick : null;
          var END = cola.EventType ? cola.EventType.end : null;

          switch( e.type ){
            case 'tick':
            case TICK:
              if( options.animate ){
                updateNodePositions();
              }
              break;

            case 'end':
            case END:
              updateNodePositions();
              if( !options.infinite ){ onDone(); }
              break;
          }
        },

        kick: function(){ // kick off the simulation
          //var skip = 0;

          var inftick = function(){
            if( layout.manuallyStopped ){
              onDone();

              return true;
            }

            var ret = adaptor.tick();

            if( ret && options.infinite ){ // resume layout if done
              adaptor.resume(); // resume => new kick
            }

            return ret; // allow regular finish b/c of new kick
          };

          var multitick = function(){ // multiple ticks in a row
            var ret;

            // skip ticks to slow down layout for debugging
            // var thisSkip = skip;
            // skip = (skip + 1) % tickSkip;
            // if( thisSkip !== 0 ){
            //   return false;
            // }

            for( var i = 0; i < ticksPerFrame && !ret; i++ ){
              ret = ret || inftick(); // pick up true ret vals => sim done
            }

            return ret;
          };

          if( options.animate ){
            var frame = function(){
              if( multitick() ){ return; }

              raf( frame );
            };

            raf( frame );
          } else {
            while( !inftick() ){}
          }
        },

        on: function( type, listener ){}, // dummy; not needed

        drag: function(){} // not needed for our case
      });
      layout.adaptor = adaptor;

      // if set no grabbing during layout
      var grabbableNodes = nodes.filter(':grabbable');
      if( options.ungrabifyWhileSimulating ){
        grabbableNodes.ungrabify();
      }

      // handle node dragging
      var grabHandler;
      nodes.on('grab free position', grabHandler = function(e){
        var node = this;
        var scrCola = node.scratch().cola;
        var pos = node.position();

        // update cola pos obj
        scrCola.x = pos.x - bb.x1;
        scrCola.y = pos.y - bb.y1;

        switch( e.type ){
          case 'grab':
            adaptor.dragstart( scrCola );
            adaptor.resume();
            break;
          case 'free':
            adaptor.dragend( scrCola );
            break;
        }

      });

      var lockHandler;
      nodes.on('lock unlock', lockHandler = function(e){
        var node = this;
        var scrCola = node.scratch().cola;

        scrCola.fixed = node.locked();

        if( node.locked() ){
          adaptor.dragstart( scrCola );
        } else {
          adaptor.dragend( scrCola );
        }
      });

      var nonparentNodes = nodes.stdFilter(function( node ){
        return !node.isParent();
      });

      // add nodes to cola
      adaptor.nodes( nonparentNodes.map(function( node, i ){
        var padding = getOptVal( options.nodeSpacing, node );
        var pos = node.position();
        var nbb = node.boundingBox();

        var struct = node.scratch().cola = {
          x: options.randomize || pos.x === undefined ? Math.round( Math.random() * bb.w ) : pos.x,
          y: options.randomize || pos.y === undefined ? Math.round( Math.random() * bb.h ) : pos.y,
          width: nbb.w + 2*padding,
          height: nbb.h + 2*padding,
          index: i,
          fixed: node.locked()
        };

        return struct;
      }) );

      if( options.alignment ){ // then set alignment constraints

        var offsetsX = [];
        var offsetsY = [];

        nonparentNodes.forEach(function( node ){
          var align = getOptVal( options.alignment, node );
          var scrCola = node.scratch().cola;
          var index = scrCola.index;

          if( !align ){ return; }

          if( align.x != null ){
            offsetsX.push({
              node: index,
              offset: align.x
            });
          }

          if( align.y != null ){
            offsetsY.push({
              node: index,
              offset: align.y
            });
          }
        });

        // add alignment constraints on nodes
        var constraints = [];

        if( offsetsX.length > 0 ){
          constraints.push({
            type: 'alignment',
            axis: 'x',
            offsets: offsetsX
          });
        }

        if( offsetsY.length > 0 ){
          constraints.push({
            type: 'alignment',
            axis: 'y',
            offsets: offsetsY
          });
        }

        adaptor.constraints( constraints );

      }

      // add compound nodes to cola
      adaptor.groups( nodes.stdFilter(function( node ){
        return node.isParent();
      }).map(function( node, i ){ // add basic group incl leaf nodes
        var optPadding = getOptVal( options.nodeSpacing, node );
        var getPadding = function(d){
          return parseFloat( node.style('padding-'+d) );
        };

        var pleft = getPadding('left') + optPadding;
        var pright = getPadding('right') + optPadding;
        var ptop = getPadding('top') + optPadding;
        var pbottom = getPadding('bottom') + optPadding;

        node.scratch().cola = {
          index: i,

          padding: Math.max( pleft, pright, ptop, pbottom ),

          leaves: node.descendants().stdFilter(function( child ){
            return !child.isParent();
          }).map(function( child ){
            return child[0].scratch().cola.index;
          }),

          fixed: node.locked()
        };

        return node;
      }).map(function( node ){ // add subgroups
        node.scratch().cola.groups = node.descendants().stdFilter(function( child ){
          return child.isParent();
        }).map(function( child ){
          return child.scratch().cola.index;
        });

        return node.scratch().cola;
      }) );

      // get the edge length setting mechanism
      var length;
      var lengthFnName;
      if( options.edgeLength != null ){
        length = options.edgeLength;
        lengthFnName = 'linkDistance';
      } else if( options.edgeSymDiffLength != null ){
        length = options.edgeSymDiffLength;
        lengthFnName = 'symmetricDiffLinkLengths';
      } else if( options.edgeJaccardLength != null ){
        length = options.edgeJaccardLength;
        lengthFnName = 'jaccardLinkLengths';
      } else {
        length = 100;
        lengthFnName = 'linkDistance';
      }

      var lengthGetter = function( link ){
        return link.calcLength;
      };

      // add the edges to cola
      adaptor.links( edges.stdFilter(function( edge ){
        return !edge.source().isParent() && !edge.target().isParent();
      }).map(function( edge, i ){
        var c = edge.scratch().cola = {
          source: edge.source()[0].scratch().cola.index,
          target: edge.target()[0].scratch().cola.index
        };

        if( length != null ){
          c.calcLength = getOptVal( length, edge );
        }

        return c;
      }) );

      adaptor.size([ bb.w, bb.h ]);

      if( length != null ){
        adaptor[ lengthFnName ]( lengthGetter );
      }

      // set the flow of cola
      if( options.flow ){
        var flow;
        var defAxis = 'y';
        var defMinSep = 50;

        if( isString(options.flow) ){
          flow = {
            axis: options.flow,
            minSeparation: defMinSep
          };
        } else if( isNumber(options.flow) ){
          flow = {
            axis: defAxis,
            minSeparation: options.flow
          };
        } else if( isObject(options.flow) ){
          flow = options.flow;

          flow.axis = flow.axis || defAxis;
          flow.minSeparation = flow.minSeparation != null ? flow.minSeparation : defMinSep;
        } else { // e.g. options.flow: true
          flow = {
            axis: defAxis,
            minSeparation: defMinSep
          };
        }

        adaptor.flowLayout( flow.axis , flow.minSeparation );
      }

      layout.trigger({ type: 'layoutstart', layout: layout });

      adaptor
        .avoidOverlaps( options.avoidOverlap )
        .handleDisconnected( options.handleDisconnected )
        .start( options.unconstrIter, options.userConstIter, options.allConstIter)
      ;

      if( !options.infinite ){
        setTimeout(function(){
          if( !layout.manuallyStopped ){
            adaptor.stop();
          }
        }, options.maxSimulationTime);
      }

      return this; // chaining
    };

    // called on continuous layouts to stop them before they finish
    ColaLayout.prototype.stop = function(){
      if( this.adaptor ){
        this.manuallyStopped = true;
        this.adaptor.stop();
      }

      return this; // chaining
    };


    cytoscape('layout', 'cola', ColaLayout);

  };

  if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
    module.exports = register;
  }

  if( typeof define !== 'undefined' && define.amd ){ // expose as an amd/requirejs module
    define('cytoscape-cola', function(){
      return register;
    });
  }

  if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
    register( cytoscape, cola );
  }

})();


var movieCasts = {};
var actorLookup = {};
var movieLookup = {};
var roleLookup = {};
var posterLookup = {};
var picLookup = {};
var gotRoles = {};
var suggs = [];
var docLookup = {};
var removedDocs = [];
var showingPics;
var redraw;
var includeDocs;
var currLayout = "circle";
var cy;

function getYear(release_date) {
  if (release_date == null) {
    return "";
  } else {
    return release_date.substring(0, 4);
  }
};

var tmdbObject = {
  api_key: "ea410068ee0b9ce6c7cb5f5e0202f423",
  get_data: function(url, afterCode) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        afterCode(xmlhttp);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },
  addName: function(name) {
    this.get_data("http://api.themoviedb.org/3/search/person?query=" + name + "&api_key=" + this.api_key, function(xmlhttp) {
      eval("var data = " + xmlhttp.responseText + ".results[0]");
      actorLookup[data.id] = data.name;
      picLookup[data.id] = data.profile_path;
      this.addActor(data.id);
    });
  },
  updateDocs: function(movieID) {
    if (docLookup[movieID] === undefined) {
      this.get_data("http://api.themoviedb.org/3/movie/" + String(movieID) + "?api_key=" + this.api_key, function(xmlhttp) {
        docLookup[movieID] = false;
        eval("var genres = " + xmlhttp.responseText + ".genres");
        for (var i = 0; i < genres.length; i++) {
          if (genres[i].id == 99) {
            docLookup[movieID] = true;
          }
        }
      });
    }
  },
  addActor: function(actID) {
    this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "/movie_credits?api_key=" + this.api_key, function(xmlhttp) {
      var pos = centerOfGraph();
      eval("var actorRoles = " + xmlhttp.responseText + ".cast");
      cy.add({
        group: "nodes",
        data: {
          id: actID,
          name: actorLookup[actID],
          img: 'https://image.tmdb.org/t/p/w396' + picLookup[actID],

        }
      });
      if (showingPics) {
        cy.$('#' + String(actID)).addClass('picture');
      }
      if (redraw) {
        cy.layout({
          name: currLayout,
          timeout: 1000
        });
      } else {
        cy.$('#' + String(actID)).position(pos);
      }
      for (var i = 0; i < actorRoles.length; i++) {
        var movieID = actorRoles[i].id;
        if (movieCasts[movieID] === undefined) {
          movieCasts[movieID] = [actID];
          roleLookup[movieID] = {};
          roleLookup[movieID][actID] = actorRoles[i].character;
        } else {
          if (roleLookup[movieID][actID] === undefined) {
            roleLookup[movieID][actID] = actorRoles[i].character;
          } else {
            if (gotRoles[actID] === undefined) {
              roleLookup[movieID][actID] += " / " + actorRoles[i].character;
            }
          }
          posterLookup[movieID] = actorRoles[i].poster_path;
          tmdbObject.updateDocs(movieID);
          var numLines = movieCasts[movieID].length;
          var movieName = actorRoles[i].title + " (" + getYear(actorRoles[i].release_date) + ")";
          for (var j = 0; j < numLines; j++) {
            movieLookup[movieID] = movieName;
            if (actID !== movieCasts[movieID][j]) {
              cy.add({
                group: "edges",
                data: {
                  id: movieID + '.' + actID + '.' + movieCasts[movieID][j],
                  movie: movieID,
                  source: actID,
                  target: movieCasts[movieID][j]
                }
              });
            }
          }
          movieCasts[movieID][numLines] = actID;
        }
      }
      gotRoles[actID] = true;
      changeDoc($("#showDocs"));
      $("#addActor").val('');
    });
  },
  getSugg: function(key, query) {
    if (key == 13) {
      this.addActor(suggs[0].data);
    } else {
      if (query !== "") {
        this.get_data("http://api.themoviedb.org/3/search/person?query=" + query + "&api_key=" + this.api_key, function(xmlhttp) {
          suggs = [];
          var ret;
          eval("ret = " + xmlhttp.responseText + '.results');
          for (i = 0; i < Math.min(10, ret.length); i++) {
            actorLookup[ret[i].id] = ret[i].name;
            picLookup[ret[i].id] = ret[i].profile_path;
            suggs[suggs.length] = {
              label: ret[i].name,
              data: ret[i].id
            };
          }
          $("#addActor").autocomplete({
            source: function(request, response) {
              response(suggs);
            },
            select: function(event, ui) {
              tmdbObject.addActor(ui.item.data);
            }
          });
        });
      }
    }
  }
};

function displayMovie(movieID) {
  $('#backImage').css('background-image', "url('" + "https://image.tmdb.org/t/p/w396/" + posterLookup[movieID] + "')");
  var title = movieLookup[movieID];
  document.getElementById('movieName').innerHTML = title;
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.addClass('highlighted');
      ele.source().style('content', roleLookup[movieID][ele.source().id()]);
      ele.target().style('content', roleLookup[movieID][ele.target().id()]);
    }
  });
};

function undisplayMovie(movieID) {
  document.getElementById('movieName').innerHTML = '';
  $('#backImage').css('background-image', "");
  cy.edges().removeClass('highlighted');
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.source().style('content', actorLookup[ele.source().id()]);
      ele.target().style('content', actorLookup[ele.target().id()]);
    }
  });
};

function changePictures(cb) {
  if (cb.checked) {
    cy.nodes().forEach(function(ele) {
      ele.addClass('picture');
    });
    showingPics = true;
  } else {
    cy.nodes().forEach(function(ele) {
      ele.removeClass('picture');
    });
    showingPics = false;
  }
};

function changeDoc(cb) {
  if (cb.checked) {
    includeDocs = true;
    cy.edges().forEach(function(ele) {
      for (var i = 0; i < removedDocs.length; i++) {
        cy.add({
          group: "edges",
          data: removedDocs[i]
        });
      }
    });
    removedDocs = [];
  } else {
    includeDocs = false;
    cy.edges().forEach(function(ele) {
      if (docLookup[ele.id().split('.')[0]]) {
        removedDocs[removedDocs.length] = ele.data();
        cy.remove(ele);
      }
    });
  }
};

function centerOfGraph() {
  if (cy.nodes().length === 0) {
    return {
      x: cy.width() / 2,
      y: cy.height() / 2
    };
  } else {
    var x = 0;
    var y = 0;
    cy.nodes().forEach(function(ele) {
      x += ele.position('x');
      y += ele.position('y');
    });
    x /= cy.nodes().length;
    y /= cy.nodes().length;
    return {
      x: x,
      y: y
    };
  }
};

function changeLayout(value) {
  switch (value) {
    case 'circle':
      currLayout = 'circle';
      cy.layout({
        name: 'circle'
      });
      break;
    case 'fdgd':
      currLayout = 'cola';
      cy.layout({
        name: 'cola',
        timeout: 1000
      });
      break;
  }
};

function zoom(v) {
  cy.zoom({
    level: Number(v),
    position: centerOfGraph()
  });
};

$(document).ready(function() {
  showingPics = document.getElementById("showPics").checked;
  includeDocs = document.getElementById("showDocs").checked;
  redraw = document.getElementById("redraw").checked;

  cy = cytoscape({
    container: document.getElementById('cy'),
    style: cytoscape.stylesheet()
      .selector('node')
      .css({
        'background-color': '#000',
        'background-fit': 'cover',
        'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
        'content': 'data(name)'
      })
      .selector('.picture')
      .css({
        'width': 80,
        'height': 80,
        'background-image': 'data(img)'
      })
      .selector('edge')
      .css({
        'line-color': 'red',
        'width': 2,
        'opacity': 0.8
      })
      .selector('.highlighted')
      .css({
        'line-color': 'black',
      }),
    layout: {
      name: 'circle',
      padding: 10
    },
    ready: function() {}
  });
  cy.on('zoom', function() {
    document.getElementById("zoom").value = cy.zoom();
  });
  document.oncontextmenu = function() {
    return false;
  };
  var $moveable = $('#movieName');
  $(document).mousemove(function(e) {
    $moveable.css({
      'top': e.pageY - 20,
      'left': e.pageX + 20
    });
  });
  cy.on('cxttap', 'node', function(evt) {
    cy.$('#' + evt.cyTarget.id()).remove();
  });
  cy.on('mouseover', 'edge', function(evt) {
    displayMovie(evt.cyTarget.id().split('.')[0]);
  });
  cy.on('mouseout', 'edge', function(evt) {
    undisplayMovie(evt.cyTarget.id().split('.')[0]);
  });
});
