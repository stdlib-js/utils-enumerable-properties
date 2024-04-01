// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).enumerableProperties=r()}(this,(function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&o.call(e,r)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var l,f=n()?function(e){var r,t,n;if(null==e)return i.call(e);t=e[u],r=a(e,u);try{e[u]=void 0}catch(r){return i.call(e)}return n=i.call(e),r?e[u]=t:delete e[u],n}:function(e){return i.call(e)};function s(e){return"[object Arguments]"===f(e)}l=function(){return s(arguments)}();var p=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,O=String.prototype.replace,_=/e\+(\d)$/,k=/e-(\d)$/,T=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,A=/(\..*[^0])0*e/;function V(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":j(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=O.call(t,A,"$1e"),t=O.call(t,P,"e"),t=O.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=O.call(t,_,"e+0$1"),t=O.call(t,k,"e-0$1"),e.alternate&&(t=O.call(t,T,"$1."),t=O.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var N=String.fromCharCode,$=isNaN,C=Array.isArray;function B(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function L(e){var r,t,n,i,o,a,c,u,l,f,s,p,g;if(!C(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+F(g):F(g)+f)),a+=n.arg||"",c+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function W(e){var r,t,n,i;for(t=[],i=0,n=R.exec(e);n;)(r=e.slice(i,R.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=R.lastIndex,n=R.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function X(e){var r,t;if("string"!=typeof e)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[W(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return L.apply(null,r)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||D.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(e,r,t.get),a&&H&&H.call(e,r,t.set),e};var q=Z;function J(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(e){return"string"==typeof e}var Q=String.prototype.valueOf;var ee=n();function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function te(e){return K(e)||re(e)}function ne(e){return"number"==typeof e}J(te,"isPrimitive",K),J(te,"isObject",re);var ie=Number,oe=ie.prototype.toString;var ae=n();function ce(e){return"object"==typeof e&&(e instanceof ie||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function ue(e){return ne(e)||ce(e)}function le(e){return e!=e}function fe(e){return ne(e)&&le(e)}function se(e){return ce(e)&&le(e.valueOf())}function pe(e){return fe(e)||se(e)}J(ue,"isPrimitive",ne),J(ue,"isObject",ce),J(pe,"isPrimitive",fe),J(pe,"isObject",se);var ge=Number.POSITIVE_INFINITY,de=ie.NEGATIVE_INFINITY,he=Math.floor;function ye(e){return he(e)===e}function be(e){return e<ge&&e>de&&ye(e)}function ve(e){return ne(e)&&be(e)}function we(e){return ce(e)&&be(e.valueOf())}function me(e){return ve(e)||we(e)}J(me,"isPrimitive",ve),J(me,"isObject",we);var je=Object.prototype.propertyIsEnumerable;var Se=!je.call("beep","0");function Ee(e,r){var t;return null!=e&&(!(t=je.call(e,r))&&Se&&te(e)?!fe(r=+r)&&ve(r)&&r>=0&&r<e.length:t)}var Oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)};var _e=p?s:function(e){return null!==e&&"object"==typeof e&&!Oe(e)&&"number"==typeof e.length&&ye(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!Ee(e,"callee")},ke=Array.prototype.slice;function Te(e){return null!==e&&"object"==typeof e}J(Te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Oe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Te));var xe=Ee((function(){}),"prototype"),Ie=!Ee({toString:null},"toString"),Pe=9007199254740991;function Ae(e,r,t){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&ye(o.length)&&o.length>=0&&o.length<=Pe||K(e)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ve(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pe(r)){for(;i<n;i++)if(pe(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Ve=/./;function Fe(e){return"boolean"==typeof e}var Ne=Boolean,$e=Boolean.prototype.toString;var Ce=n();function Be(e){return"object"==typeof e&&(e instanceof Ne||(Ce?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function Le(e){return Fe(e)||Be(e)}J(Le,"isPrimitive",Fe),J(Le,"isObject",Be);var Re="object"==typeof self?self:null,Ge="object"==typeof window?window:null,We="object"==typeof global?global:null,Xe="object"==typeof globalThis?globalThis:null;var Ze=function(e){if(arguments.length){if(!Fe(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Xe)return Xe;if(Re)return Re;if(Ge)return Ge;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")}(),Me=Ze.document&&Ze.document.childNodes,Ye=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var He=/^\s*function\s*([^(]*)/i;function ze(e){var r,t,n,i;if(("Object"===(t=f(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=He.exec(n.toString()))return r[1]}return Te(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}J(Ue,"REGEXP",He);var De="function"==typeof Ve||"object"==typeof Ye||"function"==typeof Me?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function qe(e){return e.constructor&&e.constructor.prototype===e}var Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ke="undefined"==typeof window?void 0:window;var Qe=function(){var e;if("undefined"===De(Ke))return!1;for(e in Ke)try{-1===Ae(Je,e)&&a(Ke,e)&&null!==Ke[e]&&"object"===De(Ke[e])&&qe(Ke[e])}catch(e){return!0}return!1}(),er="undefined"!=typeof window;var rr,tr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];rr=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return _e(r)?e(ke.call(r)):e(r)}:e:function(e){var r,t,n,i,o,c,u;if(i=[],_e(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Te(e))return i;t=xe&&n}for(o in e)t&&"prototype"===o||!a(e,o)||i.push(String(o));if(Ie)for(r=function(e){if(!1===er&&!Qe)return qe(e);try{return qe(e)}catch(e){return!1}}(e),u=0;u<tr.length;u++)c=tr[u],r&&"constructor"===c||!a(e,c)||i.push(String(c));return i};var nr=rr,ir=void 0!==Object.getOwnPropertySymbols,or=Object,ar=or.getOwnPropertySymbols;var cr=ir?function(e){return ar(or(e))}:function(){return[]};return function(e){var r,t,n;for(r=nr(e),t=cr(e),n=0;n<t.length;n++)Ee(e,t[n])&&r.push(t[n]);return r}}));
//# sourceMappingURL=index.js.map
