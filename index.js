// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerableProperties=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,O=String.prototype.replace,_=/e\+(\d)$/,k=/e-(\d)$/,T=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!h(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=O.call(t,A,"$1e"),t=O.call(t,P,"e"),t=O.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=O.call(t,_,"e+0$1"),t=O.call(t,k,"e-0$1"),r.alternate&&(t=O.call(t,T,"$1."),t=O.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var $=String.fromCharCode,C=Array.isArray;function N(r){return r!=r}function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,i,o,a,u,c,f,l,s,p,g;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",u+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,t,n,i;for(t=[],i=0,n=R.exec(r);n;)(e=r.slice(i,R.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),i=R.lastIndex,n=R.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return L.apply(null,e)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?d:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,e)||D.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r};var q=Z;function J(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(r){return"string"==typeof r}var Q=String.prototype.valueOf;var rr=n();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function tr(r){return K(r)||er(r)}function nr(r){return"number"==typeof r}J(tr,"isPrimitive",K),J(tr,"isObject",er);var ir=Number,or=ir.prototype.toString;var ar=n();function ur(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function cr(r){return nr(r)||ur(r)}function fr(r){return r!=r}function lr(r){return nr(r)&&fr(r)}function sr(r){return ur(r)&&fr(r.valueOf())}function pr(r){return lr(r)||sr(r)}J(cr,"isPrimitive",nr),J(cr,"isObject",ur),J(pr,"isPrimitive",lr),J(pr,"isObject",sr);var gr=Number.POSITIVE_INFINITY,dr=ir.NEGATIVE_INFINITY,hr=Math.floor;function yr(r){return hr(r)===r}function br(r){return r<gr&&r>dr&&yr(r)}function vr(r){return nr(r)&&br(r)}function wr(r){return ur(r)&&br(r.valueOf())}function mr(r){return vr(r)||wr(r)}J(mr,"isPrimitive",vr),J(mr,"isObject",wr);var jr=Object.prototype.propertyIsEnumerable;var Sr=!jr.call("beep","0");function Er(r,e){var t;return null!=r&&(!(t=jr.call(r,e))&&Sr&&tr(r)?!lr(e=+e)&&vr(e)&&e>=0&&e<r.length:t)}var Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};var _r=p?s:function(r){return null!==r&&"object"==typeof r&&!Or(r)&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Er(r,"callee")},kr=Array.prototype.slice;function Tr(r){return null!==r&&"object"==typeof r}J(Tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr));var xr=Er((function(){}),"prototype"),Ir=!Er({toString:null},"toString"),Pr=9007199254740991;function Ar(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&yr(o.length)&&o.length>=0&&o.length<=Pr||K(r)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!vr(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pr(e)){for(;i<n;i++)if(pr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Vr=/./;function Fr(r){return"boolean"==typeof r}var $r=Boolean,Cr=Boolean.prototype.toString;var Nr=n();function Br(r){return"object"==typeof r&&(r instanceof $r||(Nr?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function Lr(r){return Fr(r)||Br(r)}J(Lr,"isPrimitive",Fr),J(Lr,"isObject",Br);var Rr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Wr="object"==typeof global?global:null,Xr="object"==typeof globalThis?globalThis:null;var Zr=function(r){if(arguments.length){if(!Fr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Rr)return Rr;if(Gr)return Gr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Zr.document&&Zr.document.childNodes,Yr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n,i;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return Tr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}J(Ur,"REGEXP",Hr);var Dr="function"==typeof Vr||"object"==typeof Yr||"function"==typeof Mr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function qr(r){return r.constructor&&r.constructor.prototype===r}var Jr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kr="undefined"==typeof window?void 0:window;var Qr=function(){var r;if("undefined"===Dr(Kr))return!1;for(r in Kr)try{-1===Ar(Jr,r)&&a(Kr,r)&&null!==Kr[r]&&"object"===Dr(Kr[r])&&qr(Kr[r])}catch(r){return!0}return!1}(),re="undefined"!=typeof window;var ee,te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return _r(e)?r(kr.call(e)):r(e)}:r:function(r){var e,t,n,i,o,u,c;if(i=[],_r(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Tr(r))return i;t=xr&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if(Ir)for(e=function(r){if(!1===re&&!Qr)return qr(r);try{return qr(r)}catch(r){return!1}}(r),c=0;c<te.length;c++)u=te[c],e&&"constructor"===u||!a(r,u)||i.push(String(u));return i};var ne=ee,ie=void 0!==Object.getOwnPropertySymbols,oe=Object,ae=oe.getOwnPropertySymbols;var ue=ie?function(r){return ae(oe(r))}:function(){return[]};return function(r){var e,t,n;for(e=ne(r),t=ue(r),n=0;n<t.length;n++)Er(r,t[n])&&e.push(t[n]);return e}}));
//# sourceMappingURL=index.js.map
