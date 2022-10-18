(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ca(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},oa={};try{oa.__proto__=ma;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype}
function qa(){this.m=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.j=0;this.o=null}
function ra(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.u=function(a){this.i=a};
function sa(a,b){a.o={wa:b,Ta:!0};a.h=a.j||a.A}
qa.prototype.return=function(a){this.o={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
function ta(a){a.j=0;var b=a.o.wa;a.o=null;return b}
function ua(a){this.h=new qa;this.i=a}
function va(a,b){ra(a.h);var c=a.h.l;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.m=!1,e;var f=e.value}catch(g){return a.h.l=null,sa(a.h,g),xa(a)}a.h.l=null;d.call(a.h,f);return xa(a)}
function xa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.m=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,sa(a.h,c)}a.h.m=!1;if(a.h.o){b=a.h.o;a.h.o=null;if(b.Ta)throw b.wa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){ra(a.h);a.h.l?b=wa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=xa(a));return b};
this.throw=function(b){ra(a.h);a.h.l?b=wa(a,a.h.l["throw"],b,a.h.u):(sa(a.h,b),b=xa(a));return b};
this.return=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new ya(new ua(b));pa&&a.prototype&&pa(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
function za(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=za(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=za(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||pa});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ba="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ba});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(p){k||(k=!0,l.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.U(h,g):this.m(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.T=function(g){var h=this.l();g.ca(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(B){try{l(r(B))}catch(I){p(I)}}:q}
var l,p,n=new b(function(r,q){l=r;p=q});
this.ca(k(g,l),k(h,p));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),p=l.next();!p.done;p=l.next())d(p.value).ca(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,p){function n(B){return function(I){r[B]=I;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ca(n(r.length-1),p),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==za(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p.delete(k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.i[l];if(p&&Aa(h.i,l))for(h=0;h<p.length;h++){var n=p[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:p,index:h,G:n}}return{id:l,list:p,index:-1,G:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.G?l.G.value=k:(l.G={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.G),this.h.previous.next=l.G,this.h.previous=l.G,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.G&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.G.previous.next=h.G.next,h.G.next.previous=h.G.previous,h.G.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).G};
e.prototype.get=function(h){return(h=d(this,h).G)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Da(a){if(a&&a!=y)return Ea(a.document);null===Fa&&(Fa=Ea(y.document));return Fa}
var Ga=/^[\w+/_-]+[=]{0,2}$/,Fa=null;function Ea(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ga.test(a)?a:""}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ha(){}
function Ia(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Pa:C=Qa;return C.apply(null,arguments)}
function Ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Sa(a,b){z(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ek=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Ha=b)}
D(Ua,Error);Ua.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function bb(a,b){b=Xa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){y.console&&y.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.la=!0;m.ia=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;Ja(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){this.h=b===Fb?a:""}
m=Eb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.la=!0;m.ia=function(){return 1};
m.toString=function(){return this.h.toString()};
function Gb(a){if(a instanceof Eb&&a.constructor===Eb)return a.h;Ja(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof Eb)return a;a="object"==typeof a&&a.W?a.V():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new Eb(a,Fb)}
var Fb={},Lb=new Eb("about:invalid#zClosurez",Fb);var Mb;a:{var Nb=y.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function G(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.h=c===Qb?a:"";this.i=b}
m=Pb.prototype;m.la=!0;m.ia=function(){return this.i};
m.W=!0;m.V=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Qb={};function Rb(a,b){var c=rb();a=c?c.createHTML(a):a;return new Pb(a,b,Qb)}
;function Sb(a,b){b=b instanceof Eb?b:Kb(b);a.href=Gb(b)}
function Tb(a,b){a.rel="stylesheet";a.href=ub(b).toString();(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=y?b=Ub(b.document):(null===Vb&&(Vb=Ub(y.document)),b=Vb);b&&a.setAttribute("nonce",b)}
function Wb(a,b){a.src=ub(b);(b=Da(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
var Vb=null,Xb=/^[\w+/_-]+[=]{0,2}$/;function Ub(a){if(!a.querySelector)return"";var b=a.querySelector("style[nonce]");b||(b=a.querySelector('link[rel="stylesheet"][nonce]'));return b&&(a=b.nonce||b.getAttribute("nonce"))&&Xb.test(a)?a:""}
;function Yb(a){return a=wb(a,void 0)}
function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ac(a){return a?decodeURI(a):a}
function bc(a){return ac(a.match($b)[3]||null)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var fc=/#|$/;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function gc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=Ha;var ic=G("Opera"),jc=G("Trident")||G("MSIE"),kc=G("Edge"),lc=G("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),mc=-1!=Mb.toLowerCase().indexOf("webkit")&&!G("Edge");function nc(){var a=y.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Mb;if(lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(kc)return/Edge\/([\d\.]+)/.exec(a);if(jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mc)return/WebKit\/(\S+)/.exec(a);if(ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(jc){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var sc=oc,tc;if(y.document&&jc){var uc=nc();tc=uc?uc:parseInt(sc,10)||void 0}else tc=void 0;var vc=tc;var wc=gc()||G("iPod"),xc=G("iPad"),yc=G("Safari")&&!((G("Chrome")||G("CriOS"))&&!G("Edge")||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(gc()||G("iPad")||G("iPod"));var zc={},Ac=null;
function Bc(a){var b=3;Ka(a);void 0===b&&(b=0);if(!Ac){Ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));zc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ac[h]&&(Ac[h]=g)}}}b=zc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var Cc=!jc||9<=Number(vc);function Dc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dc.prototype;m.clone=function(){return new Dc(this.x,this.y)};
m.equals=function(a){return a instanceof Dc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ec(a,b){this.width=a;this.height=b}
m=Ec.prototype;m.clone=function(){return new Ec(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gc(a,b){eb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Hc.hasOwnProperty(d)?a.setAttribute(Hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Cc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Yb(g.name),'"');if(g.type){f.push(' type="',Yb(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Gc(f,g));2<d.length&&Kc(e,f,d);return f}
function Kc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||La(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(La(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?cb(f):f,d)}}}
function Jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Lc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mc(a){var b=Nc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Oc(){var a=[];Mc(function(b){a.push(b)});
return a}
var Nc={yb:"allow-forms",zb:"allow-modals",Ab:"allow-orientation-lock",Bb:"allow-pointer-lock",Cb:"allow-popups",Db:"allow-popups-to-escape-sandbox",Eb:"allow-presentation",Fb:"allow-same-origin",Gb:"allow-scripts",Hb:"allow-top-navigation",Ib:"allow-top-navigation-by-user-activation"},Pc=Wa(function(){return Oc()});
function Qc(){var a=Jc(document,"IFRAME"),b={};E(Pc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Rc(a){Sc();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var Sc=Ha;function Tc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Uc=(new Date).getTime();function Vc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Wc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var B=e[1],I=e[2],J=e[3],aa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var U=J^B&(I^J);var O=1518500249}else U=B^I^J,O=1859775393;else 60>q?(U=B&I|J&(B|I),O=2400959708):(U=B^I^J,O=3395469782);U=((n<<5|n>>>27)&4294967295)+U+aa+O+r[q]&4294967295;aa=J;J=I;I=(B<<30|B>>>2)&4294967295;B=n;n=U}e[0]=e[0]+n&4294967295;e[1]=e[1]+B&4294967295;
e[2]=e[2]+I&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+aa&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],B=0,I=n.length;B<I;++B)q.push(n.charCodeAt(B));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,p+=64;for(;q<r;)if(f[l++]=n[q++],p++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,p+=64}
function d(){var n=[],r=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var B=24;0<=B;B-=8)n[r++]=e[q]>>B&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ia:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Xc(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Yc(Vc(d),a,c||null)].join(" "):null}
function Yc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Zc(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Zc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Zc(a){var b=Wc();b.update(a);return b.Ia().toLowerCase()}
;var $c={};function ad(a){this.h=a||{cookie:""}}
m=ad.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{na:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Lk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.na}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{na:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var bd=new ad("undefined"==typeof document?null:document);function cd(a){return!!$c.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function dd(a,b,c,d){(a=y[a])||(a=(new ad(document)).get(b));return a?Xc(a,c,d):null}
function ed(a){var b=void 0===b?!1:b;var c=Vc(String(y.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;cd(e)&&(f=f||y.__1PSAPISID);if(f)e=!0;else{var g=new ad(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");cd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,e||(e=new ad(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Xc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&cd(b)&&((b=dd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=dd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function fd(){this.h=[];this.i=-1}
fd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
fd.prototype.get=function(a){return!!this.h[a]};
function gd(a){-1==a.i&&(a.i=$a(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function hd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
hd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function id(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var jd;
function kd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Jc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.sa;c.sa=null;e()}};
return function(e){d.next={sa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function ld(a){y.setTimeout(function(){throw a;},0)}
;function md(){this.i=this.h=null}
md.prototype.add=function(a,b){var c=nd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
md.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var nd=new hd(function(){return new od},function(a){return a.reset()});
function od(){this.next=this.scope=this.h=null}
od.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
od.prototype.reset=function(){this.next=this.scope=this.h=null};function pd(a,b){qd||rd();sd||(qd(),sd=!0);td.add(a,b)}
var qd;function rd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);qd=function(){a.then(ud)}}else qd=function(){var b=ud;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(jd||(jd=kd()),jd(b)):y.setImmediate(b)}}
var sd=!1,td=new md;function ud(){for(var a;a=td.remove();){try{a.h.call(a.scope)}catch(b){ld(b)}id(nd,a)}sd=!1}
;function vd(){this.i=-1}
;function wd(){this.i=64;this.h=[];this.m=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.o=this.j=0;this.reset()}
D(wd,vd);wd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.j=0};
function xd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)xd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){xd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){xd(this,e);f=0;break}}this.j=f;this.o+=b}};
wd.prototype.digest=function(){var a=[],b=8*this.o;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;xd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=zd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ad[c])c=Ad[c];else{c=String(c);if(!Ad[c]){var f=/function\s+([^\(]+)/m.exec(c);Ad[c]=f?f[1]:"[Anonymous]"}c=Ad[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function zd(a,b){b||(b={});b[Bd(a)]=!0;var c=a.stack||"";(a=a.Ha)&&!b[Bd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=zd(a,b));return c}
function Bd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ad={};function Cd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Dd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?Dd.apply(null,d):Cd(d)}}
;function L(){this.h=this.h;this.o=this.o}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.B())};
function Ed(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
L.prototype.B=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Fd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Gd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Hd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Fd(a).match(/\S+/g)||[],b=0<=Xa(a,b));return b}
function Id(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Hd(a,"inverted-hdpi")&&Gd(a,Ya(a.classList?a.classList:Fd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Jd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Kd(){}
Kd.prototype.next=function(){throw Jd;};
Kd.prototype.M=function(){return this};
function Ld(a){if(a instanceof Kd)return a;if("function"==typeof a.M)return a.M(!1);if(Ka(a)){var b=0,c=new Kd;c.next=function(){for(;;){if(b>=a.length)throw Jd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Md(a,b){if(Ka(a))try{E(a,b,void 0)}catch(c){if(c!==Jd)throw c;}else{a=Ld(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Jd)throw c;}}}
function Nd(a){if(Ka(a))return cb(a);a=Ld(a);var b=[];Md(a,function(c){b.push(c)});
return b}
;function Od(a,b){this.i={};this.h=[];this.O=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Od)for(c=Pd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Pd(a){Qd(a);return a.h.concat()}
m=Od.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Rd;Qd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Rd(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.O=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.O++,this.h.length>2*this.j&&Qd(this),!0):!1};
function Qd(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.O++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Pd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Od(this)};
m.M=function(a){Qd(this);var b=0,c=this.O,d=this,e=new Kd;e.next=function(){if(c!=d.O)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Jd;var f=d.h[b++];return a?f:d.i[f]};
return e};var Sd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ha,b),y.removeEventListener("test",Ha,b)}catch(c){}return a}();function Td(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Td.prototype.stopPropagation=function(){this.j=!0};
Td.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ud(a,b){Td.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(Ud,Td);var Vd={2:"touch",3:"pen",4:"mouse"};
Ud.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(lc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Vd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ud.I.preventDefault.call(this)};
Ud.prototype.stopPropagation=function(){Ud.I.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ud.prototype.preventDefault=function(){Ud.I.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wd="closure_listenable_"+(1E6*Math.random()|0);var Xd=0;function Yd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ea=e;this.key=++Xd;this.Y=this.ba=!1}
function Zd(a){a.Y=!0;a.listener=null;a.h=null;a.src=null;a.ea=null}
;function $d(a){this.src=a;this.listeners={};this.h=0}
$d.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ae(a,b,d,e);-1<g?(b=a[g],c||(b.ba=!1)):(b=new Yd(b,this.src,f,!!d,e),b.ba=c,a.push(b));return b};
$d.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ae(e,b,c,d);return-1<b?(Zd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function be(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(Zd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ae(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.ea==d)return e}return-1}
;var ce="closure_lm_"+(1E6*Math.random()|0),de={},ee=0;function fe(a,b,c,d,e){if(d&&d.once)ge(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)fe(a,b[f],c,d,e);else c=he(c),a&&a[Wd]?ie(a,b,c,La(d)?!!d.capture:!!d,e):je(a,b,c,!1,d,e)}
function je(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=ke(a);h||(a[ce]=h=new $d(a));c=h.add(b,c,d,g,f);if(!c.h){d=le();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Sd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(me(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ee++}}
function le(){function a(c){return b.call(a.src,a.listener,c)}
var b=ne;return a}
function ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ge(a,b[f],c,d,e);else c=he(c),a&&a[Wd]?a.i.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):je(a,b,c,!0,d,e)}
function oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=he(c),a&&a[Wd])?a.i.remove(String(b),c,d,e):a&&(a=ke(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ae(b,c,d,e)),(c=-1<a?b[a]:null)&&pe(c))}
function pe(a){if("number"!==typeof a&&a&&!a.Y){var b=a.src;if(b&&b[Wd])be(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(me(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ee--;(c=ke(b))?(be(c,a),0==c.h&&(c.src=null,b[ce]=null)):Zd(a)}}}
function me(a){return a in de?de[a]:de[a]="on"+a}
function ne(a,b){if(a.Y)a=!0;else{b=new Ud(b,this);var c=a.listener,d=a.ea||a.src;a.ba&&pe(a);a=c.call(d,b)}return a}
function ke(a){a=a[ce];return a instanceof $d?a:null}
var qe="__closure_events_fn_"+(1E9*Math.random()>>>0);function he(a){if("function"===typeof a)return a;a[qe]||(a[qe]=function(b){return a.handleEvent(b)});
return a[qe]}
;function re(){L.call(this);this.i=new $d(this);this.F=this;this.u=null}
D(re,L);re.prototype[Wd]=!0;re.prototype.addEventListener=function(a,b,c,d){fe(this,a,b,c,d)};
re.prototype.removeEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
function se(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.F;c=b.type||b;"string"===typeof b?b=new Td(b,a):b instanceof Td?b.target=b.target||a:(e=b,b=new Td(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=te(g,c,!0,b)&&e}b.j||(g=b.h=a,e=te(g,c,!0,b)&&e,b.j||(e=te(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=te(g,c,!1,b)&&e}
re.prototype.B=function(){re.I.B.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Zd(d[e]);delete a.listeners[c];a.h--}}this.u=null};
function ie(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function te(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Y&&g.capture==c){var h=g.listener,k=g.ea||g.src;g.ba&&be(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ue(a){var b=[];ve(new we,a,b);return b.join("")}
function we(){}
function ve(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ve(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xe(d,c),c.push(":"),ve(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ye={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ze=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xe(a,b){b.push('"',a.replace(ze,function(c){var d=ye[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ye[c]=d);return d}),'"')}
;function Ae(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Be(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Ce(b,2,c)},function(c){Ce(b,3,c)})}catch(c){Ce(this,3,c)}}
function De(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
De.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ee=new hd(function(){return new De},function(a){a.reset()});
function Fe(a,b,c){var d=Ee.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ge(a){return new Be(function(b,c){c(a)})}
Be.prototype.then=function(a,b,c){return He(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Be.prototype.$goog_Thenable=!0;function Ie(a,b){return He(a,null,b,void 0)}
Be.prototype.cancel=function(a){if(0==this.h){var b=new Je(a);pd(function(){Ke(this,b)},this)}};
function Ke(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ke(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.j=null}else Ce(a,3,b)}
function Ne(a,b){a.i||2!=a.h&&3!=a.h||Oe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function He(a,b,c,d){var e=Fe(null,null,null);e.h=new Be(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Je?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ne(a,e);return e.h}
Be.prototype.C=function(a){this.h=0;Ce(this,2,a)};
Be.prototype.F=function(a){this.h=0;Ce(this,3,a)};
function Ce(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Be){Ne(d,Fe(e||Ha,f||null,a));var g=!0}else if(Ae(d))d.then(e,f,a),g=!0;else{if(La(d))try{var h=d.then;if("function"===typeof h){Pe(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,Oe(a),3!=b||c instanceof Je||Qe(a,c))}}
function Pe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Oe(a){a.m||(a.m=!0,pd(a.A,a))}
function Le(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Be.prototype.A=function(){for(var a;a=Le(this);)Me(this,a,this.h,this.u);this.m=!1};
function Me(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Re(b,c,d);else try{b.j?b.i.call(b.context):Re(b,c,d)}catch(e){Se.call(null,e)}id(Ee,b)}
function Re(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Qe(a,b){a.o=!0;pd(function(){a.o&&Se.call(null,b)})}
var Se=ld;function Je(a){Ua.call(this,a)}
D(Je,Ua);Je.prototype.name="cancel";function M(a){L.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
D(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Te(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=ab(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.X(b)}}
m.X=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ha):(c&&bb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.P=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Ue(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.X(c)}}return 0!=e}return!1};
function Ue(a,b,c){pd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(E(b,this.X,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.B=function(){M.I.B.call(this);this.clear();this.l.length=0};function Ve(a){this.h=a}
Ve.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,ue(b))};
Ve.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ve.prototype.remove=function(a){this.h.remove(a)};function We(a){this.h=a}
D(We,Ve);function Xe(a){this.data=a}
function Ye(a){return void 0===a||a instanceof Xe?a:new Xe(a)}
We.prototype.set=function(a,b){We.I.set.call(this,a,Ye(b))};
We.prototype.i=function(a){a=We.I.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
We.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ze(a){this.h=a}
D(Ze,We);Ze.prototype.set=function(a,b,c){if(b=Ye(b)){if(c){if(c<Date.now()){Ze.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ze.I.set.call(this,a,b)};
Ze.prototype.i=function(a){var b=Ze.I.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ze.prototype.remove.call(this,a);else return b}};function $e(){}
;function af(){}
D(af,$e);af.prototype.clear=function(){var a=Nd(this.M(!0)),b=this;E(a,function(c){b.remove(c)})};function bf(a){this.h=a}
D(bf,af);m=bf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new Kd;d.next=function(){if(b>=c.length)throw Jd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function cf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(cf,bf);function df(a,b){this.i=a;this.h=null;if(jc&&!(9<=Number(vc))){ef||(ef=new Od);this.h=ef.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ef.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
D(df,af);var ff={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ef=null;function gf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ff[b]})}
m=df.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(gf(a),b);hf(this)};
m.get=function(a){a=this.h.getAttribute(gf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(gf(a));hf(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Kd;d.next=function(){if(b>=c.length)throw Jd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hf(this)};
function hf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function jf(a,b){this.i=a;this.h=b+"::"}
D(jf,af);jf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
jf.prototype.get=function(a){return this.i.get(this.h+a)};
jf.prototype.remove=function(a){this.i.remove(this.h+a)};
jf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Kd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function kf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var lf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",lf,void 0);function mf(a){kf(lf,arguments)}
function F(a,b){return a in lf?lf[a]:b}
;var nf=[];function of(a){nf.forEach(function(b){return b(a)})}
function pf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qf(b)}}:a}
function qf(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),mf("ERRORS",b));of(a)}
function rf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),mf("ERRORS",b))}
;var sf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",sf,void 0);function tf(a){kf(sf,arguments)}
;function N(a){a=uf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function vf(a,b){a=uf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function uf(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var wf=0,xf=mc?"webkit":lc?"moz":jc?"ms":ic?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++wf},void 0);var yf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function zf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in yf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Af(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
zf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",gb,void 0);var Bf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Bf,void 0);
function Cf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=La(e[4])&&La(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Df=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ef(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cf(a,b,c,d);if(e)return e;e=++Bf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new zf(h);if(!Lc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new zf(h);
h.currentTarget=a;return c.call(a,h)};
g=pf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Df()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d];return e}
function Ff(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Df()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
;var Gf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Hf(a,b){"function"===typeof a&&(a=pf(a));return window.setTimeout(a,b)}
function If(a){window.clearTimeout(a)}
;function Jf(a){this.C=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Ef(window,"mousemove",C(this.K,this));a=C(this.F,this);"function"===typeof a&&(a=pf(a));this.L=window.setInterval(a,25)}
D(Jf,L);Jf.prototype.K=function(a){void 0===a.h&&Af(a);var b=a.h;void 0===a.i&&Af(a);this.i=new Dc(b,a.i)};
Jf.prototype.F=function(){if(this.i){var a=Gf();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Jf.prototype.B=function(){window.clearInterval(this.L);Ff(this.J)};function Kf(){}
function Lf(a,b){return Mf(a,0,b)}
function Nf(a,b){return Mf(a,1,b)}
function Of(a,b){Mf(a,2,b)}
;function Pf(){Kf.apply(this,arguments)}
v(Pf,Kf);function Mf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Hf(a,c||0)}
function Qf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):If(a)}}
Pf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Pf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
Ia(Pf);Pf.getInstance();var Rf={};
function Sf(a){var b=void 0===a?{}:a;a=void 0===b.La?!0:b.La;b=void 0===b.Za?!1:b.Za;if(null==A("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Tf();Ef(document,"keydown",Tf);Ef(document,"keyup",Tf);Ef(document,"mousedown",Tf);Ef(document,"mouseup",Tf);a&&(b?Ef(window,"touchmove",function(){Uf("touchmove",200)},{passive:!0}):(Ef(window,"resize",function(){Uf("resize",200)}),Ef(window,"scroll",function(){Uf("scroll",200)})));
new Jf(function(){Uf("mouse",100)});
Ef(document,"touchstart",Tf,{passive:!0});Ef(document,"touchend",Tf,{passive:!0})}}
function Uf(a,b){Rf[a]||(Rf[a]=!0,Nf(function(){Tf();Rf[a]=!1},b))}
function Tf(){null==A("_lact",window)&&Sf();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Vf(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Wf(){var a=Xf;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function Yf(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Zf=/^[\w.]*$/,$f={q:!0,search_query:!0};function ag(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=bg(f[0]||""),h=bg(f[1]||"");g in c?Array.isArray(c[g])?db(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],p=String(ag);k.args=[{key:l,value:f[1],query:a,method:cg==p?"unchanged":p}];$f.hasOwnProperty(l)||rf(k)}}return c}
var cg=String(ag);function dg(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function eg(a){"?"==a.charAt(0)&&(a=a.substr(1));return ag(a,"&")}
function fg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),eg(1<a.length?a[1]:a[0])):{}}
function gg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=eg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function hg(a){if(!b)var b=window.location.href;var c=a.match($b)[1]||null,d=bc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(b.match($b)[4]||null)||null)==(Number(a.match($b)[4]||null)||null):!0;return a}
function bg(a){return a&&a.match(Zf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ig(a){var b=jg;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Uc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(P){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(P){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(P){}try{var p=h.outerWidth;var n=h.outerHeight}catch(P){}try{var r=h.innerWidth;var q=h.innerHeight}catch(P){}try{var B=h.screenLeft;var I=h.screenTop}catch(P){}try{r=h.innerWidth,q=h.innerHeight}catch(P){}try{var J=h.screen.availWidth;
var aa=h.screen.availTop}catch(P){}k=[B,I,k,l,J,aa,p,n,r,q];l=b.h.top;try{var U=(l||window).document,O="CSS1Compat"==U.compatMode?U.documentElement:U.body;var na=(new Ec(O.clientWidth,O.clientHeight)).round()}catch(P){na=new Ec(-12245933,-12245933)}U=na;na={};O=new fd;y.SVGElement&&y.document.createElementNS&&O.set(0);l=Qc();l["allow-top-navigation-by-user-activation"]&&O.set(1);l["allow-popups-to-escape-sandbox"]&&O.set(2);y.crypto&&y.crypto.subtle&&O.set(3);y.TextDecoder&&y.TextEncoder&&O.set(4);
O=gd(O);na.bc=O;na.bih=U.height;na.biw=U.width;na.brdim=k.join();b=b.i;b=(na.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!K.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var jg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return dg(ig(a))},void 0);var kg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function lg(){if(!kg)return null;var a=kg();return"open"in a?a:null}
function mg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var ng={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
og="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),pg=!1;
function qg(a,b){b=void 0===b?{}:b;var c=hg(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in ng){var f=F(ng[e]);!f||!c&&bc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!bc(a))b["X-YouTube-Ad-Signals"]=dg(ig(void 0));return b}
function rg(a){var b=window.location.search,c=bc(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!hg(a)||(c=document.location.hostname);var d=ac(a.match($b)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=eg(b),f={};E(og,function(g){e[g]&&(f[g]=e[g])});
return gg(a,f||{},!1)}
function sg(a,b){var c=b.format||"JSON";a=tg(a,b);var d=ug(a,b),e=!1,f=vg(a,function(k){if(!e){e=!0;h&&If(h);var l=mg(k),p=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)p=wg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(p&&p.return_code,10);break a;case "RAW":l=!0;break a}l=!!p}p=p||{};n=b.context||y;l?b.onSuccess&&b.onSuccess.call(n,k,p):b.onError&&b.onError.call(n,k,p);b.onFinish&&b.onFinish.call(n,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Hf(function(){e||(e=!0,f.abort(),If(h),g.call(b.context||y,f))},b.timeout)}return f}
function tg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=gg(a,b||{},!0);return a}
function ug(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=eg(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):dc(e));f=e||f&&!hb(f);!pg&&f&&
"POST"!=b.method&&(pg=!0,qf(Error("AJAX request with postData should use POST")));return e}
function wg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?xg(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=yg(g)})}d&&zg(e);
return e}
function zg(a){if(La(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else zg(a[b])}}
function xg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yg(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function vg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=lg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=rg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=qg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ag=wc||xc;function Bg(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Cg={},Dg=0;
function Eg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Bg("cobalt")){if(a){a instanceof Eb||(a="object"==typeof a&&a.W?a.V():String(a),Jb.test(a)?a=new Eb(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new Eb(a,Fb):null));a=Gb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.la&&(f=a.ia());a=Rb(wb(b&&a.W?a.V():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.h:(Ja(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(ue(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Ic("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)vg(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)vg(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.j&&g.i||g.l){var h=ac(a.match($b)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(fc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var p=a.charCodeAt(c-1);if(38==p||63==p){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var B=a.indexOf("&",r);if(0>B||B>l)B=l;r+=3;q=decodeURIComponent(a.substr(r,B-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?Fg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Gg(a,b)}}
function Hg(a){var b=void 0===b?"":b;Fg(a,b)||Eg(a,void 0,void 0,void 0,b)}
function Fg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Gg(a,b){var c=new Image,d=""+Dg++;Cg[d]=c;c.onload=c.onerror=function(){b&&Cg[d]&&b();delete Cg[d]};
c.src=a}
;var Ig=y.ytPubsubPubsubInstance||new M,Jg=y.ytPubsubPubsubSubscribedKeys||{},Kg=y.ytPubsubPubsubTopicToKeys||{},Lg=y.ytPubsubPubsubIsSynchronous||{};function Mg(a,b){var c=Ng();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Jg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Lg[a]?f():Hf(f,0)}catch(g){qf(g)}},void 0);
Jg[d]=!0;Kg[a]||(Kg[a]=[]);Kg[a].push(d);return d}return 0}
function Og(a){var b=Ng();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Jg[c]}))}
function Pg(a,b){var c=Ng();c&&c.publish.apply(c,arguments)}
function Qg(a){var b=Ng();if(b)if(b.clear(a),a)Rg(a);else for(var c in Kg)Rg(c)}
function Ng(){return y.ytPubsubPubsubInstance}
function Rg(a){Kg[a]&&(a=Kg[a],E(a,function(b){Jg[b]&&delete Jg[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.X;M.prototype.publish=M.prototype.P;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",Ig,void 0);z("ytPubsubPubsubTopicToKeys",Kg,void 0);z("ytPubsubPubsubIsSynchronous",Lg,void 0);z("ytPubsubPubsubSubscribedKeys",Jg,void 0);var Sg=window,Q=Sg.ytcsi&&Sg.ytcsi.now?Sg.ytcsi.now:Sg.performance&&Sg.performance.timing&&Sg.performance.now&&Sg.performance.timing.navigationStart?function(){return Sg.performance.timing.navigationStart+Sg.performance.now()}:function(){return(new Date).getTime()};var Tg=vf("initial_gel_batch_timeout",1E3),Ug=Math.pow(2,16)-1,Vg=null,Wg=0,Xg=void 0,Yg=0,Zg=0,$g=0,ah=!0,bh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",bh,void 0);var ch=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",ch,void 0);
function dh(a,b){if("log_event"===a.endpoint){var c="";a.da?c="visitorOnlyApprovedKey":a.D&&(ch[a.D.token]=eh(a.D),c=a.D.token);var d=bh.get(c)||[];bh.set(c,d);d.push(a.payload);b&&(Xg=new b);a=vf("web_logging_max_batch")||100;b=Q();d.length>=a?fh({writeThenSend:!0}):10<=b-$g&&(gh(),$g=b)}}
function hh(a,b){if("log_event"===a.endpoint){var c="";a.da?c="visitorOnlyApprovedKey":a.D&&(ch[a.D.token]=eh(a.D),c=a.D.token);var d=new Map;d.set(c,[a.payload]);b&&(Xg=new b);return new Be(function(e){Xg&&Xg.isReady()?ih(d,e,{bypassNetworkless:!0}):e()})}}
function fh(a){a=void 0===a?{}:a;new Be(function(b){If(Yg);If(Zg);Zg=0;Xg&&Xg.isReady()?(ih(bh,b,a),bh.clear()):(gh(),b())})}
function gh(){N("web_gel_timeout_cap")&&!Zg&&(Zg=Hf(function(){fh({writeThenSend:!0})},6E4));
If(Yg);var a=F("LOGGING_BATCH_TIMEOUT",vf("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&ah&&(a=Tg);Yg=Hf(function(){fh({writeThenSend:!0})},a)}
function ih(a,b,c){var d=Xg;c=void 0===c?{}:c;var e=Math.round(Q()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=nb({context:jh(d.h||kh())});h.events=k;(k=ch[g])&&lh(h,g,k);delete ch[g];g="visitorOnlyApprovedKey"===g;mh(h,e,g);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Hg("/generate_204");nh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Wg=Math.round(Q()-e)},
onError:function(){f--;f||b()},
za:c,da:g});ah=!1}}
function mh(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Ug/2)),c++,c>Ug&&(c=1),mf("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,Vg&&Wg&&N("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Vg,roundtripMs:String(Wg)}),Vg=b,Wg=0)}
function lh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function eh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var oh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",oh,void 0);function ph(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Vf();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.N&&(a=e.context,b=d.N,oh[b]=b in oh?oh[b]+1:0,a.sequence={index:oh[b],groupKey:b},d.Ja&&delete oh[d.N]);(d.Mk?hh:dh)({endpoint:"log_event",payload:e,D:d.D,da:d.da},c)}
;function qh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function rh(a,b,c,d,e){bd.set(""+a,b,{na:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var sh=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",sh,void 0);function th(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=bd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(sh[d]=c.toString())}}}
th.prototype.get=function(a,b){uh(a);vh(a);a=void 0!==sh[a]?sh[a].toString():null;return null!=a?a:b?b:""};
th.prototype.set=function(a,b){uh(a);vh(a);if(null==b)throw Error("ExpectedNotNull");sh[a]=b.toString()};
th.prototype.remove=function(a){uh(a);vh(a);delete sh[a]};
th.prototype.clear=function(){for(var a in sh)delete sh[a]};
function vh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function uh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wh(a){a=void 0!==sh[a]?sh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(th);var xh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function zh(){var a=y.navigator;return a?a.connection:void 0}
;function Ah(){return"INNERTUBE_API_KEY"in lf&&"INNERTUBE_API_VERSION"in lf}
function kh(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Ma:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Na:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:F("INNERTUBE_CONTEXT_HL",void 0),Oa:F("INNERTUBE_CONTEXT_GL",void 0),Qa:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Sa:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ra:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function jh(a){var b={client:{hl:a.Pa,gl:a.Oa,clientName:a.Na,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ma}},c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!N("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=qh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!N("music_web_display_mode_killswitch")){var h;b.client.ya=null!=(h=b.client.ya)?h:{};b.client.ya.webDisplayMode=qh()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=zh()){a=xh[h.type||"unknown"]||"CONN_UNKNOWN";h=xh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);N("web_log_effective_connection_type")&&(a=zh(),a=null!==a&&void 0!==a&&a.effectiveType?yh.hasOwnProperty(a.effectiveType)?yh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(eg(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Bh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Dk||F("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Ck:b=ed([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Ch(a){a=Object.assign({},a);delete a.Authorization;var b=ed();if(b){var c=new wd;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest())}return a}
;function Dh(a){var b=new cf;(b=b.isAvailable()?a?new jf(b,a):b:null)||(a=new df(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ze(a):null;this.i=document.domain||window.location.hostname}
Dh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ue(b))}catch(f){return}else e=escape(b);rh(a,e,c,this.i)};
Dh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=bd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Dh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;bd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Eh;function Fh(){Eh||(Eh=new Dh("yt.innertube"));return Eh}
function Gh(a,b,c,d){if(d)return null;d=Fh().get("nextId",!0)||1;var e=Fh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ch(c),requestTime:Math.round(Q())};Fh().set("nextId",d+1,86400,!0);Fh().set("requests",e,86400,!0);return d}
function Hh(a){var b=Fh().get("requests",!0)||{};delete b[a];Fh().set("requests",b,86400,!0)}
function Ih(a){var b=Fh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Ch(Bh(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),nh(a,d.method,e,{}));delete b[c]}}Fh().set("requests",b,86400,!0)}}
;function Jh(a,b){this.version=a;this.args=b}
;function Kh(a,b){this.topic=a;this.h=b}
Kh.prototype.toString=function(){return this.topic};var Lh=A("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.X;M.prototype.publish=M.prototype.P;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",Lh,void 0);var Mh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Mh,void 0);var Nh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Nh,void 0);var Oh=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Oh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ph(a,b){var c=Qh();c&&c.publish.call(c,a.toString(),a,b)}
function Rh(a){var b=Sh,c=Qh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Mh[d])try{if(f&&b instanceof Kh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.O){var l=new h;h.O=l.version}var p=h.O}catch(n){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
cb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){qf(n)}},Oh[b.toString()]?A("yt.scheduler.instance")?Nf(g):Hf(g,0):g())});
Mh[d]=!0;Nh[b.toString()]||(Nh[b.toString()]=[]);Nh[b.toString()].push(d);return d}
function Th(){var a=Uh,b=Rh(function(c){a.apply(void 0,arguments);Vh(b)});
return b}
function Vh(a){var b=Qh();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete Mh[c]}))}
function Qh(){return A("ytPubsub2Pubsub2Instance")}
;function Wh(){}
;var Xh=[],Yh=!1;function Zh(a){Yh||(Xh.push({type:"ERROR",payload:a}),10<Xh.length&&Xh.shift())}
function $h(a,b){Yh||(Xh.push({type:"EVENT",eventType:a,payload:b}),10<Xh.length&&Xh.shift())}
;var ai=function(){var a;return function(){a||(a=new Dh("ytidb"));return a}}();
function bi(){var a;return null===(a=ai())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ci(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=bi())||(a={createdTimestampMs:Q(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if(di()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:Q(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=ai())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function ei(a,b){return new ci(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
ci.prototype.isSupported=function(){return this.h};
ci.prototype.log=function(){di()&&$h("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(Q()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function di(){var a;return!!(N("ytidb_analyze_is_supported")&&(null===(a=ai())||void 0===a?0:a.h))}
;function fi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(fi,Error);function gi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function hi(a){return a.substr(0,a.indexOf(":"))||a}
;var ii={},ji=(ii.AUTH_INVALID="No user identifier specified.",ii.EXPLICIT_ABORT="Transaction was explicitly aborted.",ii.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ii.MISSING_OBJECT_STORE="Object store not created.",ii.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ii.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ii.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ii.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",ii),ki={},li=(ki.AUTH_INVALID="ERROR",ki.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ki.EXPLICIT_ABORT="IGNORED",ki.IDB_NOT_SUPPORTED="ERROR",ki.MISSING_OBJECT_STORE="ERROR",ki.QUOTA_EXCEEDED="WARNING",ki.QUOTA_MAYBE_EXCEEDED="WARNING",ki.UNKNOWN_ABORT="WARNING",ki),mi={},ni=(mi.AUTH_INVALID=!1,mi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,mi.EXPLICIT_ABORT=!1,mi.IDB_NOT_SUPPORTED=!1,mi.MISSING_OBJECT_STORE=!1,mi.QUOTA_EXCEEDED=!1,mi.QUOTA_MAYBE_EXCEEDED=!0,
mi.UNKNOWN_ABORT=!0,mi);function R(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ji[a]:c;d=void 0===d?li[a]:d;e=void 0===e?ni[a]:e;fi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,R.prototype)}
v(R,fi);function oi(a){R.call(this,"MISSING_OBJECT_STORE",{Hk:a},ji.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,oi.prototype)}
v(oi,R);var pi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function qi(a,b,c){b=hi(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof R)return d;if("QuotaExceededError"===d.name)return new R("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(yc&&"UnknownError"===d.name)return new R("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&pi.some(function(e){return d.message.includes(e)}))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new R("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ik:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function ri(a){if(!a)throw Error();throw a;}
function si(a){return a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)ti(S.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
S.resolve=function(a){return new S(function(b,c){a instanceof S?a.then(b,c):b(a)})};
S.reject=function(a){return new S(function(b,c){c(a)})};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:si,e=null!==b&&void 0!==b?b:ri;return new S(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ui(c,c,d,f,g)}),c.onRejected.push(function(){vi(c,c,e,f,g)})):"FULFILLED"===c.state.status?ui(c,c,d,f,g):"REJECTED"===c.state.status&&vi(c,c,e,f,g)})};
function ti(a,b){a.then(void 0,b)}
function ui(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?wi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?wi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?wi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function xi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function yi(a){return new Promise(function(b,c){xi(a,b,c)})}
function T(a){return new S(function(b,c){xi(a,b,c)})}
;function zi(a,b){return new S(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Ai(a){return new Promise(function(b){Of(function(){b()},a)})}
function Bi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
m=Bi.prototype;m.add=function(a,b,c){return Ci(this,[a],{mode:"readwrite",H:!0},function(d){return Di(d,a).add(b,c)})};
m.clear=function(a){return Ci(this,[a],{mode:"readwrite",H:!0},function(b){return Di(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ci(this,[a],{mode:"readonly",H:!0},function(c){return Di(c,a).count(b)})};
function Ei(a,b,c){a=a.h.createObjectStore(b,c);return new Fi(a)}
m.delete=function(a,b){return Ci(this,[a],{mode:"readwrite",H:!0},function(c){return Di(c,a).delete(b)})};
m.get=function(a,b){return Ci(this,[a],{mode:"readonly",H:!0},function(c){return Di(c,a).get(b)})};
function Gi(a,b,c,d){return Ci(a,[b],{mode:"readwrite",H:!0},function(e){e=Di(e,b);return T(e.h.put(c,d))})}
function Ci(a,b,c,d){return H(a,function f(){var g=this,h,k,l,p,n,r,q,B,I,J,aa,U,O,na;return x(f,function(P){switch(P.h){case 1:var kb={mode:"readonly",H:!1};"string"===typeof c?kb.mode=c:kb=c;h=kb;g.transactionCount++;k=N("ytidb_transaction_exponential_backoff_retries");l=h.H?vf("ytidb_transaction_try_count",1):1;p=500;n=0;case 2:if(r){P.h=3;break}n++;q=Math.round(Q());P.j=4;B=g.h.transaction(b,h.mode);kb=new Hi(B);kb=Ii(kb,d);return w(P,kb,6);case 6:return I=P.i,J=Math.round(Q()),Ji(g,q,J,n,void 0,
b.join(),h),P.return(I);case 4:aa=ta(P);U=Math.round(Q());O=qi(aa,g.h.name,b.join());if((na=O instanceof R&&!O.h)||n>=l){Ji(g,q,U,n,O,b.join(),h);r=O;P.h=2;break}if(!k){P.h=2;break}return w(P,Ai(p),9);case 9:p*=2;P.h=2;break;case 3:return P.return(Promise.reject(r))}})})}
function Ji(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&$h("QUOTA_EXCEEDED",{dbName:hi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&($h("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Ki(a,!1,d,f,b),Zh(e)):Ki(a,!0,d,f,b)}
function Ki(a,b,c,d,e){$h("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Fi(a){this.h=a}
m=Fi.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function Li(a,b){return Mi(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Li(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){return new Ni(this.h.index(a))};
m.getName=function(){return this.h.name};
function Mi(a,b,c){a=a.h.openCursor(b.query,b.direction);return Oi(a).then(function(d){return zi(d,c)})}
function Hi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=R;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ii(a,b){var c=new Promise(function(d,e){ti(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Hi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new R("EXPLICIT_ABORT");};
Hi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Di(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Fi(b),a.i.set(b,c));return c}
function Ni(a){this.h=a}
Ni.prototype.count=function(a){return T(this.h.count(a))};
Ni.prototype.delete=function(a){return Pi(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Ni.prototype.get=function(a){return T(this.h.get(a))};
Ni.prototype.getKey=function(a){return T(this.h.getKey(a))};
function Pi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Oi(a).then(function(d){return zi(d,c)})}
function Qi(a,b){this.request=a;this.cursor=b}
function Oi(a){return T(a).then(function(b){return null===b?null:new Qi(a,b)})}
m=Qi.prototype;m.advance=function(a){this.cursor.advance(a);return Oi(this.request)};
m.continue=function(a){this.cursor.continue(a);return Oi(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function Ri(a,b,c){return H(this,function e(){var f,g,h,k,l,p,n,r,q,B;return x(e,function(I){if(1==I.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.lb,p=g.upgrade,n=g.closed,q=function(){r||(r=new Bi(f.result,{closed:n}));return r},f.addEventListener("upgradeneeded",function(J){if(null===J.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");J.dataLoss&&"none"!==J.dataLoss&&$h("IDB_DATA_CORRUPTED",{reason:J.dataLossMessage||"unknown reason",dbName:hi(a)});var aa=q(),U=new Hi(f.transaction);p&&p(aa,J.oldVersion,J.newVersion,U)}),h&&f.addEventListener("blocked",function(){h()}),w(I,yi(f),2);
B=I.i;k&&B.addEventListener("versionchange",function(){k(q())});
B.addEventListener("close",function(){$h("IDB_UNEXPECTEDLY_CLOSED",{dbName:hi(a),dbVersion:B.version});l&&l()});
return I.return(q())})})}
function Si(a,b,c){c=void 0===c?{}:c;return Ri(a,b,c)}
function Ti(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,yi(e),0)})})}
;function Ui(a,b){this.name=a;this.options=b;this.j=!1}
Ui.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Si(a,b,c)};
Ui.prototype.delete=function(a){a=void 0===a?{}:a;return Ti(this.name,a)};
Ui.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,lb:c,upgrade:this.options.upgrade},e=function(){return H(a,function g(){var h=this,k,l,p;return x(g,function(n){switch(n.h){case 1:return n.j=2,w(n,h.i(h.name,h.options.version,d),4);case 4:k=n.i;a:{var r=u(Object.keys(h.options.Aa));for(var q=r.next();!q.done;q=r.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){r=q;break a}r=void 0}l=r;if(void 0===l){n.h=5;break}if(h.j){n.h=6;break}h.j=!0;return w(n,h.delete(),7);case 7:return n.return(e());case 6:throw new oi(l);case 5:return n.return(k);
case 2:p=ta(n);if(p instanceof DOMException?"VersionError"===p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"===p.name:p instanceof Object&&"message"in p&&"An attempt was made to open a database using a lower version than the existing version."===p.message)return n.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw p;}})})};
this.h=b=e()}return this.h};var Vi=new Ui("YtIdbMeta",{Aa:{databases:!0},upgrade:function(a,b){1>b&&Ei(a,"databases",{keyPath:"actualName"})}});
function Wi(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Vi.open(),2);d=e.i;return e.return(Ci(d,["databases"],{H:!0,mode:"readwrite"},function(f){var g=Di(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return T(g.h.put(a,void 0)).then(function(){})})}))})})}
function Xi(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Vi.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function Yi(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Vi.open(),2);if(3!=e.h)return c=e.i,w(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
function Zi(a){return H(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,Vi.open(),2)):3!=f.h?(e=f.i,w(f,Ci(e,["databases"],{H:!0,mode:"readonly"},function(g){d.length=0;return Mi(Di(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function $i(){return Zi(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var aj;
function bj(){return H(this,function b(){var c,d,e,f,g;return x(b,function(h){switch(h.h){case 1:if(N("ytidb_is_supported_cache_success_result")&&(c=bi(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new ci(!0));var k;if(k=Ag)k=/WebKit\/([0-9]+)/.exec(Mb),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(Mb),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(ei(Error("YtIdb is not supported on iOS 8 or 9")));if(kc)return h.return(ei(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(ei(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(ei(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(ei(Error("IDBTransaction.prototype.objectStoreNames is missing")));h.j=2;e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(h,Wi(e),4);case 4:return w(h,Xi("yt-idb-test-do-not-use"),5);
case 5:return h.return(new ci(!0));case 2:f=ta(h);if(!di()){h.h=6;break}h.j=7;return w(h,Yi(),9);case 9:return g=h.i,h.return(ei(f,g));case 7:return ta(h),h.return(ei(f));case 6:return h.return(ei(f))}})})}
function cj(){if(void 0!==aj)return aj;Yh=!0;return aj=bj().then(function(a){Yh=!1;a.log();return a.isSupported()})}
;function dj(){var a=new R("AUTH_INVALID");Zh(a);throw a;throw Error("Datasync ID not set");}
function ej(a,b,c,d){var e;return H(this,function g(){var h,k;return x(g,function(l){switch(l.h){case 1:return w(l,fj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return gi(a),c?h={actualName:a,publicName:a,userIdentifier:void 0}:h=dj(),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,l.j=3,w(l,Wi(h),5);case 5:return w(l,Si(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=ta(l),l.j=7,w(l,Xi(h.actualName),9);case 9:l.h=8;l.j=0;break;case 7:ta(l);
case 8:throw k;}})})}
function fj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,cj(),2);if(!e.i)throw d=new R("IDB_NOT_SUPPORTED",{context:a}),Zh(d),d;e.h=0})})}
function gj(a,b,c){c=void 0===c?{}:c;return ej(a,b,!1,c)}
function hj(a,b,c){c=void 0===c?{}:c;return ej(a,b,!0,c)}
function ij(a,b){b=void 0===b?{}:b;return H(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,cj(),2);if(3!=f.h){if(!f.i)return f.return();gi(a);e=dj();return w(f,Ti(e.actualName,b),3)}return w(f,Xi(e.actualName),0)})})}
function jj(a,b){var c=this;a=a.map(function(d){return H(c,function f(){return x(f,function(g){return 1==g.h?w(g,Ti(d.actualName,b),2):w(g,Xi(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function kj(){var a=void 0===a?{}:a;return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,cj(),2);if(3!=e.h){if(!e.i)return e.return();gi("LogsDatabaseV2");return w(e,$i(),3)}d=e.i;return w(e,jj(d,a),0)})})}
function lj(a,b){b=void 0===b?{}:b;return H(this,function d(){return x(d,function(e){if(1==e.h)return w(e,cj(),2);if(3!=e.h){if(!e.i)return e.return();gi(a);return w(e,Ti(a,b),3)}return w(e,Xi(a),0)})})}
;function mj(a,b){Ui.call(this,a,b);this.options=b;gi(a)}
v(mj,Ui);mj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Da?hj:gj)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
mj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Da?lj:ij)(this.name,a)};
function nj(a){var b;return function(){b||(b=new mj("LogsDatabaseV2",a));return b}}
;function oj(){S.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(oj,S);oj.reject=S.reject;oj.resolve=S.resolve;oj.all=S.all;var pj;function qj(){if(!pj){var a={};pj=nj({Aa:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Da:!N("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Ei(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Ei(b,"sapisid"));3>c&&Ei(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return pj().open()}
function rj(a){return H(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,sj(),2);case 2:return e=k.i,w(k,qj(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Gi(f,"LogsRequestsStore",g),4);case 4:return h=k.i,d.mb=Q(),tj(d),k.return(h)}})})}
function uj(a){return H(this,function c(){var d,e,f,g,h,k,l,p;return x(c,function(n){switch(n.h){case 1:return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,sj(),2);case 2:return e=n.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,e,f,0],h=[a,e,f,Q()],k=IDBKeyRange.bound(g,h),w(n,qj(),3);case 3:return l=n.i,p=void 0,w(n,Ci(l,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(r){return Pi(Di(r,"LogsRequestsStore").index("newRequest"),{query:k,direction:"prev"},function(q){q.getValue()&&
(p=q.getValue(),"NEW"===a&&(p.status="QUEUED",q.update(p)))})}),4);
case 4:return d.mb=Q(),tj(d),n.return(p)}})})}
function vj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,qj(),2);d=e.i;return e.return(Ci(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=Di(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",T(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function wj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,qj(),2);d=e.i;return e.return(Ci(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=Di(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,T(g.h.put(h,void 0)).then(function(){return h})):oj.resolve(void 0)})}))})})}
function xj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,qj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function yj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,qj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function zj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,qj(),2);c=d.i;return d.return(c.clear("SWHealthLog"))})})}
function Aj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,qj(),2);if(3!=e.h)return c=e.i,d=Q()-2592E6,w(e,Ci(c,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){return Mi(Di(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),3);
N("web_clean_sw_logs_store")?e=w(e,Ci(c,["SWHealthLog"],{mode:"readwrite",H:!0},function(f){return Mi(Di(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0):(e.h=0,e=void 0);
return e})})}
function Bj(){return H(this,function b(){return x(b,function(c){return 1==c.h?w(c,kj(),2):w(c,lj("LogsDatabaseV2"),0)})})}
function sj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h){Wh.h||(Wh.h=new Wh);var e={};var f=ed([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(F("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in lf||(e["X-Origin"]=window.location.origin),N("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in lf&&(e["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));e instanceof Be||(f=new Be(Ha),Ce(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Ch(c);var g=
new wd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Cj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,qj(),2);d=e.i;return w(e,Gi(d,"sapisid",a,"sapisid"),0)})})}
function Dj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,qj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function tj(a){var b=vf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&Ph("nwl_transaction_latency_payload",a)}
;var Ej=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function Fj(){for(var a=u(Ej),b=a.next();!b.done;b=a.next())if(b=bd.get(b.value))return b;return"LOGGED_OUT"}
function Gj(){re.call(this);this.pollingInterval=3E3;this.j=[null,null,null];this.m=!1;Hj(this)}
v(Gj,re);function Ij(){Gj.h||(Gj.h=new Gj);var a=Gj.h;a.m=!0;a.verifyUser();Jj(a)}
Gj.prototype.verifyUser=function(){var a=Hj(this),b=a.Va;if(!a.kb)return Jj(this),!0;se(this,"ytsessionchange");b&&se(this,"ytuserinvalid");Jj(this);return!1};
function Hj(a){var b=Ej.map(function(e){var f;return null!==(f=bd.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.j&&""!==a.j[f]&&""===e}),d=b.some(function(e,f){return a.j&&a.j[f]!==e});
a.j=b;return{Va:c,kb:d}}
function Jj(a){a.m&&(Kj(a),a.l=Lf(function(){a.verifyUser()},a.pollingInterval))}
function Kj(a){a.l&&(Qf(a.l),a.l=void 0)}
;var Lj;function Mj(){Lj||(Lj=new Dh("yt.offline"));return Lj}
function Nj(a){if(N("offline_error_handling")){var b=Mj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Mj().set("errors",b,2592E3,!0)}}
;function Oj(){re.call(this);this.l=this.A=this.C=this.m=!1;this.j=Pj();this.l=N("validate_network_status");Qj(this);Rj(this)}
v(Oj,re);function Pj(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Rj(a){window.addEventListener("online",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.l){d.j=!0;e.h=2;return}return w(e,Sj(d),3)}2!=e.h&&(d.j=e.i);d.m&&d.j&&se(d,"ytnetworkstatus-online");Tj(d);if(d.A&&N("offline_error_handling")){var f=Mj().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new fi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;qf(h)}Mj().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Qj(a){window.addEventListener("offline",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.l){d.j=!1;e.h=2;return}return w(e,Sj(d),3)}2!=e.h&&(d.j=e.i);d.m&&!d.j&&se(d,"ytnetworkstatus-offline");Tj(d);e.h=0})})})}
function Tj(a){a.C&&(rf(new fi("NetworkStatusManager state did not match poll",Q()-0)),a.C=!1)}
function Sj(a){return H(a,function c(){var d;return x(c,function(e){switch(e.h){case 1:return e.j=2,w(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;e.h=3;e.j=0;break;case 2:ta(e),d=!1;case 3:return e.return(d)}})})}
;function Uj(a){a=void 0===a?{}:a;re.call(this);var b=this;this.l=this.A=0;Oj.h||(Oj.h=new Oj);this.j=Oj.h;this.j.m=!0;a.Ua&&(this.j.A=!0);a.fa?(this.fa=a.fa,ie(this.j,"ytnetworkstatus-online",function(){Vj(b,"publicytnetworkstatus-online")}),ie(this.j,"ytnetworkstatus-offline",function(){Vj(b,"publicytnetworkstatus-offline")})):(ie(this.j,"ytnetworkstatus-online",function(){se(b,"publicytnetworkstatus-online")}),ie(this.j,"ytnetworkstatus-offline",function(){se(b,"publicytnetworkstatus-offline")}))}
v(Uj,re);function Wj(){var a=Xj().j;a.l||a.j===Pj()||rf(new fi("NetworkStatusManager isOnline does not match window status"));return a.j}
function Vj(a,b){a.fa?a.l?(Qf(a.A),a.A=Nf(function(){a.m!==b&&(se(a,b),a.m=b,a.l=Q())},a.fa-(Q()-a.l))):(se(a,b),a.m=b,a.l=Q()):se(a,b)}
;var Yj=!1,Zj=!1,ak=0,bk;function ck(){H(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,cj(),2);case 2:(c=g.i)&&(Zj=!0);d=N("networkless_logging");if(c&&d)return N("nwl_use_ytidb_partitioning")?w(g,lj("LogsDatabaseV2"),8):w(g,kj(),8);if(!c){g.h=0;break}return w(g,Bj(),0);case 8:return Ij(),document.addEventListener("ytsessionchange",function(){dk()}),w(g,Dj(),11);
case 11:e=g.i;f=Fj();if(e===f){g.h=12;break}dk();return w(g,Cj(f),12);case 12:if(!(N("enable_nwl_cleaning_logic")&&Math.random()<=vf("nwl_cleaning_rate",.1))){g.h=14;break}return w(g,Aj(),14);case 14:Yj=!0;ek();Wj()&&fk();ie(Xj(),"publicytnetworkstatus-online",fk);ie(Xj(),"publicytnetworkstatus-offline",gk);if(!N("networkless_immediately_drop_sw_health_store")){g.h=16;break}return w(g,hk(),16);case 16:if(N("networkless_immediately_drop_all_requests"))return w(g,Bj(),0);g.h=0}})})}
function ik(a,b){function c(d){var e=Wj();if(!Yj||!d||e&&N("vss_networkless_bypass_write"))sg(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};rj(f).then(function(g){f.id=g;(Wj()||N("networkless_always_online"))&&jk(f)}).catch(function(g){jk(f);
Wj()?qf(g):Nj(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?cj().then(function(d){c(d)}):c(Zj)}
function kk(a,b){function c(d){if(Yj&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?xj(e.id):f=!0;g(h,k)};
sg(e.url,e.options);rj(e).then(function(h){e.id=h;f&&xj(e.id)}).catch(function(h){Wj()?qf(h):Nj(h)})}else sg(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?cj().then(function(d){c(d)}):c(Zj)}
function fk(){var a=this;ak||(ak=Nf(function(){return H(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,uj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,jk(d),3):(gk(),e.return());ak=0;fk();e.h=0})})},100))}
function gk(){Qf(ak);ak=0}
function jk(a){return H(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.h=2;break}return w(e,vj(a.id),3);case 3:(d=e.i)?a=d:rf(Error("The request cannot be found in the database."));case 2:if(lk(a,2592E6)){e.h=4;break}rf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.h=5;break}return w(e,xj(a.id),5);case 5:return e.return();case 4:var f=a=mk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());(a=f)&&sg(a.url,a.options);e.h=0}})})}
function mk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?(k.h=2,k=void 0):k=1>a.sendCount?w(k,wj(a.id),6):w(k,xj(a.id),2),k;2!=k.h&&Nf(function(){Wj()&&fk()},5E3);
c(e,f);k.h=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?(k.h=2,k=void 0):k=w(k,xj(a.id),2),k;d(e,f);k.h=0})})};
return a}
function lk(a,b){a=a.timestamp;return Q()-a>=b?!1:!0}
function ek(){var a=this;uj("QUEUED").then(function(b){b&&!lk(b,12E4)&&Nf(function(){return H(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?(e.h=2,e=void 0):e=w(e,wj(b.id),2),e;ek();e.h=0})})})})}
function dk(){yj().catch(function(a){qf(a)})}
function hk(){return H(this,function b(){return x(b,function(c){return c.return(zj().catch(function(d){qf(d)}))})})}
function Xj(){bk||(bk=new Uj({Ua:!0}));return bk}
;function nk(a){var b=this;this.h=null;a?this.h=a:Ah()&&(this.h=kh());Lf(function(){Ih(b)},5E3)}
nk.prototype.isReady=function(){!this.h&&Ah()&&(this.h=kh());return!!this.h};
function nh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=Gh(b,c,l,k)),q)){var B=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(J,aa){Hh(q);B(J,aa)};
c.onFetchSuccess=function(J,aa){Hh(q);I(J,aa)}}try{r&&d.retry&&!d.za.bypassNetworkless?(g.method="POST",!d.za.writeThenSend&&N("nwl_send_fast_on_unload")?kk(n,g):ik(n,g)):(g.method="POST",g.postParams||(g.postParams={}),sg(n,g))}catch(J){if("InvalidAccessError"==J.name)q&&(Hh(q),q=0),rf(Error("An extension is blocking network request."));
else throw J;}q&&Lf(function(){Ih(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&rf(new fi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new fi("innertube xhrclient not ready",b,c,d);qf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.Qa)&&(h=f);var k=a.h.Sa||!1,l=Bh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var p={alt:"json"};a.h.Ra&&g.headers.Authorization||(p.key=a.h.innertubeApiKey);var n=gg(""+h+f,p||{},!0);Yj?cj().then(function(r){e(r)}):e(!1)}
;function ok(a,b,c){c=void 0===c?{}:c;var d=nk;F("ytLoggingEventsDefaultDisabled",!1)&&nk==nk&&(d=null);ph(a,b,d,c)}
;var pk=[{xa:function(a){return"Cannot read property '"+a.key+"'"},
oa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{xa:function(a){return"Cannot call '"+a.key+"'"},
oa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function qk(){this.h=[];this.i=[]}
var rk;function sk(){rk||(rk=new qk);return rk}
;var tk=new M;function uk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=vk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=vk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=vk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function vk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function wk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=xk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=uk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?xk(f+".ve",g,h,k):0;d+=f;d+=xk(e,a[e],b,c);if(500<d)break}}else c[b]=yk(a),d+=c[b].length;else c[b]=yk(a),d+=c[b].length;return d}
function xk(a,b,c,d){c+="."+a;a=yk(b);d[c]=a;return c.length+a.length}
function yk(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var zk=new Set,Ak=0,Bk=0,Ck=0,Dk=[],Ek=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fk(a){Gk(a,"WARNING")}
function Gk(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),N("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Ak))){var g=yd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=wk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var p=
a.params;if("object"===typeof a.params)for(l in p){if(p[l]){var n="params."+l,r=yk(p[l]);c[n]=r;k+=n.length+r.length;if(500<k)break}}else c.params=yk(p)}if(Dk.length)for(l=0;l<Dk.length&&!(k=wk(Dk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
sk();c=u(a.i);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Gk)){a=d.weight;break a}a=u(a.h);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ga(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(pk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.oa[l.name])for(e=u(c.oa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.xa(f);break}l.params||(l.params={});a=sk();l.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!zk.has(l.message)){"ERROR"===b?(tk.P("handleError",l),N("record_app_crashed_web")&&0===Ck&&1===l.sampleWeight&&
(Ck++,ok("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Bk++):"WARNING"===b&&tk.P("handleWarning",l);if(N("kevlar_gel_error_routing")){a=b;b:{c=u(Ek);for(d=c.next();!d.done;d=c.next())if(Bg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(ok("clientError",c),("ERROR"===a||N("errors_flush_gel_always_killswitch"))&&fh())}if(!N("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}sg(F("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}zk.add(l.message);Ak++}}}
function Hk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;var Ik={Tb:29434,Vb:3611,Le:3854,eg:42993,Mi:4724,xj:96370,nb:27686,ob:85013,pb:23462,rb:42016,sb:62407,tb:26926,qb:43781,ub:51236,vb:79148,wb:50160,xb:77504,Jb:87907,Kb:18630,Lb:54445,Mb:80935,Nb:105675,Ob:37521,Pb:47786,Qb:98349,Rb:123695,Sb:6827,Ub:7282,Yb:32276,Xb:76278,Zb:93911,ac:106531,cc:27259,dc:27262,ec:27263,hc:21759,ic:27107,jc:62936,kc:49568,lc:38408,mc:80637,nc:68727,oc:68728,pc:80353,qc:80356,sc:74610,tc:45707,uc:83962,wc:83970,xc:46713,yc:89711,zc:74612,Ac:93265,Bc:74611,Dc:113533,
Ec:93252,Fc:99357,Hc:94521,Ic:114252,Jc:113532,Kc:94522,Gc:94583,Lc:88E3,Mc:93253,Nc:93254,Oc:94387,Pc:94388,Qc:93255,Rc:97424,Cc:72502,Sc:110111,Tc:76019,Vc:117092,Wc:117093,Uc:89431,Xc:110466,Yc:77240,Zc:60508,bd:105350,cd:73393,dd:113534,ed:92098,fd:84517,gd:83759,hd:80357,jd:86113,kd:72598,ld:72733,md:107349,nd:124275,od:118203,pd:117431,qd:117429,rd:117430,sd:117432,td:120080,ud:117259,vd:121692,wd:97615,xd:31402,yd:84774,zd:95117,Ad:98930,Bd:98931,Cd:98932,Dd:43347,Ed:45474,Fd:100352,Gd:84758,
Hd:98443,Id:117985,Jd:74613,Kd:74614,Ld:64502,Md:74615,Nd:74616,Od:122224,Pd:74617,Qd:77820,Rd:74618,Sd:93278,Td:93274,Ud:93275,Vd:93276,Wd:22110,Xd:29433,Zd:120541,be:82047,ce:113550,de:75836,ee:75837,ge:42352,he:84512,ie:76065,je:75989,ke:16623,le:32594,me:27240,ne:32633,oe:74858,qe:3945,pe:16989,re:45520,se:25488,te:25492,ue:25494,we:55760,xe:14057,ye:18451,ze:57204,Ae:57203,Be:17897,Ce:57205,De:18198,Ee:17898,Fe:17909,Ge:43980,He:46220,Ie:11721,Je:49954,Ke:96369,Me:56251,Ne:25624,Oe:16906,Pe:99999,
Qe:68172,Re:27068,Se:47973,Te:72773,Ue:26970,Ve:26971,We:96805,Xe:17752,Ye:73233,Ze:109512,af:22256,bf:14115,cf:22696,df:89278,ef:89277,ff:109513,gf:43278,hf:43459,jf:43464,kf:89279,lf:43717,mf:55764,nf:22255,pf:89281,qf:40963,rf:43277,sf:43442,tf:91824,uf:120137,vf:96367,wf:36850,xf:72694,yf:37414,zf:36851,Af:121343,Bf:73491,Cf:54473,Df:43375,Ef:46674,Ff:32473,Gf:72901,Hf:72906,If:50947,Jf:50612,Kf:50613,Lf:50942,Mf:84938,Nf:84943,Of:84939,Pf:84941,Qf:84944,Rf:84940,Sf:84942,Tf:35585,Uf:51926,Vf:79983,
Wf:63238,Xf:18921,Yf:63241,Zf:57893,ag:41182,cg:33424,dg:22207,fg:36229,gg:22206,hg:22205,ig:18993,jg:19001,kg:18990,lg:18991,mg:18997,ng:18725,og:19003,pg:36874,qg:44763,rg:33427,sg:67793,tg:22182,ug:37091,vg:34650,wg:50617,xg:47261,yg:22287,zg:25144,Ag:97917,Bg:62397,Cg:36961,Dg:108035,Eg:27426,Fg:27857,Gg:27846,Hg:27854,Ig:69692,Jg:61411,Kg:39299,Lg:38696,Mg:62520,Ng:36382,Og:108701,Pg:50663,Qg:36387,Rg:14908,Sg:37533,Tg:105443,Ug:61635,Vg:62274,Wg:65702,Xg:65703,Yg:65701,Zg:76256,ah:37671,bh:49953,
eh:36216,fh:28237,gh:39553,hh:29222,ih:26107,jh:38050,kh:26108,mh:120745,lh:26109,nh:26110,oh:66881,ph:28236,qh:14586,rh:57929,sh:74723,th:44098,uh:44099,vh:23528,wh:61699,xh:59149,yh:101951,zh:97346,Ah:118051,Bh:95102,Ch:64882,Dh:119505,Eh:63595,Fh:63349,Gh:95101,Hh:75240,Ih:27039,Jh:68823,Kh:21537,Lh:83464,Mh:75707,Nh:83113,Oh:101952,Ph:101953,Rh:79610,Sh:24402,Th:24400,Uh:32925,Vh:57173,Wh:122502,Xh:64423,Yh:64424,Zh:33986,ai:100828,bi:21409,ci:11070,di:11074,fi:17880,gi:14001,ii:30709,ji:30707,
ki:30711,li:30710,mi:30708,hi:26984,ni:63648,oi:63649,ri:51879,si:111059,ti:5754,vi:20445,wi:110386,xi:113746,yi:66557,zi:17310,Ai:28631,Bi:21589,Ci:68012,Di:60480,Ei:31571,Fi:76980,Gi:41577,Hi:45469,Ii:38669,Ji:13768,Ki:13777,Li:62985,Ni:59369,Oi:43927,Pi:43928,Qi:12924,Ri:100355,Ui:56219,Vi:27669,Wi:10337,Ti:47896,Xi:122629,Yi:121258,Zi:107598,aj:96639,bj:107536,cj:96661,dj:96658,ej:116646,fj:121122,gj:96660,hj:104443,ij:96659,jj:106442,kj:63667,lj:63668,mj:63669,nj:78314,oj:55761,pj:96368,qj:67374,
rj:48992,sj:49956,tj:31961,uj:26388,vj:23811,wj:5E4,yj:47355,zj:47356,Aj:37935,Bj:45521,Cj:21760,Dj:83769,Ej:49977,Fj:49974,Gj:93497,Hj:93498,Ij:34325,Jj:115803,Kj:123707,Lj:100081,Mj:35309,Nj:68314,Oj:25602,Pj:100339,Qj:59018,Rj:18248,Sj:50625,Tj:9729,Uj:37168,Vj:37169,Wj:21667,Xj:16749,Yj:18635,Zj:39305,ak:18046,bk:53969,ck:8213,dk:93926,ek:102852,fk:110099,gk:22678,hk:69076,jk:100856,kk:17736,lk:3832,mk:55759,nk:64031,pk:93044,qk:93045,rk:34388,sk:17657,tk:17655,uk:39579,vk:39578,wk:77448,xk:8196,
yk:11357,zk:69877,Ak:8197,Bk:82039};function Jk(a,b,c){L.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=Xa(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v(Jk,L);Jk.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){rf(d)}}};
Jk.prototype.B=function(){window.removeEventListener("message",this.A);L.prototype.B.call(this)};function Kk(){this.l=[];this.isReady=!1;this.o={};var a=this.i=new Jk(!!F("WIDGET_ID_ENFORCE")),b=this.ab.bind(this);a.m=b;a.u=null;this.i.channel="widget";if(a=F("WIDGET_ID"))this.i.sessionId=a}
m=Kk.prototype;m.ab=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.o[a]||"onReady"===a||(this.addEventListener(a,Lk(this,a)),this.o[a]=!0)):this.qa(a,b,c)};
m.qa=function(){};
function Lk(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ka=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ka());this.sendMessage("onReady");E(this.l,this.Ca,this);this.l=[]};
m.ka=function(){return null};
function Mk(a,b){a.sendMessage("infoDelivery",b)}
m.Ca=function(a){this.isReady?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ca({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.i=null};function Nk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ok(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Pk(a)}
function Pk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Qk(a,b,c,d){if(La(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Rk(a){Kk.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.Xa,this));this.addEventListener("onVideoProgress",C(this.hb,this));this.addEventListener("onVolumeChange",C(this.ib,this));this.addEventListener("onApiChange",C(this.bb,this));this.addEventListener("onPlaybackQualityChange",C(this.eb,this));this.addEventListener("onPlaybackRateChange",C(this.fb,this));this.addEventListener("onStateChange",C(this.gb,this));this.addEventListener("onWebglSettingsChanged",C(this.jb,
this))}
v(Rk,Kk);m=Rk.prototype;m.qa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Nk(a)){var d=b;if(La(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Pk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Ok.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Qk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Nk(a)&&Mk(this,this.ka())}};
m.Xa=function(){var a=this.Ka.bind(this);this.i.i=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ka=function(){if(!this.h)return null;var a=this.h.getApiInterface();bb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.gb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Mk(this,a)};
m.eb=function(a){Mk(this,{playbackQuality:a})};
m.fb=function(a){Mk(this,{playbackRate:a})};
m.bb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.ib=function(){Mk(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.hb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Mk(this,a)};
m.jb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Mk(this,a)};
m.dispose=function(){Kk.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Sk(){var a=mb(Tk),b;return Ie(new Be(function(c,d){a.onSuccess=function(e){mg(e)?c(e):d(new Uk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Uk("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Uk("Request timed out","net.timeout",e))};
b=sg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Je&&b.abort();
return Ge(c)})}
function Uk(a,b,c){Ua.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Uk,Ua);function Vk(){this.i=0;this.h=null}
Vk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ae(a)?a:Wk(a)):2===this.i&&b?(a=b.call(c,this.h),Ae(a)?a:Xk(a)):this};
Vk.prototype.getValue=function(){return this.h};
Vk.prototype.$goog_Thenable=!0;function Xk(a){var b=new Vk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Wk(a){var b=new Vk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Yk(a){Ua.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Zk;this.isTimeout=a instanceof Uk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Je}
v(Yk,Ua);Yk.prototype.name="BiscottiError";function Zk(){Ua.call(this,"Biscotti ID is missing from server")}
v(Zk,Ua);Zk.prototype.name="BiscottiMissingError";var Tk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},$k=null;
function Xf(){if(N("disable_biscotti_fetch_on_html5_clients"))return Ge(Error("Fetching biscotti ID is disabled."));if(N("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!bd.get("CONSENT","").startsWith("YES+"))return Ge(Error("User has not consented - not fetching biscotti id."));if("1"==jb())return Ge(Error("Biscotti ID is not available in private embed mode"));$k||($k=Ie(Sk().then(al),function(a){return bl(2,a)}));
return $k}
function al(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Zk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Zk;a=a.id;Yf(a);$k=Wk(a);cl(18E5,2);return a}
function bl(a,b){b=new Yk(b);Yf("");$k=Xk(b);0<a&&cl(12E4,a-1);throw b;}
function cl(a,b){Hf(function(){Ie(Sk().then(al,function(c){return bl(b,c)}),Ha)},a)}
function dl(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Xf()}catch(b){return Ge(b)}}
;function el(a){if("1"!=jb()){a&&Wf();try{dl().then(function(){},function(){}),Hf(el,18E5)}catch(b){qf(b)}}}
;var fl=Date.now().toString();
function gl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(fl)for(a=1,b=0;b<fl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^fl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var hl,il=y.ytLoggingDocDocumentNonce_;il||(il=gl(),Sa("ytLoggingDocDocumentNonce_",il));hl=il;var jl={Yd:0,Wb:1,fc:2,dh:3,ae:4,ik:5,Qh:6,Si:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function kl(a){this.h=a}
function ll(a){return new kl({trackingParams:a})}
kl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
kl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
kl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function ml(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function nl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ol(a){return F(nl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",ol,void 0);function pl(a){return(a=ol(void 0===a?0:a))?new kl({veType:a,youtubeData:void 0}):null}
function ql(){var a=F("csn-to-ctt-auth-info");a||(a={},mf("csn-to-ctt-auth-info",a));return a}
function rl(a){a=void 0===a?0:a;var b=F(ml(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",rl,void 0);function sl(a,b,c){var d=ql();(c=rl(c))&&delete d[c];b&&(d[a]=b)}
function tl(a){return ql()[a]}
z("yt_logging_screen.getCttAuthInfo",tl,void 0);function ul(a,b,c,d){c=void 0===c?0:c;if(a!==F(ml(c))||b!==F(nl(c)))sl(a,d,c),mf(ml(c),a),mf(nl(c),b),b=function(){setTimeout(function(){a&&ph("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:hl,clientScreenNonce:a},nk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",ul,void 0);function vl(a){Jh.call(this,1,arguments);this.csn=a}
v(vl,Jh);var Sh=new Kh("screen-created",vl),wl=[],yl=xl,zl=0;function Al(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Za(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(hb(e)||!e.trackingParams&&!e.veType)&&Fk(Error("Child VE logged with no data"));d={D:tl(b),N:b};"UNDEFINED_CSN"==b?Bl("visualElementAttached",c,d):a?ph("visualElementAttached",c,a,d):ok("visualElementAttached",c,d)}
function xl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Bc(b)}
function Bl(a,b,c){wl.push({payloadName:a,payload:b,options:c});zl||(zl=Th())}
function Uh(a){if(wl){for(var b=u(wl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,ph(c.payloadName,c.payload,null,c.options));wl.length=0}zl=0}
;function Cl(){this.i=new Set;this.h=new Set;this.j=new Map}
Cl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ia(Cl);function Dl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!El(a)||c.some(function(e){return!El(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Fl(a,d.value);return a}
function Fl(a,b){for(var c in b)if(El(b[c])){if(c in a&&!El(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Fl(a[c],b[c])}else if(Gl(b[c])){if(c in a&&!Gl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Hl(a[c],b[c])}else a[c]=b[c];return a}
function Hl(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,El(c)?a.push(Fl({},c)):Gl(c)?a.push(Hl([],c)):a.push(c);return a}
function El(a){return"object"===typeof a&&!Array.isArray(a)}
function Gl(a){return"object"===typeof a&&Array.isArray(a)}
;function Il(a,b){Jh.call(this,1,arguments)}
v(Il,Jh);function Jl(a,b){Jh.call(this,1,arguments)}
v(Jl,Jh);var Kl=new Kh("aft-recorded",Il),Ll=new Kh("timing-sent",Jl);var Ml=window;function Nl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var V=Ml.performance||Ml.mozPerformance||Ml.msPerformance||Ml.webkitPerformance||new Nl;var Ol=!1,Pl={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};C(V.clearResourceTimings||V.webkitClearResourceTimings||V.mozClearResourceTimings||V.msClearResourceTimings||V.oClearResourceTimings||Ha,V);function Ql(a){var b=Rl(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Sl(){var a;if(N("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===V||void 0===V?void 0:V.getEntriesByType)||void 0===a?void 0:a.call(V,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Tl(e.requestStart),e.responseEnd=Tl(e.responseEnd),e.redirectStart=Tl(e.redirectStart),e.redirectEnd=Tl(e.redirectEnd),e.domainLookupEnd=Tl(e.domainLookupEnd),e.connectStart=Tl(e.connectStart),
e.connectEnd=Tl(e.connectEnd),e.responseStart=Tl(e.responseStart),e.secureConnectionStart=Tl(e.secureConnectionStart),e.domainLookupStart=Tl(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=V.timing}else a=V.timing;return a}
function Ul(){return N("csi_use_time_origin")&&V.timeOrigin?Math.floor(V.timeOrigin):V.timing.navigationStart}
function Tl(a){return Math.round(Ul()+a)}
function Vl(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Sa("ytcsi."+(a||"")+"data_",b));return b}
function Wl(a){a=Vl(a);a.info||(a.info={});return a.info}
function Rl(a){a=Vl(a);a.tick||(a.tick={});return a.tick}
function Xl(a){var b=Vl(a).nonce;b||(b=gl(),Vl(a).nonce=b);return b}
function Yl(a){var b=Rl(a||""),c=Ql(a);c&&!Ol&&(Ph(Kl,new Il(Math.round(c-b._start),a)),Ol=!0)}
;function Zl(){if(V.getEntriesByType){var a=V.getEntriesByType("paint");if(a=ab(a,function(b){return"first-paint"===b.name}))return Tl(a.startTime)}a=V.timing;
return a.Wa?Math.max(0,a.Wa):0}
;function $l(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function am(a){a=a||"";var b=A("ytcsi.reference");b||($l(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=$l(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var bm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",bm,void 0);function cm(){this.h=0}
function dm(){cm.h||(cm.h=new cm);return cm.h}
cm.prototype.tick=function(a,b,c){em(this,"tick_"+a+"_"+b)||ok("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
cm.prototype.info=function(a,b){var c=Object.keys(a).join("");em(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,ok("latencyActionInfo",a))};
cm.prototype.span=function(a,b){var c=Object.keys(a).join("");em(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,ok("latencyActionSpan",a))};
function em(a,b){bm[b]=bm[b]||{count:0};var c=bm[b];c.count++;c.time=Q();a.h||(a.h=Lf(function(){var d=Q(),e;for(e in bm)bm[e]&&6E4<d-bm[e].time&&delete bm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Fk(c)),!0):!1}
;var W={},fm=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W.browse="LATENCY_ACTION_BROWSE",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.home="LATENCY_ACTION_HOME",
W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",
W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",W.results="LATENCY_ACTION_RESULTS",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.tenx="LATENCY_ACTION_TENX",
W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
W),X={},gm=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid=
"requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.ncnp="webInfo.nonPreloadedNodeCount",
X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs=
"tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid=
"requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),hm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),im={},jm=(im.ccs="CANARY_STATE_",im.mver="MEASUREMENT_VERSION_",
im.pis="PLAYER_INITIALIZED_STATE_",im.yt_pt="LATENCY_PLAYER_",im.pa="LATENCY_ACTION_",im.yt_vst="VIDEO_STREAM_TYPE_",im),km="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function lm(a){return!!F("FORCE_CSI_ON_GEL",!1)||N("csi_on_gel")||!!Vl(a).useGel}
function mm(a,b,c){var d=nm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||Q();return lm(c)?(am(c||"").tick[a]=b||Q(),d=Xl(c),"_start"===a?(a=dm(),em(a,"baseline_"+d)||ok("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):dm().tick(a,d,b),Yl(c),!0):!1}
function om(a,b,c){c=nm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in gm){c=gm[a];0<=Xa(hm,c)&&(b=!!b);a in jm&&"string"===typeof b&&(b=jm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Dl({},d)}0<=Xa(km,a)||Fk(new fi("Unknown label logged with GEL CSI",a))}
function nm(a){a=Vl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pm(a){a=nm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Y(a,b,c){null!==b&&(Wl(c)[a]=b,lm(c)?(a=om(a,b,c))&&lm(c)&&(b=am(c||""),Dl(b.info,a),Dl(pm(c),a),c=Xl(c),dm().info(a,c)):am(c||"").info[a]=b)}
function Z(a,b,c){var d=Rl(c);if(!b&&"_"!==a[0]){var e=a;V.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),V.mark(e))}e=b||Q();d[a]=e;mm(a,b,c)||(qm(c),am(c||"").tick[a]=b||Q());return d[a]}
function rm(a,b){if(lm(void 0)){var c=nm(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};am("").span[String(a.spanName)]=a;b=nm(void 0);b.gelSpans||(b.gelSpans={});Dl(b.gelSpans,a);b=Xl(void 0);dm().span(a,b)}}
function sm(){var a=Xl(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Xl(void 0)&&Z("ol",void 0,void 0)},0)})}
function qm(a){if(!A("yt.timing."+(a||"")+"pingSent_")){var b=F((a||"")+"TIMING_ACTION",void 0),c=Rl(a);if(b=!!A("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in Rl(void 0);if(b&&Ql(a))if(Yl(a),a)tm(a);else{b=!0;var d=F("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&tm(a)}}}
function um(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=xf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function tm(a){if(!lm(a)){var b=Rl(a),c=Wl(a),d=b._start,e=F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:F((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ql(a);var h=Rl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Wl(a).yt_pvis&&"youtube"===e&&(Y("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var p in c)"_"!==p.charAt(0)&&(f[p]=c[p]);b.ps=Q();p={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),p[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||N("always_send_csi_204_with_beacon"))?Hg(f):Eg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Ph(Ll,new Jl(p.aft+(Number(g)||0),a))}}
function vm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Da()&&a.setAttribute("nonce",Da());return c?(a=V.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ul(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=Wl(void 0),c=pm(void 0),"rc"in b||"rc"in c||Y("rc",""),0===a.transferSize))?!0:!1:!1}
function wm(){var a=window.location.protocol,b=V.getEntriesByType("resource");b=Ya(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=$a(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Tl(b.startTime)),Z("wffe",Tl(b.responseEnd)))}
var xm=window;xm.ytcsi&&(xm.ytcsi.info=Y,xm.ytcsi.tick=Z);function ym(){this.l=[];this.o=[];this.h=[];this.i=new Set;this.m=new Map}
function zm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=rl(c),h=pl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Al(a.client,g,h,[ll(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Al(a.client,g,h,[ll(d.playerResponse.trackingParams)]))})}
function Am(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=rl(d);c=c||pl(d);e&&c&&Al(a.client,e,c,[b])}}
ym.prototype.clickCommand=function(a,b,c){c=rl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:ll(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={D:tl(c),N:c};"UNDEFINED_CSN"==c?Bl("visualElementGestured",a,b):d?ph("visualElementGestured",a,d,b):ok("visualElementGestured",a,b);return!0};
function Bm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Cm(a,b,c);var f=pl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Am(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=rl(g);var l=k[0]||pl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={D:tl(h),N:h},"UNDEFINED_CSN"==h?Bl("visualElementStateChanged",k,l):g?ph("visualElementStateChanged",k,g,l):ok("visualElementStateChanged",
k,l))}}};
rl(c.layer)||a.j();if(c.va)for(var d=u(c.va),e=d.next();!e.done;e=d.next())zm(a,e.value,c.layer);else Gk(Error("Delayed screen needs a data promise."))}
function Cm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Ya?c.Ya:c.layer;var e=rl(d);d=pl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.ta,l=c.D,p=yl(),n={csn:p,pageVe:(new kl({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?n.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&Fk(new fi("newScreen() parent element does not have a VE - rootVe",
b));k&&(n.cloneCsn=k);k={D:l,N:p};g?ph("screenCreated",n,g,k):ok("screenCreated",n,k);Ph(Sh,new vl(p));var r=p}catch(q){Hk(q,{Kk:b,rootVe:d,parentVisualElement:void 0,Fk:e,Jk:f,ta:c.ta});Gk(q);return}ul(r,b,c.layer,c.D);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=N("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(jl));for(f=b.next();!f.done;f=b.next())if(rl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={D:tl(e),N:e,
Ja:f},"UNDEFINED_CSN"==e?Bl("visualElementHidden",d,f):b?ph("visualElementHidden",d,b,f):ok("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=r||"");Y("csn",r);Cl.getInstance().clear();d=pl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(N("web_mark_root_visible")||N("music_web_mark_root_visible"))&&(e=r,r=N("use_default_events_client")?void 0:nk,b={csn:e,ve:d.getAsJson(),eventType:1},f={D:tl(e),N:e},"UNDEFINED_CSN"==e?Bl("visualElementShown",b,f):r?ph("visualElementShown",
b,r,f):ok("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(r=e.next();!r.done;r=e.next())r=u(r.value),b=r.next().value,r.next().value.has(c.layer)&&d&&Am(a,b,d,c.layer)}
;function Dm(a){a&&(a.dataset?a.dataset[Em("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Fm(a,b){return a?a.dataset?a.dataset[Em(b)]:a.getAttribute("data-"+b):null}
var Gm={};function Em(a){return Gm[a]||(Gm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Hm=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Im=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Jm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Hm,""),c=c.replace(Im,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Km(a,b,c)}
function Km(a,b,c){c=void 0===c?null:c;var d=Lm(a),e=document.getElementById(d),f=e&&Fm(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Mg(d,b),b=""+Ma(b),Mm[b]=f),g||(e=Nm(a,d,function(){Fm(e,"loaded")||(Dm(e),Pg(d),Hf(Ra(Qg,d),0))},c)))}
function Nm(a,b,c,d){d=void 0===d?null:d;var e=Jc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Wb(e,Rc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Om(a){a=Lm(a);var b=document.getElementById(a);b&&(Qg(a),b.parentNode.removeChild(b))}
function Pm(a,b){a&&b&&(a=""+Ma(b),(a=Mm[a])&&Og(a))}
function Lm(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Mm={};var Qm=[],Rm=!1;function Sm(){if(!N("disable_ad_status_on_html5_clients")&&(!N("condition_ad_status_fetch_on_consent_cookie_html5_clients")||bd.get("CONSENT","").startsWith("YES+"))&&"1"!=jb()){var a=function(){Rm=!0;"google_ad_status"in window?mf("DCLKSTAT",1):mf("DCLKSTAT",2)};
try{Jm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Qm.push(Nf(function(){if(!(Rm||"google_ad_status"in window)){try{Pm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Rm=!0;mf("DCLKSTAT",3)}},5E3))}}
function Tm(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function Um(){this.i=!1;this.h=null}
Um.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,Jm(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Vm(g,c,!!f,h,d):(Om(b),Fk(new fi("Unable to load Botguard","from "+b)))},e)):a&&(e=Jc(document,"SCRIPT"),e.textContent=a,e.nonce=Da(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Vm(this,c,!!f,a,d):Fk(Error("Unable to load Botguard from JS")))};
function Vm(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{Wm(a,new d(b,e?function(){return e(b)}:Ha))}catch(h){h instanceof Error&&Fk(h)}else{try{Wm(a,new d(b))}catch(h){h instanceof Error&&Fk(h)}e&&e(b)}else Fk(Error("Failed to finish initializing VM"))}
Um.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
Um.prototype.dispose=function(){this.h=null};
function Wm(a,b){a.h=b}
;var Xm=new Um;function Ym(){return!!Xm.h}
function Zm(a){a=void 0===a?{}:a;return Xm.invoke(a)}
;function $m(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ba,this)}
v($m,L);m=$m.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.R("RECEIVING"))};
m.R=function(a,b){this.started&&!this.h&&this.connection.R(a,b)};
m.Ba=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=an(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=bn(a,c))&&this.R(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.cb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.cb=function(a,b){this.started&&!this.h&&this.connection.R(a,this.ja(a,b))};
m.ja=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.B=function(){var a=this.connection;a.h||Te(a.i,"command",this.Ba,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.B.call(this)};function cn(a,b){$m.call(this,b);this.api=a;this.start()}
v(cn,$m);cn.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
cn.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function an(a,b){switch(a){case "loadVideoById":return a=Pk(b),[a];case "cueVideoById":return a=Pk(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Qk(b),[a];case "cuePlaylist":return a=Qk(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function bn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
cn.prototype.ja=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return $m.prototype.ja.call(this,a,b)};
cn.prototype.B=function(){$m.prototype.B.call(this);delete this.api};function dn(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Ed(this,Ra(Cd,this.i))}
D(dn,L);dn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
dn.prototype.l=function(a,b){this.h||this.i.P.apply(this.i,arguments)};function en(a,b,c){dn.call(this);this.j=a;this.destination=b;this.id=c}
v(en,dn);en.prototype.R=function(a,b){this.h||this.j.R(this.destination,this.id,a,b)};
en.prototype.B=function(){this.destination=this.j=null;dn.prototype.B.call(this)};function fn(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=Ef(window,"message",this.j.bind(this));this.connection=new en(this,a,b);Ed(this,Ra(Cd,this.connection))}
v(fn,L);fn.prototype.R=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(ue(a),this.origin))};
fn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
fn.prototype.B=function(){Ff(this.i);this.destination=null;L.prototype.B.call(this)};function gn(){L.call(this);this.i=[]}
v(gn,L);gn.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ga)}L.prototype.B.call(this)};function hn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
hn.prototype.clone=function(){var a=new hn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=mb(c):a[b]=c}return a};var jn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function kn(a){a=a||"";if(window.spf){var b=a.match(jn);spf.style.load(a,b?b[1]:"",void 0)}else ln(a)}
function ln(a){var b=mn(a),c=document.getElementById(b),d=c&&Fm(c,"loaded");d||c&&!d||(c=nn(a,b,function(){Fm(c,"loaded")||(Dm(c),Pg(b),Hf(Ra(Qg,b),0))}))}
function nn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Rc(a);Tb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mn(a){var b=Jc(document,"A");Sb(b,new Eb(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function on(a,b,c,d){L.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.ga=!1;this.api={};this.U=this.m=null;this.J=new M;this.i={};this.L=this.Z=this.elementId=this.ha=this.config=null;this.K=!1;this.l=this.A=null;this.aa={};this.Ea=["onReady"];this.lastError=null;this.ra=NaN;this.C={};this.Fa=new gn(this);this.T=0;this.j=this.u=a;Ed(this,Ra(Cd,this.J));pn(this);qn(this);Ed(this,Ra(Cd,this.Fa));c?this.T=Hf(function(){e.loadNewVideoConfig(c)},0):d&&(rn(this),sn(this))}
v(on,L);m=on.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.T&&(If(this.T),this.T=0);var b=a||{};b instanceof hn||(b=new hn(b));this.config=b;this.setConfig(a);sn(this);this.isReady()&&tn(this)}};
function rn(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ha=a;this.config=un(a);rn(this);this.Z||(this.Z=vn(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Tc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Tc(Number(a)||a))};
function tn(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function wn(a){var b=!0,c=xn(a);c&&a.config&&(a=yn(a),b=Fm(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function sn(a){if(!a.h&&!a.K){var b=wn(a);if(b&&"html5"===(xn(a)?"html5":null))a.L="html5",a.isReady()||zn(a);else if(An(a),a.L="html5",b&&a.l&&a.u)a.u.appendChild(a.l),zn(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Bn(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?un(a.config):void 0;d&&d(a.u,e,a.webPlayerContextConfig);zn(a)};
a.K=!0;b?a.A():(Jm(yn(a),a.A),(b=Cn(a))&&kn(b),Dn(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function xn(a){var b=Fc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function zn(a){var b;if(!a.h){var c=xn(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!Bn(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||En(a)):a.ra=Hf(function(){zn(a)},50)}}
function En(a){pn(a);a.ga=!0;var b=xn(a);if(b){a.m=Fn(a,b,"addEventListener");a.U=Fn(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Fn(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);tn(a);a.Z&&a.Z(a.api);a.J.P("onReady",a.api)}
function Fn(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,Fk(h))}}}
function pn(a){a.ga=!1;if(a.U)for(var b in a.i)a.i.hasOwnProperty(b)&&a.U(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&If(Number(c));a.C={};a.m=null;a.U=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ha};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.ga};
function qn(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Pg("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Pg("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Pg("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=vn(this,b);d&&(0<=Xa(this.Ea,a)||this.i[a]||(b=Gn(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&Hf(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=vn(this,b))&&Te(this.J,a,b)};
function vn(a,b){var c=b;if("string"===typeof b){if(a.aa[b])return a.aa[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];(f=A(b))&&f.apply(y,e)};
a.aa[b]=c}return c?c:null}
function Gn(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=Hf(function(){if(!a.h){a.J.P(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
ib(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(xn(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function An(a){a.cancel();pn(a);a.L=null;a.config&&(a.config.loaded=!1);var b=xn(a);b&&(wn(a)||!Dn(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.u)for(a=a.u;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&Pm(yn(this),this.A);If(this.ra);this.K=!1};
m.B=function(){An(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Gk(b)}this.aa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ha=this.config=this.api=null;delete this.u;delete this.j;L.prototype.B.call(this)};
function Dn(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function yn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Cn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Bn(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===ag(d||"","&")[b]}
function un(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?mb(e):e}return b}
;var Hn={},In="player_uid_"+(1E9*Math.random()>>>0);function Jn(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Fc(d):d;var e=In+"_"+Ma(d),f=Hn[e];if(f&&c)return Kn(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new on(d,e,a,b);Hn[e]=f;Pg("player-added",f.api);Ed(f,function(){delete Hn[f.getId()]});
return f.api}
function Kn(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ln=null,Mn=null,Nn=null;function On(){var a=Ln.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Pn(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=bc(window.location.href);g&&f.push(g);g=bc(d);if(0<=Xa(f,g)||!g&&0==d.lastIndexOf("/",0))if(N("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match($b);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:rl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Zb(d).toString(36),e=e?dc(e):"",rh(b,e,k||5))}else k=b,e="ST-"+Zb(d).toString(36),k=k?dc(k):"",rh(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var p=void 0===p?"":p;var n=void 0===n?window:n;c=n.location;a=ec(a,l)+p;a=a instanceof Eb?a:Kb(a);c.href=Gb(a)}return!0}
;z("yt.setConfig",mf,void 0);z("yt.config.set",mf,void 0);z("yt.setMsg",tf,void 0);z("yt.msgs.set",tf,void 0);z("yt.logging.errors.log",Gk,void 0);
z("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}el(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);F("EXPERIMENT_FLAGS").embeds_js_api_set_1p_cookie&&(c=fg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));c=["ol"];
am("").info.actionType="embed";c&&mf("TIMING_AFT_KEYS",c);mf("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Y(d,c[d]);Y("is_nav",1);(d=rl())&&Y("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!lm()&&Y("pa",d);d=Wl();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&Y("p",c);e&&Y("t",e);Y("yt_vis",um());Y("yt_lt","cold");c=Sl();if(e=Ul())Z("srt",c.responseStart),1!==d.prerender&&(Y("yt_sts","n",void 0),Z("_start",e,void 0));d=Zl();0<d&&Z("fpt",d);if(!N("log_deltas_killswitch")){var f,
g,h,k;V&&V.timing&&(V.timeOrigin&&V.timing.navigationStart&&rm("startTimeDelta",Math.floor(V.timeOrigin)-V.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=V.getEntriesByType)||void 0===f?void 0:f.call(V,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&V.timing.responseEnd&&rm("responseEndDelta",Tl(d.responseEnd)-V.timing.responseEnd))}f=Sl();f.isPerformanceNavigationTiming&&Y("pnt",1,void 0);Z("nreqs",f.requestStart,
void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=Ul()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",
f.connectEnd,void 0));V&&V.getEntriesByType&&wm();f=[];if(document.querySelector&&V&&V.getEntriesByName)for(var l in Pl)Pl.hasOwnProperty(l)&&(g=Pl[l],vm(l,g)&&f.push(g));f.length&&Y("rc",f.join(","));if(lm(void 0)){l={actionType:fm[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:fm[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=rl())l.clientScreenNonce=f;f=Xl(void 0);dm().info(l,f)}l=Wl();g=Rl();if("cold"===l.yt_lt&&(f=nm(),h=f.gelTicks?f.gelTicks:f.gelTicks={},
f=f.gelInfos?f.gelInfos:f.gelInfos={},lm())){for(var p in g)"tick_"+p in h||mm(p,g[p]);p=pm();g=Xl();h={};for(var n in l)"info_"+n in f||!(k=om(n,l[n]))||(Dl(p,k),Dl(h,k));dm().info(h,g)}z("ytglobal.timingready_",!0,void 0);qm();(n=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in n?(n=n.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,n.serializedForcedExperimentIds||(p=fg(),p.forced_experiments&&(n.serializedForcedExperimentIds=p.forced_experiments)),Ln=Jn(a,
n,!1)):Ln=Jn(a);Ln.addEventListener("onVideoDataChange",On);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Nn=new Rk(Ln):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Mn=new fn(window.parent,a,b),Nn=new cn(Ln,Mn.connection));Sm();F("EXPERIMENT_FLAGS").networkless_logging_web_embedded&&ck()},void 0);
var Qn=pf(function(){sm();var a=th.getInstance(),b=!!((wh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Hd(document.body,"exp-invert-logo"))if(c&&!Hd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Hd(d,"inverted-hdpi")){var e=Fd(d);Gd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Hd(document.body,"inverted-hdpi")&&Id();if(b!=c){b="f"+(Math.floor(119/31)+1);d=wh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete sh[b]:(c=d.toString(16),sh[b]=c.toString());c=!0;N("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in sh)d.push(f+"="+encodeURIComponent(String(sh[f])));rh(b,d.join("&"),63072E3,a.i,c)}ym.h||(ym.h=new ym);a=ym.h;f=16623;var g=void 0===g?{}:g;Object.values(Ik).includes(f)||(Fk(new fi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.o=[];g.va?Bm(a,f,g):Cm(a,f,g)}),Rn=pf(function(){Ln&&
Ln.sendAbandonmentPing&&Ln.sendAbandonmentPing();
F("PL_ATT")&&Xm.dispose();for(var a=0,b=Qm.length;a<b;a++)Qf(Qm[a]);Qm.length=0;Om("//static.doubleclick.net/instream/ad_status.js");Rm=!1;mf("DCLKSTAT",0);Dd(Nn,Mn);Ln&&(Ln.removeEventListener("onVideoDataChange",On),Ln.destroy())});
window.addEventListener?(window.addEventListener("load",Qn),window.addEventListener("unload",Rn)):window.attachEvent&&(window.attachEvent("onload",Qn),window.attachEvent("onunload",Rn));Sa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Ym);Sa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Zm);Sa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Tm);
Sa("yt.player.exports.navigate",A("yt.player.exports.navigate")||Pn);Sa("yt.util.activity.init",A("yt.util.activity.init")||Sf);Sa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Vf);Sa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Tf);}).call(this);
