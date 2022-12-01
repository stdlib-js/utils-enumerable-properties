// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).enumerableProperties=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c,l=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}c=function(){return a(arguments)}();var p=c,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,d=v.__defineGetter__,h=v.__defineSetter__,m=v.__lookupGetter__,j=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||j.call(t,r)?(n=t.__proto__,t.__proto__=v,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&d&&d.call(t,r,e.get),i&&h&&h.call(t,r,e.set),t};var w=y;function O(t,r,e){w(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function P(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function I(t){return _(t)||P(t)}function T(t){return"number"==typeof t}O(I,"isPrimitive",_),O(I,"isObject",P);var A=Number,N=A.prototype.toString;var k=n();function x(t){return"object"==typeof t&&(t instanceof A||(k?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function B(t){return T(t)||x(t)}function V(t){return t!=t}function F(t){return T(t)&&V(t)}function L(t){return x(t)&&V(t.valueOf())}function G(t){return F(t)||L(t)}O(B,"isPrimitive",T),O(B,"isObject",x),O(G,"isPrimitive",F),O(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=A.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<Y&&t>C&&X(t)}function W(t){return T(t)&&H(t)}function D(t){return x(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}O(R,"isPrimitive",W),O(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=U.call(t,r))&&q&&I(t)?!F(r=+r)&&W(r)&&r>=0&&r<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&i(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}O(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!J(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,r,e){var n,o;if(!rt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!W(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(G(r)){for(;o<n;o++)if(G(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var ut=Boolean.prototype.toString;var it=n();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return ot(t)||ft(t)}function lt(){return new Function("return this;")()}O(ct,"isPrimitive",ot),O(ct,"isObject",ft);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="object"==typeof global?global:null;var yt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(t){var r,e,n,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}O(gt,"REGEXP",dt);var mt="function"==typeof nt||"object"==typeof vt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ht(t).toLowerCase():r};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===mt(Ot))return!1;for(t in Ot)try{-1===et(wt,t)&&i(Ot,t)&&null!==Ot[t]&&"object"===mt(Ot[t])&&jt(Ot[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return K(r)?t(Q.call(r)):t(r)}:t:function(t){var r,e,n,o,u,f,c;if(o=[],K(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;e=$&&n}for(u in t)e&&"prototype"===u||!i(t,u)||o.push(String(u));if(tt)for(r=function(t){if(!1===St&&!_t)return jt(t);try{return jt(t)}catch(t){return!1}}(t),c=0;c<Pt.length;c++)f=Pt[c],r&&"constructor"===f||!i(t,f)||o.push(String(f));return o};var It=Et,Tt=void 0!==Object.getOwnPropertySymbols,At=Object.getOwnPropertySymbols;var Nt=Tt?function(t){return At(Object(t))}:function(){return[]};return function(t){var r,e,n;for(r=It(t),e=Nt(t),n=0;n<e.length;n++)z(t,e[n])&&r.push(e[n]);return r}}));
//# sourceMappingURL=index.js.map
