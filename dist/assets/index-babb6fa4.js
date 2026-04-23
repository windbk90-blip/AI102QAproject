(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ql={exports:{}},or={},Yl={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),dc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Ua=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var Zl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bl=Object.assign,es={};function ct(e,n,t){this.props=e,this.context=n,this.refs=es,this.updater=t||Zl}ct.prototype.isReactComponent={};ct.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ct.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=ct.prototype;function Go(e,n,t){this.props=e,this.context=n,this.refs=es,this.updater=t||Zl}var Ho=Go.prototype=new ns;Ho.constructor=Go;bl(Ho,ct.prototype);Ho.isPureReactComponent=!0;var Va=Array.isArray,ts=Object.prototype.hasOwnProperty,$o={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,n,t){var i,r={},o=null,a=null;if(n!=null)for(i in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)ts.call(n,i)&&!is.hasOwnProperty(i)&&(r[i]=n[i]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Yt,type:e,key:o,ref:a,props:r,_owner:$o.current}}function Cc(e,n){return{$$typeof:Yt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yt}function Ic(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ka=/\/+/g;function Ir(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ic(""+e.key):n.toString(36)}function Ii(e,n,t,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yt:case dc:a=!0}}if(a)return a=e,r=r(a),e=i===""?"."+Ir(a,0):i,Va(r)?(t="",e!=null&&(t=e.replace(Ka,"$&/")+"/"),Ii(r,n,t,"",function(u){return u})):r!=null&&(Jo(r)&&(r=Cc(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ka,"$&/")+"/")+e)),n.push(r)),1;if(a=0,i=i===""?".":i+":",Va(e))for(var l=0;l<e.length;l++){o=e[l];var s=i+Ir(o,l);a+=Ii(o,n,t,s,r)}else if(s=Sc(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=i+Ir(o,l++),a+=Ii(o,n,t,s,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function oi(e,n,t){if(e==null)return e;var i=[],r=0;return Ii(e,i,"","",function(o){return n.call(t,o,r++)}),i}function zc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},zi={transition:null},wc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:zi,ReactCurrentOwner:$o};function os(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:oi,forEach:function(e,n,t){oi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return oi(e,function(){n++}),n},toArray:function(e){return oi(e,function(n){return n})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=ct;E.Fragment=pc;E.Profiler=Ac;E.PureComponent=Go;E.StrictMode=fc;E.Suspense=yc;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;E.act=os;E.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=bl({},e.props),r=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=$o.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)ts.call(n,s)&&!is.hasOwnProperty(s)&&(i[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:Yt,type:e.type,key:r,ref:o,props:i,_owner:a}};E.createContext=function(e){return e={$$typeof:mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};E.createElement=rs;E.createFactory=function(e){var n=rs.bind(null,e);return n.type=e,n};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:xc,render:e}};E.isValidElement=Jo;E.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:zc}};E.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};E.startTransition=function(e){var n=zi.transition;zi.transition={};try{e()}finally{zi.transition=n}};E.unstable_act=os;E.useCallback=function(e,n){return se.current.useCallback(e,n)};E.useContext=function(e){return se.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return se.current.useDeferredValue(e)};E.useEffect=function(e,n){return se.current.useEffect(e,n)};E.useId=function(){return se.current.useId()};E.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};E.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};E.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};E.useMemo=function(e,n){return se.current.useMemo(e,n)};E.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};E.useRef=function(e){return se.current.useRef(e)};E.useState=function(e){return se.current.useState(e)};E.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};E.useTransition=function(){return se.current.useTransition()};E.version="18.3.1";Yl.exports=E;var N=Yl.exports;const Xo=cc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=N,Pc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),kc=Object.prototype.hasOwnProperty,Bc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lc={key:!0,ref:!0,__self:!0,__source:!0};function as(e,n,t){var i,r={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(i in n)kc.call(n,i)&&!Lc.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:Pc,type:e,key:o,ref:a,props:r,_owner:Bc.current}}or.Fragment=Tc;or.jsx=as;or.jsxs=as;ql.exports=or;var p=ql.exports,Yr={},ls={exports:{}},Se={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(I,k){var B=I.length;I.push(k);e:for(;0<B;){var G=B-1>>>1,q=I[G];if(0<r(q,k))I[G]=k,I[B]=q,B=G;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],B=I.pop();if(B!==k){I[0]=B;e:for(var G=0,q=I.length,ii=q>>>1;G<ii;){var Sn=2*(G+1)-1,Cr=I[Sn],Cn=Sn+1,ri=I[Cn];if(0>r(Cr,B))Cn<q&&0>r(ri,Cr)?(I[G]=ri,I[Cn]=B,G=Cn):(I[G]=Cr,I[Sn]=B,G=Sn);else if(Cn<q&&0>r(ri,B))I[G]=ri,I[Cn]=B,G=Cn;else break e}}return k}function r(I,k){var B=I.sortIndex-k.sortIndex;return B!==0?B:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],g=1,m=null,A=3,S=!1,v=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=I)i(u),k.sortIndex=k.expirationTime,n(s,k);else break;k=t(u)}}function y(I){if(x=!1,f(I),!v)if(t(s)!==null)v=!0,me(C);else{var k=t(u);k!==null&&Ze(y,k.startTime-I)}}function C(I,k){v=!1,x&&(x=!1,d(P),P=-1),S=!0;var B=A;try{for(f(k),m=t(s);m!==null&&(!(m.expirationTime>k)||I&&!ge());){var G=m.callback;if(typeof G=="function"){m.callback=null,A=m.priorityLevel;var q=G(m.expirationTime<=k);k=e.unstable_now(),typeof q=="function"?m.callback=q:m===t(s)&&i(s),f(k)}else i(s);m=t(s)}if(m!==null)var ii=!0;else{var Sn=t(u);Sn!==null&&Ze(y,Sn.startTime-k),ii=!1}return ii}finally{m=null,A=B,S=!1}}var D=!1,w=null,P=-1,U=5,L=-1;function ge(){return!(e.unstable_now()-L<U)}function Mn(){if(w!==null){var I=e.unstable_now();L=I;var k=!0;try{k=w(!0,I)}finally{k?vn():(D=!1,w=null)}}else D=!1}var vn;if(typeof c=="function")vn=function(){c(Mn)};else if(typeof MessageChannel<"u"){var Sr=new MessageChannel,ke=Sr.port2;Sr.port1.onmessage=Mn,vn=function(){ke.postMessage(null)}}else vn=function(){T(Mn,0)};function me(I){w=I,D||(D=!0,vn())}function Ze(I,k){P=T(function(){I(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,me(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(I){switch(A){case 1:case 2:case 3:var k=3;break;default:k=A}var B=A;A=k;try{return I()}finally{A=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=A;A=I;try{return k()}finally{A=B}},e.unstable_scheduleCallback=function(I,k,B){var G=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?G+B:G):B=G,I){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=B+q,I={id:g++,callback:k,priorityLevel:I,startTime:B,expirationTime:q,sortIndex:-1},B>G?(I.sortIndex=B,n(u,I),t(s)===null&&I===t(u)&&(x?(d(P),P=-1):x=!0,Ze(y,B-G))):(I.sortIndex=q,n(s,I),v||S||(v=!0,me(C))),I},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(I){var k=A;return function(){var B=A;A=k;try{return I.apply(this,arguments)}finally{A=B}}}})(us);ss.exports=us;var Ec=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=N,ve=Ec;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,Nt={};function On(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(Nt[e]=n,e=0;e<n.length;e++)cs.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zr=Object.prototype.hasOwnProperty,Nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Qa={};function Oc(e){return Zr.call(Qa,e)?!0:Zr.call(Wa,e)?!1:Nc.test(e)?Qa[e]=!0:(Wa[e]=!0,!1)}function Rc(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mc(e,n,t,i){if(n===null||typeof n>"u"||Rc(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,i,r,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qo,Yo);ne[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qo,Yo);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qo,Yo);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zo(e,n,t,i){var r=ne.hasOwnProperty(n)?ne[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Mc(n,t,r,i)&&(t=null),i||r===null?Oc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Ye=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),bo=Symbol.for("react.strict_mode"),br=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),ps=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,zr;function St(e){if(zr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);zr=n&&n[1]||""}return`
`+zr+e}var wr=!1;function Dr(e,n){if(!e||wr)return"";wr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,l=o.length-1;1<=a&&0<=l&&r[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==o[l]){var s=`
`+r[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{wr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function _c(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=Dr(e.type,!1),e;case 11:return e=Dr(e.type.render,!1),e;case 1:return e=Dr(e.type,!0),e;default:return""}}function to(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case jn:return"Portal";case br:return"Profiler";case bo:return"StrictMode";case eo:return"Suspense";case no:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case ea:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case na:return n=e.displayName||null,n!==null?n:to(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return to(e(n))}catch{}}return null}function jc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(n);case 8:return n===bo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function As(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uc(e){var n=As(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function li(e){e._valueTracker||(e._valueTracker=Uc(e))}function gs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=As(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ha(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ms(e,n){n=n.checked,n!=null&&Zo(e,"checked",n,!1)}function ro(e,n){ms(e,n);var t=gn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?oo(e,n.type,t):n.hasOwnProperty("defaultValue")&&oo(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $a(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function oo(e,n,t){(n!=="number"||Oi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ct=Array.isArray;function Yn(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ao(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ja(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(Ct(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function xs(e,n){var t=gn(n.value),i=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Xa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(wt).forEach(function(e){Vc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),wt[n]=wt[e]})});function vs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||wt.hasOwnProperty(e)&&wt[e]?(""+n).trim():n+"px"}function Ss(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=vs(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Kc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,n){if(n){if(Kc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function uo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,Zn=null,bn=null;function qa(e){if(e=ei(e)){if(typeof po!="function")throw Error(h(280));var n=e.stateNode;n&&(n=cr(n),po(e.stateNode,e.type,n))}}function Cs(e){Zn?bn?bn.push(e):bn=[e]:Zn=e}function Is(){if(Zn){var e=Zn,n=bn;if(bn=Zn=null,qa(e),n)for(e=0;e<n.length;e++)qa(n[e])}}function zs(e,n){return e(n)}function ws(){}var Pr=!1;function Ds(e,n,t){if(Pr)return e(n,t);Pr=!0;try{return zs(e,n,t)}finally{Pr=!1,(Zn!==null||bn!==null)&&(ws(),Is())}}function Rt(e,n){var t=e.stateNode;if(t===null)return null;var i=cr(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var fo=!1;if($e)try{var At={};Object.defineProperty(At,"passive",{get:function(){fo=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{fo=!1}function Wc(e,n,t,i,r,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var Dt=!1,Ri=null,Mi=!1,Ao=null,Qc={onError:function(e){Dt=!0,Ri=e}};function Gc(e,n,t,i,r,o,a,l,s){Dt=!1,Ri=null,Wc.apply(Qc,arguments)}function Hc(e,n,t,i,r,o,a,l,s){if(Gc.apply(this,arguments),Dt){if(Dt){var u=Ri;Dt=!1,Ri=null}else throw Error(h(198));Mi||(Mi=!0,Ao=u)}}function Rn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ps(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ya(e){if(Rn(e)!==e)throw Error(h(188))}function $c(e){var n=e.alternate;if(!n){if(n=Rn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Ya(r),e;if(o===i)return Ya(r),n;o=o.sibling}throw Error(h(188))}if(t.return!==i.return)t=r,i=o;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,i=o;break}if(l===i){a=!0,i=r,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,i=r;break}if(l===i){a=!0,i=o,t=r;break}l=l.sibling}if(!a)throw Error(h(189))}}if(t.alternate!==i)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Ts(e){return e=$c(e),e!==null?ks(e):null}function ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ks(e);if(n!==null)return n;e=e.sibling}return null}var Bs=ve.unstable_scheduleCallback,Za=ve.unstable_cancelCallback,Jc=ve.unstable_shouldYield,Xc=ve.unstable_requestPaint,H=ve.unstable_now,qc=ve.unstable_getCurrentPriorityLevel,ia=ve.unstable_ImmediatePriority,Ls=ve.unstable_UserBlockingPriority,_i=ve.unstable_NormalPriority,Yc=ve.unstable_LowPriority,Es=ve.unstable_IdlePriority,ar=null,Ue=null;function Zc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ar,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:nd,bc=Math.log,ed=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(bc(e)/ed|0)|0}var ui=64,ci=4194304;function It(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?i=It(l):(o&=a,o!==0&&(i=It(o)))}else a=t&~r,a!==0?i=It(a):o!==0&&(i=It(o));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Ne(n),r=1<<t,i|=e[t],n&=~r;return i}function td(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ne(o),l=1<<a,s=r[a];s===-1?(!(l&t)||l&i)&&(r[a]=td(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fs(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Tr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ne(n),e[n]=t}function rd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ne(t),o=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~o}}function ra(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Ne(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var O=0;function Ns(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Os,oa,Rs,Ms,_s,mo=!1,di=[],ln=null,sn=null,un=null,Mt=new Map,_t=new Map,tn=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ba(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Mt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_t.delete(n.pointerId)}}function gt(e,n,t,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},n!==null&&(n=ei(n),n!==null&&oa(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ad(e,n,t,i,r){switch(n){case"focusin":return ln=gt(ln,e,n,t,i,r),!0;case"dragenter":return sn=gt(sn,e,n,t,i,r),!0;case"mouseover":return un=gt(un,e,n,t,i,r),!0;case"pointerover":var o=r.pointerId;return Mt.set(o,gt(Mt.get(o)||null,e,n,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,_t.set(o,gt(_t.get(o)||null,e,n,t,i,r)),!0}return!1}function js(e){var n=wn(e.target);if(n!==null){var t=Rn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ps(t),n!==null){e.blockedOn=n,_s(e.priority,function(){Rs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);co=i,t.target.dispatchEvent(i),co=null}else return n=ei(t),n!==null&&oa(n),e.blockedOn=t,!1;n.shift()}return!0}function el(e,n,t){wi(e)&&t.delete(n)}function ld(){mo=!1,ln!==null&&wi(ln)&&(ln=null),sn!==null&&wi(sn)&&(sn=null),un!==null&&wi(un)&&(un=null),Mt.forEach(el),_t.forEach(el)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,mo||(mo=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ld)))}function jt(e){function n(r){return mt(r,e)}if(0<di.length){mt(di[0],e);for(var t=1;t<di.length;t++){var i=di[t];i.blockedOn===e&&(i.blockedOn=null)}}for(ln!==null&&mt(ln,e),sn!==null&&mt(sn,e),un!==null&&mt(un,e),Mt.forEach(n),_t.forEach(n),t=0;t<tn.length;t++)i=tn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)js(t),t.blockedOn===null&&tn.shift()}var et=Ye.ReactCurrentBatchConfig,Ui=!0;function sd(e,n,t,i){var r=O,o=et.transition;et.transition=null;try{O=1,aa(e,n,t,i)}finally{O=r,et.transition=o}}function ud(e,n,t,i){var r=O,o=et.transition;et.transition=null;try{O=4,aa(e,n,t,i)}finally{O=r,et.transition=o}}function aa(e,n,t,i){if(Ui){var r=xo(e,n,t,i);if(r===null)_r(e,n,i,Vi,t),ba(e,i);else if(ad(r,e,n,t,i))i.stopPropagation();else if(ba(e,i),n&4&&-1<od.indexOf(e)){for(;r!==null;){var o=ei(r);if(o!==null&&Os(o),o=xo(e,n,t,i),o===null&&_r(e,n,i,Vi,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else _r(e,n,i,null,t)}}var Vi=null;function xo(e,n,t,i){if(Vi=null,e=ta(i),e=wn(e),e!==null)if(n=Rn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ps(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vi=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case ia:return 1;case Ls:return 4;case _i:case Yc:return 16;case Es:return 536870912;default:return 16}default:return 16}}var on=null,la=null,Di=null;function Vs(){if(Di)return Di;var e,n=la,t=n.length,i,r="value"in on?on.value:on.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(i=1;i<=a&&n[t-i]===r[o-i];i++);return Di=r.slice(e,1<i?1-i:void 0)}function Pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function nl(){return!1}function Ce(e){function n(t,i,r,o,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:nl,this.isPropagationStopped=nl,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),n}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Ce(dt),bt=W({},dt,{view:0,detail:0}),cd=Ce(bt),kr,Br,xt,lr=W({},bt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(kr=e.screenX-xt.screenX,Br=e.screenY-xt.screenY):Br=kr=0,xt=e),kr)},movementY:function(e){return"movementY"in e?e.movementY:Br}}),tl=Ce(lr),dd=W({},lr,{dataTransfer:0}),pd=Ce(dd),fd=W({},bt,{relatedTarget:0}),Lr=Ce(fd),Ad=W({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Ce(Ad),md=W({},dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=Ce(md),yd=W({},dt,{data:0}),il=Ce(yd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sd[e])?!!n[e]:!1}function ua(){return Cd}var Id=W({},bt,{key:function(e){if(e.key){var n=hd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Ce(Id),wd=W({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rl=Ce(wd),Dd=W({},bt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),Pd=Ce(Dd),Td=W({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=Ce(Td),Bd=W({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=Ce(Bd),Ed=[9,13,27,32],ca=$e&&"CompositionEvent"in window,Pt=null;$e&&"documentMode"in document&&(Pt=document.documentMode);var Fd=$e&&"TextEvent"in window&&!Pt,Ks=$e&&(!ca||Pt&&8<Pt&&11>=Pt),ol=String.fromCharCode(32),al=!1;function Ws(e,n){switch(e){case"keyup":return Ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Nd(e,n){switch(e){case"compositionend":return Qs(n);case"keypress":return n.which!==32?null:(al=!0,ol);case"textInput":return e=n.data,e===ol&&al?null:e;default:return null}}function Od(e,n){if(Vn)return e==="compositionend"||!ca&&Ws(e,n)?(e=Vs(),Di=la=on=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ks&&n.locale!=="ko"?null:n.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rd[e.type]:n==="textarea"}function Gs(e,n,t,i){Cs(i),n=Ki(n,"onChange"),0<n.length&&(t=new sa("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Tt=null,Ut=null;function Md(e){tu(e,0)}function sr(e){var n=Qn(e);if(gs(n))return e}function _d(e,n){if(e==="change")return n}var Hs=!1;if($e){var Er;if($e){var Fr="oninput"in document;if(!Fr){var sl=document.createElement("div");sl.setAttribute("oninput","return;"),Fr=typeof sl.oninput=="function"}Er=Fr}else Er=!1;Hs=Er&&(!document.documentMode||9<document.documentMode)}function ul(){Tt&&(Tt.detachEvent("onpropertychange",$s),Ut=Tt=null)}function $s(e){if(e.propertyName==="value"&&sr(Ut)){var n=[];Gs(n,Ut,e,ta(e)),Ds(Md,n)}}function jd(e,n,t){e==="focusin"?(ul(),Tt=n,Ut=t,Tt.attachEvent("onpropertychange",$s)):e==="focusout"&&ul()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Ut)}function Vd(e,n){if(e==="click")return sr(n)}function Kd(e,n){if(e==="input"||e==="change")return sr(n)}function Wd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:Wd;function Vt(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Zr.call(n,r)||!Re(e[r],n[r]))return!1}return!0}function cl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dl(e,n){var t=cl(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cl(t)}}function Js(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Js(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xs(){for(var e=window,n=Oi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Oi(e.document)}return n}function da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qd(e){var n=Xs(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Js(t.ownerDocument.documentElement,t)){if(i!==null&&da(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=dl(t,o);var a=dl(t,i);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=$e&&"documentMode"in document&&11>=document.documentMode,Kn=null,yo=null,kt=null,ho=!1;function pl(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ho||Kn==null||Kn!==Oi(i)||(i=Kn,"selectionStart"in i&&da(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kt&&Vt(kt,i)||(kt=i,i=Ki(yo,"onSelect"),0<i.length&&(n=new sa("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Kn)))}function fi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Nr={},qs={};$e&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ur(e){if(Nr[e])return Nr[e];if(!Wn[e])return e;var n=Wn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qs)return Nr[e]=n[t];return e}var Ys=ur("animationend"),Zs=ur("animationiteration"),bs=ur("animationstart"),eu=ur("transitionend"),nu=new Map,fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){nu.set(e,n),On(n,[e])}for(var Or=0;Or<fl.length;Or++){var Rr=fl[Or],Hd=Rr.toLowerCase(),$d=Rr[0].toUpperCase()+Rr.slice(1);xn(Hd,"on"+$d)}xn(Ys,"onAnimationEnd");xn(Zs,"onAnimationIteration");xn(bs,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(eu,"onTransitionEnd");it("onMouseEnter",["mouseout","mouseover"]);it("onMouseLeave",["mouseout","mouseover"]);it("onPointerEnter",["pointerout","pointerover"]);it("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function Al(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Hc(i,n,void 0,e),e.currentTarget=null}function tu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var a=i.length-1;0<=a;a--){var l=i[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&r.isPropagationStopped())break e;Al(r,l,u),o=s}else for(a=0;a<i.length;a++){if(l=i[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&r.isPropagationStopped())break e;Al(r,l,u),o=s}}}if(Mi)throw e=Ao,Mi=!1,Ao=null,e}function M(e,n){var t=n[zo];t===void 0&&(t=n[zo]=new Set);var i=e+"__bubble";t.has(i)||(iu(n,e,2,!1),t.add(i))}function Mr(e,n,t){var i=0;n&&(i|=4),iu(t,e,i,n)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[Ai]){e[Ai]=!0,cs.forEach(function(t){t!=="selectionchange"&&(Jd.has(t)||Mr(t,!1,e),Mr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ai]||(n[Ai]=!0,Mr("selectionchange",!1,n))}}function iu(e,n,t,i){switch(Us(n)){case 1:var r=sd;break;case 4:r=ud;break;default:r=aa}t=r.bind(null,n,t,e),r=void 0,!fo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function _r(e,n,t,i,r){var o=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;a=a.return}for(;l!==null;){if(a=wn(l),a===null)return;if(s=a.tag,s===5||s===6){i=o=a;continue e}l=l.parentNode}}i=i.return}Ds(function(){var u=o,g=ta(t),m=[];e:{var A=nu.get(e);if(A!==void 0){var S=sa,v=e;switch(e){case"keypress":if(Pi(t)===0)break e;case"keydown":case"keyup":S=zd;break;case"focusin":v="focus",S=Lr;break;case"focusout":v="blur",S=Lr;break;case"beforeblur":case"afterblur":S=Lr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=tl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pd;break;case Ys:case Zs:case bs:S=gd;break;case eu:S=kd;break;case"scroll":S=cd;break;case"wheel":S=Ld;break;case"copy":case"cut":case"paste":S=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=rl}var x=(n&4)!==0,T=!x&&e==="scroll",d=x?A!==null?A+"Capture":null:A;x=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Rt(c,d),y!=null&&x.push(Wt(c,y,f)))),T)break;c=c.return}0<x.length&&(A=new S(A,v,null,t,g),m.push({event:A,listeners:x}))}}if(!(n&7)){e:{if(A=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",A&&t!==co&&(v=t.relatedTarget||t.fromElement)&&(wn(v)||v[Je]))break e;if((S||A)&&(A=g.window===g?g:(A=g.ownerDocument)?A.defaultView||A.parentWindow:window,S?(v=t.relatedTarget||t.toElement,S=u,v=v?wn(v):null,v!==null&&(T=Rn(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=u),S!==v)){if(x=tl,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=rl,y="onPointerLeave",d="onPointerEnter",c="pointer"),T=S==null?A:Qn(S),f=v==null?A:Qn(v),A=new x(y,c+"leave",S,t,g),A.target=T,A.relatedTarget=f,y=null,wn(g)===u&&(x=new x(d,c+"enter",v,t,g),x.target=f,x.relatedTarget=T,y=x),T=y,S&&v)n:{for(x=S,d=v,c=0,f=x;f;f=_n(f))c++;for(f=0,y=d;y;y=_n(y))f++;for(;0<c-f;)x=_n(x),c--;for(;0<f-c;)d=_n(d),f--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break n;x=_n(x),d=_n(d)}x=null}else x=null;S!==null&&gl(m,A,S,x,!1),v!==null&&T!==null&&gl(m,T,v,x,!0)}}e:{if(A=u?Qn(u):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var C=_d;else if(ll(A))if(Hs)C=Kd;else{C=Ud;var D=jd}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(C=Vd);if(C&&(C=C(e,u))){Gs(m,C,t,g);break e}D&&D(e,A,u),e==="focusout"&&(D=A._wrapperState)&&D.controlled&&A.type==="number"&&oo(A,"number",A.value)}switch(D=u?Qn(u):window,e){case"focusin":(ll(D)||D.contentEditable==="true")&&(Kn=D,yo=u,kt=null);break;case"focusout":kt=yo=Kn=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,pl(m,t,g);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":pl(m,t,g)}var w;if(ca)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vn?Ws(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ks&&t.locale!=="ko"&&(Vn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vn&&(w=Vs()):(on=g,la="value"in on?on.value:on.textContent,Vn=!0)),D=Ki(u,P),0<D.length&&(P=new il(P,e,null,t,g),m.push({event:P,listeners:D}),w?P.data=w:(w=Qs(t),w!==null&&(P.data=w)))),(w=Fd?Nd(e,t):Od(e,t))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(g=new il("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:u}),g.data=w))}tu(m,n)})}function Wt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ki(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Rt(e,t),o!=null&&i.unshift(Wt(e,o,r)),o=Rt(e,n),o!=null&&i.push(Wt(e,o,r))),e=e.return}return i}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gl(e,n,t,i,r){for(var o=n._reactName,a=[];t!==null&&t!==i;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===i)break;l.tag===5&&u!==null&&(l=u,r?(s=Rt(t,o),s!=null&&a.unshift(Wt(t,s,l))):r||(s=Rt(t,o),s!=null&&a.push(Wt(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Xd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function ml(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(qd,"")}function gi(e,n,t){if(n=ml(n),ml(e)!==n&&t)throw Error(h(425))}function Wi(){}var vo=null,So=null;function Co(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,xl=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof xl<"u"?function(e){return xl.resolve(null).then(e).catch(bd)}:Io;function bd(e){setTimeout(function(){throw e})}function jr(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),jt(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);jt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function yl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),je="__reactFiber$"+pt,Qt="__reactProps$"+pt,Je="__reactContainer$"+pt,zo="__reactEvents$"+pt,ep="__reactListeners$"+pt,np="__reactHandles$"+pt;function wn(e){var n=e[je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yl(e);e!==null;){if(t=e[je])return t;e=yl(e)}return n}e=t,t=e.parentNode}return null}function ei(e){return e=e[je]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function cr(e){return e[Qt]||null}var wo=[],Gn=-1;function yn(e){return{current:e}}function _(e){0>Gn||(e.current=wo[Gn],wo[Gn]=null,Gn--)}function R(e,n){Gn++,wo[Gn]=e.current,e.current=n}var mn={},oe=yn(mn),pe=yn(!1),Bn=mn;function rt(e,n){var t=e.type.contextTypes;if(!t)return mn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function fe(e){return e=e.childContextTypes,e!=null}function Qi(){_(pe),_(oe)}function hl(e,n,t){if(oe.current!==mn)throw Error(h(168));R(oe,n),R(pe,t)}function ru(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(h(108,jc(e)||"Unknown",r));return W({},t,i)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Bn=oe.current,R(oe,e),R(pe,pe.current),!0}function vl(e,n,t){var i=e.stateNode;if(!i)throw Error(h(169));t?(e=ru(e,n,Bn),i.__reactInternalMemoizedMergedChildContext=e,_(pe),_(oe),R(oe,e)):_(pe),R(pe,t)}var We=null,dr=!1,Ur=!1;function ou(e){We===null?We=[e]:We.push(e)}function tp(e){dr=!0,ou(e)}function hn(){if(!Ur&&We!==null){Ur=!0;var e=0,n=O;try{var t=We;for(O=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}We=null,dr=!1}catch(r){throw We!==null&&(We=We.slice(e+1)),Bs(ia,hn),r}finally{O=n,Ur=!1}}return null}var Hn=[],$n=0,Hi=null,$i=0,Ie=[],ze=0,Ln=null,Qe=1,Ge="";function In(e,n){Hn[$n++]=$i,Hn[$n++]=Hi,Hi=e,$i=n}function au(e,n,t){Ie[ze++]=Qe,Ie[ze++]=Ge,Ie[ze++]=Ln,Ln=e;var i=Qe;e=Ge;var r=32-Ne(i)-1;i&=~(1<<r),t+=1;var o=32-Ne(n)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Qe=1<<32-Ne(n)+r|t<<r|i,Ge=o+e}else Qe=1<<o|t<<r|i,Ge=e}function pa(e){e.return!==null&&(In(e,1),au(e,1,0))}function fa(e){for(;e===Hi;)Hi=Hn[--$n],Hn[$n]=null,$i=Hn[--$n],Hn[$n]=null;for(;e===Ln;)Ln=Ie[--ze],Ie[ze]=null,Ge=Ie[--ze],Ie[ze]=null,Qe=Ie[--ze],Ie[ze]=null}var he=null,ye=null,j=!1,Fe=null;function lu(e,n){var t=we(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Sl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,he=e,ye=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,he=e,ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:Qe,overflow:Ge}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=we(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,he=e,ye=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(j){var n=ye;if(n){var t=n;if(!Sl(e,n)){if(Do(e))throw Error(h(418));n=cn(t.nextSibling);var i=he;n&&Sl(e,n)?lu(i,t):(e.flags=e.flags&-4097|2,j=!1,he=e)}}else{if(Do(e))throw Error(h(418));e.flags=e.flags&-4097|2,j=!1,he=e}}}function Cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function mi(e){if(e!==he)return!1;if(!j)return Cl(e),j=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Co(e.type,e.memoizedProps)),n&&(n=ye)){if(Do(e))throw su(),Error(h(418));for(;n;)lu(e,n),n=cn(n.nextSibling)}if(Cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ye=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ye=null}}else ye=he?cn(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ye;e;)e=cn(e.nextSibling)}function ot(){ye=he=null,j=!1}function Aa(e){Fe===null?Fe=[e]:Fe.push(e)}var ip=Ye.ReactCurrentBatchConfig;function yt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var i=t.stateNode}if(!i)throw Error(h(147,e));var r=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=r.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function xi(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Il(e){var n=e._init;return n(e._payload)}function uu(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function i(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function r(d,c){return d=An(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,y){return c===null||c.tag!==6?(c=$r(f,d.mode,y),c.return=d,c):(c=r(c,f),c.return=d,c)}function s(d,c,f,y){var C=f.type;return C===Un?g(d,c,f.props.children,y,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Il(C)===c.type)?(y=r(c,f.props),y.ref=yt(d,c,f),y.return=d,y):(y=Ni(f.type,f.key,f.props,null,d.mode,y),y.ref=yt(d,c,f),y.return=d,y)}function u(d,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Jr(f,d.mode,y),c.return=d,c):(c=r(c,f.children||[]),c.return=d,c)}function g(d,c,f,y,C){return c===null||c.tag!==7?(c=kn(f,d.mode,y,C),c.return=d,c):(c=r(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$r(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ai:return f=Ni(c.type,c.key,c.props,null,d.mode,f),f.ref=yt(d,null,c),f.return=d,f;case jn:return c=Jr(c,d.mode,f),c.return=d,c;case en:var y=c._init;return m(d,y(c._payload),f)}if(Ct(c)||ft(c))return c=kn(c,d.mode,f,null),c.return=d,c;xi(d,c)}return null}function A(d,c,f,y){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:l(d,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ai:return f.key===C?s(d,c,f,y):null;case jn:return f.key===C?u(d,c,f,y):null;case en:return C=f._init,A(d,c,C(f._payload),y)}if(Ct(f)||ft(f))return C!==null?null:g(d,c,f,y,null);xi(d,f)}return null}function S(d,c,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,l(c,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:return d=d.get(y.key===null?f:y.key)||null,s(c,d,y,C);case jn:return d=d.get(y.key===null?f:y.key)||null,u(c,d,y,C);case en:var D=y._init;return S(d,c,f,D(y._payload),C)}if(Ct(y)||ft(y))return d=d.get(f)||null,g(c,d,y,C,null);xi(c,y)}return null}function v(d,c,f,y){for(var C=null,D=null,w=c,P=c=0,U=null;w!==null&&P<f.length;P++){w.index>P?(U=w,w=null):U=w.sibling;var L=A(d,w,f[P],y);if(L===null){w===null&&(w=U);break}e&&w&&L.alternate===null&&n(d,w),c=o(L,c,P),D===null?C=L:D.sibling=L,D=L,w=U}if(P===f.length)return t(d,w),j&&In(d,P),C;if(w===null){for(;P<f.length;P++)w=m(d,f[P],y),w!==null&&(c=o(w,c,P),D===null?C=w:D.sibling=w,D=w);return j&&In(d,P),C}for(w=i(d,w);P<f.length;P++)U=S(w,d,P,f[P],y),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?P:U.key),c=o(U,c,P),D===null?C=U:D.sibling=U,D=U);return e&&w.forEach(function(ge){return n(d,ge)}),j&&In(d,P),C}function x(d,c,f,y){var C=ft(f);if(typeof C!="function")throw Error(h(150));if(f=C.call(f),f==null)throw Error(h(151));for(var D=C=null,w=c,P=c=0,U=null,L=f.next();w!==null&&!L.done;P++,L=f.next()){w.index>P?(U=w,w=null):U=w.sibling;var ge=A(d,w,L.value,y);if(ge===null){w===null&&(w=U);break}e&&w&&ge.alternate===null&&n(d,w),c=o(ge,c,P),D===null?C=ge:D.sibling=ge,D=ge,w=U}if(L.done)return t(d,w),j&&In(d,P),C;if(w===null){for(;!L.done;P++,L=f.next())L=m(d,L.value,y),L!==null&&(c=o(L,c,P),D===null?C=L:D.sibling=L,D=L);return j&&In(d,P),C}for(w=i(d,w);!L.done;P++,L=f.next())L=S(w,d,P,L.value,y),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?P:L.key),c=o(L,c,P),D===null?C=L:D.sibling=L,D=L);return e&&w.forEach(function(Mn){return n(d,Mn)}),j&&In(d,P),C}function T(d,c,f,y){if(typeof f=="object"&&f!==null&&f.type===Un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ai:e:{for(var C=f.key,D=c;D!==null;){if(D.key===C){if(C=f.type,C===Un){if(D.tag===7){t(d,D.sibling),c=r(D,f.props.children),c.return=d,d=c;break e}}else if(D.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Il(C)===D.type){t(d,D.sibling),c=r(D,f.props),c.ref=yt(d,D,f),c.return=d,d=c;break e}t(d,D);break}else n(d,D);D=D.sibling}f.type===Un?(c=kn(f.props.children,d.mode,y,f.key),c.return=d,d=c):(y=Ni(f.type,f.key,f.props,null,d.mode,y),y.ref=yt(d,c,f),y.return=d,d=y)}return a(d);case jn:e:{for(D=f.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=r(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Jr(f,d.mode,y),c.return=d,d=c}return a(d);case en:return D=f._init,T(d,c,D(f._payload),y)}if(Ct(f))return v(d,c,f,y);if(ft(f))return x(d,c,f,y);xi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=r(c,f),c.return=d,d=c):(t(d,c),c=$r(f,d.mode,y),c.return=d,d=c),a(d)):t(d,c)}return T}var at=uu(!0),cu=uu(!1),Ji=yn(null),Xi=null,Jn=null,ga=null;function ma(){ga=Jn=Xi=null}function xa(e){var n=Ji.current;_(Ji),e._currentValue=n}function To(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function nt(e,n){Xi=e,ga=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Pe(e){var n=e._currentValue;if(ga!==e)if(e={context:e,memoizedValue:n,next:null},Jn===null){if(Xi===null)throw Error(h(308));Jn=e,Xi.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return n}var Dn=null;function ya(e){Dn===null?Dn=[e]:Dn.push(e)}function du(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,ya(n)):(t.next=r.next,r.next=t),n.interleaved=t,Xe(e,i)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Xe(e,t)}return r=i.interleaved,r===null?(n.next=n,ya(i)):(n.next=r.next,r.next=n),i.interleaved=n,Xe(e,t)}function Ti(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,ra(e,t)}}function zl(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function qi(e,n,t,i){var r=e.updateQueue;nn=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=u:l.next=u,g.lastBaseUpdate=s))}if(o!==null){var m=r.baseState;a=0,g=u=s=null,l=o;do{var A=l.lane,S=l.eventTime;if((i&A)===A){g!==null&&(g=g.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(A=n,S=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(S,m,A);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,A=typeof v=="function"?v.call(S,m,A):v,A==null)break e;m=W({},m,A);break e;case 2:nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,A=r.effects,A===null?r.effects=[l]:A.push(l))}else S={eventTime:S,lane:A,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(u=g=S,s=m):g=g.next=S,a|=A;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;A=l,l=A.next,A.next=null,r.lastBaseUpdate=A,r.shared.pending=null}}while(1);if(g===null&&(s=m),r.baseState=s,r.firstBaseUpdate=u,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=m}}function wl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(h(191,r));r.call(i)}}}var ni={},Ve=yn(ni),Gt=yn(ni),Ht=yn(ni);function Pn(e){if(e===ni)throw Error(h(174));return e}function va(e,n){switch(R(Ht,n),R(Gt,e),R(Ve,ni),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=lo(n,e)}_(Ve),R(Ve,n)}function lt(){_(Ve),_(Gt),_(Ht)}function fu(e){Pn(Ht.current);var n=Pn(Ve.current),t=lo(n,e.type);n!==t&&(R(Gt,e),R(Ve,t))}function Sa(e){Gt.current===e&&(_(Ve),_(Gt))}var V=yn(0);function Yi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vr=[];function Ca(){for(var e=0;e<Vr.length;e++)Vr[e]._workInProgressVersionPrimary=null;Vr.length=0}var ki=Ye.ReactCurrentDispatcher,Kr=Ye.ReactCurrentBatchConfig,En=0,K=null,J=null,Y=null,Zi=!1,Bt=!1,$t=0,rp=0;function te(){throw Error(h(321))}function Ia(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Re(e[t],n[t]))return!1;return!0}function za(e,n,t,i,r,o){if(En=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ki.current=e===null||e.memoizedState===null?sp:up,e=t(i,r),Bt){o=0;do{if(Bt=!1,$t=0,25<=o)throw Error(h(301));o+=1,Y=J=null,n.updateQueue=null,ki.current=cp,e=t(i,r)}while(Bt)}if(ki.current=bi,n=J!==null&&J.next!==null,En=0,Y=J=K=null,Zi=!1,n)throw Error(h(300));return e}function wa(){var e=$t!==0;return $t=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?K.memoizedState=Y=e:Y=Y.next=e,Y}function Te(){if(J===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=Y===null?K.memoizedState:Y.next;if(n!==null)Y=n,J=e;else{if(e===null)throw Error(h(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Y===null?K.memoizedState=Y=e:Y=Y.next=e}return Y}function Jt(e,n){return typeof n=="function"?n(e):n}function Wr(e){var n=Te(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var i=J,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var l=a=null,s=null,u=o;do{var g=u.lane;if((En&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var m={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,a=i):s=s.next=m,K.lanes|=g,Fn|=g}u=u.next}while(u!==null&&u!==o);s===null?a=i:s.next=l,Re(i,n.memoizedState)||(de=!0),n.memoizedState=i,n.baseState=a,n.baseQueue=s,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do o=r.lane,K.lanes|=o,Fn|=o,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qr(e){var n=Te(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do o=e(o,a.action),a=a.next;while(a!==r);Re(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function Au(){}function gu(e,n){var t=K,i=Te(),r=n(),o=!Re(i.memoizedState,r);if(o&&(i.memoizedState=r,de=!0),i=i.queue,Da(yu.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Xt(9,xu.bind(null,t,i,r,n),void 0,null),Z===null)throw Error(h(349));En&30||mu(t,n,r)}return r}function mu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xu(e,n,t,i){n.value=t,n.getSnapshot=i,hu(n)&&vu(e)}function yu(e,n,t){return t(function(){hu(n)&&vu(e)})}function hu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Re(e,t)}catch{return!0}}function vu(e){var n=Xe(e,1);n!==null&&Oe(n,e,1,-1)}function Dl(e){var n=_e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},n.queue=e,e=e.dispatch=lp.bind(null,K,e),[n.memoizedState,e]}function Xt(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Su(){return Te().memoizedState}function Bi(e,n,t,i){var r=_e();K.flags|=e,r.memoizedState=Xt(1|n,t,void 0,i===void 0?null:i)}function pr(e,n,t,i){var r=Te();i=i===void 0?null:i;var o=void 0;if(J!==null){var a=J.memoizedState;if(o=a.destroy,i!==null&&Ia(i,a.deps)){r.memoizedState=Xt(n,t,o,i);return}}K.flags|=e,r.memoizedState=Xt(1|n,t,o,i)}function Pl(e,n){return Bi(8390656,8,e,n)}function Da(e,n){return pr(2048,8,e,n)}function Cu(e,n){return pr(4,2,e,n)}function Iu(e,n){return pr(4,4,e,n)}function zu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,pr(4,4,zu.bind(null,n,e),t)}function Pa(){}function Du(e,n){var t=Te();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ia(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Pu(e,n){var t=Te();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ia(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function Tu(e,n,t){return En&21?(Re(t,n)||(t=Fs(),K.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function op(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var i=Kr.transition;Kr.transition={};try{e(!1),n()}finally{O=t,Kr.transition=i}}function ku(){return Te().memoizedState}function ap(e,n,t){var i=fn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Bu(e))Lu(n,t);else if(t=du(e,n,t,i),t!==null){var r=le();Oe(t,e,i,r),Eu(t,n,i)}}function lp(e,n,t){var i=fn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Lu(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(r.hasEagerState=!0,r.eagerState=l,Re(l,a)){var s=n.interleaved;s===null?(r.next=r,ya(n)):(r.next=s.next,s.next=r),n.interleaved=r;return}}catch{}finally{}t=du(e,n,r,i),t!==null&&(r=le(),Oe(t,e,i,r),Eu(t,n,i))}}function Bu(e){var n=e.alternate;return e===K||n!==null&&n===K}function Lu(e,n){Bt=Zi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Eu(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,ra(e,t)}}var bi={readContext:Pe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},sp={readContext:Pe,useCallback:function(e,n){return _e().memoizedState=[e,n===void 0?null:n],e},useContext:Pe,useEffect:Pl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Bi(4194308,4,zu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Bi(4,2,e,n)},useMemo:function(e,n){var t=_e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=_e();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=ap.bind(null,K,e),[i.memoizedState,e]},useRef:function(e){var n=_e();return e={current:e},n.memoizedState=e},useState:Dl,useDebugValue:Pa,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Dl(!1),n=e[0];return e=op.bind(null,e[1]),_e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=K,r=_e();if(j){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),Z===null)throw Error(h(349));En&30||mu(i,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Pl(yu.bind(null,i,o,e),[e]),i.flags|=2048,Xt(9,xu.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=_e(),n=Z.identifierPrefix;if(j){var t=Ge,i=Qe;t=(i&~(1<<32-Ne(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=$t++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=rp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},up={readContext:Pe,useCallback:Du,useContext:Pe,useEffect:Da,useImperativeHandle:wu,useInsertionEffect:Cu,useLayoutEffect:Iu,useMemo:Pu,useReducer:Wr,useRef:Su,useState:function(){return Wr(Jt)},useDebugValue:Pa,useDeferredValue:function(e){var n=Te();return Tu(n,J.memoizedState,e)},useTransition:function(){var e=Wr(Jt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Au,useSyncExternalStore:gu,useId:ku,unstable_isNewReconciler:!1},cp={readContext:Pe,useCallback:Du,useContext:Pe,useEffect:Da,useImperativeHandle:wu,useInsertionEffect:Cu,useLayoutEffect:Iu,useMemo:Pu,useReducer:Qr,useRef:Su,useState:function(){return Qr(Jt)},useDebugValue:Pa,useDeferredValue:function(e){var n=Te();return J===null?n.memoizedState=e:Tu(n,J.memoizedState,e)},useTransition:function(){var e=Qr(Jt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Au,useSyncExternalStore:gu,useId:ku,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ko(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fr={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=le(),r=fn(e),o=He(i,r);o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,r),n!==null&&(Oe(n,e,r,i),Ti(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=le(),r=fn(e),o=He(i,r);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,r),n!==null&&(Oe(n,e,r,i),Ti(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),i=fn(e),r=He(t,i);r.tag=2,n!=null&&(r.callback=n),n=dn(e,r,i),n!==null&&(Oe(n,e,i,t),Ti(n,e,i))}};function Tl(e,n,t,i,r,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):n.prototype&&n.prototype.isPureReactComponent?!Vt(t,i)||!Vt(r,o):!0}function Fu(e,n,t){var i=!1,r=mn,o=n.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(r=fe(n)?Bn:oe.current,i=n.contextTypes,o=(i=i!=null)?rt(e,r):mn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function kl(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&fr.enqueueReplaceState(n,n.state,null)}function Bo(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ha(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=Pe(o):(o=fe(n)?Bn:oe.current,r.context=rt(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ko(e,n,o,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&fr.enqueueReplaceState(r,r.state,null),qi(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function st(e,n){try{var t="",i=n;do t+=_c(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function Gr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Lo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){nr||(nr=!0,Vo=i),Lo(e,n)},t}function Ou(e,n,t){t=He(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){Lo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Lo(e,n),typeof i!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Bl(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new dp;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=wp.bind(null,e,n,t),n.then(e,e))}function Ll(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function El(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var pp=Ye.ReactCurrentOwner,de=!1;function ae(e,n,t,i){n.child=e===null?cu(n,null,t,i):at(n,e.child,t,i)}function Fl(e,n,t,i,r){t=t.render;var o=n.ref;return nt(n,r),i=za(e,n,t,i,o,r),t=wa(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(j&&t&&pa(n),n.flags|=1,ae(e,n,i,r),n.child)}function Nl(e,n,t,i,r){if(e===null){var o=t.type;return typeof o=="function"&&!Oa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ru(e,n,o,i,r)):(e=Ni(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:Vt,t(a,i)&&e.ref===n.ref)return qe(e,n,r)}return n.flags|=1,e=An(o,i),e.ref=n.ref,e.return=n,n.child=e}function Ru(e,n,t,i,r){if(e!==null){var o=e.memoizedProps;if(Vt(o,i)&&e.ref===n.ref)if(de=!1,n.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,qe(e,n,r)}return Eo(e,n,t,i,r)}function Mu(e,n,t){var i=n.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(qn,xe),xe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(qn,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,R(qn,xe),xe|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,R(qn,xe),xe|=i;return ae(e,n,r,t),n.child}function _u(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Eo(e,n,t,i,r){var o=fe(t)?Bn:oe.current;return o=rt(n,o),nt(n,r),t=za(e,n,t,i,o,r),i=wa(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(j&&i&&pa(n),n.flags|=1,ae(e,n,t,r),n.child)}function Ol(e,n,t,i,r){if(fe(t)){var o=!0;Gi(n)}else o=!1;if(nt(n,r),n.stateNode===null)Li(e,n),Fu(n,t,i),Bo(n,t,i,r),i=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Pe(u):(u=fe(t)?Bn:oe.current,u=rt(n,u));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||s!==u)&&kl(n,a,i,u),nn=!1;var A=n.memoizedState;a.state=A,qi(n,i,a,r),s=n.memoizedState,l!==i||A!==s||pe.current||nn?(typeof g=="function"&&(ko(n,t,g,i),s=n.memoizedState),(l=nn||Tl(n,t,l,i,A,s,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=s),a.props=i,a.state=s,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{a=n.stateNode,pu(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Le(n.type,l),a.props=u,m=n.pendingProps,A=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=fe(t)?Bn:oe.current,s=rt(n,s));var S=t.getDerivedStateFromProps;(g=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||A!==s)&&kl(n,a,i,s),nn=!1,A=n.memoizedState,a.state=A,qi(n,i,a,r);var v=n.memoizedState;l!==m||A!==v||pe.current||nn?(typeof S=="function"&&(ko(n,t,S,i),v=n.memoizedState),(u=nn||Tl(n,t,u,i,A,v,s)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=v),a.props=i,a.state=v,a.context=s,i=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),i=!1)}return Fo(e,n,t,i,o,r)}function Fo(e,n,t,i,r,o){_u(e,n);var a=(n.flags&128)!==0;if(!i&&!a)return r&&vl(n,t,!1),qe(e,n,o);i=n.stateNode,pp.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&a?(n.child=at(n,e.child,null,o),n.child=at(n,null,l,o)):ae(e,n,l,o),n.memoizedState=i.state,r&&vl(n,t,!0),n.child}function ju(e){var n=e.stateNode;n.pendingContext?hl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hl(e,n.context,!1),va(e,n.containerInfo)}function Rl(e,n,t,i,r){return ot(),Aa(r),n.flags|=256,ae(e,n,t,i),n.child}var No={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,n,t){var i=n.pendingProps,r=V.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),R(V,r&1),e===null)return Po(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=i.children,e=i.fallback,o?(i=n.mode,o=n.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=mr(a,i,0,null),e=kn(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Oo(t),n.memoizedState=No,e):Ta(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return fp(e,n,a,i,l,r,t);if(o){o=i.fallback,a=n.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:i.children};return!(a&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=s,n.deletions=null):(i=An(r,s),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=An(l,o):(o=kn(o,a,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,a=e.child.memoizedState,a=a===null?Oo(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=No,i}return o=e.child,e=o.sibling,i=An(o,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ta(e,n){return n=mr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function yi(e,n,t,i){return i!==null&&Aa(i),at(n,e.child,null,t),e=Ta(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fp(e,n,t,i,r,o,a){if(t)return n.flags&256?(n.flags&=-257,i=Gr(Error(h(422))),yi(e,n,a,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,r=n.mode,i=mr({mode:"visible",children:i.children},r,0,null),o=kn(o,r,a,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,n.mode&1&&at(n,e.child,null,a),n.child.memoizedState=Oo(a),n.memoizedState=No,o);if(!(n.mode&1))return yi(e,n,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(h(419)),i=Gr(o,i,void 0),yi(e,n,a,i)}if(l=(a&e.childLanes)!==0,de||l){if(i=Z,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Xe(e,r),Oe(i,e,r,-1))}return Na(),i=Gr(Error(h(421))),yi(e,n,a,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Dp.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,ye=cn(r.nextSibling),he=n,j=!0,Fe=null,e!==null&&(Ie[ze++]=Qe,Ie[ze++]=Ge,Ie[ze++]=Ln,Qe=e.id,Ge=e.overflow,Ln=n),n=Ta(n,i.children),n.flags|=4096,n)}function Ml(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),To(e.return,n,t)}function Hr(e,n,t,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function Vu(e,n,t){var i=n.pendingProps,r=i.revealOrder,o=i.tail;if(ae(e,n,i.children,t),i=V.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ml(e,t,n);else if(e.tag===19)Ml(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(R(V,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Yi(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Hr(n,!1,r,t,o);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Yi(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Hr(n,!0,t,null,o);break;case"together":Hr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Li(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ap(e,n,t){switch(n.tag){case 3:ju(n),ot();break;case 5:fu(n);break;case 1:fe(n.type)&&Gi(n);break;case 4:va(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;R(Ji,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(R(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Uu(e,n,t):(R(V,V.current&1),e=qe(e,n,t),e!==null?e.sibling:null);R(V,V.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Vu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),R(V,V.current),i)break;return null;case 22:case 23:return n.lanes=0,Mu(e,n,t)}return qe(e,n,t)}var Ku,Ro,Wu,Qu;Ku=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ro=function(){};Wu=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,Pn(Ve.current);var o=null;switch(t){case"input":r=io(e,r),i=io(e,i),o=[];break;case"select":r=W({},r,{value:void 0}),i=W({},i,{value:void 0}),o=[];break;case"textarea":r=ao(e,r),i=ao(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Wi)}so(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nt.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var s=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&M("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Qu=function(e,n,t,i){t!==i&&(n.flags|=4)};function ht(e,n){if(!j)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function gp(e,n,t){var i=n.pendingProps;switch(fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return fe(n.type)&&Qi(),ie(n),null;case 3:return i=n.stateNode,lt(),_(pe),_(oe),Ca(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(Qo(Fe),Fe=null))),Ro(e,n),ie(n),null;case 5:Sa(n);var r=Pn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Wu(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(h(166));return ie(n),null}if(e=Pn(Ve.current),mi(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[je]=n,i[Qt]=o,e=(n.mode&1)!==0,t){case"dialog":M("cancel",i),M("close",i);break;case"iframe":case"object":case"embed":M("load",i);break;case"video":case"audio":for(r=0;r<zt.length;r++)M(zt[r],i);break;case"source":M("error",i);break;case"img":case"image":case"link":M("error",i),M("load",i);break;case"details":M("toggle",i);break;case"input":Ha(i,o),M("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},M("invalid",i);break;case"textarea":Ja(i,o),M("invalid",i)}so(t,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&gi(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gi(i.textContent,l,e),r=["children",""+l]):Nt.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&M("scroll",i)}switch(t){case"input":li(i),$a(i,o,!0);break;case"textarea":li(i),Xa(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Wi)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(t,{is:i.is}):(e=a.createElement(t),t==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,t),e[je]=n,e[Qt]=i,Ku(e,n,!1,!1),n.stateNode=e;e:{switch(a=uo(t,i),t){case"dialog":M("cancel",e),M("close",e),r=i;break;case"iframe":case"object":case"embed":M("load",e),r=i;break;case"video":case"audio":for(r=0;r<zt.length;r++)M(zt[r],e);r=i;break;case"source":M("error",e),r=i;break;case"img":case"image":case"link":M("error",e),M("load",e),r=i;break;case"details":M("toggle",e),r=i;break;case"input":Ha(e,i),r=io(e,i),M("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=W({},i,{value:void 0}),M("invalid",e);break;case"textarea":Ja(e,i),r=ao(e,i),M("invalid",e);break;default:r=i}so(t,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Ss(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hs(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ot(e,s):typeof s=="number"&&Ot(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&Zo(e,o,s,a))}switch(t){case"input":li(e),$a(e,i,!1);break;case"textarea":li(e),Xa(e);break;case"option":i.value!=null&&e.setAttribute("value",""+gn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Yn(e,!!i.multiple,o,!1):i.defaultValue!=null&&Yn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Wi)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Qu(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(h(166));if(t=Pn(Ht.current),Pn(Ve.current),mi(n)){if(i=n.stateNode,t=n.memoizedProps,i[je]=n,(o=i.nodeValue!==t)&&(e=he,e!==null))switch(e.tag){case 3:gi(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[je]=n,n.stateNode=i}return ie(n),null;case 13:if(_(V),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&ye!==null&&n.mode&1&&!(n.flags&128))su(),ot(),n.flags|=98560,o=!1;else if(o=mi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[je]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else Fe!==null&&(Qo(Fe),Fe=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?X===0&&(X=3):Na())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return lt(),Ro(e,n),e===null&&Kt(n.stateNode.containerInfo),ie(n),null;case 10:return xa(n.type._context),ie(n),null;case 17:return fe(n.type)&&Qi(),ie(n),null;case 19:if(_(V),o=n.memoizedState,o===null)return ie(n),null;if(i=(n.flags&128)!==0,a=o.rendering,a===null)if(i)ht(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Yi(e),a!==null){for(n.flags|=128,ht(o,!1),i=a.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(V,V.current&1|2),n.child}e=e.sibling}o.tail!==null&&H()>ut&&(n.flags|=128,i=!0,ht(o,!1),n.lanes=4194304)}else{if(!i)if(e=Yi(a),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ht(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!j)return ie(n),null}else 2*H()-o.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,i=!0,ht(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=H(),n.sibling=null,t=V.current,R(V,i?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Fa(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?xe&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function mp(e,n){switch(fa(n),n.tag){case 1:return fe(n.type)&&Qi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return lt(),_(pe),_(oe),Ca(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Sa(n),null;case 13:if(_(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _(V),null;case 4:return lt(),null;case 10:return xa(n.type._context),null;case 22:case 23:return Fa(),null;case 24:return null;default:return null}}var hi=!1,re=!1,xp=typeof WeakSet=="function"?WeakSet:Set,z=null;function Xn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Q(e,n,i)}else t.current=null}function Mo(e,n,t){try{t()}catch(i){Q(e,n,i)}}var _l=!1;function yp(e,n){if(vo=Ui,e=Xs(),da(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,g=0,m=e,A=null;n:for(;;){for(var S;m!==t||r!==0&&m.nodeType!==3||(l=a+r),m!==o||i!==0&&m.nodeType!==3||(s=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(S=m.firstChild)!==null;)A=m,m=S;for(;;){if(m===e)break n;if(A===t&&++u===r&&(l=a),A===o&&++g===i&&(s=a),(S=m.nextSibling)!==null)break;m=A,A=m.parentNode}m=S}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(So={focusedElem:e,selectionRange:t},Ui=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,T=v.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),T);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(y){Q(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return v=_l,_l=!1,v}function Lt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Mo(n,t,o)}r=r.next}while(r!==i)}}function Ar(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function _o(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Gu(e){var n=e.alternate;n!==null&&(e.alternate=null,Gu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[je],delete n[Qt],delete n[zo],delete n[ep],delete n[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hu(e){return e.tag===5||e.tag===3||e.tag===4}function jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wi));else if(i!==4&&(e=e.child,e!==null))for(jo(e,n,t),e=e.sibling;e!==null;)jo(e,n,t),e=e.sibling}function Uo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Uo(e,n,t),e=e.sibling;e!==null;)Uo(e,n,t),e=e.sibling}var b=null,Ee=!1;function be(e,n,t){for(t=t.child;t!==null;)$u(e,n,t),t=t.sibling}function $u(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ar,t)}catch{}switch(t.tag){case 5:re||Xn(t,n);case 6:var i=b,r=Ee;b=null,be(e,n,t),b=i,Ee=r,b!==null&&(Ee?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(Ee?(e=b,t=t.stateNode,e.nodeType===8?jr(e.parentNode,t):e.nodeType===1&&jr(e,t),jt(e)):jr(b,t.stateNode));break;case 4:i=b,r=Ee,b=t.stateNode.containerInfo,Ee=!0,be(e,n,t),b=i,Ee=r;break;case 0:case 11:case 14:case 15:if(!re&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Mo(t,n,a),r=r.next}while(r!==i)}be(e,n,t);break;case 1:if(!re&&(Xn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(l){Q(t,n,l)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(re=(i=re)||t.memoizedState!==null,be(e,n,t),re=i):be(e,n,t);break;default:be(e,n,t)}}function Ul(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xp),n.forEach(function(i){var r=Pp.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:b=l.stateNode,Ee=!1;break e;case 3:b=l.stateNode.containerInfo,Ee=!0;break e;case 4:b=l.stateNode.containerInfo,Ee=!0;break e}l=l.return}if(b===null)throw Error(h(160));$u(o,a,r),b=null,Ee=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(u){Q(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ju(n,e),n=n.sibling}function Ju(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Me(e),i&4){try{Lt(3,e,e.return),Ar(3,e)}catch(x){Q(e,e.return,x)}try{Lt(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Be(n,e),Me(e),i&512&&t!==null&&Xn(t,t.return);break;case 5:if(Be(n,e),Me(e),i&512&&t!==null&&Xn(t,t.return),e.flags&32){var r=e.stateNode;try{Ot(r,"")}catch(x){Q(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ms(r,o),uo(l,a);var u=uo(l,o);for(a=0;a<s.length;a+=2){var g=s[a],m=s[a+1];g==="style"?Ss(r,m):g==="dangerouslySetInnerHTML"?hs(r,m):g==="children"?Ot(r,m):Zo(r,g,m,u)}switch(l){case"input":ro(r,o);break;case"textarea":xs(r,o);break;case"select":var A=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Yn(r,!!o.multiple,S,!1):A!==!!o.multiple&&(o.defaultValue!=null?Yn(r,!!o.multiple,o.defaultValue,!0):Yn(r,!!o.multiple,o.multiple?[]:"",!1))}r[Qt]=o}catch(x){Q(e,e.return,x)}}break;case 6:if(Be(n,e),Me(e),i&4){if(e.stateNode===null)throw Error(h(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(x){Q(e,e.return,x)}}break;case 3:if(Be(n,e),Me(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{jt(n.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Be(n,e),Me(e);break;case 13:Be(n,e),Me(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(La=H())),i&4&&Ul(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(re=(u=re)||g,Be(n,e),re=u):Be(n,e),Me(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(m=z=g;z!==null;){switch(A=z,S=A.child,A.tag){case 0:case 11:case 14:case 15:Lt(4,A,A.return);break;case 1:Xn(A,A.return);var v=A.stateNode;if(typeof v.componentWillUnmount=="function"){i=A,t=A.return;try{n=i,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){Q(i,t,x)}}break;case 5:Xn(A,A.return);break;case 22:if(A.memoizedState!==null){Kl(m);continue}}S!==null?(S.return=A,z=S):Kl(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{r=m.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=vs("display",a))}catch(x){Q(e,e.return,x)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){Q(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(n,e),Me(e),i&4&&Ul(e);break;case 21:break;default:Be(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hu(t)){var i=t;break e}t=t.return}throw Error(h(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ot(r,""),i.flags&=-33);var o=jl(e);Uo(e,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=jl(e);jo(e,l,a);break;default:throw Error(h(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hp(e,n,t){z=e,Xu(e)}function Xu(e,n,t){for(var i=(e.mode&1)!==0;z!==null;){var r=z,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||hi;if(!a){var l=r.alternate,s=l!==null&&l.memoizedState!==null||re;l=hi;var u=re;if(hi=a,(re=s)&&!u)for(z=r;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?Wl(r):s!==null?(s.return=a,z=s):Wl(r);for(;o!==null;)z=o,Xu(o),o=o.sibling;z=r,hi=l,re=u}Vl(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,z=o):Vl(e)}}function Vl(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||Ar(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!re)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&wl(n,o,i);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wl(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&jt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}re||n.flags&512&&_o(n)}catch(A){Q(n,n.return,A)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Kl(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Wl(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ar(4,n)}catch(s){Q(n,t,s)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(s){Q(n,r,s)}}var o=n.return;try{_o(n)}catch(s){Q(n,o,s)}break;case 5:var a=n.return;try{_o(n)}catch(s){Q(n,a,s)}}}catch(s){Q(n,n.return,s)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var vp=Math.ceil,er=Ye.ReactCurrentDispatcher,ka=Ye.ReactCurrentOwner,De=Ye.ReactCurrentBatchConfig,F=0,Z=null,$=null,ee=0,xe=0,qn=yn(0),X=0,qt=null,Fn=0,gr=0,Ba=0,Et=null,ce=null,La=0,ut=1/0,Ke=null,nr=!1,Vo=null,pn=null,vi=!1,an=null,tr=0,Ft=0,Ko=null,Ei=-1,Fi=0;function le(){return F&6?H():Ei!==-1?Ei:Ei=H()}function fn(e){return e.mode&1?F&2&&ee!==0?ee&-ee:ip.transition!==null?(Fi===0&&(Fi=Fs()),Fi):(e=O,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Oe(e,n,t,i){if(50<Ft)throw Ft=0,Ko=null,Error(h(185));Zt(e,t,i),(!(F&2)||e!==Z)&&(e===Z&&(!(F&2)&&(gr|=t),X===4&&rn(e,ee)),Ae(e,i),t===1&&F===0&&!(n.mode&1)&&(ut=H()+500,dr&&hn()))}function Ae(e,n){var t=e.callbackNode;id(e,n);var i=ji(e,e===Z?ee:0);if(i===0)t!==null&&Za(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Za(t),n===1)e.tag===0?tp(Ql.bind(null,e)):ou(Ql.bind(null,e)),Zd(function(){!(F&6)&&hn()}),t=null;else{switch(Ns(i)){case 1:t=ia;break;case 4:t=Ls;break;case 16:t=_i;break;case 536870912:t=Es;break;default:t=_i}t=ic(t,qu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function qu(e,n){if(Ei=-1,Fi=0,F&6)throw Error(h(327));var t=e.callbackNode;if(tt()&&e.callbackNode!==t)return null;var i=ji(e,e===Z?ee:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=ir(e,i);else{n=i;var r=F;F|=2;var o=Zu();(Z!==e||ee!==n)&&(Ke=null,ut=H()+500,Tn(e,n));do try{Ip();break}catch(l){Yu(e,l)}while(1);ma(),er.current=o,F=r,$!==null?n=0:(Z=null,ee=0,n=X)}if(n!==0){if(n===2&&(r=go(e),r!==0&&(i=r,n=Wo(e,r))),n===1)throw t=qt,Tn(e,0),rn(e,i),Ae(e,H()),t;if(n===6)rn(e,i);else{if(r=e.current.alternate,!(i&30)&&!Sp(r)&&(n=ir(e,i),n===2&&(o=go(e),o!==0&&(i=o,n=Wo(e,o))),n===1))throw t=qt,Tn(e,0),rn(e,i),Ae(e,H()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(h(345));case 2:zn(e,ce,Ke);break;case 3:if(rn(e,i),(i&130023424)===i&&(n=La+500-H(),10<n)){if(ji(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Io(zn.bind(null,e,ce,Ke),n);break}zn(e,ce,Ke);break;case 4:if(rn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var a=31-Ne(i);o=1<<a,a=n[a],a>r&&(r=a),i&=~o}if(i=r,i=H()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vp(i/1960))-i,10<i){e.timeoutHandle=Io(zn.bind(null,e,ce,Ke),i);break}zn(e,ce,Ke);break;case 5:zn(e,ce,Ke);break;default:throw Error(h(329))}}}return Ae(e,H()),e.callbackNode===t?qu.bind(null,e):null}function Wo(e,n){var t=Et;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=ir(e,n),e!==2&&(n=ce,ce=t,n!==null&&Qo(n)),e}function Qo(e){ce===null?ce=e:ce.push.apply(ce,e)}function Sp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Re(o(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Ba,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ne(n),i=1<<t;e[t]=-1,n&=~i}}function Ql(e){if(F&6)throw Error(h(327));tt();var n=ji(e,0);if(!(n&1))return Ae(e,H()),null;var t=ir(e,n);if(e.tag!==0&&t===2){var i=go(e);i!==0&&(n=i,t=Wo(e,i))}if(t===1)throw t=qt,Tn(e,0),rn(e,n),Ae(e,H()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,ce,Ke),Ae(e,H()),null}function Ea(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(ut=H()+500,dr&&hn())}}function Nn(e){an!==null&&an.tag===0&&!(F&6)&&tt();var n=F;F|=1;var t=De.transition,i=O;try{if(De.transition=null,O=1,e)return e()}finally{O=i,De.transition=t,F=n,!(F&6)&&hn()}}function Fa(){xe=qn.current,_(qn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yd(t)),$!==null)for(t=$.return;t!==null;){var i=t;switch(fa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qi();break;case 3:lt(),_(pe),_(oe),Ca();break;case 5:Sa(i);break;case 4:lt();break;case 13:_(V);break;case 19:_(V);break;case 10:xa(i.type._context);break;case 22:case 23:Fa()}t=t.return}if(Z=e,$=e=An(e.current,null),ee=xe=n,X=0,qt=null,Ba=gr=Fn=0,ce=Et=null,Dn!==null){for(n=0;n<Dn.length;n++)if(t=Dn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}t.pending=i}Dn=null}return e}function Yu(e,n){do{var t=$;try{if(ma(),ki.current=bi,Zi){for(var i=K.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zi=!1}if(En=0,Y=J=K=null,Bt=!1,$t=0,ka.current=null,t===null||t.return===null){X=1,qt=n,$=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=ee,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=l,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var A=g.alternate;A?(g.updateQueue=A.updateQueue,g.memoizedState=A.memoizedState,g.lanes=A.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ll(a);if(S!==null){S.flags&=-257,El(S,a,l,o,n),S.mode&1&&Bl(o,u,n),n=S,s=u;var v=n.updateQueue;if(v===null){var x=new Set;x.add(s),n.updateQueue=x}else v.add(s);break e}else{if(!(n&1)){Bl(o,u,n),Na();break e}s=Error(h(426))}}else if(j&&l.mode&1){var T=Ll(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),El(T,a,l,o,n),Aa(st(s,l));break e}}o=s=st(s,l),X!==4&&(X=2),Et===null?Et=[o]:Et.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Nu(o,s,n);zl(o,d);break e;case 1:l=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pn===null||!pn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=Ou(o,l,n);zl(o,y);break e}}o=o.return}while(o!==null)}ec(t)}catch(C){n=C,$===t&&t!==null&&($=t=t.return);continue}break}while(1)}function Zu(){var e=er.current;return er.current=bi,e===null?bi:e}function Na(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Fn&268435455)&&!(gr&268435455)||rn(Z,ee)}function ir(e,n){var t=F;F|=2;var i=Zu();(Z!==e||ee!==n)&&(Ke=null,Tn(e,n));do try{Cp();break}catch(r){Yu(e,r)}while(1);if(ma(),F=t,er.current=i,$!==null)throw Error(h(261));return Z=null,ee=0,X}function Cp(){for(;$!==null;)bu($)}function Ip(){for(;$!==null&&!Jc();)bu($)}function bu(e){var n=tc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?ec(e):$=n,ka.current=null}function ec(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mp(t,n),t!==null){t.flags&=32767,$=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,$=null;return}}else if(t=gp(t,n,xe),t!==null){$=t;return}if(n=n.sibling,n!==null){$=n;return}$=n=e}while(n!==null);X===0&&(X=5)}function zn(e,n,t){var i=O,r=De.transition;try{De.transition=null,O=1,zp(e,n,t,i)}finally{De.transition=r,O=i}return null}function zp(e,n,t,i){do tt();while(an!==null);if(F&6)throw Error(h(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(rd(e,o),e===Z&&($=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vi||(vi=!0,ic(_i,function(){return tt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=De.transition,De.transition=null;var a=O;O=1;var l=F;F|=4,ka.current=null,yp(e,t),Ju(t,e),Qd(So),Ui=!!vo,So=vo=null,e.current=t,hp(t),Xc(),F=l,O=a,De.transition=o}else e.current=t;if(vi&&(vi=!1,an=e,tr=r),o=e.pendingLanes,o===0&&(pn=null),Zc(t.stateNode),Ae(e,H()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(nr)throw nr=!1,e=Vo,Vo=null,e;return tr&1&&e.tag!==0&&tt(),o=e.pendingLanes,o&1?e===Ko?Ft++:(Ft=0,Ko=e):Ft=0,hn(),null}function tt(){if(an!==null){var e=Ns(tr),n=De.transition,t=O;try{if(De.transition=null,O=16>e?16:e,an===null)var i=!1;else{if(e=an,an=null,tr=0,F&6)throw Error(h(331));var r=F;for(F|=4,z=e.current;z!==null;){var o=z,a=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Lt(8,g,o)}var m=g.child;if(m!==null)m.return=g,z=m;else for(;z!==null;){g=z;var A=g.sibling,S=g.return;if(Gu(g),g===u){z=null;break}if(A!==null){A.return=S,z=A;break}z=S}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Lt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,z=d;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){a=z;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,z=f;else e:for(a=c;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ar(9,l)}}catch(C){Q(l,l.return,C)}if(l===a){z=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,z=y;break e}z=l.return}}if(F=r,hn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ar,e)}catch{}i=!0}return i}finally{O=t,De.transition=n}}return!1}function Gl(e,n,t){n=st(t,n),n=Nu(e,n,1),e=dn(e,n,1),n=le(),e!==null&&(Zt(e,1,n),Ae(e,n))}function Q(e,n,t){if(e.tag===3)Gl(e,e,t);else for(;n!==null;){if(n.tag===3){Gl(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pn===null||!pn.has(i))){e=st(t,e),e=Ou(n,e,1),n=dn(n,e,1),e=le(),n!==null&&(Zt(n,1,e),Ae(n,e));break}}n=n.return}}function wp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>H()-La?Tn(e,0):Ba|=t),Ae(e,n)}function nc(e,n){n===0&&(e.mode&1?(n=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):n=1);var t=le();e=Xe(e,n),e!==null&&(Zt(e,n,t),Ae(e,t))}function Dp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),nc(e,t)}function Pp(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(h(314))}i!==null&&i.delete(n),nc(e,t)}var tc;tc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,Ap(e,n,t);de=!!(e.flags&131072)}else de=!1,j&&n.flags&1048576&&au(n,$i,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Li(e,n),e=n.pendingProps;var r=rt(n,oe.current);nt(n,t),r=za(null,n,i,e,r,t);var o=wa();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(i)?(o=!0,Gi(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ha(n),r.updater=fr,n.stateNode=r,r._reactInternals=n,Bo(n,i,e,t),n=Fo(null,n,i,!0,o,t)):(n.tag=0,j&&o&&pa(n),ae(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Li(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=kp(i),e=Le(i,e),r){case 0:n=Eo(null,n,i,e,t);break e;case 1:n=Ol(null,n,i,e,t);break e;case 11:n=Fl(null,n,i,e,t);break e;case 14:n=Nl(null,n,i,Le(i.type,e),t);break e}throw Error(h(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),Eo(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),Ol(e,n,i,r,t);case 3:e:{if(ju(n),e===null)throw Error(h(387));i=n.pendingProps,o=n.memoizedState,r=o.element,pu(e,n),qi(n,i,null,t);var a=n.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=st(Error(h(423)),n),n=Rl(e,n,i,t,r);break e}else if(i!==r){r=st(Error(h(424)),n),n=Rl(e,n,i,t,r);break e}else for(ye=cn(n.stateNode.containerInfo.firstChild),he=n,j=!0,Fe=null,t=cu(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),i===r){n=qe(e,n,t);break e}ae(e,n,i,t)}n=n.child}return n;case 5:return fu(n),e===null&&Po(n),i=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,Co(i,r)?a=null:o!==null&&Co(i,o)&&(n.flags|=32),_u(e,n),ae(e,n,a,t),n.child;case 6:return e===null&&Po(n),null;case 13:return Uu(e,n,t);case 4:return va(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=at(n,null,i,t):ae(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),Fl(e,n,i,r,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,o=n.memoizedProps,a=r.value,R(Ji,i._currentValue),i._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===r.children&&!pe.current){n=qe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===i){if(o.tag===1){s=He(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),To(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(h(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),To(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ae(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,nt(n,t),r=Pe(r),i=i(r),n.flags|=1,ae(e,n,i,t),n.child;case 14:return i=n.type,r=Le(i,n.pendingProps),r=Le(i.type,r),Nl(e,n,i,r,t);case 15:return Ru(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),Li(e,n),n.tag=1,fe(i)?(e=!0,Gi(n)):e=!1,nt(n,t),Fu(n,i,r),Bo(n,i,r,t),Fo(null,n,i,!0,e,t);case 19:return Vu(e,n,t);case 22:return Mu(e,n,t)}throw Error(h(156,n.tag))};function ic(e,n){return Bs(e,n)}function Tp(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,t,i){return new Tp(e,n,t,i)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===na)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=we(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ni(e,n,t,i,r,o){var a=2;if(i=e,typeof e=="function")Oa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Un:return kn(t.children,r,o,n);case bo:a=8,r|=8;break;case br:return e=we(12,t,n,r|2),e.elementType=br,e.lanes=o,e;case eo:return e=we(13,t,n,r),e.elementType=eo,e.lanes=o,e;case no:return e=we(19,t,n,r),e.elementType=no,e.lanes=o,e;case fs:return mr(t,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:a=10;break e;case ps:a=9;break e;case ea:a=11;break e;case na:a=14;break e;case en:a=16,i=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=we(a,t,n,r),n.elementType=e,n.type=i,n.lanes=o,n}function kn(e,n,t,i){return e=we(7,e,i,n),e.lanes=t,e}function mr(e,n,t,i){return e=we(22,e,i,n),e.elementType=fs,e.lanes=t,e.stateNode={isHidden:!1},e}function $r(e,n,t){return e=we(6,e,null,n),e.lanes=t,e}function Jr(e,n,t){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tr(0),this.expirationTimes=Tr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ra(e,n,t,i,r,o,a,l,s){return e=new Bp(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=we(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(o),e}function Lp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function rc(e){if(!e)return mn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(fe(t))return ru(e,t,n)}return n}function oc(e,n,t,i,r,o,a,l,s){return e=Ra(t,i,!0,e,r,o,a,l,s),e.context=rc(null),t=e.current,i=le(),r=fn(t),o=He(i,r),o.callback=n??null,dn(t,o,r),e.current.lanes=r,Zt(e,r,i),Ae(e,i),e}function xr(e,n,t,i){var r=n.current,o=le(),a=fn(r);return t=rc(t),n.context===null?n.context=t:n.pendingContext=t,n=He(o,a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=dn(r,n,a),e!==null&&(Oe(e,r,a,o),Ti(e,r,a)),a}function rr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ma(e,n){Hl(e,n),(e=e.alternate)&&Hl(e,n)}function Ep(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}yr.prototype.render=_a.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));xr(e,n,null,null)};yr.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nn(function(){xr(null,e,null,null)}),n[Je]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ms();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&js(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $l(){}function Fp(e,n,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=rr(a);o.call(u)}}var a=oc(n,i,e,0,null,!1,!1,"",$l);return e._reactRootContainer=a,e[Je]=a.current,Kt(e.nodeType===8?e.parentNode:e),Nn(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=rr(s);l.call(u)}}var s=Ra(e,0,!1,null,null,!1,!1,"",$l);return e._reactRootContainer=s,e[Je]=s.current,Kt(e.nodeType===8?e.parentNode:e),Nn(function(){xr(n,s,t,i)}),s}function vr(e,n,t,i,r){var o=t._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var l=r;r=function(){var s=rr(a);l.call(s)}}xr(n,a,e,r)}else a=Fp(t,n,e,r,i);return rr(a)}Os=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=It(n.pendingLanes);t!==0&&(ra(n,t|1),Ae(n,H()),!(F&6)&&(ut=H()+500,hn()))}break;case 13:Nn(function(){var i=Xe(e,1);if(i!==null){var r=le();Oe(i,e,1,r)}}),Ma(e,1)}};oa=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=le();Oe(n,e,134217728,t)}Ma(e,134217728)}};Rs=function(e){if(e.tag===13){var n=fn(e),t=Xe(e,n);if(t!==null){var i=le();Oe(t,e,n,i)}Ma(e,n)}};Ms=function(){return O};_s=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};po=function(e,n,t){switch(n){case"input":if(ro(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=cr(i);if(!r)throw Error(h(90));gs(i),ro(i,r)}}}break;case"textarea":xs(e,t);break;case"select":n=t.value,n!=null&&Yn(e,!!t.multiple,n,!1)}};zs=Ea;ws=Nn;var Np={usingClientEntryPoint:!1,Events:[ei,Qn,cr,Cs,Is,Ea]},vt={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ts(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{ar=Si.inject(Op),Ue=Si}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(n))throw Error(h(200));return Lp(e,n,null,t)};Se.createRoot=function(e,n){if(!ja(e))throw Error(h(299));var t=!1,i="",r=ac;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ra(e,1,!1,null,null,t,!1,i,r),e[Je]=n.current,Kt(e.nodeType===8?e.parentNode:e),new _a(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Ts(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Nn(e)};Se.hydrate=function(e,n,t){if(!hr(n))throw Error(h(200));return vr(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!ja(e))throw Error(h(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",a=ac;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=oc(n,null,e,1,t??null,r,!1,o,a),e[Je]=n.current,Kt(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new yr(n)};Se.render=function(e,n,t){if(!hr(n))throw Error(h(200));return vr(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!hr(e))throw Error(h(40));return e._reactRootContainer?(Nn(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=Ea;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!hr(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return vr(e,n,t,!1,i)};Se.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),ls.exports=Se;var Rp=ls.exports,Jl=Rp;Yr.createRoot=Jl.createRoot,Yr.hydrateRoot=Jl.hydrateRoot;const Ci="quiz_history",Mp=50;function sc(){const[e,n]=N.useState(()=>{try{const l=localStorage.getItem(Ci);return l?JSON.parse(l):[]}catch(l){return console.error("Failed to load quiz history from localStorage:",l),[]}}),t=N.useCallback(l=>{try{const s={...l,date:new Date().toISOString()};return n(u=>{const g=[s,...u].slice(0,Mp);return localStorage.setItem(Ci,JSON.stringify(g)),g}),s}catch(s){return console.error("Failed to save quiz session:",s),null}},[]),i=N.useCallback(()=>e,[e]),r=N.useCallback(()=>{try{localStorage.removeItem(Ci),n([])}catch(l){console.error("Failed to clear history:",l)}},[]),o=N.useCallback(l=>{try{n(s=>{const u=s.filter((g,m)=>m!==l);return localStorage.setItem(Ci,JSON.stringify(u)),u})}catch(s){console.error("Failed to delete session:",s)}},[]),a=N.useCallback(()=>{const l={totalSessions:e.length,totalQuestions:e.reduce((s,u)=>s+u.totalQuestions,0),totalCorrect:e.reduce((s,u)=>s+u.correctCount,0),averageRate:0,practiceCount:0,simulationCount:0};return l.totalQuestions>0&&(l.averageRate=l.totalCorrect/l.totalQuestions),l.practiceCount=e.filter(s=>s.mode==="practice").length,l.simulationCount=e.filter(s=>s.mode==="simulation").length,l},[e]);return{history:e,saveSession:t,getHistory:i,clearHistory:r,deleteSession:o,getStats:a}}const _p=({onClose:e})=>{const{history:n,deleteSession:t,clearHistory:i,getStats:r}=sc(),[o,a]=N.useState(null),l=r(),s=A=>new Date(A).toLocaleString("zh-CN"),u=A=>A==="practice"?"练习模式":"模拟模式",g=()=>{window.confirm("确定要清空所有历史记录吗？此操作不可撤销。")&&i()},m=A=>{a(o===A?null:A)};return n.length===0?p.jsxs("div",{className:"history-screen",children:[p.jsxs("div",{className:"history-header",children:[p.jsx("h2",{children:"学习历史"}),p.jsx("button",{onClick:e,className:"close-button",children:"关闭"})]}),p.jsx("div",{className:"history-empty",children:p.jsx("p",{children:"暂无学习记录"})})]}):p.jsxs("div",{className:"history-screen",children:[p.jsxs("div",{className:"history-header",children:[p.jsx("h2",{children:"学习历史"}),p.jsx("button",{onClick:e,className:"close-button",children:"关闭"})]}),p.jsxs("div",{className:"history-stats",children:[p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-label",children:"总次数"}),p.jsx("span",{className:"stat-value",children:l.totalSessions})]}),p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-label",children:"总题数"}),p.jsx("span",{className:"stat-value",children:l.totalQuestions})]}),p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-label",children:"平均正确率"}),p.jsxs("span",{className:"stat-value",children:[(l.averageRate*100).toFixed(1),"%"]})]}),p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-label",children:"练习/模拟"}),p.jsxs("span",{className:"stat-value",children:[l.practiceCount,"/",l.simulationCount]})]})]}),p.jsxs("div",{className:"history-list",children:[p.jsxs("div",{className:"history-list-header",children:[p.jsx("span",{className:"col-date",children:"日期"}),p.jsx("span",{className:"col-mode",children:"模式"}),p.jsx("span",{className:"col-score",children:"成绩"}),p.jsx("span",{className:"col-rate",children:"正确率"}),p.jsx("span",{className:"col-action",children:"操作"})]}),n.map((A,S)=>p.jsxs("div",{className:"history-item",children:[p.jsxs("div",{className:"history-item-summary",onClick:()=>m(S),children:[p.jsx("span",{className:"col-date",children:s(A.date)}),p.jsx("span",{className:"col-mode",children:u(A.mode)}),p.jsxs("span",{className:"col-score",children:[A.correctCount,"/",A.totalQuestions]}),p.jsxs("span",{className:"col-rate",children:[(A.correctRate*100).toFixed(1),"%"]}),p.jsx("div",{className:"col-action",children:p.jsx("button",{className:"delete-btn",onClick:v=>{v.stopPropagation(),t(S)},children:"删除"})})]}),o===S&&p.jsx("div",{className:"history-item-details",children:p.jsxs("div",{className:"wrong-questions",children:[p.jsx("h4",{children:"错题详情"}),A.records.filter(v=>!v.isCorrect).length===0?p.jsx("p",{className:"no-wrong",children:"全部正确！🎉"}):p.jsx("ul",{className:"wrong-list",children:A.records.filter(v=>!v.isCorrect).map((v,x)=>p.jsxs("li",{className:"wrong-item",children:[p.jsxs("div",{className:"question-preview",children:[v.question.content.substring(0,80),"..."]}),p.jsxs("div",{className:"answer-info",children:[p.jsxs("span",{className:"user-answer",children:["你的答案: ",v.userAnswer.join(", ")||"跳过"]}),p.jsxs("span",{className:"correct-answer",children:["正确答案: ",Array.isArray(v.question.answer)?v.question.answer.join(", "):v.question.answer]})]})]},x))})]})})]},S))]}),p.jsx("div",{className:"history-footer",children:p.jsx("button",{onClick:g,className:"clear-all-btn",children:"清空所有历史记录"})})]})},uc=[{id:"1",type:"single",content:`**背景**

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

以下哪个选项正确描述了两个组应被分配的角色？`,explanation:`- **AllUsers** 需要能创建和修改问答对（编辑权限），应分配 **QnA Maker Editor** 角色。该角色权限包含：创建/更新/替换知识库 API 等。
- **LeadershipTeam** 需要能发布更新，"发布"等同于部署到生产，应分配 **Contributor** 角色（具备除了添加新成员到角色之外的所有权限）。

> ⚠️ **争议说明**：QnA Maker 已在 2025 年 3 月 31 日正式退役，现由 **Azure AI Language 服务中的"自定义问题解答"（Custom question answering）** 替代。对应的角色体系也随之更新（在 Language Studio 中使用 Language Service Contributor 等角色）。若题目场景换为新服务，分配逻辑相似但角色名称不同，请以当前 Azure 文档为准。

---`,options:[{id:"A",text:"AllUsers → QnA Maker Editor；LeadershipTeam → QnA Maker Reader"},{id:"B",text:"AllUsers → QnA Maker Editor；LeadershipTeam → Contributor"},{id:"C",text:"AllUsers → Contributor；LeadershipTeam → QnA Maker Editor"},{id:"D",text:"AllUsers → QnA Maker Reader；LeadershipTeam → Cognitive Services User"}],answer:"B"},{id:"2",type:"single",content:`**背景**

一家零售商希望缩短员工记录费用报销收据所花费的时间。所有收据均为英文。你需要从收据中提取顶层信息（如商家名称、交易总额），且解决方案必须**尽量减少开发工作量**。

**题目**

应该使用哪项 Azure 认知服务？`,explanation:`Azure Form Recognizer（现已更名为 **Azure AI Document Intelligence**）内置了针对收据的预构建模型（prebuilt receipt model），可以直接提取商家名称、交易日期、总金额等字段，无需自定义训练，开发工作量最小。

Computer Vision 的 OCR 功能可提取文本，但需要额外开发逻辑来解析收据字段，开发量更大。

> ⚠️ **争议说明**：Form Recognizer 已更名为 **Azure AI Document Intelligence**，功能等同，但若考题使用新名称，答案对应选项也应更新。

---`,options:[{id:"A",text:"Custom Vision（自定义视觉）"},{id:"B",text:"Personalizer（个性化服务）"},{id:"C",text:"Form Recognizer（表单识别器）"},{id:"D",text:"Computer Vision（计算机视觉）"}],answer:"C"},{id:"3",type:"multiple",content:`**背景**

你正在开发一个使用 Translator API 的方法，该方法将接收网页内容并将其翻译成希腊语（el）。结果中还需包含使用罗马字母（Roman alphabet）的音译（transliteration）。

你已有如下基础 URI：
\`\`\`
https://api.cognitive.microsofttranslator.com/translate?api-version=3.0
\`\`\`

**题目**

应在 URI 中额外添加哪三个查询参数（每个正确选项都是解决方案的一部分）？`,explanation:"- **`to=el`（选项 D）**：必填参数，指定目标输出语言为希腊语。\n- **`textType=html`（选项 C）**：可选参数，网页内容为 HTML 格式，需指定文本类型为 html，否则 HTML 标签可能被误翻译。\n- **`toScript=Latn`（选项 F）**：可选参数，指定翻译结果使用拉丁（罗马）字母音译，即题目要求的 Roman alphabet。\n\n`toScript=Cyrl` 是西里尔字母，与要求不符。`from=el` 是指定来源语言为希腊语，而题目是要翻译成希腊语，故不需要。\n\n---",options:[{id:"A",text:"`toScript=Cyrl`"},{id:"B",text:"`from=el`"},{id:"C",text:"`textType=html`"},{id:"D",text:"`to=el`"},{id:"E",text:"`textType=plain`"},{id:"F",text:"`toScript=Latn`"}],answer:["C","D","F"]},{id:"4",type:"single",content:`**背景**

你部署了一个使用 Azure 认知搜索（Azure Cognitive Search）的 Web 应用，用于管理搜索索引。该应用被配置为使用**主管理密钥（primary admin key）**。

在一次安全审查中，你发现有人对搜索索引进行了未授权的更改，怀疑主访问密钥已泄露。

你需要**阻止未经授权的访问**，且解决方案必须**最大程度减少停机时间**。

**题目**

下一步应执行哪项操作？`,explanation:`目标是在不停机的情况下阻止已泄露的主管理密钥继续被使用：

1. **先重新生成辅助管理密钥**（此时应用仍在用主密钥正常运行，不中断）
2. **将应用切换为使用辅助管理密钥**（应用继续正常运行）
3. **再重新生成主管理密钥**（使旧的泄露密钥失效）

选项 A 的错误在于先重新生成了主密钥（会立即中断应用），然后才切换到辅助密钥，会造成短暂中断。选项 B 中使用查询密钥无法进行索引管理写操作（查询密钥是只读的）。

---`,options:[{id:"A",text:"重新生成主管理密钥，将应用切换为使用辅助管理密钥，然后重新生成辅助管理密钥"},{id:"B",text:"将应用切换为使用查询密钥，然后重新生成主管理密钥和辅助管理密钥"},{id:"C",text:"重新生成辅助管理密钥，将应用切换为使用辅助管理密钥，然后重新生成主管理密钥"},{id:"D",text:"添加新的查询密钥，将应用切换为使用该新查询密钥，然后删除所有未使用的查询密钥"}],answer:"C"},{id:"5",type:"multiple",content:`**背景**

你正在构建一个多语言聊天机器人，需要根据用户消息的情感（正面或负面）发送不同的回答。

**题目**

应使用哪两个 Text Analytics（文本分析）API？（每个正确答案都是解决方案的一部分）`,explanation:`- **情感分析（B）**：识别用户消息中的正面、负面或中性情感，这是实现"根据情感发送不同回答"的核心能力。
- **语言检测（D）**：由于是多语言聊天机器人，需要先检测用户使用的语言，再选择对应语言模型的情感分析，确保准确性。

关键短语提取和命名实体识别用于提取内容中的关键词和实体，与情感判断无关。

---`,options:[{id:"A",text:"从知名知识库关联实体（Linked entities from a well-known knowledge base）"},{id:"B",text:"情感分析（Sentiment Analysis）"},{id:"C",text:"关键短语提取（Key Phrases）"},{id:"D",text:"语言检测（Detect Language）"},{id:"E",text:"命名实体识别（Named Entity Recognition）"}],answer:["B","D"]},{id:"6",type:"single",content:`**背景**

你正在使用 Azure 认知搜索（Azure Cognitive Search）构建一个包含数百万扫描文档（图像和 PDF）的搜索解决方案。你需要让这些扫描文档**尽快**可被搜索。

**题目**

应采用哪种方案？`,explanation:`要加速大规模索引，核心策略是**并行处理**：

- 将数据拆分到多个虚拟文件夹（或容器）中，每个文件夹对应一个数据源和一个索引器
- 增加搜索单元（每个搜索单元可同时运行一个索引器）
- 配置**并行**执行（而非顺序）

选项 B 错误在于使用了顺序执行，无法并行。选项 A 创建多个搜索服务会增加成本且不必要。正确方式是在同一个搜索服务中增加副本/分区（即搜索单元）来支持并行索引。

---`,options:[{id:"A",text:"将数据拆分到多个 Blob 容器中，为每个容器创建独立的认知搜索服务，并配置相同的运行时调度模式"},{id:"B",text:"将数据拆分到多个 Blob 容器中，为每个容器创建一个索引器，增加搜索单元（Search Units），并配置顺序执行模式"},{id:"C",text:"为每种文档类型创建一个单独的认知搜索服务"},{id:"D",text:"将数据拆分到多个虚拟文件夹中，为每个文件夹创建一个索引器，增加搜索单元，并配置并行执行模式"}],answer:"D"},{id:"7",type:"single",content:`**背景**

Contoso 公司正在开发一个文档处理工作流，用于自动从财务文档（PDF 和 JPEG 图像）中提取信息。技术要求规定：**当 AI 响应的置信度分数低于 70% 时，必须触发人工审核**。

你将收据图像上传到 Form Recognizer API 进行分析，API 返回了包含 \`documentResults.fields.MerchantName.confidence\` 等字段的 JSON 数据。

**题目**

应使用哪个表达式来触发 Consultant-Bookkeeper 组成员的手动审核？`,explanation:"触发人工审核的条件应该是置信度**低于** 0.7（70%），且需要针对具体字段进行判断。选项 D 指定了具体的字段名（MerchantName）并使用了 `< 0.7` 的条件，符合要求。\n\n- 选项 A 只判断文档类型，不涉及置信度\n- 选项 B 语法上不规范（`*.confidence` 不是标准 JSON 路径表达式）\n- 选项 C 条件是 `> 0.7`（大于），这是置信度高的情况，不应触发审核\n\n---",options:[{id:"A",text:'`documentResults.docType == "prebuilt:receipt"`'},{id:"B",text:"`documentResults.fields.*.confidence < 0.7`"},{id:"C",text:"`documentResults.fields.ReceiptType.confidence > 0.7`"},{id:"D",text:"`documentResults.fields.MerchantName.confidence < 0.7`"}],answer:"D"},{id:"8",type:"single",content:`**背景**

你正在构建一个语言理解模型（Language Understanding / LUIS），用于电商聊天机器人。用户可以通过语音或文字输入账单地址。

**题目**

应使用哪种实体类型来捕获账单地址？`,explanation:`账单地址由多个子组件组成（门牌号、街道名、城市、邮编、国家），结构复杂且格式灵活（特别是语音输入时），最适合使用**机器学习实体（ML 实体）**。

ML 实体可以由多个子实体组成，例如：
\`\`\`
地址: 4567 Main Street, NY, 98052, USA
  ├── 门牌号: 4567
  ├── 街道名: Main Street
  ├── 州: NY
  ├── 邮编: 98052
  └── 国家: USA
\`\`\`

正则表达式适合固定格式（如邮政编码单独提取），但无法处理地址的复杂结构。

> ⚠️ **争议说明**：题目 83（原题库中另一版本）答案为 B（Regex），这是因为该题强调"用户通过语音或文字输入"，有观点认为地址是固定模式的。但考虑到地址的复杂性和多语言特性，ML 实体是微软官方推荐的方式，本题标准答案应为 A。

---`,options:[{id:"A",text:"机器学习实体（Machine Learned）"},{id:"B",text:"正则表达式实体（Regex）"},{id:"C",text:"列表实体（List）"},{id:"D",text:"Pattern.any 实体"}],answer:"A"},{id:"9",type:"single",content:`**背景**

你有 100 个聊天机器人，每个都有独立的语言理解（Language Understanding / LUIS）模型。你经常需要向每个模型批量添加相同的短语。

你需要通过**编程方式**将新短语更新到所有模型中。

**题目**

在 LUIS SDK 代码中，完成更新操作需要依次调用哪个方法，并使用哪个对象？

从以下选项中选择正确组合：`,explanation:`LUIS SDK 中，为模型批量添加短语列表（Phrase List Feature）使用的是：

\`\`\`csharp
var phraselistId = await client.Features.AddPhraseListAsync(appId, versionId, 
    new PhraselistCreateObject
    {
        EnabledForAllModels = false,
        IsExchangeable = true,
        Name = "QuantityPhraselist",
        Phrases = "few,more,extra"
    });
\`\`\`

短语列表（Phrase List）是 LUIS 中用于提高模型识别能力的特性（Feature），通过 \`AddPhraseListAsync\` 方法和 \`PhraselistCreateObject\` 对象完成创建。

---`,options:[{id:"A",text:"调用 `AddPhraseListAsync`，传入 `PhraselistCreateObject` 对象"},{id:"B",text:"调用 `AddEntityAsync`，传入 `EntityCreateObject` 对象"},{id:"C",text:"调用 `AddIntentAsync`，传入 `ModelCreateObject` 对象"},{id:"D",text:"调用 `AddUtteranceAsync`，传入 `ExampleLabelObject` 对象"}],answer:"A"},{id:"10",type:"single",content:`**背景**

你构建了一个聊天机器人（bot1），使用了 Language Understanding（LUIS）资源（lu1）。

你需要确保 bot1 遵循微软负责任 AI 原则中的**包容性（Inclusiveness）**原则。

**题目**

应如何扩展 bot1 来满足该要求？`,explanation:`微软负责任 AI 的**包容性原则**要求 AI 系统能够赋能所有人，包括有残障需求的用户。为 bot1 添加 **Direct Line Speech** 频道，可以让用户通过语音与机器人交互，从而支持有视觉障碍或行动不便的用户，体现了包容性设计。

Direct Line Speech 是 Bot Framework 提供的端到端语音解决方案，支持"语音输入 → 语音输出"的交互模式。

其他选项（身份验证、主动学习、容器托管）均与包容性原则关系不大。

---`,options:[{id:"A",text:"为 bot1 实现身份验证"},{id:"B",text:"为 lu1 启用主动学习（Active Learning）"},{id:"C",text:"在容器中托管 lu1"},{id:"D",text:"为 bot1 添加 Direct Line Speech 频道"}],answer:"D"},{id:"11",type:"single",content:`**背景**

你正在使用 Azure 认知搜索（Azure Cognitive Search）构建一个知识库，并创建了一个自定义技能（Custom Skill）。该技能调用 Web API，为通过实体识别（Entity Recognition）识别出的每个组织查找其描述。

**题目**

关于该自定义技能，以下说法是否正确？

1. 该技能的输出可以映射到搜索索引的字段中
2. 该技能的定义中使用了 \`WebApiSkill\` 类型
3. 对于每个已识别的组织，该技能会调用 Web API 并返回该组织的描述（而非其他信息）

请分别判断每条说法是否正确（是/否）：`,explanation:'1. **正确**：自定义技能的输出字段可以通过 `outputFieldMappings` 映射到搜索索引的对应字段。\n2. **正确**：调用 Web API 的自定义技能在技能集定义中确实使用 `WebApiSkill` 类型（`@odata.type: "#Microsoft.Skills.Custom.WebApiSkill"`）。\n3. **错误**：技能会为每个识别到的组织调用 Web API，但返回的是与该技能 `outputs` 定义相关的信息（如组织描述），不一定仅有描述，还可能包含其他实体级别的信息。更准确的说法是"为每个实体识别出的组织调用 API"，而该技能的范围不仅限于组织实体。\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-是"},{id:"D",text:"1-是，2-否，3-否"}],answer:"B"},{id:"12",type:"single",content:`**背景**

你需要构建一个在本地网络中运行、具有间歇性互联网连接的异常检测应用（Anomaly Detector）。解决方案必须**最小化成本**。

**题目**

应使用哪种方案来托管模型？`,explanation:`要求在"本地网络、间歇性互联网连接"的环境中运行模型，应使用 **Azure Stack Hub** 上的 Kubernetes 集群。Azure Stack Hub 是微软的混合云产品，允许将 Azure 服务运行在本地数据中心，适合网络受限场景。

- AKS（选项 A）是完全云端托管，不适合断网环境
- Azure Container Instances（选项 C）也是纯云服务
- Docker Engine（选项 D）技术上可行，但没有 Kubernetes 的编排能力，不是官方推荐方案

> ⚠️ **争议说明**：此题答案可能因考试版本而异。部分资料认为答案为 D（Docker Engine，成本最低），因为题目明确说"最小化成本"。Azure Stack Hub 的成本远高于 Docker Engine。建议结合具体考纲判断，若强调"间歇网络+成本最小"，D 更合理；若强调"生产级可靠性"，B 更合理。

---`,options:[{id:"A",text:"Azure Kubernetes Service（AKS）"},{id:"B",text:"托管在 Azure Stack Hub 集成系统中的 Kubernetes 集群"},{id:"C",text:"Azure Container Instances"},{id:"D",text:"Docker Engine"}],answer:"B"},{id:"13",type:"multiple",content:`**背景**

你需要为 Azure 认知搜索（Azure Cognitive Search）实现**表投影（Table Projection）**，以在 Azure 表存储中生成索引数据的物理表示。

**题目**

在技能集（Skillset）定义的 JSON 配置中，\`table\` 节点必须指定哪三个属性？`,explanation:"定义表投影（Table Projection）时，每个 `table` 节点需要以下三个必填属性：\n\n- **`tableName`**：Azure 存储中的表名\n- **`generatedKeyName`**：唯一标识每行的键列名\n- **`source`**：来自富化树（enrichment tree）的节点，通常是 Shaper 技能的输出\n\n`dataSource` 和 `dataSourceConnection` 是索引器（indexer）级别的属性，不属于表投影节点的配置。\n\n---",options:[{id:"A",text:"`tableName`"},{id:"B",text:"`generatedKeyName`"},{id:"C",text:"`dataSource`"},{id:"D",text:"`dataSourceConnection`"},{id:"E",text:"`source`"}],answer:["A","B","E"]},{id:"14",type:"multiple",content:`**背景**

你正在构建一个聊天机器人，使用 Microsoft Bot Framework SDK。你希望机器人能够支持语音交互。

**题目**

为聊天机器人启用语音功能，应执行哪三项操作？`,explanation:`为机器人启用语音功能需要：

1. **创建 Speech 服务（B）**：提供语音转文字和文字转语音能力
2. **注册 Direct Line Speech 频道（C）**：这是将语音能力与 Bot Framework 集成的官方通道，内部使用文字转语音（TTS）服务
3. **启用 Web Sockets（A）**：Direct Line Speech 通道使用 WebSocket 协议进行实时双向通信

Cortana 频道（D）已被微软逐步淘汰，不推荐使用。CORS（E）用于浏览器跨域请求，与语音功能无关。

---`,options:[{id:"A",text:"为聊天机器人 App 启用 Web Sockets"},{id:"B",text:"创建 Speech 服务资源"},{id:"C",text:"注册 Direct Line Speech 频道"},{id:"D",text:"注册 Cortana 频道"},{id:"E",text:"为聊天机器人 App 启用 CORS"},{id:"F",text:"创建 Language Understanding 服务资源"}],answer:["A","B","C"]},{id:"15",type:"multiple",content:`**背景**

你构建了一个零售聊天机器人，使用 QnA Maker 服务，并上传了一份内部支持文档。文档中包含问题"What is your warranty period?"（保修期是多少？）

用户反映，当他们询问"How long is the warranty coverage?"（保修覆盖多长时间？）时，机器人返回了默认的无答案回复。

你需要提高机器人对这两种表达方式的识别准确率。

**题目**

应按顺序执行哪三项操作？`,explanation:`当用户使用不同表达方式提问同一个问题时，正确的做法是：

1. **添加替代提问方式（A）**：为已有问答对添加"How long is the warranty coverage?"作为替代问法，无需删除原有内容
2. **重新训练模型（B）**：保存并训练，以使修改生效
3. **重新发布模型（C）**：发布后，新的问法才能在生产环境生效

删除知识库或创建新知识库代价过大，且无法利用已有训练数据。

> ⚠️ **争议说明**：QnA Maker 已于 2025 年 3 月退役，新服务为 **Azure AI Language 的自定义问题解答（Custom Question Answering）**。操作步骤在 Language Studio 中类似，但界面和部分术语有所不同。

---`,options:[{id:"A",text:"向问答对添加替代提问方式（Alternate Questions）"},{id:"B",text:"重新训练模型（Retrain the model）"},{id:"C",text:"重新发布模型（Republish the model）"},{id:"D",text:"删除原有问答对并重新创建"},{id:"E",text:"创建新的知识库（Knowledge Base）"}],answer:["A","B","C"]},{id:"16",type:"single",content:`**背景**

你正在开发一个应用，使用 Face API（人脸识别服务）。该应用需要从员工列表中查找相似人脸。员工人脸列表包含 **60,000 张**图像。

**题目**

在 HTTP 请求体中，应使用哪个列表类型和哪种匹配模式？`,explanation:'- **列表类型**：`FaceList` 最多支持 1,000 张人脸；`LargeFaceList` 最多支持 1,000,000 张人脸。由于员工列表有 60,000 张图像，必须使用 **`largeFaceListId`**。\n- **匹配模式**：\n  - `matchPerson`：在满足同一人阈值的前提下查找相似人脸（严格，适合查找同一人的照片）\n  - `matchFace`：忽略同一人阈值，直接返回外观最相似的人脸，即使相似度较低也会返回（适合查找"看起来像"的人脸，比如名人相似度查询）\n  - 题目要求从员工列表查找"相似人脸"，应使用 `matchFace` 模式\n\n> ⚠️ **争议说明**：Azure Face API 中涉及人脸识别的功能（尤其是面部比对和人员识别）在 2023 年后受到访问限制，需申请审批才能使用。实际项目中请确认访问权限。\n\n---',options:[{id:"A",text:"使用 `faceListId`，模式为 `matchPerson`"},{id:"B",text:"使用 `largeFaceListId`，模式为 `matchFace`"},{id:"C",text:"使用 `largeFaceListId`，模式为 `matchPerson`"},{id:"D",text:"使用 `faceListId`，模式为 `matchFace`"}],answer:"B"},{id:"17",type:"multiple",content:`**背景**

你正在开发一个 Custom Vision（自定义视觉）分类器来识别花卉品种。你收到了新花卉品种的图像，需要将这些新图像添加到分类器中。

以下哪种操作能实现目标？

**题目**

针对同一场景，以下三种解决方案，哪种能满足需求？（三选一，每题独立判断）`,explanation:`扩展已有 Custom Vision 分类器的正确流程是：上传新类别图像 → 添加标签 → 重新训练 → 发布。不应重新创建模型，否则原有 1000+ 张训练图像的数据将丢失。

---`,options:[{id:"A",text:"添加新图像，然后使用 Smart Labeler 工具"},{id:"B",text:"将新图像和对应标签添加到现有模型中，重新训练，然后发布模型"},{id:"C",text:"创建一个新模型，然后上传新图像和标签  这三种方案分别能否实现目标？  &nbsp;"}],answer:["A","B","C"]},{id:"18",type:"single",content:`**背景**

你有一个 Azure 认知搜索（Cognitive Search）服务，过去 12 个月内查询量持续增长。你发现部分搜索请求正在被**限速（Throttled）**。

以下三种解决方案，哪种可以减少被限速的可能性？（三题独立判断）`,explanation:`缓解查询限速的有效方法是增加**副本数（Replicas）**（针对查询限速）或**分区数（Partitions）**（针对索引限速），更高定价层允许配置更多副本和分区。

---`,options:[],answer:"见解析"},{id:"19",type:"single",content:`**背景**

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
3. \`brands[0].Rectangle\` 属性可以获取品牌在图像中的位置坐标`,explanation:"Computer Vision 的品牌检测 API 返回的 `brands` 集合：\n\n1. **正确**：一张图像中可以检测到多个品牌，因此集合可以包含多个条目\n2. **错误**：Computer Vision 品牌检测结果中的置信度属性名为 `confidence`（小写），且该属性反映的是品牌存在的可信度。注意此 API 中的置信度含义与面部检测不同，需要区分\n3. **错误**：品牌位置信息使用的是 `rectangle` 属性（不是 `Rectangle`，且即使有该属性，上面代码也没有测试它的准确性）\n\n> **注意**：此题因为没有具体代码原文，判断存在一定不确定性，实际考试中应参照原始代码截图。\n\n---",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"20",type:"single",content:`**背景**

你正在为一个 IoT 工厂监控系统构建解决方案。你从 100 台工业机器上收集传感器数据，每台机器有 50 个不同传感器，每分钟采集一次数据，共有 5,000 个时间序列数据集。你需要识别每个时间序列中的异常值，以预测机械故障。

**题目**

应使用哪项 Azure 认知服务？`,explanation:`**Anomaly Detector（异常检测器）** 专门设计用于时间序列数据的异常检测，支持：
- 单变量异常检测（Univariate）：检测单条时间序列
- 多变量异常检测（Multivariate）：检测多个相关传感器之间的联合异常

对于5,000个时间序列的工厂传感器场景，Anomaly Detector 是最合适的服务，无需自定义 ML 开发。

> 注意：当多个传感器之间存在关联性时（如本题场景），**多变量异常检测（Multivariate Anomaly Detection）** 更能识别跨传感器的复合异常模式（见题目 207）。

---`,options:[{id:"A",text:"异常检测器（Anomaly Detector）"},{id:"B",text:"认知搜索（Cognitive Search）"},{id:"C",text:"表单识别器（Form Recognizer）"},{id:"D",text:"自定义视觉（Custom Vision）"}],answer:"A"},{id:"21",type:"single",content:`**背景**

你正在构建一个 Azure 认知搜索解决方案，使用以下数据源：

- Finance：本地 Microsoft SQL Server 数据库
- Sales：使用 Core (SQL) API 的 Azure Cosmos DB
- Logs：Azure 表存储
- HR：Azure SQL 数据库

你需要确保可以使用 Azure 认知搜索 REST API **搜索所有数据**。

**题目**

为了满足此要求，应该执行哪项操作？`,explanation:`Azure 认知搜索的索引器（Indexer）支持以下 Azure 数据源：
- Azure Blob Storage / Data Lake Storage
- Azure Table Storage ✅（Logs 支持）
- Azure Cosmos DB ✅（Sales 支持）
- Azure SQL Database ✅（HR 支持）
- Azure VM 上的 SQL Server ✅

**本地 SQL Server 数据库**（Finance）**不在支持列表中**，因此需要将其迁移/镜像到 Azure SQL 数据库，才能被认知搜索索引器访问。

选项 A/C/D 均与解决 Finance 数据的可访问性问题无关。

---`,options:[{id:"A",text:"为 Sales 数据配置多个读取副本"},{id:"B",text:"将 Finance 数据镜像到 Azure SQL 数据库中"},{id:"C",text:"将 Sales 数据迁移到 MongoDB API"},{id:"D",text:"将 Logs 数据导入 Azure Sentinel"}],answer:"B"},{id:"22",type:"multiple",content:`**背景**

你正在构建一个多语言聊天机器人，使用 Azure Cognitive Services 语言模型。该机器人频繁回复默认的"Sorry, I don't understand that."（对不起，我不理解你的意思）。

你需要提升机器人的响应能力。

**题目**

应按照哪个顺序执行以下三项操作？`,explanation:`主动学习（Active Learning）是 LUIS 的重要功能，可以从用户的真实请求中学习改进：

1. **启用主动学习（A）**：在预测端点 URL 中添加 \`log=true\` 参数，开始记录用户请求
2. **审核建议的语料（C）**：在 LUIS 门户中查看"Review endpoint utterances"，验证并接受/拒绝系统建议的语料
3. **训练并发布模型（B）**：将审核后的改进训练进模型，重新发布

---`,options:[{id:"A",text:"启用主动学习（Enable Active Learning）"},{id:"B",text:"训练并重新发布模型（Train and republish the model）"},{id:"C",text:"审核并验证建议的语料（Validate the utterances/suggestions）"}],answer:["A","C","B"]},{id:"23",type:"multiple",content:`**背景**

一个 Azure 认知搜索知识库包含使用 CMK（客户托管密钥）加密的数据。

**题目**

启用 CMK 加密后，哪三项说法是正确的？（每个正确答案都是完整解决方案的一部分）`,explanation:`根据 Microsoft 文档，启用 CMK 加密的三个关键影响：

- **索引大小增加（A）**：加密开销导致存储量增大
- **查询性能降低（B）**（查询时间增加）：加密解密操作增加了每次查询的延迟
- **需要 Azure Key Vault（F）**：CMK 是将密钥存储在 Azure Key Vault 中，而非 Microsoft 管理，Key Vault 是必须要创建的额外资源（且会产生额外费用）

不需要自签名证书（C），Key Vault 使用的是 Azure 的密钥托管机制。

---`,options:[{id:"A",text:"索引大小会增加"},{id:"B",text:"查询时间会增加"},{id:"C",text:"需要自签名 X.509 证书"},{id:"D",text:"索引大小会减少"},{id:"E",text:"查询时间会减少"},{id:"F",text:"需要 Azure Key Vault"}],answer:["A","B","F"]},{id:"24",type:"single",content:`**背景**

你需要构建一个自然语言处理应用，该应用需要同时访问 **Decision API** 和 **Language API**，且要求通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的 Azure 资源？`,explanation:`**Azure Cognitive Services 多服务资源**（也称为"全功能资源"）允许通过单一密钥和端点访问多个认知服务，包括 Decision、Language、Speech、Vision 等类别下的所有服务，并统一计费。

单一服务资源（如 Language 资源、Speech 资源）只能访问各自对应的服务，无法同时访问 Decision API 和 Language API。

> **注意**：Azure Cognitive Services 已更名为 **Azure AI Services**，功能相同。

---`,options:[{id:"A",text:"Language 资源"},{id:"B",text:"Speech 资源"},{id:"C",text:"Azure Cognitive Services（多服务资源）"},{id:"D",text:"Content Moderator 资源"}],answer:"C"},{id:"25",type:"multiple",content:`**背景**

你正在开发一个使用 Custom Vision 构建的移动应用，该模型用于识别零售商品（使用 Retail 领域）。你计划将该模型部署到 Android 手机端（离线使用）。

**题目**

应按顺序执行哪三项操作来准备模型部署？`,explanation:`要将 Custom Vision 模型部署到移动设备（Android/iOS）离线使用，必须：

1. **更改为紧凑型域（A）**：标准域（General、Retail 等）不可导出；紧凑型域（如 General (compact)、Retail (compact)）专为设备端部署优化
2. **重新训练模型（B）**：更换域后必须重新训练
3. **导出模型（C）**：导出为 TensorFlow、CoreML、ONNX 或 Docker 等格式，用于本地部署

不需要删除原有模型或创建新资源。

---`,options:[{id:"A",text:"将模型域（Domain）更改为紧凑型域（Compact domain）"},{id:"B",text:"使用紧凑型域重新训练模型（Retrain）"},{id:"C",text:"导出模型（Export the model）"},{id:"D",text:"删除原有模型"},{id:"E",text:"在 Azure Portal 中创建新的 Custom Vision 资源"}],answer:["A","B","C"]},{id:"26",type:"single",content:`**背景**

Contoso 公司需要为聊天机器人构建 QnA Maker 资源，要求如下：

- Management-Accountants 组：可以**审批**（发布）FAQ
- Consultant-Accountants 组：可以**创建和修改** FAQ
- Agent-CustomerServices 组：可以**浏览**（只读）FAQ

**题目**

应为三个组分别分配哪个 RBAC 角色？`,explanation:`按照最小权限原则：

| 组 | 需求 | 角色 |
|---|---|---|
| Management-Accountants | 审批/发布 FAQ（拥有发布权限的读写角色） | **Cognitive Service User**（具备发布权限） |
| Consultant-Accountants | 创建和修改 FAQ（编辑权限） | **QnA Maker Editor**（可创建/更新知识库） |
| Agent-CustomerServices | 仅浏览 FAQ（只读） | **QnA Maker Reader**（只能下载/列出知识库） |

> ⚠️ **争议说明**：QnA Maker 已退役，新版"自定义问题解答"角色体系有所变化。建议以 Azure AI Language 文档为准。

---`,options:[{id:"A",text:"Management-Accountants→Cognitive Service User；Consultant-Accountants→QnA Maker Editor；Agent-CustomerServices→QnA Maker Reader"},{id:"B",text:"Management-Accountants→Contributor；Consultant-Accountants→QnA Maker Reader；Agent-CustomerServices→QnA Maker Editor"},{id:"C",text:"Management-Accountants→QnA Maker Editor；Consultant-Accountants→Cognitive Service User；Agent-CustomerServices→QnA Maker Reader"},{id:"D",text:"Management-Accountants→QnA Maker Reader；Consultant-Accountants→QnA Maker Editor；Agent-CustomerServices→Cognitive Service User"}],answer:"A"},{id:"27",type:"single",content:`**背景**

你正在开发一个将文本转换为语音的社交媒体扩展程序。解决方案需满足：

- 支持最多 400 个字符的消息
- 为用户提供多种语音选项
- 最小化成本

你已创建了 Azure 认知服务资源（部署在 UK South 区域）。

**题目**

哪个 Speech API 端点可以获取可用的语音列表？`,explanation:`获取 Text-to-Speech（TTS）可用语音列表的标准端点格式为：
\`\`\`
https://{region}.tts.speech.microsoft.com/cognitiveservices/voices/list
\`\`\`

- 选项 A 是长音频合成（Long Audio Synthesis）的语音列表端点，用于超长文本（超过10分钟），非标准用途
- 选项 B 是标准 TTS 语音列表端点，返回该区域所有可用的标准语音和神经语音
- 选项 C 是自定义神经语音（Custom Neural Voice）的端点
- 选项 D 是语音转文字（STT）基础模型列表端点，功能不符

> ⚠️ **争议说明**：实际考题答案为 C，部分题库存在分歧。请以 Azure Speech Service 官方文档的"List voices"端点为最终依据。

---`,options:[{id:"A",text:"`https://uksouth.customvoice.api.speech.microsoft.com/api/texttospeech/v3.0/longaudiosynthesis/voices`"},{id:"B",text:"`https://uksouth.tts.speech.microsoft.com/cognitiveservices/voices/list`"},{id:"C",text:"`https://uksouth.voice.speech.microsoft.com/cognitiveservices/v1?deploymentId={deployment}`"},{id:"D",text:"`https://uksouth.api.cognitive.microsoft.com/speechtotext/v3.0/models/base`"}],answer:"B"},{id:"28",type:"single",content:`**背景**

你正在构建一个用于订单查询的聊天机器人，机器人需要引导用户完成产品设置的分步流程。

**题目**

应使用哪种类型的对话（Dialog）来实现分步引导？`,explanation:`**瀑布对话（Waterfall Dialog）** 专门用于定义一系列有序的步骤（Step），每个步骤完成后自动进入下一步，非常适合引导用户完成有固定流程的任务（如产品设置、表单填写等）。

- 组件对话：用于封装可复用的对话逻辑
- 自适应对话：更灵活，支持事件驱动和条件分支
- 技能对话：用于调用独立部署的技能（Skills）

---`,options:[{id:"A",text:"组件对话（Component Dialog）"},{id:"B",text:"瀑布对话（Waterfall Dialog）"},{id:"C",text:"自适应对话（Adaptive Dialog）"},{id:"D",text:"技能对话（Skill Dialog）"}],answer:"B"},{id:"29",type:"single",content:`**背景**

你正在开发一个监控发动机传感器数据的系统，数据包括转速、角度、温度和压力等多个相关传感器的时间序列数据。系统需要在传感器数据出现异常时生成警报。

**题目**

应在解决方案中使用哪项服务？`,explanation:`本题的关键是"**多个相关传感器**"。当多个传感器之间存在物理关联性时（如发动机的转速、温度和压力通常是相互关联的），**多变量异常检测（Multivariate）** 能够捕获跨变量的联合异常模式，例如"温度正常但压力低"这种组合异常，而单变量检测无法发现这类问题。

单变量异常检测只能分析单条时间序列，适合独立传感器监测。

---`,options:[{id:"A",text:"Azure Monitor 中的应用程序洞察（Application Insights）"},{id:"B",text:"Azure Monitor 中的指标警报（Metric Alerts）"},{id:"C",text:"多变量异常检测（Multivariate Anomaly Detection）"},{id:"D",text:"单变量异常检测（Univariate Anomaly Detection）"}],answer:"C"},{id:"30",type:"single",content:`**背景**

你有一个 Azure OpenAI GPT-3.5 模型，你配置了如下系统消息（System Message）：

> "You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old."

**题目**

这是哪种提示工程（Prompt Engineering）技术的示例？`,explanation:`**预设引导（Priming）** 是指通过系统消息或初始提示来设定模型的角色、行为方式和输出风格，从而引导后续所有响应的一种提示工程技术。示例中通过系统消息告诉模型"扮演数学谜题助手"并"用4岁孩子能理解的方式解释"，这正是 Priming 的典型用法。

- 少样本学习：通过提供示例（input→output 对）来引导模型输出格式
- 思维链：要求模型逐步推理，通常在提示中加入"Let's think step by step"
- Affordance：利用模型对特定上下文的自然联想

---`,options:[{id:"A",text:"少样本学习（Few-shot Learning）"},{id:"B",text:"启示（Affordance）"},{id:"C",text:"思维链（Chain of Thought）"},{id:"D",text:"预设引导（Priming）"}],answer:"D"},{id:"31",type:"single",content:`**背景**

你有一个 Azure OpenAI 聊天机器人。用户反映，机器人在回答知识库范围之外的随意问题时，语气过于随意，缺乏正式感。

以下三种解决方案，哪种能确保机器人对随意问题（spurious questions）提供**正式**回复？

**题目**

方案 A：从 Language Studio 将 chit-chat 源更改为 \`qna_chitchat_professional.tsv\`，重新训练并重新发布模型

方案 B：从 Language Studio 将 chit-chat 源更改为 \`qna_chitchat_friendly.tsv\`，重新训练并重新发布模型

方案 C：从 Language Studio 删除所有 chit-chat 问答对，重新训练并重新发布模型

方案 D：从 Language Studio 为问答对添加替代措辞，重新训练并重新发布模型`,explanation:`- **方案 A（正确）**：\`qna_chitchat_professional.tsv\` 是 Microsoft 提供的预设 chit-chat 数据集，风格为**专业/正式**，适合需要正式语气的场景
- **方案 B（错误）**：\`qna_chitchat_friendly.tsv\` 是**友好/随意**风格，无法解决语气不够正式的问题
- **方案 C（错误）**：删除所有 chit-chat 配对会使机器人无法处理任何随意问题，用户体验更差
- **方案 D（错误）**：添加替代措辞是针对特定问题的改进，无法系统性地改变整体语气风格

> ⚠️ **争议说明**：多版本考题（226、227、228）显示这些方案的答案均为 B（Not meet the goal），但这里方案 A 使用了 professional 数据集，逻辑上应该是正确的方案。请注意原题中方案 A 的考题标号（#238）参考答案为 A（Yes，meets the goal）。各平台资料对此有分歧，请以 Microsoft Learn 官方文档中 chit-chat personality 的说明为准。

---`,options:[{id:"A",text:"方案 A"},{id:"B",text:"方案 B"},{id:"C",text:"方案 C"},{id:"D",text:"方案 D"}],answer:"A"},{id:"32",type:"single",content:`**背景**

你正在构建一个应用，该应用将：
- 自动为上传的图像建议替代文本（Alt Text）
- 检测不适当的图像并拦截
- 最小化开发工作量

**题目**

应为每项需求分别使用哪个 Computer Vision 端点？

从下列选项匹配：`,explanation:"Computer Vision 的 `Analyze Image`（图像分析）API 支持多种视觉特性（Visual Features），通过单次调用即可获取：\n\n- **图像描述（Description）**：生成完整句子描述，可用作 Alt Text\n- **成人内容检测（Adult）**：返回 `isAdultContent` 和 `isRacyContent` 等属性，用于检测不适当图像\n\n使用同一个 `analyzeImage` 端点（指定不同的 `visualFeatures` 参数）可以同时完成两项需求，最小化开发工作量。\n\n---",options:[{id:"A",text:"建议 Alt Text → `describeImage` 端点；检测不当图像 → `Content Moderator`"},{id:"B",text:"建议 Alt Text → `analyzeImage`（Description 功能）；检测不当图像 → `analyzeImage`（Adult 功能）"},{id:"C",text:"建议 Alt Text → `generateThumbnail` 端点；检测不当图像 → `tagImage` 端点"},{id:"D",text:"建议 Alt Text → `tagImage` 端点；检测不当图像 → `detectObjects` 端点"}],answer:"B"},{id:"33",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要将这些图像分类为照片（photograph）、手绘图（drawing）或剪贴画（clipart）。

**题目**

应使用哪个服务端点，以及关注响应中的哪个属性？`,explanation:"Computer Vision 的 `Analyze Image` API 中，`imageType`（图像类型）特性正是用于区分照片、剪贴画和线条画：\n\n- `imageType.clipArtType`：0=非剪贴画，1=可能是，2=普通剪贴画，3=好的剪贴画\n- `imageType.lineDrawingType`：0=非线条画，1=是线条画（手绘图）\n\n此功能无需自定义训练，直接调用即可分类，开发成本最低。Custom Vision 需要自定义训练数据，不符合最小化开发努力的要求。\n\n---",options:[{id:"A",text:"端点：`Custom Vision / classify`；属性：`predictions[].tagName`"},{id:"B",text:"端点：`Computer Vision / analyze`；属性：`imageType.clipArtType`（和 `imageType.lineDrawingType`）"},{id:"C",text:"端点：`Computer Vision / tag`；属性：`tags[].name`"},{id:"D",text:"端点：`Computer Vision / describe`；属性：`description.captions[].text`"}],answer:"B"},{id:"34",type:"single",content:`**背景**

你正在使用 Azure AI Document Intelligence（前身为 Form Recognizer）开发一个分析医疗文档的应用 App1。你发送请求后收到包含 \`confidence\` 值的响应。

**题目**

以下关于 Azure AI Document Intelligence 响应的说法，哪项正确？`,explanation:"Azure AI Document Intelligence 的响应中，`boundingBox`（或新版 API 中的 `polygon`）属性描述了识别到的文本或字段在文档页面上的坐标位置（用于定位显示）。\n\n- 选项 A 错误：`confidence` 为 0 并不意味着未识别，只是置信度极低\n- 选项 C 错误：自定义模型同样会返回 `confidence` 值\n- 选项 D 错误：API 会返回所有识别到的字段，无论置信度如何，由调用方决定如何处理低置信度结果\n\n---",options:[{id:"A",text:"`confidence` 值为 0 表示该字段未被识别"},{id:"B",text:"响应中的 `boundingBox` 属性描述了字段值在文档中的位置"},{id:"C",text:"只有预构建模型（prebuilt model）才会在响应中包含 `confidence` 值"},{id:"D",text:"响应中的所有字段都必须具有大于 0.5 的置信度才会返回"}],answer:"B"},{id:"35",type:"multiple",content:`**背景**

你有一个 Azure Cognitive Search 实例，其中 Azure AI 富化管道对社交媒体帖子进行情感分析。你需要定义一个知识存储（Knowledge Store），包含社交媒体帖子和情感分析结果。

**题目**

知识存储的定义中应包含哪两个字段？`,explanation:'知识存储（Knowledge Store）的 JSON 定义中，`projections` 节点支持三种投影类型：\n\n- `tables`：将数据存储为 Azure 表存储\n- **`objects`**（选项 E）：将 JSON 数据以对象形式存储（适合非结构化 JSON 数据，如社交媒体帖子）\n- **`files`**（选项 D）：将文件（如图像）存储为 blob（适合情感分析等结果的扩展存储）\n\n`storageConnectionString` 是知识存储顶层节点的属性（而非需要"包含"的字段），`storageContainer` 不是标准属性名。\n\n> ⚠️ **争议说明**：微软文档中知识存储的标准投影类型为 `tables`、`objects`、`files`。但原题答案为 D（files）和 E（objects），这与常规理解略有出入（对于社交媒体帖子通常使用 `objects`；`files` 更多用于图像 blob）。请以官方文档的最新 Knowledge Store 定义为准。\n\n---',options:[{id:"A",text:"`storageContainer`"},{id:"B",text:"`tables`"},{id:"C",text:"`storageConnectionString`"},{id:"D",text:"`files`"},{id:"E",text:"`objects`"}],answer:["D","E"]},{id:"36",type:"single",content:`**背景**

你需要构建一个能够识别公司产品和代码名称的聊天机器人，且解决方案必须**最小化开发工作量**。

**题目**

应使用 Azure Cognitive Service for Language 中的哪项功能？`,explanation:`**自定义命名实体识别（Custom NER）** 允许训练一个专门识别特定领域实体（如公司产品名、内部代码名）的模型，这些名称不在通用 NER 的识别范围内，需要自定义训练。

- 实体链接（B）是将文本中的实体链接到 Wikipedia 等知识库，无法处理内部代码名
- 关键短语提取（D）提取的是通用关键词，不能识别特定实体类型
- 自定义文本分类（A）是将文档分类到预定义类别，功能不符

---`,options:[{id:"A",text:"自定义文本分类（Custom Text Classification）"},{id:"B",text:"实体链接（Entity Linking）"},{id:"C",text:"自定义命名实体识别（Custom NER）"},{id:"D",text:"关键短语提取（Key Phrase Extraction）"}],answer:"C"},{id:"37",type:"single",content:`**背景**

你正在为 Azure OpenAI 构建一个聊天机器人，该机器人需要回答旅游预订相关的问题。你需要**最大化机器人响应的准确性**。

**题目**

应采取哪项措施？`,explanation:`要让机器人能够准确回答旅行社特定的预订问题（如特定行程、价格、座位状态），模型必须能够**访问旅行社的最新数据库**。这可以通过 Azure OpenAI 的 "Add your data" 功能（接入 Azure Cognitive Search 索引）来实现。

- 选项 C（Temperature=0）可以使输出更确定性，但若模型没有准确数据，仍然会产生幻觉
- 选项 B/D 可以稍微改善输出质量，但无法替代准确数据的接入
- 选项 A 是根本性解决方案：让模型基于实时/准确数据回答，而非依赖训练时的参数知识

---`,options:[{id:"A",text:"配置模型以包含旅行社数据库中的数据"},{id:"B",text:"将模型的 Top P 参数设置为 0"},{id:"C",text:"将模型的 Temperature 参数设置为 0"},{id:"D",text:"修改模型使用的系统消息，明确要求答案必须准确"}],answer:"A"},{id:"38",type:"single",content:`**背景**

你需要使用 Azure OpenAI 的 embeddings（嵌入）功能，通过**余弦相似度（Cosine Similarity）** 来识别 10,000 个 ASCII 文件中包含特定短语的文件。

**题目**

应使用哪个 Azure OpenAI 模型？`,explanation:"`text-embedding-ada-002` 是专门用于生成文本嵌入（Text Embeddings）的模型，可以将文本转换为高维向量，用于计算余弦相似度来判断文本的语义相似性。这是语义搜索、文档相似度比较的标准做法。\n\nGPT-4 和 GPT-3.5-Turbo 是对话/补全模型（Completion models），不适合用于生成嵌入向量。\n\n> **注意**：2024 年后，微软推出了新版嵌入模型 `text-embedding-3-small` 和 `text-embedding-3-large`，性能优于 `ada-002`，但考题仍以 `ada-002` 作为标准答案。\n\n---",options:[{id:"A",text:"`text-embedding-ada-002`"},{id:"B",text:"`GPT-4`"},{id:"C",text:"`GPT-3.5-Turbo`"},{id:"D",text:"`GPT-4-32k`"}],answer:"A"},{id:"39",type:"single",content:`**背景**

你需要连接 Azure OpenAI 资源（名为 AI1）并使用 REST API 访问。多个应用（App1、App2、App3）需要各自访问 AI1 中部署的不同 GPT-3.5 模型（每个部署针对不同工作负载优化）。

**题目**

为确保每个应用只能访问 AI1 及其对应的特定部署，每个应用应使用什么信息来连接？`,explanation:`Azure OpenAI API 的调用需要：

1. **端点（Endpoint）**：如 \`https://your-resource.openai.azure.com/\`
2. **API 密钥（Key）**：用于身份验证
3. **部署名称（Deployment Name）**：在 Azure OpenAI Studio 中部署模型时指定的名称，用于区分同一资源中的不同模型部署

注意：Azure OpenAI 的 REST API 调用路径中使用的是**部署名称**（而非模型名称），例如：
\`\`\`
POST /openai/deployments/{deployment-name}/chat/completions
\`\`\`

---`,options:[{id:"A",text:"端点（Endpoint）+ 密钥（Key）+ 模型名称（Model Name）"},{id:"B",text:"部署名称（Deployment Name）+ 端点（Endpoint）+ 密钥（Key）"},{id:"C",text:"端点（Endpoint）+ 密钥（Key）+ 模型类型（Model Type）"},{id:"D",text:"部署名称（Deployment Name）+ 密钥（Key）+ 模型名称（Model Name）"}],answer:"B"},{id:"40",type:"single",content:`**背景**

你正在构建一个应用，该应用将接收来自法语和德语呼叫者的电话，需要：

- 将来电语音消息捕获为文字（自动转录）
- 按需将消息以英语回放

**题目**

应使用哪些 Azure 认知服务来分别完成这两项任务？`,explanation:`两项任务的完整流程：

1. **将法语/德语语音转为文字（转录）**：使用 **Speech-to-Text（语音转文字）** 服务
2. **按需以英语回放（意味着要先翻译再合成语音）**：
   - 使用 **Translator（翻译）** 将法语/德语文本翻译成英语
   - 使用 **Text-to-Speech（文字转语音）** 将英文文本合成为语音播放

选项 A 缺少翻译步骤（只有 TTS 无法将法语直接转为英语语音）。正确答案需要 Speech-to-Text + Translator + Text-to-Speech 三个服务的组合。

---`,options:[{id:"A",text:"文字转录：Speech-to-Text；回放英语：Text-to-Speech"},{id:"B",text:"文字转录：Text Analytics（语言检测）；回放英语：Translator"},{id:"C",text:"文字转录：Speech-to-Text；回放英语：Translator（翻译后）+ Text-to-Speech（合成语音）"},{id:"D",text:"文字转录：Translator；回放英语：Text-to-Speech"}],answer:"C"},{id:"41",type:"single",content:`**背景**

你正在开发一个应用，该应用将通过 Azure AI Language 服务处理敏感的客户数据。你需要确保只有特定的 Azure 资源才能访问 Language 服务，且解决方案必须**最小化管理工作量**。

**题目**

应在解决方案中配置什么？`,explanation:`**虚拟网络规则（Virtual Network Rules）** 允许你为 Azure AI 服务配置特定的虚拟网络和子网访问许可，只有来自指定虚拟网络的请求才能访问该服务。这是限制特定 Azure 资源访问认知服务的最简单方式，配置简单、管理工作量小。

- Application Gateway 是 Web 应用防火墙/负载均衡器，用于保护 Web 应用而非 AI 服务
- IPsec 规则适用于 VPN 隧道加密，配置复杂
- 虚拟网络网关用于 VPN 或 ExpressRoute 连接，非本题场景

---`,options:[{id:"A",text:"Azure Application Gateway"},{id:"B",text:"IPsec 规则"},{id:"C",text:"虚拟网络网关（Virtual Network Gateway）"},{id:"D",text:"虚拟网络规则（Virtual Network Rules）"}],answer:"D"},{id:"42",type:"multiple",content:`**背景**

你有一个 Azure AI 搜索 Web 应用，在审查活动日志时发现搜索查询量远超预期，怀疑**查询密钥（Query Key）已泄露**。

你需要在**最大限度减少应用停机时间**的前提下，阻止未授权访问并确保用户仅有只读访问权限。

**题目**

应按顺序执行哪三项操作？`,explanation:`正确的零停机更换流程：

1. **添加新查询密钥（A）**：在 Azure 门户为同一个搜索服务生成一个新的查询密钥，此时两个密钥均有效，应用不中断
2. **切换应用使用新密钥（B）**：更新应用配置（如环境变量、连接字符串），使其使用新密钥进行身份验证
3. **删除旧的泄露密钥（C）**：确认应用正常后，删除被泄露的旧密钥，阻止未授权访问

查询密钥仅有读权限，不涉及管理员密钥；无需禁用整个资源。

---`,options:[{id:"A",text:"添加一个新的查询密钥"},{id:"B",text:"将应用更改为使用新的查询密钥"},{id:"C",text:"删除被泄露的旧查询密钥"},{id:"D",text:"重新生成所有管理员密钥"},{id:"E",text:"禁用 Azure AI Search 资源"}],answer:["A","B","C"]},{id:"43",type:"single",content:`**背景**

你正在构建一个聊天机器人，需要使用 Content Moderator 服务对用户消息进行内容审核。你需要识别消息中包含的**色情/性暗示语言**。

**题目**

应关注 Content Moderator Text Moderation API 响应中的哪个类别得分？`,explanation:`Content Moderator 的 Text Moderation API 返回三个类别的得分：

| 类别 | 含义 |
|------|------|
| Category1 | 明确的成人内容（sexually explicit） |
| **Category2** | **性暗示内容（sexually suggestive）** |
| Category3 | 侮辱性/攻击性语言 |

题目要求识别"色情/性暗示"（sexually explicit language），对应 **Category2**（性暗示）或 Category1（明确成人），但性暗示语言最接近 Category2 的定义范围。

> ⚠️ **争议说明**：Content Moderator 已于 2024 年 2 月宣布将在 2027 年退役，建议迁移到 **Azure AI Content Safety**。新服务使用 Hate、Violence、SelfHarm、Sexual 等类别代替原有的三分类体系。

---`,options:[{id:"A",text:"Category1（成人内容得分）"},{id:"B",text:"Category2（性暗示内容得分）"},{id:"C",text:"Category3（侮辱性语言得分）"},{id:"D",text:"`personalData`（个人数据字段）"}],answer:"B"},{id:"44",type:"single",content:`**背景**

你使用 C# 编写了一个调用 Azure AI Language 关键短语提取（Key Phrase Extraction）API 的函数，并调用时传入字符串：

> "The quick brown fox jumps over the lazy dog"

**题目**

执行关键短语提取后，将输出哪些内容？`,explanation:`Key Phrase Extraction（关键短语提取）API 会从文本中识别出在语义上最重要的短语，并过滤掉停用词（如 "The"、"over"、"the" 等功能词）。

对于 "The quick brown fox jumps over the lazy dog" 这个句子，提取出的关键短语通常为：
- **quick brown fox**（动作主体描述）
- **lazy dog**（动作对象描述）

注意：
- 返回的是关键短语，而非完整句子
- 停用词（the、over、jumps 等）不会被作为关键词返回
- 关键短语提取结果**没有置信度分数**

---`,options:[{id:"A",text:"Jumps over the"},{id:"B",text:"The quick brown fox jumps over the lazy dog"},{id:"C",text:"quick brown fox, lazy dog"},{id:"D",text:"The quick"}],answer:"C"},{id:"45",type:"single",content:`**背景**

你正在构建一个包含 1,000 张扫描手写调查问卷图像的分析方案。这些问卷**没有固定版式**（non-consistent layout），且内容为手写。你使用 Azure AI Document Intelligence 资源（AIdoc1）来提取数据，目标是**最小化开发工作量**。

**题目**

你应将图像上传到哪里，并使用哪种模型类型？`,explanation:`- **上传位置**：Azure AI Document Intelligence 训练数据必须存储在 **Azure 存储账户**（Blob 容器）中，这是训练自定义模型的唯一支持来源
- **模型类型**：
  - **自定义模板模型（Custom template）**：适用于固定版式、结构一致的表单（如标准化发票）
  - **自定义神经模型（Custom neural）**：适用于**版式不固定、包含手写内容**的文档，能处理语义层面的理解而非仅依赖位置特征

由于问卷版式不一致且为手写，应选用 **Custom neural 模型**。

---`,options:[{id:"A",text:"上传到：Azure Cosmos DB；模型类型：自定义模板模型（Custom template）"},{id:"B",text:"上传到：Azure 存储账户；模型类型：自定义神经模型（Custom neural）"},{id:"C",text:"上传到：Azure 存储账户；模型类型：自定义模板模型（Custom template）"},{id:"D",text:"上传到：Azure 文件共享；模型类型：预构建 ID 模型（prebuilt-idDocument）"}],answer:"B"},{id:"46",type:"single",content:`**背景**

你正在使用 Azure OpenAI Studio 中的 **Completions playground**（GPT-3.5 Turbo 模型）。你有一段代码，需要让模型对代码进行**解释说明**，且解决方案必须**最小化成本**。

**题目**

应该怎么做？`,explanation:`最小化成本意味着**不更换模型**（GPT-4-32k 成本更高）、不增加额外复杂度。

在代码块后直接以注释形式添加问题提示 \`// what does function F do?\` 是一种低成本且有效的提示工程技巧：
- 代码注释格式自然符合代码上下文
- 模型能理解这是对代码的解释请求
- 不需要增加额外 Token 开销

更改 Temperature 参数不会改变模型的理解能力，只影响输出随机性。更换为 GPT-4-32k 成本大幅增加，不符合"最小化成本"要求。

---`,options:[{id:"A",text:"将模型更换为 GPT-4-32k"},{id:"B",text:"在提示词（Prompt）中添加 `// what does function F do?`"},{id:"C",text:"在提示词中添加 `function F(explanation)`"},{id:"D",text:"将 Temperature 参数设置为 1"}],answer:"B"},{id:"47",type:"single",content:`**背景**

你在 Azure 中构建了一个使用 Azure OpenAI 模型的聊天机器人。你需要确保机器人能够**阻止试图绕过内置安全功能的问题**（即防止越狱攻击 / Jailbreak）。

**题目**

应实现 Azure AI Content Safety 的哪项功能？`,explanation:`**越狱风险检测（Jailbreak risk detection）** 专门用于识别用户试图通过特殊构造的提示词来绕过 AI 模型安全限制的行为，例如要求模型"扮演没有限制的 AI"等攻击模式。

- 受保护材料检测：检测输出中是否含有受版权保护的内容
- 文本内容审核：检测仇恨、暴力等一般有害内容
- 监控在线活动：用于查看历史日志和趋势分析

---`,options:[{id:"A",text:"受保护材料文本检测（Protected material text detection）"},{id:"B",text:"越狱风险检测（Jailbreak risk detection）"},{id:"C",text:"在线活动监控（Monitor online activity）"},{id:"D",text:"文本内容审核（Moderate text content）"}],answer:"B"},{id:"48",type:"multiple",content:`**背景**

你正在构建一个 Azure AI Chat 解决方案，使用 Chat playground（Azure AI Studio）。该聊天机器人需要以**简洁、正式的商务语言**生成文本，同时满足以下要求：

- 降低语言模型的运行成本
- 保持聊天机器人历史窗口（history window）大小不变

**题目**

应配置哪两项设置？`,explanation:`- **系统消息（A）**：通过在系统提示中明确要求"使用简洁正式的商务语言"，可直接引导模型的输出风格，这是最直接的控制方式
- **降低最大响应 Token 数（B）**：简洁回答意味着每次回复使用的 Token 更少，降低 \`max_tokens\` 限制可以直接减少每次调用消耗的 Token 数量，从而**降低成本**。同时，历史窗口大小不变，整体上下文消耗保持稳定

更换为小模型（E）虽然也能降低成本，但题目要求在不改变历史窗口大小的前提下降低成本，更换模型属于较大改动且题意不明确允许。

---`,options:[{id:"A",text:"系统消息（System message）：指定使用简洁正式语言"},{id:"B",text:"最大响应 Token 数（Max response tokens）：降低此值"},{id:"C",text:"Top P 参数：降低此值"},{id:"D",text:"Temperature 参数：设置为 0"},{id:"E",text:"部署的模型版本：切换为更小的模型（如 GPT-3.5 而非 GPT-4）"}],answer:["A","B"]},{id:"49",type:"multiple",content:`**背景**

你有一个 Azure AI Search 富化管道（Enrichment Pipeline），其中包含一个**自定义技能（Custom Skill）**，用于对文档执行语言检测和情感分析。

**题目**

Azure AI Search 在索引文档时，会按照什么顺序依次处理各个阶段？（将所有阶段排序）`,explanation:`Azure AI Search 索引器处理文档的完整顺序：

1. **文档破解（Document Cracking）**：读取源数据（如 Blob 中的 PDF），提取原始文本和元数据
2. **字段映射（Field Mapping）**：将数据源的原始字段映射到索引器的中间表示
3. **技能执行（Skill Execution）**：按技能集定义的顺序执行所有 AI 技能（包括内置技能和自定义技能）
4. **输出字段映射（Output Field Mapping）**：将技能执行产生的富化数据映射到目标索引字段
5. **索引写入（Index Write）**：将所有映射后的数据写入 Azure AI Search 索引

---`,options:[{id:"A",text:"文档破解（Document Cracking）——从源格式中提取内容"},{id:"B",text:"字段映射（Field Mapping）——将原始字段映射到索引"},{id:"C",text:"技能执行（Skill Execution）——执行 AI 富化技能集"},{id:"D",text:"输出字段映射（Output Field Mapping）——将富化结果映射到索引字段"},{id:"E",text:"索引写入（Index Write）——将数据写入搜索索引"}],answer:["A","B","C","D","E"]},{id:"50",type:"single",content:`**背景**

你有一个包含 10,000 个 PDF 文档的训练数据集，文档内容包括扫描的书籍、漫画和杂志。

你正在构建一个解决方案，需要使用 **Language Studio** 训练一个自定义模型，将每个文档分类为书籍、漫画或杂志之一，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目类型？`,explanation:`本题需要将文档**分类为三个类别**（书籍、漫画、杂志）。由于一个文档可能跨多个类别（例如一本图文并茂的漫画书既是书籍也是漫画），使用 **多标签分类（Multi-label classification）** 最为合适。

- 自定义提取模型：用于从文档中抽取特定字段（如日期、金额），不是分类任务
- 自定义 NER：用于识别命名实体，不是文档级分类
- 图像分类模型：本题处理的是 PDF 文本内容，不是图像分类任务

Language Studio 支持在 Azure AI Language 中直接创建和训练文本分类项目，开发工作量最小。

---`,options:[{id:"A",text:"自定义提取模型（Custom extraction model）"},{id:"B",text:"多标签分类项目（Multi-label classification project）"},{id:"C",text:"自定义命名实体识别项目（Custom NER project）"},{id:"D",text:"多标签图像分类模型（Multi-label image classification model）"}],answer:"B"},{id:"51",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 解决方案，该方案包含一个索引，其中有一个博客文章集合，每篇文章包含 \`category\`（分类）字段。

你需要对这些文章进行索引，且要求：
- 在搜索结果中包含 \`category\` 字段的值
- 用户可以对 \`category\` 字段中的词语进行搜索
- 用户可以基于分类进行下钻过滤（Drill-down filtering / Faceted navigation）

**题目**

应为 \`category\` 字段配置哪些索引属性？`,explanation:`将三个需求逐一对应：

| 需求 | 所需属性 |
|------|---------|
| 在搜索结果中显示 category 值 | **Retrievable**（可检索/返回） |
| 用户可对 category 字段进行关键词搜索 | **Searchable**（可搜索） |
| 支持基于分类的下钻过滤（分面导航） | **Facetable**（可分面） |

选项 A（Searchable + Facetable + Retrievable）完整涵盖了三个需求。

- Filterable 允许在查询中使用 \`$filter\`，但不能实现分面导航（Facet）
- Sortable 允许按字段排序，不是本题需求

---`,options:[{id:"A",text:"Searchable、Facetable、Retrievable"},{id:"B",text:"Retrievable、Filterable、Sortable"},{id:"C",text:"Retrievable、Facetable、Key"},{id:"D",text:"Searchable、Sortable、Retrievable"}],answer:"A"},{id:"52",type:"single",content:`**背景**

你正在构建一个应用，需要识别文本消息中实时使用的语言。

**题目**

应使用哪个 SDK 包来检测消息中的语言？`,explanation:"语言检测（Language Detection）属于 **Azure AI Translator** 服务的功能之一，对应的 NuGet 包为 `Azure.AI.Translation.Text`。\n\n该包提供 `TextTranslationClient`，通过调用 `DetectLanguage` 方法可以识别文本中使用的语言。\n\n- `Microsoft.CognitiveServices.Speech`：用于语音转文字 / 文字转语音，不是文本语言检测\n- `Azure.AI.Translation.Document`：用于文档整体翻译（批量文档翻译服务）\n- `Azure.AI.Translation.Speech`：不是标准包名\n\n> ⚠️ **争议说明**：语言检测功能同时也存在于 Azure AI Language 服务（`Azure.AI.TextAnalytics` 包）中。题目 344 的场景（社交媒体实时消息语言识别）给出的答案是 **D（Azure AI Language）**，与本题答案不同。两个服务均可检测语言，但 Language 服务在语言检测上的准确率和覆盖语种更全面。请结合具体考题场景判断。\n\n---",options:[{id:"A",text:"`Azure.AI.Translation.Text`"},{id:"B",text:"`Microsoft.CognitiveServices.Speech`"},{id:"C",text:"`Azure.AI.Translation.Document`"},{id:"D",text:"`Azure.AI.Translation.Speech`"}],answer:"A"},{id:"53",type:"multiple",content:`**背景**

你的博客平台允许用户发布评论，部分评论包含歧视性语言等有害内容。

你需要构建一个**原型解决方案**来检测有害内容，且解决方案必须**最小化开发工作量**。

**题目**

应执行哪两项操作？`,explanation:`构建有害内容检测原型的最简流程：

1. **创建 Azure AI Content Safety 资源（B）**：这是使用 Content Safety Studio 的前提，需要先在 Azure 门户创建资源
2. **使用 Content Safety Studio 的文本内容审核功能（A）**：该功能可以对输入的文本进行仇恨、暴力、色情、自伤等类别的检测，支持直接粘贴文本进行测试，开发工作量最小

不需要 Azure OpenAI 资源来进行内容审核原型构建。受保护材料检测（E）用于版权保护内容检测，与歧视性语言检测不符。

---`,options:[{id:"A",text:'登录 Content Safety Studio，选择"审核文本内容（Moderate text content）"'},{id:"B",text:"从 Azure 门户创建 Azure AI Content Safety 资源"},{id:"C",text:"从 Azure 门户创建 Azure OpenAI 资源"},{id:"D",text:'登录 Azure AI Foundry，选择"安全 + 安全性"'},{id:"E",text:'登录 Content Safety Studio，选择"受保护材料检测"'}],answer:["A","B"]},{id:"54",type:"single",content:`**背景**

你有 100,000 张图像，需要构建一个应用来完成以下任务：

- **识别图像中的路标，并提取路标上的文字**
- **分析提取的文字，识别其中提到的知名地点**

解决方案必须**最小化开发工作量**。

**题目**

这两项任务应分别使用什么服务？`,explanation:`- **提取路标文字**：使用 **Computer Vision 的 Read API（OCR）** 从图像中提取文字内容，该 API 专为复杂图像中的文字提取优化
- **识别知名地点**：使用 **Azure AI Language 的命名实体识别（NER）**，识别文本中的地理位置（Location 类别）是 NER 的标准功能，无需自定义训练

注意 NER（C）与实体链接（B）的区别：
- **NER**：识别实体类型（如"这是一个地点"）
- **实体链接（Entity Linking）**：将识别到的实体链接到 Wikipedia 等外部知识库

题目只要求"识别知名地点"，NER 已足够，且开发工作量更小。

---`,options:[{id:"A",text:"提取路标文字→Custom Vision；识别知名地点→Azure AI Language NER"},{id:"B",text:"提取路标文字→Computer Vision（Read API）；识别知名地点→Azure AI Language（Entity Linking）"},{id:"C",text:"提取路标文字→Computer Vision（Read API）；识别知名地点→Azure AI Language（Named Entity Recognition）"},{id:"D",text:"提取路标文字→Form Recognizer；识别知名地点→Azure AI Language（Key Phrase Extraction）"}],answer:"C"},{id:"55",type:"single",content:`**背景**

你需要为 Azure AI Search 构建一个可以识别**地理位置**的索引方案。

**题目**

应在技能集（Skillset）中包含哪个内置技能？`,explanation:`**Entity Recognition Skill（实体识别技能）** 是 Azure AI Search 的内置技能，可以从文本中识别多种实体类型，包括：
- Person（人物）
- Location（地理位置）✅
- Organization（组织）
- Quantity、DateTime、URL、Email 等

通过将 \`categories\` 参数设置为 \`["Location"]\`，可以专门提取地理位置实体。

Entity Linking Skill 用于将实体链接到 Wikipedia，功能更重但不是基础地理位置识别的最简方案。

---`,options:[{id:"A",text:"Azure OpenAI Embedding Skill"},{id:"B",text:"Document Extraction Skill（文档提取技能）"},{id:"C",text:"Entity Linking Skill（实体链接技能）"},{id:"D",text:"Entity Recognition Skill（实体识别技能）"}],answer:"D"},{id:"56",type:"single",content:`**背景**

你正在构建一个产品支持聊天机器人，支持文档存储在多个 PDF 文件中的知识库。解决方案必须**最小化开发工作量和成本**。

**题目**

应在解决方案中使用什么？`,explanation:`**Azure AI Language 自定义问题解答（Custom Question Answering）** 是专为构建 FAQ 型聊天机器人设计的服务：

- 可以直接上传 PDF 文档作为知识来源，自动提取问答对
- 无需复杂的模型训练
- 提供基于置信度的答案匹配
- 成本和开发工作量均最小

Azure OpenAI（选项 D）虽然功能更强，但配置复杂（需要设置向量数据库、嵌入模型等），成本更高，不符合"最小化"的要求。

---`,options:[{id:"A",text:"Azure AI Language 对话语言理解（CLU）"},{id:"B",text:"Azure AI 语言检测"},{id:"C",text:"Azure AI Language 自定义问题解答（Custom Question Answering）"},{id:"D",text:"Azure OpenAI"}],answer:"C"},{id:"57",type:"single",content:`**背景**

你需要构建一个代理（Agent），该代理需要访问**过去 90 天内发布的公开可访问数据**。

你正在使用 Azure AI Agent Service 构建该代理。

**题目**

应在代码中配置哪种工具类型来实现该能力？`,explanation:`要访问**近期（90天内）公开发布的网络数据**，需要实时网络搜索能力。**BingGroundingTool** 使用 Bing Search API 来检索最新的公开网络内容，可以获取模型训练截止日期之后发布的信息。

- FileSearchTool：用于搜索已上传到代理的文件
- CodeInterpreterTool：用于执行代码和数据分析
- AzureAISearchTool：用于搜索私有的 Azure AI Search 索引，不是实时网络数据

---`,options:[{id:"A",text:"`FileSearchTool`（文件搜索工具）"},{id:"B",text:"`BingGroundingTool`（Bing 搜索接地工具）"},{id:"C",text:"`CodeInterpreterTool`（代码解释器工具）"},{id:"D",text:"`AzureAISearchTool`（Azure AI 搜索工具）"}],answer:"B"},{id:"58",type:"multiple",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理，该代理需要使用**函数调用（Function Calling）**，并满足以下要求：

- 所有与指令匹配的函数都必须被触发
- 如果用户未提供必要参数，代理必须主动向用户索要这些参数

你使用 Semantic Kernel 构建该代理。

**题目**

在代码中，应配置哪两个关键设置来满足上述要求？`,explanation:`在 Semantic Kernel 中：

- **\`FunctionChoiceBehavior.Auto()\`**：允许内核自动决定何时调用插件中的函数，当指令与函数匹配时自动触发——满足"所有匹配函数都被触发"的需求
- **\`FunctionChoiceBehavior.Required()\`**（或配合参数验证）：确保代理在调用函数前验证所有必填参数，若用户未提供则主动请求——满足"向用户索要必要参数"的需求

具体实现中，这两个设置配合使用可以实现完整的函数调用工作流。

---`,options:[{id:"A",text:"`FunctionChoiceBehavior.Auto()`（自动函数选择行为）"},{id:"B",text:"`FunctionChoiceBehavior.Required()`（强制函数调用行为）"},{id:"C",text:"`ToolCallBehavior.EnableKernelFunctions`"},{id:"D",text:"`PromptExecutionSettings.AllowParallelToolCalls = true`"},{id:"E",text:"`KernelArguments` 中设置 `AutoInvokeKernelFunctions = true`"}],answer:["A","B"]},{id:"59",type:"single",content:`**背景**

你有一个 Azure AI Document Intelligence 资源（AIdoc1，标准 S0 层）。你有以下文件：

- File1：PDF 格式，5 页
- File2：JPEG 格式
- File3：DOCX 格式
- File4：PNG 格式
- File5：BMP 格式

**题目**

你需要**训练一个自定义提取模型**。哪些文件可以上传到 Document Intelligence Studio？`,explanation:`Azure AI Document Intelligence 自定义模型训练支持的**文件格式**包括：
- **PDF**（文字型或扫描型）✅
- **JPEG / JPG** ✅
- **PNG** ✅
- **TIFF** ✅
- **BMP**：⚠️ 部分版本不支持，通常不在官方列表内

**不支持**的格式：
- **DOCX**（Word 文档）❌

因此，File1（PDF）、File2（JPEG）和 File4（PNG）可以上传；File3（DOCX）不支持；File5（BMP）视具体 API 版本而定，标准上不在支持列表。

> ⚠️ **争议说明**：不同版本 API 对 BMP 的支持状态有所不同，建议以当前 Azure 官方文档为准。

---`,options:[{id:"A",text:"File1 和 File2 仅"},{id:"B",text:"File2、File4 和 File5 仅"},{id:"C",text:"File1、File2 和 File4 仅"},{id:"D",text:"File1 和 File5 仅"},{id:"E",text:"File1、File2、File3、File4 和 File5 全部"}],answer:"C"},{id:"60",type:"single",content:`**背景**

你正在构建一个将用于机动车辆中的文字转语音（Text-to-Speech）应用。你需要**优化合成语音输出的质量**，使其在驾驶环境中更自然清晰。

**题目**

应配置 Speech Synthesis Markup Language（SSML，语音合成标记语言）中的哪个属性？`,explanation:'`<voice>` 元素的 **`effect` 属性** 专门用于针对特定使用场景优化语音输出效果。其中 `effect="eq_car"` 可以优化语音在车内环境的听觉效果（均衡车载音响特性），使合成语音在机动车辆中更清晰自然。\n\n- `style`（A）：用于调整语音情感风格（如开心、悲伤等）\n- `level`（B）：用于强调语音中某些词汇的重音\n- `pitch`（C）：用于调整音调高低\n\n---',options:[{id:"A",text:"`<mstts:express-as>` 元素的 `style` 属性"},{id:"B",text:"`<emphasis>` 元素的 `level` 属性"},{id:"C",text:"`<prosody>` 元素的 `pitch` 属性"},{id:"D",text:"`<voice>` 元素的 `effect` 属性"}],answer:"D"},{id:"61",type:"single",content:`**背景**

你正在构建一个多标签文本分类解决方案，聊天机器人需要将用户输入**分类到多个动态类别**中，且这些类别在推理时才被定义（而不是在训练时固定）。

**题目**

应使用哪项服务来对输入进行分类？`,explanation:`**Azure AI Language 自定义文本分类（Custom Text Classification）** 允许在 Language Studio 中定义分类标签并训练模型，支持单标签和多标签分类。对于"类别在推理时定义"的需求，自定义分类通过在系统提示或配置中动态指定类别标签来实现灵活分类。

- Azure OpenAI 文本分类（B）：通过提示词实现零样本（Zero-shot）分类，更灵活，但这里题目指定了使用语言服务
- 自定义 NER（C）：用于实体抽取，不是文档分类任务

> ⚠️ **争议说明**：若题目强调"动态定义类别"和"推理时定义"，Azure OpenAI 的零样本分类可能是更好的答案。但题目明确提到"AI Language 服务"，故选 D。

---`,options:[{id:"A",text:"Azure OpenAI 文本摘要（Text Summarization）"},{id:"B",text:"Azure OpenAI 文本分类（Text Classification）"},{id:"C",text:"Azure AI Language 自定义命名实体识别（Custom NER）"},{id:"D",text:"Azure AI Language 自定义文本分类（Custom Text Classification）"}],answer:"D"},{id:"62",type:"single",content:`**背景**

你需要部署一个 Azure OpenAI 资源，供 App1 使用，且希望确保只有 App1 可以访问该资源中的特定模型部署。

**题目**

为 App1 提供访问权限应使用什么，App1 连接到特定部署时应使用什么？`,explanation:`根据微软最佳实践：

- **提供访问**：使用 **Microsoft Entra ID（前 Azure AD）的 Bearer 令牌**（通过托管标识 Managed Identity 获取），可以通过 Azure RBAC 精确控制哪个应用可以访问哪个资源，避免长期有效的 API 密钥泄露风险
- **连接到特定部署**：Azure OpenAI REST API 的路径格式为 \`/openai/deployments/{deployment-name}/...\`，必须使用**部署名称（Deployment Name）**而非模型名称来指定使用哪个部署

> ⚠️ **争议说明**：在实际使用中，API 密钥（选项 A/C）也是有效的认证方式，操作更简单。但"solution must ensure that only the apps can access"通常暗示需要更安全的 RBAC 控制，微软推荐使用 Entra ID 令牌。选项 B 是微软推荐的安全最佳实践答案。

---`,options:[{id:"A",text:"提供访问：API 密钥；连接部署：模型名称"},{id:"B",text:"提供访问：Bearer 令牌（Entra ID 身份验证）；连接部署：部署名称"},{id:"C",text:"提供访问：API 密钥；连接部署：部署名称"},{id:"D",text:"提供访问：Bearer 令牌；连接部署：模型类型"}],answer:"B"},{id:"63",type:"single",content:`**背景**

你有一个 Azure AI Language 资源（Resource1）和存储账户（storage1）。你在 storage1 中创建了 Blob 容器（container1）并上传了示例图像文件。

你需要使用 cURL 命令验证 Resource1 是否能识别**可能含有暴力内容的图像**。

**题目**

cURL 命令中，应使用什么端点和什么内容类型标头？`,explanation:"Azure AI Content Safety 对图像进行安全审核的 REST API 端点为：\n```\nPOST {endpoint}/contentsafety/image:analyze?api-version=2024-09-01\n```\n\n请求体为 JSON 格式，包含图像 URL 或 Base64 编码数据，以及需要检测的类别（如 Violence、Hate、Sexual、SelfHarm），Content-Type 应为 `application/json`。\n\n不应使用 Computer Vision 的 `/vision/v3.1/analyze` 端点，该端点不提供 Content Safety 类别检测。\n\n---",options:[{id:"A",text:"端点：`/contentsafety/image:analyze`；Content-Type：`application/json`"},{id:"B",text:"端点：`/contentsafety/text:analyze`；Content-Type：`multipart/form-data`"},{id:"C",text:"端点：`/vision/v3.1/analyze`；Content-Type：`application/json`"},{id:"D",text:"端点：`/contentsafety/image:analyze`；Content-Type：`multipart/form-data`"}],answer:"A"},{id:"64",type:"single",content:`**背景**

你需要构建一个应用，该应用将比较多个文档之间的**语义相似性（Semantic Similarity）**，需要返回代表每个文档 Token 的**数值向量**，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪个 Azure OpenAI 模型？`,explanation:`**Embeddings（嵌入）模型** 专门用于将文本转换为高维数值向量，这些向量捕获了文本的语义含义。通过计算两个向量之间的余弦相似度，可以衡量文档之间的语义相似性。

- GPT-3.5 / GPT-4 是对话补全模型，不直接输出向量
- DALL-E 是图像生成模型
- 标准嵌入模型（如 \`text-embedding-ada-002\` 或更新的 \`text-embedding-3-small\`）直接输出向量，API 简单，开发工作量最小

---`,options:[{id:"A",text:"GPT-3.5"},{id:"B",text:"Embeddings（如 text-embedding-ada-002）"},{id:"C",text:"DALL-E"},{id:"D",text:"GPT-4"}],answer:"B"},{id:"65",type:"single",content:`**背景**

你有一个 Azure OpenAI 自定义模型，需要为其准备**微调（Fine-tuning）训练数据**，并使用 OpenAI CLI 数据准备工具处理。

你有以下文件：
- File1.tsv
- File2.xml
- File3.pdf
- File4.xlsx

**题目**

哪些文件可以上传到 OpenAI CLI 数据准备工具？`,explanation:`Azure OpenAI 微调训练数据支持的文件格式为：
- **JSONL**（首选格式，每行一个 JSON 对象）
- **TSV**（制表符分隔）✅

不支持的格式：
- XML ❌
- PDF ❌
- XLSX ❌

OpenAI CLI 数据准备工具（\`openai tools fine_tunes.prepare_data\`）会自动将 TSV 等格式转换为 JSONL 格式，因此 **File1.tsv** 是唯一可以使用的文件。

---`,options:[{id:"A",text:"仅 File1.tsv"},{id:"B",text:"仅 File2.xml"},{id:"C",text:"仅 File3.pdf"},{id:"D",text:"仅 File4.xlsx"},{id:"E",text:"File1.tsv 和 File4.xlsx"}],answer:"A"},{id:"66",type:"single",content:`**背景**

你正在开发一个使用 Azure AI Vision 客户端库的应用，需要通过 API 判断图像是**剪贴画（clipart）还是线条画（line drawing）**。

**题目**

在 API 请求中，应使用哪种 HTTP 方法，以及哪个 \`visualFeatures\` 参数值？`,explanation:"Azure AI Vision 的图像分析（Analyze Image）端点：\n\n- **HTTP 方法**：**POST**（分析包含图像数据或 URL 的请求体时，需使用 POST）\n- **visualFeatures 参数**：**`imageType`**（返回 `clipArtType` 和 `lineDrawingType` 两个属性，分别表示剪贴画可能性和线条画可能性）\n\n`description` 返回图像的自然语言描述；`tags` 返回内容标签；`objects` 检测对象位置——均不能区分图像类型。\n\n---",options:[{id:"A",text:"GET；`description`"},{id:"B",text:"POST；`imageType`"},{id:"C",text:"POST；`tags`"},{id:"D",text:"GET；`objects`"}],answer:"B"},{id:"67",type:"multiple",content:`**背景**

你正在为 Azure AI Language 服务的自定义问题解答（Custom Question Answering）项目导入问答对。

**题目**

哪两种文件格式可以用于导入？`,explanation:`Azure AI Language 自定义问题解答支持导入以下格式：

- **TSV**（制表符分隔值文件）✅
- **CSV**（逗号分隔值文件）✅
- URL（从 FAQ 网页自动提取）
- PDF/DOCX（自动提取问答对）

Excel（.xlsx）、JSON 和 LU 文件不是该功能的直接导入格式（LU 是 Bot Framework 格式，JSON 需要特定 API 格式）。

---`,options:[{id:"A",text:"Excel"},{id:"B",text:"TSV"},{id:"C",text:"JSON"},{id:"D",text:"LU 文件"},{id:"E",text:"CSV"}],answer:["B","E"]},{id:"68",type:"single",content:`**背景**

你有一个企业产品支持手册，需要构建一个基于该手册的聊天机器人，解决方案必须**最小化开发工作量和成本**。

**题目**

应使用哪种服务？`,explanation:`**Azure AI Language 自定义问题解答** 是构建 FAQ 型知识库聊天机器人的最简方案：

- 直接上传支持文档（PDF、URL、TSV 等）
- 自动提取问答对，无需复杂开发
- 提供内置的置信度评分和多轮对话支持
- 成本低（按请求计费，无需 GPU 资源）

相比之下：
- Azure OpenAI GPT-4（C）需要配置 Azure AI Search、向量索引等，开发复杂度和成本更高
- Phi-3 微调（A）需要准备训练数据，成本和时间最高
- Document Intelligence（D）用于文档字段提取，不是问答型聊天机器人

---`,options:[{id:"A",text:"Azure AI Phi-3-medium（含微调）"},{id:"B",text:"Azure AI Language 自定义问题解答（Custom Question Answering）"},{id:"C",text:"Azure OpenAI GPT-4（含 Azure AI Search 接地数据）"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"B"},{id:"69",type:"single",content:`**背景**

你需要为一个解决方案构建内容管道：需要对 PDF 中的表格数据进行分析，并将相关字段导出到数据库。解决方案中有两种文档类型：

- **内部支出申请授权表单**（Internal expenditure request authorization forms）
- **供应商发票**（Supplier invoices）

解决方案必须**最小化开发工作量**。

**题目**

这两种文档类型应分别使用哪种 Azure AI 服务/模型？`,explanation:`- **供应商发票**：Azure AI Document Intelligence 提供**预构建发票模型（prebuilt-invoice）**，可以直接提取供应商名称、金额、日期、行项目等标准字段，无需自定义训练，开发工作量最小
- **内部授权表单**：这是公司内部定制的表单，格式因公司而异，没有对应的预构建模型，需要**自定义模型**来识别特定字段

因此，两者结合使用可以在最小化工作量的同时处理两种场景。

---`,options:[{id:"A",text:"授权表单→预构建 Invoice 模型；供应商发票→预构建 Invoice 模型"},{id:"B",text:"授权表单→自定义模型；供应商发票→预构建 Invoice 模型"},{id:"C",text:"授权表单→预构建 Document 模型；供应商发票→预构建 Layout 模型"},{id:"D",text:"授权表单→自定义模型；供应商发票→自定义模型"}],answer:"B"},{id:"70",type:"single",content:`**背景**

你正在开发一个应用，需要对文档中的电话号码和邮箱地址**进行掩码（Masking）处理**，以保护个人隐私信息（PII）。

你使用 Azure AI Language 服务实现此功能。

**题目**

在代码中应调用哪个 API 方法，并传入哪个参数来实现 PII 遮蔽？`,explanation:'Azure AI Language 的 **PII 识别（RecognizePiiEntities）** API 专门用于识别文档中的个人可识别信息（如电话号码、邮箱、姓名、证件号等），并在响应中返回遮蔽后的文本（`redactedText`）。\n\n默认情况下，该 API 会识别所有支持的 PII 类别，包括 PhoneNumber 和 Email。`domainFilter = "phi"` 是用于医疗健康信息（Protected Health Information）过滤的特定参数。\n\n`RecognizeEntities` 是通用实体识别，不提供 PII 遮蔽功能。\n\n---',options:[{id:"A",text:'`RecognizeEntities`，设置 `piiCategories = ["PhoneNumber", "Email"]`'},{id:"B",text:'`RecognizePiiEntities`，设置 `domainFilter = "phi"`'},{id:"C",text:"`RecognizePiiEntities`，不设置额外参数（默认识别所有 PII 类型）"},{id:"D",text:"`AnalyzeSentiment`，设置 `showOpinionMining = true`"}],answer:"C"},{id:"71",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理，需要确保代理能访问近期（过去 90 天内）公开发布的数据。

**题目**

在使用 Azure AI Foundry Agent Service 构建代理的代码中，应如何完成工具配置？`,explanation:`**BingGroundingTool** 通过 Bing Search API 使代理能够访问实时的公开网络数据，包括 90 天内发布的新闻、文章和更新。这是 Azure AI Foundry Agent Service 中接入实时互联网数据的标准工具。

在代码中，通常通过 Bing Search 连接资源（Connection）来配置此工具：

\`\`\`python
bing_tool = BingGroundingTool(connection_id=bing_connection.id)
\`\`\`

其他选项（FileSearch、CodeInterpreter、AzureAISearch）均只能访问预先准备好的静态数据，无法获取近期公开发布的新内容。

---`,options:[{id:"A",text:"使用 `FileSearchTool`，并指定文件 ID"},{id:"B",text:"使用 `BingGroundingTool`，配置 Bing Search API 连接"},{id:"C",text:"使用 `CodeInterpreterTool`，并上传本地数据文件"},{id:"D",text:"使用 `AzureAISearchTool`，连接到一个已索引的知识库"}],answer:"B"},{id:"72",type:"single",content:`**背景**

你有 100,000 张图像，需要构建一个应用，完成以下任务：

- **识别图像中的路标，并生成每个路标的简短描述**
- **分析这些描述，生成关于不同类型路标及其出现频率的报告**

解决方案必须**最小化成本**。

**题目**

这两个任务应分别使用什么服务？`,explanation:`- **生成路标描述**：使用 **Computer Vision Image Analysis** 中的 \`Description\` 功能（\`visualFeatures=Description\`），可以为图像生成自然语言描述，无需自定义训练，成本低
- **生成报告（统计分析）**：使用 **Azure AI Language 关键短语提取（Key Phrase Extraction）** 分析描述文本，提取路标类型关键词，然后统计频率生成报告；Language 服务比 Azure OpenAI 成本更低

使用 Azure OpenAI 虽然功能更强，但成本更高，不符合"最小化成本"的要求。

---`,options:[{id:"A",text:"生成路标描述→Custom Vision；生成报告→Azure AI Language"},{id:"B",text:"生成路标描述→Computer Vision（Image Analysis / Description 功能）；生成报告→Azure AI Language（Key Phrase Extraction）"},{id:"C",text:"生成路标描述→Computer Vision（Read API）；生成报告→Azure OpenAI"},{id:"D",text:"生成路标描述→Azure AI Content Understanding；生成报告→Azure AI Language（Key Phrase Extraction）"}],answer:"B"},{id:"73",type:"single",content:`**背景**

你正在构建一个文字转语音（Text-to-Speech）应用，使用**自定义神经语音（Custom Neural Voice）**。

你需要创建一个 SSML 文件，要求语音配置满足：
- 表达**平静的语调**
- 模仿**年轻成年女性的声音**

**题目**

应在 SSML 代码中配置哪两个关键元素/属性？`,explanation:`要实现"平静语调 + 年轻成年女性声音"：

1. **声音选择**：在 \`<voice>\` 标签中指定具有年轻女性特征的神经语音（如 \`en-US-AriaNeural\`、\`en-US-JennyNeural\` 等），这些语音经过训练以模仿特定年龄性别的声音
2. **风格调整**：使用 SSML 的 \`<mstts:express-as style="calm">\` 标签设置平静（calm）情感风格

完整 SSML 示例：
\`\`\`xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-US">
  <voice name="en-US-AriaNeural">
    <mstts:express-as style="calm">
      Your text here.
    </mstts:express-as>
  </voice>
</speak>
\`\`\`

---`,options:[{id:"A",text:'使用 `<voice name="young-adult-female">`；在 `<mstts:express-as style="calm">` 中包裹文本'},{id:"B",text:'使用 `<prosody pitch="-10%">`；使用 `<voice gender="female">`'},{id:"C",text:'使用 `<emphasis level="reduced">`；使用 `<voice age="25">`'},{id:"D",text:'使用 `<mstts:express-as style="calm">`；选择 `ShimmerNeural`（或其他年轻女性神经语音）'}],answer:"A"},{id:"74",type:"single",content:`**背景**

你有一个 Azure AI Search 解决方案，需要在其中添加一个**自定义技能**，使其能够通过 Azure AI Document Intelligence 识别并从发票中提取属性，供 App1 使用。

**题目**

应在解决方案中包含哪个服务？`,explanation:`**Azure AI Document Intelligence（前 Form Recognizer）** 提供预构建的发票模型（prebuilt-invoice），可以提取发票中的结构化字段（如供应商、金额、日期、行项目等）。

在 Azure AI Search 的富化管道中，可以将 Document Intelligence 封装为**自定义技能（Custom Skill）**，通过 Web API 接口调用，将发票字段提取结果添加到搜索索引中。

Immersive Reader 用于提高阅读可访问性；Custom Vision 用于图像分类/对象检测，不适合结构化文档字段提取。

---`,options:[{id:"A",text:"Azure OpenAI"},{id:"B",text:"Azure AI Immersive Reader"},{id:"C",text:"Azure AI Document Intelligence"},{id:"D",text:"Azure Custom Vision"}],answer:"C"},{id:"75",type:"single",content:`**背景**

你有 1,000 段视频文件，需要对视频进行**情感分析**，使用 Azure AI Content Understanding 项目。解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目模板？`,explanation:`**媒体资产管理（Media asset management）** 模板是 Azure AI Content Understanding 中用于对视频内容进行全面分析的模板，包括：
- 情感分析
- 关键帧提取
- 语音转文字
- 内容标签生成

它提供了对视频媒体资产进行端到端理解的能力，适合大量视频文件的批量分析场景，开发工作量最小。

- 视频镜头分析：专注于视频镜头的切换检测和分析
- 广告分析：针对广告内容的品牌和产品识别

---`,options:[{id:"A",text:"视频镜头分析（Video shot analysis）"},{id:"B",text:"媒体资产管理（Media asset management）"},{id:"C",text:"广告分析（Advertising）"}],answer:"B"},{id:"76",type:"multiple",content:`**背景**

你有一个 Azure AI Search 资源（AlSearch1），其索引包含一个向量字段。

你需要：
- 使用 Azure AI Agent Service 部署一个新代理
- 将 AlSearch1 索引连接到该代理
- 验证索引与代理的集成

**题目**

应按顺序执行哪四项操作？`,explanation:`部署并验证 AI Agent 与 Azure AI Search 集成的完整流程：

1. **在 Azure AI Foundry 中创建新项目（A）**：Azure AI Agent Service 运行在 AI Foundry 项目中
2. **创建 AlSearch1 的连接（C）**：在 AI Foundry 项目中配置与 Azure AI Search 资源的连接，提供端点和 API 密钥
3. **创建代理并配置 AzureAISearchTool（B）**：使用已创建的连接初始化搜索工具，并将其添加到代理的工具列表中
4. **测试代理（D）**：发送测试查询验证代理能否正确检索 Search 索引中的数据

---`,options:[{id:"A",text:"在 Azure AI Foundry 中创建新项目"},{id:"B",text:"在项目中创建一个代理，配置 AzureAISearchTool 工具"},{id:"C",text:"为 AlSearch1 创建一个连接（Connection）"},{id:"D",text:"测试代理，向代理发送涉及 AlSearch1 索引数据的查询"},{id:"E",text:"将 AlSearch1 的 API 密钥添加到 Azure Key Vault"}],answer:["A","C","B","D"]},{id:"77",type:"single",content:`**背景**

你有一个 Azure AI 搜索（Azure AI Search）资源（Search1）和一个使用它进行内容索引的应用（App1）。

你需要确保 Search1 的安全，满足以下要求：
- 防止来自互联网的直接访问
- 限制每个应用只能执行特定查询

**题目**

应分别采取什么措施来满足这两个需求？`,explanation:`- **防止互联网访问**：为 Azure AI Search 创建**私有端点（Private Endpoint）**，使其只在虚拟网络内可访问，完全阻断公共互联网流量
- **限制每个应用的查询范围**：为不同应用创建独立的**查询密钥（Query Keys）**，不同密钥可以通过索引级别权限控制各应用能访问哪些文档/字段

虽然 IP 防火墙规则也可以限制访问，但私有端点提供更彻底的网络隔离。RBAC 角色控制的是管理层面的权限，不能精确限制查询内容。

---`,options:[{id:"A",text:"防止互联网访问→配置 IP 防火墙规则；限制查询→创建独立的查询密钥"},{id:"B",text:"防止互联网访问→部署私有端点（Private Endpoint）；限制查询→创建独立的查询密钥"},{id:"C",text:"防止互联网访问→配置网络安全组（NSG）；限制查询→使用 Azure AD 条件访问"},{id:"D",text:"防止互联网访问→部署私有端点；限制查询→配置 Azure RBAC 角色"}],answer:"B"},{id:"78",type:"single",content:`**背景**

你正在构建一个处理来自法语和德语来电的通话处理系统。系统必须：

- 将来电语音消息捕获为文字（自动转录，保留原始语言）
- 按需将消息以**英语**回放

**题目**

应使用哪些 Azure 认知服务来完成这两项任务？`,explanation:`完整流程：

1. **捕获语音（法语/德语）→ 文字**：使用 **Speech-to-Text** 服务将法语或德语语音转换为对应语言的文字
2. **以英语回放**（先翻译，再合成语音）：
   - 使用 **Translator** 将法语/德语文字翻译成英语
   - 使用 **Text-to-Speech** 将英文文字合成为语音输出

选项 A 缺少翻译步骤，无法将非英语文本直接以英语播放。完整的流程必须包含翻译环节。

---`,options:[{id:"A",text:"捕获语音→Speech-to-Text（语音转文字）；英语回放→Text-to-Speech（文字转语音）"},{id:"B",text:"捕获语音→Speech-to-Text；英语回放→Translator + Text-to-Speech"},{id:"C",text:"捕获语音→Text Analytics（语言检测）；英语回放→Translator"},{id:"D",text:"捕获语音→Translator；英语回放→Text-to-Speech"}],answer:"B"},{id:"79",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 和 Semantic Kernel 构建一个代理，该代理使用自定义插件。你需要确保代理满足：

- 使用函数调用（Function Calling）
- 所有匹配指令的函数必须被触发
- 如果用户未提供函数所需的必要参数，代理必须主动向用户索取

**题目**

在 Semantic Kernel 代码中，以下哪个设置组合可以满足上述所有要求？`,explanation:`在 Semantic Kernel 中实现完整函数调用工作流的推荐方式：

- **\`ToolCallBehavior.AutoInvokeKernelFunctions\`**：允许内核自动识别并调用已注册的插件函数，当 LLM 决定需要调用某个函数时自动执行
- 配合参数验证逻辑：若函数定义中标记了必要参数（\`Required\`），且用户未提供，模型会生成追问请求，代理会自动向用户索取缺少的参数

\`FunctionChoiceBehavior.Required()\` 强制模型必须调用函数，但可能导致不必要的函数调用。\`Auto()\` 允许模型自由决定。具体实现取决于 Semantic Kernel 版本的 API 设计。

> ⚠️ **争议说明**：Semantic Kernel 的 API 在不断演进，具体的设置名称和枚举值在不同版本中有所变化。请以当前稳定版 Semantic Kernel 文档为准。

---`,options:[{id:"A",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.Auto()`；`AutoInvokeKernelFunctions = false`"},{id:"B",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.Required()`；`AutoInvokeKernelFunctions = true`"},{id:"C",text:"`ToolCallBehavior = ToolCallBehavior.AutoInvokeKernelFunctions`（自动调用）配合必要参数验证"},{id:"D",text:"`FunctionChoiceBehavior = FunctionChoiceBehavior.None()`；手动处理工具调用"}],answer:"C"},{id:"80",type:"single",content:`**背景**

你需要为企业 DevOps 流水线（Pipeline1）添加一个步骤，用于**识别已创建的 Azure AI 服务账户**。解决方案必须**最小化开发工作量**。

**题目**

应运行哪个 Azure CLI 命令？`,explanation:"`az cognitiveservices account show` 命令用于**显示特定 Azure 认知服务账户的详细信息**，包括端点、密钥、SKU、区域等，适合在 CI/CD 流水线中用于识别已创建的资源。\n\n- `az resource link`：管理资源之间的链接关系\n- `az account list`：列出订阅信息，不是认知服务账户\n- `az cognitiveservices account network-rule`：管理认知服务的网络规则\n\n---",options:[{id:"A",text:"`az resource link`"},{id:"B",text:"`az account list`"},{id:"C",text:"`az cognitiveservices account network-rule`"},{id:"D",text:"`az cognitiveservices account show`"}],answer:"D"},{id:"81",type:"multiple",content:`**背景**

你正在构建一个社交媒体应用，允许用户分享图像。你需要确保不当图像内容被识别并阻止，且解决方案必须**最小化开发工作量**。

**题目**

哪两种工具可以实现该需求？（每个正确答案都是完整解决方案）`,explanation:`两种最小化开发工作量的图像内容审核方案：

- **Azure AI Vision（C）**：提供图像分析功能，包括成人内容检测（Adult detection），可以判断图像是否包含成人内容或色情内容，内置功能无需自定义训练
- **Azure AI Content Safety（D）**：专门提供内容安全检测，支持对图像中的 Sexual（性内容）、Violence（暴力）、Hate（仇恨）、SelfHarm（自伤）等类别进行检测，API 简单、开发工作量极小

Custom Vision（B）需要自定义训练，开发工作量较大；Document Intelligence（E）用于文档字段提取，不适用于内容审核。

---`,options:[{id:"A",text:"Microsoft Defender for Cloud Apps"},{id:"B",text:"Azure AI Custom Vision"},{id:"C",text:"Azure AI Vision"},{id:"D",text:"Azure AI Content Safety"},{id:"E",text:"Azure AI Document Intelligence"}],answer:["C","D"]},{id:"82",type:"multiple",content:`**背景**

你需要在 Azure 中配置一个 Language Understanding 服务（LUIS），并通过 Microsoft Entra ID（前 Azure AD）令牌来验证应用的身份。

**题目**

为确保应用能够使用 Entra ID 令牌对 Azure AI Speech 服务进行身份验证，应执行哪两项操作？`,explanation:`> ⚠️ **高争议题目**：原题答案为 B（创建私有端点）和 C（申请 X.509 证书），但这两个选项组合在逻辑上存在明显问题：
> - 使用 Entra ID 令牌认证 Azure AI 服务通常只需要**配置自定义子域（D）** 并进行 Entra ID 应用注册，不需要 X.509 证书
> - 私有端点是网络隔离措施，与令牌认证方式无直接关系

> 微软官方文档显示，对于 Azure Cognitive Services 的 Entra ID 令牌认证，关键步骤是**配置自定义子域（Custom Subdomain）**，因为令牌请求需要通过自定义子域端点。

> 建议以 Azure 官方文档"Authenticate with Microsoft Entra ID"为最终参考，此题答案可能因考题版本不同而有差异。

---`,options:[{id:"A",text:"创建条件访问策略（Conditional Access Policy）"},{id:"B",text:"创建私有端点（Private Endpoint）"},{id:"C",text:"申请 X.509 证书"},{id:"D",text:"配置自定义子域（Custom Subdomain）"},{id:"E",text:"启用虚拟网络服务端点（Virtual Network Service Endpoint）"}],answer:["B","C"]},{id:"83",type:"single",content:`**背景**

你正在设计一个内容管理系统，需要优化用户的阅读体验，特别是针对**有阅读困难或学习差异（如阅读障碍症，dyslexia）** 的用户。

**题目**

应在解决方案中包含哪项 Azure 服务？`,explanation:`**Azure AI Immersive Reader（沉浸式阅读器）** 是专为改善阅读可访问性设计的服务，特别适合有阅读障碍、学习差异或正在学习语言的用户。它提供：

- 大字体、间距调整等视觉优化
- 文本朗读（TTS）
- 音节分割、词性高亮
- 图片词汇解释
- 翻译功能

这些功能直接针对阅读理解困难问题，是处理此类场景的专用服务。

---`,options:[{id:"A",text:"Azure AI Translator（翻译器）"},{id:"B",text:"Azure AI Document Intelligence"},{id:"C",text:"Azure AI Immersive Reader（沉浸式阅读器）"},{id:"D",text:"Azure AI Language"}],answer:"C"},{id:"84",type:"single",content:`**背景**

你有一个本地文件夹，包含以下视频文件（假设格式和大小如下）：

- File1：WMV 格式，34 分钟，400 MB
- File2：AVI 格式，90 分钟，1,200 MB
- File3：MOV 格式，300 分钟，980 MB
- File4：MP4 格式，80 分钟，1,800 MB

**题目**

哪些文件可以上传到 Azure AI Video Indexer 网站？`,explanation:`Azure AI Video Indexer 网站上传的限制：
- **支持格式**：MP4、MOV、WMV、AVI、M2TS 等
- **最大时长**：4 小时（240 分钟）
- **最大文件大小**：通过网站上传为 **2 GB**

按此规则逐一检查：
- **File1**（WMV，34 分钟，400 MB）✅ 格式、时长、大小均符合
- **File2**（AVI，90 分钟，1,200 MB）❌ 文件大小 1.2 GB < 2 GB，格式支持，**但部分资料显示 AVI 不在支持列表内** → 视考题版本而定
- **File3**（MOV，300 分钟，980 MB）✅ MOV 支持，980 MB < 2 GB，300 分钟 = 5 小时 > 4 小时... ❌ 超出时长限制

> ⚠️ **高争议题目**：实际上按上述规则，File1（WMV，34 分钟，400 MB）和 File2（AVI，90 分钟，1.2 GB）才能满足所有限制。但原题答案为 E（File1 和 File3），说明原题中 File3 的参数设置与本文描述的可能不同（原始 PDF 中有图表，文字提取可能存在误差）。请以原始题目中的具体参数为准，核心知识点是：了解 Video Indexer 的格式支持列表、2 GB 大小限制和 4 小时时长限制。

---`,options:[{id:"A",text:"File1、File2 和 File4 仅"},{id:"B",text:"File1 和 File2 仅"},{id:"C",text:"File1、File2 和 File3 仅"},{id:"D",text:"File1、File2、File3 和 File4 全部"},{id:"E",text:"File1 和 File3 仅"}],answer:"E"},{id:"85",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（CS1），需要创建一个**自定义类别（Custom Category）** 来检测特定类型的有害内容。

**题目**

在 cURL 命令中，应使用哪个 HTTP 方法和端点来添加自定义类别？`,explanation:"在 Azure AI Content Safety 中，创建自定义类别使用：\n\n```\nPOST {endpoint}/contentsafety/text/categories?api-version=2024-09-15-preview\n```\n\n请求体为 JSON，包含类别名称、描述和示例数据（positive/negative examples）。\n\n使用 `POST` 创建新资源是 REST API 的标准约定；`PUT` 通常用于更新已知 ID 的资源；`PATCH` 用于部分更新。\n\n---",options:[{id:"A",text:"`POST /contentsafety/text/categories`"},{id:"B",text:"`PUT /contentsafety/image/categories/{categoryName}`"},{id:"C",text:"`PATCH /contentsafety/text/categories/{categoryName}`"},{id:"D",text:"`POST /contentsafety/text/categories/{categoryName}`"}],answer:"A"},{id:"86",type:"single",content:`**背景**

你正在开发一个使用 Azure AI Language 服务分析文档的应用，需要**识别文档中的行业特定技术术语**。解决方案必须**最小化开发工作量**。

**题目**

应使用什么功能？`,explanation:`**自定义命名实体识别（Custom NER）** 允许训练模型识别特定领域的专有术语（如行业技术术语、内部产品名称、专业词汇等），这些术语不在通用 NER 的标准实体类型中。

- 关键短语提取（A）提取通用重要短语，不能精确识别特定实体类型
- CLU（C）用于意图识别和对话理解，不是文档实体提取
- 语言检测（D）只检测文本语言，不识别术语

虽然 Custom NER 需要准备训练数据，但在三个选项中，它是唯一能完成"识别特定行业术语"任务的功能。

---`,options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"对话语言理解（Conversational Language Understanding，CLU）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"87",type:"single",content:`**背景**

你有一个 Azure AI Search 索引（AlSearch1），其中包含向量字段。你需要将一篇用户输入的文章与现有文档进行**语义相似度比较**。

**题目**

应使用哪种 Azure OpenAI 模型生成文章的向量表示？`,explanation:`\`text-embedding-ada-002\`（或更新的 \`text-embedding-3-small\`/\`text-embedding-3-large\`）是 Azure OpenAI 提供的**文本嵌入模型**，专门将文本转换为语义向量，用于：

- 语义相似度搜索
- 向量数据库匹配
- 文档聚类

生成的向量可以与 Azure AI Search 的向量索引配合，实现向量相似度搜索（Vector Search）。其他选项均为对话/生成模型，不输出向量。

---`,options:[{id:"A",text:"`text-embedding-ada-002`"},{id:"B",text:"`gpt-4-vision-preview`"},{id:"C",text:"`text-davinci-003`"},{id:"D",text:"`dall-e-3`"}],answer:"A"},{id:"88",type:"single",content:`**背景**

你正在构建一个解决方案，需要对人力资源（HR）政策（存储为 PDF 格式）进行问题解答，且要求**对同一问题每次都返回完全相同的答案**。解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中使用哪个服务？`,explanation:`**Azure AI Language 自定义问题解答（Custom Question Answering）** 对于匹配到的问答对会**始终返回相同的确定性答案**，不会因随机性参数（如 Temperature）而产生不同输出。

Azure OpenAI（C）基于大语言模型，即使 Temperature=0，对同一问题的回答也可能略有不同（特别是复杂问题）。此外，Azure OpenAI 的配置和成本更高。

自定义问答服务的答案直接来自用户定义的问答对数据库，完全确定性，且开发工作量最小。

---`,options:[{id:"A",text:"Azure AI Language（自定义问题解答）"},{id:"B",text:"Azure Machine Learning"},{id:"C",text:"Azure OpenAI"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"A"},{id:"89",type:"single",content:`**背景**

你有以下文件，需要使用 Azure AI Content Understanding 进行分析：

- File1.pdf
- File2.jpg
- File3.docx
- File4.webp
- File5.png

**题目**

哪些文件可以使用 Azure AI Content Understanding 进行分析？`,explanation:`Azure AI Content Understanding 支持的文件格式包括：
- **PDF** ✅
- **JPEG / JPG** ✅
- **DOCX**（Word 文档）✅
- **PNG** ✅
- **TIFF** ✅
- **MP4**（视频）✅
- **MP3**（音频）✅

**不支持**的格式：
- **WebP（File4.webp）** ❌：虽然 WebP 是常见图像格式，但目前不在 Content Understanding 的支持列表中

因此 File1（PDF）、File2（JPG）、File3（DOCX）和 File5（PNG）均可分析，但 File4（WebP）不支持。

---`,options:[{id:"A",text:"File1.pdf 和 File3.docx 仅"},{id:"B",text:"File1.pdf、File2.jpg 和 File5.png 仅"},{id:"C",text:"File1.pdf、File2.jpg 和 File3.docx 仅"},{id:"D",text:"File1.pdf、File2.jpg、File3.docx 和 File5.png 仅"},{id:"E",text:"File1.pdf、File2.jpg、File3.docx、File4.webp 和 File5.png 全部"}],answer:"D"},{id:"90",type:"single",content:`**背景**

你正在构建一个应用，需要从文本消息中使用 Azure AI Language 的**实体链接（Entity Linking）** 功能，为文本中提及的实体**提供参考链接到 Wikipedia 等支持文章**。

**题目**

应使用哪个 Azure AI Language 功能？`,explanation:`**实体链接（Entity Linking）** 是 Azure AI Language 的功能，可以：

1. 识别文本中提到的已知实体（如地点、人物、组织、概念等）
2. 将这些实体与 Wikipedia（或其他知识库）中的对应词条**建立链接**，返回相关 URL

这正是题目要求的"为文本添加 Wikipedia 参考链接"的功能。

示例：文本"我们参观了伦敦的大英博物馆"中，"大英博物馆"会被链接到其 Wikipedia 页面。

---`,options:[{id:"A",text:"实体链接（Entity Linking）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"Azure AI Content Safety"},{id:"D",text:"关键短语提取（Key Phrase Extraction）"}],answer:"A"},{id:"91",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 构建一个代理（Agent），用于在 Azure AI Foundry 中运行。

你有以下需求：
- 代理能够理解用户的书面和口头问题
- 生成问题的答案
- 以语音形式输出答案

**题目**

应使用哪个工具来创建代理项目？`,explanation:`**Azure AI Foundry** 是微软提供的统一 AI 开发平台，专门用于：
- 创建和管理 AI Agent 项目
- 集成多种 Azure AI 服务（Language、Speech、OpenAI 等）
- 构建端到端 AI 解决方案

Azure AI Agent Service 在 AI Foundry 中进行配置和部署，这是创建具有语音输入/输出能力代理的统一入口。

> ⚠️ **争议说明**：原题（355）给出的答案为 C（Speech Studio）。但从场景描述来看，该代理需要"理解用户的书面和口头问题 + 生成答案 + 以语音输出"这三个复合能力，仅用 Speech Studio 无法完成全部配置。Azure AI Foundry 是更完整的答案。请以官方考试题目为最终参考。

---`,options:[{id:"A",text:"Language Studio"},{id:"B",text:"Azure AI Foundry"},{id:"C",text:"Speech Studio"},{id:"D",text:"Azure 门户"}],answer:"B"},{id:"92",type:"single",content:`**背景**

你需要准备 Azure OpenAI 模型的微调（Fine-tuning）训练数据，有 500 组提示-补全对（Prompt-Completion Pairs）。

**题目**

训练数据文件应使用哪种格式？`,explanation:`Azure OpenAI 微调训练数据的**标准格式为 JSONL**（每行一个 JSON 对象），格式如下：

\`\`\`jsonl
{"messages": [{"role": "system", "content": "..."}, {"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]}
{"messages": [{"role": "system", "content": "..."}, {"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]}
\`\`\`

每行包含一个完整的对话示例（Chat format），符合 OpenAI 微调数据要求。

XML、CSV、TSV 均不是 Azure OpenAI 微调数据的支持格式。

---`,options:[{id:"A",text:"XML"},{id:"B",text:"JSONL（JSON Lines）"},{id:"C",text:"CSV"},{id:"D",text:"TSV"}],answer:"B"},{id:"93",type:"multiple",content:`**背景**

你构建了一个使用 Azure AI Language 自定义问题解答服务的聊天机器人，知识库基于内部支持 FAQ 文档训练。

你发现聊天机器人**无法对常见问题提供正确答案**。你需要提高响应准确性，且解决方案必须**最小化开发工作量**。

**题目**

应在 Language Studio 中按顺序执行哪三项操作？`,explanation:`使用主动学习提高问答准确性的完整流程：

1. **启用主动学习（A）**：系统开始根据用户查询自动建议改进的问答对
2. **查看并接受建议（B/C）**：在 Language Studio 中审核主动学习推荐的替代问法，接受合适的建议
3. **保存并训练（D）**：将修改保存并重新训练知识库
4. **重新发布（E）**：发布使修改生效

主动学习通过分析用户真实查询来改进知识库，是成本最低、工作量最小的改进方式。

---`,options:[{id:"A",text:"启用主动学习（Enable Active Learning）"},{id:"B",text:"查看主动学习建议（Review active learning suggestions）"},{id:"C",text:"接受建议并添加为替代问题"},{id:"D",text:"保存并训练知识库"},{id:"E",text:"重新发布知识库"}],answer:["A","B","C","D","E"]},{id:"94",type:"single",content:`**背景**

你正在构建一个语言学习解决方案，需要推荐哪些 Azure 服务来完成以下任务：

- **任务1**：分析教师提交的课程计划，提取关键字段（如课时、必读文本）
- **任务2**：分析学习内容，为文本中的常用词汇或短语提供图片示意

解决方案必须**最小化开发工作量**。

**题目**

这两个任务应分别使用什么 Azure 服务？`,explanation:`- **任务1（提取课程计划关键字段）**：**Azure AI Document Intelligence** 可以从结构化或半结构化文档中提取特定字段（如日期、文本列表等），利用预构建或自定义模型提取"课时"、"必读文本"等字段，开发工作量小
- **任务2（为词汇配图）**：**Azure AI Immersive Reader（沉浸式阅读器）** 内置了"图片词汇表（Picture Vocabulary）"功能，可以为文本中的常用词汇自动显示相关图片，这正是为语言学习者设计的功能，无需额外开发

---`,options:[{id:"A",text:"任务1→Azure AI Document Intelligence；任务2→Azure AI Vision（Image Analysis）"},{id:"B",text:"任务1→Azure AI Language（Key Phrase Extraction）；任务2→Azure AI Custom Vision"},{id:"C",text:"任务1→Azure AI Document Intelligence；任务2→Azure AI Immersive Reader"},{id:"D",text:"任务1→Azure AI Language（Named Entity Recognition）；任务2→Azure AI Vision"}],answer:"C"},{id:"95",type:"single",content:`**背景**

你有一个 Azure AI Document Intelligence 资源（AIdoc1，Standard S0 层），需要使用**业务名片模型 v2.1** 分析名片图像的应用（App1）。

你需要**更新 App1 以支持二维码（QR Code）识别**。解决方案必须**最小化管理工作量**。

**题目**

第一步应该做什么？`,explanation:`Azure AI Document Intelligence 的**业务名片模型 v3.0** 新增了对二维码（QR Code）的支持，而 v2.1 不包含此功能。

直接将 App1 中调用的 API 版本从 v2.1 升级到 v3.0 即可获得 QR 码识别能力，无需重新部署自定义模型或实现全新模型，管理工作量最小。

---`,options:[{id:"A",text:"部署自定义模型"},{id:"B",text:"实现 Read 模型"},{id:"C",text:"将业务名片模型升级到 v3.0"},{id:"D",text:"实现合同（Contract）模型"}],answer:"C"},{id:"96",type:"single",content:`**背景**

你的应用需要使用 Azure AI Speech 服务和 Language API，且需要通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的 Azure 资源？`,explanation:`**Azure AI Foundry service**（原 Azure AI Services 的升级形态）提供了通过单一端点和凭据访问多种 Azure AI 服务的能力，包括 Speech 和 Language API。

> ⚠️ **注意**：此题与第 24 题（答案为 Azure Cognitive Services 多服务资源）类似，但答案不同，因为该题明确提到了 Azure AI Foundry service。这反映了 Azure AI 服务的品牌重组：Azure Cognitive Services → Azure AI Services → Azure AI Foundry。功能上等同，但使用的名称随平台演进而变化。

---`,options:[{id:"A",text:"Azure AI Language 资源"},{id:"B",text:"Azure AI Foundry service（AI Foundry 服务）"},{id:"C",text:"Azure AI Speech 资源"},{id:"D",text:"Azure AI Foundry Content Safety"}],answer:"B"},{id:"97",type:"single",content:`**背景**

你有一个 Azure AI Search 解决方案，包含一个知识存储，其中存有非结构化 JSON 数据和扫描 PDF 文档中的文本。

**题目**

对于以下两种数据类型，应分别使用哪种投影类型？

- 非结构化 JSON 数据
- 扫描 PDF 中提取的图像/文件`,explanation:`Azure AI Search 知识存储的三种投影类型：

| 投影类型 | 用途 |
|---------|------|
| **Object projection（对象投影）** | 将 JSON 数据存储为 Azure Blob 中的 JSON 文件，适合非结构化/半结构化数据 |
| **File projection（文件投影）** | 将二进制文件（如图像、规范化图像）存储到 Blob 存储，适合 PDF 中提取的图像 |
| Table projection（表投影） | 将数据存储为 Azure 表存储中的行，适合结构化/表格数据 |

---`,options:[{id:"A",text:"JSON 数据→表投影（Table projection）；PDF 图像→对象投影（Object projection）"},{id:"B",text:"JSON 数据→对象投影（Object projection）；PDF 图像→文件投影（File projection）"},{id:"C",text:"JSON 数据→文件投影（File projection）；PDF 图像→表投影（Table projection）"},{id:"D",text:"JSON 数据→对象投影（Object projection）；PDF 图像→对象投影（Object projection）"}],answer:"B"},{id:"98",type:"single",content:`**背景**

你正在构建一个处理用户输入文档并识别潜在暴力相关图像内容的解决方案，使用 Azure AI Content Safety 资源（Resource1）和存储账户（storage1）中的样本图像集。

**题目**

提交图像给 Content Safety API 进行暴力检测时，期望的输出结果是什么？

对于一张仅包含圆形（circle）的测试图像，暴力内容检测的得分应该是多少？`,explanation:`Azure AI Content Safety 图像检测 API 返回每个类别的**严重性得分（Severity Score）**，范围为 0-7（整数）：
- **0**：未检测到该类别内容
- **2**：轻微
- **4**：中等
- **6**：严重
- **7**：非常严重

对于只包含圆形的图像，**暴力内容得分应为 0**（没有暴力内容）。

> ⚠️ **注意**：原题（322）的答案为 A 和 C 两个选项，这可能是因为题目询问了多个类别或多种场景的输出。暴力检测为 0，某些其他内容类别可能也为 0（非 7）。请结合原始题目图表内容理解。

---`,options:[{id:"A",text:"0"},{id:"B",text:"0.0"},{id:"C",text:"7"},{id:"D",text:"100"}],answer:"A"},{id:"99",type:"single",content:`**背景**

你正在开发一个应用，使用 Azure AI Language 服务对文本中的城市名称进行命名实体识别（NER）检测。

**题目**

在调用 \`RecognizeEntities\` 方法时，以下说法是否正确？

假设调用时传入文本："Our tour of London included a visit to Buckingham Palace."

该函数的输出将是什么？`,explanation:`命名实体识别（NER）API 会从文本中识别具有语义意义的命名实体，如：
- **地理位置（Location）**：London、Buckingham Palace

对于句子 "Our tour of London included a visit to Buckingham Palace."：
- "London"：地理位置实体 ✅
- "Buckingham Palace"：地理位置实体（著名建筑/地点）✅
- "tour"、"visit" 等词：动词/普通名词，不是命名实体，NER 不会返回

因此输出为 **London 和 Buckingham Palace**。

---`,options:[{id:"A",text:"Our tour of London included a visit to Buckingham Palace"},{id:"B",text:"London 和 Tour（仅这两项）"},{id:"C",text:"Tour 和 visit（仅这两项）"},{id:"D",text:"London 和 Buckingham Palace（仅这两项）"}],answer:"D"},{id:"100",type:"single",content:`**背景**

你正在构建一个 Azure AI Foundry 项目中的代理，需要利用 Azure AI Search 索引数据来回答用户问题。你需要将 Azure AI Search 索引连接到代理。

**题目**

为了让代理能够访问 Azure AI Search 中 GPT-4 向量索引的数据，在 Azure AI Foundry 中应为代理配置哪种工具类型？`,explanation:`**AzureAISearchTool** 是 Azure AI Agent Service 中专门用于连接 Azure AI Search 索引的工具。它允许代理在对话过程中**检索 Search 索引中的相关文档**，实现 RAG（检索增强生成）模式：

\`\`\`python
from azure.ai.projects.models import AzureAISearchTool

search_tool = AzureAISearchTool(
    index_connection_id=connection.id,
    index_name="your-index-name"
)
\`\`\`

- FileSearchTool：用于搜索已上传到代理的文件（非 Search 索引）
- BingGroundingTool：用于实时网络搜索
- CodeInterpreterTool：用于代码执行和数据分析

---`,options:[{id:"A",text:"`FileSearchTool`"},{id:"B",text:"`BingGroundingTool`"},{id:"C",text:"`AzureAISearchTool`"},{id:"D",text:"`CodeInterpreterTool`"}],answer:"C"},{id:"101",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI GPT-4 模型的聊天机器人，需要确保机器人**不会返回包含仇恨言论的答案**。

**题目**

应为 GPT-4 模型配置什么？`,explanation:`**内容过滤器（Content Filter）** 是 Azure OpenAI 的内置安全机制，可以对模型的输入和输出进行实时检测，自动拦截包含仇恨言论（Hate）、暴力（Violence）、色情（Sexual）、自伤（Self-harm）等有害内容的请求和响应。

- Frequency penalty（A）：用于减少重复词汇，影响输出多样性，与内容安全无关
- 滥用监控（B）：用于监控 API 使用是否符合使用政策，是事后监控而非实时拦截
- Temperature（D）：控制输出随机性，不影响内容安全

> ⚠️ **争议说明**：原题（248）给出的答案为 B（Abuse Monitoring），理由是"滥用监控"可以检测并标记包含有害内容的请求。但微软官方文档明确指出，**内容过滤器（Content Filter）** 才是主动防止有害内容输出的机制，滥用监控更偏向于合规审计。建议以 Azure OpenAI 内容安全文档为准，答案倾向于 C。

---`,options:[{id:"A",text:"Frequency penalty（频率惩罚）参数"},{id:"B",text:"滥用监控（Abuse Monitoring）"},{id:"C",text:"内容过滤器（Content Filter）"},{id:"D",text:"Temperature 参数"}],answer:"C"},{id:"102",type:"single",content:`**背景**

你有一个名为 AI1 的 Azure OpenAI 资源，其中部署了三个 GPT-3.5 模型，每个针对不同工作负载优化。你计划部署三个应用，每个应用通过 REST API 访问 AI1，并使用针对其工作负载优化的部署。

你需要为每个应用提供对 AI1 的访问权限，并确保**只有这些应用才能访问 AI1**。

**题目**

应使用什么方式为应用提供对 AI1 的访问，以及每个应用应使用什么来连接到对应的部署？`,explanation:`- **提供访问**：使用 **Microsoft Entra ID 的 Bearer 令牌**（托管标识 Managed Identity）。通过 Azure RBAC 为每个应用分配特定角色（如 Cognitive Services OpenAI User），可以精确控制哪些应用可以访问 AI1，是微软推荐的最安全方式
- **连接到特定部署**：Azure OpenAI REST API 路径中使用**部署名称**（Deployment Name）：
  \`\`\`
  POST /openai/deployments/{deployment-name}/chat/completions
  \`\`\`

> ⚠️ **注意**：在实际使用中 API 密钥也有效，但 Bearer 令牌提供更细粒度的访问控制，符合"只有这些应用才能访问"的安全要求。

---`,options:[{id:"A",text:"访问方式：API 密钥；连接部署：模型名称"},{id:"B",text:"访问方式：Bearer 令牌（Entra ID）；连接部署：部署名称"},{id:"C",text:"访问方式：API 密钥；连接部署：部署名称"},{id:"D",text:"访问方式：Bearer 令牌；连接部署：模型类型"}],answer:"B"},{id:"103",type:"single",content:`**背景**

你有一个包含两个 Azure 资源的订阅：Azure OpenAI 资源（AI1）和 Azure AI Content Safety 资源（CS1）。你构建了一个聊天机器人，使用 AI1 生成答案，使用 CS1 检查输入输出中的不当内容。

你需要**优化内容过滤器配置**，通过运行示例问题来测试配置效果。

以下三种方案，哪种能满足需求？

**题目**

- 方案 A：从 Content Safety Studio 使用**文本内容审核（Moderate text content）** 功能运行测试
- 方案 B：从 Content Safety Studio 使用**受保护材料检测（Protected material detection）** 功能运行测试
- 方案 C：从 Content Safety Studio 使用**在线活动监控（Monitor online activity）** 功能运行测试

哪种方案满足要求？`,explanation:`> ⚠️ **高争议题目**：原题（307）给出的答案为 B（Not meet the goal，方案 A），但从逻辑分析：

- **方案 A（文本内容审核）**：Content Safety Studio 的"Moderate text content"功能正是用于测试文本内容过滤配置，允许输入示例文本并查看各类别的检测结果，可以据此调整过滤阈值。这实际上**满足**"运行示例问题以优化内容过滤器配置"的需求
- **方案 B（受保护材料检测）**：用于检测内容是否涉及版权保护材料（如代码、歌词），与内容过滤器配置优化无直接关系
- **方案 C（在线活动监控）**：用于查看历史使用趋势和日志分析，不能运行测试

实际上微软文档中指出方案 A 是正确的测试方式，但原题多个版本（282、283、284）均答 B（No）。建议考生以最新官方考试指南为准，注意题目细节差异。

---`,options:[{id:"A",text:"仅方案 A"},{id:"B",text:"仅方案 B"},{id:"C",text:"仅方案 C"},{id:"D",text:"三种方案均不满足"}],answer:"A"},{id:"104",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源（AI1）和一个用户（User1）。

你需要确保 User1 能执行以下操作：
- 向 AI1 **上传数据集**
- **微调（Fine-tune）** AI1 中的现有模型

解决方案必须遵循**最小权限原则**。

**题目**

应为 User1 分配哪个角色？`,explanation:`各角色权限对比：

| 角色 | 权限范围 |
|------|---------|
| Cognitive Services OpenAI User | 只能查询/使用已部署模型（读取），不能上传数据或微调 |
| **Cognitive Services OpenAI Contributor** | 可以上传训练数据、微调模型、创建部署（写入操作），但不能管理资源本身 |
| Cognitive Services Contributor | 可管理所有认知服务资源，权限过大 |
| Contributor | 可管理整个资源组，权限最大 |

**Cognitive Services OpenAI Contributor** 是在最小权限原则下满足上传数据集和微调模型需求的正确角色。

> ⚠️ **争议说明**：原题（308）答案给出为 C（Cognitive Services OpenAI User），但按照微软 RBAC 文档，OpenAI User 只有使用权限，无法上传数据和微调。**D（Cognitive Services OpenAI Contributor）** 才是正确答案，请以 Azure OpenAI RBAC 文档为准。

---`,options:[{id:"A",text:"Cognitive Services Contributor"},{id:"B",text:"Contributor"},{id:"C",text:"Cognitive Services OpenAI User"},{id:"D",text:"Cognitive Services OpenAI Contributor"}],answer:"D"},{id:"105",type:"multiple",content:`**背景**

你正在构建一个电话处理解决方案，使用 Azure AI Speech 服务和**自定义神经语音（Custom Neural Voice）**。

你需要从 Speech Studio 创建自定义语音模型。

**题目**

在 Speech Studio 中，创建自定义语音模型应按顺序执行哪五项操作？`,explanation:`创建自定义神经语音的完整流程（符合微软负责任 AI 要求）：

1. **获取语音人才同意（D）**：必须先获得声音原型人的书面同意，这是合规要求，不可跳过
2. **创建项目（A）**：在 Speech Studio 中新建 Custom Neural Voice 项目
3. **上传训练数据（B）**：上传录音数据（WAV 文件）和对应的文字稿（TXT）
4. **训练模型（C）**：使用上传的数据训练神经语音模型
5. **部署到端点（E）**：将训练好的模型部署为可调用的端点

---`,options:[{id:"A",text:"创建项目（Create a project）"},{id:"B",text:"上传训练数据（Upload training data）"},{id:"C",text:"训练模型（Train the model）"},{id:"D",text:"获取语音人才同意（Obtain voice talent consent）"},{id:"E",text:"部署模型到端点（Deploy to endpoint）"},{id:"F",text:"使用 SSML 测试语音效果"}],answer:["D","A","B","C","E"]},{id:"106",type:"single",content:`**背景**

你有一个用于机器人部署的 Azure DevOps 流水线（Pipeline1）。流水线包含创建 Azure AI 服务账户的步骤。你需要添加一个步骤来**识别已创建的 Azure AI 服务账户**，且解决方案必须**最小化开发工作量**。

**题目**

应运行哪个 Azure CLI 命令？`,explanation:`\`az cognitiveservices account show --name <账户名> --resource-group <资源组>\` 命令用于**显示指定 Azure AI 服务账户的完整详情**，包括：端点 URL、SKU、区域、密钥获取方式等。

在 CI/CD 流水线中，该命令可以在创建账户后立即获取账户信息（如端点），供后续步骤使用，开发工作量极小。

---`,options:[{id:"A",text:"`az resource link`"},{id:"B",text:"`az account list`"},{id:"C",text:"`az cognitiveservices account network-rule list`"},{id:"D",text:"`az cognitiveservices account show`"}],answer:"D"},{id:"107",type:"single",content:`**背景**

你正在构建一个代理，使用 Semantic Kernel SDK，该代理将使用**自定义插件（Custom Plugin）**，并满足以下要求：

- 代理必须使用函数调用（Function Calling）
- 所有与指令匹配的函数都必须被触发
- 如果用户未提供函数的必要参数，代理必须向用户索取

**题目**

在 Semantic Kernel 代码中，应将 \`FunctionChoiceBehavior\` 设置为什么，以及执行设置应如何配置？`,explanation:`在 Semantic Kernel 中：

- **\`FunctionChoiceBehavior.Auto()\`**：允许内核自动判断何时调用插件函数，并在需要时自动触发所有匹配的函数
- **\`AutoInvokeKernelFunctions = true\`**：启用自动调用内核函数，当 LLM 决定调用函数时，SDK 会自动执行对应的插件方法

关于"向用户索取缺少的参数"：这通过插件函数的参数定义（\`KernelFunction\` 属性中标记的必要参数）实现，当参数缺失时，模型会生成追问。

\`Required()\` 强制每次响应都必须调用函数，不适合一般对话场景。

---`,options:[{id:"A",text:"`FunctionChoiceBehavior.Auto()`；`AutoInvokeKernelFunctions = true`"},{id:"B",text:"`FunctionChoiceBehavior.None()`；`AutoInvokeKernelFunctions = false`"},{id:"C",text:"`FunctionChoiceBehavior.Required()`；手动处理工具调用响应"},{id:"D",text:"`FunctionChoiceBehavior.Auto()` 搭配 `ToolCallBehavior.AutoInvokeKernelFunctions`"}],answer:"A"},{id:"108",type:"single",content:`**背景**

你有一个 Azure AI 内容理解（Content Understanding）资源（cu1），需要创建一个**自定义分析器（Custom Analyzer）** 来分析文档。

**题目**

在 cURL 命令中，应使用哪个 HTTP 方法和端点路径来创建自定义分析器？`,explanation:'Azure AI Content Understanding 创建自定义分析器使用 `PUT` 方法：\n\n```\nPUT {endpoint}/contentunderstanding/analyzers/{analyzerName}?api-version=2024-12-01-preview\n```\n\n`PUT` 方法是"创建或替换"语义，用于按名称创建资源（幂等操作）。若分析器不存在则创建，若已存在则覆盖。\n\n`POST` 通常用于集合端点（如 `/analyzers`）创建新资源（服务端分配 ID），但 Content Understanding API 使用 PUT + 用户指定名称的模式。\n\n---',options:[{id:"A",text:"`GET /contentunderstanding/analyzers/{analyzerName}`"},{id:"B",text:"`PUT /contentunderstanding/analyzers/{analyzerName}`"},{id:"C",text:"`POST /contentunderstanding/analyzers`"},{id:"D",text:"`PATCH /contentunderstanding/analyzers/{analyzerName}`"}],answer:"B"},{id:"109",type:"single",content:`**背景**

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

运行上述代码后播放 Output.mp3 文件，以下哪项说法正确？`,explanation:'当 `SpeechConfig` 未显式设置 `speech_synthesis_voice_name` 时，Azure AI Speech 服务会使用**默认语音**（通常为英语神经语音，如 en-US-JennyNeural）来合成文本。\n\n代码中使用 `AudioOutputConfig(filename="Output.mp3")` 将输出保存为 MP3 文件（SDK 支持多种音频格式输出），不会失败。\n\n语音服务不会因为未指定 voice name 而报错，会使用区域的默认语音。\n\n---',options:[{id:"A",text:'Output.mp3 包含用中文朗读的"Hello World"'},{id:"B",text:'Output.mp3 包含用默认语音（英语）朗读的"Hello World"'},{id:"C",text:"代码会失败，因为未指定语音名称（voice name）"},{id:"D",text:"Output.mp3 的格式为 WAV 而非 MP3"}],answer:"B"},{id:"110",type:"single",content:`**背景**

你正在构建一个语言学习应用，使用 Azure AI Language 服务分析文本。你需要识别文本中**知名艺人的乐队名称**（如"The Beatles"、"BTS"等），并提供指向相关 Wikipedia 页面的链接以供参考。

**题目**

应使用哪个 Azure AI Language 功能？`,explanation:`**实体链接（Entity Linking）** 不仅能识别文本中的命名实体，还能将识别到的实体**链接到 Wikipedia 等知识库中的对应词条**，返回实体的 Wikipedia URL、bingId 等信息。

这正是"识别乐队名称并提供 Wikipedia 链接"所需的功能。

区别于 NER（只识别实体类型，如"乐队是一种组织"，不提供外部链接）。

---`,options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"对话语言理解（CLU）"},{id:"C",text:"实体链接（Entity Linking）"},{id:"D",text:"命名实体识别（NER）"}],answer:"C"},{id:"111",type:"single",content:`**背景**

你正在设计一个解决方案，需要对存储为 PDF 格式的人力资源政策进行问答。要求对**同一问题始终返回完全相同的答案**，且解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中包含哪个服务？`,explanation:`**Azure AI Language 自定义问题解答** 对已定义的问答对提供**确定性答案**，相同问题总是返回相同答案（不像 LLM 会因随机性产生差异）。直接上传 PDF 文件后，系统自动提取问答对，开发工作量极小。

Azure OpenAI（C）虽然可以配置 Temperature=0 以减少随机性，但无法保证对复杂问题 100% 返回完全相同的措辞，且配置更复杂。

---`,options:[{id:"A",text:"Azure AI Language（自定义问题解答）"},{id:"B",text:"Azure Machine Learning"},{id:"C",text:"Azure OpenAI（GPT-4）"},{id:"D",text:"Azure AI Document Intelligence"}],answer:"A"},{id:"112",type:"single",content:`**背景**

你正在构建一个 Azure AI Agent Service 代理，需要使用 **Azure AI Foundry Agent Service** 部署该代理，其中包含一个自定义 API，用于获取给定位置的当前时间。

你需要**测试该自定义 API 的功能**。

**题目**

在 cURL 命令测试中，应使用哪种方式来调用自定义 API 端点？`,explanation:`测试**自定义 API 功能**时（而非测试代理本身），应直接调用 API 端点来验证其返回值是否正确。使用 cURL 对自定义 API URL 发起 GET 请求（如 \`curl "https://api.example.com/time?location=Tokyo"\`）是最直接的测试方式。

只有确认自定义 API 本身工作正常后，才将其注册为代理的工具（Tool），这样可以隔离问题定位。

---`,options:[{id:"A",text:"使用 `POST` 方法直接调用代理端点，并在请求体中包含 API 调用参数"},{id:"B",text:"在 Azure AI Foundry 中，使用 Agent playground 向代理发送包含位置信息的测试消息"},{id:"C",text:"使用 `GET` 方法调用自定义 API 的直接端点（如 `https://api.example.com/time?location=Tokyo`）"},{id:"D",text:'在 Azure 门户中，使用"诊断和解决问题"工具测试 API'}],answer:"C"},{id:"113",type:"single",content:`**背景**

你正在为 Azure AI Search 创建一个带有技能集（Skillset）的索引器，该技能集包含一个执行语言检测和情感分析的自定义技能。

你需要了解 Azure AI Search 对文档进行**索引处理的顺序**。

**题目**

以下哪个选项正确描述了索引器处理文档时各阶段的执行顺序？`,explanation:`Azure AI Search 索引器处理文档的标准顺序：

1. **文档破解（Document Cracking）**：从源格式（PDF、图片、Word 等）中提取原始内容
2. **字段映射（Field Mapping）**：将数据源字段映射到索引器的内部表示
3. **技能执行（Skill Execution）**：依次执行技能集中定义的所有 AI 技能（OCR、NER、情感分析等）
4. **输出字段映射（Output Field Mapping）**：将技能输出映射到目标搜索索引字段
5. **索引写入（Index Write）**：将所有数据持久化到搜索索引

---`,options:[{id:"A",text:"字段映射 → 文档破解 → 技能执行 → 输出字段映射 → 索引写入"},{id:"B",text:"文档破解 → 技能执行 → 字段映射 → 输出字段映射 → 索引写入"},{id:"C",text:"文档破解 → 字段映射 → 技能执行 → 输出字段映射 → 索引写入"},{id:"D",text:"技能执行 → 文档破解 → 字段映射 → 输出字段映射 → 索引写入"}],answer:"C"},{id:"114",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个将音频文件翻译的应用。应用需要将英语音频翻译成意大利语。

**题目**

在 Speech SDK 代码中，用于设置**源语言（输入语言）** 和**目标语言（输出语言）** 的正确配置是什么？`,explanation:'在 Speech Translation SDK 中：\n\n- **`SpeechRecognitionLanguage`**：设置**源语言**（语音输入语言），使用完整区域代码，如 `"en-US"`（英语-美国）\n- **`AddTargetLanguage()`**：添加**翻译目标语言**，使用两字母语言代码，如 `"it"`（意大利语）\n\n注意：目标语言参数使用的是 `"it"`（ISO 639-1 代码），而非 `"it-IT"`（区域代码）。这是 Speech Translation API 的特有规范，与 `SpeechRecognitionLanguage` 使用区域代码不同。\n\n---',options:[{id:"A",text:'`translationConfig.SpeechRecognitionLanguage = "it-IT"`；`translationConfig.AddTargetLanguage("en-US")`'},{id:"B",text:'`translationConfig.SpeechRecognitionLanguage = "en-US"`；`translationConfig.AddTargetLanguage("it")`'},{id:"C",text:'`translationConfig.SourceLanguage = "en"`；`translationConfig.TargetLanguage = "it-IT"`'},{id:"D",text:'`translationConfig.SpeechRecognitionLanguage = "en-US"`；`translationConfig.AddTargetLanguage("it-IT")`'}],answer:"B"},{id:"115",type:"single",content:`**背景**

你有一个 Azure AI 订阅，包含 Azure AI Content Safety 资源（resource1）。你构建了一个社交媒体应用，允许用户上传图像，需要对用户上传内容进行内容审核。

**题目**

以下 cURL 命令中，哪些说法关于该命令是否正确？（判断题）

假设命令使用了 \`POST\` 方法调用 \`/contentsafety/image:analyze\` 端点，请求体包含图像 URL，头部包含订阅密钥，并指定检测类别为 \`["Hate", "SelfHarm", "Sexual", "Violence"]\`。

判断以下说法：
1. 命令使用了正确的 HTTP 方法
2. 该命令可以同时检测图像中的多个内容类别
3. 该命令可以直接处理本地文件路径（如 \`C:\\images\\test.jpg\`）`,explanation:'1. **正确（是）**：Azure AI Content Safety 图像分析端点确实使用 `POST` 方法\n2. **正确（是）**：通过在请求体中指定 `categories` 数组（如 `["Hate", "SelfHarm", "Sexual", "Violence"]`），可以在一次调用中同时检测多个内容类别\n3. **错误（否）**：API 接受**图像 URL** 或 **Base64 编码的图像数据**，无法直接处理本地文件路径。本地图像必须先转换为 Base64 编码或上传至可公开访问的 URL\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-否，3-是"}],answer:"B"},{id:"116",type:"single",content:`**背景**

你需要部署一个 Azure OpenAI 资源，并使用 ARM 模板（Azure Resource Manager Template）确保资源能够响应每分钟 600 个请求。

**题目**

在 ARM 模板中，应如何配置该资源以满足请求速率要求？`,explanation:`在 Azure OpenAI 的 ARM 模板中，模型部署（Deployment）资源的 **\`sku.capacity\`** 字段用于设置**每分钟 Token 数量（Tokens Per Minute，TPM）**，单位为"千"：

\`\`\`json
{
  "type": "Microsoft.CognitiveServices/accounts/deployments",
  "sku": {
    "name": "Standard",
    "capacity": 60
  }
}
\`\`\`

\`capacity: 60\` 表示 60,000 TPM，可以支持约 600 RPM（Requests Per Minute）的标准请求速率。

不存在 \`rateLimit\` 或 \`requestsPerMinute\` 这样的直接属性。

---`,options:[{id:"A",text:"在 `sku` 属性中设置 `capacity: 600`"},{id:"B",text:"在 `properties` 中设置 `rateLimit: 600`"},{id:"C",text:"在部署（Deployment）资源的 `sku` 属性中设置 `capacity: 60`（单位为千 token/分钟，600 rps ≈ 60K TPM）"},{id:"D",text:"在 ARM 模板的 `parameters` 中设置 `requestsPerMinute: 600`"}],answer:"C"},{id:"117",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要将这些图像分类为**照片（photograph）**、**手绘图（drawing）** 或**剪贴画（clipart）**。

**题目**

应使用哪个 Computer Vision 端点，并关注响应中的哪个属性？`,explanation:`Computer Vision 的 \`Analyze Image\` API 中，\`ImageType\` 特性专门提供以下信息：

- **\`clipArtType\`**：0（非剪贴画）→ 3（高质量剪贴画）的整数评分
- **\`lineDrawingType\`**：0（非线条画）或 1（是线条画/手绘图）

通过这两个属性可以区分照片（两者均为 0）、剪贴画（clipArtType > 0）和手绘图（lineDrawingType = 1）。

此功能无需自定义训练，开发工作量最小。

---`,options:[{id:"A",text:"使用 `/analyze`（POST），`visualFeatures=Tags`，关注 `tags[].name`"},{id:"B",text:"使用 `/analyze`（POST），`visualFeatures=ImageType`，关注 `imageType.clipArtType` 和 `imageType.lineDrawingType`"},{id:"C",text:"使用 `/describe`（POST），关注 `description.captions[].text`"},{id:"D",text:"使用自定义视觉（Custom Vision）进行三分类"}],answer:"B"},{id:"118",type:"single",content:`**背景**

你使用 Python 编写了一个调用 Azure AI Language 服务的函数：

\`\`\`python
def get_entities(client, text):
    response = client.recognize_entities(documents=[text])[0]
    return [entity for entity in response.entities]
\`\`\`

你调用该函数并传入：
> "Our tour of London included a visit to Buckingham Palace."

**题目**

该函数的输出将包含哪些内容？`,explanation:`\`recognize_entities\`（命名实体识别，NER）会从文本中提取具有语义类型的命名实体：

- **"London"**：地理位置（Location）类型的命名实体 ✅
- **"Buckingham Palace"**：地理位置/地标（Location/Landmark）类型的命名实体 ✅
- "tour"、"visit"：普通动词/名词，不是命名实体 ❌
- 整个句子不会被返回

输出的 \`entities\` 列表包含 **London** 和 **Buckingham Palace** 两个实体对象，各含类型（Category）、文本（Text）和置信度（ConfidenceScore）属性。

---`,options:[{id:"A",text:"Our tour of London included a visit to Buckingham Palace（整个句子）"},{id:"B",text:"London 和 Buckingham Palace"},{id:"C",text:"tour 和 visit"},{id:"D",text:"London only"}],answer:"B"},{id:"119",type:"single",content:`**背景**

你正在构建一个应用，该应用使用 Azure AI Translator 服务进行文本翻译。你需要将用户输入的文本从检测到的任意语言翻译为英语，且内容必须**保留在美洲地区**（数据主权要求）。

**题目**

应使用哪个 Translator 服务端点 URL 前缀来满足数据主权要求？`,explanation:`Azure Translator 提供地区端点以满足数据主权要求：

| 端点 | 覆盖地区 |
|------|---------|
| \`api.cognitive.microsofttranslator.com\` | 全球（请求路由到最近数据中心） |
| **\`api-nam.cognitive.microsofttranslator.com\`** | **北美洲（Americas）** |
| \`api-eur.cognitive.microsofttranslator.com\` | 欧洲 |
| \`api-apc.cognitive.microsofttranslator.com\` | 亚太 |

题目要求数据保留在**美洲**，应使用 \`api-nam\`（NAM = North AMericas）端点，确保所有翻译请求在美洲数据中心处理。

---`,options:[{id:"A",text:"`https://api.cognitive.microsofttranslator.com`（全球端点）"},{id:"B",text:"`https://api-nam.cognitive.microsofttranslator.com`（北美地区端点）"},{id:"C",text:"`https://api-eur.cognitive.microsofttranslator.com`（欧洲地区端点）"},{id:"D",text:"`https://eastus.api.cognitive.microsoft.com`（East US 区域端点）"}],answer:"B"},{id:"120",type:"single",content:`**背景**

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
3. \`result.read.blocks\` 中包含每个检测到的词语的置信度分数`,explanation:'1. **正确**：Azure AI Vision 4.0 的 Image Analysis API 支持在**一次调用中**通过 `visual_features` 参数同时请求多个功能（Caption、Read、Objects、Tags 等）\n2. **正确**：`caption.text` 返回图像的自然语言描述字符串（如 "A road through a forest"）\n3. **正确**：`read.blocks` → `lines` → `words` 中，每个 `word` 对象包含 `confidence` 属性（置信度分数）\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-否，2-是，3-是"},{id:"D",text:"1-是，2-否，3-是"}],answer:"A"},{id:"121",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，配置了如下模型设置：
- Temperature：1
- Top P（Top Probabilities）：0.5
- Max response tokens：100

你向模型提问并收到了回答。

**题目**

对于以下说法，判断是否正确：

1. 若将 Temperature 降低到 0，模型的输出将更具确定性
2. 若将 Max response tokens 设置为 50，模型可能会在句子中间截断回答
3. Top P = 0.5 意味着模型每次只考虑概率最高的 50% 的词汇候选`,explanation:`1. **正确**：Temperature=0 使模型始终选择概率最高的词汇，输出趋于确定性（贪婪解码）
2. **正确**：\`max_tokens\` 限制生成的最大 Token 数，若达到上限则立即截断，不考虑语义完整性
3. **正确**：Top P（nucleus sampling）= 0.5 意味着模型的词汇选择范围限制在累计概率达到 50% 的词汇集合中（概率较高的前 N 个词）

---`,options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-是，3-否"},{id:"C",text:"1-是，2-否，3-是"},{id:"D",text:"1-否，2-是，3-是"}],answer:"A"},{id:"122",type:"single",content:`**背景**

你正在构建一个需要对人力资源政策 PDF 进行问答的解决方案。你已经使用 Azure AI Language 创建了一个自定义问题解答（Custom Question Answering）项目，需要通过 cURL 命令测试机器人，确保只有当**置信度分数达到 95% 或以上**时才返回答案。

**题目**

在 cURL 命令的请求体中，应设置哪个参数来实现置信度阈值控制？`,explanation:`Azure AI Language 自定义问题解答 API 的 \`generateAnswer\` 请求体中，置信度阈值参数为：

\`\`\`json
{
  "question": "your question",
  "scoreThreshold": 0.95,
  "top": 1
}
\`\`\`

- 参数名为 **\`scoreThreshold\`**（而非 confidenceThreshold 或 minimumConfidence）
- 值范围为 **0 到 1**（浮点数），0.95 对应 95%
- 当最高匹配答案的置信度低于此阈值时，API 返回"no good match found"

---`,options:[{id:"A",text:'`"confidenceThreshold": 95`'},{id:"B",text:'`"scoreThreshold": 0.95`'},{id:"C",text:'`"confidenceScoreThreshold": 95`'},{id:"D",text:'`"minimumConfidence": 0.95`'}],answer:"B"},{id:"123",type:"single",content:`**背景**

你正在构建一个聊天机器人，该机器人需要在对话过程中根据用户输入动态调整回答策略。机器人需要引导用户完成**航班预订**流程，并在用户未提供有效出发日期时**反复询问**，直到获得有效日期或用户取消。

**题目**

对于"重复询问直到获得有效输入"的对话逻辑，应使用哪种 Bot Framework 对话类型？`,explanation:`**Prompt Dialog（提示对话）** 专门设计用于向用户请求特定类型的输入，并包含**内置的验证和重试逻辑**：

- 若用户输入无效（如日期格式错误），自动重新提示
- 支持自定义验证函数
- 内置重试次数限制和取消处理

Bot Framework SDK 提供多种 Prompt 类型：\`DateTimePrompt\`（日期时间）、\`TextPrompt\`（文本）、\`ChoicePrompt\`（选择）等。

Waterfall Dialog 定义线性步骤流程，但不自动处理输入验证重试；Adaptive Dialog 更灵活但更复杂。

---`,options:[{id:"A",text:"Skill Dialog（技能对话）"},{id:"B",text:"Waterfall Dialog（瀑布对话）"},{id:"C",text:"Adaptive Dialog（自适应对话）"},{id:"D",text:"Prompt Dialog（提示对话）"}],answer:"D"},{id:"124",type:"multiple",content:`**背景**

你需要实现一个批量文档翻译解决方案。源文档（德语的 Word 和 PowerPoint 文件）存储在 Azure Blob 容器中，需要翻译为法语，同时满足：

- 保留原始文件格式
- 支持使用**自定义术语表（Custom Glossary）**

**题目**

在完成 Blob 容器准备和文件上传后，还需要按顺序执行哪三项操作？`,explanation:`批量文档翻译（Document Translation）的完整流程（假设 Translator 资源和源/目标容器已准备好）：

1. **上传自定义术语表（C）**：将 TSV 格式的术语表文件上传到 Blob 容器，生成 SAS URL 供翻译请求引用
2. **提交翻译请求（B）**：调用 \`POST /batches\` 端点，在请求体中指定源容器 SAS URL、目标容器 SAS URL、语言对（de→fr）和术语表 SAS URL
3. **查询翻译状态（E）**：批量翻译是异步操作，需要轮询状态直到完成（\`status: Succeeded\`）

---`,options:[{id:"A",text:"创建 Azure AI Translator 资源"},{id:"B",text:"提交批量翻译请求，指定源容器、目标容器、源语言（de）、目标语言（fr）和术语表 URL"},{id:"C",text:"将自定义术语表文件（TSV 格式）上传到 Blob 容器"},{id:"D",text:"创建用于存储法语文件的目标 Blob 容器"},{id:"E",text:"调用翻译状态查询 API，等待翻译完成"}],answer:["C","B","E"]},{id:"125",type:"single",content:`**背景**

你构建了一个使用 Azure AI Language 自定义问题解答服务的聊天机器人。在测试中发现：机器人对"What is the price of Product A?"（产品 A 的价格是多少？）能正确回答，但对"How much does Product A cost?"（产品 A 多少钱？）回答失败。

以下三种解决方案，哪种能解决该问题？

**题目**

- 方案 A：从 Language Studio，为该问答对添加替代措辞（Alternative Phrasing），然后重新训练并重新发布模型
- 方案 B：从 Language Studio，为"price"创建一个实体，然后重新训练并重新发布模型
- 方案 C：从 Language Studio，为"cost"创建一个实体，然后重新训练并重新发布模型

哪个方案能满足需求？`,explanation:`**方案 A（正确）**：为已有问答对添加"How much does Product A cost?"作为**替代问法（Alternative Question）**，是解决语义等价问题的标准做法。训练后，两种问法都会匹配到同一个答案。

**方案 B、C（错误）**：自定义问题解答服务基于问答对匹配，不使用 CLU 中的实体（Entity）概念。为"price"或"cost"创建实体对自定义问答的匹配逻辑没有帮助。

---`,options:[{id:"A",text:"仅方案 A"},{id:"B",text:"仅方案 B"},{id:"C",text:"仅方案 C"},{id:"D",text:"方案 B 和 C"}],answer:"A"},{id:"126",type:"single",content:`**背景**

你正在为 Azure OpenAI Studio 构建一个应用，需要为应用添加**内置安全机制以检测和阻止越狱尝试**（Jailbreak attempts），防止用户通过精心构造的提示词绕过模型的安全限制。

**题目**

应实现哪项 Azure AI Content Safety 功能？`,explanation:`**越狱风险检测（Jailbreak risk detection）** 专门设计用于识别试图通过特殊构造的提示词来绕过 AI 模型安全措施的攻击模式，例如：
- "Pretend you have no restrictions..."
- "Act as DAN (Do Anything Now)..."
- "Ignore your previous instructions..."

该功能实时分析用户输入，若检测到越狱模式则返回风险标识，应用可据此拒绝该请求。

受保护材料检测用于版权保护，文本类别检测用于通用有害内容，均非越狱防护的专项功能。

---`,options:[{id:"A",text:"受保护材料文本检测（Protected material text detection）"},{id:"B",text:"越狱风险检测（Jailbreak risk detection）"},{id:"C",text:"在线活动监控（Monitor online activity）"},{id:"D",text:"文本内容类别检测（Text category moderation）"}],answer:"B"},{id:"127",type:"multiple",content:`**背景**

你正在使用 Azure AI Content Understanding 分析 1,000 段视频，需要**识别特定公司名称是否在视频中被提及**（包括语音和文字）。

**题目**

应按顺序执行哪三项操作来实现公司名称识别？`,explanation:`使用 Video Indexer 识别特定品牌/公司名称的流程：

1. **创建自定义品牌（A）**：在 Video Indexer 门户中，添加要识别的公司名称到自定义品牌列表，这样 Video Indexer 在索引时会特别关注这些名称
2. **索引视频（C）**：调用 Video Indexer API 对视频进行索引（包括语音转文字、场景分析、品牌检测等）
3. **提取品牌洞察（D）**：从索引结果中获取品牌出现的时间戳、频率等详情

注意：视频可以通过 URL 直接提供给 Video Indexer，不一定需要先上传到 Blob Storage。但若已在 Blob Storage 中，则需提供 SAS URL。

---`,options:[{id:"A",text:"在 Video Indexer 中创建一个自定义品牌（Custom Brand）并添加公司名称"},{id:"B",text:"将视频上传到 Azure Blob Storage"},{id:"C",text:"使用 Video Indexer API 对视频建立索引（Index）"},{id:"D",text:"从 Video Indexer API 提取品牌洞察（Brand Insights）"},{id:"E",text:"使用 Azure AI Language NER 处理视频字幕"}],answer:["A","C","D"]},{id:"128",type:"single",content:`**背景**

你有一个 Azure AI 搜索解决方案，使用 Form Recognizer（现 Azure AI Document Intelligence）对采购订单进行索引。你需要**使用 Microsoft Power BI 分析提取的信息**，且解决方案必须**最小化开发工作量**。

**题目**

应向索引器添加什么内容？`,explanation:`**对象投影（Object projection）** 将富化数据以 JSON 格式存储到 Azure Blob Storage。Power BI 可以直接连接 Blob Storage 中的 JSON 数据并进行分析，无需额外的数据格式转换，开发工作量最小。

- 表投影（A）将数据存储为 Azure Table Storage 格式，Power BI 可以连接，但需要额外配置
- 文件投影（D）主要用于图像/二进制文件，不适合结构化数据分析
- 投影组（B）是包含多种投影的逻辑容器，不是具体的投影类型

---`,options:[{id:"A",text:"表投影（Table projection）"},{id:"B",text:"投影组（Projection group）"},{id:"C",text:"对象投影（Object projection）"},{id:"D",text:"文件投影（File projection）"}],answer:"C"},{id:"129",type:"multiple",content:`**背景**

你正在使用 Microsoft Bot Framework Composer 构建一个聊天机器人，该机器人需要**向用户呈现带图像的可选选项列表**。

**题目**

应使用哪两个功能来实现此需求？`,explanation:`- **自适应卡片（B）**：是实现丰富内容展示的最佳方式，支持在卡片中嵌入图像、按钮、文本等元素，每个选项可以包含图片和描述
- **对话（D）**：用于封装与特定功能相关的交互逻辑，控制何时显示选项列表、如何处理用户的选择

在 Bot Framework Composer 中，通过创建一个 Dialog 来组织交互逻辑，并在其中使用 "Send an Activity" 操作发送包含自适应卡片的响应。

---`,options:[{id:"A",text:"Azure 函数（Azure Function）"},{id:"B",text:"自适应卡片（Adaptive Card）"},{id:"C",text:"实体（Entity）"},{id:"D",text:"对话（Dialog）"},{id:"E",text:"语料（Utterance）"}],answer:["B","D"]},{id:"130",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人。你需要通过 Chat playground 上传公司数据，**确保聊天机器人使用这些数据来回答用户问题**（即 RAG 模式）。

**题目**

在代码中，应如何配置才能让模型使用上传的数据？`,explanation:`Azure OpenAI 的"在自有数据上使用"（On Your Data）功能通过 \`data_sources\` 参数实现：

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "question"}],
    extra_body={
        "data_sources": [{
            "type": "azure_search",
            "parameters": {
                "endpoint": "https://search-resource.search.windows.net",
                "index_name": "your-index",
                "authentication": {"type": "system_assigned_managed_identity"}
            }
        }]
    }
)
\`\`\`

这会让模型先从 Azure AI Search 索引中检索相关文档，再基于检索到的内容生成答案，实现 RAG 模式。

---`,options:[{id:"A",text:'在 `messages` 数组中添加 `{"role": "system", "content": "Use the provided data to answer questions"}`'},{id:"B",text:"使用 `data_sources` 参数指定 Azure AI Search 连接（包含索引名称、连接字符串等）"},{id:"C",text:"在 `model` 参数中指定数据集的名称"},{id:"D",text:"使用 `grounding_data` 参数指定 Blob 容器的 SAS URL"}],answer:"B"},{id:"131",type:"single",content:`**背景**

你正在构建一个文字转语音（TTS）应用，需要为**视力受损的机动车用户**合成清晰的语音。你需要选择合适的 SSML 配置来优化在车载环境中的音效。

**题目**

应配置 SSML 中 \`<voice>\` 元素的哪个属性？`,explanation:`\`<voice effect="eq_car">\` 是 Azure Speech SSML 中专门为**车载环境**优化音频的属性，它应用了针对车内音响特性的均衡器（equalizer）调整，使合成语音在嘈杂的车辆环境中更清晰可辨。

\`\`\`xml
<voice name="en-US-JennyNeural" effect="eq_car">
  Turn left in 500 meters.
</voice>
\`\`\`

其他选项（calm 风格、音调、语速）影响的是语音表达方式，而非车载音效优化。

---`,options:[{id:"A",text:'`style="calm"`'},{id:"B",text:'`effect="eq_car"`'},{id:"C",text:'`pitch="+10%"`'},{id:"D",text:'`rate="slow"`'}],answer:"B"},{id:"132",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 语言服务的应用，需要对文档中的**个人信息（PII）** 进行识别，特别是要**防止个人数据在分析完成后被持久化存储**。

**题目**

应在 Language 服务 API 请求中配置哪个查询参数？`,explanation:"`loggingOptOut=true` 参数告知 Azure AI Language 服务**不要将输入数据持久化存储**到微软的日志系统中。这对于处理敏感数据（如医疗记录、财务信息等个人可识别信息）的应用至关重要，可以满足数据隐私合规要求（如 GDPR）。\n\n- `piiCategories`：指定要检测的 PII 类别，不控制数据存储\n- `showStats`：控制响应中是否包含统计信息\n- `model-version`：指定使用的模型版本\n\n---",options:[{id:"A",text:"`loggingOptOut=true`"},{id:"B",text:"`piiCategories=none`"},{id:"C",text:"`showStats=false`"},{id:"D",text:"`model-version=latest`"}],answer:"A"},{id:"133",type:"single",content:`**背景**

你有一个 Azure AI Language 资源（ta1）和虚拟网络（vnet1）。你需要确保**只有 vnet1 中的资源才能访问 ta1**。

**题目**

应配置什么？`,explanation:`**配置 ta1 的虚拟网络设置（C）** 是限制 Azure AI 服务仅对特定 VNet 开放访问的标准方式：

在 Azure 门户 → ta1 → "网络（Networking）" → "防火墙和虚拟网络" → 选择"已选定的网络和私有端点" → 添加 vnet1 的子网

这样只有来自 vnet1 子网的流量才能访问 ta1，互联网和其他 VNet 的请求将被拒绝。

> ⚠️ **注意**：原题（201）答案为 B（Azure Firewall），但 Azure Firewall 通常用于对所有出站/入站流量进行集中管控，配置更复杂。直接在 AI 服务资源的"网络"设置中配置 VNet 规则（C）更简单直接，符合"最小化管理工作量"的通常要求。请以官方考试指南为准。

---`,options:[{id:"A",text:"为 vnet1 配置网络安全组（NSG）"},{id:"B",text:"为 vnet1 配置 Azure Firewall"},{id:"C",text:"为 ta1 配置虚拟网络设置"},{id:"D",text:"为 ta1 配置 Language 服务容器"}],answer:"C"},{id:"134",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Agent Service 部署的代理，该代理需要通过调用**自定义 API**（用于获取订单状态）来回答用户问题。你已经用 OpenAPI 规范描述了该 API。

**题目**

在 Azure AI Agent Service 中，应通过什么方式将自定义 API 集成到代理中？`,explanation:`Azure AI Agent Service 支持通过**函数工具（Function Tool）** 将自定义 API 集成到代理中：

\`\`\`python
functions = FunctionTool(functions=[get_order_status_function])
agent = project_client.agents.create_agent(
    model="gpt-4",
    tools=functions.definitions
)
\`\`\`

通过 OpenAPI 或 Python 函数定义描述 API 的输入/输出格式，代理在对话中自动判断何时调用该函数并将结果整合到回答中。这是 Azure AI Agent Service 的标准集成模式。

---`,options:[{id:"A",text:"创建一个 Azure 函数，在函数中调用 API，然后将函数添加为代理的技能（Skill）"},{id:"B",text:"使用 OpenAPI 规范定义函数工具（Function Tool），并将其添加到代理的工具列表"},{id:"C",text:"将 API 的端点 URL 添加到代理的系统消息中"},{id:"D",text:"在 Language Studio 中创建一个自定义函数实体"}],answer:"B"},{id:"135",type:"single",content:`**背景**

你正在评估是否使用 Azure AI Agent Service 构建一个代理。该代理将合并和处理用户上传的多个文件。

你需要了解 Azure AI Agent Service 支持上传文件的最大总大小。

**题目**

用户可以上传到 Azure AI Agent Service 的文件总大小上限是多少？`,explanation:`根据 Azure AI Agent Service 的服务限制，可以上传到服务的**所有文件的最大总大小为 100 GB**。

单个文件大小通常有独立限制（如 512 MB 或更大），但所有文件累计不超过 100 GB。

这个限制对于评估是否适合大规模文件处理场景（如需要处理 TB 级数据）非常重要。

---`,options:[{id:"A",text:"1 GB"},{id:"B",text:"10 GB"},{id:"C",text:"100 GB"},{id:"D",text:"1 TB"}],answer:"C"},{id:"136",type:"multiple",content:`**背景**

你正在构建一个 Semantic Kernel 应用，需要在提示词模板中**包含复杂对象**，这些对象含有子属性（sub-properties）。

**题目**

哪两种提示词模板格式支持包含具有子属性的复杂对象？`,explanation:"在 Semantic Kernel 中，支持复杂对象（含子属性）的提示词模板格式：\n\n- **Liquid（A）**：一种模板语言，支持通过 `{{ object.property }}` 和 `{{ object.nested.property }}` 访问嵌套属性，以及循环、条件等逻辑\n- **Handlebars（C）**：另一种流行的模板语言，支持 `{{object.property}}` 和 `{{#each items}}` 等语法访问复杂对象结构\n\nYAML 是配置文件格式，不是模板引擎；JSONL 是数据格式；Semantic Kernel 原生模板（使用 `{{$variable}}` 语法）对复杂对象的支持有限。\n\n---",options:[{id:"A",text:"Liquid"},{id:"B",text:"JSONL"},{id:"C",text:"Handlebars"},{id:"D",text:"YAML"},{id:"E",text:"Semantic Kernel（原生 SK 模板）"}],answer:["A","C"]},{id:"137",type:"single",content:`**背景**

你有一个 Azure AI 订阅，其中包含 Azure AI Document Intelligence 资源（DI1，Standard S0 定价层）。你有以下文件：

- File2.jpg（JPEG 图像）
- File3.tiff（TIFF 图像）

另外还有一个 File1.pdf（PDF 文档）。

**题目**

哪些文件可以使用 DI1 进行分析？`,explanation:`> ⚠️ **争议说明**：原题（278）答案为 D（File2.jpg 和 File3.tiff），暗示 File1.pdf 不可用。这可能是因为 PDF 文件的某个特定问题（如超过页数限制、加密等），但原题 PDF 中有图表说明了具体限制。

Azure AI Document Intelligence Standard S0 层支持的文件格式包括：
- **PDF**（通常支持，最多 2,000 页/文件）✅
- **JPEG/JPG** ✅
- **PNG** ✅
- **TIFF** ✅
- **BMP**（部分版本支持）

通常情况下三种格式都应该支持。若原题答案为 D，可能是 PDF 文件有特定问题（如超规格），请以原始题目中的文件参数说明为准。

---`,options:[{id:"A",text:"仅 File1.pdf"},{id:"B",text:"仅 File2.jpg"},{id:"C",text:"仅 File3.tiff"},{id:"D",text:"仅 File2.jpg 和 File3.tiff"},{id:"E",text:"File1.pdf、File2.jpg 和 File3.tiff 全部"}],answer:"D"},{id:"138",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Translator 服务进行实时文本翻译。应用使用 .NET SDK，需要翻译用户输入的文本内容。

**题目**

在代码中，应使用哪个 SDK 客户端类和方法来完成文本翻译请求？`,explanation:'Azure AI Translator SDK（`Azure.AI.Translation.Text` NuGet 包）使用以下类和方法进行文本翻译：\n\n```csharp\nvar client = new TextTranslationClient(new AzureKeyCredential(key), region);\nvar response = await client.TranslateAsync(\n    targetLanguages: new[] { "zh-Hans" },\n    content: new[] { "Hello World" }\n);\n```\n\n- **客户端类**：`TextTranslationClient`\n- **翻译方法**：`TranslateAsync()`（或同步版 `Translate()`）\n\n`TextAnalyticsClient` 是 Azure AI Language 服务的客户端，用于情感分析、NER 等，不提供翻译功能。\n\n---',options:[{id:"A",text:"`TextTranslationClient.TranslateAsync()`"},{id:"B",text:"`TranslatorClient.TranslateTextAsync()`"},{id:"C",text:"`CognitiveServicesClient.TranslateAsync()`"},{id:"D",text:"`TextAnalyticsClient.TranslateAsync()`"}],answer:"A"},{id:"139",type:"multiple",content:`**背景**

你有一个 Azure OpenAI 资源，需要构建一个应用来写新闻稿（Press Releases），使用 Azure OpenAI Studio 部署模型。

**题目**

在 Azure OpenAI Studio 中，应按顺序执行哪三项操作来完成部署？`,explanation:`在 Azure OpenAI Studio 中部署模型的标准三步流程：

1. **打开 Deployments 页面（A）**：在 Azure OpenAI Studio 左侧导航中选择"Deployments"（部署）
2. **选择基础模型（B）**：点击"Create new deployment"，从可用模型列表中选择适合文本生成的模型（如 GPT-4、GPT-3.5-Turbo）
3. **命名并完成部署（C）**：输入部署名称（供 API 调用时使用），设置容量参数，完成创建

部署完成后可以在 Playground 中测试，但测试（D）不是部署操作的必要步骤。

---`,options:[{id:"A",text:'在 Azure OpenAI Studio 中打开"部署（Deployments）"页面'},{id:"B",text:"选择要部署的基础模型（如 GPT-4 或 GPT-3.5）"},{id:"C",text:"为部署提供名称并完成部署配置"},{id:"D",text:"在 Completions playground 中测试文本生成"},{id:"E",text:"创建新的 Azure OpenAI 资源"}],answer:["A","B","C"]},{id:"140",type:"single",content:`**背景**

你需要为 Azure OpenAI 模型配置 ARM 模板，以便能够**部署一个新的 Azure OpenAI 资源**，并确保资源可以生成基于**客户托管密钥（Customer-Managed Key，CMK）** 加密的虚构故事。

**题目**

在 ARM 模板中，除了标准的资源类型（\`Microsoft.CognitiveServices/accounts\`）和名称外，还需要配置哪个属性来启用 CMK 加密？`,explanation:`在 ARM 模板中启用 CMK 加密需要在 \`properties\` 中配置 \`encryption\` 属性：

\`\`\`json
{
  "properties": {
    "encryption": {
      "keySource": "Microsoft.KeyVault",
      "keyVaultProperties": {
        "keyVaultUri": "https://your-keyvault.vault.azure.net/",
        "keyName": "your-key-name",
        "keyVersion": "your-key-version"
      }
    }
  }
}
\`\`\`

同时，资源通常需要系统分配的托管标识（System-Assigned Managed Identity）来访问 Key Vault，但仅有托管标识（D）不足以启用 CMK，还需要 \`encryption.keyVaultProperties\` 配置。

---`,options:[{id:"A",text:"在 `properties` 中设置 `encryption.keyVaultProperties`（包含 Key Vault URI 和密钥名称）"},{id:"B",text:'在 `sku` 中设置 `tier: "Premium"`'},{id:"C",text:"在 `properties` 中设置 `customSubDomainName`"},{id:"D",text:'在 `identity` 中设置 `type: "SystemAssigned"`'}],answer:"A"},{id:"141",type:"multiple",content:`**背景**

你有一个含有 DockerFile 的本地开发环境，并有 Azure 订阅中的自定义语音转文字模型（model1）。

你需要在名为 Host1 的 Docker 主机上运行 model1。

**题目**

应按顺序执行哪三项操作？`,explanation:`在 Docker 主机上运行自定义语音转文字模型的步骤：

1. **导出 model1（A）**：从 Azure 门户或 Azure CLI 将自定义语音模型导出为容器镜像，使其可以在 Docker 环境中运行
2. **运行容器（B）**：在 Host1 上使用 \`docker run\` 命令启动容器，包含 Billing 端点和 API 密钥参数
3. **配置日志记录（C）**（可选但推荐）：配置磁盘日志以监控容器的运行状态和性能

---`,options:[{id:"A",text:"从 Azure 门户将 model1 导出为 Docker 容器镜像"},{id:"B",text:"在 Host1 上运行容器"},{id:"C",text:"配置磁盘日志记录（Configure disk logging）"},{id:"D",text:"从 Microsoft Container Registry（MCR）拉取基础镜像"},{id:"E",text:"创建新的 Speech 服务资源"}],answer:["A","B","C"]},{id:"142",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个应用，该应用将**把英语语音自动翻译成法语、德语和西班牙语**，并输出翻译后的文字。

**题目**

在 Speech Translation 配置代码中，应如何定义输出语言？`,explanation:'Azure Speech Translation SDK 使用 `AddTargetLanguage()` 方法**逐一添加目标翻译语言**：\n\n```csharp\nvar translationConfig = SpeechTranslationConfig.FromSubscription(key, region);\ntranslationConfig.SpeechRecognitionLanguage = "en-US";  // 源语言\ntranslationConfig.AddTargetLanguage("fr");    // 添加法语\ntranslationConfig.AddTargetLanguage("de");    // 添加德语\ntranslationConfig.AddTargetLanguage("es");    // 添加西班牙语\n```\n\n注意：目标语言使用 **ISO 639-1 两字母代码**（如 `"fr"`），而非区域代码（如 `"fr-FR"`）。\n\n---',options:[{id:"A",text:'使用 `translationConfig.AddTargetLanguage()` 分别添加 `"fr"`、`"de"`、`"es"`'},{id:"B",text:'使用 `translationConfig.TargetLanguages = new List<string> { "fr-FR", "de-DE", "es-ES" }`'},{id:"C",text:'使用 `translationConfig.SetOutputLanguages("fr,de,es")`'},{id:"D",text:"在 `SpeechRecognitionLanguage` 中同时指定多个目标语言"}],answer:"A"},{id:"143",type:"single",content:`**背景**

你正在构建一个聊天机器人，使用 Microsoft Bot Framework SDK，机器人将引导用户通过一系列固定步骤完成**产品退货申请流程**（依次询问：订单号 → 退货原因 → 偏好退款方式）。

**题目**

哪种对话类型最适合实现这个有序、固定步骤的对话流程？`,explanation:`**瀑布对话（Waterfall Dialog）** 定义了一系列有序执行的步骤（Steps），非常适合固定流程的线性引导：

\`\`\`csharp
var waterfallSteps = new WaterfallStep[]
{
    AskOrderNumberStepAsync,    // 步骤1：询问订单号
    AskReturnReasonStepAsync,   // 步骤2：询问退货原因
    AskRefundPreferenceStepAsync, // 步骤3：询问退款偏好
    FinalStepAsync              // 步骤4：提交并确认
};
AddDialog(new WaterfallDialog(nameof(WaterfallDialog), waterfallSteps));
\`\`\`

每个步骤完成后自动进入下一步，非常直观。

Adaptive Dialog 支持事件驱动，更适合复杂分支逻辑；Prompt 用于单个输入请求；Component 用于封装复用的对话模块。

---`,options:[{id:"A",text:"Prompt Dialog"},{id:"B",text:"Waterfall Dialog（瀑布对话）"},{id:"C",text:"Adaptive Dialog（自适应对话）"},{id:"D",text:"Component Dialog（组件对话）"}],answer:"B"},{id:"144",type:"single",content:`**背景**

你正在使用 Bot Framework SDK 开发一个聊天机器人。当机器人加入对话时，需要**主动向新加入的用户发送欢迎消息**。

**题目**

在机器人的代码中，应重写（Override）哪个方法来实现这个逻辑？`,explanation:`**\`OnMembersAddedAsync\`** 是 \`ActivityHandler\` 类中专门处理"新成员加入对话"事件的方法。当用户（或机器人自身）加入对话时，该方法被触发，开发者可以在这里实现欢迎消息逻辑：

\`\`\`csharp
protected override async Task OnMembersAddedAsync(
    IList<ChannelAccount> membersAdded,
    ITurnContext<IConversationUpdateActivity> turnContext,
    CancellationToken cancellationToken)
{
    foreach (var member in membersAdded)
    {
        if (member.Id != turnContext.Activity.Recipient.Id)
        {
            await turnContext.SendActivityAsync(MessageFactory.Text("Welcome!"));
        }
    }
}
\`\`\`

\`OnMessageActivityAsync\` 处理用户发送的消息，不适合欢迎逻辑。

---`,options:[{id:"A",text:"`OnMessageActivityAsync`"},{id:"B",text:"`OnMembersAddedAsync`"},{id:"C",text:"`OnConversationUpdateActivityAsync`"},{id:"D",text:"`OnTurnAsync`"}],answer:"B"},{id:"145",type:"multiple",content:`**背景**

你有一个 Azure 认知搜索（Azure Cognitive Search）服务，其中一个使用主管理密钥的 Web 应用在安全审查中发现主密钥可能已被泄露，存在未授权的**索引管理操作**。

你需要防止未授权访问，且解决方案必须**最小化停机时间**。

**题目**

应按顺序执行哪些步骤？`,explanation:`零停机轮换管理密钥的正确流程：

1. **重新生成辅助管理密钥（A）**：此时应用仍使用主密钥正常运行，生成新的辅助密钥作为切换目标
2. **将应用切换到辅助管理密钥（B）**：更新应用配置，使用新的辅助密钥，应用继续正常运行（无停机）
3. **重新生成主管理密钥（C）**：旧的泄露主密钥失效，未授权访问被终止

注意：不能直接删除管理密钥（D），Azure 认知搜索服务始终保持两个管理密钥；切换到查询密钥（E）会导致索引管理功能不可用。

---`,options:[{id:"A",text:"重新生成辅助管理密钥"},{id:"B",text:"将应用更改为使用辅助管理密钥"},{id:"C",text:"重新生成主管理密钥（使旧密钥失效）"},{id:"D",text:"立即删除主管理密钥"},{id:"E",text:"将所有查询切换为只读查询密钥"}],answer:["A","B","C"]},{id:"146",type:"single",content:`**背景**

你正在使用 Azure AI 服务构建一个处理工厂流水线检测的监控系统，需要对多个相关传感器（转速、角度、温度、压力）的数据进行**综合异常检测**，当出现跨传感器联合异常时生成警报。

**题目**

解决方案中应包含哪个组件？`,explanation:`当多个传感器之间**存在物理关联性**时（如发动机的温度和转速通常同步变化），仅靠单独分析每个传感器（单变量）无法发现"温度正常但压力异常低"这类跨传感器复合异常。

**多变量异常检测（Multivariate Anomaly Detection）** 通过同时分析多条时间序列之间的相关性，能够发现这类组合异常，更适合工业设备监控场景。

单变量异常检测适合独立分析单一时间序列（如电力消耗曲线），不能捕获跨传感器的联合异常。

---`,options:[{id:"A",text:"Application Insights（应用程序洞察）"},{id:"B",text:"Azure Monitor 中的指标警报"},{id:"C",text:"多变量异常检测（Multivariate Anomaly Detection）"},{id:"D",text:"单变量异常检测（Univariate Anomaly Detection）"}],answer:"C"},{id:"147",type:"single",content:`**背景**

你正在构建一个面向客户的语音通话处理机器人，该机器人使用 Azure AI Speech 服务。你需要配置机器人以支持**语音交互**，且解决方案必须**支持多个客户端应用**（如网页、移动 App、智能音箱）。

**题目**

应为机器人使用哪种频道（Channel）类型？`,explanation:`**Direct Line Speech 频道** 是 Bot Framework 中专门为语音交互设计的频道，特点是：

- 与 Azure AI Speech 服务深度集成，支持语音输入/输出
- 支持多种客户端（网页 SDK、移动 SDK、IoT 设备等）
- 提供低延迟的实时双向语音通信

- **Cortana 频道**（A）：已被微软逐步淘汰，2021 年后不再支持新应用接入
- **Microsoft Teams 频道**（B）：支持语音（通话），但主要针对 Teams 内的协作场景，不是通用的多客户端语音解决方案

---`,options:[{id:"A",text:"Cortana 频道"},{id:"B",text:"Microsoft Teams 频道"},{id:"C",text:"Direct Line Speech 频道"}],answer:"C"},{id:"148",type:"multiple",content:`**背景**

你有一个 Azure AI Content Safety 资源，需要对用户生成的文本消息进行内容审核，特别是识别**攻击性语言和性暗示语言**。

**题目**

在调用 Content Moderator Text Moderation API 时，需要配置哪三个参数/设置？`,explanation:'调用 Content Moderator Text Moderation API 的必要配置：\n\n- **`language`（A）**：指定文本语言（如 `"eng"`），有助于提高检测准确率\n- **`classify=true`（B）**：启用三类内容分类（Category1：成人，Category2：性暗示，Category3：冒犯性），返回各类别的置信度分数\n- **`Ocp-Apim-Subscription-Key`（E）**：API 认证头，必须包含在所有 Content Moderator API 请求中\n\n`autocorrect`（C）是可选的拼写纠错功能，不是必须配置的检测参数；置信度阈值（D）由调用方在接收响应后自行判断，不是 API 参数。\n\n---',options:[{id:"A",text:'设置 `language` 参数为 `"eng"`（英语）'},{id:"B",text:"启用 `classify` 功能（返回三类内容类别）"},{id:"C",text:"启用 `autocorrect` 自动纠错"},{id:"D",text:"设置最低置信度阈值（Score threshold）"},{id:"E",text:"在 API 请求头中包含 `Ocp-Apim-Subscription-Key`"}],answer:["A","B","E"]},{id:"149",type:"single",content:`**背景**

你在分析一段对话文本，使用了 Azure AI Language 的 Named Entity Recognition（NER）功能。分析结果以 JSON 响应返回，其中包含识别到的实体信息。

**题目**

以下关于 NER API 响应的说法，哪项正确？`,explanation:"Azure AI Language NER API 的响应中，每个实体包含：\n- `text`：实体文本内容\n- `category`：实体类别（如 Person、Location、Organization 等）\n- `subcategory`：子类别（可选）\n- **`offset`**：实体在原文中的起始字符位置 ✅\n- **`length`**：实体文本的字符长度 ✅\n- `confidenceScore`：置信度\n\n- Wikipedia 链接属于**实体链接（Entity Linking）** API 的功能，而非 NER\n- NER 实体每次识别只有一个主类别（Category）\n- NER 支持的实体类别约为 20+ 种（如 Person、Location、Organization、DateTime、Quantity 等），不是 200+\n\n---",options:[{id:"A",text:"每个实体只属于一种类别（Category），不会同时属于多个类别"},{id:"B",text:"响应中包含实体在原文中的起始偏移量（offset）和长度（length）"},{id:"C",text:"NER API 响应中包含每个实体对应的 Wikipedia 链接"},{id:"D",text:"NER 可以识别超过 200 种不同的实体类别"}],answer:"B"},{id:"150",type:"single",content:`**背景**

你是一家零售公司的 AI 工程师，正在构建一个使用 Azure OpenAI 的智能客服系统。系统使用 GPT-4 模型，当用户询问某产品的库存状态时，系统需要实时查询数据库。

你需要实现这一功能，且**最小化开发工作量**。

**题目**

应使用 Azure OpenAI 的哪种功能来实现实时数据库查询？`,explanation:`**函数调用（Function Calling）** 是 Azure OpenAI 中允许模型在对话中**主动决定调用外部函数**的功能：

1. 在 API 请求中定义函数（如 \`query_inventory(product_id)\`）的名称、描述和参数
2. 当用户询问库存时，模型生成函数调用请求（包含参数）
3. 应用执行实际的数据库查询
4. 将查询结果返回给模型，模型生成最终回答

这种方式支持实时查询（数据不需要预先索引），开发工作量小，是标准的 AI + 数据库集成模式。

---`,options:[{id:"A",text:"微调（Fine-tuning）：将数据库内容作为训练数据"},{id:"B",text:"函数调用（Function Calling）：定义查询数据库的函数，让模型决定何时调用"},{id:"C",text:"提示词工程：在系统消息中包含完整的产品库存数据"},{id:"D",text:"RAG 模式：将所有库存数据索引到 Azure AI Search"}],answer:"B"},{id:"151",type:"single",content:`**背景**

你有一个 Azure AI Foundry Content Safety 资源（resource1），需要构建一个应用来**识别包含仇恨内容的文本**。

**题目**

在应用代码中，应使用哪个客户端类和方法来调用 Content Safety API 检测仇恨内容？`,explanation:`Azure AI Content Safety SDK 使用 \`ContentSafetyClient.AnalyzeTextAsync()\` 方法分析文本内容，通过 \`categories\` 参数指定要检测的类别：

\`\`\`python
from azure.ai.contentsafety import ContentSafetyClient
from azure.ai.contentsafety.models import AnalyzeTextOptions, TextCategory

client = ContentSafetyClient(endpoint, credential)
request = AnalyzeTextOptions(
    text="user input text",
    categories=[TextCategory.HATE]
)
response = client.analyze_text(request)
hate_result = response.categories_analysis[0]  # Hate 类别的得分
\`\`\`

\`TextAnalyticsClient\` 是 Azure AI Language 的客户端，情感分析和仇恨检测是不同功能。

---`,options:[{id:"A",text:'`ContentSafetyClient.AnalyzeTextAsync()`，在请求中设置 `categories: ["Hate"]`'},{id:"B",text:"`TextAnalyticsClient.AnalyzeSentimentAsync()`，检查负面情感分数"},{id:"C",text:"`ContentModerator.TextModeration.ScreenText()`，设置分类类别"},{id:"D",text:"`AzureOpenAIClient.ChatCompletion()`，在系统消息中要求检测仇恨内容"}],answer:"A"},{id:"152",type:"single",content:`**背景**

你在 Azure AI Language 服务的文本处理中，使用以下 C# 代码进行实体识别：

\`\`\`csharp
var response = client.RecognizeEntities(
    "Our tour of Paris included a visit to the Eiffel Tower."
);
var entities = response.Value.Entities;
\`\`\`

**题目**

该代码的输出将包含哪些实体？`,explanation:'`RecognizeEntities`（命名实体识别）从文本中识别命名实体：\n\n- **"Paris"**：地理位置实体（Location）✅\n- **"Eiffel Tower"**：地理位置/地标实体（Location）✅\n- "tour"、"visit"：普通名词/动词，不是命名实体\n- 整个句子不会作为实体返回\n\n输出的 `entities` 集合包含两个实体对象，各有 `Text`、`Category`、`ConfidenceScore` 等属性。\n\n---',options:[{id:"A",text:"Our tour of Paris included a visit to the Eiffel Tower（整个句子）"},{id:"B",text:"Paris 和 Eiffel Tower"},{id:"C",text:"tour 和 visit"},{id:"D",text:"Paris only"}],answer:"B"},{id:"153",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Translator 的文档翻译（Document Translation）功能，将 Word 和 PowerPoint 文档从德语翻译为法语，同时保留格式。

**题目**

以下关于文档翻译服务（Document Translation）的说法，哪项正确？`,explanation:`Azure AI Translator **文档翻译（Document Translation）** 服务的特点：

- **支持格式**：.docx、.pptx、.xlsx、.pdf、.html、.txt 等多种文档格式 ✅
- **保留格式**：翻译后保持原始文档的布局、字体、样式等 ✅
- **异步操作**：大型文档翻译是异步批处理任务，需要轮询状态
- **支持自定义术语表**：可以上传 TSV/XLIFF 格式的术语表，确保专业术语翻译的一致性 ✅

---`,options:[{id:"A",text:"文档翻译仅支持 TXT 和 HTML 格式，不支持 DOCX 或 PPTX"},{id:"B",text:"文档翻译是同步操作，API 调用会立即返回翻译结果"},{id:"C",text:"文档翻译支持 Word（.docx）、PowerPoint（.pptx）等格式，并保留原始格式"},{id:"D",text:"文档翻译无法使用自定义术语表"}],answer:"C"},{id:"154",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务处理文本，使用以下函数：

\`\`\`python
def process_text(client, text):
    result = client.extract_key_phrases([text])[0]
    return result.key_phrases
\`\`\`

调用时传入：\`"Our tour of Paris included a visit to the Eiffel Tower."\`

**题目**

该函数的返回值将包含什么？`,explanation:`Key Phrase Extraction（关键短语提取）从文本中提取**语义上最重要的短语**，过滤掉停用词和功能性词汇：

- **"Paris"**：高语义价值的地名关键词 ✅
- **"Eiffel Tower"**：高语义价值的地标名称关键词 ✅
- "Our tour"、"visit"：相对通用的短语，关键性较低，通常不被提取

注意：关键短语提取与 NER 不同，它关注文本的主题重点，不局限于命名实体类别。具体提取结果可能因模型版本略有差异，但 Paris 和 Eiffel Tower 是最典型的关键短语。

---`,options:[{id:"A",text:'`["Our tour", "Paris", "visit", "Eiffel Tower"]`'},{id:"B",text:'`["Paris", "Eiffel Tower"]`'},{id:"C",text:'`["tour", "Paris", "Eiffel Tower"]`'},{id:"D",text:'`["Paris", "Eiffel Tower", "tour"]`'}],answer:"B"},{id:"155",type:"multiple",content:`**背景**

你正在构建一个 Azure AI Foundry 中的代理，需要查询 Azure AI Search 索引中的数据来回答用户问题。

**题目**

在代理代码中，需要初始化 \`AzureAISearchTool\` 工具，以下哪些参数是必须提供的？`,explanation:`\`AzureAISearchTool\` 的最小必要配置：

\`\`\`python
from azure.ai.projects.models import AzureAISearchTool

search_tool = AzureAISearchTool(
    index_connection_id=ai_search_connection.id,  # 必须：连接 ID
    index_name="your-index-name"                  # 必须：索引名称
)
\`\`\`

- **连接 ID（A）**：通过 AI Foundry 项目中预先创建的连接（Connection）提供，包含认证信息（无需直接传入 Admin Key）
- **索引名称（B）**：指定要搜索的具体索引

管理员密钥（C）通过连接对象隐式传递，不需要直接在工具中指定；字段列表（D）和 Top K（E）是可选配置参数。

---`,options:[{id:"A",text:"搜索服务的连接 ID（Connection ID）"},{id:"B",text:"Azure AI Search 索引的名称（Index Name）"},{id:"C",text:"搜索服务的管理员密钥（Admin Key）"},{id:"D",text:"要搜索的字段列表（Field Names）"},{id:"E",text:"搜索结果的最大数量（Top K）"}],answer:["A","B"]},{id:"156",type:"single",content:`**背景**

你正在构建一个通话处理系统，来电可能是法语或德语用户。系统必须：

- 实时识别来电语言
- 根据语言将通话路由到对应的支持团队

**题目**

应使用哪个 Azure AI 服务来**实时识别通话中的语言**？`,explanation:`通话是**音频流**，需要先进行语音识别（Speech-to-Text）才能分析语言。**Azure AI Speech 服务**提供内置的语言识别功能（Auto Language Detection），可以在语音转文字的同时自动检测说话者使用的语言：

\`\`\`python
auto_detect_config = AutoDetectSourceLanguageConfig(
    languages=["fr-FR", "de-DE"]
)
\`\`\`

- Azure AI Language 的语言检测（B）处理的是**文本**输入，不能直接处理音频
- Translator（C）的语言检测也是文本处理，不适用于音频流

对于实时通话场景，需要先将语音转为文字再检测语言，Azure AI Speech 的实时语言检测是最直接的方案。

---`,options:[{id:"A",text:"Azure AI Speech（语音转文字 + 语言识别）"},{id:"B",text:"Azure AI Language（语言检测 API）"},{id:"C",text:"Azure AI Translator（语言检测功能）"},{id:"D",text:"Azure AI Content Safety"}],answer:"A"},{id:"157",type:"single",content:`**背景**

你有一个 Azure AI Video Indexer 账户，需要构建一个页面来展示公司内部会议的视频。页面嵌入了 Player 小部件和 Cognitive Insights 小部件。

你需要配置这两个小部件，满足以下要求：
- 允许用户搜索关键词
- 在视频中显示人物姓名和面孔
- 以英语（美国）显示字幕

**题目**

以下说法关于 Widget 配置 URL 参数的哪个组合是正确的？`,explanation:`Video Indexer Widget 功能分工：

- **Player Widget**：负责视频播放和字幕显示，通过 URL 参数 \`language=en-US\` 设置字幕语言
- **Cognitive Insights Widget**：负责显示 AI 分析结果，包括：
  - 关键词（Keywords）搜索
  - 人物（People）识别与显示
  - 情感、话题、品牌等其他洞察

两个 Widget 通过 \`videoId\` 同步，Player 中的播放位置变化会同步到 Cognitive Insights 的时间线。

---`,options:[{id:"A",text:"关键词搜索由 Cognitive Insights Widget 提供，人物显示由 Player Widget 控制，字幕语言参数为 `captions=en-US`"},{id:"B",text:"关键词搜索和字幕都由 Player Widget 控制，人物识别由 Cognitive Insights Widget 提供，字幕参数为 `language=en-US`"},{id:"C",text:"关键词搜索和人物显示都在 Cognitive Insights Widget 中配置，字幕在 Player Widget 中通过 `language=en-US` 参数设置"},{id:"D",text:"Player Widget 负责字幕，Cognitive Insights Widget 负责关键词搜索和人物信息，两者都支持 `language=en-US` 参数"}],answer:"C"},{id:"158",type:"single",content:`**背景**

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

应如何提高对模糊图像和侧脸的检测能力？`,explanation:"Azure Face API 提供多个**检测模型（Detection Models）**，针对不同场景优化：\n\n| 模型 | 特点 |\n|------|------|\n| `detection_01` | 默认模型，适合常规正面人脸 |\n| `detection_02` | 对模糊图像和非正面（侧脸）有改善 |\n| `detection_03` | 最新模型，进一步提升了对小人脸、遮挡和侧脸的检测能力 |\n\n将 `detectionModel` 参数从默认值改为 `detection_03`，可以显著提高对模糊图像和侧脸的检测率，无需更换服务。\n\n---",options:[{id:"A",text:"使用 Face API 的更新版本"},{id:"B",text:"使用 Computer Vision 服务替代 Face 服务"},{id:"C",text:"使用 Identify 方法替代 Detect 方法"},{id:"D",text:"更改检测模型（Detection Model）"}],answer:"D"},{id:"159",type:"single",content:`**背景**

你需要为 Azure AI 搜索构建一个富化管道，对大量扫描文档进行 OCR 文字提取，然后在搜索索引中实现全文搜索。

**题目**

应在技能集中包含哪个内置技能来实现 OCR 文字提取？`,explanation:`**OCR Skill（光学字符识别技能）** 是 Azure AI Search 内置技能集中专门用于从扫描文档、图像等中提取文字的技能：

\`\`\`json
{
  "@odata.type": "#Microsoft.Skills.Vision.OcrSkill",
  "detectOrientation": true,
  "inputs": [{ "name": "image", "source": "/document/normalized_images/*" }],
  "outputs": [{ "name": "text", "targetName": "rawText" }]
}
\`\`\`

它调用 Azure Computer Vision 的 Read API 进行 OCR，支持多语言文本提取，是扫描文档全文搜索的必要技能。

Document Extraction Skill 用于从文件容器中提取内容；Image Analysis Skill 用于图像理解（标签、描述等），不专注于文字提取。

---`,options:[{id:"A",text:"关键短语提取技能（Key Phrase Extraction Skill）"},{id:"B",text:"光学字符识别技能（OCR Skill）"},{id:"C",text:"文档提取技能（Document Extraction Skill）"},{id:"D",text:"图像分析技能（Image Analysis Skill）"}],answer:"B"},{id:"160",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（resource1）和一个存储账户（storage1），其中有一个 Blob 容器（container1）包含示例图像文件。

你运行了如下 cURL 命令来检测图像中的潜在暴力内容，提交的测试图像仅包含一个**圆圈（circle）**。

**题目**

期望的输出结果是什么？`,explanation:`Azure AI Content Safety 图像分析 API 返回每个安全类别的**严重性得分（整数 0-7）**：

- **0**：无检测到的该类别内容
- 2、4、6：轻度、中度、重度
- **7**：最高严重性

对于只包含简单几何图形（圆圈）的测试图像，**暴力内容（Violence）** 类别的得分应为 **0**，表示没有检测到任何暴力相关内容。

---`,options:[{id:"A",text:"0（暴力内容得分为 0，表示未检测到暴力内容）"},{id:"B",text:"0.0（浮点数形式的 0）"},{id:"C",text:"7（最高严重性得分）"},{id:"D",text:"100（百分比形式）"}],answer:"A"},{id:"161",type:"single",content:`**背景**

你有一个自定义 Azure AI Document Intelligence 模型，用于识别合同文档。你需要**支持新的合同格式**，且解决方案必须**最小化开发工作量**。

**题目**

应采取什么措施？`,explanation:`**增量训练（Incremental Training）** 是扩展已有模型能力的最小工作量方式：

1. 准备新合同格式的标注示例（至少 5 个样本）
2. 将新样本添加到**现有训练集**中
3. 使用扩充后的数据集**重新训练**现有模型

这样模型可以在保留原有格式识别能力的同时，学习识别新的合同格式，不需要从头创建新模型（代价最大）。

---`,options:[{id:"A",text:"降低 App1 的置信度阈值"},{id:"B",text:"降低 App1 的准确度阈值"},{id:"C",text:"将新的合同格式样本添加到现有训练集中，然后重新训练模型"},{id:"D",text:"创建一个新的训练集，并添加新的合同格式"},{id:"E",text:"创建并训练一个全新的自定义模型"}],answer:"C"},{id:"162",type:"multiple",content:`**背景**

你正在使用 Azure OpenAI Chat playground 构建一个聊天机器人，需要确保机器人**生成简洁的正式商务语言文本**，同时：

- 降低语言模型的运行成本
- 保持聊天历史窗口（Context Window）大小不变

**题目**

应配置哪两项设置？`,explanation:`- **系统消息（A）**：通过明确指示模型使用"简洁正式的商务语言"，直接控制输出风格，是最直接的方法
- **降低最大响应 Token 数（B）**：简洁回答意味着更少的 Token，降低 \`max_tokens\` 限制可以直接减少每次调用消耗的 Token，从而降低成本。同时，历史窗口大小（由 \`max_context_tokens\` 控制，默认保持不变）不受影响

更换模型（C）也可以降低成本，但可能影响输出质量，且题目未提及允许降低质量。

---`,options:[{id:"A",text:"修改系统消息（System Message），要求使用简洁正式语言"},{id:"B",text:"降低最大响应 Token 数（Max response tokens）"},{id:"C",text:"将模型更换为更小的版本（如从 GPT-4 切换至 GPT-3.5）"},{id:"D",text:"降低 Temperature 到 0"},{id:"E",text:"增加 Top P 到 1.0"}],answer:["A","B"]},{id:"163",type:"single",content:`**背景**

你正在为客户支持聊天机器人配置功能，需要识别以下两类内容：

- **公司产品代码名（Code names）**：如内部研发中的产品别名（非标准词汇）
- **信用卡号码**：需要检测并阻止客户意外分享的信用卡信息

解决方案必须**最小化开发工作量**。

**题目**

应为这两项需求分别使用 Azure Cognitive Service for Language 的哪个功能？`,explanation:`- **产品代码名**：是公司内部专有名词，不在标准 NER 识别范围内，需要**自定义命名实体识别（Custom NER）** 进行训练和识别
- **信用卡号**：属于个人可识别信息（PII），Azure AI Language 的 **PII Detection** 内置了对信用卡号（\`CreditCardNumber\` 类别）的检测，无需自定义训练，开发工作量最小

这两种功能都在 Azure AI Language 服务中提供，可以在同一个服务实例中调用。

---`,options:[{id:"A",text:"产品代码名→命名实体识别（NER）；信用卡号→个人信息识别（PII Detection）"},{id:"B",text:"产品代码名→自定义命名实体识别（Custom NER）；信用卡号→个人信息识别（PII Detection）"},{id:"C",text:"产品代码名→关键短语提取；信用卡号→情感分析"},{id:"D",text:"产品代码名→实体链接；信用卡号→关键短语提取"}],answer:"B"},{id:"164",type:"single",content:`**背景**

你需要为应用配置 Azure AI Language 服务，以识别文本中的**温度值**（如 "25 degrees Celsius"）、**货币值**（如 "$150"）、**电子邮件地址**和**电话号码**。解决方案必须**最小化开发工作量**。

**题目**

应使用哪种模型能力？`,explanation:`Azure AI Language（LUIS / CLU）提供多种**预构建实体（Prebuilt Entities）**，无需自定义训练即可识别常见数据类型：

| 预构建实体 | 识别内容 |
|-----------|---------|
| \`Temperature\` | 温度值（25°C、100°F 等） |
| \`Currency\` | 货币值（$150、€200 等） |
| \`Email\` | 电子邮件地址 |
| \`PhoneNumber\` | 电话号码 |

直接在项目中添加这些预构建实体组件即可立即使用，无需准备标注数据或训练，开发工作量最小。

---`,options:[{id:"A",text:"列表实体（List Entities）"},{id:"B",text:"学习实体（Learned Entities）"},{id:"C",text:"语料（Utterances）"},{id:"D",text:"正则表达式组件（Regular Expression Components）"},{id:"E",text:"预构建实体组件（Prebuilt Entity Components）"}],answer:"E"},{id:"165",type:"single",content:`**背景**

你构建了一个 Conversational Language Understanding（CLU）模型，在测试中发现：用户提出的一些**与模型能力无关的随意问题**时，模型返回了错误的意图匹配结果（而非识别为"不支持的请求"）。

**题目**

应采取什么措施来确保模型能正确识别这些无关请求？`,explanation:`> ⚠️ **注意**：原题（165）答案为 A（Enable Active Learning），但从场景分析，**添加 None 意图示例（C）** 是解决"模型错误匹配无关请求"问题的直接方案：

**None 意图**（也称为回退意图）用于识别模型不应该处理的请求。向 None 意图添加足够多样的无关示例语料，可以训练模型在遇到不相关问题时返回低置信度或 None 意图，而不是错误地匹配到某个自定义意图。

启用主动学习（A）是从生产流量中改进模型的长期策略，不能立即解决现有的错误分类问题。

---`,options:[{id:"A",text:"启用主动学习（Active Learning）"},{id:"B",text:"向自定义意图添加更多示例语料"},{id:"C",text:"向 None 意图添加示例语料（None Intent Examples）"},{id:"D",text:"添加更多实体"}],answer:"C"},{id:"166",type:"single",content:`**背景**

你正在构建一个问答机器人，使用 Azure AI Language 自定义问答服务。你需要通过 Language Studio 配置机器人支持**多轮对话（Multi-turn Conversations）**，使机器人能够根据上下文提供跟进问题选项。

**题目**

应在 Language Studio 中执行哪项操作来启用多轮对话？`,explanation:`**跟进提示（Follow-up Prompts）** 是实现多轮对话的核心功能。为每个问答对配置跟进提示后：

- 当用户触发某个答案时，机器人会显示相关的后续问题选项
- 用户可以点击选项继续深入探讨，形成多轮对话树

例如，用户问"如何重置密码？"→ 机器人回答后显示跟进提示：
- "通过邮件重置"
- "通过手机验证码重置"
- "联系管理员"

---`,options:[{id:"A",text:"添加替代问法（Add alternate questions）"},{id:"B",text:"启用主动学习（Enable active learning）"},{id:"C",text:"添加跟进提示（Add follow-up prompts）"},{id:"D",text:"启用闲聊（Enable chit-chat）"}],answer:"C"},{id:"167",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务的 Speech SDK 构建一个**流式音频实时转录**应用，使用 MP3 编码格式。

**题目**

在 Speech SDK 代码中，应使用什么配置类来支持 MP3 压缩音频格式的输入流？`,explanation:"默认的 Audio Config 假设输入为 WAV PCM 格式。要处理 MP3 等压缩格式，需要显式指定音频流格式：\n\n```csharp\nvar compressedFormat = AudioStreamFormat.GetCompressedFormat(AudioStreamContainerFormat.MP3);\nvar audioConfig = AudioConfig.FromStreamInput(pushStream, compressedFormat);\n```\n\n`GetCompressedFormat()` 方法接受 `AudioStreamContainerFormat` 枚举值，支持 MP3、OPUS、OGG 等压缩格式。\n\n若直接使用默认 `FromStreamInput(stream)` 处理 MP3 文件，会因格式不匹配而导致转录失败或错误结果。\n\n---",options:[{id:"A",text:"`AudioConfig.FromStreamInput(stream)` 默认配置"},{id:"B",text:"`AudioConfig.FromStreamInput(stream, AudioStreamFormat.GetCompressedFormat(AudioStreamContainerFormat.MP3))`"},{id:"C",text:'`SpeechConfig.SetProperty(PropertyId.SpeechServiceConnection_RecoLanguage, "mp3")`'},{id:"D",text:'`AudioConfig.FromWavFileInput("audio.mp3")`'}],answer:"B"},{id:"168",type:"single",content:`**背景**

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
3. 每个关键短语都会附带置信度分数`,explanation:'1. **正确**：`ExtractKeyPhrases` 方法确实返回关键短语列表（`KeyPhrases` 集合）\n2. **错误**："the" 是英语中最常见的停用词（stop word），没有独立语义意义，不会被作为关键短语提取。对于 "the cat sat on the mat"，可能提取 "cat" 和 "mat" 等有意义的词\n3. **错误**：关键短语提取 API **不返回置信度分数**，只返回短语文本字符串列表。（与情感分析不同，情感分析会返回置信度分数）\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-否，3-是"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"169",type:"single",content:`**背景**

你有一个使用 Azure AI 视觉服务（Computer Vision）的应用，应用需要对产品照片使用**智能裁剪（Smart Cropping）** 功能生成不同尺寸的缩略图。

你有一个名为 \`contoso1\` 的 Computer Vision 资源，部署在 West US 区域。

**题目**

调用智能裁剪功能的正确 API URL 格式是什么？`,explanation:"Computer Vision 的智能裁剪（Smart Cropping）功能使用 `generateThumbnail` 端点：\n\n```\nPOST https://{region}.api.cognitive.microsoft.com/vision/v3.1/generateThumbnail\n    ?width={width}&height={height}&smartCropping={true/false}\n```\n\n- HTTP 方法：**POST**（在请求体中提供图像 URL 或二进制数据）\n- 端点：`generateThumbnail`（而非 analyze）\n- 关键参数：`smartCropping=True`（启用 AI 智能裁剪，保留图像重要区域）\n\n---",options:[{id:"A",text:"`POST https://westus.api.cognitive.microsoft.com/vision/v3.1/generateThumbnail?width=500&height=500&smartCropping=True`"},{id:"B",text:"`GET https://westus.api.cognitive.microsoft.com/vision/v3.1/generateThumbnail?width=500&height=500`"},{id:"C",text:"`POST https://contoso1.cognitiveservices.azure.com/vision/v3.1/smartCrop?width=500&height=500`"},{id:"D",text:"`POST https://westus.api.cognitive.microsoft.com/vision/v3.1/analyze?visualFeatures=Thumbnail`"}],answer:"A"},{id:"170",type:"single",content:`**背景**

你正在构建一个监控工厂生产线的系统，需要检测工人是否正确穿戴个人防护装备（PPE，如口罩和安全眼镜）。系统要求：

- 识别未戴口罩或安全眼镜的员工
- 每 15 分钟执行一次合规检查
- 最小化开发工作量
- 最小化成本

**题目**

应使用哪个 Azure AI 服务？`,explanation:`**Azure Face 服务** 提供人脸检测和面部属性分析功能，可以检测以下遮挡属性（\`FaceAttributeType.Occlusion\`）：
- \`faceCovered\`：面部是否被遮挡（如口罩）
- \`eyeOccluded\`：眼部是否被遮挡（如安全眼镜）

这可以直接用于检测员工是否穿戴了 PPE，无需自定义训练，是最简单的实现方式。

> ⚠️ **注意**：Azure Face 服务中涉及人脸识别的高级功能（如人员识别）需要申请访问权限；但基础的人脸检测和属性分析功能通常无需特别申请。Computer Vision 也能进行物体检测，但对 PPE 合规检测不如 Face API 精准。

---

*第 101–170 题整理完毕。*

---`,options:[{id:"A",text:"Face 服务（Azure Face API）"},{id:"B",text:"Computer Vision（Azure AI Vision）"},{id:"C",text:"Azure Video Analyzer for Media（原 Video Indexer）"}],answer:"A"},{id:"171",type:"multiple",content:`**背景**

你需要使用 Azure OpenAI Studio 对 GPT-4 模型进行图像分析。你需要在 Azure OpenAI Studio 中配置模型以获取图像的文字描述。

**题目**

在 Azure OpenAI Studio 中，应按顺序执行哪四项操作？`,explanation:`使用 Azure OpenAI Studio 分析图像的完整流程：

1. **部署 GPT-4 Vision 模型（A）**：必须选择支持视觉功能的 GPT-4 模型版本（\`vision-preview\` 或 \`gpt-4o\`）
2. **打开 Chat playground（B）**：图像分析通过聊天界面进行，而非 Completions playground
3. **设置系统消息（C）**：定义助手角色，告知模型处理图像描述任务
4. **上传图像并提问（D）**：在聊天窗格通过附件上传图像，并输入分析提示词

---`,options:[{id:"A",text:"创建新部署，选择 GPT-4 模型，设置模型版本为 `vision-preview`"},{id:"B",text:"打开 Chat playground 并选择已部署的模型"},{id:"C",text:'在 System message 字段中输入："You are an AI assistant that describes images."'},{id:"D",text:'在 Chat session 窗格中输入提示词"Describe this image"，并通过附件按钮上传图像'},{id:"E",text:"在 Completions playground 中粘贴图像的 Base64 编码"}],answer:["A","B","C","D"]},{id:"172",type:"single",content:`**背景**

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
3. 需要调用 \`SaveChangesAsync()\` 才能将状态变更写回存储`,explanation:"1. **正确**：`CreateProperty<T>()` 返回一个 `IStatePropertyAccessor<T>`，用于对状态中的特定属性进行 get/set 操作\n2. **错误**：**Memory Storage 是内存中的临时存储**，机器人进程重启后，所有状态数据**丢失**。生产环境应使用 Azure Blob Storage 或 Cosmos DB 持久化存储\n3. **正确**：在对话轮次（Turn）结束时，必须调用 `await _userState.SaveChangesAsync(turnContext)` 将状态变更写回，否则更改不会持久化\n\n---",options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-是"},{id:"C",text:"1-是，2-是，3-否"},{id:"D",text:"1-否，2-否，3-是"}],answer:"B"},{id:"173",type:"single",content:`**背景**

你有一个 Azure AI Search 服务，在过去 12 个月里查询量持续增长，部分搜索查询请求开始被**限速（Throttled）**。

**题目**

以下三种方案，哪种可以有效减少被限速的可能性？

- 方案 A：迁移到更高定价层的 Cognitive Search 服务
- 方案 B：添加更多索引（Add more indexes）
- 方案 C：启用 CMK 加密

判断每种方案是否有效：`,explanation:`- **方案 A（有效）**：更高定价层提供更多副本（Replicas）支持，副本数增加可以提高并发查询处理能力，有效缓解查询限速
- **方案 B（无效）**：添加索引只增加了数据存储和索引复杂度，不提升查询吞吐量，对限速没有帮助
- **方案 C（无效）**：CMK 加密是数据安全功能，与性能无关，且实际上会**增加**索引大小和**降低**查询性能

---`,options:[{id:"A",text:"仅方案 A 有效"},{id:"B",text:"方案 A 和 B 均有效"},{id:"C",text:"三种方案均有效"},{id:"D",text:"三种方案均无效"}],answer:"A"},{id:"174",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Language 分析文章的应用，文章文本为：

> "Our tour guide took us up the Space Needle during our trip to Seattle last week."

应用调用 Language 服务并得到包含以下信息的响应：
- "Space Needle" → 地标（Landmark）
- "Seattle" → 地理位置（GeographicArea）
- "last week" → 时间表达（DateRange）

**题目**

使用了哪个 Language 服务 API？`,explanation:`**命名实体识别（NER）** 识别文本中具有语义类型的实体并分类，响应包含：
- \`text\`（实体文本）
- \`category\`（类别，如 Location、DateTime）
- \`subcategory\`（子类别，如 Landmark、GeographicArea）
- \`confidenceScore\`（置信度）

题目中的响应格式（地标分类、地理位置分类、日期范围分类）正是 NER 的典型输出。

实体链接（A）额外提供 Wikipedia URL；关键短语提取（C）只返回重要短语字符串，没有类别信息；情感分析（D）返回正/负/中性评分。

---`,options:[{id:"A",text:"实体链接（Entity Linking）"},{id:"B",text:"命名实体识别（Named Entity Recognition，NER）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）"},{id:"D",text:"情感分析（Sentiment Analysis）"}],answer:"B"},{id:"175",type:"single",content:`**背景**

你正在使用 Conversational Language Understanding（CLU）服务构建一个自然语言模型。在测试时，用户反馈模型在处理**与模型能力无关的问题**时给出了错误的响应。

**题目**

为了确保模型能正确识别并处理超出其能力范围的请求，应采取什么措施？`,explanation:`**None 意图（None Intent）** 是 CLU/LUIS 中的特殊意图，用于捕获所有不属于任何自定义意图的用户输入。

向 None 意图添加足够多样的无关示例，可以让模型学会区分：
- 相关请求 → 匹配具体自定义意图
- 无关请求 → 匹配 None 意图（低置信度，触发回退逻辑）

这直接解决"对无关问题返回错误匹配"的问题。最佳实践是 None 意图的示例数量应与所有其他意图示例数量之和相当。

---`,options:[{id:"A",text:"启用主动学习"},{id:"B",text:"向自定义意图添加更多示例"},{id:"C",text:'向 None 意图添加示例（标记为"无效/无关请求"）'},{id:"D",text:"添加更多实体"}],answer:"C"},{id:"176",type:"multiple",content:`**背景**

你正在构建一个 Conversational Language Understanding 模型，需要支持以下用户语料：

- "Set all the lights to on." → 设置所有灯为开
- "Turn off the lights in the living room." → 关闭客厅的灯
- "What is the current thermostat temperature?" → 查询恒温器当前温度
- "Lower the temperature of the thermostat by five degrees." → 降低恒温器温度5度

**题目**

应向模型添加哪三个元素（每个正确答案都是解决方案的一部分）？`,explanation:`分析四个语料：
- 前两条："设置/关闭灯"→ **更改设置（change setting）** 类意图
- 后两条：一条是查询，一条是调整 → 可以合并为"设备控制"意图或拆分

模型元素设计：
- **\`change setting\` 实体（B）**：从语料中提取"设置值"（如 on/off、five degrees）的实体
- **\`change setting\` 意图（D）**：涵盖"设置/调整"类操作（前两条 + 第四条）
- **\`device\` 实体（F）**：提取语料中的设备对象（lights、thermostat）

> ⚠️ **争议说明**：原题答案为 B（change setting entity）、**C（device intent）**、F（device entity），这意味着"device 意图"覆盖设备操作，而非分为 change setting 和 query setting 两个意图。不同版本的解析有差异，请结合具体考试版本判断。

---`,options:[{id:"A",text:"location（位置）意图"},{id:"B",text:"change setting（更改设置）实体"},{id:"C",text:"device（设备类型）意图"},{id:"D",text:"change setting（更改设置）意图"},{id:"E",text:"query setting（查询设置）意图"},{id:"F",text:"device（设备类型）实体"}],answer:["B","D","F"]},{id:"177",type:"multiple",content:`**背景**

你正在使用 Bot Framework SDK 构建一个机器人，并需要在**本地计算机上以交互方式测试**该机器人。

**题目**

应按顺序执行哪三项操作？`,explanation:`在本地交互测试机器人的步骤：

1. **本地启动机器人（A）**：在命令行或 IDE 中运行机器人项目（如 \`dotnet run\` 或 \`node index.js\`），使其监听本地端口（默认 3978）
2. **打开 Bot Framework Emulator（B）**：启动 Emulator 桌面应用
3. **连接本地端点（C）**：在 Emulator 中点击"Open Bot"，输入本地端点 URL \`http://localhost:3978/api/messages\`，即可开始交互测试

不需要部署到 Azure（D）或注册（E）即可进行本地测试。

---`,options:[{id:"A",text:"在本地启动机器人"},{id:"B",text:"打开 Bot Framework Emulator"},{id:"C",text:"在 Emulator 中连接到机器人的本地端点（如 http://localhost:3978/api/messages）"},{id:"D",text:"将机器人部署到 Azure"},{id:"E",text:"在 Azure 门户中注册机器人"}],answer:["A","B","C"]},{id:"178",type:"single",content:`**背景**

你正在设计一个使用 Azure AI 服务的互联网远程学习解决方案。你的公司发现在培训过程中，一些学习者会长时间离开桌面或注意力不集中。

你需要使用学习者电脑的**视频和音频流**来检测学习者是否在场并集中注意力，且解决方案必须**最小化开发工作量**。

**题目**

针对以下两个需求，应分别使用哪个 Azure AI 服务？

- 检测学习者是否在屏幕前（presence detection）
- 识别每个学习者的身份（identity）`,explanation:`两个需求都可以由 **Azure Face API** 满足：

- **检测学习者是否在场**：Face API 的 \`Detect\` 接口可以实时检测视频帧中是否有人脸（有人脸 = 在场）
- **识别每个学习者身份**：Face API 的 \`Identify\` 接口，通过预先注册（Enrollment）每个学习者的面部特征，可以在检测到人脸时识别是哪位学习者

使用单一服务（Face API）完成两个任务，是最小化开发工作量的方案。

> ⚠️ **注意**：Azure Face API 的人员识别功能属于受限访问功能（Limited Access），需要向微软申请才能使用。

---`,options:[{id:"A",text:"检测存在→Computer Vision；识别身份→Face API"},{id:"B",text:"检测存在→Face API（人脸检测）；识别身份→Face API（人员识别）"},{id:"C",text:"检测存在→Video Indexer；识别身份→Face API"},{id:"D",text:"检测存在→Anomaly Detector；识别身份→Computer Vision"}],answer:"B"},{id:"179",type:"single",content:`**背景**

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
- 方案 C：在 Find Contact 意图中创建一个新模式（New Pattern）`,explanation:`分析需求：用户要在联系人列表中按**地点**搜索联系人，"在 London 搜索"、"在 Seattle 认识谁"等，这些都是针对地点的联系人查找行为。

**方案 A（正确）**：为"位置搜索"创建一个新的独立意图，并将这三个地点相关的语料添加到该意图中，有助于模型区分通用的 Find Contact 和按地点查找联系人的不同场景

**方案 B（错误）**：创建实体而非意图；虽然"地点"应该是实体，但题目要求的是"实现这些短语"（即让模型能处理按地点的联系人搜索），需要意图层面的处理

**方案 C（错误）**：模式（Pattern）在已有意图中添加规律，但这里需要的是新意图来区分场景

---`,options:[{id:"A",text:"方案 A 满足目标"},{id:"B",text:"方案 B 满足目标"},{id:"C",text:"方案 C 满足目标"},{id:"D",text:"三种方案均不满足"}],answer:"A"},{id:"180",type:"single",content:"**背景**\n\n你正在使用 Microsoft Bot Framework Composer 构建一个聊天机器人，语言生成（Language Generation，LG）文件包含以下片段：\n\n```\n# Greet(user)\n- ${Greeting()}, ${user.name}\n```\n\n**题目**\n\n关于上述 LG 模板，以下说法是否正确？\n\n1. 当 `user.name` 为空时，模板会抛出错误\n2. `Greet(user)` 是一个发送响应（Send a response）操作\n3. `${Greeting()}` 调用了另一个 LG 模板",explanation:'1. **错误**：`${user.name}` 在值为空时通常返回空字符串，LG 框架不会因此抛出错误（可以使用 `coalesce()` 函数处理空值情况）\n2. **错误**：`# Greet(user)` 是一个 **LG 函数模板**（可被调用的模板），不是 Bot Composer 中的"发送响应（Send a response）"操作节点\n3. **正确**：`${Greeting()}` 使用 `${}` 语法调用了另一个名为 `Greeting` 的 LG 模板，实现模板复用\n\n---\n\n*第 101–180 题整理完毕。*\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-否，2-否，3-是"},{id:"C",text:"1-否，2-是，3-否"},{id:"D",text:"1-是，2-否，3-是"}],answer:"B"},{id:"181",type:"multiple",content:`**背景**

你有一个自定义 Azure Vision 项目，用于通用对象检测（General 领域），其中包含一个已训练的模型。你需要将该模型**导出用于断网环境（Disconnected Network）**。

**题目**

应按顺序执行哪三项操作？`,explanation:`离线/导出部署的流程：

1. **切换到紧凑型域（A）**：标准 General 域的模型**不可导出**，必须先切换为 General (compact) 或 Object Detection (compact) 等紧凑型域
2. **重新训练（B）**：更换域后需要重新训练模型
3. **导出模型（C）**：导出为适合目标平台的格式，如 TensorFlow（Android）、CoreML（iOS）、ONNX（Windows ML）、Docker 容器等

---`,options:[{id:"A",text:"将模型域从 General 更改为 General (compact)"},{id:"B",text:"使用 compact 域重新训练模型"},{id:"C",text:"将模型导出为 TensorFlow 或 ONNX 格式"},{id:"D",text:"将模型部署到 Azure 容器实例"},{id:"E",text:"在 Custom Vision 门户中发布模型"}],answer:["A","B","C"]},{id:"182",type:"single",content:`**背景**

你有 500 个提示词-补全对（prompt-completion pairs），用于微调（Fine-tune）Azure OpenAI 模型。你需要准备训练数据文件。

**题目**

应使用什么文件格式存储训练数据？`,explanation:`Azure OpenAI 微调（Fine-tuning）要求训练数据以 **JSONL** 格式提供，每行包含一个完整的对话示例：

\`\`\`jsonl
{"messages": [{"role": "system", "content": "You are..."}, {"role": "user", "content": "Q"}, {"role": "assistant", "content": "A"}]}
{"messages": [{"role": "system", "content": "You are..."}, {"role": "user", "content": "Q2"}, {"role": "assistant", "content": "A2"}]}
\`\`\`

这种格式既支持结构化数据（每行独立 JSON），又便于流式处理大型文件。

---`,options:[{id:"A",text:"XML（.xml）"},{id:"B",text:"JSONL（.jsonl，每行一个 JSON 对象）"},{id:"C",text:"CSV（.csv）"},{id:"D",text:"TSV（.tsv）"}],answer:"B"},{id:"183",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源，需要对用户上传的图像进行内容安全检测。你提交了一张测试图像（仅包含一个几何圆圈），并设置了检测类别为 \`["Hate", "SelfHarm", "Sexual", "Violence"]\`。

**题目**

对于这张测试图像，以下哪项说法正确？`,explanation:`Azure AI Content Safety 图像分析 API 的响应结构为：

\`\`\`json
{
  "categoriesAnalysis": [
    {"category": "Hate", "severity": 0},
    {"category": "SelfHarm", "severity": 0},
    {"category": "Sexual", "severity": 0},
    {"category": "Violence", "severity": 0}
  ]
}
\`\`\`

- 每个请求中可以指定**多个**检测类别
- 每个类别返回独立的严重性得分（整数，0-7）
- 所有得分为 0 是完全正常的响应（表示没有检测到任何有害内容），不会返回错误

---`,options:[{id:"A",text:"API 将返回四个类别各自的严重性得分（0-7 整数）"},{id:"B",text:"API 将返回单一的总体安全评分（0-100）"},{id:"C",text:"如果所有类别得分为 0，API 会返回错误（因为没有检测到任何内容）"},{id:"D",text:"API 的 `categories` 参数只能指定一个类别"}],answer:"A"},{id:"184",type:"single",content:`**背景**

你正在构建一个多语言电商聊天机器人，针对不同语言的用户有不同的回复内容。你需要实现两个核心功能：检测消息语言 + 分析消息情感。

**题目**

应在解决方案中使用哪两个 Azure AI Language 功能？`,explanation:`- **情感分析（Sentiment Analysis）**：检测用户消息是正面、负面还是中性，用于区分不同情感并给出相应回复
- **语言检测（Language Detection）**：识别用户使用的语言，多语言机器人需要先知道语言才能选择对应的回复模板或翻译策略

这两个功能配合使用，可以实现"检测语言 → 选择对应语言模型 → 分析情感 → 给出合适回复"的完整流程。

---`,options:[{id:"A",text:"实体链接（Entity Linking）+ 情感分析（Sentiment Analysis）"},{id:"B",text:"情感分析（Sentiment Analysis）+ 语言检测（Language Detection）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）+ 语言检测"},{id:"D",text:"命名实体识别（NER）+ 情感分析"}],answer:"B"},{id:"185",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源（AI1），需要为一个应用（User1）提供能够**执行以下操作**的最小权限访问：

- 在 Azure OpenAI Studio 中识别资源端点
- 查看可部署的模型列表
- 通过已部署模型生成文本和图像

**题目**

应为 User1 分配哪个角色？（遵循最小权限原则）`,explanation:`**Cognitive Services OpenAI User** 角色权限包括：
- 查看端点和凭据 ✅
- 浏览可用模型列表 ✅
- 通过 API 或 Studio 使用已部署模型生成内容 ✅

此角色**不包括**：创建部署、上传数据、微调模型等管理操作。

题目要求的三项操作均在 OpenAI User 权限范围内，且不需要更高级别的 Contributor 或管理权限，符合最小权限原则。

---`,options:[{id:"A",text:"Cognitive Services OpenAI User"},{id:"B",text:"Cognitive Services Contributor"},{id:"C",text:"Contributor"},{id:"D",text:"Cognitive Services OpenAI Contributor"}],answer:"A"},{id:"186",type:"single",content:`**背景**

你正在构建一个 Azure AI 解决方案，使用情感分析（Sentiment Analysis）结果来计算客服人员的绩效奖金。你需要确保该解决方案符合 Microsoft 负责任 AI（Responsible AI）原则。

**题目**

应该采取什么措施来满足负责任 AI 原则？`,explanation:`微软负责任 AI 原则中的**问责制（Accountability）** 和 **公平性（Fairness）** 要求：

- 对于影响人类的重大决策（如经济奖惩），不应完全依赖 AI 自动判断
- 必须有**人工监督（Human-in-the-loop）**：在 AI 给出建议后，由有权限的人员进行审核并做出最终决定

选项 A 正确体现了这一原则：在情感分析结果影响奖金决策之前，加入人工审核和审批环节。

选项 C 违反隐私原则（已删除账户的数据不应继续使用）；选项 B 可能导致低质量数据影响结果。

---`,options:[{id:"A",text:"在做出影响员工经济状况的决策之前，添加人工审核和审批步骤"},{id:"B",text:"在调查返回低置信度分数时也包含情感分析结果"},{id:"C",text:"使用所有调查数据，包括已要求删除账户和数据的客户的调查"},{id:"D",text:"将原始调查数据发布到集中位置，让员工自行访问"}],answer:"A"},{id:"187",type:"multiple",content:`**背景**

你构建了一个 Language Understanding（LUIS）Docker 容器解决方案。

你从 Microsoft Container Registry（MCR）下载了 Language Understanding 容器镜像。

你需要**将容器镜像部署到主机计算机**。

**题目**

应按顺序执行哪三项操作？`,explanation:"部署 LUIS 容器的步骤：\n\n1. **拉取容器镜像（D）**：`docker pull mcr.microsoft.com/azure-cognitive-services/luis:latest`\n2. **运行容器（B）**：使用 `docker run` 命令，必须包含计费端点（`Billing`）和 API 密钥（`ApiKey`）参数，否则容器无法启动\n3. **配置日志（C）**：（可选但推荐）配置日志输出以便监控容器运行状态\n\n---",options:[{id:"A",text:"在主机上安装 Docker Engine"},{id:"B",text:"使用 `docker run` 命令运行容器，包含 Billing 端点和 API 密钥参数"},{id:"C",text:"配置磁盘日志记录"},{id:"D",text:"使用 `docker pull` 从 MCR 拉取容器镜像"},{id:"E",text:"在 Azure 门户中为 LUIS 资源生成新密钥"}],answer:["D","B","C"]},{id:"188",type:"single",content:"**背景**\n\n你正在使用 Bot Framework SDK 构建一个聊天机器人，机器人需要使用 `ConversationData` 对象存储当前对话信息，使用 `UserProfile` 对象存储用户信息。\n\n`UserProfile` 存储在用户作用域（User Scope），`ConversationData` 存储在对话作用域（Conversation Scope）。\n\n**题目**\n\n以下关于 Bot Framework 状态管理作用域的说法，哪项正确？",explanation:`Bot Framework SDK 的三种状态作用域：

| 作用域 | 生命周期 |
|-------|---------|
| **Turn Scope（轮次）** | 仅在当前轮次（单次请求-响应）内有效，轮次结束后自动过期 ✅ |
| Conversation Scope（对话） | 在整个对话会话内有效，对话结束（如用户关闭聊天窗口）后过期 |
| User Scope（用户） | 与用户绑定，不会过期（跨多次对话持久保留） |

选项 C 正确描述了轮次作用域的行为。

- 选项 A 错误：用户作用域不会在对话结束后清除
- 选项 D 错误：对话作用域跟随对话，不跟随用户账户

---`,options:[{id:"A",text:"用户作用域（User Scope）中的属性在单次对话结束后自动清除"},{id:"B",text:"对话作用域（Conversation Scope）中的属性在整个对话生命周期内持久存在，不会因新一轮交互而重置"},{id:"C",text:"轮次作用域（Turn Scope）中的属性在当前轮次结束后过期"},{id:"D",text:"对话作用域中的属性跟随用户账户，永久保留"}],answer:"C"},{id:"189",type:"single",content:`**背景**

你构建了一个机器人，使用 QnA Maker 应用。你需要从 Azure 门户获取连接到该 QnA Maker 应用所需的信息。

**题目**

应在 Azure 门户中的哪个刀片（Blade）找到所需连接信息？`,explanation:`**"Keys and Endpoint"（密钥和终结点）** 刀片包含：
- 端点 URL（Endpoint URL）
- 订阅密钥（Subscription Key 1 和 Key 2）
- 知识库 ID（Knowledge Base ID）等连接所需的全部信息

这是所有 Azure AI 服务连接信息的标准存储位置，机器人连接 QnA Maker 应用时需要这些凭据。

---`,options:[{id:"A",text:"Access control (IAM)（访问控制）"},{id:"B",text:"Properties（属性）"},{id:"C",text:"Keys and Endpoint（密钥和终结点）"},{id:"D",text:"Identity（标识）"}],answer:"C"},{id:"190",type:"single",content:`**背景**

你有一个 Azure AI 认知搜索服务，并且有一个存储在 Azure Blob Storage 中的大型扫描文档集合（图像和 PDF 格式）。

你需要让这些文档**尽快可被搜索**。

**题目**

应采用哪种策略来最大化索引速度？`,explanation:`加速大规模索引的最佳实践：

1. **拆分数据**：将数据分布到多个虚拟文件夹（或容器），每个文件夹对应一个数据源
2. **多个索引器**：为每个数据源创建独立的索引器，所有索引器都指向同一个搜索索引
3. **增加搜索单元**：每个搜索单元（SU）可以同时运行一个索引器，多个 SU 实现真正的并行处理
4. **并行执行**：配置所有索引器并行运行（而非顺序）

选项 B 错误在于使用了顺序执行（sequential），无法充分利用多个索引器的并行优势。

---`,options:[{id:"A",text:"将数据拆分到多个 Blob 容器，为每个容器创建独立的认知搜索服务"},{id:"B",text:"将数据拆分到多个 Blob 容器，为每个容器创建独立的索引器，增加搜索单元，配置**顺序**执行"},{id:"C",text:"为每种文档类型（图像 vs PDF）创建一个独立的认知搜索服务"},{id:"D",text:"将数据拆分到多个虚拟文件夹，为每个文件夹创建一个索引器，增加搜索单元，配置**并行**执行"}],answer:"D"},{id:"201",type:"single",content:`**背景**

你正在构建一个应用，使用 Azure AI Language 服务对新闻文章进行分析。文章内容为：

> "Microsoft announced a new partnership with OpenAI to advance AI research."

你调用了**实体链接（Entity Linking）** API。

**题目**

以下说法哪项正确？`,explanation:`**实体链接（Entity Linking）** API 的核心功能：

1. 识别文本中可链接到知识库的实体（如 Wikipedia 中的已知实体）
2. 为每个实体返回：
   - \`name\`（规范化名称）
   - \`url\`（Wikipedia 链接）✅
   - \`bingId\`（Bing 知识图谱 ID）
   - \`matches\`（实体在文中的位置和置信度）✅

"Microsoft" 和 "OpenAI" 都是 Wikipedia 中有词条的知名实体，实体链接 API 会同时返回链接和位置信息。

关键短语提取（B）和情感分析（C）是独立的 API；命名实体识别（D）只分类不提供链接。

---`,options:[{id:"A",text:'API 将返回 "Microsoft" 和 "OpenAI" 的 Wikipedia 链接，以及它们在文章中的位置'},{id:"B",text:'API 将返回 "partnership" 和 "research" 作为关键短语'},{id:"C",text:"API 将返回文章的整体情感分数（正面/负面）"},{id:"D",text:'API 将返回 "Microsoft" 和 "OpenAI" 的实体类别（如 Organization），但不提供外部链接'}],answer:"A"},{id:"202",type:"single",content:`**背景**

你正在为公司开发一个使用 Azure AI Vision 服务的产品图像管理系统。系统需要为每张产品图像生成 **Alt Text（替代文本）**，以满足无障碍访问要求，且**最小化开发工作量**。

**题目**

应调用 Computer Vision API 的哪个功能？`,explanation:'**`describeImage`**（或新版 Azure AI Vision 4.x 中的 `analyze` 接口 + `caption` 特性）生成图像的**自然语言完整句子描述**（如 "A red bicycle leaning against a brick wall"），这正是 Alt Text 所需的格式。\n\n- `tagImage`（A）返回关键词列表（如 "bicycle, outdoor, red"），不是完整句子，不适合 Alt Text\n- `generateThumbnail`（B）生成缩略图，不生成文字\n- `detectObjects`（D）返回对象位置坐标，不生成描述文字\n\n---',options:[{id:"A",text:"`tagImage`（图像标签）"},{id:"B",text:"`generateThumbnail`（缩略图生成）"},{id:"C",text:"`describeImage`（图像描述）"},{id:"D",text:"`detectObjects`（对象检测）"}],answer:"C"},{id:"203",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 解决方案，需要为博客文章集合创建索引。每篇文章有一个 \`MessageCopy\` 字段，包含用户在社交媒体上发送的消息文本。

要求：
- 用户能对 \`MessageCopy\` 字段进行全文搜索
- 搜索结果中能显示 \`MessageCopy\` 字段的值

**题目**

应为 \`MessageCopy\` 字段启用哪两个属性？`,explanation:`两个需求对应的属性：

| 需求 | 所需属性 |
|------|---------|
| 用户可对字段内容进行关键词搜索 | **Searchable** |
| 搜索结果中显示该字段的值 | **Retrievable** |

- Sortable：允许按此字段排序，非题目需求
- Facetable：支持分面导航（下钻过滤），非题目需求
- Filterable：允许在 \`$filter\` 表达式中使用，非题目需求

---`,options:[{id:"A",text:"Searchable（可搜索）和 Retrievable（可检索）"},{id:"B",text:"Sortable（可排序）和 Retrievable（可检索）"},{id:"C",text:"Searchable（可搜索）和 Facetable（可分面）"},{id:"D",text:"Filterable（可筛选）和 Retrievable（可检索）"}],answer:"A"},{id:"204",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务中的**问题解答（Question Answering）** 功能构建一个聊天机器人，知识库基于产品目录 PDF 训练。

测试时发现：机器人能正确回答 "What is the price of Product X?"，但无法回答 "How much does Product X cost?"。

**题目**

应采取哪项操作来解决该问题？`,explanation:`自定义问题解答服务通过**替代问法（Alternate Questions）** 解决语义等价但措辞不同的问题：

1. 在 Language Studio 中打开对应问答对
2. 在"Alternate questions"区域添加 "How much does Product X cost?"
3. 保存 → 训练 → 发布

此后，两种问法都能匹配到同一个答案，无需创建实体（实体是 CLU 的概念，不适用于问题解答服务）。

---`,options:[{id:"A",text:"从 Language Studio，创建一个名为 `price` 的实体，然后重新训练并重新发布"},{id:"B",text:'从 Language Studio，为该问答对添加 "How much does Product X cost?" 作为替代问法（Alternate question），然后重新训练并重新发布'},{id:"C",text:"从 Language Studio，创建一个名为 `cost` 的实体，然后重新训练并重新发布"},{id:"D",text:"将知识库导出，手动编辑 TSV 文件，添加新问答对"}],answer:"B"},{id:"205",type:"single",content:`**背景**

你有一个 Azure AI Language 资源，执行以下操作：
- 情感分析
- 命名实体识别（NER）
- 个人可识别信息（PII）识别

你需要**防止该资源在分析完成后持久化存储输入数据**。

**题目**

应在 Language 服务 API 中配置哪个查询参数？`,explanation:`\`loggingOptOut=true\` 告知 Azure AI Language 服务**不记录和存储请求数据**，防止输入内容被持久化到微软的遥测系统中。

这对于处理敏感的 PII 数据尤为重要，是 GDPR 和数据隐私合规的关键设置。

在 REST API 请求中以查询参数形式附加：
\`\`\`
POST {endpoint}/language/:analyze-text?api-version=2023-04-01&loggingOptOut=true
\`\`\`

---`,options:[{id:"A",text:"`loggingOptOut=true`"},{id:"B",text:"`piiCategories=none`"},{id:"C",text:"`showStats=false`"},{id:"D",text:"`model-version=latest`"}],answer:"A"},{id:"206",type:"single",content:`**背景**

你使用 Microsoft Bot Framework SDK 构建了一个机器人，并使用 Azure Bot Service 部署到 Azure。

你通过 **Bot Channels Registration** 服务注册了该机器人。

**题目**

完成部署时需要哪两个值？`,explanation:`部署 Azure Bot 时，需要 Azure Active Directory 应用注册的两个核心凭据：

- **appId（Application ID / Client ID）**：Azure AD 应用的唯一标识符，用于身份验证
- **appSecret（Client Secret）**：应用的密钥，与 appId 配合用于 OAuth 认证

这两个值在 Bot Channels Registration 的 Settings → Configuration 中配置，是机器人与 Azure Bot Service 通信的必要凭据。

---`,options:[{id:"A",text:"botId 和 tenantId"},{id:"B",text:"tenantId 和 appId"},{id:"C",text:"appId 和 appSecret"},{id:"D",text:"objectId 和 appSecret"}],answer:"C"},{id:"207",type:"single",content:`**背景**

你正在使用 Azure OpenAI 服务构建一个聊天机器人，需要确保机器人的响应**更具确定性、更少创造性**（更适合精确问答场景）。

**题目**

应配置哪两个参数来实现这一目标？`,explanation:`两个控制输出随机性的核心参数：

- **Temperature（温度）**：接近 0 时，模型几乎总是选择最高概率的词汇（确定性），接近 2 时输出最随机
- **Top P（核采样）**：接近 0 时，模型只从极少数高概率词汇中选择（更保守），接近 1 时考虑更多词汇

同时降低两者，使输出尽可能确定性、不创新，适合精确问答。

> ⚠️ **注意**：在实践中，Temperature 和 Top P 通常只调整其中一个；同时调整可能产生意外效果。微软建议优先调整 Temperature，保持 Top P 默认值（1）。

---`,options:[{id:"A",text:"降低 Temperature（如设为 0）和降低 Top P（如设为 0.1）"},{id:"B",text:"提高 Temperature（如设为 2）和提高 Top P（如设为 1）"},{id:"C",text:"降低 Temperature 和增加 Max tokens"},{id:"D",text:"提高 Frequency penalty 和降低 Presence penalty"}],answer:"A"},{id:"208",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 视觉（Computer Vision）分析图像的应用，需要判断图像是否包含**成人或不雅内容（Adult content）**，以进行内容审核。

**题目**

调用 Analyze Image API 时，应将 \`visualFeatures\` 参数设置为什么？`,explanation:`\`Adult\` 是 Computer Vision Analyze Image API 的一个 \`visualFeatures\` 选项，返回：

\`\`\`json
"adult": {
    "isAdultContent": false,
    "isRacyContent": false,
    "isGoryContent": false,
    "adultScore": 0.003,
    "racyScore": 0.002,
    "goreScore": 0.001
}
\`\`\`

通过检查 \`isAdultContent\` 布尔值和 \`adultScore\` 置信度分数，可以判断图像是否包含成人内容。

> **注意**：对于更细粒度的内容安全检测（包括暴力、仇恨等类别），推荐使用 **Azure AI Content Safety** 服务。

---`,options:[{id:"A",text:"`visualFeatures=ImageType`"},{id:"B",text:"`visualFeatures=Adult`"},{id:"C",text:"`visualFeatures=Categories`"},{id:"D",text:"`visualFeatures=Tags`"}],answer:"B"},{id:"209",type:"single",content:`**背景**

你正在规划一个 Azure AI 解决方案，需要对公司内部文档（包括 PDF 和 Word 文件）进行全文搜索。这些文档包含扫描图像中的文字。

**题目**

应在 Azure AI Search 的富化管道（Enrichment Pipeline）中包含哪个技能，以使扫描图像中的文字可被搜索？`,explanation:`**OCR 技能** 使用 Azure AI Vision 的 Read API 从图像中提取文字内容：

\`\`\`json
{
  "@odata.type": "#Microsoft.Skills.Vision.OcrSkill",
  "defaultLanguageCode": "en",
  "inputs": [
    {"name": "image", "source": "/document/normalized_images/*"}
  ],
  "outputs": [
    {"name": "text", "targetName": "rawText"},
    {"name": "layoutText", "targetName": "layoutText"}
  ]
}
\`\`\`

提取的文字随后可以映射到搜索索引的 Searchable 字段，实现对扫描文档内容的全文搜索。

---`,options:[{id:"A",text:"关键短语提取技能（Key Phrase Extraction Skill）"},{id:"B",text:"实体识别技能（Entity Recognition Skill）"},{id:"C",text:"OCR 技能（Optical Character Recognition Skill）"},{id:"D",text:"文档提取技能（Document Extraction Skill）"}],answer:"C"},{id:"210",type:"single",content:`**背景**

你有一家工厂，使用 Azure Custom Vision 构建了一个用于**识别纸板包装缺陷**并定位缺陷位置的模型。工厂有**间歇性互联网连接**，且要求确保每个包装中包含四个产品样本。

**题目**

应使用哪种 Custom Vision 项目类型和域（Domain）？`,explanation:`两个关键点分析：

1. **项目类型**：需要"识别缺陷**并定位缺陷位置**"，说明需要知道缺陷在图像中的位置（bounding box），这是**对象检测（Object Detection）** 的特征；图像分类只给出整体标签，不提供位置
2. **域**：工厂有**间歇性互联网连接**，模型需要能离线运行，必须使用 **compact 域**（可导出为 TensorFlow/ONNX 等格式在本地运行）

因此选择"对象检测 + General (compact)"。

---`,options:[{id:"A",text:"项目类型：图像分类（Image Classification）；域：General"},{id:"B",text:"项目类型：对象检测（Object Detection）；域：General (compact)"},{id:"C",text:"项目类型：图像分类；域：Retail"},{id:"D",text:"项目类型：对象检测；域：General"}],answer:"B"},{id:"211",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务和 Bot Framework SDK 构建一个聊天机器人，机器人需要**引导用户完成一个产品设置的分步流程**。

**题目**

应使用哪种对话（Dialog）类型来实现分步引导？`,explanation:`**瀑布对话（Waterfall Dialog）** 定义了一系列有序的步骤，每个步骤完成后自动进入下一步，非常适合固定的分步引导流程（如产品设置向导）：

\`\`\`csharp
new WaterfallDialog("productSetup", new WaterfallStep[]
{
    ChooseProductTypeAsync,  // 步骤1
    ConfigureOptionsAsync,   // 步骤2
    ConfirmSetupAsync,       // 步骤3
    FinishSetupAsync         // 步骤4
})
\`\`\`

组件对话（A）用于封装可复用逻辑模块；自适应对话（C）适合复杂事件驱动场景；技能对话（D）用于调用远程部署的技能服务。

---`,options:[{id:"A",text:"组件对话（Component Dialog）"},{id:"B",text:"瀑布对话（Waterfall Dialog）"},{id:"C",text:"自适应对话（Adaptive Dialog）"},{id:"D",text:"技能对话（Skill Dialog）"}],answer:"B"},{id:"212",type:"single",content:`**背景**

你正在构建一个应用，需要对视频内容进行情感分析。视频来自公司 1,000 个产品评测 YouTube 视频。

你需要使用 Azure AI Content Understanding 项目，且解决方案必须**最小化开发工作量**。

**题目**

应使用哪种项目模板？`,explanation:`**媒体资产管理（Media asset management）** 模板提供对视频内容的综合分析能力，包括情感检测、关键词提取、语音转文字等功能，是进行视频情感分析的最全面且开发工作量最小的模板选择。

视频镜头分析（A）专注于视频场景切换和镜头分类；广告分析（C）针对广告特定内容（品牌、产品出现频率等）。

---`,options:[{id:"A",text:"视频镜头分析（Video shot analysis）"},{id:"B",text:"媒体资产管理（Media asset management）"},{id:"C",text:"广告分析（Advertising）"}],answer:"B"},{id:"213",type:"single",content:`**背景**

你正在使用 Azure AI Search 构建一个富化管道，并创建了一个知识存储（Knowledge Store）。

知识存储包含**非结构化 JSON 数据**（来自社交媒体帖子的富化结果）。

**题目**

对于非结构化 JSON 数据，应在知识存储定义中使用哪种投影类型？`,explanation:`知识存储三种投影类型的适用场景：

| 投影类型 | 存储格式 | 适用场景 |
|---------|---------|---------|
| **Object（对象）** | Blob Storage 中的 JSON 文件 | 非结构化/半结构化 JSON 数据 ✅ |
| Table（表格） | Azure Table Storage | 结构化、关系型数据 |
| File（文件） | Blob Storage 中的二进制文件 | 图像、PDF 等文件 |

社交媒体帖子的富化结果（含情感分数、实体、关键词等）以 JSON 格式存储，最适合**对象投影**。

---`,options:[{id:"A",text:"表投影（Table projection）"},{id:"B",text:"对象投影（Object projection）"},{id:"C",text:"文件投影（File projection）"},{id:"D",text:"行投影（Row projection）"}],answer:"B"},{id:"214",type:"multiple",content:`**背景**

你正在为一个 Azure AI 解决方案配置访问控制。解决方案使用 Azure AI 认知服务资源（CSAccount1），连接到一个名为 vnet1 的虚拟网络。

你需要确保**只有 vnet1 中的特定资源才能访问 CSAccount1**，且解决方案必须**最小化管理工作量**。

**题目**

应执行哪两项操作？`,explanation:`限制特定 VNet 访问 Azure AI 服务资源的步骤：

1. **在 vnet1 中为 CSAccount1 启用服务端点（A）**：为 vnet1 的子网启用 \`Microsoft.CognitiveServices\` 服务端点，使流量通过微软骨干网直达服务，而非公共互联网
2. **创建虚拟子网（B）**：如果 vnet1 中还没有适当的子网，需要先创建子网，然后在子网上启用服务端点

完成后，在 CSAccount1 的"网络"设置中添加 vnet1 的子网到允许列表，即可实现访问限制。

---`,options:[{id:"A",text:"在 vnet1 中为 CSAccount1 启用服务端点（Service Endpoint）"},{id:"B",text:"在 vnet1 中创建一个虚拟子网"},{id:"C",text:"在 CSAccount1 中配置访问控制（IAM）设置"},{id:"D",text:"在 vnet1 中修改虚拟网络设置"},{id:"E",text:"在 CSAccount1 中修改虚拟网络设置"}],answer:["A","B"]},{id:"215",type:"single",content:`**背景**

你正在使用 Azure AI Content Safety 构建一个检测有害内容的解决方案。你需要在一次 API 调用中同时检测文本中的**仇恨（Hate）**、**暴力（Violence）** 和**色情（Sexual）** 内容。

**题目**

在 \`AnalyzeText\` 请求中，\`categories\` 参数应如何设置？`,explanation:`Azure AI Content Safety \`AnalyzeText\` API 使用 **JSON 数组格式**指定要检测的内容类别：

\`\`\`json
{
  "text": "user input",
  "categories": ["Hate", "Violence", "Sexual"],
  "outputType": "FourSeverityLevels"
}
\`\`\`

单次 API 调用即可同时检测多个类别，响应中包含每个类别的独立严重性评分，无需发送多次请求。

---`,options:[{id:"A",text:'`"categories": "Hate,Violence,Sexual"`（逗号分隔字符串）'},{id:"B",text:'`"categories": ["Hate", "Violence", "Sexual"]`（JSON 数组）'},{id:"C",text:"发送三次独立的 API 调用，每次检测一个类别"},{id:"D",text:'`"category": "All"`（检测所有类别）'}],answer:"B"},{id:"216",type:"single",content:`**背景**

你正在构建一个 Azure AI Foundry 中的代理（Agent），需要该代理能够：

- 理解用户的书面问题
- 生成答案
- **以语音形式输出答案**

**题目**

为了创建能满足上述所有要求的代理项目，应使用哪个工具？`,explanation:`**Azure AI Foundry** 是微软统一的 AI 开发平台，提供：
- 创建和管理 AI 代理（Agent）的完整工作流
- 集成 Azure OpenAI（生成文本答案）
- 集成 Azure AI Speech（将文本转为语音输出）
- 连接自定义数据源和工具

所有这些能力可以在 Azure AI Foundry 的统一界面中配置，是构建多模态代理的最佳入口。

Language Studio（A）专注于 NLP 功能配置；Speech Studio（C）专注于语音模型定制；Azure 门户（D）用于资源管理，不是代理开发环境。

---`,options:[{id:"A",text:"Language Studio"},{id:"B",text:"Azure AI Foundry"},{id:"C",text:"Speech Studio"},{id:"D",text:"Azure 门户"}],answer:"B"},{id:"217",type:"single",content:`**背景**

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

以下说法哪项正确？`,explanation:"**`prebuilt-read`** 模型是 Azure AI Document Intelligence 中专门用于文本提取的模型，它：\n- 支持**打印文字**和**手写文字** ✅\n- 支持 PDF、图像（JPEG、PNG、TIFF 等）格式\n- 支持多种语言\n- 返回文字内容、行、单词及其位置信息\n\n`prebuilt-document` 额外提取键值对和表格，但对手写识别的支持与 `prebuilt-read` 相同；`prebuilt-layout` 专注于文档结构分析。\n\n---",options:[{id:"A",text:"`prebuilt-read` 模型只能识别打印文字，无法识别手写内容"},{id:"B",text:"`prebuilt-read` 模型支持手写内容识别，适合此场景"},{id:"C",text:"应将模型 ID 改为 `prebuilt-document` 才能识别手写内容"},{id:"D",text:"应将模型 ID 改为 `prebuilt-layout` 才能识别手写内容"}],answer:"B"},{id:"218",type:"single",content:`**背景**

你需要构建一个 Azure AI Search 解决方案，用于搜索一个包含大量 wiki 内容的数据库。wiki 内容以英语、法语和葡萄牙语书写，存储在 Azure Cosmos DB 中。

技术要求：所有项目都必须支持英语、法语和葡萄牙语。

**题目**

应在解决方案中包含什么？`,explanation:`分析两个关键点：

1. **数据源**：内容存储在 **Azure Cosmos DB**，应使用 **Cosmos DB 索引器**（而非 Blob Storage 索引器）
2. **技能需求**：
   - **文档提取技能（Document Extraction Skill）**：从 Cosmos DB 文档中提取文本内容
   - **文本翻译技能（Text Translation Skill）**：将内容翻译为所需语言

不需要语言检测技能，因为 Translator API 可以自动检测源语言，无需预先检测。

---`,options:[{id:"A",text:"附加到技能集的 Azure Blob Storage 索引器，技能集包含语言检测技能和文本翻译技能"},{id:"B",text:"附加到技能集的 Azure Blob Storage 索引器，技能集包含语言检测技能"},{id:"C",text:"附加到技能集的 Azure Cosmos DB 索引器，技能集包含文档提取技能和文本翻译技能"},{id:"D",text:"附加到技能集的 Azure Cosmos DB 索引器，技能集包含语言检测技能和文本翻译技能"}],answer:"C"},{id:"219",type:"single",content:`**背景**

你有一个包含数千张图像的图库，需要为每张图像生成**标签列表**，且标签必须支持多种语言（英语、法语、西班牙语），且**最小化开发工作量**。

**题目**

应使用哪个 Azure 服务端点？`,explanation:`**Computer Vision Image Analysis API** 的 \`Tags\` 功能可以：
- 为图像生成描述性标签列表
- 通过 \`language\` 参数支持多种输出语言（英语、法语、西班牙语等）

\`\`\`
POST https://{endpoint}/vision/v3.2/analyze?visualFeatures=Tags&language=fr
\`\`\`

无需自定义训练，直接调用 API 即可获得多语言标签，开发工作量最小。

Custom Vision（A）需要训练数据；Content Moderator（B）用于内容安全；Custom Translator（C）用于文本翻译，不生成图像标签。

---`,options:[{id:"A",text:"Custom Vision 图像分类"},{id:"B",text:"Content Moderator 图像审核"},{id:"C",text:"Custom Translator"},{id:"D",text:"Computer Vision 图像分析（Image Analysis）"}],answer:"D"},{id:"220",type:"multiple",content:`**背景**

你有一个使用 Azure Anomaly Detector 服务的监控解决方案。你配置了一台名为 Server1 的服务器，具有间歇性互联网访问。

你需要**在 Server1 上部署 Azure AI 异常检测器服务**。

**题目**

应按顺序执行哪四项操作？`,explanation:"在服务器上部署 Azure AI 容器的完整流程：\n\n1. **创建 Azure 资源（B）**：在 Azure 门户创建 Anomaly Detector 资源，获取端点 URL 和 API 密钥（容器运行时需要向 Azure 汇报计费信息）\n2. **安装 Docker（D）**：在 Server1 上安装 Docker Engine（先决条件）\n3. **拉取容器镜像（A）**：`docker pull mcr.microsoft.com/azure-cognitive-services/decision/anomaly-detector:latest`\n4. **运行容器（C）**：`docker run` 命令中必须包含 `Billing={ENDPOINT}` 和 `ApiKey={KEY}` 参数\n\n---",options:[{id:"A",text:"从 Microsoft Container Registry 拉取 Anomaly Detector 容器镜像"},{id:"B",text:"创建 Azure Anomaly Detector 资源（用于获取计费密钥）"},{id:"C",text:"使用 `docker run` 命令运行容器，包含 Billing 端点和 ApiKey 参数"},{id:"D",text:"在 Server1 上安装 Docker Engine"},{id:"E",text:"将 Server1 加入 Azure 虚拟网络"}],answer:["B","D","A","C"]},{id:"221",type:"multiple",content:`**背景**

你有 5 个使用 Bot Framework Composer 创建的聊天机器人，需要构建一个**单一机器人**将这 5 个机器人组合起来，并能根据用户输入**动态路由**到正确的子机器人。

**题目**

应执行哪三项操作？`,explanation:`使用 Orchestrator 实现多机器人路由：

1. **安装 Orchestrator 包（F）**：\`npm install @microsoft/bf-orchestrator-cli\` 安装必要的 CLI 工具
2. **创建 Orchestrator 模型（A）**：使用 Orchestrator CLI 基于各子机器人的意图训练路由模型
3. **更改 Recognizer 类型（B）**：在主机器人的 Bot Composer 中，将 Recognizer 类型从 LUIS 更改为 Orchestrator，使其使用训练好的路由模型

Orchestrator 是微软专为多机器人路由设计的轻量级 NLU 引擎，通过语义相似度实现动态路由。

---`,options:[{id:"A",text:"创建 Orchestrator 模型（Create an Orchestrator model）"},{id:"B",text:"更改 Recognizer/Dispatch 类型"},{id:"C",text:"创建 Composer 扩展"},{id:"D",text:"启用 WebSockets"},{id:"E",text:"创建自定义 Recognizer JSON 文件"},{id:"F",text:"安装 Orchestrator 包（Install the Orchestrator package）"}],answer:["A","B","F"]},{id:"222",type:"single",content:`**背景**

你正在使用 Speech SDK 构建一个应用，需要将**法语语音**翻译成**德语**，通过自然语言处理实现。

**题目**

在 \`SpeechTranslationConfig\` 中，应如何设置源语言和目标语言？`,explanation:'Speech Translation SDK 的语言设置规范：\n\n- **`SpeechRecognitionLanguage`（源语言）**：使用**区域代码格式**（BCP-47），如 `"fr-FR"`（法语-法国）\n- **`AddTargetLanguage()`（目标语言）**：使用 **ISO 639-1 两字母代码**，如 `"de"`（德语）\n\n这两个参数使用不同的格式是 Speech Translation API 的特有规范，需要特别注意。\n\n---',options:[{id:"A",text:'`SpeechRecognitionLanguage = "fr"`；`AddTargetLanguage("de-DE")`'},{id:"B",text:'`SpeechRecognitionLanguage = "fr-FR"`；`AddTargetLanguage("de")`'},{id:"C",text:'`SourceLanguage = "French"`；`TargetLanguage = "German"`'},{id:"D",text:'`SpeechRecognitionLanguage = "de-DE"`；`AddTargetLanguage("fr-FR")`'}],answer:"B"},{id:"223",type:"single",content:`**背景**

你正在构建一个为用户提供 AI 功能的应用，需要同时使用 **Speech API** 和 **Language API**。

要求通过**单一端点和凭据**访问所有服务。

**题目**

应创建哪种类型的资源？`,explanation:`**Azure AI Foundry service**（即 Azure AI Services 多服务资源，也称全功能资源）提供：
- 通过**单一密钥和端点**访问多种 Azure AI 服务
- 涵盖 Speech、Language、Vision、Decision 等多个类别
- 统一计费

单独的 Language 资源（A）或 Speech 资源（C）只能访问各自对应的服务，无法实现单一端点访问两个服务。

---`,options:[{id:"A",text:"Azure AI Language 资源"},{id:"B",text:"Azure AI Foundry service（Azure AI 服务多服务资源）"},{id:"C",text:"Azure AI Speech 资源"},{id:"D",text:"Azure AI Content Safety 资源"}],answer:"B"},{id:"224",type:"single",content:`**背景**

你正在为一个互联网培训解决方案设计系统，需要监控学员的视频流，检测**学员何时向讲师提问**（通过检测语音内容）。

解决方案必须**最小化开发工作量**。

**题目**

应在解决方案中包含什么？`,explanation:`检测"学员向讲师提问"需要分析**语音内容**（而非视频图像），具体流程：

1. **语音转文字（D）**：实时将学员的语音转换为文本
2. 基于文本内容（如检测到疑问句结尾、问号等特征）判断是否在提问

**Azure AI Speech 的语音转文字**服务提供实时流式识别，是最直接的实现方式，无需处理视频帧，开发工作量最小。

对象检测（A）、Face 服务（B）分析的是视觉内容，无法检测语音提问；语言检测（C）识别文本语言，不转录语音。

---`,options:[{id:"A",text:"Azure AI Custom Vision 的对象检测"},{id:"B",text:"Azure AI Vision 的 Face 服务"},{id:"C",text:"Azure AI Language 服务的语言检测"},{id:"D",text:"Azure AI Speech 服务的语音转文字"}],answer:"D"},{id:"225",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，部署了 GPT-3.5 Turbo 模型。你使用以下系统消息配置模型：

> "You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old."

**题目**

这是哪种提示词工程（Prompt Engineering）技术的示例？`,explanation:`**预设引导（Priming）** 通过系统消息预先设定模型的角色、行为方式和输出风格：
- "你是一个帮助解决数学谜题的 AI 助手"→ 设定角色
- "用 4 岁小孩能理解的方式解释"→ 设定输出风格

这种通过初始上下文"预热"模型的技术称为 Priming（预设引导）。

- 少样本学习（A）：通过提供具体输入-输出示例来引导模型
- 思维链（C）：要求模型逐步推理（"Let's think step by step"）
- Affordance（B）：利用模型对特定上下文语境的自然理解能力

---`,options:[{id:"A",text:"少样本学习（Few-shot Learning）"},{id:"B",text:"启示效应（Affordance）"},{id:"C",text:"思维链（Chain of Thought）"},{id:"D",text:"预设引导（Priming）"}],answer:"D"},{id:"226",type:"single",content:`**背景**

你有一个 Azure AI Language 资源，需要配置一个**实体识别**功能，识别文本中的地点（Location）、人物（Person）和组织（Organization）。

随后，需要将识别结果中的实体（包括 Wikipedia 链接）包含在索引输出中。

你正在为 Azure AI Search 技能集编写 JSON 配置。

**题目**

在技能集 JSON 中：
- \`categories\` 参数应设置什么？
- \`outputs\` 中应包含哪个名称？`,explanation:'在 Azure AI Search 实体识别技能（Entity Recognition Skill）中：\n\n- **`categories`**：指定要提取的实体类别，`["Location", "Person", "Organization"]` 精确匹配需求\n- **`outputs` 中的 `entities`**：返回的 `entities` 输出包含实体的完整信息，**包括 Wikipedia 链接**（wikis = true 时）\n\n```json\n{\n  "@odata.type": "#Microsoft.Skills.Text.EntityRecognitionSkill",\n  "categories": ["Location", "Person", "Organization"],\n  "includeTypelessEntities": true,\n  "outputs": [\n    {"name": "entities", "targetName": "entities"},\n    {"name": "namedEntities", "targetName": "namedEntities"}\n  ]\n}\n```\n\n`entities` 输出包含 Wikipedia 相关信息（URL、ID 等），而 `namedEntities` 仅包含基本实体信息，不含链接。\n\n---',options:[{id:"A",text:'`categories: ["Location","Person","Organization"]`；outputs 包含 `{"name":"entities"}`'},{id:"B",text:'`categories: ["Location","Person","Organization"]`；outputs 包含 `{"name":"namedEntities"}`'},{id:"C",text:'`categories: ["All"]`；outputs 包含 `{"name":"entities"}`'},{id:"D",text:'不设置 categories（返回所有类型）；outputs 包含 `{"name":"linkedEntities"}`'}],answer:"A"},{id:"227",type:"single",content:`**背景**

你正在构建一个 Azure AI Search 自定义技能（Custom Skill），该技能通过调用外部 Web API 来获取组织的描述信息。

**题目**

关于该自定义技能的以下说法，哪项正确？`,explanation:`Azure AI Search 自定义技能（Custom Skill）的特点：

- **类型**：在技能集 JSON 中使用 \`"@odata.type": "#Microsoft.Skills.Custom.WebApiSkill"\` ✅
- **位置**：可以是技能集中的任意位置（不限于第一个）
- **输出映射**：自定义技能的输出**可以**通过 \`outputFieldMappings\` 映射到搜索索引字段
- **部署方式**：支持任何可公开访问的 HTTP/HTTPS 端点，不限于 Azure Functions（Azure API Management、Azure App Service 等均可）

---`,options:[{id:"A",text:"自定义技能只能作为技能集中的第一个技能"},{id:"B",text:"自定义技能的输出不能映射到搜索索引字段"},{id:"C",text:"该技能使用 `WebApiSkill` 类型定义，可以在技能集中调用外部 HTTP 端点"},{id:"D",text:"自定义技能必须部署在 Azure Functions 中，不支持其他 HTTP 端点"}],answer:"C"},{id:"228",type:"single",content:`**背景**

你使用 Custom Vision 构建了一个图像分类模型，用于区分猫和狗的图像。在训练完成后，你需要**评估模型的性能**。

**题目**

Custom Vision 提供哪两个性能指标供评估？`,explanation:`Custom Vision 训练完成后，在模型性能界面提供以下指标：

- **Precision（精确率）**：预测为某类的样本中，真正属于该类的比例
- **Recall（召回率）**：真正属于某类的样本中，被正确预测的比例
- **AP（Average Precision）**：各类别精确率的平均值

> ⚠️ **争议说明**：原题（30）答案为 A（Recall）和 D（Precision），与此题相同（Precision + Recall）。不同资料列出的指标略有差异（某些版本还列出 AP），但 Precision 和 Recall 是最标准的两个评估指标。

---`,options:[{id:"A",text:"Recall（召回率）和 F-score"},{id:"B",text:"Weighted Accuracy（加权准确率）和 Precision（精确率）"},{id:"C",text:"Precision（精确率）和 Recall（召回率）"},{id:"D",text:"Area Under Curve (AUC) 和 Precision"}],answer:"C"},{id:"229",type:"multiple",content:`**背景**

你正在构建一个 Azure AI 解决方案，用于对用户生成的图像进行**实时内容审核**，防止用户分享性暗示图像。

**题目**

以下哪两种工具可以满足需求？（每个答案是完整解决方案）`,explanation:"两种可以检测图像不当内容的方案：\n\n- **Azure AI Vision（C）**：`Analyze Image` API 的 `Adult` 特性可以检测图像中的成人内容（`isAdultContent`、`isRacyContent`），无需训练，开发工作量极小\n- **Azure AI Content Safety（D）**：专门的内容安全服务，`Image:analyze` 端点支持检测 Sexual、Violence、Hate、SelfHarm 四个类别，更全面\n\nAzure AI Custom Vision（B）需要自定义训练标注数据，开发工作量大；Document Intelligence（E）用于文档分析，与图像内容审核无关。\n\n---",options:[{id:"A",text:"Microsoft Defender for Cloud Apps"},{id:"B",text:"Azure AI Custom Vision（自定义视觉）"},{id:"C",text:"Azure AI Vision（计算机视觉）"},{id:"D",text:"Azure AI Content Safety（内容安全）"},{id:"E",text:"Azure AI Document Intelligence"}],answer:["C","D"]},{id:"230",type:"single",content:`**背景**

你构建了一个使用 LUIS 的语言模型，用于搜索联系人列表（意图：\`Find Contact\`）。

测试时发现，用户说 "Find contacts in London" 时，模型能正确识别意图，但无法提取 "London" 作为位置实体。

**题目**

应添加哪种实体类型来提取 "London" 这样的地名，且**最小化开发工作量**？`,explanation:`**预构建的 \`geographyV2\` 实体** 专门用于识别地理位置（国家、城市、省份等），无需提供训练示例即可使用：

\`\`\`json
{
  "prebuiltEntities": [
    {"name": "geographyV2"}
  ]
}
\`\`\`

它能自动识别 "London"、"Seattle"、"Ukraine" 等地名，与题目中的训练语料完全匹配，且无需标注训练数据，开发工作量最小。

机器学习实体（A）需要提供标注示例；Regex（B）无法覆盖所有城市名；列表实体（D）需要穷举所有可能的值。

---`,options:[{id:"A",text:"机器学习实体（Machine Learned entity）"},{id:"B",text:"正则表达式实体（Regex entity）"},{id:"C",text:"预构建 `geographyV2` 实体（Prebuilt geographyV2 entity）"},{id:"D",text:"列表实体（List entity）"}],answer:"C"},{id:"231",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务和 Cognitive Search 构建知识库，需要处理 wiki 内容，确保支持等价术语搜索（即搜索 "automobile" 时，包含 "car" 的文档也能被找到）。

**题目**

应在解决方案中包含什么？`,explanation:`**同义词图（Synonym Map）** 是 Azure AI Search 的功能，允许定义等价词组：

\`\`\`json
{
  "synonyms": "automobile,car,vehicle\\ncomputer,pc,laptop"
}
\`\`\`

创建同义词图后，将其关联到索引字段，搜索时自动扩展查询词，无需用户明确知道同义词。

- 建议器（B）用于自动完成/建议，基于前缀匹配
- 自定义分析器（C）用于自定义分词逻辑，不是同义词扩展
- 关键短语提取（D）是富化技能，提取文档关键词，不实现搜索时的同义词扩展

---`,options:[{id:"A",text:"同义词图（Synonym map）"},{id:"B",text:"建议器（Suggester）"},{id:"C",text:"自定义分析器（Custom analyzer）"},{id:"D",text:"内置关键短语提取技能"}],answer:"A"},{id:"232",type:"single",content:`**背景**

你正在使用 Azure AI 构建一个产品创建系统，需要为上传的产品图像**生成 Alt Text（辅助文本）**，以满足无障碍访问需求。

你使用 C# 调用 Computer Vision API。

**题目**

在代码中，应调用哪个方法来获取适合用作 Alt Text 的图像描述？`,explanation:'`DescribeImageInStreamAsync()`（或其 URL 版本 `DescribeImageAsync()`）调用 Computer Vision 的 **Describe Image** 功能，返回：\n\n```json\n{\n  "description": {\n    "captions": [\n      {"text": "a red coffee mug on a wooden table", "confidence": 0.95}\n    ],\n    "tags": ["coffee", "mug", "table", "red"]\n  }\n}\n```\n\n`captions[0].text` 是一个完整的自然语言句子，最适合用作图像的 Alt Text。\n\n`GetReadResultAsync()`（A）用于 OCR 结果；`AnalyzeImageByDomainInStreamAsync()`（C）用于领域特定分析；`TagImageInStreamAsync()`（D）返回标签列表（不是句子）。\n\n---',options:[{id:"A",text:"`GetReadResultAsync()`"},{id:"B",text:"`DescribeImageInStreamAsync()`"},{id:"C",text:"`AnalyzeImageByDomainInStreamAsync()`"},{id:"D",text:"`TagImageInStreamAsync()`"}],answer:"B"},{id:"233",type:"single",content:`**背景**

你正在使用 Azure AI Content Safety 资源（resource1）构建一个社交媒体应用，需要检测用户上传图像中的有害内容。

**题目**

以下关于 Azure AI Content Safety 图像分析的说法，哪项正确？`,explanation:`Azure AI Content Safety 图像分析响应的 \`severity\` 字段：

- 类型：**整数（0, 2, 4, 6 四个级别）**（部分文档描述为 0-7 范围）
- **0**：未检测到该类别的有害内容
- **2**：轻度
- **4**：中度
- **6**（或 7）：重度

支持四个类别：**Hate**、**SelfHarm**、**Sexual**、**Violence**，单次调用可同时检测多个类别。

---`,options:[{id:"A",text:"`severity` 分数的范围是 0 到 100"},{id:"B",text:"`severity` 分数是 0 到 7 的整数，0 表示无检测到内容"},{id:"C",text:"图像 API 只能检测 Sexual 类别，不支持其他类别"},{id:"D",text:"每次 API 调用只能检测一种内容类别"}],answer:"B"},{id:"234",type:"single",content:`**背景**

你有一个 Azure OpenAI 资源，部署了一个 GPT-4 模型，用于构建聊天机器人。你需要确保用户上传的**公司内部文件数据**被用于模型的回答（RAG 模式）。

**题目**

为了让模型使用上传的公司数据，应创建哪两种资源？`,explanation:`Azure OpenAI 的"在自有数据上使用（On Your Data）"功能通过以下架构实现：

1. **Azure Blob Storage**：存储原始文档文件（PDF、DOCX、TXT 等）
2. **Azure AI Search**：对文档内容创建向量索引，支持语义搜索

工作流：
- 文档上传到 Blob Storage
- AI Search 索引器自动处理文档，创建可搜索的知识库
- 用户提问时，Azure OpenAI 先查询 AI Search，将相关文档片段作为上下文提供给 GPT-4

---`,options:[{id:"A",text:"Azure AI Bot Service 和 Azure SQL"},{id:"B",text:"Azure AI Document Intelligence 和 Azure SQL"},{id:"C",text:"Azure Blob Storage 和 Azure AI Search"},{id:"D",text:"Azure Logic Apps 和 Azure Cosmos DB"}],answer:"C"},{id:"235",type:"single",content:`**背景**

你正在构建一个应用，需要检测用户消息中的异常模式（如高频异常请求），使用 Azure AI Anomaly Detector 服务处理单条时间序列数据流。

**题目**

应使用哪种异常检测模式？`,explanation:`三种异常检测模式的适用场景：

| 模式 | 适用场景 |
|------|---------|
| **批处理检测（Batch）** | 对历史数据集进行离线分析，一次性扫描整个数据集 |
| **流式/实时检测（Streaming）** | 对实时数据流进行在线检测，每个新数据点到来时立即判断是否异常 ✅ |
| 变化点检测（Change Point） | 检测时间序列中长期趋势的变化点 |
| 多变量检测（Multivariate） | 分析多条相关时间序列之间的联合异常 |

题目要求检测"实时用户消息流"中的异常，应使用**流式/实时检测**。

---`,options:[{id:"A",text:"批处理检测（Batch Detection）"},{id:"B",text:"流式/实时检测（Streaming/Real-time Detection）"},{id:"C",text:"变化点检测（Change Point Detection）"},{id:"D",text:"多变量检测（Multivariate Detection）"}],answer:"B"},{id:"236",type:"single",content:`**背景**

你正在为企业构建 Azure AI 解决方案，需要进行文档处理。有一批 **5,000 张扫描发票图像**需要提取金额、日期和供应商名称等关键字段。

**题目**

应使用哪个 Azure AI 服务？解决方案必须**最小化开发工作量**。`,explanation:`**Azure AI Document Intelligence 预构建发票模型（prebuilt-invoice）** 专为发票信息提取设计，开箱即用，无需训练：

可提取字段包括：
- \`VendorName\`（供应商名称）
- \`InvoiceTotal\`（发票总金额）
- \`InvoiceDate\`（发票日期）
- \`CustomerName\`（客户名称）
- 明细行项目等

直接调用 API 上传发票图像，即可获得结构化的 JSON 提取结果，开发工作量最小。

Computer Vision Read API（D）只进行 OCR 文字提取，还需要额外的逻辑解析字段，工作量更大。

---`,options:[{id:"A",text:"Azure AI Custom Vision"},{id:"B",text:"Azure AI Personalizer"},{id:"C",text:"Azure AI Document Intelligence（使用预构建发票模型）"},{id:"D",text:"Computer Vision（使用 Read API）"}],answer:"C"},{id:"237",type:"single",content:`**背景**

你正在使用 Azure AI Search 对大型文档库进行索引，需要确保用户能够基于文档的**类别（category）字段**进行**下钻过滤导航（Faceted Navigation）**，同时能将 category 值显示在搜索结果中。

**题目**

除了 **Retrievable** 属性外，还需要为 category 字段启用哪个属性？`,explanation:"**下钻过滤导航（Faceted Navigation）** 允许用户在搜索结果页面看到各类别的文档数量，并点击类别名称筛选结果。这需要字段启用 **Facetable** 属性。\n\n- `Retrievable`：使字段值出现在搜索结果中（显示 category 值）\n- `Facetable`：支持分面查询，启用下钻过滤导航 ✅\n- `Searchable`：支持全文搜索，不是下钻导航所必需\n- `Filterable`：允许在 `$filter` 中使用，但不自动提供分面统计\n\n---",options:[{id:"A",text:"Searchable（可搜索）"},{id:"B",text:"Sortable（可排序）"},{id:"C",text:"Facetable（可分面）"},{id:"D",text:"Filterable（可筛选）"}],answer:"C"},{id:"238",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Vision 的图像分析应用，需要判断图像中的**人物年龄、情绪**等信息。

**题目**

以下关于 Computer Vision API 的说法，哪项正确？`,explanation:`- **Computer Vision** 的人脸检测（\`Faces\` 特性）仅返回基本信息：人脸位置、估计年龄范围等，**不进行个人身份识别**
- **Azure Face API** 提供更完整的人脸功能：人员识别（Identify）、相似人脸搜索、情感检测等

两者功能不同，不互相替代：
- Computer Vision：适合快速检测图像中是否有人脸，以及获取基本属性
- Face API：适合人员身份验证、识别等高级场景（需要申请受限访问权限）

---`,options:[{id:"A",text:"Computer Vision 的人脸检测可以精确识别个人身份"},{id:"B",text:"Computer Vision 的人脸功能可以检测人脸的大致年龄范围和基本属性，但**不进行身份识别**"},{id:"C",text:"Computer Vision 已完全替代 Azure Face API，两者功能相同"},{id:"D",text:"Computer Vision 人脸检测不返回置信度分数"}],answer:"B"},{id:"239",type:"single",content:`**背景**

你正在开发一个应用，需要**实时检测用户文本消息中使用的语言**，以便路由到对应语言的客服团队。

**题目**

应使用哪个 Azure AI 服务？`,explanation:`**Azure AI Language 服务**提供**语言检测（Language Detection）** 功能，可以识别文本中使用的语言并返回语言代码和置信度：

\`\`\`python
response = client.detect_language(documents=["Bonjour! Comment allez-vous?"])
# 返回: {"language": "French", "iso6391Name": "fr", "confidenceScore": 0.99}
\`\`\`

对于文本消息的语言检测，Azure AI Language 是最直接的选择。

Azure AI Translator（C）也提供语言检测功能（通过 \`/detect\` 端点），但其主要定位是翻译服务；Azure AI Language 的语言检测功能更专注且 API 更简洁。

> ⚠️ **注意**：题目 329 给出的答案是 A（Azure.AI.Translation.Text 包），而题目 344 答案是 D（Azure AI Language）。两个服务都能检测语言，具体选哪个取决于题目中的其他约束条件（如是否需要同时翻译、SDK 包要求等）。

---`,options:[{id:"A",text:"Azure AI Speech（语音检测）"},{id:"B",text:"Azure AI Content Safety（内容安全）"},{id:"C",text:"Azure AI Translator（文本翻译）"},{id:"D",text:"Azure AI Language（语言检测）"}],answer:"D"},{id:"240",type:"single",content:`**背景**

你有一个使用 Azure AI Language 自定义问题解答服务的聊天机器人，需要确保机器人在**回答问题时，仅在置信度分数达到 95% 或以上时才给出回答**，低于此阈值时返回默认消息。

**题目**

在调用 \`generateAnswer\` API 时，应在请求体中设置哪个参数？`,explanation:`Azure AI Language 自定义问题解答的 \`generateAnswer\` 端点：

\`\`\`json
POST {endpoint}/language/query-knowledgebases/projects/{project}/deployments/{deployment}/query
{
  "question": "用户问题",
  "scoreThreshold": 0.95,
  "top": 1
}
\`\`\`

- 参数名：**\`scoreThreshold\`**（而非 confidenceThreshold 或 minimumScore）
- 值范围：0.0 到 1.0 的浮点数（0.95 = 95%）
- 当最高匹配答案的分数低于此值时，返回 "No good match found" 默认响应

---`,options:[{id:"A",text:'`"confidenceThreshold": 95`'},{id:"B",text:'`"scoreThreshold": 0.95`'},{id:"C",text:'`"minimumScore": 95`'},{id:"D",text:'`"threshold": 0.95`'}],answer:"B"},{id:"241",type:"multiple",content:`**背景**

你有一个 Azure DevOps 流水线，用于部署一个使用 Azure AI Search 的应用。你怀疑查询密钥已被泄露，需要在**最小化停机时间**的前提下更换密钥。

**题目**

应按什么顺序执行以下操作？`,explanation:`零停机密钥轮换的标准流程（针对查询密钥）：

1. **创建新查询密钥（A）**：在 Azure AI Search 的"密钥（Keys）"页面创建新的查询密钥，此时旧密钥仍有效，应用不中断
2. **更新应用配置（B）**：将 Web 应用、API 或 CI/CD 流水线中的查询密钥替换为新密钥，完成后验证应用正常运行
3. **删除旧密钥（C）**：确认新密钥正常工作后，删除被泄露的旧密钥，彻底阻断未授权访问

此流程确保在任何时刻都有有效密钥，无需停机。

---`,options:[{id:"A",text:"向 Azure AI Search 添加新查询密钥"},{id:"B",text:"将应用配置更新为使用新查询密钥"},{id:"C",text:"删除被泄露的旧查询密钥"}],answer:["A","B","C"]},{id:"242",type:"multiple",content:`**背景**

你正在构建一个 Azure OpenAI 应用，使用 Chat Completions API。你需要提高聊天机器人的回答质量，且**最小化开发工作量**。

**题目**

哪两种方法可以提高响应质量？（每个答案都是完整解决方案）`,explanation:`不需要训练/微调的两种最小开发工作量方法：

- **接地数据（B）**：在提示词中提供相关背景信息（如从知识库检索的文档片段），让模型基于事实数据回答，减少幻觉
- **示例对（C）**：在对话历史中包含几个示例问答对（Few-shot prompting），引导模型按照期望的格式和风格回答

微调（A）、重新训练（D）、训练自定义 LLM（E）均需要大量数据和计算资源，开发工作量大。

---`,options:[{id:"A",text:"对模型进行微调（Fine-tune）"},{id:"B",text:"提供上下文内容作为接地数据（Grounding content）"},{id:"C",text:"在请求中添加示例请求/响应对（Sample request/response pairs）"},{id:"D",text:"用自有数据重新训练语言模型"},{id:"E",text:"训练自定义大型语言模型（LLM）"}],answer:["B","C"]},{id:"243",type:"multiple",content:`**背景**

你正在使用 Azure AI 语言服务中的**自定义问题解答（Custom Question Answering）** 功能，需要将一个 QnA 项目从一个 Language Service 实例迁移到**另一个 Azure 区域**的 Language Service 实例。

**题目**

应按顺序执行哪三项操作？`,explanation:`跨区域迁移自定义问题解答项目的步骤：

1. **导出项目（A）**：在 Language Studio 中导出现有项目（生成 JSON/TSV 格式文件，包含所有问答对）
2. **在目标实例创建新项目（B）**：在目标区域的 Language Service 实例中创建一个新的问题解答项目
3. **导入数据（C）**：将导出文件导入新项目

完成后还需要重新训练和发布（D），但题目问的是"迁移"的核心三步，通常答案为 A → B → C（或 A → C → D 取决于是否先建项目）。

---`,options:[{id:"A",text:"从源项目导出问答数据（Export the project）"},{id:"B",text:"在目标 Language Service 实例中创建新项目"},{id:"C",text:"将导出的数据导入新项目（Import to new project）"},{id:"D",text:"在 Language Studio 中重新训练并重新发布新项目"},{id:"E",text:"删除源项目"}],answer:["A","B","C"]},{id:"244",type:"single",content:`**背景**

你正在使用 Azure AI Video Indexer 为公司内部培训视频生成脚本/转录，但发现服务无法准确转录**技术术语和行业专用词汇**。

**题目**

应如何提高转录的准确性？`,explanation:`Azure AI Video Indexer 的**自定义语言模型（Custom Language Model）** 功能允许：
- 上传包含行业专用词汇、产品名称、技术术语的文本文件（TXT 格式）
- Video Indexer 在转录时优先识别这些自定义词汇

这直接解决了技术术语识别不准确的问题，是 "Can transcribe jargon with high accuracy"（能以高准确率转录行业术语）需求的标准解决方案。

---`,options:[{id:"A",text:"创建自定义语言模型（Custom Language Model）并将技术术语添加进去"},{id:"B",text:"仅对视频配置音频索引（Configure audio indexing for video only）"},{id:"C",text:"为视频启用多语言检测（Enable multi-language detection）"},{id:"D",text:"为演讲者构建自定义人物模型（Build a custom Person model）"}],answer:"A"},{id:"245",type:"single",content:`**背景**

你正在使用 Azure OpenAI Studio 构建一个聊天机器人。你需要确保机器人在回答问题时，**优先使用你上传的公司内部数据**（而非模型训练数据）来生成答案。

**题目**

在代码中，应在 API 请求的哪个参数中指定数据源配置？`,explanation:`Azure OpenAI 的"使用自有数据"功能通过 \`data_sources\` 参数实现：

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "question"}],
    extra_body={
        "data_sources": [{
            "type": "azure_search",
            "parameters": {
                "endpoint": "https://search.search.windows.net",
                "index_name": "your-index",
                "authentication": {
                    "type": "system_assigned_managed_identity"
                }
            }
        }]
    }
)
\`\`\`

\`data_sources\` 告知 OpenAI API 在生成回答前先查询指定的 Azure AI Search 索引，使回答基于索引中的文档。

---`,options:[{id:"A",text:"`system_message`（系统消息）"},{id:"B",text:"`data_sources`（数据源）"},{id:"C",text:"`context`（上下文）"},{id:"D",text:"`grounding`（接地）"}],answer:"B"},{id:"246",type:"single",content:`**背景**

你使用 Azure OpenAI 构建了一个聊天机器人，需要确保机器人**不会返回能够识别特定个人身份的内容**（如从训练数据中泄露的个人信息）。

**题目**

应为 Azure OpenAI 资源配置哪项功能？`,explanation:`**受保护材料检测（Protected material detection）** 是 Azure AI Content Safety 的功能，用于检测模型输出中是否包含：
- 受版权保护的文本内容
- **个人可识别信息（PII）**
- 其他受保护的材料

当模型输出触发受保护材料检测时，可以自动拦截或替换相关内容，防止训练数据中的个人信息被泄露。

越狱检测（A）用于防止绕过安全限制的攻击；内容过滤器（C）主要针对有害类别（仇恨、暴力等）；PII 检测（D）在 Language 服务中处理用户输入，不是针对模型输出。

---`,options:[{id:"A",text:"Azure AI Content Safety 的越狱检测（Jailbreak risk detection）"},{id:"B",text:"Azure AI Content Safety 的受保护材料检测（Protected material detection）"},{id:"C",text:"Azure OpenAI 的内容过滤器（Content Filter）中的个人数据检测"},{id:"D",text:"Azure AI Language 的 PII 检测"}],answer:"B"},{id:"247",type:"single",content:`**背景**

你有一个 Azure 订阅，需要使用 **Azure Resource Manager（ARM）模板**部署 Azure OpenAI 资源，并确保部署后的资源**能够处理每分钟 600 个请求**（约 60,000 TPM）。

**题目**

在 ARM 模板的部署（Deployment）资源中，\`sku.capacity\` 应设置为多少？`,explanation:`Azure OpenAI 部署的 \`sku.capacity\` 以**千 Token 每分钟（K TPM）** 为单位：

- \`capacity: 60\` = 60,000 TPM（Tokens Per Minute）
- 标准推断：60,000 TPM ≈ 600 RPM（每分钟请求数，假设每个请求平均 100 tokens）

ARM 模板示例：
\`\`\`json
{
  "type": "Microsoft.CognitiveServices/accounts/deployments",
  "sku": {
    "name": "Standard",
    "capacity": 60
  }
}
\`\`\`

注意：capacity 单位是 K TPM（千），而非 TPM（token）或 RPM（请求）。

---`,options:[{id:"A",text:'`"capacity": 600`'},{id:"B",text:'`"capacity": 60`'},{id:"C",text:'`"capacity": 6`'},{id:"D",text:'`"capacity": 6000`'}],answer:"B"},{id:"248",type:"single",content:`**背景**

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
3. 返回结果中每个短语都有置信度分数`,explanation:'1. **正确**：`extract_key_phrases()` 确实返回关键短语列表（Python SDK 中为 `result.key_phrases`）\n2. **错误**：`"the"` 是英语停用词，没有独立语义价值，不会被提取为关键短语。对于 "the cat sat on the mat"，可能提取 "cat" 和 "mat"\n3. **错误**：关键短语提取 API **不返回置信度分数**，只返回短语字符串列表（与命名实体识别不同，NER 返回置信度）\n\n---',options:[{id:"A",text:"1-是，2-是，3-是"},{id:"B",text:"1-是，2-否，3-否"},{id:"C",text:"1-否，2-否，3-是"},{id:"D",text:"1-是，2-是，3-否"}],answer:"B"},{id:"249",type:"single",content:`**背景**

你正在为一家国际公司构建 Azure AI 解决方案，需要实现**批量文档翻译**功能。源文档为德语的 Word 文档和 PowerPoint 演示文稿，需要翻译为法语，同时：

- 保留原始文件的格式和样式
- 使用公司专有的**自定义术语表**确保行业术语翻译一致性

**题目**

以下关于 Azure AI Translator 批量文档翻译的说法，哪项正确？`,explanation:`Azure AI Translator **批量文档翻译（Document Translation）** 服务的特性：

- **支持格式**：DOCX、PPTX、XLSX、PDF、HTML、TXT 等多种格式 ✅
- **格式保留**：翻译后保持原始文档的布局、字体、表格、图片位置等样式 ✅
- **自定义术语表**：支持 TSV 或 XLIFF 格式的术语表文件，确保专业词汇翻译一致性 ✅
- 术语表格式为 **TSV 或 XLIFF**，不是 PDF

---`,options:[{id:"A",text:"批量文档翻译只支持 TXT 格式，不支持 DOCX 或 PPTX"},{id:"B",text:"批量文档翻译在翻译 DOCX 和 PPTX 时会丢失原始格式"},{id:"C",text:"批量文档翻译支持自定义术语表，并可以在翻译 DOCX/PPTX 时保留格式"},{id:"D",text:"自定义术语表必须为 PDF 格式"}],answer:"C"},{id:"250",type:"multiple",content:`**背景**

你正在使用 Azure AI Speech 服务构建一个**转录技术播客**的服务。在测试中发现，服务无法准确识别技术术语（如 API 名称、编程语言关键词等）。

你需要提高转录准确性。

**题目**

应按顺序执行哪五项操作？`,explanation:`Custom Speech 模型训练流程（与原题 240 一致）：

1. **创建项目（A）**：在 Speech Studio 中新建 Custom Speech 项目
2. **上传测试数据（B）**：上传评估用的音频和转录文本，用于训练前后对比
3. **上传训练数据（C）**：包含技术术语的文本语料（相关文本）和/或带标注的音频
4. **训练模型（D）**：使用上传的数据训练自定义语音模型
5. **部署到端点（E）**：将训练好的模型部署为自定义端点，应用程序使用该端点进行转录

---`,options:[{id:"A",text:"在 Speech Studio 中创建项目，选择语音资源"},{id:"B",text:"上传测试音频数据（Upload test data）"},{id:"C",text:"上传训练数据（包含技术术语的文本/音频）"},{id:"D",text:"训练自定义模型"},{id:"E",text:"部署自定义模型到端点"},{id:"F",text:"在测试前后评估模型准确率"}],answer:["A","B","C","D","E"]},{id:"251",type:"single",content:`**背景**

你正在使用 Azure AI Translator 服务构建一个翻译应用，需要通过 REST API 翻译文本。

应用使用多服务 Azure AI Translator 资源（Translator1），需要为 API 请求构建正确的 HTTP 请求头。

**题目**

应在请求头中包含哪些内容？`,explanation:`调用 Azure AI Translator REST API 所需的请求头：

\`\`\`http
POST https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=zh-Hans
Ocp-Apim-Subscription-Key: {your-key}
Ocp-Apim-Subscription-Region: eastus
Content-Type: application/json
\`\`\`

三个必要头：
1. **\`Ocp-Apim-Subscription-Key\`**（订阅密钥）：身份验证
2. **\`Ocp-Apim-Subscription-Region\`**（订阅区域）：多服务资源使用时必须提供
3. **\`Content-Type: application/json\`**：请求体格式

---`,options:[{id:"A",text:"订阅密钥（Subscription Key）和客户端追踪 ID（Client Trace ID）"},{id:"B",text:"订阅密钥（Subscription Key）、订阅区域（Subscription Region）和内容类型（Content-Type）"},{id:"C",text:"资源 ID 和内容语言（Content-Language）"},{id:"D",text:"访问控制请求（Access-Control-Request）、内容类型和内容长度"}],answer:"B"},{id:"252",type:"single",content:`**背景**

你正在使用 Azure AI Video Indexer 服务为公司视频提供搜索界面。需要根据**视频中出现的人物**来搜索视频。

**题目**

应采取什么措施？`,explanation:`Azure AI Video Indexer 通过**自定义人物模型（Custom Person Model）** 实现基于人物的视频搜索：

1. 创建人物模型（可包含多人）
2. 为每个人添加面部示例图像
3. 在上传/重新索引视频时关联该人物模型

Video Indexer 会在索引视频时识别这些人物，之后可以通过人物姓名搜索视频中的特定片段。

---`,options:[{id:"A",text:"创建人物模型（Person Model）并将其关联到视频"},{id:"B",text:"创建人物对象并为每个人提供面部图像"},{id:"C",text:"邀请所有员工到 Video Indexer"},{id:"D",text:"编辑视频中的面部"},{id:"E",text:"将姓名上传到语言模型"}],answer:"A"},{id:"253",type:"single",content:`**背景**

你正在使用 Face API 开发一个**员工考勤打卡**应用，需要通过摄像头识别员工身份。员工总数为 10,000 人。

**题目**

在设计 Face API 调用时，应使用哪种数据结构来存储员工人脸数据？`,explanation:`两组数据结构的区别：

| 数据结构 | 最大容量 | 适用场景 |
|---------|---------|---------|
| FaceList | 1,000 张人脸 | 小规模相似人脸搜索 |
| LargeFaceList | 1,000,000 张人脸 | 大规模相似人脸搜索 |
| PersonGroup | 10,000 人 | 中小规模人员识别 |
| **LargePersonGroup** | **1,000,000 人** | 大规模人员识别 ✅ |

员工考勤需要识别**身份**（哪个人），适合 PersonGroup/LargePersonGroup；10,000 名员工虽然在 PersonGroup 的上限之内，但使用 **LargePersonGroup** 更具扩展性。

> ⚠️ **注意**：Azure Face API 的人员识别功能属于受限访问功能，需要申请才能使用。

---`,options:[{id:"A",text:"FaceList（最多 1,000 张人脸）"},{id:"B",text:"LargeFaceList（最多 1,000,000 张人脸）"},{id:"C",text:"PersonGroup（每组最多 10,000 人，每人最多 248 张图）"},{id:"D",text:"LargePersonGroup（每组最多 1,000,000 人）"}],answer:"D"},{id:"254",type:"single",content:`**背景**

你有一个 Azure AI Search 服务，富化管道中包含一个自定义技能（Custom Skill），该技能对文档进行语言检测和情感分析。

**题目**

自定义技能的输出可以映射到搜索索引的字段吗？`,explanation:`自定义技能（Custom Skill）的输出完全可以通过索引器的 \`outputFieldMappings\` 映射到搜索索引字段：

\`\`\`json
{
  "outputFieldMappings": [
    {
      "sourceFieldName": "/document/pages/*/sentiment",
      "targetFieldName": "sentiment"
    }
  ]
}
\`\`\`

这是 Azure AI Search 富化管道的标准功能，自定义技能与内置技能的输出映射方式完全相同。技能在技能集中的位置不影响输出映射能力。

---`,options:[{id:"A",text:"是的，通过在索引器定义中使用 `outputFieldMappings` 实现"},{id:"B",text:"否，自定义技能的输出只能存储在知识存储中"},{id:"C",text:"是的，但只有当技能位于技能集的最后一个位置时"},{id:"D",text:"否，自定义技能的输出格式与搜索索引不兼容"}],answer:"A"},{id:"255",type:"single",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人。系统消息配置为：

> "You are an AI assistant that helps people find information."

用户问："What are the top 5 programming languages in 2025?"

模型回答包含了详细的排名信息。

**题目**

以下关于该场景中的 Azure OpenAI 配置的说法，哪项正确？`,explanation:`- **B（正确）**：\`max_tokens\` 限制模型生成的最大 Token 数。列出 5 种编程语言加上描述可能需要 100+ tokens，若限制为 50 tokens，回答可能在中途被截断

- A（错误）：Temperature=0 使输出接近确定性，但对于涉及排名的问题（存在多种合理答案），即使 Temperature=0 也可能因模型版本、系统消息等因素导致输出略有不同

- C（错误）：系统消息定义的角色和指令不会被用户消息覆盖（除非特殊 jailbreak 攻击），系统消息优先级高于用户消息

- D（错误）：Azure OpenAI 模型基于训练数据，没有实时网络访问能力（除非配置了 RAG 或 Bing 搜索工具）

---`,options:[{id:"A",text:"将 Temperature 设为 0 可以确保模型每次对同一问题返回完全相同的答案"},{id:"B",text:"将 Max tokens 设为 50 可能导致回答在列出全部 5 种语言之前就被截断"},{id:"C",text:"系统消息中的角色定义会被用户消息自动覆盖"},{id:"D",text:"Azure OpenAI 模型能够访问 2025 年的实时网络数据"}],answer:"B"},{id:"256",type:"single",content:`**背景**

你正在开发一个使用 Azure AI 的解决方案，需要确保 AI 系统的输出**对所有用户都公平公正**，不会因用户的地理位置或背景产生歧视性结果。

**题目**

这体现了微软负责任 AI 原则中的哪两项原则？`,explanation:`题目描述的场景涉及：

- **公平性（Fairness）**：AI 系统不因用户的地理位置、种族、性别等因素产生偏见，对所有人提供公平结果
- **包容性（Inclusiveness）**：AI 系统应该赋能所有人，包括来自不同背景和地区的用户

这两个原则共同确保 AI 系统在设计时考虑到多样性和公平待遇。

---`,options:[{id:"A",text:"透明性（Transparency）和公平性（Fairness）"},{id:"B",text:"公平性（Fairness）和包容性（Inclusiveness）"},{id:"C",text:"可靠性与安全（Reliability and Safety）和隐私与安全（Privacy and Security）"},{id:"D",text:"问责制（Accountability）和透明性"}],answer:"B"},{id:"257",type:"single",content:`**背景**

你正在构建一个使用 Azure AI Speech 服务的**零售导购机器人**，机器人需要使用**自定义神经语音（Custom Neural Voice）**，该语音为机器人的声音形象服务。

在创建自定义神经语音时，你已经获取了声音原型人的录音样本和同意书。

**题目**

接下来，应将**什么内容上传**到声音人才档案（Voice Talent Profile）？`,explanation:`声音人才档案（Voice Talent Profile）要求上传**声音原型人的同意声明录音（Consent Statement Recording）**：

- 格式：WAV 或 MP3
- 内容：声音原型人亲口读出同意创建其合成声音版本的标准声明
- 这是微软负责任 AI 要求的必要步骤，确保声音使用的合法授权

注意区别：
- 同意声明文件（C）→ 上传到**声音人才档案**（一次性）
- 训练数据（多个 WAV + TXT）→ 上传到**训练数据集**（用于实际训练）

---`,options:[{id:"A",text:"一个 5 分钟的 WAV 或 MP3 文件，内容为声音原型人描述导购系统"},{id:"B",text:"一个 5 分钟的 FLAC 音频文件和对应的 Word 格式转录文稿"},{id:"C",text:"一个 WAV 或 MP3 文件，内容为声音原型人同意创建其合成声音版本的声明"},{id:"D",text:"一个包含多个 10 秒 WAV 文件及对应 TXT 格式转录文稿的 ZIP 文件"}],answer:"C"},{id:"258",type:"single",content:`**背景**

你有一个 Azure AI Content Safety 资源（resource1）。你需要构建一个系统来识别包含**仇恨（Hate）** 类别内容的用户请求。

你在应用代码中使用 Azure AI Content Safety SDK 进行检测。

**题目**

以下哪项代码片段能够正确识别仇恨内容并获取严重性评分？`,explanation:`Azure AI Content Safety SDK（Python）的正确用法：

\`\`\`python
from azure.ai.contentsafety import ContentSafetyClient
from azure.ai.contentsafety.models import AnalyzeTextOptions, TextCategory

client = ContentSafetyClient(endpoint, credential)
request = AnalyzeTextOptions(
    text="input text",
    categories=[TextCategory.HATE]
)
response = client.analyze_text(request)

# 获取仇恨类别的严重性评分
for item in response.categories_analysis:
    if item.category == TextCategory.HATE:
        print(f"Hate severity: {item.severity}")
\`\`\`

\`TextAnalyticsClient\`（B）是 Azure AI Language 的客户端，情感分析不等同于仇恨内容检测；\`analyze_image()\`（C）用于图像内容检测。

---`,options:[{id:"A",text:"使用 `ContentSafetyClient.analyze_text()`，categories 设为 `[TextCategory.HATE]`，从 `response.hate_result.severity` 获取分数"},{id:"B",text:"使用 `TextAnalyticsClient.analyze_sentiment()`，从负面情感分数判断仇恨内容"},{id:"C",text:"使用 `ContentSafetyClient.analyze_image()`，categories 设为 `[ImageCategory.HATE]`"},{id:"D",text:"使用 `AzureOpenAIClient.chat_completions()`，在系统消息中要求检测仇恨内容"}],answer:"A"},{id:"259",type:"single",content:`**背景**

你正在使用 Azure AI Translator 服务将文本从英语翻译成希腊语（el），并需要翻译结果包含**使用罗马字母（Latin script）的音译**。

你有基础 URI：
\`\`\`
https://api.cognitive.microsofttranslator.com/translate?api-version=3.0
\`\`\`

**题目**

应额外添加哪三个查询参数？`,explanation:'必须包含的三个参数：\n\n1. **`to=el`**：指定目标语言为希腊语（必填）\n2. **`toScript=Latn`**：指定翻译结果使用拉丁（罗马）字母音译（满足"罗马字母音译"要求）\n3. **`textType=html`**：如果源内容是网页（HTML 格式）则使用此参数；若为纯文本则使用 `textType=plain`\n\n题目说"接收网页内容"，所以 `textType=html` 是正确的，**选项 B** 正确。\n\n---',options:[{id:"A",text:"`toScript=Cyrl`、`from=el`、`textType=html`"},{id:"B",text:"`to=el`、`textType=html`、`toScript=Latn`"},{id:"C",text:"`from=en`、`to=el`、`textType=plain`"},{id:"D",text:"`to=el`、`toScript=Latn`、`textType=html`"}],answer:"B"},{id:"260",type:"single",content:`**背景**

你正在构建一个可视化 Azure AI 解决方案的监控仪表盘。你需要了解 Azure OpenAI 资源的 \`Temperature\` 参数对输出的影响。

**题目**

以下关于 Azure OpenAI Temperature 参数的说法，哪项正确？`,explanation:`Temperature 参数控制模型词汇选择的随机性：

| Temperature 值 | 效果 |
|--------------|------|
| 接近 0 | 几乎总是选择最高概率的词，输出确定性强、重复度高 |
| 0.7（推荐默认） | 平衡创造性和准确性 |
| 接近 2 | 词汇选择高度随机，输出多样但可能不连贯 |

Temperature=0 不会阻止模型输出，只会使其选择最优路径；Temperature=2 不保证质量，只保证多样性。

---`,options:[{id:"A",text:"Temperature=0 时，模型无法生成任何输出"},{id:"B",text:"Temperature=2 时，模型总是生成最高质量的回答"},{id:"C",text:"Temperature 越低，模型输出越趋于确定性和一致性；Temperature 越高，输出越多样和创造性"},{id:"D",text:"Temperature 参数不影响模型输出，只影响响应速度"}],answer:"C"},{id:"261",type:"multiple",content:`**背景**

你正在使用 Azure AI 语言服务中的**对话语言理解（Conversational Language Understanding，CLU）** 为智能家居构建控制模型。

支持的语料包括：
- "Set all the lights to on."
- "Turn off the lights in the living room."
- "What is the current thermostat temperature?"
- "Lower the temperature of the thermostat by five degrees."

**题目**

应向模型添加哪三个元素（每个正确答案都是解决方案的一部分）？`,explanation:`分析四条语料的意图和实体：

| 语料 | 意图 | 实体 |
|------|------|------|
| "Set/Turn off the lights" | **change setting（D）** | device: lights |
| "What is the temperature?" | **query setting（E）** | device: thermostat |
| "Lower temperature by 5 degrees" | **change setting（D）** | device: thermostat, value: 5 |

- **\`change setting\` 意图（D）**：涵盖修改设备状态的操作
- **\`query setting\` 意图（E）**：涵盖查询设备当前状态的操作
- **\`device\` 实体（F）**：从语料中提取操作的目标设备（lights、thermostat）

> ⚠️ **争议说明**：原题（176）给出的答案为 B（change setting entity）、C（device intent）、F（device entity），与此题略有不同。本题的答案 D、E、F 更符合 CLU 意图设计的最佳实践（两个意图 + 一个实体），而原题将"device"设计为意图。请参考具体考试版本的标准答案。

---`,options:[{id:"A",text:"位置（location）意图"},{id:"B",text:"change setting（更改设置）实体"},{id:"C",text:"device（设备）意图"},{id:"D",text:"change setting（更改设置）意图"},{id:"E",text:"query setting（查询设置）意图"},{id:"F",text:"device（设备）实体"}],answer:["D","E","F"]},{id:"262",type:"single",content:`**背景**

你正在构建一个社交媒体监控应用，需要**衡量品牌在社交媒体上的公众认知**，通过自然语言处理分析。

**题目**

应使用哪个 Azure 服务？`,explanation:`**Azure AI Language 服务** 的**情感分析（Sentiment Analysis）** 功能专门用于：
- 分析文本中的正面/负面/中性情感
- 评估品牌的公众认知
- 挖掘客户意见（Opinion Mining）

通过对大量社交媒体帖子进行情感分析，可以得到品牌的整体情感趋势和具体评价，是"衡量品牌公众认知"的标准 AI 解决方案。

---`,options:[{id:"A",text:"Content Moderator（内容审核）"},{id:"B",text:"Form Recognizer（表单识别）"},{id:"C",text:"Computer Vision（计算机视觉）"},{id:"D",text:"Azure AI Language 服务（语言服务）"}],answer:"D"},{id:"263",type:"single",content:`**背景**

你在为 Azure OpenAI GPT-4 模型配置内容过滤器，以防止模型生成仇恨言论相关内容。

**题目**

以下哪项是 Azure OpenAI 内容过滤器（Content Filter）的正确描述？`,explanation:`Azure OpenAI 内容过滤器（Content Filter）的工作机制：

- **双向过滤**：同时检测**用户输入（Prompt）** 和**模型输出（Completion）** ✅
- 检测类别：Hate、Violence、Sexual、Self-harm（四个类别）
- 每个类别都有**严重性级别**（Safe、Low、Medium、High）
- 可以为每个类别独立配置过滤阈值
- **默认开启**：所有 Azure OpenAI 资源都有默认内容过滤器

若用户输入触发过滤，API 返回 400 错误；若模型输出触发过滤，该输出被拦截。

---`,options:[{id:"A",text:"内容过滤器只能过滤用户输入（Prompt），不能过滤模型输出（Completion）"},{id:"B",text:"内容过滤器同时对用户输入和模型输出进行实时过滤，任一触发都会拦截请求或响应"},{id:"C",text:"内容过滤器只在微调（Fine-tuning）后的模型上生效"},{id:"D",text:"内容过滤器完全由用户自行配置，Azure 不提供任何默认过滤"}],answer:"B"},{id:"264",type:"single",content:`**背景**

你正在为公司构建一个 Azure AI Search 解决方案，需要确保不同的应用程序对搜索索引只有读取权限，同时防止来自互联网的直接访问。

**题目**

应分别采取哪两项措施？`,explanation:`- **防止互联网访问**：**私有端点（Private Endpoint）** 使 Azure AI Search 只能通过 Azure 虚拟网络内部访问，完全阻断来自公共互联网的流量（比 IP 防火墙规则更彻底）

- **只读访问**：**查询密钥（Query Key）** 是 Azure AI Search 特有的只读密钥，只允许对文档集合进行搜索查询，**无法进行任何写操作**（如索引管理、文档更新等）

RBAC 角色（如 Reader）控制的是资源管理层面的权限，不是数据层面的读写控制。

---`,options:[{id:"A",text:"防止互联网访问 → 配置 IP 防火墙规则；只读权限 → 使用查询密钥（Query Key）"},{id:"B",text:"防止互联网访问 → 部署私有端点（Private Endpoint）；只读权限 → 使用查询密钥（Query Key）"},{id:"C",text:"防止互联网访问 → 配置 NSG；只读权限 → 分配 RBAC Reader 角色"},{id:"D",text:"防止互联网访问 → 部署私有端点；只读权限 → 分配 RBAC Contributor 角色"}],answer:"B"},{id:"265",type:"single",content:`**背景**

你正在为一个 Azure AI 解决方案实施安全措施。该解决方案包含一个 Azure OpenAI 资源（AI1）和一个 Azure AI Content Safety 资源（CS1）。

你需要**优化内容过滤配置**，通过运行示例问题来测试是否能有效拦截有害内容。

**题目**

从 Content Safety Studio 使用**文本内容审核（Moderate text content）** 功能运行测试，是否满足该需求？`,explanation:`**Content Safety Studio 的"Moderate text content"** 功能允许：
1. 输入示例文本（包括可能有害的内容）
2. 查看各个类别（Hate、Violence、Sexual、Self-harm）的检测结果和严重性评分
3. 调整检测阈值配置
4. 验证过滤策略是否有效

这正是"运行示例问题以测试和优化内容过滤配置"所需的功能。

> ⚠️ **争议说明**：原题（307）给出的答案是 B（No），即认为"Moderate text content"不满足需求，应使用其他功能。但从逻辑分析，"Moderate text content"确实是专门用于文本内容检测测试的功能。多个版本的答案存在分歧，请以最新官方考试指南为准。

---`,options:[{id:"A",text:"是（Yes），该功能专门用于测试和优化内容过滤配置"},{id:"B",text:'否（No），应使用"Protected material detection"功能'},{id:"C",text:'否（No），应使用"Jailbreak risk detection"功能'},{id:"D",text:"否（No），应在 Azure OpenAI Studio 中直接测试，而非 Content Safety Studio"}],answer:"A"},{id:"266",type:"single",content:`**背景**

你正在开发一个多轮对话的 Azure Bot。用户在对话中提供了姓名，你需要在对话结束后**自动清除**该属性，以保护用户隐私。

**题目**

应将存储用户姓名的属性分配到哪个范围（Scope）？`,explanation:`Bot Framework Composer 中的状态范围：

| 作用域 | 生命周期 | 适用场景 |
|-------|---------|---------|
| **dialog（对话）** | 对话（Dialog）活跃期间；对话结束时自动清除 ✅ | 对话流程内的临时数据 |
| user（用户） | 永久保留，不自动过期 | 需要跨对话保留的用户偏好 |
| conversation（会话） | 整个对话会话期间 | 会话级共享状态 |
| turn（轮次） | 单次请求-响应，轮次结束即清除 | 极短暂的临时数据 |

题目要求"对话结束后自动清除"，精确匹配 **dialog 作用域**的生命周期。

---`,options:[{id:"A",text:"dialog（对话作用域）"},{id:"B",text:"user（用户作用域）"},{id:"C",text:"turn（轮次作用域）"},{id:"D",text:"conversation（会话作用域）"}],answer:"A"},{id:"267",type:"multiple",content:`**背景**

你正在为 Azure AI Translator 服务的批量文档翻译构建流程。源文档存储在 Azure Blob Storage 的 German-files 容器中，目标是将翻译后的法语文件存储到 French-files 容器。

你已将原始 Word 文档上传到 German-files 容器，并准备好自定义术语表。

**题目**

接下来应按顺序执行哪三项操作？`,explanation:`假设 Translator 资源和 Blob 容器已存在，批量文档翻译的步骤：

1. **上传术语表（A）**：将 TSV 格式的自定义术语表上传到 Blob 容器，获取其 SAS URL（供翻译请求引用）
2. **提交翻译请求（B）**：调用 \`POST /batches\` 端点，在请求体中指定：
   - 源容器 SAS URL（German-files）
   - 目标容器 SAS URL（French-files）
   - 语言对：\`sourceLanguage: "de"\`, \`targetLanguage: "fr"\`
   - 术语表 SAS URL
3. **轮询状态等待完成（C）**：批量翻译是异步操作，需要定期调用状态查询 API 直到 \`status: "Succeeded"\`

---`,options:[{id:"A",text:"将术语表文件（TSV 格式）上传到 Blob 容器"},{id:"B",text:"向批量翻译 API 提交翻译请求，指定源容器、目标容器、语言对（de→fr）和术语表 URL"},{id:"C",text:"等待翻译完成（轮询翻译状态 API）"},{id:"D",text:"创建新的 Azure AI Translator 资源"},{id:"E",text:"在 Azure 门户中配置防火墙规则"}],answer:["A","B","C"]},{id:"268",type:"single",content:`**背景**

你有一个运行自 Docker 容器的 Azure AI Text Analytics 情感分析服务，端点为 \`https://contoso.cognitiveservices.azure.com\`。

你需要**在 Azure 虚拟机上运行该容器**。

**题目**

在 \`docker run\` 命令中，应使用哪个容器镜像名称？`,explanation:`Azure AI 服务容器镜像托管在 **Microsoft Container Registry (MCR)**，完整镜像路径格式为：

\`\`\`
mcr.microsoft.com/azure-cognitive-services/{service}/{feature}:{tag}
\`\`\`

情感分析容器的完整 \`docker run\` 命令：
\`\`\`bash
docker run --rm -it -p 5000:5000 \\
  mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment \\
  Eula=accept \\
  Billing=https://contoso.cognitiveservices.azure.com \\
  ApiKey={your-key}
\`\`\`

容器镜像从 MCR（\`mcr.microsoft.com\`）拉取，不是 Docker Hub。

---`,options:[{id:"A",text:"`azure-cognitive-services/textanalytics/sentiment:latest`"},{id:"B",text:"`mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment:latest`"},{id:"C",text:"`microsoft/cognitiveservices-textanalytics-sentiment:latest`"},{id:"D",text:"`mcr.microsoft.com/cognitiveservices/textanalytics:sentiment`"}],answer:"B"},{id:"269",type:"single",content:`**背景**

你正在评估 Azure AI Agent Service 的文件上传功能。你需要了解**可以上传到该服务的文件总大小上限**。

**题目**

Azure AI Agent Service 允许上传的文件总大小上限是多少？`,explanation:`根据 Azure AI Agent Service 的官方规格，**可以上传到服务的所有文件的最大总大小为 100 GB**。

这个限制适用于 File Search 工具使用的所有文件的累计大小。对于需要处理更大规模文件的场景，建议使用 Azure AI Search 索引器替代直接文件上传。

---`,options:[{id:"A",text:"1 GB"},{id:"B",text:"10 GB"},{id:"C",text:"100 GB"},{id:"D",text:"1 TB"}],answer:"C"},{id:"270",type:"single",content:`**背景**

你正在使用 Azure AI Speech SDK 构建一个应用，需要将**英语语音**自动翻译为**法语、德语和西班牙语**。

**题目**

以下代码片段中，正确完成 \`SpeechTranslationConfig\` 配置的方式是什么？`,explanation:'Speech Translation API 的语言代码规范：\n\n- **`speech_recognition_language`（源语言）**：使用 BCP-47 格式，如 `"en-US"`（完整区域代码）\n- **`add_target_language()`（目标语言）**：使用 ISO 639-1 两字母代码，如 `"fr"`、`"de"`、`"es"`（**不是**区域代码 `"fr-FR"`）\n\n这是 Speech Translation 的特有规范，目标语言不包含地区后缀，与源语言的完整区域代码不同。\n\n---\n\n*第 201–270 题整理完毕，继续至 300 题。*\n\n---',options:[{id:"A",text:"```python"},{id:"B",text:"```python"},{id:"C",text:"```python"},{id:"D",text:"```python"}],answer:"B"},{id:"271",type:"single",content:`**背景**

你正在构建一个 Bot Framework 机器人，需要**从 Azure 门户获取连接到 Language 服务资源所需的信息**，包括端点 URL 和订阅密钥。

**题目**

应在 Azure 门户中哪个刀片（Blade）找到这些信息？`,explanation:`所有 Azure AI 服务资源的**端点 URL** 和**订阅密钥**（Key 1、Key 2）都存储在 **"Keys and Endpoint"** 刀片中：

- **Endpoint**：服务的 HTTPS 端点 URL
- **KEY 1 / KEY 2**：用于 API 身份验证的订阅密钥（两个密钥互为备份，便于密钥轮换）

这是所有 Azure AI 服务（Cognitive Services、OpenAI、Search 等）的标准位置，无论是 Language、Speech、Vision 还是其他服务。

---`,options:[{id:"A",text:"Identity（标识）"},{id:"B",text:"Keys and Endpoint（密钥和终结点）"},{id:"C",text:"Properties（属性）"},{id:"D",text:"Networking（网络）"}],answer:"B"},{id:"272",type:"single",content:`**背景**

你正在使用 Azure AI 语言服务的**实体链接（Entity Linking）** API 分析文本：

> "Our tour guide took us up the Space Needle during our trip to Seattle last week."

**题目**

API 响应中将包含哪些信息？`,explanation:`实体链接（Entity Linking）API 的响应包含：

\`\`\`json
{
  "entities": [
    {
      "name": "Space Needle",
      "matches": [
        {"text": "Space Needle", "offset": 28, "length": 12, "confidenceScore": 0.97}
      ],
      "url": "https://en.wikipedia.org/wiki/Space_Needle",
      "dataSource": "Wikipedia"
    },
    {
      "name": "Seattle",
      "matches": [...],
      "url": "https://en.wikipedia.org/wiki/Seattle"
    }
  ]
}
\`\`\`

每个实体包含：Wikipedia URL、文本中的位置（offset）、置信度分数 ✅

---`,options:[{id:"A",text:'"Space Needle" 和 "Seattle" 的 Wikipedia URL，以及它们在文本中的位置（offset）和置信度'},{id:"B",text:'"tour guide"、"Space Needle" 和 "Seattle" 的实体类别分类'},{id:"C",text:"整个句子的正面情感分数"},{id:"D",text:'"Space Needle" 和 "Seattle" 的 Wikipedia URL，但不包含位置信息'}],answer:"A"},{id:"273",type:"multiple",content:`**背景**

你需要为 Azure AI Search 实现**文档级安全过滤**，确保用户只能看到他们有权限访问的文档（基于 Azure AD 组成员身份）。

**题目**

应在解决方案中包含哪三项操作？`,explanation:`文档级安全过滤的实现模式：

1. **为文档添加组字段（D）**：在索引每个文档时，添加一个 \`group_ids\` 字段，记录哪些 Azure AD 组有权访问该文档（Filterable 属性）

2. **获取当前用户的组成员身份（C）**：在用户发起搜索时，通过 Microsoft Graph API 获取该用户所属的所有 Azure AD 组 ID 列表

3. **将组 ID 作为过滤条件（F）**：构建搜索查询时，附加 \`$filter=group_ids/any(g:search.in(g, '{user-group-ids}'))\` 过滤条件，只返回用户有权访问的文档

---`,options:[{id:"A",text:"在每个搜索查询中发送 Azure AD 访问令牌"},{id:"B",text:"检索所有组成员列表"},{id:"C",text:"检索当前用户的组成员身份"},{id:"D",text:"为每个文档添加允许访问的组 ID 字段"},{id:"E",text:"为每个组创建独立的索引"},{id:"F",text:"将组 ID 作为过滤条件附加到搜索查询"}],answer:["C","D","F"]},{id:"274",type:"multiple",content:`**背景**

你使用 Bot Framework SDK 构建了一个聊天机器人，需要用户在聊天时**提供凭据登录**（不使用公共登录）。

你需要在 Bot Framework Emulator 中测试该机器人，确保测试时会提示用户输入凭据。

**题目**

应在 Bot Framework Emulator 中配置哪三个设置？`,explanation:`在 Bot Framework Emulator 中测试需要身份验证的机器人，需要配置：

1. **Bot 端点 URL（D）**：本地运行的机器人端点（默认 \`http://localhost:3978/api/messages\`）
2. **Microsoft App ID（B）**：Azure AD 应用注册的 Application ID
3. **Microsoft App Password（C）**：对应的客户端密钥

这三个设置使 Emulator 能够模拟真实的身份验证流程，测试机器人的登录提示功能。

---`,options:[{id:"A",text:"用于 Sign-in 的自定义登录 URL"},{id:"B",text:"Microsoft App ID"},{id:"C",text:"Microsoft App Password（应用密码）"},{id:"D",text:"机器人本地端点 URL（如 http://localhost:3978/api/messages）"},{id:"E",text:"Bot 的 Azure 订阅 ID"}],answer:["B","C","D"]},{id:"275",type:"multiple",content:`**背景**

你正在构建一个使用 Azure OpenAI 的聊天机器人应用。你需要确保每次部署后，应用能够自动识别 Azure OpenAI 资源的端点 URL。

**题目**

连接 Azure OpenAI 资源时，应用必须提供哪三个信息？`,explanation:`连接 Azure OpenAI 并调用特定部署的最小必要信息：

1. **端点 URL（A）**：资源的 HTTPS 端点，如 \`https://your-resource.openai.azure.com/\`
2. **部署名称（B）**：用于在 API 路径中指定使用哪个模型部署（如 \`gpt-4-deployment\`），Azure OpenAI REST API 使用部署名而非模型名
3. **API 密钥或令牌（D）**：身份验证凭据

注意：Azure OpenAI 不需要直接提供"模型名称"（C），而是提供"部署名称"（该部署绑定了某个模型）；订阅 ID（E）不是 API 调用的必要参数。

---`,options:[{id:"A",text:"端点 URL（Endpoint URL）"},{id:"B",text:"部署名称（Deployment Name）"},{id:"C",text:"模型名称（Model Name）"},{id:"D",text:"API 密钥（API Key）或 Entra ID 令牌"},{id:"E",text:"订阅 ID（Subscription ID）"}],answer:["A","B","D"]},{id:"276",type:"multiple",content:`**背景**

你正在为一个社交媒体应用构建内容审核系统，需要实时处理用户上传的图像。

**题目**

以下关于 Azure AI Content Safety 图像分析的说法，哪两项正确？`,explanation:"- **A（正确）**：通过在 `categories` 数组中同时指定多个类别，单次调用可检测所有四个类别 ✅\n- **B（错误）**：支持多种格式，包括 JPEG、PNG、GIF、BMP 等\n- **C（正确）**：`AnalyzeImage` 请求体支持 `url`（图像 URL）或 `data`（Base64 编码）两种输入方式 ✅\n- **D（错误）**：Severity 分数是整数（0, 2, 4, 6），不是浮点数\n- **E（部分正确）**：Severity 值实际上是 0、2、4、6 四个离散整数（或 0-7 根据 API 版本）\n\n---",options:[{id:"A",text:"单次 API 调用可以同时检测 Hate、Violence、Sexual 和 SelfHarm 四个类别"},{id:"B",text:"图像分析 API 仅支持 JPEG 格式，不支持 PNG"},{id:"C",text:"API 既支持图像 URL，也支持 Base64 编码的图像数据"},{id:"D",text:"Severity 分数范围是 0.0 到 1.0 的浮点数"},{id:"E",text:"每个类别的 Severity 分数是 0 到 7 的整数"}],answer:["A","C"]},{id:"277",type:"single",content:`**背景**

你正在使用 Azure AI Speech 服务的 SSML（语音合成标记语言）为机动车辆应用生成语音导航。

**题目**

以下哪个 SSML 配置最适合优化车载环境中的语音音效？`,explanation:`\`<voice effect="eq_car">\` 是 Azure Speech SSML 中专门为**车载音响环境**优化的属性：

\`\`\`xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis"
       xml:lang="en-US">
  <voice name="en-US-JennyNeural" effect="eq_car">
    Turn left in 500 meters.
  </voice>
</speak>
\`\`\`

\`eq_car\` 效果应用了均衡器调整，使语音在车内嘈杂环境中听起来更清晰，是车载语音导航的标准配置。

其他选项（降速、平静风格、强调）影响的是语音表达方式，不是声学环境优化。

---`,options:[{id:"A",text:'`<prosody rate="slow" pitch="-5%">Turn left in 500 meters.</prosody>`'},{id:"B",text:'`<mstts:express-as style="calm">Turn left in 500 meters.</mstts:express-as>`'},{id:"C",text:'`<voice name="en-US-JennyNeural" effect="eq_car">Turn left in 500 meters.</voice>`'},{id:"D",text:'`<emphasis level="strong">Turn left in 500 meters.</emphasis>`'}],answer:"C"},{id:"278",type:"multiple",content:`**背景**

你正在使用 Azure AI Foundry 构建一个利用 Azure AI Search 知识库的代理（Agent）。

代理的工具配置中包含 \`AzureAISearchTool\`，已连接到一个存储产品知识库的向量索引。

**题目**

\`AzureAISearchTool\` 的两个必填参数是什么？`,explanation:`\`AzureAISearchTool\` 的最小必要配置（Python SDK）：

\`\`\`python
from azure.ai.projects.models import AzureAISearchTool

search_tool = AzureAISearchTool(
    index_connection_id=connection.id,  # 必须：连接 ID
    index_name="product-knowledge-base"  # 必须：索引名称
)
\`\`\`

- **连接 ID（A）**：通过 AI Foundry 项目中预先创建的 Azure AI Search 连接（Connection）提供，内含端点和认证信息
- **索引名称（B）**：指定要查询的具体索引

管理员密钥（C）通过连接对象提供，不直接传给工具；向量字段名称（D）和端点（E）包含在连接配置中，不是工具的独立参数。

---`,options:[{id:"A",text:"搜索服务的连接 ID（Connection ID）"},{id:"B",text:"搜索索引的名称（Index Name）"},{id:"C",text:"搜索服务的管理员密钥（Admin Key）"},{id:"D",text:"向量字段名称（Vector Field Name）"},{id:"E",text:"搜索服务的端点 URL"}],answer:["A","B"]},{id:"279",type:"single",content:`**背景**

你有一个包含 5,000 张扫描发票图像的文件集合，需要提取发票中的关键信息（发票项目、销售金额、客户详情）。

**题目**

应使用哪个 Azure AI 服务？`,explanation:`> ⚠️ **注意**：原题（241）答案为 C（Immersive Reader），但这明显是错误的——Immersive Reader 是为阅读障碍用户提供无障碍阅读体验的服务，完全不适合发票字段提取。

**正确答案是 D（Azure AI Document Intelligence）**，原因：
- **预构建发票模型（prebuilt-invoice）**：专门提取发票字段（行项目、总金额、供应商名称、客户信息等）
- **预构建收据模型（prebuilt-receipt）**：如果是收据而非发票，使用此模型
- 无需自定义训练，开发工作量最小

这是本题库中发现的原始题库明显错误，请以逻辑判断为准。

---`,options:[{id:"A",text:"Custom Vision（自定义视觉）"},{id:"B",text:"Computer Vision（计算机视觉）"},{id:"C",text:"Immersive Reader（沉浸式阅读器）"},{id:"D",text:"Form Recognizer / Azure AI Document Intelligence（文档智能）"}],answer:"D"},{id:"280",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务构建一个分析文本的解决方案。你需要识别文本中提到的实体并**提供指向 Wikipedia 的参考链接**，以帮助用户深入了解相关概念。

**题目**

应使用哪个 Language API？`,explanation:`**实体链接（Entity Linking）** 是专门将文本中的实体**链接到外部知识库**（如 Wikipedia）的功能：

- 识别实体（如 "Eiffel Tower"）
- 返回该实体的 Wikipedia URL（\`https://en.wikipedia.org/wiki/Eiffel_Tower\`）
- 返回 Bing 知识图谱 ID（\`bingId\`）

这正是"提供指向 Wikipedia 参考链接"的直接实现方式。

命名实体识别（A）只识别实体类型，不提供链接；关键短语提取（C）提取重要词组，不链接知识库。

---`,options:[{id:"A",text:"命名实体识别（Named Entity Recognition）"},{id:"B",text:"实体链接（Entity Linking）"},{id:"C",text:"关键短语提取（Key Phrase Extraction）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"281",type:"single",content:`**背景**

你正在使用 Microsoft Bot Framework SDK 构建一个聊天机器人，需要机器人**响应特定事件并发送自定义文本回复**。

**题目**

应使用什么来实现机器人对事件的响应？`,explanation:`**Activity Handler（活动处理器）** 是 Bot Framework SDK 中处理各种机器人活动（Activity）的核心机制：

\`\`\`csharp
public class MyBot : ActivityHandler
{
    protected override async Task OnMessageActivityAsync(
        ITurnContext<IMessageActivity> turnContext,
        CancellationToken cancellationToken)
    {
        // 响应用户消息，发送自定义文本
        await turnContext.SendActivityAsync("Custom response text");
    }
    
    protected override async Task OnMembersAddedAsync(
        IList<ChannelAccount> membersAdded,
        ITurnContext<IConversationUpdateActivity> turnContext,
        CancellationToken cancellationToken)
    {
        // 响应成员加入事件
        await turnContext.SendActivityAsync("Welcome!");
    }
}
\`\`\`

通过重写 Activity Handler 中的各个方法，可以响应不同类型的事件（消息、成员加入、成员离开等）并发送自定义文本回复。

---`,options:[{id:"A",text:"Adaptive Card（自适应卡片）"},{id:"B",text:"Activity Handler（活动处理器）"},{id:"C",text:"Dialog（对话）"},{id:"D",text:"Skill（技能）"}],answer:"B"},{id:"282",type:"single",content:`**背景**

你有一个存储在本地驱动器的 **20 GB 视频文件（File1.avi）**，需要使用 **Azure AI Video Indexer 网站**对其建立索引。

**题目**

第一步应该做什么？`,explanation:`> ⚠️ **争议说明**：
> - **原题 231** 答案为 D（OneDrive），理由是 Video Indexer 网站的文件大小限制为 2 GB，File1.avi（20 GB）超出限制，需要先上传到 OneDrive 生成共享链接再使用 URL 方式索引
> - **原题 375** 答案为 A（直接上传到 Video Indexer 网站），暗示可以直接上传
> - **原题 271** 答案为 D（从 OneDrive 创建下载链接）

实际规格：
- Video Indexer 网站直接上传限制：通常为 2 GB
- URL 方式上传限制：30 GB

对于 20 GB 文件：
- 应先上传到 OneDrive（或 Blob Storage），获取可公开访问的 URL
- 然后在 Video Indexer 中使用 URL 方式索引

**推荐答案：C（先上传到 OneDrive，然后使用链接）**，但不同版本的考题答案不一致，请以最新考试版本为准。

---`,options:[{id:"A",text:"将 File1.avi 上传到 Azure Storage 队列"},{id:"B",text:"将 File1.avi 上传到 www.youtube.com"},{id:"C",text:"将 File1.avi 上传到 Microsoft OneDrive"},{id:"D",text:"直接将 File1.avi 上传到 Azure AI Video Indexer 网站"}],answer:"C"},{id:"283",type:"single",content:`**背景**

你正在使用 Azure AI Agent Service 开发一个代理，该代理需要调用公司内部的订单状态查询 API。你已经用 Python 函数定义了该 API 的输入输出格式。

**题目**

在 Azure AI Foundry Agent Service 中，应通过哪种方式将自定义函数集成到代理中？`,explanation:`Azure AI Agent Service 的函数工具（Function Tool）集成方式：

\`\`\`python
def get_order_status(order_id: str) -> str:
    """查询订单状态"""
    # 调用内部 API
    return f"Order {order_id} status: Shipped"

# 创建函数工具
from azure.ai.projects.models import FunctionTool
functions = FunctionTool(functions=[get_order_status])

# 创建代理并注册工具
agent = project_client.agents.create_agent(
    model="gpt-4",
    tools=functions.definitions,
    tool_resources=functions.resources
)
\`\`\`

代理在对话中自动判断何时调用该函数，并将结果整合到回答中。函数可以在本地运行，不需要部署为 Azure Function。

---`,options:[{id:"A",text:"将函数打包为 Azure 函数应用并部署"},{id:"B",text:"使用 `FunctionTool` 定义函数工具并添加到代理的工具列表"},{id:"C",text:"将函数逻辑写入代理的系统消息中"},{id:"D",text:"通过 `AzureAISearchTool` 将函数逻辑索引到搜索服务"}],answer:"B"},{id:"284",type:"single",content:`**背景**

你正在使用 Azure AI Document Intelligence 分析一个包含表格数据的 PDF 文档（test.pdf）。你需要使用 cURL 命令调用 API，并选择正确的**预构建模型**来提取表格。

**题目**

在 cURL 命令中：
- 应使用哪个认证头名称？
- 应使用哪个预构建模型 ID？`,explanation:"- **认证头**：Azure Document Intelligence 使用 `Ocp-Apim-Subscription-Key` 作为订阅密钥头（与其他 Azure AI 服务一致）\n\n- **模型 ID**：\n  - `prebuilt-read`：仅提取文字和结构信息，对**表格支持有限**\n  - `prebuilt-layout`：提取布局结构（文字、表格的位置信息），以 markdown 格式返回表格，但侧重于版式\n  - **`prebuilt-document`**：提取文本、键值对、**表格结构和内容**（最适合含表格的 PDF），适合通用文档分析 ✅\n\n---",options:[{id:"A",text:"认证头：`Subscription-Key`；模型 ID：`prebuilt-layout`"},{id:"B",text:"认证头：`Ocp-Apim-Subscription-Key`；模型 ID：`prebuilt-document`"},{id:"C",text:"认证头：`Api-Key`；模型 ID：`prebuilt-read`"},{id:"D",text:"认证头：`Ocp-Apim-Subscription-Key`；模型 ID：`prebuilt-layout`"}],answer:"B"},{id:"285",type:"single",content:`**背景**

你正在构建一个 Azure OpenAI 应用，需要通过代码调用 Chat Completions API 并将结果输出到控制台。

**题目**

以下关于 Azure OpenAI SDK 调用的说法，哪项正确？`,explanation:`Azure OpenAI Python SDK 的正确初始化：

\`\`\`python
from openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint="https://your-resource.openai.azure.com/",  # endpoint
    api_key="your-api-key",                                    # api_key
    api_version="2024-02-01"                                   # api_version（必须）
)

response = client.chat.completions.create(
    model="your-deployment-name",  # 部署名称（非模型名称）
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

# 正确获取回复文本
print(response.choices[0].message.content)  # 非 response.text
\`\`\`

- B 错误：\`messages\` 是必填参数
- C 错误：回复在 \`response.choices[0].message.content\` 而非 \`response.text\`
- D 错误：\`model\` 参数应填**部署名称**（Deployment Name），不是全局模型名称

---`,options:[{id:"A",text:"`AzureOpenAI` 客户端需要 `endpoint`、`api_key` 和 `api_version` 三个参数"},{id:"B",text:"调用 `chat.completions.create()` 时，只需提供 `model` 参数，不需要提供 `messages`"},{id:"C",text:"`chat.completions.create()` 返回的对象中，回复文本位于 `response.text` 属性"},{id:"D",text:'`model` 参数应设置为 Azure OpenAI 的全局模型名称（如 "gpt-4"），而非部署名称'}],answer:"A"},{id:"286",type:"single",content:`**背景**

你正在使用 Azure AI Language 服务对一批新闻文章进行处理，需要提取文章中提到的**关键公司名称**，以便后续业务分析。

**题目**

应使用哪个 Language API 功能？`,explanation:`**命名实体识别（NER）** 可以从文本中提取特定类型的命名实体，包括 **Organization（组织）** 类别，正是用于识别公司名称：

\`\`\`python
response = client.recognize_entities(
    documents=["Microsoft and OpenAI announced a new partnership."]
)
for entity in response[0].entities:
    if entity.category == "Organization":
        print(entity.text, entity.confidence_score)
# 输出: Microsoft 0.99, OpenAI 0.98
\`\`\`

关键短语提取（A）提取重要词组，但不专门针对组织类实体；情感分析（B）分析情感倾向；语言检测（D）识别语言类型。

---`,options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"情感分析（Sentiment Analysis）"},{id:"C",text:"命名实体识别（NER）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"C"},{id:"287",type:"single",content:`**背景**

你在构建一个使用 Semantic Kernel 的 AI 代理，需要代理能够访问**过去 90 天内发布的最新公开网络数据**（包括最新新闻和研究成果）。

**题目**

应在代理中配置哪种工具类型？`,explanation:`**BingGroundingTool** 使代理能够通过 Bing Search API 访问**实时公开网络数据**，包括：
- 最新新闻（过去几天/几周内发布）
- 研究论文
- 公司公告
- 其他公开网络内容

这是获取模型训练数据截止日期之后发布信息的标准工具。配置时需要提供 Bing Search API 的连接凭据（通过 AI Foundry 连接管理）。

其他工具（FileSearch、CodeInterpreter、AzureAISearch）只能访问预先准备好的静态数据，无法获取实时网络内容。

---`,options:[{id:"A",text:"`FileSearchTool`"},{id:"B",text:"`BingGroundingTool`"},{id:"C",text:"`CodeInterpreterTool`"},{id:"D",text:"`AzureAISearchTool`"}],answer:"B"},{id:"288",type:"single",content:`**背景**

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

以下说法哪项正确？`,explanation:'- **A（正确）**：`confidence: 0.99` 表示该字段（PatientName）被正确识别的置信度为 99%（0 到 1 的浮点数，0.99 = 99%）✅\n\n- **B（错误）**：`"status": "succeeded"` 明确表示分析**已成功完成**（区别于 "running" 表示进行中，"failed" 表示失败）\n\n- **C（错误）**：`valueString` 包含的是识别到的**字段文本值**（"John Doe"），位置坐标信息存储在 `boundingRegions` 属性中\n\n- **D（错误）**：置信度 1.0 是模型对结果的主观估计，实际上可能仍有极低概率错误（例如两个相似字符的混淆）\n\n---',options:[{id:"A",text:"`confidence: 0.99` 表示字段识别的置信度为 99%"},{id:"B",text:'`"status": "succeeded"` 表示分析请求仍在进行中'},{id:"C",text:"`valueString` 字段包含的是字段在文档中的位置坐标"},{id:"D",text:"`confidence` 值为 1.0 时，字段识别100%准确，不会出错"}],answer:"A"},{id:"289",type:"multiple",content:`**背景**

你正在评估 Azure AI Agent Service 的能力，需要了解该服务支持哪种提示词模板格式，特别是能够处理**包含子属性的复杂对象**。

**题目**

以下哪两种提示词模板格式支持在模板中处理具有子属性的复杂对象？`,explanation:`在 Semantic Kernel 的提示词模板中，支持复杂对象子属性访问的格式：

**Liquid（A）**：
\`\`\`liquid
Hello {{ user.profile.firstName }} {{ user.profile.lastName }}!
Your order #{{ order.id }} total is {{ order.items | sum: 'price' }}.
\`\`\`

**Handlebars（C）**：
\`\`\`handlebars
Hello {{user.profile.firstName}} {{user.profile.lastName}}!
{{#each order.items}}
  - {{name}}: \${{price}}
{{/each}}
\`\`\`

两者都支持通过点号（\`.\`）访问对象的嵌套属性，以及循环、条件等逻辑，适合处理复杂数据结构。

JSONL（B）是数据格式，不是模板引擎；YAML（D）是配置格式，不支持模板逻辑。

---`,options:[{id:"A",text:"Liquid"},{id:"B",text:"JSONL"},{id:"C",text:"Handlebars"},{id:"D",text:"YAML"},{id:"E",text:"基本字符串插值（Basic string interpolation）"}],answer:["A","C"]},{id:"290",type:"single",content:`**背景**

你正在使用 Azure AI Foundry 构建一个聊天机器人，已完成 Azure AI Search 知识库的配置。你需要在聊天代理中启用**自定义数据源**，使机器人能够基于公司内部文档回答问题。

**题目**

为了让 Azure OpenAI 聊天机器人使用 Azure AI Search 索引作为数据源，应在 API 请求中配置哪个额外参数？`,explanation:`Azure OpenAI "On Your Data" 功能通过 \`data_sources\` 参数（作为 \`extra_body\` 传递）实现：

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4-deployment",
    messages=messages,
    extra_body={
        "data_sources": [
            {
                "type": "azure_search",
                "parameters": {
                    "endpoint": "https://your-search.search.windows.net",
                    "index_name": "your-index-name",
                    "authentication": {
                        "type": "api_key",
                        "key": "your-search-api-key"
                    }
                }
            }
        ]
    }
)
\`\`\`

该配置使 API 在生成回答前先查询 Azure Search 索引，实现 RAG（检索增强生成）模式。

---`,options:[{id:"A",text:'`context: {"index_name": "your-index"}`'},{id:"B",text:'`data_sources: [{"type": "azure_search", "parameters": {...}}]`'},{id:"C",text:'`system_message: "Use the provided knowledge base to answer questions."`'},{id:"D",text:'`tools: [{"type": "retrieval", "retrieval": {"index": "your-index"}}]`'}],answer:"B"},{id:"291",type:"multiple",content:`**背景**

你正在使用 Azure OpenAI Studio 中的 Chat playground，需要构建一个聊天机器人，要求：

- 减少语言模型的运行成本
- 以简洁正式的商务语言回复
- 保持相同的聊天历史窗口大小

**题目**

应配置哪两项设置？`,explanation:`- **系统消息（A）**：通过在系统消息中明确要求"简洁正式的商务语言"，直接控制机器人的输出风格，这是最直接有效的方式
- **降低最大响应 Token 数（B）**：简洁回复意味着更少 Token，降低 \`max_tokens\` 可以：
  1. 减少每次调用的 Token 消耗，**降低成本** ✅
  2. 不影响输入历史窗口大小（聊天历史由 \`max_context_tokens\` 控制，独立设置）✅

切换模型（D）也能降低成本，但题目未明确允许更换模型；Temperature（C）影响创造性，不直接控制简洁度。

---`,options:[{id:"A",text:"修改系统消息（System message），要求使用简洁正式的商务语言"},{id:"B",text:"将最大响应 Token 数（Max response tokens）降低"},{id:"C",text:"将 Temperature 参数调低至接近 0"},{id:"D",text:"将所用模型切换为更小的版本"},{id:"E",text:"增加 Top P 值至 1.0"}],answer:["A","B"]},{id:"292",type:"single",content:`**背景**

你正在使用 Azure AI Content Understanding 项目分析视频内容。你运行了自定义分析器（analyzer1），该分析器执行以下功能：
- 视频内容转录
- 从视频中提取关键帧

**题目**

以下关于该分析器运行结果的说法，哪项正确？`,explanation:`Azure AI Content Understanding 视频分析的结果特征：

- **转录文本**：包含带时间戳的语音转文字内容
- **关键帧**：提取的代表性视频帧，每帧对应一个时间戳（\`timestamp\`）
- **异步处理**：视频分析是异步操作，需要轮询状态直到完成
- 关键帧通常以图像 URL 或 Base64 形式返回，具体取决于存储配置

分析是**异步**的（D 错误）；结果包含时间戳（A 错误）。

---`,options:[{id:"A",text:"分析结果中不包含时间戳信息"},{id:"B",text:"关键帧以 Base64 编码的图像数据形式返回"},{id:"C",text:"分析结果包含转录文本和关键帧，并且每个关键帧都有对应的时间戳"},{id:"D",text:"分析是同步的，运行后立即返回完整结果"}],answer:"C"},{id:"293",type:"single",content:`**背景**

你有一台本地计算机，包含以下文件：

- File1：WMV 格式视频
- File2：AVI 格式视频
- File3：MP4 格式视频
- File4：PDF 文件

**题目**

哪些文件可以上传并使用 Azure AI Video Indexer 进行分析？`,explanation:`Azure AI Video Indexer 支持的**视频格式**：
- ✅ WMV（File1）
- ✅ AVI（File2）
- ✅ MP4（File3）
- ❌ PDF（File4）—— PDF 不是视频格式，不支持

文件大小限制（网站上传）：通常为 2 GB；URL 方式可达 30 GB。

假设文件大小均在限制范围内，File1、File2、File3 都可以上传，File4（PDF）不可以。

---`,options:[{id:"A",text:"仅 File1"},{id:"B",text:"仅 File3"},{id:"C",text:"File1、File2 和 File3 仅"},{id:"D",text:"File1、File2、File3 和 File4 全部"},{id:"E",text:"File1、File2、File3（视频格式均支持）"}],answer:"C"},{id:"294",type:"multiple",content:`**背景**

你需要使用 Azure AI Content Safety 服务为一个聊天应用添加内容审核功能。你需要构建一个**检测用户消息中歧视性语言**的原型，且**最小化开发工作量**。

**题目**

应执行哪两项操作？`,explanation:`构建歧视性语言检测原型的最快路径：

1. **创建 Content Safety 资源（B）**：在 Azure 门户创建资源，获取端点和密钥
2. **使用 Content Safety Studio（A）**：Content Safety Studio 是一个基于 Web 的界面，允许直接输入文本测试内容检测功能，实时查看 Hate、Violence、Sexual、Self-harm 各类别的检测结果，无需编写任何代码

这是最小化开发工作量的原型构建方式。OpenAI（C）和自定义分类模型（E）成本更高、配置更复杂。

---`,options:[{id:"A",text:'登录 Content Safety Studio，使用"Moderate text content"功能进行测试'},{id:"B",text:"从 Azure 门户创建 Azure AI Content Safety 资源"},{id:"C",text:"从 Azure 门户创建 Azure OpenAI 资源"},{id:"D",text:"登录 Azure AI Foundry，在 Safety + Security 选项中配置"},{id:"E",text:"部署 Azure AI Language 服务的自定义文本分类模型"}],answer:["A","B"]},{id:"295",type:"single",content:`**背景**

你正在构建一个使用 Azure AI 语言服务分析文档的应用。你需要处理**行业特定技术术语**，这些术语在标准 NER 实体类别中不存在。

**题目**

应使用哪个功能来识别这些行业特定术语？`,explanation:`**自定义命名实体识别（Custom NER）** 允许：
1. 定义自定义实体类型（如"产品代号"、"技术规格型号"等）
2. 上传标注数据（在文本中标记出相应实体）
3. 训练针对特定领域的 NER 模型
4. 部署后用于识别文档中的行业专有术语

标准 NER 只能识别 Person、Location、Organization 等通用实体类别，无法识别公司特有的技术术语。Custom NER 是解决这类需求的专用功能。

---`,options:[{id:"A",text:"关键短语提取（Key Phrase Extraction）"},{id:"B",text:"自定义命名实体识别（Custom NER）"},{id:"C",text:"对话语言理解（CLU）"},{id:"D",text:"语言检测（Language Detection）"}],answer:"B"},{id:"296",type:"single",content:`**背景**

你正在使用 Azure AI Speech SDK 进行**实时语音翻译**，需要将英语语音翻译成多种语言（法语、德语、西班牙语）。

翻译结果处理逻辑使用以下事件：

\`\`\`python
recognizer.recognized.connect(lambda evt: process_translation(evt.result))
\`\`\`

**题目**

在 \`process_translation\` 函数中，应如何获取法语翻译结果？`,explanation:'在 Speech Translation SDK 中，`TranslationRecognitionResult` 对象包含 `translations` 字典，键为语言代码，值为翻译文本：\n\n```python\ndef process_translation(result):\n    # 获取法语翻译\n    french_text = result.translations["fr"]\n    # 获取德语翻译\n    german_text = result.translations["de"]\n    # 获取西班牙语翻译\n    spanish_text = result.translations["es"]\n```\n\n访问方式为 `result.translations["language_code"]`，语言代码使用 ISO 639-1 两字母格式（与 `AddTargetLanguage()` 时使用的格式一致）。\n\n---',options:[{id:"A",text:'`result.text["fr"]`'},{id:"B",text:'`result.translations["fr"]`'},{id:"C",text:"`result.translations.fr`"},{id:"D",text:"`result.french_translation`"}],answer:"B"},{id:"297",type:"single",content:`**背景**

你正在为一个 Azure AI Foundry 项目中的代理配置**函数调用（Function Calling）** 能力，代理将使用 Semantic Kernel 框架。

你需要确保：
- 所有与用户指令匹配的函数都被触发
- 如果函数需要必要参数而用户未提供，代理必须向用户询问

**题目**

在 Semantic Kernel 代码中，\`FunctionChoiceBehavior\` 应设置为哪个值来满足"所有匹配函数都被触发"的需求？`,explanation:"Semantic Kernel `FunctionChoiceBehavior` 选项：\n\n| 选项 | 行为 |\n|------|------|\n| `None()` | 禁用函数调用 |\n| **`Auto()`** | 让 LLM 自动判断何时调用函数，当指令与函数匹配时触发 ✅ |\n| `Required()` | 强制每次响应都必须调用函数（即使不匹配） |\n\n`Auto()` 是最自然的行为：模型智能地判断哪些函数与当前指令相关并触发它们，同时在函数参数不完整时自动请求用户补充信息。\n\n---",options:[{id:"A",text:"`FunctionChoiceBehavior.None()`"},{id:"B",text:"`FunctionChoiceBehavior.Required()`"},{id:"C",text:"`FunctionChoiceBehavior.Auto()`"},{id:"D",text:"`FunctionChoiceBehavior.Manual()`"}],answer:"C"},{id:"298",type:"single",content:`**背景**

你正在构建一个 Azure OpenAI 应用，使用以下系统消息：

> "You are an AI assistant that helps people find information. Only answer questions that are directly related to the topic."

用户询问："What is the weather today?"（今天天气如何？）

该问题超出了系统消息定义的主题范围。

**题目**

为了确保机器人能够正确识别并拒绝超出范围的问题，应额外配置什么？`,explanation:`处理超出范围问题最直接且开发工作量最小的方式是**在系统消息中明确定义边界回复**：

\`\`\`
"You are an AI assistant that helps people find information about our products. 
If a user asks about anything unrelated to our products, politely respond: 
'I can only answer questions about our products. Please ask about product features, 
pricing, or availability.'"
\`\`\`

这通过**提示词工程（Prompt Engineering）** 实现行为控制，无需额外的 AI 组件。

越狱检测（B）用于防止绕过安全限制的攻击，不适用于一般的范围控制；Temperature=0（A）影响随机性，不控制话题范围。

---`,options:[{id:"A",text:"将 Temperature 设为 0"},{id:"B",text:"启用 Azure AI Content Safety 的越狱风险检测"},{id:"C",text:`在系统消息中明确说明超出范围时应如何回复（如"如果问题与主题无关，请回复'我只能回答关于[主题]的问题'"）`},{id:"D",text:"使用 Azure AI Language 的意图分类预先过滤用户输入"}],answer:"C"},{id:"299",type:"single",content:`**背景**

你正在构建一个多步骤数据处理流水线，需要对 Azure OpenAI 生成的文本进行**实体提取**，然后对提取到的实体进行**情感分析**，最后将结果存储到数据库。

**题目**

为了实现最佳的 AI 功能组合，应使用哪两个 Azure AI 服务？`,explanation:`最优服务组合：

1. **Azure OpenAI**：用于生成高质量的自然语言文本（GPT 系列模型的优势）
2. **Azure AI Language**：用于对生成的文本进行：
   - **命名实体识别（NER）**：提取实体
   - **情感分析（Sentiment Analysis）**：分析情感倾向

Azure AI Language 提供专门优化的 NER 和情感分析模型，比使用 OpenAI 通过提示词实现这些功能更准确、成本更低、响应更快。

两个服务的 API 都是 REST 接口，可以无缝串联在数据处理流水线中。

---`,options:[{id:"A",text:"Azure OpenAI（生成文本）+ Azure AI Language（实体提取 + 情感分析）"},{id:"B",text:"Azure OpenAI（所有任务）"},{id:"C",text:"Azure AI Language（所有任务，包括文本生成）"},{id:"D",text:"Azure AI Speech（语音转文字）+ Azure AI Language（后续处理）"}],answer:"A"},{id:"300",type:"single",content:`**背景**

你正在为一家国际公司的 Azure AI 解决方案进行最终审查。该解决方案使用 Azure OpenAI 为员工提供智能助手服务，通过情感分析结果来**影响员工的绩效考核**。

**题目**

为了确保该解决方案符合微软负责任 AI（Responsible AI）原则，应优先采取哪项措施？`,explanation:`微软负责任 AI 原则中的**问责制（Accountability）** 原则明确要求：

> 当 AI 系统的决策可能对人类产生重大影响（如就业、财务状况等）时，必须保留**人工监督（Human oversight）** 机制，确保由负责任的人类做出最终决定。

"绩效考核"直接影响员工的职业发展和收入，属于高影响决策场景，不能完全自动化。AI（情感分析）只能作为**辅助工具**提供参考，最终决策必须由人类审核确认。

这同时也体现了**公平性**原则：情感分析模型可能存在偏差，人工审核可以纠正潜在的不公平判断。

---`,options:[{id:"A",text:"在绩效评估决策中引入**人工审核步骤**，确保 AI 建议经过人类判断后才影响员工"},{id:"B",text:"使用更大的模型以提高情感分析的准确性"},{id:"C",text:"增加训练数据量以减少模型偏差"},{id:"D",text:"将所有员工绩效数据公开，确保透明度"}],answer:"A"}];function jp(e){const n=o=>{if(!o||o.length===0)return e;const a=new Set(o);return e.filter(l=>a.has(l.type))},t=o=>{if(!o||o.trim()==="")return e;const a=o.toLowerCase();return e.filter(l=>{const s=l.content.toLowerCase().includes(a),u=l.explanation.toLowerCase().includes(a),g="options"in l&&l.options.some(m=>m.text.toLowerCase().includes(a));return s||u||g})},i=o=>{let a=e;if(o.types&&o.types.length>0&&(a=n(o.types)),o.keyword&&o.keyword.trim()!==""){const l=t(o.keyword);a=a.filter(s=>l.includes(s))}return a},r=N.useMemo(()=>{const o={single:0,multiple:0,sort:0,truefalse:0};return e.forEach(a=>{o[a.type]++}),o},[e]);return{filterByType:n,filterByKeyword:t,applyFilters:i,getTypeStats:r}}const Xr=["single","multiple","sort","truefalse"],Up={single:"单选",multiple:"多选",sort:"排序",truefalse:"判断"},Vp=uc,Kp=({onModeSelect:e})=>{const{getTypeStats:n}=jp(Vp),[t,i]=N.useState(Xr),r=s=>{i(u=>u.includes(s)?u.filter(g=>g!==s):[...u,s])},o=N.useMemo(()=>t.reduce((s,u)=>s+n[u],0),[t,n]),a=o>0,l=t.length===Xr.length?[]:t;return p.jsxs("div",{className:"mode-selection",children:[p.jsx("h1",{children:"选择答题模式"}),p.jsxs("div",{className:"type-filter",children:[p.jsxs("div",{className:"type-filter-header",children:["题型筛选（可选范围共 ",o," 题）"]}),p.jsx("div",{className:"type-filter-options",children:Xr.map(s=>p.jsxs("label",{className:"type-filter-option",children:[p.jsx("input",{type:"checkbox",checked:t.includes(s),onChange:()=>r(s)}),p.jsxs("span",{children:[Up[s],"（",n[s],"）"]})]},s))})]}),p.jsxs("div",{className:"mode-buttons",children:[p.jsxs("button",{className:"mode-button practice",onClick:()=>e("practice",l),disabled:!a,children:[p.jsx("h2",{children:"练习模式"}),p.jsx("p",{children:"实时显示进度和正确率，提交后立即显示答案解析，可随时结束练习"})]}),p.jsxs("button",{className:"mode-button simulation",onClick:()=>e("simulation",l),disabled:!a,children:[p.jsx("h2",{children:"模拟模式"}),p.jsx("p",{children:"完成30道随机题目后显示正确率和错题解析"})]})]})]})},Wp=e=>{const n=/(\*\*(.+?)\*\*|`([^`]+)`)/g,t=[];let i=0,r,o=0;for(;(r=n.exec(e))!==null;)r.index>i&&t.push(e.slice(i,r.index)),r[2]?t.push(p.jsx("strong",{children:r[2]},`strong-${o}`)):r[3]&&t.push(p.jsx("code",{children:r[3]},`code-${o}`)),i=r.index+r[0].length,o+=1;return i<e.length&&t.push(e.slice(i)),t},qr=e=>e.split(/\n{2,}/).filter(n=>n.trim().length>0).map((n,t)=>p.jsx("p",{children:Wp(n)},t)),Qp=e=>{const n=e.trim(),t=/\*\*题目\*\*/;if(!t.test(n))return{background:"",question:n,hasBackground:!1};const[r,o]=n.split(t).map(s=>s.trim()),a=r.replace(/\*\*背景\*\*/g,"").trim(),l=o.trim();return{background:a,question:l,hasBackground:a.length>0}},ti=({content:e})=>{const{background:n,question:t,hasBackground:i}=Qp(e);return i?p.jsxs("div",{className:"question-text",children:[p.jsxs("div",{className:"question-section question-background",children:[p.jsx("div",{className:"section-label",children:"背景"}),p.jsx("div",{className:"section-content",children:qr(n)})]}),p.jsxs("div",{className:"question-section question-main",children:[p.jsx("div",{className:"section-label",children:"题目"}),p.jsx("div",{className:"section-content",children:qr(t)})]})]}):p.jsx("div",{className:"question-text question-main",children:p.jsx("div",{className:"section-content",children:qr(t)})})},Gp=({totalQuestions:e,correctCount:n,correctRate:t,records:i,mode:r,onRestartAll:o,onRestartWrong:a,onViewHistory:l,onReviewQuestion:s})=>{const[u,g]=N.useState(new Set),m=Xo.useMemo(()=>{const x={};return i.forEach(T=>{const d=T.question.type;x[d]||(x[d]={total:0,correct:0}),x[d].total++,T.isCorrect&&x[d].correct++}),x},[i]),A=i.filter(x=>!x.isCorrect),S=x=>{const T=new Set(u);T.has(x)?T.delete(x):T.add(x),g(T)},v=x=>{switch(x){case"single":return"单选";case"multiple":return"多选";case"sort":return"排序";case"truefalse":return"判断";default:return x}};return p.jsxs("div",{className:"result-screen",children:[p.jsx("h2",{children:r==="practice"?"练习结束！":"模拟考试完成！"}),p.jsxs("div",{className:"overall-score",children:[p.jsxs("div",{className:"score-display",children:[n," / ",e]}),p.jsxs("div",{className:"score-percentage",children:[(t*100).toFixed(1),"%"]})]}),p.jsxs("div",{className:"type-stats",children:[p.jsx("h3",{children:"题型统计"}),Object.entries(m).map(([x,T])=>p.jsxs("div",{className:"type-stat",children:[v(x),": ",T.correct,"/",T.total]},x))]}),A.length>0&&p.jsxs("div",{className:"wrong-questions",children:[p.jsx("h3",{children:"错题回顾"}),A.map((x,T)=>p.jsxs("div",{className:"wrong-question-item",children:[p.jsxs("button",{className:"question-toggle",onClick:()=>S(x.question.id),children:["题目 ",T+1,": ",x.question.content.substring(0,50),"..."]}),u.has(x.question.id)&&p.jsxs("div",{className:"question-details",children:[p.jsx(ti,{content:x.question.content}),p.jsxs("p",{children:[p.jsx("strong",{children:"你的答案："}),x.userAnswer.join(", ")]}),p.jsxs("p",{children:[p.jsx("strong",{children:"正确答案："}),x.question.answer.join(", ")]}),p.jsxs("p",{children:[p.jsx("strong",{children:"解析："}),x.question.explanation]}),s&&p.jsx("button",{className:"review-button",onClick:()=>s(x.question.id),children:"重新做这题"})]})]},x.question.id))]}),p.jsxs("div",{className:"action-buttons",children:[p.jsx("button",{onClick:o,children:"再来一次（全部）"}),p.jsx("button",{onClick:a,disabled:A.length===0,children:"只练错题"}),l&&p.jsx("button",{onClick:l,className:"history-btn",children:"📊 查看历史"})]})]})};function Hp(e,n,t){const[i,r]=N.useState(e),o=N.useRef(t);o.current=t;const a=N.useRef(!1);return N.useEffect(()=>{n&&!a.current&&r(e),a.current=n},[n,e]),N.useEffect(()=>{if(!n)return;const l=setInterval(()=>{r(s=>s<=1?(clearInterval(l),o.current(),0):s-1)},1e3);return()=>clearInterval(l)},[n,e]),i}function $p(e){const n=Math.max(0,Math.floor(e)),t=Math.floor(n/60),i=n%60;return`${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const Jp=({question:e,isVisible:n})=>n?p.jsxs("div",{className:"explanation-panel",children:[p.jsx("h4",{children:"解释："}),p.jsx("p",{children:e.explanation}),e.tags&&e.tags.length>0&&p.jsxs("div",{className:"tags",children:[p.jsx("span",{children:"标签："}),e.tags.map(t=>p.jsx("span",{className:"tag",children:t},t))]})]}):null,Xp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=a=>{t([a])},o=new Set(e.answer);return p.jsxs("div",{className:"question-container",children:[p.jsx(ti,{content:e.content}),p.jsx("div",{className:"options",children:e.options.map(a=>{const l=n.includes(a.id),s=o.has(a.id),u=i&&l&&!s;return p.jsxs("button",{className:`option ${l?"selected":""} ${i&&s?"correct":""} ${u?"wrong":""}`,onClick:()=>r(a.id),children:[p.jsx("span",{className:"option-id",children:a.id}),p.jsx("span",{className:"option-text",children:a.text})]},a.id)})})]})},qp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=a=>{const l=n.includes(a)?n.filter(s=>s!==a):[...n,a];t(l)},o=new Set(e.answer);return p.jsxs("div",{className:"question-container",children:[p.jsx(ti,{content:e.content}),p.jsx("div",{className:"options",children:e.options.map(a=>{const l=n.includes(a.id),s=o.has(a.id),u=i&&l&&!s;return p.jsxs("button",{className:`option ${l?"selected":""} ${i&&s?"correct":""} ${u?"wrong":""}`,onClick:()=>r(a.id),children:[p.jsx("span",{className:"option-id",children:a.id}),p.jsx("span",{className:"option-text",children:a.text})]},a.id)})})]})},Yp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const o=Xo.useMemo(()=>{const s=[...e.items];for(let u=s.length-1;u>0;u--){const g=Math.floor(Math.random()*(u+1));[s[u],s[g]]=[s[g],s[u]]}return s},[e.items]).filter(s=>!n.includes(s)),a=s=>{t([...n,s])},l=s=>{const u=[...n];u.splice(s,1),t(u)};return p.jsxs("div",{className:"question-container",children:[p.jsx(ti,{content:e.content}),p.jsx("p",{className:"sort-instruction",children:"请点击选项按正确顺序排列："}),p.jsxs("div",{className:"sort-container",children:[p.jsxs("div",{className:"available-options",children:[p.jsx("h4",{children:"可用选项："}),p.jsx("div",{className:"options",children:o.map(s=>p.jsx("button",{className:"option",onClick:()=>a(s),children:s},s))})]}),p.jsxs("div",{className:"sorted-queue",children:[p.jsx("h4",{children:"已排序队列："}),p.jsx("div",{className:"queue",children:n.map((s,u)=>{const g=i&&e.answer[u]===s,m=i&&!g;return p.jsxs("div",{className:`queue-item ${g?"correct":""} ${m?"wrong":""}`,children:[p.jsxs("span",{children:[u+1,". ",s]}),p.jsx("button",{onClick:()=>l(u),children:"移除"})]},u)})})]})]})]})},Zp=({question:e,userAnswer:n,onAnswerChange:t,showExplanation:i})=>{const r=g=>{t([g])},o=e.answer[0],a=n.includes("true"),l=n.includes("false"),s=o==="true",u=o==="false";return p.jsxs("div",{className:"question-container",children:[p.jsx(ti,{content:e.content}),p.jsxs("div",{className:"options",children:[p.jsxs("button",{className:`option ${a?"selected":""} ${i&&s?"correct":""} ${i&&a&&!s?"wrong":""}`,onClick:()=>r("true"),children:[p.jsx("span",{className:"option-id",children:"A"}),p.jsx("span",{className:"option-text",children:"True"})]}),p.jsxs("button",{className:`option ${l?"selected":""} ${i&&u?"correct":""} ${i&&l&&!u?"wrong":""}`,onClick:()=>r("false"),children:[p.jsx("span",{className:"option-id",children:"B"}),p.jsx("span",{className:"option-text",children:"False"})]})]})]})},bp=({question:e,userAnswer:n,onAnswerChange:t,mode:i,currentIndex:r,totalQuestions:o,correctCount:a,correctRate:l,showExplanation:s,remainingSeconds:u})=>{const g=typeof u=="number"&&u<=60,m=()=>{switch(e.type){case"single":return p.jsx(Xp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"multiple":return p.jsx(qp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"sort":return p.jsx(Yp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});case"truefalse":return p.jsx(Zp,{question:e,userAnswer:n,onAnswerChange:t,showExplanation:s});default:return p.jsx("div",{children:"Unsupported question type"})}};return p.jsxs("div",{className:"quiz-card",children:[i==="practice"&&p.jsxs("div",{className:"progress-display",children:[p.jsxs("div",{children:["Progress: Question ",r+1," / ",o]}),p.jsxs("div",{children:["Correct: ",a," (",(l*100).toFixed(1),"%)"]})]}),i==="simulation"&&p.jsxs("div",{className:"progress-display",children:[p.jsxs("div",{children:["Progress: Question ",r+1," / ",o]}),typeof u=="number"&&p.jsxs("div",{className:`countdown${g?" countdown-low":""}`,children:["剩余时间: ",$p(u)]})]}),m(),i==="practice"&&p.jsx(Jp,{question:e,isVisible:s})]})};function ef(e){const[n,t]=N.useState([]),[i,r]=N.useState(!1);return N.useEffect(()=>{t([]),r(!1)},[e]),{userAnswer:n,setUserAnswer:t,showExplanation:i,revealExplanation:()=>r(!0)}}function nf(e,n){const t=new Set;for(;t.size<n&&t.size<e.length;)t.add(Math.floor(Math.random()*e.length));return Array.from(t).map(i=>e[i])}function tf(e){const n=N.useMemo(()=>{const a=[...e];for(let l=a.length-1;l>0;l--){const s=Math.floor(Math.random()*(l+1));[a[l],a[s]]=[a[s],a[l]]}return a},[e]),[t,i]=N.useState(0);return N.useEffect(()=>{i(0)},[n.length]),{shuffledQuestions:n,currentIndex:t,skipQuestion:()=>{t<n.length-1&&i(t+1)},jumpToQuestion:a=>{a>=0&&a<n.length&&i(a)}}}function rf(e,n){const t=e.answer;switch(e.type){case"single":case"multiple":case"truefalse":if(n.length!==t.length)return!1;const i=new Set(n),r=new Set(t);return i.size===r.size&&[...i].every(o=>r.has(o));case"sort":return n.length===t.length&&n.every((o,a)=>o===t[a]);default:return!1}}function of(){const[e,n]=N.useState([]),t=N.useCallback((l,s)=>{const u=rf(l,s),g={question:l,userAnswer:s,isCorrect:u};n(m=>[...m,g])},[]),i=N.useCallback(()=>{n([])},[]),r=e.length,o=e.filter(l=>l.isCorrect).length,a=r>0?o/r:0;return{records:e,submitAnswer:t,correctRate:a,totalAnswered:r,correctCount:o,reset:i}}const af=30,lf=60*60,Xl=uc;function sf(){const[e,n]=N.useState("mode-select"),[t,i]=N.useState(null),[r,o]=N.useState([]),{shuffledQuestions:a,currentIndex:l,skipQuestion:s,jumpToQuestion:u}=tf(r),{records:g,submitAnswer:m,correctRate:A,correctCount:S,reset:v}=of(),{saveSession:x}=sc(),T=a[l],d=a.length,c=()=>{t&&g.length>0&&x({mode:t,correctRate:A,totalQuestions:d,correctCount:S,records:g}),n("result")},f=(ke,me=[])=>{const Ze=me.length>0?Xl.filter(I=>me.includes(I.type)):Xl;i(ke),o(ke==="simulation"?nf(Ze,af):Ze),n("quiz")},y=()=>{l<d-1?s():c()},C=ke=>{T&&m(T,ke)},D=()=>{T&&(m(T,[]),y())},w=()=>{i(null),o([]),v()},P=()=>{w(),n("mode-select")},U=()=>{w(),n("mode-select")},L=()=>{const ke=g.filter(me=>!me.isCorrect).map(me=>me.question);if(ke.length===0){alert("没有错题！");return}v(),o(ke),n("quiz")},ge=ke=>{const me=a.findIndex(Ze=>Ze.id===ke);me!==-1&&(u(me),n("quiz"))},vn=Hp(lf,e==="quiz"&&t==="simulation",c);return{screen:e,mode:t,currentQuestion:T,currentIndex:l,totalQuestions:d,records:g,correctCount:S,correctRate:A,remainingSeconds:t==="simulation"?vn:null,goToHistory:()=>n("history"),closeHistory:()=>n("mode-select"),startMode:f,submitAnswer:C,skipCurrent:D,advanceOrFinish:y,finishQuiz:c,closeToMenu:P,restartAll:U,restartWrong:L,reviewQuestion:ge}}function uf(){var t;const e=sf(),n=ef((t=e.currentQuestion)==null?void 0:t.id);if(e.screen==="mode-select")return p.jsx(Kp,{onModeSelect:e.startMode});if(e.screen==="history")return p.jsx(_p,{onClose:e.closeHistory});if(e.screen==="quiz"&&e.currentQuestion){const i=()=>{e.submitAnswer(n.userAnswer),n.revealExplanation()},r=()=>{window.confirm("确定要关闭当前练习吗？进度将会丢失。")&&e.closeToMenu()};return p.jsxs("div",{className:"app",children:[p.jsx(bp,{question:e.currentQuestion,userAnswer:n.userAnswer,onAnswerChange:n.setUserAnswer,mode:e.mode,currentIndex:e.currentIndex,totalQuestions:e.totalQuestions,correctCount:e.correctCount,correctRate:e.correctRate,showExplanation:n.showExplanation,remainingSeconds:e.remainingSeconds}),p.jsxs("div",{className:"controls",children:[!n.showExplanation&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:e.skipCurrent,children:"跳过"}),p.jsx("button",{onClick:i,disabled:n.userAnswer.length===0,children:"提交"})]}),n.showExplanation&&p.jsx("button",{onClick:e.advanceOrFinish,children:"下一题"}),p.jsx("button",{className:"close-button",onClick:r,children:"关闭"}),e.mode==="practice"&&p.jsx("button",{onClick:e.finishQuiz,children:"结束练习"})]})]})}return p.jsx(Gp,{totalQuestions:e.totalQuestions,correctCount:e.correctCount,correctRate:e.correctRate,records:e.records,mode:e.mode,onRestartAll:e.restartAll,onRestartWrong:e.restartWrong,onViewHistory:e.goToHistory,onReviewQuestion:e.reviewQuestion})}Yr.createRoot(document.getElementById("root")).render(p.jsx(Xo.StrictMode,{children:p.jsx(uf,{})}));
