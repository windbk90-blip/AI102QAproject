(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},tr={},Ja={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),uc=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),jl=Symbol.iterator;function yc(e){return e===null||typeof e!="object"?null:(e=jl&&e[jl]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qa=Object.assign,Za={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Za,this.updater=t||Ya}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ba(){}ba.prototype=ot.prototype;function Qo(e,n,t){this.props=e,this.context=n,this.refs=Za,this.updater=t||Ya}var Wo=Qo.prototype=new ba;Wo.constructor=Qo;qa(Wo,ot.prototype);Wo.isPureReactComponent=!0;var Ml=Array.isArray,es=Object.prototype.hasOwnProperty,Ko={current:null},ns={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,n,t){var i,r={},o=null,l=null;if(n!=null)for(i in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)es.call(n,i)&&!ns.hasOwnProperty(i)&&(r[i]=n[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xt,type:e,key:o,ref:l,props:r,_owner:Ko.current}}function vc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function Cc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ul=/\/+/g;function Cr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):n.toString(36)}function vi(e,n,t,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xt:case uc:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+Cr(l,0):i,Ml(r)?(t="",e!=null&&(t=e.replace(Ul,"$&/")+"/"),vi(r,n,t,"",function(u){return u})):r!=null&&($o(r)&&(r=vc(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Ul,"$&/")+"/")+e)),n.push(r)),1;if(l=0,i=i===""?".":i+":",Ml(e))for(var a=0;a<e.length;a++){o=e[a];var s=i+Cr(o,a);l+=vi(o,n,t,s,r)}else if(s=yc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=i+Cr(o,a++),l+=vi(o,n,t,s,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,n,t){if(e==null)return e;var i=[],r=0;return vi(e,i,"","",function(o){return n.call(t,o,r++)}),i}function Sc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Ci={transition:null},wc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Ko};function is(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ti,forEach:function(e,n,t){ti(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ti(e,function(){n++}),n},toArray:function(e){return ti(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=ot;T.Fragment=cc;T.Profiler=pc;T.PureComponent=Qo;T.StrictMode=dc;T.Suspense=mc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;T.act=is;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=qa({},e.props),r=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Ko.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)es.call(n,s)&&!ns.hasOwnProperty(s)&&(i[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Xt,type:e.type,key:r,ref:o,props:i,_owner:l}};T.createContext=function(e){return e={$$typeof:xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};T.createElement=ts;T.createFactory=function(e){var n=ts.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:gc,render:e}};T.isValidElement=$o;T.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:Sc}};T.memo=function(e,n){return{$$typeof:Ac,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=n}};T.unstable_act=is;T.useCallback=function(e,n){return se.current.useCallback(e,n)};T.useContext=function(e){return se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return se.current.useDeferredValue(e)};T.useEffect=function(e,n){return se.current.useEffect(e,n)};T.useId=function(){return se.current.useId()};T.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return se.current.useMemo(e,n)};T.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};T.useRef=function(e){return se.current.useRef(e)};T.useState=function(e){return se.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return se.current.useTransition()};T.version="18.3.1";Ja.exports=T;var V=Ja.exports;const Ho=sc(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=V,zc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Bc=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,n,t){var i,r={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(i in n)Dc.call(n,i)&&!Pc.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:zc,type:e,key:o,ref:l,props:r,_owner:Bc.current}}tr.Fragment=kc;tr.jsx=rs;tr.jsxs=rs;Xa.exports=tr;var f=Xa.exports,Xr={},os={exports:{}},ve={},ls={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(I,B){var E=I.length;I.push(B);e:for(;0<E;){var $=E-1>>>1,Y=I[$];if(0<r(Y,B))I[$]=B,I[E]=Y,E=$;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var B=I[0],E=I.pop();if(E!==B){I[0]=E;e:for(var $=0,Y=I.length,ei=Y>>>1;$<ei;){var An=2*($+1)-1,vr=I[An],hn=An+1,ni=I[hn];if(0>r(vr,E))hn<Y&&0>r(ni,vr)?(I[$]=ni,I[hn]=E,$=hn):(I[$]=vr,I[An]=E,$=An);else if(hn<Y&&0>r(ni,E))I[$]=ni,I[hn]=E,$=hn;else break e}}return B}function r(I,B){var E=I.sortIndex-B.sortIndex;return E!==0?E:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],g=1,m=null,x=3,v=!1,A=!1,C=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=I)i(u),B.sortIndex=B.expirationTime,n(s,B);else break;B=t(u)}}function h(I){if(C=!1,p(I),!A)if(t(s)!==null)A=!0,hr(S);else{var B=t(u);B!==null&&yr(h,B.startTime-I)}}function S(I,B){A=!1,C&&(C=!1,d(z),z=-1),v=!0;var E=x;try{for(p(B),m=t(s);m!==null&&(!(m.expirationTime>B)||I&&!ge());){var $=m.callback;if(typeof $=="function"){m.callback=null,x=m.priorityLevel;var Y=$(m.expirationTime<=B);B=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(s)&&i(s),p(B)}else i(s);m=t(s)}if(m!==null)var ei=!0;else{var An=t(u);An!==null&&yr(h,An.startTime-B),ei=!1}return ei}finally{m=null,x=E,v=!1}}var k=!1,D=null,z=-1,O=5,P=-1;function ge(){return!(e.unstable_now()-P<O)}function st(){if(D!==null){var I=e.unstable_now();P=I;var B=!0;try{B=D(!0,I)}finally{B?ut():(k=!1,D=null)}}else k=!1}var ut;if(typeof c=="function")ut=function(){c(st)};else if(typeof MessageChannel<"u"){var _l=new MessageChannel,ac=_l.port2;_l.port1.onmessage=st,ut=function(){ac.postMessage(null)}}else ut=function(){F(st,0)};function hr(I){D=I,k||(k=!0,ut())}function yr(I,B){z=F(function(){I(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){A||v||(A=!0,hr(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(I){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var E=x;x=B;try{return I()}finally{x=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var E=x;x=I;try{return B()}finally{x=E}},e.unstable_scheduleCallback=function(I,B,E){var $=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?$+E:$):E=$,I){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=E+Y,I={id:g++,callback:B,priorityLevel:I,startTime:E,expirationTime:Y,sortIndex:-1},E>$?(I.sortIndex=E,n(u,I),t(s)===null&&I===t(u)&&(C?(d(z),z=-1):C=!0,yr(h,E-$))):(I.sortIndex=Y,n(s,I),A||v||(A=!0,hr(S))),I},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(I){var B=x;return function(){var E=x;x=B;try{return I.apply(this,arguments)}finally{x=E}}}})(as);ls.exports=as;var Ec=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=V,ye=Ec;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ss=new Set,Tt={};function Tn(e,n){Zn(e,n),Zn(e+"Capture",n)}function Zn(e,n){for(Tt[e]=n,e=0;e<n.length;e++)ss.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jr=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vl={},Ql={};function Fc(e){return Jr.call(Ql,e)?!0:Jr.call(Vl,e)?!1:Lc.test(e)?Ql[e]=!0:(Vl[e]=!0,!1)}function Nc(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,n,t,i){if(n===null||typeof n>"u"||Nc(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,i,r,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Go=/[\-:]([a-z])/g;function Xo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Go,Xo);ne[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Go,Xo);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Go,Xo);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jo(e,n,t,i){var r=ne.hasOwnProperty(n)?ne[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oc(n,t,r,i)&&(t=null),i||r===null?Fc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Je=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Yr=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),cs=Symbol.for("react.context"),qo=Symbol.for("react.forward_ref"),qr=Symbol.for("react.suspense"),Zr=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),Wl=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Wl&&e[Wl]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Sr;function ht(e){if(Sr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sr=n&&n[1]||""}return`
`+Sr+e}var wr=!1;function Ir(e,n){if(!e||wr)return"";wr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var s=`
`+r[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{wr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ht(e):""}function Rc(e){switch(e.tag){case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return ht("Suspense");case 19:return ht("SuspenseList");case 0:case 2:case 15:return e=Ir(e.type,!1),e;case 11:return e=Ir(e.type.render,!1),e;case 1:return e=Ir(e.type,!0),e;default:return""}}function br(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Nn:return"Portal";case Yr:return"Profiler";case Yo:return"StrictMode";case qr:return"Suspense";case Zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case qo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return n=e.displayName||null,n!==null?n:br(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return br(e(n))}catch{}}return null}function _c(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return br(n);case 8:return n===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jc(e){var n=ps(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ri(e){e._valueTracker||(e._valueTracker=jc(e))}function fs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=ps(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Kl(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xs(e,n){n=n.checked,n!=null&&Jo(e,"checked",n,!1)}function no(e,n){xs(e,n);var t=pn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?to(e,n.type,t):n.hasOwnProperty("defaultValue")&&to(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $l(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function to(e,n,t){(n!=="number"||Li(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yt=Array.isArray;function Hn(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(yt(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function gs(e,n){var t=pn(n.value),i=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Gl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){Mc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function hs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function ys(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hs(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Uc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(e,n){if(n){if(Uc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function lo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var so=null,Gn=null,Xn=null;function Xl(e){if(e=qt(e)){if(typeof so!="function")throw Error(y(280));var n=e.stateNode;n&&(n=ar(n),so(e.stateNode,e.type,n))}}function vs(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function Cs(){if(Gn){var e=Gn,n=Xn;if(Xn=Gn=null,Xl(e),n)for(e=0;e<n.length;e++)Xl(n[e])}}function Ss(e,n){return e(n)}function ws(){}var zr=!1;function Is(e,n,t){if(zr)return e(n,t);zr=!0;try{return Ss(e,n,t)}finally{zr=!1,(Gn!==null||Xn!==null)&&(ws(),Cs())}}function Ft(e,n){var t=e.stateNode;if(t===null)return null;var i=ar(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var uo=!1;if($e)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){uo=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{uo=!1}function Vc(e,n,t,i,r,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var wt=!1,Fi=null,Ni=!1,co=null,Qc={onError:function(e){wt=!0,Fi=e}};function Wc(e,n,t,i,r,o,l,a,s){wt=!1,Fi=null,Vc.apply(Qc,arguments)}function Kc(e,n,t,i,r,o,l,a,s){if(Wc.apply(this,arguments),wt){if(wt){var u=Fi;wt=!1,Fi=null}else throw Error(y(198));Ni||(Ni=!0,co=u)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Jl(e){if(Ln(e)!==e)throw Error(y(188))}function $c(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Jl(r),e;if(o===i)return Jl(r),n;o=o.sibling}throw Error(y(188))}if(t.return!==i.return)t=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===t){l=!0,t=r,i=o;break}if(a===i){l=!0,i=r,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,i=r;break}if(a===i){l=!0,i=o,t=r;break}a=a.sibling}if(!l)throw Error(y(189))}}if(t.alternate!==i)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function ks(e){return e=$c(e),e!==null?Ds(e):null}function Ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ds(e);if(n!==null)return n;e=e.sibling}return null}var Bs=ye.unstable_scheduleCallback,Yl=ye.unstable_cancelCallback,Hc=ye.unstable_shouldYield,Gc=ye.unstable_requestPaint,H=ye.unstable_now,Xc=ye.unstable_getCurrentPriorityLevel,el=ye.unstable_ImmediatePriority,Ps=ye.unstable_UserBlockingPriority,Oi=ye.unstable_NormalPriority,Jc=ye.unstable_LowPriority,Es=ye.unstable_IdlePriority,ir=null,je=null;function Yc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ir,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:bc,qc=Math.log,Zc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(qc(e)/Zc|0)|0}var li=64,ai=4194304;function vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~r;a!==0?i=vt(a):(o&=l,o!==0&&(i=vt(o)))}else l=t&~r,l!==0?i=vt(l):o!==0&&(i=vt(o));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Le(n),r=1<<t,i|=e[t],n&=~r;return i}function ed(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Le(o),a=1<<l,s=r[l];s===-1?(!(a&t)||a&i)&&(r[l]=ed(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function kr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function td(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Le(t),o=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~o}}function nl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Le(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var N=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fs,tl,Ns,Os,Rs,fo=!1,si=[],rn=null,on=null,ln=null,Nt=new Map,Ot=new Map,be=[],id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Nt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(n.pointerId)}}function pt(e,n,t,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},n!==null&&(n=qt(n),n!==null&&tl(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function rd(e,n,t,i,r){switch(n){case"focusin":return rn=pt(rn,e,n,t,i,r),!0;case"dragenter":return on=pt(on,e,n,t,i,r),!0;case"mouseover":return ln=pt(ln,e,n,t,i,r),!0;case"pointerover":var o=r.pointerId;return Nt.set(o,pt(Nt.get(o)||null,e,n,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ot.set(o,pt(Ot.get(o)||null,e,n,t,i,r)),!0}return!1}function _s(e){var n=Cn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=zs(t),n!==null){e.blockedOn=n,Rs(e.priority,function(){Ns(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ao=i,t.target.dispatchEvent(i),ao=null}else return n=qt(t),n!==null&&tl(n),e.blockedOn=t,!1;n.shift()}return!0}function Zl(e,n,t){Si(e)&&t.delete(n)}function od(){fo=!1,rn!==null&&Si(rn)&&(rn=null),on!==null&&Si(on)&&(on=null),ln!==null&&Si(ln)&&(ln=null),Nt.forEach(Zl),Ot.forEach(Zl)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,od)))}function Rt(e){function n(r){return ft(r,e)}if(0<si.length){ft(si[0],e);for(var t=1;t<si.length;t++){var i=si[t];i.blockedOn===e&&(i.blockedOn=null)}}for(rn!==null&&ft(rn,e),on!==null&&ft(on,e),ln!==null&&ft(ln,e),Nt.forEach(n),Ot.forEach(n),t=0;t<be.length;t++)i=be[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)_s(t),t.blockedOn===null&&be.shift()}var Jn=Je.ReactCurrentBatchConfig,_i=!0;function ld(e,n,t,i){var r=N,o=Jn.transition;Jn.transition=null;try{N=1,il(e,n,t,i)}finally{N=r,Jn.transition=o}}function ad(e,n,t,i){var r=N,o=Jn.transition;Jn.transition=null;try{N=4,il(e,n,t,i)}finally{N=r,Jn.transition=o}}function il(e,n,t,i){if(_i){var r=xo(e,n,t,i);if(r===null)Rr(e,n,i,ji,t),ql(e,i);else if(rd(r,e,n,t,i))i.stopPropagation();else if(ql(e,i),n&4&&-1<id.indexOf(e)){for(;r!==null;){var o=qt(r);if(o!==null&&Fs(o),o=xo(e,n,t,i),o===null&&Rr(e,n,i,ji,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Rr(e,n,i,null,t)}}var ji=null;function xo(e,n,t,i){if(ji=null,e=bo(i),e=Cn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ji=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case el:return 1;case Ps:return 4;case Oi:case Jc:return 16;case Es:return 536870912;default:return 16}default:return 16}}var nn=null,rl=null,wi=null;function Ms(){if(wi)return wi;var e,n=rl,t=n.length,i,r="value"in nn?nn.value:nn.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(i=1;i<=l&&n[t-i]===r[o-i];i++);return wi=r.slice(e,1<i?1-i:void 0)}function Ii(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function bl(){return!1}function Ce(e){function n(t,i,r,o,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:bl,this.isPropagationStopped=bl,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Ce(lt),Yt=W({},lt,{view:0,detail:0}),sd=Ce(Yt),Dr,Br,xt,rr=W({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Dr=e.screenX-xt.screenX,Br=e.screenY-xt.screenY):Br=Dr=0,xt=e),Dr)},movementY:function(e){return"movementY"in e?e.movementY:Br}}),ea=Ce(rr),ud=W({},rr,{dataTransfer:0}),cd=Ce(ud),dd=W({},Yt,{relatedTarget:0}),Pr=Ce(dd),pd=W({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Ce(pd),xd=W({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=Ce(xd),md=W({},lt,{data:0}),na=Ce(md),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yd[e])?!!n[e]:!1}function ll(){return vd}var Cd=W({},Yt,{key:function(e){if(e.key){var n=Ad[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Ce(Cd),wd=W({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Ce(wd),Id=W({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),zd=Ce(Id),kd=W({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Ce(kd),Bd=W({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Ce(Bd),Ed=[9,13,27,32],al=$e&&"CompositionEvent"in window,It=null;$e&&"documentMode"in document&&(It=document.documentMode);var Td=$e&&"TextEvent"in window&&!It,Us=$e&&(!al||It&&8<It&&11>=It),ia=String.fromCharCode(32),ra=!1;function Vs(e,n){switch(e){case"keyup":return Ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Ld(e,n){switch(e){case"compositionend":return Qs(n);case"keypress":return n.which!==32?null:(ra=!0,ia);case"textInput":return e=n.data,e===ia&&ra?null:e;default:return null}}function Fd(e,n){if(Rn)return e==="compositionend"||!al&&Vs(e,n)?(e=Ms(),wi=rl=nn=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nd[e.type]:n==="textarea"}function Ws(e,n,t,i){vs(i),n=Mi(n,"onChange"),0<n.length&&(t=new ol("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var zt=null,_t=null;function Od(e){eu(e,0)}function or(e){var n=Mn(e);if(fs(n))return e}function Rd(e,n){if(e==="change")return n}var Ks=!1;if($e){var Er;if($e){var Tr="oninput"in document;if(!Tr){var la=document.createElement("div");la.setAttribute("oninput","return;"),Tr=typeof la.oninput=="function"}Er=Tr}else Er=!1;Ks=Er&&(!document.documentMode||9<document.documentMode)}function aa(){zt&&(zt.detachEvent("onpropertychange",$s),_t=zt=null)}function $s(e){if(e.propertyName==="value"&&or(_t)){var n=[];Ws(n,_t,e,bo(e)),Is(Od,n)}}function _d(e,n,t){e==="focusin"?(aa(),zt=n,_t=t,zt.attachEvent("onpropertychange",$s)):e==="focusout"&&aa()}function jd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(_t)}function Md(e,n){if(e==="click")return or(n)}function Ud(e,n){if(e==="input"||e==="change")return or(n)}function Vd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ne=typeof Object.is=="function"?Object.is:Vd;function jt(e,n){if(Ne(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Jr.call(n,r)||!Ne(e[r],n[r]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,n){var t=sa(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sa(t)}}function Hs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gs(){for(var e=window,n=Li();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Li(e.document)}return n}function sl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qd(e){var n=Gs(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hs(t.ownerDocument.documentElement,t)){if(i!==null&&sl(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=ua(t,o);var l=ua(t,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=$e&&"documentMode"in document&&11>=document.documentMode,_n=null,go=null,kt=null,mo=!1;function ca(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mo||_n==null||_n!==Li(i)||(i=_n,"selectionStart"in i&&sl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kt&&jt(kt,i)||(kt=i,i=Mi(go,"onSelect"),0<i.length&&(n=new ol("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=_n)))}function ci(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var jn={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Lr={},Xs={};$e&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function lr(e){if(Lr[e])return Lr[e];if(!jn[e])return e;var n=jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Xs)return Lr[e]=n[t];return e}var Js=lr("animationend"),Ys=lr("animationiteration"),qs=lr("animationstart"),Zs=lr("transitionend"),bs=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){bs.set(e,n),Tn(n,[e])}for(var Fr=0;Fr<da.length;Fr++){var Nr=da[Fr],Kd=Nr.toLowerCase(),$d=Nr[0].toUpperCase()+Nr.slice(1);xn(Kd,"on"+$d)}xn(Js,"onAnimationEnd");xn(Ys,"onAnimationIteration");xn(qs,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Zs,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function pa(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Kc(i,n,void 0,e),e.currentTarget=null}function eu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var l=i.length-1;0<=l;l--){var a=i[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&r.isPropagationStopped())break e;pa(r,a,u),o=s}else for(l=0;l<i.length;l++){if(a=i[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&r.isPropagationStopped())break e;pa(r,a,u),o=s}}}if(Ni)throw e=co,Ni=!1,co=null,e}function _(e,n){var t=n[Co];t===void 0&&(t=n[Co]=new Set);var i=e+"__bubble";t.has(i)||(nu(n,e,2,!1),t.add(i))}function Or(e,n,t){var i=0;n&&(i|=4),nu(t,e,i,n)}var di="_reactListening"+Math.random().toString(36).slice(2);function Mt(e){if(!e[di]){e[di]=!0,ss.forEach(function(t){t!=="selectionchange"&&(Hd.has(t)||Or(t,!1,e),Or(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[di]||(n[di]=!0,Or("selectionchange",!1,n))}}function nu(e,n,t,i){switch(js(n)){case 1:var r=ld;break;case 4:r=ad;break;default:r=il}t=r.bind(null,n,t,e),r=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Rr(e,n,t,i,r){var o=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;l=l.return}for(;a!==null;){if(l=Cn(a),l===null)return;if(s=l.tag,s===5||s===6){i=o=l;continue e}a=a.parentNode}}i=i.return}Is(function(){var u=o,g=bo(t),m=[];e:{var x=bs.get(e);if(x!==void 0){var v=ol,A=e;switch(e){case"keypress":if(Ii(t)===0)break e;case"keydown":case"keyup":v=Sd;break;case"focusin":A="focus",v=Pr;break;case"focusout":A="blur",v=Pr;break;case"beforeblur":case"afterblur":v=Pr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=zd;break;case Js:case Ys:case qs:v=fd;break;case Zs:v=Dd;break;case"scroll":v=sd;break;case"wheel":v=Pd;break;case"copy":case"cut":case"paste":v=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ta}var C=(n&4)!==0,F=!C&&e==="scroll",d=C?x!==null?x+"Capture":null:x;C=[];for(var c=u,p;c!==null;){p=c;var h=p.stateNode;if(p.tag===5&&h!==null&&(p=h,d!==null&&(h=Ft(c,d),h!=null&&C.push(Ut(c,h,p)))),F)break;c=c.return}0<C.length&&(x=new v(x,A,null,t,g),m.push({event:x,listeners:C}))}}if(!(n&7)){e:{if(x=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",x&&t!==ao&&(A=t.relatedTarget||t.fromElement)&&(Cn(A)||A[He]))break e;if((v||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,v?(A=t.relatedTarget||t.toElement,v=u,A=A?Cn(A):null,A!==null&&(F=Ln(A),A!==F||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=u),v!==A)){if(C=ea,h="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=ta,h="onPointerLeave",d="onPointerEnter",c="pointer"),F=v==null?x:Mn(v),p=A==null?x:Mn(A),x=new C(h,c+"leave",v,t,g),x.target=F,x.relatedTarget=p,h=null,Cn(g)===u&&(C=new C(d,c+"enter",A,t,g),C.target=p,C.relatedTarget=F,h=C),F=h,v&&A)n:{for(C=v,d=A,c=0,p=C;p;p=Fn(p))c++;for(p=0,h=d;h;h=Fn(h))p++;for(;0<c-p;)C=Fn(C),c--;for(;0<p-c;)d=Fn(d),p--;for(;c--;){if(C===d||d!==null&&C===d.alternate)break n;C=Fn(C),d=Fn(d)}C=null}else C=null;v!==null&&fa(m,x,v,C,!1),A!==null&&F!==null&&fa(m,F,A,C,!0)}}e:{if(x=u?Mn(u):window,v=x.nodeName&&x.nodeName.toLowerCase(),v==="select"||v==="input"&&x.type==="file")var S=Rd;else if(oa(x))if(Ks)S=Ud;else{S=jd;var k=_d}else(v=x.nodeName)&&v.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=Md);if(S&&(S=S(e,u))){Ws(m,S,t,g);break e}k&&k(e,x,u),e==="focusout"&&(k=x._wrapperState)&&k.controlled&&x.type==="number"&&to(x,"number",x.value)}switch(k=u?Mn(u):window,e){case"focusin":(oa(k)||k.contentEditable==="true")&&(_n=k,go=u,kt=null);break;case"focusout":kt=go=_n=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,ca(m,t,g);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":ca(m,t,g)}var D;if(al)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Rn?Vs(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Us&&t.locale!=="ko"&&(Rn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Rn&&(D=Ms()):(nn=g,rl="value"in nn?nn.value:nn.textContent,Rn=!0)),k=Mi(u,z),0<k.length&&(z=new na(z,e,null,t,g),m.push({event:z,listeners:k}),D?z.data=D:(D=Qs(t),D!==null&&(z.data=D)))),(D=Td?Ld(e,t):Fd(e,t))&&(u=Mi(u,"onBeforeInput"),0<u.length&&(g=new na("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:u}),g.data=D))}eu(m,n)})}function Ut(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mi(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ft(e,t),o!=null&&i.unshift(Ut(e,o,r)),o=Ft(e,n),o!=null&&i.push(Ut(e,o,r))),e=e.return}return i}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,n,t,i,r){for(var o=n._reactName,l=[];t!==null&&t!==i;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===i)break;a.tag===5&&u!==null&&(a=u,r?(s=Ft(t,o),s!=null&&l.unshift(Ut(t,s,a))):r||(s=Ft(t,o),s!=null&&l.push(Ut(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Gd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Xd,"")}function pi(e,n,t){if(n=xa(n),xa(e)!==n&&t)throw Error(y(425))}function Ui(){}var Ao=null,ho=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(qd)}:vo;function qd(e){setTimeout(function(){throw e})}function _r(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),Rt(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Rt(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),_e="__reactFiber$"+at,Vt="__reactProps$"+at,He="__reactContainer$"+at,Co="__reactEvents$"+at,Zd="__reactListeners$"+at,bd="__reactHandles$"+at;function Cn(e){var n=e[_e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[_e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ma(e);e!==null;){if(t=e[_e])return t;e=ma(e)}return n}e=t,t=e.parentNode}return null}function qt(e){return e=e[_e]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ar(e){return e[Vt]||null}var So=[],Un=-1;function gn(e){return{current:e}}function j(e){0>Un||(e.current=So[Un],So[Un]=null,Un--)}function R(e,n){Un++,So[Un]=e.current,e.current=n}var fn={},oe=gn(fn),pe=gn(!1),kn=fn;function bn(e,n){var t=e.type.contextTypes;if(!t)return fn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function fe(e){return e=e.childContextTypes,e!=null}function Vi(){j(pe),j(oe)}function Aa(e,n,t){if(oe.current!==fn)throw Error(y(168));R(oe,n),R(pe,t)}function tu(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(y(108,_c(e)||"Unknown",r));return W({},t,i)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,kn=oe.current,R(oe,e),R(pe,pe.current),!0}function ha(e,n,t){var i=e.stateNode;if(!i)throw Error(y(169));t?(e=tu(e,n,kn),i.__reactInternalMemoizedMergedChildContext=e,j(pe),j(oe),R(oe,e)):j(pe),R(pe,t)}var Ve=null,sr=!1,jr=!1;function iu(e){Ve===null?Ve=[e]:Ve.push(e)}function ep(e){sr=!0,iu(e)}function mn(){if(!jr&&Ve!==null){jr=!0;var e=0,n=N;try{var t=Ve;for(N=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Ve=null,sr=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(e+1)),Bs(el,mn),r}finally{N=n,jr=!1}}return null}var Vn=[],Qn=0,Wi=null,Ki=0,Se=[],we=0,Dn=null,Qe=1,We="";function yn(e,n){Vn[Qn++]=Ki,Vn[Qn++]=Wi,Wi=e,Ki=n}function ru(e,n,t){Se[we++]=Qe,Se[we++]=We,Se[we++]=Dn,Dn=e;var i=Qe;e=We;var r=32-Le(i)-1;i&=~(1<<r),t+=1;var o=32-Le(n)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Qe=1<<32-Le(n)+r|t<<r|i,We=o+e}else Qe=1<<o|t<<r|i,We=e}function ul(e){e.return!==null&&(yn(e,1),ru(e,1,0))}function cl(e){for(;e===Wi;)Wi=Vn[--Qn],Vn[Qn]=null,Ki=Vn[--Qn],Vn[Qn]=null;for(;e===Dn;)Dn=Se[--we],Se[we]=null,We=Se[--we],Se[we]=null,Qe=Se[--we],Se[we]=null}var he=null,Ae=null,M=!1,Te=null;function ou(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ya(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,he=e,Ae=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,he=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Qe,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,he=e,Ae=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(M){var n=Ae;if(n){var t=n;if(!ya(e,n)){if(wo(e))throw Error(y(418));n=an(t.nextSibling);var i=he;n&&ya(e,n)?ou(i,t):(e.flags=e.flags&-4097|2,M=!1,he=e)}}else{if(wo(e))throw Error(y(418));e.flags=e.flags&-4097|2,M=!1,he=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function fi(e){if(e!==he)return!1;if(!M)return va(e),M=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=Ae)){if(wo(e))throw lu(),Error(y(418));for(;n;)ou(e,n),n=an(n.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=he?an(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=Ae;e;)e=an(e.nextSibling)}function et(){Ae=he=null,M=!1}function dl(e){Te===null?Te=[e]:Te.push(e)}var np=Je.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var i=t.stateNode}if(!i)throw Error(y(147,e));var r=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=r.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function xi(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ca(e){var n=e._init;return n(e._payload)}function au(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function i(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function r(d,c){return d=dn(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,h){return c===null||c.tag!==6?(c=$r(p,d.mode,h),c.return=d,c):(c=r(c,p),c.return=d,c)}function s(d,c,p,h){var S=p.type;return S===On?g(d,c,p.props.children,h,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Ca(S)===c.type)?(h=r(c,p.props),h.ref=gt(d,c,p),h.return=d,h):(h=Ti(p.type,p.key,p.props,null,d.mode,h),h.ref=gt(d,c,p),h.return=d,h)}function u(d,c,p,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Hr(p,d.mode,h),c.return=d,c):(c=r(c,p.children||[]),c.return=d,c)}function g(d,c,p,h,S){return c===null||c.tag!==7?(c=zn(p,d.mode,h,S),c.return=d,c):(c=r(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$r(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return p=Ti(c.type,c.key,c.props,null,d.mode,p),p.ref=gt(d,null,c),p.return=d,p;case Nn:return c=Hr(c,d.mode,p),c.return=d,c;case qe:var h=c._init;return m(d,h(c._payload),p)}if(yt(c)||ct(c))return c=zn(c,d.mode,p,null),c.return=d,c;xi(d,c)}return null}function x(d,c,p,h){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(d,c,""+p,h);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ii:return p.key===S?s(d,c,p,h):null;case Nn:return p.key===S?u(d,c,p,h):null;case qe:return S=p._init,x(d,c,S(p._payload),h)}if(yt(p)||ct(p))return S!==null?null:g(d,c,p,h,null);xi(d,p)}return null}function v(d,c,p,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(p)||null,a(c,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ii:return d=d.get(h.key===null?p:h.key)||null,s(c,d,h,S);case Nn:return d=d.get(h.key===null?p:h.key)||null,u(c,d,h,S);case qe:var k=h._init;return v(d,c,p,k(h._payload),S)}if(yt(h)||ct(h))return d=d.get(p)||null,g(c,d,h,S,null);xi(c,h)}return null}function A(d,c,p,h){for(var S=null,k=null,D=c,z=c=0,O=null;D!==null&&z<p.length;z++){D.index>z?(O=D,D=null):O=D.sibling;var P=x(d,D,p[z],h);if(P===null){D===null&&(D=O);break}e&&D&&P.alternate===null&&n(d,D),c=o(P,c,z),k===null?S=P:k.sibling=P,k=P,D=O}if(z===p.length)return t(d,D),M&&yn(d,z),S;if(D===null){for(;z<p.length;z++)D=m(d,p[z],h),D!==null&&(c=o(D,c,z),k===null?S=D:k.sibling=D,k=D);return M&&yn(d,z),S}for(D=i(d,D);z<p.length;z++)O=v(D,d,z,p[z],h),O!==null&&(e&&O.alternate!==null&&D.delete(O.key===null?z:O.key),c=o(O,c,z),k===null?S=O:k.sibling=O,k=O);return e&&D.forEach(function(ge){return n(d,ge)}),M&&yn(d,z),S}function C(d,c,p,h){var S=ct(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var k=S=null,D=c,z=c=0,O=null,P=p.next();D!==null&&!P.done;z++,P=p.next()){D.index>z?(O=D,D=null):O=D.sibling;var ge=x(d,D,P.value,h);if(ge===null){D===null&&(D=O);break}e&&D&&ge.alternate===null&&n(d,D),c=o(ge,c,z),k===null?S=ge:k.sibling=ge,k=ge,D=O}if(P.done)return t(d,D),M&&yn(d,z),S;if(D===null){for(;!P.done;z++,P=p.next())P=m(d,P.value,h),P!==null&&(c=o(P,c,z),k===null?S=P:k.sibling=P,k=P);return M&&yn(d,z),S}for(D=i(d,D);!P.done;z++,P=p.next())P=v(D,d,z,P.value,h),P!==null&&(e&&P.alternate!==null&&D.delete(P.key===null?z:P.key),c=o(P,c,z),k===null?S=P:k.sibling=P,k=P);return e&&D.forEach(function(st){return n(d,st)}),M&&yn(d,z),S}function F(d,c,p,h){if(typeof p=="object"&&p!==null&&p.type===On&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ii:e:{for(var S=p.key,k=c;k!==null;){if(k.key===S){if(S=p.type,S===On){if(k.tag===7){t(d,k.sibling),c=r(k,p.props.children),c.return=d,d=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Ca(S)===k.type){t(d,k.sibling),c=r(k,p.props),c.ref=gt(d,k,p),c.return=d,d=c;break e}t(d,k);break}else n(d,k);k=k.sibling}p.type===On?(c=zn(p.props.children,d.mode,h,p.key),c.return=d,d=c):(h=Ti(p.type,p.key,p.props,null,d.mode,h),h.ref=gt(d,c,p),h.return=d,d=h)}return l(d);case Nn:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=r(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Hr(p,d.mode,h),c.return=d,d=c}return l(d);case qe:return k=p._init,F(d,c,k(p._payload),h)}if(yt(p))return A(d,c,p,h);if(ct(p))return C(d,c,p,h);xi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=r(c,p),c.return=d,d=c):(t(d,c),c=$r(p,d.mode,h),c.return=d,d=c),l(d)):t(d,c)}return F}var nt=au(!0),su=au(!1),$i=gn(null),Hi=null,Wn=null,pl=null;function fl(){pl=Wn=Hi=null}function xl(e){var n=$i.current;j($i),e._currentValue=n}function zo(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Hi=e,pl=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function ke(e){var n=e._currentValue;if(pl!==e)if(e={context:e,memoizedValue:n,next:null},Wn===null){if(Hi===null)throw Error(y(308));Wn=e,Hi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return n}var Sn=null;function gl(e){Sn===null?Sn=[e]:Sn.push(e)}function uu(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,gl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ge(e,i)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Ge(e,t)}return r=i.interleaved,r===null?(n.next=n,gl(i)):(n.next=r.next,r.next=n),i.interleaved=n,Ge(e,t)}function zi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,nl(e,t)}}function Sa(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gi(e,n,t,i){var r=e.updateQueue;Ze=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(o!==null){var m=r.baseState;l=0,g=u=s=null,a=o;do{var x=a.lane,v=a.eventTime;if((i&x)===x){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=e,C=a;switch(x=n,v=t,C.tag){case 1:if(A=C.payload,typeof A=="function"){m=A.call(v,m,x);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,x=typeof A=="function"?A.call(v,m,x):A,x==null)break e;m=W({},m,x);break e;case 2:Ze=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=r.effects,x===null?r.effects=[a]:x.push(a))}else v={eventTime:v,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=v,s=m):g=g.next=v,l|=x;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;x=a,a=x.next,x.next=null,r.lastBaseUpdate=x,r.shared.pending=null}}while(1);if(g===null&&(s=m),r.baseState=s,r.firstBaseUpdate=u,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=m}}function wa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(y(191,r));r.call(i)}}}var Zt={},Me=gn(Zt),Qt=gn(Zt),Wt=gn(Zt);function wn(e){if(e===Zt)throw Error(y(174));return e}function Al(e,n){switch(R(Wt,n),R(Qt,e),R(Me,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}j(Me),R(Me,n)}function tt(){j(Me),j(Qt),j(Wt)}function du(e){wn(Wt.current);var n=wn(Me.current),t=ro(n,e.type);n!==t&&(R(Qt,e),R(Me,t))}function hl(e){Qt.current===e&&(j(Me),j(Qt))}var U=gn(0);function Xi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Mr=[];function yl(){for(var e=0;e<Mr.length;e++)Mr[e]._workInProgressVersionPrimary=null;Mr.length=0}var ki=Je.ReactCurrentDispatcher,Ur=Je.ReactCurrentBatchConfig,Bn=0,Q=null,X=null,q=null,Ji=!1,Dt=!1,Kt=0,tp=0;function te(){throw Error(y(321))}function vl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ne(e[t],n[t]))return!1;return!0}function Cl(e,n,t,i,r,o){if(Bn=o,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ki.current=e===null||e.memoizedState===null?lp:ap,e=t(i,r),Dt){o=0;do{if(Dt=!1,Kt=0,25<=o)throw Error(y(301));o+=1,q=X=null,n.updateQueue=null,ki.current=sp,e=t(i,r)}while(Dt)}if(ki.current=Yi,n=X!==null&&X.next!==null,Bn=0,q=X=Q=null,Ji=!1,n)throw Error(y(300));return e}function Sl(){var e=Kt!==0;return Kt=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?Q.memoizedState=q=e:q=q.next=e,q}function De(){if(X===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?Q.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?Q.memoizedState=q=e:q=q.next=e}return q}function $t(e,n){return typeof n=="function"?n(e):n}function Vr(e){var n=De(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var i=X,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,s=null,u=o;do{var g=u.lane;if((Bn&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var m={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=i):s=s.next=m,Q.lanes|=g,Pn|=g}u=u.next}while(u!==null&&u!==o);s===null?l=i:s.next=a,Ne(i,n.memoizedState)||(de=!0),n.memoizedState=i,n.baseState=l,n.baseQueue=s,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do o=r.lane,Q.lanes|=o,Pn|=o,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qr(e){var n=De(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do o=e(o,l.action),l=l.next;while(l!==r);Ne(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function pu(){}function fu(e,n){var t=Q,i=De(),r=n(),o=!Ne(i.memoizedState,r);if(o&&(i.memoizedState=r,de=!0),i=i.queue,wl(mu.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,Ht(9,gu.bind(null,t,i,r,n),void 0,null),Z===null)throw Error(y(349));Bn&30||xu(t,n,r)}return r}function xu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gu(e,n,t,i){n.value=t,n.getSnapshot=i,Au(n)&&hu(e)}function mu(e,n,t){return t(function(){Au(n)&&hu(e)})}function Au(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ne(e,t)}catch{return!0}}function hu(e){var n=Ge(e,1);n!==null&&Fe(n,e,1,-1)}function Ia(e){var n=Re();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},n.queue=e,e=e.dispatch=op.bind(null,Q,e),[n.memoizedState,e]}function Ht(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function yu(){return De().memoizedState}function Di(e,n,t,i){var r=Re();Q.flags|=e,r.memoizedState=Ht(1|n,t,void 0,i===void 0?null:i)}function ur(e,n,t,i){var r=De();i=i===void 0?null:i;var o=void 0;if(X!==null){var l=X.memoizedState;if(o=l.destroy,i!==null&&vl(i,l.deps)){r.memoizedState=Ht(n,t,o,i);return}}Q.flags|=e,r.memoizedState=Ht(1|n,t,o,i)}function za(e,n){return Di(8390656,8,e,n)}function wl(e,n){return ur(2048,8,e,n)}function vu(e,n){return ur(4,2,e,n)}function Cu(e,n){return ur(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,ur(4,4,Su.bind(null,n,e),t)}function Il(){}function Iu(e,n){var t=De();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&vl(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function zu(e,n){var t=De();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&vl(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function ku(e,n,t){return Bn&21?(Ne(t,n)||(t=Ts(),Q.lanes|=t,Pn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function ip(e,n){var t=N;N=t!==0&&4>t?t:4,e(!0);var i=Ur.transition;Ur.transition={};try{e(!1),n()}finally{N=t,Ur.transition=i}}function Du(){return De().memoizedState}function rp(e,n,t){var i=cn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Bu(e))Pu(n,t);else if(t=uu(e,n,t,i),t!==null){var r=ae();Fe(t,e,i,r),Eu(t,n,i)}}function op(e,n,t){var i=cn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Pu(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(r.hasEagerState=!0,r.eagerState=a,Ne(a,l)){var s=n.interleaved;s===null?(r.next=r,gl(n)):(r.next=s.next,s.next=r),n.interleaved=r;return}}catch{}finally{}t=uu(e,n,r,i),t!==null&&(r=ae(),Fe(t,e,i,r),Eu(t,n,i))}}function Bu(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Pu(e,n){Dt=Ji=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Eu(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,nl(e,t)}}var Yi={readContext:ke,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},lp={readContext:ke,useCallback:function(e,n){return Re().memoizedState=[e,n===void 0?null:n],e},useContext:ke,useEffect:za,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Di(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Di(4194308,4,e,n)},useInsertionEffect:function(e,n){return Di(4,2,e,n)},useMemo:function(e,n){var t=Re();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Re();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=rp.bind(null,Q,e),[i.memoizedState,e]},useRef:function(e){var n=Re();return e={current:e},n.memoizedState=e},useState:Ia,useDebugValue:Il,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Ia(!1),n=e[0];return e=ip.bind(null,e[1]),Re().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=Q,r=Re();if(M){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),Z===null)throw Error(y(349));Bn&30||xu(i,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,za(mu.bind(null,i,o,e),[e]),i.flags|=2048,Ht(9,gu.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=Re(),n=Z.identifierPrefix;if(M){var t=We,i=Qe;t=(i&~(1<<32-Le(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ap={readContext:ke,useCallback:Iu,useContext:ke,useEffect:wl,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:Cu,useMemo:zu,useReducer:Vr,useRef:yu,useState:function(){return Vr($t)},useDebugValue:Il,useDeferredValue:function(e){var n=De();return ku(n,X.memoizedState,e)},useTransition:function(){var e=Vr($t)[0],n=De().memoizedState;return[e,n]},useMutableSource:pu,useSyncExternalStore:fu,useId:Du,unstable_isNewReconciler:!1},sp={readContext:ke,useCallback:Iu,useContext:ke,useEffect:wl,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:Cu,useMemo:zu,useReducer:Qr,useRef:yu,useState:function(){return Qr($t)},useDebugValue:Il,useDeferredValue:function(e){var n=De();return X===null?n.memoizedState=e:ku(n,X.memoizedState,e)},useTransition:function(){var e=Qr($t)[0],n=De().memoizedState;return[e,n]},useMutableSource:pu,useSyncExternalStore:fu,useId:Du,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ko(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cr={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ae(),r=cn(e),o=Ke(i,r);o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,r),n!==null&&(Fe(n,e,r,i),zi(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ae(),r=cn(e),o=Ke(i,r);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,r),n!==null&&(Fe(n,e,r,i),zi(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),i=cn(e),r=Ke(t,i);r.tag=2,n!=null&&(r.callback=n),n=sn(e,r,i),n!==null&&(Fe(n,e,i,t),zi(n,e,i))}};function ka(e,n,t,i,r,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,l):n.prototype&&n.prototype.isPureReactComponent?!jt(t,i)||!jt(r,o):!0}function Tu(e,n,t){var i=!1,r=fn,o=n.contextType;return typeof o=="object"&&o!==null?o=ke(o):(r=fe(n)?kn:oe.current,i=n.contextTypes,o=(i=i!=null)?bn(e,r):fn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function Da(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&cr.enqueueReplaceState(n,n.state,null)}function Do(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ml(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=ke(o):(o=fe(n)?kn:oe.current,r.context=bn(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ko(e,n,o,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&cr.enqueueReplaceState(r,r.state,null),Gi(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,n){try{var t="",i=n;do t+=Rc(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function Wr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){Zi||(Zi=!0,jo=i),Bo(e,n)},t}function Fu(e,n,t){t=Ke(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){Bo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Bo(e,n),typeof i!="function"&&(un===null?un=new Set([this]):un.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ba(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new up;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=wp.bind(null,e,n,t),n.then(e,e))}function Pa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ea(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var cp=Je.ReactCurrentOwner,de=!1;function le(e,n,t,i){n.child=e===null?su(n,null,t,i):nt(n,e.child,t,i)}function Ta(e,n,t,i,r){t=t.render;var o=n.ref;return Yn(n,r),i=Cl(e,n,t,i,o,r),t=Sl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(M&&t&&ul(n),n.flags|=1,le(e,n,i,r),n.child)}function La(e,n,t,i,r){if(e===null){var o=t.type;return typeof o=="function"&&!Ll(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Nu(e,n,o,i,r)):(e=Ti(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:jt,t(l,i)&&e.ref===n.ref)return Xe(e,n,r)}return n.flags|=1,e=dn(o,i),e.ref=n.ref,e.return=n,n.child=e}function Nu(e,n,t,i,r){if(e!==null){var o=e.memoizedProps;if(jt(o,i)&&e.ref===n.ref)if(de=!1,n.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Xe(e,n,r)}return Po(e,n,t,i,r)}function Ou(e,n,t){var i=n.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R($n,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R($n,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,R($n,me),me|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,R($n,me),me|=i;return le(e,n,r,t),n.child}function Ru(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Po(e,n,t,i,r){var o=fe(t)?kn:oe.current;return o=bn(n,o),Yn(n,r),t=Cl(e,n,t,i,o,r),i=Sl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(M&&i&&ul(n),n.flags|=1,le(e,n,t,r),n.child)}function Fa(e,n,t,i,r){if(fe(t)){var o=!0;Qi(n)}else o=!1;if(Yn(n,r),n.stateNode===null)Bi(e,n),Tu(n,t,i),Do(n,t,i,r),i=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=ke(u):(u=fe(t)?kn:oe.current,u=bn(n,u));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||s!==u)&&Da(n,l,i,u),Ze=!1;var x=n.memoizedState;l.state=x,Gi(n,i,l,r),s=n.memoizedState,a!==i||x!==s||pe.current||Ze?(typeof g=="function"&&(ko(n,t,g,i),s=n.memoizedState),(a=Ze||ka(n,t,a,i,x,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=s),l.props=i,l.state=s,l.context=u,i=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{l=n.stateNode,cu(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Pe(n.type,a),l.props=u,m=n.pendingProps,x=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=fe(t)?kn:oe.current,s=bn(n,s));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||x!==s)&&Da(n,l,i,s),Ze=!1,x=n.memoizedState,l.state=x,Gi(n,i,l,r);var A=n.memoizedState;a!==m||x!==A||pe.current||Ze?(typeof v=="function"&&(ko(n,t,v,i),A=n.memoizedState),(u=Ze||ka(n,t,u,i,x,A,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,A,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,A,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=A),l.props=i,l.state=A,l.context=s,i=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),i=!1)}return Eo(e,n,t,i,o,r)}function Eo(e,n,t,i,r,o){Ru(e,n);var l=(n.flags&128)!==0;if(!i&&!l)return r&&ha(n,t,!1),Xe(e,n,o);i=n.stateNode,cp.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&l?(n.child=nt(n,e.child,null,o),n.child=nt(n,null,a,o)):le(e,n,a,o),n.memoizedState=i.state,r&&ha(n,t,!0),n.child}function _u(e){var n=e.stateNode;n.pendingContext?Aa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Aa(e,n.context,!1),Al(e,n.containerInfo)}function Na(e,n,t,i,r){return et(),dl(r),n.flags|=256,le(e,n,t,i),n.child}var To={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ju(e,n,t){var i=n.pendingProps,r=U.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),R(U,r&1),e===null)return Io(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=i.children,e=i.fallback,o?(i=n.mode,o=n.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=fr(l,i,0,null),e=zn(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Lo(t),n.memoizedState=To,e):zl(n,l));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return dp(e,n,l,i,a,r,t);if(o){o=i.fallback,l=n.mode,r=e.child,a=r.sibling;var s={mode:"hidden",children:i.children};return!(l&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=s,n.deletions=null):(i=dn(r,s),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=zn(o,l,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,l=e.child.memoizedState,l=l===null?Lo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=To,i}return o=e.child,e=o.sibling,i=dn(o,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function zl(e,n){return n=fr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function gi(e,n,t,i){return i!==null&&dl(i),nt(n,e.child,null,t),e=zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dp(e,n,t,i,r,o,l){if(t)return n.flags&256?(n.flags&=-257,i=Wr(Error(y(422))),gi(e,n,l,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,r=n.mode,i=fr({mode:"visible",children:i.children},r,0,null),o=zn(o,r,l,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,n.mode&1&&nt(n,e.child,null,l),n.child.memoizedState=Lo(l),n.memoizedState=To,o);if(!(n.mode&1))return gi(e,n,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(y(419)),i=Wr(o,i,void 0),gi(e,n,l,i)}if(a=(l&e.childLanes)!==0,de||a){if(i=Z,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ge(e,r),Fe(i,e,r,-1))}return Tl(),i=Wr(Error(y(421))),gi(e,n,l,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Ip.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,Ae=an(r.nextSibling),he=n,M=!0,Te=null,e!==null&&(Se[we++]=Qe,Se[we++]=We,Se[we++]=Dn,Qe=e.id,We=e.overflow,Dn=n),n=zl(n,i.children),n.flags|=4096,n)}function Oa(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),zo(e.return,n,t)}function Kr(e,n,t,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function Mu(e,n,t){var i=n.pendingProps,r=i.revealOrder,o=i.tail;if(le(e,n,i.children,t),i=U.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,t,n);else if(e.tag===19)Oa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(R(U,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Xi(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Kr(n,!1,r,t,o);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Xi(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Kr(n,!0,t,null,o);break;case"together":Kr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pp(e,n,t){switch(n.tag){case 3:_u(n),et();break;case 5:du(n);break;case 1:fe(n.type)&&Qi(n);break;case 4:Al(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;R($i,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(R(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?ju(e,n,t):(R(U,U.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Mu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),R(U,U.current),i)break;return null;case 22:case 23:return n.lanes=0,Ou(e,n,t)}return Xe(e,n,t)}var Uu,Fo,Vu,Qu;Uu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fo=function(){};Vu=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,wn(Me.current);var o=null;switch(t){case"input":r=eo(e,r),i=eo(e,i),o=[];break;case"select":r=W({},r,{value:void 0}),i=W({},i,{value:void 0}),o=[];break;case"textarea":r=io(e,r),i=io(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ui)}oo(t,i);var l;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tt.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var s=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&_("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Qu=function(e,n,t,i){t!==i&&(n.flags|=4)};function mt(e,n){if(!M)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function fp(e,n,t){var i=n.pendingProps;switch(cl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return fe(n.type)&&Vi(),ie(n),null;case 3:return i=n.stateNode,tt(),j(pe),j(oe),yl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(fi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Te!==null&&(Vo(Te),Te=null))),Fo(e,n),ie(n),null;case 5:hl(n);var r=wn(Wt.current);if(t=n.type,e!==null&&n.stateNode!=null)Vu(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(y(166));return ie(n),null}if(e=wn(Me.current),fi(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[_e]=n,i[Vt]=o,e=(n.mode&1)!==0,t){case"dialog":_("cancel",i),_("close",i);break;case"iframe":case"object":case"embed":_("load",i);break;case"video":case"audio":for(r=0;r<Ct.length;r++)_(Ct[r],i);break;case"source":_("error",i);break;case"img":case"image":case"link":_("error",i),_("load",i);break;case"details":_("toggle",i);break;case"input":Kl(i,o),_("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},_("invalid",i);break;case"textarea":Hl(i,o),_("invalid",i)}oo(t,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&pi(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pi(i.textContent,a,e),r=["children",""+a]):Tt.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&_("scroll",i)}switch(t){case"input":ri(i),$l(i,o,!0);break;case"textarea":ri(i),Gl(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ui)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(t,{is:i.is}):(e=l.createElement(t),t==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,t),e[_e]=n,e[Vt]=i,Uu(e,n,!1,!1),n.stateNode=e;e:{switch(l=lo(t,i),t){case"dialog":_("cancel",e),_("close",e),r=i;break;case"iframe":case"object":case"embed":_("load",e),r=i;break;case"video":case"audio":for(r=0;r<Ct.length;r++)_(Ct[r],e);r=i;break;case"source":_("error",e),r=i;break;case"img":case"image":case"link":_("error",e),_("load",e),r=i;break;case"details":_("toggle",e),r=i;break;case"input":Kl(e,i),r=eo(e,i),_("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=W({},i,{value:void 0}),_("invalid",e);break;case"textarea":Hl(e,i),r=io(e,i),_("invalid",e);break;default:r=i}oo(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ys(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&As(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Lt(e,s):typeof s=="number"&&Lt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&_("scroll",e):s!=null&&Jo(e,o,s,l))}switch(t){case"input":ri(e),$l(e,i,!1);break;case"textarea":ri(e),Gl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Hn(e,!!i.multiple,o,!1):i.defaultValue!=null&&Hn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ui)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Qu(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(y(166));if(t=wn(Wt.current),wn(Me.current),fi(n)){if(i=n.stateNode,t=n.memoizedProps,i[_e]=n,(o=i.nodeValue!==t)&&(e=he,e!==null))switch(e.tag){case 3:pi(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[_e]=n,n.stateNode=i}return ie(n),null;case 13:if(j(U),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&Ae!==null&&n.mode&1&&!(n.flags&128))lu(),et(),n.flags|=98560,o=!1;else if(o=fi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[_e]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else Te!==null&&(Vo(Te),Te=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):Tl())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return tt(),Fo(e,n),e===null&&Mt(n.stateNode.containerInfo),ie(n),null;case 10:return xl(n.type._context),ie(n),null;case 17:return fe(n.type)&&Vi(),ie(n),null;case 19:if(j(U),o=n.memoizedState,o===null)return ie(n),null;if(i=(n.flags&128)!==0,l=o.rendering,l===null)if(i)mt(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Xi(e),l!==null){for(n.flags|=128,mt(o,!1),i=l.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&H()>rt&&(n.flags|=128,i=!0,mt(o,!1),n.lanes=4194304)}else{if(!i)if(e=Xi(l),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!M)return ie(n),null}else 2*H()-o.renderingStartTime>rt&&t!==1073741824&&(n.flags|=128,i=!0,mt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=H(),n.sibling=null,t=U.current,R(U,i?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return El(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function xp(e,n){switch(cl(n),n.tag){case 1:return fe(n.type)&&Vi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),j(pe),j(oe),yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hl(n),null;case 13:if(j(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(U),null;case 4:return tt(),null;case 10:return xl(n.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var mi=!1,re=!1,gp=typeof WeakSet=="function"?WeakSet:Set,w=null;function Kn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){K(e,n,i)}else t.current=null}function No(e,n,t){try{t()}catch(i){K(e,n,i)}}var Ra=!1;function mp(e,n){if(Ao=_i,e=Gs(),sl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,u=0,g=0,m=e,x=null;n:for(;;){for(var v;m!==t||r!==0&&m.nodeType!==3||(a=l+r),m!==o||i!==0&&m.nodeType!==3||(s=l+i),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)x=m,m=v;for(;;){if(m===e)break n;if(x===t&&++u===r&&(a=l),x===o&&++g===i&&(s=l),(v=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ho={focusedElem:e,selectionRange:t},_i=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var A=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,F=A.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?C:Pe(n.type,C),F);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(h){K(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return A=Ra,Ra=!1,A}function Bt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&No(n,t,o)}r=r.next}while(r!==i)}}function dr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Oo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wu(e){var n=e.alternate;n!==null&&(e.alternate=null,Wu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_e],delete n[Vt],delete n[Co],delete n[Zd],delete n[bd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function _a(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ui));else if(i!==4&&(e=e.child,e!==null))for(Ro(e,n,t),e=e.sibling;e!==null;)Ro(e,n,t),e=e.sibling}function _o(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(_o(e,n,t),e=e.sibling;e!==null;)_o(e,n,t),e=e.sibling}var b=null,Ee=!1;function Ye(e,n,t){for(t=t.child;t!==null;)$u(e,n,t),t=t.sibling}function $u(e,n,t){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ir,t)}catch{}switch(t.tag){case 5:re||Kn(t,n);case 6:var i=b,r=Ee;b=null,Ye(e,n,t),b=i,Ee=r,b!==null&&(Ee?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(Ee?(e=b,t=t.stateNode,e.nodeType===8?_r(e.parentNode,t):e.nodeType===1&&_r(e,t),Rt(e)):_r(b,t.stateNode));break;case 4:i=b,r=Ee,b=t.stateNode.containerInfo,Ee=!0,Ye(e,n,t),b=i,Ee=r;break;case 0:case 11:case 14:case 15:if(!re&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&No(t,n,l),r=r.next}while(r!==i)}Ye(e,n,t);break;case 1:if(!re&&(Kn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){K(t,n,a)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(i=re)||t.memoizedState!==null,Ye(e,n,t),re=i):Ye(e,n,t);break;default:Ye(e,n,t)}}function ja(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gp),n.forEach(function(i){var r=zp.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:b=a.stateNode,Ee=!1;break e;case 3:b=a.stateNode.containerInfo,Ee=!0;break e;case 4:b=a.stateNode.containerInfo,Ee=!0;break e}a=a.return}if(b===null)throw Error(y(160));$u(o,l,r),b=null,Ee=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(u){K(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hu(n,e),n=n.sibling}function Hu(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Oe(e),i&4){try{Bt(3,e,e.return),dr(3,e)}catch(C){K(e,e.return,C)}try{Bt(5,e,e.return)}catch(C){K(e,e.return,C)}}break;case 1:Be(n,e),Oe(e),i&512&&t!==null&&Kn(t,t.return);break;case 5:if(Be(n,e),Oe(e),i&512&&t!==null&&Kn(t,t.return),e.flags&32){var r=e.stateNode;try{Lt(r,"")}catch(C){K(e,e.return,C)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xs(r,o),lo(a,l);var u=lo(a,o);for(l=0;l<s.length;l+=2){var g=s[l],m=s[l+1];g==="style"?ys(r,m):g==="dangerouslySetInnerHTML"?As(r,m):g==="children"?Lt(r,m):Jo(r,g,m,u)}switch(a){case"input":no(r,o);break;case"textarea":gs(r,o);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Hn(r,!!o.multiple,v,!1):x!==!!o.multiple&&(o.defaultValue!=null?Hn(r,!!o.multiple,o.defaultValue,!0):Hn(r,!!o.multiple,o.multiple?[]:"",!1))}r[Vt]=o}catch(C){K(e,e.return,C)}}break;case 6:if(Be(n,e),Oe(e),i&4){if(e.stateNode===null)throw Error(y(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(C){K(e,e.return,C)}}break;case 3:if(Be(n,e),Oe(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Rt(n.containerInfo)}catch(C){K(e,e.return,C)}break;case 4:Be(n,e),Oe(e);break;case 13:Be(n,e),Oe(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Bl=H())),i&4&&ja(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(re=(u=re)||g,Be(n,e),re=u):Be(n,e),Oe(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(w=e,g=e.child;g!==null;){for(m=w=g;w!==null;){switch(x=w,v=x.child,x.tag){case 0:case 11:case 14:case 15:Bt(4,x,x.return);break;case 1:Kn(x,x.return);var A=x.stateNode;if(typeof A.componentWillUnmount=="function"){i=x,t=x.return;try{n=i,A.props=n.memoizedProps,A.state=n.memoizedState,A.componentWillUnmount()}catch(C){K(i,t,C)}}break;case 5:Kn(x,x.return);break;case 22:if(x.memoizedState!==null){Ua(m);continue}}v!==null?(v.return=x,w=v):Ua(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{r=m.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=hs("display",l))}catch(C){K(e,e.return,C)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(C){K(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(n,e),Oe(e),i&4&&ja(e);break;case 21:break;default:Be(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ku(t)){var i=t;break e}t=t.return}throw Error(y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lt(r,""),i.flags&=-33);var o=_a(e);_o(e,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=_a(e);Ro(e,a,l);break;default:throw Error(y(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ap(e,n,t){w=e,Gu(e)}function Gu(e,n,t){for(var i=(e.mode&1)!==0;w!==null;){var r=w,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||mi;if(!l){var a=r.alternate,s=a!==null&&a.memoizedState!==null||re;a=mi;var u=re;if(mi=l,(re=s)&&!u)for(w=r;w!==null;)l=w,s=l.child,l.tag===22&&l.memoizedState!==null?Va(r):s!==null?(s.return=l,w=s):Va(r);for(;o!==null;)w=o,Gu(o),o=o.sibling;w=r,mi=a,re=u}Ma(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,w=o):Ma(e)}}function Ma(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||dr(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!re)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&wa(n,o,i);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wa(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Rt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||n.flags&512&&Oo(n)}catch(x){K(n,n.return,x)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function Ua(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function Va(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{dr(4,n)}catch(s){K(n,t,s)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(s){K(n,r,s)}}var o=n.return;try{Oo(n)}catch(s){K(n,o,s)}break;case 5:var l=n.return;try{Oo(n)}catch(s){K(n,l,s)}}}catch(s){K(n,n.return,s)}if(n===e){w=null;break}var a=n.sibling;if(a!==null){a.return=n.return,w=a;break}w=n.return}}var hp=Math.ceil,qi=Je.ReactCurrentDispatcher,kl=Je.ReactCurrentOwner,ze=Je.ReactCurrentBatchConfig,L=0,Z=null,G=null,ee=0,me=0,$n=gn(0),J=0,Gt=null,Pn=0,pr=0,Dl=0,Pt=null,ce=null,Bl=0,rt=1/0,Ue=null,Zi=!1,jo=null,un=null,Ai=!1,tn=null,bi=0,Et=0,Mo=null,Pi=-1,Ei=0;function ae(){return L&6?H():Pi!==-1?Pi:Pi=H()}function cn(e){return e.mode&1?L&2&&ee!==0?ee&-ee:np.transition!==null?(Ei===0&&(Ei=Ts()),Ei):(e=N,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e):1}function Fe(e,n,t,i){if(50<Et)throw Et=0,Mo=null,Error(y(185));Jt(e,t,i),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(pr|=t),J===4&&en(e,ee)),xe(e,i),t===1&&L===0&&!(n.mode&1)&&(rt=H()+500,sr&&mn()))}function xe(e,n){var t=e.callbackNode;nd(e,n);var i=Ri(e,e===Z?ee:0);if(i===0)t!==null&&Yl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Yl(t),n===1)e.tag===0?ep(Qa.bind(null,e)):iu(Qa.bind(null,e)),Yd(function(){!(L&6)&&mn()}),t=null;else{switch(Ls(i)){case 1:t=el;break;case 4:t=Ps;break;case 16:t=Oi;break;case 536870912:t=Es;break;default:t=Oi}t=nc(t,Xu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Xu(e,n){if(Pi=-1,Ei=0,L&6)throw Error(y(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var i=Ri(e,e===Z?ee:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=er(e,i);else{n=i;var r=L;L|=2;var o=Yu();(Z!==e||ee!==n)&&(Ue=null,rt=H()+500,In(e,n));do try{Cp();break}catch(a){Ju(e,a)}while(1);fl(),qi.current=o,L=r,G!==null?n=0:(Z=null,ee=0,n=J)}if(n!==0){if(n===2&&(r=po(e),r!==0&&(i=r,n=Uo(e,r))),n===1)throw t=Gt,In(e,0),en(e,i),xe(e,H()),t;if(n===6)en(e,i);else{if(r=e.current.alternate,!(i&30)&&!yp(r)&&(n=er(e,i),n===2&&(o=po(e),o!==0&&(i=o,n=Uo(e,o))),n===1))throw t=Gt,In(e,0),en(e,i),xe(e,H()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(y(345));case 2:vn(e,ce,Ue);break;case 3:if(en(e,i),(i&130023424)===i&&(n=Bl+500-H(),10<n)){if(Ri(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=vo(vn.bind(null,e,ce,Ue),n);break}vn(e,ce,Ue);break;case 4:if(en(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var l=31-Le(i);o=1<<l,l=n[l],l>r&&(r=l),i&=~o}if(i=r,i=H()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hp(i/1960))-i,10<i){e.timeoutHandle=vo(vn.bind(null,e,ce,Ue),i);break}vn(e,ce,Ue);break;case 5:vn(e,ce,Ue);break;default:throw Error(y(329))}}}return xe(e,H()),e.callbackNode===t?Xu.bind(null,e):null}function Uo(e,n){var t=Pt;return e.current.memoizedState.isDehydrated&&(In(e,n).flags|=256),e=er(e,n),e!==2&&(n=ce,ce=t,n!==null&&Vo(n)),e}function Vo(e){ce===null?ce=e:ce.push.apply(ce,e)}function yp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Ne(o(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Dl,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),i=1<<t;e[t]=-1,n&=~i}}function Qa(e){if(L&6)throw Error(y(327));qn();var n=Ri(e,0);if(!(n&1))return xe(e,H()),null;var t=er(e,n);if(e.tag!==0&&t===2){var i=po(e);i!==0&&(n=i,t=Uo(e,i))}if(t===1)throw t=Gt,In(e,0),en(e,n),xe(e,H()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vn(e,ce,Ue),xe(e,H()),null}function Pl(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(rt=H()+500,sr&&mn())}}function En(e){tn!==null&&tn.tag===0&&!(L&6)&&qn();var n=L;L|=1;var t=ze.transition,i=N;try{if(ze.transition=null,N=1,e)return e()}finally{N=i,ze.transition=t,L=n,!(L&6)&&mn()}}function El(){me=$n.current,j($n)}function In(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jd(t)),G!==null)for(t=G.return;t!==null;){var i=t;switch(cl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vi();break;case 3:tt(),j(pe),j(oe),yl();break;case 5:hl(i);break;case 4:tt();break;case 13:j(U);break;case 19:j(U);break;case 10:xl(i.type._context);break;case 22:case 23:El()}t=t.return}if(Z=e,G=e=dn(e.current,null),ee=me=n,J=0,Gt=null,Dl=pr=Pn=0,ce=Pt=null,Sn!==null){for(n=0;n<Sn.length;n++)if(t=Sn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}t.pending=i}Sn=null}return e}function Ju(e,n){do{var t=G;try{if(fl(),ki.current=Yi,Ji){for(var i=Q.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ji=!1}if(Bn=0,q=X=Q=null,Dt=!1,Kt=0,kl.current=null,t===null||t.return===null){J=1,Gt=n,G=null;break}e:{var o=e,l=t.return,a=t,s=n;if(n=ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Pa(l);if(v!==null){v.flags&=-257,Ea(v,l,a,o,n),v.mode&1&&Ba(o,u,n),n=v,s=u;var A=n.updateQueue;if(A===null){var C=new Set;C.add(s),n.updateQueue=C}else A.add(s);break e}else{if(!(n&1)){Ba(o,u,n),Tl();break e}s=Error(y(426))}}else if(M&&a.mode&1){var F=Pa(l);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ea(F,l,a,o,n),dl(it(s,a));break e}}o=s=it(s,a),J!==4&&(J=2),Pt===null?Pt=[o]:Pt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Lu(o,s,n);Sa(o,d);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(un===null||!un.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var h=Fu(o,a,n);Sa(o,h);break e}}o=o.return}while(o!==null)}Zu(t)}catch(S){n=S,G===t&&t!==null&&(G=t=t.return);continue}break}while(1)}function Yu(){var e=qi.current;return qi.current=Yi,e===null?Yi:e}function Tl(){(J===0||J===3||J===2)&&(J=4),Z===null||!(Pn&268435455)&&!(pr&268435455)||en(Z,ee)}function er(e,n){var t=L;L|=2;var i=Yu();(Z!==e||ee!==n)&&(Ue=null,In(e,n));do try{vp();break}catch(r){Ju(e,r)}while(1);if(fl(),L=t,qi.current=i,G!==null)throw Error(y(261));return Z=null,ee=0,J}function vp(){for(;G!==null;)qu(G)}function Cp(){for(;G!==null&&!Hc();)qu(G)}function qu(e){var n=ec(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Zu(e):G=n,kl.current=null}function Zu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=xp(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(t=fp(t,n,me),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);J===0&&(J=5)}function vn(e,n,t){var i=N,r=ze.transition;try{ze.transition=null,N=1,Sp(e,n,t,i)}finally{ze.transition=r,N=i}return null}function Sp(e,n,t,i){do qn();while(tn!==null);if(L&6)throw Error(y(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(td(e,o),e===Z&&(G=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ai||(Ai=!0,nc(Oi,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var l=N;N=1;var a=L;L|=4,kl.current=null,mp(e,t),Hu(t,e),Qd(ho),_i=!!Ao,ho=Ao=null,e.current=t,Ap(t),Gc(),L=a,N=l,ze.transition=o}else e.current=t;if(Ai&&(Ai=!1,tn=e,bi=r),o=e.pendingLanes,o===0&&(un=null),Yc(t.stateNode),xe(e,H()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zi)throw Zi=!1,e=jo,jo=null,e;return bi&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Mo?Et++:(Et=0,Mo=e):Et=0,mn(),null}function qn(){if(tn!==null){var e=Ls(bi),n=ze.transition,t=N;try{if(ze.transition=null,N=16>e?16:e,tn===null)var i=!1;else{if(e=tn,tn=null,bi=0,L&6)throw Error(y(331));var r=L;for(L|=4,w=e.current;w!==null;){var o=w,l=o.child;if(w.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(w=u;w!==null;){var g=w;switch(g.tag){case 0:case 11:case 15:Bt(8,g,o)}var m=g.child;if(m!==null)m.return=g,w=m;else for(;w!==null;){g=w;var x=g.sibling,v=g.return;if(Wu(g),g===u){w=null;break}if(x!==null){x.return=v,w=x;break}w=v}}}var A=o.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var F=C.sibling;C.sibling=null,C=F}while(C!==null)}}w=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,w=l;else e:for(;w!==null;){if(o=w,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,w=d;break e}w=o.return}}var c=e.current;for(w=c;w!==null;){l=w;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,w=p;else e:for(l=c;w!==null;){if(a=w,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dr(9,a)}}catch(S){K(a,a.return,S)}if(a===l){w=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,w=h;break e}w=a.return}}if(L=r,mn(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ir,e)}catch{}i=!0}return i}finally{N=t,ze.transition=n}}return!1}function Wa(e,n,t){n=it(t,n),n=Lu(e,n,1),e=sn(e,n,1),n=ae(),e!==null&&(Jt(e,1,n),xe(e,n))}function K(e,n,t){if(e.tag===3)Wa(e,e,t);else for(;n!==null;){if(n.tag===3){Wa(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(un===null||!un.has(i))){e=it(t,e),e=Fu(n,e,1),n=sn(n,e,1),e=ae(),n!==null&&(Jt(n,1,e),xe(n,e));break}}n=n.return}}function wp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(J===4||J===3&&(ee&130023424)===ee&&500>H()-Bl?In(e,0):Dl|=t),xe(e,n)}function bu(e,n){n===0&&(e.mode&1?(n=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):n=1);var t=ae();e=Ge(e,n),e!==null&&(Jt(e,n,t),xe(e,t))}function Ip(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bu(e,t)}function zp(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(y(314))}i!==null&&i.delete(n),bu(e,t)}var ec;ec=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,pp(e,n,t);de=!!(e.flags&131072)}else de=!1,M&&n.flags&1048576&&ru(n,Ki,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Bi(e,n),e=n.pendingProps;var r=bn(n,oe.current);Yn(n,t),r=Cl(null,n,i,e,r,t);var o=Sl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(i)?(o=!0,Qi(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ml(n),r.updater=cr,n.stateNode=r,r._reactInternals=n,Do(n,i,e,t),n=Eo(null,n,i,!0,o,t)):(n.tag=0,M&&o&&ul(n),le(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Bi(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=Dp(i),e=Pe(i,e),r){case 0:n=Po(null,n,i,e,t);break e;case 1:n=Fa(null,n,i,e,t);break e;case 11:n=Ta(null,n,i,e,t);break e;case 14:n=La(null,n,i,Pe(i.type,e),t);break e}throw Error(y(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Po(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Fa(e,n,i,r,t);case 3:e:{if(_u(n),e===null)throw Error(y(387));i=n.pendingProps,o=n.memoizedState,r=o.element,cu(e,n),Gi(n,i,null,t);var l=n.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=it(Error(y(423)),n),n=Na(e,n,i,t,r);break e}else if(i!==r){r=it(Error(y(424)),n),n=Na(e,n,i,t,r);break e}else for(Ae=an(n.stateNode.containerInfo.firstChild),he=n,M=!0,Te=null,t=su(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),i===r){n=Xe(e,n,t);break e}le(e,n,i,t)}n=n.child}return n;case 5:return du(n),e===null&&Io(n),i=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,yo(i,r)?l=null:o!==null&&yo(i,o)&&(n.flags|=32),Ru(e,n),le(e,n,l,t),n.child;case 6:return e===null&&Io(n),null;case 13:return ju(e,n,t);case 4:return Al(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=nt(n,null,i,t):le(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Ta(e,n,i,r,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,o=n.memoizedProps,l=r.value,R($i,i._currentValue),i._currentValue=l,o!==null)if(Ne(o.value,l)){if(o.children===r.children&&!pe.current){n=Xe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===i){if(o.tag===1){s=Ke(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),zo(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(y(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),zo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}le(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,Yn(n,t),r=ke(r),i=i(r),n.flags|=1,le(e,n,i,t),n.child;case 14:return i=n.type,r=Pe(i,n.pendingProps),r=Pe(i.type,r),La(e,n,i,r,t);case 15:return Nu(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Bi(e,n),n.tag=1,fe(i)?(e=!0,Qi(n)):e=!1,Yn(n,t),Tu(n,i,r),Do(n,i,r,t),Eo(null,n,i,!0,e,t);case 19:return Mu(e,n,t);case 22:return Ou(e,n,t)}throw Error(y(156,n.tag))};function nc(e,n){return Bs(e,n)}function kp(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,i){return new kp(e,n,t,i)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dp(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qo)return 11;if(e===Zo)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ti(e,n,t,i,r,o){var l=2;if(i=e,typeof e=="function")Ll(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case On:return zn(t.children,r,o,n);case Yo:l=8,r|=8;break;case Yr:return e=Ie(12,t,n,r|2),e.elementType=Yr,e.lanes=o,e;case qr:return e=Ie(13,t,n,r),e.elementType=qr,e.lanes=o,e;case Zr:return e=Ie(19,t,n,r),e.elementType=Zr,e.lanes=o,e;case ds:return fr(t,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:l=10;break e;case cs:l=9;break e;case qo:l=11;break e;case Zo:l=14;break e;case qe:l=16,i=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=Ie(l,t,n,r),n.elementType=e,n.type=i,n.lanes=o,n}function zn(e,n,t,i){return e=Ie(7,e,i,n),e.lanes=t,e}function fr(e,n,t,i){return e=Ie(22,e,i,n),e.elementType=ds,e.lanes=t,e.stateNode={isHidden:!1},e}function $r(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function Hr(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kr(0),this.expirationTimes=kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fl(e,n,t,i,r,o,l,a,s){return e=new Bp(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ie(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ml(o),e}function Pp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function tc(e){if(!e)return fn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(fe(t))return tu(e,t,n)}return n}function ic(e,n,t,i,r,o,l,a,s){return e=Fl(t,i,!0,e,r,o,l,a,s),e.context=tc(null),t=e.current,i=ae(),r=cn(t),o=Ke(i,r),o.callback=n??null,sn(t,o,r),e.current.lanes=r,Jt(e,r,i),xe(e,i),e}function xr(e,n,t,i){var r=n.current,o=ae(),l=cn(r);return t=tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(o,l),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=sn(r,n,l),e!==null&&(Fe(e,r,l,o),zi(e,r,l)),l}function nr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ka(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Nl(e,n){Ka(e,n),(e=e.alternate)&&Ka(e,n)}function Ep(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}gr.prototype.render=Ol.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));xr(e,n,null,null)};gr.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;En(function(){xr(null,e,null,null)}),n[He]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&_s(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $a(){}function Tp(e,n,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=nr(l);o.call(u)}}var l=ic(n,i,e,0,null,!1,!1,"",$a);return e._reactRootContainer=l,e[He]=l.current,Mt(e.nodeType===8?e.parentNode:e),En(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nr(s);a.call(u)}}var s=Fl(e,0,!1,null,null,!1,!1,"",$a);return e._reactRootContainer=s,e[He]=s.current,Mt(e.nodeType===8?e.parentNode:e),En(function(){xr(n,s,t,i)}),s}function Ar(e,n,t,i,r){var o=t._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var s=nr(l);a.call(s)}}xr(n,l,e,r)}else l=Tp(t,n,e,r,i);return nr(l)}Fs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vt(n.pendingLanes);t!==0&&(nl(n,t|1),xe(n,H()),!(L&6)&&(rt=H()+500,mn()))}break;case 13:En(function(){var i=Ge(e,1);if(i!==null){var r=ae();Fe(i,e,1,r)}}),Nl(e,1)}};tl=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=ae();Fe(n,e,134217728,t)}Nl(e,134217728)}};Ns=function(e){if(e.tag===13){var n=cn(e),t=Ge(e,n);if(t!==null){var i=ae();Fe(t,e,n,i)}Nl(e,n)}};Os=function(){return N};Rs=function(e,n){var t=N;try{return N=e,n()}finally{N=t}};so=function(e,n,t){switch(n){case"input":if(no(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=ar(i);if(!r)throw Error(y(90));fs(i),no(i,r)}}}break;case"textarea":gs(e,t);break;case"select":n=t.value,n!=null&&Hn(e,!!t.multiple,n,!1)}};Ss=Pl;ws=En;var Lp={usingClientEntryPoint:!1,Events:[qt,Mn,ar,vs,Cs,Pl]},At={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:At.bundleType,version:At.version,rendererPackageName:At.rendererPackageName,rendererConfig:At.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:At.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{ir=hi.inject(Fp),je=hi}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(n))throw Error(y(200));return Pp(e,n,null,t)};ve.createRoot=function(e,n){if(!Rl(e))throw Error(y(299));var t=!1,i="",r=rc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Fl(e,1,!1,null,null,t,!1,i,r),e[He]=n.current,Mt(e.nodeType===8?e.parentNode:e),new Ol(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ks(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return En(e)};ve.hydrate=function(e,n,t){if(!mr(n))throw Error(y(200));return Ar(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Rl(e))throw Error(y(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",l=rc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=ic(n,null,e,1,t??null,r,!1,o,l),e[He]=n.current,Mt(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new gr(n)};ve.render=function(e,n,t){if(!mr(n))throw Error(y(200));return Ar(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!mr(e))throw Error(y(40));return e._reactRootContainer?(En(function(){Ar(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};ve.unstable_batchedUpdates=Pl;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!mr(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ar(e,n,t,!1,i)};ve.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),os.exports=ve;var Np=os.exports,Ha=Np;Xr.createRoot=Ha.createRoot,Xr.hydrateRoot=Ha.hydrateRoot;const Ga=[{id:"1",type:"single",content:`**背景**

Wide World Importers（WWI）正在开发一个电商平台，该平台面向英语、西班牙语和葡萄牙语客户。WWI 计划构建一个"随时随地购物"项目（Shopping on-the-go project），需要一个可集成到智能音箱的聊天机器人。

要求：
- 回答常见问题
- 支持英语、西班牙语和葡萄牙语交互
- 将现有 FAQ 流程集中管理
- 全体员工可编辑问答对，但只有高级经理（LeadershipTeam 组）可以发布更新

**题目**

你正在为该购物聊天机器人配置 QnA Maker 资源的访问权限。需要为以下两个 Azure AD 组分别分配角色：

- **AllUsers**（全体员工）：可编辑问答对
- **LeadershipTeam**（高级经理）：可发布更新

以下哪个选项正确描述了两个组应被分配的角色？`,explanation:"",options:[{id:"A",text:"AllUsers → QnA Maker Editor；LeadershipTeam → QnA Maker Reader"},{id:"B",text:"AllUsers → QnA Maker Editor；LeadershipTeam → Contributor"},{id:"C",text:"AllUsers → Contributor；LeadershipTeam → QnA Maker Editor"},{id:"D",text:"AllUsers → QnA Maker Reader；LeadershipTeam → Cognitive Services User"}],answer:"B"},{id:"2",type:"single",content:`**背景**

一家零售商希望缩短员工记录费用报销收据所花费的时间。所有收据均为英文。你需要从收据中提取顶层信息（如商家名称、交易总额），且解决方案必须**尽量减少开发工作量**。

**题目**

应该使用哪项 Azure 认知服务？`,explanation:"",options:[{id:"A",text:"Custom Vision（自定义视觉）"},{id:"B",text:"Personalizer（个性化服务）"},{id:"C",text:"Form Recognizer（表单识别器）"},{id:"D",text:"Computer Vision（计算机视觉）"}],answer:"C"},{id:"3",type:"multiple",content:`**背景**

你正在开发一个使用 Translator API 的方法，该方法将接收网页内容并将其翻译成希腊语（el）。结果中还需包含使用罗马字母（Roman alphabet）的音译（transliteration）。

你已有如下基础 URI：
\`\`\`
https://api.cognitive.microsofttranslator.com/translate?api-version=3.0
\`\`\`

**题目**

应在 URI 中额外添加哪三个查询参数（每个正确选项都是解决方案的一部分）？`,explanation:"",options:[{id:"A",text:"`toScript=Cyrl`"},{id:"B",text:"`from=el`"},{id:"C",text:"`textType=html`"},{id:"D",text:"`to=el`"},{id:"E",text:"`textType=plain`"},{id:"F",text:"`toScript=Latn`"}],answer:["C","D","F"]},{id:"4",type:"single",content:`**背景**

你部署了一个使用 Azure 认知搜索（Azure Cognitive Search）的 Web 应用，用于管理搜索索引。该应用被配置为使用**主管理密钥（primary admin key）**。

在一次安全审查中，你发现有人对搜索索引进行了未授权的更改，怀疑主访问密钥已泄露。

你需要**阻止未经授权的访问**，且解决方案必须**最大程度减少停机时间**。

**题目**

下一步应执行哪项操作？`,explanation:"",options:[{id:"A",text:"重新生成主管理密钥，将应用切换为使用辅助管理密钥，然后重新生成辅助管理密钥"},{id:"B",text:"将应用切换为使用查询密钥，然后重新生成主管理密钥和辅助管理密钥"},{id:"C",text:"重新生成辅助管理密钥，将应用切换为使用辅助管理密钥，然后重新生成主管理密钥"},{id:"D",text:"添加新的查询密钥，将应用切换为使用该新查询密钥，然后删除所有未使用的查询密钥"}],answer:"C"},{id:"5",type:"multiple",content:`**背景**

你正在构建一个多语言聊天机器人，需要根据用户消息的情感（正面或负面）发送不同的回答。

**题目**

应使用哪两个 Text Analytics（文本分析）API？（每个正确答案都是解决方案的一部分）`,explanation:"",options:[{id:"A",text:"从知名知识库关联实体（Linked entities from a well-known knowledge base）"},{id:"B",text:"情感分析（Sentiment Analysis）"},{id:"C",text:"关键短语提取（Key Phrases）"},{id:"D",text:"语言检测（Detect Language）"},{id:"E",text:"命名实体识别（Named Entity Recognition）"}],answer:["B","D"]},{id:"6",type:"single",content:`**背景**

你正在使用 Azure 认知搜索（Azure Cognitive Search）构建一个包含数百万扫描文档（图像和 PDF）的搜索解决方案。你需要让这些扫描文档**尽快**可被搜索。

**题目**

应采用哪种方案？`,explanation:"",options:[{id:"A",text:"将数据拆分到多个 Blob 容器中，为每个容器创建独立的认知搜索服务，并配置相同的运行时调度模式"},{id:"B",text:"将数据拆分到多个 Blob 容器中，为每个容器创建一个索引器，增加搜索单元（Search Units），并配置顺序执行模式"},{id:"C",text:"为每种文档类型创建一个单独的认知搜索服务"},{id:"D",text:"将数据拆分到多个虚拟文件夹中，为每个文件夹创建一个索引器，增加搜索单元，并配置并行执行模式"}],answer:"D"},{id:"7",type:"single",content:`**背景**

Contoso 公司正在开发一个文档处理工作流，用于自动从财务文档（PDF 和 JPEG 图像）中提取信息。技术要求规定：**当 AI 响应的置信度分数低于 70% 时，必须触发人工审核**。

你将收据图像上传到 Form Recognizer API 进行分析，API 返回了包含 \`documentResults.fields.MerchantName.confidence\` 等字段的 JSON 数据。

**题目**

应使用哪个表达式来触发 Consultant-Bookkeeper 组成员的手动审核？`,explanation:"",options:[{id:"A",text:'`documentResults.docType == "prebuilt:receipt"`'},{id:"B",text:"`documentResults.fields.*.confidence < 0.7`"},{id:"C",text:"`documentResults.fields.ReceiptType.confidence > 0.7`"},{id:"D",text:"`documentResults.fields.MerchantName.confidence < 0.7`"}],answer:"D"},{id:"8",type:"single",content:`**背景**

你正在构建一个语言理解模型（Language Understanding / LUIS），用于电商聊天机器人。用户可以通过语音或文字输入账单地址。

**题目**

应使用哪种实体类型来捕获账单地址？`,explanation:"",options:[{id:"A",text:"机器学习实体（Machine Learned）"},{id:"B",text:"正则表达式实体（Regex）"},{id:"C",text:"列表实体（List）"},{id:"D",text:"Pattern.any 实体"}],answer:"A"},{id:"9",type:"single",content:`**背景**

你有 100 个聊天机器人，每个都有独立的语言理解（Language Understanding / LUIS）模型。你经常需要向每个模型批量添加相同的短语。

你需要通过**编程方式**将新短语更新到所有模型中。

**题目**

在 LUIS SDK 代码中，完成更新操作需要依次调用哪个方法，并使用哪个对象？

从以下选项中选择正确组合：`,explanation:"",options:[{id:"A",text:"调用 `AddPhraseListAsync`，传入 `PhraselistCreateObject` 对象"},{id:"B",text:"调用 `AddEntityAsync`，传入 `EntityCreateObject` 对象"},{id:"C",text:"调用 `AddIntentAsync`，传入 `ModelCreateObject` 对象"},{id:"D",text:"调用 `AddUtteranceAsync`，传入 `ExampleLabelObject` 对象"}],answer:"A"},{id:"10",type:"single",content:`**背景**

你构建了一个聊天机器人（bot1），使用了 Language Understanding（LUIS）资源（lu1）。

你需要确保 bot1 遵循微软负责任 AI 原则中的**包容性（Inclusiveness）**原则。

**题目**

应如何扩展 bot1 来满足该要求？`,explanation:"",options:[{id:"A",text:"为 bot1 实现身份验证"},{id:"B",text:"为 lu1 启用主动学习（Active Learning）"},{id:"C",text:"在容器中托管 lu1"},{id:"D",text:"为 bot1 添加 Direct Line Speech 频道"}],answer:"D"},{id:"11",type:"single",content:`**背景**

你正在使用 Azure 认知搜索（Azure Cognitive Search）构建一个知识库，并创建了一个自定义技能（Custom Skill）。该技能调用 Web API，为通过实体识别（Entity Recognition）识别出的每个组织查找其描述。

**题目**

关于该自定义技能，以下说法是否正确？

1. 该技能的输出可以映射到搜索索引的字段中
2. 该技能的定义中使用了 \`WebApiSkill\` 类型
3. 对于每个已识别的组织，该技能会调用 Web API 并返回该组织的描述（而非其他信息）

请分别判断每条说法是否正确（是/否）：`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-是"},{id:"D",text:"1-是，2-否，3-否"}],answer:"B"},{id:"12",type:"single",content:`**背景**

你需要构建一个在本地网络中运行、具有间歇性互联网连接的异常检测应用（Anomaly Detector）。解决方案必须**最小化成本**。

**题目**

应使用哪种方案来托管模型？`,explanation:"",options:[{id:"A",text:"Azure Kubernetes Service（AKS）"},{id:"B",text:"托管在 Azure Stack Hub 集成系统中的 Kubernetes 集群"},{id:"C",text:"Azure Container Instances"},{id:"D",text:"Docker Engine"}],answer:"B"},{id:"13",type:"multiple",content:`**背景**

你需要为 Azure 认知搜索（Azure Cognitive Search）实现**表投影（Table Projection）**，以在 Azure 表存储中生成索引数据的物理表示。

**题目**

在技能集（Skillset）定义的 JSON 配置中，\`table\` 节点必须指定哪三个属性？`,explanation:"",options:[{id:"A",text:"`tableName`"},{id:"B",text:"`generatedKeyName`"},{id:"C",text:"`dataSource`"},{id:"D",text:"`dataSourceConnection`"},{id:"E",text:"`source`"}],answer:["A","B","E"]},{id:"14",type:"multiple",content:`**背景**

你正在构建一个聊天机器人，使用 Microsoft Bot Framework SDK。你希望机器人能够支持语音交互。

**题目**

为聊天机器人启用语音功能，应执行哪三项操作？`,explanation:"",options:[{id:"A",text:"为聊天机器人 App 启用 Web Sockets"},{id:"B",text:"创建 Speech 服务资源"},{id:"C",text:"注册 Direct Line Speech 频道"},{id:"D",text:"注册 Cortana 频道"},{id:"E",text:"为聊天机器人 App 启用 CORS"},{id:"F",text:"创建 Language Understanding 服务资源"}],answer:["A","B","C"]},{id:"15",type:"multiple",content:`**背景**

你构建了一个零售聊天机器人，使用 QnA Maker 服务，并上传了一份内部支持文档。文档中包含问题"What is your warranty period?"（保修期是多少？）

用户反映，当他们询问"How long is the warranty coverage?"（保修覆盖多长时间？）时，机器人返回了默认的无答案回复。

你需要提高机器人对这两种表达方式的识别准确率。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"向问答对添加替代提问方式（Alternate Questions）"},{id:"B",text:"重新训练模型（Retrain the model）"},{id:"C",text:"重新发布模型（Republish the model）"},{id:"D",text:"删除原有问答对并重新创建"},{id:"E",text:"创建新的知识库（Knowledge Base）"}],answer:["A","B","C"]},{id:"16",type:"single",content:`**背景**

你正在开发一个应用，使用 Face API（人脸识别服务）。该应用需要从员工列表中查找相似人脸。员工人脸列表包含 **60,000 张**图像。

**题目**

在 HTTP 请求体中，应使用哪个列表类型和哪种匹配模式？`,explanation:"",options:[{id:"A",text:"使用 `faceListId`，模式为 `matchPerson`"},{id:"B",text:"使用 `largeFaceListId`，模式为 `matchFace`"},{id:"C",text:"使用 `largeFaceListId`，模式为 `matchPerson`"},{id:"D",text:"使用 `faceListId`，模式为 `matchFace`"}],answer:"B"},{id:"17",type:"multiple",content:`**背景**

你正在开发一个 Custom Vision（自定义视觉）分类器来识别花卉品种。你收到了新花卉品种的图像，需要将这些新图像添加到分类器中。

以下哪种操作能实现目标？

**题目**

针对同一场景，以下三种解决方案，哪种能满足需求？（三选一，每题独立判断）`,explanation:"",options:[{id:"A",text:"添加新图像，然后使用 Smart Labeler 工具"},{id:"B",text:"将新图像和对应标签添加到现有模型中，重新训练，然后发布模型"},{id:"C",text:"创建一个新模型，然后上传新图像和标签  这三种方案分别能否实现目标？  &nbsp;"}],answer:["A","B","C"]},{id:"18",type:"single",content:`**背景**

你有一个 Azure 认知搜索（Cognitive Search）服务，过去 12 个月内查询量持续增长。你发现部分搜索请求正在被**限速（Throttled）**。

以下三种解决方案，哪种可以减少被限速的可能性？（三题独立判断）`,explanation:"",options:[],answer:"见解析"},{id:"19",type:"single",content:`**背景**

你正在使用 Computer Vision API 开发一个测试方法，用于检测图像中的公司 Logo。该调用会返回名为 \`brands\` 的品牌集合。

**题目**

给定以下代码逻辑（伪代码）：

\`\`\`csharp
// 检查 brands 集合的第一个元素
var firstBrand = brands[0];
// 检查 firstBrand 的 confidence 属性
bool highConfidence = firstBrand.Confidence > 0.9;
// 检查 brands 是否包含多个条目
bool hasMultiple = brands.Count > 1;
\`\`\`

判断以下说法是否正确：

1. \`brands\` 集合可能包含多个品牌条目
2. \`Confidence\` 属性表示检测到品牌的置信度分数
3. \`brands[0].Rectangle\` 属性可以获取品牌在图像中的位置坐标`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"20",type:"single",content:`**背景**

你正在为一个 IoT 工厂监控系统构建解决方案。你从 100 台工业机器上收集传感器数据，每台机器有 50 个不同传感器，每分钟采集一次数据，共有 5,000 个时间序列数据集。你需要识别每个时间序列中的异常值，以预测机械故障。

**题目**

应使用哪项 Azure 认知服务？`,explanation:"",options:[{id:"A",text:"异常检测器（Anomaly Detector）"},{id:"B",text:"认知搜索（Cognitive Search）"},{id:"C",text:"表单识别器（Form Recognizer）"},{id:"D",text:"自定义视觉（Custom Vision）"}],answer:"A"},{id:"21",type:"single",content:`**背景**

你正在构建一个 Azure 认知搜索解决方案，使用以下数据源：

- Finance：本地 Microsoft SQL Server 数据库
- Sales：使用 Core (SQL) API 的 Azure Cosmos DB
- Logs：Azure 表存储
- HR：Azure SQL 数据库

你需要确保可以使用 Azure 认知搜索 REST API **搜索所有数据**。

**题目**

为了满足此要求，应该执行哪项操作？`,explanation:"",options:[{id:"A",text:"为 Sales 数据配置多个读取副本"},{id:"B",text:"将 Finance 数据镜像到 Azure SQL 数据库中"},{id:"C",text:"将 Sales 数据迁移到 MongoDB API"},{id:"D",text:"将 Logs 数据导入 Azure Sentinel"}],answer:"B"},{id:"22",type:"multiple",content:`**背景**

你正在构建一个多语言聊天机器人，使用 Azure Cognitive Services 语言模型。该机器人频繁回复默认的"Sorry, I don't understand that."（对不起，我不理解你的意思）。

你需要提升机器人的响应能力。

**题目**

应按照哪个顺序执行以下三项操作？`,explanation:"",options:[{id:"A",text:"启用主动学习（Enable Active Learning）"},{id:"B",text:"训练并重新发布模型（Train and republish the model）"},{id:"C",text:"审核并验证建议的语料（Validate the utterances/suggestions）"}],answer:["A","C","B"]},{id:"23",type:"multiple",content:`**背景**

一个 Azure 认知搜索知识库包含使用 CMK（客户托管密钥）加密的数据。

**题目**

启用 CMK 加密后，哪三项说法是正确的？（每个正确答案都是完整解决方案的一部分）`,explanation:"",options:[{id:"A",text:"索引大小会增加"},{id:"B",text:"查询时间会增加"},{id:"C",text:"需要自签名 X.509 证书"},{id:"D",text:"索引大小会减少"},{id:"E",text:"查询时间会减少"},{id:"F",text:"需要 Azure Key Vault"}],answer:["A","B","F"]},{id:"24",type:"single",content:`**背景**

你需要构建一个自然语言处理应用，该应用需要同时访问 **Decision API** 和 **Language API**，且要求通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的 Azure 资源？`,explanation:"",options:[{id:"A",text:"Language 资源"},{id:"B",text:"Speech 资源"},{id:"C",text:"Azure Cognitive Services（多服务资源）"},{id:"D",text:"Content Moderator 资源"}],answer:"C"},{id:"25",type:"multiple",content:`**背景**

你正在开发一个使用 Custom Vision 构建的移动应用，该模型用于识别零售商品（使用 Retail 领域）。你计划将该模型部署到 Android 手机端（离线使用）。

**题目**

应按顺序执行哪三项操作来准备模型部署？`,explanation:"",options:[{id:"A",text:"将模型域（Domain）更改为紧凑型域（Compact domain）"},{id:"B",text:"使用紧凑型域重新训练模型（Retrain）"},{id:"C",text:"导出模型（Export the model）"},{id:"D",text:"删除原有模型"},{id:"E",text:"在 Azure Portal 中创建新的 Custom Vision 资源"}],answer:["A","B","C"]},{id:"26",type:"single",content:`**背景**

Contoso 公司需要为聊天机器人构建 QnA Maker 资源，要求如下：

- Management-Accountants 组：可以**审批**（发布）FAQ
- Consultant-Accountants 组：可以**创建和修改** FAQ
- Agent-CustomerServices 组：可以**浏览**（只读）FAQ

**题目**

应为三个组分别分配哪个 RBAC 角色？`,explanation:"",options:[{id:"A",text:"Management-Accountants→Cognitive Service User；Consultant-Accountants→QnA Maker Editor；Agent-CustomerServices→QnA Maker Reader"},{id:"B",text:"Management-Accountants→Contributor；Consultant-Accountants→QnA Maker Reader；Agent-CustomerServices→QnA Maker Editor"},{id:"C",text:"Management-Accountants→QnA Maker Editor；Consultant-Accountants→Cognitive Service User；Agent-CustomerServices→QnA Maker Reader"},{id:"D",text:"Management-Accountants→QnA Maker Reader；Consultant-Accountants→QnA Maker Editor；Agent-CustomerServices→Cognitive Service User"}],answer:"A"},{id:"27",type:"single",content:`**背景**

你正在开发一个将文本转换为语音的社交媒体扩展程序。解决方案需满足：

- 支持最多 400 个字符的消息
- 为用户提供多种语音选项
- 最小化成本

你已创建了 Azure 认知服务资源（部署在 UK South 区域）。

**题目**

哪个 Speech API 端点可以获取可用的语音列表？`,explanation:"",options:[{id:"A",text:"`https://uksouth.customvoice.api.speech.microsoft.com/api/texttospeech/v3.0/longaudiosynthesis/voices`"},{id:"B",text:"`https://uksouth.tts.speech.microsoft.com/cognitiveservices/voices/list`"},{id:"C",text:"`https://uksouth.voice.speech.microsoft.com/cognitiveservices/v1?deploymentId={deployment}`"},{id:"D",text:"`https://uksouth.api.cognitive.microsoft.com/speechtotext/v3.0/models/base`"}],answer:"B"},{id:"28",type:"single",content:`**背景**

你正在构建一个用于订单查询的聊天机器人，机器人需要引导用户完成产品设置的分步流程。

**题目**

应使用哪种类型的对话（Dialog）来实现分步引导？`,explanation:"",options:[{id:"A",text:"组件对话（Component Dialog）"},{id:"B",text:"瀑布对话（Waterfall Dialog）"},{id:"C",text:"自适应对话（Adaptive Dialog）"},{id:"D",text:"技能对话（Skill Dialog）"}],answer:"B"},{id:"29",type:"single",content:`**背景**

你正在开发一个监控发动机传感器数据的系统，数据包括转速、角度、温度和压力等多个相关传感器的时间序列数据。系统需要在传感器数据出现异常时生成警报。

**题目**

应在解决方案中使用哪项服务？`,explanation:"",options:[{id:"A",text:"Azure Monitor 中的应用程序洞察（Application Insights）"},{id:"B",text:"Azure Monitor 中的指标警报（Metric Alerts）"},{id:"C",text:"多变量异常检测（Multivariate Anomaly Detection）"},{id:"D",text:"单变量异常检测（Univariate Anomaly Detection）"}],answer:"C"},{id:"30",type:"single",content:`**背景**

你有一个 Azure OpenAI GPT-3.5 模型，你配置了如下系统消息（System Message）：

> "You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old."

**题目**

这是哪种提示工程（Prompt Engineering）技术的示例？`,explanation:"",options:[{id:"A",text:"少样本学习（Few-shot Learning）"},{id:"B",text:"启示（Affordance）"},{id:"C",text:"思维链（Chain of Thought）"},{id:"D",text:"预设引导（Priming）"}],answer:"D"},{id:"31",type:"single",content:`**背景**

你有一个 Azure OpenAI 聊天机器人。用户反映，机器人在回答知识库范围之外的随意问题时，语气过于随意，缺乏正式感。

以下三种解决方案，哪种能确保机器人对随意问题（spurious questions）提供**正式**回复？

**题目**

方案 A：从 Language Studio 将 chit-chat 源更改为 \`qna_chitchat_professional.tsv\`，重新训练并重新发布模型

方案 B：从 Language Studio 将 chit-chat 源更改为 \`qna_chitchat_friendly.tsv\`，重新训练并重新发布模型

方案 C：从 Language Studio 删除所有 chit-chat 问答对，重新训练并重新发布模型

方案 D：从 Language Studio 为问答对添加替代措辞，重新训练并重新发布模型`,explanation:"",options:[{id:"A",text:"方案 A"},{id:"B",text:"方案 B"},{id:"C",text:"方案 C"},{id:"D",text:"方案 D"}],answer:"A"},{id:"32",type:"single",content:`**背景**

你正在构建一个应用，该应用将：
- 自动为上传的图像建议替代文本（Alt Text）
- 检测不适当的图像并拦截
- 最小化开发工作量

**题目**

应为每项需求分别使用哪个 Computer Vision 端点？

从下列选项匹配：`,explanation:"",options:[{id:"A",text:"建议 Alt Text → `describeImage` 端点；检测不当图像 → `Content Moderator`"},{id:"B",text:"建议 Alt Text → `analyzeImage`（Description 功能）；检测不当图像 → `analyzeImage`（Adult 功能）"},{id:"C",text:"建议 Alt Text → `generateThumbnail` 端点；检测不当图像 → `tagImage` 端点"},{id:"D",text:"建议 Alt Text → `tagImage` 端点；检测不当图像 → `detectObjects` 端点"}],answer:"B"},{id:"33",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要将这些图像分类为照片（photograph）、手绘图（drawing）或剪贴画（clipart）。

**题目**

应使用哪个服务端点，以及关注响应中的哪个属性？`,explanation:"",options:[{id:"A",text:"端点：`Custom Vision / classify`；属性：`predictions[].tagName`"},{id:"B",text:"端点：`Computer Vision / analyze`；属性：`imageType.clipArtType`（和 `imageType.lineDrawingType`）"},{id:"C",text:"端点：`Computer Vision / tag`；属性：`tags[].name`"},{id:"D",text:"端点：`Computer Vision / describe`；属性：`description.captions[].text`"}],answer:"B"},{id:"34",type:"single",content:`**背景**

你正在使用 Azure AI Document Intelligence（前身为 Form Recognizer）开发一个分析医疗文档的应用 App1。你发送请求后收到包含 \`confidence\` 值的响应。

**题目**

以下关于 Azure AI Document Intelligence 响应的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"`confidence` 值为 0 表示该字段未被识别"},{id:"B",text:"响应中的 `boundingBox` 属性描述了字段值在文档中的位置"},{id:"C",text:"只有预构建模型（prebuilt model）才会在响应中包含 `confidence` 值"},{id:"D",text:"响应中的所有字段都必须具有大于 0.5 的置信度才会返回"}],answer:"B"},{id:"35",type:"multiple",content:`**背景**

你有一个 Azure Cognitive Search 实例，其中 Azure AI 富化管道对社交媒体帖子进行情感分析。你需要定义一个知识存储（Knowledge Store），包含社交媒体帖子和情感分析结果。

**题目**

知识存储的定义中应包含哪两个字段？`,explanation:"",options:[{id:"A",text:"`storageContainer`"},{id:"B",text:"`tables`"},{id:"C",text:"`storageConnectionString`"},{id:"D",text:"`files`"},{id:"E",text:"`objects`"}],answer:["D","E"]},{id:"36",type:"single",content:`**背景**

你需要构建一个能够识别公司产品和代码名称的聊天机器人，且解决方案必须**最小化开发工作量**。

**题目**

应使用 Azure Cognitive Service for Language 中的哪项功能？`,explanation:"",options:[{id:"A",text:"自定义文本分类（Custom Text Classification）"},{id:"B",text:"实体链接（Entity Linking）"},{id:"C",text:"自定义命名实体识别（Custom NER）"},{id:"D",text:"关键短语提取（Key Phrase Extraction）"}],answer:"C"},{id:"37",type:"single",content:`**背景**

你正在为 Azure OpenAI 构建一个聊天机器人，该机器人需要回答旅游预订相关的问题。你需要**最大化机器人响应的准确性**。

**题目**

应采取哪项措施？`,explanation:"",options:[{id:"A",text:"配置模型以包含旅行社数据库中的数据"},{id:"B",text:"将模型的 Top P 参数设置为 0"},{id:"C",text:"将模型的 Temperature 参数设置为 0"},{id:"D",text:"修改模型使用的系统消息，明确要求答案必须准确"}],answer:"A"},{id:"38",type:"single",content:`**背景**

你需要使用 Azure OpenAI 的 embeddings（嵌入）功能，通过**余弦相似度（Cosine Similarity）** 来识别 10,000 个 ASCII 文件中包含特定短语的文件。

**题目**

应使用哪个 Azure OpenAI 模型？`,explanation:"",options:[{id:"A",text:"`text-embedding-ada-002`"},{id:"B",text:"`GPT-4`"},{id:"C",text:"`GPT-3.5-Turbo`"},{id:"D",text:"`GPT-4-32k`"}],answer:"A"},{id:"39",type:"single",content:`**背景**

你需要连接 Azure OpenAI 资源（名为 AI1）并使用 REST API 访问。多个应用（App1、App2、App3）需要各自访问 AI1 中部署的不同 GPT-3.5 模型（每个部署针对不同工作负载优化）。

**题目**

为确保每个应用只能访问 AI1 及其对应的特定部署，每个应用应使用什么信息来连接？`,explanation:"",options:[{id:"A",text:"端点（Endpoint）+ 密钥（Key）+ 模型名称（Model Name）"},{id:"B",text:"部署名称（Deployment Name）+ 端点（Endpoint）+ 密钥（Key）"},{id:"C",text:"端点（Endpoint）+ 密钥（Key）+ 模型类型（Model Type）"},{id:"D",text:"部署名称（Deployment Name）+ 密钥（Key）+ 模型名称（Model Name）"}],answer:"B"},{id:"40",type:"single",content:`**背景**

你正在构建一个应用，该应用将接收来自法语和德语呼叫者的电话，需要：

- 将来电语音消息捕获为文字（自动转录）
- 按需将消息以英语回放

**题目**

应使用哪些 Azure 认知服务来分别完成这两项任务？`,explanation:"",options:[{id:"A",text:"文字转录：Speech-to-Text；回放英语：Text-to-Speech"},{id:"B",text:"文字转录：Text Analytics（语言检测）；回放英语：Translator"},{id:"C",text:"文字转录：Speech-to-Text；回放英语：Translator（翻译后）+ Text-to-Speech（合成语音）"},{id:"D",text:"文字转录：Translator；回放英语：Text-to-Speech"}],answer:"C"},{id:"41",type:"single",content:`**背景**

你正在开发一个应用，该应用将通过 Azure AI Language 服务处理敏感的客户数据。你需要确保只有特定的 Azure 资源才能访问 Language 服务，且解决方案必须**最小化管理工作量**。

**题目**

应在解决方案中配置什么？`,explanation:"",options:[{id:"A",text:"Azure Application Gateway"},{id:"B",text:"IPsec 规则"},{id:"C",text:"虚拟网络网关（Virtual Network Gateway）"},{id:"D",text:"虚拟网络规则（Virtual Network Rules）"}],answer:"D"},{id:"42",type:"multiple",content:`**背景**

你有一个 Azure AI 搜索 Web 应用，在审查活动日志时发现搜索查询量远超预期，怀疑**查询密钥（Query Key）已泄露**。

你需要在**最大限度减少应用停机时间**的前提下，阻止未授权访问并确保用户仅有只读访问权限。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"添加一个新的查询密钥"},{id:"B",text:"将应用更改为使用新的查询密钥"},{id:"C",text:"删除被泄露的旧查询密钥"},{id:"D",text:"重新生成所有管理员密钥"},{id:"E",text:"禁用 Azure AI Search 资源"}],answer:["A","B","C"]},{id:"43",type:"single",content:`**背景**

你正在构建一个聊天机器人，需要使用 Content Moderator 服务对用户消息进行内容审核。你需要识别消息中包含的**色情/性暗示语言**。

**题目**

应关注 Content Moderator Text Moderation API 响应中的哪个类别得分？`,explanation:"",options:[{id:"A",text:"Category1（成人内容得分）"},{id:"B",text:"Category2（性暗示内容得分）"},{id:"C",text:"Category3（侮辱性语言得分）"},{id:"D",text:"`personalData`（个人数据字段）"}],answer:"B"},{id:"44",type:"single",content:`**背景**

你使用 C# 编写了一个调用 Azure AI Language 关键短语提取（Key Phrase Extraction）API 的函数，并调用时传入字符串：

> "The quick brown fox jumps over the lazy dog"

**题目**

执行关键短语提取后，将输出哪些内容？`,explanation:"",options:[{id:"A",text:"Jumps over the"},{id:"B",text:"The quick brown fox jumps over the lazy dog"},{id:"C",text:"quick brown fox, lazy dog"},{id:"D",text:"The quick"}],answer:"C"},{id:"45",type:"single",content:`**背景**

你正在构建一个包含 1,000 张扫描手写调查问卷图像的分析方案。这些问卷**没有固定版式**（non-consistent layout），且内容为手写。你使用 Azure AI Document Intelligence 资源（AIdoc1）来提取数据，目标是**最小化开发工作量**。

**题目**

你应将图像上传到哪里，并使用哪种模型类型？`,explanation:"",options:[{id:"A",text:"上传到：Azure Cosmos DB；模型类型：自定义模板模型（Custom template）"},{id:"B",text:"上传到：Azure 存储账户；模型类型：自定义神经模型（Custom neural）"},{id:"C",text:"上传到：Azure 存储账户；模型类型：自定义模板模型（Custom template）"},{id:"D",text:"上传到：Azure 文件共享；模型类型：预构建 ID 模型（prebuilt-idDocument）"}],answer:"B"},{id:"46",type:"single",content:`**背景**

你正在使用 Azure OpenAI Studio 中的 **Completions playground**（GPT-3.5 Turbo 模型）。你有一段代码，需要让模型对代码进行**解释说明**，且解决方案必须**最小化成本**。

**题目**

应该怎么做？`,explanation:"",options:[{id:"A",text:"将模型更换为 GPT-4-32k"},{id:"B",text:"在提示词（Prompt）中添加 `// what does function F do?`"},{id:"C",text:"在提示词中添加 `function F(explanation)`"},{id:"D",text:"将 Temperature 参数设置为 1"}],answer:"B"},{id:"47",type:"single",content:`**背景**

你在 Azure 中构建了一个使用 Azure OpenAI 模型的聊天机器人。你需要确保机器人能够**阻止试图绕过内置安全功能的问题**（即防止越狱攻击 / Jailbreak）。

**题目**

应实现 Azure AI Content Safety 的哪项功能？`,explanation:"",options:[{id:"A",text:"受保护材料文本检测（Protected material text detection）"},{id:"B",text:"越狱风险检测（Jailbreak risk detection）"},{id:"C",text:"在线活动监控（Monitor online activity）"},{id:"D",text:"文本内容审核（Moderate text content）"}],answer:"B"},{id:"48",type:"multiple",content:`**背景**

你正在构建一个 Azure AI Chat 解决方案，使用 Chat playground（Azure AI Studio）。该聊天机器人需要以**简洁、正式的商务语言**生成文本，同时满足以下要求：

- 降低语言模型的运行成本
- 保持聊天机器人历史窗口（history window）大小不变

**题目**

应配置哪两项设置？`,explanation:"",options:[{id:"A",text:"系统消息（System message）：指定使用简洁正式语言"},{id:"B",text:"最大响应 Token 数（Max response tokens）：降低此值"},{id:"C",text:"Top P 参数：降低此值"},{id:"D",text:"Temperature 参数：设置为 0"},{id:"E",text:"部署的模型版本：切换为更小的模型（如 GPT-3.5 而非 GPT-4）"}],answer:["A","B"]},{id:"49",type:"multiple",content:`**背景**

你有一个 Azure AI Search 富化管道（Enrichment Pipeline），其中包含一个**自定义技能（Custom Skill）**，用于对文档执行语言检测和情感分析。

**题目**

Azure AI Search 在索引文档时，会按照什么顺序依次处理各个阶段？（将所有阶段排序）`,explanation:"",options:[{id:"A",text:"文档破解（Document Cracking）——从源格式中提取内容"},{id:"B",text:"字段映射（Field Mapping）——将原始字段映射到索引"},{id:"C",text:"技能执行（Skill Execution）——执行 AI 富化技能集"},{id:"D",text:"输出字段映射（Output Field Mapping）——将富化结果映射到索引字段"},{id:"E",text:"索引写入（Index Write）——将数据写入搜索索引"}],answer:["A","B","C","D","E"]},{id:"50",type:"single",content:`**背景**

你有一个包含 10,000 个 PDF 文档的训练数据集，文档内容包括扫描的书籍、漫画和杂志。

你正在构建一个解决方案，需要使用 **Language Studio** 训练一个自定义模型，将每个文档分类为书籍、漫画或杂志之一，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目类型？`,explanation:"",options:[{id:"A",text:"自定义提取模型（Custom extraction model）"},{id:"B",text:"多标签分类项目（Multi-label classification project）"},{id:"C",text:"自定义命名实体识别项目（Custom NER project）"},{id:"D",text:"多标签图像分类模型（Multi-label image classification model）"}],answer:"B"},{id:"51",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 解决方案，该方案包含一个索引，其中有一个博客文章集合，每篇文章包含 \`category\`（分类）字段。

你需要对这些文章进行索引，且要求：
- 在搜索结果中包含 \`category\` 字段的值
- 用户可以对 \`category\` 字段中的词语进行搜索
- 用户可以基于分类进行下钻过滤（Drill-down filtering / Faceted navigation）

**题目**

应为 \`category\` 字段配置哪些索引属性？`,explanation:"",options:[{id:"A",text:"Searchable、Facetable、Retrievable"},{id:"B",text:"Retrievable、Filterable、Sortable"},{id:"C",text:"Retrievable、Facetable、Key"},{id:"D",text:"Searchable、Sortable、Retrievable"}],answer:"A"},{id:"52",type:"single",content:`**背景**

你正在构建一个应用，需要识别文本消息中实时使用的语言。

**题目**

应使用哪个 SDK 包来检测消息中的语言？`,explanation:"",options:[{id:"A",text:"`Azure.AI.Translation.Text`"},{id:"B",text:"`Microsoft.CognitiveServices.Speech`"},{id:"C",text:"`Azure.AI.Translation.Document`"},{id:"D",text:"`Azure.AI.Translation.Speech`"}],answer:"A"},{id:"53",type:"multiple",content:`**背景**

你的博客平台允许用户发布评论，部分评论包含歧视性语言等有害内容。

你需要构建一个**原型解决方案**来检测有害内容，且解决方案必须**最小化开发工作量**。

**题目**

应执行哪两项操作？`,explanation:"",options:[{id:"A",text:'登录 Content Safety Studio，选择"审核文本内容（Moderate text content）"'},{id:"B",text:"从 Azure 门户创建 Azure AI Content Safety 资源"},{id:"C",text:"从 Azure 门户创建 Azure OpenAI 资源"},{id:"D",text:'登录 Azure AI Foundry，选择"安全 + 安全性"'},{id:"E",text:'登录 Content Safety Studio，选择"受保护材料检测"'}],answer:["A","B"]},{id:"54",type:"single",content:`**背景**

你有 100,000 张图像，需要构建一个应用来完成以下任务：

- **识别图像中的路标，并提取路标上的文字**
- **分析提取的文字，识别其中提到的知名地点**

解决方案必须**最小化开发工作量**。

**题目**

这两项任务应分别使用什么服务？`,explanation:"",options:[{id:"A",text:"提取路标文字→Custom Vision；识别知名地点→Azure AI Language NER"},{id:"B",text:"提取路标文字→Computer Vision（Read API）；识别知名地点→Azure AI Language（Entity Linking）"},{id:"C",text:"提取路标文字→Computer Vision（Read API）；识别知名地点→Azure AI Language（Named Entity Recognition）"},{id:"D",text:"提取路标文字→Form Recognizer；识别知名地点→Azure AI Language（Key Phrase Extraction）"}],answer:"C"},{id:"55",type:"single",content:`**背景**

你需要为 Azure AI Search 构建一个可以识别**地理位置**的索引方案。

**题目**

应在技能集（Skillset）中包含哪个内置技能？`,explanation:"",options:[{id:"A",text:"Azure OpenAI Embedding Skill"},{id:"B",text:"Document Extraction Skill（文档提取技能）"},{id:"C",text:"Entity Linking Skill（实体链接技能）"},{id:"D",text:"Entity Recognition Skill（实体识别技能）"}],answer:"D"},{id:"56",type:"single",content:`**背景**

你正在构建一个产品支持聊天机器人，支持文档存储在多个 PDF 文件中的知识库。解决方案必须**最小化开发工作量和成本**。

**题目**

应在解决方案中使用什么？`,explanation:"",options:[{id:"A",text:"Azure AI Language 对话语言理解（CLU）"},{id:"B",text:"Azure AI 语言检测"},{id:"C",text:"Azure AI Language 自定义问题解答（Custom Question Answering）"},{id:"D",text:"Azure OpenAI"}],answer:"C"},{id:"57",type:"single",content:`**背景**

你需要构建一个代理（Agent），该代理需要访问**过去 90 天内发布的公开可访问数据**。

你正在使用 Azure AI Agent Service 构建该代理。

**题目**

应在代码中配置哪种工具类型来实现该能力？`,explanation:"",options:[{id:"A",text:"`FileSearchTool`（文件搜索工具）"},{id:"B",text:"`BingGroundingTool`（Bing 搜索接地工具）"},{id:"C",text:"`CodeInterpreterTool`（代码解释器工具）"},{id:"D",text:"`AzureAISearchTool`（Azure AI 搜索工具）"}],answer:"B"},{id:"58",type:"multiple",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理，该代理需要使用**函数调用（Function Calling）**，并满足以下要求：

- 所有与指令匹配的函数都必须被触发
- 如果用户未提供必要参数，代理必须主动向用户索要这些参数

你使用 Semantic Kernel 构建该代理。

**题目**

在代码中，应配置哪两个关键设置来满足上述要求？`,explanation:"",options:[{id:"A",text:"`FunctionChoiceBehavior.Auto()`（自动函数选择行为）"},{id:"B",text:"`FunctionChoiceBehavior.Required()`（强制函数调用行为）"},{id:"C",text:"`ToolCallBehavior.EnableKernelFunctions`"},{id:"D",text:"`PromptExecutionSettings.AllowParallelToolCalls = true`"},{id:"E",text:"`KernelArguments` 中设置 `AutoInvokeKernelFunctions = true`"}],answer:["A","B"]},{id:"59",type:"single",content:`**背景**

你有一个 Azure AI Document Intelligence 资源（AIdoc1，标准 S0 层）。你有以下文件：

- File1：PDF 格式，5 页
- File2：JPEG 格式
- File3：DOCX 格式
- File4：PNG 格式
- File5：BMP 格式

**题目**

你需要**训练一个自定义提取模型**。哪些文件可以上传到 Document Intelligence Studio？`,explanation:"",options:[{id:"A",text:"File1 和 File2 仅"},{id:"B",text:"File2、File4 和 File5 仅"},{id:"C",text:"File1、File2 和 File4 仅"},{id:"D",text:"File1 和 File5 仅"},{id:"E",text:"File1、File2、File3、File4 和 File5 全部"}],answer:"C"},{id:"60",type:"single",content:`**背景**

你正在构建一个将用于机动车辆中的文字转语音（Text-to-Speech）应用。你需要**优化合成语音输出的质量**，使其在驾驶环境中更自然清晰。

**题目**

应配置 Speech Synthesis Markup Language（SSML，语音合成标记语言）中的哪个属性？`,explanation:"",options:[{id:"A",text:"`<mstts:express-as>` 元素的 `style` 属性"},{id:"B",text:"`<emphasis>` 元素的 `level` 属性"},{id:"C",text:"`<prosody>` 元素的 `pitch` 属性"},{id:"D",text:"`<voice>` 元素的 `effect` 属性"}],answer:"D"},{id:"61",type:"single",content:`**背景**

你正在构建一个多标签文本分类解决方案，聊天机器人需要将用户输入**分类到多个动态类别**中，且这些类别在推理时才被定义（而不是在训练时固定）。

**题目**

应使用哪项服务来对输入进行分类？`,explanation:`**Azure AI Language 自定义文本分类（Custom Text Classification）** 允许在 Language Studio 中定义分类标签并训练模型，支持单标签和多标签分类。对于"类别在推理时定义"的需求，自定义分类通过在系统提示或配置中动态指定类别标签来实现灵活分类。

- Azure OpenAI 文本分类（B）：通过提示词实现零样本（`,options:[{id:"A",text:"Azure OpenAI 文本摘要（Text Summarization）"},{id:"B",text:"Azure OpenAI 文本分类（Text Classification）"},{id:"C",text:"Azure AI Language 自定义命名实体识别（Custom NER）"},{id:"D",text:"Azure AI Language 自定义文本分类（Custom Text Classification）"}],answer:"D"},{id:"62",type:"single",content:`**背景**

你需要部署一个 Azure OpenAI 资源，供 App1 使用，且希望确保只有 App1 可以访问该资源中的特定模型部署。

**题目**

为 App1 提供访问权限应使用什么，App1 连接到特定部署时应使用什么？`,explanation:"",options:[{id:"A",text:"提供访问：API 密钥；连接部署：模型名称"},{id:"B",text:"提供访问：Bearer 令牌（Entra ID 身份验证）；连接部署：部署名称"},{id:"C",text:"提供访问：API 密钥；连接部署：部署名称"},{id:"D",text:"提供访问：Bearer 令牌；连接部署：模型类型"}],answer:"B"},{id:"63",type:"single",content:`**背景**

你有一个 Azure AI Language 资源（Resource1）和存储账户（storage1）。你在 storage1 中创建了 Blob 容器（container1）并上传了示例图像文件。

你需要使用 cURL 命令验证 Resource1 是否能识别**可能含有暴力内容的图像**。

**题目**

cURL 命令中，应使用什么端点和什么内容类型标头？`,explanation:"",options:[{id:"A",text:"端点：`/contentsafety/image:analyze`；Content-Type：`application/json`"},{id:"B",text:"端点：`/contentsafety/text:analyze`；Content-Type：`multipart/form-data`"},{id:"C",text:"端点：`/vision/v3.1/analyze`；Content-Type：`application/json`"},{id:"D",text:"端点：`/contentsafety/image:analyze`；Content-Type：`multipart/form-data`"}],answer:"A"},{id:"64",type:"single",content:`**背景**

你需要构建一个应用，该应用将比较多个文档之间的**语义相似性（Semantic Similarity）**，需要返回代表每个文档 Token 的**数值向量**，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪个 Azure OpenAI 模型？`,explanation:"",options:[{id:"A",text:"GPT-3.5"},{id:"B",text:"Embeddings（如 text-embedding-ada-002）"},{id:"C",text:"DALL-E"},{id:"D",text:"GPT-4"}],answer:"B"},{id:"65",type:"single",content:`**背景**

你有一个 Azure OpenAI 自定义模型，需要为其准备**微调（Fine-tuning）训练数据**，并使用 OpenAI CLI 数据准备工具处理。

你有以下文件：
- File1.tsv
- File2.xml
- File3.pdf
- File4.xlsx

**题目**

哪些文件可以上传到 OpenAI CLI 数据准备工具？`,explanation:"",options:[{id:"A",text:"仅 File1.tsv"},{id:"B",text:"仅 File2.xml"},{id:"C",text:"仅 File3.pdf"},{id:"D",text:"仅 File4.xlsx"},{id:"E",text:"File1.tsv 和 File4.xlsx"}],answer:"A"},{id:"66",type:"single",content:`**背景**

你正在开发一个使用 Azure AI Vision 客户端库的应用，需要通过 API 判断图像是**剪贴画（clipart）还是线条画（line drawing）**。

**题目**

在 API 请求中，应使用哪种 HTTP 方法，以及哪个 \`visualFeatures\` 参数值？`,explanation:"",options:[{id:"A",text:"GET；`description`"},{id:"B",text:"POST；`imageType`"},{id:"C",text:"POST；`tags`"},{id:"D",text:"GET；`objects`"}],answer:"B"},{id:"67",type:"multiple",content:`**背景**

你正在为 Azure AI Language 服务的自定义问题解答（Custom Question Answering）项目导入问答对。

**题目**

哪两种文件格式可以用于导入？`,explanation:"",options:[{id:"A",text:"Excel"},{id:"B",text:"TSV"},{id:"C",text:"JSON"},{id:"D",text:"LU 文件"},{id:"E",text:"CSV"}],answer:["B","E"]},{id:"68",type:"single",content:`**背景**

你有一个企业产品支持手册，需要构建一个基于该手册的聊天机器人，解决方案必须**最小化开发工作量和成本**。

**题目**

应使用哪种服务？`,explanation:"",options:[{id:"A",text:"Azure AI Phi-3-medium（含微调）"},{id:"B",text:"Azure AI Language 自定义问题解答（Custom Question Answering）"},{id:"C",text:"Azure OpenAI GPT-4（含 Azure AI Search 接地数据）"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"B"},{id:"69",type:"single",content:`**背景**

你需要为一个解决方案构建内容管道：需要对 PDF 中的表格数据进行分析，并将相关字段导出到数据库。解决方案中有两种文档类型：

- **内部支出申请授权表单**（Internal expenditure request authorization forms）
- **供应商发票**（Supplier invoices）

解决方案必须**最小化开发工作量**。

**题目**

这两种文档类型应分别使用哪种 Azure AI 服务/模型？`,explanation:"",options:[{id:"A",text:"授权表单→预构建 Invoice 模型；供应商发票→预构建 Invoice 模型"},{id:"B",text:"授权表单→自定义模型；供应商发票→预构建 Invoice 模型"},{id:"C",text:"授权表单→预构建 Document 模型；供应商发票→预构建 Layout 模型"},{id:"D",text:"授权表单→自定义模型；供应商发票→自定义模型"}],answer:"B"},{id:"70",type:"single",content:`**背景**

你正在开发一个应用，需要对文档中的电话号码和邮箱地址**进行掩码（Masking）处理**，以保护个人隐私信息（PII）。

你使用 Azure AI Language 服务实现此功能。

**题目**

在代码中应调用哪个 API 方法，并传入哪个参数来实现 PII 遮蔽？`,explanation:"",options:[{id:"A",text:'`RecognizeEntities`，设置 `piiCategories = ["PhoneNumber", "Email"]`'},{id:"B",text:'`RecognizePiiEntities`，设置 `domainFilter = "phi"`'},{id:"C",text:"`RecognizePiiEntities`，不设置额外参数（默认识别所有 PII 类型）"},{id:"D",text:"`AnalyzeSentiment`，设置 `showOpinionMining = true`"}],answer:"C"},{id:"71",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理，需要确保代理能访问近期（过去 90 天内）公开发布的数据。

**题目**

在使用 Azure AI Foundry Agent Service 构建代理的代码中，应如何完成工具配置？`,explanation:"",options:[{id:"A",text:"使用 `FileSearchTool`，并指定文件 ID"},{id:"B",text:"使用 `BingGroundingTool`，配置 Bing Search API 连接"},{id:"C",text:"使用 `CodeInterpreterTool`，并上传本地数据文件"},{id:"D",text:"使用 `AzureAISearchTool`，连接到一个已索引的知识库"}],answer:"B"},{id:"72",type:"single",content:`**背景**

你有 100,000 张图像，需要构建一个应用，完成以下任务：

- **识别图像中的路标，并生成每个路标的简短描述**
- **分析这些描述，生成关于不同类型路标及其出现频率的报告**

解决方案必须**最小化成本**。

**题目**

这两个任务应分别使用什么服务？`,explanation:"",options:[{id:"A",text:"生成路标描述→Custom Vision；生成报告→Azure AI Language"},{id:"B",text:"生成路标描述→Computer Vision（Image Analysis / Description 功能）；生成报告→Azure AI Language（Key Phrase Extraction）"},{id:"C",text:"生成路标描述→Computer Vision（Read API）；生成报告→Azure OpenAI"},{id:"D",text:"生成路标描述→Azure AI Content Understanding；生成报告→Azure AI Language（Key Phrase Extraction）"}],answer:"B"},{id:"73",type:"single",content:`**背景**

你正在构建一个文字转语音（Text-to-Speech）应用，使用**自定义神经语音（Custom Neural Voice）**。

你需要创建一个 SSML 文件，要求语音配置满足：
- 表达**平静的语调**
- 模仿**年轻成年女性的声音**

**题目**

应在 SSML 代码中配置哪两个关键元素/属性？`,explanation:"",options:[{id:"A",text:'使用 `<voice name="young-adult-female">`；在 `<mstts:express-as style="calm">` 中包裹文本'},{id:"B",text:'使用 `<prosody pitch="-10%">`；使用 `<voice gender="female">`'},{id:"C",text:'使用 `<emphasis level="reduced">`；使用 `<voice age="25">`'},{id:"D",text:'使用 `<mstts:express-as style="calm">`；选择 `ShimmerNeural`（或其他年轻女性神经语音）'}],answer:"A"},{id:"74",type:"single",content:`**背景**

你有一个 Azure AI Search 解决方案，需要在其中添加一个**自定义技能**，使其能够通过 Azure AI Document Intelligence 识别并从发票中提取属性，供 App1 使用。

**题目**

应在解决方案中包含哪个服务？`,explanation:"",options:[{id:"A",text:"Azure OpenAI"},{id:"B",text:"Azure AI Immersive Reader"},{id:"C",text:"Azure AI Document Intelligence"},{id:"D",text:"Azure Custom Vision"}],answer:"C"},{id:"75",type:"single",content:`**背景**

你有 1,000 段视频文件，需要对视频进行**情感分析**，使用 Azure AI Content Understanding 项目。解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目模板？`,explanation:"",options:[{id:"A",text:"视频镜头分析（Video shot analysis）"},{id:"B",text:"媒体资产管理（Media asset management）"},{id:"C",text:"广告分析（Advertising）"}],answer:"B"},{id:"76",type:"multiple",content:`**背景**

你有一个 Azure AI Search 资源（AlSearch1），其索引包含一个向量字段。

你需要：
- 使用 Azure AI Agent Service 部署一个新代理
- 将 AlSearch1 索引连接到该代理
- 验证索引与代理的集成

**题目**

应按顺序执行哪四项操作？`,explanation:"",options:[{id:"A",text:"在 Azure AI Foundry 中创建新项目"},{id:"B",text:"在项目中创建一个代理，配置 AzureAISearchTool 工具"},{id:"C",text:"为 AlSearch1 创建一个连接（Connection）"},{id:"D",text:"测试代理，向代理发送涉及 AlSearch1 索引数据的查询"},{id:"E",text:"将 AlSearch1 的 API 密钥添加到 Azure Key Vault"}],answer:["A","C","B","D"]},{id:"77",type:"single",content:`**背景**

你有一个 Azure AI 搜索（Azure AI Search）资源（Search1）和一个使用它进行内容索引的应用（App1）。

你需要确保 Search1 的安全，满足以下要求：
- 防止来自互联网的直接访问
- 限制每个应用只能执行特定查询

**题目**

应分别采取什么措施来满足这两个需求？`,explanation:"",options:[{id:"A",text:"防止互联网访问→配置 IP 防火墙规则；限制查询→创建独立的查询密钥"},{id:"B",text:"防止互联网访问→部署私有端点（Private Endpoint）；限制查询→创建独立的查询密钥"},{id:"C",text:"防止互联网访问→配置网络安全组（NSG）；限制查询→使用 Azure AD 条件访问"},{id:"D",text:"防止互联网访问→部署私有端点；限制查询→配置 Azure RBAC 角色"}],answer:"B"},{id:"78",type:"single",content:`**背景**

你正在构建一个处理来自法语和德语来电的通话处理系统。系统必须：

- 将来电语音消息捕获为文字（自动转录，保留原始语言）
- 按需将消息以**英语**回放

**题目**

应使用哪些 Azure 认知服务来完成这两项任务？`,explanation:"",options:[{id:"A",text:"捕获语音→Speech-to-Text（语音转文字）；英语回放→Text-to-Speech（文字转语音）"},{id:"B",text:"捕获语音→Speech-to-Text；英语回放→Translator + Text-to-Speech"},{id:"C",text:"捕获语音→Text Analytics（语言检测）；英语回放→Translator"},{id:"D",text:"捕获语音→Translator；英语回放→Text-to-Speech"}],answer:"B"},{id:"79",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 和 Semantic Kernel 构建一个代理，该代理使用自定义插件。你需要确保代理满足：

- 使用函数调用（Function Calling）
- 所有匹配指令的函数必须被触发
- 如果用户未提供函数所需的必要参数，代理必须主动向用户索取

**题目**

在 Semantic Kernel 代码中，以下哪个设置组合可以满足上述所有要求？`,explanation:"",options:[{id:"A",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.Auto()`；`AutoInvokeKernelFunctions = false`"},{id:"B",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.Required()`；`AutoInvokeKernelFunctions = true`"},{id:"C",text:"`ToolCallBehavior = ToolCallBehavior.AutoInvokeKernelFunctions`（自动调用）配合必要参数验证"},{id:"D",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.None()`；手动处理工具调用"}],answer:"C"},{id:"80",type:"single",content:`**背景**

你需要为企业 DevOps 流水线（Pipeline1）添加一个步骤，用于**识别已创建的 Azure AI 服务账户**。解决方案必须**最小化开发工作量**。

**题目**

应运行哪个 Azure CLI 命令？`,explanation:"",options:[{id:"A",text:"`az resource link`"},{id:"B",text:"`az account list`"},{id:"C",text:"`az cognitiveservices account network-rule`"},{id:"D",text:"`az cognitiveservices account show`"}],answer:"D"},{id:"81",type:"multiple",content:`**背景**

你正在构建一个社交媒体应用，允许用户分享图像。你需要确保不当图像内容被识别并阻止，且解决方案必须**最小化开发工作量**。

**题目**

哪两种工具可以实现该需求？（每个正确答案都是完整解决方案）`,explanation:"",options:[{id:"A",text:"Microsoft Defender for Cloud Apps"},{id:"B",text:"Azure AI Custom Vision"},{id:"C",text:"Azure AI Vision"},{id:"D",text:"Azure AI Content Safety"},{id:"E",text:"Azure AI Document Intelligence"}],answer:["C","D"]},{id:"82",type:"multiple",content:`**背景**

你需要在 Azure 中配置一个 Language Understanding 服务（LUIS），并通过 Microsoft Entra ID（前 Azure AD）令牌来验证应用的身份。

**题目**

为确保应用能够使用 Entra ID 令牌对 Azure AI Speech 服务进行身份验证，应执行哪两项操作？`,explanation:"",options:[{id:"A",text:"创建条件访问策略（Conditional Access Policy）"},{id:"B",text:"创建私有端点（Private Endpoint）"},{id:"C",text:"申请 X.509 证书"},{id:"D",text:"配置自定义子域（Custom Subdomain）"},{id:"E",text:"启用虚拟网络服务端点（Virtual Network Service Endpoint）"}],answer:["B","C"]},{id:"83",type:"single",content:`**背景**

你正在设计一个内容管理系统，需要优化用户的阅读体验，特别是针对**有阅读困难或学习差异（如阅读障碍症，dyslexia）** 的用户。

**题目**

应在解决方案中包含哪项 Azure 服务？`,explanation:"",options:[{id:"A",text:"Azure AI Translator（翻译器）"},{id:"B",text:"Azure AI Document Intelligence"},{id:"C",text:"Azure AI Immersive Reader（沉浸式阅读器）"},{id:"D",text:"Azure AI Language"}],answer:"C"},{id:"84",type:"single",content:`**背景**

你有一个本地文件夹，包含以下视频文件（假设格式和大小如下）：

- File1：WMV 格式，34 分钟，400 MB
- File2：AVI 格式，90 分钟，1,200 MB
- File3：MOV 格式，300 分钟，980 MB
- File4：MP4 格式，80 分钟，1,800 MB

**题目**

哪些文件可以上传到 Azure AI Video Indexer 网站？`,explanation:"",options:[{id:"A",text:"File1、File2 和 File4 仅"},{id:"B",text:"File1 和 File2 仅"},{id:"C",text:"File1、File2 和 File3 仅"},{id:"D",text:"File1、File2、File3 和 File4 全部"},{id:"E",text:"File1 和 File3 仅"}],answer:"E"},{id:"85",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（CS1），需要创建一个**自定义类别（Custom Category）** 来检测特定类型的有害内容。

**题目**

在 cURL 命令中，应使用哪个 HTTP 方法和端点来添加自定义类别？`,explanation:"",options:[{id:"A",text:"`POST /contentsafety/text/categories`"},{id:"B",text:"`PUT /contentsafety/image/categories/{categoryName}`"},{id:"C",text:"`PATCH /contentsafety/text/categories/{categoryName}`"},{id:"D",text:"`POST /contentsafety/text/categories/{categoryName}`"}],answer:"A"},{id:"86",type:"single",content:`**背景**

你正在开发一个使用 Azure AI Language 服务分析文档的应用，需要**识别文档中的行业特定技术术语**。解决方案必须**最小化开发工作量**。

**题目**

应使用什么功能？`,explanation:"",options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"对话语言理解（Conversational Language Understanding，CLU）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"87",type:"single",content:`**背景**

你有一个 Azure AI Search 索引（AlSearch1），其中包含向量字段。你需要将一篇用户输入的文章与现有文档进行**语义相似度比较**。

**题目**

应使用哪种 Azure OpenAI 模型生成文章的向量表示？`,explanation:"",options:[{id:"A",text:"`text-embedding-ada-002`"},{id:"B",text:"`gpt-4-vision-preview`"},{id:"C",text:"`text-davinci-003`"},{id:"D",text:"`dall-e-3`"}],answer:"A"},{id:"88",type:"single",content:`**背景**

你正在构建一个解决方案，需要对人力资源（HR）政策（存储为 PDF 格式）进行问题解答，且要求**对同一问题每次都返回完全相同的答案**。解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中使用哪个服务？`,explanation:"",options:[{id:"A",text:"Azure AI Language（自定义问题解答）"},{id:"B",text:"Azure Machine Learning"},{id:"C",text:"Azure OpenAI"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"A"},{id:"89",type:"single",content:`**背景**

你有以下文件，需要使用 Azure AI Content Understanding 进行分析：

- File1.pdf
- File2.jpg
- File3.docx
- File4.webp
- File5.png

**题目**

哪些文件可以使用 Azure AI Content Understanding 进行分析？`,explanation:"",options:[{id:"A",text:"File1.pdf 和 File3.docx 仅"},{id:"B",text:"File1.pdf、File2.jpg 和 File5.png 仅"},{id:"C",text:"File1.pdf、File2.jpg 和 File3.docx 仅"},{id:"D",text:"File1.pdf、File2.jpg、File3.docx 和 File5.png 仅"},{id:"E",text:"File1.pdf、File2.jpg、File3.docx、File4.webp 和 File5.png 全部"}],answer:"D"},{id:"90",type:"single",content:`**背景**

你正在构建一个应用，需要从文本消息中使用 Azure AI Language 的**实体链接（Entity Linking）** 功能，为文本中提及的实体**提供参考链接到 Wikipedia 等支持文章**。

**题目**

应使用哪个 Azure AI Language 功能？`,explanation:"",options:[{id:"A",text:"实体链接（Entity Linking）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"Azure AI Content Safety"},{id:"D",text:"关键短语提取（Key Phrase Extraction）"}],answer:"A"},{id:"91",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理（Agent），用于在 Azure AI Foundry 中运行。

你有以下需求：
- 代理能够理解用户的书面和口头问题
- 生成问题的答案
- 以语音形式输出答案

**题目**

应使用哪个工具来创建代理项目？`,explanation:"",options:[{id:"A",text:"Language Studio"},{id:"B",text:"Azure AI Foundry"},{id:"C",text:"Speech Studio"},{id:"D",text:"Azure 门户"}],answer:"B"},{id:"92",type:"single",content:`**背景**

你需要准备 Azure OpenAI 模型的微调（Fine-tuning）训练数据，有 500 组提示-补全对（Prompt-Completion Pairs）。

**题目**

训练数据文件应使用哪种格式？`,explanation:"",options:[{id:"A",text:"XML"},{id:"B",text:"JSONL（JSON Lines）"},{id:"C",text:"CSV"},{id:"D",text:"TSV"}],answer:"B"},{id:"93",type:"multiple",content:`**背景**

你构建了一个使用 Azure AI Language 自定义问题解答服务的聊天机器人，知识库基于内部支持 FAQ 文档训练。

你发现聊天机器人**无法对常见问题提供正确答案**。你需要提高响应准确性，且解决方案必须**最小化开发工作量**。

**题目**

应在 Language Studio 中按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"启用主动学习（Enable Active Learning）"},{id:"B",text:"查看主动学习建议（Review active learning suggestions）"},{id:"C",text:"接受建议并添加为替代问题"},{id:"D",text:"保存并训练知识库"},{id:"E",text:"重新发布知识库"}],answer:["A","B","C","D","E"]},{id:"94",type:"single",content:`**背景**

你正在构建一个语言学习解决方案，需要推荐哪些 Azure 服务来完成以下任务：

- **任务1**：分析教师提交的课程计划，提取关键字段（如课时、必读文本）
- **任务2**：分析学习内容，为文本中的常用词汇或短语提供图片示意

解决方案必须**最小化开发工作量**。

**题目**

这两个任务应分别使用什么 Azure 服务？`,explanation:"",options:[{id:"A",text:"任务1→Azure AI Document Intelligence；任务2→Azure AI Vision（Image Analysis）"},{id:"B",text:"任务1→Azure AI Language（Key Phrase Extraction）；任务2→Azure AI Custom Vision"},{id:"C",text:"任务1→Azure AI Document Intelligence；任务2→Azure AI Immersive Reader"},{id:"D",text:"任务1→Azure AI Language（Named Entity Recognition）；任务2→Azure AI Vision"}],answer:"C"},{id:"95",type:"single",content:`**背景**

你有一个 Azure AI Document Intelligence 资源（AIdoc1，Standard S0 层），需要使用**业务名片模型 v2.1** 分析名片图像的应用（App1）。

你需要**更新 App1 以支持二维码（QR Code）识别**。解决方案必须**最小化管理工作量**。

**题目**

第一步应该做什么？`,explanation:"",options:[{id:"A",text:"部署自定义模型"},{id:"B",text:"实现 Read 模型"},{id:"C",text:"将业务名片模型升级到 v3.0"},{id:"D",text:"实现合同（Contract）模型"}],answer:"C"},{id:"96",type:"single",content:`**背景**

你的应用需要使用 Azure AI Speech 服务和 Language API，且需要通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的 Azure 资源？`,explanation:"",options:[{id:"A",text:"Azure AI Language 资源"},{id:"B",text:"Azure AI Foundry service（AI Foundry 服务）"},{id:"C",text:"Azure AI Speech 资源"},{id:"D",text:"Azure AI Foundry Content Safety"}],answer:"B"},{id:"97",type:"single",content:`**背景**

你有一个 Azure AI Search 解决方案，包含一个知识存储，其中存有非结构化 JSON 数据和扫描 PDF 文档中的文本。

**题目**

对于以下两种数据类型，应分别使用哪种投影类型？

- 非结构化 JSON 数据
- 扫描 PDF 中提取的图像/文件`,explanation:"",options:[{id:"A",text:"JSON 数据→表投影（Table projection）；PDF 图像→对象投影（Object projection）"},{id:"B",text:"JSON 数据→对象投影（Object projection）；PDF 图像→文件投影（File projection）"},{id:"C",text:"JSON 数据→文件投影（File projection）；PDF 图像→表投影（Table projection）"},{id:"D",text:"JSON 数据→对象投影（Object projection）；PDF 图像→对象投影（Object projection）"}],answer:"B"},{id:"98",type:"single",content:`**背景**

你正在构建一个处理用户输入文档并识别潜在暴力相关图像内容的解决方案，使用 Azure AI Content Safety 资源（Resource1）和存储账户（storage1）中的样本图像集。

**题目**

提交图像给 Content Safety API 进行暴力检测时，期望的输出结果是什么？

对于一张仅包含圆形（circle）的测试图像，暴力内容检测的得分应该是多少？`,explanation:"",options:[{id:"A",text:"0"},{id:"B",text:"0.0"},{id:"C",text:"7"},{id:"D",text:"100"}],answer:"A"},{id:"99",type:"single",content:`**背景**

你正在开发一个应用，使用 Azure AI Language 服务对文本中的城市名称进行命名实体识别（NER）检测。

**题目**

在调用 \`RecognizeEntities\` 方法时，以下说法是否正确？

假设调用时传入文本："Our tour of London included a visit to Buckingham Palace."

该函数的输出将是什么？`,explanation:"",options:[{id:"A",text:"Our tour of London included a visit to Buckingham Palace"},{id:"B",text:"London 和 Tour（仅这两项）"},{id:"C",text:"Tour 和 visit（仅这两项）"},{id:"D",text:"London 和 Buckingham Palace（仅这两项）"}],answer:"D"},{id:"100",type:"single",content:`**背景**

你正在构建一个 Azure AI Foundry 项目中的代理，需要利用 Azure AI Search 索引数据来回答用户问题。你需要将 Azure AI Search 索引连接到代理。

**题目**

为了让代理能够访问 Azure AI Search 中 GPT-4 向量索引的数据，在 Azure AI Foundry 中应为代理配置哪种工具类型？`,explanation:"",options:[{id:"A",text:"`FileSearchTool`"},{id:"B",text:"`BingGroundingTool`"},{id:"C",text:"`AzureAISearchTool`"},{id:"D",text:"`CodeInterpreterTool`"}],answer:"C"},{id:"101",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI GPT-4 模型的聊天机器人，需要确保机器人**不会返回包含仇恨言论的答案**。

**题目**

应为 GPT-4 模型配置什么？`,explanation:"",options:[{id:"A",text:"Frequency penalty（频率惩罚）参数"},{id:"B",text:"滥用监控（Abuse Monitoring）"},{id:"C",text:"内容过滤器（Content Filter）"},{id:"D",text:"Temperature 参数"}],answer:"C"},{id:"102",type:"single",content:`**背景**

你有一个名为 AI1 的 Azure OpenAI 资源，其中部署了三个 GPT-3.5 模型，每个针对不同工作负载优化。你计划部署三个应用，每个应用通过 REST API 访问 AI1，并使用针对其工作负载优化的部署。

你需要为每个应用提供对 AI1 的访问权限，并确保**只有这些应用才能访问 AI1**。

**题目**

应使用什么方式为应用提供对 AI1 的访问，以及每个应用应使用什么来连接到对应的部署？`,explanation:"",options:[{id:"A",text:"访问方式：API 密钥；连接部署：模型名称"},{id:"B",text:"访问方式：Bearer 令牌（Entra ID）；连接部署：部署名称"},{id:"C",text:"访问方式：API 密钥；连接部署：部署名称"},{id:"D",text:"访问方式：Bearer 令牌；连接部署：模型类型"}],answer:"B"},{id:"103",type:"single",content:`**背景**

你有一个包含两个 Azure 资源的订阅：Azure OpenAI 资源（AI1）和 Azure AI Content Safety 资源（CS1）。你构建了一个聊天机器人，使用 AI1 生成答案，使用 CS1 检查输入输出中的不当内容。

你需要**优化内容过滤器配置**，通过运行示例问题来测试配置效果。

以下三种方案，哪种能满足需求？

**题目**

- 方案 A：从 Content Safety Studio 使用**文本内容审核（Moderate text content）** 功能运行测试
- 方案 B：从 Content Safety Studio 使用**受保护材料检测（Protected material detection）** 功能运行测试
- 方案 C：从 Content Safety Studio 使用**在线活动监控（Monitor online activity）** 功能运行测试

哪种方案满足要求？`,explanation:"",options:[{id:"A",text:"仅方案 A"},{id:"B",text:"仅方案 B"},{id:"C",text:"仅方案 C"},{id:"D",text:"三种方案均不满足"}],answer:"A"},{id:"104",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源（AI1）和一个用户（User1）。

你需要确保 User1 能执行以下操作：
- 向 AI1 **上传数据集**
- **微调（Fine-tune）** AI1 中的现有模型

解决方案必须遵循**最小权限原则**。

**题目**

应为 User1 分配哪个角色？`,explanation:"",options:[{id:"A",text:"Cognitive Services Contributor"},{id:"B",text:"Contributor"},{id:"C",text:"Cognitive Services OpenAI User"},{id:"D",text:"Cognitive Services OpenAI Contributor"}],answer:"D"},{id:"105",type:"multiple",content:`**背景**

你正在构建一个电话处理解决方案，使用 Azure AI Speech 服务和**自定义神经语音（Custom Neural Voice）**。

你需要从 Speech Studio 创建自定义语音模型。

**题目**

在 Speech Studio 中，创建自定义语音模型应按顺序执行哪五项操作？`,explanation:"",options:[{id:"A",text:"创建项目（Create a project）"},{id:"B",text:"上传训练数据（Upload training data）"},{id:"C",text:"训练模型（Train the model）"},{id:"D",text:"获取语音人才同意（Obtain voice talent consent）"},{id:"E",text:"部署模型到端点（Deploy to endpoint）"},{id:"F",text:"使用 SSML 测试语音效果"}],answer:["D","A","B","C","E"]},{id:"106",type:"single",content:`**背景**

你有一个用于机器人部署的 Azure DevOps 流水线（Pipeline1）。流水线包含创建 Azure AI 服务账户的步骤。你需要添加一个步骤来**识别已创建的 Azure AI 服务账户**，且解决方案必须**最小化开发工作量**。

**题目**

应运行哪个 Azure CLI 命令？`,explanation:"",options:[{id:"A",text:"`az resource link`"},{id:"B",text:"`az account list`"},{id:"C",text:"`az cognitiveservices account network-rule list`"},{id:"D",text:"`az cognitiveservices account show`"}],answer:"D"},{id:"107",type:"single",content:`**背景**

你正在构建一个代理，使用 Semantic Kernel SDK，该代理将使用**自定义插件（Custom Plugin）**，并满足以下要求：

- 代理必须使用函数调用（Function Calling）
- 所有与指令匹配的函数都必须被触发
- 如果用户未提供函数的必要参数，代理必须向用户索取

**题目**

在 Semantic Kernel 代码中，应将 \`FunctionChoiceBehavior\` 设置为什么，以及执行设置应如何配置？`,explanation:"",options:[{id:"A",text:"`FunctionChoiceBehavior.Auto()`；`AutoInvokeKernelFunctions = true`"},{id:"B",text:"`FunctionChoiceBehavior.None()`；`AutoInvokeKernelFunctions = false`"},{id:"C",text:"`FunctionChoiceBehavior.Required()`；手动处理工具调用响应"},{id:"D",text:"`FunctionChoiceBehavior.Auto()` 搭配 `ToolCallBehavior.AutoInvokeKernelFunctions`"}],answer:"A"},{id:"108",type:"single",content:`**背景**

你有一个 Azure AI 内容理解（Content Understanding）资源（cu1），需要创建一个**自定义分析器（Custom Analyzer）** 来分析文档。

**题目**

在 cURL 命令中，应使用哪个 HTTP 方法和端点路径来创建自定义分析器？`,explanation:"",options:[{id:"A",text:"`GET /contentunderstanding/analyzers/{analyzerName}`"},{id:"B",text:"`PUT /contentunderstanding/analyzers/{analyzerName}`"},{id:"C",text:"`POST /contentunderstanding/analyzers`"},{id:"D",text:"`PATCH /contentunderstanding/analyzers/{analyzerName}`"}],answer:"B"},{id:"109",type:"single",content:`**背景**

你有一个 Azure AI Speech 服务资源（Resource1），并运行以下 Python 代码：

\`\`\`python
speech_config = speechsdk.SpeechConfig(
    subscription="your_key",
    region="eastus"
)
audio_config = speechsdk.audio.AudioOutputConfig(
    filename="Output.mp3"
)
synthesizer = speechsdk.SpeechSynthesizer(
    speech_config=speech_config,
    audio_config=audio_config
)
result = synthesizer.speak_text_async("Hello World").get()
\`\`\`

**题目**

运行上述代码后播放 Output.mp3 文件，以下哪项说法正确？`,explanation:"",options:[{id:"A",text:'Output.mp3 包含用中文朗读的"Hello World"'},{id:"B",text:'Output.mp3 包含用默认语音（英语）朗读的"Hello World"'},{id:"C",text:"代码会失败，因为未指定语音名称（voice name）"},{id:"D",text:"Output.mp3 的格式为 WAV 而非 MP3"}],answer:"B"},{id:"110",type:"single",content:`**背景**

你正在构建一个语言学习应用，使用 Azure AI Language 服务分析文本。你需要识别文本中**知名艺人的乐队名称**（如"The Beatles"、"BTS"等），并提供指向相关 Wikipedia 页面的链接以供参考。

**题目**

应使用哪个 Azure AI Language 功能？`,explanation:"",options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"对话语言理解（CLU）"},{id:"C",text:"实体链接（Entity Linking）"},{id:"D",text:"命名实体识别（NER）"}],answer:"C"},{id:"111",type:"single",content:`**背景**

你正在设计一个解决方案，需要对存储为 PDF 格式的人力资源政策进行问答。要求对**同一问题始终返回完全相同的答案**，且解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中包含哪个服务？`,explanation:"",options:[{id:"A",text:"Azure AI Language（自定义问题解答）"},{id:"B",text:"Azure Machine Learning"},{id:"C",text:"Azure OpenAI（GPT-4）"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"A"},{id:"112",type:"single",content:`**背景**

你正在构建一个 Azure AI Agent Service 代理，需要使用 **Azure AI Foundry Agent Service** 部署该代理，其中包含一个自定义 API，用于获取给定位置的当前时间。

你需要**测试该自定义 API 的功能**。

**题目**

在 cURL 命令测试中，应使用哪种方式来调用自定义 API 端点？`,explanation:"",options:[{id:"A",text:"使用 `POST` 方法直接调用代理端点，并在请求体中包含 API 调用参数"},{id:"B",text:"在 Azure AI Foundry 中，使用 Agent playground 向代理发送包含位置信息的测试消息"},{id:"C",text:"使用 `GET` 方法调用自定义 API 的直接端点（如 `https://api.example.com/time?location=Tokyo`）"},{id:"D",text:'在 Azure 门户中，使用"诊断和解决问题"工具测试 API'}],answer:"C"},{id:"113",type:"single",content:`**背景**

你正在为 Azure AI Search 创建一个带有技能集（Skillset）的索引器，该技能集包含一个执行语言检测和情感分析的自定义技能。

你需要了解 Azure AI Search 对文档进行**索引处理的顺序**。

**题目**

以下哪个选项正确描述了索引器处理文档时各阶段的执行顺序？`,explanation:"",options:[{id:"A",text:"字段映射 → 文档破解 → 技能执行 → 输出字段映射 → 索引写入"},{id:"B",text:"文档破解 → 技能执行 → 字段映射 → 输出字段映射 → 索引写入"},{id:"C",text:"文档破解 → 字段映射 → 技能执行 → 输出字段映射 → 索引写入"},{id:"D",text:"技能执行 → 文档破解 → 字段映射 → 输出字段映射 → 索引写入"}],answer:"C"},{id:"114",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个将音频文件翻译的应用。应用需要将英语音频翻译成意大利语。

**题目**

在 Speech SDK 代码中，用于设置**源语言（输入语言）** 和**目标语言（输出语言）** 的正确配置是什么？`,explanation:"",options:[{id:"A",text:'`translationConfig.SpeechRecognitionLanguage = "it-IT"`；`translationConfig.AddTargetLanguage("en-US")`'},{id:"B",text:'`translationConfig.SpeechRecognitionLanguage = "en-US"`；`translationConfig.AddTargetLanguage("it")`'},{id:"C",text:'`translationConfig.SourceLanguage = "en"`；`translationConfig.TargetLanguage = "it-IT"`'},{id:"D",text:'`translationConfig.SpeechRecognitionLanguage = "en-US"`；`translationConfig.AddTargetLanguage("it-IT")`'}],answer:"B"},{id:"115",type:"single",content:`**背景**

你有一个 Azure AI 订阅，包含 Azure AI Content Safety 资源（resource1）。你构建了一个社交媒体应用，允许用户上传图像，需要对用户上传内容进行内容审核。

**题目**

以下 cURL 命令中，哪些说法关于该命令是否正确？（判断题）

假设命令使用了 \`POST\` 方法调用 \`/contentsafety/image:analyze\` 端点，请求体包含图像 URL，头部包含订阅密钥，并指定检测类别为 \`["Hate", "SelfHarm", "Sexual", "Violence"]\`。

判断以下说法：
1. 命令使用了正确的 HTTP 方法
2. 该命令可以同时检测图像中的多个内容类别
3. 该命令可以直接处理本地文件路径（如 \`C:\\images\\test.jpg\`）`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-否，3-是"}],answer:"B"},{id:"116",type:"single",content:`**背景**

你需要部署一个 Azure OpenAI 资源，并使用 ARM 模板（Azure Resource Manager Template）确保资源能够响应每分钟 600 个请求。

**题目**

在 ARM 模板中，应如何配置该资源以满足请求速率要求？`,explanation:"",options:[{id:"A",text:"在 `sku` 属性中设置 `capacity: 600`"},{id:"B",text:"在 `properties` 中设置 `rateLimit: 600`"},{id:"C",text:"在部署（Deployment）资源的 `sku` 属性中设置 `capacity: 60`（单位为千 token/分钟，600 rps ≈ 60K TPM）"},{id:"D",text:"在 ARM 模板的 `parameters` 中设置 `requestsPerMinute: 600`"}],answer:"C"},{id:"117",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要将这些图像分类为**照片（photograph）**、**手绘图（drawing）** 或**剪贴画（clipart）**。

**题目**

应使用哪个 Computer Vision 端点，并关注响应中的哪个属性？`,explanation:"",options:[{id:"A",text:"使用 `/analyze`（POST），`visualFeatures=Tags`，关注 `tags[].name`"},{id:"B",text:"使用 `/analyze`（POST），`visualFeatures=ImageType`，关注 `imageType.clipArtType` 和 `imageType.lineDrawingType`"},{id:"C",text:"使用 `/describe`（POST），关注 `description.captions[].text`"},{id:"D",text:"使用自定义视觉（Custom Vision）进行三分类"}],answer:"B"},{id:"118",type:"single",content:`**背景**

你使用 Python 编写了一个调用 Azure AI Language 服务的函数：

\`\`\`python
def get_entities(client, text):
    response = client.recognize_entities(documents=[text])[0]
    return [entity for entity in response.entities]
\`\`\`

你调用该函数并传入：
> "Our tour of London included a visit to Buckingham Palace."

**题目**

该函数的输出将包含哪些内容？`,explanation:"",options:[{id:"A",text:"Our tour of London included a visit to Buckingham Palace（整个句子）"},{id:"B",text:"London 和 Buckingham Palace"},{id:"C",text:"tour 和 visit"},{id:"D",text:"London only"}],answer:"B"},{id:"119",type:"single",content:`**背景**

你正在构建一个应用，该应用使用 Azure AI Translator 服务进行文本翻译。你需要将用户输入的文本从检测到的任意语言翻译为英语，且内容必须**保留在美洲地区**（数据主权要求）。

**题目**

应使用哪个 Translator 服务端点 URL 前缀来满足数据主权要求？`,explanation:"",options:[{id:"A",text:"`https://api.cognitive.microsofttranslator.com`（全球端点）"},{id:"B",text:"`https://api-nam.cognitive.microsofttranslator.com`（北美地区端点）"},{id:"C",text:"`https://api-eur.cognitive.microsofttranslator.com`（欧洲地区端点）"},{id:"D",text:"`https://eastus.api.cognitive.microsoft.com`（East US 区域端点）"}],answer:"B"},{id:"120",type:"single",content:`**背景**

你正在使用 Azure AI Vision 的图像分析 API 构建一个应用。应用代码如下（伪代码）：

\`\`\`python
client = ImageAnalysisClient(endpoint, credential)
result = client.analyze(
    image_url="https://example.com/road.jpg",
    visual_features=[VisualFeatures.CAPTION, VisualFeatures.READ]
)
print(result.caption.text)  # 输出图像描述
print(result.read.blocks)   # 输出 OCR 识别的文本块
\`\`\`

**题目**

对于以下说法，判断是否正确：

1. 同一次 API 调用可以同时获取图像描述（Caption）和 OCR 文本（Read）
2. \`result.caption.text\` 返回的是一个字符串
3. \`result.read.blocks\` 中包含每个检测到的词语的置信度分数`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-是"},{id:"D",text:"1-是，2-否，3-是"}],answer:"A"},{id:"121",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，配置了如下模型设置：
- Temperature：1
- Top P（Top Probabilities）：0.5
- Max response tokens：100

你向模型提问并收到了回答。

**题目**

对于以下说法，判断是否正确：

1. 若将 Temperature 降低到 0，模型的输出将更具确定性
2. 若将 Max response tokens 设置为 50，模型可能会在句子中间截断回答
3. Top P = 0.5 意味着模型每次只考虑概率最高的 50% 的词汇候选`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-是，2-否，3-是"},{id:"D",text:"1-否，2-是，3-是"}],answer:"A"},{id:"122",type:"single",content:`**背景**

你正在构建一个需要对人力资源政策 PDF 进行问答的解决方案。你已经使用 Azure AI Language 创建了一个自定义问题解答（Custom Question Answering）项目，需要通过 cURL 命令测试机器人，确保只有当**置信度分数达到 95% 或以上**时才返回答案。

**题目**

在 cURL 命令的请求体中，应设置哪个参数来实现置信度阈值控制？`,explanation:"",options:[{id:"A",text:'`"confidenceThreshold": 95`'},{id:"B",text:'`"scoreThreshold": 0.95`'},{id:"C",text:'`"confidenceScoreThreshold": 95`'},{id:"D",text:'`"minimumConfidence": 0.95`'}],answer:"B"},{id:"123",type:"single",content:`**背景**

你正在构建一个聊天机器人，该机器人需要在对话过程中根据用户输入动态调整回答策略。机器人需要引导用户完成**航班预订**流程，并在用户未提供有效出发日期时**反复询问**，直到获得有效日期或用户取消。

**题目**

对于"重复询问直到获得有效输入"的对话逻辑，应使用哪种 Bot Framework 对话类型？`,explanation:"",options:[{id:"A",text:"Skill Dialog（技能对话）"},{id:"B",text:"Waterfall Dialog（瀑布对话）"},{id:"C",text:"Adaptive Dialog（自适应对话）"},{id:"D",text:"Prompt Dialog（提示对话）"}],answer:"D"},{id:"124",type:"multiple",content:`**背景**

你需要实现一个批量文档翻译解决方案。源文档（德语的 Word 和 PowerPoint 文件）存储在 Azure Blob 容器中，需要翻译为法语，同时满足：

- 保留原始文件格式
- 支持使用**自定义术语表（Custom Glossary）**

**题目**

在完成 Blob 容器准备和文件上传后，还需要按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"创建 Azure AI Translator 资源"},{id:"B",text:"提交批量翻译请求，指定源容器、目标容器、源语言（de）、目标语言（fr）和术语表 URL"},{id:"C",text:"将自定义术语表文件（TSV 格式）上传到 Blob 容器"},{id:"D",text:"创建用于存储法语文件的目标 Blob 容器"},{id:"E",text:"调用翻译状态查询 API，等待翻译完成"}],answer:["C","B","E"]},{id:"125",type:"single",content:`**背景**

你构建了一个使用 Azure AI Language 自定义问题解答服务的聊天机器人。在测试中发现：机器人对"What is the price of Product A?"（产品 A 的价格是多少？）能正确回答，但对"How much does Product A cost?"（产品 A 多少钱？）回答失败。

以下三种解决方案，哪种能解决该问题？

**题目**

- 方案 A：从 Language Studio，为该问答对添加替代措辞（Alternative Phrasing），然后重新训练并重新发布模型
- 方案 B：从 Language Studio，为"price"创建一个实体，然后重新训练并重新发布模型
- 方案 C：从 Language Studio，为"cost"创建一个实体，然后重新训练并重新发布模型

哪个方案能满足需求？`,explanation:"",options:[{id:"A",text:"仅方案 A"},{id:"B",text:"仅方案 B"},{id:"C",text:"仅方案 C"},{id:"D",text:"方案 B 和 C"}],answer:"A"},{id:"126",type:"single",content:`**背景**

你正在为 Azure OpenAI Studio 构建一个应用，需要为应用添加**内置安全机制以检测和阻止越狱尝试**（Jailbreak attempts），防止用户通过精心构造的提示词绕过模型的安全限制。

**题目**

应实现哪项 Azure AI Content Safety 功能？`,explanation:"",options:[{id:"A",text:"受保护材料文本检测（Protected material text detection）"},{id:"B",text:"越狱风险检测（Jailbreak risk detection）"},{id:"C",text:"在线活动监控（Monitor online activity）"},{id:"D",text:"文本内容类别检测（Text category moderation）"}],answer:"B"},{id:"127",type:"multiple",content:`**背景**

你正在使用 Azure AI Content Understanding 分析 1,000 段视频，需要**识别特定公司名称是否在视频中被提及**（包括语音和文字）。

**题目**

应按顺序执行哪三项操作来实现公司名称识别？`,explanation:"",options:[{id:"A",text:"在 Video Indexer 中创建一个自定义品牌（Custom Brand）并添加公司名称"},{id:"B",text:"将视频上传到 Azure Blob Storage"},{id:"C",text:"使用 Video Indexer API 对视频建立索引（Index）"},{id:"D",text:"从 Video Indexer API 提取品牌洞察（Brand Insights）"},{id:"E",text:"使用 Azure AI Language NER 处理视频字幕"}],answer:["A","C","D"]},{id:"128",type:"single",content:`**背景**

你有一个 Azure AI 搜索解决方案，使用 Form Recognizer（现 Azure AI Document Intelligence）对采购订单进行索引。你需要**使用 Microsoft Power BI 分析提取的信息**，且解决方案必须**最小化开发工作量**。

**题目**

应向索引器添加什么内容？`,explanation:"",options:[{id:"A",text:"表投影（Table projection）"},{id:"B",text:"投影组（Projection group）"},{id:"C",text:"对象投影（Object projection）"},{id:"D",text:"文件投影（File projection）"}],answer:"C"},{id:"129",type:"multiple",content:`**背景**

你正在使用 Microsoft Bot Framework Composer 构建一个聊天机器人，该机器人需要**向用户呈现带图像的可选选项列表**。

**题目**

应使用哪两个功能来实现此需求？`,explanation:"",options:[{id:"A",text:"Azure 函数（Azure Function）"},{id:"B",text:"自适应卡片（Adaptive Card）"},{id:"C",text:"实体（Entity）"},{id:"D",text:"对话（Dialog）"},{id:"E",text:"语料（Utterance）"}],answer:["B","D"]},{id:"130",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人。你需要通过 Chat playground 上传公司数据，**确保聊天机器人使用这些数据来回答用户问题**（即 RAG 模式）。

**题目**

在代码中，应如何配置才能让模型使用上传的数据？`,explanation:"",options:[{id:"A",text:'在 `messages` 数组中添加 `{"role": "system", "content": "Use the provided data to answer questions"}`'},{id:"B",text:"使用 `data_sources` 参数指定 Azure AI Search 连接（包含索引名称、连接字符串等）"},{id:"C",text:"在 `model` 参数中指定数据集的名称"},{id:"D",text:"使用 `grounding_data` 参数指定 Blob 容器的 SAS URL"}],answer:"B"},{id:"131",type:"single",content:`**背景**

你正在构建一个文字转语音（TTS）应用，需要为**视力受损的机动车用户**合成清晰的语音。你需要选择合适的 SSML 配置来优化在车载环境中的音效。

**题目**

应配置 SSML 中 \`<voice>\` 元素的哪个属性？`,explanation:"",options:[{id:"A",text:'`style="calm"`'},{id:"B",text:'`effect="eq_car"`'},{id:"C",text:'`pitch="+10%"`'},{id:"D",text:'`rate="slow"`'}],answer:"B"},{id:"132",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 语言服务的应用，需要对文档中的**个人信息（PII）** 进行识别，特别是要**防止个人数据在分析完成后被持久化存储**。

**题目**

应在 Language 服务 API 请求中配置哪个查询参数？`,explanation:"",options:[{id:"A",text:"`loggingOptOut=true`"},{id:"B",text:"`piiCategories=none`"},{id:"C",text:"`showStats=false`"},{id:"D",text:"`model-version=latest`"}],answer:"A"},{id:"133",type:"single",content:`**背景**

你有一个 Azure AI Language 资源（ta1）和虚拟网络（vnet1）。你需要确保**只有 vnet1 中的资源才能访问 ta1**。

**题目**

应配置什么？`,explanation:"",options:[{id:"A",text:"为 vnet1 配置网络安全组（NSG）"},{id:"B",text:"为 vnet1 配置 Azure Firewall"},{id:"C",text:"为 ta1 配置虚拟网络设置"},{id:"D",text:"为 ta1 配置 Language 服务容器"}],answer:"C"},{id:"134",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Agent Service 部署的代理，该代理需要通过调用**自定义 API**（用于获取订单状态）来回答用户问题。你已经用 OpenAPI 规范描述了该 API。

**题目**

在 Azure AI Agent Service 中，应通过什么方式将自定义 API 集成到代理中？`,explanation:"",options:[{id:"A",text:"创建一个 Azure 函数，在函数中调用 API，然后将函数添加为代理的技能（Skill）"},{id:"B",text:"使用 OpenAPI 规范定义函数工具（Function Tool），并将其添加到代理的工具列表"},{id:"C",text:"将 API 的端点 URL 添加到代理的系统消息中"},{id:"D",text:"在 Language Studio 中创建一个自定义函数实体"}],answer:"B"},{id:"135",type:"single",content:`**背景**

你正在评估是否使用 Azure AI Agent Service 构建一个代理。该代理将合并和处理用户上传的多个文件。

你需要了解 Azure AI Agent Service 支持上传文件的最大总大小。

**题目**

用户可以上传到 Azure AI Agent Service 的文件总大小上限是多少？`,explanation:"",options:[{id:"A",text:"1 GB"},{id:"B",text:"10 GB"},{id:"C",text:"100 GB"},{id:"D",text:"1 TB"}],answer:"C"},{id:"136",type:"multiple",content:`**背景**

你正在构建一个 Semantic Kernel 应用，需要在提示词模板中**包含复杂对象**，这些对象含有子属性（sub-properties）。

**题目**

哪两种提示词模板格式支持包含具有子属性的复杂对象？`,explanation:"",options:[{id:"A",text:"Liquid"},{id:"B",text:"JSONL"},{id:"C",text:"Handlebars"},{id:"D",text:"YAML"},{id:"E",text:"Semantic Kernel（原生 SK 模板）"}],answer:["A","C"]},{id:"137",type:"single",content:`**背景**

你有一个 Azure AI 订阅，其中包含 Azure AI Document Intelligence 资源（DI1，Standard S0 定价层）。你有以下文件：

- File2.jpg（JPEG 图像）
- File3.tiff（TIFF 图像）

另外还有一个 File1.pdf（PDF 文档）。

**题目**

哪些文件可以使用 DI1 进行分析？`,explanation:"",options:[{id:"A",text:"仅 File1.pdf"},{id:"B",text:"仅 File2.jpg"},{id:"C",text:"仅 File3.tiff"},{id:"D",text:"仅 File2.jpg 和 File3.tiff"},{id:"E",text:"File1.pdf、File2.jpg 和 File3.tiff 全部"}],answer:"D"},{id:"138",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Translator 服务进行实时文本翻译。应用使用 .NET SDK，需要翻译用户输入的文本内容。

**题目**

在代码中，应使用哪个 SDK 客户端类和方法来完成文本翻译请求？`,explanation:"",options:[{id:"A",text:"`TextTranslationClient.TranslateAsync()`"},{id:"B",text:"`TranslatorClient.TranslateTextAsync()`"},{id:"C",text:"`CognitiveServicesClient.TranslateAsync()`"},{id:"D",text:"`TextAnalyticsClient.TranslateAsync()`"}],answer:"A"},{id:"139",type:"multiple",content:`**背景**

你有一个 Azure OpenAI 资源，需要构建一个应用来写新闻稿（Press Releases），使用 Azure OpenAI Studio 部署模型。

**题目**

在 Azure OpenAI Studio 中，应按顺序执行哪三项操作来完成部署？`,explanation:"",options:[{id:"A",text:'在 Azure OpenAI Studio 中打开"部署（Deployments）"页面'},{id:"B",text:"选择要部署的基础模型（如 GPT-4 或 GPT-3.5）"},{id:"C",text:"为部署提供名称并完成部署配置"},{id:"D",text:"在 Completions playground 中测试文本生成"},{id:"E",text:"创建新的 Azure OpenAI 资源"}],answer:["A","B","C"]},{id:"140",type:"single",content:`**背景**

你需要为 Azure OpenAI 模型配置 ARM 模板，以便能够**部署一个新的 Azure OpenAI 资源**，并确保资源可以生成基于**客户托管密钥（Customer-Managed Key，CMK）** 加密的虚构故事。

**题目**

在 ARM 模板中，除了标准的资源类型（\`Microsoft.CognitiveServices/accounts\`）和名称外，还需要配置哪个属性来启用 CMK 加密？`,explanation:"",options:[{id:"A",text:"在 `properties` 中设置 `encryption.keyVaultProperties`（包含 Key Vault URI 和密钥名称）"},{id:"B",text:'在 `sku` 中设置 `tier: "Premium"`'},{id:"C",text:"在 `properties` 中设置 `customSubDomainName`"},{id:"D",text:'在 `identity` 中设置 `type: "SystemAssigned"`'}],answer:"A"},{id:"141",type:"multiple",content:`**背景**

你有一个含有 DockerFile 的本地开发环境，并有 Azure 订阅中的自定义语音转文字模型（model1）。

你需要在名为 Host1 的 Docker 主机上运行 model1。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"从 Azure 门户将 model1 导出为 Docker 容器镜像"},{id:"B",text:"在 Host1 上运行容器"},{id:"C",text:"配置磁盘日志记录（Configure disk logging）"},{id:"D",text:"从 Microsoft Container Registry（MCR）拉取基础镜像"},{id:"E",text:"创建新的 Speech 服务资源"}],answer:["A","B","C"]},{id:"142",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个应用，该应用将**把英语语音自动翻译成法语、德语和西班牙语**，并输出翻译后的文字。

**题目**

在 Speech Translation 配置代码中，应如何定义输出语言？`,explanation:"",options:[{id:"A",text:'使用 `translationConfig.AddTargetLanguage()` 分别添加 `"fr"`、`"de"`、`"es"`'},{id:"B",text:'使用 `translationConfig.TargetLanguages = new List<string> { "fr-FR", "de-DE", "es-ES" }`'},{id:"C",text:'使用 `translationConfig.SetOutputLanguages("fr,de,es")`'},{id:"D",text:"在 `SpeechRecognitionLanguage` 中同时指定多个目标语言"}],answer:"A"},{id:"143",type:"single",content:`**背景**

你正在构建一个聊天机器人，使用 Microsoft Bot Framework SDK，机器人将引导用户通过一系列固定步骤完成**产品退货申请流程**（依次询问：订单号 → 退货原因 → 偏好退款方式）。

**题目**

哪种对话类型最适合实现这个有序、固定步骤的对话流程？`,explanation:"",options:[{id:"A",text:"Prompt Dialog"},{id:"B",text:"Waterfall Dialog（瀑布对话）"},{id:"C",text:"Adaptive Dialog（自适应对话）"},{id:"D",text:"Component Dialog（组件对话）"}],answer:"B"},{id:"144",type:"single",content:`**背景**

你正在使用 Bot Framework SDK 开发一个聊天机器人。当机器人加入对话时，需要**主动向新加入的用户发送欢迎消息**。

**题目**

在机器人的代码中，应重写（Override）哪个方法来实现这个逻辑？`,explanation:"",options:[{id:"A",text:"`OnMessageActivityAsync`"},{id:"B",text:"`OnMembersAddedAsync`"},{id:"C",text:"`OnConversationUpdateActivityAsync`"},{id:"D",text:"`OnTurnAsync`"}],answer:"B"},{id:"145",type:"multiple",content:`**背景**

你有一个 Azure 认知搜索（Azure Cognitive Search）服务，其中一个使用主管理密钥的 Web 应用在安全审查中发现主密钥可能已被泄露，存在未授权的**索引管理操作**。

你需要防止未授权访问，且解决方案必须**最小化停机时间**。

**题目**

应按顺序执行哪些步骤？`,explanation:"",options:[{id:"A",text:"重新生成辅助管理密钥"},{id:"B",text:"将应用更改为使用辅助管理密钥"},{id:"C",text:"重新生成主管理密钥（使旧密钥失效）"},{id:"D",text:"立即删除主管理密钥"},{id:"E",text:"将所有查询切换为只读查询密钥"}],answer:["A","B","C"]},{id:"146",type:"single",content:`**背景**

你正在使用 Azure AI 服务构建一个处理工厂流水线检测的监控系统，需要对多个相关传感器（转速、角度、温度、压力）的数据进行**综合异常检测**，当出现跨传感器联合异常时生成警报。

**题目**

解决方案中应包含哪个组件？`,explanation:"",options:[{id:"A",text:"Application Insights（应用程序洞察）"},{id:"B",text:"Azure Monitor 中的指标警报"},{id:"C",text:"多变量异常检测（Multivariate Anomaly Detection）"},{id:"D",text:"单变量异常检测（Univariate Anomaly Detection）"}],answer:"C"},{id:"147",type:"single",content:`**背景**

你正在构建一个面向客户的语音通话处理机器人，该机器人使用 Azure AI Speech 服务。你需要配置机器人以支持**语音交互**，且解决方案必须**支持多个客户端应用**（如网页、移动 App、智能音箱）。

**题目**

应为机器人使用哪种频道（Channel）类型？`,explanation:"",options:[{id:"A",text:"Cortana 频道"},{id:"B",text:"Microsoft Teams 频道"},{id:"C",text:"Direct Line Speech 频道"}],answer:"C"},{id:"148",type:"multiple",content:`**背景**

你有一个 Azure AI Content Safety 资源，需要对用户生成的文本消息进行内容审核，特别是识别**攻击性语言和性暗示语言**。

**题目**

在调用 Content Moderator Text Moderation API 时，需要配置哪三个参数/设置？`,explanation:"",options:[{id:"A",text:'设置 `language` 参数为 `"eng"`（英语）'},{id:"B",text:"启用 `classify` 功能（返回三类内容类别）"},{id:"C",text:"启用 `autocorrect` 自动纠错"},{id:"D",text:"设置最低置信度阈值（Score threshold）"},{id:"E",text:"在 API 请求头中包含 `Ocp-Apim-Subscription-Key`"}],answer:["A","B","E"]},{id:"149",type:"single",content:`**背景**

你在分析一段对话文本，使用了 Azure AI Language 的 Named Entity Recognition（NER）功能。分析结果以 JSON 响应返回，其中包含识别到的实体信息。

**题目**

以下关于 NER API 响应的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"每个实体只属于一种类别（Category），不会同时属于多个类别"},{id:"B",text:"响应中包含实体在原文中的起始偏移量（offset）和长度（length）"},{id:"C",text:"NER API 响应中包含每个实体对应的 Wikipedia 链接"},{id:"D",text:"NER 可以识别超过 200 种不同的实体类别"}],answer:"B"},{id:"150",type:"single",content:`**背景**

你是一家零售公司的 AI 工程师，正在构建一个使用 Azure OpenAI 的智能客服系统。系统使用 GPT-4 模型，当用户询问某产品的库存状态时，系统需要实时查询数据库。

你需要实现这一功能，且**最小化开发工作量**。

**题目**

应使用 Azure OpenAI 的哪种功能来实现实时数据库查询？`,explanation:"",options:[{id:"A",text:"微调（Fine-tuning）：将数据库内容作为训练数据"},{id:"B",text:"函数调用（Function Calling）：定义查询数据库的函数，让模型决定何时调用"},{id:"C",text:"提示词工程：在系统消息中包含完整的产品库存数据"},{id:"D",text:"RAG 模式：将所有库存数据索引到 Azure AI Search"}],answer:"B"},{id:"151",type:"single",content:`**背景**

你有一个 Azure AI Foundry Content Safety 资源（resource1），需要构建一个应用来**识别包含仇恨内容的文本**。

**题目**

在应用代码中，应使用哪个客户端类和方法来调用 Content Safety API 检测仇恨内容？`,explanation:"",options:[{id:"A",text:'`ContentSafetyClient.AnalyzeTextAsync()`，在请求中设置 `categories: ["Hate"]`'},{id:"B",text:"`TextAnalyticsClient.AnalyzeSentimentAsync()`，检查负面情感分数"},{id:"C",text:"`ContentModerator.TextModeration.ScreenText()`，设置分类类别"},{id:"D",text:"`AzureOpenAIClient.ChatCompletion()`，在系统消息中要求检测仇恨内容"}],answer:"A"},{id:"152",type:"single",content:`**背景**

你在 Azure AI Language 服务的文本处理中，使用以下 C# 代码进行实体识别：

\`\`\`csharp
var response = client.RecognizeEntities(
    "Our tour of Paris included a visit to the Eiffel Tower."
);
var entities = response.Value.Entities;
\`\`\`

**题目**

该代码的输出将包含哪些实体？`,explanation:"",options:[{id:"A",text:"Our tour of Paris included a visit to the Eiffel Tower（整个句子）"},{id:"B",text:"Paris 和 Eiffel Tower"},{id:"C",text:"tour 和 visit"},{id:"D",text:"Paris only"}],answer:"B"},{id:"153",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Translator 的文档翻译（Document Translation）功能，将 Word 和 PowerPoint 文档从德语翻译为法语，同时保留格式。

**题目**

以下关于文档翻译服务（Document Translation）的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"文档翻译仅支持 TXT 和 HTML 格式，不支持 DOCX 或 PPTX"},{id:"B",text:"文档翻译是同步操作，API 调用会立即返回翻译结果"},{id:"C",text:"文档翻译支持 Word（.docx）、PowerPoint（.pptx）等格式，并保留原始格式"},{id:"D",text:"文档翻译无法使用自定义术语表"}],answer:"C"},{id:"154",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务处理文本，使用以下函数：

\`\`\`python
def process_text(client, text):
    result = client.extract_key_phrases([text])[0]
    return result.key_phrases
\`\`\`

调用时传入：\`"Our tour of Paris included a visit to the Eiffel Tower."\`

**题目**

该函数的返回值将包含什么？`,explanation:"",options:[{id:"A",text:'`["Our tour", "Paris", "visit", "Eiffel Tower"]`'},{id:"B",text:'`["Paris", "Eiffel Tower"]`'},{id:"C",text:'`["tour", "Paris", "Eiffel Tower"]`'},{id:"D",text:'`["Paris", "Eiffel Tower", "tour"]`'}],answer:"B"},{id:"155",type:"multiple",content:`**背景**

你正在构建一个 Azure AI Foundry 中的代理，需要查询 Azure AI Search 索引中的数据来回答用户问题。

**题目**

在代理代码中，需要初始化 \`AzureAISearchTool\` 工具，以下哪些参数是必须提供的？`,explanation:"",options:[{id:"A",text:"搜索服务的连接 ID（Connection ID）"},{id:"B",text:"Azure AI Search 索引的名称（Index Name）"},{id:"C",text:"搜索服务的管理员密钥（Admin Key）"},{id:"D",text:"要搜索的字段列表（Field Names）"},{id:"E",text:"搜索结果的最大数量（Top K）"}],answer:["A","B"]},{id:"156",type:"single",content:`**背景**

你正在构建一个通话处理系统，来电可能是法语或德语用户。系统必须：

- 实时识别来电语言
- 根据语言将通话路由到对应的支持团队

**题目**

应使用哪个 Azure AI 服务来**实时识别通话中的语言**？`,explanation:"",options:[{id:"A",text:"Azure AI Speech（语音转文字 + 语言识别）"},{id:"B",text:"Azure AI Language（语言检测 API）"},{id:"C",text:"Azure AI Translator（语言检测功能）"},{id:"D",text:"Azure AI Content Safety"}],answer:"A"},{id:"157",type:"single",content:`**背景**

你有一个 Azure AI Video Indexer 账户，需要构建一个页面来展示公司内部会议的视频。页面嵌入了 Player 小部件和 Cognitive Insights 小部件。

你需要配置这两个小部件，满足以下要求：
- 允许用户搜索关键词
- 在视频中显示人物姓名和面孔
- 以英语（美国）显示字幕

**题目**

以下说法关于 Widget 配置 URL 参数的哪个组合是正确的？`,explanation:"",options:[{id:"A",text:"关键词搜索由 Cognitive Insights Widget 提供，人物显示由 Player Widget 控制，字幕语言参数为 `captions=en-US`"},{id:"B",text:"关键词搜索和字幕都由 Player Widget 控制，人物识别由 Cognitive Insights Widget 提供，字幕参数为 `language=en-US`"},{id:"C",text:"关键词搜索和人物显示都在 Cognitive Insights Widget 中配置，字幕在 Player Widget 中通过 `language=en-US` 参数设置"},{id:"D",text:"Player Widget 负责字幕，Cognitive Insights Widget 负责关键词搜索和人物信息，两者都支持 `language=en-US` 参数"}],answer:"C"},{id:"158",type:"single",content:`**背景**

你的公司使用 Azure Cognitive Services 解决方案进行人脸检测，检测方法如下：

\`\`\`csharp
var faceAttributes = new FaceAttributeType[] {
    FaceAttributeType.Glasses,
    FaceAttributeType.HeadPose
};
IList<DetectedFace> faces = await faceClient.Face.DetectWithUrlAsync(
    imageUrl, returnFaceAttributes: faceAttributes
);
\`\`\`

你发现该方案**经常无法检测到模糊图像和侧脸图像**中的人脸。

**题目**

应如何提高对模糊图像和侧脸的检测能力？`,explanation:"",options:[{id:"A",text:"使用 Face API 的更新版本"},{id:"B",text:"使用 Computer Vision 服务替代 Face 服务"},{id:"C",text:"使用 Identify 方法替代 Detect 方法"},{id:"D",text:"更改检测模型（Detection Model）"}],answer:"D"},{id:"159",type:"single",content:`**背景**

你需要为 Azure AI 搜索构建一个富化管道，对大量扫描文档进行 OCR 文字提取，然后在搜索索引中实现全文搜索。

**题目**

应在技能集中包含哪个内置技能来实现 OCR 文字提取？`,explanation:"",options:[{id:"A",text:"关键短语提取技能（Key Phrase Extraction Skill）"},{id:"B",text:"光学字符识别技能（OCR Skill）"},{id:"C",text:"文档提取技能（Document Extraction Skill）"},{id:"D",text:"图像分析技能（Image Analysis Skill）"}],answer:"B"},{id:"160",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（resource1）和一个存储账户（storage1），其中有一个 Blob 容器（container1）包含示例图像文件。

你运行了如下 cURL 命令来检测图像中的潜在暴力内容，提交的测试图像仅包含一个**圆圈（circle）**。

**题目**

期望的输出结果是什么？`,explanation:"",options:[{id:"A",text:"0（暴力内容得分为 0，表示未检测到暴力内容）"},{id:"B",text:"0.0（浮点数形式的 0）"},{id:"C",text:"7（最高严重性得分）"},{id:"D",text:"100（百分比形式）"}],answer:"A"},{id:"161",type:"single",content:`**背景**

你有一个自定义 Azure AI Document Intelligence 模型，用于识别合同文档。你需要**支持新的合同格式**，且解决方案必须**最小化开发工作量**。

**题目**

应采取什么措施？`,explanation:"",options:[{id:"A",text:"降低 App1 的置信度阈值"},{id:"B",text:"降低 App1 的准确度阈值"},{id:"C",text:"将新的合同格式样本添加到现有训练集中，然后重新训练模型"},{id:"D",text:"创建一个新的训练集，并添加新的合同格式"},{id:"E",text:"创建并训练一个全新的自定义模型"}],answer:"C"},{id:"162",type:"multiple",content:`**背景**

你正在使用 Azure OpenAI Chat playground 构建一个聊天机器人，需要确保机器人**生成简洁的正式商务语言文本**，同时：

- 降低语言模型的运行成本
- 保持聊天历史窗口（Context Window）大小不变

**题目**

应配置哪两项设置？`,explanation:"",options:[{id:"A",text:"修改系统消息（System Message），要求使用简洁正式语言"},{id:"B",text:"降低最大响应 Token 数（Max response tokens）"},{id:"C",text:"将模型更换为更小的版本（如从 GPT-4 切换至 GPT-3.5）"},{id:"D",text:"降低 Temperature 到 0"},{id:"E",text:"增加 Top P 到 1.0"}],answer:["A","B"]},{id:"163",type:"single",content:`**背景**

你正在为客户支持聊天机器人配置功能，需要识别以下两类内容：

- **公司产品代码名（Code names）**：如内部研发中的产品别名（非标准词汇）
- **信用卡号码**：需要检测并阻止客户意外分享的信用卡信息

解决方案必须**最小化开发工作量**。

**题目**

应为这两项需求分别使用 Azure Cognitive Service for Language 的哪个功能？`,explanation:"",options:[{id:"A",text:"产品代码名→命名实体识别（NER）；信用卡号→个人信息识别（PII Detection）"},{id:"B",text:"产品代码名→自定义命名实体识别（Custom NER）；信用卡号→个人信息识别（PII Detection）"},{id:"C",text:"产品代码名→关键短语提取；信用卡号→情感分析"},{id:"D",text:"产品代码名→实体链接；信用卡号→关键短语提取"}],answer:"B"},{id:"164",type:"single",content:`**背景**

你需要为应用配置 Azure AI Language 服务，以识别文本中的**温度值**（如 "25 degrees Celsius"）、**货币值**（如 "$150"）、**电子邮件地址**和**电话号码**。解决方案必须**最小化开发工作量**。

**题目**

应使用哪种模型能力？`,explanation:"",options:[{id:"A",text:"列表实体（List Entities）"},{id:"B",text:"学习实体（Learned Entities）"},{id:"C",text:"语料（Utterances）"},{id:"D",text:"正则表达式组件（Regular Expression Components）"},{id:"E",text:"预构建实体组件（Prebuilt Entity Components）"}],answer:"E"},{id:"165",type:"single",content:`**背景**

你构建了一个 Conversational Language Understanding（CLU）模型，在测试中发现：用户提出的一些**与模型能力无关的随意问题**时，模型返回了错误的意图匹配结果（而非识别为"不支持的请求"）。

**题目**

应采取什么措施来确保模型能正确识别这些无关请求？`,explanation:"",options:[{id:"A",text:"启用主动学习（Active Learning）"},{id:"B",text:"向自定义意图添加更多示例语料"},{id:"C",text:"向 None 意图添加示例语料（None Intent Examples）"},{id:"D",text:"添加更多实体"}],answer:"C"},{id:"166",type:"single",content:`**背景**

你正在构建一个问答机器人，使用 Azure AI Language 自定义问答服务。你需要通过 Language Studio 配置机器人支持**多轮对话（Multi-turn Conversations）**，使机器人能够根据上下文提供跟进问题选项。

**题目**

应在 Language Studio 中执行哪项操作来启用多轮对话？`,explanation:"",options:[{id:"A",text:"添加替代问法（Add alternate questions）"},{id:"B",text:"启用主动学习（Enable active learning）"},{id:"C",text:"添加跟进提示（Add follow-up prompts）"},{id:"D",text:"启用闲聊（Enable chit-chat）"}],answer:"C"},{id:"167",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务的 Speech SDK 构建一个**流式音频实时转录**应用，使用 MP3 编码格式。

**题目**

在 Speech SDK 代码中，应使用什么配置类来支持 MP3 压缩音频格式的输入流？`,explanation:"",options:[{id:"A",text:"`AudioConfig.FromStreamInput(stream)` 默认配置"},{id:"B",text:"`AudioConfig.FromStreamInput(stream, AudioStreamFormat.GetCompressedFormat(AudioStreamContainerFormat.MP3))`"},{id:"C",text:'`SpeechConfig.SetProperty(PropertyId.SpeechServiceConnection_RecoLanguage, "mp3")`'},{id:"D",text:'`AudioConfig.FromWavFileInput("audio.mp3")`'}],answer:"B"},{id:"168",type:"single",content:`**背景**

你正在使用 C# 构建一个应用，该应用调用 Azure AI Language 的关键短语提取功能，并使用以下代码：

\`\`\`csharp
var response = textAnalyticsClient.ExtractKeyPhrases(
    "the cat sat on the mat"
);
foreach (string keyPhrase in response.Value.KeyPhrases)
{
    Console.WriteLine(keyPhrase);
}
\`\`\`

**题目**

判断以下说法是否正确：

1. 该方法会返回关键短语列表
2. "the" 会被作为关键短语返回
3. 每个关键短语都会附带置信度分数`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-否，3-是"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"169",type:"single",content:`**背景**

你有一个使用 Azure AI 视觉服务（Computer Vision）的应用，应用需要对产品照片使用**智能裁剪（Smart Cropping）** 功能生成不同尺寸的缩略图。

你有一个名为 \`contoso1\` 的 Computer Vision 资源，部署在 West US 区域。

**题目**

调用智能裁剪功能的正确 API URL 格式是什么？`,explanation:"",options:[{id:"A",text:"`POST https://westus.api.cognitive.microsoft.com/vision/v3.1/generateThumbnail?width=500&height=500&smartCropping=True`"},{id:"B",text:"`GET https://westus.api.cognitive.microsoft.com/vision/v3.1/generateThumbnail?width=500&height=500`"},{id:"C",text:"`POST https://contoso1.cognitiveservices.azure.com/vision/v3.1/smartCrop?width=500&height=500`"},{id:"D",text:"`POST https://westus.api.cognitive.microsoft.com/vision/v3.1/analyze?visualFeatures=Thumbnail`"}],answer:"A"},{id:"170",type:"single",content:`**背景**

你正在构建一个监控工厂生产线的系统，需要检测工人是否正确穿戴个人防护装备（PPE，如口罩和安全眼镜）。系统要求：

- 识别未戴口罩或安全眼镜的员工
- 每 15 分钟执行一次合规检查
- 最小化开发工作量
- 最小化成本

**题目**

应使用哪个 Azure AI 服务？`,explanation:"",options:[{id:"A",text:"Face 服务（Azure Face API）"},{id:"B",text:"Computer Vision（Azure AI Vision）"},{id:"C",text:"Azure Video Analyzer for Media（原 Video Indexer）"}],answer:"A"},{id:"171",type:"multiple",content:`**背景**

你需要使用 Azure OpenAI Studio 对 GPT-4 模型进行图像分析。你需要在 Azure OpenAI Studio 中配置模型以获取图像的文字描述。

**题目**

在 Azure OpenAI Studio 中，应按顺序执行哪四项操作？`,explanation:"",options:[{id:"A",text:"创建新部署，选择 GPT-4 模型，设置模型版本为 `vision-preview`"},{id:"B",text:"打开 Chat playground 并选择已部署的模型"},{id:"C",text:'在 System message 字段中输入："You are an AI assistant that describes images."'},{id:"D",text:'在 Chat session 窗格中输入提示词"Describe this image"，并通过附件按钮上传图像'},{id:"E",text:"在 Completions playground 中粘贴图像的 Base64 编码"}],answer:["A","B","C","D"]},{id:"172",type:"single",content:`**背景**

你正在使用 Bot Framework SDK 构建一个聊天机器人，该机器人使用以下代码存储用户状态：

\`\`\`csharp
var userStateAccessors = _userState.CreateProperty<UserProfile>(nameof(UserProfile));
var conversationStateAccessors = _conversationState.CreateProperty<ConversationData>(
    nameof(ConversationData));
\`\`\`

状态存储机制设置为 **Memory Storage（内存存储）**。

**题目**

以下说法是否正确：

1. \`CreateProperty()\` 方法用于在状态对象中创建属性访问器
2. Memory Storage 中的用户状态在机器人重启后仍然保留
3. 需要调用 \`SaveChangesAsync()\` 才能将状态变更写回存储`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-是"},{id:"C",text:"1-是，2-是，3-否"},{id:"D",text:"1-否，2-否，3-是"}],answer:"B"},{id:"173",type:"single",content:`**背景**

你有一个 Azure AI Search 服务，在过去 12 个月里查询量持续增长，部分搜索查询请求开始被**限速（Throttled）**。

**题目**

以下三种方案，哪种可以有效减少被限速的可能性？

- 方案 A：迁移到更高定价层的 Cognitive Search 服务
- 方案 B：添加更多索引（Add more indexes）
- 方案 C：启用 CMK 加密

判断每种方案是否有效：`,explanation:"",options:[{id:"A",text:"仅方案 A 有效"},{id:"B",text:"方案 A 和 B 均有效"},{id:"C",text:"三种方案均有效"},{id:"D",text:"三种方案均无效"}],answer:"A"},{id:"174",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Language 分析文章的应用，文章文本为：

> "Our tour guide took us up the Space Needle during our trip to Seattle last week."

应用调用 Language 服务并得到包含以下信息的响应：
- "Space Needle" → 地标（Landmark）
- "Seattle" → 地理位置（GeographicArea）
- "last week" → 时间表达（DateRange）

**题目**

使用了哪个 Language 服务 API？`,explanation:"",options:[{id:"A",text:"实体链接（Entity Linking）"},{id:"B",text:"命名实体识别（Named Entity Recognition，NER）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）"},{id:"D",text:"情感分析（Sentiment Analysis）"}],answer:"B"},{id:"175",type:"single",content:`**背景**

你正在使用 Conversational Language Understanding（CLU）服务构建一个自然语言模型。在测试时，用户反馈模型在处理**与模型能力无关的问题**时给出了错误的响应。

**题目**

为了确保模型能正确识别并处理超出其能力范围的请求，应采取什么措施？`,explanation:"",options:[{id:"A",text:"启用主动学习"},{id:"B",text:"向自定义意图添加更多示例"},{id:"C",text:'向 None 意图添加示例（标记为"无效/无关请求"）'},{id:"D",text:"添加更多实体"}],answer:"C"},{id:"176",type:"multiple",content:`**背景**

你正在构建一个 Conversational Language Understanding 模型，需要支持以下用户语料：

- "Set all the lights to on." → 设置所有灯为开
- "Turn off the lights in the living room." → 关闭客厅的灯
- "What is the current thermostat temperature?" → 查询恒温器当前温度
- "Lower the temperature of the thermostat by five degrees." → 降低恒温器温度5度

**题目**

应向模型添加哪三个元素（每个正确答案都是解决方案的一部分）？`,explanation:"",options:[{id:"A",text:"location（位置）意图"},{id:"B",text:"change setting（更改设置）实体"},{id:"C",text:"device（设备类型）意图"},{id:"D",text:"change setting（更改设置）意图"},{id:"E",text:"query setting（查询设置）意图"},{id:"F",text:"device（设备类型）实体"}],answer:["B","D","F"]},{id:"177",type:"multiple",content:`**背景**

你正在使用 Bot Framework SDK 构建一个机器人，并需要在**本地计算机上以交互方式测试**该机器人。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"在本地启动机器人"},{id:"B",text:"打开 Bot Framework Emulator"},{id:"C",text:"在 Emulator 中连接到机器人的本地端点（如 http://localhost:3978/api/messages）"},{id:"D",text:"将机器人部署到 Azure"},{id:"E",text:"在 Azure 门户中注册机器人"}],answer:["A","B","C"]},{id:"178",type:"single",content:`**背景**

你正在设计一个使用 Azure AI 服务的互联网远程学习解决方案。你的公司发现在培训过程中，一些学习者会长时间离开桌面或注意力不集中。

你需要使用学习者电脑的**视频和音频流**来检测学习者是否在场并集中注意力，且解决方案必须**最小化开发工作量**。

**题目**

针对以下两个需求，应分别使用哪个 Azure AI 服务？

- 检测学习者是否在屏幕前（presence detection）
- 识别每个学习者的身份（identity）`,explanation:"",options:[{id:"A",text:"检测存在→Computer Vision；识别身份→Face API"},{id:"B",text:"检测存在→Face API（人脸检测）；识别身份→Face API（人员识别）"},{id:"C",text:"检测存在→Video Indexer；识别身份→Face API"},{id:"D",text:"检测存在→Anomaly Detector；识别身份→Computer Vision"}],answer:"B"},{id:"179",type:"single",content:`**背景**

你正在使用 Language Understanding（LUIS）服务构建一个为联系人列表搜索信息的语言模型，模型使用名为 \`Find Contact\` 的意图。

一位对话专家提供了以下培训短语：
- "Find contacts in London."
- "Who do I know in Seattle?"
- "Search for contacts in Ukraine."

你需要在 Language Understanding 中实现这些短语的功能。

以下三种方案，哪种能实现目标？

**题目**

- 方案 A：为"位置"创建一个新意图（New Intent for location）
- 方案 B：为"域"创建一个新实体（New Entity for domain）
- 方案 C：在 Find Contact 意图中创建一个新模式（New Pattern）`,explanation:"",options:[{id:"A",text:"方案 A 满足目标"},{id:"B",text:"方案 B 满足目标"},{id:"C",text:"方案 C 满足目标"},{id:"D",text:"三种方案均不满足"}],answer:"A"},{id:"180",type:"single",content:"**背景**\n\n你正在使用 Microsoft Bot Framework Composer 构建一个聊天机器人，语言生成（Language Generation，LG）文件包含以下片段：\n\n```\n# Greet(user)\n- ${Greeting()}, ${user.name}\n```\n\n**题目**\n\n关于上述 LG 模板，以下说法是否正确？\n\n1. 当 `user.name` 为空时，模板会抛出错误\n2. `Greet(user)` 是一个发送响应（Send a response）操作\n3. `${Greeting()}` 调用了另一个 LG 模板",explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-否，2-否，3-是"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-否，3-是"}],answer:"B"},{id:"181",type:"multiple",content:`**背景**

你有一个自定义 Azure Vision 项目，用于通用对象检测（General 领域），其中包含一个已训练的模型。你需要将该模型**导出用于断网环境（Disconnected Network）**。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"将模型域从 General 更改为 General (compact)"},{id:"B",text:"使用 compact 域重新训练模型"},{id:"C",text:"将模型导出为 TensorFlow 或 ONNX 格式"},{id:"D",text:"将模型部署到 Azure 容器实例"},{id:"E",text:"在 Custom Vision 门户中发布模型"}],answer:["A","B","C"]},{id:"182",type:"single",content:`**背景**

你有 500 个提示词-补全对（prompt-completion pairs），用于微调（Fine-tune）Azure OpenAI 模型。你需要准备训练数据文件。

**题目**

应使用什么文件格式存储训练数据？`,explanation:"",options:[{id:"A",text:"XML（.xml）"},{id:"B",text:"JSONL（.jsonl，每行一个 JSON 对象）"},{id:"C",text:"CSV（.csv）"},{id:"D",text:"TSV（.tsv）"}],answer:"B"},{id:"183",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源，需要对用户上传的图像进行内容安全检测。你提交了一张测试图像（仅包含一个几何圆圈），并设置了检测类别为 \`["Hate", "SelfHarm", "Sexual", "Violence"]\`。

**题目**

对于这张测试图像，以下哪项说法正确？`,explanation:"",options:[{id:"A",text:"API 将返回四个类别各自的严重性得分（0-7 整数）"},{id:"B",text:"API 将返回单一的总体安全评分（0-100）"},{id:"C",text:"如果所有类别得分为 0，API 会返回错误（因为没有检测到任何内容）"},{id:"D",text:"API 的 `categories` 参数只能指定一个类别"}],answer:"A"},{id:"184",type:"single",content:`**背景**

你正在构建一个多语言电商聊天机器人，针对不同语言的用户有不同的回复内容。你需要实现两个核心功能：检测消息语言 + 分析消息情感。

**题目**

应在解决方案中使用哪两个 Azure AI Language 功能？`,explanation:"",options:[{id:"A",text:"实体链接（Entity Linking）+ 情感分析（Sentiment Analysis）"},{id:"B",text:"情感分析（Sentiment Analysis）+ 语言检测（Language Detection）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）+ 语言检测"},{id:"D",text:"命名实体识别（NER）+ 情感分析"}],answer:"B"},{id:"185",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源（AI1），需要为一个应用（User1）提供能够**执行以下操作**的最小权限访问：

- 在 Azure OpenAI Studio 中识别资源端点
- 查看可部署的模型列表
- 通过已部署模型生成文本和图像

**题目**

应为 User1 分配哪个角色？（遵循最小权限原则）`,explanation:"",options:[{id:"A",text:"Cognitive Services OpenAI User"},{id:"B",text:"Cognitive Services Contributor"},{id:"C",text:"Contributor"},{id:"D",text:"Cognitive Services OpenAI Contributor"}],answer:"A"},{id:"186",type:"single",content:`**背景**

你正在构建一个 Azure AI 解决方案，使用情感分析（Sentiment Analysis）结果来计算客服人员的绩效奖金。你需要确保该解决方案符合 Microsoft 负责任 AI（Responsible AI）原则。

**题目**

应该采取什么措施来满足负责任 AI 原则？`,explanation:"",options:[{id:"A",text:"在做出影响员工经济状况的决策之前，添加人工审核和审批步骤"},{id:"B",text:"在调查返回低置信度分数时也包含情感分析结果"},{id:"C",text:"使用所有调查数据，包括已要求删除账户和数据的客户的调查"},{id:"D",text:"将原始调查数据发布到集中位置，让员工自行访问"}],answer:"A"},{id:"187",type:"multiple",content:`**背景**

你构建了一个 Language Understanding（LUIS）Docker 容器解决方案。

你从 Microsoft Container Registry（MCR）下载了 Language Understanding 容器镜像。

你需要**将容器镜像部署到主机计算机**。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"在主机上安装 Docker Engine"},{id:"B",text:"使用 `docker run` 命令运行容器，包含 Billing 端点和 API 密钥参数"},{id:"C",text:"配置磁盘日志记录"},{id:"D",text:"使用 `docker pull` 从 MCR 拉取容器镜像"},{id:"E",text:"在 Azure 门户中为 LUIS 资源生成新密钥"}],answer:["D","B","C"]},{id:"188",type:"single",content:"**背景**\n\n你正在使用 Bot Framework SDK 构建一个聊天机器人，机器人需要使用 `ConversationData` 对象存储当前对话信息，使用 `UserProfile` 对象存储用户信息。\n\n`UserProfile` 存储在用户作用域（User Scope），`ConversationData` 存储在对话作用域（Conversation Scope）。\n\n**题目**\n\n以下关于 Bot Framework 状态管理作用域的说法，哪项正确？",explanation:"",options:[{id:"A",text:"用户作用域（User Scope）中的属性在单次对话结束后自动清除"},{id:"B",text:"对话作用域（Conversation Scope）中的属性在整个对话生命周期内持久存在，不会因新一轮交互而重置"},{id:"C",text:"轮次作用域（Turn Scope）中的属性在当前轮次结束后过期"},{id:"D",text:"对话作用域中的属性跟随用户账户，永久保留"}],answer:"C"},{id:"189",type:"single",content:`**背景**

你构建了一个机器人，使用 QnA Maker 应用。你需要从 Azure 门户获取连接到该 QnA Maker 应用所需的信息。

**题目**

应在 Azure 门户中的哪个刀片（Blade）找到所需连接信息？`,explanation:"",options:[{id:"A",text:"Access control (IAM)（访问控制）"},{id:"B",text:"Properties（属性）"},{id:"C",text:"Keys and Endpoint（密钥和终结点）"},{id:"D",text:"Identity（标识）"}],answer:"C"},{id:"190",type:"single",content:`**背景**

你有一个 Azure AI 认知搜索服务，并且有一个存储在 Azure Blob Storage 中的大型扫描文档集合（图像和 PDF 格式）。

你需要让这些文档**尽快可被搜索**。

**题目**

应采用哪种策略来最大化索引速度？`,explanation:"",options:[{id:"A",text:"将数据拆分到多个 Blob 容器，为每个容器创建独立的认知搜索服务"},{id:"B",text:"将数据拆分到多个 Blob 容器，为每个容器创建独立的索引器，增加搜索单元，配置**顺序**执行"},{id:"C",text:"为每种文档类型（图像 vs PDF）创建一个独立的认知搜索服务"},{id:"D",text:"将数据拆分到多个虚拟文件夹，为每个文件夹创建一个索引器，增加搜索单元，配置**并行**执行"}],answer:"D"},{id:"201",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Language 服务对新闻文章进行分析。文章内容为：

> "Microsoft announced a new partnership with OpenAI to advance AI research."

你调用了**实体链接（Entity Linking）** API。

**题目**

以下说法哪项正确？`,explanation:"",options:[{id:"A",text:'API 将返回 "Microsoft" 和 "OpenAI" 的 Wikipedia 链接，以及它们在文章中的位置'},{id:"B",text:'API 将返回 "partnership" 和 "research" 作为关键短语'},{id:"C",text:"API 将返回文章的整体情感分数（正面/负面）"},{id:"D",text:'API 将返回 "Microsoft" 和 "OpenAI" 的实体类别（如 Organization），但不提供外部链接'}],answer:"A"},{id:"202",type:"single",content:`**背景**

你正在为公司开发一个使用 Azure AI Vision 服务的产品图像管理系统。系统需要为每张产品图像生成 **Alt Text（替代文本）**，以满足无障碍访问要求，且**最小化开发工作量**。

**题目**

应调用 Computer Vision API 的哪个功能？`,explanation:"",options:[{id:"A",text:"`tagImage`（图像标签）"},{id:"B",text:"`generateThumbnail`（缩略图生成）"},{id:"C",text:"`describeImage`（图像描述）"},{id:"D",text:"`detectObjects`（对象检测）"}],answer:"C"},{id:"203",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 解决方案，需要为博客文章集合创建索引。每篇文章有一个 \`MessageCopy\` 字段，包含用户在社交媒体上发送的消息文本。

要求：
- 用户能对 \`MessageCopy\` 字段进行全文搜索
- 搜索结果中能显示 \`MessageCopy\` 字段的值

**题目**

应为 \`MessageCopy\` 字段启用哪两个属性？`,explanation:"",options:[{id:"A",text:"Searchable（可搜索）和 Retrievable（可检索）"},{id:"B",text:"Sortable（可排序）和 Retrievable（可检索）"},{id:"C",text:"Searchable（可搜索）和 Facetable（可分面）"},{id:"D",text:"Filterable（可筛选）和 Retrievable（可检索）"}],answer:"A"},{id:"204",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务中的**问题解答（Question Answering）** 功能构建一个聊天机器人，知识库基于产品目录 PDF 训练。

测试时发现：机器人能正确回答 "What is the price of Product X?"，但无法回答 "How much does Product X cost?"。

**题目**

应采取哪项操作来解决该问题？`,explanation:"",options:[{id:"A",text:"从 Language Studio，创建一个名为 `price` 的实体，然后重新训练并重新发布"},{id:"B",text:'从 Language Studio，为该问答对添加 "How much does Product X cost?" 作为替代问法（Alternate question），然后重新训练并重新发布'},{id:"C",text:"从 Language Studio，创建一个名为 `cost` 的实体，然后重新训练并重新发布"},{id:"D",text:"将知识库导出，手动编辑 TSV 文件，添加新问答对"}],answer:"B"},{id:"205",type:"single",content:`**背景**

你有一个 Azure AI Language 资源，执行以下操作：
- 情感分析
- 命名实体识别（NER）
- 个人可识别信息（PII）识别

你需要**防止该资源在分析完成后持久化存储输入数据**。

**题目**

应在 Language 服务 API 中配置哪个查询参数？`,explanation:"",options:[{id:"A",text:"`loggingOptOut=true`"},{id:"B",text:"`piiCategories=none`"},{id:"C",text:"`showStats=false`"},{id:"D",text:"`model-version=latest`"}],answer:"A"},{id:"206",type:"single",content:`**背景**

你使用 Microsoft Bot Framework SDK 构建了一个机器人，并使用 Azure Bot Service 部署到 Azure。

你通过 **Bot Channels Registration** 服务注册了该机器人。

**题目**

完成部署时需要哪两个值？`,explanation:"",options:[{id:"A",text:"botId 和 tenantId"},{id:"B",text:"tenantId 和 appId"},{id:"C",text:"appId 和 appSecret"},{id:"D",text:"objectId 和 appSecret"}],answer:"C"},{id:"207",type:"single",content:`**背景**

你正在使用 Azure OpenAI 服务构建一个聊天机器人，需要确保机器人的响应**更具确定性、更少创造性**（更适合精确问答场景）。

**题目**

应配置哪两个参数来实现这一目标？`,explanation:"",options:[{id:"A",text:"降低 Temperature（如设为 0）和降低 Top P（如设为 0.1）"},{id:"B",text:"提高 Temperature（如设为 2）和提高 Top P（如设为 1）"},{id:"C",text:"降低 Temperature 和增加 Max tokens"},{id:"D",text:"提高 Frequency penalty 和降低 Presence penalty"}],answer:"A"},{id:"208",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 视觉（Computer Vision）分析图像的应用，需要判断图像是否包含**成人或不雅内容（Adult content）**，以进行内容审核。

**题目**

调用 Analyze Image API 时，应将 \`visualFeatures\` 参数设置为什么？`,explanation:"",options:[{id:"A",text:"`visualFeatures=ImageType`"},{id:"B",text:"`visualFeatures=Adult`"},{id:"C",text:"`visualFeatures=Categories`"},{id:"D",text:"`visualFeatures=Tags`"}],answer:"B"},{id:"209",type:"single",content:`**背景**

你正在规划一个 Azure AI 解决方案，需要对公司内部文档（包括 PDF 和 Word 文件）进行全文搜索。这些文档包含扫描图像中的文字。

**题目**

应在 Azure AI Search 的富化管道（Enrichment Pipeline）中包含哪个技能，以使扫描图像中的文字可被搜索？`,explanation:"",options:[{id:"A",text:"关键短语提取技能（Key Phrase Extraction Skill）"},{id:"B",text:"实体识别技能（Entity Recognition Skill）"},{id:"C",text:"OCR 技能（Optical Character Recognition Skill）"},{id:"D",text:"文档提取技能（Document Extraction Skill）"}],answer:"C"},{id:"210",type:"single",content:`**背景**

你有一家工厂，使用 Azure Custom Vision 构建了一个用于**识别纸板包装缺陷**并定位缺陷位置的模型。工厂有**间歇性互联网连接**，且要求确保每个包装中包含四个产品样本。

**题目**

应使用哪种 Custom Vision 项目类型和域（Domain）？`,explanation:"",options:[{id:"A",text:"项目类型：图像分类（Image Classification）；域：General"},{id:"B",text:"项目类型：对象检测（Object Detection）；域：General (compact)"},{id:"C",text:"项目类型：图像分类；域：Retail"},{id:"D",text:"项目类型：对象检测；域：General"}],answer:"B"},{id:"211",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务和 Bot Framework SDK 构建一个聊天机器人，机器人需要**引导用户完成一个产品设置的分步流程**。

**题目**

应使用哪种对话（Dialog）类型来实现分步引导？`,explanation:"",options:[{id:"A",text:"组件对话（Component Dialog）"},{id:"B",text:"瀑布对话（Waterfall Dialog）"},{id:"C",text:"自适应对话（Adaptive Dialog）"},{id:"D",text:"技能对话（Skill Dialog）"}],answer:"B"},{id:"212",type:"single",content:`**背景**

你正在构建一个应用，需要对视频内容进行情感分析。视频来自公司 1,000 个产品评测 YouTube 视频。

你需要使用 Azure AI Content Understanding 项目，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目模板？`,explanation:"",options:[{id:"A",text:"视频镜头分析（Video shot analysis）"},{id:"B",text:"媒体资产管理（Media asset management）"},{id:"C",text:"广告分析（Advertising）"}],answer:"B"},{id:"213",type:"single",content:`**背景**

你正在使用 Azure AI Search 构建一个富化管道，并创建了一个知识存储（Knowledge Store）。

知识存储包含**非结构化 JSON 数据**（来自社交媒体帖子的富化结果）。

**题目**

对于非结构化 JSON 数据，应在知识存储定义中使用哪种投影类型？`,explanation:"",options:[{id:"A",text:"表投影（Table projection）"},{id:"B",text:"对象投影（Object projection）"},{id:"C",text:"文件投影（File projection）"},{id:"D",text:"行投影（Row projection）"}],answer:"B"},{id:"214",type:"multiple",content:`**背景**

你正在为一个 Azure AI 解决方案配置访问控制。解决方案使用 Azure AI 认知服务资源（CSAccount1），连接到一个名为 vnet1 的虚拟网络。

你需要确保**只有 vnet1 中的特定资源才能访问 CSAccount1**，且解决方案必须**最小化管理工作量**。

**题目**

应执行哪两项操作？`,explanation:"",options:[{id:"A",text:"在 vnet1 中为 CSAccount1 启用服务端点（Service Endpoint）"},{id:"B",text:"在 vnet1 中创建一个虚拟子网"},{id:"C",text:"在 CSAccount1 中配置访问控制（IAM）设置"},{id:"D",text:"在 vnet1 中修改虚拟网络设置"},{id:"E",text:"在 CSAccount1 中修改虚拟网络设置"}],answer:["A","B"]},{id:"215",type:"single",content:`**背景**

你正在使用 Azure AI Content Safety 构建一个检测有害内容的解决方案。你需要在一次 API 调用中同时检测文本中的**仇恨（Hate）**、**暴力（Violence）** 和**色情（Sexual）** 内容。

**题目**

在 \`AnalyzeText\` 请求中，\`categories\` 参数应如何设置？`,explanation:"",options:[{id:"A",text:'`"categories": "Hate,Violence,Sexual"`（逗号分隔字符串）'},{id:"B",text:'`"categories": ["Hate", "Violence", "Sexual"]`（JSON 数组）'},{id:"C",text:"发送三次独立的 API 调用，每次检测一个类别"},{id:"D",text:'`"category": "All"`（检测所有类别）'}],answer:"B"},{id:"216",type:"single",content:`**背景**

你正在构建一个 Azure AI Foundry 中的代理（Agent），需要该代理能够：

- 理解用户的书面问题
- 生成答案
- **以语音形式输出答案**

**题目**

为了创建能满足上述所有要求的代理项目，应使用哪个工具？`,explanation:"",options:[{id:"A",text:"Language Studio"},{id:"B",text:"Azure AI Foundry"},{id:"C",text:"Speech Studio"},{id:"D",text:"Azure 门户"}],answer:"B"},{id:"217",type:"single",content:`**背景**

你正在开发一个 C# 应用，使用 Azure AI Document Intelligence 分析**手写内容** PDF 文件。

\`\`\`csharp
var client = new DocumentAnalysisClient(
    new Uri(endpoint),
    new AzureKeyCredential(key));

AnalyzeDocumentOperation operation = await client.AnalyzeDocumentAsync(
    WaitUntil.Completed,
    "prebuilt-read",     // 模型 ID
    fileStream
);

AnalyzeResult result = operation.Value;
\`\`\`

**题目**

以下说法哪项正确？`,explanation:"",options:[{id:"A",text:"`prebuilt-read` 模型只能识别打印文字，无法识别手写内容"},{id:"B",text:"`prebuilt-read` 模型支持手写内容识别，适合此场景"},{id:"C",text:"应将模型 ID 改为 `prebuilt-document` 才能识别手写内容"},{id:"D",text:"应将模型 ID 改为 `prebuilt-layout` 才能识别手写内容"}],answer:"B"},{id:"218",type:"single",content:`**背景**

你需要构建一个 Azure AI Search 解决方案，用于搜索一个包含大量 wiki 内容的数据库。wiki 内容以英语、法语和葡萄牙语书写，存储在 Azure Cosmos DB 中。

技术要求：所有项目都必须支持英语、法语和葡萄牙语。

**题目**

应在解决方案中包含什么？`,explanation:"",options:[{id:"A",text:"附加到技能集的 Azure Blob Storage 索引器，技能集包含语言检测技能和文本翻译技能"},{id:"B",text:"附加到技能集的 Azure Blob Storage 索引器，技能集包含语言检测技能"},{id:"C",text:"附加到技能集的 Azure Cosmos DB 索引器，技能集包含文档提取技能和文本翻译技能"},{id:"D",text:"附加到技能集的 Azure Cosmos DB 索引器，技能集包含语言检测技能和文本翻译技能"}],answer:"C"},{id:"219",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要为每张图像生成**标签列表**，且标签必须支持多种语言（英语、法语、西班牙语），且**最小化开发工作量**。

**题目**

应使用哪个 Azure 服务端点？`,explanation:"",options:[{id:"A",text:"Custom Vision 图像分类"},{id:"B",text:"Content Moderator 图像审核"},{id:"C",text:"Custom Translator"},{id:"D",text:"Computer Vision 图像分析（Image Analysis）"}],answer:"D"},{id:"220",type:"multiple",content:`**背景**

你有一个使用 Azure Anomaly Detector 服务的监控解决方案。你配置了一台名为 Server1 的服务器，具有间歇性互联网访问。

你需要**在 Server1 上部署 Azure AI 异常检测器服务**。

**题目**

应按顺序执行哪四项操作？`,explanation:"",options:[{id:"A",text:"从 Microsoft Container Registry 拉取 Anomaly Detector 容器镜像"},{id:"B",text:"创建 Azure Anomaly Detector 资源（用于获取计费密钥）"},{id:"C",text:"使用 `docker run` 命令运行容器，包含 Billing 端点和 ApiKey 参数"},{id:"D",text:"在 Server1 上安装 Docker Engine"},{id:"E",text:"将 Server1 加入 Azure 虚拟网络"}],answer:["B","D","A","C"]},{id:"221",type:"multiple",content:`**背景**

你有 5 个使用 Bot Framework Composer 创建的聊天机器人，需要构建一个**单一机器人**将这 5 个机器人组合起来，并能根据用户输入**动态路由**到正确的子机器人。

**题目**

应执行哪三项操作？`,explanation:"",options:[{id:"A",text:"创建 Orchestrator 模型（Create an Orchestrator model）"},{id:"B",text:"更改 Recognizer/Dispatch 类型"},{id:"C",text:"创建 Composer 扩展"},{id:"D",text:"启用 WebSockets"},{id:"E",text:"创建自定义 Recognizer JSON 文件"},{id:"F",text:"安装 Orchestrator 包（Install the Orchestrator package）"}],answer:["A","B","F"]},{id:"222",type:"single",content:`**背景**

你正在使用 Speech SDK 构建一个应用，需要将**法语语音**翻译成**德语**，通过自然语言处理实现。

**题目**

在 \`SpeechTranslationConfig\` 中，应如何设置源语言和目标语言？`,explanation:"",options:[{id:"A",text:'`SpeechRecognitionLanguage = "fr"`；`AddTargetLanguage("de-DE")`'},{id:"B",text:'`SpeechRecognitionLanguage = "fr-FR"`；`AddTargetLanguage("de")`'},{id:"C",text:'`SourceLanguage = "French"`；`TargetLanguage = "German"`'},{id:"D",text:'`SpeechRecognitionLanguage = "de-DE"`；`AddTargetLanguage("fr-FR")`'}],answer:"B"},{id:"223",type:"single",content:`**背景**

你正在构建一个为用户提供 AI 功能的应用，需要同时使用 **Speech API** 和 **Language API**。

要求通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的资源？`,explanation:"",options:[{id:"A",text:"Azure AI Language 资源"},{id:"B",text:"Azure AI Foundry service（Azure AI 服务多服务资源）"},{id:"C",text:"Azure AI Speech 资源"},{id:"D",text:"Azure AI Content Safety 资源"}],answer:"B"},{id:"224",type:"single",content:`**背景**

你正在为一个互联网培训解决方案设计系统，需要监控学员的视频流，检测**学员何时向讲师提问**（通过检测语音内容）。

解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中包含什么？`,explanation:"",options:[{id:"A",text:"Azure AI Custom Vision 的对象检测"},{id:"B",text:"Azure AI Vision 的 Face 服务"},{id:"C",text:"Azure AI Language 服务的语言检测"},{id:"D",text:"Azure AI Speech 服务的语音转文字"}],answer:"D"},{id:"225",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，部署了 GPT-3.5 Turbo 模型。你使用以下系统消息配置模型：

> "You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old."

**题目**

这是哪种提示词工程（Prompt Engineering）技术的示例？`,explanation:"",options:[{id:"A",text:"少样本学习（Few-shot Learning）"},{id:"B",text:"启示效应（Affordance）"},{id:"C",text:"思维链（Chain of Thought）"},{id:"D",text:"预设引导（Priming）"}],answer:"D"},{id:"226",type:"single",content:`**背景**

你有一个 Azure AI Language 资源，需要配置一个**实体识别**功能，识别文本中的地点（Location）、人物（Person）和组织（Organization）。

随后，需要将识别结果中的实体（包括 Wikipedia 链接）包含在索引输出中。

你正在为 Azure AI Search 技能集编写 JSON 配置。

**题目**

在技能集 JSON 中：
- \`categories\` 参数应设置什么？
- \`outputs\` 中应包含哪个名称？`,explanation:"",options:[{id:"A",text:'`categories: ["Location","Person","Organization"]`；outputs 包含 `{"name":"entities"}`'},{id:"B",text:'`categories: ["Location","Person","Organization"]`；outputs 包含 `{"name":"namedEntities"}`'},{id:"C",text:'`categories: ["All"]`；outputs 包含 `{"name":"entities"}`'},{id:"D",text:'不设置 categories（返回所有类型）；outputs 包含 `{"name":"linkedEntities"}`'}],answer:"A"},{id:"227",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 自定义技能（Custom Skill），该技能通过调用外部 Web API 来获取组织的描述信息。

**题目**

关于该自定义技能的以下说法，哪项正确？`,explanation:"",options:[{id:"A",text:"自定义技能只能作为技能集中的第一个技能"},{id:"B",text:"自定义技能的输出不能映射到搜索索引字段"},{id:"C",text:"该技能使用 `WebApiSkill` 类型定义，可以在技能集中调用外部 HTTP 端点"},{id:"D",text:"自定义技能必须部署在 Azure Functions 中，不支持其他 HTTP 端点"}],answer:"C"},{id:"228",type:"single",content:`**背景**

你使用 Custom Vision 构建了一个图像分类模型，用于区分猫和狗的图像。在训练完成后，你需要**评估模型的性能**。

**题目**

Custom Vision 提供哪两个性能指标供评估？`,explanation:"",options:[{id:"A",text:"Recall（召回率）和 F-score"},{id:"B",text:"Weighted Accuracy（加权准确率）和 Precision（精确率）"},{id:"C",text:"Precision（精确率）和 Recall（召回率）"},{id:"D",text:"Area Under Curve (AUC) 和 Precision"}],answer:"C"},{id:"229",type:"multiple",content:`**背景**

你正在构建一个 Azure AI 解决方案，用于对用户生成的图像进行**实时内容审核**，防止用户分享性暗示图像。

**题目**

以下哪两种工具可以满足需求？（每个答案是完整解决方案）`,explanation:"",options:[{id:"A",text:"Microsoft Defender for Cloud Apps"},{id:"B",text:"Azure AI Custom Vision（自定义视觉）"},{id:"C",text:"Azure AI Vision（计算机视觉）"},{id:"D",text:"Azure AI Content Safety（内容安全）"},{id:"E",text:"Azure AI Document Intelligence"}],answer:["C","D"]},{id:"230",type:"single",content:`**背景**

你构建了一个使用 LUIS 的语言模型，用于搜索联系人列表（意图：\`Find Contact\`）。

测试时发现，用户说 "Find contacts in London" 时，模型能正确识别意图，但无法提取 "London" 作为位置实体。

**题目**

应添加哪种实体类型来提取 "London" 这样的地名，且**最小化开发工作量**？`,explanation:"",options:[{id:"A",text:"机器学习实体（Machine Learned entity）"},{id:"B",text:"正则表达式实体（Regex entity）"},{id:"C",text:"预构建 `geographyV2` 实体（Prebuilt geographyV2 entity）"},{id:"D",text:"列表实体（List entity）"}],answer:"C"},{id:"231",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务和 Cognitive Search 构建知识库，需要处理 wiki 内容，确保支持等价术语搜索（即搜索 "automobile" 时，包含 "car" 的文档也能被找到）。

**题目**

应在解决方案中包含什么？`,explanation:"",options:[{id:"A",text:"同义词图（Synonym map）"},{id:"B",text:"建议器（Suggester）"},{id:"C",text:"自定义分析器（Custom analyzer）"},{id:"D",text:"内置关键短语提取技能"}],answer:"A"},{id:"232",type:"single",content:`**背景**

你正在使用 Azure AI 构建一个产品创建系统，需要为上传的产品图像**生成 Alt Text（辅助文本）**，以满足无障碍访问需求。

你使用 C# 调用 Computer Vision API。

**题目**

在代码中，应调用哪个方法来获取适合用作 Alt Text 的图像描述？`,explanation:"",options:[{id:"A",text:"`GetReadResultAsync()`"},{id:"B",text:"`DescribeImageInStreamAsync()`"},{id:"C",text:"`AnalyzeImageByDomainInStreamAsync()`"},{id:"D",text:"`TagImageInStreamAsync()`"}],answer:"B"},{id:"233",type:"single",content:`**背景**

你正在使用 Azure AI Content Safety 资源（resource1）构建一个社交媒体应用，需要检测用户上传图像中的有害内容。

**题目**

以下关于 Azure AI Content Safety 图像分析的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"`severity` 分数的范围是 0 到 100"},{id:"B",text:"`severity` 分数是 0 到 7 的整数，0 表示无检测到内容"},{id:"C",text:"图像 API 只能检测 Sexual 类别，不支持其他类别"},{id:"D",text:"每次 API 调用只能检测一种内容类别"}],answer:"B"},{id:"234",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，部署了一个 GPT-4 模型，用于构建聊天机器人。你需要确保用户上传的**公司内部文件数据**被用于模型的回答（RAG 模式）。

**题目**

为了让模型使用上传的公司数据，应创建哪两种资源？`,explanation:"",options:[{id:"A",text:"Azure AI Bot Service 和 Azure SQL"},{id:"B",text:"Azure AI Document Intelligence 和 Azure SQL"},{id:"C",text:"Azure Blob Storage 和 Azure AI Search"},{id:"D",text:"Azure Logic Apps 和 Azure Cosmos DB"}],answer:"C"},{id:"235",type:"single",content:`**背景**

你正在构建一个应用，需要检测用户消息中的异常模式（如高频异常请求），使用 Azure AI Anomaly Detector 服务处理单条时间序列数据流。

**题目**

应使用哪种异常检测模式？`,explanation:"",options:[{id:"A",text:"批处理检测（Batch Detection）"},{id:"B",text:"流式/实时检测（Streaming/Real-time Detection）"},{id:"C",text:"变化点检测（Change Point Detection）"},{id:"D",text:"多变量检测（Multivariate Detection）"}],answer:"B"},{id:"236",type:"single",content:`**背景**

你正在为企业构建 Azure AI 解决方案，需要进行文档处理。有一批 **5,000 张扫描发票图像**需要提取金额、日期和供应商名称等关键字段。

**题目**

应使用哪个 Azure AI 服务？解决方案必须**最小化开发工作量**。`,explanation:"",options:[{id:"A",text:"Azure AI Custom Vision"},{id:"B",text:"Azure AI Personalizer"},{id:"C",text:"Azure AI Document Intelligence（使用预构建发票模型）"},{id:"D",text:"Computer Vision（使用 Read API）"}],answer:"C"},{id:"237",type:"single",content:`**背景**

你正在使用 Azure AI Search 对大型文档库进行索引，需要确保用户能够基于文档的**类别（category）字段**进行**下钻过滤导航（Faceted Navigation）**，同时能将 category 值显示在搜索结果中。

**题目**

除了 **Retrievable** 属性外，还需要为 category 字段启用哪个属性？`,explanation:"",options:[{id:"A",text:"Searchable（可搜索）"},{id:"B",text:"Sortable（可排序）"},{id:"C",text:"Facetable（可分面）"},{id:"D",text:"Filterable（可筛选）"}],answer:"C"},{id:"238",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Vision 的图像分析应用，需要判断图像中的**人物年龄、情绪**等信息。

**题目**

以下关于 Computer Vision API 的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"Computer Vision 的人脸检测可以精确识别个人身份"},{id:"B",text:"Computer Vision 的人脸功能可以检测人脸的大致年龄范围和基本属性，但**不进行身份识别**"},{id:"C",text:"Computer Vision 已完全替代 Azure Face API，两者功能相同"},{id:"D",text:"Computer Vision 人脸检测不返回置信度分数"}],answer:"B"},{id:"239",type:"single",content:`**背景**

你正在开发一个应用，需要**实时检测用户文本消息中使用的语言**，以便路由到对应语言的客服团队。

**题目**

应使用哪个 Azure AI 服务？`,explanation:"",options:[{id:"A",text:"Azure AI Speech（语音检测）"},{id:"B",text:"Azure AI Content Safety（内容安全）"},{id:"C",text:"Azure AI Translator（文本翻译）"},{id:"D",text:"Azure AI Language（语言检测）"}],answer:"D"},{id:"240",type:"single",content:`**背景**

你有一个使用 Azure AI Language 自定义问题解答服务的聊天机器人，需要确保机器人在**回答问题时，仅在置信度分数达到 95% 或以上时才给出回答**，低于此阈值时返回默认消息。

**题目**

在调用 \`generateAnswer\` API 时，应在请求体中设置哪个参数？`,explanation:"",options:[{id:"A",text:'`"confidenceThreshold": 95`'},{id:"B",text:'`"scoreThreshold": 0.95`'},{id:"C",text:'`"minimumScore": 95`'},{id:"D",text:'`"threshold": 0.95`'}],answer:"B"},{id:"241",type:"multiple",content:`**背景**

你有一个 Azure DevOps 流水线，用于部署一个使用 Azure AI Search 的应用。你怀疑查询密钥已被泄露，需要在**最小化停机时间**的前提下更换密钥。

**题目**

应按什么顺序执行以下操作？`,explanation:"",options:[{id:"A",text:"向 Azure AI Search 添加新查询密钥"},{id:"B",text:"将应用配置更新为使用新查询密钥"},{id:"C",text:"删除被泄露的旧查询密钥"}],answer:["A","B","C"]},{id:"242",type:"multiple",content:`**背景**

你正在构建一个 Azure OpenAI 应用，使用 Chat Completions API。你需要提高聊天机器人的回答质量，且**最小化开发工作量**。

**题目**

哪两种方法可以提高响应质量？（每个答案都是完整解决方案）`,explanation:"",options:[{id:"A",text:"对模型进行微调（Fine-tune）"},{id:"B",text:"提供上下文内容作为接地数据（Grounding content）"},{id:"C",text:"在请求中添加示例请求/响应对（Sample request/response pairs）"},{id:"D",text:"用自有数据重新训练语言模型"},{id:"E",text:"训练自定义大型语言模型（LLM）"}],answer:["B","C"]},{id:"243",type:"multiple",content:`**背景**

你正在使用 Azure AI 语言服务中的**自定义问题解答（Custom Question Answering）** 功能，需要将一个 QnA 项目从一个 Language Service 实例迁移到**另一个 Azure 区域**的 Language Service 实例。

**题目**

应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"从源项目导出问答数据（Export the project）"},{id:"B",text:"在目标 Language Service 实例中创建新项目"},{id:"C",text:"将导出的数据导入新项目（Import to new project）"},{id:"D",text:"在 Language Studio 中重新训练并重新发布新项目"},{id:"E",text:"删除源项目"}],answer:["A","B","C"]},{id:"244",type:"single",content:`**背景**

你正在使用 Azure AI Video Indexer 为公司内部培训视频生成脚本/转录，但发现服务无法准确转录**技术术语和行业专用词汇**。

**题目**

应如何提高转录的准确性？`,explanation:"",options:[{id:"A",text:"创建自定义语言模型（Custom Language Model）并将技术术语添加进去"},{id:"B",text:"仅对视频配置音频索引（Configure audio indexing for video only）"},{id:"C",text:"为视频启用多语言检测（Enable multi-language detection）"},{id:"D",text:"为演讲者构建自定义人物模型（Build a custom Person model）"}],answer:"A"},{id:"245",type:"single",content:`**背景**

你正在使用 Azure OpenAI Studio 构建一个聊天机器人。你需要确保机器人在回答问题时，**优先使用你上传的公司内部数据**（而非模型训练数据）来生成答案。

**题目**

在代码中，应在 API 请求的哪个参数中指定数据源配置？`,explanation:"",options:[{id:"A",text:"`system_message`（系统消息）"},{id:"B",text:"`data_sources`（数据源）"},{id:"C",text:"`context`（上下文）"},{id:"D",text:"`grounding`（接地）"}],answer:"B"},{id:"246",type:"single",content:`**背景**

你使用 Azure OpenAI 构建了一个聊天机器人，需要确保机器人**不会返回能够识别特定个人身份的内容**（如从训练数据中泄露的个人信息）。

**题目**

应为 Azure OpenAI 资源配置哪项功能？`,explanation:"",options:[{id:"A",text:"Azure AI Content Safety 的越狱检测（Jailbreak risk detection）"},{id:"B",text:"Azure AI Content Safety 的受保护材料检测（Protected material detection）"},{id:"C",text:"Azure OpenAI 的内容过滤器（Content Filter）中的个人数据检测"},{id:"D",text:"Azure AI Language 的 PII 检测"}],answer:"B"},{id:"247",type:"single",content:`**背景**

你有一个 Azure 订阅，需要使用 **Azure Resource Manager（ARM）模板**部署 Azure OpenAI 资源，并确保部署后的资源**能够处理每分钟 600 个请求**（约 60,000 TPM）。

**题目**

在 ARM 模板的部署（Deployment）资源中，\`sku.capacity\` 应设置为多少？`,explanation:"",options:[{id:"A",text:'`"capacity": 600`'},{id:"B",text:'`"capacity": 60`'},{id:"C",text:'`"capacity": 6`'},{id:"D",text:'`"capacity": 6000`'}],answer:"B"},{id:"248",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务对文本进行分析，你有如下 Python 代码：

\`\`\`python
def get_key_phrases(client, text):
    result = client.extract_key_phrases([text])[0]
    return list(result.key_phrases)
\`\`\`

调用：\`get_key_phrases(client, "the cat sat on the mat")\`

**题目**

以下说法哪些正确？（判断三项）

1. 函数返回关键短语列表
2. "the" 会被包含在返回的关键短语中
3. 返回结果中每个短语都有置信度分数`,explanation:"",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-否，3-是"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"249",type:"single",content:`**背景**

你正在为一家国际公司构建 Azure AI 解决方案，需要实现**批量文档翻译**功能。源文档为德语的 Word 文档和 PowerPoint 演示文稿，需要翻译为法语，同时：

- 保留原始文件的格式和样式
- 使用公司专有的**自定义术语表**确保行业术语翻译一致性

**题目**

以下关于 Azure AI Translator 批量文档翻译的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"批量文档翻译只支持 TXT 格式，不支持 DOCX 或 PPTX"},{id:"B",text:"批量文档翻译在翻译 DOCX 和 PPTX 时会丢失原始格式"},{id:"C",text:"批量文档翻译支持自定义术语表，并可以在翻译 DOCX/PPTX 时保留格式"},{id:"D",text:"自定义术语表必须为 PDF 格式"}],answer:"C"},{id:"250",type:"multiple",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个**转录技术播客**的服务。在测试中发现，服务无法准确识别技术术语（如 API 名称、编程语言关键词等）。

你需要提高转录准确性。

**题目**

应按顺序执行哪五项操作？`,explanation:"",options:[{id:"A",text:"在 Speech Studio 中创建项目，选择语音资源"},{id:"B",text:"上传测试音频数据（Upload test data）"},{id:"C",text:"上传训练数据（包含技术术语的文本/音频）"},{id:"D",text:"训练自定义模型"},{id:"E",text:"部署自定义模型到端点"},{id:"F",text:"在测试前后评估模型准确率"}],answer:["A","B","C","D","E"]},{id:"251",type:"single",content:`**背景**

你正在使用 Azure AI Translator 服务构建一个翻译应用，需要通过 REST API 翻译文本。

应用使用多服务 Azure AI Translator 资源（Translator1），需要为 API 请求构建正确的 HTTP 请求头。

**题目**

应在请求头中包含哪些内容？`,explanation:"",options:[{id:"A",text:"订阅密钥（Subscription Key）和客户端追踪 ID（Client Trace ID）"},{id:"B",text:"订阅密钥（Subscription Key）、订阅区域（Subscription Region）和内容类型（Content-Type）"},{id:"C",text:"资源 ID 和内容语言（Content-Language）"},{id:"D",text:"访问控制请求（Access-Control-Request）、内容类型和内容长度"}],answer:"B"},{id:"252",type:"single",content:`**背景**

你正在使用 Azure AI Video Indexer 服务为公司视频提供搜索界面。需要根据**视频中出现的人物**来搜索视频。

**题目**

应采取什么措施？`,explanation:"",options:[{id:"A",text:"创建人物模型（Person Model）并将其关联到视频"},{id:"B",text:"创建人物对象并为每个人提供面部图像"},{id:"C",text:"邀请所有员工到 Video Indexer"},{id:"D",text:"编辑视频中的面部"},{id:"E",text:"将姓名上传到语言模型"}],answer:"A"},{id:"253",type:"single",content:`**背景**

你正在使用 Face API 开发一个**员工考勤打卡**应用，需要通过摄像头识别员工身份。员工总数为 10,000 人。

**题目**

在设计 Face API 调用时，应使用哪种数据结构来存储员工人脸数据？`,explanation:"",options:[{id:"A",text:"FaceList（最多 1,000 张人脸）"},{id:"B",text:"LargeFaceList（最多 1,000,000 张人脸）"},{id:"C",text:"PersonGroup（每组最多 10,000 人，每人最多 248 张图）"},{id:"D",text:"LargePersonGroup（每组最多 1,000,000 人）"}],answer:"D"},{id:"254",type:"single",content:`**背景**

你有一个 Azure AI Search 服务，富化管道中包含一个自定义技能（Custom Skill），该技能对文档进行语言检测和情感分析。

**题目**

自定义技能的输出可以映射到搜索索引的字段吗？`,explanation:"",options:[{id:"A",text:"是的，通过在索引器定义中使用 `outputFieldMappings` 实现"},{id:"B",text:"否，自定义技能的输出只能存储在知识存储中"},{id:"C",text:"是的，但只有当技能位于技能集的最后一个位置时"},{id:"D",text:"否，自定义技能的输出格式与搜索索引不兼容"}],answer:"A"},{id:"255",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人。系统消息配置为：

> "You are an AI assistant that helps people find information."

用户问："What are the top 5 programming languages in 2025?"

模型回答包含了详细的排名信息。

**题目**

以下关于该场景中的 Azure OpenAI 配置的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"将 Temperature 设为 0 可以确保模型每次对同一问题返回完全相同的答案"},{id:"B",text:"将 Max tokens 设为 50 可能导致回答在列出全部 5 种语言之前就被截断"},{id:"C",text:"系统消息中的角色定义会被用户消息自动覆盖"},{id:"D",text:"Azure OpenAI 模型能够访问 2025 年的实时网络数据"}],answer:"B"},{id:"256",type:"single",content:`**背景**

你正在开发一个使用 Azure AI 的解决方案，需要确保 AI 系统的输出**对所有用户都公平公正**，不会因用户的地理位置或背景产生歧视性结果。

**题目**

这体现了微软负责任 AI 原则中的哪两项原则？`,explanation:"",options:[{id:"A",text:"透明性（Transparency）和公平性（Fairness）"},{id:"B",text:"公平性（Fairness）和包容性（Inclusiveness）"},{id:"C",text:"可靠性与安全（Reliability and Safety）和隐私与安全（Privacy and Security）"},{id:"D",text:"问责制（Accountability）和透明性"}],answer:"B"},{id:"257",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Speech 服务的**零售导购机器人**，机器人需要使用**自定义神经语音（Custom Neural Voice）**，该语音为机器人的声音形象服务。

在创建自定义神经语音时，你已经获取了声音原型人的录音样本和同意书。

**题目**

接下来，应将**什么内容上传**到声音人才档案（Voice Talent Profile）？`,explanation:"",options:[{id:"A",text:"一个 5 分钟的 WAV 或 MP3 文件，内容为声音原型人描述导购系统"},{id:"B",text:"一个 5 分钟的 FLAC 音频文件和对应的 Word 格式转录文稿"},{id:"C",text:"一个 WAV 或 MP3 文件，内容为声音原型人同意创建其合成声音版本的声明"},{id:"D",text:"一个包含多个 10 秒 WAV 文件及对应 TXT 格式转录文稿的 ZIP 文件"}],answer:"C"},{id:"258",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（resource1）。你需要构建一个系统来识别包含**仇恨（Hate）** 类别内容的用户请求。

你在应用代码中使用 Azure AI Content Safety SDK 进行检测。

**题目**

以下哪项代码片段能够正确识别仇恨内容并获取严重性评分？`,explanation:"",options:[{id:"A",text:"使用 `ContentSafetyClient.analyze_text()`，categories 设为 `[TextCategory.HATE]`，从 `response.hate_result.severity` 获取分数"},{id:"B",text:"使用 `TextAnalyticsClient.analyze_sentiment()`，从负面情感分数判断仇恨内容"},{id:"C",text:"使用 `ContentSafetyClient.analyze_image()`，categories 设为 `[ImageCategory.HATE]`"},{id:"D",text:"使用 `AzureOpenAIClient.chat_completions()`，在系统消息中要求检测仇恨内容"}],answer:"A"},{id:"259",type:"single",content:`**背景**

你正在使用 Azure AI Translator 服务将文本从英语翻译成希腊语（el），并需要翻译结果包含**使用罗马字母（Latin script）的音译**。

你有基础 URI：
\`\`\`
https://api.cognitive.microsofttranslator.com/translate?api-version=3.0
\`\`\`

**题目**

应额外添加哪三个查询参数？`,explanation:"",options:[{id:"A",text:"`toScript=Cyrl`、`from=el`、`textType=html`"},{id:"B",text:"`to=el`、`textType=html`、`toScript=Latn`"},{id:"C",text:"`from=en`、`to=el`、`textType=plain`"},{id:"D",text:"`to=el`、`toScript=Latn`、`textType=html`"}],answer:"B"},{id:"260",type:"single",content:`**背景**

你正在构建一个可视化 Azure AI 解决方案的监控仪表盘。你需要了解 Azure OpenAI 资源的 \`Temperature\` 参数对输出的影响。

**题目**

以下关于 Azure OpenAI Temperature 参数的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"Temperature=0 时，模型无法生成任何输出"},{id:"B",text:"Temperature=2 时，模型总是生成最高质量的回答"},{id:"C",text:"Temperature 越低，模型输出越趋于确定性和一致性；Temperature 越高，输出越多样和创造性"},{id:"D",text:"Temperature 参数不影响模型输出，只影响响应速度"}],answer:"C"},{id:"261",type:"multiple",content:`**背景**

你正在使用 Azure AI 语言服务中的**对话语言理解（Conversational Language Understanding，CLU）** 为智能家居构建控制模型。

支持的语料包括：
- "Set all the lights to on."
- "Turn off the lights in the living room."
- "What is the current thermostat temperature?"
- "Lower the temperature of the thermostat by five degrees."

**题目**

应向模型添加哪三个元素（每个正确答案都是解决方案的一部分）？`,explanation:"",options:[{id:"A",text:"位置（location）意图"},{id:"B",text:"change setting（更改设置）实体"},{id:"C",text:"device（设备）意图"},{id:"D",text:"change setting（更改设置）意图"},{id:"E",text:"query setting（查询设置）意图"},{id:"F",text:"device（设备）实体"}],answer:["D","E","F"]},{id:"262",type:"single",content:`**背景**

你正在构建一个社交媒体监控应用，需要**衡量品牌在社交媒体上的公众认知**，通过自然语言处理分析。

**题目**

应使用哪个 Azure 服务？`,explanation:"",options:[{id:"A",text:"Content Moderator（内容审核）"},{id:"B",text:"Form Recognizer（表单识别）"},{id:"C",text:"Computer Vision（计算机视觉）"},{id:"D",text:"Azure AI Language 服务（语言服务）"}],answer:"D"},{id:"263",type:"single",content:`**背景**

你在为 Azure OpenAI GPT-4 模型配置内容过滤器，以防止模型生成仇恨言论相关内容。

**题目**

以下哪项是 Azure OpenAI 内容过滤器（Content Filter）的正确描述？`,explanation:"",options:[{id:"A",text:"内容过滤器只能过滤用户输入（Prompt），不能过滤模型输出（Completion）"},{id:"B",text:"内容过滤器同时对用户输入和模型输出进行实时过滤，任一触发都会拦截请求或响应"},{id:"C",text:"内容过滤器只在微调（Fine-tuning）后的模型上生效"},{id:"D",text:"内容过滤器完全由用户自行配置，Azure 不提供任何默认过滤"}],answer:"B"},{id:"264",type:"single",content:`**背景**

你正在为公司构建一个 Azure AI Search 解决方案，需要确保不同的应用程序对搜索索引只有读取权限，同时防止来自互联网的直接访问。

**题目**

应分别采取哪两项措施？`,explanation:"",options:[{id:"A",text:"防止互联网访问 → 配置 IP 防火墙规则；只读权限 → 使用查询密钥（Query Key）"},{id:"B",text:"防止互联网访问 → 部署私有端点（Private Endpoint）；只读权限 → 使用查询密钥（Query Key）"},{id:"C",text:"防止互联网访问 → 配置 NSG；只读权限 → 分配 RBAC Reader 角色"},{id:"D",text:"防止互联网访问 → 部署私有端点；只读权限 → 分配 RBAC Contributor 角色"}],answer:"B"},{id:"265",type:"single",content:`**背景**

你正在为一个 Azure AI 解决方案实施安全措施。该解决方案包含一个 Azure OpenAI 资源（AI1）和一个 Azure AI Content Safety 资源（CS1）。

你需要**优化内容过滤配置**，通过运行示例问题来测试是否能有效拦截有害内容。

**题目**

从 Content Safety Studio 使用**文本内容审核（Moderate text content）** 功能运行测试，是否满足该需求？`,explanation:"",options:[{id:"A",text:"是（Yes），该功能专门用于测试和优化内容过滤配置"},{id:"B",text:'否（No），应使用"Protected material detection"功能'},{id:"C",text:'否（No），应使用"Jailbreak risk detection"功能'},{id:"D",text:"否（No），应在 Azure OpenAI Studio 中直接测试，而非 Content Safety Studio"}],answer:"A"},{id:"266",type:"single",content:`**背景**

你正在开发一个多轮对话的 Azure Bot。用户在对话中提供了姓名，你需要在对话结束后**自动清除**该属性，以保护用户隐私。

**题目**

应将存储用户姓名的属性分配到哪个范围（Scope）？`,explanation:"",options:[{id:"A",text:"dialog（对话作用域）"},{id:"B",text:"user（用户作用域）"},{id:"C",text:"turn（轮次作用域）"},{id:"D",text:"conversation（会话作用域）"}],answer:"A"},{id:"267",type:"multiple",content:`**背景**

你正在为 Azure AI Translator 服务的批量文档翻译构建流程。源文档存储在 Azure Blob Storage 的 German-files 容器中，目标是将翻译后的法语文件存储到 French-files 容器。

你已将原始 Word 文档上传到 German-files 容器，并准备好自定义术语表。

**题目**

接下来应按顺序执行哪三项操作？`,explanation:"",options:[{id:"A",text:"将术语表文件（TSV 格式）上传到 Blob 容器"},{id:"B",text:"向批量翻译 API 提交翻译请求，指定源容器、目标容器、语言对（de→fr）和术语表 URL"},{id:"C",text:"等待翻译完成（轮询翻译状态 API）"},{id:"D",text:"创建新的 Azure AI Translator 资源"},{id:"E",text:"在 Azure 门户中配置防火墙规则"}],answer:["A","B","C"]},{id:"268",type:"single",content:`**背景**

你有一个运行自 Docker 容器的 Azure AI Text Analytics 情感分析服务，端点为 \`https://contoso.cognitiveservices.azure.com\`。

你需要**在 Azure 虚拟机上运行该容器**。

**题目**

在 \`docker run\` 命令中，应使用哪个容器镜像名称？`,explanation:"",options:[{id:"A",text:"`azure-cognitive-services/textanalytics/sentiment:latest`"},{id:"B",text:"`mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment:latest`"},{id:"C",text:"`microsoft/cognitiveservices-textanalytics-sentiment:latest`"},{id:"D",text:"`mcr.microsoft.com/cognitiveservices/textanalytics:sentiment`"}],answer:"B"},{id:"269",type:"single",content:`**背景**

你正在评估 Azure AI Agent Service 的文件上传功能。你需要了解**可以上传到该服务的文件总大小上限**。

**题目**

Azure AI Agent Service 允许上传的文件总大小上限是多少？`,explanation:"",options:[{id:"A",text:"1 GB"},{id:"B",text:"10 GB"},{id:"C",text:"100 GB"},{id:"D",text:"1 TB"}],answer:"C"},{id:"270",type:"single",content:`**背景**

你正在使用 Azure AI Speech SDK 构建一个应用，需要将**英语语音**自动翻译为**法语、德语和西班牙语**。

**题目**

以下代码片段中，正确完成 \`SpeechTranslationConfig\` 配置的方式是什么？`,explanation:"",options:[{id:"A",text:"```python"},{id:"B",text:"```python"},{id:"C",text:"```python"},{id:"D",text:"```python"}],answer:"B"},{id:"271",type:"single",content:`**背景**

你正在构建一个 Bot Framework 机器人，需要**从 Azure 门户获取连接到 Language 服务资源所需的信息**，包括端点 URL 和订阅密钥。

**题目**

应在 Azure 门户中哪个刀片（Blade）找到这些信息？`,explanation:"",options:[{id:"A",text:"Identity（标识）"},{id:"B",text:"Keys and Endpoint（密钥和终结点）"},{id:"C",text:"Properties（属性）"},{id:"D",text:"Networking（网络）"}],answer:"B"},{id:"272",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务的**实体链接（Entity Linking）** API 分析文本：

> "Our tour guide took us up the Space Needle during our trip to Seattle last week."

**题目**

API 响应中将包含哪些信息？`,explanation:"",options:[{id:"A",text:'"Space Needle" 和 "Seattle" 的 Wikipedia URL，以及它们在文本中的位置（offset）和置信度'},{id:"B",text:'"tour guide"、"Space Needle" 和 "Seattle" 的实体类别分类'},{id:"C",text:"整个句子的正面情感分数"},{id:"D",text:'"Space Needle" 和 "Seattle" 的 Wikipedia URL，但不包含位置信息'}],answer:"A"},{id:"273",type:"multiple",content:`**背景**

你需要为 Azure AI Search 实现**文档级安全过滤**，确保用户只能看到他们有权限访问的文档（基于 Azure AD 组成员身份）。

**题目**

应在解决方案中包含哪三项操作？`,explanation:"",options:[{id:"A",text:"在每个搜索查询中发送 Azure AD 访问令牌"},{id:"B",text:"检索所有组成员列表"},{id:"C",text:"检索当前用户的组成员身份"},{id:"D",text:"为每个文档添加允许访问的组 ID 字段"},{id:"E",text:"为每个组创建独立的索引"},{id:"F",text:"将组 ID 作为过滤条件附加到搜索查询"}],answer:["C","D","F"]},{id:"274",type:"multiple",content:`**背景**

你使用 Bot Framework SDK 构建了一个聊天机器人，需要用户在聊天时**提供凭据登录**（不使用公共登录）。

你需要在 Bot Framework Emulator 中测试该机器人，确保测试时会提示用户输入凭据。

**题目**

应在 Bot Framework Emulator 中配置哪三个设置？`,explanation:"",options:[{id:"A",text:"用于 Sign-in 的自定义登录 URL"},{id:"B",text:"Microsoft App ID"},{id:"C",text:"Microsoft App Password（应用密码）"},{id:"D",text:"机器人本地端点 URL（如 http://localhost:3978/api/messages）"},{id:"E",text:"Bot 的 Azure 订阅 ID"}],answer:["B","C","D"]},{id:"275",type:"multiple",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人应用。你需要确保每次部署后，应用能够自动识别 Azure OpenAI 资源的端点 URL。

**题目**

连接 Azure OpenAI 资源时，应用必须提供哪三个信息？`,explanation:"",options:[{id:"A",text:"端点 URL（Endpoint URL）"},{id:"B",text:"部署名称（Deployment Name）"},{id:"C",text:"模型名称（Model Name）"},{id:"D",text:"API 密钥（API Key）或 Entra ID 令牌"},{id:"E",text:"订阅 ID（Subscription ID）"}],answer:["A","B","D"]},{id:"276",type:"multiple",content:`**背景**

你正在为一个社交媒体应用构建内容审核系统，需要实时处理用户上传的图像。

**题目**

以下关于 Azure AI Content Safety 图像分析的说法，哪两项正确？`,explanation:"",options:[{id:"A",text:"单次 API 调用可以同时检测 Hate、Violence、Sexual 和 SelfHarm 四个类别"},{id:"B",text:"图像分析 API 仅支持 JPEG 格式，不支持 PNG"},{id:"C",text:"API 既支持图像 URL，也支持 Base64 编码的图像数据"},{id:"D",text:"Severity 分数范围是 0.0 到 1.0 的浮点数"},{id:"E",text:"每个类别的 Severity 分数是 0 到 7 的整数"}],answer:["A","C"]},{id:"277",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务的 SSML（语音合成标记语言）为机动车辆应用生成语音导航。

**题目**

以下哪个 SSML 配置最适合优化车载环境中的语音音效？`,explanation:"",options:[{id:"A",text:'`<prosody rate="slow" pitch="-5%">Turn left in 500 meters.</prosody>`'},{id:"B",text:'`<mstts:express-as style="calm">Turn left in 500 meters.</mstts:express-as>`'},{id:"C",text:'`<voice name="en-US-JennyNeural" effect="eq_car">Turn left in 500 meters.</voice>`'},{id:"D",text:'`<emphasis level="strong">Turn left in 500 meters.</emphasis>`'}],answer:"C"},{id:"278",type:"multiple",content:`**背景**

你正在使用 Azure AI Foundry 构建一个利用 Azure AI Search 知识库的代理（Agent）。

代理的工具配置中包含 \`AzureAISearchTool\`，已连接到一个存储产品知识库的向量索引。

**题目**

\`AzureAISearchTool\` 的两个必填参数是什么？`,explanation:"",options:[{id:"A",text:"搜索服务的连接 ID（Connection ID）"},{id:"B",text:"搜索索引的名称（Index Name）"},{id:"C",text:"搜索服务的管理员密钥（Admin Key）"},{id:"D",text:"向量字段名称（Vector Field Name）"},{id:"E",text:"搜索服务的端点 URL"}],answer:["A","B"]},{id:"279",type:"single",content:`**背景**

你有一个包含 5,000 张扫描发票图像的文件集合，需要提取发票中的关键信息（发票项目、销售金额、客户详情）。

**题目**

应使用哪个 Azure AI 服务？`,explanation:"",options:[{id:"A",text:"Custom Vision（自定义视觉）"},{id:"B",text:"Computer Vision（计算机视觉）"},{id:"C",text:"Immersive Reader（沉浸式阅读器）"},{id:"D",text:"Form Recognizer / Azure AI Document Intelligence（文档智能）"}],answer:"D"},{id:"280",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务构建一个分析文本的解决方案。你需要识别文本中提到的实体并**提供指向 Wikipedia 的参考链接**，以帮助用户深入了解相关概念。

**题目**

应使用哪个 Language API？`,explanation:"",options:[{id:"A",text:"命名实体识别（Named Entity Recognition）"},{id:"B",text:"实体链接（Entity Linking）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"281",type:"single",content:`**背景**

你正在使用 Microsoft Bot Framework SDK 构建一个聊天机器人，需要机器人**响应特定事件并发送自定义文本回复**。

**题目**

应使用什么来实现机器人对事件的响应？`,explanation:"",options:[{id:"A",text:"Adaptive Card（自适应卡片）"},{id:"B",text:"Activity Handler（活动处理器）"},{id:"C",text:"Dialog（对话）"},{id:"D",text:"Skill（技能）"}],answer:"B"},{id:"282",type:"single",content:`**背景**

你有一个存储在本地驱动器的 **20 GB 视频文件（File1.avi）**，需要使用 **Azure AI Video Indexer 网站**对其建立索引。

**题目**

第一步应该做什么？`,explanation:"",options:[{id:"A",text:"将 File1.avi 上传到 Azure Storage 队列"},{id:"B",text:"将 File1.avi 上传到 www.youtube.com"},{id:"C",text:"将 File1.avi 上传到 Microsoft OneDrive"},{id:"D",text:"直接将 File1.avi 上传到 Azure AI Video Indexer 网站"}],answer:"C"},{id:"283",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 开发一个代理，该代理需要调用公司内部的订单状态查询 API。你已经用 Python 函数定义了该 API 的输入输出格式。

**题目**

在 Azure AI Foundry Agent Service 中，应通过哪种方式将自定义函数集成到代理中？`,explanation:"",options:[{id:"A",text:"将函数打包为 Azure 函数应用并部署"},{id:"B",text:"使用 `FunctionTool` 定义函数工具并添加到代理的工具列表"},{id:"C",text:"将函数逻辑写入代理的系统消息中"},{id:"D",text:"通过 `AzureAISearchTool` 将函数逻辑索引到搜索服务"}],answer:"B"},{id:"284",type:"single",content:`**背景**

你正在使用 Azure AI Document Intelligence 分析一个包含表格数据的 PDF 文档（test.pdf）。你需要使用 cURL 命令调用 API，并选择正确的**预构建模型**来提取表格。

**题目**

在 cURL 命令中：
- 应使用哪个认证头名称？
- 应使用哪个预构建模型 ID？`,explanation:"",options:[{id:"A",text:"认证头：`Subscription-Key`；模型 ID：`prebuilt-layout`"},{id:"B",text:"认证头：`Ocp-Apim-Subscription-Key`；模型 ID：`prebuilt-document`"},{id:"C",text:"认证头：`Api-Key`；模型 ID：`prebuilt-read`"},{id:"D",text:"认证头：`Ocp-Apim-Subscription-Key`；模型 ID：`prebuilt-layout`"}],answer:"B"},{id:"285",type:"single",content:`**背景**

你正在构建一个 Azure OpenAI 应用，需要通过代码调用 Chat Completions API 并将结果输出到控制台。

**题目**

以下关于 Azure OpenAI SDK 调用的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"`AzureOpenAI` 客户端需要 `endpoint`、`api_key` 和 `api_version` 三个参数"},{id:"B",text:"调用 `chat.completions.create()` 时，只需提供 `model` 参数，不需要提供 `messages`"},{id:"C",text:"`chat.completions.create()` 返回的对象中，回复文本位于 `response.text` 属性"},{id:"D",text:'`model` 参数应设置为 Azure OpenAI 的全局模型名称（如 "gpt-4"），而非部署名称'}],answer:"A"},{id:"286",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务对一批新闻文章进行处理，需要提取文章中提到的**关键公司名称**，以便后续业务分析。

**题目**

应使用哪个 Language API 功能？`,explanation:"",options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"情感分析（Sentiment Analysis）"},{id:"C",text:"命名实体识别（NER）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"C"},{id:"287",type:"single",content:`**背景**

你在构建一个使用 Semantic Kernel 的 AI 代理，需要代理能够访问**过去 90 天内发布的最新公开网络数据**（包括最新新闻和研究成果）。

**题目**

应在代理中配置哪种工具类型？`,explanation:"",options:[{id:"A",text:"`FileSearchTool`"},{id:"B",text:"`BingGroundingTool`"},{id:"C",text:"`CodeInterpreterTool`"},{id:"D",text:"`AzureAISearchTool`"}],answer:"B"},{id:"288",type:"single",content:`**背景**

你正在使用 Azure AI Document Intelligence 构建一个分析医疗文档的应用（App1）。

你发送了一个分析请求并收到如下 JSON 响应片段：

\`\`\`json
{
  "status": "succeeded",
  "analyzeResult": {
    "documents": [{
      "fields": {
        "PatientName": {
          "type": "string",
          "valueString": "John Doe",
          "confidence": 0.99
        }
      }
    }]
  }
}
\`\`\`

**题目**

以下说法哪项正确？`,explanation:"",options:[{id:"A",text:"`confidence: 0.99` 表示字段识别的置信度为 99%"},{id:"B",text:'`"status": "succeeded"` 表示分析请求仍在进行中'},{id:"C",text:"`valueString` 字段包含的是字段在文档中的位置坐标"},{id:"D",text:"`confidence` 值为 1.0 时，字段识别100%准确，不会出错"}],answer:"A"},{id:"289",type:"multiple",content:`**背景**

你正在评估 Azure AI Agent Service 的能力，需要了解该服务支持哪种提示词模板格式，特别是能够处理**包含子属性的复杂对象**。

**题目**

以下哪两种提示词模板格式支持在模板中处理具有子属性的复杂对象？`,explanation:"",options:[{id:"A",text:"Liquid"},{id:"B",text:"JSONL"},{id:"C",text:"Handlebars"},{id:"D",text:"YAML"},{id:"E",text:"基本字符串插值（Basic string interpolation）"}],answer:["A","C"]},{id:"290",type:"single",content:`**背景**

你正在使用 Azure AI Foundry 构建一个聊天机器人，已完成 Azure AI Search 知识库的配置。你需要在聊天代理中启用**自定义数据源**，使机器人能够基于公司内部文档回答问题。

**题目**

为了让 Azure OpenAI 聊天机器人使用 Azure AI Search 索引作为数据源，应在 API 请求中配置哪个额外参数？`,explanation:"",options:[{id:"A",text:'`context: {"index_name": "your-index"}`'},{id:"B",text:'`data_sources: [{"type": "azure_search", "parameters": {...}}]`'},{id:"C",text:'`system_message: "Use the provided knowledge base to answer questions."`'},{id:"D",text:'`tools: [{"type": "retrieval", "retrieval": {"index": "your-index"}}]`'}],answer:"B"},{id:"291",type:"multiple",content:`**背景**

你正在使用 Azure OpenAI Studio 中的 Chat playground，需要构建一个聊天机器人，要求：

- 减少语言模型的运行成本
- 以简洁正式的商务语言回复
- 保持相同的聊天历史窗口大小

**题目**

应配置哪两项设置？`,explanation:"",options:[{id:"A",text:"修改系统消息（System message），要求使用简洁正式的商务语言"},{id:"B",text:"将最大响应 Token 数（Max response tokens）降低"},{id:"C",text:"将 Temperature 参数调低至接近 0"},{id:"D",text:"将所用模型切换为更小的版本"},{id:"E",text:"增加 Top P 值至 1.0"}],answer:["A","B"]},{id:"292",type:"single",content:`**背景**

你正在使用 Azure AI Content Understanding 项目分析视频内容。你运行了自定义分析器（analyzer1），该分析器执行以下功能：
- 视频内容转录
- 从视频中提取关键帧

**题目**

以下关于该分析器运行结果的说法，哪项正确？`,explanation:"",options:[{id:"A",text:"分析结果中不包含时间戳信息"},{id:"B",text:"关键帧以 Base64 编码的图像数据形式返回"},{id:"C",text:"分析结果包含转录文本和关键帧，并且每个关键帧都有对应的时间戳"},{id:"D",text:"分析是同步的，运行后立即返回完整结果"}],answer:"C"},{id:"293",type:"single",content:`**背景**

你有一台本地计算机，包含以下文件：

- File1：WMV 格式视频
- File2：AVI 格式视频
- File3：MP4 格式视频
- File4：PDF 文件

**题目**

哪些文件可以上传并使用 Azure AI Video Indexer 进行分析？`,explanation:"",options:[{id:"A",text:"仅 File1"},{id:"B",text:"仅 File3"},{id:"C",text:"File1、File2 和 File3 仅"},{id:"D",text:"File1、File2、File3 和 File4 全部"},{id:"E",text:"File1、File2、File3（视频格式均支持）"}],answer:"C"},{id:"294",type:"multiple",content:`**背景**

你需要使用 Azure AI Content Safety 服务为一个聊天应用添加内容审核功能。你需要构建一个**检测用户消息中歧视性语言**的原型，且**最小化开发工作量**。

**题目**

应执行哪两项操作？`,explanation:"",options:[{id:"A",text:'登录 Content Safety Studio，使用"Moderate text content"功能进行测试'},{id:"B",text:"从 Azure 门户创建 Azure AI Content Safety 资源"},{id:"C",text:"从 Azure 门户创建 Azure OpenAI 资源"},{id:"D",text:"登录 Azure AI Foundry，在 Safety + Security 选项中配置"},{id:"E",text:"部署 Azure AI Language 服务的自定义文本分类模型"}],answer:["A","B"]},{id:"295",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 语言服务分析文档的应用。你需要处理**行业特定技术术语**，这些术语在标准 NER 实体类别中不存在。

**题目**

应使用哪个功能来识别这些行业特定术语？`,explanation:"",options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"对话语言理解（CLU）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"296",type:"single",content:`**背景**

你正在使用 Azure AI Speech SDK 进行**实时语音翻译**，需要将英语语音翻译成多种语言（法语、德语、西班牙语）。

翻译结果处理逻辑使用以下事件：

\`\`\`python
recognizer.recognized.connect(lambda evt: process_translation(evt.result))
\`\`\`

**题目**

在 \`process_translation\` 函数中，应如何获取法语翻译结果？`,explanation:"",options:[{id:"A",text:'`result.text["fr"]`'},{id:"B",text:'`result.translations["fr"]`'},{id:"C",text:"`result.translations.fr`"},{id:"D",text:"`result.french_translation`"}],answer:"B"},{id:"297",type:"single",content:`**背景**

你正在为一个 Azure AI Foundry 项目中的代理配置**函数调用（Function Calling）** 能力，代理将使用 Semantic Kernel 框架。

你需要确保：
- 所有与用户指令匹配的函数都被触发
- 如果函数需要必要参数而用户未提供，代理必须向用户询问

**题目**

在 Semantic Kernel 代码中，\`FunctionChoiceBehavior\` 应设置为哪个值来满足"所有匹配函数都被触发"的需求？`,explanation:"",options:[{id:"A",text:"`FunctionChoiceBehavior.None()`"},{id:"B",text:"`FunctionChoiceBehavior.Required()`"},{id:"C",text:"`FunctionChoiceBehavior.Auto()`"},{id:"D",text:"`FunctionChoiceBehavior.Manual()`"}],answer:"C"},{id:"298",type:"single",content:`**背景**

你正在构建一个 Azure OpenAI 应用，使用以下系统消息：

> "You are an AI assistant that helps people find information. Only answer questions that are directly related to the topic."

用户询问："What is the weather today?"（今天天气如何？）

该问题超出了系统消息定义的主题范围。

**题目**

为了确保机器人能够正确识别并拒绝超出范围的问题，应额外配置什么？`,explanation:"",options:[{id:"A",text:"将 Temperature 设为 0"},{id:"B",text:"启用 Azure AI Content Safety 的越狱风险检测"},{id:"C",text:`在系统消息中明确说明超出范围时应如何回复（如"如果问题与主题无关，请回复'我只能回答关于[主题]的问题'"）`},{id:"D",text:"使用 Azure AI Language 的意图分类预先过滤用户输入"}],answer:"C"},{id:"299",type:"single",content:`**背景**

你正在构建一个多步骤数据处理流水线，需要对 Azure OpenAI 生成的文本进行**实体提取**，然后对提取到的实体进行**情感分析**，最后将结果存储到数据库。

**题目**

为了实现最佳的 AI 功能组合，应使用哪两个 Azure AI 服务？`,explanation:"",options:[{id:"A",text:"Azure OpenAI（生成文本）+ Azure AI Language（实体提取 + 情感分析）"},{id:"B",text:"Azure OpenAI（所有任务）"},{id:"C",text:"Azure AI Language（所有任务，包括文本生成）"},{id:"D",text:"Azure AI Speech（语音转文字）+ Azure AI Language（后续处理）"}],answer:"A"},{id:"300",type:"single",content:`**背景**

你正在为一家国际公司的 Azure AI 解决方案进行最终审查。该解决方案使用 Azure OpenAI 为员工提供智能助手服务，通过情感分析结果来**影响员工的绩效考核**。

**题目**

为了确保该解决方案符合微软负责任 AI（Responsible AI）原则，应优先采取哪项措施？`,explanation:"",options:[{id:"A",text:"在绩效评估决策中引入**人工审核步骤**，确保 AI 建议经过人类判断后才影响员工"},{id:"B",text:"使用更大的模型以提高情感分析的准确性"},{id:"C",text:"增加训练数据量以减少模型偏差"},{id:"D",text:"将所有员工绩效数据公开，确保透明度"}],answer:"A"}];function Op(e){const n=V.useMemo(()=>{const o=[...e];for(let l=o.length-1;l>0;l--){const a=Math.floor(Math.random()*(l+1));[o[l],o[a]]=[o[a],o[l]]}return o},[e]),[t,i]=V.useState(0);return V.useEffect(()=>{i(0)},[n.length]),{shuffledQuestions:n,currentIndex:t,skipQuestion:()=>{t<n.length-1&&i(t+1)}}}function Rp(e,n){const t=e.answer;switch(e.type){case"single":case"multiple":case"truefalse":if(n.length!==t.length)return!1;const i=new Set(n),r=new Set(t);return i.size===r.size&&[...i].every(o=>r.has(o));case"sort":return n.length===t.length&&n.every((o,l)=>o===t[l]);default:return!1}}function _p(){const[e,n]=V.useState([]),t=V.useCallback((a,s)=>{const u=Rp(a,s),g={question:a,userAnswer:s,isCorrect:u};n(m=>[...m,g])},[]),i=V.useCallback(()=>{n([])},[]),r=e.length,o=e.filter(a=>a.isCorrect).length,l=r>0?o/r:0;return{records:e,submitAnswer:t,correctRate:l,totalAnswered:r,correctCount:o,reset:i}}const yi="quiz_history",jp=50;function lc(){const[e,n]=V.useState(()=>{try{const a=localStorage.getItem(yi);return a?JSON.parse(a):[]}catch(a){return console.error("Failed to load quiz history from localStorage:",a),[]}}),t=V.useCallback(a=>{try{const s={...a,date:new Date().toISOString()};return n(u=>{const g=[s,...u].slice(0,jp);return localStorage.setItem(yi,JSON.stringify(g)),g}),s}catch(s){return console.error("Failed to save quiz session:",s),null}},[]),i=V.useCallback(()=>e,[e]),r=V.useCallback(()=>{try{localStorage.removeItem(yi),n([])}catch(a){console.error("Failed to clear history:",a)}},[]),o=V.useCallback(a=>{try{n(s=>{const u=s.filter((g,m)=>m!==a);return localStorage.setItem(yi,JSON.stringify(u)),u})}catch(s){console.error("Failed to delete session:",s)}},[]),l=V.useCallback(()=>{const a={totalSessions:e.length,totalQuestions:e.reduce((s,u)=>s+u.totalQuestions,0),totalCorrect:e.reduce((s,u)=>s+u.correctCount,0),averageRate:0,practiceCount:0,simulationCount:0};return a.totalQuestions>0&&(a.averageRate=a.totalCorrect/a.totalQuestions),a.practiceCount=e.filter(s=>s.mode==="practice").length,a.simulationCount=e.filter(s=>s.mode==="simulation").length,a},[e]);return{history:e,saveSession:t,getHistory:i,clearHistory:r,deleteSession:o,getStats:l}}const Mp=({question:e,isVisible:n})=>n?f.jsxs("div",{className:"explanation-panel",children:[f.jsx("h4",{children:"解释："}),f.jsx("p",{children:e.explanation}),e.tags&&e.tags.length>0&&f.jsxs("div",{className:"tags",children:[f.jsx("span",{children:"标签："}),e.tags.map(t=>f.jsx("span",{className:"tag",children:t},t))]})]}):null,Up=e=>{const n=/(\*\*(.+?)\*\*|`([^`]+)`)/g,t=[];let i=0,r,o=0;for(;(r=n.exec(e))!==null;)r.index>i&&t.push(e.slice(i,r.index)),r[2]?t.push(f.jsx("strong",{children:r[2]},`strong-${o}`)):r[3]&&t.push(f.jsx("code",{children:r[3]},`code-${o}`)),i=r.index+r[0].length,o+=1;return i<e.length&&t.push(e.slice(i)),t},Gr=e=>e.split(/\n{2,}/).filter(n=>n.trim().length>0).map((n,t)=>f.jsx("p",{children:Up(n)},t)),Vp=e=>{const n=e.trim(),t=/\*\*题目\*\*/;if(!t.test(n))return{background:"",question:n,hasBackground:!1};const[r,o]=n.split(t).map(s=>s.trim()),l=r.replace(/\*\*背景\*\*/g,"").trim(),a=o.trim();return{background:l,question:a,hasBackground:l.length>0}},bt=({content:e})=>{const{background:n,question:t,hasBackground:i}=Vp(e);return i?f.jsxs("div",{className:"question-text",children:[f.jsxs("div",{className:"question-section question-background",children:[f.jsx("div",{className:"section-label",children:"背景"}),f.jsx("div",{className:"section-content",children:Gr(n)})]}),f.jsxs("div",{className:"question-section question-main",children:[f.jsx("div",{className:"section-label",children:"题目"}),f.jsx("div",{className:"section-content",children:Gr(t)})]})]}):f.jsx("div",{className:"question-text question-main",children:f.jsx("div",{className:"section-content",children:Gr(t)})})},Qp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=l=>{t([l])},o=new Set(e.answer);return f.jsxs("div",{className:"question-container",children:[f.jsx(bt,{content:e.content}),f.jsx("div",{className:"options",children:e.options.map(l=>{const a=n.includes(l.id),s=o.has(l.id),u=i&&a&&!s;return f.jsxs("button",{className:`option ${a?"selected":""} ${i&&s?"correct":""} ${u?"wrong":""}`,onClick:()=>r(l.id),children:[f.jsx("span",{className:"option-id",children:l.id}),f.jsx("span",{className:"option-text",children:l.text})]},l.id)})})]})},Wp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=l=>{const a=n.includes(l)?n.filter(s=>s!==l):[...n,l];t(a)},o=new Set(e.answer);return f.jsxs("div",{className:"question-container",children:[f.jsx(bt,{content:e.content}),f.jsx("div",{className:"options",children:e.options.map(l=>{const a=n.includes(l.id),s=o.has(l.id),u=i&&a&&!s;return f.jsxs("button",{className:`option ${a?"selected":""} ${i&&s?"correct":""} ${u?"wrong":""}`,onClick:()=>r(l.id),children:[f.jsx("span",{className:"option-id",children:l.id}),f.jsx("span",{className:"option-text",children:l.text})]},l.id)})})]})},Kp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const o=Ho.useMemo(()=>{const s=[...e.items];for(let u=s.length-1;u>0;u--){const g=Math.floor(Math.random()*(u+1));[s[u],s[g]]=[s[g],s[u]]}return s},[e.items]).filter(s=>!n.includes(s)),l=s=>{t([...n,s])},a=s=>{const u=[...n];u.splice(s,1),t(u)};return f.jsxs("div",{className:"question-container",children:[f.jsx(bt,{content:e.content}),f.jsx("p",{className:"sort-instruction",children:"请点击选项按正确顺序排列："}),f.jsxs("div",{className:"sort-container",children:[f.jsxs("div",{className:"available-options",children:[f.jsx("h4",{children:"可用选项："}),f.jsx("div",{className:"options",children:o.map(s=>f.jsx("button",{className:"option",onClick:()=>l(s),children:s},s))})]}),f.jsxs("div",{className:"sorted-queue",children:[f.jsx("h4",{children:"已排序队列："}),f.jsx("div",{className:"queue",children:n.map((s,u)=>{const g=i&&e.answer[u]===s,m=i&&!g;return f.jsxs("div",{className:`queue-item ${g?"correct":""} ${m?"wrong":""}`,children:[f.jsxs("span",{children:[u+1,". ",s]}),f.jsx("button",{onClick:()=>a(u),children:"移除"})]},u)})})]})]})]})},$p=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=g=>{t([g])},o=e.answer[0],l=n.includes("true"),a=n.includes("false"),s=o==="true",u=o==="false";return f.jsxs("div",{className:"question-container",children:[f.jsx(bt,{content:e.content}),f.jsxs("div",{className:"options",children:[f.jsxs("button",{className:`option ${l?"selected":""} ${i&&s?"correct":""} ${i&&l&&!s?"wrong":""}`,onClick:()=>r("true"),children:[f.jsx("span",{className:"option-id",children:"A"}),f.jsx("span",{className:"option-text",children:"True"})]}),f.jsxs("button",{className:`option ${a?"selected":""} ${i&&u?"correct":""} ${i&&a&&!u?"wrong":""}`,onClick:()=>r("false"),children:[f.jsx("span",{className:"option-id",children:"B"}),f.jsx("span",{className:"option-text",children:"False"})]})]})]})},Hp=({question:e,userAnswer:n,onAnswerChange:t,mode:i,currentIndex:r,totalQuestions:o,correctCount:l,correctRate:a,showExplanation:s})=>{const u=()=>{switch(e.type){case"single":return f.jsx(Qp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"multiple":return f.jsx(Wp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"sort":return f.jsx(Kp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"truefalse":return f.jsx($p,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});default:return f.jsx("div",{children:"Unsupported question type"})}};return f.jsxs("div",{className:"quiz-card",children:[i==="practice"&&f.jsxs("div",{className:"progress-display",children:[f.jsxs("div",{children:["Progress: Question ",r+1," / ",o]}),f.jsxs("div",{children:["Correct: ",l," (",(a*100).toFixed(1),"%)"]})]}),i==="simulation"&&f.jsx("div",{className:"progress-display",children:f.jsxs("div",{children:["Progress: Question ",r+1," / ",o]})}),u(),i==="practice"&&f.jsx(Mp,{question:e,isVisible:s})]})},Gp=({totalQuestions:e,correctCount:n,correctRate:t,records:i,mode:r,onRestartAll:o,onRestartWrong:l,onViewHistory:a})=>{const[s,u]=V.useState(new Set),g=Ho.useMemo(()=>{const A={};return i.forEach(C=>{const F=C.question.type;A[F]||(A[F]={total:0,correct:0}),A[F].total++,C.isCorrect&&A[F].correct++}),A},[i]),m=i.filter(A=>!A.isCorrect),x=A=>{const C=new Set(s);C.has(A)?C.delete(A):C.add(A),u(C)},v=A=>{switch(A){case"single":return"单选";case"multiple":return"多选";case"sort":return"排序";case"truefalse":return"判断";default:return A}};return f.jsxs("div",{className:"result-screen",children:[f.jsx("h2",{children:r==="practice"?"练习结束！":"模拟考试完成！"}),f.jsxs("div",{className:"overall-score",children:[f.jsxs("div",{className:"score-display",children:[n," / ",e]}),f.jsxs("div",{className:"score-percentage",children:[(t*100).toFixed(1),"%"]})]}),f.jsxs("div",{className:"type-stats",children:[f.jsx("h3",{children:"题型统计"}),Object.entries(g).map(([A,C])=>f.jsxs("div",{className:"type-stat",children:[v(A),": ",C.correct,"/",C.total]},A))]}),m.length>0&&f.jsxs("div",{className:"wrong-questions",children:[f.jsx("h3",{children:"错题回顾"}),m.map((A,C)=>f.jsxs("div",{className:"wrong-question-item",children:[f.jsxs("button",{className:"question-toggle",onClick:()=>x(A.question.id),children:["题目 ",C+1,": ",A.question.content.substring(0,50),"..."]}),s.has(A.question.id)&&f.jsxs("div",{className:"question-details",children:[f.jsx(bt,{content:A.question.content}),f.jsxs("p",{children:[f.jsx("strong",{children:"你的答案："}),A.userAnswer.join(", ")]}),f.jsxs("p",{children:[f.jsx("strong",{children:"正确答案："}),A.question.answer.join(", ")]}),f.jsxs("p",{children:[f.jsx("strong",{children:"解析："}),A.question.explanation]})]})]},A.question.id))]}),f.jsxs("div",{className:"action-buttons",children:[f.jsx("button",{onClick:o,children:"再来一次（全部）"}),f.jsx("button",{onClick:l,disabled:m.length===0,children:"只练错题"}),a&&f.jsx("button",{onClick:a,className:"history-btn",children:"📊 查看历史"})]})]})},Xp=({onModeSelect:e})=>f.jsxs("div",{className:"mode-selection",children:[f.jsx("h1",{children:"选择答题模式"}),f.jsxs("div",{className:"mode-buttons",children:[f.jsxs("button",{className:"mode-button practice",onClick:()=>e("practice"),children:[f.jsx("h2",{children:"练习模式"}),f.jsx("p",{children:"实时显示进度和正确率，提交后立即显示答案解析，可随时结束练习"})]}),f.jsxs("button",{className:"mode-button simulation",onClick:()=>e("simulation"),children:[f.jsx("h2",{children:"模拟模式"}),f.jsx("p",{children:"完成30道随机题目后显示正确率和错题解析"})]})]})]}),Jp=({onClose:e})=>{const{history:n,deleteSession:t,clearHistory:i,getStats:r}=lc(),[o,l]=V.useState(null),a=r(),s=x=>new Date(x).toLocaleString("zh-CN"),u=x=>x==="practice"?"练习模式":"模拟模式",g=()=>{window.confirm("确定要清空所有历史记录吗？此操作不可撤销。")&&i()},m=x=>{l(o===x?null:x)};return n.length===0?f.jsxs("div",{className:"history-screen",children:[f.jsxs("div",{className:"history-header",children:[f.jsx("h2",{children:"学习历史"}),f.jsx("button",{onClick:e,className:"close-button",children:"关闭"})]}),f.jsx("div",{className:"history-empty",children:f.jsx("p",{children:"暂无学习记录"})})]}):f.jsxs("div",{className:"history-screen",children:[f.jsxs("div",{className:"history-header",children:[f.jsx("h2",{children:"学习历史"}),f.jsx("button",{onClick:e,className:"close-button",children:"关闭"})]}),f.jsxs("div",{className:"history-stats",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-label",children:"总次数"}),f.jsx("span",{className:"stat-value",children:a.totalSessions})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-label",children:"总题数"}),f.jsx("span",{className:"stat-value",children:a.totalQuestions})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-label",children:"平均正确率"}),f.jsxs("span",{className:"stat-value",children:[(a.averageRate*100).toFixed(1),"%"]})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-label",children:"练习/模拟"}),f.jsxs("span",{className:"stat-value",children:[a.practiceCount,"/",a.simulationCount]})]})]}),f.jsxs("div",{className:"history-list",children:[f.jsxs("div",{className:"history-list-header",children:[f.jsx("span",{className:"col-date",children:"日期"}),f.jsx("span",{className:"col-mode",children:"模式"}),f.jsx("span",{className:"col-score",children:"成绩"}),f.jsx("span",{className:"col-rate",children:"正确率"}),f.jsx("span",{className:"col-action",children:"操作"})]}),n.map((x,v)=>f.jsxs("div",{className:"history-item",children:[f.jsxs("div",{className:"history-item-summary",onClick:()=>m(v),children:[f.jsx("span",{className:"col-date",children:s(x.date)}),f.jsx("span",{className:"col-mode",children:u(x.mode)}),f.jsxs("span",{className:"col-score",children:[x.correctCount,"/",x.totalQuestions]}),f.jsxs("span",{className:"col-rate",children:[(x.correctRate*100).toFixed(1),"%"]}),f.jsx("div",{className:"col-action",children:f.jsx("button",{className:"delete-btn",onClick:A=>{A.stopPropagation(),t(v)},children:"删除"})})]}),o===v&&f.jsx("div",{className:"history-item-details",children:f.jsxs("div",{className:"wrong-questions",children:[f.jsx("h4",{children:"错题详情"}),x.records.filter(A=>!A.isCorrect).length===0?f.jsx("p",{className:"no-wrong",children:"全部正确！🎉"}):f.jsx("ul",{className:"wrong-list",children:x.records.filter(A=>!A.isCorrect).map((A,C)=>f.jsxs("li",{className:"wrong-item",children:[f.jsxs("div",{className:"question-preview",children:[A.question.content.substring(0,80),"..."]}),f.jsxs("div",{className:"answer-info",children:[f.jsxs("span",{className:"user-answer",children:["你的答案: ",A.userAnswer.join(", ")||"跳过"]}),f.jsxs("span",{className:"correct-answer",children:["正确答案: ",Array.isArray(A.question.answer)?A.question.answer.join(", "):A.question.answer]})]})]},C))})]})})]},v))]}),f.jsx("div",{className:"history-footer",children:f.jsx("button",{onClick:g,className:"clear-all-btn",children:"清空所有历史记录"})})]})};function Yp(){const[e,n]=V.useState("mode-select"),[t,i]=V.useState(null),[r,o]=V.useState([]),l=(z,O)=>{const P=new Set;for(;P.size<O&&P.size<z.length;)P.add(Math.floor(Math.random()*z.length));return Array.from(P).map(ge=>z[ge])},{shuffledQuestions:a,currentIndex:s,skipQuestion:u}=Op(r),{records:g,submitAnswer:m,correctRate:x,correctCount:v,reset:A}=_p(),{saveSession:C}=lc();V.useEffect(()=>{e==="result"&&g.length>0&&C({mode:t,correctRate:x,totalQuestions:a.length,correctCount:v,records:g})},[e]);const F=z=>{i(z),n("quiz"),o(z==="simulation"?l(Ga,30):Ga)},d=a[s],[c,p]=V.useState([]),[h,S]=V.useState(!1),k=()=>{d&&(m(d,c),S(!0))},D=()=>{d&&(m(d,[]),p([]),S(!1),s<a.length-1?u():n("result"))};return e==="mode-select"?f.jsx(Xp,{onModeSelect:F}):e==="history"?f.jsx(Jp,{onClose:()=>n("mode-select")}):e==="quiz"&&d?f.jsxs("div",{className:"app",children:[f.jsx(Hp,{question:d,userAnswer:c,onAnswerChange:p,mode:t,currentIndex:s,totalQuestions:a.length,correctCount:v,correctRate:x,showExplanation:h}),f.jsxs("div",{className:"controls",children:[!h&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:D,children:"跳过"}),f.jsx("button",{onClick:k,disabled:c.length===0,children:"提交"})]}),h&&f.jsx("button",{onClick:()=>{p([]),S(!1),s<a.length-1?u():n("result")},children:"下一题"}),t==="practice"&&f.jsx("button",{onClick:()=>n("result"),children:"结束练习"})]})]}):f.jsx(Gp,{totalQuestions:a.length,correctCount:v,correctRate:x,records:g,mode:t,onRestartAll:()=>{n("mode-select"),i(null),o([]),p([]),S(!1),A()},onRestartWrong:()=>{const z=g.filter(O=>!O.isCorrect).map(O=>O.question);z.length>0?(o(z),n("quiz"),p([]),S(!1),A()):alert("没有错题！")},onViewHistory:()=>n("history")})}Xr.createRoot(document.getElementById("root")).render(f.jsx(Ho.StrictMode,{children:f.jsx(Yp,{})}));
